---
title: "How LLMs Actually Learn After Pre-Training: SFT, DPO, Distillation, and RL Explained"
pubDate: 2026-07-28
description: "Pre-training builds a next-token predictor. Post-training turns it into something useful. Here's how SFT, preference optimization, distillation, and RL actually work — and when to use each."
draft: false
tags: ["ai", "llm", "machine-learning", "post-training", "rl", "dpo", "grpo", "reasoning"]
---

A pre-trained language model is a next-token predictor with encyclopedic knowledge and zero social skills. It doesn't know how to answer questions, refuse harmful requests, format JSON, or reason through a math problem. It just autocompletes text.

**Post-training** is where that changes. It's the phase after pre-training where you shape raw capability into something aligned, useful, and increasingly capable of reasoning. And the methods you choose here determine whether you get a chatbot, a coder, or an autonomous agent.

The modern pipeline stacks four families of techniques, each solving a different bottleneck.

---

## SFT: Show, don't tell

Supervised Fine-Tuning is the foundation. You give the model thousands of (prompt, ideal response) pairs and train it to imitate them. Standard cross-entropy loss. Nothing exotic.

What SFT teaches: format, tone, instruction following, domain-specific writing. If you want a model that outputs clean JSON, writes CAPA investigations in the right structure, or refuses to help build bombs — SFT is where that happens.

The LIMA paper showed something surprising: a few thousand *exceptionally* high-quality examples can outperform millions of mediocre ones. Data quality dominates everything.

**The catch:** SFT is behavioral cloning. The model learns to copy what it sees, but it can't learn *why* one response is better than another equally plausible one. It has no mechanism for "A is better than B" — it only ever sees one correct answer per prompt.

Think of it like training a new QA specialist by showing them hundreds of completed investigations. They'll learn the format. They'll copy the phrasing. But if every example says "Root Cause: Operator Error" — even when the equipment was clearly broken — the model will happily reproduce that mistake. SFT never questions the labels.

It also has a nasty property: **SFT improves in-domain accuracy but can reduce out-of-distribution generalization.** The more you fine-tune on narrow examples, the worse the model handles unfamiliar inputs. This is one of the most important findings from the 2026 RL post-training survey, and it's why every serious pipeline goes beyond SFT.

---

## Preference Optimization: Teaching taste

SFT teaches *what to say*. Preference optimization teaches *what's better*.

The classic approach was RLHF — Reinforcement Learning from Human Feedback. Collect human rankings of model outputs, train a reward model, then use PPO to optimize the policy against that reward model. This works but it's complex: you need four separate models in memory (policy, reference, reward model, critic), and PPO is notoriously unstable.

DPO and ORPO bypass all of that.

### DPO: No reward model needed

Direct Preference Optimization has a beautiful insight: there's a closed-form mathematical relationship between the optimal RLHF policy and the reward function. You can exploit this to skip the reward model entirely and optimize directly on preference pairs (chosen, rejected).

The loss function looks like:

$$\mathcal{L}_{\text{DPO}} = -\log \sigma\left(\beta \log \frac{\pi_\theta(y_w|x)}{\pi_{\text{ref}}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_{\text{ref}}(y_l|x)}\right)$$

Translation: increase the probability of the chosen response *relative to the reference model*, and decrease the rejected one. The reference model (usually your SFT checkpoint) acts as an anchor so the policy doesn't drift into incoherence.

DPO is stable, well-understood, and became the de facto standard for preference alignment in 2024-2025. But it has a known failure mode called "likelihood displacement" — the probability ratio between chosen and rejected moves in the right direction, but neither becomes more likely in absolute terms. The model learns to rank correctly without actually generating better text.

### ORPO: One stage, no reference

ORPO goes further. It merges SFT and preference alignment into a single training pass and eliminates the reference model entirely. The trick: add an odds-ratio penalty to the standard SFT loss.

$$\mathcal{L}_{\text{ORPO}} = \mathcal{L}_{\text{SFT}} + \lambda \cdot \mathcal{L}_{\text{OR}}$$

The SFT term keeps the model fluent. The odds-ratio term pushes chosen responses up and rejected ones down. No reference model means half the memory of DPO, one training stage instead of two.

The trade-off: ORPO is newer and less battle-tested at scale. But for resource-constrained setups — like fine-tuning a 7B model on a single GPU — it's the more efficient choice.

**When to use which:** If you already have a strong SFT model and want to stay close to validated behavior (say, regulatory QA style), DPO's reference anchor is valuable. If you're starting from scratch and want one training run, ORPO.

---

## Distillation: Stealing from the smart kid

Distillation isn't a training objective — it's a data source. You use a big, expensive teacher model to generate training data for a smaller, cheaper student.

The most common form today: prompt the teacher (GPT-4, Claude, DeepSeek-R1) to generate thousands of responses or reasoning traces. Then SFT the student on those outputs. This is how DeepSeek-R1-Distill-Qwen-7B was made. It's how most "open-source" models bootstrap capability.

There's also **on-policy distillation**, where the student generates its own responses and the teacher corrects them. This closes the exposure-bias gap — the student never sees its own mistakes during standard distillation, so it doesn't learn to recover from them. "Distillation by Student" (conditioning the teacher on student-generated text) outperforms "Distillation by Teacher" by up to 6%.

The ceiling is real: a student can never reliably exceed the teacher. But a 7B model distilled from a 400B+ model captures a surprising fraction of the teacher's capabilities at a fraction of the inference cost. For deploying models on edge devices or running local inference, distillation is the path.

Modern twist: **Distilled RL** — first distill reasoning traces via SFT, then run RL on the student. This outperforms either technique alone.

---

## RL: Learning by trial and error

This is where things get powerful. SFT and preference optimization work with static data. RL lets the model *explore* — generate responses, get scored, and update its policy to maximize reward. The model can discover strategies that no human ever demonstrated.

The RL framing for LLMs: the model is the agent, the prompt is the environment, generating tokens are actions, and a reward function scores the outcome.

### PPO: The expensive baseline

PPO was the original RLHF workhorse. It uses a learned critic model to estimate expected future reward at each token, then updates the policy with clipped importance sampling. Works well, but requires four models in memory simultaneously and the critic is often poorly calibrated early in training. Expensive, unstable, many hyperparameters.

### GRPO: Drop the critic

Group Relative Policy Optimization, introduced by DeepSeek in 2024, is the most consequential post-training innovation since RLHF. It eliminates the critic entirely.

The mechanism is elegant: for each prompt, sample a *group* of responses (8-64). Score each with a reward function. Then compute advantages *relative to the group*:

$$\hat{A}_i = \frac{r_i - \text{mean}(r)}{\text{std}(r)}$$

The group itself provides the baseline. No learned value function needed. This saves enormous compute and removes a major source of instability.

The breakthrough moment: DeepSeek-R1 showed that GRPO with simple binary rewards (math answer correct or incorrect) caused the model to **spontaneously develop** chain-of-thought reasoning, self-correction, and backtracking. Nobody taught it to "think step by step." The model discovered that reasoning *helps it get rewarded*, so it started reasoning. This was the "aha moment" that convinced the industry RL is the path to general reasoning.

### GSPO: Fixing GRPO's instability

GRPO has a problem: it computes importance-sampling ratios per token. In deep models or Mixture-of-Experts architectures, token-level ratios are noisy. Expert routing drifts after each gradient update — roughly 10% of activated experts differ between old and new policy for the same rollout. Accumulated over long reasoning chains, this causes severe instability and eventual model collapse.

GSPO, proposed by the Qwen team in 2025, fixes this by moving to **sequence-level** importance ratios:

$$\rho_{\text{seq}} = \exp\left(\frac{1}{|y|}\sum_t \log \frac{\pi_\theta(y_t|x,y_{<t})}{\pi_{\theta_{\text{old}}}(y_t|x,y_{<t})}\right)$$

This is the geometric mean of token-level ratios — a single number that captures how much the entire sequence has shifted. Clipping, KL, and optimization all happen at sequence level. The result: dramatically more stable training, especially for MoE models. No need for complex "Routing Replay" engineering hacks. Qwen3 was trained with GSPO.

### DAPO and the broader family

DAPO (ByteDance/Tsinghua, 2025) adds four specific fixes for long-horizon reasoning: asymmetric clipping to prevent entropy collapse, dynamic sampling to ensure each prompt has both correct and incorrect responses, and overlong reward shaping. It trained Qwen2.5-32B to outperform DeepSeek-R1-Zero with 50% fewer steps.

The broader trend: each generation of methods **eliminates a proxy**. PPO needed a critic and reward model. DPO eliminated the reward model. GRPO eliminated the critic. ORPO eliminated the reference model. GSPO simplified the importance sampling. Every step reduces infrastructure complexity while maintaining or improving capability.

---

## How they stack in practice

Modern post-training is a multi-stage pipeline:

```
Base Model
  → SFT (format, style, instruction following)
  → Preference Optimization (DPO/ORPO for alignment)
  → RL (GRPO/GSPO for reasoning and tool use)
  → [Optional] Distillation to smaller deployment models
```

Not every pipeline uses all stages. The choice depends on what you need:

| Goal | Method | Why |
|------|--------|-----|
| Teach instruction following | SFT | Simple, stable, establishes format |
| Align with human preferences | DPO | No reward model, works offline |
| Single-stage alignment on a budget | ORPO | Combines SFT + preference |
| Transfer to smaller model | Distillation | Near-teacher performance at 10% cost |
| Reasoning, math, code | GRPO/GSPO | Discovers strategies beyond training data |
| Maximum stability with MoE | GSPO | Sequence-level optimization |

---

## What this means for building agents

If you're building AI agents — especially in regulated domains like life sciences — the method choice has direct implications for validation:

**SFT and distillation** are deterministic-ish and relatively easy to document and reproduce. Defensible for CSV/GxP purposes.

**DPO/ORPO** add a preference dataset and reference model you need to version and justify. Medium validation burden.

**Full RL (GRPO/GSPO)** is the hardest to validate because it depends on stochastic rollouts and reward-model behavior. Worth it for reasoning-heavy tasks, but the audit trail is more complex.

The practical recommendation: start with RAG over your validated documents. SFT for structure and terminology. DPO for reviewer preferences. Distill to efficient local models. Only introduce RL for problems with well-defined, automatically measurable rewards.

---

## The bottom line

Post-training has become the primary battleground for model capability. Research from Meta and others shows that post-training alone can improve benchmark performance by 20-40% — gains that would require orders of magnitude more pre-training compute to achieve through scaling.

The frontier is clear: RL with verifiable rewards is unlocking reasoning capabilities that SFT and preference methods fundamentally cannot. But SFT and preference alignment aren't going away — they're the foundation that makes RL possible. The models dominating benchmarks in 2025-2026 aren't just bigger. They're trained with smarter post-training recipes.

The elimination trajectory continues. Each generation removes a proxy, simplifies infrastructure, and pushes capability further. The question isn't whether your model needs post-training. It's which stages, in what order, and how much compute you're willing to spend on each.
