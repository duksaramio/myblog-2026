---
title: "Docker Sandboxes: Giving AI Agents Full Access Without Burning Down Your Machine"
pubDate: 2026-08-07
description: "Docker's new microVM sandboxing for AI agents. Five isolation layers, credential proxying, and enterprise governance. Here's what matters."
draft: false
tags: ["docker", "ai-agents", "sandboxing", "security", "microvm", "devtools"]
---

AI coding agents need to run code, install packages, and build containers. That's the whole point. But giving an autonomous agent full access to your machine is terrifying. One hallucinated `rm -rf` and you're restoring from backup.

Docker's answer is Sandboxes — microVM-isolated environments where each agent gets its own Linux kernel, Docker daemon, filesystem, and network. The CLI is called `sbx`. You install it, sign in with Docker, and launch an agent inside a sandbox with one command.

```bash
sbx run claude --name my-project
```

That's it. The agent runs inside a VM. It can do whatever it wants in there. Your host stays clean.

## Why MicroVMs, Not Containers

Containers share the host kernel. That's fine for trusted workloads you control. It's not fine for an AI agent that might hallucinate a destructive command. A container with your Docker socket mounted gives the agent full access to your environment. That's not isolation — that's a suggestion to behave.

Docker Sandboxes use lightweight microVMs instead. Each sandbox gets its own Linux kernel. The hypervisor boundary is the isolation control, not namespace trickery. Processes inside the VM are invisible to your host. The agent can't see your other containers, your files outside the workspace, or your host network.

The trade-off is resource overhead. A VM plus its own Docker daemon is heavier than a container. But for autonomous agents, complete isolation is worth the cost.

## Five Layers of Isolation

This is where it gets interesting. Docker didn't just slap a VM around the agent and call it done. There are five distinct isolation layers:

**1. Hypervisor** — Separate kernel per sandbox. Processes invisible to host. Symlinks pointing outside the workspace are not followed.

**2. Network** — Each sandbox has its own isolated network. All HTTP/HTTPS traffic routes through a host-side proxy. Raw TCP, UDP, and ICMP are blocked at the network layer. Sandboxes can't talk to each other or to your host's localhost.

**3. Docker Engine** — Each sandbox runs its own Docker daemon. When the agent runs `docker build` or `docker compose up`, those commands execute against the sandbox's engine. No path to your host Docker.

**4. Workspace** — Two modes. Direct mount (default) shares your working tree read-write — changes appear immediately on the host. Clone mode (`--clone`) creates a private Git clone inside the sandbox — the agent's edits never reach your host until you fetch them.

**5. Credential Proxy** — This is the clever one. The host-side proxy intercepts outbound API requests and injects authentication headers. Real API keys never enter the sandbox. The agent sees only a sentinel value like `proxy-managed`. A compromised sandbox can't read your Anthropic key because it was never there.

## The Credential Model

The proxy manages credentials for all major providers — Anthropic, OpenAI, Google, GitHub, Groq, Mistral, xAI, and more. You store secrets once with `sbx secret set`, and the proxy handles injection for every sandbox.

```bash
sbx secret set anthropic
sbx secret set openai --sandbox my-sandbox  # scoped to one sandbox
```

For GitHub access inside the sandbox:

```bash
echo "$(gh auth token)" | sbx secret set github
```

The agent can then create PRs, open issues, and interact with GitHub APIs. The token is never stored in plaintext inside the sandbox.

SSH agent forwarding works too. Your private keys stay on the host. The sandbox can request signatures for commit signing, but can't read or copy the key.

If you use 1Password, you can source credentials fresh from your vault on each launch:

```bash
ANTHROPIC_API_KEY="op://Work/Anthropic/credential" op run -- sbx run claude
```

The real value stays in 1Password. The sandbox never sees it.

## Network Governance

The network policy system is where Docker's enterprise DNA shows. Three presets:

- **Open** — everything allowed. Fine for personal experimentation.
- **Balanced** — default deny with common dev sites allowed. This is the right starting point.
- **Locked Down** — everything blocked, including model provider APIs. You whitelist explicitly.

```bash
sbx policy allow network api.example.com
sbx policy deny network ads.example.com
sbx policy check network api.anthropic.com  # test before running
```

You can scope rules to specific sandboxes, check traffic logs, and see which rules matched each request. For accessing host services from inside a sandbox, use `host.docker.internal` — but you have to add the localhost address to your allowlist first.

## Enterprise Governance

For organizations, Docker adds a full governance layer:

- **Organization policies** managed centrally via Docker Home UI or a Governance API
- **Team scoping** — different rules for different teams, synced from your IdP
- **MCP access policies** written in Cedar — control which Model Context Protocol servers agents can use, with per-request approval gates
- **Filesystem policies** — control which host paths sandboxes can mount
- **Sign-in enforcement** — restrict sandboxes to users in specific Docker orgs, deployed via MDM or Group Policy

When organization governance is active, only org allow rules grant access. Local allow rules become inactive. Local deny rules still apply, so developers can restrict further but never loosen restrictions. This is the right model for regulated environments.

## Audit Everything

Every policy decision is recorded. Local audit logs are JSON Lines files on the host. Cloud delivery stores events in Docker Cloud with configurable retention. SIEM forwarding supports Splunk, Dynatrace, and custom HTTPS endpoints.

Records capture metadata only — the resource, the action, the verdict, and denial reasons. No prompt content, no agent output. This is exactly what you need for compliance without privacy invasion.

For anyone in a regulated industry — GxP, CSV/CSA, validated systems — this audit trail is the difference between "we think our agents are safe" and "here's the evidence." The metadata-only approach means you can prove governance without exposing what the agent actually generated.

## What's Blocked by Default

Some things can't be changed through policy:

- Host filesystem access outside mounted workspaces
- Host Docker daemon
- Host network and localhost
- Direct communication between sandboxes
- Raw TCP, UDP, and ICMP
- Traffic to private IP ranges and link-local addresses

This is a sane default. You can't accidentally open a hole to your host Docker socket or expose your local network.

## The Catch

Nothing is free. Each sandbox runs a full VM with its own Docker daemon. That's real memory and disk overhead. If you're running multiple sandboxes in parallel, your machine needs to handle it.

Clone mode protects your host repo from modification, but NOT from inspection. Your `.env` files, untracked files, and anything under `.gitignore` are still readable by the agent inside the sandbox. If you have secrets in your working directory, they're visible.

The shared skills store is mounted read-write by default. Any sandbox can modify skills that other sandboxes load. This puts every sandbox that shares the store in the same trust boundary. Use `--no-share-skills` to opt out.

And Docker Desktop is not required — but Docker account sign-in is. The CLI uses Docker OAuth. For CI, you need a Personal Access Token.

## Bottom Line

Docker Sandboxes are the most complete answer I've seen to the question "how do I let an AI agent run wild without destroying my system." The five-layer isolation model is defense-in-depth done right. The credential proxy is genuinely clever — keeping real API keys out of the sandbox entirely is the kind of security design that actually works.

For individual developers, it's a better way to use AI agents. For organizations, the governance and audit layer makes it viable in regulated environments. The Cedar-based MCP policies and SIEM-forwarded audit logs aren't toys — they're the kind of controls that compliance teams actually accept.

The resource overhead is real, and clone mode's read-only-but-inspectable boundary has a gap. But these are engineering trade-offs, not design flaws. If you're running AI agents on anything you care about, this is worth looking at.
