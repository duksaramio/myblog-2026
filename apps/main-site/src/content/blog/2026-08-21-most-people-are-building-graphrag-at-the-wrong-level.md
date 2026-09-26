---
title: "Most People Are Building GraphRAG at the Wrong Level"
pubDate: 2026-08-21
description: "There's a hierarchy of GraphRAG sophistication. Microsoft's paper made Level 3 famous. But for most production use cases, Level 1 or 2 is the sweet spot."
draft: false
tags: ["graphrag", "knowledge-graph", "rag", "neo4j", "memgraph", "llm", "ai-agents", "architecture"]
---

Everyone building GraphRAG starts with the same Google search and ends up at the same Microsoft paper. Then they spend three weeks building community detection pipelines, generating hierarchical summaries, and burning through API credits — only to discover that their actual queries don't need any of it.

There's a hierarchy of GraphRAG sophistication. Most people jump straight to the top because that's what the famous paper describes. They're building at Level 3 when their problem is a Level 1.

## The Levels

Think of GraphRAG as a spectrum, not a binary.

**Level 0 — Vector RAG.** Chunk, embed, retrieve top-K similar chunks, feed to LLM. No graph. This is what Qdrant, Pinecone, and Weaviate do out of the box. It works shockingly well for simple factual questions. "What does SOP-123 say about temperature monitoring?" — vector search finds the chunk, LLM answers. Done.

It breaks down when the answer requires connecting information across chunks. "Which systems are governed by SOPs that reference Part 11?" requires traversing relationships that don't exist in any single chunk.

**Level 1 — Graph-Enhanced RAG.** You keep your vector search but add graph traversal alongside it. Vector search finds the entry point ("SOP-123"), then the graph expands outward — to requirements, systems, validations, deviations. You get structured context that a pure vector search would miss.

This is what Neo4j's hybrid retriever does. It's also the most practical level for production systems because you can bolt it onto an existing vector pipeline without rebuilding everything.

**Level 2 — Knowledge Graph RAG.** Now the graph itself becomes the primary knowledge representation. You run an LLM over your documents to extract entities and relationships, build a proper knowledge graph, and query it with Cypher. Instead of searching for text that mentions "LabVantage," you have a canonical `:System` node with typed relationships to requirements, validations, and deviations.

This is where LlamaIndex's PropertyGraphIndex and Neo4j's LLM Graph Builder live. It's more expensive to build than Level 1, but the graph is richer and the queries are more precise.

**Level 3 — Microsoft-Style GraphRAG.** This is the famous one. On top of the knowledge graph, you add hierarchical community detection (Leiden algorithm) and LLM-generated community summaries at multiple levels of abstraction. A local community might summarize "John and Jane form the GraphRAG team at Microsoft." A higher-level community might summarize "Microsoft's AI research division contains teams working on GraphRAG, Copilot, and Azure AI."

This enables a query type that lower levels can't handle: global/corpus-wide questions. "What are the main themes across all 500 deviation investigations?" The community summaries let the LLM see the whole forest, not just individual trees.

**Level 4 — Agentic GraphRAG.** Instead of hardcoding one retrieval strategy, you let an AI agent decide. The agent sees the question, evaluates whether it needs vector search, graph traversal, community summaries, SQL queries, or some combination, and routes accordingly. Memgraph is explicitly positioning this architecture — an agent that selects between Text2Cypher, local graph expansion, and query-focused summarization based on the question.

## The Cost Curve

Here's what the hierarchy looks like in terms of actual money:

| Level | Indexing Cost (1000 docs) | Query Latency | Implementation Time |
|-------|--------------------------|---------------|-------------------|
| 0 — Vector RAG | Pennies | <100ms | Hours |
| 1 — Graph-Enhanced | Low (adds traversal to existing vectors) | 100-500ms | Days |
| 2 — Knowledge Graph | Medium (LLM extraction) | 100ms-2s | Weeks |
| 3 — Microsoft GraphRAG | High ($50-500+ with GPT-4o) | 2-10s (map-reduce) | Weeks |
| 4 — Agentic | Varies (depends on routing complexity) | Variable | Months |

That Level 3 cost number is real. Microsoft's reference implementation makes LLM calls for every chunk to extract entities, then LLM calls for every community to generate summaries. For a moderate corpus, you're looking at thousands of API calls before you can ask a single question.

LazyGraphRAG (Microsoft's own cost-optimized variant) addresses this by deferring summarization to query time. It cuts indexing costs to ~0.1% of full GraphRAG while matching quality on local queries and achieving 700x lower cost for global queries. That's Microsoft admitting the original approach was too expensive.

LightRAG takes it further — it skips community detection entirely and uses dual-level retrieval (entity-level + relationship-level) without the heavy Leiden clustering. It's roughly 70-90% of full GraphRAG's quality at a fraction of the cost. For most production use cases, that quality gap doesn't matter.

## The Benchmarks Nobody Quotes Properly

Every GraphRAG pitch deck shows the same numbers. "72-83% comprehensiveness improvement!" "31-point gain on MuSiQue!" Those numbers are real — but they're measuring the exact query types GraphRAG was designed for: multi-hop reasoning and global summarization.

Here's what they don't lead with:

**Single-fact lookup: plain RAG wins.** A controlled head-to-head from Michigan State and Meta (2025) found that for simple factual questions, plain vector RAG scored F1 64.8 vs. GraphRAG's 63.0. The graph structure was overhead the query didn't need.

**GraphRAG-Bench (ICLR 2026) confirmed this pattern.** Simple fact retrieval was a tie (60.9 vs 60.1). Complex reasoning gave graph a +10 point edge (53.4 vs 42.9). Contextual summarization gave graph a +13 point edge (64.4 vs 51.3).

**The evaluation itself is suspect.** LLM-as-judge bias can swing win-rates by more than 30 points depending on answer ordering, length, and position. One reported 66.7% win rate dropped to ~39% after bias correction.

The honest picture: GraphRAG wins on complex, multi-hop, global-to-local synthesis queries. It provides little advantage for single-fact lookup where naive RAG remains competitive. If your workload is 80% simple Q&A and 20% complex reasoning, you're paying Level 3 costs for a Level 0 problem.

## The Ecosystem (What's Actually Out There)

The GraphRAG landscape has four layers, and conflating them is the source of most confusion.

**Layer 1: The Frameworks**

Microsoft GraphRAG is the reference implementation — the thing everyone reads first. LightRAG (HKU, ~29k GitHub stars) is the pragmatic alternative that strips the pipeline to essentials. HippoRAG (Ohio State) uses Personalized PageRank instead of community detection, inspired by how human memory actually works. fast-graphrag (circlemind) is the lean, hackable baseline.

Newer entrants from 2025-2026 include CatRAG (query-aware traversal instead of fixed transition probabilities), ParallaxRAG (optimized for 4+ hop reasoning), Deep GraphRAG (RL-based dynamic reward weighting that achieves near frontier-model performance with small models), and TrustGraph's OntologyRAG (extraction guided by domain ontology — relevant for regulated environments).

**Layer 2: The Graph Databases**

Neo4j is the market leader with the deepest ecosystem — GDS library with 65+ algorithms, official neo4j-graphrag Python package, LangChain partner integration. It's the safe enterprise default.

Memgraph is the performance play — in-memory C++, sub-millisecond traversals, atomic GraphRAG where the entire retrieval pipeline (search, expansion, ranking, prompt assembly) runs as a single Cypher query. NASA switched from Neo4j to Memgraph after 10 years. Memgraph's benchmarks claim up to 41x lower latency.

FalkorDB (the RedisGraph successor) uses GraphBLAS sparse matrices for ultra-low latency. ArcadeDB is the multi-model option with the most permissive license (Apache 2.0). Amazon Neptune Analytics is the managed option if you're AWS-native.

**Layer 3: The Orchestration**

LlamaIndex is the fastest prototyping path — PropertyGraphIndex with 10+ graph store backends, working in under 50 lines of code. LangChain provides GraphCypherQAChain for Text-to-Cypher patterns. Neither is a GraphRAG engine — they're wrappers around whichever engine you choose.

**Layer 4: The Memory Layer**

Graphiti (Zep) is the interesting outlier. It's not document GraphRAG at all — it's temporal knowledge graph infrastructure for agent memory. Every edge carries a validity interval so the graph handles superseded facts correctly. If you're building agent memory rather than document retrieval, this is the right tool. If you're indexing SOPs and CAPAs, it's not.

## The Question Everyone Asks

"Does GraphRAG replace Neo4j?"

No. And the relationship is the opposite of replacement.

GraphRAG is a retrieval pattern. Neo4j is a storage engine. Saying "GraphRAG replaces Neo4j" is like saying "microservices replace PostgreSQL." The pattern runs on top of the infrastructure.

Microsoft's reference implementation uses NetworkX and Parquet files — which works fine for a few thousand documents in a research context. But if you try to run a 100,000-document enterprise corpus in-memory on NetworkX, your server will crash. Production GraphRAG needs persistent storage, concurrent access, real-time updates, and sub-second traversals. That's a graph database.

The dominant enterprise pattern is: extract entities/relationships via LLM, store in Neo4j or Memgraph, create vector index on embeddings, run hybrid retriever at query time. GraphRAG increases demand for graph databases rather than replacing them.

## What Nobody Talks About

The hardest part of GraphRAG isn't the architecture or the database. It's the stuff that happens before retrieval:

**Entity resolution.** LLMs extract surface forms, not canonical entities. "LabVantage," "Lab Vantage," "LabVantage LIMS," "the LIMS system" — four nodes, one real-world entity. Research from 2025 found that LLM extraction produced 847 entities that should have been 312. Simply applying entity resolution — reducing graph size by ~40% — consistently improved performance. Removing nodes improved the graph.

**Extraction quality.** LLMs miss entities, mislabel relationships, and hallucinate connections. Schema-guided extraction helps. Human-in-the-loop validation helps more. But most tutorials skip this entirely and show you the happy path.

**Maintenance.** Adding a new document to a GraphRAG index isn't like adding a chunk to a vector store. You have to extract new entities, merge them into the existing graph, resolve duplicates, and potentially re-detect communities. DRIFT (Microsoft's incremental mode) and LightRAG's incremental updates address this, but it's still an order of magnitude harder than vector store updates.

**Change control.** In regulated environments, every LLM-generated community summary is effectively a new "controlled document." Every re-summarization produces a new version. If you're in GxP, that's an audit surface most implementations haven't thought about.

## The Architecture I'd Actually Build

Given everything above, here's what the stack looks like for a production system:

**For most enterprise Q&A (Level 1-2):** Vector search for semantic entry points. Graph traversal for structural context. Neo4j or Memgraph as the graph store. LlamaIndex or custom orchestration. No community detection. No hierarchical summaries. The graph provides the multi-hop context; the vector search provides the semantic entry points. Done.

**For corpus-wide thematic analysis (Level 3):** Add Microsoft-style community detection and summaries — but only for the specific use cases that need it. Route simple queries to vector-only or graph-only paths. Use LazyGraphRAG's deferred summarization to avoid paying for summaries you never query. Treat the community summaries as controlled documents with versioning.

**For agent-based systems (Level 4):** Let the agent decide. Use Memgraph's architecture or build a custom routing layer. The agent picks vector search, graph traversal, community summaries, or SQL based on the question. This is the future, but it's also the most complex to build and evaluate.

## The Bottom Line

GraphRAG isn't one thing. It's a hierarchy. The right level depends on your queries, not on what Microsoft's paper describes.

If your queries are mostly simple factual lookups, Level 0 (vector RAG) is the answer. If you need multi-hop relationship traversal, Level 1-2 gets you 80% of the benefit at 20% of the cost. If you genuinely need corpus-wide thematic analysis, Level 3 earns its complexity. If you're building an agent that needs to reason over multiple data sources dynamically, Level 4 is where you're headed — but you're building infrastructure, not just a pipeline.

The database choice (Neo4j vs. Memgraph vs. FalkorDB) is a real engineering decision. But it's downstream of the more important decision: which level of the hierarchy does your problem actually require?

Most people are building at Level 3 because that's what the famous paper describes. Their problem is a Level 1.
