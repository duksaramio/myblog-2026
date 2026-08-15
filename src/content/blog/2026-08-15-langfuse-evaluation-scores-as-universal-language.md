---
title: "Langfuse Evaluation: Scores as a Universal Language for LLM Quality"
pubDate: 2026-08-15
description: "Langfuse treats every quality judgment — human, LLM, code, user feedback — as a single data type. Here's how that design choice changes how you evaluate LLM applications."
draft: false
tags: ["langfuse", "evaluation", "llm", "ai-engineering", "observability", "llm-as-judge", "experiments"]
audioUrl: "https://file.duklee.net/audio/2026-08-15-langfuse-evaluation-scores-as-universal-language.wav"
---

Most teams evaluating LLM applications have a fragmented mess. Human annotations live in one spreadsheet. LLM-as-a-Judge scores live in a script output somewhere. User feedback goes to a dashboard nobody checks. And programmatic checks run in CI but nobody correlates them with the other signals.

Langfuse's evaluation system has one design decision that cuts through this: **every quality judgment becomes a score**. A human annotation, an LLM judge output, a regex check, a thumbs-down from a user — they all produce the same data object. Same structure, same analytics, same dashboards.

That sounds simple. It changes everything downstream.

## What a Score Actually Is

Every score in Langfuse has four properties: a name (like "correctness"), a value, a data type, and an optional comment.

The data types are numeric (0.9), categorical ("correct" / "partially correct"), boolean (pass/fail), and text (free-form notes). Numeric for continuous judgments. Categorical for discrete labels. Boolean for binary checks. Text for qualitative feedback that you'll formalize later.

Scores attach to traces, observations, sessions, or dataset runs. Most commonly you attach them to traces — a single end-to-end interaction gets scored.

The important part: scores can be added at any time. Unlike tags (which describe what something is and are immutable after tracing), scores measure how good something is and can be added hours, days, or weeks later. You can run a new LLM-as-a-Judge evaluator on last week's production traffic and get fresh scores on old traces.

## The Five Ways to Create Scores

**LLM-as-a-Judge** — an LLM evaluates outputs against a rubric. You define criteria, map variables from your traces (input, output, metadata via JSONPath), and the judge produces structured scores with reasoning. GPT-4o, Claude Sonnet, Gemini Pro — anything with structured output support works. Research shows 80-90% agreement with human evaluators, comparable to inter-annotator agreement between humans.

**Code evaluators** — deterministic Python or TypeScript that runs inside Langfuse. No LLM involved. Exact match, regex, JSON validation, schema checks, business rules. The runtime is sandboxed: standard library only, no network, 2-second timeout. Sounds restrictive — it's enough for the checks that actually matter in production.

**Scores via UI** — humans click through traces and assign scores. Requires score configs to be set up first. Also available from experiment compare views for annotating experiment results.

**Annotation queues** — structured review workflows. Create a queue with score configs, assign traces to it, reviewers work through items with keyboard shortcuts. Designed for domain experts building ground truth datasets.

**Scores via API/SDK** — programmatic ingestion. Your application code, CI pipeline, or custom evaluation service computes a score and sends it to Langfuse. This is the path for user feedback (thumbs up/down), guardrail results, and custom evaluation pipelines.

## The Observation-Level Shift

Here's where Langfuse diverges from most evaluation platforms: they're moving from trace-level to observation-level evaluation.

A trace is a full end-to-end interaction. An observation is a single operation within that trace — one LLM call, one retrieval, one tool invocation. The difference matters.

Say your agent does: retrieve documents → generate answer → call a tool → format response. With trace-level evaluation, you score the whole thing. With observation-level evaluation, you can run a relevance evaluator on just the retrieval step, a toxicity check on just the LLM generation, and a format validator on just the tool call. Same trace, different evaluators on different operations.

This also means dramatically faster execution. Observation-level evaluations process asynchronously and in parallel. You can target specific observation types (only customer-facing LLM calls, not internal ones), filter by metadata, and stack observation filters with trace filters. Want to evaluate "all LLM generations in conversations tagged 'customer-support' for premium users"? That's a filter combination, not a custom pipeline.

Trace-level evaluators are deprecated. The migration deadline is tied to Langfuse v4.

## Experiments: The Offline Path

Experiments are how you test before deploying. Create a dataset (collection of inputs + optional expected outputs), write a task function (your application logic), and run the task against every item. Then score the results.

The dataset piece is worth highlighting:

- **Versioning** — every add, update, delete, or archive creates a new version. You can fetch datasets at specific timestamps and run experiments against historical dataset states. This means reproducible experiments even after items change.
- **Schema enforcement** — optional JSON Schema validation on inputs and expected outputs. Invalid items get rejected with detailed errors.
- **Media support** — images, audio, video in dataset items. Python SDK >= 4.10.0 and JS/TS SDK >= 5.6.0.
- **Production data pipeline** — select bad traces from production, add them to a dataset, have an expert add expected outputs, run experiments against them.

Running experiments via the SDK gives you full control: custom task functions, item-level evaluators, run-level evaluators (aggregate metrics), configurable concurrency, and automatic tracing. The result object has a `.format()` method that prints a clean summary.

```python
result = langfuse.run_experiment(
    name="Customer Support Test",
    data=test_data,
    task=my_agent,
    evaluators=[accuracy_eval, tone_eval],
    run_evaluators=[avg_accuracy],
    max_concurrency=10,
)
print(result.format())
```

You can also run prompt experiments via the UI — select a prompt version from Prompt Management, pick a dataset and model, and compare results without writing code. Good for quick iterations.

## Score Analytics: Zero-Config Validation

Once you have scores, Score Analytics works immediately. No configuration needed.

Select one score: get distribution charts, trend over time, and statistics (count, mean, std dev). Select two scores of the same type: get correlation metrics, confusion matrices, and agreement statistics.

The two-score comparison is where it gets useful. Run GPT-4o and Gemini as judges on the same traces, compare their scores. Pearson correlation of 0.984? Your evaluation is reliable. Cohen's Kappa of 0.85 between human annotations and your LLM judge? The AI evaluations are trustworthy enough to automate.

The matched vs all data view exposes coverage gaps. If you have 1,143 individual scores but only 567 matched pairs, half your traces only have one evaluation method. That's a signal to add more evaluators.

Limitations: two scores max (pairwise for multi-way), same data type only, text scores excluded, auto-sampling at >100k scores.

## CI/CD Integration

Langfuse ships a GitHub Action (`langfuse/experiment-action`) that runs experiments in your pipeline and gates on score thresholds.

The flow: write an experiment script with an `experiment(context)` function, define evaluators, raise `RegressionError` when a score violates your threshold. The action posts a PR comment with pass/fail status, scores, a link to the Langfuse comparison view, and a table of item outputs.

```python
def experiment(context: RunnerContext):
    result = context.run_experiment(
        name="PR gate",
        task=my_task,
        evaluators=[exact_match],
        run_evaluators=[avg_accuracy],
    )
    accuracy = next(
        e.value for e in result.run_evaluations if e.name == "avg_accuracy"
    )
    if accuracy < 0.95:
        raise RegressionError(
            result=result, metric="avg_accuracy",
            value=accuracy, threshold=0.95,
        )
    return result
```

Also works with Pytest and Vitest if you prefer standard test frameworks.

## The Bottom Line

Langfuse's evaluation architecture makes one bet: that unifying all quality signals into a single score primitive, and operating at observation-level granularity, is more valuable than specialized evaluation tools for each method. The score analytics, CI/CD gating, and dataset versioning all follow from that foundation.

If you're evaluating LLM applications and your signals are scattered across spreadsheets, scripts, and dashboards — the score-as-universal-primitive approach is worth looking at. Not because it's novel, but because it forces you to treat evaluation as a first-class engineering concern rather than an afterthought.
