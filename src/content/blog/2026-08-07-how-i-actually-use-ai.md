---
title: "How I Actually Use AI: Research, Build, Repeat"
pubDate: 2026-08-07
description: "My workflow for using AI agents to learn and build. No tutorial hunting — just research, feed docs to a coding agent, and iterate."
draft: false
tags: ["ai-agents", "workflow", "docker", "coding-agents", "rag", "learning"]
audioUrl: "https://file.duklee.net/audio/2026-08-07-how-i-actually-use-ai.wav"
---

I wanted to learn how to use Docker's new sandbox feature to deploy an AI RAG agent. The docs cover mostly "coding" agents — Claude Code, Codex, that kind of thing. Not "here's how to package your own agent idea into a sandbox."

So I did what I always do.

## The Workflow

**Step 1: Get ideas.** I had one: deploy a RAG agent inside a Docker sandbox.

**Step 2: Deep research.** I fired up 12 different chatbots and asked them all the same question from different angles. What's the sandbox architecture? What are the isolation layers? How does credential proxying work? What's the network model?

**Step 3: Feed into a deep research agent.** All those responses get compiled into a comprehensive report.

**Step 4: Publish.** That report becomes a [blog post](/blog/2026-08-07-docker-sandboxes-ai-agents). Now I have a reference I can actually use.

**Step 5: Read my own report.** I know what Docker Sandboxes can do. Now I need to figure out how to make it do what *I* want.

**Step 6: Feed it to a coding agent.** I gave my coding agent the sandbox docs, the tech stack I wanted (Pydantic AI, Qdrant, RustFS, Langfuse, Ollama), and the type of agent I wanted to build. No "find me a tutorial." Just "here's the context, build this."

**Step 7: Iterate.** A few rounds of coding, reviewing, fixing.

The result: a [RAG agent running inside a Docker sandbox](https://github.com/duksaramio/rag-agent-in-docker-sandbox) that ingests GxP SOPs from S3 storage, generates embeddings with a local model, vectorizes them into Qdrant, and answers compliance questions through a Pydantic AI agent. All containerized. All isolated.

![Running docker commands to build and launch the RAG agent sandbox](/running-docker-command.png)

Here's the stack in action:

![RustFS S3 object storage holding GxP documents](/rustfs.png)

![Qdrant vector database with document embeddings indexed](/qdrant.png)

![Langfuse observability traces showing agent execution](/langfuse.png)

## No More One-Size-Fits-All Tutorials

I no longer need to find a tutorial that matches my exact setup. There is no tutorial for "Pydantic AI RAG agent with Qdrant and RustFS running inside a Docker sandbox with Langfuse observability." That tutorial doesn't exist. It never will.

But my coding agent can generate the exact code example for my exact need. I give it the docs, the constraints, the architecture I want — and it builds it. The GitHub repo has the full working code: Dockerfile, docker-compose, API endpoints, vector ingestion scripts, everything.

![The sbx TUI dashboard showing the running RAG agent sandbox](/docker-sandbox-tui.png)

## A Few Thoughts

**AI is a tool. Use it like one.** If you think "AI is now doing the fun part (coding) and I'm stuck doing the boring part (checking errors, testing)," you're going to have a bad time. Reframe it: your new tool does 80% of the work. Use the time you freed up to improve the remaining 20%. That's where the real leverage is.

**Not everyone can do this today.** I watch coding agents churn out code and the sheer number of things I need to spot-check or validate — it's a lot. I'm not sure people without programming experience can pull this off right now. It takes domain knowledge to know when the agent is wrong. Smart kids might figure it out, but starting with AI *without* any hand-coding experience is a real gap.

**Does AI level the playing field or widen it?** Sean Goedecke has a great post, ["LLMs Reward Expertise"](https://www.seangoedecke.com/llms-reward-expertise/), analyzing Terence Tao's ChatGPT conversation about the Jacobian Conjecture. The insight: Tao's prompts are short, he pushes back on vague answers, and the model responds in "talking-to-mathematicians" mode — not "explaining-to-amateurs" mode. You can't replicate his prompting technique just by following tips. The key is actually understanding the math.

Same thing applies to code. I can tell a coding agent "this looks overengineered, simplify it" because I know what a clean solution looks like in my stack. Without that intuition, you're at the mercy of whatever the model generates. The more domain knowledge you have, the harder you can steer. Goedecke puts it well: the human is the bottleneck, not the model.

The gap isn't access to AI. Everyone has access. The gap is knowing what to ask and knowing when the answer is wrong.
