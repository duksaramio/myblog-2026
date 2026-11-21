---
title: "Hacker News Front Page Roundup — November 21, 2026"
pubDate: 2026-11-21
description: "The Lean and Mathlib communities certify a 17-million-line proof of the Riemann hypothesis that nobody has read, the Nasdaq erases all of 2026, a 26.4B-parameter model that loops runs on a laptop, and an OpenSSL 9.8 that needs 1.5 GB of input to trigger."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

A hundred and sixty-three stories cleared 200 points in a full scan of all 500 ranked ids today, and forty-two of them were not covered here in the last four nights. The rest are in the table at the bottom with the date their last reported score comes from. The ranked list is unusually frozen: the top of the page barely moved, and most of what did move moved by single digits.

The exception is the Riemann hypothesis. Yesterday the claim was a PDF and a blog post. Today the Lean and Mathlib communities published a joint statement certifying the proof as correct, Terry Tao sorted the three results by how digestible they are, and Scott Aaronson noticed that the stochastic parrots had just done the thing he spent 2021 being mocked for saying they couldn't. That sequence — claim, formal verification, public certification, all inside 48 hours — is new. Mathematics has never had a peer-review path that fast, and it has never had one that produces a certified true theorem whose proof no human has read end to end.

## The Lean and Mathlib communities certify Alpöge's proof — 630 points

**630 points** · 492 comments · [leanprover-community.github.io](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) · [HN discussion](https://news.ycombinator.com/item?id=50589618)

The statement is a joint one from the Lean and Mathlib communities, endorsed by the Lean FRO and the Mathlib Initiative. It says: on November 20, 2026, Levent Alpöge released a proof of the Riemann Hypothesis as a Lean library comprising 17 million lines of code, and "we have full confidence that Alpöge's proof of the Riemann Hypothesis is correct."

The interesting part is the method. They check four things, explicitly mapped to the four criteria in Xena's November 12 post on what "checked in Lean" actually means. The statement of RH is Mathlib's own `RiemannHypothesis` and was vetted by number theorists. The library compiles — dozens of people reproduced the same raw proof export. The theorem proves that statement, confirmed by two independent comparison tools, `comparator` and `con-leche --compare`. And the exported proof was re-checked by several kernels, including Lean's official one, `con-leche` and `con-ron`.

That is a much more honest checklist than "it compiles, therefore true," which is what most Lean-related announcements actually offer. Compiling proves you proved *something*; the comparison step is what proves you proved the thing you named.

The caveat is the size. Nobody involved claims to understand the argument. Tao's post the same day says the best place to follow the work is a Lean Zulip thread, where people are still trying to *extract the strategy of proof*. A 17-million-line proof has been certified correct by machines and remains unread by humans. That is a genuinely new state for mathematics to be in, and the community's certification language — "full confidence" — is a social judgment sitting on top of a machine check, not a replacement for one.

## Tao sorts the day's three results by how digested they are — 525 points

**525 points** · 231 comments · [terrytao.wordpress.com](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) · [HN discussion](https://news.ycombinator.com/item?id=50578358)
**311 points** · 99 comments · [github.com](https://github.com/tristanbuckmaster/navier-stokes/) · [HN discussion](https://news.ycombinator.com/item?id=50576232)

Tao's post is the only sober ordering of the day. He lists three results in decreasing order of how digested they are, and the ordering is the news.

First: Alpöge, Tristan Buckmaster and Matei Coiculescu, with heavy AI assistance, wrote a human-readable proof of finite-time blowup for the unforced incompressible Euler equations in three dimensions, formalized in Lean. That is the most conventional of the three — there is a paper a person can read.

Second: Alpöge and Buckmaster, again with heavy AI use, generated a proof of finite-time blowup for unforced 3D Navier–Stokes, also formalized. Tao's assessment is precise: the paper is technically human-readable, the strategy is broadly clear — numerically build an approximate discretely self-similar solution, then use rigorous perturbation theory to convert it to an exact one — but "more work needs to be done to create a proper, professionally written proof."

Third: Alpöge, "using an internal AI model," generated an enormous Lean-only proof of the Generalized Riemann Hypothesis.

Two things are worth flagging. The attribution in the third case is not Anthropic — it is "an internal AI model," which is a different claim from the one circulating elsewhere. And the middle result is the one that should worry people who write numerical PDE code: finite-time blowup for Navier–Stokes was a Millennium Prize problem, and it arrived as a byproduct of an AI-assisted push on a different problem. The `tristanbuckmaster/navier-stokes` repo (311 points) is the artifact; four open issues and one pull request is where the human review currently sits.

## Aaronson: the stochastic parrots have apparently proved it — 337 points

**337 points** · 312 comments · [scottaaronson.blog](https://scottaaronson.blog/?p=10344) · [HN discussion](https://news.ycombinator.com/item?id=50581084)
**210 points** · 217 comments · [borretti.me](https://borretti.me/article/re-riemann) · [HN discussion](https://news.ycombinator.com/item?id=50583982)

Aaronson's post opens with a 1859 Riemann quote, then an update defending his own headline against people who read it as an insult to LLMs and did not notice that the insult was aimed at the phrase, not the models. The Poe's Law note is the funniest paragraph written about this all week.

The substantive part: he says Alpöge got *Anthropic* models to prove GRH, producing 17.4 million lines of Lean — a different line count from the Lean community's 17 million, and a different model attribution from Tao's. He also notes that Quanta published, the day before, a result that the nontrivial zeros of the zeta function sit at most 3/8 away from the critical line, which already carries most of the number-theoretic implications a full proof would.

Then Federico Borretti's "Re: Riemann" (210 points) does the thing blogs are for. He quotes Alpöge's own announcement in full — "Claude flew, and danced, and sparkled near that finish line," "far outpaced me" — and sets it beside Ayn Rand's account of watching Apollo 11 launch. It is a fair comparison and a devastating one: the register of the announcement is theological, and the proof's significance is being argued in the same breath as its author's awe. Borretti's actual point is smaller and better: he read the news in Australia, over breakfast, as a Discord notification reading "they proved riemann :/".

## Inkling 2 Mini: 26.4B parameters that loop — 1,316 points

**1,316 points** · 272 comments · [thinkingmachines.ai](https://thinkingmachines.ai/news/inkling-2-mini/) · [HN discussion](https://news.ycombinator.com/item?id=50581260)

Thinking Machines released a model small enough to run on a laptop, and the architecture is the story rather than the benchmark table. Inkling 2 Mini is a looped transformer: the middle layers run three times per token. It is a mixture of experts with 26.4B total parameters, 3.4B active, and 5.4B weight activations per token to account for the looping. Total footprint is about 20GB, most weights natively NVFP4, last four layers MXFP8.

The claim: it leads every open-weights model under 100B total parameters on DeepSWE v1.1 (48.2%) and Vals Index v2.2 (46.5%). The training argument is the more interesting one — an unpruned non-looping model cost 7.5% less compute to train but needed 140% more inference compute to match the looped version's loss on 512k-token agentic traces. Looping trades training compute for inference compute, which is the right trade if you are the one paying for tokens.

Two honest notes in the post that most labs would have cut. Knowledge does not improve with loop passes — "knowledge is mostly a function of total parameter count" — so AA-Omniscience lands where other models of that size land. And the model was designed around what r/LocalLLaMA asks for, which is a strange and welcome thing to admit in a launch post.

The same day, a composite index put it at 35.9 out of roughly 30–70 — see the MEI section below. Both numbers are true. "Leads every open-weights model under 100B" and "mid-table on a 16-benchmark composite" describe the same model, and the gap between them is the difference between a chosen comparison class and an aggregate. Users are reporting ~27 tokens/second on a Ryzen 395 via llama.cpp Vulkan, and about 10 tokens/second on an M1 Pro with 32GB, which matches the "runs on your laptop" claim better than most.

## Framework's support is now the product — 817 points

**817 points** · 614 comments · [poolp.org](https://poolp.org/posts/2026-11-20/ill-never-buy-framework-hardware-again/) · [HN discussion](https://news.ycombinator.com/item?id=50576855)

The submission is titled "I'll never buy Framework hardware again." The page it points to is now 56 words long, most of them a retraction: "This post ended up on Hacker News and got a lot more attention than I expected. I'm not trying to hurt Framework beyond repaid (pun intended); I want them to fix their support. I want them to give us what we paid for, a working laptop. ENODRAMA."

Gilles Chehade pulled his own post after it hit the front page. The thread is worth more than the article was: Framework staff showed up early to say they are "digging into this with the team" and that "longevity has to include a streamlined and effective support experience in addition to the hardware being repairable." A commenter linked the previous round — three months ago, a recommended BIOS update bricked a laptop, the warranty had ended, and the offered remedy was buying a new mainboard.

The pattern is not that Framework hardware is bad. It's that repairability is a supply-chain promise and support is a staffing promise, and a company can be excellent at the first while being chronically behind on the second. Several long-time owners in the thread say exactly that: the best laptop they have owned when it works, and a support queue that eats months when it doesn't. The retraction is the tell. A customer who deletes his complaint because the thread worked is a customer who has learned that publicity is the only functioning support channel.

## Slopstrap: a field guide to the look — 619 points

**619 points** · 116 comments · [slopstrap.mikelacher.com](https://slopstrap.mikelacher.com/) · [HN discussion](https://news.ycombinator.com/item?id=50576012)

Mike Lacher built a CSS framework that makes your site look "hastily vibecoded," which is to say generated by an LLM in the last two years. The catalogue is the joke and the taxonomy: blinking dual-ring status dots that project "real-time urgency onto static HTML" (`All Systems Operational`, `AI Engine Active`, `Thinking Really Hard`), ambient orb layers in purple and cyan, full-page dark mode, gradient pill buttons. The copy promises "that LLM look without spending those LLM tokens."

What makes it land is that it is accurate. These are the actual tells — not bad taste, but a specific taste, repeated at scale because one model's aesthetic priors became thousands of sites' defaults. The thread's best observation is the one that deflates the whole genre: several commenters note they used these elements before LLMs existed, that thick left borders and handwritten underlines are fine in moderation, and the difference is volume, not vocabulary. Lacher has been making terrible websites for decades (the Brother IntelliFax 2800 App Store is the one people cite), so this is a specialist working in his medium rather than a bandwagon.

## Brazil open-sources the tax calculator — 604 points

**604 points** · 198 comments · [gov.br](https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/receita-federal-publica-primeiro-codigo-fonte-aberto-no-github-e-amplia-transparencia-da-reforma-tributaria) · [HN discussion](https://news.ycombinator.com/item?id=50532613)

Receita Federal published the source of its tax calculator on GitHub under the MIT licence, formalized by Portaria Cotec nº 342 of 12 November 2026, published in the Diário Oficial on 13 November. Three repositories: `calculadora-rtc-regime-regular`, `calculadora-rtc-simples-nacional`, and `calculadora-rtc-gerador-danfse`. The calculator implements the CBS calculation rules under the consumption-tax reform.

The reason this is a real story and not a press release: a tax is a specification, and until the specification is executable, every taxpayer implements their own interpretation of it. Publishing the reference implementation means a company can diff its own calculation against the state's instead of arguing about whose reading is right after an assessment. That is a large reduction in a specific kind of risk, and it costs the government nothing it wasn't already spending.

The thread's best line is also its sharpest question: "If I find a bug in an open-source tax calculator, is that tax planning or tax fraud?" Nobody answered. The honest criticism of the move is that open-sourcing the calculator makes the complexity legible without reducing it — you now have exactly one canonical implementation of a very complicated reform, and whoever controls that repo controls the de facto interpretation. Better than a closed binary. Not the same as a simpler tax.

## We promoted developers into architects without telling them — 557 points

**557 points** · 301 comments · [manidoraisamy.com](https://manidoraisamy.com/developer-to-architect.html) · [HN discussion](https://news.ycombinator.com/item?id=50579331)

A concrete bug story with a general moral. A colleague vibe-coded the logging for a Google Forms addon: try to get the user's email, fall back to the user ID, fall back to logging that an install happened without either. One line of code each, except each of those calls fans out into multiple Google API requests, and the logging ran first, so the welcome screen took 15 seconds to appear.

Mani Doraisamy's point is that the correct fix requires knowing what the API calls cost — log the timestamp only and tell marketing the email isn't available, or render the welcome screen first and log asynchronously. That knowledge is what used to separate a senior developer from a junior one, and it was never written down anywhere except in the heads of people who had been burned by it.

The title is the argument: the industry handed people AI that writes plausible code and quietly moved the remaining humans into an architecture review role, without a title change, a pay change, or any training in the thing they are now responsible for. The failure mode is not that the AI can't write the loop. It's that the AI can't know that line one is a 15-second network round trip, and the human reviewing it now needs to catch that in a diff instead of while writing it.

## Carnival's sulphur, from 2017 — 541 points

**541 points** · 339 comments · [ecohustler.com](https://ecohustler.com/article/one-corporation-to-pollute-them-all/) · [HN discussion](https://news.ycombinator.com/item?id=50572116)

The article is dated 16 June 2019 and reports a Transport & Environment analysis of 2017 data: Carnival Corporation emitted nearly ten times more sulphur oxide around European coasts than all 260 million European cars combined, and Royal Caribbean, second, was still four times worse than the European car fleet. The mechanism is bunker fuel — the stuff ships burned before the 2020 sulphur cap — and the piece is a campaign document for burning cleaner fuel.

So the first thing to say is that this is not news. It is a seven-year-old article with nine-year-old data, and it reached 541 points because most readers had never seen it. That is a legitimate way for an old investigation to circulate, but it is not evidence about 2026 emissions.

The second thing is that the regulatory landscape moved: the IMO's 0.5% sulphur cap took effect in January 2020, and the same campaigners who produced this analysis spent the following years arguing about scrubbers, which let ships keep burning high-sulphur fuel as long as they wash the exhaust. The comparison to cars was always the weakest part of the argument — cars and ships emit in different places, at different heights, affecting different populations — but the underlying point, that a single hull can out-pollute a national vehicle fleet, survives the accounting.

## Ask HN: two years unemployed, fifteen years of experience — 532 points

**532 points** · 597 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50583761) · [HN discussion](https://news.ycombinator.com/item?id=50583761)

The post: a senior engineer in the DC area, 15 years across a Fortune 50 and several mid-size companies, quit an insurance-tech job in January 2025 after being tipped off about layoffs, and has not found work since. Savings gone, four or five months of runway left, currently tutoring math and about to start as a manager at a pizzeria. "I can still code (C#/.NET/AWS) and learned the AI, but who cares if date of my last employment is Jan2025."

The thread is the most useful thing on the front page today and almost none of it is encouragement. The advice that repeats: don't announce the gap, reframe it as two years building something with AI agents; the front door of hiring is broken, so applications are a waste and referrals are the only channel; widen the geography and accept in-office. One commenter describes getting back in after four years off — hundreds of applications, two offers, both through people. Another gave up and became a plumber and says the demand is good.

The uncomfortable part is the context. This post sits on the same front page as a model that runs on a laptop and beats larger models at agentic coding, a post about AI coding agents shifting the bottleneck to review, and an argument that if you stop writing code you lose the ability to review it. Nobody in the thread says the quiet part, so I will: a 15-year generalist with no recent title and no network is the exact profile that the current hiring pipeline has stopped pricing. The advice to "build an AI startup for two years" is good advice for people with runway and terrible advice for someone with four months.

## GrapheneOS says Google is pressuring OEMs — 502 points

**502 points** · 205 comments · [grapheneos.social](https://grapheneos.social/@GrapheneOS/117645038299496084) · [HN discussion](https://news.ycombinator.com/item?id=50570479)

The primary source is a four-sentence Mastodon post: Google is "sabotaging their OEM partners by making a growing number of features and updates exclusive to Pixels," and "trying to convince OEM partners not to support GrapheneOS or even bootloader unlocking," and "trying to harm GrapheneOS directly."

That is a serious antitrust allegation delivered without a document. The thread splits cleanly. One camp wants receipts — the top-voted skeptical comment says it "looks to me like ragebait marketing" and asks them to lead with evidence and sources. The other camp says the pattern is visible without a leak: Pixel-exclusive features have been accumulating for years, and Play Integrity plus developer verification give Google a lever that does not require anyone to write a threatening email.

The concrete advice in the thread is to take it to state attorneys general rather than to the EU, and to publish a template letter. The strongest argument for GrapheneOS's side is structural rather than evidentiary: Google controls the OS, the app store, the integrity attestation that banking apps check, and the reference hardware. Bootloader unlocking is the one escape hatch, and it exists at Google's pleasure on Pixels and at each OEM's pleasure everywhere else. Whether or not anyone sent an email, the leverage is real and it is all pointed one way.

## The AI trade gives back the year — 481 points

**481 points** · 838 comments · [theguardian.com](https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off) · [HN discussion](https://news.ycombinator.com/item?id=50574383)

The Nasdaq erased all of its 2026 gains on Friday, closing 5% below where it started the year. The Dow and S&P 500 closed in correction territory. The tech-heavy index lost about $4 trillion in market value over the week, per the Wall Street Journal as cited by the Guardian.

Anthropic's record-breaking IPO failed to hold. The stock fell 9% on its second day to $88.30, close to the $83 it priced at, after opening 34% above and briefly running almost 40% up on day one. Nvidia fell 14%, SanDisk 14%, Micron 12%, TSMC about 6%, SoftBank 14.5% for its worst day in over two years. Taiwan's index dropped 6.7%, the Nikkei 5%, the Kospi 5.5%, and the Stoxx 600 had its biggest weekly loss since March 2025.

The mechanism worth naming: an IG analyst suggests Anthropic may be "draining market liquidity," as investors sell other holdings to fund a position in the new listing. That is the opposite of what a mega-IPO is supposed to do. The story the market told itself for two years was that a giant AI listing would validate the buildout and lift everything around it. What happened is that the listing absorbed the cash and the sector repriced around it, one day after the largest IPO in history priced.

## A pile of lead azide nobody can move — 426 points

**426 points** · 287 comments · [science.org](https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really) · [HN discussion](https://news.ycombinator.com/item?id=50588982)
**237 points** · 121 comments · [cornholenews.news](https://cornholenews.news) · [HN discussion](https://news.ycombinator.com/item?id=50561515)

Derek Lowe's post about a large quantity of lead azide — a primary explosive, the kind used in detonators — that has degraded into a state where moving it is more dangerous than leaving it. Science.org would not load for me: Cloudflare served a challenge page to every extraction attempt, so this section is written from the thread, which is unusually well informed.

What the commenters establish: the site is the Iowa Army Ammunition Plant, built by the government for the Second World War, government-operated until the 1960s, and contractor-operated since 1998. The problem was identified around March 2026. The barrels cannot be shifted, because shifting them is the thing that detonates them; covering the pile with dirt and concrete and walking away is not an acceptable regulatory outcome either, since the hazard gets worse every year. The plan under discussion is to detonate it in place, which is why "Detonating a huge pile of lead azide" is the title.

Two commenters make the points that matter. One, from someone who works with shock-sensitive materials: when you find something in this state, the correct response is to call the bomb squad and destroy it where it sits — this is not a logistics problem that a robot solves. Two, the accounting one: a government-owned, contractor-operated facility cut corners on explosive ordnance disposal, and the failure mode is a toxic cloud over Iowa. `Show HN: Cornhole News` (237 points) — a state-level HN clone — had "U.S. Army Plans to Blow Up Old Ammo, Creating Toxic Cloud Over Iowa" as its top story. The regional press got there first.

## "I can tell you wrote this yourself" — 425 points

**425 points** · 409 comments · [em-online.bearblog.dev](https://em-online.bearblog.dev/i-can-tell-you-wrote-this-yourself/) · [HN discussion](https://news.ycombinator.com/item?id=50571189)

An honours student set the due date for a progress report a week early by accident, wrote 5,000 words on flapping-wing micro aerial vehicles in 48 hours, and handed it to her supervisor. His first response: "I can tell you wrote this yourself." She could not tell whether it was a compliment. Then he clarified: "I've been sent a lot of reports written by AI."

Her essay is about what that means for someone still inside the system. The assignment documents for her engineering degree say students are "strongly encouraged to explore the use of AI," which in practice reads as an expectation. The skill being graded — writing ten pages of technical prose about your own project — is now the skill that marks you as suspicious for having done without help.

The thread is 409 comments of people arguing about whether "I can tell" is a compliment, a threat, or a new form of credential. The sharp version of the point: when the default output is generated, the marginal signal in *not* using a tool becomes enormous, and the cost of that signal is paid by whoever has the least time. A student with a job and a family writing a report at 2 a.m. is now competing against a student with an API key and a weekend.

## The release train: PostgreSQL 19 and FFmpeg 9.1 — 391 points

**391 points** · 30 comments · [postgresql.org](https://www.postgresql.org/docs/release/19.0/) · [HN discussion](https://news.ycombinator.com/item?id=50569890)
**303 points** · 36 comments · [ffmpeg.org](https://ffmpeg.org/download.html#release_9.1) · [HN discussion](https://news.ycombinator.com/item?id=50569998)

PostgreSQL 19 shipped on 19 November. The headliners: a new `REPACK` command that reclaims disk space and reorganizes table contents, with `REPACK (CONCURRENTLY)` allowing it without blocking reads and writes; `pg_plan_advice` for controlling planner decisions and `pg_stash_advice` that applies plan advice automatically based on the query; automatic scaling of I/O worker processes; quicker foreign-key checks; logical replication enabled without a server restart when `wal_level` is `replica`; logical replication of sequence values; a `WAIT` command for read-your-writes consistency on standbys; and parallel autovacuum of table indexes with priority scoring.

The one to watch is `pg_plan_advice`. A database that remembers what plan you wanted for a query is a database acquiring an opinion, and opinions need migration stories. `REPACK` is the one DBAs will use on day one — it is the operation they have been doing with `VACUUM FULL` under a maintenance window and a prayer.

FFmpeg 9.1 "Gauss" (303 points) shipped the same week with 36 comments, and PHP 8.6 (in the table, 249 → 294) went from 249 to 294 points since yesterday. Infrastructure releases do not generate arguments, so they generate very little discussion — 30 comments on a major database release against 597 on a personal unemployment story. The software that everything runs on gets the least attention and the most uptime.

## The monitor was the bottleneck — 381 points

**381 points** · 194 comments · [blog.tymscar.com](https://blog.tymscar.com/posts/studiodisplayethernet/) · [HN discussion](https://news.ycombinator.com/item?id=50587875)

A 2.5 Gbps symmetrical line delivering 600 Mbps down and 2.4 Gbps up — the asymmetry is backwards, and that was the clue. Oscar Molnar had moved every connection onto a Studio Display XDR for a one-cable setup and never ran a speed test through it for half a year, because 600 Mbps was fast enough to not notice that three quarters of the line was missing.

The debugging is the content: the ISP checked out, a work laptop showed the same speed, and the variable was the display's built-in Ethernet path, which is what you get when a monitor becomes a dock. The general lesson is the good one — single-cable convergence moved the network adapter into a device nobody thinks of as a network device, with no QoS, no link-speed visibility, and a firmware update cadence set by a display team. The upload speed staying intact is the detail that makes it diagnosable at all: the bottleneck was in one direction, which points at a specific link rather than at the line.

## If you stop writing code, you get worse at reviewing it — 374 points

**374 points** · 179 comments · [cekrem.github.io](https://cekrem.github.io/posts/if-you-stop-writing-code-you-also-get-worse-at-reviewing-it/) · [HN discussion](https://news.ycombinator.com/item?id=50573886)

The argument, by analogy: nobody claims you can maintain guitar technique by writing specifications for other guitarists and listening to what they play back. Yet software engineering is the one field where people confidently assert that their skills will not decay if they stop practicing, because they are "at a good enough level."

The post is short and the analogy does most of the work, which is why the thread is 179 comments of pushback that mostly proves the point. The best objection is that reviewing is its own skill with its own practice loop, and that a senior reviewer who reads a thousand diffs a year may be getting better at the thing they are actually asked to do. That is true and it dodges the question. The thing being lost is not review judgment in the abstract — it is the ability to predict, while reading a diff, what the code will do at runtime. The Google Forms logging story two sections up is exactly that failure: a reviewer who no longer writes the API call does not feel the 15 seconds.

## Gemini 4 Neon tops a composite index — 372 points

**372 points** · 244 comments · [git-aarvin.github.io](https://git-aarvin.github.io/mei/) · [HN discussion](https://news.ycombinator.com/item?id=50568130)
**255 points** · 78 comments · [micjm.com](https://micjm.com/blog/gemini-4-neon-looks-like-a-top-model/) · [HN discussion](https://news.ycombinator.com/item?id=50554374)

The Models Engineering Index computes a composite across 16 coding benchmarks, adjusted for benchmark difficulty and missing results so that models average 50 by construction. The current top: Claude Fable 5.2 at 67.4, Gemini 4 Neon at 67.1, GPT-6.2 Astra at 66.0, Opus 5.5 at 63.0, Gemini 4 Carbon at 61.7, GPT-6.2 Sol at 60.8. Inkling 2 Mini sits at 35.9. Cost is reported relative to a typical model: Fable 5.2 at 7.7×, Neon at 3.1×, Qwen4-Max at 12×, Hy4 Flash at 0.025×.

Read the numbers as a ranking, not a measurement. Any index that normalizes the field to average 50 has thrown away the absolute scale, and the weighting across 16 benchmarks is one person's judgment — this is a `github.io` page, not a consortium. What it does better than a vendor table is show cost and score together, which is the only comparison that matters for anyone actually paying per token. Neon at 67.1 for 3.1× against Fable at 67.4 for 7.7× is a different story from "Neon is #1."

A second post, "Gemini 4 Neon looks like an Opus 5.5 competitor" (255 points), does the projection honestly: Carbon is the strongest model on the Agent Duel leaderboard if you exclude early voting but is slow at 46 tokens/second, and Neon was being served at 127 tokens/second through OpenRouter on release day. Faster at the same quality is a bigger deal than a 0.3-point index gap, and it is the kind of thing a composite cannot show.

## OpenSSL's 9.8 needs 1.5 GB of input — 367 points

**367 points** · 345 comments · [github.com](https://github.com/openssl/openssl/pull/33652) · [HN discussion](https://news.ycombinator.com/item?id=50569226)

CVE-2026-121481 is a buffer overflow in `EVP_EncodeBlock()`, scored CVSS 9.8. The pull request fixing it returns `-1` for invalid inputs — null buffers, negative lengths, and lengths where the encoded size does not fit in an `int` — which is what wolfSSL's compatibility layer already does. The advisory is still pending; the OpenSSL SRT asked for a public fix.

The thread's consensus, from people who read the code, is that 9.8 is inflated. Triggering it requires an input larger than roughly 1.5 GB, which on 64-bit systems means a buffer that mostly cannot be allocated. One commenter notes it resembles CVE-2021-23840. Another makes the design point that matters more than the score: `EVP_EncodeBlock` makes the caller compute the output buffer length with a non-obvious formula and never tells them how much was written, so every caller is one arithmetic mistake from a heap overflow. The API is the vulnerability; the CVE is just the instance of it that got a number.

The report also explains the timing squeeze that has been visible all week: the coordinated disclosure date was 2026-11-25, but the Ruby2Shell bug forced GitLab to move earlier, so the GPGME bug went out on 20 November too. The GnuPG advisory (200 points) is a double free in GPGME affecting everything before 2.3.0, reportedly fixed in Red Hat's packaging five years ago and never upstreamed. Two decades of "we'll upstream it later" arriving in the same 48 hours as three other memory-safety CVEs is not a coincidence; it is the same backlog being worked off in public.

## Compress the RAM instead of buying it — 334 points

**334 points** · 271 comments · [curiousbits.nl](https://curiousbits.nl/blog/do-not-buy-ram-compress/) · [HN discussion](https://news.ycombinator.com/item?id=50557661)

Therry van Neerven ran out of memory, noticed RAM prices, and turned on zram. Compression ratios up to 1:4 are routine; the cost is a little CPU and some added latency. Fedora and Pop!_OS enable it by default, Ubuntu does not, and Amazon Linux only turns it on for small instances.

The framing is the useful part: more parallel agent workloads per workstation mean memory demand went up at exactly the moment memory got expensive, and compression is the only lever that does not involve a purchase order. The caveat he states and the thread amplifies: zram is not a substitute for enough RAM when your workload is a working set that does not compress — it is a buffer for the 20% of pages that are cold. One commenter points out that in the SaaS era this would have saved a generation of unnecessary instance upgrades, because the CPU was idle and the memory was the constraint.

## The SEC is looking at Nvidia's books — 298 points

**298 points** · 163 comments · [marketscreener.com](https://www.marketscreener.com/news/us-sec-s-nvidia-probe-is-examining-potential-accounting-issues-sources-say-ce785ed3dd8ff627) · [HN discussion](https://news.ycombinator.com/item?id=50581438)

The report, sourced to anonymous sources via MarketScreener, is that the SEC's probe into Nvidia is examining potential accounting issues. The primary would not load for extraction; the thread carries the substance.

The thread's read is that this is about circular financing — Nvidia investing in customers and neoclouds that then buy Nvidia hardware — and about the renegotiation of usage deals that showed up on the last earnings call. The sharpest comment is a governance question that does not need a leak to ask: the CFO is now the interim CEO, and if the board believed there were accounting problems, that is an odd promotion. Set that against the same day's market action — Nvidia down 14% — and the story is less about one filing than about a company whose revenue recognition depends on entities it also funds.

## Also new, below the sections

- **How to CAD Almost Anything** ([387 points](https://news.ycombinator.com/item?id=50528119), 144 comments, [ocw.mit.edu](https://ocw.mit.edu/courses/res-16-002-how-to-cad-almost-anything-january-iap-2024/)) — MIT OCW RES.16-002, with full session recordings for SolidWorks, Creo, Fusion, Inventor, Onshape and NX. Six packages, one course, free.
- **NINLIVE** ([346 points](https://news.ycombinator.com/item?id=50583274), 97 comments, [ninlive.com](https://ninlive.com/)) — a fan-run Nine Inch Nails live archive: 1,210 concerts, 1,949 recordings, 4,675 photos, 363 tracked songs across 46 countries. Streaming from 1988–2026 was added on 16 November.
- **The 98% Slot Machine** ([341 points](https://news.ycombinator.com/item?id=50564159), 184 comments, [globalcommercegraph.com](https://globalcommercegraph.com/writing/the-ninety-eight-percent-slot-machine)) — an essay arguing paid advertising has become an extraction tax on commerce. The page is client-rendered and would not load for me, so no summary of its numbers; the thread splits hard, with the strongest objection being that an ad auction is a marketplace where the advertiser's win comes from a third party, not a casino paying out of its own pocket.
- **Making 8-page zines from one A4 sheet** ([320 points](https://news.ycombinator.com/item?id=50559719), 71 comments, [krthr.co](https://krthr.co/paper-folds-and-whats-new-in-fanzines-app/)) — fold in half three times, cut the centre crease, get a booklet with no staples, plus a browser tool for laying it out.
- **Dettato, audio-to-MIDI** ([294 points](https://news.ycombinator.com/item?id=50526023), 65 comments, [kobi.music](https://kobi.music/research/dettato)) — 20M parameters, roughly 65× smaller than MuScriptor 1.3B, scoring above it and slightly above Mirelo's closed A2M v1.1 Pro on their own published benchmarks, trained on no copyrighted recordings, outputs usable commercially.
- **Google workers vs. the school-AI push** ([279 points](https://news.ycombinator.com/item?id=50577901), 222 comments, [motherjones.com](https://www.motherjones.com/politics/2026/11/google-alphabet-union-school-ai-protest-gemini-workers-petition/)) — Alphabet union members petitioning the company not to punish schools that decline its AI offerings.
- **Pete Warden on why AI wants to be local** ([270 points](https://news.ycombinator.com/item?id=50561508), 248 comments, [thedataexchange.media](https://thedataexchange.media/pete-warden-moonshine/)) — Ben Lorica interviews the Moonshine Voice co-creator on local models, voice interfaces and hardware.
- **DreamCoder** ([269 points](https://news.ycombinator.com/item?id=50581110), 111 comments, [masteringemacs.org](https://www.masteringemacs.org/article/announcing-dreamcoder)) — a coding harness and IDE from Mickey Petersen, who has spent a decade writing about Emacs. The AI-tooling play that leads with Lisp history.
- **An Oregon library ditched Dewey** ([243 points](https://news.ycombinator.com/item?id=50536950), 178 comments, [fastcompany.com](https://www.fastcompany.com/91597520/oregon-library-ditched-dewey-decimal-wayfinding-system)) — a "Wayfinder" browsing system instead of call numbers. Commenters immediately challenge the premise: a book on gardening could already be in one of four places, and a bookstore-style arrangement has the same problem in a different shape.
- **Inkling 2 Mini in 5.4 GB** ([230 points](https://news.ycombinator.com/item?id=50591853), 45 comments, [github.com](https://github.com/ShinMegamiBoson/lookatmyquant)) — a quantization compiler claiming 12× lower KL divergence than Q4_K_M at the same file size. The interesting claim is the KL metric, which measures output drift instead of weight error.
- **Backblaze's privacy policy** ([227 points](https://news.ycombinator.com/item?id=50585593), 84 comments, [backblaze.com](https://www.backblaze.com/company/policy/privacy)) — a corporate policy page on the front page, which is where data-retention terms now live for anyone whose backups are someone else's business.
- **The Making of Oxygene** ([216 points](https://news.ycombinator.com/item?id=50572822), 77 comments, [jeanmicheljarre.com](https://jeanmicheljarre.com/aaa/the-making-of-oxygene)) — Jarre's own site on the 1976 album, its 50th anniversary and the Dolby Atmos remix by David Kosten.
- **Tinnitus frequency finder** ([212 points](https://news.ycombinator.com/item?id=50541568), 131 comments, [trynotched.com](https://trynotched.com/find)) — a four-minute browser pitch match that sets safe levels first and checks for the classic one-octave error. Explicitly not a hearing test, and nothing leaves the browser.
- **Jujutsu primer** ([205 points](https://news.ycombinator.com/item?id=50570628), 188 comments, [ethanlowman.com](https://ethanlowman.com/posts/jj-primer/)) — `jj` explained to someone who knows Git: revsets, the op log, conflicts as first-class objects, bookmark mapping.
- **F-22 micro–Data Transfer Cartridge** ([205 points](https://news.ycombinator.com/item?id=50547583), 139 comments, [sam.gov](https://sam.gov/workspace/contract/opp/8948e8601e964c6aba9c801eee16b1be/view)) — a SAM.gov solicitation for PCMCIA-era cartridges that carry mission data to the jet. Commenters who built replacements explain that the aircraft implement the PCMCIA protocol incorrectly and the cards have to be per-airframe.
- **RCE in GnuPG** ([200 points](https://news.ycombinator.com/item?id=50587208), 77 comments, [lists.gnupg.org](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html)) — a double free in GPGME before 2.3.0, affecting most mail clients, Samba and every signed-commit path in GitLab. Disclosed early because of Ruby2Shell.

## Still on the page

A hundred and twenty of today's 200-point stories were covered in the last four nights. The deltas are the story: the Riemann cluster added more points in one day than most stories earn in a week, and everything else is flat.

| Story | Last | Nov 21 |
| --- | --- | --- |
| [Jensen Huang resigns](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,059 (11-19) | 4,060 (+1) |
| [Levent Alpöge claims proof of the Generalized Riemann Hypo…](https://alpo.ge/remark.pdf) | 2,048 (11-20) | 2,845 (+797) |
| [Carnegie Mellon is putting computer science courses on You…](https://www.cs.cmu.edu/learn/) | 2,365 (11-19) | 2,382 (+17) |
| [Hurried Announcement: Alessandro Masullo GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) | 844 (11-20) | 2,347 (+1,503) |
| [SpaceX catches the Starship to end Flight 15](https://www.spacex.com/launches/starship-flight-15) | 1,761 (11-19) | 1,766 (+5) |
| [Unauthenticated remote code execution in Nginx](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) | 1,477 (11-19) | 1,513 (+36) |
| [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,446 (11-19) | 1,446 (+0) |
| [GPT‑6.2 Astra and Sol](https://openai.com/index/introducing-gpt-6-2-astra-sol/) | 1,345 (11-19) | 1,347 (+2) |
| [New Evidence Shows School Phone Bans Are Gradually Improvi…](https://www.nytimes.com/2026/11/17/upshot/school-phone-bans-study-scores.html) | 1,300 (11-19) | 1,307 (+7) |
| [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com) | 1,300 (11-19) | 1,301 (+1) |
| [All AI-generated code should be Open Source](https://jakub.jankiewicz.org/blog/ai-code-open-source/) | 1,285 (11-19) | 1,288 (+3) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 1,205 (11-19) | 1,206 (+1) |
| [Java4Shell: RCE in OpenJDK when processing Base64](https://calif.io/java4shell/) | 1,176 (11-19) | 1,182 (+6) |
| [Anthropic’s Nasdaq debut](https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/) | 586 (11-19) | 1,139 (+553) |
| [Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) | 1,000 (11-19) | 1,058 (+58) |
| [Lovable apps expose passport details and more than 200K pr…](https://www.crissyfield.de/research/lovable-en/) | 1,007 (11-19) | 1,010 (+3) |
| [AWS emulator](https://github.com/aws/aws-emulator) | 996 (11-19) | 996 (+0) |
| [Many of Amazon’s Black Friday and Cyber Monday “deals” off…](http://groundworkcollaborative.org/news/amazons-decoy-deals-groundwork-investigation-reveals-nearly-1-in-3-black-friday-and-cyber-monday-deals-advertised-by-amazon-offered-no-savings-to-shoppers-nearly-1-in-10-w/) | 968 (11-19) | 973 (+5) |
| [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 926 (11-19) | 926 (+0) |
| [How to make almost anything](https://pub.cba.mit.edu/863.26/site/) | 916 (11-19) | 921 (+5) |
| [Garage Door Spam](https://blog.harrison.page/garage-door-spam/) | 630 (11-19) | 918 (+288) |
| [Quad9's withdrawal from France: A canary in the coal mine](https://blog.cloudflare.com/quad9-withdrawal-from-france/) | 902 (11-19) | 908 (+6) |
| [Rust 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 905 (11-19) | 905 (+0) |
| [Qwen4-Max](https://qwen.ai/blog?id=qwen4-max) | 882 (11-19) | 884 (+2) |
| [Pancreatic cancer halted by virus injection in three patie…](https://www.newscientist.com/article/2528235-pancreatic-cancer-halted-by-virus-injection-in-three-patients/) | 221 (11-19) | 883 (+662) |
| [Technical issue at JPMorgan Chase triggers online banking…](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda) | 836 (11-19) | 839 (+3) |
| [We need smart people who give a shit](https://violetpixel.com/blog/2026-11-17-we-need-smart-people-who-give-a-shit/) | 758 (11-19) | 833 (+75) |
| [AI is killing All About Berlin](https://nicolasbouliane.com/blog/death-by-ai) | 801 (11-19) | 814 (+13) |
| [Reverse engineering my Coway air purifier to ditch the cloud](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 804 (11-19) | 805 (+1) |
| [Inside Deutsche Bank](https://www.inside-db.com/) | 768 (11-19) | 783 (+15) |
| [Show HN: My $300 embroidery machine needed a subscription,…](https://github.com/simpsoka/zigzag) | 742 (11-19) | 743 (+1) |
| [Windows 11 is collecting data on which coding agents and d…](https://xusheng.dev/posts/windows-coding-agent-telemetry/) | 730 (11-19) | 737 (+7) |
| [Apple Services Down](https://developer.apple.com/system-status/) | 724 (11-19) | 730 (+6) |
| [BugMeNot has closed](https://www.bugmenot.com/) | 725 (11-19) | 730 (+5) |
| [How the European Commission rolled out Matrix to more than…](https://element.io/blog/how-the-european-commission-rolled-out-matrix-to-more-than-40-000-staff/) | 612 (11-19) | 715 (+103) |
| [Google's AI answers reducing search traffic by 40%](https://revscope.co/blog/search-seo-geo-2026/) | 709 (11-19) | 712 (+3) |
| [Optimizely compromised, served malware on Zoom, GitLab](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) | 706 (11-19) | 710 (+4) |
| [If you can't explain something in simple terms, you don't…](https://kottke.org/17/06/if-you-cant-explain-something-in-simple-terms-you-dont-understand-it) | 551 (11-20) | 693 (+142) |
| [UK government forced to admit it issued Apple a secret enc…](https://macanorak.com/uk-government-forced-to-admit-it-issued-apple-a-secret-encryption-order/) | 329 (11-19) | 691 (+362) |
| [DNS resolvers are the wrong place to fight piracy](https://techstackups.com/articles/quad9-leaves-france-dns-blocking/) | 676 (11-19) | 682 (+6) |
| [Nvidia stopped disclosing Singapore sales as revenues hit…](https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf) | 664 (11-19) | 670 (+6) |
| [Highly classified US national security communications netw…](https://www.cnn.com/2026/11/17/politics/highly-classified-national-security-communications-network-goes-down) | 669 (11-19) | 670 (+1) |
| [Frostbite: A new CPU architecture discovered, designed and…](https://architectlabs.com/blog/frostbite) | 564 (11-20) | 666 (+102) |
| [Microsoft 365 outage leads to chlorine gas poisoning of 15…](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) | 644 (11-19) | 648 (+4) |
| [Why get an expensive Pi when I have an old phone?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 634 (11-19) | 636 (+2) |
| [Universal XSS in uBlock Origin from website-driven element…](https://iter.ca/post/ubo-uxss/) | 617 (11-19) | 618 (+1) |
| [Fuck Your AI Safeguards](https://ounapuu.ee/posts/2026/11/19/unsafeguards/) | 315 (11-19) | 615 (+300) |
| [Seven new models at scalable price-performance](https://microsoft.ai/news/microsoft-ignite-2026/) | 590 (11-19) | 603 (+13) |
| [KDE: The documentary \[video\]](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 581 (11-19) | 582 (+1) |
| [Apple has new Mac app coming to make running local AI mode…](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 579 (11-19) | 580 (+1) |
| [Restricting AI agents in mobile operating systems platform…](https://signal.org/blog/protecting-your-privacy/) | 399 (11-20) | 569 (+170) |
| [Claude solves two open problems in the physics of black ho…](https://www.anthropic.com/research/claude-black-hole-physics) | 259 (11-19) | 566 (+307) |
| [Lutnick Pushed to Weaken Chip Rules That Overlap with His…](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) | 546 (11-19) | 547 (+1) |
| [Frame – 31.5" color ePaper display](https://trmnl.com/blog/introducing-frame) | 542 (11-19) | 546 (+4) |
| [Court denies motion to dismiss DRAM price fixing case](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) | 538 (11-19) | 538 (+0) |
| [ID.me terms required for IRS sign-in](https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in) | 507 (11-19) | 510 (+3) |
| [The MacBook Pro's OLED PWM problem](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) | 507 (11-19) | 510 (+3) |
| [Monkey Island: all 13 versions side by side](https://monkeyisland.pages.dev/) | 509 (11-19) | 509 (+0) |
| [AI agents ask better questions than KPMG accountants in au…](https://europeanbusinessmagazine.com/ai-agents-better-questions-kpmg/) | 479 (11-19) | 499 (+20) |
| [Jonathan Blow – If AI solved coding, why is my software st…](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 495 (11-19) | 497 (+2) |
| [What's Next for Nvidia?](https://steveblank.com/2026/11/15/whats-next-for-nvidia/) | 485 (11-19) | 486 (+1) |
| [Handwriting, as a Font](https://ductus.sorenblank.com) | 477 (11-19) | 479 (+2) |
| [Phrack 73](https://phrack.org/issues/73/introduction_md) | 472 (11-19) | 474 (+2) |
| [Language Models Can Rewrite Their Own Weights](https://arxiv.org/abs/2611.21885) | 266 (11-20) | 473 (+207) |
| [Protomaps: Self-hosting map tiles has gotten cheap and easy](https://bruceroettgers.eu/blog/protomaps/) | 471 (11-19) | 471 (+0) |
| [Microsoft's ONNX Runtime has disappeared from GitHub](https://github.com/microsoft/onnxruntime) | 464 (11-19) | 467 (+3) |
| [A family tree of software job titles](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/) | 461 (11-19) | 466 (+5) |
| [Someone reported java4shell bug in September 2026](https://github.com/openjdk/jdk/pull/32781) | 278 (11-19) | 460 (+182) |
| [Chinese frontier AI models carry the fingerprint of export…](https://unemploymentlabs.com/checkpoint-forensics) | 454 (11-19) | 457 (+3) |
| [Claude Code and Codex reverse engineered my 1994 Jeep's EC…](https://www.youtube.com/watch?v=WPj3aQ-xxpI) | 456 (11-19) | 457 (+1) |
| [Microsoft blames monster email outage on software defect i…](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026) | 445 (11-19) | 447 (+2) |
| [Jiff 1.0: A datetime library for Rust](https://burntsushi.net/jiff/) | 442 (11-19) | 444 (+2) |
| [350 years ago, Ole Rømer discovered that light has a finit…](https://www.sciencenorway.no/culture-history-history-of-science/350-years-ago-this-man-discovered-that-light-has-a-finite-speed/2737969) | 420 (11-19) | 426 (+6) |
| [Everything you need to survive and rebuild society](https://lastbook.org/) | 293 (11-19) | 424 (+131) |
| [MAI Code 2 and Code 2 Flash](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/) | 421 (11-19) | 422 (+1) |
| [Anthropic prices initial public offering](https://www.anthropic.com/news/anthropic-prices-initial-public-offering) | 410 (11-19) | 422 (+12) |
| [What is the best harness for each model?](https://runta.com/blog/introducing-frontierharness-eval-v1-1/) | 418 (11-19) | 421 (+3) |
| [Ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 420 (11-19) | 420 (+0) |
| [What is w2rt6byl5nf1opmc-a.com?](https://jack.cab/blog/siterate) | 414 (11-19) | 415 (+1) |
| [15M web servers on one VM – smoltcp, DPDK, AF_XDP](https://kapteko.com/15-million-webservers/) | 347 (11-19) | 405 (+58) |
| [Ruby2ßhell: Pre-authentication RCE on stock Rails](https://verialabs.com/ruby2shell/) | 350 (11-19) | 404 (+54) |
| [Why there are still no non-WebKit browsers on iOS](https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/) | 284 (11-20) | 400 (+116) |
| [Solid 2.0](https://www.solidjs.com/blog/solid-2-0-the-long-hold/) | 376 (11-19) | 381 (+5) |
| [Old Bitly links are being hijacked](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) | 380 (11-19) | 380 (+0) |
| [jQuery 4.1.0](https://github.com/jquery/jquery/releases/tag/4.1.0) | 377 (11-19) | 379 (+2) |
| [Chemistry is Actually Geometry](https://chillphysicsenjoyer.substack.com/p/chemistry-is-actually-geometry) | 348 (11-19) | 350 (+2) |
| [Multiple vulnerabilities in Regexp and String case convers…](https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/) | 328 (11-19) | 342 (+14) |
| [OpenCode Browse](https://opencode.ai/product/browse) | 333 (11-19) | 334 (+1) |
| [Interpreting claims that a theorem is correct because it w…](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) | 326 (11-19) | 332 (+6) |
| [Codeberg.org Not Reachable](https://social.anoxinon.de/@codebergstatus/117636437840688845) | 316 (11-19) | 329 (+13) |
| [Grazing sheep in fields with solar arrays](https://news.cornell.edu/stories/2026/10/sheep-grazing-solar-fields-offers-farmers-economic-ecological-gains) | 329 (11-19) | 329 (+0) |
| [Harvard researchers find AI coding agents shifted the bott…](https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/) | 322 (11-19) | 328 (+6) |
| [SSD prices may begin to decline in the latter half of 2027](https://www.drivevault.io/blog/when-will-hard-drive-prices-come-down.html) | 287 (11-19) | 324 (+37) |
| [The Secret ThinkPad Powerbutton Code to Bring Dead Laptops…](https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/) | 322 (11-19) | 324 (+2) |
| [Energy-Based Reasoners: 385x more efficient inference](https://energy-based-reasoners.github.io/) | 315 (11-19) | 317 (+2) |
| [LLM assisted reverse engineering](https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering) | 294 (11-19) | 315 (+21) |
| [Nintendo takes Picofly firmware down from GitHub \[video\]](https://www.youtube.com/watch?v=-TLCGUpoD6c) | 224 (11-19) | 304 (+80) |
| [The Cambridge Dictionary has named ‘human’ as the Word of…](https://www.cam.ac.uk/news/cambridge-dictionary-reveals-word-of-the-year-2026) | 299 (11-19) | 304 (+5) |
| [How the Claude Code team thinks about verification](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/) | 295 (11-19) | 297 (+2) |
| [What's New in PHP 8.6](https://www.php.net/releases/8.6/en.php) | 249 (11-19) | 294 (+45) |
| [Genie 4 is now available](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/) | 286 (11-19) | 293 (+7) |
| [Rust changed me as a developer](https://blog.startifact.com/posts/how-rust-changed-me/) | 291 (11-19) | 292 (+1) |
| [Nvidia was in trouble before the Jensen Huang mess](https://www.wired.com/story/nvidia-was-already-in-trouble-before-the-jensen-huang-mess/) | 289 (11-19) | 290 (+1) |
| [Distributed, high-performance blob storage on SQLite](https://zerodha.tech/blog/high-performance-distributed-blob-storage/) | 224 (11-19) | 286 (+62) |
| [Why is Gemini 4 Carbon taking so long?](https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/) | 274 (11-19) | 285 (+11) |
| [Why 3dfx 1 cards had such a washed out color output?](https://twitter.com/id_aa_carmack/status/2122478083319992513) | 285 (11-19) | 285 (+0) |
| [Archive Team is archiving the Apple Support Community](https://wiki.archiveteam.org/index.php/Apple_Discussions) | 266 (11-19) | 268 (+2) |
| [Comcast's "fiber-powered Wi-Fi" is cable, AT&T says in fal…](https://arstechnica.com/tech-policy/2026/11/comcast-falsely-advertises-cable-internet-as-fiber-powered-att-lawsuit-says/) | 262 (11-19) | 264 (+2) |
| [Tor Project Issues Rapid-Response DoS-Defense Fix Amid Sus…](https://forum.torproject.org/t/security-release-0-4-9-17/22454) | 254 (11-19) | 254 (+0) |
| [DaisyRose-27B](https://www.radixark.com/blog/daisyrose-27b) | 247 (11-19) | 251 (+4) |
| [Show HN: ExitPath – Open-source ways out of Slack, Notion…](https://exitpath-ruddy.vercel.app/) | 247 (11-19) | 251 (+4) |
| [If an App Asks for Full Disk Access or System and App Prot…](https://support.apple.com/en-us/149699) | 251 (11-19) | 251 (+0) |
| [Show HN: Take Voyager 1 apart, down to a single memory chip](https://rshekhar.com/voyager/) | 234 (11-19) | 238 (+4) |
| [A Perfect SimCity](https://www.jeffquast.com/post/a-perfect-simcity/) | 235 (11-19) | 235 (+0) |
| [VisualBasic.World: A gallery of Planet Source Code program…](https://visualbasic.world/) | 228 (11-19) | 230 (+2) |
| [Squircles](https://linebender.org/wiki/curves/squircle/) | 228 (11-19) | 230 (+2) |
| [Researchers track whole body movement with just a smartwatch](https://news.cornell.edu/stories/2026/11/researchers-track-whole-body-movement-just-smartwatch) | 227 (11-19) | 227 (+0) |
| [Advancing chip design with OpenAI models](https://openai.com/index/advancing-chip-design-with-our-models/) | 219 (11-19) | 224 (+5) |
| [My favourite modern NES games](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/) | 223 (11-19) | 224 (+1) |
| [Show HN: Alloy CSS, dialogs, menus and tabs that work with…](https://alloyhtml.com/example.html) | 210 (11-19) | 211 (+1) |
| [Web Browser Engineering (2021)](https://browser.engineering/) | 200 (11-19) | 200 (+0) |

## The throughline

Three things connect today, and they are all about verification.

Mathematics just demonstrated the fastest credibility mechanism any field has ever had. A claim appeared on Thursday, a machine-checkable proof was published on Friday, and by Saturday the Lean and Mathlib communities had certified the statement, re-checked the proof with three independent kernels, and compared the theorem against a formally vetted statement of RH. Nobody read it. The proof is 17 million lines and the strategy of proof is still an open research question on a Zulip thread. We have invented a way to know something is true without knowing why, at industrial scale, and the people who built it are being appropriately careful about what that does and does not mean. Compare that to the security section: three memory-safety CVEs in one week, one scored 9.8 for a bug that needs 1.5 GB of input, one fixed downstream five years ago and never upstreamed. Verification is not a solved problem; it is now a problem with very uneven coverage.

The second thread is that the money caught up. The Nasdaq gave back all of 2026 in a week, Anthropic's record IPO closed its second day near the price it set, and the SEC is reported to be examining accounting at the company whose chips everything else is valued against. The interesting detail is the liquidity argument: the biggest listing in history may have taken cash out of the sector rather than bringing it in. Meanwhile the release train shipped — PostgreSQL 19, FFmpeg 9.1, PHP 8.6 — with 30 comments between them. The layer that everything depends on is being maintained quietly while the layer that everything is priced on has a very loud week.

The third is what happens to the people in the middle. A senior engineer with 15 years of experience cannot get an interview and is about to manage a pizzeria. Developers were moved into architecture review without being told, and are catching 15-second network round-trips in diffs instead of in their own code. A post arguing that review skill decays without practice drew 179 comments of objection from people who mostly don't write code any more. An honours student was told her report was good *because* she wrote it herself. And a customer with a broken laptop deleted his own complaint after it worked, which tells you exactly which support channel functions. All of these are the same transition viewed from different seats: the work did not disappear, it moved, and nobody sent a memo.
