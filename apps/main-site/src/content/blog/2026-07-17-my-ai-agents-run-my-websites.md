---
title: "My AI Agents Run My Websites. Here's What I've Learned."
pubDate: 2026-07-17
description: "AI agents run multiple websites for me. They make mistakes, but I'm getting better at using AI every single day. Here's the biggest lesson."
draft: false
tags: ["ai", "agents", "automation", "tts", "comfyui", "build-in-public"]
audioUrl: "https://file.duklee.net/audio/2026-07-17-my-ai-agents-run-my-websites.wav"
---

My AI agents run multiple websites for me. These sites are my sandboxes.

Just like humans, they make mistakes. They miss a publishing date. Some articles they write are not very good.

But that is not the point. The point is I am getting better at using AI every single day.

The biggest lesson: don't stop at one-shot AI slop. Iterate daily and make it a little better every day.

## Audio Experiments

Right now I am experimenting with audio.

First, using Google's Antigravity, I added an audio player to every blog post. Then I told my agent to use Qwen3-TTS to generate an audio version of every post using a sample of my own voice.

It is a lot for my poor RTX 4090 to handle. It actually failed once because I opened ComfyUI at the same time.

## The Part That Still Blows My Mind

This is the part that still blows my mind.

The agent thinks about the task. Writes a Python script to handle it. Sets up a virtual environment with uv. Runs a test sample on its own. Then creates the full batch process.

It is glorious. I often just stare at its thinking trace. Maybe we give too much credit to humans and not enough to AI? That is getting too philosophical.

## The Batch Job Is Still Running

My agent wrote a lot of blogs based on research we did together, so it will take a while. Once it is done, it will upload all the audio files to a Cloudflare R2 bucket on its own, then update every single file in the repo to add an audioFileName property.

The future is already here. I hope you are building for it.

## What's Next

Next up: tackling AI image slop with ComfyUI. I need to figure out if smart prompting is enough to nail my taste, or if I need to fine-tune some diffusion models.

So much to learn. And I am having so much fun doing it.
