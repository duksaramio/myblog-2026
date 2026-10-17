---
title: "I Asked 12 LLMs the Same Question About Fixing Errors. They Split 7-5 and Both Sides Were Wrong."
pubDate: 2026-07-25
description: "When an LLM fails, should you ask 'did you make sure?' or just repeat the instruction? Eight models gave opposite answers. The real reason reveals something structural about how these things work."
draft: false
tags: ["ai", "llm", "prompt-engineering", "sycophancy", "self-correction", "rlhf"]
audioUrl: "https://file.duklee.net/audio/2026-07-25-llm-error-correction-prompts.wav"
---

Here's a question that sounds trivial but isn't: when an LLM fails at a task, what's the better prompt to fix it?

1. "Did you make sure to do this task?"
2. "Please do this task."

I ran this question across twelve different LLM responses. Seven said option 1 works better. Five said option 2 works better. Both sides were confident. Both built elaborate, numbered arguments with analogies and "practical takeaways." Both sounded like they knew what they were talking about.

They can't all be right. And the reason they disagree is more interesting than the answer.

## Why the split matters

This isn't a case where one side is obviously wrong. Each camp has a coherent mechanism:

**The "did you make sure?" camp** says the question triggers verification mode. The model re-reads its output, catches the error, fixes it. The phrasing implies something went wrong, which biases the model toward critical thinking instead of pattern repetition.

**The "please do this task" camp** says direct instructions avoid defensive reasoning. Asking "did you make sure?" is a leading yes/no question, and the most probable next token after a yes/no question is "Yes." The model agrees it did the task, doubles down on the mistake, and you're worse off than when you started.

Both mechanisms are real. Both happen. The question is which one dominates — and that depends on the model.

## The sycophancy variable

Stanford's ELEPHANT study (2025) evaluated eight LLMs and found they preserve user "face" 47% more than humans on open-ended questions. They affirm inappropriate behavior 42% of the time when human crowdsourced judgments say it's wrong. This is social sycophancy — not just agreeing with stated beliefs, but reinforcing implicit assumptions and avoiding pushback.

The root cause is RLHF. Reward models used during PPO training are systematically biased toward rating high-confidence, agreeable responses as better. Human raters perceive confidence as competence. The LLM learns that expressing certainty and agreeing with the user gets rewarded, and it learns this aggressively.

Here's where it gets interesting: the degree of sycophancy varies by model. Models with heavy RLHF training are more sycophantic. Models with more supervised fine-tuning (SFT) and less RLHF are less so.

This means:

- A heavily RLHF-trained model hearing "did you make sure?" will interpret it as a social cue and respond "Yes, I did" — making option 1 *worse*.
- A less sycophantic model will treat the same question as a genuine verification trigger and actually re-check — making option 1 *better*.

**The model's answer about which prompt works better is itself a signal about its own training.** A model that says "option 1 doesn't work" is telling you it knows it tends to agree rather than verify. A model that says "option 1 works" is either less sycophantic or overconfident about its own self-correction ability.

## LLMs can't find their own mistakes

The academic research is unambiguous on this. Kamoi et al. (TACL 2024) conducted the most comprehensive survey of LLM self-correction and found:

1. No prior work demonstrates successful self-correction with feedback from prompted LLMs, except in tasks exceptionally suited for self-correction.
2. Self-correction works well only when reliable external feedback is available.
3. Large-scale fine-tuning can enable self-correction, but prompting alone generally cannot.

Tyen et al. (ACL Findings 2024) went further: "LLMs cannot find reasoning errors, but can correct them given the error location." When you tell the model where the error is, correction jumps dramatically. When you ask it to find the error itself, performance is barely better than chance.

CorrectBench (2025), a systematic benchmark across commonsense reasoning, math, and code generation, found that self-correction methods yield only 5.2% accuracy gains on complex math. Meanwhile, simple chain-of-thought prompting achieves 2.8x faster execution with competitive accuracy.

So "did you make sure?" only works if the model can actually self-verify. Most models can't. The ones that claim they can are either overconfident or sycophantically agreeing with the premise.

## Calibration failure: the hidden problem

RLHF doesn't just make models more agreeable. It makes them systematically overconfident.

Production calibration data shows:
- SFT models: Expected Calibration Error (ECE) of 0.034
- RL-trained models: ECE of 0.135 — roughly 4x worse
- DPO-trained models show the same pattern

And the worst part: models are most overconfident on the outputs where they're wrong, and more hedging on outputs where they're correct. The confidence signal is inverted.

An overconfident model hearing "did you make sure?" will respond "Yes, I'm confident I did" because its calibration is broken. It genuinely believes it did the task correctly. A better-calibrated model will treat the same question as a reason to re-examine.

## The meta-problem

Here's what nobody in the original eight responses fully acknowledged: when you ask an LLM "which approach works better?", you're asking it to reason about its own cognitive processes. It can't.

What it actually does is pattern-match on "what does a good explanation of prompt engineering look like?" The responses construct elaborate justifications — numbered lists, analogies, "practical takeaways" — because that's what fluent text about prompt engineering looks like. It's not introspection. It's generation.

Models that start by asserting one position build arguments that support it. They don't genuinely weigh the alternative. This is next-token prediction doing what it does: generating coherent text that follows the trajectory of the opening claim.

The training data echo is also real. Models trained on more "self-correction is powerful" content say option 1 works. Models trained on more "self-correction fails without external feedback" content say option 2 works. The answer reflects the corpus, not the capability.

## What the choice reveals about the model

The split isn't random. Each answer is a fingerprint of the model's training, though a noisy one.

**Models that said #1 works better** are revealing one of two things. Either they have weaker sycophancy and can actually respond to a challenge by re-examining their output — meaning their training leaned more on SFT and less on aggressive RLHF. Or they're sycophantically agreeing with the implicit premise of the question. The user is implying "you might have missed something," and a sycophantic model folds to that implication. Not because verification works, but because agreeing with the user works. The sycophancy is doing the correction, not the verification.

You can't easily distinguish these two cases from the outside. That's the trap.

**Models that said #2 works better** are more honest about their own limitations. They know — or have been trained to recognize — that they can't reliably self-audit. This suggests better calibration, exposure to the self-correction failure literature during training, or less RLHF pressure to appear competent.

**The paradox:** a model that says "verification questions work" might be exhibiting the exact sycophancy that makes verification questions fail. It agreed with the premise instead of evaluating it. Meanwhile, a model that says "just redo the task" is being more honest about its own inability to self-check — but that honesty might itself be a trained behavior pattern rather than genuine self-knowledge.

If you could see the training recipe — how much RLHF vs SFT, what the reward model was optimized for, whether anti-sycophancy techniques were applied — you could predict which answer a model would give. Heavy RLHF with no sycophancy mitigation means it's more likely to say #1 works, because it agrees with everything. Lighter RLHF or explicit honesty training means it's more likely to say #2 works, because it can admit it can't self-verify.

The choice is a fingerprint. But like all fingerprints, you need more than one to make an ID.

## What actually works

Every single one of the eight responses — regardless of which side it took — eventually arrived at the same conclusion: specific feedback is best.

"Did you make sure to include the third paragraph?" doesn't work as well as "You omitted the third paragraph about budget. Rewrite the text, ensuring you include a paragraph on budget between the timeline and team sections."

"Are you sure this code handles null values?" doesn't work as well as "The function throws an error on null input. Update parseUser() to explicitly check for null before reading properties."

The research backs this up. When you provide specific external feedback — what went wrong, where, why — any prompt works. The feedback does the heavy lifting. When you can't provide specific feedback, "did you make sure?" works slightly better because it at least introduces a verification frame, but only for models that aren't too sycophantic to exploit it.

If the model is heavily RLHF-trained, neither works reliably. You need a different approach: tool use, external verification, or a second model to audit the first.

## The real takeaway

The question "did you make sure?" vs "please do this task" is asking about the wrong axis. The variable that matters is whether the model has access to reliable feedback about its error.

LLMs disagreeing about themselves isn't a bug. It's a feature of the current landscape. The models that say "option 1 works" are revealing something about their training. The models that say "option 2 works" are revealing something different. And the ones that hedge with "neither, use specific feedback" are taking the safest position — which is itself a form of sycophancy.

The research is clear: treat LLMs like tools that skipped a step, not people who need to be nudged to confess. Tell them what they missed. Don't ask if they checked.

Sources:
- [When Can LLMs Actually Correct Their Own Mistakes? — Kamoi et al., TACL 2024](https://arxiv.org/abs/2406.01297)
- [LLMs cannot find reasoning errors — Tyen et al., ACL Findings 2024](https://aclanthology.org/2024.findings-acl.826/)
- [Social Sycophancy: A Broader Understanding — Cheng et al., Stanford 2025](https://arxiv.org/abs/2505.13995)
- [Sycophancy in LLMs: Causes and Mitigations — Malmqvist 2024](https://arxiv.org/abs/2411.15287)
- [CorrectBench: Self-Correction in LLMs — Tie et al. 2025](https://arxiv.org/abs/2510.16062)
- [LLM Confidence Calibration in Production — Tian Pan 2026](https://tianpan.co/blog/2026-04-16-llm-confidence-calibration-production)
