---
title: "DSPy Is Not a Prompt Framework — It's a Compiler"
pubDate: 2026-08-14
description: "I read all 13 deep-dive docs from DSPy's documentation. Here's what the framework is actually doing and why it matters."
draft: false
tags: ["dspy", "llm", "python", "optimizers", "open-source", "ai", "prompt-engineering"]
audioUrl: "https://file.duklee.net/audio/2026-08-14-dspy-is-not-a-prompt-framework.wav"
---

I went through every page in DSPy's "Diving Deeper" documentation — all 13 of them. Signatures, Adapters, Modules, Metrics, Optimizers, GEPA, Tools, ReAct, Settings, Saving, Flex, RLM, and the built-in module variants. Here's what I came away with.

## The Mental Model Most People Get Wrong

DSPy is not a prompt engineering library. It's a compiler for programs that use language models. The distinction matters.

A prompt engineering library helps you write better prompts. DSPy lets you declare what you want (Signatures), compose how to get it (Modules), and then *automatically optimize* the prompts, demos, and even model weights against a metric you define (Optimizers). You write the program once. The compiler finds the best version of it.

## Signatures: The Type System

Everything starts with a Signature. It's a Pydantic model that declares input fields, output fields, and task instructions. The string form `"question -> answer"` is shorthand — underneath, every Signature is a class with typed fields, descriptions, and a docstring that becomes the task instructions.

The critical insight: the docstring is the only thing optimizers rewrite. Field names, types, and descriptions stay fixed. This is deliberate — field names are part of the program's public interface. Other modules, caller code, and downstream consumers read `result.answer` by name. An optimizer that renamed fields would break everything around it.

Every mutation method — `with_instructions`, `with_updated_fields`, `prepend`, `append`, `delete` — deep-copies and returns a new class. Nothing mutates in place. This is what lets optimizers run hundreds of candidate variants without them stepping on each other.

## Adapters: The Prompt Layer

Adapters are where Signatures become actual prompts. ChatAdapter uses `[[ ## field ## ]]` markers. JSONAdapter uses structured JSON. XMLAdapter uses tags. TwoStepAdapter splits generation from extraction for reasoning models that format unreliably.

The adapter lifecycle is fixed: preprocess → format → LM call → postprocess → parse. You can debug any adapter by walking these five steps.

Type coercion is centralized in one function: `parse_value(value, annotation)`. Every adapter delegates to it. When a typed field misbehaves, that's where to look.

## Modules: Composition Done Right

A Module is simple: subclass it, define sub-modules in `__init__`, write `forward()`. Sub-modules are discovered by walking `self.__dict__` — assignment is registration. No `register_module()` call, no decorator, no inheritance trick.

The `__call__` method wraps `forward()` with infrastructure: usage tracking, callbacks, the caller module stack. Always invoke a module as `module(...)`, never call `forward()` directly. Settings propagate via context, not constructor args — `with dspy.context(lm=other_lm)` swaps the LM for every sub-module inside, no rewiring needed.

The `_compiled` flag is the key to multi-stage optimization. After an optimizer compiles a sub-module, it sets `_compiled = True`. Future optimizers skip it. This lets you optimize inner → embed in outer → optimize outer.

## The Module Zoo

Beyond Predict, ChainOfThought, and ReAct, there's a surprisingly deep collection:

**BestOfN** and **Refine** sample the same module multiple times with different rollout IDs and temperature 1.0, then score with a reward function. Refine adds feedback between attempts — it builds a snapshot of the module's source code and I/O, feeds it to an internal predictor that generates advice, and injects that advice as hint fields on the next attempt.

**ProgramOfThought** and **CodeAct** generate Python code and run it in a sandboxed Deno/WASM interpreter. CodeAct inherits from *both* ReAct and ProgramOfThought — it's a tool-using loop where the tool calls are Python code.

**RLM** (Recursive Language Model) is for large contexts. Instead of stuffing everything into the prompt, it hands the model a Python REPL where the context lives as variables. The model writes code to explore the data and calls `llm_query()` to ask sub-questions. One long-context problem becomes many short-context ones.

**Flex** is the most radical. It puts the module's *source code* into the optimization search space. GEPA doesn't just rewrite prompts — it rewrites the entire implementation. Different predictors, different control flow, more or less Python. The module's structure itself is what gets optimized.

## Metrics: The Only Thing That Matters

A metric is any callable `(gold, pred) -> score`. Duck-typed, no base class, no decorator. This simplicity is intentional — an existing scoring function from any NLP library wraps as a DSPy metric in one line.

The return type can be `bool`, `float`, or `dspy.Prediction(score, feedback)`. Each is handled differently. Booleans aggregate to percentages, floats average, and the Prediction shape feeds the feedback string to GEPA's reflection loop.

The `trace` parameter is the lever that makes one metric serve two purposes. When `trace is None` (evaluation), `SemanticF1` returns a continuous score. When `trace is not None` (optimization), it returns a binarized pass/fail. Same function, two modes.

## The Optimizer Landscape

DSPy ships a dozen optimizers. The selection guide boils down to two questions: what's the bottleneck, and what's your budget?

**Demo-tuning** (BootstrapFewShot family): Collects example traces where the metric passes and stuffs them into predictors as demos. BootstrapRS runs this N times with different seeds and picks the winner. KNNFewShot picks demos at inference time via embedding retrieval.

**Instruction-tuning** (COPRO, GEPA, MIPROv2): Rewrites the docstring on each predictor's signature. COPRO is breadth-first. MIPROv2 uses Bayesian optimization over the joint instruction + demo space. GEPA uses evolutionary search guided by natural-language feedback from the metric.

**Weight-tuning** (BootstrapFinetune): Bootstraps successful traces, writes them as training data, fine-tunes the LM. The last lever to pull.

The general advice: start with BootstrapFewShot. If instructions look wrong, add COPRO or GEPA. If both need tuning, use MIPROv2. If prompt-only has plateaued and the model is tunable, try BootstrapFinetune. Most teams never need to go past prompt-only optimization.

## GEPA: The Feedback-Driven Optimizer

GEPA is the most interesting optimizer. It maintains a population of candidate programs, scores each on a validation set, and uses a reflection LM to propose instruction edits informed by per-predictor feedback from your metric.

The key: your metric must return `Prediction(score, feedback)`, not just a float. The feedback string reaches the reflection prompt verbatim. A bare float works but gives you a much weaker optimizer — the reflection LM only sees "this got a score of 0.6" instead of "the answer was factually correct but missed the temporal qualifier."

GEPA samples from the Pareto frontier for exploration and returns the highest aggregate score for selection. The reflection LM cost dominates — budget accordingly. A medium budget on a 2-predictor, 100-example task means ~12-36 calls to the reflection LM.

## Tools and ReAct

A `dspy.Tool` is a Pydantic model over a callable. Schema, types, and description are introspected from `inspect.signature` by default. The `ReAct` module runs a thought → tool name → tool args → observation loop, with a `finish` tool that terminates it.

Tool execution errors become observations, not crashes. The LM sees the error text on the next iteration and can recover. Trajectory truncation handles context overflow by dropping the oldest tool call.

MCP tools bridge in via `Tool.from_mcp_tool(session, tool)`. Always async, because the MCP client session is async-native.

## Settings: Implicit but Composable

`dspy.configure()` for process-wide setup, `dspy.context()` for scoped overrides. Settings propagate via Python's `contextvars` — correct across `await` and `asyncio.create_task`.

The gotcha: plain `threading.Thread` does NOT inherit overrides. Use `dspy.Parallel` or manually snapshot and re-apply `thread_local_overrides`.

API keys are never serialized. `allow_pickle` defaults to False. `allow_unsafe_lm_state` strips endpoints by default. The security model is deliberate friction — explicit trust decisions at call sites.

## Saving and Loading

Two paths: state-only (JSON, human-readable, diff-able) and full-program (cloudpickle, for when the loading side doesn't have your source). `load_state` is transactional — it loads against a deep copy first and only commits if the trial succeeds.

Compile once, save, reload. The economics only work when you amortize the optimizer cost across many inference calls.

## Bottom Line

DSPy is a compiler. You declare your program's structure (Signatures + Modules), define what "good" looks like (Metrics), and let the optimizer find the best version. The three knobs — instructions, demos, and weights — cover every search space the framework exposes.

The parts that impressed me most: the immutability-by-deepcopy pattern that makes optimizer parallelism safe, the trace-based metric switching that serves both evaluation and optimization with one function, and Flex — the idea that the module's source code itself is the optimizable parameter. That last one is experimental and the interface is in flux, but it's where the concept of "programming, not prompting" fully lands.

If you're building anything non-trivial with LMs, stop writing prompts by hand. Write a Signature, define a metric, and let the compiler do the work.
