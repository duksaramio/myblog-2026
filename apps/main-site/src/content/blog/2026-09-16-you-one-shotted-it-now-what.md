---
title: "You One-Shotted It. Now What?"
pubDate: 2026-09-16
description: "One-shotting is the easy part. The value is in shots two through a thousand — and that's the part nobody wants to pay for."
draft: false
tags: ["ai", "vibe-coding", "building", "productivity", "software"]
---

Idea guys have a new problem. They can one-shot their ideas into existence now. An afternoon of prompting and there's a working app on their screen, running locally, looking like software.

Then they sit there. Now what?

## The First Shot Is a Demo

The one-shot is a demo, not a product. It runs on your machine, on the happy path you had in your head when you wrote the prompt. It has no auth, no database that survives a restart, no error handling for the inputs you didn't think of, no deploy pipeline, no backups, nothing.

That's not a flaw in the tool. It's the tool working exactly as designed. The agent built what you described. You just described 5% of the job.

So what's the other 95%?

**Refinement.** It works, but not the way you actually want. The flow is clunky. The thing you cared about most is the weakest part. You can ask ChatGPT to show you how to fix this and that, and it will, one patch at a time, until the codebase is a pile of locally-correct patches that don't fit together.

**Deployment.** Your app runs on your laptop. Getting it onto a domain, with a persistent database, real auth, TLS, monitoring, and a deploy that doesn't require you to be awake — that's a different discipline than prompting. Every step is AI-assistable. But only if you know which steps exist, in what order, and which ones bite you when you skip them.

**Steering.** This is the real one. The agent fucks around. It stalls. It confidently rewrites the module that was working fine. It "fixes" your bug by deleting the feature. When that happens — 11pm, nothing builds, the diff is 400 lines of garbage — do you have what it takes to lead it back? Or do you type "still broken" nine times and hope?

That's the question with limited technical chops. Not "can AI build it." It can. It's "can you will it into what you want when it goes sideways." AI is not a genie. It's labor with terrible memory and infinite confidence. Somebody has to be the one with taste and direction.

## The Pricing Delusion

Here's where the whole idea-guy economy is going to break.

They believe getting someone to do it should be almost free. Because AI is doing most of the work — so why pay this guy that much? And yet they can't do it themselves. So they're stuck: can't build it, won't pay a fair rate for it.

The mistake is thinking AI did 90% of the work. It did 90% of the *typing*. Shot one is the commoditized part. It's free, it's instant, and every idea guy on LinkedIn already has one.

The remaining 95% is exactly the part that isn't commoditized, because it's the part that requires knowing what you're doing. Which means the price for the tail should be going *up*, not down.

Watch what happens: the more AI collapses the cost of the first draft, the more the value moves to the tail — the person who can take a promising pile of generated code and get it to production without it falling over. The one-shot is a commodity. Steering isn't.

## What I Actually Do Every Day

I've been using coding agents to build a lot of things lately. The funny part is the more I use them, the less I want to explain how I use them. Not secrets — just that this knowhow is the strongest moat I have against the one-shotters and the AI slop LinkedIn posters.

The loop is boring and I run it every day:

1. Execute the idea into existence with the agent's help.
2. Use it. On the browser, on iOS, on Android. As a user, not a builder.
3. Get more ideas — better ideas — because now it's real and I can feel what's wrong.
4. Iterate. Again. And again.

The goal is to make the one-shot become two shots, three shots, a thousand shots. Each pass is where my taste gets injected. The agent does the typing, I do the judging, and the thing gets sharper every round. That's the entire method.

## Why I Write Less Now

I used to write tons. AI did the deep research on my ideas, and AI wrote them up. Now I execute instead. Not because I ran out of things to say — because the loop is producing more clarity than writing about it ever did. When you get this kind of clarity, you write less and ship more. AI coding is glorious, and I'm loving every minute of it.

## The Honest Part

I've always been an idea guy. The difference is that my career happened to take me through the entire software development lifecycle — planning, building, testing, deploying, maintaining — for decades. That's what makes the steering possible. I know what a clean solution looks like in my stack, so I can tell when the agent is handing me something that will hurt in three weeks.

That puts me in a good spot right now. I can't honestly say it will six months from now. So I'm not writing posts about my method — I'm spending the time running shots. The moat is the reps, not the prompt.
