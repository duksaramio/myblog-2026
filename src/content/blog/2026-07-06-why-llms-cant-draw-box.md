---
title: "Why LLMs Can't Draw a Simple Box"
pubDate: 2026-07-06
description: "Ask an LLM to draw an ASCII box and watch the vertical lines go crooked. The problem is deeper than you think."
draft: false
tags: ["llm", "tokenization", "ascii-art", "ai-limitations", "prompting"]
audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
---

> **Update (July 6, 2026):** I asked multiple LLMs to draw a simple ASCII box and every single one nailed it. So the basic box problem may be mostly solved at the frontier. My guess now is that the alignment issue creeps in when the context gets complicated — longer conversations, multi-part layouts, or when the model is already juggling a bunch of other constraints. Simple box, easy. Complex ASCII art in a messy context window, that's where things probably still fall apart.

---

Try asking any LLM to draw a simple ASCII box. Something like this:

```
+----------+
|          |
|          |
+----------+
```

Seems trivial, right? Most models will butcher it. The vertical lines won't line up. The corners will be off by a character. It looks like a box drawn by someone who had two beers at lunch.

I got curious about why this happens, so I dug into it with Gemini. Here's what I found.

## The core problem: LLMs don't see characters

LLMs don't read or write character-by-character. They process text in chunks called tokens. A sequence of six spaces might be a single token. The model doesn't see `[ ][ ][ ][ ][ ][ ]` — it sees one abstract blob that represents "some whitespace."

When it tries to figure out how many spaces to put between two pipe characters to match the line above, it's essentially guessing. And it guesses wrong constantly because it's doing spatial layout with no actual spatial awareness.

This is the tokenization blindspot. The model is trying to do precise grid-based math while working with chunky, ambiguous units.

## It gets worse: proportional font bias

ASCII art only works in monospace fonts — where every character takes the same width. But LLMs are trained on billions of pages of text displayed in proportional fonts, where an `i` is way thinner than an `m`. The model's entire statistical understanding of text spacing is built on proportional assumptions. Asking it to think in a fixed-width grid is like asking someone who only reads cursive to write perfect block letters.

## And it can't go back and fix it

LLMs generate left to right, top to bottom. One token at a time. No canvas. No "undo." No ability to look at the finished output and say "line 3 is crooked, let me fix that."

To draw a perfect box, the model has to predict the spatial layout of line 4 while it's still generating line 2, with zero visual feedback. If it miscalculates early, the error cascades down.

## What happens when you ask it to fix its own broken box?

This is the funny part. If you point out the misalignment and ask the model to fix it, you get one of two results:

1. It apologizes confidently and outputs the exact same broken box.
2. It overcorrects and makes it worse.

Why? The fundamental problem hasn't changed. It's still working with the same chunky tokens, the same proportional-font bias, the same left-to-right generation. And now the broken version is sitting in its context window, pulling its attention weights toward the broken pattern instead of starting fresh.

It's like asking someone to redraw a crooked picture while they're staring at the crooked picture. The reference contaminates the correction.

## How to actually get it right

A few tricks that work:

**Force character-by-character logic.** Ask the model to write a Python script that prints the box using precise string lengths. `print("+" + "-" * 10 + "+")` is mathematically foolproof. The model doesn't need spatial reasoning — it just needs to count.

**Give it exact numbers.** Instead of "draw a box," say "the top line has 20 dashes, the middle lines have exactly 18 spaces between the pipes." You're converting a visual layout problem into basic math, which LLMs handle fine.

**Use visible characters instead of spaces.** Ask it to draw the box using periods for empty space, then swap them yourself. Spaces get tokenized in weird, ambiguous chunks. Periods don't.

## Why some models nail it and others don't

There's a massive gap between models on this task. The ones that get it right usually have one or more of these advantages:

**Granular tokenizers.** Newer models (especially code-focused ones like Qwen-Coder or recent Claude/GPT iterations) use much more fine-grained tokenization. They can "see" that 16 spaces is exactly 16 discrete units, not one ambiguous blob.

**Massive code pre-training.** Code is full of structured ASCII — comments, markdown tables, terminal output, architecture diagrams. Models trained heavily on code have an internal "statistical map" for what follows a `|` in a structured block. Their spatial intuition for fixed-width text is just better.

**Reasoning capabilities.** Models with chain-of-thought (like o-series or DeepSeek-R1) convert the visual problem into explicit math before generating. Instead of "guessing" where the pipes go, they actively count: "Line 1 was 20 characters wide. I need a pipe, 18 spaces, and a pipe."

## Does this mean anything for general model quality?

Mostly yes. If a model draws a perfect ASCII box, it's a strong signal that it has:

- Precise token handling (good for code, string manipulation, indentation)
- Spatial reasoning (good for parsing tables, layouts, wireframes)
- Solid instruction following and constraint tracking

Think of it like an agility drill for an athlete. It doesn't mean they're great at every sport, but it proves they have the foundational physical traits — speed, balance, spatial awareness — to be good at most things.

The caveat: a model might be heavily optimized for code and nail every ASCII box while still being mediocre at creative writing or nuanced analysis. Specialization matters.

But if a model can't draw a simple box with aligned corners, that's a real signal too. It means the tokenizer is chunky, the spatial reasoning is weak, or the instruction following is sloppy. All of which leak into other tasks.

## The bottom line

The ASCII box problem is a neat little diagnostic. It exposes the gap between how LLMs process text (token chunks, left-to-right, no visual feedback) and how humans process it (character-by-character, spatial, iterative). The models that bridge that gap are genuinely better — not because drawing boxes matters, but because the underlying capabilities that make it work matter for everything else.
