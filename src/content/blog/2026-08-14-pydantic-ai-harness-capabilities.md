---
title: "Pydantic AI Harness: 30 Capabilities That Turn a Bare Agent Into a Platform"
pubDate: 2026-08-14
description: "I read through all 30 capability docs in Pydantic AI's new harness library. Here's what's actually worth your time and what's just API surface."
draft: false
tags: ["ai", "agents", "python", "pydantic", "open-source", "architecture", "agentic-ai"]
---

Pydantic AI shipped a harness library. Not a framework — a library. Thirty standalone capabilities you compose into an agent like LEGO blocks. I read every single doc page. Here's what matters.

## The Core Idea

Pydantic AI core gives you the agent loop, model providers, and a few fundamental capabilities: web search, tool search, thinking, MCP. Everything else lives in `pydantic-ai-harness`. You install it alongside `pydantic-ai-slim` and pick only what you need.

```bash
uv add pydantic-ai-harness
```

The key architectural pattern is "fall up" — capabilities start as local implementations that work with every model, then gain provider-native support when available. Web search, web fetch, and image generation already work this way in core. Skills, code mode, and compaction are next.

## The Standout: Code Mode

This is the one that changes how you think about tool calling. Instead of the model issuing one tool call per action — each a separate round-trip — Code Mode wraps everything into a single `run_code` tool. The model writes Python that calls your tools as functions.

```python
# What the model writes inside run_code:
paris, tokyo = await asyncio.gather(
    get_weather(city='Paris'),
    get_weather(city='Tokyo'),
)
# Local computation, then return
paris_c = round((paris['temp_f'] - 32) * 5 / 9, 1)
{'paris': paris_c, 'tokyo': tokyo_c}
```

Both weather calls run in parallel. The conversion runs in the sandbox. One model round-trip instead of three. The sandbox is Monty — a restricted Python runtime with no third-party imports, no wall-clock primitives, and controlled filesystem access via mount points.

Code Mode is the early candidate to graduate into core. That tells you something about where the team thinks agent architecture is heading.

## Multi-Agent Orchestration: Two Levels

The harness has two delegation capabilities at different altitudes:

**SubAgents** exposes one `delegate_task(agent_name, task)` tool. Each delegation is its own tool call and model turn. Per-delegate budgets (usage limits, timeouts, max calls), model selection from a configurable menu, error containment. Good when delegations are occasional or when each result needs the parent's judgment.

**Dynamic Workflow** moves the choreography into code. The model writes a Python script that calls sub-agents as async functions — fan-out, chaining, voting, retry loops — all in one tool call. Intermediate results never enter the parent's context. This is the Code Mode idea applied to whole agents instead of tools.

Start with SubAgents. Convert to Dynamic Workflow when the orchestration is the actual work.

## Context Management: The Trio

Long-running agents die three deaths. The harness addresses all three:

**Compaction** — a menu of strategies (sliding window, summarization, deduplication, tiered escalation) that edit message history before each request. All edits persist. All preserve tool-call/tool-return pairing.

**Tool Output Limits** — intercepts oversized tool returns when produced. Three modes: Truncate (zero-LLM, lossy), Spill (zero-LLM, lossless, read-back-on-demand), Summarize (one LLM call). Configurable size bands with per-tool overrides.

**System Reminders** — re-injects behavioral guidance mid-run to counter instruction fade. Static reminders on a cadence, or dynamic callables (including a zero-cost goal re-anchoring and an LLM-powered nudge). Injected as ephemeral tail parts behind a CachePoint — never persisted, never invalidates the prompt cache.

That last design detail matters. Several capabilities use the ephemeral-tail pattern: mutable content appended behind a `CachePoint` so the durable prefix stays byte-identical across turns. Planning, System Reminders, and Memory all do this. It's the kind of engineering that separates production-grade agent infrastructure from demos.

## Persistence and Memory

**Step Persistence** records everything at each boundary: append-only step events, continuable snapshots, and a tool-effect ledger. After a crash, you know exactly which tools started but never reported back. Four backends: in-memory, file, SQLite, MongoDB. Media externalization happens automatically for large payloads.

**Memory** gives agents a persistent notebook with optimistic concurrency, namespace isolation, and bounded prompt injection. The model sees a curated excerpt of MEMORY.md plus file names — not the entire store. On-demand tools for read, write, delete, and search. Stores: file (atomic Markdown + SQLite journal), SQLite, Postgres.

**Conversation Search** layers BM25 search over Step Persistence's stored history. Recall turns that compaction dropped, and past runs in the same store. Pure Python, no dependencies.

## The Rest Worth Noting

**FileSystem** and **Shell** give agents sandboxed I/O with allow/deny controls, environment scrubbing (including a preset that strips LLM API keys from spawned commands), and automatic background process cleanup.

**Repo Context** auto-loads CLAUDE.md/AGENTS.md from the workspace tree and exposes an inventory tool for the repo's coding-assistant assets. The nested-on-traversal mode surfaces directory-specific instructions as the agent navigates.

**Guardrails** validates all three edges of an agent run — prompt in, tool calls, output out — with allow/block/replace/retry/approve verdicts. Ready-made secret and PII detectors.

**Planning** gives the model a structured task list with subtasks, dependencies, and a cache-safe live reminder. Persistent stores enable the planner/executor split: one agent writes the plan, another executes it, and the store is the only state that crosses between them.

**Browser Use** delegates open-ended web tasks to an autonomous browser-use sub-agent. One `browse_web` tool, real Chromium, domain allowlists, secret handling the model never sees. The complementary approach — scripted Playwright-style tools — is better for known flows. Browser Use is for fuzzy goals on unknown pages.

**Advisor** lets an executor consult a separate advisor model. Provider-native on Anthropic/OpenRouter, local fallback everywhere else. The local path shares the parent's usage accounting.

**Runtime Capability Creation** — the agent writes, validates, and persists new Pydantic AI capabilities during one run for activation on the next. Yes, the agent extends itself. The activation boundary is deliberate: capabilities become live on the next `agent.run()`, not the current one.

## What's Missing

The harness is 0.x. APIs will break. A few things I'd watch for:

- **No streaming composition.** Dynamic Workflow runs sub-agents to completion in one tool call — you don't see intermediate results until it's done. The team acknowledges this.
- **ACP is experimental.** The Agent Client Protocol adapter for editors (Zed) works but is explicitly unstable.
- **No durable execution for all paths.** Local advisor consultations, Browser Use's `'agent'` session scope, and Memory's automatic injection all have durability caveats with Temporal/Prefect/DBOS.

## Bottom Line

Pydantic AI Harness is the most thoughtfully designed agent capability library I've seen. The cache-safe patterns, the explicit trust boundaries, the provider-adaptive "fall up" approach — these come from people who've shipped agents to production and learned what breaks. The 30 capabilities cover the full agent lifecycle: input validation, tool orchestration, context management, persistence, memory, multi-agent delegation, and output control.

If you're building on Pydantic AI, this is not optional. If you're evaluating agent frameworks, the harness is what makes Pydantic AI worth considering over rolling your own on top of a raw model API.

Install it. Pick three capabilities. Ship something.
