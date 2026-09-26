---
title: "Hacker News Front Page Roundup — August 13, 2026"
pubDate: 2026-08-13
description: "DeepSeek ships an open-source agent harness, Google drops Gemini 3.7 Flash, OpenAI finally brings Codex to Linux, a security researcher rewrites the rules of DRAM, and Gloomberb wants to be your Bloomberg terminal replacement."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

## DeepSeek Harness Developer Preview — 473 points

[Source](https://deepseek.com/harness/en/)

DeepSeek is making a play for the agent infrastructure layer with "Harness," an open-source framework where every capability — models, tools, skills, sessions, sandboxes, storage, scheduling, even the UI — is a swappable plugin. It's built on Cordis, a plugin system that manages mounting, unmounting, and dependencies between components. The tagline is "Agent = Model + Harness," which is a deliberate positioning that the model alone isn't enough.

The framework ships with four runtime modes: Standard (full coding agent), Code (multi-step tool orchestration via TypeScript), Minimal (shell + file editor for benchmarking), and Creator (runtime inspection and plugin experimentation). There's an append-only session log that records everything the model sees — system prompts, reasoning, tool calls, subagent scheduling — making runs fully traceable and replayable.

The "everything is a plugin" pitch sounds clean architecturally, but the real test is whether the plugin ecosystem actually materializes. DeepSeek is shipping this as a developer preview with MIT license, which is the right move for adoption. The interesting tension here is that DeepSeek wants to be both the model provider *and* the harness layer — whether the community builds around their harness or rolls their own remains to be seen.

---

## Codex in ChatGPT Desktop App for Linux — 417 points

[Source](https://community.openai.com/t/codex-in-chatgpt-desktop-app-for-linux-is-now-in-preview/1390027)

OpenAI's ChatGPT desktop app with Codex integration is now available in preview for Linux. Supported distros include Ubuntu 24.04/26.04 LTS, Debian 13, and Fedora 43/44, with both .deb and .rpm packages available for x64 and ARM64. The announcement thread already has 13.6k views and significant community engagement.

The app bundles ChatGPT, Work, and Codex into a single native desktop experience for managing projects, working with files, and running browser workflows alongside Codex. This is the first time Linux users get a first-class Codex experience outside the browser, and the community reaction is predictably enthusiastic — with the usual gripes about OpenAI's download page inconsistently hiding the Linux option depending on which OS you're browsing from.

The real story here is OpenAI finally treating Linux as a first-class citizen for their developer tools. Linux is where most serious development happens, and the previous Mac/Windows-only desktop app was a conspicuous gap. Whether the Electron wrapper justifies itself over the web app remains an open question, but native file system access and tighter Codex integration could make the difference.

---

## Spaghettifying DRAM — 362 points

[Source](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts)

This is the kind of hardware security research that makes you question everything you thought you knew about memory isolation. The project, "skitter-creek-bath-salts" by xoreaxeaxeax (the same researcher behind the original MOVfusculator work), demonstrates that you can unlock *everything* on an AMD CPU by manipulating the DRAM controller's address translation layer — a single `xor dword` instruction that flips one bit in the memory controller.

The core insight is devastating in its simplicity: every security mechanism on the platform — the Platform Security Processor (PSP), System Management Mode (SMM), C6 idle-state DRAM carveouts, even CPU microcode — sits *above* the memory controller in the address translation pipeline. The locks guard physical addresses, not actual DRAM coordinates. Rearrange the coordinates and the barriers never notice.

The project walks through extracting the PSP's RSA engine (the fTPM's modexp routine), reading SMM entry vectors from SMRAM, dumping CPU register state from C6 carveouts, and even pulling live microcode patches from DRAM — all through the same alias-reach technique. It uses z3 to solve the GF(2) linear map that translates between the normal and "spaghettified" memory views. Developed on AMD Family 16h (the last generation with documented DRAM controller registers), but the underlying transforms extend to ARM and RISC-V. The entire exploit is one XOR instruction. The research is MIT-licensed.

---

## Gemini 3.7 Flash — 353 points

[Source](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)

Google shipped Gemini 3.7 Flash just three weeks after 3.6 Flash, and it's positioning this as the "most intelligent workhorse model yet for coding and agents." The benchmark claims: FrontierCode 1.1 Main jumps from 34.4% to 43.6%, DeepSWE v1.1 from 49.0% to 65.3%, and WebDev Arena Elo from 1538 to 1588. For knowledge work, it claims 34.0% on GDP.pdf (vs 22.0%) and 30.4% on AutomationBench (vs 17.0%).

The pricing is aggressive — $0.75/1M input tokens and $3.75/1M output tokens as an introductory rate through end of year, which is half the original 3.6 Flash cost. Google is clearly trying to make Flash the default choice for production agent deployments where cost matters.

The "three weeks between releases" cadence is either a sign of genuine algorithmic breakthroughs or a marketing sprint. The benchmark improvements are substantial on paper, but as always, vendor-selected benchmarks should be taken with salt. The real test is whether production users see these gains in their actual workloads, not on curated evals. Google is also tying this to Gemini Spark, their "24/7 personal agent," which suggests the model is being optimized for sustained autonomous operation rather than one-shot queries.

---

## Gloomberb — 321 points

[Source](https://gloom.sh/)

Gloomberb is an open-source Bloomberg terminal alternative — a keyboard-driven finance terminal available as both a desktop app and a TUI. It covers quotes, charts, financials, SEC filings, institutional holder data (13F), options monitoring, prediction markets (Polymarket/Kalshi), yield curves, FX, macro events, and even Congress trading disclosures. The command-bar interface uses shortcodes like `DES` (security details), `TOP` (ranked stories), `PM` (prediction markets), and `CG` (congress trades).

The project has 1.2k GitHub stars and is at version 0.10.4. It's installable via `curl -fsSL gloomberb.com/install | bash`, which is either convenient or a red flag depending on your threat model. The feature set is genuinely impressive for a free tool — it covers most of what a retail investor or independent analyst would need without a $24,000/year Bloomberg subscription.

The real question is data quality and latency. Bloomberg's value isn't just the terminal — it's the data infrastructure, the network effects of Bloomberg Chat, and the institutional-grade feeds. Gloomberb is pulling from public sources, which means it's competing on UX and accessibility rather than data exclusivity. For independent researchers, small funds, and anyone who doesn't need institutional compliance features, that's probably enough.

---

## The Throughline

Today's front page is dominated by two themes: the AI agent infrastructure arms race and the ongoing deconstruction of hardware security assumptions.

DeepSeek, Google, and OpenAI are all making moves on the agent stack simultaneously — DeepSeek with an open-source harness framework, Google with a cost-optimized model targeting agent workflows, and OpenAI by finally bringing their developer tools to Linux. The positioning is different but the bet is the same: agents that can actually do work autonomously will be the next battleground. DeepSeek is betting on composability, Google on price-performance, and OpenAI on developer ecosystem lock-in.

Meanwhile, the DRAM spaghettification research is a reminder that hardware security is often theater. One XOR instruction to bypass every memory protection the platform offers — PSP, SMM, fTPM, microcode — is the kind of finding that should keep security architects up at night. It's also a beautiful piece of engineering that demonstrates how security models break when you attack the foundations rather than the abstractions built on top.

Gloomberb rounds things out as the practical counterpoint — not everything is about AI agents and hardware exploits. Sometimes you just want to look at stock charts without paying six figures for the privilege.
