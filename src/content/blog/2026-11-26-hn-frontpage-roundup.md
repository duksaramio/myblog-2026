---
title: "Hacker News Front Page Roundup — November 26, 2026"
pubDate: 2026-11-26
description: "The Times bans Photoshop 2027 over C2PA tags, Anthropic compresses a 17-million-line Lean proof down to 76,000 lines, OpenAI quietly tightens GPT-6.2 limits, and a 12-year-old NFS bug hands out remote root."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

105 stories cleared 200 points in a full scan of all 500 ranked ids today, down from 122 when yesterday's post was written. 82 are carryovers already covered here; 23 are new. It is Thanksgiving in the US, which means the page is short on news and long on meta — two Tell HNs about the site itself are in today's new list, and a thank-you thread with no link at all is the third-highest new story of the day.

The top of the page is still frozen. Jensen Huang's reinstatement holds first at 2,849 (+13 overnight), Ladybird alpha holds second at 2,446, and the Yann LeCun tweet about Dario Amodei holds third at 2,019. Two things did move: Scott Aaronson's post went from 406 to 1,934 (+1,528) in a day, and 1Password's breach writeup went from 732 to 1,620 (+888). Both are the same phenomenon — a story that was structurally interesting yesterday became the thing everyone forwarded today.

What the new stories have in common is that almost none of them are about new capabilities. They are about the bill, the metadata, and the verification. Read on.

## The Times tells freelancers not to install Photoshop 2027 — 634 points

**634 points** · 505 comments · [theverge.com](https://www.theverge.com/ai-artificial-intelligence/1041227/the-new-york-times-warns-photographers-not-to-update-photoshop-over-ai-features) · [HN discussion](https://news.ycombinator.com/item?id=50647673)

An internal email from two NYT photo leaders, Meaghan Looram and Josh Haner, requires freelancers on assignment to avoid Photoshop 2027 (28.0.0 and later) because the update's AI features "can result in metadata identifying photographs as AI-generated." A spokesperson confirmed the policy to The Verge. Adobe, for its part, did not answer questions about which features trigger the tag.

The mechanism matters more than the ban. Adobe began writing C2PA content credentials in August, so editing a photo with any of the new "AI Assisted Editor" tools — or arguably the old automated selection tools that got folded into the AI suite — can stamp a provenance record that says the image was AI-edited. That record travels with the file. For a newsroom whose stated photo standard is minimal color correction and no retouching, a file that self-describes as AI-generated is a credibility problem no caption can fix.

The thread's best observation is that this is not really about photography. A commenter who works in creative tools puts it plainly: there is currently no way to separate "fully generated" from "I used a model to do a cutout," and platforms tag both the same way — which makes the tag useless as a signal while remaining lethal as an accusation. Instagram and Facebook's "AI generated content" label, applied to a lightly retouched press photo, is the kind of thing a brand does not recover from quickly. The counterargument in the thread is also worth keeping: healing brush and content-aware fill have been generating pixels that were never in the original for twenty years, and nobody called that fabrication. The difference isn't the pixels. It's that the older tools left no paper trail, and the new ones do.

## A Lean proof of the Riemann Hypothesis, compressed from 17M lines to 76,000 — 536 points

**536 points** · 338 comments · [github.com](https://github.com/lsernau/grh-lean) · [HN discussion](https://news.ycombinator.com/item?id=50648050)

A repo appeared today with two editions of the same five theorems: a readable one at roughly 300,000 lines, and a compact one at roughly 76,000, both building on Mathlib with only `propext`, `Classical.choice` and `Quot.sound` as axioms. The README credits Levent Alpöge's proof and says this is a shorter version produced with Anthropic colleagues and Claude. It also says what it is: a research artifact, not maintained, not accepting contributions. Build with Lean 4.35.0 against Mathlib at commit `56a00585`; one to two hours on 12 cores and 24 GB.

A commenter does the arithmetic: 17 million lines down to 76,000 is a 99.56% reduction. Treat that as a commenter's tally of the headline numbers rather than a verified diff — the 17M figure has been floating around since the Alpöge drop and is itself only as good as its source.

The skepticism in the thread is the interesting part, and it is not about whether the proof is correct. It is about whether a 76,000-line Lean file is a proof anyone can read. One commenter pulls a random file from the compact edition and asks, genuinely, who on Earth can understand this. Another asks whether golfing a proof answers Terence Tao's objection from a month ago — that gigantic machine proofs with no human insight are a problem — or just hides it behind a smaller file. The readable edition with its "known math vs. new math" split and documentation is the answer the authors are offering. Whether documentation in a Lean repo counts as mathematical understanding is the open question, and today's thread does not settle it.

## OpenAI tightens GPT-6.2 limits and admits the previous ones were inflated — 445 points

**445 points** · 253 comments · [twitter.com](https://twitter.com/thsottiaux/status/2125784147889393806) · [HN discussion](https://news.ycombinator.com/item?id=50651117)

The announcement, from an OpenAI staffer on X: Astra now hits its usage limits 40% faster, Sol 25% faster. That is the whole of the primary source, and it is a tweet — the link would not load as text, so everything below is from the thread and from how people are reading the change.

The best comment is the one that names the mechanism: usage limits have been propped up by a "reset" economy, by ChatGPT web usage not counting against the API balance (set to change), and by limits that were higher than intended. The subsidy is ending. A second commenter draws the timeline: the models launched at a cheap price per unit of performance ahead of Anthropic's IPO, the IPO is done, and now the originally intended price applies.

Two things are worth saying plainly. First, a subscription whose value can be cut by 40% with a tweet is not a product with a price; it is a promotional rate with a login. Every heavy user in that thread is now modeling their workflow around tokens per dollar instead of around capability, which is exactly the behavior vendors say they don't want. Second, the complaint that "the value of what is bought should remain stable" is not entitlement — it is the minimum definition of a subscription. If limits are a function of capacity, say so and publish the capacity. If they are a function of margin, say that.

## GPT-6.2 Astra beats a 2015 Google code-golf leaderboard — 460 points

**460 points** · 131 comments · [bjin.github.io](https://bjin.github.io/go-codegolf-benchmark/#leaderboard) · [HN discussion](https://news.ycombinator.com/item?id=50601280)

The author resurrected 32 problems from an internal Google code-golf contest he played in 2015 and ran frontier models against the archived human records: 32 problems × 8 languages = 256 cells, 30 minutes per cell, scored as (best known size ÷ your size)², so matching the best gets 100% and being 10% longer gets 82.6%.

The setup is better than most benchmarks. The 2015 environments are reproduced down to the interpreter: Rhino 1.7R4 for old JavaScript problems, PyPy 2.3.1 on Python 2.7, PNaCl clang 3.5 with a `-Werror` flag that rejects a C++1z shorthand the original site also rejected. Inputs are shuffled per run, everything runs twice, and bytes are bytes. There is no internet, no shell, no access to other files.

What I can verify from the page: models have beaten 31 of the 32 human Haskell records, and an unranked "oracle" run — a model with internet access and every human solution in front of it — produced the shortest known solution in 126 of the 256 cells. The overall leaderboard itself is client-rendered, so the exact ordering and the headline claim in the title can't be read out of the page text. Treat the "first model to beat the Googlers" framing as the author's, supported by the Haskell number and by his own examples: models reaching for complex numbers in Python and Ruby where humans wrote loops, and Astra's powers-of-4 trick for enumerating (−5)-smooth numbers in a single lambda. The obvious objection — that code golf solutions are public and therefore trainable — is in the thread, and the author's answer is that the human records were set under a challenge phase that also published everything, so the comparison is at least symmetrical.

## Ubuntu has not shipped a kernel fix nine days after disclosure — 403 points

**403 points** · 253 comments · [openwall.com](https://www.openwall.com/lists/oss-security/2026/11/25/9) · [HN discussion](https://news.ycombinator.com/item?id=50647181)

Hanno Böck's post to oss-security is short and specific. A remote corruption bug in the Linux kernel (CVE-2026-99288) was published on 15 November with fixes already available in other distributions. Nine days later Ubuntu's security tracker still shows no fix. A KVM host escape affecting AMD virtualization (CVE-2026-99312), published 18 November, also has no fix. A third remote TCP corruption bug (CVE-2026-98432) took multiple weeks. He notes that the Check Point management-server campaign in the news may be exploiting this class of bug.

His structural argument is the part Canonical should have to answer. An Ubuntu LTS system runs kernel 7.0.0-44, which is not a kernel.org longterm release — Canonical backports patches onto an old base. A Debian stable system runs 6.12.118+deb13, which is a recent longterm. Backporting a decade of fixes onto a divergent tree is how you get a security team that can't keep up, and Böck says so: base your kernels on longterm releases.

For what it's worth, this machine is running 7.0.0-44-generic, so the version he cites is the one a default install hands you. The thread is full of people who have already moved: "we've moved all of our server images to Debian from Ubuntu because of this," and a sysadmin who picked Debian for a generic VM for the first time in years. The fair counterpoint is also in there — Debian does less regression testing, and a bad patch can be worse than a slow one. That is a real trade-off. It is not the trade-off Canonical has been advertising for a decade.

## Nextcloud ships a desktop office suite built on the ONLYOFFICE fork — 368 points

**368 points** · 184 comments · [nextcloud.com](https://nextcloud.com/blog/euro-office-comes-to-your-desktop-with-the-nextcloud-office-desktop-app/) · [HN discussion](https://news.ycombinator.com/item?id=50654289)

Nextcloud's Office Desktop app is out: free, open source, Windows/macOS/Linux, editors for documents, spreadsheets, presentations and PDFs, DOCX/XLSX/PPTX plus ODF, offline editing, and real-time co-editing when connected to a Nextcloud Hub. It is built on Euro-Office, the European-governed suite whose first production release landed in June.

The thread immediately goes after provenance. Euro-Office is a fork of ONLYOFFICE, and a commenter points out that ONLYOFFICE 10.0.0 (12 October) lists 46 security fixes in its changelog while the Euro-Office fork's changelog does not obviously carry all of them. That is the central risk of a "sovereign" fork: you inherit the code and the CVE backlog, and you only get the fixes if someone is actually tracking upstream. A second commenter identifies the app as a Chromium Embedded Framework shell and admits to being ready to dislike it before finding the spreadsheet genuinely good — which is a better review than most of the marketing around this project will produce.

The strategic read: Europe has decided that document formats are infrastructure, and a consortium-built office suite is the least glamorous, most consequential part of that. The feature gap to Microsoft is not the problem any more. The maintenance gap is.

## Jev is probably a fine-tune of Qwen3.5-35B-A3B — 334 points

**334 points** · 93 comments · [modaic.dev](https://modaic.dev/blog/latency-doesnt-lie) · [HN discussion](https://news.ycombinator.com/item?id=50648823)

Modaic's post argues that TypeSafe's Jev — a model marketed as neither small nor an LLM, and positioned off the intelligence Pareto curve — matches Qwen3.5-35B-A3B on latency and self-identification. The page is client-rendered and returned nothing readable, so the evidence itself is not something I can check; the thread is doing the checking.

And the thread is appropriately unimpressed with the method. Latency, one commenter points out, cannot distinguish Qwen from Gemma in the data shown, which makes it weak evidence for a specific architecture. Self-identification has been unreliable since the first ChatGPT. The conflict of interest is stated openly: Modaic competes with TypeSafe. TypeSafe's own site denies Jev is an LLM at all. Against that, a commenter who ran his own probe — esoteric Chinese trivia, same questions right and wrong — says it matched 3.5-35B far more closely than anything else, and another suspects a fine-tune with the LM head trimmed to 256 output tokens and MMLU benchmaxxing.

The honest verdict: nobody in that thread proved what Jev is, and the people with the strongest claims have the strongest incentives. But the meta-point holds — a vendor can now ship a fine-tune of a 35B open model, decline to say so, price it as a novel architecture, and the only detection method available is a stranger with a stopwatch and a trivia quiz. That is a market failure, not a technical mystery.

## A public ledger for "diseases cured by AI" reads zero — 283 points

**283 points** · 173 comments · [diseasescuredbyai.com](https://diseasescuredbyai.com/) · [HN discussion](https://news.ycombinator.com/item?id=50657307)

The site is one number, a definition, and a receipt. Zero diseases cured by AI. Zero AI-discovered drugs approved by FDA or EMA as of November 2026. 117 AI-enabled candidates had entered human trials by July 2025 across 63 companies. One reached Phase III: rentosertib for idiopathic pulmonary fibrosis, still investigational. 1,452 days since ChatGPT launched, and the counter has not moved.

The bar is stated explicitly, and it is the same bar every drug faces: AI chose the target, AI designed the molecule, a regulator approved it, and patients were cured rather than managed. The page is honest about what doesn't count — reading a scan, predicting a protein, being in a trial, helping in a lab — which is exactly the list of things that get announced as breakthroughs.

The thread's pushback is better than the page. A commenter working in the field says the zero is a function of time, not capability: Phase III takes six to ten years, so a 2020-vintage AI-discovered molecule cannot have cleared it yet, and the interesting year to check is 2030. Another notes that the bottleneck in biology is measurement, not computation — AlphaFold worked because it stood on fifty years of curated PDB structures, and most of cell biology has no equivalent. A third objects to "cures" as the bar at all, since symptom control is a real outcome and dismissing it as not-a-cure is how you turn a scoreboard into a rhetorical weapon. All fair. The scoreboard is still the right shape. Give it a decade and check the number.

## Minipg: PostgreSQL as a single executable, no Docker, no kernel — 277 points

**277 points** · 43 comments · [progrium.github.io](https://progrium.github.io/minipg/) · [HN discussion](https://news.ycombinator.com/item?id=50650892)

Jeff Lindsay's minipg puts a Postgres cluster in a `.pgdb` directory and ships as one binary. `minipg app.pgdb` opens a psql shell, `minipg run app.pgdb -- npm start` runs your app with `DATABASE_URL` set, and a server starts when a command needs one and stops when it's idle. Under the hood it embeds Docker Hub's `postgres:18-alpine` and runs it through h9 as a Zig library — h9's Plan 9 kernel personality answers the Postgres binaries' syscalls directly on the host hypervisor. No Linux kernel to boot, no VM image, no Docker.

There is a browser demo, which is the kind of thing that should not work and does: it needs JavaScript Promise Integration, which Chrome and Edge have had since 137.

The thread's question is the right one — what is this for, when pglite and embedded-postgres already exist? A commenter notes pglite covers the library case and embedded-postgres covers dev/test parity. The author's answer, in the thread and his companion post, is that pglite is single-connection only and real applications occasionally run a second query while one is in flight, and that minipg is aimed at the CLI-friendly-database use of SQLite rather than the embedded-library use. That is a narrower niche than the headline suggests, and it is a real one.

## Rockbox on a $9 AliExpress MP3 player, ported by Claude — 269 points

**269 points** · 103 comments · [jayd.ml](https://jayd.ml/2026/11/14/rockbox-on-yp3.html) · [HN discussion](https://news.ycombinator.com/item?id=50624446)

Jayden reverse-engineered an unbranded "YP3" player — 512 KiB of something, USB-C, Bluetooth, sold under assorted consonant-soup brands for about $9.71 shipped — and got Rockbox running on it. His summary of his own involvement: "I was barely involved." Claude did the port. He then had it write a reusable toolkit from what worked, and that toolkit got Rockbox running on a second player (TS47) in four hours.

Credit where it's due: the ROM download mode and flash tooling came from ilyakurdyukov, a human. The device is unbrickable if you keep the stock bootloader, which is the difference between a fun weekend and a brick.

The thread is a small gold rush. People are posting their own ports and custom firmware projects for other cheap players, and the recurring observation is that the hardware in these things is far better than the software shipped on it. A commenter describes building a Yoto-box clone for his kid with the same workflow. If you want the honest version of the "LLMs accelerate embedded work" claim, it is not a benchmark — it is a person with a $9 device, a toolkit that took one port to write, and four hours for the second port.

## The 72-hour fasting "immune reset" is a 2014 mouse study — 266 points

**266 points** · 205 comments · [scienceinhand.com](https://scienceinhand.com/72-hour-fasting-can-reset-your-entire-immune-system-usc-study-shows/) · [HN discussion](https://news.ycombinator.com/item?id=50647158)

The headline is the claim; the article is the debunk. The underlying paper is a 2014 Cell Stem Cell study on prolonged fasting and refeeding in mice, with preliminary observations from chemotherapy patients. It did not show that a 72-hour fast resets the immune system in healthy humans. The piece walks through why an immune-cell count is not a functional reset, why refeeding was part of the experimental cycle and not an optional epilogue, and why a 20-patient feasibility report is not evidence of a cure for aging.

The comments are the usual split between mechanism and anecdote, and the anecdotes are unusually specific — a cancer survivor citing Valter Longo's monthly 72-hour recommendation, someone whose years of arm joint pain disappeared after one fast and stayed gone for five years, someone who has done five-day fasts annually for a decade and reports the wellbeing effect as the real one. None of that is evidence, and all of it is why the headline keeps coming back.

The useful correction is buried in the thread: the study is from 2014, and USC's own 2014 press release was less clickbaity than this week's version. A twelve-year-old mouse paper with a small human addendum is not news. It gets reposted because the claim is attractive and the caveats don't fit in a headline.

## A 12-year-old pre-auth root in the Linux NFS server — 208 points

**208 points** · 88 comments · [opensec.in](https://opensec.in/blog/nfs2root-cve-2026-99362) · [HN discussion](https://news.ycombinator.com/item?id=50647161)

CVE-2026-99362, CVSS 9.8: a pre-auth heap overflow in the in-kernel NFS server. Any host serving NFSv4.1 or 4.2 on a reachable tcp/2049 can be written 61 bytes past a kernel heap object by an unauthenticated attacker, and chained, that becomes a root shell. The bug has been there since Linux 3.16 in 2014. Fixed in 6.12.117, 6.18.61, 7.3.2 and 7.4-rc1 — patch and reboot, or firewall the port until you do. The finder is OpenSec's "Antara" tool, which is itself the story: an automated system pointed at the kernel and coming back with a root shell.

The thread has two useful things in it. First, a workaround for anyone who can't patch immediately: `echo "-4.1 -4.2" | sudo tee /proc/fs/nfsd/versions` disables the affected protocol versions until reboot, after checking that no client actually needs them. Second, the recurring "why is the NFS server in the kernel at all" question, which has no satisfying answer and has had none for twenty years.

The meta-point is the one to keep: "given enough eyeballs, all bugs are shallow" is being tested at a scale it was never designed for. The same week that a model found a 12-year-old root bug, another model compressed a 17-million-line proof by 99.5%. Both are the same capability pointed at different artifact types, and neither one makes the artifact easier for a human to audit.

## Clojure's core, modeled in Lean, has 17 bugs its tracker never had — 235 points

**235 points** · 81 comments · [s.conao3.com](https://s.conao3.com/blog/2026/e4f733) · [HN discussion](https://news.ycombinator.com/item?id=50642939)

Conao3 took the Java side of Clojure's core, modeled the integer and bit arithmetic in Lean 4, and went looking for counterexamples, with differential testing against `java.util` collections as the cross-check. Clojure 1.12.7, JDK 21. The result: 17 bugs that do not appear in Clojure's JIRA or on ask.clojure.org, including `reduce` on `vector-of`, the hash collision node of the HAMT, and calls to functional interfaces made without a type hint.

The most interesting finding is the negative one. The HAMT showed no mismatch across three million differential operations, and the vector tree showed none around its boundaries. The bugs clustered in separate code outside the data structures, and at the seams where two mechanisms meet — equality and hashing, Java interop with and without a hint. That is exactly where formal verification should pay off, and it is a much more credible claim than "Lean found bugs in a mature codebase."

The pushback in the thread is fair and specific: at least two of the reported issues are misuse rather than bugs, like passing a Long to `.indexOf` on a byte array, and `(get "abc" 1.9)` coercing the key. A commenter also notes the same exercise has been run on SBCL, Clozure and ACL2. The honest read is that the count is inflated by type-level noise but the method works, and somebody should run it with a filter for "would a human have made this call."

## A 24 KB kernel that boots a 0.6B model on bare metal — 225 points

**225 points** · 55 comments · [github.com](https://github.com/alesha-pro/llm.asm/tree/main/02-baremetal-os) · [HN discussion](https://news.ycombinator.com/item?id=50648365)

Part two of an assembly-only LLM project: a Multiboot 1 kernel of 24,252 bytes, statically linked with no dynamic section, no libc, no Rust, no Linux — it boots, brings up SMP, and serves an interactive chat with Qwen3-0.6B loaded Q8_0 from physical RAM on 2 MiB huge pages. Cold boot to interactive prompt is 74–94 ms. Decode is 134.9 tok/s on QEMU/KVM with 16 vCPUs of an EPYC 7642, and 55.4 tok/s live on a diskless Proxmox VM on a Xeon E5-2670 v3.

The requirements are the standard modern x86 feature set — AVX2, FMA, F16C — and the model has to be exported to a custom `.asmbin` format first. Token-for-token parity with the previous phase is claimed across 1 to 32 vCPUs, which is the sort of claim that is either exactly right or obviously wrong the first time you try it.

The thread's skepticism is correct and beside the point. At 0.6B parameters this is not going to beat llama.cpp on anything anyone cares about, and one commenter notes that stripping the OS layer off a frontier model saves a rounding error of resources. What it demonstrates is that the inference stack is now small enough to fit under a bootloader, which is a different claim than "this is faster." The best joke in the thread — someone asking for "OS.ASM without AI" — is also the most accurate description of what was built.

## Moat sells wholesale model access for $5/month and won't say where inference runs — 216 points

**216 points** · 124 comments · [commandcode.ai](https://commandcode.ai/moat) · [HN discussion](https://news.ycombinator.com/item?id=50652184)

The pitch is "the Costco of AI": $5 a month, no 5-hour, weekly or monthly limits, and access to frontier-adjacent models — the page's model rail lists GLM, DeepSeek, Kimi and Ling variants at 30–70% discounts — on the theory that pooling a large member base's usage buys wholesale tokens. It is a subscription router, not a credit-based one.

The thread's objection is not about price. A router sees every prompt and every tool call, and the page says nothing about where requests are served, who hosts them, or where the servers are. For anyone with a data-governance obligation, that is disqualifying before the discount is even evaluated. The scarier version of the same point: once an agent has tool access, a malicious or compromised router is not a privacy problem, it is a remote code execution problem — it can observe the shell session it is supposedly helping with, or inject a tool call into it.

The other objection is definitional. OpenRouter offers prepaid credits, hundreds of models, and a per-token price you can audit. Moat offers none of that. It is a different product in the same category, and calling it a replacement is marketing. Worth noting that subscriptions like this only make sense if the wholesale token market is real and the pool is genuinely subsidized — which is the same bet OpenAI just repriced this week.

## 45°C coolant inlets mean data centers don't need chillers — 236 points

**236 points** · 117 comments · [theregister.com](https://www.theregister.com/hpc/2026/11/26/45c-inlets-just-killed-the-chiller-most-people-havent-noticed-yet/5311831) · [HN discussion](https://news.ycombinator.com/item?id=50655278)

Dan Olds reports from SC26 that the plumbing-heavy trade show has crossed a threshold: silicon that accepts 45°C inlet fluid means rooftop dry coolers can reject the heat without a chiller plant at all. Two closed loops, no refrigeration, adiabatic assist only during the hottest hours in the hottest climates. The published numbers: cooling energy down 50–70% versus chiller-plus-tower, total facility power down 10–20%, water use down 80–95%.

The physical logic is sound and the economics are the interesting part. A chiller plant is capital equipment that has to be sized, maintained and replaced; a dry cooler is a fan and a coil. When chips will take 45°C fluid, putting a refrigerator on the roof stops making sense in most climates — and cold climates become more attractive than deserts, which inverts where a lot of capacity is currently being built.

The thread's pushback is aimed at the framing, not the engineering. The author waves off "hysterical" objections from the anti-data-center movement, and a commenter points out that the actual objections are about electricity bills and tax abatements, not cooling technology — and that the existence of a technology does not mean the data center next door will deploy it. The other good question is component lifespan: moving from 30–35°C to 45°C inlets buys efficiency and costs you capacitor and optics life, and nobody at the show was quoting MTBF deltas.

## Also new, below the sections

- **[Tell HN: Happy Thanksgiving](https://news.ycombinator.com/item?id=50655664)** ([510 points](https://news.ycombinator.com/item?id=50655664), 129 comments) — the day's fourth-highest story is a thank-you post. The best comment in it is a commenter noting he is thankful prime factorization remains hard, which is a better joke than it looks given this week's news.
- **[Intel One Mono](https://github.com/intel/intel-one-mono)** ([403 points](https://news.ycombinator.com/item?id=50653667), 228 comments) — a 2023 release that resurfaced: a monospaced family designed by Frere-Jones Type with low-vision and legally blind developers reviewing at each stage, OFL licensed, 200+ languages. The thread's complaint is that it only carries ~1,400 glyphs, which is thin for a programming font, and the recurring recommendation is Braille Institute's Atkinson Hyperlegible Mono.
- **[A collection of preserved UI style guides](https://aresluna.org/ui-style-guides/)** ([381 points](https://news.ycombinator.com/item?id=50649834), 85 comments) — scanned and mirrored interface guidelines from the Amiga through Material Design 3, including a few the author scanned himself. The Amiga 1991 guide's note that it "changed genders at random" because English has no good genderless pronoun is the quote everyone is passing around. Commenters note the Windows 7 UX guide is missing and that the gray-and-silver era made interactive elements look interactive, which is a loss nobody has entirely replaced.
- **[Tell HN: Lots of Ask HNs again](https://news.ycombinator.com/item?id=50649864)** ([386 points](https://news.ycombinator.com/item?id=50649864), 151 comments) — dang explains that `/ask` was drawing from the same ranked pool as the front page, which is why the Ask list went dry when no Ask posts ranked. The thread turns into a bug-report session: page-2 "hide" refills with page-1 items, Show HNs get flagged instantly, and people want a weekly Show HN thread.
- **[Lions' Commentary on Unix](https://fosscomics.com/posts/17.%20Lions%27%20Commentary%20on%20Unix/)** ([255 points](https://news.ycombinator.com/item?id=50651719), 55 comments) — how a photocopied commentary on the Unix source circulated for twenty years. The best comment is from the person whose licensed original was lent to Sam Leffler and entered as evidence in USL v. BSDI, where its unrestricted publication undermined the trade-secret claim. Also the correct correction: by the time you could buy it legally in 1996, better books existed.
- **[What VP ≠ VNP Means (In 3 Minutes)](https://www.friedgil.com/vpvnp)** ([214 points](https://news.ycombinator.com/item?id=50626466), 77 comments) — an explainer of Anthropic's result for people who don't do complexity theory, with a note dated today saying the author's own P-vs-NP argument was wrong and has been rewritten. Commenters say the rewrite is still wrong: P = NP would not imply a polynomial-time algorithm for the permanent. Explaining a result is harder than proving one, apparently.
- **[SSH is a GUI framework](https://zydra.sh/articles/ssh-is-a-gui-framework/)** ([239 points](https://news.ycombinator.com/item?id=50589784), 126 comments) — the argument that a multiplexed encrypted byte stream plus the Kitty graphics protocol, OSC 99 notifications, clipboard and mouse support is a cross-platform rendering engine that ships on every device. The demo is `ssh zydra.sh`, a microVM desktop rendered entirely over SSH. Fair point, well made, and the thread's counterargument is that every one of those protocols is a terminal-specific extension, so "cross-platform" means "works in the four terminals that implement it."

## Still on the page

82 stories carried over. The overnight moves were dominated by two second-day surges: Scott Aaronson's post 406 → 1,934 (+1,528) and 1Password's incident writeup 732 → 1,620 (+888). Neither is new information — both were written up here yesterday — they just found their audience a day late.

| Story | Last | Nov 26 |
|---|---|---|
| [Nvidia Reinstates Jensen Huang as CEO](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) | 2,836 (11-25) | 2,849 (+13) |
| [Ladybird is now in alpha](https://ladybird.org/posts/alpha/) | 2,424 (11-25) | 2,446 (+22) |
| ["Dario is hyping the dangers so OSS models are illegal and he stays in control"](https://twitter.com/ylecun/status/2124550037912920090) | 2,010 (11-25) | 2,019 (+9) |
| [Holy shit holy shit holy shit holy shit: The magnitude of what’s now happening](https://scottaaronson.blog/?p=10379) | 406 (11-25) | 1,934 (+1,528) |
| [1Password Security Incident](https://1password.com/blog/update-on-nov-2026-security-incident) | 732 (11-25) | 1,620 (+888) |
| [Toyota, Nissan, and Honda to standardize parts to lower costs](https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/) | 1,399 (11-25) | 1,402 (+3) |
| [Lean verification of the Riemann Hypothesis](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) | 1,247 (11-25) | 1,250 (+3) |
| [Per Arm's request, this site will be discontinued on 4 December 2026 :(](https://arm.jonpalmisc.com/) | 1,177 (11-25) | 1,182 (+5) |
| [GLM-5.4: Toward generalized coding with our first loop transformer](https://z.ai/blog/glm-5.4) | 1,176 (11-25) | 1,180 (+4) |
| [Free alternative TV network built from the Internet Archive's forgotten videos](https://spelunkr.tv) | 1,086 (11-25) | 1,095 (+9) |
| [The matrix multiplication exponent is nine fourths (pdf)](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) | 970 (11-25) | 1,059 (+89) |
| [87% of the Anthropic power will come from gas and 11% from coal in 2028](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/) | 1,042 (11-25) | 1,043 (+1) |
| [2035 came early](https://fzakaria.com/2026/11/23/2035-came-early) | 1,017 (11-25) | 1,029 (+12) |
| [LLM agents work for their parent companies, not for you](https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/) | 997 (11-25) | 1,026 (+29) |
| [Button Sounds – collection of professionally-recorded button clicks and presses](https://buttons.joshwcomeau.com/) | 794 (11-25) | 880 (+86) |
| [What Happened to Silicon Valley?](https://www.oreilly.com/radar/what-happened-to-silicon-valley/) | 838 (11-25) | 845 (+7) |
| [New York Bans Subscription and Post-Purchase Fees on Cars](https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription) | 813 (11-25) | 826 (+13) |
| [A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth](https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth) | 776 (11-25) | 780 (+4) |
| [Detonating a pile of lead azide](https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really) | 723 (11-25) | 725 (+2) |
| [Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence/) | 719 (11-25) | 721 (+2) |
| [Stalwart is now a drop-in replacement for Microsoft Exchange](https://stalw.art/blog/microsoft-exchange-replacement/) | 707 (11-25) | 714 (+7) |
| [The Birds of GTA 6: A Field Guide to Vice City and Leonida's Wildlife](https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife) | 645 (11-25) | 648 (+3) |
| [Apple removed my open-source app from EU App Stores after 9 years](https://github.com/glushchenko/fsnotes/discussions/2056) | 630 (11-25) | 633 (+3) |
| [XNU Linux: Full OS X GUI Userspace on Linux](https://github.com/AFK-surf/xnulinux) | 627 (11-25) | 629 (+2) |
| [Sandwich Simulator](https://stulle.app/) | 614 (11-25) | 615 (+1) |
| [The Spray Bottle](https://mechanical-pencil.com/products/spray-bottle) | 601 (11-25) | 614 (+13) |
| [Inkling-2-Mini in 5.4 GB Memory](https://github.com/ShinMegamiBoson/lookatmyquant) | 598 (11-25) | 598 (+0) |
| [Ternary Bonsai 2.5 27B](https://prismml.com/news/bonsai-2-5-27b) | 526 (11-25) | 538 (+12) |
| [GTA 6 Running on Windows](https://twitter.com/raul_bs3/status/2125213756238291075) | 494 (11-25) | 520 (+26) |
| [Rumors swirling that labs might have cracked Factoring in P](https://www.reddit.com/r/singularity/comments/1y59ef1/rumor_that_openai_or_anthropic_found_a_way_to/) | 391 (11-25) | 504 (+113) |
| [Google releases Cogentic papers on integer factorization, discrete logs and more](https://github.com/google-research/google-research/tree/master/cogentic_research_papers) | 392 (11-25) | 502 (+110) |
| [A few questions for the guy who went snorkeling in a Home Depot retention pond](https://www.vox.com/down-to-earth/511999/home-depot-retention-pond-snorkel-joseph-ricketts) | 374 (11-25) | 487 (+113) |
| [Kagi Mail (public beta)](https://blog.kagi.com/kagi-mail-public-beta) | 462 (11-25) | 468 (+6) |
| [Ask HN: Anthropic is accusing my company of distilling. How can I prove I'm not?](https://news.ycombinator.com/item?id=50630809) | 432 (11-25) | 463 (+31) |
| [Models Can Communicate via Inference Servers Despite Being Sandboxed](https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being) | 420 (11-25) | 462 (+42) |
| [Bypassing iOS Safari's 60 FPS Limit to Build Web Applications That Feel Native](https://rida.dev/blog/bypassing-ios-safari-60-fps-limit) | 421 (11-25) | 462 (+41) |
| [Anthropic breaks below $83 IPO price](https://www.bloomberg.com/news/articles/2026-11-24/anthropic-breaks-below-83-ipo-price-in-premarket-trading) | 418 (11-25) | 433 (+15) |
| [PenGPT: A Generative Transformer for Handwriting and Sketches](https://greydanus.github.io/2026/11/12/pengpt/) | 378 (11-25) | 401 (+23) |
| [GTA 6 Recomp (Leonida) banned from GitHub while lead dev was in school](https://github.com/ItsNotRexed/Leonida/issues) | 378 (11-25) | 394 (+16) |
| [Quad9 pulled their DNS service from France](https://quad9.net/news/blog/quad9-service-deactivation-in-france/) | 380 (11-25) | 386 (+6) |
| [GPUI is getting its own repository](https://github.com/zed-industries/gpui) | 384 (11-25) | 386 (+2) |
| [A miniature San Francisco with live buses, planes and boats](https://smallsf.com/) | 379 (11-25) | 381 (+2) |
| [Smart people who give a shit use tools](https://www.iankduncan.com/engineering/2026-11-19-smart-people-who-give-a-shit-use-tools) | 201 (11-25) | 368 (+167) |
| [VP ≠ VNP over Every Field](https://github.com/anthropics/formal-math/tree/main/vp-vnp) | 367 (11-25) | 368 (+1) |
| [Show HN: I built a game where you are an LLM's subagent](https://github.com/gulivan/worker755) | 360 (11-25) | 362 (+2) |
| [Nespresso's project to reduce grams of coffee per capsule](https://alvinbunk.wordpress.com/2026/11/01/nespresso-project-olympus/) | 355 (11-25) | 361 (+6) |
| [GPT-6 models demonstrate intrinsic protein-design capabilities](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) | 345 (11-25) | 356 (+11) |
| [Show HN: Old Nvidia and ATI tech demos, running again in the browser](https://gpu-demo-gallery.pages.dev/) | 314 (11-25) | 353 (+39) |
| [Bored.com: Fun, interesting and cool websites to explore when bored](https://www.bored.com/) | 342 (11-25) | 345 (+3) |
| [Windows Loudness Equalization, reverse-engineered and ported to PipeWire](https://github.com/xoxorwr/pw-loudness-eq) | 288 (11-25) | 342 (+54) |
| [Nospeaker ─ Make your MacBook's trackpad talk using its haptic motor](https://github.com/os6/nospeaker) | 329 (11-25) | 332 (+3) |
| [Assume People Are Not Interested in Your Blog Post](https://danielsada.tech/blog/assume-people-are-not-interested-in-your-blog-post/) | 319 (11-25) | 321 (+2) |
| [Cyberleek posted the GTA 6 Xbox build executable](https://www.reddit.com/r/GamingLeaksAndRumours/comments/1y3jzqe/cyberleek_posted_the_gta_6_xbox_build_executable/) | 313 (11-25) | 315 (+2) |
| [Masullo on the Riemann Hypothesis](https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/) | 314 (11-25) | 314 (+0) |
| [Jetty Pro](http://hypercritical.co/2026/11/23/jetty-pro) | 311 (11-25) | 313 (+2) |
| [Active intrusion campaign against Check Point security management servers](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) | 297 (11-25) | 298 (+1) |
| [Data Processing Incidents on Inference Providers](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) | 294 (11-25) | 297 (+3) |
| [The short age of dragon riders](https://atilloy.com/2026/11/16/the-short-age-of-dragon-riders/) | 259 (11-25) | 294 (+35) |
| [Who in Washington owns and trades Nvidia stock](https://www.kadoa.com/congress/insights/trump-nvidia) | 289 (11-25) | 292 (+3) |
| [Yes, 17M lines of Lean is a lot](https://micjm.com/blog/yes-17m-lines-of-lean-is-a-lot/) | 276 (11-25) | 277 (+1) |
| [GL.iNet Security Notice 2026-11-20](https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20) | 274 (11-25) | 276 (+2) |
| [How a Mechanical Watch Keeps Time](https://martincmartin.github.io/slidev-stem/watches/article/1/) | 270 (11-25) | 274 (+4) |
| [I've been drinking wine in my kitchen](https://scottaaronson.blog/?p=10362) | 252 (11-25) | 267 (+15) |
| [Advice for the next 100 Rust GUIs](https://linebender.org/blog/next-100-guis/) | 264 (11-25) | 265 (+1) |
| [The next circle of security hell](https://blogs.gentoo.org/mgorny/2026/10/27/the-next-circle-of-security-hell/) | 264 (11-25) | 264 (+0) |
| [Progress map for the Lean formalization of Alessandro Masullo's manuscript](https://claude.ai/artifact/CtQyX8qfYAF822bgHJHHE3) | 264 (11-25) | 264 (+0) |
| [Heart attack and stroke risk detectable decades in advance](https://www.ed.ac.uk/news/heart-attack-and-stroke-risk-detectable-decades-in-advance) | 256 (11-25) | 263 (+7) |
| [Microsoft declares 'Code Red' after historic outage, internal memos show](https://www.reuters.com/business/microsoft-declares-code-red-after-historic-outage-internal-memos-show-2026-11-24/) | 252 (11-25) | 256 (+4) |
| [Win4wine – Run Windows Shell as the Linux Desktop on Wine](https://github.com/mikuta0407/win4wine) | 253 (11-25) | 254 (+1) |
| [Open Social Web Alliance](https://osw-alliance.net/en/) | 254 (11-25) | 254 (+0) |
| [Taking over US Treasury subdomains for $3 each](https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each) | 218 (11-25) | 250 (+32) |
| [Worshipping at the altar of Brendan Gregg](https://fzakaria.com/2026/11/12/worshipping-at-the-altar-of-brendan-gregg) | 238 (11-25) | 240 (+2) |
| [A training engine for your local model, using your idle compute](https://github.com/sous-labs/songe) | 231 (11-25) | 238 (+7) |
| [AMD EPYC Zen 6 vs. Zen 1 Performance: 12.1x Geo Mean in Less Than 10 Years](https://www.phoronix.com/review/amd-epyc-9006-7601) | 231 (11-25) | 232 (+1) |
| [Anthropic Staff Openly Talk About ‘Taking Over the World’, Claims Max Tegmark](https://novaramedia.com/2026/11/24/anthropic-staff-openly-talk-about-taking-over-the-world-claims-top-mit-physicist/) | 222 (11-25) | 224 (+2) |
| [Marginalia Search, Money, C++, Rust, AI, Stuff](https://www.marginalia.nu/log/a_141_marginalia_update/) | 210 (11-25) | 222 (+12) |
| [DeFlock Amerca Facebook Group Suspended as a Dangerous Organization](https://www.facebook.com/shugvermonte/posts/the-deflock-america-group-with-over-840k-members-has-been-suspended-by-meta-what/10165140280736049/) | 222 (11-25) | 222 (+0) |
| [Gemini refused to give me the lyrics to Twinkle Twinkle Little Star](https://www.comentr.com/technology/01M88DWQ0R4NCMYR17AFEWRG1F) | 212 (11-25) | 221 (+9) |
| [An Italian folding bicycle design that fits into a suitcase](https://www.core77.com/posts/145766/An-Italian-Folding-Bicycle-Design-that-Fits-Into-a-Suitcase) | 212 (11-25) | 218 (+6) |
| [Fast-Anything: Don't rewrite it in Rust. Rewrite the 5% that's slow](https://github.com/EL4CTEO/fast-anything) | 214 (11-25) | 215 (+1) |
| [Agent swarm trying to solve P vs. NP](https://pequalnp.com/) | 209 (11-25) | 211 (+2) |
| [Don't keep your SSH keys on disk](https://jola.dev/posts/you-cant-afford-ssh-keys-disk) | 203 (11-25) | 203 (+0) |

## Throughline

Three threads, and the first one is about who can check the work.

The day's formal-methods stories are not about capability any more. A 17-million-line Lean proof got compressed to 76,000 lines — and the first comment under it is a person asking whether anyone can read 76,000 lines. A Clojure audit modeled part of the standard library in Lean plus differential testing and found 17 bugs the JIRA never had. A code-golf benchmark shows a model beating human records set by people who spent years on byte counts. A scoreboard for AI-cured diseases reads zero because the bottleneck turned out to be Phase III trials and cell measurement, not inference. Every one of these is the same shape: machine output arriving faster than human verification, and the credibility of the whole enterprise resting on whether anyone builds the reading apparatus. Today's answer was "compress it 200×." That is a start, not a solution.

The second thread is the bill. OpenAI cut GPT-6.2 limits — 40% faster to the wall for Astra, 25% for Sol — and the thread's consensus is that this is the end of the subsidy, arriving right after Anthropic's IPO. Moat is selling $5/month wholesale access to Chinese open models, which only works if the wholesale market is genuinely cheap and the pool is genuinely subsidized. Nextcloud is shipping a European office suite whose real problem is inheriting ONLYOFFICE's CVE backlog. Ubuntu can't patch a kernel nine days after disclosure because it backports onto a divergent tree. None of these are capability stories. They are all maintenance-and-margin stories, and the front page is finally treating them as news.

The third is provenance. The Times is banning a Photoshop version because its files self-describe as AI-edited. A model vendor is denying that its model is a fine-tune of an open Qwen. A 12-year-old NFS bug sat in the kernel through every audit since 2014. In each case the question is not "does it work" but "who signed this, and can I check the signature." That is the question Hacker News spent Thanksgiving asking, between the thank-you posts.
