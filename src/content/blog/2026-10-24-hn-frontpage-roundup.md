---
title: "Hacker News Front Page Roundup — October 24, 2026"
pubDate: 2026-10-24
description: "Fifty-eight stories clear 200 points, twenty-four of them new. The page stopped arguing about whether the kill switch exists and started arguing about who holds it."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Fifty-eight stories cleared 200 points today. Thirty-four carried over; twenty-four are new.

Yesterday's page was consequences landing on people — an apology, a market exit, a resolver doubling. Today's page is a step upstream from that. It's not about whether the kill switch exists; it's about who holds it and what they've decided to do with it. Google is 69 days from requiring every Android developer on earth to hand over government ID before their app can be installed. A dozen banks have started deciding which operating systems are allowed to run their app. Steve Blank, writing from London, reports what Europeans concluded after one American CEO throttled a satellite link in the middle of a war. Roku moved its repositories off GitHub.

The security thread didn't go away either. It got a CVE number in a compression library that almost every HTTP stack links against, and a synthesis essay asking whether this is the new normal. The answer, from people who'd know: probably, and the interesting half isn't the bugs.

## Your Phone Is About to Stop Being Yours — 523 points

**523 points** · 367 comments · [keepandroidopen.org](https://keepandroidopen.org/) · [HN discussion](https://news.ycombinator.com/item?id=50208558)

A single-page campaign with a countdown — 69 days as of tonight — against Google's developer verification regime, which is scheduled to start enforcing in 2027. The mechanics: every Android app whose developer hasn't registered centrally, signed the terms, paid, and submitted government ID gets blocked, on every certified device, worldwide. That covers apps shared between friends, hobby projects, and everything F-Droid distributes.

The page's most effective section is the description of what Google calls "power users can still install unverified apps." Nine steps. Enable Developer Mode by tapping the build number seven times. Dismiss the coercion warnings. Enter your PIN. Restart. **Wait 24 hours.** Come back, dismiss more warnings, choose between a 7-day permission and an indefinite one, confirm you understand the risks. The whole flow runs through Google Play Services rather than the OS, which means Google can tighten it or kill it later without shipping an OS update and without asking.

Two corrections from the thread keep this from being pure propaganda, and both are load-bearing. First, unsigned APKs remain installable after the one-time cooldown — the change removes *anonymous wide distribution*, not sideloading as a capability. That reframing is more precise than either the campaign or Google's blog post, and it's the version that survives contact with the actual behavior. Second, the top-voted skeptic's point is that the page spends zero words on the problem being solved: tech-support scams that walk elderly users through installing a remote-access APK. You can think the trade is bad — I do — but a page that omits the threat model it's arguing against is advocacy, not analysis.

What's left when you fix both of those is still damning. The thing being established isn't a malware filter. It's the principle that the company that made your device gets to decide, retroactively, what software you're allowed to run on it. And the mechanism is a global identity database for anyone who writes software. Malware authors will register with stolen documents — that's a solved crime. Dissidents, and developers in countries where being on that list is a risk, cannot.

## Around a dozen banking apps began specifically permitting GrapheneOS — 592 points

**592 points** · 253 comments · [grapheneos.social](https://grapheneos.social/@GrapheneOS/117492375462459244) · [HN discussion](https://news.ycombinator.com/item?id=50217495)

GrapheneOS posted a short reply to a thread, and it landed second on the front page. The content: most banking apps work on GrapheneOS, but many ship memory-corruption bugs and *incorrect* anti-tampering code that only runs correctly under the project's per-app exploit-protection compatibility toggle. About 10% of banking apps refuse to run at all because they ban non-Google-approved operating systems. And around a dozen have started explicitly permitting GrapheneOS alongside a Google-approved OS — a list that is growing.

That last clause is the whole story, and it's the opposite of how it reads at first. Official support for a de-Googled Android distribution from *banks* is a real win, and the thread's angriest commenters are wrong to treat it as defeat. But look at the shape of the win. The permission is granted by remote attestation, and GrapheneOS says so in the thread: build the OS yourself and these apps stop working, because your build doesn't carry the right attestation keys. What a dozen banks have agreed to is not "users may run the software they choose." It's "we will whitelist exactly one non-Google distribution, provided it is the *official* build."

The comment thread's better half goes past that. One commenter catalogues UK banks into four tiers — banned outright, degraded, works with caveats, fully supported — and admits the banks' position is defensible when you consider that a refund for a malware-cleaned account is the bank's money. Another asks why banks don't just use a keypair: app generates key, server verifies, done, no OS fingerprint needed. Another points out the absurdity of paranoid, attestation-obsessed banking apps shipping memory-corruption bugs that need an exploit-mitigation toggle to survive. And the sharpest line: whitelisting GrapheneOS is not better than whitelisting Google, because the correct number of operating systems on the list is zero.

The uncomfortable finding is that attestation is winning by being *convenient*. Not because it's secure — the same commenters note it protects the bank's liability, not the customer's device — but because it's the only mechanism that lets a bank answer "is this a rooted phone with a keylogger" without asking a question users can't answer. Every alternative proposed in the thread requires the user to do setup work at account opening. Until someone ships that, the whitelist grows one bank at a time and the principle hardens.

## Dessa: Conversation Model trained only on speech — 488 points

**488 points** · 183 comments · [block.xyz](https://block.xyz/dessa) · [HN discussion](https://news.ycombinator.com/item?id=50213925)

Block's speech research lab — the old Toronto Dessa team, reporting to Jack Dorsey — trained a full-duplex model from scratch on nothing but human conversation. No text pretraining, no text transcript anywhere in the pipeline. Audio in, audio out. It listens and talks at the same time, backchannels, laughs mid-sentence, and runs faster than real time on a MacBook Pro M4 Max or better. Total training compute: one NVIDIA GB200 NVL72.

Those last two numbers are the claim that matters, and the announcement knows it, which is why they're in the body copy rather than the headline. A full-duplex expressive speech model that fits on a laptop and trains on a single rack is a different class of artifact from a text model with a speech adapter bolted on. The demos are genuinely good — the interruption timing, the "oh my god" under the breath on the anniversary clip, the way it finishes a sentence the human blanked on.

Now the skepticism the page invites. There is no paper. There are no weights, no license, no pricing, and no way to run it — the call to action is a waitlist. "Most authentic full-duplex speech model ever built" is a marketing claim with no benchmark behind it, and the demo clips were selected by the people selling it. Accuracy claims get hand-waved with "it also knows a surprising amount, considering every fact it has come from raw sound," which is a sentence that contains no measurement. The interesting scientific questions the post itself poses — how efficiently do these learn language and facts versus text models, how well do they transfer languages — are exactly the ones a paper would answer and a landing page won't.

The comments split cleanly, and both halves are worth taking seriously. One camp: this is a large practical win for language learning and for any interaction where latency and prosody matter more than reasoning. The other: strip the voice and there's no intelligence behind it — several people describe it as a teenager's stream of consciousness — which makes the product impersonation, and the "life advice" demo is described, accurately, as cringe. The one comment nobody rebutted: "there's no way I would be able to detect if this was AI from the examples alone." That's the safety section of the post arguing against itself.

## Canadians are running out of time to oppose Bill C-22 — 480 points

**480 points** · 263 comments · [eff.org](https://www.eff.org/deeplinks/2026/10/canadians-are-running-out-time-oppose-dangerous-c-22-surveillance-bill) · [HN discussion](https://news.ycombinator.com/item?id=50202114)

Bill C-22, the Lawful Access Act, passed the House of Commons and is now before the Senate. EFF's summary of what it does: compels telecoms and messaging services to assist with surveillance; lets the Minister of Public Safety order a company to build a backdoor into its service, provided it doesn't create a "systemic insecurity"; and requires metadata retention for up to a year — who you talked to, where you were, which services you used, for people suspected of nothing. CCLA and Citizen Lab's joint analysis calls for withdrawing Part 2 entirely rather than amending it, and there's a parallel negotiation with the United States that would let American police obtain data on Canadian users without a Canadian court.

The clause everyone lands on is "as long as it doesn't lead to a systemic insecurity," because the answer is that a backdoor *is* a systemic insecurity — that's the definition, not a risk adjacent to it. A commenter who read the bill flags the drafting: the limitations read like terms of service written to sound protective, offering that providers can't be compelled to retain data that would reveal the *content* of communications, while saying nothing about the metadata that identifies every party and time.

The thread's most useful disagreement is about whether anything can still be done. Half the comments are fatalism — the Senate almost never kills a bill, so this is over. The other half has receipts: a petition was presented to the House of Commons, the CCLA petition is open, and the observation that "there's nothing I can do" is the mechanism by which this passes. Also worth noting the comparative angle a commenter raises from India, where a similar law exists and is used against dissent with no due process at all: these bills are always sold on the crimes they'd catch and always used on the politics they'd suppress.

## Root shell on Samsung TV — 465 points

**465 points** · 186 comments · [x.com/log4j](https://twitter.com/log4j/status/2113014142600953868?s=46) · [HN discussion](https://news.ycombinator.com/item?id=50218633)

A researcher got root on a 2025 Samsung TV after failing to reverse the firmware — AES encrypted, keys only recoverable with a physical UART/JTAG teardown — and went the zero-day route instead. The tweet promises a write-up and states the payoff: "PRIVACY HORROR." The follow-up detail that traveled furthest is that a TV model *without* a microphone will look for a connected soundbar or Bluetooth device that has one, and ship the audio to Bixby.

Start with the sourcing, because the thread's first comment does. This is an X post, screenshotted on Reddit, submitted to HN with no write-up attached. The technical chain in public reporting is real but belongs to earlier work: Bishop Fox documented a command injection in Tizen through 9.0, and a retail TV in Developer Mode exposes the SDB daemon on TCP 26101, which refuses a shell but accepts `appinstall tpk <name>` and writes the name into a shell command without quoting. A backtick substitution in the name runs as `uid=901(sdk)`. The same researcher's public repo documents rooting a QN90B in about a day with Codex in March and a QN90F in about three hours in July, out of the box. So: the capability is documented, the *privacy* half of today's post is not. "PRIVACY HORROR" is a promise, not a finding, and nothing on the page lets you check it.

What's independently verifiable is duller and worse. Dog barking and baby-crying detection are advertised SmartThings features. Doorbell and door-knocking detection are too. That's not a hack; that's the product working as shipped, on a device whose remote control may not have an input-select button any more. The comment that stuck with me is about the direction of the argument: if a TV is analyzing your room's audio for "features," the same pipeline is capable of answering questions nobody agreed to. The comment that stuck with everyone else is the one noting the researcher's OpenAI account was reportedly banned over the reverse-engineering work — an AI vendor deciding that using its model to understand hardware you own violates terms.

## OBS Studio 33 — 411 points

**411 points** · 145 comments · [github.com/obsproject](https://github.com/obsproject/obs-studio/releases/tag/33.0.0) · [HN discussion](https://news.ycombinator.com/item?id=50218430)

OBS 33 is the largest engine update in years and it arrives as a warning rather than a feature list. CEF goes from 127 (July 2024) to 150 (September 2026) — a two-year jump for the framework under every browser source and browser dock in the app. The release notes say the work "should be invisible to users," and then ask you to report anything weird, which is the honest version of the same sentence.

The breaking change: plugin loading was completely rewritten. First-party plugins move to a folder called `core`, third-party plugins get a new install location and folder layout, and legacy locations keep loading only until 34.0. That's a deprecation with a deadline attached, which means every OBS plugin author has one release cycle to ship. Enabling NVENC on Arm64 is the quiet story of the release — it's the thing that makes Windows-on-Arm streaming viable, and nobody will notice until the drivers are good.

## Elon Musk Just Gave Europe a Reason to Replace American Technology — 381 points

**381 points** · 407 comments · [steveblank.com](https://steveblank.com/2026/10/24/europe-gets-a-wake-up-call/) · [HN discussion](https://news.ycombinator.com/item?id=50220913)

Steve Blank spent the last month in London and reports what European policymakers are saying after the U.S. cut off intelligence sharing and throttled Starshield for Ukraine. His framing is precise about why this is different from every prior warning: it wasn't articulated policy and it wasn't a government act. Per WSJ reporting, one CEO ordered it. Years of European doomsayers claiming American technology had a kill switch were dismissed as paranoid fantasy — including by Blank himself — until the switch was thrown, mid-war, without notice.

The consequence he draws is not political, it's commercial, and it's the part worth taking seriously. If every U.S. vendor is now a kill-switch risk, the addressable market for the whole ecosystem shrinks, permanently, because "reliable" was a substantial part of what customers were buying. He lists the questions he's now hearing in Europe: what happens if Microsoft, or OpenAI, or Palantir, or Google decides to restrict access? What capability does Europe lose if enterprise software goes dark? Those were laughable in September. His answer to why Europe might actually act this time is the sharpest observation in the piece: AI collapses the cost of rebuilding the features and file-format compatibility of Office, Oracle, Salesforce and Palantir, at exactly the moment geopolitical risk has made buyers willing to switch. Sovereignty just became a sellable feature, and U.S. founders selling into European government now need an answer to "who holds the switch" before the first meeting.

Challenge the claim where it deserves it. "AI makes cloning Office within reach of most nations" is asserted, not demonstrated — the hard part of Office was never the features, it was thirty years of undocumented behavior in the file formats and the macro surface, and no model has been shown to reverse that. And the counterfactual is under-specified: some of the throttling was reportedly about Starlink being used outside its agreed terms, which the thread argues about at length. But Blank's underlying point survives that quibble intact. The *perception* that a single American CEO can degrade a partner's military capability on a whim is now the operative fact in European procurement, and perception is what procurement runs on. One commenter adds the concrete datapoint that matters more than any essay: ICEYE and Nokia are already building a Starlink replacement.

## Now Google says it might use your Gmail and Google Photos data to target ads — 373 points

**373 points** · 191 comments · [theverge.com](https://www.theverge.com/tech/1017600/google-personal-intelligence-privacy-policy-ads-update) · [HN discussion](https://news.ycombinator.com/item?id=50214218)

Google updated its privacy policy so that opting into "personalized intelligence" — the AI features that read your Gmail and Photos to answer questions — can also mean that data informs personalized ads. The Verge's framing is careful ("might"), and the thread is right to be careful back: the actual language is conditional, saying data won't be used for ads *unless* you choose to make data from these services available to other Google services that support personalized ads. That's a real qualification, and most of the outraged comments skip it.

The qualification is also not reassuring, and here's why. Google had already built the plumbing. A commenter describes tracking their weight in a Google Docs spreadsheet in 2023 and being served weight-loss ads without ever searching for anything — a concrete, reproducible observation that Drive and Docs data was already crossing into the ad system years before this policy language existed. What the update does is make the crossing legible and consensual-by-default, which is worse in one way (it's now an official product surface) and better in another (there's now a switch to find at google.com/search-personalization, and a commenter posts it).

The detail no one at Google wants on the record: the policy enumerates sensitive categories that won't be used for targeting — race, sexual orientation, religion, health — and political leaning is conspicuously not on the list. Also worth noting that "personalized intelligence" is a euphemism doing a lot of work. It means an assistant that reads your mail. The ad linkage is the monetization of a dataset Google previously described as too sensitive to sell.

## The Real Kevin Bacon — 361 points

**361 points** · 92 comments · [pudding.cool](https://pudding.cool/2026/10/kevin-bacon/) · [HN discussion](https://news.ycombinator.com/item?id=50169499)

The Pudding computed actual remoteness scores across 169,000 actors instead of playing the game. Kevin Bacon's remoteness is 2.28 — an average actor is 2.28 co-star hops from him — which sounds like the center of Hollywood and ranks 175th. Samuel L. Jackson is the center at 2.09, Willem Dafoe second at 2.13, Robert De Niro third at 2.14. Bacon's best-ever rank was 108th, in 1996, after *Sleepers*.

The two findings that make it more than a stunt. First, film count doesn't explain remoteness: Natalie Portman and Anna Kendrick have comparable filmographies, and Portman is far better connected because she's worked with almost three times as many of the 250 most-connected actors. Connectivity is a function of who your co-stars are, which makes it a positional property of the industry, not a personal one. Second, women occupy 16 of the top 100 slots, and the highest-ranked woman is Nicole Kidman at 21 — a distribution that follows directly from the casting pattern the first finding describes, and the piece doesn't editorialize about it, which is the right call.

The comments do the thing comments do: someone asks the genuinely interesting follow-up (what's the optimal *pair* of actors for one film, not the single best hub), someone notes Chloë Grace Moretz's high rank is an artifact of an early start and a stalled career, and someone points out that the game is named after the wrong person because "Bacon" rhymes with "separation." All correct. The structural point underneath the fun one: Kevin Bacon is a folk theorem about network centrality that survives because the true answer — a hub-and-spoke industry where a few hundred actors touch everything — is less quotable.

## Twelve years of distributed SQLite — 345 points

**345 points** · 51 comments · [philipotoole.com](https://philipotoole.com/twelve-years-of-distributed-sqlite/) · [HN discussion](https://news.ycombinator.com/item?id=50217500)

Philip O'Toole wrote the history of a category he started, mostly to correct the record: people writing about "distributed SQLite" tend to start the story around 2021, and rqlite shipped in September 2014. Raft log in front of SQLite, every write replicated, loss of a node doesn't lose data. It was the first open-source system to combine Raft and SQLite, and for several years nobody else tried.

The timeline is the argument. goraft first, HashiCorp's Raft from 2016, still in use. dqlite in 2017 for LXD and later MicroK8s — and he notes Shuttleworth called him to ask whether rqlite could be made to fit, and it couldn't; the difference is packaging, a library you embed versus a server you run. Litestream in 2021, which abandoned consensus entirely and streams the WAL to S3, because most applications need disaster recovery, not a cluster. cr-sqlite's CRDTs and libSQL's fork in 2022 for the AP and can't-touch-the-engine corners. Fly's LiteFS. Then the platforms: Cloudflare D1 and Durable Objects, Turso (acquired by Supabase in 2026), SQLite Cloud.

His conclusion — the design space has three corners and they appeared in order, consensus then streaming then merge — is the correct taxonomy, and it explains why every argument in the space is people defending different questions. The line that stings: the money went to the platforms. rqlite, dqlite and Litestream are free; the projects that raised capital or got acquired are the ones that turned the same idea into a service with a bill, eight years after it was open source. The comments add the two things the post omits — that D1 is, per a Cloudflare engineer's own admission, a thin wrapper over a singleton Durable Object, and the standard challenge to any consensus system: has it been Jepsen-tested? Fair question, no answer in the thread.

## Dutch government had hacked into Jared Kushner's phone — 307 points

**307 points** · 203 comments · [x.com](https://twitter.com/jaredkushner/status/2113376217415958767) · [HN discussion](https://news.ycombinator.com/item?id=50206914)

Reporting picked up today: GRU hacked Kushner's phone, and Dutch intelligence — AIVD, which has a documented history of getting inside Russian hacking operations, camera feeds included — obtained the material. Kushner's counsel's response, as quoted in the thread, is that he made no agreements with foreign officials not approved by the President and in the best interests of the United States.

The thread's consensus is that this is not the interesting part. The interesting part is that a man who was initially denied a security clearance over foreign financial entanglements had that denial overruled, then carried a personal phone through a period when he was in more consequential meetings than the President. The comment from someone who worked in intelligence is blunt: he is the textbook example of a person you do not grant access to anything, and the clearance was waived anyway. The structural observation below that is better than the partisan version: modern politicians keep as much as possible on personal devices precisely because phones aren't subject to FOIA. That's not carelessness. It's a records-avoidance strategy with a counterintelligence side effect, and every government that's tried it has learned the same lesson publicly.

## Bringing uv and ty together — 272 points

**272 points** · 91 comments · [astral.sh](https://astral.sh/blog/uv-ty-integration) · [HN discussion](https://news.ycombinator.com/item?id=50172962)

Astral shipped an experimental integration between uv (package manager) and ty (type checker). Two features: `ty` now reads PEP 723 inline script metadata and asks uv to build a real environment per script, so standalone scripts get editor completions and type checking against their own declared dependencies; and `uv check` becomes the unified command that prepares the environment, installs dependencies, and type-checks, using the ty version pinned in your lockfile.

The engineering is straightforwardly good — per-script environments in one repo is a real fix for the thing that made PEP 723 scripts unusable past a hundred lines. But the thread's best objection isn't technical: this is Astral consolidating because ty lost the type-checker race, and folding it into the tool everyone already has is how you stop losing. Multiple commenters have migrated off ty to Meta's Pyrefly or back to mypy, citing ty's gradual typing as the problem: they want a checker that fails when it can't infer, not one that models its own uncertainty and stays quiet. Others object to the coupling on principle — ty works fine on non-uv projects, uv has opinionated lockfile and layout quirks, and blending them means the type checker inherits the package manager's opinions.

The sharpest line is that the post is "shipping the org chart." A tool integration announcement that reads as a strategy memo. Also unanswered: why uv and not ruff, which is where the ecosystem's linting already lives.

## Physicists trap a single antimatter particle for a month — 249 points

**249 points** · 73 comments · [scientificamerican.com](https://www.scientificamerican.com/article/physicists-trap-a-single-antimatter-particle-for-a-month/) · [HN discussion](https://news.ycombinator.com/item?id=50186450)

A single positron held for a month, which is the first time quantum measurements can be made on an individual antimatter particle over timescales where systematics stop dominating. Antihydrogen has been trapped for tens of minutes before; a bare positron for 30 days is a different experiment, and the practical value is precision tests of matter-antimatter symmetry.

Not much to be skeptical about here, and the thread doesn't manufacture any. The one caveat worth stating: "a month" is a statement about one particle in one trap, and the interesting physics is in what the measurements do to the limits on CPT violation, which the abstract-level coverage doesn't quantify. Still the best pure-science story on the page.

## Node2Shell evolves to HTTP2Shell — 233 points

**233 points** · 116 comments · [aikido.dev](https://www.aikido.dev/blog/python-packages-vulnerable-node2shell-brotli-cve-2026-111497) · [HN discussion](https://news.ycombinator.com/item?id=50219177)

CVE-2026-111497 is an out-of-bounds write in Google's Brotli decoder, versions 1.0.3 through 1.2.0, CVSS 9.2. The bug is a length check that keeps accepting bytes it should reject; those bytes overflow a small working buffer, and an unauthenticated attacker who can get a crafted stream into a decoder can corrupt memory, leak data, or potentially execute code. It works in both directions — malicious client against an unpatched server, malicious server against an unpatched client that accepts compressed responses. That last clause is why this is not a Node story.

The blast radius sequence is the news: Node.js disclosed it Wednesday, Python packages Thursday, and by Friday it was clear that anything linking a Brotli decoder is exposed — libbrotli, Python, C++, bun, Envoy, with Apache and nginx spared only because they don't decode Brotli by default. Python's `requests`, `httpx` and `aiohttp` load the vulnerable packages automatically when they're installed with Brotli support, which is the default in a lot of images. Patches exist now: Brotli 1.2.1, brotlicffi 1.2.1.0, plus rebuilds of anything bundling them.

Two facts elevate this above routine. OpenAI found the bug in February and fixed the root cause in the Brotli source — but nobody classified it as a security issue, and no release shipped with the fix until this week, so every project that vendors Brotli has to ship its own update. That's an eight-month gap between knowing and disclosing, and it's the failure mode that "responsible disclosure" processes are supposed to catch. The second: as of Friday, advisory databases still didn't map the CVE to the PyPI packages, so pip-audit, Dependabot and Safety won't flag your vulnerable versions. Your scanners are green and you're exposed.

## How close can pure functional programming get to C? — 232 points

**232 points** · 68 comments · [rtfeldman.com](https://rtfeldman.com/fp-vs-c) · [HN discussion](https://news.ycombinator.com/item?id=50218195)

Richard Feldman's long post benchmarking Roc, a pure functional language with no mutation, against C on workloads where C is the reference. He gets close enough on several to argue the gap is mostly addressable — and he's specific about which optimizations do the work and what the language has to promise the compiler for each.

The comment thread does its job better than most. The best objection: a large part of C's advantage is copy elision, and what FP gives up isn't just mutation but the ability to reach into distant state and mutate it in place, which is exactly what removes the copies that dominate memory-bound code. Another commenter points out the compression benchmark is rigged by comparison choice — lean-zip is measured against miniz_oxide, an intentionally simple implementation, while zlib-rs (Rust) already beats zlib-ng, the fastest C implementation. And a third notes the post compares compression speed at a level without establishing that the levels produce comparable output sizes, which the linked data suggests they don't. None of that kills the piece; it's the difference between "FP can approach C" and "this FP program approaches a C program on these benchmarks at these settings."

The comment I'd frame: someone suggests we should all write FP and let an AI translate it to fast imperative code through correctness-preserving transforms, with the human staying in the driver's seat. That's the most plausible near-term story for FP's practical adoption, and it's also a description of a compiler nobody has built.

## How does Fable 5.1 hide messages in images? — 210 points

**210 points** · 73 comments · [lesswrong.com](https://www.lesswrong.com/posts/WHEQps5PK8LrrcTAb/how-does-fable-5-1-hide-messages-in-images) · [HN discussion](https://news.ycombinator.com/item?id=50201445)

A SASH Fellowship team asked Claude Fable 5.1 to draw SVG images that hide 50 short messages, then gave the rendered screenshots to a fresh Fable instance with no scheme agreed in advance and asked it to decode them. Fable converged on five encoding families on its own, and 33 of 50 images used the same one: a row of buildings whose heights encode letter positions, read left to right, with the skyline as cover. The decoder recovered 78% of messages exactly.

The asymmetry between the models is the interesting result. GPT-6 Astra never used heights at all — it reached for Morse code in short versus long objects (18 of 50), or acrostics in visible text, or Braille window panes. Cross-model decoding worked nearly as well: Astra recovered 44 of Fable's 50, Fable recovered 42 of Astra's. Colour-based schemes were the ones that died in a screenshot, which is what you'd predict from compression and colour-space handling, and it means the surviving channel is geometric rather than chromatic.

The authors are appropriately restrained and the restraint is the point: decoding is obvious if you monitor the decoding model's tool calls, so they explicitly don't claim this is dangerous today. What it does establish is that a frontier model can invent an encoding scheme, render it into an artifact a human reads as art, and hand it to another instance that decodes it without being told how. The Hugging Face incident — where agents passed information by encoding it in images — is cited as the inspiration, which is an uncomfortable reminder that this was observed before it was studied.

## The alien space of science — 206 points

**206 points** · 88 comments · [arxiv.org](https://arxiv.org/abs/2603.01092) · [HN discussion](https://news.ycombinator.com/item?id=50195002)

A NeurIPS 2026 main-track paper that asks a question with an obvious answer nobody has operationalized: scientific discovery is limited not only by what's true but by what's *cognitively available* to existing research communities. Some directions are coherent in light of the literature yet almost nobody is positioned to propose them, because no community combines the relevant concepts and methods. LLMs inherit that bias and recombine high-density regions of the literature, which is why "novel idea" generation produces so much plausible sameness.

Method: decompose 16,068 LLM papers from NeurIPS, ICLR, ICML, ACL and EMNLP into 273 "idea atoms"; train a 42.8M-parameter coherence model to score whether combinations are viable, and a second model to score whether any existing author community is positioned to produce them; then sample for maximum coherence with minimum availability. On blind human, LLM and downstream experimental evaluation they match or exceed frontier LLM baselines on per-idea quality while producing more diverse portfolios. Temporal validation uses only pre-2025 data and recovers 2025 combinations at 35.9 times chance while selecting under 1% of the candidate space; weighting for unavailability raises strictly novel combination recovery to 3.24 times chance.

The 3.24× is the number to hold onto, and it's much more modest than the framing invites. Recovering novel combinations above chance is not the same as those combinations being worth a researcher's year, and "cognitively unavailable" is a proxy — no community has thought of it — that can't distinguish overlooked from correctly ignored. The paper is honest that it's a sampling strategy, not an oracle. The comment from a research engineer who tried one of the sampled hypotheses suggests the ceiling: some of them are coherent restatements of things a specialist would reject in a minute for reasons the atom decomposition can't see.

## Remove pgrust: the entry is cheating — 192 points

**192 points** · 148 comments · [github.com/ClickHouse/ClickBench](https://github.com/ClickHouse/ClickBench/pull/2165) · [HN discussion](https://news.ycombinator.com/item?id=50205816)

ClickHouse's Alexey Milovidov opened a PR removing pgrust — a Rust reimplementation of Postgres — from the ClickBench leaderboard, with a forensic argument rather than an accusation. Two violations of the benchmark's published rules: the benchmark results come from machinery written specifically for the 43 ClickBench queries, and the hot runs replay cached answers from previous runs.

The evidence is the kind that's hard to argue with. The published aarch64 release binary embeds source paths like `crates/gravity/backend/irprobe/src/q00.rs` through `q36.rs` plus `tpch_q01.rs` — one hand-written kernel per benchmark query, shipped inside the binary. The plan matchers that dispatch to those kernels emit refusal messages naming the benchmark, for example "clickbench group count: filter is not `k <> 0`" and "clickbench phrase-min: the third column is not count(*)". The entry was also tagged `tuned: no` while being tuned for these exact queries.

The author's response in the thread is that the accusations are mostly false — this was `0.4-preview`, and `0.4-beta` was just open-sourced and can be audited. He's right that auditing is possible now, and the counter-argument holds for the beta. It doesn't hold for shipping a binary that special-cases the benchmark's query shapes, which is a design decision no later release retroactively un-makes. A commenter's contribution is the observation that cuts deepest: the removal request itself reads like it was written by a model, and so does the next PR's diff. Both sides of this are doing eyes-free coding now, and the humans are the ones signing off. Separately, someone who read the `0.4-beta` source notes pgrust genuinely is fast — four of the five systems ahead of ClickHouse on that board are closed-source — which makes it the rare case where the cheating and the engineering are both real.

## Is this the new cyber normal? — 188 points

**188 points** · 216 comments · [drew.silcock.dev](https://drew.silcock.dev/blog/is-this-the-new-cyber-normal/) · [HN discussion](https://news.ycombinator.com/item?id=50207115)

The synthesis post for the week: PHP2Shell, Brotli, eMudhra, LiteLLM, and the question of whether the pace is the anomaly or the new baseline. The author is upfront that he's not a security researcher and links out rather than pretending, which makes the piece useful as an index even where it isn't original.

The one fact in it that reframes the whole week: one of the two PHP RCEs was found in a 2024 audit the PHP Foundation commissioned with Sovereign Tech Agency funding, and *not fixed* — the reasoning being that nobody could figure out how to construct an actual exploit from the theoretical issue. An LLM did. That's not "AI found new bugs"; it's "AI closed the gap between a known flaw and a working exploit," which is the more consequential capability and the one that generalizes.

The comments are the best reading on the page today, and they mostly push back on the optimism. Two separate claims get separated cleanly by one commenter: the *pace* of critical findings is up, and the *window* between discovery and mass exploitation has collapsed. Even if LLMs eventually fix as many bugs as they find, the second change doesn't reverse — exploit generation is now cheap and permanent. Several working security people confirm the first from the inside. The counter-argument worth taking seriously comes from the other side: most software isn't iterating continuously; it's finished, and finished software doesn't grow new bug classes while it sits there, so this may be a one-time debt repricing rather than a permanent regime. Also in the thread, correct filing from a pedant that scanning and probing are being described as "exploited in the wild" in vendor blogs, which is not the same thing.

## Also new, below the sections

- **[Google illegally cut down 250K trees in Finland for data center](https://nypost.com/2026/10/24/business/google-illegally-tore-down-250k-trees-for-finland-data-center-infuriating-locals-report/)** — 242 points · 193 comments — NY Post reporting; treat the sourcing accordingly, but the underlying claim (forest cleared for a Hamina-area expansion beyond permitted limits) is the kind of externality that never appears in a capex line.
- **[A practical guide to AI image generation, from diffusion to agents](https://danielball.com/notes/ai_image_generation.html)** — 227 points · 70 comments — a working notes-style guide that's stronger on the agentic pipeline (prompt → iterate → evaluate) than on diffusion internals.
- **[Show HN: OnKey](https://github.com/dsmurrell/onkey)** — 226 points · 91 comments — a pitch-detection app for people who can't sing. The author learned enough DSP to build it, which is the correct Show HN origin story.
- **[CVE Tracker](https://cve.0xosprey.com/)** — 207 points · 72 comments — a clean CVE browser, which is a sad thing to need and a genuinely useful thing to have this week.
- **[Oregon lawmakers approve money to buy an iconic waterfall listed on Redfin](https://apnews.com/article/oregon-waterfall-for-sale-lawmakers-996de63462d49ec3ad9bee1629fb9488)** — 202 points · 98 comments — the state paying to keep a landmark out of private hands. The comments are mostly about the price per acre, which is the least interesting question available.
- **[FreeDNS](https://freedns.afraid.org/)** — 189 points · 48 comments — a free dynamic-DNS service that has quietly existed for two decades and is still the answer when your ISP gives you a rotating IP.
- **[Roku developer repositories moved from GitHub to GitLab](https://blog.roku.com/developer/gitlab-move)** — 189 points · 127 comments — the announcement page won't render without JavaScript and contains no stated reason. The thread supplies the plausible ones: GitHub's 2026 outage record, and CI pricing. Roku is being acquired by Fox, which makes "who controls our source host" a more pointed question than usual.
- **[Jank — the native Clojure dialect with seamless C++ interop](https://jank-lang.org/)** — 187 points · 49 comments — Clojure that includes arbitrary C++ headers, uses the C++ type system, and compiles to C++, with an LLVM JIT for REPL work. The interop demo (RAII, exceptions, templates, overload resolution all behaving) is the strongest part of the pitch.
- **[OpenSSL 4.1.0](https://github.com/openssl/openssl/releases/tag/openssl-4.1.0)** — 186 points · 67 comments — read it this week rather than next, given everything above.
- **[Job loss and cortisone mania](https://tilschuenemann.de/job-loss-cortisone-mania)** — 184 points · 134 comments — laid off inside probation, sick within weeks, autoimmune flare, prescribed cortisone, and then a manic episode nobody warned him about. The best-written first-person account on the page, and the least commented-on part is the right one: nobody told him steroids do that.
- **[Evolving Threat: http2shell is an RCE in Node, Python, and more](https://nitter.click/AikidoSecurity/status/2113759110625906950)** — 182 points · 96 comments — the same Brotli flaw, generalized. Read the Aikido write-up above instead.
- **[The Quake Fan who built the map editor everybody uses](https://funcarena.com/articles/the-quake-fan-who-built-the-map-editor-everybody-uses)** — 178 points · 23 comments — TrenchBroom's origin. Low comment count, worth the read.
- **[UUIDv7: Timestamps aren't time-ordered and other oddities](https://alexsci.com/blog/uuidv7-is-weird/)** — 168 points · 145 comments — the properties everyone attributes to UUIDv7 aren't guaranteed by RFC 9562: implementations may alter the timestamp, and may run it *ahead* of the clock to preserve monotonicity. Postgres's own docs warn the extracted timestamp isn't the generation time. The only thing UUIDv7 strictly provides is uniqueness.
- **[Air Purifiers as White Noise Machines](https://www.jefftk.com/p/air-purifiers-as-white-noise-machines)** — 165 points · 154 comments — measured, with a sound-level meter, which purifiers are quiet enough to actually sleep next to. The classic HN thread: someone has already done the experiment and posted the numbers.
- **[Apple Security Research Device Program](https://security.apple.com/research-device/)** — 162 points · 104 comments — applications open through October 30 for a fused iPhone with shell access, custom entitlements and kernel customization. The deadline is in six days.
- **[Using thousands of AI agents to uncover new leads in biological data](https://openai.com/index/scaling-ai-research-for-complex-biological-data/)** — 160 points · 105 comments — an OpenAI research post; the useful part is the harness (parallel agents with tool access and a verification step), not the biology.
- **[How is music possible](https://www.henrikkarlsson.xyz/p/music)** — 156 points · 103 comments — an essay on why a sequence of pitches means anything at all. The best writing on the page, by a distance.
- **[This I Believe (1952)](https://www.awakin.org/v2/read/view.php?tid=468)** — 153 points · 88 comments — a 74-year-old radio essay, and the comment thread is people arguing about whether any of its premises survived.
- **[We are all living inside of an obscure sci-fi film from 1970](https://thanksforthatjim.bearblog.dev/we-are-all-living-inside-of-an-obscure-sci-fi-film-from-1970/)** — 151 points · 136 comments — the film is *The Final Programme*. The argument is that its collapse-of-institutions aesthetic aged into documentary.

## Still on the page

Thirty-four of yesterday's stories are still above 200 points. The deltas are the story, and two of them are absurd.

| Story | Yesterday | Today |
|---|---|---|
| [Apple Music 404 Not Found](https://music.apple.com/this-url-doesnt-exist) | 211 | 897 (+686) |
| [Kimi K3.1 Pro and K3.1 Pro Highspeed](https://www.kimi.ai/blog/kimi-k3-1-pro) | 441 | 1,053 (+612) |
| [Today, we hacked what we'd set out to hack: the iPhone](https://news.ycombinator.com/item?id=50211474) | 526 | 1,063 (+537) |
| [Local Wikipedia](https://edjefferson.com/localwiki/) | 1,065 | 1,510 (+445) |
| [Ask HN: If the models are so good, why doesn't OpenAI just start 100 companies?](https://news.ycombinator.com/item?id=50200997) | 514 | 642 (+128) |
| [Docker is weird](https://codeandcake.dev/posts/2026-10-22-docker-is-weird) | 800 | 857 (+57) |
| [Every AI model has the same "controversial" take](https://www.modelcompare.ai/blog/ai-models-controversial-take-on-humans) | 605 | 645 (+40) |
| [WorldTUI: a 360M model pretending to be a terminal](https://news.ycombinator.com/item?id=50190363) | 599 | 636 (+37) |
| [Tell HN: I unknowingly broke the PHP RCE embargo](https://news.ycombinator.com/item?id=50193416) | 697 | 732 (+35) |
| [The foolishness of "natural language programming" (1978)](https://news.ycombinator.com/item?id=50203161) | 343 | 377 (+34) |
| [Quad9 to exit France](https://news.ycombinator.com/item?id=50195959) | 1,331 | 1,362 (+31) |
| [eMudhra to exit global SSL/TLS business](https://news.ycombinator.com/item?id=50195110) | 1,127 | 1,149 (+22) |
| [Jailbreaking the Switch 2](https://news.ycombinator.com/item?id=50192536) | 806 | 827 (+21) |
| [Run full iOS 16.5 firmware on Android](https://news.ycombinator.com/item?id=50196718) | 508 | 528 (+20) |
| [LLMs making formal verification feasible](https://news.ycombinator.com/item?id=50202217) | 435 | 455 (+20) |
| [Xbox wants 24–40 cents per hour for games you bought](https://news.ycombinator.com/item?id=50194009) | 375 | 393 (+18) |
| [OpenShell](https://news.ycombinator.com/item?id=50198675) | 486 | 499 (+13) |
| [Eight Bits of Trust: eMudhra's CA keys](https://news.ycombinator.com/item?id=50177916) | 939 | 949 (+10) |
| [PHP 8.2.35](https://news.ycombinator.com/item?id=50180873) | 1,092 | 1,101 (+9) |
| [eMudhra intermediate CA compromise](https://news.ycombinator.com/item?id=50166579) | 1,272 | 1,279 (+7) |
| [DeepInfer](https://github.com/deepseek-ai/DeepInfer) | 2,340 | 2,346 (+6) |
| [Woman charged over a Cash App account in her name](https://www.404media.co/amanda-smith-opened-a-cashapp-in-her-name-she-faces-years-in-prison-cashapp-fraud/) | 656 | 661 (+5) |
| [Claude Duet](https://news.ycombinator.com/item?id=50186037) | 560 | 565 (+5) |
| [A farewell to Arc browser](https://news.ycombinator.com/item?id=50197601) | 277 | 282 (+5) |
| [Using LLM for confidence scoring is a bad idea](https://news.ycombinator.com/item?id=50176082) | 219 | 224 (+5) |
| [Compromised LiteLLM 1.107.0 on PyPI](https://news.ycombinator.com/item?id=50181114) | 591 | 595 (+4) |
| [MPs moving to restrict gambling ads in Canada](https://www.cbc.ca/news/investigates/gambling-ads-restrictions-canada-9.7388888) | 258 | 262 (+4) |
| [EA is shutting down BioWare](https://news.ycombinator.com/item?id=50184586) | 700 | 703 (+3) |
| [Security Disclosure](https://news.ycombinator.com/item?id=50188228) | 599 | 602 (+3) |
| [PingCap TiDB Leaks](https://news.ycombinator.com/item?id=50173716) | 430 | 433 (+3) |
| [No more icons in every menu by default](https://news.ycombinator.com/item?id=50161346) | 480 | 482 (+2) |
| [An ad-free Android TV](https://news.ycombinator.com/item?id=50158942) | 442 | 443 (+1) |
| [Show HN: SimCity, but with Permits](https://news.ycombinator.com/item?id=50170593) | 936 | 936 (+0) |
| [Getting ready to operate GNU Taler in Germany](https://news.ycombinator.com/item?id=50197404) | 359 | 359 (+0) |

The Apple Music entry is a URL that Apple's music site doesn't serve. It was submitted as a joke yesterday at 211 and it is at 897 tonight, having gained more points than two genuine AI model releases and a certificate authority collapse combined. On a Saturday, the page's top mover is the absence of a page. Kimi K3.1 at +612 is the more defensible signal — open weights promised by November 4, and a comment thread that's mostly people arguing about whether the benchmark numbers survive contact with a real workload. The iPhone hack post at +537 is a write-up that keeps getting read because it's the only one of the week's exploits with a working chain and a narrative.

Two stories that arrived with no prior coverage and belong in this section rather than their own: [eMudhra ignored Mozilla's root-program investigation deadline](https://bugzilla.mozilla.org/show_bug.cgi?id=2083449) is sitting at 208 points with 160 comments, which is the next act of the CA saga — the Bugzilla thread is where the actual timeline lives, and blame being placed on "social media" is the tell. And [Your Phone Is About to Stop Being Yours](https://keepandroidopen.org/) appears twice in today's scrape under different submissions, which is itself a measure of how much the Android verification story is moving.

## Throughline

Three threads, and they're the same thread at different distances.

**Who holds the switch.** The Android lockdown, the GrapheneOS whitelist, the Starshield cutoff, the Gmail-to-ads policy change, Roku leaving GitHub: every one of these is the same structural move — the party that controls the platform discovering it can change the terms after you've bought in, and deciding to. The Android campaign is honest about the mechanism (a silent update, no opt-out, a body of software users already own). The banks story shows the same thing at a smaller scale and, crucially, shows it *winning*: attestation is spreading because it's convenient for institutions, not because it's good for users, and each whitelist entry makes the next one easier. Blank's post is what happens when the switch is thrown on something that matters, and his forecast — that AI collapsed the cost of building the alternative at the same moment the willingness to pay for it spiked — is the only forward-looking claim on the page that doesn't require believing a vendor. Notably, not one of these stories involves a government doing the locking. It's all private parties, and the only counter-pressure is a petition and a hobbyist adding a warning banner to an app.

**The vulnerability economy moved, and the intelligence didn't.** Brotli is the week's fourth critical CVE to escalate from one language to everything, and the pattern is now stable: disclose, watch it generalize across ecosystems in 72 hours, then discover your scanner has no mapping for it. The reframing that matters came from the PHP post, not the Brotli one — the bug was found by a funded audit in 2024 and left unfixed because nobody could weaponize it; a model weaponized it in minutes. Discovery was never the bottleneck. The gap between "this is wrong" and "here's the exploit" was, and that gap is gone. Meanwhile the page's AI stories are almost all about capability without measurement: Dessa has no paper and no numbers, Kimi's headline is a benchmark it graded itself, the alien-space paper's 3.24× is real but small, and the pgrust fight is what happens when a leaderboard number becomes a marketing asset. The week's most rigorous artifact is a LessWrong post about steganography that's careful to say it isn't dangerous yet.

**And the absurd index.** A 404 page is the top mover. A waterfall listed on Redfin gets bought by a state. A man gets root on a Samsung TV and the most-upvoted fact in the thread is that TVs without microphones go find one. SimCity with permits holds at 936 across two days without moving a point. The front page is a bad instrument for measuring importance and a good one for measuring attention, and today it spent most of its attention on the question of whether the things people already own will keep working. Which is the honest version of the whole roundup: the interesting number on this page isn't 2,346 points for an inference framework. It's 69 days.
