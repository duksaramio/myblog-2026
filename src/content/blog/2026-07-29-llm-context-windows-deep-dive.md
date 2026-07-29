---
title: "Context Windows: Why Your 1M-Token Model Only Uses 200K of Them"
pubDate: 2026-07-29
description: "The context window went from 2K to 10M tokens in five years. The math, the engineering breakthroughs, and the dirty secret nobody puts on the spec sheet — your model can see 1M tokens, but it can't actually use them all."
draft: false
tags: ["ai", "llm", "context-window", "attention", "rag", "transformers", "agent-architecture"]
audioUrl: ""
---

The context window went from 2,048 tokens on GPT-3 to 10 million tokens on Llama 4 Scout in five years. That's a 5,000× jump. Frontier models now advertise windows that can hold entire codebases, multi-volume books, or hours of audio and video in a single prompt.

The dirty secret nobody puts on the spec sheet: **advertised context and effective context are not the same number.** A 1M-token model often becomes unreliable around 200K–600K tokens. Knowing the difference is the gap between a working production system and a system that silently misses critical information.

Here's how context windows actually work, what changed to make them big, and what to do about the gap.

---

## What a context window actually is

It's the maximum number of tokens an LLM can process in a single forward pass — input plus output combined. Everything has to fit: system prompt, developer instructions, conversation history, retrieved documents, tool definitions and outputs, multimodal attachments, the current user message, and the model's own generated response.

It is **not** model memory. It is **not** training data. It is **not** long-term knowledge. It is the **active KV cache** — a GPU-resident structure storing key/value projections for every token currently in play. Once a token falls outside this window, the model literally does not know it exists for that generation step.

Three concepts worth holding onto:

- **Context window** — how much the model can *see*.
- **Attention span** — how much of that seen text it can actually *use*.
- **Mathematical boundary** — the hard ceiling imposed by compute and VRAM.

The window says you can look at it. The span says you understood it. The boundary says the GPU can afford it.

---

## Tokens, not words

The window is measured in tokens, not characters or words. Roughly:

- ~0.75 words per token in English
- ~4 characters per token
- 1,000 tokens ≈ 750 words ≈ 1–2 pages
- A dense 500-page book is ~150–200K tokens
- *War and Peace* is ~750K tokens

Programming code, legal text, tables, JSON, and XML all produce **more tokens per word** than prose. One hour of video is ~500K tokens when fed through a multimodal encoder.

### Everything counts toward the budget

Most people think only the user prompt consumes context. It doesn't. The full budget includes:

```
+--------------------------------------------------+
| System Prompt                                    |
+--------------------------------------------------+
| Developer / System Instructions                  |
+--------------------------------------------------+
| Conversation History                             |
+--------------------------------------------------+
| Retrieved RAG Documents                          |
+--------------------------------------------------+
| Tool Definitions + Tool Outputs                  |
+--------------------------------------------------+
| Multimodal Attachments                           |
+--------------------------------------------------+
| Current User Prompt                              |
+--------------------------------------------------+
| Reserved Output Budget                           |
+--------------------------------------------------+
```

Output budgets are usually much smaller than input budgets — a model with 1M input may cap generation at 128K.

---

## The bottleneck: O(n²) and the KV cache

Modern LLMs are transformer-based. For every token, the model computes three vectors — **Query (Q), Key (K), Value (V)** — then runs:

$$\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V$$

This produces an n × n attention matrix relating every token to every other token. **Doubling context length quadruples attention compute.**

There's a second, more practical constraint: the **KV cache**. To avoid recomputing prior token representations during generation, the model caches Keys and Values for everything it's seen:

$$\text{KV Cache} \approx 2 \times \text{layers} \times \text{num\_kv\_heads} \times \text{head\_dim} \times \text{seq\_len} \times \text{bytes\_per\_param}$$

Concrete sizing: a 70B model at 128K context in FP16 needs **~40–80 GB KV cache per user**. This is why long context is expensive to serve even after you've solved the training problem. The KV cache is the real resource constraint, not the abstract window concept.

---

## How we got from 4K to 10M: the engineering breakthroughs

The jump wasn't just bigger GPUs. It was three orthogonal innovations stacked on top of each other.

### 1. Positional encoding that could extrapolate

Transformers process tokens in parallel; they need explicit positional information. Early absolute-position embeddings were hard-limited — show position 2048 to a model trained on 0–2047 and it breaks.

**RoPE (Rotary Position Embeddings)** encodes position by rotating token embeddings in complex space:

$$q_m = R_m W_q x_m$$

The relative distance between tokens falls out naturally from the dot product $q_m^\top k_n$. Elegant, but trained on distances up to, say, 4K — extrapolate to 100K and the rotations spin too fast, representations collapse.

The fix is the **RoPE scaling family**:

- **Positional Interpolation (PI):** divide all positions by the scale factor. Simple, blurs resolution.
- **NTK-aware scaling:** scales low frequencies (long-range) aggressively, leaves high frequencies (local detail) alone.
- **YaRN:** fine-tunes attention weights over squashed frequency bands. This is how Llama 2 4K was extended to 128K with only a bit of fine-tuning.
- **LongRoPE / PoSE:** train with simulated long positions by skipping around inside the window.

### 2. Attention engineering (no math change, massive speedup)

**FlashAttention (v1 → v3)** doesn't change the math — it still computes *exact* attention. It just rewrites memory access to be IO-aware, tiling computation so the full n × n matrix never materializes in HBM. Working data stays in fast on-chip SRAM. Cuts memory reads/writes from O(N²) to linear memory traffic. Long context 2–4× faster; FlashAttention-3 reportedly reaches ~1.3 PFLOPs/s on H100.

**Grouped-Query Attention (GQA)** shares KV heads across query groups, slashing KV cache by 4–8×. Multi-Head Latent Attention (MLA) compresses KV into a latent space for even more aggressive reduction.

**PagedAttention (vLLM)** treats KV cache like virtual memory pages — non-contiguous allocation, sharing across requests, near-zero fragmentation.

**Ring Attention / blockwise parallel attention** distributes a long sequence across many GPUs in a ring. Each GPU holds a segment, KV chunks pass around the ring, attention computation overlaps with communication. Sequence capacity scales **linearly with GPU count**.

**Sliding window attention** (Mistral, Mixtral) restricts each token to a fixed neighborhood — O(n) instead of O(n²). Information still propagates across the whole window via stacked layers, like a large receptive field in CNNs.

**KV cache quantization** drops cached values to INT8/INT4 — 2–4× memory reduction. StreamingLLM uses "attention sinks" at the start of the prompt to absorb excess attention and allow infinite streaming.

### 3. Alternative architectures

**State-space models (Mamba, RWKV, RetNet)** bypass O(n²) attention entirely. They compress history into a recurrent state — O(n) compute, constant memory. Very efficient for ultra-long sequences. The tradeoff: weaker at precise in-context retrieval, they tend to forget exact details. Most frontier models in 2026 are still transformers or **hybrid Mamba + Attention** (Jamba-style).

---

## Lost in the Middle: the most important practical problem

Even within the nominal window, models don't attend uniformly. Retrieval performance is **U-shaped**: strong at the beginning (primacy bias) and end (recency bias), with a significant drop in the middle. Documented since Stanford 2023, still present in 2026.

The drop is real: **30–40% accuracy drop for content buried in the middle**, sometimes falling from 75% to 55–60% even at 4K tokens.

Two theories dominate:
- Attention weights become diffuse; softmax over 100K tokens flattens, signal gets diluted
- Training data rarely required reasoning over 100K of *useful* tokens — most was padding

The effect extends to **multi-turn conversations** — models may overlook instructions given in earlier or middle turns of a long chat history.

---

## Advertised vs effective: the gap is the story

The standard benchmark is **Needle-In-A-Haystack (NIAH)**: hide one fact in 500K tokens of noise, can the model retrieve it? Frontier models score ~95%+ across their full window. Largely solved at the single-needle level.

The harder test is **RULER**: multi-hop reasoning across distributed facts. Better discriminator of true long-context capability.

The **effective vs advertised** gap in 2026:

| Model | Advertised | Effective | Notes |
|---|---|---|---|
| Claude Sonnet 4.x | 1M | ~600–700K | Strong long-context retrieval |
| Gemini 3.0 Pro | 2M | ~1.2–1.4M | Best multimodal long-context |
| Llama 4 Scout | 10M | ~6–7M | Industry-leading window |
| GPT-5.2 | 400K | ~250–300K | Large output window |

Models often fail 30–40% before their claimed limit. Reasons cited: KV-cache fragmentation, attention instability, positional-encoding drift, and token-quality degradation (noise accumulation).

Beyond a certain point, models also exhibit **context rot** — over-relying on the prompt at the expense of pretrained knowledge, repeating earlier patterns, losing coherence on complex reasoning.

**Token quality beats token quantity.** Across 18 frontier models, clarity, structure, and semantic density had more impact on accuracy than window size. Poorly structured SOPs degrade performance even in million-token windows.

---

## Long context vs RAG: complementary, not competing

A common misconception: "With 1M-token windows, RAG is obsolete." Empirically false.

| Dimension | Massive Context Window | RAG |
|---|---|---|
| Best for | Whole-codebase reasoning, complex synthesis, multi-document analysis | Vast KBs, live data, precise retrieval |
| Cost dynamics | High per-query (full sequence compute) | Low per-query (top-K chunks) |
| Contextual nuance | Excellent (model sees all relationships natively) | Chunking-dependent — can lose cross-document links |
| Freshness | Requires re-feeding every prompt | Instant DB updates |
| Determinism / auditability | Hard — reasoning trace tangled with retrieved docs | Easy — claim → source citation |

**The 2026 consensus is hybrid:** RAG to get candidates → long context to reason over them. RAG wins for precision and cost control. Long context wins for synthesis when you don't know what to retrieve.

For regulated environments (GxP, SOPs, CAPAs, deviations, validation docs) this matters acutely because evidence must remain traceable. A practical pipeline:

```
User Question
      │
      ▼
Metadata Filter
(Product, Site, Process, Version)
      │
      ▼
Hybrid Search
(BM25 + Dense Retrieval)
      │
      ▼
Reranking
      │
      ▼
Top 5–15 Evidence Chunks
      │
      ▼
Context Builder
  • SOP excerpts
  • CAPA references
  • Deviation details
  • Glossary
  • User question
  • Clear instructions
      │
      ▼
LLM
      │
      ▼
Answer with citations
```

This is typically more accurate than loading an entire QMS into the model. It also supports auditability — every claim traces back to a retrieved source.

---

## Context engineering: the practical playbook

Because the window is finite and quality is uneven, simply stuffing more text is suboptimal. The discipline of **context engineering** asks: *What information should be included? In what order? At what level of detail? What should be omitted, summarized, or retrieved on demand?*

### Placement

**Critical instructions go at the top and bottom.** Don't bury the one key instruction in the middle of 80K tokens. In agentic workflows, put the orchestrator's most recent tool summaries at the end where recency bias is strongest.

### Structure

**Structure beats raw text.** Use XML or markdown tags to help the model segment:

```xml
<documents>
  <doc id="1"> ... </doc>
  <doc id="2"> ... </doc>
</documents>
```

Improves retrieval measurably. Give each tool-call result a clear boundary/label so the model can distinguish "this came from tool call 3" from "this is user input."

### Compression

Summarize old turns into a structured note preserving decisions, open questions, and constraints. Claude Code and similar agents auto-compact near the limit. Hierarchical summarization works: large document → chapter summaries → section summaries → final digest. Drill into originals only when needed.

### Retrieval over stuffing

Retrieve just the relevant chunks per query — but **chunk count matters, not just relevance ranking.** More chunks isn't free, even if individually relevant. Rerank retrieved chunks before they reach the LLM.

### Prompt caching

For content stable across calls (system prompts, tool definitions, static reference docs), caching avoids reprocessing the same tokens' KV cache. Reported savings of up to **90%** for repeated prefixes.

### Don't waste tokens

Tool outputs are often verbose JSON like `{"status": "success", "data": ...}` — preprocess. Repeated system prompts across calls? Cache them. A 128K window filled with redundant tool chatter is a waste.

### Context governance (production pattern)

Treat context as a governed asset:
- Token budgets per workflow stage
- Priority rules: critical → high → low
- Automatic eviction of stale tokens
- Token-quality scoring

---

## Why this matters for multi-agent design

Modern AI agents spend most of their time managing context. A hub-and-spoke architecture makes context a first-class concern.

### Context isolation as a compute strategy

In hub-and-spoke multi-agent setups, each subagent gets its own fresh context window. Each pays attention cost only for its own slice of work — instead of one context accumulating everything and hitting both the quadratic compute penalty and the lost-in-the-middle degradation.

### The orchestrator's context is the scarce resource

The hub's window fills with subagent *summaries*, not raw transcripts. This is deliberate compression to keep the hub's effective context small and high-signal. **Direct subagent-to-subagent communication is an anti-pattern** — it bypasses the compression point and lets context bloat propagate.

### Auditability via narrow contexts

A smaller, well-scoped context per pipeline stage makes the reasoning trace auditable. A 200K-token context with retrieved SOPs, prior conversation, and tool results interleaved is much harder to reconstruct ("why did the model conclude X?") than a narrow context where you know exactly what was in view at the decision point. This matters acutely in regulated environments.

### The agent decision loop

A modern agent continuously asks:
- Should I retrieve?
- Should I summarize?
- Should I call memory?
- Should I search?
- Should I compress?
- Should I forget?
- Should I rerank?

Most orchestration is really context management.

---

## The 2020 → 2026 timeline

- **GPT-1 / GPT-2 era:** hundreds to ~2K tokens
- **GPT-3 (2020):** 2,048 tokens
- **Early ChatGPT era:** ~4K
- **2023:** rapid jump to 32K–100K (Claude 100K, GPT-4 32K)
- **Late 2023:** GPT-4 Turbo → 128K
- **2024:** Gemini 1.5 Pro demonstrated 1M (experimental 2M+)
- **2025:** 1M tokens becomes a common frontier baseline
- **Mid-2026:** 1–10M range across the frontier (Llama 4 Scout 10M is the outlier)

---

## Where this is going

### Hierarchical memory

Small fast 128K window + large slow vector store the model can explicitly read/write to. The model becomes a reasoning engine over a learned external memory.

### Infinite context via recurrence

Models that offload KV cache to CPU/disk and stream it back on demand. StreamingLLM with attention sinks allows continuous streams without catastrophic forgetting.

### Native multimodality

1M tokens is not just text anymore. 1 hour of video ≈ 500K tokens. The window is becoming the place where text, images, audio, and video coexist natively.

### Beyond brute-force scale

The industry is gradually shifting from brute-force context expansion toward **infinite context via external memory architectures**. The future lies in hybrid systems where LLMs act as reasoning engines that dynamically query neural databases, vector stores, or agentic memory systems — effectively bypassing the hard limits of the native context window while maintaining high accuracy and perfect recall.

Some projections put context windows reaching **billions of tokens by 2030**, theoretically allowing all of Shakespeare + Harry Potter + Wikipedia in a single context. But the real frontier isn't size — it's precision.

---

## The bottom line

The context window expansion from 2K to 10M+ tokens represents a shift from **local text completion** to **in-context learning and execution environments**. Innovations like FlashAttention, GQA, MLA, PagedAttention, RoPE scaling, and Ring Attention have made vast context windows both practical and scalable.

But **bigger is not automatically better.** Quality of the information placed in the window, its structure, and how the system decides what belongs there usually matter more than the raw token count. The discipline of context engineering — placement, structure, compression, retrieval, caching, and governance — separates experimental LLM applications from production-grade systems.

Think of the old 4K models as having short-term memory loss. Current 1M models have photographic memory but get overwhelmed. The next generation needs to learn what to forget.

The frontier isn't "how long can the context be" — it's "how precisely can the model attend to, reason over, and synthesize information across vast inputs?" That's a harder problem involving architectural innovation, training methodology, and evaluation metrics all evolving together.