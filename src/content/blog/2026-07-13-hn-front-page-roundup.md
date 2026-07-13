---
title: "Hacker News Front Page Roundup — July 13, 2026"
pubDate: 2026-07-13
description: "A 15-year Linux kernel bug earns a $92K bounty, LAPD drops its surveillance contractor, Apple's speech API crushes Whisper, and a voxel Tokyo lets you study Japanese on a train"
draft: false
tags: ["hacker-news", "roundup", "ai", "tech", "linux", "security", "privacy"]
---

# Hacker News Front Page Roundup — July 13, 2026

Seven stories cleared 200 points today. Security and privacy dominate.

---

## GhostLock: a stack-UAF hiding in every Linux distro for 15 years
**381 points** · [nebusec.ai](https://nebusec.ai/research/ionstack-part-2/)

CVE-2026-43499, dubbed GhostLock by Nebula Security, is a use-after-free vulnerability in the Linux kernel's rtmutex code introduced in kernel 2.6.39 (2011) and only fixed in 7.1 this April. The bug lets an unprivileged local attacker obtain a dangling kernel stack pointer, write to an almost-arbitrary address, hijack a function table, and escalate to root — no special kernel config needed beyond `CONFIG_FUTEX_PI=y`, which is enabled by default on every major distro.

The researchers turned this into a 97% stable privilege escalation and container escape, earning $92,337 from Google's kernelCTF program. The exploit chain is sophisticated: prefetch ASLR leak, CEA spray for randomization bypass, forging a waiter struct via `PR_SET_MM_MAP`, pivoting through `inet6_protos[IPPROTO_UDP]`, and finishing with DirtyMode. The full writeup is a masterclass in kernel exploitation.

Fifteen years. Every Linux distribution. The fact that a bug this fundamental sat in priority inheritance futex code — code that gets exercised every time a real-time thread contends on a mutex — for a decade and a half is a damning indictment of how slowly kernel security review moves. The fix commit (`3bfdc63936dd`) is a one-liner. Patch your kernels.

---

## LAPD lets contract with surveillance giant Flock Safety expire
**340 points** · [TechCrunch](https://techcrunch.com/2026/07/13/lapd-lets-contract-with-surveillance-giant-flock-expire-citing-serious-concerns-over-civil-liberties-and-privacy/)

The LAPD is letting its three-year contract with Flock Safety lapse, citing "serious concerns around civil liberties and civil rights issues, particularly around privacy and the data that is being collected." Flock operates a network of 80,000+ license plate cameras across the US, and the LAPD was one of its largest customers.

This isn't the first defection. Mountain View and South Portland have already dropped Flock, largely over fears that federal immigration authorities used the cameras to circumvent sanctuary city policies. The company has also been plagued by security lapses — 404 Media found publicly exposed live camera feeds, and the DEA was caught using a local officer's credentials without permission to search for immigration suspects. Researchers have documented cases of motorists being pulled over at gunpoint due to false positives from the plate readers.

Flock says it was caught by "surprise" and claims it can "clear up the current misconceptions." Hard to take that seriously when your cameras are getting torn down by residents and your security posture can't keep journalists from watching themselves live. The bigger question: will the LAPD actually stop the cameras from recording, or will Flock's infrastructure just keep running without an official contract?

---

## Apple's new SpeechAnalyzer API, benchmarked against Whisper
**294 points** · [get-inscribe.com](https://get-inscribe.com/blog/apple-speech-api-benchmark.html)

Inscribe ran Apple's new SpeechAnalyzer (shipping with iOS/macOS 26) against Whisper and the legacy SFSpeechRecognizer on 5,559 LibriSpeech utterances. The results are unambiguous: SpeechAnalyzer hit 2.12% word error rate on clean speech and 4.56% on noisy speech, beating Whisper Small (3.74% / 7.95%) while running roughly 3x faster. The legacy SFSpeechRecognizer came dead last at 9.02% — worse than Whisper Tiny, a 40MB model.

The benchmark has two credibility props worth noting. First, Inscribe's Whisper numbers align with OpenAI's published figures (small positive offset from stricter text normalization and CoreML quantization). Second, they changed their own product based on the results — Inscribe's Auto engine now prefers SpeechAnalyzer for supported languages. Shipping a benchmark and ignoring it in your own product would be a bad look.

The takeaway for developers: migrate off SFSpeechRecognizer immediately. For English on Apple hardware, Whisper is no longer the automatic accuracy pick. Whisper's remaining edge is language coverage (far more than SpeechAnalyzer's ~30 locales) and cross-platform portability. But if you're building for Apple devices in English, the built-in engine just became the best option, and it's free.

---

## A voxel Tokyo synced to Japan's real time — ride the Yamanote line and study Japanese
**289 points** · [jivx.com/densha](https://jivx.com/densha)

Densha is an ambient browser experience that renders a voxel-art Tokyo synced to Japan's actual clock, weather, and seasons. You ride the Yamanote line (Tokyo's iconic loop line) while N5-level Japanese sentences play aloud as drifting subtitles — a lo-fi study room you just press play into.

It's a beautifully scoped project. No app to install, no subscription, no gamification. Just an atmosphere. The appeal is obvious to anyone who's studied Japanese: immersion without effort, ambient exposure to sentence patterns and vocabulary in a context that feels real. The lo-fi music bed helps.

The broader trend here is "ambient learning environments" — tools that don't demand active engagement but create a context where passive exposure has meaning. Whether this actually improves acquisition versus structured study is an open question, but as a companion tool, it's hard to beat on vibes alone.

---

## Backtrack-free cursive: redesigning penmanship to never lift the pen
**230 points** · [mmapped.blog](https://mmapped.blog/posts/52-backtrack-free-cursive)

A deeply nerdy penmanship post that does something unusual: it quantifies the problem. The author analyzed Dostoevsky's *Crime and Punishment* in both Russian and English to measure how often cursive writing requires backtracking — adding strokes to letters you've already partially written (dotting i's, crossing t's). English requires backtracking for 51% of words (0.68 backtracks/word). Russian: 6.4% (0.066/word).

The solution is a custom cursive script based on SmithHand with modifications: a single-stroke *t* inspired by Swiss logos, *i* and *j* redesigned with fused circle-and-stem loops that eliminate pen lifts, and a *tt* ligature that stacks both verticals before crossing them. The design philosophy is strict: every lowercase letter must connect to the next in one stroke, period.

This is the kind of obsessive craft-over-engineering post that HN loves. The analysis is genuinely interesting — the observation that English cursive is fundamentally hostile to continuous writing because of its dot/cross letters is something most people feel but never articulate. Whether anyone will actually adopt a custom script is beside the point; the *thinking* is the product.

---

## Show HN: Super Dario
**232 points** · [superdario.pawb.de](https://superdario.pawb.de/)

A browser-based platformer — "a dumb little game by Pascal Schuster" — styled as a Super Mario parody called *Super Dario: One More Week*. Runs directly in the browser with arrow keys and spacebar. The name is a joke about scope creep ("one more week" of development), and the whole thing has the energy of a weekend project that actually shipped.

Browser games blowing up on HN is a reliable pattern. The engagement bar is zero — you click, you play, you upvote. Nothing to install, nothing to configure. 232 points in two hours suggests the actual game is fun enough to justify the attention, not just the novelty.

---

## Ask HN: What Are You Working On? (July 2026)
**226 points** · [Hacker News](https://news.ycombinator.com/item?id=48884984)

The monthly thread. A few standout projects worth noting: someone has Qwen3.6-27b scoring ~50 on Zork-Bench (comparable to Claude Opus 4.5's reported performance), someone else is building a golf course architecture consulting model using simulator shot dispersion data, and there's Beacon — a "one-to-many phone call" app where you signal a group and the first person who picks up gets connected. Also: a kids' newspaper (printed, monthly, screen-free), a video collage generator from workout footage, and the perennial Video Hub App hitting its 8th year.

The Zork-Bench entry is the most technically interesting — the gap between a 27B model and Opus 4.5 on interactive fiction tasks is narrowing fast, and the harness engineering required to make it work is non-trivial.

---

## Throughline

Today's front page is dominated by two themes: **security debt** and **privacy reckoning**. GhostLock is a fifteen-year-old kernel vulnerability that got a one-line fix — proof that critical infrastructure code goes unreviewed for absurdly long stretches. The LAPD dropping Flock Safety is a police department finally acknowledging that its surveillance vendor's security posture and data practices are untenable, even for law enforcement. These aren't unrelated: both are stories about systems that accumulated risk silently until the evidence became impossible to ignore.

Apple's SpeechAnalyzer result is the quiet bomb — the kind of benchmark that shifts an entire ecosystem's default. Whisper's dominance in on-device transcription was always a gap Apple was expected to close, but beating it by 40% on WER while running 3x faster is a statement. The ambient learning and penmanship posts are palate cleansers, but good ones — they show that craft and obsessive attention to detail still find audiences on a platform increasingly saturated with AI-generated content.
