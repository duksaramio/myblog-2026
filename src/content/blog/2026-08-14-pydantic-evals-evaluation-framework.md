---
title: "Pydantic Evals: The AI Evaluation Framework That Gets Type Safety Right"
pubDate: 2026-08-14
description: "Pydantic Evals is a code-first evaluation framework for AI systems. 22 docs deep, here's what makes it different from every other eval tool out there."
draft: false
tags: ["ai", "evals", "python", "pydantic", "llm", "testing", "open-source"]
---

Most AI eval tools give you a dashboard and a prayer. Pydantic Evals gives you Python types and a test suite. I read through all 22 documentation pages. Here's why that design choice changes everything.

## The Core Idea

Pydantic Evals is a standalone package (`pydantic-evals`, no dependency on `pydantic-ai`) that treats AI evaluation like software testing. The mental model is pytest for LLMs:

| Unit Testing | Pydantic Evals |
|---|---|
| Test function | Case + Evaluator |
| Test suite | Dataset |
| `pytest` | `dataset.evaluate(task)` |
| Test report | EvaluationReport |
| `assert` | Evaluator returning `bool` |

The difference: AI systems are probabilistic, so instead of pass/fail, you get scores (0.0–1.0), labels ("good", "hallucination"), and assertions with reasons.

```python
from pydantic_evals import Case, Dataset
from pydantic_evals.evaluators import EqualsExpected, LLMJudge

dataset = Dataset(
    name='my_eval',
    cases=[Case(inputs='What is 2+2?', expected_output='4')],
    evaluators=[
        EqualsExpected(),  # deterministic, free, instant
        LLMJudge(rubric='Response is factually accurate'),  # nuanced, costs money
    ],
)

report = dataset.evaluate_sync(my_llm_function)
report.print()
```

## The Evaluator Stack

This is where Pydantic Evals pulls away from the pack. Three layers, all composable in a single dataset:

**Layer 1: Deterministic checks.** `EqualsExpected`, `Contains`, `IsInstance`, `MaxDuration`. Free, instant, deterministic. Use them for format validation, required content, performance SLAs.

**Layer 2: LLM-as-a-Judge.** `LLMJudge` with rubrics, `GEval` with chain-of-thought scoring. Costs money, slower, non-deterministic. Use for accuracy, helpfulness, tone, completeness.

**Layer 3: Behavioral checks.** `HasMatchingSpan` queries OpenTelemetry spans. `ToolCorrectness` asserts tool coverage. `TrajectoryMatch` grades tool-call sequences with F1 scoring. `ArgumentCorrectness` verifies tool inputs. All deterministic, all cheap.

The killer insight: you combine all three in one dataset. Fast checks filter out obvious failures before you spend money on LLM judges. Behavioral checks verify *how* the agent reached its answer, not just *what* it said.

## Case-Specific Evaluators

This is the feature that makes golden datasets practical. Instead of writing one generic rubric that works poorly everywhere, each case gets its own evaluator:

```python
dataset = Dataset(
    name='support_agent',
    cases=[
        Case(
            name='refund_request',
            inputs={'query': 'I want my money back', 'order_id': '12345'},
            evaluators=[
                LLMJudge(rubric="""
                    Response should:
                    1. Acknowledge the refund request empathetically
                    2. Ask for the reason for the refund
                    3. Mention our 30-day refund policy
                    4. NOT process the refund immediately
                """, include_input=True),
            ],
        ),
        Case(
            name='angry_customer',
            inputs={'query': 'This is unacceptable!', 'order_id': '12345'},
            evaluators=[
                LLMJudge(rubric="""
                    Response should:
                    1. Prioritize de-escalation with empathy
                    2. Avoid being defensive
                    3. Offer concrete next steps
                """, include_input=True),
            ],
        ),
    ],
)
```

The insight from the docs: if you could write a single evaluator rubric that perfectly captured your requirements across all cases, you'd just put it in your agent's instructions. Case-specific evaluators capture what "good" means for each scenario.

## Agentic Evaluators

For agents that use tools, Pydantic Evals has deterministic evaluators that grade the trajectory:

- **ToolCorrectness** — did the agent call the right tools? Multiset matching (order doesn't matter, but repeated calls do).
- **TrajectoryMatch** — did it call them in the right order? Three modes: exact match, in-order (LCS-based F1), any-order (multiset F1).
- **ArgumentCorrectness** — did the tool get the right inputs? Subset or exact match on arguments.
- **MaxToolCalls / MaxModelRequests** — budget discipline checks.

These are all deterministic, never call an LLM, and cost nothing. They answer the "did the agent do the right thing?" question that pure input/output checks can't.

## Online Evaluation

Same evaluator classes, wired to production. The `@evaluate` decorator attaches evaluators to any function:

```python
from pydantic_evals.online import evaluate, OnlineEvaluator

# Cheap check on 100% of traffic
@evaluate(OutputNotEmpty(), sample_rate=1.0)
async def my_agent(prompt: str) -> str: ...

# Expensive LLM judge on 1% of traffic
@evaluate(
    LLMJudge(rubric='Response is helpful'),
    sample_rate=0.01,
    max_concurrency=5,
)
async def my_agent(prompt: str) -> str: ...
```

Evaluators run in the background without blocking the caller. Results emit as OpenTelemetry events (`gen_ai.evaluation.result`), visible in Logfire's Live Evaluations view.

Key features: per-evaluator sampling, correlated sampling (same X% of calls run all evaluators), dynamic sample rates via callables, evaluator versioning for trend-line filtering, and custom sinks for alerting.

## Report Evaluators

After all cases run, report evaluators analyze the full experiment:

- **ConfusionMatrixEvaluator** — classification accuracy across classes
- **PrecisionRecallEvaluator** — PR curve with AUC
- **ROCAUCEvaluator** — ROC curve with AUC
- **KolmogorovSmirnovEvaluator** — KS statistic for class separation

Custom report evaluators return `ScalarResult`, `TableResult`, `ConfusionMatrix`, `PrecisionRecall`, or `LinePlot` — all rendered in the Logfire UI.

## Everything Else Worth Knowing

**Multi-run evaluation.** `repeat=5` runs each case 5 times. Results grouped by original case with per-group aggregated statistics. Two-level averaging ensures each case contributes equally regardless of failures.

**Dataset generation.** `generate_dataset()` uses an LLM to create test cases from typed schemas. Generates YAML/JSON with JSON Schema for IDE autocomplete.

**Lifecycle hooks.** `CaseLifecycle` provides per-case `setup()`, `prepare_context()`, and `teardown()`. Enrich metrics, prepare fixtures, conditionally clean up based on results.

**Retry strategies.** Built on Tenacity. Separate configs for tasks and evaluators. Exponential backoff, stop after N attempts.

**Third-party integration.** Wrap Ragas, DeepEval, or any other scoring library as a Pydantic Evals evaluator. The pattern is always: subclass `Evaluator`, adapt context, return score.

**Metrics and attributes.** `increment_eval_metric()` and `set_eval_attribute()` track custom data during task execution. Available to evaluators via `ctx.metrics` and `ctx.attributes`. Automatic metrics with Pydantic AI + Logfire: request counts, tokens, cost.

## What I'd Watch For

- **No built-in dataset versioning.** You save to YAML/JSON and commit to git. Fine for small teams, might need tooling at scale.
- **LLM judge costs add up.** With case-specific evaluators, each case might run 2-3 LLMJudge calls. Budget accordingly.
- **Logfire is the primary UI.** Console output works, but the real experience is in Logfire's web UI. If you're not using Logfire, you're missing half the value.

## Bottom Line

Pydantic Evals is the first eval framework I've seen that treats evaluation as a first-class engineering discipline, not an afterthought. The type system, the layered evaluator architecture, the online evaluation decorator, the span-based behavioral checks — these come from people who've built production AI systems and know what breaks. The case-specific evaluator pattern alone is worth the adoption: it makes golden datasets maintainable and domain knowledge explicit.

If you're shipping AI systems without systematic evaluation, you're guessing. Pydantic Evals is how you stop guessing.

`uv add pydantic-evals`
