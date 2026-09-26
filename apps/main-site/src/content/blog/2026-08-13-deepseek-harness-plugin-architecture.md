---
title: "DeepSeek Harness: Everything Is a Plugin, Even the Agent Loop"
pubDate: 2026-08-13
description: "I went deep on DeepSeek's open-source agent harness. 219 packages, 94K lines of TypeScript, and a plugin architecture that makes Claude Code and Codex look monolithic."
draft: false
tags: ["ai", "agents", "deepseek", "harness-engineering", "open-source", "architecture", "typescript"]
audioUrl: "https://file.duklee.net/audio/2026-08-13-deepseek-harness-plugin-architecture.wav"
---

I cloned DeepSeek's open-source agent harness and spent a day inside it. What I found is the most architecturally ambitious agent framework anyone has shipped. Not the most polished. Not the most popular. But the most *principled*.

It's called `dsh`. MIT licensed. Currently at 0.1.0-rc.5 — developer preview, breaking changes expected. And it's built on a single, radical idea: **everything is a plugin**. Not "we have a plugin system." Not "you can extend some things." Everything. The agent loop, the model adapter, the tool registry, the session log, the UI — all Cordis plugins that can be swapped, patched, or replaced through configuration alone.

There is no privileged kernel.

## The Numbers

Let's get the scale out of the way:

- 219 packages across 40+ groups
- ~94,000 lines of TypeScript
- ~1,981 source files
- 640 test files
- 12,293 commits since June 2026

That last number is the one that should get your attention. Twelve thousand commits in roughly ten weeks. That's not a side project. That's a team shipping at full velocity.

## What Cordis Actually Is

The framework underneath is called Cordis, described in an academic paper on "spatiotemporal composability." That sounds like typical CS jargon, but the core idea is practical: plugins contribute services, typed events, and reversible effects to a shared context tree. Every registration is an effect — when a plugin unloads, everything it registered gets cleaned up automatically.

Think of it like dependency injection, but where the DI container is also the event bus, the lifecycle manager, and the configuration layer. A plugin registers a service on `ctx`, other plugins use it via `ctx.serviceName`, and when the first plugin unloads, every consumer's reference to it is automatically severed.

DeepSeek vendored the entire Cordis framework — nine packages — into their repo under `vendor/`, republished it under the `@deepseek-ai` scope, and documented 18 local modifications including lifecycle hardening that fixes reentrant disposal gaps the upstream never hit. That's commitment.

## The Capability Seam Pattern

This is the design pattern that makes the whole thing work. A "seam" is a replaceable capability with three roles:

1. **Service Definition** — declares the interface
2. **Service Provider** — implements it
3. **Consumer** — typically a model-facing tool that uses it

The filesystem seam, the subprocess seam, the shell seam, the LLM seam — they all follow this pattern. And here's why it matters: pointing the filesystem and process providers at a remote sandbox moves Bash, PTY, and LSP there in one config change. No fork. No adapter layer. The providers share the same execution world.

You want to swap DeepSeek for Claude as your model? Register a new LLM adapter on `ctx.llm`. You want to add persistent terminal sessions? Register a `ctx.terminals` backend. You want the agent to be able to modify its own plugin tree at runtime? There's an `extensions/` package for that. Yes, the agent can inspect and mount/unmount its own plugins while running.

## The Turn Flow

The agent loop is itself a plugin (`dsh-agent-loop`). Here's what happens when the agent processes a message:

```
turn/start
  claim input + queued message
  assemble prompt + tool schemas
  -> agent/pre-step (reject or enter)
     step/start
     derive model history from session log
     agent/request -> llm/stream -> assistant/message
     tool/call -> tools/pre-execute -> tools/execute -> tools/post-execute
     step/end
  -> agent/turn-stopping
turn/end
```

A **step** is one model request plus its tool calls. A **turn** is zero or more steps. The key events are waterfalls — listeners must call `next()` to delegate, or they short-circuit the chain. This means hooks can intercept, modify, or block at any point in the pipeline without changing the loop itself.

The design rule that ties it all together: **model-visible = logged**. Everything that reaches the model must be reconstructable from the session log. New model-visible input? You need a new session event. This makes replay, fork, recovery, and telemetry all derivable from one data source.

## The Tool Execution Pipeline

Most agent frameworks have a simple "call tool, return result" flow. DeepSeek has a 10-stage pipeline:

1. `tools/pre-execute` waterfall (hooks, permission checks, sandbox wrapping)
2. Monotonic guards (deny or abstain — once denied, can't be overridden)
3. Approval prompt (optional one-shot user confirmation)
4. `tools/execute` waterfall (timeout, retry, metrics wrapping)
5. Tool body executes
6. Filesystem write-intent gate (for file mutations only)
7. Tool-owned session events (todo writes, fs observations, hook invocations)
8. `tools/post-execute` waterfall (accept, block, replace, add context)
9. Normalization and `finalizeContent`
10. `tools/result` — frozen, authoritative outcome

This is overengineered for a toy. It's exactly right for a production system where you need to inject policy at every stage without coupling tools to specific policy services.

## Security

The security model is serious:

- **Sandbox backends**: Landlock (Linux kernel), bwrap (bubblewrap), Seatbelt (macOS)
- **Scrubbed environments**: spawned commands get env with all `*KEY*`/`*SECRET*`/`*TOKEN*`/`*PASSWORD*` variables dropped
- **Temp files**: private 0700 directories, random names, exclusive owner-only opens
- **Symlink safety**: `lstatSync().isSymbolicLink()` then `unlinkSync` — never follows links into targets
- **Approval workflows**: one-shot prompts before sensitive operations
- **Monotonic guards**: once a guard denies, no downstream listener can override it

The defensive patterns doc reads like a war journal — every rule maps to a bug class that actually shipped or nearly shipped. "Report orthogonal outcomes independently" came from a process that timed out AND exited 0 because it trapped the signal. "Dispose must reach quiescence" came from teardowns that issued kills but returned before the work stopped, leaving orphans.

## Interfaces

| Interface | Command |
|---|---|
| Web UI | `npx @deepseek-ai/dsh web` → localhost:3080 |
| CLI one-shot | `dsh --profile headless "task"` |
| ACP server | Agent Client Protocol for automation |
| JSON-RPC | Python SDK drives agent over stdio |
| Source | `pnpm dsh` from repo checkout |

The Python SDK is a separate package (`deepseek-harness-sdk`) that communicates with a bundled runtime over newline-delimited JSON-RPC on stdio. That's a clean separation — the TypeScript runtime does the heavy lifting, Python is a thin client.

## What's Actually Novel

Three things I haven't seen anywhere else:

**1. Self-modification.** The `extensions/` group lets the agent inspect and modify its own Cordis plugin tree at runtime. The agent can mount new plugins, unmount old ones, and see its own service graph. There's a demo (`pnpm run demo:cordis`) where the agent literally changes its own capabilities mid-conversation.

**2. Session-log-as-truth.** The append-only `SessionEvent` log isn't just a record — it's the source of truth for model history, fork, replay, telemetry, and persistence. `deriveMessages()` projects the log into model context. If it's not in the log, the model can't see it.

**3. Bilingual everything.** Every doc, every README, every user-facing string ships in English and Chinese. There's a translation verification gate, pairing conflict resolution, and a doc-budget system. This is a Chinese AI lab that takes international developer experience seriously.

## The Honest Assessment

**Strengths:**
- Plugin architecture is genuine, not marketing
- Engineering discipline is production-grade (per-file 100% coverage gate)
- Multi-interface by design (Web, CLI, ACP, JSON-RPC, Python)
- Security-first sandboxing with three OS-level backends
- Self-modification capability is genuinely novel

**Concerns:**
- Developer preview. Breaking changes are promised.
- 219 packages is a lot of surface area. The dependency graph is complex.
- Cordis is vendored with 18 local modifications. That's a maintenance fork, not a dependency.
- Primary optimization is for DeepSeek models. The adapter seam is model-agnostic by architecture, but the default paths assume DeepSeek.
- No tagged release yet. The AGENTS.md literally says "remove this section at the first tagged release."

## The Bottom Line

DeepSeek Harness is what happens when a well-funded AI lab decides to build an agent framework from first principles instead of bolting tools onto a chat API. The Cordis paper isn't decoration — the spatiotemporal composability model actually drives the design. Every component is replaceable because the framework was designed for replaceability from day one.

Is it overengineered? For a weekend project, absolutely. For a production agent platform that needs to support multiple model backends, multiple interfaces, multiple sandbox strategies, and runtime self-modification — no. It's exactly as complex as the problem demands.

The real question is whether the ecosystem will adopt it. Open-source agent frameworks live or die on community, not architecture. DeepSeek has the architecture. Now they need the plugins, the tutorials, and the "hello world to production in 30 minutes" experience that makes developers choose `dsh` over just calling the API directly.

But if you're building agent infrastructure and you want to understand what "everything is a plugin" actually means in practice — this is the codebase to study.

---

*Full analysis with architecture diagrams, package-by-package breakdowns, and source citations saved to the research vault.*
