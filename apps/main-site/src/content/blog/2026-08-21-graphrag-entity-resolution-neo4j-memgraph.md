---
title: "GraphRAG Is Not a Database Feature — It's an Entity Resolution Problem"
pubDate: 2026-08-21
description: "Everyone's debating Neo4j vs Memgraph for GraphRAG. They're arguing about the wrong layer. The real bottleneck is entity resolution — and most implementations skip it."
draft: false
tags: ["graphrag", "knowledge-graph", "entity-resolution", "neo4j", "memgraph", "ai-agents", "llm", "rag"]
---

Everyone building GraphRAG is arguing about which graph database to use. Neo4j or Memgraph? Cypher or openCypher? Disk-first or in-memory?

They're arguing about the wrong layer.

The database choice matters, but it's not where GraphRAG implementations succeed or fail. They fail at entity resolution. And almost nobody is talking about it.

## The GraphRAG Promise

The pitch is compelling. Vector-only RAG retrieves similar text chunks. GraphRAG retrieves *connected context* — entities, relationships, multi-hop paths. Instead of handing the LLM five disconnected paragraphs about temperature monitoring, you hand it a structured subgraph:

```
Change-123 → AFFECTS → Process-Y → GOVERNED_BY → SOP-123 → HAS_REQUIREMENT → Requirement-87 → VALIDATED_BY → CSV-VAL-042
```

The LLM can reason over that. It can't reason over five chunks that happen to contain the word "temperature."

Microsoft's GraphRAG research backs this up. On complex reasoning queries, graph-augmented retrieval beats vector-only by 10+ points. Neo4j reports that grounding AI in knowledge graphs reduced hallucinations by 44% in a May 2026 IDC study. One life sciences customer went from 20-40% hallucination rates down to 2-5%.

Those numbers are real. But they assume the graph is clean.

## The Dirty Secret

Here's what happens when you build GraphRAG naively:

1. You chunk your documents
2. You run an LLM to extract entities and relationships
3. You store them in a graph database
4. You traverse the graph at query time

Step 2 produces garbage. Not because the LLM is bad at extraction, but because it extracts *surface forms*, not canonical entities.

From three documents about the same system, you get:
- "LabVantage"
- "Lab Vantage"
- "LabVantage LIMS"
- "LabVantage 8.9"
- "LIMS"
- "the LIMS system"

Six nodes. One real-world entity.

Now your graph has six disconnected clusters where it should have one connected one. Your traversals miss relationships because they're attached to the wrong node. Your entity neighborhoods are fragmented. Your community detection produces meaningless clusters.

Research from 2025 found that LLM extraction across document chunks produced 847 entities that should have been 312. Simply applying entity resolution — reducing graph size by ~40% — consistently improved question-answering performance across all GraphRAG variants tested.

Read that again. *Removing nodes improved the graph.* Not because the information was wrong, but because it was duplicated. The graph wasn't too small. It was too fragmented.

## Entity Resolution Is the Actual Hard Part

Most GraphRAG tutorials treat entity resolution as an afterthought. A `MERGE` on name. Maybe a fuzzy match. Done.

That's not entity resolution. That's a string comparison with delusions of grandeur.

Real entity resolution combines five signals:

**Lexical matching** catches the obvious cases. "LabVantage" vs "Lab Vantage" — edit distance, normalization, lowercase comparison. This handles maybe 30% of duplicates.

**Embedding similarity** catches semantic equivalents. "quality management platform" and "QMS" are the same thing. Cosine similarity on sentence embeddings with a threshold around 0.88-0.92. This gets you another 20-30%.

**Attribute matching** uses structured properties. Two entities with the same vendor, same system type, same deployment site — probably the same system even if the names differ.

**Graph topology** is the one most people miss entirely. If Entity A connects to CAPA-123, Deviation-456, and Training-789, and Entity B connects to the exact same three neighbors, they're the same entity. Jaccard similarity over shared neighborhoods. This catches cases where two nodes have completely different names but identical structural positions.

**LLM reasoning** handles the ambiguous cases. Present the candidate pair, their properties, their neighbors, and ask: "Are these the same entity?" Chain-of-Thought or DSPy-guided reasoning. Not for every pair — only for the ones the other signals couldn't resolve.

The pipeline looks like:

```
Candidate generation (blocking)
    → Lexical + embedding filtering
    → Attribute + graph topology scoring
    → LLM adjudication (ambiguous cases only)
    → Merge or link with SAME_AS edges
    → Validate against ontology
```

This is what Splink was built for. This is what Senzing does. This is what most GraphRAG implementations skip entirely.

## Neo4j vs. Memgraph: The Actual Trade-Offs

Now we can talk about the database. But the framing matters.

Neo4j and Memgraph both speak Cypher. Both support property graphs. Both have vector indexes. The architectural difference is disk-first vs. in-memory-first, and it has real implications.

**Neo4j** is the mature choice. Java/JVM, disk-based with page cache, the largest ecosystem in graph space. Its GDS library has 65+ algorithms — community detection, node similarity, FastRP embeddings, link prediction. Its LLM Knowledge Graph Builder automates text-to-graph pipelines. Its Adaptive GraphRAG framework detects entity drift and semantic contradictions across ingestion cycles. If you need to store billions of nodes, federate across multiple graph instances, or run complex analytical algorithms, Neo4j is the answer.

**Memgraph** is the fast choice. C++, in-memory with WAL persistence, sub-millisecond traversals. Its killer feature is atomic GraphRAG — search, expansion, ranking, and prompt assembly as a single Cypher query. No multi-system orchestration. No Python pipeline to debug. One query, one result. It natively integrates with Kafka for streaming ingestion, making it ideal for real-time knowledge graphs that update continuously. NASA switched from Neo4j to Memgraph after 10 years, citing cost and the fact that Cypher compatibility made migration painless.

The performance gap is real. Memgraph's benchmarks show up to 41x lower latency and 2-5x higher throughput currently, with historical benchmarks showing ~120x on mixed workloads. In-memory C++ vs. JVM with disk I/O is not a marginal difference — it's architectural.

But performance isn't everything. Neo4j's ecosystem is deeper. Its community is larger. Its enterprise tooling is more mature. If you're building a knowledge graph that needs to hold your entire enterprise's regulatory history — every SOP, every deviation, every CAPA, every validation record — and you want to run graph algorithms over it, Neo4j's scale and GDS library are hard to beat.

The real question isn't "which is faster." It's "what is the workload?"

## Where This Gets Interesting for Regulated AI

In regulated environments — pharma, medical devices, any GxP context — the graph isn't just a retrieval substrate. It's an audit trail.

Every relationship in the graph should carry metadata:
- Who asserted it (Part 11 electronic signature)
- When they asserted it (timestamp, time-synchronized)
- What version of the source document supports it
- What the previous version was
- Why it changed (change control reference)

The relationship itself is auditable. When an inspector asks "show me the validation evidence for System X," the response is a graph traversal that returns nodes with full provenance — not a PDF search that returns "probably relevant" documents.

This is where entity resolution becomes critical in a way that generic RAG implementations don't appreciate. Merging two deviation records incorrectly isn't just a retrieval quality problem. It's a compliance problem. The audit trail is now wrong. The provenance chain is broken. An inspector looking at the merged record sees evidence from two different events attributed to one.

So entity resolution in GxP can't be "LLM says they're the same, merge them." It needs:
- Confidence scoring with explicit thresholds
- Human-in-the-loop review for ambiguous cases
- SAME_AS edges (not destructive merges) that preserve the original records
- Temporal tracking for supersession
- Full provenance on every resolution decision

## The Architecture Nobody's Building

Here's what I think the right architecture looks like:

**Layer 1: Entity Resolution Engine.** Runs at ingestion time. Combines lexical, embedding, attribute, graph topology, and LLM signals. Produces canonical entity IDs with confidence scores. Ambiguous cases go to human review. This is the Splink/Senzing layer, integrated with the graph.

**Layer 2: Knowledge Graph.** Stores canonical entities, typed relationships, provenance metadata, temporal state, and evidence chains. Neo4j for enterprise-scale analytical workloads. Memgraph for real-time agent-facing traversals. Both if you can afford it.

**Layer 3: Hybrid Retrieval.** Vector search for semantic entry points. Graph traversal for structural context. Community summaries for global queries. Parameterized Cypher templates for regulated environments — not Text2Cypher where the LLM improvises queries at runtime.

**Layer 4: AI Agents.** They traverse the graph. They don't modify it. They use pre-written, version-controlled Cypher templates. Novel traversals are change-control tickets, not runtime improvisations.

The graph is the system of record. The LLM is the interpreter sitting on top of it.

## The Bottom Line

Graph databases are infrastructure. GraphRAG is an application pattern. Entity resolution is the prerequisite that makes both of them actually work.

If you skip entity resolution, you don't get GraphRAG. You get traversable hallucination — a graph that confidently connects the wrong things.

The database choice (Neo4j vs. Memgraph) is a real engineering decision with real trade-offs. But it's not the decision that determines whether your GraphRAG implementation produces accurate, auditable, trustworthy outputs.

That decision is whether you invest in entity resolution before you invest in anything else.
