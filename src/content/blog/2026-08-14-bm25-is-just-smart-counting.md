---
title: "BM25 Is Just Smart Counting — And It Still Runs Search"
pubDate: 2026-08-14
description: "BM25 has survived every 'search is dead' wave since 1994. Three simple rules, two tuning knobs, and it still powers Google, Elasticsearch, and every RAG pipeline underneath."
draft: false
tags: ["bm25", "search", "information-retrieval", "rag", "python", "algorithms"]
---

I read a dozen different explanations of BM25 recently — from academic papers to "explain it like I'm 10" blog posts. Every single one converged on the same three ideas. That's because BM25 really is that simple.

BM25 is a ranking algorithm. You type a query, it scores every document in the corpus, and the highest score wins. It's been doing this since 1994. Google, Elasticsearch, Lucene, OpenSearch — they all use it or a close variant as their default scorer. Even RAG systems that rely on dense vector retrieval almost always include BM25 as part of a hybrid pipeline.

The "25" is just a version number. Like iPhone 25. Stephen Robertson and Karen Spärck Jones tried 24 versions before settling on this one.

## The Three Rules

BM25 asks three questions about every document:

### 1. Does it have the words you searched for?

If a document mentions "dinosaur" 10 times, it's probably more about dinosaurs than one that mentions it once. That's term frequency — the most basic signal in search.

But BM25 is clever about it. Going from 0 to 1 mention is huge. Going from 1 to 2 is still significant. Going from 50 to 51 is almost nothing. The benefit levels off.

This is called **TF saturation**, and it's what stops spammers from winning by repeating a keyword 500 times. BM25 caps the bonus. It's like a teacher giving you one gold star for a good answer — not 100 gold stars for screaming it over and over.

### 2. Are the matching words rare?

Some words are in almost every document: "the", "and", "is". Finding those tells you nothing. But if a document contains "triceratops" or "metabolomics" or "Part 11" — those are rare. A match on a rare word is worth massively more than a match on a common one.

This is **Inverse Document Frequency (IDF)**. The analogy everyone lands on: if everyone in a building is wearing a blue shirt, that doesn't help you find anyone. But if one person has a purple hat, that's your clue. Rare words are the purple hat.

### 3. Is the document the right length?

A 10-page pamphlet that mentions "tree frog" three times is clearly about tree frogs. A 1,000-page encyclopedia that mentions "tree frog" three times? Probably not.

BM25 gives a fairness boost to shorter documents. A long document naturally contains more words, so it'll match more terms just by being big — that's not a signal of relevance. **Document length normalization** adjusts for this.

## The Formula (In English)

```
Score = How Rare the Word Is × (Capped Word Count) / (Word Count + Page Length Penalty)
```

For every word in your query, BM25 calculates this score for every document. Add up the scores for all query terms. Highest total wins.

The actual formula:

```
Score(D, Q) = Σ IDF(qi) × [f(qi, D) × (k1 + 1)] / [f(qi, D) + k1 × (1 - b + b × |D|/avgdl)]
```

Two tuning knobs:

- **k1** (usually 1.2–2.0): How fast repetition stops helping. Higher = more credit for repeated terms.
- **b** (usually 0.75): How much to punish long documents. 0 = ignore length entirely. 1 = full punishment.

## Why It's Not Dead

Every few years someone declares BM25 obsolete. Word2vec, BERT embeddings, dense retrieval, LLM-powered search — each was supposed to replace it. None did.

The reason is straightforward: BM25 is fast, interpretable, and extremely good at exact term matching. It doesn't need GPU inference. It doesn't hallucinate. It doesn't require fine-tuning. It just counts words intelligently.

Vector search is great at finding semantically similar content — "electronic records shall maintain a secure chronological history" matches "audit trail requirements" because the meaning overlaps. But vector search struggles with exact terms: system names, document IDs, acronyms, regulatory section numbers. BM25 eats those for breakfast.

That's why the most effective RAG retrieval architecture is hybrid:

```
Query → BM25 (exact terms) + Vector Search (meaning) → Combine → Rerank → LLM
```

BM25 catches the precise terminology. Vector search catches the paraphrases. Reranking merges them. The LLM gets the best of both worlds.

## The Bottom Line

BM25 is three counting rules and two knobs. Rare words matter more. Repeated mentions help but level off. Short documents get a fairness boost. That's it.

It's been the backbone of information retrieval for over 30 years. If you're building search, RAG, or any system that needs to find relevant documents — you need to understand BM25. Not because it's fancy, but because it works.
