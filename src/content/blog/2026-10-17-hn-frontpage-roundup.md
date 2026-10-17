---
title: "Hacker News Front Page Roundup — October 17, 2026"
pubDate: 2026-10-17
description: "Forty-three stories clear 200 points and twenty are new. The page's real argument is about who reviews the code — Anthropic says machines have it, and Postgres delayed a release because the machines found too much."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Forty-three stories cleared 200 points inside the top-170 window today, and twenty of them are new. That is the smallest new batch in four days, and it is not because the page went quiet: the top four slots are all stories first covered earlier in the week, now at 1,949, 1,590, 1,463 and 1,007 points. HN's ranking decay is slow enough that a big story owns the page for three days, and this roundup is written from underneath it.

The new material has two clusters. One is models: DeepSeek shipped an MIT-licensed 763B checkpoint, Paper Instruments shipped a GLM fine-tune with the weights "coming soon," and Black Forest Labs shipped a 5.6B image model. The other is review — Anthropic published how its Claude Code team reviews machine-written code, and 205 points below it, the PostgreSQL project delayed a release because machine review found more bugs than its maintainers have hours to fix. Those two stories are the day. Everything else is texture.

## DeepSeek-v4.1-Flash-1017 — 541 points

**541 points** · 495 comments · [huggingface.co](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) · [HN discussion](https://news.ycombinator.com/item?id=50129045)

A 763B-parameter model, MIT licensed, 1M-token context, recommended `max_tokens` ≥ 256K, and a technical report titled "Pushing the Limits of KV Cache Compression." The card calls it "a minor update" and then claims "substantial improvements across reasoning, coding, agentic tasks, and visual benchmarks" in the same sentence. `pmxi` noticed. It is the least self-aware piece of marketing on the page today, and it is also, by the numbers, the most interesting release.

The benchmark table is honest in a way most are not: it includes Opus 5 beating it on HLE, 56.3 to 42.6, and it includes the previous Flash at 36.8, so the delta is visible rather than implied. The gains are in agentic and coding work — Terminal-Bench 4.0 from 31.2 to 42.3, ProgramBench 20.3 to 29.1, DeepSWE 77.0 against Opus 5's 74.0 and GPT-5.6 Sol's 73.0. It still loses HLE by 14 points. If you want a summary: not the smartest model, clearly the best value at the frontier of tool use.

The comments are more useful than the card. `AmazingTurtle` ran four agents against the same 200-file C++ diff: DeepSeek took 20 minutes to find one relevant P1 and one irrelevant P2; GPT-5.6 Sol took 5m30s for one P1 and one P2, both relevant; GLM-5.3 Flash on two DGX Sparks took 65 minutes to find a P3 documentation issue. `apejcic` measured the new weights at roughly 20% fewer output tokens at each reasoning effort, with reasoning effort 1 now actually usable. `ilitirit` has been running chief/builder/reviewer swarms for days and says it now does the engineering while Opus reviews. `OsrsNeedsf2P` explains the "feels better" phenomenon without benchmarks: provider throughput and not being blocked mid-task for a safety review. That last point is the one that does not appear on any leaderboard and probably decides more developer loyalty than the HLE column.

## How the Claude Code team does code review — 447 points

**447 points** · 438 comments · [claude.dev](https://claude.dev/blog/solving-code-review-at-anthropic/) · [HN discussion](https://news.ycombinator.com/item?id=50122951)

Anthropic's Claude Code team says Claude writes about 90% of Claude Code's code, and this post is about the consequence: from June to September, merged PRs more than doubled while the share that had to be reverted fell by more than 40%. For context, Anthropic's monorepo went from ~2,500 changes a day in May to over 30,000 in September.

The mechanism is a redefinition. Instead of "did a human read this," they ask "what could go wrong, and which check catches it." Review moved from a gate at the end to something continuous, more like spellcheck. Low-risk changes — docs, copy, internal-only features, anything additive behind a flag — require no human review at all once automated review and security checks are green. Human attention is reserved for five decisions: should we build this, risky code (billing, auto-updater, CI workflows), architecture that sets a pattern, reading the evidence behind the checks, and owning the outcome. They are explicit that the second job of code review — spreading codebase understanding — has no formal process now. "Nobody on the team keeps a complete mental model of Claude Code."

The pushback is the good part. `avinoth`: this is a Google-infrastructure blog post, and smaller teams that copied Google's process got nothing but pain. `afro88` catches a real hole: "additive changes behind a flag" are low risk when the flag is off — is there suddenly a proper review before the flag turns on, which is when the risk actually materialises? `koolba` on letting an LLM write docs nobody reads: "pure insanity." `squidlib` names the part Anthropic under-sells: the time saved typing comes back as an obligation to understand code you did not write, at an unfavourable exchange rate, plus the feeling of having parented a mistake. And `chris_money202` points out the whole loop assumes a stack where a change can be validated in seconds; compiled projects and hardware do not get this.

The counter-example is on the same page today, 205 points lower, and it is worth reading them as a pair.

## You could have invented transformers from memory — 444 points

**444 points** · 106 comments · [alexwang.ai](https://alexwang.ai/posts/associative-memory/) · [HN discussion](https://news.ycombinator.com/item?id=50122878)

Alex Wang's post reframes every layer of a transformer as a memory store and asks the only question that matters about a memory store: how many key-value pairs can it hold before recall degrades? The metric is the interference-to-signal ratio — how much the other stored memories bleed into the one you asked for.

The derivation is the point. A linear layer stores memories as outer products, `v kᵀ` added to the weights, and with 64-dimensional keys it tops out around 64 memories before interference swamps the signal. An MLP with ReLU gets you to roughly 2,700, because it can carve the key space into regions rather than relying on near-orthogonality. Self-attention does something different — it keeps the keys and values around and looks them up at query time — so capacity is not bounded by the weight matrix at all, and with 64-dimensional keys you are over a million.

The aside is the neat part: a gradient descent step on a linear layer is literally a memory write, key `x` and value `-ηȳ`, which makes "learning" and "storage" the same operation viewed at different timescales. `femto` makes the useful observation that this is communications engineering vocabulary — capacity, interference, signal-to-noise — and that people who optimise channels already have the intuition. `crediblejhj`, a first-year CS student, restates it correctly in three sentences, which is a better test of an explainer than any comment saying "great post." The post also ships an interactive app and code, which is why it is at 444 points rather than buried.

## Solar surpasses nuclear power globally for first time — 371 points

**371 points** · 211 comments · [pv-magazine.com](https://www.pv-magazine.com/2026/09/29/solar-surpasses-nuclear-power-globally-for-first-time/) · [HN discussion](https://news.ycombinator.com/item?id=50131256)

The claim comes from the World Nuclear Industry Status Report 2026, overseen by Mycle Schneider — a report with a known position, published by a solar trade magazine, so treat the framing with the appropriate discount. The underlying numbers are still striking. Global solar generation grew about 30% in 2025 and passed nuclear's annual output for the first time. Nuclear generated 2,703 TWh, up 1.1%, with a 7.6% increase in China and a 0.2% decline everywhere else. Nuclear's share of global electricity fell to 8.8%, roughly half its 1996 peak of 17.5%, and the world recorded its first negative annual reactor balance since 2021: four startups, seven closures.

Capacity tells the same story faster. Solar added 510 GW to reach 2,383 GW, up 27%. Wind added a record 159 GW. Installed nuclear capacity rose 1.5 GW to 399.5 GW, and operating capacity actually fell. As of July 1, 2026 there were 411 operable reactors in 31 countries. Schneider's line is the honest summary: "It's the growth rates, stupid."

Two caveats the article itself supplies. WNISR's PV figures are conservative — IEA PVPS puts 2025 additions near 690 GW, about 180 GW higher, which widens the gap further. And the comparison is annual energy, not dispatchable capacity: solar's 30% growth rate and nuclear's flat output are different kinds of fact. The thread's sceptics make the standard argument that solar's number is inflated by nameplate capacity and Chinese buildout, and the standard counter is that the TWh figure is already net of capacity factor. Both are right about different things, which is why this argument never resolves.

## Ultramarine 1 Flash — 363 points

**363 points** · 104 comments · [paperinstruments.com](https://www.paperinstruments.com/ultramarine) · [HN discussion](https://news.ycombinator.com/item?id=50106747)

Paper Instruments is selling a model that is "Fable-class on knowledge work spanning finance, law, consulting, and operations" and "60x cheaper than Fable." At $0.13 per task it beats Claude Fable 5 at $8.19 and GPT-5.6 Sol at $2.09, per million-token pricing of $0.15 in, $0.03 cached, $0.50 out — the same as GLM-5.3 Flash.

That last detail is the tell, and the company states it plainly in the technical report: Ultramarine applies large-scale reinforcement learning to GLM-5.3 Flash. `kadoban` found the sentence. So this is a post-trained Chinese open model, repackaged with a professional-work benchmark, at a modest markup over the base. That is a legitimate business. It is not what "an open model for professional work" implies, and "model weights coming soon" means the open part is a promise, not a fact.

The benchmark critique is sharper than the pricing. `CobrastanJorji` points out that the results section compares Ultramarine only against models it beats on every metric, and then the cost-per-task graph suddenly reintroduces Fable 5.1, GPT-6 Astra and Claude Opus 5.5 — the ones that actually score higher — because on that axis they look expensive. The primary benchmark, PI Knowledge Work, is internal, with a claimed r = 0.81 correlation to the Artificial Analysis Intelligence Index. `bythreads` says what a lot of people are thinking: a skinned GLM with context injection and guardrails, sold as a startup. `wolttam` and `vehemenz` both want it to work, and one reports price/performance matching the claim in limited testing. Both things can be true: the numbers may hold and the framing may still be dishonest by omission.

## Llama.cpp on a jailbroken PS5 — 361 points

**361 points** · 84 comments · [github.com/cobanov](https://github.com/cobanov/PS5LM) · [HN discussion](https://news.ycombinator.com/item?id=50122431)

Someone got llama.cpp building and running natively on a jailbroken PlayStation 5, with the console's GPU doing the work. The README did not survive extraction — GitHub served navigation and a file listing — so most of the specifics here come from the thread rather than the repo, which is worth flagging.

The interesting number is not tokens per second, it is the economics. `jjcm` reports it runs Qwen 3.8 27B at a 2-bit quant, at roughly 70 cents a day in power, which works out to about 2M output tokens a day for the price of a coffee. That reframes the appliance: a locked-down game console with a fast unified-memory APU becomes a cheap always-on inference box for jobs that only need a steady stream of slightly-below-average intelligence — log triage, camera review, plant watering. `shiftpgdn` notes the same silicon ships in ex-crypto BC250 mining boards built around AMD's Cyan Skillfish APU, still $150–$200 on eBay, which is the version of this story that does not require felonies.

Two comments land harder than the technical detail. `Rabbit504030201` argues the project should not be hosted on GitHub at all, because Sony can issue a takedown and the artifact disappears — a locked appliance hack is exactly the thing that needs a domain and a mirror. And `ra0x3` asks whether he can still play his games. That is the whole homebrew story in one question: exploiting a console to run general-purpose code has never once been about the games.

## Butlerian Jihad — 351 points

**351 points** · 227 comments · [dune.fandom.com](https://dune.fandom.com/wiki/Butlerian_Jihad) · [HN discussion](https://news.ycombinator.com/item?id=50127274)

A Dune wiki page, at 351 points, on a day when three model releases were posted. The page itself would not load past Fandom's bot check, so what is actually being discussed is the thread, which is better than the page would have been.

The substance: in Herbert's six novels the machines' actual offense is never specified. `Thrombocius` makes the case that the Jihad may have been a religious movement against a useful technology that got out of hand — "what would happen if the Luddites won." `cautiouscat` draws the distinction that matters for 2026: in most science fiction the AI decides to destroy humanity; in Dune the humans running the machines nearly do it, and the Jihad is against the technocrats as much as the hardware. `SarikayaKomzin` points at the namesake, Samuel Butler's *Erewhon*, which argued the same thing in 1872. `Animats` supplies the deflation: Arrakis only matters because of spice, spice only matters because navigators need it, and a few avionics boxes in a rack would do that job — which is precisely why the setting needs a Jihad.

`antihipocrat` finds the paragraph at the bottom of the page that names Heidegger: technology trains humans to think like machines, and machines are deterministic, so the training is self-limiting. He asks whether probabilistic LLMs change that calculus. Nobody answers, which is correct, because nobody knows.

## Waymo in Toronto — 325 points

**325 points** · 433 comments · [waymo.com](https://waymo.com/blog/2026/10/waymo-in-toronto/) · [HN discussion](https://news.ycombinator.com/item?id=50118981)

Waymo's first market outside the US, and the timeline is the story: manual driving starts in the coming days, HD mapping and validation follow, first public riders targeted for **2028**. That is roughly two years of mapping and validation before a paying passenger in a city that is not in the American southwest, which tells you what the company thinks of snow, streetcars and Toronto's left turns.

The announcement is written for a municipal audience. Job creation is in the first sentence — hundreds of roles in fleet maintenance, validation driving and customer service, through a partnership with Toronto's Element Fleet Management. CPPIB, a long-term investor, gets a name-check, as does Magna. `ilamont` reads this correctly: the jobs language is there because Waymo's expansion is a legislative fight, and Boston, which has been "teased" for years, still has no service because of exactly that fight.

The reviews are the usual split. `tpurves` calls San Francisco consistently excellent. `tcoop25` describes an Austin ride that was supposed to be nine minutes and got "slightly extended" to 45 before support dropped the passengers at a restaurant and told them to order an Uber. `Djonckheere`, a Torontonian, argues the city does not need more vehicles of any kind and should be spending on transit. All three are true at once: the technology works most of the time, fails in ways that are new, and does not solve the problem the city actually has.

## JPEG XL vs. AVIF for web use-cases — 311 points

**311 points** · 205 comments · [jakearchibald.com](https://jakearchibald.com/2026/jpeg-xl-vs-avif/) · [HN discussion](https://news.ycombinator.com/item?id=50120224)

Jake Archibald benchmarked JPEG XL against AVIF now that JPEG XL has landed in all major browsers, and the result will annoy the format's fan base. For lossy photos, AVIF is almost always smaller: the best JPEG XL encode is 15–25% larger at default effort and 6–20% larger at maximum effort. For screenshots and illustrations AVIF wins by 30–90%. For transparency, 31–70%. AVIF also decodes faster, typically by 2–3x, and is usually faster to encode once you account for file size.

The nuance is in the encoders. libjxl's higher effort settings are a bad trade — much slower, much more memory, barely better output, sometimes larger files. `jixel`, a newer encoder, beats libjxl almost everywhere except detailed transparency, and is faster. So "JPEG XL lost" is the wrong summary; "libjxl's effort ladder is mispriced" is closer, and the format's remaining advantage is that it recompresses existing JPEGs losslessly, which AVIF cannot do at all. That use case does not show up in a quality-per-byte chart and it is the reason people still care.

## Anthropic assigned highest junk credit rating in June — 280 points

**280 points** · 86 comments · [ft.com](https://www.ft.com/content/5a310aee-f555-4266-874c-b1b4db20186d) · [HN discussion](https://news.ycombinator.com/item?id=50122112)

The FT is paywalled and the article did not extract, so this section rests on the passages commenters quote. The report says Anthropic was assigned the highest junk rating by KBRA in June, and that its disclosure excluded free cash flow and EBITDA — analysts had to build their own estimates. With that little information, KBRA produced a "risk score" instead of a full financial model.

`master_crab` makes the fair objection: Kroll is not one of the big three, and bond buyers do not price off it. `AnodicElegy` makes the unfair and more interesting one: SpaceX, then Anthropic, and what happened the last time agencies handed out generous ratings to keep customers happy. `nickysielicki` quotes the part that should be the headline — bankers for Anthropic and OpenAI have been lobbying the major agencies for investment-grade ratings ahead of IPOs, with investors expecting a valuation above $2tn. Investment grade is not a compliment; it is a permission slip that lets pension funds and insurers hold the debt.

Put plainly: a company raising money at a $2tn private valuation, whose own underwriters would not hand over cash flow figures, wants the debt sold to your mother's pension fund at investment-grade rates. Every part of that sentence is a reason to be careful, and none of it is a reason the models are bad. The two facts are independent, which is what makes the story useful.

## OpenCode Hacked: User credentials leaked — 269 points

**269 points** · 50 comments · [twitter.com](https://twitter.com/opencode/status/2111516673953935833) · [HN discussion](https://news.ycombinator.com/item?id=50133401)

OpenCode's own post: a security breach last night "related to a large scale distillation attack" affecting **1.4% of OpenCode Console users**, all notified by email, incident ongoing, "working with Anthropic, OpenAI, and Google to remediate." That is 197 characters of disclosure for a credential leak, and it raises more questions than it answers.

The thread is mostly people trying to work out whether they are exposed. `djchen` and `jchw` converge on the likely shape: this hits Console users who stored BYOK keys — Anthropic, Google, OpenAI credentials held server-side the way OpenRouter holds them — not people running OpenCode locally with their own environment variables. That reading is consistent with "distillation attack," since a stolen key is exactly what you would use to run someone else's model at someone else's expense. `computerex` asks the question the post should have answered: why are my API keys in the workspace at all? `Ciantic` proposes the missing primitive — every key system should have an `invalidate_api_key` endpoint so a leak can be closed by the party holding the keys, rather than by a race in which everyone gets an email and has to act alone.

Two context notes. Yesterday's OpenCode 2.0 announcement is still on the page at 884 points, which means the project's best marketing day and its worst security day are 48 hours apart. And the submission itself was flagged repeatedly, per a commenter claiming to be the author of a related post — on HN, a story about a beloved open-source tool having a bad day is not automatically welcome.

## eBay Restricts Listings of Radio Equipment, but Exempts Ham-Band-Only Gear — 265 points

**265 points** · 239 comments · [arrl.org](https://www.arrl.org/arrlletterissue?issue=2026-10-15) · [HN discussion](https://news.ycombinator.com/item?id=50122034)

The ARRL Letter page extracted as mailing-list chrome, so the details come from the headline and the thread: eBay is restricting listings for radio equipment, and the exemption is gear that operates only on amateur bands. Commenters who read the notice add the operative requirement — listings must include the FCC ID, which means most ordinary consumer equipment stays available and the grey-market Baofeng-class radios are what gets squeezed.

The objection is the obvious one. `0x1ch`: why is eBay acting as the FCC, when you can still buy a laser that will detach your retina? `nubinetwork` supplies the answer eBay would give: an unlocked or modified handheld can transmit on public-safety bands, and the platform does not want to be the marketplace of record for that. `zitterbewegung` raises the collateral damage — Meshtastic devices are legal but frequently operated outside the rules, and a blanket category restriction catches them too.

`eddythompson80` has the best observation in the thread and it is not about radios at all: ham operators and hackers are the same demographic with opposite instincts. One group wants to be a good citizen through collective action; the other thinks "if I could do it, it's allowed." Same hobby, two governance philosophies, one of which is now enforced by a retailer.

## Home Assistant: "I never authorized an integration that scans my secrets" — 237 points

**237 points** · 219 comments · [github.com/home-assistant](https://github.com/home-assistant/home-assistant.io/issues/49314) · [HN discussion](https://news.ycombinator.com/item?id=50124251)

A documentation issue that turned into a privacy argument. Home Assistant Supervisor runs a check that screens options marked as passwords against Have I Been Pwned using k-anonymity, and it is on by default. The user who opened the issue had not opted in and did not know it existed; the mechanism had been in Supervisor for years, and a recent release fixed the warning that surfaces it, which is why people noticed now.

The maintainer response is the interesting part, and it went well in the end. Frenck (the maintainer) replied dismissively, then apologised publicly, corrected himself in the same thread — the check can be switched off with `ha security options --pwned=false` — and a pull request to make the feature opt-in followed. `gcommer` notes the scope is narrower than the outrage suggests: the supervisor component only exists in HA OS and HA Supervised, not in a plain container install.

The principled objections are better than the outrage. `eranation` puts the line where most people would: a password manager should warn you about reuse, and no product of any kind should send one byte of your data to a third party without opt-in, however well-intentioned and however mathematically sound the k-anonymity. `rubinlinux` links the research showing that k-anonymity password checks do leak usable signal. `csoghoian` reframes the priority: if the team wants to add security features, passkeys are the one users have been asking for, with patches submitted and rejected. And `jackpepsi` names the failure mode precisely — "we can mathematically prove we're not humiliating you" is not how consent works.

## Show HN: Gemini 4 Argon plays StarCraft — 240 points

**240 points** · 105 comments · [starskirmish.com](https://starskirmish.com/bench/v0-2/) · [HN discussion](https://news.ycombinator.com/item?id=50118688)

StarSkirmish gives each model one hour of wall-clock time to write a Protoss bot in C++ for StarCraft: Brood War, then plays five games against a roster of competitive human-written bots. The score is average win rate. Each model runs in its own lab's first-party CLI harness — Claude Code, Codex, Antigravity, Muse Code — at its highest reasoning setting, with web search and fetch disabled.

Results: GPT-6 Astra 57%, GPT-6.1 Sol 46%, Gemini 4 Argon 39%, Claude Opus 5.5 39%, Fable 5.1 37%, Sonnet 5.5 26%, Muse Wonder Full 21%. The premise is good because it tests the whole loop — write code, watch it lose, revise — rather than a single completion. The caveat is severe and `gritzko` states it: Brood War has hundreds of open-source bots on GitHub, so a model that has memorised build orders is doing recall, not reasoning. `cgearhart` asks the question the leaderboard cannot answer: are the bots doing anything the corpus did not already contain?

`GodelNumbering` contributes the most useful data point in the thread: a friend's 9x9 Go benchmark, with KataGo as Elo anchors, produced the identical ranking of the top six models. Two unrelated games, same ordering, which is either evidence that the benchmark measures general agentic coding ability or evidence that both measure the same training-set priors. Neither reading is comfortable for the benchmark industry.

## MapQuest will now show you where Flock cameras are — 224 points

**224 points** · 33 comments · [engadget.com](https://www.engadget.com/2288729/mapquest-will-now-show-you-where-flock-cameras-are-in-your-neighborhood/) · [HN discussion](https://news.ycombinator.com/item?id=50129947)

MapQuest added a surveillance-camera layer: Flock plate readers, plus cameras from Motorola Solutions (Vigilant), Genetec, Axis, Axon, Leonardo, Neology, Rekor, PlateSmart, Ubicquia and Verkada. It sits next to the traffic and incident layers, and for now it appears to be an app-only toggle — commenters could not find it on the web version.

The data source is the part MapQuest does not advertise. It comes from OpenStreetMap, largely via DeFlock, which means it is crowd-sourced and unverified. `K2h` says he added generic plate readers to OSM last week and watched them appear on MapQuest, complete with camera direction. `willmeyers` supplies the other half: anyone can plot a camera whether or not one exists, and OSM has been dealing with Flock-related vandalism because of these apps. So the layer is simultaneously the best civilian surveillance map available and a dataset anyone can poison.

MapQuest's comeback is the subplot. It refused to rename Lake Ontario, added Android Auto and transit directions, and is now the app that tells you which route avoids the cameras. `herf` gets the joke right — your driving-directions app now decides whether you drive past the cameras — and `mediaeater` gets the serious version: this is how it gets normalised. Both readings are correct, which is why the layer exists.

## US Rep announces legislation to protect video game ownership — 217 points

**217 points** · 123 comments · [house.gov](https://ritchietorres.house.gov/posts/rep-torres-announces-power-to-the-players-act-legislation-to-ensure-gamers-own-their-games) · [HN discussion](https://news.ycombinator.com/item?id=50120101)

Ritchie Torres (NY-15) says he will introduce the Power To The Players Act, which would direct the FTC to write rules making a game purchase an ownership transfer rather than a licence, and requiring games with online functionality to ship an offline mode before the servers are shut down. The worked example is NBA 2K25: $69.99 standard, $99.99 All-Star Edition, delisted from digital storefronts on October 30 and servers off December 31, two years after release.

There is no bill text yet. `Animats` is right that "will introduce," with no co-sponsors and nothing in the hopper, is a press release rather than legislation, and `JumpCrisscross` asks the question any developer would: where is the revenue floor, so an indie hobby project cannot be sued for failing to ship an offline mode. `Thegn` finds the loophole that would eat the bill — a company could push a final patch that cripples the game, then shut down at that point.

The thread's better ideas are outside the bill. `Sohcahtoa82` wants server binaries plus client-side server selection for MMOs, which is the only version that works where an offline mode is meaningless. `yahthatsart` wants Steam libraries to be inheritable. `lrvick` predicts the whole question is moot once anyone can decompile a game into unlicensed source in an afternoon. Only one of those three is a fantasy.

## Postgres 19 delayed after AI reviewers find more bugs than humans can fix — 205 points

**205 points** · 85 comments · [theregister.com](https://www.theregister.com/databases/2026/10/16/postgres-19-delayed-after-ai-reviewers-find-more-bugs-than-humans-can-fix/5303471) · [HN discussion](https://news.ycombinator.com/item?id=50119991)

PostgreSQL 19 slipped from late September to roughly November 19, and eight to ten significant features were reverted to version 20. Peter Eisentraut's explanation is the most useful thing written about AI code review this week, and it is the opposite of a productivity story. Some features had architectural defects that could not be fixed quickly during beta. The rest is the interesting part: LLM-assisted review surfaced a long tail of "relatively harmless issues involving various edge cases" that would previously have been found after release and patched over five years. Now they arrive as a list of forty defect reports. At a three-line fix each, the fixes are cheap and the coordination is not — "there is a fixed overhead to dealing with each of these, and then you run out of time."

His framing is precise: the effective quality bar was raised after the features were written and committed. That is a strange thing to do to a release process, and it is what changes when review becomes cheap. He is also explicit that this is not vibe coding — the features were written by humans before the tooling got good.

The thread splits along the obvious line. `malisper`, who is rewriting Postgres internals, says the root cause is the test suite: AI is finding bugs that already existed, and per-feature regression tests do not cover the interactions. `stickfigure` and `zero_k` report the same experience on old codebases. `asdff` asks the heretical question — doesn't this mean shipped Postgres also has more bugs than humans can fix, so just ship it? `FranOntanaya` gives the answer nobody wants: once bugs are comprehensively discoverable by tooling, you lose plausible deniability, and every feature costs more time forever. `jerf` draws the conclusion that matters commercially: QA is becoming the bottleneck and therefore the value.

## FLUX 3 Image Klein — 204 points

**204 points** · 56 comments · [bfl.ai](https://bfl.ai/blog/flux-3-image-klein) · [HN discussion](https://news.ycombinator.com/item?id=50123580)

Black Forest Labs released a 5.6B-parameter open-weights model for text-to-image, editing and multi-reference generation with up to 10 references. Native 4K, bounding-box control for placement and confined edits, base plus step-distilled variants, and FP8, INT8 and NVFP4 builds made with NVIDIA. Licence: "FLUX Kommunity License," which is not an OSI licence and is worth reading before you build a product on it. API pricing starts at $0.009 per image; Krea 3, released the day before, starts at $0.06.

The reception is mixed in a specific way. `Mashimo` relays Reddit's finding that it is bad at generating images of people, apparently because anything close to NSFW was stripped from training. `jjcm` says editing is solid but fine text detail is weak and there are reports of body horror outputs. `risphere` calls it fast on OpenRouter but clearly worse than full FLUX 3. `drusepth` does the pricing comparison and finds it competitive.

The honest read: a 5.6B model at 4K with ten references at under a cent an image is a real capability for product and layout work, and "worst in class at people" is a limitation you can plan around. `kristofferR` puts the wonder back: this thing has knowledge of what most of the world looks like in under 10 GB of weights.

## Also new, below the sections

- **The Folders Programming Language** — 215 points · 38 comments · [danieltemkin.com](https://danieltemkin.com/esolangs/folders) · [HN discussion](https://news.ycombinator.com/item?id=50114342). Code as pure ordered trees: folder names are ignored, only containment and alphabetical order carry meaning, and the interpreter walks the directory structure. Daniel Temkin's point is dematerialisation — 352,449 empty folders report as zero bytes on Windows, so the language has, in his words, infinite storage. An emulator with Hello World, 99 Bottles and a Truth Machine is on the page. It is a 2015 Windows project updated this year, and it is the only item on today's front page that is genuinely unclassifiable.
- **Show HN: Llmspeed** — 215 points · 68 comments · [llmspeed.dev](https://llmspeed.dev/) · [HN discussion](https://news.ycombinator.com/item?id=50127979). Pick hardware and model, get an estimated tokens-per-second range and time-to-first-token before you buy the machine. The default: RTX 4090, Llama 3.1 8B Q4_K_M, 86–129 tok/s, TTFT 0.31s. The ranges are the honest part — a single number would be a lie, and the site labels which figures are measured. Useful precisely because the local-LLM hardware conversation is otherwise conducted entirely in vibes.

## Still on the page

Every story below was covered in a previous roundup, and the deltas are the story: the page has not turned over, and one launch added 847 points without a single new fact.

| Story | Then | Now | Δ |
| --- | --- | --- | --- |
| [Things to know when you get cancer](https://jjmaxwell4.com/writing/things-to-know-when-you-get-cancer/) | 1,924 (10-16) | 1,949 | +25 |
| [Tesla Roadster](https://www.tesla.com/roadster) | 743 (10-16) | 1,590 | +847 |
| [Gemini 4 Argon](https://deepmind.google/models/gemini/) | 1,461 (10-16) | 1,463 | +2 |
| [Claude reveals ECDSA curve origins](https://www.anthropic.com/research/ecdsa-curve-origins) | 243 (10-16) | 1,007 | +764 |
| [Muse Spark Open](https://research.meta.ai/blog/muse-spark-open) | 896 (10-16) | 913 | +17 |
| [OpenCode 2.0](https://anoma.ly/notes/opencode-2-0/) | 877 (10-16) | 884 | +7 |
| [Woman who rescued injured crow](https://www.youtube.com/watch?v=sjNpfz4UzqU) | 791 (10-16) | 855 | +64 |
| [Neural networks are clean](https://already-clean.goodfire.com/) | 792 (10-16) | 808 | +16 |
| [Tiny Little Office](https://tinylittleoffice.com/) | 688 (10-16) | 695 | +7 |
| [Wayland desktop with skeuomorphic design](https://github.com/fyzugx/DEsk) | 679 (10-16) | 689 | +10 |
| [Jev meets the Trolley Problem](https://zachlandes.com/trolley-problem/) | 613 (10-16) | 639 | +26 |
| [90% of US working hours not covered by AI benchmarks](https://www.mercor.com/research/labor-index/benchmark-map/) | 251 (10-16) | 584 | +333 |
| [AdFection: targeted ads to zero-click spyware](https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/) | 492 (10-16) | 518 | +26 |
| [Meta's new commercial terms allow scraping of news sites](https://www.niemanlab.org/2026/10/metas-new-commercial-terms-will-allow-the-scraping-of-news-sites-experts-say/) | 441 (10-16) | 461 | +20 |
| [I love software rendering](https://www.jamesfmackenzie.com/2026/10/13/i-love-software-rendering/) | 256 (10-16) | 365 | +109 |
| [Apple ML Research: Muse Spark Open with MLX](https://machinelearning.apple.com/research/mlx-distributed-inference) | 213 (10-16) | 356 | +143 |
| [Krea 3](https://www.krea.ai/krea-3) | 338 (10-16) | 347 | +9 |
| [Celebrating 70 Years of Fortran](https://fortran-lang.org/news/2026/09-15-Fortran-birthday/) | 308 (10-16) | 312 | +4 |
| [BIPM decides to stop adding leap seconds](https://www.bipm.org/en/cgpm-2026/resolution-5) | 255 (10-16) | 265 | +10 |
| [Invoking functions without parentheses](https://blog.ikaes.de/yet-another-way-to-invoke-functions-without-parentheses/) | 235 (10-16) | 259 | +24 |
| [Any window from your Mac, on your iPhone](https://github.com/Saffsanity/sill) | 240 (10-16) | 259 | +19 |
| [Simons Foundation $15M for mathematicians](https://www.simonsfoundation.org/news/simons-foundation-launches-15m-effort-to-help-mathematicians-navigate-ai-era/) | 246 (10-16) | 248 | +2 |
| [RPKI now protects 70% of internet routes](https://ipinfo.io/blog/rpki-protects-70-internet-routes) | 216 (10-16) | 226 | +10 |

Three of those deserve a sentence. **Tesla Roadster** gained 847 points in a day, which is the largest single-day move this roundup has recorded for a product page, and it is entirely explained by the demo video finding a second audience — the thread filled with people doing the thrust math rather than people discussing the car. **Claude's ECDSA curve origins** went from 243 to 1,007, a 4.1× move on a research post about 1990s NSA randomness, which says something about how starved this audience is for a cryptographic mystery with a punchline. And the **Mercor labor-index map** added 333 points to reach 584: the claim that 90% of US working hours sit outside what AI benchmarks measure is the most quotable argument on the page for anyone whose job is not a benchmark.

## Throughline

The page's argument today is about review, and it is being had by two projects that do not agree.

Anthropic says machine review is continuous, cheap, and better than a human gate — merged PRs doubled, reverts fell 40%, and low-risk changes need no human at all. PostgreSQL says machine review is continuous, cheap, and it just cost them two months, because forty three-line fixes is a coordination problem, not a coding problem, and the quality bar rose after the work was done. Both are describing the same technology accurately. The difference is what happens when the finding rate exceeds the fixing rate: at Anthropic the fixer is also a machine, and at Postgres the fixer is a volunteer committer with a day job.

That asymmetry explains the rest of the page. It is why DeepSeek at 763B parameters and MIT terms matters more than its HLE score — an open checkpoint you can run is a review capability you own, and `AmazingTurtle`'s four-agent comparison is what that looks like in practice. It is why Ultramarine's "weights coming soon" is a real caveat and not a nitpick, and why FLUX's Kommunity Licence deserves a read before anyone builds on it. And it is why Anthropic's junk rating is on the same front page as Anthropic's engineering blog: the models are getting cheaper and more open on one side of the market while the companies selling them are being financed like infrastructure projects on the other.

One more thread, smaller but cleaner. Three of today's stories are about someone deciding what you may do with hardware you bought: eBay requiring FCC IDs on radios, a console hack that Sony can delete from GitHub, and Waymo asking Toronto for permission before it asks for passengers. The pattern is not new, but the density is. The appliance is never yours, no matter what the receipt says.
