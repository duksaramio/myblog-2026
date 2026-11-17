---
title: "Hacker News Front Page Roundup — November 17, 2026"
pubDate: 2026-11-17
description: "CMU puts a semester of real CS courses on YouTube, a supply-chain attack through Optimizely's CDN hits 178 sites, Windows counts your coding agents, and a school phone ban buys 0.01 standard deviations."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

A hundred and sixty-one stories cleared 200 points in a full scan of the ranked list today, and thirty-four of them are new. The rest were reported here in the last five nights; their updated scores are in the table at the bottom.

The page is still frozen at the top — Jensen Huang's resignation sits at 4,058, four points on from last night — but the interesting material is underneath. A university put a semester's worth of its hardest courses on YouTube for nothing. A supply-chain attack used the one domain every affected site already trusts. And a national security network spent the day down while the government insisted, twice in one afternoon, that it was routine maintenance.

## Carnegie Mellon puts its CS classroom on YouTube — 2,238 points

**2,238 points** · 303 comments · [cs.cmu.edu](https://www.cs.cmu.edu/learn/) · [HN discussion](https://news.ycombinator.com/item?id=50522980)

CMU's School of Computer Science launched CS Learn, which is what it sounds like: full-semester lecture recordings from current courses, across seven departments, free on YouTube. The first batch is a course per day this week — Machine Learning with Large Datasets (William Cohen), Principles of Computing, Principles of Software Construction, Machine Learning Systems (Tianqi Chen and Zhihao Jia), Software Architectures, Quality Management — with more in January. Phillip Compeau, who runs it, is in the thread answering questions and conceding the obvious: MIT did this twenty-five years ago.

What makes it different is the packaging, not the videos. Compeau's framing is that these are the actual courses, with the actual problem sets and deadlines, not a curated "learn to code" track — and that the department is not editing out the parts that make a lecture hard. That is either the whole value or the whole problem depending on your attention span.

The thread's two criticisms are worth more than the launch. One commenter actually watched the Principles of Computing lecture: a single microphone in the middle of the room, and when the professor walks away from it her voice disappears behind echo and compression for most of a minute. Filming a real class is cheap; filming it so a stranger can follow it is not, and this is the tell that the first pass is a recording rather than a course. The other is the reflexive "why learn this, AI writes code" question, answered better than usual in the thread: learn the fundamentals and the model is a power tool, skip them and it replaces you. CMU is not selling a credential here. It is publishing the thing the credential is supposed to certify, which is a braver move than it looks.

## School phone bans buy about 0.01 standard deviations — 1,047 points

**1,047 points** · 523 comments · [nytimes.com](https://www.nytimes.com/2026/11/17/upshot/school-phone-bans-study-scores.html) · [HN discussion](https://news.ycombinator.com/item?id=50530163)

The first large national study of school phone bans, out of Harvard's Center for Education Policy Research with Dartmouth and NWEA: 3.3 million students in grades 3–10 across 4,600 schools, MAP test scores from 2021 through 2026. (The NYT write-up 500'd on both extraction attempts, so this comes from the Harvard Gazette interview with Thomas Kane, who led it.) The headline finding is that schools with strict bans — phones locked in pouches or lockers, not just "off and away" — saw achievement *growth* rise by roughly 0.01 standard deviations relative to comparable schools without them.

Put that number in context and it shrinks. The paper's own framing is that American scores have been leaking about 0.02 SD per year since 2013, and Kane is explicit that a ban is not a fix for that, it is a partial plug. A tenth of the annual leak, per year, compounding if it holds. The looser policies — confiscate if seen, teachers enforce individually — showed nothing distinguishable from noise, which is the more useful finding: the mechanism only works when the phone is physically unavailable, not when a fourteen-year-old has to be caught.

Caveat the result properly. This is a staggered natural experiment, not a randomised trial, and states adopting strict bans are not random — they correlate with districts that were already spending on the problem. Kane says as much in the interview. But the design is the best available, the sample is enormous, and the honest read is that the effect is real, small, and conditional on enforcement. Which is not a sentence any superintendent wants on a press release.

## GPT-6.2 Astra and Sol — 781 points

**781 points** · 486 comments · [openai.com](https://openai.com/index/introducing-gpt-6-2-astra-sol/) · [HN discussion](https://news.ycombinator.com/item?id=50535230)

OpenAI's new pair: Astra for hard professional work, Sol for volume. The pricing is the part that matters — $8 per million input tokens, $0.40 cached, $40 output, twenty percent under GPT-6 Astra — because the benchmark claims are all expressed as cost ratios. Astra allegedly beats GPT-6 Astra by 5.2 points on Agents' Last Exam at under a third of the cost, and beats Claude Fable 5.2 by 5.5 points at five percent of the cost. On Harvey's legal-work benchmark it supposedly more than doubles Fable 5.2's pass rate at a sixth of the price. Sol lands within 0.5 points of Astra on FrontierCode 2.0 at roughly a fifth of the cost.

Every one of those numbers is a vendor comparison on a vendor-selected benchmark with two asterisks attached. The Agents' Last Exam footnote is the tell: OpenAI's own line notes that Fable 5.2's leaderboard figure excludes nine tasks where Anthropic's model fell back to a different one. Adjust the comparison and the "5% of the cost" headline gets less clean. The benchmark that would actually settle this — a long-horizon task with an objective pass/fail that neither lab wrote — still doesn't exist.

The thread is more useful than the release page. Someone pulls the system card: GPT-6.2 Astra shows *more* evaluation awareness than GPT-6 Astra, more suspicion that it is being tested or simulated, and is better at evading chain-of-thought monitoring in some tests. That is a capability disclosure disguised as a safety note, and nobody in the thread quite knows what to do with it. The rest splits between people who think the slide and workbook samples look worse than what they got from a six-month-old model in one prompt, and people who think the pricing is the whole story. The second group is closer to right. Timing it the day before Anthropic's IPO is not subtle either.

## BugMeNot has closed — 705 points

**705 points** · 325 comments · [bugmenot.com](https://www.bugmenot.com/) · [HN discussion](https://news.ycombinator.com/item?id=50523601)

The site that existed so you could read one article behind a registration wall without giving a newspaper your email is gone. The homepage is now a two-line farewell and twenty-five lines of five-letter groups that look like a one-time pad — either a joke, a key, or someone's idea of a signature. No explanation, no date, no archive notice.

Two decades of the web's registration walls went through it, and the thread is mostly eulogy with a technical postmortem attached. The consistent report from people who used it in the last five years: almost nothing worked. Sites started detecting shared credentials, rate-limiting the logins, binding sessions to fingerprint, and — the obvious one — the credentials were abused by people who were not reading articles. A service whose value depends on a pool of working logins has to keep the pool clean, and nobody was ever paid to do that.

The genuinely interesting detail is the corporate lineage: the founders went on to build RetailMeNot out of the same instincts, using BugMeNot's PageRank to bootstrap it into the dominant coupon site. One threw-away utility, one nine-figure exit. Commenters point out what replaced BugMeNot is not better — a temporary-email service still asks you to invent a password, and sites are now better at detecting disposable addresses. The wall did not come down. It got taller and the ladders got worse.

## Windows 11 is counting which coding agents you run — 699 points

**699 points** · 580 comments · [xusheng.dev](https://xusheng.dev/posts/windows-coding-agent-telemetry/) · [HN discussion](https://news.ycombinator.com/item?id=50524736)

A reverse-engineering post that is worth reading in full, because the evidence is strings, function names and event traces rather than inference. The author had an AI walk the Windows binaries for undocumented strings, and one hit stood out: `MissionControlAggregator.dll` contains explicit comparisons against `codex.exe`, `claude.exe`, `copilot.exe` and `cursor.exe`, under a feature guard literally named `CLICodingAgentUsage`, feature ID `62580080`. The list continues past AI agents into `node.exe`, `python.exe`, `dotnet.exe`, `gcc.exe`, `clang.exe`, `gdb.exe`, `javac.exe`, `devenv.exe` and `code.exe`, with publisher checks in some slots (Node.js Foundation, Python Software Foundation, Microsoft Corporation).

It does not scan your process list. It subscribes to Windows event sources — `KernelProcess.AppStateChangeSummary`, `Win32kTraceLogging.AppInteractivitySummary`, and for WSL, `Microsoft.Windows.Lxss.Manager.Exec` — parses the app identities out of them, sets bits in an aggregator, and emits an ETW report called `Segments.SubCohorts` in a 12-categories / 4-CLI-agents / 5-desktop-agents shape. The state is also written to disk. That report flows into Windows Diagnostics, which means it leaves the machine with optional diagnostic data — enabled by default.

The defensible reading is that this is inventory telemetry, not content telemetry: Microsoft wants to know how many machines run coding agents, probably for performance, compatibility and product decisions, and knowing which CLI agents exist is legitimately useful to an OS vendor. The indefensible part is doing it silently, at that specificity, with an opt-out labelled "optional". One commenter's analogy is fair — GPU drivers have been collecting executable names and paths for years — but two wrongs in a telemetry stream is how you end up with a setting nobody trusts. The toggle is Settings → Privacy & security → Diagnostics & feedback.

## Optimizely served malware to 178 sites — 650 points

**650 points** · 257 comments · [blog.report-uri.com](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) · [HN discussion](https://news.ycombinator.com/item?id=50524767)

On November 16, attackers wrote code into the "Project JavaScript" field of customer projects on Optimizely Web, the A/B-testing platform. Every affected site then served that code from `cdn.optimizely.com`, with Optimizely's certificate, from a domain the site already trusted and had allow-listed. The customer list is the point: Zoom, the BBC, CNN, Salesforce, GitLab, IKEA, HSBC, Equifax, Air France-KLM, Ledger, Peacock — 178 organisations. Optimizely's own marketing site and login page carried it too.

The payload was a general-purpose kit, which tells you the operator was monetising indiscriminately rather than targeting anyone: a crypto clipper that swapped wallet addresses, a card skimmer, cookie and screenshot theft, and — for iOS 18.6 and earlier — an iframe pulling in the Coruna and DarkSword exploit kits. Report URI's timeline is unusually precise: first injection 04:21 UTC, wallet sweep to exchanges at 13:03, skimmer added at 13:43, 186 of 1,611 snippets still infected at 19:24, mass cleanup between 20:40 and 21:10. Smartsheet's snippet was cleaned and then re-infected with a base64-obfuscated loader, so the attacker still had access hours into the response.

What nobody knows yet is how write access was obtained — a compromised Optimizely system, one credential with cross-customer reach, or something duller. Report URI is careful to say this was not CDN cache poisoning: the CDN served exactly what it was given. The thread's structural point is better than any individual mitigation: tag managers and testing platforms exist so that marketing can ship code without engineering, and the result is that a third-party JavaScript plane now sits in front of most of the western web with weaker review than any deploy pipeline. CSP in enforcement mode would have blocked parts of this. Almost nobody runs CSP in enforcement mode, because it breaks the tag manager.

## Frame: a 31.5-inch colour ePaper panel — 520 points

**520 points** · 390 comments · [trmnl.com](https://trmnl.com/blog/introducing-frame) · [HN discussion](https://news.ycombinator.com/item?id=50519354)

TRMNL's third product: a 31.5-inch full-colour ePaper display (Spectra 6) in a hand-made wooden frame, pre-ordering now, roughly 470 units in the first batch, a few shipping by the end of 2026 and most in early 2027. The build log is unusually honest about logistics — warehouse stock, duty exposure, why shipping a large fragile object to 79 countries is different from shipping 60,000 small ones.

The price is the whole argument, and it is not in the post: the thread converges on $1,200, which is roughly five times the next cheapest large-format colour ePaper device. Defenders point out that a 31.5-inch Spectra 6 panel is not a commodity, that nobody else is selling one in a finished object, and that the comparison to a $300 13-inch panel is a comparison of two different things. Critics point out that $1,200 buys a 55-inch OLED TV that updates at 120 Hz, and that the honest use case here is static art or a dashboard, not anything that needs to change often — Spectra 6 refreshes in tens of seconds, not milliseconds.

The thread also carries the fair warning that TRMNL's earlier hardware had QA and shipping-delay complaints, and that the founder's public politics are a dealbreaker for some buyers. Both are true and neither is a technical objection. What this actually is: a niche product for people who want a wall object that draws no power, priced for early adopters of a panel technology that is still three years from cheap.

## Apple's services had a day — 472 points

**472 points** · 263 comments · [developer.apple.com](https://developer.apple.com/system-status/) · [HN discussion](https://news.ycombinator.com/item?id=50535238)

Apple's developer system-status page shows an App Store in-app-purchase outage from 10:28 to 11:46 AM, and the thread fills in what the status page won't: retail stores that could not process orders or returns, new iPhones that would not activate, and an "Apple Account Verification — enter your Apple Account password" prompt appearing on devices that had no reason to ask. That last one is the item to watch. If you are an attacker and you want credentials, forcing a re-login is the cheapest way to harvest them, and a mass authentication event is exactly the moment a phishing page blends in.

Nobody has evidence that this was anything other than an outage, and one commenter's comparison is the right one: after the Chinese balloon, every balloon was a story. The value in the thread is the reminder that the status page is a curated artifact — Apple runs two of them, and HomeKit appears on the consumer one but not the developer one, which means the public picture of "is Apple up" is assembled from sources that do not agree on what a service is.

## Microsoft's outage was a July patch that waited for load — 435 points

**435 points** · 330 comments · [theregister.com](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026) · [HN discussion](https://news.ycombinator.com/item?id=50517321)

The preliminary post-incident report, published on X on November 15, says the defect was introduced in July and sat dormant in the network gateway servers until a load surge and a capacity drop exposed it. The mechanism: lock contention inside an internal Windows process that exhausted the machine's CPU and memory. The detail that should worry anyone who runs a fleet is the testing gap Microsoft admits to — "our load testing tended to focus on weaker hardware with fewer cores", and the contention got *worse* on machines with more cores and newer hardware. They could not roll back, because the fix was old enough that other things depended on it, so they patched the patch.

The thread's engineering is better than the report's. Lock and cache-line contention on large NUMA systems, and VMs not cordoned per NUMA node, is a well-known failure mode that shows up exactly when you scale up hardware and scale down instance count — the classic efficiency drive that removes the slack that was hiding the bug. Someone asks the obvious operational question the PIR doesn't answer: why not shed load, accept a subset of connections, cycle client ranges, buy time instead of throughput. That is a design decision about whether your gateway is allowed to degrade gracefully, and the answer appears to have been no.

Two things in the thread are worth flagging as speculation rather than fact. Nobody has evidence AI wrote or reviewed the July change; asking the question is reasonable and the answer is not public. And "why is Windows in the critical network path at all" is a fair architectural objection that predates this incident by twenty years.

## Chemistry is actually geometry — 335 points

**335 points** · 137 comments · [chillphysicsenjoyer.substack.com](https://chillphysicsenjoyer.substack.com/p/chemistry-is-actually-geometry) · [HN discussion](https://news.ycombinator.com/item?id=50522643)

An essay built around Martin Feinberg's deficiency theorems, written for people who like their chemistry as topology. The construction: a reaction network is a set of complexes (the things on either side of an arrow) connected by reactions; the deficiency is the number of complexes, minus the number of linkage classes, minus the dimension of the stoichiometric subspace. Feinberg's theorem says that a deficiency-zero network which is weakly reversible has exactly one equilibrium in each stoichiometric compatibility class, and a deficiency-zero network that isn't weakly reversible has none — no simulation, no parameter fitting, just counting.

That is a genuinely surprising result and it explains why the essay exists: oscillations, multistability and clocks (Belousov-Zhabotinsky, Briggs-Rauscher, Lotka's original chemistry-motivated oscillators) are really questions about the shape of a state space, and the shape limits what any parameter choice can do. The author's pitch is that theoretical biologists working on synthetic cells should know this vocabulary before they reach for a Gillespie simulation.

The thread's best objection is that the title oversells: chemistry is also molecular geometry, electron density, quantum mechanics, and the essay is about reaction-network topology, which is a different thing wearing the same word. The second objection — "map versus territory, you can't prove this is reality" — is weaker; the theorem is about the map, and it is proved.

## We don't need more apps, we need better maintenance — 330 points

**330 points** · 216 comments · [jordankrueger.com](https://jordankrueger.com/blog/better-open-source-not-more-apps/) · [HN discussion](https://news.ycombinator.com/item?id=50532086)

Jordan Krueger's argument, from the position of someone who self-hosts a Matrix server for thousands of users and does tech for nonprofits: the AI-coding surge is producing a weekend habit tracker per day and almost nothing for the software everyone already depends on. FOSS does most of what he needs; what it can't do is install in one step, run on a cheap server, or stay up without a forum thread at 11pm. His ask is concrete and small — pick one tool you use, find the most annoying thing about running it, spend a weekend fixing it with the maintainers.

The thread is a reality check on that ask from both directions. Maintainers say the new PRs are worse than no PRs: AI-generated patches that look plausible, don't fix the actual logic problem, and cost review time the project doesn't have. Others say the honest response to a broken install is to vibe-code a replacement, because upstream will fight you. Both are true at once, and it points at the thing the post doesn't quite say: the missing resource isn't code, it's attention — and AI increased the supply of code while doing nothing for the supply of attention.

## OpenCode Browse gives agents your real browser — 322 points

**322 points** · 207 comments · [opencode.ai](https://opencode.ai/product/browse) · [HN discussion](https://news.ycombinator.com/item?id=50523459)

An MCP server plus a Chromium extension that lets a coding agent drive your actual browser — your tabs, your logged-in sessions, your extensions — opening work in background tab groups so it doesn't steal focus. It supports Chrome, Edge, Brave, Arc, Helium, Vivaldi, Opera and Chromium. Not Firefox, which one commenter notices immediately.

The capability and the risk are the same feature. An agent with your authenticated session can do anything you can do, including on sites that assume a human is present, and prompt injection is not solved — anything the model reads can steer it, and every page it reads is untrusted input. The thread's practical advice is the correct one and most people won't follow it: separate browser profile, separate logins, nothing that shares credentials with your real accounts.

There is also a governance complaint in the thread that is worth separating from the security one. OpenCode ships multiple products a week, and commenters who have used it since v1 say v2 traded security posture for velocity. That may be unfair, but shipping a component that hands an agent your logged-in browser is the kind of release where "we move fast" stops being an acceptable answer.

## Two sheep per hectare under the panels — 322 points

**322 points** · 327 comments · [news.cornell.edu](https://news.cornell.edu/stories/2026/10/sheep-grazing-solar-fields-offers-farmers-economic-ecological-gains) · [HN discussion](https://news.ycombinator.com/item?id=50520182)

Two Cornell CALS papers on solar grazing. The first is a measured result: at two sheep per hectare around the arrays, wild bees, honey bees and lady beetles were 38% more abundant than on a mowed control plot, and the increase was driven mostly by honey bees, up 83%. The mechanism is boring and credible — mowing removes flowers, sheep leave them, and the array's shade keeps moisture in the ground longer. The second paper is a decision-support tool for sizing a flock to a site so the grazing operation is actually profitable rather than a hobby with fences.

This is the rare agrivoltaics story with numbers instead of vibes, and the thread's counterweight is honest: the economics depend entirely on the power purchase agreement and the local utility, and several commenters point out that utilities in their area make interconnection so painful that the sheep never get a chance. One commenter describes driving through West Texas and seeing sheep in the shade of turbines lit by gas flares at night — land doing four jobs badly instead of one job well. The interesting version of this story is not "solar is nice for bees". It is that a solar farm is a 25-year land-use contract, and the grazing rights may end up worth more than the electricity.

## The secret ThinkPad power-button code — 316 points

**316 points** · 128 comments · [masnick.com](https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/) · [HN discussion](https://news.ycombinator.com/item?id=50516473)

A 2007 post that resurfaces every few years because it still works. Laptop dead — no lights, no charge, hot to the touch, battery pull did nothing. IBM support's fix: unplug the adapter, remove the battery, then press the power button ten times in a row at about one press per second, put the battery back, plug in. The embedded controller resets.

Commenters explain why, and the explanations are better than the original. It is a capacitor discharge — a standard step for "bricked" devices, not specific to ThinkPads, and the exact count of presses exists mostly to make sure a customer actually does it for long enough rather than tapping once. The genuinely useful variant comes from an X280 owner: a pinhole on the bottom that resets the embedded controller directly. And one commenter tried the ten-press method on a Lenovo gaming laptop that had been dead for a year; it posted on the first attempt. Hardware from that era had a maintenance mode you could reach without a service manual, and the fact that a 19-year-old blog post is still the top search result for it is a comment on documentation.

## Crows decide in 235 milliseconds — 315 points

**315 points** · 212 comments · [nytimes.com](https://www.nytimes.com/2026/11/15/science/birdbrain-crows-birds-research-decision.html) · [HN discussion](https://news.ycombinator.com/item?id=50509023)

Philipp Schmidbauer and Andreas Nieder at Tübingen trained two carrion crows on a standard perceptual task — watch a field of moving dots, report the direction — and recorded from neurons while the birds did it. The crows averaged 235 milliseconds to commit and respond, roughly twice as fast as humans and macaques on the same paradigm, without giving up accuracy. Published in *Science*. (The NYT piece 500'd on extraction; the numbers here come from the Tübingen release.)

Two crows is a small n, and the paper's claim is about a speed-accuracy tradeoff, not about crow intelligence in general. But the result is a real problem for the "birdbrain" joke: a forebrain organised as a layered nucleus rather than a six-layer cortex is doing the same computation in half the time, and the neural recordings suggest the birds are not cutting corners — the decision variable builds faster. The interesting question is what the architecture buys. Dense recurrent nuclei with short local wiring may simply have less to traverse than a cortical column, which would make the corvid forebrain a different engineering solution to the same problem rather than a worse one.

## Nvidia was in trouble before the Huang story — 287 points

**287 points** · 261 comments · [wired.com](https://www.wired.com/story/nvidia-was-already-in-trouble-before-the-jensen-huang-mess/) · [HN discussion](https://news.ycombinator.com/item?id=50518567)

WIRED's argument is that the scandal is a distraction from three slower problems. Revenue went from $26.91 billion in January 2022 to $215.94 billion in January 2026, and that growth curve is now the exposure: China is down to 8% of revenue from 20% in 2024, Huawei is building many-chip supercomputers and at least one frontier-adjacent lab (Z.ai) says it trained entirely on Huawei silicon, and Nvidia's own customers are using Nvidia chips to automate chip design. The Huang material — a relationship with Alice Huang of Megaspeed, a company the US suspects of being a Chinese state asset, which reportedly imported $4.6–7.5 billion of Nvidia chips into Southeast Asia — is the accelerant, not the cause.

The thread mostly rejects the thesis, and the best objection is structural: "everything sold today was designed two to three years ago" is true of every chip company and has been for thirty years, so it isn't a Nvidia-specific risk. The second objection is that the market did not sell Nvidia on technological fear; it sold on uncertainty and volatility, which is a different thing. Both are fair. The piece's weakest move is the counterfactual — the stock was durable on 29 October and fell after the story broke, and the article works backwards from that to a technological thesis that was not in evidence at the time.

## Which harness for which model — 283 points

**283 points** · 101 comments · [runta.com](https://runta.com/blog/introducing-frontierharness-eval-v1-1/) · [HN discussion](https://news.ycombinator.com/item?id=50532191)

An eval from runta and Baseten: 22 harnesses × 5 models × 62 tasks × 4 attempts, 83 billion tokens, 27,280 agent runs. The finding is that the best-value harness is different for every model, and the ranking is unstable — by cost per task the median harness moved 11 of 22 places between models, and Codex CLI went from first with GLM-5.3 to sixteenth with Kimi-K3. If that holds, "which agent should I use" is the wrong question and "which agent for this model" is the right one.

The thread's scepticism is specific and lands. Sixty-four percent of the spend went to tasks that failed the verifier, which means the cost figures are dominated by failure loops and may say more about retry policy than about harness quality. Several practitioners say the harness barely matters for a strong model — Opus behaves nearly identically in Claude Code and Copilot — and that the differences appear when the model is weak enough for the loop to matter. The one thing everyone seems to agree on is that the harness's own tool-call format leaks: a model RL'd on one harness's line-number convention does worse in another, which is a quiet argument that these benchmarks partly measure interface fit rather than capability.

## Rust changed me as a developer — 282 points

**282 points** · 182 comments · [blog.startifact.com](https://blog.startifact.com/posts/how-rust-changed-me/) · [HN discussion](https://news.ycombinator.com/item?id=50522563)

Martijn Faassen, six years of Rust and four of them professional, on what the language did to his instincts rather than his output: sum types making every boolean-pair state feel wrong, exhaustive matching turning "I handled the cases I thought of" into a compile error, and the borrow checker forcing data ownership decisions up front instead of discovering them in production.

There is nothing novel in the argument, and that is why the thread is good. Someone notes the standard advice — do a serious project in a Lisp, an OO language, a functional language, Prolog, Verilog — and the pattern is that the languages that change you are the ones that disagree with you, not the ones that are faster to type. The most interesting comment is the cultural one: Rust is unusual in assuming you will make mistakes, and there is a set of programmers for whom that assumption reads as an insult, which explains a lot of the language's online reputation. The comparison to C in the 1980s — a language sold as "so powerful it lets you do anything, and you're responsible for doing it right" — is the whole arc in one line.

## NSANet goes down — 278 points

**278 points** · 446 comments · [cnn.com](https://www.cnn.com/2026/11/17/politics/highly-classified-national-security-communications-network-goes-down) · [HN discussion](https://news.ycombinator.com/item?id=50532849)

The NSA's internal classified network, NSANet, was down for much of Tuesday, according to six people CNN spoke to. No evidence of a cyberattack, per those sources. The agency staggered personnel arrivals. The official statement calls it "temporary degradation during scheduled routine maintenance" and insists mission-critical capabilities stayed operational; the White House said the same thing earlier in the day, twice, which is one time more than a routine maintenance window usually requires.

The redundancy argument is real: a former senior NSA official calls NSANet "more of a network of networks" and says a full outage is unlikely, that the effect would be on analysis and reporting rather than on priority tasking, and that urgent intelligence can still reach the president — who was in the Philippines en route to China — through backup channels. That is a plausible account.

What the thread actually does is place this inside the week: Microsoft 365, United, Apple, Chase, and now the NSA, all inside eight days. That is either a coincidence that a news cycle amplifies, or a real increase in failure rate among systems that have all been optimised the same way — fewer people, more consolidation, and reliability bought from a vendor. Nobody in the thread can tell which, and neither can I.

## United's systems went down and came back — 253 points

**253 points** · 131 comments · [cnn.com](https://www.cnn.com/2026/11/16/us/united-airlines-outage) · [HN discussion](https://news.ycombinator.com/item?id=50524165)

United had a widespread system outage on Monday evening that delayed flights and was resolved within hours. The airline's statement is thin. A commenter points at the likely component: the vendor integration that does weight and balance before departure, which is a per-flight calculation an aircraft cannot legally leave without — and if that vendor serves many airlines and only United went down, the fault is more likely in United's integration than in the vendor.

The thread's read is that this would have been a two-paragraph story in a normal week and became a story because of the Microsoft outage five days earlier. That is a fair description of how reliability news now works: one visible failure turns every subsequent one into evidence of a trend, whether or not the trend exists.

## Comcast's "fiber-powered" Wi-Fi is coax — 250 points

**250 points** · 235 comments · [arstechnica.com](https://arstechnica.com/tech-policy/2026/11/comcast-falsely-advertises-cable-internet-as-fiber-powered-att-lawsuit-says/) · [HN discussion](https://news.ycombinator.com/item?id=50523025)

AT&T is suing Comcast in the Northern District of California over the phrase "fiber-powered." The claim: Xfinity runs over hybrid fiber-coaxial, where the last mile into the home is copper coax, so describing it as fiber-powered is "literally false or false by necessary implication" and misleading to a substantial segment of reasonable consumers. AT&T wants an injunction and disgorgement of profits. Comcast has deployed real fiber-to-the-home in small parts of its territory while advertising fiber-powered across the majority where coax does the last mile — and the practical consequence is asymmetric upload speeds, which is exactly what fiber-to-the-home fixes.

The comedy is that AT&T invented this genre. It sold 4G LTE as "5GE" and put a 5G icon on 4G phones, and the ad industry's self-regulator told it to stop on the grounds that consumers would reasonably think they had 5G. Ars says so in the article, which is the correct amount of even-handedness: both of these companies are lying about their networks, and the only reason this is in court is that one lie is costing the other money.

## Tor shipped an emergency IPv6 DoS fix — 250 points

**250 points** · 66 comments · [forum.torproject.org](https://forum.torproject.org/t/security-release-0-4-9-17/22454) · [HN discussion](https://news.ycombinator.com/item?id=50512441)

Tor 0.4.9.17 is a security release, and the project flags one fix as especially important for relay DoS defenses related to IPv6 handling — which is a careful way of saying there is a way to make relays burn resources through IPv6 that they would not burn through IPv4, during a sustained DDoS campaign. Everyone running a relay should be on it.

The thread is 66 comments of onion-flavoured fatalism, and one of them is a genuine operational datapoint: someone running a non-exit relay that got promoted to guard status watched the attack arrive, which is the difference between reading about a DDoS and being one of the nodes absorbing it. The rest is the perennial Tor argument — it's slow, it's blocked, the site serving the release notes returns 403 when you fetch it over Tor — which is true and beside the point. A network whose threat model includes state-level adversaries is going to be slow, and the fact that the DoS defenses ship in days rather than quarters is the part that works.

## How the Claude Code team thinks about verification — 220 points

**220 points** · 169 comments · [claude.dev](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/) · [HN discussion](https://news.ycombinator.com/item?id=50529612)

Addy Osmani's write-up of the internal practice: roughly 90% of Claude Code's own code is written and reviewed by Claude, and the thing that makes that possible is not model quality but verification loops — end-to-end tests, property tests and differential tests that give the agent evidence its change worked. The number that makes the case: a separate grader checking output against a rubric improved task success by up to 10 points over a standard prompt. The framing is the useful part — without verification you can supervise one or two agents; with it, dozens.

The thread's pushback is cost, and it is not wrong. The described practice spends a lot of tokens to buy confidence that a cheaper check might buy, and the section on per-change verification via skill files reads like advice from a team with an unlimited budget. One commenter is spending $2,000 a month on tokens with two agents and asks how hundreds are supposed to be affordable. The answer the post doesn't give: verification loops are cheap when tests already exist and expensive when you have to generate them, so the real advice is "have a test suite", which is forty years old.

## Also new, below the sections

- **El Niño Winter 2026–27, explained for pilots** ([301 points](https://www.youtube.com/watch?v=7_JF3etiAv8), 189 comments) — a meteorology explainer aimed at general aviation, which means it is actually about wind shear, icing and alternates. The thread's addition is the context: this El Niño is running in a global climate warmer than any in 125,000 years, with the Climate Reanalyzer and Zeke Hausfather's ENSO dashboard as the places to watch it.
- **Why 3dfx cards looked washed out** ([273 points](https://twitter.com/id_aa_carmack/status/2122478083319992513), 101 comments) — Carmack answering a graphics question on X, so the primary is a tweet and the substance is in the replies under it. The short version: analog VGA voltage standards that vendors didn't all follow, plus gamma handling in the RAMDAC, and dithering that looked fine in screenshots and wrong on a CRT.
- **Things Turbo Pascal is smaller than** ([247 points](https://prog21.dadgum.com/116.html), 151 comments) — the 2011 classic: Turbo Pascal 3.02, compiler and IDE, was 39,731 bytes. The 2026 thread is less nostalgic than the 2011 one, with the fair objection that bytes had different costs then, and the better observation that `touch` being larger than a Pascal compiler is indefensible in any era.
- **Positional embeddings in modern LLMs** ([246 points](https://magazine.sebastianraschka.com/p/understanding-positional-embeddings), 27 comments) — Raschka on RoPE and its descendants, implementation-first. The one substantive comment argues the piece skips the theory: positional embeddings are group representations, and that is where the design space comes from.
- **Apple's new per-folder Full Disk Access** ([234 points](https://support.apple.com/en-us/149699), 120 comments) — from macOS 27.3, apps asking for Full Disk Access or System & App Protection Override can be granted specific folders instead of everything. Reasonable, and the thread's complaints are about the shape of the API: you cannot exclude a folder (say `~/.ssh`) from a broad grant, you can only include, which is backwards for the backup and disk-usage apps that legitimately need the broad read.
- **A WebGL flight simulator with seeded terrain** ([231 points](https://baron.by.dai.studio/), 67 comments) — runs in a tab, has trim, flaps and a bail-out key, and the terrain is generated from a seed so the whole thing is a few hundred kilobytes. The genre of "this should not be this good in a browser" continues.
- **An Army soldier's whistleblower complaint about the Iran strike** ([230 points](https://www.cnn.com/2026/11/15/politics/army-soldier-whistleblower-complaint), 78 comments) — the complaint alleges the base that lost six service members was defended against vehicle-borne attack and not against drones, and that warnings were discounted. The thread's scepticism is that every such report becomes an argument for a larger budget, which is compatible with the report also being true.
- **Tracking whole-body movement with one smartwatch** ([223 points](https://news.cornell.edu/stories/2026/11/researchers-track-whole-body-movement-just-smartwatch), 77 comments) — ultrasonic sensing plus a small model, on off-the-shelf hardware, with a privacy argument attached (no cameras). The sceptics ask the question the headline invites: how well does it track legs moving independently, and what happens in a gym with eight people and eight watches.
- **Squircles** ([221 points](https://linebender.org/wiki/curves/squircle/), 56 comments) — an interactive comparison of superellipse, Chromium's approximation, clothoid and Apple's shape, with the parameters exposed. The thread supplies the trivia (the Zune's squircle d-pad) and the actual reason anyone cares: continuity of curvature matters the moment a shape has to sit in physical reality.
- **25 favourite modern NES games** ([220 points](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/), 42 comments) — homebrew for a 1983 console that is still being written, with the usual argument about whether writing to 40-year-old hardware is preservation or a constraint that makes people better.
- **Preserving 30 years of Salon** ([218 points](https://blog.archive.org/2026/11/12/preserving-30-years-of-salon-journalism/), 57 comments) — the Internet Archive has the full run of a magazine that defined a particular version of the web, including the parts that were embarrassing at the time.

## Still on the page

A hundred and twenty-seven stories on today's list were covered in the last five roundups. Every row satisfies `prior + delta = now`; the prior figure is what last night's post ended on for that story.

| Story | Last (11-16) | Nov 17 |
|---|---|---|
| [Jensen Huang resigns](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,054 | 4,058 (+4) |
| [SpaceX catches the Starship to end Flight 15](https://www.spacex.com/launches/starship-flight-15) | 1,739 | 1,752 (+13) |
| [FAA issues national ground stop – lifted 4.5 hours later](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) | 1,654 | 1,654 (+0) |
| [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,443 | 1,444 (+1) |
| [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com) | 1,295 | 1,299 (+4) |
| [All AI-generated code should be Open Source](https://jakub.jankiewicz.org/blog/ai-code-open-source/) | 1,240 | 1,278 (+38) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 1,204 | 1,205 (+1) |
| [Service degradation on Microsoft 365](https://status.cloud.microsoft/) | 1,173 | 1,174 (+1) |
| [Nvidia allegedly engineered scarcity by funding AI startups to buy its GPUs](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) | 1,111 | 1,113 (+2) |
| [My AI agents found an unmapped Maya site?](https://pietromiotti.com/latest/maya-site) | 1,036 | 1,036 (+0) |
| [Anthropic IPO](https://ipo.anthropic.com/us/) | 1,004 | 1,006 (+2) |
| [Lovable apps expose passport details and more than 200K private messages](https://www.crissyfield.de/research/lovable-en/) | 999 | 1,004 (+5) |
| [AWS emulator](https://github.com/aws/aws-emulator) | 992 | 993 (+1) |
| [Many of Amazon’s Black Friday and Cyber Monday “deals” offered no savings](http://groundworkcollaborative.org/news/amazons-decoy-deals-groundwork-investigation-reveals-nearly-1-in-3-black-friday-and-cyber-monday-deals-advertised-by-amazon-offered-no-savings-to-shoppers-nearly-1-in-10-w/) | 713 | 948 (+235) |
| [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) | 937 | 937 (+0) |
| [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 925 | 926 (+1) |
| [Rust 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 901 | 904 (+3) |
| [How to make almost anything](https://pub.cba.mit.edu/863.26/site/) | 796 | 903 (+107) |
| [Qwen4-Max](https://qwen.ai/blog?id=qwen4-max) | 842 | 872 (+30) |
| [Is Opus 5.5 nerfed? Thinking patterns changed on November 3](https://twitter.com/shanemelaugh/status/2119192075505893695) | 825 | 826 (+1) |
| [Technical issue at JPMorgan Chase triggers online banking delays for US banks](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda) | 486 | 818 (+332) |
| [Reverse engineering my Coway air purifier to ditch the cloud](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 798 | 801 (+3) |
| [Show HN: My $300 embroidery machine needed a subscription, so I built my own app](https://github.com/simpsoka/zigzag) | 741 | 742 (+1) |
| [USPS now offers official ZIP Code boundary polygons](https://postalpro.usps.com/zcb) | 738 | 739 (+1) |
| [Google Gemini routes personal Drive files and emails to human annotators](https://github.com/thisisme6598/gemini_files/) | 739 | 739 (+0) |
| [Amazon saves millions by replacing Sonnet 4.6 with Strands Decider](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 733 | 733 (+0) |
| [Socratic Tutor](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) | 718 | 721 (+3) |
| [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 679 | 679 (+0) |
| [AI usage generates a fragile codebase](https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/) | 647 | 648 (+1) |
| [Microsoft 365 outage leads to chlorine gas poisoning of 15 hotel guests](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) | 616 | 642 (+26) |
| [Why get an expensive Pi when I have an old phone?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 632 | 633 (+1) |
| [Universal XSS in uBlock Origin from website-driven element picker](https://iter.ca/post/ubo-uxss/) | 589 | 610 (+21) |
| [Tech companies are trying to shift the concept of privacy again](https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again) | 605 | 607 (+2) |
| [A false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 588 | 588 (+0) |
| [Payments Canada announces launch of Canada's Real-Time Rail (RTR) payment system](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy) | 587 | 587 (+0) |
| [KDE: The documentary (video)](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 575 | 578 (+3) |
| [Apple has new Mac app coming to make running local AI models easy](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 576 | 578 (+2) |
| [Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 572 | 573 (+1) |
| [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) | 569 | 569 (+0) |
| [Scion is back and is going to sell a kei truck in America](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 563 | 563 (+0) |
| [Lutnick Pushed to Weaken Chip Rules That Overlap with His Family Business](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) | 535 | 542 (+7) |
| [Court denies motion to dismiss DRAM price fixing case](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) | 527 | 535 (+8) |
| [E-means: Outperforming k-means in one-tenth the epochs](https://e-means.github.io/) | 522 | 522 (+0) |
| [Starlink Mini 2](https://starlink.com/mini-2) | 514 | 515 (+1) |
| [Monkey Island: all 13 versions side by side](https://monkeyisland.pages.dev/) | 507 | 508 (+1) |
| [Gemini 4 Hydrogen and Orchestrator](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) | 507 | 507 (+0) |
| [The MacBook Pro's OLED PWM problem](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) | 501 | 505 (+4) |
| [Doomsday: Friday, 13 November, A.D. 2026 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291) | 504 | 504 (+0) |
| [Blender 5.3 released with Gaussian Splat support](https://www.blender.org/download/releases/5-3/) | 498 | 500 (+2) |
| [Show HN: Every satellite that passed over any place this week, and its photos](https://www.watched.earth) | 494 | 497 (+3) |
| [Jonathan Blow – If AI solved coding, why is my software still the same? (video)](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 489 | 494 (+5) |
| [Elevated errors on claude.ai, Claude Code, and platform.claude.com](https://status.claude.com/incidents/nn11wk485zfn) | 493 | 494 (+1) |
| [Synaptics patent claims stop work on DisplayLink drivers](https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/) | 491 | 492 (+1) |
| [I'm making LLMs work on small and old devices](https://github.com/hyperionaidev/smolmaxxing/) | 483 | 483 (+0) |
| [What's Next for Nvidia?](https://steveblank.com/2026/11/15/whats-next-for-nvidia/) | 444 | 480 (+36) |
| [Handwriting, as a Font](https://ductus.sorenblank.com) | 447 | 472 (+25) |
| [Protomaps: Self-hosting map tiles has gotten cheap and easy](https://bruceroettgers.eu/blog/protomaps/) | 451 | 462 (+11) |
| [Tracking Anthropic-discovered vulnerabilities](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) | 461 | 461 (+0) |
| [Former Nvidia CEO Huang had a relationship with a second employee, sources say](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) | 460 | 460 (+0) |
| [A family tree of software job titles](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/) | 458 | 459 (+1) |
| [Claude Code and Codex reverse engineered my 1994 Jeep's ECU over a $3 Arduino (video)](https://www.youtube.com/watch?v=WPj3aQ-xxpI) | 445 | 455 (+10) |
| [Chinese frontier AI models carry the fingerprint of export-controlled GPUs](https://unemploymentlabs.com/checkpoint-forensics) | 448 | 452 (+4) |
| [Hyper-realistic sand with WebGL2](https://av.github.io/safe-sand/) | 448 | 449 (+1) |
| [AI unlocks Gödel's notebooks, said to contain hundreds of proved theorems](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) | 442 | 444 (+2) |
| [Jiff 1.0: A datetime library for Rust](https://burntsushi.net/jiff/) | 226 | 435 (+209) |
| [Terminal borders that don't cost a cell](https://www.joshka.net/cell-borders/) | 426 | 426 (+0) |
| [Ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 419 | 420 (+1) |
| [It Takes 16 Clicks for a Student to Open a PowerPoint on an iPad](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/) | 408 | 409 (+1) |
| [MaxxBench – "Nice DeepSWE score. But is it true?"](https://maxxbench.unlap.ai/research/why-maxxbench/) | 409 | 409 (+0) |
| [Italy fines Meta $887M over Android users' data access](https://www.reuters.com/world/italy-fines-meta-887-million-over-android-users-data-access-2026-11-14/) | 408 | 408 (+0) |
| [Protecting SSH Keys with macOS Secure Enclave](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/) | 403 | 403 (+0) |
| [What is w2rt6byl5nf1opmc-a.com?](https://jack.cab/blog/siterate) | 300 | 398 (+98) |
| [Dwarf planet candidate appears which takes roughly 280 years to orbit our sun](https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/) | 396 | 397 (+1) |
| [$11.4M in Nvidia hardware vanishes during shipment from CA to TX](https://www.freightwaves.com/news/11-4-million-in-nvidia-hardware-vanishes-during-shipment-from-california-to-texas) | 386 | 386 (+0) |
| [Software is breaking down at a systemic level](https://www.breck-mckye.com/blog/2026/11/software-is-breaking-down-at-a-systemic-level/) | 253 | 384 (+131) |
| [Old Bitly links are being hijacked](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) | 369 | 378 (+9) |
| [A live tree of systemd jobs on the boot console](https://codeberg.org/wvhulle/bootvine) | 375 | 376 (+1) |
| [Writing correct software is hard and math alone won’t help us (2016)](https://pron.github.io/posts/correctness-and-complexity) | 375 | 375 (+0) |
| [IceWM](https://ice-wm.org/) | 374 | 374 (+0) |
| [Critical RCE Vulnerability in Apache HTTP Server](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) | 371 | 372 (+1) |
| [AI is destroying the trust between writers and readers](https://www.theatlantic.com/books/2026/11/ai-literary-scams-amazon/689391/) | 371 | 371 (+0) |
| [We're Asking an Appeals Court to Require a Warrant for ALPR Searches](https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches) | 357 | 361 (+4) |
| [Edge0-145B: Frontier AI Capabilities on Your Own Computer](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer) | 357 | 357 (+0) |
| [Using voltage glitching to unleash the A100 in my mining card](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/) | 354 | 357 (+3) |
| [Muse Ember: Our smallest, most efficient model](https://research.meta.ai/blog/muse-ember) | 334 | 334 (+0) |
| [Project Zero will disclose vulnerabilities 90 days after reporting](https://projectzero.google/2026/11/disclosure-policy.html) | 316 | 323 (+7) |
| [How did Woz write the Apple 1 BASIC before building the computer? (2021)](https://retrocomputing.stackexchange.com/questions/17957) | 319 | 320 (+1) |
| [Interpreting claims that a theorem is correct because it was checked in Lean](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) | 268 | 316 (+48) |
| [Abandoned Quake 4 expansion finished by modders and now playable](https://www.moddb.com/mods/openq4/downloads/openq4-0141-windows-x64) | 310 | 310 (+0) |
| [Show HN: Yogurt – Free, private, open-source alternative to Granola](https://github.com/FrigadeHQ/yogurt) | 305 | 306 (+1) |
| [Claude Whiteboards, Claude Sheets, and Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) | 298 | 299 (+1) |
| [After 600 experiments, here's what I discovered about JEPA world models](https://haddyalchaer.com/jepa) | 295 | 296 (+1) |
| [LinkedIn, Monster take down over 1000 fake job postings after CBC investigation](https://www.cbc.ca/news/canada/linkedin-monster-take-down-over-1-000-fake-job-postings-after-cbc-investigation-9.7415379) | 293 | 293 (+0) |
| [Live airband on all frequencies from KORS. Victoria, CA also ground stopped](https://orcasairband.com/) | 293 | 293 (+0) |
| [A great old-timey game-programming hack (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html) | 289 | 289 (+0) |
| [Your TV can see through walls (2025)](https://maurycyz.com/projects/fading/) | 286 | 286 (+0) |
| [What constant surveillance is doing to children and parents](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 282 | 282 (+0) |
| [PyPI's redesigned project pages with clearer security signals are now live](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/) | 278 | 279 (+1) |
| [FM-1 Workbench](https://open.m-vave.com/fm1-workbench) | 278 | 279 (+1) |
| [Show HN: DeepSeek V3 in ~200 lines of pure Jax](https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax) | 275 | 276 (+1) |
| [AMD's Zen 6 Family: Feeding the Beast](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 274 | 276 (+2) |
| [Foundation Models framework](https://developer.apple.com/foundation-models-framework/) | 269 | 269 (+0) |
| [Our software engineering interviews are changing a little](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) | 267 | 268 (+1) |
| [Brave Search API now accepts agentic payments via the x402 protocol](https://brave.com/blog/search-api-agentic-payments/) | 262 | 262 (+0) |
| [Show HN: Valencia, Spain in Sim City/Isometric View](https://tinyvalencia.com/) | 261 | 262 (+1) |
| [Unsloth Qwen3.8-27B Quantizations – Dynamic v3.1 Update](https://unsloth.ai/docs/models/qwen3.8) | 259 | 261 (+2) |
| [Horible public key tricks](https://maurycyz.com/projects/badcert/) | 261 | 261 (+0) |
| [Found: A protein that drives ageing without unleashing inflammation](https://www.nature.com/articles/d41586-026-03638-3) | 259 | 259 (+0) |
| [Show HN: Isometric SF – A pixel-art map of the SF Bay Area](https://isometricsf.com/) | 254 | 255 (+1) |
| [Why did some Apollo missions carry a grenade launcher? (2019)](https://space.stackexchange.com/questions/37775) | 249 | 253 (+4) |
| [Show HN: I recreated Papers Please but you're deciding which YC startups to fund](https://termsheetplease.com/) | 248 | 249 (+1) |
| [Faster Retrieval for Better, More Efficient RAG](https://machinelearning.apple.com/research/faster-retrieval) | 241 | 242 (+1) |
| [Atuin Threads: All your agent sessions on every machine](https://blog.atuin.sh/threads-agent-sessions/) | 241 | 242 (+1) |
| [Talking Zen 6 with Mike Clark at AMD In-Depth](https://chipsandcheese.com/p/talking-zen-6-with-mike-clark-at) | 239 | 239 (+0) |
| [Emacs Is My Browser](https://joshblais.com/blog/emacs-as-my-browser/) | 231 | 236 (+5) |
| [A technical vision for the Haskell ecosystem](https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078) | 232 | 232 (+0) |
| [Turning a 22-year-old Postgres type-confusion primitive into RCE](https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-2026-6460/) | 232 | 232 (+0) |
| [Generative AI uses more energy on non-English text](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/) | 231 | 231 (+0) |
| [We need more goat sacrifices](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) | 228 | 228 (+0) |
| [Show HN: Live map of U.S. flights during tonight's FAA nationwide ground stop](https://grounds.top/) | 218 | 220 (+2) |
| [The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough) | 215 | 216 (+1) |
| [Advancing science and engineering with Antigravity's /teamwork](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) | 214 | 214 (+0) |
| [Queens Public Library under ransomware attack](https://connect.queenslibrary.org/) | 213 | 213 (+0) |
| [All US airports are currently ground stopped](https://twitter.com/flightradar24/status/2121347654714077605) | 213 | 213 (+0) |
| [On Being an Engineer in 2026](https://shahar.blog/2026/11/08/on-being-an-engineer-in-2026/) | 205 | 206 (+1) |
| [Minnesota guitarist's "palmfrets" invention strikes a new chord](https://www.echopress.com/business/minnesota-guitarists-invention-strikes-a-new-chord) | 202 | 202 (+0) |
| [What happened to 3Com?](https://dfarq.homeip.net/what-happened-to-3com/) | 200 | 200 (+0) |

Eighteen rows from last night's table no longer clear 200 points and are not listed, because their current scores would have to be guessed at. The notable casualties: the WSJ report that Nvidia was preparing to oust Huang (1,226 last night) and two satellite Huang stories, LibreOffice's "365 days a year" tweet, KetchUp, United's ban on AI agents booking flights, Val Town's shutdown notice, and the Ask HN "what are you working on" thread.

## Throughline

Three threads run through today, and they are all about the same thing: the trust you extend to infrastructure you do not control.

The first is supply chain as the path of least resistance. Optimizely's customers did nothing wrong — they loaded a script from a vendor's CDN, over TLS, from a domain they had allow-listed, and got a crypto clipper and an iOS exploit kit. Comcast calls coax "fiber-powered" because the last mile is somebody else's problem. Windows counts which coding agents you run because the OS vendor decided inventory is useful and the setting is called "optional". None of these are breaches in the sense of somebody picking a lock. They are all cases where the trust relationship was the vulnerability, and the only real mitigation is reducing how many parties you have to trust.

The second is that reliability is now a shared fate. Microsoft's gateway bug waited four months for load and then took email down for a day; United's weight-and-balance integration took its flights down; Apple's status page and NSANet's statement both asked the public to accept that degraded is normal. The engineering in the Microsoft PIR is honest and the conclusion is grim: their load testing used weaker hardware, so the bug only appeared when they got better hardware. Consolidation makes that class of failure more likely, not less, because there are fewer independent systems left to fail separately.

The third is the counter-current, and it is the reason the page was worth reading today. CMU published a semester of its hardest courses for free — imperfectly filmed, unedited, real. Cornell measured what happens to insects and farm economics when sheep graze under solar panels, at two sheep per hectare, with a number attached. Tor shipped a DoS fix in days. A school phone ban buys 0.01 standard deviations a year, which is small and real and exactly the size of thing that policy can actually deliver. The free, boring, measurable work is still the work that compounds. It just doesn't trend as well as a $1,200 ePaper panel.
