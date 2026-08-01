---
title: "Prompt Engineering Is a Myth. It's Just Clear Communication."
pubDate: 2026-08-01
description: "The best techniques for talking to LLMs are identical to the best techniques for talking to people. You don't need two modes — you need one good habit."
draft: false
tags: ["ai", "llm", "prompt-engineering", "communication", "writing"]
---

Here's a thought experiment. Imagine sending this Slack message to a coworker:

> "Hey, can you look at this when you get a chance? Just want to make sure it's okay."

Now imagine pasting the same thing into ChatGPT.

Both will give you something. Neither will give you what you actually need. Because the problem isn't the audience. The problem is the message.

The entire "prompt engineering" industry is built on a false premise: that talking to LLMs requires a special skill set distinct from talking to people. It doesn't. The techniques that get good results from ChatGPT — clear intent, specific constraints, structured requests, concrete examples — are the same techniques that have always gotten good results from humans. We were just lazy about it, because humans fill in the gaps with social inference and LLMs don't.

The fix isn't learning two communication styles. It's learning one good one.

## The Gap Is Smaller Than You Think

Humans infer your goal from tone, context, and relationship history. LLMs don't. That's the difference. But here's the thing: humans do this *imperfectly*. They guess wrong constantly. They miss your point, answer the wrong question, give you something you didn't ask for. You've experienced this in every meeting that could've been an email.

The failure mode is the same. It's just faster with LLMs.

When a colleague gives you a wall of text with no clear ask, you eventually figure out what they want — maybe by asking clarifying questions, maybe by guessing. An LLM does the same thing, except its "guess" is a probability distribution over all possible responses, and without a clear signal, it defaults to the most generic plausible answer. Humans default to the most charitable plausible interpretation. Both miss the mark.

So the techniques that fix LLM communication also fix human communication. They just fix it faster.

## Six Habits That Work Everywhere

These aren't prompt engineering tricks. They're communication fundamentals that every good technical writer, military communicator, and effective manager already uses.

### 1. Lead with the ask

Put your request at the top. Context below. This is the military's BLUF method — Bottom Line Up Front — and it predates computers entirely.

**Vague:** "So we've been working on this project for three months and the client keeps changing their mind and the team is stressed and I need help figuring out what to do about the timeline."

**Clear:** "I need help adjusting a project timeline. Client has changed scope twice in 3 months; team is at capacity. I need a revised 6-week plan that accounts for a likely third scope change."

Works identically in Slack and in ChatGPT. Both audiences appreciate not having to read three paragraphs before discovering what you want.

### 2. Give just enough context, then stop

Humans tune out when you ramble. LLMs get diluted attention on long inputs — the model's focus degrades as context grows, a well-documented property of transformer attention mechanisms. Provide the context that matters for the specific request. If you're writing to a colleague, you wouldn't include their entire employment history. Don't do it to an LLM either.

The sweet spot is the same for both: one to three sentences of background, then the ask.

### 3. Replace vague words with concrete ones

"Make it better" is useless to a human colleague and useless to an LLM. "Shorten the intro to two sentences and add a concrete example after the third paragraph" works for both.

The words that fail everywhere: *better, nicer, more professional, improve, enhance, good, bad*. These are subjective quality markers that mean different things to different people — and different things to different model runs.

The fix is the same whether you're talking to your designer or to Claude: specify what "better" means. "More professional" becomes "remove casual phrasing, replace contractions, add formal greeting." "More engaging" becomes "add a surprising stat in the opening line and shorten the paragraph to 3 sentences."

Specificity is a muscle. The more you practice it with LLMs, the more automatic it becomes with people.

### 4. Use constraints as creative tools

"Write me something good" paralyzes. "Write a 150-word product description for a water bottle, tone: wry and understated" liberates.

Constraints help humans focus and give LLMs a clear target. A 150-word limit isn't a restriction — it's a frame. It tells the writer (human or machine) exactly what kind of output you're looking for. A creative brief with constraints is a well-formed prompt. A well-formed prompt is a good creative brief. Same structure, same function.

### 5. Show, don't just tell

"Like this: [example]" is the most powerful communication tool that exists. In design reviews, it's called modeling. In LLM research, it's called few-shot prompting. Same mechanism, same result.

One good example replaces a paragraph of description. It works for a colleague who can't visualize what you mean. It works for an LLM that's interpreting your intent from a probability distribution. Examples anchor abstractions. They resolve ambiguity. They're the universal disambiguator.

### 6. Iterate through dialogue

You rarely get the perfect answer from a colleague on the first ask. You follow up, clarify, redirect. Do the same with LLMs.

"This is good, but: the tone is too formal — make it conversational. And swap the third point for something about cost savings." This works for both audiences. The more precisely you redirect, the fewer rounds you need.

Don't spend 20 minutes crafting the perfect prompt. State your intent, give key context, send it. Evaluate what comes back. Redirect with precision. Recognize when to stop — diminishing returns are real, and at some point, you take the 90%-there output and polish it yourself.

## The 4-Second Filter

Before making any request — to a person or an LLM — run these four questions through your head. It becomes automatic within a week.

**What do I actually need?** Distinguish the outcome you want from the request you're about to make. Sometimes the request you were about to make doesn't serve the outcome.

**What does the listener need to know — and no more?** Strip background to what's relevant. If your colleague already knows the project context, don't re-explain it. If you're starting fresh with an LLM, include only the context this specific ask requires.

**Could this be misunderstood?** Scan for pronouns with unclear referents ("fix it"), ambiguous scope ("the whole thing"), and vague quality words ("good," "professional"). Replace them.

**How will I know I got what I wanted?** Having a success criterion helps you evaluate responses. It also forces you to make your request precise enough that a good answer is possible.

## Before and After

These examples show the same intent expressed two ways. The "after" version works identically well whether sent to a coworker in Slack or pasted into an LLM.

**Vague:** "Can you look at my presentation and tell me what you think?"

**Clear:** "Can you review slides 4-7 of this presentation? I'm worried the data story isn't clear for a non-technical audience. Flag anything confusing and suggest restructuring if needed."

**Vague:** "I was reading about competitor X and their new feature and it reminded me of that idea we had last quarter and I think we should probably revisit it, what do you think about maybe putting together some thoughts on it?"

**Clear:** "I'd like to revisit our Q3 feature idea — Competitor X just launched something similar. Can you draft a one-page comparison of their approach vs. ours so we can decide if it's worth re-prioritizing?"

**Vague:** "Write something for the homepage."

**Clear:** "Write a hero section for our homepage. Audience: small business owners who've never used automation. Tone: confident but not corporate. Max 40 words for the headline, 20 for the subhead."

Every "clear" version uses the same techniques: stated intent, specific constraints, defined audience, concrete format. No prompt engineering. Just clear thinking expressed clearly.

## The One Thing That Actually Differs

There is exactly one meaningful difference between human and LLM communication: how much shared context you can assume. With a close colleague, you can say "the usual approach" and they know what you mean. With an LLM, you need to say what the usual approach is.

But here's the thing: this varies more between individual humans than between "humans" and "LLMs" as categories. The new hire doesn't know your usual approach either. The contractor you're briefing doesn't share your team's shorthand. The executive asking for a summary has different context than the engineer asking for the same thing.

Good communicators already adjust context for each audience. With LLMs, you just adjust to "no prior context" — which is also what you'd do with any new collaborator.

## Why This Matters Beyond LLMs

The irony of the "prompt engineering" era is that it's accidentally teaching people to communicate better. The techniques that get good results from ChatGPT — stating intent, being specific, structuring requests, giving examples — are the same techniques that make emails clearer, meetings shorter, and Slack messages more actionable.

You're not learning a new language. You're sharpening the one you already use.

The best communicators have always done this. They lead with the ask. They specify constraints. They give examples. They number their requests. They iterate when the first response misses. They calibrate their level of detail to the stakes.

Now everyone else is catching up. Because it turns out that when your conversation partner has zero social inference — no ability to read your tone, guess your intent, or fill in your gaps — you have to say what you actually mean.

And that turns out to be good practice for everyone.

## The One Habit to Start With

If you take nothing else from this: always state your intent in the first sentence. Not the backstory. Not the context. Not the preamble. The intent.

"I need help deciding between X and Y."
"I want feedback on the header design."
"I'm exploring React vs. Vue and need a pros/cons comparison."

Once that's automatic — and it takes about a week — add the next habit: specify one constraint. Then the next: give an example of what good looks like. Within a month, your emails will be better, your meetings will be shorter, your Slack messages will get faster replies, and your LLM conversations will produce better results.

All from the same set of habits. One voice. Every listener.
