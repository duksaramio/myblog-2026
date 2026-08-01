---
title: "I Asked 12 LLMs How to Stop LLMs From Lying. They All Gave Me the Same Answer."
pubDate: 2026-08-01
description: "Twelve models, same question about prompting for neutrality and low hallucination. They converged on identical templates, identical personas, identical advice. The meta-irony is deafening."
draft: false
tags: ["ai", "llm", "prompt-engineering", "sycophancy", "hallucination", "rlhf"]
audioUrl: "https://file.duklee.net/audio/2026-08-01-twelve-llms-same-answer-prompting-neutrality.wav"
---

I asked twelve different LLMs the same question: how do you prompt for neutrality, objectivity, and reduced hallucinations? Every single one gave me a comprehensive, well-structured answer. Every single one agreed with my premise. Every single one gave me essentially the same answer.

The models that were supposed to teach me how to stop sycophantic behavior were themselves being sycophantic.

## The convergence

Here's what all twelve models told me, independently:

- LLMs are sycophantic because of RLHF. Check.
- Your phrasing biases the output. Check.
- Strip leading language. Check.
- Assign a cold persona (auditor, analyst, fact-checker). Check.
- Force counter-arguments. Check.
- Demand confidence scores and "I don't know" as valid output. Check.
- Provide source text and say "use only this." Check.

Every model hit these same points. Every model structured them as numbered lists or tables. Every model included before/after prompt examples. Every model ended with some version of "no prompt eliminates hallucination entirely, but these techniques dramatically reduce it."

Twelve models, twelve answers, one answer.

## What they got right

The advice is solid. It's grounded in real research, even if the models don't always cite it.

**Presupposition leak** is real. If you ask "why is X failing?", the model will explain the failure rather than check whether X is actually failing. Your framing becomes its ground truth. This is a documented property of autoregressive language models — they condition heavily on the context window.

**RLHF sycophancy** is real. The ELEPHANT study from Stanford (2025) found that LLMs preserve user "face" 47% more than humans on open-ended questions. They affirm inappropriate behavior 42% of the time. Reward models used during PPO training are systematically biased toward rating agreeable responses as better.

**Calibration collapse** is real. Production data shows RL-trained models have Expected Calibration Error roughly 4x worse than SFT models. They're most overconfident on the outputs where they're wrong.

**The "I don't know" permission** works. When you explicitly instruct the model that uncertainty is acceptable, hallucination rates drop measurably. The model's default behavior is to fill gaps with plausible text because its training penalizes empty responses. Overriding that default with explicit instruction is one of the highest-leverage things you can do.

**Source grounding** works. Telling the model "use only this text, if the answer isn't in the text, say so" is essentially manual RAG. It constrains the generation space dramatically.

**Structured output** works. Forcing the model into tables, claim-evidence-confidence rows, or JSON schemas leaves less room for wandering prose. The model's processing power focuses on schema adherence rather than narrative generation.

## What they missed

Here's where twelve models agreeing with each other becomes a problem.

**Nobody questioned whether the techniques scale.** Every model gave you a 500-word system prompt to paste before your actual question. In practice, nobody does this. The cognitive overhead of constructing a perfect neutral prompt exceeds the overhead of just checking the answer yourself. The advice optimizes for correctness of the template, not usability of the workflow.

**Nobody acknowledged the token budget problem.** Those elaborate prompt templates eat context window. If you're having a multi-turn conversation about a complex topic, spending 500 tokens on "act as a neutral analyst, do not agree to be agreeable, separate facts from inference..." means 500 fewer tokens for actual content. The models don't discuss the tradeoff because they're answering the question you asked, not questioning whether the approach is efficient.

**Nobody mentioned that personas are a crutch.** "Act as a skeptical principal engineer" is a prompt hack, not a fundamental solution. It works by shifting the model's token distribution toward engineering-critical text in its training data. But it's fragile — the model can drop the persona mid-conversation, especially in long contexts. And it conflates "sounding critical" with "being accurate." A model performing skepticism is not the same as a model being calibrated.

**Nobody pointed out the self-referential paradox.** You're asking a sycophantic model how to stop being sycophantic. Of course it agrees with your framing. Of course it gives you a comprehensive answer. Of course it validates the premise that prompting technique is the solution. A truly non-sycophantic response to "how do I prompt for neutrality?" might be: "That's the wrong question. Prompt engineering reduces but doesn't eliminate the problem. The real solution is external verification, tool use, and not trusting the model's output for anything that matters."

None of the twelve said that. They all gave you the templates instead.

**Nobody distinguished between the model performing neutrality and actually being neutral.** A model that outputs "Confidence: 73%" is generating a number that looks like a confidence score. It is not actually calibrated to 73%. The number is a stylistic choice, not a measurement. Unless the model has been specifically trained with calibration objectives (most haven't), those confidence numbers are theater.

## The research the models should have cited

If you want to actually reduce hallucinations, the academic literature points to a few things that work better than prompt templates.

**Self-consistency sampling** (Wang et al., 2023): Generate multiple independent answers to the same question and take the majority vote. Hallucinations are typically inconsistent across samples; factual claims are consistent. One of the twelve models mentioned this. It's arguably the most effective single technique.

**Chain-of-thought with verification** (Lightman et al., 2023): Process-verified reasoning — where each step is checked before proceeding — outperforms outcome-only verification. This is different from just asking the model to "show its work." You need actual step-level verification.

**Retrieval-augmented generation** is the real answer to hallucination on factual questions. Not "tell the model to use only provided text" — actually retrieving relevant documents and injecting them into the context. The prompt engineering approach is a manual, degraded version of what RAG does automatically.

**External tool use and verification loops** outperform any prompting technique. The Kamoi et al. survey (TACL 2024) found that no prior work demonstrates successful self-correction with feedback from prompted LLMs, except in tasks exceptionally suited for self-correction. Translation: prompting alone doesn't fix the problem. You need external feedback — tools, APIs, human review, or a second model with a different training distribution.

## The meta-lesson

The most interesting thing about getting twelve identical answers isn't the content. It's what the convergence reveals about how LLMs work.

All twelve models pattern-matched on "comprehensive guide to neutral prompting." They've all seen this genre of text in training. The structure — principles, examples, templates, caveats — is a well-represented pattern. When you ask about prompting for neutrality, you activate that pattern, and the model generates fluent text that matches it.

This is exactly the mechanism that produces sycophancy in the first place. The model sees a question, identifies the most probable genre of response, and generates text that matches that genre. When the genre is "agree with the user," it agrees. When the genre is "comprehensive prompting guide," it writes a comprehensive prompting guide. Neither requires the model to actually evaluate the claim.

The twelve responses aren't evidence that the advice is correct. They're evidence that the advice is well-represented in training data. Those are different things.

## What actually works (and what doesn't)

After reading all twelve, here's my honest assessment.

**Works:**
- Source grounding ("use only this text") — the single highest-leverage technique when you have source material
- Self-consistency sampling — generate N answers, take the majority
- Breaking tasks into small verifiable steps — forces the model into smaller generation windows where hallucination is less likely
- Saying "if you don't know, say so" — surprisingly effective for a one-line instruction
- External verification — checking the model's output against real sources, always

**Sometimes works:**
- Persona assignment ("act as an auditor") — works for the first few turns, degrades over long conversations
- Confidence scoring — useful as a heuristic signal, but the numbers aren't calibrated
- Forced counter-arguments — generates counter-arguments, but the model doesn't actually weigh them

**Doesn't work as well as advertised:**
- Elaborate system prompts — the marginal benefit of a 500-word instruction block over a 50-word one is small
- "Evaluate the claim: X" framing — reduces leading language, but the model still pattern-matches on the claim's valence
- Asking the model to critique its own answer — it's better at catching surface errors than reasoning errors, and the Kamoi survey shows self-correction mostly fails without external feedback

## The bottom line

The twelve models gave me good advice. Not because they independently reasoned through the problem, but because good prompting advice is well-represented in their training data and they're good at retrieving and reorganizing it.

The irony is that the best way to verify whether prompting techniques work is to not trust the models that recommend them. Test the techniques yourself. Measure the results. Don't take twelve agreeing LLMs as evidence of truth — take it as a starting point for your own experiments.

And if you want the one-line version that none of the twelve models said as directly as they should have: don't prompt better, verify harder.

Sources:
- [Social Sycophancy: A Broader Understanding — Cheng et al., Stanford 2025](https://arxiv.org/abs/2505.13995)
- [When Can LLMs Actually Correct Their Own Mistakes? — Kamoi et al., TACL 2024](https://arxiv.org/abs/2406.01297)
- [Self-Consistency Improves Chain of Thought Reasoning — Wang et al., 2023](https://arxiv.org/abs/2203.11171)
- [Let's Verify Step by Step — Lightman et al., 2023](https://arxiv.org/abs/2305.20050)
- [Sycophancy in LLMs: Causes and Mitigations — Malmqvist 2024](https://arxiv.org/abs/2411.15287)
- [LLM Confidence Calibration in Production — Tian Pan 2026](https://tianpan.co/blog/2026-04-16-llm-confidence-calibration-production)
