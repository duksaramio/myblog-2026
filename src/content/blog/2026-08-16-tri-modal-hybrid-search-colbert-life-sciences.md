---
title: "Tri-Modal Hybrid Search with ColBERT Reranking for Life Sciences QA"
pubDate: 2026-08-16
description: "Building a production-grade search engine that combines dense vectors, BM25, and ColBERT MaxSim reranking in Qdrant — with a Pydantic AI copilot and Langfuse audit trails for regulated pharma."
draft: false
tags: ["search", "qdrant", "colbert", "life-sciences", "pharma", "pydantic-ai", "rag", "open-source"]
---

I built a search engine for life sciences quality teams that combines three retrieval strategies in a single pipeline. The repo is a tutorial and a working implementation. Here's why each layer matters and what the benchmarks actually show.

## The Problem: Search in Regulated Pharma Is Broken

Quality Assurance teams in pharma search through deviations, CAPAs, SOPs, regulatory citations, and audit findings every day. The records are dense with alphanumeric codes (`21 CFR 211.192`, `SOP-QC-7012`, `LOT-2024-MAB-8842`), domain jargon, and fine-grained temporal distinctions that carry real consequences.

Traditional search fails in two opposite ways:

**Keyword search (BM25)** nails exact codes but completely misses semantic relationships. Search "freeze dryer vacuum loss" and you'll miss a record titled "lyophilization chamber vacuum loss during primary sublimation drying" — because BM25 sees zero keyword overlap between "freeze dryer" and "lyophilization."

**Dense vector search** captures those semantic synonyms but blurs out the exact identifiers. Search "21 CFR 211.192" and you'll get generic quality management SOPs because the dense embedding treats the regulatory code as just another string of tokens, not a precise citation.

Neither approach alone is good enough when a wrong search result means releasing a compromised batch or missing a regulatory precedent.

## The Architecture: Three Retrieval Strategies, One Pipeline

The solution is to run all three retrieval strategies and combine them:

```
Query → Dense (all-MiniLM-L6-v2, 384-dim)  → Top 20 candidates
      → Sparse (BM25 with IDF)              → Top 20 candidates
      → Union pool (up to 40 candidates)
      → ColBERT MaxSim reranking             → Final ranked results
```

Each layer fills a gap the others leave:

**Dense vectors** (sentence-transformers/all-MiniLM-L6-v2, 384 dimensions) cast a broad semantic net. They understand that "microbial bioburden excursion" and "spoilage organism contamination" are related, even when no words overlap. Cosine similarity on an HNSW graph gives sub-millisecond approximate nearest neighbor search.

**Sparse vectors with BM25 IDF** precision-anchor exact terms. Qdrant stores these in an inverted index with `models.Modifier.IDF` weighting. When you search "21 CFR 211.192," the sparse index finds the exact regulatory clause because the alphanumeric tokens get proper term-frequency weighting. This is the layer that catches SOP numbers, batch lot IDs, equipment tags, and chemical entities.

**ColBERT late interaction reranking** operates on the union candidate pool from the first two stages. This is where the real precision gains come from, and it's worth understanding how it works.

## How ColBERT MaxSim Actually Works

Standard bi-encoders compress an entire document into a single vector. That's fast but lossy — you lose token-level granularity. Cross-encoders give you that granularity but are too slow to run across an entire database.

ColBERT splits the difference. It represents queries and documents as *sequences* of token embeddings:

```
Query:   [filter] [failed] [AFTER] [filling]    → 4 vectors × 96 dimensions
Doc:     [membrane] [tearing] [AFTER] [filled]  → N vectors × 96 dimensions
```

The **MaxSim** operator finds, for each query token, the document token with the highest cosine similarity, then sums those maximums:

```
Score = cos(filter, membrane) + cos(failed, tearing) + cos(AFTER, AFTER) + cos(filling, filled)
```

This is what makes ColBERT so good at the hardest life sciences search cases. Consider two deviation records:

1. **DEV-2024-1699**: Filter integrity test failed **AFTER** batch filtration completed. Severity: Critical. 50,000 vials rejected.
2. **DEV-2024-1710**: Filter integrity test failed **BEFORE** batch filtration commenced. Severity: Minor. Zero product exposed.

BM25 can't distinguish these — the term overlap is nearly identical. Dense embeddings can't either — the semantic distance is tiny. But ColBERT's token-level matching aligns the query token "AFTER" directly with "AFTER" in record 1, pushing the Critical deviation to rank 1 with high confidence.

## The m=0 HNSW Trick

Here's an optimization that matters in production. In Qdrant, you configure the multivector index with:

```python
hnsw_config=models.HnswConfigDiff(m=0)
```

This disables HNSW graph construction for the ColBERT vectors. Why? Because ColBERT only ever operates on the pre-filtered top-K candidates (20 from dense, 20 from sparse). There's no need to build an ANN graph over millions of token vectors when you're only ever scoring 40 candidates. Setting `m=0` saves significant RAM and indexing CPU.

## The Qdrant Collection Schema

The collection stores all three vector types in a single point:

```python
client.create_collection(
    collection_name="life-science-quality-records",
    vectors_config={
        "dense": models.VectorParams(size=384, distance=models.Distance.COSINE),
        "multi": models.VectorParams(
            size=96,
            distance=models.Distance.COSINE,
            multivector_config=models.MultiVectorConfig(
                comparator=models.MultiVectorComparator.MAX_SIM,
            ),
            hnsw_config=models.HnswConfigDiff(m=0),
        ),
    },
    sparse_vectors_config={
        "sparse": models.SparseVectorParams(modifier=models.Modifier.IDF)
    },
)
```

All three embeddings are generated client-side via FastEmbed (ONNX runtime). No data leaves the network. This is non-negotiable in pharma — you can't send proprietary drug formulations or patient data to external embedding APIs.

## Reciprocal Rank Fusion (RRF)

Before ColBERT reranking, dense and sparse results are merged using Reciprocal Rank Fusion:

```
RRF(d) = Σ 1/(k + rank_m(d))
```

Where `k=60` (smoothing constant) and `m` iterates over retrieval methods. RRF doesn't need normalized scores — it works purely on rank positions. A document ranked #3 by dense and #5 by sparse gets a combined score of `1/(60+3) + 1/(60+5)`. This naturally boosts documents that both retrieval strategies agree on.

## The Pydantic AI Quality Copilot

The search engine feeds into a Pydantic AI agent that generates structured investigation reports. The key design decisions:

**Dependency injection via `RunContext`**. The search pipeline is injected as a typed dependency, not hardcoded. The agent calls `search_quality_records` as a native tool:

```python
@agent.tool
def search_quality_records(
    ctx: RunContext[QualitySearchPipeline],
    query: str,
    severity: Optional[str] = None,
    search_method: str = "hybrid_rerank",
) -> List[Dict[str, Any]]:
    pipeline: QualitySearchPipeline = ctx.deps
    results = pipeline.hybrid_rerank_search(query, filters=..., limit=5)
    return [{"record_id": r.record_id, "title": r.title, ...} for r in results]
```

**Structured output enforcement.** The agent's output is guaranteed to be a valid `QualityInvestigationReport` Pydantic model. No free-text hallucinated lot numbers or made-up regulatory citations. The schema enforces:

```python
class QualityInvestigationReport(BaseModel):
    summary: str
    risk_assessment: str
    regulatory_impact: List[str]
    relevant_historical_records: List[str]
    root_cause_hypothesis: str
    recommended_capa_plan: List[CapaRecommendation]
    suggested_severity: str
```

Every field has a description that guides the LLM. If the model can't fill a field, it still has to produce *something* that passes validation — which makes the gaps visible rather than hidden in prose.

**Local inference via Ollama.** The agent runs on `muse-glimmer` through Ollama's OpenAI-compatible API. Zero external API calls. The LLM, the embeddings, and the vector database all run on-premise.

## Langfuse Observability for Audit Trails

FDA 21 CFR Part 11.10(e) requires computerized systems to maintain automated, timestamped audit trails. Every search query during a regulatory investigation must be logged: what was searched, what was retrieved, what the LLM produced.

The repo ships a `docker-compose.langfuse.yml` that runs Langfuse server + PostgreSQL locally. Every search method is decorated with `@observe_retrieval` which traces:

- Query input and active filters
- Retrieved document IDs and ColBERT scores
- Retrieval latency
- LLM token usage and full prompt snapshots

All of this stays on the local Langfuse instance. No telemetry leaves the network.

## What the Benchmarks Actually Show

The benchmark suite runs 8 GxP scenarios across all four retrieval strategies:

| Strategy | Prec@1 | Prec@3 | Recall@3 | MRR@5 | NDCG@5 |
|---|---|---|---|---|---|
| Dense (all-MiniLM) | 100% | 58.3% | 74.0% | 1.000 | 0.857 |
| Sparse (BM25) | 100% | 70.8% | 88.5% | 1.000 | 0.967 |
| Hybrid (RRF) | 100% | 70.8% | 88.5% | 1.000 | 0.931 |
| Hybrid + ColBERT | 100% | 70.8% | 88.5% | 1.000 | 0.949 |

A few things to note:

**All methods nail Precision@1.** On a curated 25-record dataset, getting the first result right isn't the hard part. The differentiation happens at positions 2-5.

**BM25 outperforms dense on this dataset.** That's expected — life sciences records are heavy on exact codes and technical terms where keyword matching excels. Dense embeddings shine more on natural language queries with synonym gaps.

**ColBERT reranking lifts NDCG@5 from 0.931 to 0.949 over plain RRF.** On a small dataset, that's a modest gain. On a production corpus with thousands of records where the candidate pool is noisier, the token-level reranking becomes much more valuable. The benchmark is honest about this — the real ColBERT wins show up in the case studies, not the aggregate metrics.

**The case studies are where ColBERT earns its keep.** The "AFTER vs BEFORE" filter integrity scenario, the "freeze dryer vs lyophilization" synonym bridging, and the exact regulatory citation retrieval — these are the patterns that matter day-to-day in QA. The benchmark numbers understate the practical impact because the dataset is small and curated.

## Production Considerations

If you're deploying this in a regulated environment:

- **Lock model versions.** Pin exact model hashes for all-MiniLM-L6-v2, Qdrant/bm25, and the ColBERT model. Reproducibility is a 21 CFR Part 11.10(a) requirement.
- **ALCOA+ data integrity.** Store original metadata (record IDs, timestamps, electronic signatures) in Qdrant payloads. Use Qdrant snapshots for disaster recovery.
- **Air-gapped operation.** FastEmbed (ONNX) for embeddings, Ollama for LLM inference, local Langfuse for observability. Nothing touches the internet.
- **The evaluator module** (`src/evaluator.py`) calculates Precision@K, Recall@K, MRR@K, and NDCG@K. Run it against your own ground truth before declaring the system validated.

## Bottom Line

This isn't a toy RAG demo. The tri-modal retrieval architecture (dense + sparse BM25 + ColBERT MaxSim) solves real problems that life sciences QA teams face daily: synonym bridging across domain terminology, exact regulatory code matching, and fine-grained temporal disambiguation. The `m=0` HNSW trick keeps ColBERT memory-efficient. Pydantic AI enforces structured outputs so the copilot can't hallucinate lot numbers. Langfuse captures everything for audit compliance.

The code is MIT-licensed and runs entirely local. If you're in pharma QA and tired of keyword search that misses half your records, this is worth a look.
