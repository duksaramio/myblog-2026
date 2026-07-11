---
title: "What 'Translating Business Problems into Claude Solutions' Actually Tests on the Architect Exam"
pubDate: 2026-07-11
description: "I dug into ten study guides and the official CCA-F exam guide to figure out what 'Domain 1.1: Translate business problems' really means. Half of the study material is wrong about the exam name. The actual translation skill lives inside seven official task statements."
draft: false
tags: ["claude", "ai-architecture", "llm", "anthropic", "agentic-ai", "exam-prep"]
---

I spent a chunk of this week preparing for the Claude Certified Architect exam. The first domain every guide tells you to master is "Translate business problems into Claude-based AI solutions." I assumed this would be a clean, well-defined competency. It isn't. After reading ten study guides plus the official exam guide, I found that the framing is half myth, half cargo cult, and the actual translation skill hides inside seven official task statements the guides barely mention.

Here's what I learned and what's actually worth studying.

## The exam isn't called "Professional"

Most of the study material floating around calls it the "Anthropic Certified Architect – Professional" exam and gives Domain 1 a weight of 17%. Both are wrong.

The real exam is the **Claude Certified Architect – Foundations (CCA-F)**, launched March 13, 2026 as part of Anthropic's Partner Network. It's 60 questions, scored 100 to 1,000, with a 720 passing threshold. Domain 1 is "Agentic Architecture & Orchestration" and carries **27% of the score**, not 17%. Domain 1 isn't "Solution Design & Architecture" either.

This matters because if you study the wrong domain names, you'll mis-weight your prep. The exam rewards Agentic Architecture + Orchestration over generic solution design. The translation skill is part of it, but it's the substrate, not the headline.

## "Translate business problems" is not an official task statement

Here's the part that surprised me most. I read the official PDF word for word. There is no task statement titled "Translate business problems into Claude-based AI solutions." Not in Domain 1, not anywhere.

The closest things are seven official task statements in Domain 1:

1.1 Design and implement agentic loops for autonomous task execution
1.2 Orchestrate multi-agent systems with coordinator-subagent patterns
1.3 Configure subagent invocation, context passing, and spawning
1.4 Implement multi-step workflows with enforcement and handoff patterns
1.5 Apply Agent SDK hooks for tool call interception and data normalization
1.6 Design task decomposition strategies for complex workflows
1.7 Manage session state, resumption, and forking

The translation skill is what lets you answer those seven tasks correctly. Every official scenario starts with a business context (customer support agent, multi-agent research system, structured data extraction) and you have to map it onto the right architecture. But the scoring is on whether you pick the right architectural shape, not on whether you articulated the business problem elegantly.

This is the kind of distinction that separates "studied ten guides" from "passed the exam."

## The translation framework that actually works

Here is the synthesis I'd actually use to study. It's a 5-step framework I extracted by triangulating the user's guides against Anthropic's "Building Effective Agents" engineering blog.

### Step 1 — Discover and deconstruct

Before you touch architecture, find the actual pain. Ask:

- Who has the pain? (Actor — executive, operator, customer?)
- What are they trying to accomplish, not what tool are they asking for? (Job to be done)
- How is it done today? (Baseline — cost, time, error rate)
- What are the constraints? (Regulatory, latency, cost ceiling, HITL required)
- What does success look like, as one number? (Success metric)

Every study guide hammers this. Every exam scenario tests whether you did it.

### Step 2 — Decide if this is even a Claude problem

Apply the Claude Fit Test:

1. Is the input or output unstructured natural language? If no, use traditional code.
2. Is there ambiguity, judgment, or synthesis required? If no, use rules.
3. Does it require world knowledge or reasoning beyond lookup? Yes means Claude is strong candidate.
4. Can failure be contained with HITL or guardrail? If no, do not fully automate.

A surprising number of the practice scenarios in the guides are presented as "must use Claude" when deterministic code would do better. The exam will penalize you for over-AI-ifying a payroll tax calculation.

### Step 3 — Classify the problem shape

From the official scenarios, five recurring shapes map to default patterns:

| Shape | Default pattern |
|---|---|
| Classification / extraction | Augmented LLM with structured output |
| Generation / synthesis | Workflow (retrieve → generate → validate) |
| Reasoning / decision | Workflow with decomposition or agentic loop |
| Conversation / orchestration | Agentic with explicit tools and escalation |
| Discovery / search | RAG or multi-agent research system |

The "augmented LLM / workflow / agentic" tripartite taxonomy you see in every guide is actually wrong. Anthropic's official hierarchy treats the augmented LLM as the **building block**, with workflows and agents as the two higher-level shapes. Workflows have five named sub-patterns: prompt chaining, routing, parallelization, orchestrator-workers, and evaluator-optimizer. None of the user's guides mention the five named patterns. That's a gap.

### Step 4 — Choose architectural shape and apply Domain 1 skills

Pick workflow or agent:

- **Workflows** are for known inputs and predictable steps. Compliance, audits, and predictable business processes.
- **Agents** are for open-ended problems where you can't predict the number of steps.

Escalation rule (from Anthropic's blog): start simple, escalate only when the simpler option demonstrably fails. Most production systems should be workflows, not agents.

Then, regardless of which shape you pick, the official Domain 1 skills that show up on the exam are:

- **`stop_reason` field** for loop control. Continue on `tool_use`, terminate on `end_turn`. Never parse natural language to decide when to stop. Never use iteration caps as the primary control flow. Never check `response.content[0].type == "text"` as a completion indicator (text and tool_use blocks can coexist in the same response).
- **Hub-and-spoke orchestration** with isolated subagent contexts. Subagents do not inherit the coordinator's conversation history.
- **`Task` tool** for spawning subagents. `allowedTools` must include "Task" for a coordinator to invoke subagents.
- **Programmatic enforcement** for compliance-critical steps. The exam's most-tested concept: when the business rule is "verify customer identity before refund," use a programmatic gate, not a prompt instruction.
- **`PostToolUse` hooks** for result normalization and pre-call hooks for policy enforcement.
- **Task decomposition** that's appropriate to the workflow. Prompt chaining for predictable multi-aspect reviews. Dynamic decomposition for open-ended investigation.

### Step 5 — Map to value pillars and frame as business value

Every exam answer needs to close the loop to business value. The five pillars the guides repeat are: Efficiency, Transformation, Productivity, Cost, Performance SLAs.

But here's a thing I want to flag. **Anthropic's own docs do not use the term "value pillars"** anywhere I found. It might be useful study language. It might be third-party cargo cult. The exam will reward you for connecting architecture to a measurable business outcome either way.

The trap the guides correctly identify: "Reduce support handle time by 30%" sounds like productivity but is actually efficiency. "Let support agents handle 2x tickets without burnout" is productivity. The phrasing matters because efficiency and productivity drive different architectural choices.

## The medical billing question the guides get wrong

One guide presents this practice question:

> A medical billing company analyzes a 150-page patient record (~60K tokens) against a 5-page insurance policy document (~2K tokens). They process the same policy for 2,000 different patients every day. How should they handle the policy document?

Option A: RAG pipeline to chunk and retrieve.
Option B: Append policy to end of system prompt, use prompt caching, pass patient record in user message.
Option C: Put policy at beginning with `[co-locate]` tag, enable prompt caching, stream patient record after.

The guide doesn't give the answer. Let me give it.

**A is wrong.** RAG is for large, dynamic, or infinite corpora. A 2K-token policy that fits in context and is identical across requests is the textbook case for prompt caching, not RAG.

**B is mostly right but has a subtle bug.** If you place `cache_control` on the varying block (the user message containing the patient record), the prefix hash differs on every request — no cache hit. The breakpoint should go on the **last block of the static system prefix**, not on the varying block. Anthropic's docs call this a "common mistake."

**C is wrong.** `[co-locate]` is not a Claude feature. It's hallucinated or imported from another platform. Prompt caching already co-locates content via prefix matching; no special tag exists.

The correct version: put the policy at the beginning or end of the system prompt, mark the last block of the policy with `cache_control: { type: "ephemeral" }`, and put the patient record in the user message. With 2,000 identical-policy requests per day, you pay cache write once and 0.1x base input on the rest. That's a 90% reduction on the policy portion. But also — and this is the bigger finding — **prompt caching implementation details are out of scope on the actual exam.** The official PDF lists "Prompt caching implementation details (beyond knowing it exists)" as a topic that will NOT appear. So the practice question is useful for building intuition but it's not representative of CCA-F.

## The anti-patterns worth memorizing

The exam loves to test six specific anti-patterns:

1. **Parsing natural language to determine loop termination.** Use `stop_reason`.
2. **Arbitrary iteration caps as primary stopping mechanism.** Caps are a safety net, not control flow.
3. **Checking assistant text content as completion indicator.** Text and tool_use can coexist.
4. **Prompt-only enforcement when deterministic compliance is required.** Use hooks/gates for finance, identity, refunds.
5. **Tool description overlap.** 18 tools with minimal descriptions degrades selection. Rename, split, differentiate.
6. **Single-pass review of large inputs.** Attention dilution causes contradictory findings. Split into per-item passes plus integration pass.

## What I'll actually study next

The translation skill is real and useful. It's the substrate for almost every exam question. But the way to prepare is not to memorize a 5-step translation framework. It's to memorize the seven Domain 1 task statements and the skill lists inside each one. Then the translation becomes the tool you use to apply those skills to scenario-based questions.

The third-party framing of "Domain 1.1 = Translate business problems" is convenient for course designers but it isn't the way the exam scores you. The exam scores you on architectural decisions driven by the translation, not on the translation as an isolated competency.

If you're studying for CCA-F, my recommendation is:

1. Read the official exam guide PDF cover to cover. It's short and direct.
2. Read Anthropic's "Building Effective Agents" engineering blog. It defines the workflow vs. agent distinction the exam relies on.
3. Read the platform docs on prompt caching, stop reasons, and the Agent SDK overview.
4. Practice the seven Domain 1 task statements in code. Build something with subagents, programmatic enforcement, and `stop_reason` control.
5. Then, if you have time, layer on the 5-pillar business translation framework as a study aid for explaining your decisions.

The exam rewards people who can think through the architecture, not people who can recite translation frameworks. Build first, label second.