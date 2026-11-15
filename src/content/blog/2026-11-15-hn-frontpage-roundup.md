---
title: "Hacker News Front Page Roundup — November 15, 2026"
pubDate: 2026-11-15
description: "SpaceX caught the Ship, Goldman took the coding agents off the trading floor weeks before underwriting Anthropic's IPO, and a DRAM cartel suit survived dismissal."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

A hundred and fifty-four stories cleared 200 points in a full scan of the ranked list, and twenty-eight of them are new to this roundup. The rest — a hundred and twenty-five — were reported here in the last four nights; their updated scores are in the table at the bottom. One story went backwards: Claude Fable 5.2 sits at 923 today against 996 when it was written up on 11-12, same submission, same URL, so HN has applied a penalty. A number that declines is a wrong match or a moderator, and either way it does not belong in a delta column.

The page's own story today is that the AI money and the AI tooling have separated. SpaceX caught a returning upper stage for the first time, and that is unambiguously the engineering achievement of the week. But most of what was new on the front page was about who is allowed to run which agent on which machine, who writes the rules that govern a family business, and whether a benchmark score survives a three-line specification change.

## SpaceX caught the Ship — 1,595 points

**1,595 points** · 1,158 comments · [spacex.com](https://www.spacex.com/launches/starship-flight-15) · [HN discussion](https://news.ycombinator.com/item?id=50500963)

Flight 15 ended with the upper stage coming back from orbital velocity and being caught by the tower's arms. That is the first time a reusable upper stage has been recovered this way, and the closest comparison anyone in the thread can find is the Space Shuttle — which also flew a reusable orbiter, and paid for it with months of refurbishment between missions and a launch cadence that never got past a few a year.

The booster was not caught this time. Commenters noted that another couple of tonnes of propellant and oxidiser would probably have allowed both catches on the same flight, which is the sort of margin note that only appears when a programme is far enough along to be boring about its own milestones. The interesting engineering question is unchanged from Flight 1: how much of the heat shield is reusable, and after how many flights. Everything about the economics of a fully reusable stack depends on the answer, and nobody has it yet.

What the front page cannot tell you is what this costs. SpaceX's own launch page is a JavaScript shell that returns six characters to anything that is not a browser, so the claim in the headline rests on the webcast and the thread rather than a document. The best comment in the thread is also the most sceptical one: this proves a vertical-landing upper stage is plausible, not that it beats a spaceplane on cost. That is the right standard, and it is the one the next two years of reflights will be judged against.

## All AI-generated code should be open source — 937 points

**937 points** · 516 comments · [jakub.jankiewicz.org](https://jakub.jankiewicz.org/blog/ai-code-open-source/) · [HN discussion](https://news.ycombinator.com/item?id=50507303)

Jakub Jankiewicz's argument is that model output is a derivative of the scraped commons, so a licence should follow it out. The thread's strongest counter is not legal but arithmetic: by that logic anything written with an open-source framework or language is also open source, and every developer who ever learned from Stack Overflow owes a royalty. That is the reductio, and nobody in the thread escapes it.

The legal ground is less exciting than either side thinks. The top comment quotes the US Copyright Office's own guidance, which says copyrightability questions around AI can be resolved under existing law without new legislation, and that protection depends on human authorship. Which means the proposal is trying to attach an open licence to material that in the US frequently has no author to license it — the mandate is aimed at the wrong object.

The complaint that actually has standing comes from `blagie`, who maintains AGPL systems in wide use: early models reproduced his code almost verbatim, a company shipped it without notices or source, and enforcement took months. That is the real grievance, and it is about training-data laundering rather than about who owns the output. A licence on generated code does nothing for the person whose code was ingested; it just adds a formality to the next generation.

## Goldman took the coding agents off the trading floor — 905 points

**905 points** · 497 comments · [thestateofai.com](https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers) · [HN discussion](https://news.ycombinator.com/item?id=50415628)

Internal guidance updated in October restricts Anthropic's Claude Code and Microsoft's GitHub to Goldman's engineers — roughly 12,000 of 47,000 staff — cutting off the traders and bankers who had been using the tools to watch client flows, model positions and assemble pitch material. Strats keep access. In July, chief information officer Marco Argenti was still publicly enthusiastic about "vibe coding" by non-technical staff, describing a pipeline where traders built a first version and handed it to engineers to harden.

Two details make this more than a procurement story. The bank had already pulled Claude from its internal AI platform for Hong Kong bankers in April, under a strict reading of its Anthropic contract. And it is a lead underwriter on Anthropic's IPO, which is taking place in public right now. A bank restricting its own vendor's flagship product weeks before pricing that vendor's offering is the kind of fact that gets filed under governance.

The thread's consensus is that this was a control decision rather than a capability one. An agent with shell access, running unattended on the same workstation that holds client data, order entry and position books, is a leak waiting for a prompt. One commenter points out that traders are the only people at the bank who can send orders to market, which is exactly where an operational loss would show up. Nobody has an incident on the record; "a review of productivity and risk concerns" is a phrase that covers both an incident and a budget. What is not in doubt is that the people who understood what the tools did kept them.

## A $10 USB stick is a home server now — 835 points

**835 points** · 141 comments · [blog.bosscher.ch](https://blog.bosscher.ch/posts/openstick/) · [HN discussion](https://news.ycombinator.com/item?id=50406670)

An OpenStick bought on a whim for ten dollars including shipping: 512 MB of RAM of which about 450 is usable, four Cortex-A53 cores at 1 GHz, 4 GB of eMMC, Wi-Fi, a 4G modem and GPS, passive cooling, and one programmable LED. It runs Debian and Podman, which is all you need to treat it as a small server that draws a watt and makes no noise.

The useful part of the post is the service list rather than the hardware. CastSponsorSkip connects to Google Cast devices and skips sponsor segments; AdGuard handles DNS; the whole thing fits in single-digit megabytes of RAM per container. The install is "a bit involved", which in this genre means a custom image, and the author is honest about the tradeoff.

The limit you will hit is not CPU. It is 4 GB of eMMC with container images on it, and a 4G modem that exists because this hardware was built to be sold cheaply with a data plan attached. Ten dollars is a subsidised price for somebody's connectivity business, which is why the device is so much better than its price.

## Goodbye Claude, hello Pi — 831 points

**831 points** · 493 comments · [caleb.software](https://caleb.software/posts/claude-to-pi.html) · [HN discussion](https://news.ycombinator.com/item?id=50410107)

A migration note from a working developer, and the specifics are what make it worth reading. Claude Code allows exactly one session to be connected to the IDE at a time, so a second tab cannot receive text-selection events; the bug was reported in December 2025 and closed as a duplicate of something unrelated. The official GUI extension lacks half the slash commands, has no custom status line, and interleaves subagent output into the main thread chronologically, which becomes unreadable the moment two subagents run.

The number that should worry Anthropic is 244 releases this year, with more than three-quarters of them changing the system prompt or tool descriptions. Every one of those is a silent invalidation of whatever a user tuned against the previous version, and the author notes that despite cutting 80% of the system prompt, Claude Code still carries more overhead than Pi — including a default Bash tool description of nearly 3,000 tokens, most of it instructions about git and opening pull requests that current models do not need.

The exit is polite and the diagnosis is not: a product without anyone senior enough to say no. Feature velocity as a strategy works when the features compound. When they are dynamic workflows, agent teams and "ultrareviews" — each one another way for an enterprise to burn tokens — the compounding is in the billing, not the tool.

## "Don't Ask Again" is a credential leak with a UI — 626 points

**626 points** · 431 comments · [apiiro.com](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again) · [HN discussion](https://news.ycombinator.com/item?id=50407882)

Apiiro, an application-security vendor, counted 1,122 public GitHub files containing exposed passwords, and attributes them to the "don't ask again" approval that coding agents offer when they want to read a file or run a command. The mechanism is exactly what the button says: a one-off approval becomes a standing grant, the agent keeps working without a human in the loop, and credentials end up in files that get committed.

Treat the number with the scepticism any vendor finding deserves. The sample is public GitHub, which is a biased population — it is where people push toys, forks and demos, not where regulated code lives. The vendor sells secrets detection, so the finding is also a lead generator. And the write-up itself would not render for extraction, so this is the headline claim rather than the methodology.

None of that makes the mechanism wrong. A permission that persists across sessions, granted by a user who is thinking about one file, is a bad default for an agent that can read `.env`. The fix is boring and nobody wants to ship it: scope the grant to the operation, expire it, and never let an agent read a secret without a prompt that says the word "secret".

## Apple's grey list — 560 points

**560 points** · 371 comments · [theguardian.com](https://www.theguardian.com/technology/2026/nov/06/struggling-to-spell-male-chauvinist-pig-apple-grey-list-means-your-iphone-wont-help-you) · [HN discussion](https://news.ycombinator.com/item?id=50406111)

Independent researcher Derik Kauffman found a table inside iOS containing more than 100,000 words and phrases that Apple's predictive text will not complete. Some of it is what you would expect from a keyboard trying not to embarrass itself: drugs, sex acts, and "iMessage isn't working". Some of it is not. "Dictator Trump", "NSA spies", "Trayvon Martin", "Kashmir dispute", "Muslim extremist", "male chauvinist pig", and — for reasons nobody has explained — "Australia is a very bad place". In Hebrew the keyboard will not complete "the occupied territories"; in Arabic, "the Hamas movement".

The list is not a block. You can type any of it, and swipe-typing usually gets there, sometimes via a corruption: "United Ireland" becomes "United Iceland". Apple's statement is that the keyboard is designed to avoid inappropriate or offensive predictive suggestions, that users can always type what they mean, and that they can override the suggestions. All true, and all beside the point.

A deny-list is the least accountable form of moderation there is. It is invisible, undocumented, changes without notice, and answers to no appeals process — and because it is a compiled table rather than a model, nobody outside Apple can even see when it changes. Kauffman's own description, "a light-touch form of censorship", is generous. The interesting question is not whether "Dictator Trump" should autocomplete; it is who decides, and why the decision is buried in a binary.

## Microsoft Research's AI Frontiers group is over — 515 points

**515 points** · 309 comments · [hunch.net](https://hunch.net/?p=13764006) · [HN discussion](https://news.ycombinator.com/item?id=50406563)

John Langford started AI Frontiers inside Microsoft Research in 2023 because a single researcher with a clever idea could no longer assemble baselines strong enough to prove it. The group reached about fifty people and shipped real things — the Autogen orchestration framework and the Fara computer-use agent among them — while the New York contingent worked on fundamentals: the Next Latent objective, Dion3 as an improved Muon, and a Full Bandwidth Transformer that gets capability out of recursion. In early September the group was reorged into Microsoft AI. Now it is finished, and the leadership has left.

The reason is the sentence worth quoting: "the basic deal in MSR: do good work and good things happen. As far as I can tell we did good work and were non-consensually reorged away." Langford also says he will not go back, because research without a path to use is not interesting to him and because he does not expect the reorg pattern to stop without leadership that will organise to meet the moment.

Read against the rest of today's page, this is the same story as Goldman's. A research organisation is being folded into a product organisation, and the people who can leave are leaving. Langford's closing line — that a future Microsoft could become attractive for research again "if the people in control can develop a little bit more wisdom" — is the politest possible way to say the problem is management.

## 284B parameters on 64 GB of RAM with no GPU — 487 points

**487 points** · 210 comments · [github.com](https://github.com/synchopate/llama-modchip) · [HN discussion](https://news.ycombinator.com/item?id=50411961)

A Show HN that puts a DeepSeek-V4-Flash-0731 checkpoint — 284B total, 13.17B active — entirely inside 64 GB of DDR5, running on CPU. The headline build is 57.99 GiB across 1,362 standard ggml tensors with no custom tensor types, at roughly 8.7 tokens per second single-stream. Smaller variants of the same checkpoint trade quality for footprint, down to about 56 GiB.

The README is 55 KB of self-reported numbers with confidence intervals and paired significance tests, which is more rigour than this genre usually gets — and still self-reported, with the eval harness in the repo so it is reproducible in principle. The core claim that matters is arithmetic: 284 billion parameters in 62 billion bytes is somewhere around 1.75 bits per parameter, which is only possible because only 13 billion of those parameters are touched per token.

Whether that is useful depends on what you want. At 8.7 tokens per second, an agentic coding loop will feel broken; for batch summarisation on a machine you already own, it is a 284B model for the price of the RAM. The name is misleading — there is no modchip here, just quantisation and a lot of careful bookkeeping.

## Writing is now the thinking — 475 points

**475 points** · 116 comments · [muratbuffalo.blogspot.com](http://muratbuffalo.blogspot.com/2026/11/writing-as-thinking-tool.html) · [HN discussion](https://news.ycombinator.com/item?id=50412067)

The essay's hinge is a single sentence that stopped being true: there is no way to write a six-page, narratively structured memo and not have clear thinking. You can now produce six pages with no thinking at all, and the six pages still look like evidence that the thinking happened. If writing was your proof of work, the proof is gone.

From there the argument is conventional and better for it: produce in bulk with no judgment (mess up), then edit as if someone else wrote it (tidy up), then keep it plain, then write for yourself. The McPhee and Strunk-and-White citations are doing honest work rather than decoration, and the observation that writing works as thinking because it slows you down while keeping you on the problem is the best line in the post.

The claim that writing is now a comparative advantage is the part I would push on. If everyone's first draft is machine-generated, the differentiator is not the writing, it is the judgment about what to delete — and that is much harder to demonstrate to a reader who only sees the final six pages.

## The DRAM conspiracy suit survives dismissal — 462 points

**462 points** · 207 comments · [litnews.ai](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) · [HN discussion](https://news.ycombinator.com/item?id=50502988)

Judge Noël Wise, in the Northern District of California, denied in full the joint motion to dismiss by Samsung, SK Hynix and Micron in a proposed class action alleging they conspired to cut supply of conventional DRAM such as DDR5 and shift capacity to HBM. The court held this is not a rerun of DRAM II, the Ninth Circuit's 2022 affirmance of a dismissal against the same three companies.

The plausibility finding rests on a list that reads like a market summary: long-term HBM lock-ups, refusals of long-term conventional DRAM contracts, Micron shutting Crucial, fab delays, no capacity expansion despite record prices, near-identical customer vetting, and the companies' prior cartel history. The court gave no weight to three of the plaintiffs' arguments, which is the detail to keep — a judge who grants everything is a judge who has not read the record.

Passing a motion to dismiss is a low bar: plausibility, not proof. But it is the first time the HBM capacity shift has been treated as a possible antitrust fact rather than a demand story, and the timing is not subtle. Memory prices are the input cost behind every AI deployment on this page, including the local-inference projects.

## Benchmark scores do not survive a three-line change — 409 points

**409 points** · 108 comments · [maxxbench.unlap.ai](https://maxxbench.unlap.ai/research/why-maxxbench/) · [HN discussion](https://news.ycombinator.com/item?id=50406222)

MaxxBench takes 89 DeepSWE tasks and mutates them — rename this output file to lowercase, use UTC timestamps with a trailing Z instead of the supplied offset — while keeping the feature working. The median reference patch grows by 17 lines, about 3.5%. Then it re-runs the models.

The results are the story. Claude Opus 5.5 goes from 74.2% to 76.4%. Gemini 3.8 Flash goes from roughly 74% to 53.4%, a 23-point collapse that turns two apparent peers into an obvious choice. GPT-6 Astra drops from 74.1% to 71.9%, and Opus 5 falls to 63.5%. The paper's term for what the original scores measure is benchmaxxing: task details leak into training data, prompts and agents get tuned against known failures, and the score becomes a measure of familiarity.

Two caveats. A benchmark company publishing "other benchmarks are gamed, ours is not" is marketing, however good the methodology. And a 17-line mutation is a narrow test of spec-following; plenty of real work consists of exactly this kind of revision, which is the point, but it is not the same as a hard task.

## Lutnick is writing the chip rules that touch his old firm's client — 395 points

**395 points** · 178 comments · [nytimes.com](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) · [HN discussion](https://news.ycombinator.com/item?id=50506180)

The New York Times reports that a data centre called A201, in Malaysia's southern peninsula, will open next year full of hundreds of millions of dollars of Nvidia's most advanced AI servers and sell the compute to a Chinese tech giant. The arrangement is legal: the chips are not exported to China, they are rented from outside it. The operator is a client of Cantor Fitzgerald, which Howard Lutnick ran before he became commerce secretary and handed to his sons — and Lutnick is now writing the rules that determine whether that business model survives.

The story's own caveat deserves to be quoted, because a commenter pulled it out of the body: these dealings are a small part of Cantor's business, other investment banks have similar partnerships, and there is no evidence that Cantor's investments influenced his deliberations. That caveat is doing a lot of work beneath a headline that says otherwise, and the thread mostly skips it — the comments are about corruption in general rather than this transaction in particular.

The piece with a mechanism in it is buried: the US bans exporting chips to China but permits renting time on them outside China, the previous administration restricted that rental, and this one relaxed it. That is a policy choice, made by someone whose former firm's client benefits from it. You do not need to allege influence to notice that the conflict is disclosed and the rules are still being written by the conflicted party.

## The new MacBook Pro's OLED flickers at 240 Hz — 348 points

**348 points** · 177 comments · [macanorak.com](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) · [HN discussion](https://news.ycombinator.com/item?id=50506719)

Pulse-width modulation is how most displays dim: the backlight or the pixels switch on and off faster than you can see, and the duty cycle sets the apparent brightness. Notebookcheck's measurements put the new MacBook Pro's OLED panel at 240 Hz. The Mini-LED display it replaces measured 14,880 Hz. That is roughly sixty-two times lower, and 240 Hz is inside the range that a subset of people can see, as flicker, headache, or eye strain.

The panel is not purely PWM. Notebookcheck finds DC dimming present at all brightness levels, with the 240 Hz flicker still riding on top — which is the worst of both arrangements, because the marketing can say "DC dimming" while the modulation remains. Apple has not said anything about it, and there is no configuration knob.

The article's honest parts are the ones a lesser piece would cut: PWM sensitivity is a spectrum rather than a binary, two OLED panels can behave completely differently, and screen discomfort has many causes. But the load-bearing observation is that a lot of people who had no trouble with OLED phones and laptops before are having trouble with this one. On Apple's flagship professional notebook, at these prices, that is a specification decision somebody made.

## The EFF wants a warrant to search plate-reader history — 324 points

**324 points** · 108 comments · [eff.org](https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches) · [HN discussion](https://news.ycombinator.com/item?id=50503255)

The case is *United States v. Sturdivant*, before the Sixth Circuit. Police investigating robberies around Cleveland had the make, model and colour of a car but not the plate. They ran open-ended searches of two ALPR databases, Flock and ELSAG, found that a car belonging to the defendant had been tracked near the robbery sites, and made an arrest. The district court refused to suppress: a plate is visible to the public, so there is no reasonable expectation of privacy in it, so no warrant was needed.

The EFF's brief is that an ALPR is not a person looking at a plate. It is a searchable archive of where nearly everyone drove, queried backwards in time, and the aggregation is the Fourth Amendment event — the same argument that carried *Carpenter* for cell-site location data. Last month a federal district court agreed, calling ALPRs "a form of indiscriminate mass surveillance". The EFF has parallel fights at the Wisconsin Supreme Court and against San Jose's data retention.

The doctrinal question is narrow and the stakes are not: if open-ended queries of a database nobody opted into are not searches, then the Fourth Amendment regulates the act of looking and not the act of building the panopticon. The Sixth Circuit is one of the circuits where that either gets decided correctly or does not.

## Project Zero will publish 90 days after you are told — 301 points

**301 points** · 181 comments · [projectzero.google](https://projectzero.google/2026/11/disclosure-policy.html) · [HN discussion](https://news.ycombinator.com/item?id=50496051)

Google's bug-hunting team has a new disclosure policy: 90 days after reporting, with a ramp toward that deadline rather than an immediate switch, because vendors asked for time to fix their remediation processes rather than just their bugs. Project Zero says it will not use severity to decide when to publish, on the grounds that severity determines impact rather than the likelihood an attacker finds the bug.

Two other choices matter more than the 90 days. Project Zero will not verify that a fix shipped — the old policy's escape hatch is gone — and it will still grant rare exceptions, as it did for Spectre and Meltdown. The policy also assumes the reports themselves are high quality and high severity, since that is all the team files.

The obvious objection is that this puts users of unpatched vendors at risk on a calendar instead of a fix. The team's answer is that the embargo's value is declining anyway, because attackers find bugs during the embargo period too. That may be true; it is also unfalsifiable, which is why the ramp exists: it is a way to change behaviour without being able to prove the trade is right.

## A honeypot for supermarket fridges — 290 points

**290 points** · 70 comments · [github.com](https://github.com/hedgerow-dev/coldframe) · [HN discussion](https://news.ycombinator.com/item?id=50406292)

In 2026, attackers broke into internet-facing refrigeration supervisors across Europe using default passwords and old firmware, then forced defrost cycles. Coldframe pretends to be one of those controllers. It emulates a Danfoss AK-SM 800A, a Copeland/Dixell XWEB 500 and a Carel pCOWeb card, records who connects and what they try, and never hands over anything real. It is one Python file with no dependencies outside the standard library.

The craft is in the fingerprints. The Danfoss persona reproduces the nginx header order scanners record, the StoreView page title, TLS 1.2 only, and a one-year self-signed certificate for `CN=DanfossSM800A`, with keys generated per build. It reports firmware 4.3.1 everywhere, which is patched — so an attacker trying the CVE-2025-41450 "code of the day" gets logged along with whether their code was right, and does not get in. Weak logins do succeed: `Supervisor` / `12345` gets a session token and a dashboard of fake refrigerated cases with working defrost buttons, and every press is logged as a control event.

That is the right design. A honeypot that refuses everything teaches you nothing about what the attacker wanted. This one lets them press the button and records it — and the reason it is worth building is that the defrost cycle is the payload. Ruin the cold chain and you ruin the food, which is a much cheaper attack than ransomware.

## LinkedIn and Monster took down the MLM's job ads — 281 points

**281 points** · 173 comments · [cbc.ca](https://www.cbc.ca/news/canada/linkedin-monster-take-down-over-1-000-fake-job-postings-after-cbc-investigation-9.7415379) · [HN discussion](https://news.ycombinator.com/item?id=50499723)

A CBC News visual investigation found more than 1,500 misleading postings on LinkedIn and Monster advertising remote work with no experience needed, which in practice funnelled applicants into a multi-level marketing company that charged a monthly subscription and paid for recruiting others. More than 1,000 postings were taken down after the investigation published.

The detail that makes this a story rather than a complaint is that a newsroom had to do the detection. These were not hidden in a corner of the internet; they were product listings on the two largest job boards, and they stayed up until journalists counted them.

The broader pattern is that "fake job posting" is now an economy with several business models — the MLM funnel, the ghost job that keeps a pipeline warm, and the application that harvests identity documents. All three are cheap to run precisely because the platforms are priced per posting and policed per complaint.

## The languages that cost the most energy also score the worst — 231 points

**231 points** · 124 comments · [news.umich.edu](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/) · [HN discussion](https://news.ycombinator.com/item?id=50441444)

"The Language–Energy Divide", from Michigan with Aberdeen and Cambridge, measures inference energy across all 122 languages of the Belebele reading-comprehension set plus eight translated GSM8K languages and an open chat set, on Qwen 3, Gemma 3 and Llama 3.1. Energy per output token varies by up to 8.3× across languages. Total energy for a fixed set of requests varies by up to 179× between English, at 17.6 kJ, and Pashto, at 3,147 kJ.

Two mechanisms compound: rare or complex scripts cost more energy per token, and low-resource languages need more tokens to say the same thing. The finding that should get more attention is the double penalty — the languages with the largest energy footprints also achieve the lowest task accuracy. Cheap-to-serve users get better answers; the rest pay more for worse output.

The thread's best correction is that per-token energy clusters around 0.1 J for essentially every language, and most of the gap is output length: the worst cases are models looping, one respondent finding a sentence repeated 45 times. That reframes the result from a hardware story to a decoding story, and it is a fixable one. The other fair objection is vintage — the models tested are about eighteen months old, which in this field is a different product line.

## Also new, below the sections

- **[A family tree of software job titles](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/)** ([426 points](https://news.ycombinator.com/item?id=50499038), 201 comments) — 104 titles from "Computer" (a person) to "AI Agent / Context Engineer", laid out in five-year rows and seven family columns, built with Claude's help as one Graphviz file and one JSON file of descriptions. The useful part is the dashed arrows: the career moves, not the bloodlines.
- **[How did Woz write the Apple 1 BASIC before building the computer?](https://retrocomputing.stackexchange.com/questions/17957)** ([305 points](https://news.ycombinator.com/item?id=50501594), 158 comments) — The site returned a challenge page to every extractor, so the answer here is the thread's: hand-assembling on paper was simply how it was done when you could not afford a second machine, the 6502's common opcodes fit on a page and got memorised, and you typed it in once and debugged it in situ. Woz's feat was the size of the program, not the medium.
- **[Ask HN: What are you working on?](https://news.ycombinator.com/item?id=50417407)** ([303 points](https://news.ycombinator.com/item?id=50417407), 1,088 comments) — The November thread, and the comment count is the story: on a page full of agent harnesses, a thousand people turned up to describe what they are building by hand.
- **[Show HN: DeepSeek V3 in 190 lines of pure JAX](https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax)** ([268 points](https://news.ycombinator.com/item?id=50497589), 27 comments) — MLA, decoupled RoPE, DeepSeekMoE with one shared and sixteen routed experts, auxiliary-loss-free balancing, sequence-wise balance loss and multi-token prediction, in one readable file with no Flax and no PyTorch. 36.2M parameters, 13.6M active per token, pretrained from scratch on a MacBook Air M5 on public-domain detective fiction.
- **[Claude Code and Codex reverse engineered my 1994 Jeep's ECU](https://www.youtube.com/watch?v=WPj3aQ-xxpI)** ([238 points](https://news.ycombinator.com/item?id=50463399), 108 comments) — A video, and the moment the thread quotes is the agent deciding to prime the fuel pump, doing it, and continuing for about ten seconds until the human asked it to stop. A $3 Arduino and two coding agents against a thirty-year-old engine computer is the clearest demonstration on the page of what actually changed.
- **[Making any integer with four 2s](https://eli.thegreenplace.net/2025/making-any-integer-with-four-2s/)** ([224 points](https://news.ycombinator.com/item?id=50408713), 61 comments) — A 2025 post that resurfaced: with exactly four 2s and any operators, reach any natural number. Elementary school gets you to 6, factorials get you to 65,536, and 7 needs the Gamma function.
- **[Advancing science and engineering with Antigravity's /teamwork](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/)** ([210 points](https://news.ycombinator.com/item?id=50496811), 49 comments) — Google Research's post on its multi-agent teamwork feature; the body is client-rendered and would not load for extraction, so this is the headline and the thread.
- **[On Being an Engineer in 2026](https://shahar.blog/2026/11/08/on-being-an-engineer-in-2026/)** ([203 points](https://news.ycombinator.com/item?id=50426681), 312 comments) — Shahar Glazner's proof by contradiction against the "we are doomed" mood: if humans had no leverage over agents, and everyone has the same models and harnesses, engineer output would have converged. It has not, so the leverage is somewhere — his day job is now stopping his agents from blocking other people's agents.
- **[Why did some Apollo missions carry a grenade launcher?](https://space.stackexchange.com/questions/37775)** ([200 points](https://news.ycombinator.com/item?id=50505271), 139 comments) — Because the moon needed thumping. The ALSEP mortar package fired four grenades, armed and fired by command from Earth, as the active seismic source for the lunar surface experiments — with the flight manual quoted in the thread. The site itself blocks automated readers, which the thread also noticed.

## Still on the page

A hundred and twenty-five stories on today's list were covered in the last four roundups. Prior scores come from the post that reported them, and the date is in each cell because some of these were last written up three nights ago rather than last night. Every delta below satisfies `prior + delta = now`; the one repeat that moved backwards — Claude Fable 5.2, 996 on 11-12 to 923 today — is excluded rather than published as a negative.

| Story | Last | Nov 15 |
|---|---|---|
| [Jensen Huang resigns](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,041 (11-14) | 4,047 (+6) |
| [FAA issues national ground stop – lifted 4.5 hours later](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) | 1,631 (11-14) | 1,646 (+15) |
| [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,432 (11-14) | 1,438 (+6) |
| [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com) | 1,284 (11-14) | 1,288 (+4) |
| [Nvidia is preparing to oust Jensen Huang](https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad) | 1,224 (11-14) | 1,226 (+2) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 1,197 (11-14) | 1,202 (+5) |
| [Service degradation on Microsoft 365](https://status.cloud.microsoft/) | 1,170 (11-14) | 1,171 (+1) |
| [Nvidia allegedly engineered scarcity by funding AI startups to buy its GPUs](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) | 1,003 (11-14) | 1,093 (+90) |
| [My AI agents found an unmapped Maya site?](https://pietromiotti.com/latest/maya-site) | 1,035 (11-14) | 1,036 (+1) |
| [Anthropic IPO](https://ipo.anthropic.com/us/) | 1,001 (11-14) | 1,003 (+2) |
| [AWS emulator](https://github.com/aws/aws-emulator) | 987 (11-14) | 991 (+4) |
| [Nvidia CEO Jensen Huang's letter to staff about affair](https://nvidianews.nvidia.com/news/a-message-to-our-company) | 986 (11-12) | 987 (+1) |
| [Lovable apps expose passport details and more than 200K private messages](https://www.crissyfield.de/research/lovable-en/) | 396 (11-14) | 968 (+572) |
| [LibreOffice actually works 365 days a year](https://twitter.com/LibreOffice/status/2121205272479998268) | 924 (11-14) | 953 (+29) |
| [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) | 936 (11-14) | 937 (+1) |
| [Rust 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 890 (11-14) | 900 (+10) |
| [Is Opus 5.5 nerfed? Thinking patterns changed on November 3](https://twitter.com/shanemelaugh/status/2119192075505893695) | 821 (11-12) | 825 (+4) |
| [Nvidia employees petition to bring back Jensen Huang](https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/) | 812 (11-14) | 817 (+5) |
| [Reverse engineering my Coway air purifier to ditch the cloud](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 780 (11-14) | 793 (+13) |
| [KetchUp – Open-source SketchUp alternative built with Rust and WebGPU](https://ketchup3d.github.io/app/) | 769 (11-12) | 771 (+2) |
| [Show HN: My $300 embroidery machine needed a subscription, so I built my own app](https://github.com/simpsoka/zigzag) | 735 (11-14) | 740 (+5) |
| [USPS now offers official ZIP Code boundary polygons](https://postalpro.usps.com/zcb) | 736 (11-14) | 737 (+1) |
| [Google Gemini routes personal Drive files and emails to human annotators](https://github.com/thisisme6598/gemini_files/) | 737 (11-12) | 737 (+0) |
| [Amazon saves millions by replacing Sonnet 4.6 with Strands Decider](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 731 (11-14) | 732 (+1) |
| [Socratic Tutor](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) | 708 (11-14) | 714 (+6) |
| [United Airlines bans AI agents from booking flights on behalf of travelers](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/) | 680 (11-14) | 681 (+1) |
| [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 678 (11-14) | 679 (+1) |
| [AI usage generates a fragile codebase](https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/) | 638 (11-12) | 645 (+7) |
| [Unlocking any car from X brand in most of the world](https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/) | 629 (11-12) | 635 (+6) |
| [Why get an expensive Pi when I have an old phone?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 450 (11-14) | 611 (+161) |
| [Tech companies are trying to shift the concept of privacy again](https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again) | 356 (11-14) | 591 (+235) |
| [A false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 587 (11-14) | 588 (+1) |
| [Payments Canada announces launch of Canada's Real-Time Rail (RTR) payment system](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy) | 585 (11-12) | 587 (+2) |
| [93% of paint splatters are valid Perl programs (2019)](https://www.mcmillen.dev/sigbovik/) | 585 (11-14) | 586 (+1) |
| [I'm not convinced the AI bubble exists](https://matteoraso.github.io/im-not-convinced-the-ai-bubble-exists.html#im-not-convinced-the-ai-bubble-exists) | 573 (11-12) | 579 (+6) |
| [Apple has new Mac app coming to make running local AI models easy](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 569 (11-14) | 574 (+5) |
| [Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 568 (11-14) | 570 (+2) |
| [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) | 568 (11-14) | 569 (+1) |
| [Scion is back and is going to sell a kei truck in America](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 562 (11-14) | 563 (+1) |
| [KDE: The documentary [video]](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 297 (11-14) | 552 (+255) |
| [Outlook.com is rejecting email from domains without DMARC](https://mailroute.net/blog/outlook-rejecting-email-without-dmarc) | 549 (11-12) | 552 (+3) |
| [E-means: Outperforming k-means in one-tenth the epochs](https://e-means.github.io/) | 514 (11-12) | 521 (+7) |
| [Starlink Mini 2](https://starlink.com/mini-2) | 510 (11-12) | 514 (+4) |
| [Fable 5.2 one-shotted my nephew's dream game](https://notesbylex.com/fable-5-2-one-shotted-my-nephews-dream-game) | 504 (11-12) | 505 (+1) |
| [Gemini 4 Hydrogen and Orchestrator](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) | 501 (11-14) | 504 (+3) |
| [Doomsday: Friday, 13 November, A.D. 2026 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291) | 487 (11-14) | 501 (+14) |
| [Blender 5.3 released with Gaussian Splat support](https://www.blender.org/download/releases/5-3/) | 495 (11-12) | 498 (+3) |
| [Monkey Island: all 13 versions side by side](https://monkeyisland.pages.dev/) | 421 (11-14) | 494 (+73) |
| [Show HN: Every satellite that passed over any place this week, and its photos](https://www.watched.earth) | 484 (11-12) | 494 (+10) |
| [Elevated errors on claude.ai, Claude Code, and platform.claude.com](https://status.claude.com/incidents/nn11wk485zfn) | 493 (11-14) | 493 (+0) |
| [Synaptics patent claims stop work on DisplayLink drivers](https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/) | 487 (11-12) | 491 (+4) |
| [Jonathan Blow – If AI solved coding, why is my software still the same? [video]](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 445 (11-14) | 481 (+36) |
| [I'm making LLMs work on small and old devices](https://github.com/hyperionaidev/smolmaxxing/) | 478 (11-14) | 480 (+2) |
| [Microsoft Outlook/365 still down after 12 hours](https://twitter.com/MSFT365Status/status/2121079061774491735) | 452 (11-13) | 468 (+16) |
| [Tracking Anthropic-discovered vulnerabilities](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) | 460 (11-14) | 460 (+0) |
| [Former Nvidia CEO Huang had a relationship with a second employee, sources say](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) | 457 (11-14) | 458 (+1) |
| [Hyper-realistic sand with WebGL2](https://av.github.io/safe-sand/) | 445 (11-14) | 448 (+3) |
| [Show HN: Get your coding agent off ~2019 JavaScript, onto modern web primitives](https://github.com/GoogleChrome/modern-web-guidance) | 422 (11-11) | 447 (+25) |
| [AI unlocks Gödel's notebooks, said to contain hundreds of proved theorems](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) | 417 (11-14) | 436 (+19) |
| [Chinese frontier AI models carry the fingerprint of export-controlled GPUs](https://unemploymentlabs.com/checkpoint-forensics) | 371 (11-14) | 425 (+54) |
| [Val Town is winding down](https://blog.val.town/winding-down) | 420 (11-12) | 424 (+4) |
| [Terminal borders that don't cost a cell](https://www.joshka.net/cell-borders/) | 398 (11-14) | 420 (+22) |
| [Ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 390 (11-14) | 414 (+24) |
| ["Humble Bundle just killed most of their security through vibecoding"](https://forums.spacebattles.com/threads/humble-bundle-just-completely-killed-most-of-their-security-through-vibecoding.1346295/) | 406 (11-14) | 413 (+7) |
| [Jensen Huang said to have had relationship with executive who reports to him](https://www.nytimes.com/2026/11/11/technology/jensen-huang-nvidia-affair.html) | 402 (11-12) | 411 (+9) |
| [It Takes 16 Clicks for a Student to Open a PowerPoint on an iPad](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/) | 382 (11-14) | 404 (+22) |
| [Protecting SSH Keys with macOS Secure Enclave](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/) | 402 (11-14) | 402 (+0) |
| [Italy fines Meta $887M over Android users' data access](https://www.reuters.com/world/italy-fines-meta-887-million-over-android-users-data-access-2026-11-14/) | 255 (11-14) | 397 (+142) |
| [Dwarf planet candidate appears which takes roughly 280 years to orbit our sun](https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/) | 393 (11-14) | 394 (+1) |
| [$11.4M in Nvidia hardware vanishes during shipment from CA to TX](https://www.freightwaves.com/news/11-4-million-in-nvidia-hardware-vanishes-during-shipment-from-california-to-texas) | 377 (11-14) | 383 (+6) |
| [I asked every TV manufacturer 17 questions about how they spy on you](https://www.theverge.com/tech/1012372/tv-privacy-acr-questions) | 374 (11-12) | 379 (+5) |
| [Claude Fable 5.2 scores 65 on Artificial Analysis, highest so far](https://artificialanalysis.ai/models/claude-fable-5-2) | 379 (11-12) | 379 (+0) |
| [Writing correct software is hard and math alone won’t help us (2016)](https://pron.github.io/posts/correctness-and-complexity) | 374 (11-14) | 375 (+1) |
| [A live tree of systemd jobs on the boot console](https://codeberg.org/wvhulle/bootvine) | 375 (11-14) | 375 (+0) |
| [IceWM](https://ice-wm.org/) | 371 (11-14) | 374 (+3) |
| [AI is destroying the trust between writers and readers](https://www.theatlantic.com/books/2026/11/ai-literary-scams-amazon/689391/) | 362 (11-14) | 369 (+7) |
| [Critical RCE Vulnerability in Apache HTTP Server](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) | 369 (11-14) | 369 (+0) |
| [Edge0-145B: Frontier AI Capabilities on Your Own Computer](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer) | 350 (11-14) | 355 (+5) |
| [Semi-transparent, colored cadmium telluride photovoltaic panels in agrivoltaics](https://www.anthropocenemagazine.org/2026/10/magenta-solar-panels-may-be-agrivoltaics-cleverest-trick-yet/) | 354 (11-12) | 355 (+1) |
| [Using voltage glitching to unleash the A100 in my mining card](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/) | 353 (11-14) | 353 (+0) |
| [Six Math Essentials](https://teorth.github.io/tao-web/six-math-essentials.html) | 323 (11-11) | 342 (+19) |
| [Lock Your GitHub Actions](https://hugovk.dev/blog/2026/lock-github-actions/) | 336 (11-14) | 337 (+1) |
| [Ableton Live 13](https://www.ableton.com/en/live/) | 335 (11-12) | 336 (+1) |
| [Muse Ember: Our smallest, most efficient model](https://research.meta.ai/blog/muse-ember) | 332 (11-12) | 334 (+2) |
| [Locating the source of a mysterious beep](https://simonwillison.net/2026/Nov/9/mysterious-beeps/) | 331 (11-12) | 333 (+2) |
| [Nintendo Takes Down Emulators and Firmware in Massive GitHub DMCA Sweep](https://www.ign.com/articles/nintendo-takes-down-switch-emulators-and-mod-chip-firmware-in-massive-github-dmca-sweep) | 321 (11-14) | 326 (+5) |
| [Emacs in the Age of Magic](https://commandlinesystems.com/magic.txt) | 303 (11-12) | 310 (+7) |
| [Abandoned Quake 4 expansion finished by modders and now playable](https://www.moddb.com/mods/openq4/downloads/openq4-0141-windows-x64) | 308 (11-14) | 309 (+1) |
| [Show HN: Yogurt – Free, private, open-source alternative to Granola](https://github.com/FrigadeHQ/yogurt) | 303 (11-14) | 305 (+2) |
| [Claude Whiteboards, Claude Sheets, and Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) | 297 (11-14) | 298 (+1) |
| [Can a Linear Program Do Weight-Space Programming?](https://nathan.rs/posts/weight-space-lp/) | 292 (11-12) | 294 (+2) |
| [After 600 experiments, here's what I discovered about JEPA world models](https://haddyalchaer.com/jepa) | 285 (11-14) | 293 (+8) |
| [Live airband on all frequencies from KORS. Victoria, CA also ground stopped](https://orcasairband.com/) | 291 (11-14) | 293 (+2) |
| [Global Microsoft Outage](https://www.cnn.com/2026/11/12/business/live-news/microsoft-global-outage-intl-hnk) | 281 (11-13) | 293 (+12) |
| [A great old-timey game-programming hack (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html) | 250 (11-11) | 289 (+39) |
| [Your TV can see through walls (2025)](https://maurycyz.com/projects/fading/) | 281 (11-12) | 285 (+4) |
| [What constant surveillance is doing to children and parents](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 281 (11-14) | 281 (+0) |
| [AMD's Zen 6 Family: Feeding the Beast](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 274 (11-14) | 274 (+0) |
| [FM-1 Workbench](https://open.m-vave.com/fm1-workbench) | 265 (11-14) | 272 (+7) |
| [PyPI's redesigned project pages with clearer security signals are now live](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/) | 159 (11-14) | 269 (+110) |
| [Foundation Models framework](https://developer.apple.com/foundation-models-framework/) | 267 (11-14) | 267 (+0) |
| [Our software engineering interviews are changing a little](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) | 261 (11-14) | 263 (+2) |
| [Brave Search API now accepts agentic payments via the x402 protocol](https://brave.com/blog/search-api-agentic-payments/) | 260 (11-14) | 262 (+2) |
| [Show HN: Valencia, Spain in Sim City/Isometric View](https://tinyvalencia.com/) | 244 (11-11) | 261 (+17) |
| [Horible public key tricks](https://maurycyz.com/projects/badcert/) | 257 (11-12) | 261 (+4) |
| [Found: A protein that drives ageing without unleashing inflammation](https://www.nature.com/articles/d41586-026-03638-3) | 248 (11-14) | 257 (+9) |
| [Unsloth Qwen3.8-27B Quantizations – Dynamic v3.1 Update](https://unsloth.ai/docs/models/qwen3.8) | 236 (11-14) | 257 (+21) |
| [What's new in the .NET 11 runtime](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-11/runtime) | 254 (11-12) | 256 (+2) |
| [Show HN: Isometric SF – A pixel-art map of the SF Bay Area](https://isometricsf.com/) | 246 (11-14) | 252 (+6) |
| [Show HN: I recreated Papers Please but you're deciding which YC startups to fund](https://termsheetplease.com/) | 244 (11-14) | 247 (+3) |
| [Faster Retrieval for Better, More Efficient RAG](https://machinelearning.apple.com/research/faster-retrieval) | 240 (11-14) | 241 (+1) |
| [Announcing .NET 11](https://devblogs.microsoft.com/dotnet/announcing-dotnet-11/) | 238 (11-12) | 240 (+2) |
| [Atuin Threads: All your agent sessions on every machine](https://blog.atuin.sh/threads-agent-sessions/) | 237 (11-14) | 239 (+2) |
| [Talking Zen 6 with Mike Clark at AMD In-Depth](https://chipsandcheese.com/p/talking-zen-6-with-mike-clark-at) | 239 (11-13) | 239 (+0) |
| [Process Explorer for macOS](https://github.com/microsoft/Procexp-Mac) | 234 (11-12) | 235 (+1) |
| [Turning a 22-year-old Postgres type-confusion primitive into RCE](https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-2026-6460/) | 228 (11-13) | 232 (+4) |
| [A technical vision for the Haskell ecosystem](https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078) | 224 (11-14) | 231 (+7) |
| [We need more goat sacrifices](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) | 225 (11-14) | 226 (+1) |
| [Why Zig over C for Systems Programming](https://www.mtsoukalos.eu/2026/11/why-zig-over-c-for-systems-programming/) | 201 (11-13) | 218 (+17) |
| [Show HN: Live map of U.S. flights during tonight's FAA nationwide ground stop](https://grounds.top/) | 206 (11-14) | 215 (+9) |
| [The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough) | 214 (11-14) | 214 (+0) |
| [All US airports are currently ground stopped](https://twitter.com/flightradar24/status/2121347654714077605) | 210 (11-14) | 213 (+3) |
| [Queens Public Library under ransomware attack](https://connect.queenslibrary.org/) | 207 (11-11) | 213 (+6) |
| [Minnesota guitarist's "palmfrets" invention strikes a new chord](https://www.echopress.com/business/minnesota-guitarists-invention-strikes-a-new-chord) | 195 (11-14) | 201 (+6) |
| [What happened to 3Com?](https://dfarq.homeip.net/what-happened-to-3com/) | 198 (11-14) | 200 (+2) |

## Throughline

**Today's agent stories are all the same story: the thing you evaluated is not the thing you deployed.** Goldman restricted Claude Code to its engineers weeks before underwriting Anthropic's IPO. Apiiro counted 1,122 public files with credentials that an approval prompt made permanent. The author of a migration note left Claude Code over 244 releases and a system prompt that changed more than three-quarters of the time. MaxxBench showed a 3.5% change to a task specification costing Gemini 3.8 Flash twenty points of its benchmark lead. None of these is a claim that the models got worse. Each is a claim that the harness, the permissions and the eval are separate artifacts, and the one that gets measured is the one that ships least often.

**The money kept moving underneath it.** Nvidia is still the spine of this page — Jensen Huang's resignation at 4,047 points, the scarcity allegation at 1,093, the missing $11.4M shipment earlier in the week — and now the memory layer is being litigated: a judge in San Jose let a DRAM conspiracy suit past dismissal on evidence that includes HBM lock-ups and no capacity expansion at record prices. The Commerce Secretary is writing rules that touch a data centre operated by a client of the firm he used to run. And Microsoft Research lost a fifty-person AI lab because good work with no path to a product is, at current valuations, a rounding error.

**And the counter-programming was people building small things that work.** A $10 dongle running Debian and a handful of containers. A one-file honeypot that lets attackers press the defrost button so somebody can count who tries. Woz's BASIC assembled on paper because he had no machine to assemble it on. DeepSeek V3 in 190 readable lines of JAX, trained on detective fiction on a laptop. Four 2s and every integer. And the best joke on the page, which is also real physics: the Apollo crews carried a grenade launcher so they could throw four small charges at the moon and listen to what came back.
