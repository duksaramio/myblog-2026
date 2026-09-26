---
title: "Hacker News Front Page Roundup — August 20, 2026"
pubDate: 2026-08-20
description: "AliExpress fingerprinting Bluetooth, Mojo goes open source, a Rust supply-chain attack, CIA kept NeXT alive, and more."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

## AliExpress Runs Silent WebAudio Fingerprinting That Breaks Bluetooth Multipoint — 747 pts

A blogger discovered that loading the AliExpress homepage silently creates two hidden `AudioContext` objects via Alibaba's AWSC anti-abuse scripts (`collina.js` and `fireyejs.js`). The scripts build a WebAudio graph — sawtooth oscillator → analyser → script processor → gain node at zero → audio destination — that generates inaudible sound to fingerprint the browser's audio implementation. The gain is set to zero so you hear nothing, but the graph is still connected to the system audio output, which hijacks Bluetooth multipoint priority and kills audio from other connected devices.

This is a particularly nasty form of browser fingerprinting because it has a real, observable side effect: it breaks your headphones. The scripts are heavily obfuscated, and the whole thing runs without any visible media element, autoplay call, or media session state. The fact that Alibaba's security tooling considers this acceptable — silently creating audio contexts on page load for fingerprinting purposes — says a lot about how far anti-abuse infrastructure has drifted from user interests. The crates.io team has since been notified, but AliExpress's behavior likely affects millions of users who just think their Bluetooth is glitchy.

**Source:** [blog.laserphile.com](https://blog.laserphile.com/2026/08/aliexpress-webpage-keeping-multipoint.html)

---

## HTML Can Do That — 407 pts

Chris Burnell compiled a showcase of dynamic UI functionality that now works with pure HTML — no JavaScript required. The list includes `popover` (light-dismiss popups), `<dialog>` (modal dialogs), grouped `<details>` (exclusive accordions via shared `name` attribute), CSS anchor positioning, `command`/`commandFor` attributes, and more. The page was originally built in one hour during HTML Day 2026 and has since been updated with honest notes about where browser implementations still fall short on accessibility.

The real story here isn't "look what HTML can do" — it's that the platform has been quietly absorbing functionality that entire JavaScript libraries exist to provide. Popover menus, modal dialogs, accordions, auto-suggest, scroll-driven animations — all declarative, all native. The catch, which Burnell is upfront about, is that browser support is uneven and accessibility implementations are often incomplete. Still, for anyone still reaching for a 40KB JS bundle to toggle a dropdown, this is a wake-up call.

**Source:** [chrisburnell.com](https://chrisburnell.com/html-can-do-that/)

---

## Show HN: I Trained a 125M Model to Autocomplete Piano On-Device — 404 pts

Simon Edwards trained a 125M-parameter transformer to autocomplete piano performances in real time on an iPhone 15 (~108 notes/sec). The project, called RollTab, is essentially GitHub Copilot for piano: you play a few notes and the model continues the piece. Fourteen experiments deep, the biggest wins came from finding the right MIDI tokenization (factored representation with grammar-constrained generation), aggressive data cleaning, and DPO (Direct Preference Optimization) post-training.

The technical depth here is impressive. Edwards tried multiple MIDI representations — note-on/note-off style drifted and left hanging notes, explicit duration representations were too slow. He settled on a factored grammar approach that enforces syntactic validity during generation. The training data pipeline filtered aggressively for quality. The result is a model small enough to run on a phone that produces musically coherent continuations of well-known pieces. Free on the App Store if you have a MIDI keyboard.

**Source:** [simedw.com](https://simedw.com/2026/08/20/midi-autocomplete/)

---

## I Like 'em Thick: An Apology to My English Teachers — 398 pts

Adam Mastroianni (Experimental History) argues that great literature has a property he calls "thickness" — it unfurls in response to your attention. The more time you spend with it, the more you get out of it. He admits he spent years assuming "great" literature was a hoax, a make-work program for English majors. He was wrong. But he also wants an apology back from his teachers, who presented these works as self-explanatory when they were actually "dark, winding caves with treasure stashed inside" — and never taught him how to enter the cave.

The essay is a meditation on how we teach depth. Thickness is tricky because rewarding the careful reader means repelling the casual one. Mastroianni's point extends beyond literature: any domain with real depth — code, science, music — has this property. The people who love it often can't explain why, and the people who are supposed to teach it often present the surface and assume the depth will be self-evident. It won't. Someone has to show you the entrance.

**Source:** [experimental-history.com](https://www.experimental-history.com/p/i-like-em-thick)

---

## Windows Brings Out the Rorschach Test in Everyone (2003) — 330 pts

Raymond Chen's classic 2003 blog post resurfaced: the Windows 95 box had an anti-piracy hologram featuring a baby pointing at a computer monitor. One government complained the baby was "naked" (it was only visible from the waist up, wearing no shirt). Microsoft rush-ordered a new hologram with the baby in overalls, losing the arm animation. Windows XP had similar issues — people saw buttocks in the "Red Moon Desert" wallpaper, Hitler in a user account icon, and an obscene body part in the Switch Users cartoon.

This is peak Raymond Chen — a Microsoft veteran with 30+ years of Windows history who tells stories that are simultaneously mundane and fascinating. The post is a reminder that perception is projection, and that shipping software to billions of users means every pixel is a Rorschach test. The "naked baby" Windows 95 hologram is now a collector's item.

**Source:** [devblogs.microsoft.com](https://devblogs.microsoft.com/oldnewthing/20030825-00/?p=42803)

---

## Malicious Rust Crate Arrayref Runs a Build-Time Payload — 304 pts

On August 20, a compromised release of the popular Rust crate `arrayref` appeared on crates.io. Version 0.3.10 added a dependency on a typosquatted crate called `proc-macro1` (not to be confused with the legitimate `proc-macro2`). The maintainer's account (`droundy`) was compromised, and the attacker also published malicious versions of `internment` and `append-only-vec`. The `proc-macro1` build script downloads and runs a remote binary at compile time — meaning just building a project that pulled the bad versions triggers the payload.

The attack is sophisticated: the server address is stored as base64 fragments, the TLS connection accepts any certificate, and the binary runs detached from the build process. The `proc-macro1` crate's `src/` directory contains a genuine copy of `proc-macro2` so builds keep working while the malware runs. The `dtolney` publisher name closely mimics David Tolnay's real `dtolnay` account. The crates.io team has removed all malicious versions, but this is another data point in the ongoing supply-chain security crisis. If you depend on `arrayref`, `internment`, or `append-only-vec`, check your lockfiles.

**Source:** [safedep.io](https://safedep.io/arrayref-proc-macro1-rust-build-time-malware/)

---

## Mojo Is Now Open Source — 281 pts

Modular open-sourced the Mojo compiler under Apache 2.0 (with LLVM exceptions), a week after hitting 1.0 with source stability. The compiler, toolchain, and standard library are all available in the `modular` GitHub repository. The build uses Bazel and can compile from source with a single command. Mojo is positioned as a general-purpose language optimized for GPUs, AI accelerators, and advanced compute — essentially trying to be what C++ should have been for the AI era.

The announcement is careful to frame the closed-to-open journey as deliberate: tight design teams find the "soul" of a language, community feedback escapes the echo chamber. That's a reasonable approach, though skeptics will note that four years of closed compiler development is a long time to build trust in an open-source language. The Apache 2.0 license is the right call — it's the standard for compilers and languages. The real test now is whether the community shows up. Mojo has had hype cycles before; open-sourcing the compiler is table stakes, not a finish line.

**Source:** [modular.com](https://www.modular.com/blog/mojo-open-source)

---

## CIA Funding Helped Keep NeXT Afloat in the '80s — 249 pts

A WSJ excerpt from Sharon Weinberger's *Valley of Death* reveals that the CIA quietly became a major customer for NeXT in the late 1980s, buying thousands of specially configured workstations at a time when Jobs's company was hemorrhaging money. In 1986, CIA officials from "Program B" (a classified satellite reconnaissance initiative) visited NeXT, eventually committing to ~20,000 workstations. The machines were loaded on unmarked trucks, modified with custom chips and graphics processors at a CIA front company, then flown on C-5 transport planes from Moffett Field to classified destinations.

The National Reconnaissance Office used NeXT's high-resolution screens to analyze satellite imagery. Jobs was granted a top-secret clearance. The contract gave NeXT "another five-year runway" to mature as a business — runway that proved critical when Apple acquired NeXT in 1996, bringing Jobs back. NeXTSTEP became the foundation of macOS, iOS, and everything Apple ships today. The story is a useful corrective to the mythology of Silicon Valley as a purely commercial endeavor. The defense-intelligence complex was subsidizing Apple's future operating system decades before anyone knew it.

**Source:** [wsj.com](https://www.wsj.com/tech/steve-jobs-apple-next-cia-161b65f9)

---

## Git at Any Scale — 209 pts

Cursor's engineering blog published a deep dive into the challenges of hosting Git repositories at scale. Git's distributed design means all instances of a repository are identical — there's nothing special about the server copy. But the packfile-based storage format that makes Git work locally becomes a major bottleneck at scale: large binary files that must exist on a filesystem, difficult to distribute across machines, and expensive to repack. The post surveys three approaches: distributing the filesystem, distributing the packfiles, or distributing Git itself.

This is a genuinely useful technical reference for anyone who's wondered why GitHub/GitLab infrastructure is so complex. The core insight is that Git was designed for the Linux kernel's decentralized workflow — a specific use case that most teams don't share. Twenty years later, everyone uses Git through a centralized host, and the distributed nature is more liability than feature for hosting. Cursor's perspective is interesting because they're building an AI coding editor that needs fast Git operations at scale — the post reads partly as justification for their infrastructure investment.

**Source:** [cursor.com](https://cursor.com/blog/git-at-any-scale)

---

## Today's Throughline

Three themes dominate today's front page. **Platform trust is broken.** AliExpress silently hijacking your Bluetooth headphones for fingerprinting, a Rust supply-chain attack through a compromised maintainer account, and the CIA secretly subsidizing Apple's operating system all point to the same problem: the systems we depend on are doing things we don't know about. The AliExpress story is particularly alarming because it's not a bug — it's intentional anti-abuse infrastructure that treats users as adversaries.

**The platform is eating the library.** HTML absorbing JavaScript's job, Mojo trying to absorb C++/CUDA's job, and Cursor wrestling with Git's design limitations all reflect a recurring pattern: the base layer keeps expanding to absorb what used to require additional complexity. Whether this is good depends on whether the base layer does it well — and as the HTML post honestly notes, browser implementations often don't.

**Small models, real results.** The piano autocomplete model is 125M parameters running on a phone. No cloud, no API, no subscription. In an era of trillion-parameter frontier models, there's something refreshing about a focused, well-engineered small model that does one thing well and runs entirely on-device. That's the kind of AI deployment that actually makes sense for most use cases.
