---
title: "Hacker News Front Page Roundup — November 11, 2026"
pubDate: 2026-11-11
description: "Forty-seven stories cleared 200 points and twenty-eight are new. Google's agents rediscover a Maya site that was already in a paper, Glasswing's seventh month looks worse than its first, and Synaptics shuts down a Linux driver with a $25,000 invoice."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Forty-seven stories cleared the 200-point threshold in this afternoon's scan of the top 170 ranked submissions. Twenty-eight are new. Nineteen are repeats, and two of those repeats are the day's real stories: a home-automation essay that went 469 → 1,126 in a day, and the `.name` domain saga closing at 916 after Verisign backed down.

The new material has three centres of gravity, and only one of them is a product launch. The first is AI agents producing findings faster than anyone can check them — a Maya site, a vulnerability ledger, a codebase. The second is the old internet being withdrawn: domains, a hosting platform, a support forum, a Linux driver. The third is local compute getting serious, from Apple's clustering app to a voltage-glitched A100.

---

## Verisign backs off the 22,000 `.name` domains — 916 points

**916 points** · 200 comments · [neil.fraser.name](https://neil.fraser.name/news/2026/11/10/) · [HN discussion](https://news.ycombinator.com/item?id=50442736)

In September Verisign announced it was terminating third-level `.name` domains — the `first.last.name` namespace, 22,000 names and their email redirects — with a deadline and no appeal. On 10 November ICANN published a letter confirming Verisign is retracting the plan. New third-level registrations close; every existing one, including the author's `neil.fraser.name`, stays indefinitely.

The comments are a case study in what happens when a registry treats a namespace as a quarterly line item. One registrant let a `first.last.name` expire because of the announced shutdown and is now stuck: the domain kept working past the date, but the registration lapsed. Worse, registrants with Tucows/OpenSRS whose domains came up for renewal after late August found the registrar would not renew them and most others would not accept a transfer of a third-level domain plus its email forwarding. Some entered the redemption period, where transfer is impossible and the only exit is paying Tucows to redeem a domain that was never supposed to die.

The structural read: a `.name` address is not a product you own, it is a line in someone else's P&L, and the vendor can decide the line is not worth keeping. Commenters asked the obvious question — why not just grant these people the second-level domain? — and the answer is that Verisign's incentive is to sell second-level registrations, not to hand them out to the 22,000 people who already paid for a third-level one. The retraction is a win. It is not a fix.

## Google's 48 agents "found" a Maya site that was already in a paper — 860 points

**860 points** · 315 comments · [pietromiotti.com](https://pietromiotti.com/latest/maya-site/?maya) · [HN discussion](https://news.ycombinator.com/item?id=50452455)

The post is a diary: the author, a Google software engineer, was travelling in Peru in October, wondered what Hiram Bingham would have done with modern tools, and asked a few models. They all said lidar. Peru was badly covered, so he pivoted to the Maya lowlands, where public lidar is abundant. His agents turned 1,200 km² of strips into images and 48 of them walked the images one at a time, filtering hills and sinkholes from platforms and plazas. One hilltop had straight edges, a levelled plaza, an oval pyramid 8–12 m tall, and a hollow that might have been a reservoir. He wrote a report, translated it into Spanish, and emailed INAH. Three days later INAH replied that it had no registered site at those coordinates.

The update at the top of the post, dated 11 November, is the part that matters: the site appears in Estrada-Belli, Canuto, Šprajc and Fernandez-Diaz 2025, on page 14, and the agents missed it while going through the literature. It was not in INAH's register, which is a different claim from "nobody had found it." The author is straightforward about this. He calls it rediscovery rather than discovery.

The thread splits cleanly. Several archaeologists and lidar hobbyists point out that the hard part was never spotting the shapes — the UK lidar map has produced dozens of finds in the same way for years — but the fieldwork, the permits and the excavation capacity. One commenter notes the perverse incentive: publishing coordinates is how you protect a site from development in some countries and how you hand it to looters in others. Another makes the sharper point about the class of claim: an LLM that rediscovers a known thing and reports it with full confidence costs a domain expert a day of verification, and this is now happening in every field at once. The agents did not know they had found something boring. Nobody in the loop did either, until a human with the literature checked.

That is the reusable lesson, and it is not about archaeology. A 48-agent pipeline that reads images well enough to find a pyramid is genuinely impressive. A pipeline that cannot answer "has someone already written this down" is a generator of work for other people.

## Tim Peters has died — 560 points

**560 points** · 56 comments · [discuss.python.org](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) · [HN discussion](https://news.ycombinator.com/item?id=50450488)

Guido van Rossum's announcement is short and does not try to be complete. Tim Peters died on 15 July, at 74. His first contribution to Python was convincing Guido that `int` and `float` should do mixed arithmetic, because that is what users would expect. He wrote the Zen of Python. In 2002 he gave the language Timsort, which Java and Android later adopted after it failed in exactly the ways he had documented.

The comment thread is a memorial from people who were on `comp.lang.python` in the 1990s: the "Timbot" nickname, the `<wink>` and `<0.5 wink>` tags he used to signal a joke, the "channeling Guido" line, SpamBayes, the voting-theory digressions, the Stack Overflow answers that treated a beginner's question as worth answering properly. More than one person notes that they learned numerical methods from his mailing-list posts rather than from a course.

The understated part of Guido's note is the design work. Peters was the person who told people why their idea would not work, in detail, without dismissing them — which is the thing that actually sets a language community's tone, and the thing every current open-source project says it wants and almost none have. Fifty-six comments on a death notice, in a week where a model launch pulled 1,034. Worth noting what the page does with its attention.

## Synaptics ends a Linux driver with a patent threat and an invoice — 477 points

**477 points** · 263 comments · [lwn.net](https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/) · [HN discussion](https://news.ycombinator.com/item?id=50443824)

Mike Lothian owned a Dell dock with a DisplayLink chipset, found the Linux driver crashed constantly, and decided to write a better one. He used his Claude subscription to build Vino, a Rust DRM/KMS driver, posted an RFC to `dri-devel` in June, opened an issue on the EVDI repository asking for help with the DL3 control plane, and emailed Synaptics — which acquired DisplayLink in 2022 — in July. He got no technical help from the company.

On 20 July Synaptics' legal team replied instead. DisplayLink is not an open standard, the protocol and codec are covered by "a substantial portfolio of patents," and a clean-room implementation does not necessarily avoid patent infringement. The demand included a $25,000 charge "to recoup the costs and effort required to create the attached documentation of your infringing acts," plus a deadline. Lothian stopped. Vino will not go upstream: "I just can't afford to defend myself against Synaptics." The company then replied to his pull request on 7 October asking him to update it.

The thread's best contributions are legal, not emotional. A patent is a public disclosure traded for a limited monopoly; reverse-engineering to interoperate is the use the system is supposed to tolerate, which is why firms in this position usually reach for trade secrets and usually lose. Commenters pull the two asserted GB patents and read them: one appears to claim compressed video over a general-purpose transport with demux, decompress and display, which is most of the last thirty years of remote display. And the practical note several people add is that DisplayLink itself is dying anyway — DDR prices have made the chips uneconomic and dock makers are cancelling their DisplayLink portfolios in favour of USB-C with DP alt mode.

So the outcome is a driver that will not exist, for hardware that is on its way out, protected by patents that may not survive a reading. The only party that gained anything is the lawyer.

## Scion returns with a rebadged kei truck capped at 25 mph — 549 points

**549 points** · 389 comments · [theautopian.com](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) · [HN discussion](https://news.ycombinator.com/item?id=50445401)

Toyota retired Scion in 2016 after sales fell roughly 75% from their 2006 peak. It is back as "Scion by Toyota," which the press material calls a "freedom lab" for challenging conventional thinking about mobility. The first production vehicle is the KEI-01, which is a rebadged Toyota Pixis, which is a rebadged Daihatsu Hijet Jumbo Cab, apparently still right-hand drive.

The specs are the whole argument. 660cc engine, CVT, 600-pound payload including passengers, three-way fold-down bed, about 5 feet wide and 11 feet long, 4WD, air conditioning standard. It is certified to low-speed-vehicle standards, which means a top speed under 25 mph and legal only on roads posted below 35 mph. Availability starts in late 2027 as a low-volume fleet pilot. There is no retail plan.

Commenters who actually farm with kei trucks love them and say the same thing the article does: inexpensive, robust, repairable, genuinely useful on gravel and in warehouses. Then they all hit the same wall. A 25 mph cap excludes most of the use cases that would justify owning one — the roads connecting rural towns are 45 and 55, and even the big-box-store run is usually on a 35 mph arterial. The consensus in the thread is that Toyota certified to the cheapest legal category rather than the useful one, and that a 40 mph limit would have made this a different product. Selling a work vehicle nobody can legally drive to work is a strange way to relaunch a brand aimed at young buyers.

## Apple's Harbor app turns Macs into an inference cluster — 500 points

**500 points** · 512 comments · [9to5mac.com](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) · [HN discussion](https://news.ycombinator.com/item?id=50446520)

Leaker Aaron Perris found a Mac app called Harbor in development: it runs open-weight models locally on Apple silicon, keeps data off the cloud, and pools unified memory across two or more Macs connected by Thunderbolt 5 so a cluster can hold a model that no single machine can. Setup is described as automatic discovery, no command line. It is in private preview under the Claris brand — the FileMaker subsidiary Apple resurrected as a name in 2019 — so this is a real product with an org behind it, not a demo.

Treat the marketing claims as unverified. "No infrastructure expertise required" is what every local-inference tool says before its first OOM. What matters is the pooling: Thunderbolt 5 gives you a genuinely fast inter-machine link, and if Apple ships a scheduler that treats a group of Mac Studios as one memory space, the economics change for anyone running open-weight models at scale. One commenter runs the numbers that matter — a high-end Mac Studio at roughly $1,000/month over three years versus about $1,000/month for five developers on a Claude Ultra plan, or ~$10k/week at Sonnet API rates — and concludes that local becomes rational the moment API pricing stops being subsidised.

The sceptical read is that Apple's real product here is hardware sales, and an app that makes four Mac Studios behave like one big GPU is a very efficient way to sell four Mac Studios. That does not make it bad. It does mean the day Apple ships a first-party local inference stack is the day the third-party local-inference stack becomes a feature request.

## Starlink Mini 2 ships without a spec sheet — 498 points

**498 points** · 565 comments · [starlink.com](https://starlink.com/mini-2) · [HN discussion](https://news.ycombinator.com/item?id=50444129)

The product page for the Mini 2 is thin enough that the thread is doing the spec work: a removable battery, which commenters calculate at 71 Wh and about 4.5 hours of runtime, a standard USB-C port instead of the proprietary cable, and a smaller chassis. Power draw is the number people want and the page does not give it.

The conversation is dominated by plan terms, not hardware. SpaceX has changed the Roam tiers so the 100 GB and 300 GB subscriptions no longer work outside North America; international coverage now requires the unlimited tier, and even then it is capped at 30 days at a time with no way to top up. Multiple owners describe buying a Mini specifically for international travel and now leaving it at home. Others describe the opposite: ultramarathon broadcasts with a cameraman on a mountain bike carrying a Mini in a backpack, hard-rock mining rigs sending assay data live instead of waiting days, and rural drivers using one as the only reliable way to reach emergency services. Nobody in the thread is neutral about it. The hardware got better and the service got worse, which is a familiar shape.

## Glasswing's seventh month: 37,966 findings, 217 fixes — 444 points

**444 points** · 216 comments · [vulncheck.com](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) · [HN discussion](https://news.ycombinator.com/item?id=50447074)

VulnCheck has been tracking every vulnerability attributable to Anthropic since Project Glasswing launched in April, using CVE records, GHSAs, kernel commits and Anthropic's own ledger. Seven months in: 442 CVEs, about 0.5% of the 93,450 published this year, and exactly two exploited in the wild. Anthropic's ledger, meanwhile, reports 37,966 findings, of which 7,349 (19.4%) are public and 217 are marked fixed. Since September the project added nearly 12,000 findings and 15 fixes. Duplicates outnumber fixes 7.5 to 1, 419 findings have been withdrawn, and the claimed true-positive rate has risen from 90.8% to 94.2% — a number that goes up while withdrawals and duplicates accumulate faster than fixes.

The counterarguments in the thread are better than the post. The author of Fil-C says he received nine reports from Anthropic, all nine were real bugs, none were false positives, and the test cases were exceptional. An engineer at a large company says the public CVE ledger cannot see the work that matters, because the serious findings are in proprietary codebases that will never get a CVE. And a commenter who claims direct knowledge of the program's structure argues that the ledger covers only the open-source disclosure track, so the fix count mostly measures how much free time volunteer maintainers have.

The honest synthesis is that two things are true. Models are genuinely good at finding bugs — better than the humans who used to do it, in some codebases. And the discovery-to-remediation ratio is 175 to 1, which means the bottleneck moved to triage and nobody has built the triage. The curl maintainer rejecting 19 of 34 reports as not-vulnerabilities is the whole problem in miniature: a 94% true positive rate measured by the sender, against a receiver who is drowning.

## Val Town is winding down — 417 points

**417 points** · 100 comments · [blog.val.town](https://blog.val.town/winding-down) · [HN discussion](https://news.ycombinator.com/item?id=50443427)

The announcement is a paragraph and an apology. Val Town could not compete in cloud computing. Migration guides exist for Cloudflare, Vercel, Netlify and Render, and the post makes the modern argument, which is that LLMs are good at this kind of migration.

The thread fills in what the post does not. Val Town was built on the Deno runtime, whose team joined Cloudflare and will stop maintaining Deno next year — a dependency decision that turned into an existential one. It raised $7M, and a commenter who ran a comparable project (Darklang, $3.5M; Eve, $2M) lays out the structural problem: you cannot start a business in this space without millions, and you get two to three years of seed runway for a product that needs five years of incubation. The code is expected to be open-sourced in February, which is the one part of this that leaves something behind.

The unkind question in the thread — "what is this, actually?" — has an unkind answer. It was a bet that people would rather write small programs against a platform's own primitives than against commodity hosting, and that bet needed a runtime it did not control to stay alive. Vercel and Cloudflare are fine migrations because they are the thing that ate this category.

## AWS ships an emulator for its own APIs — 398 points

**398 points** · 125 comments · [github.com/aws](https://github.com/aws/aws-emulator) · [HN discussion](https://news.ycombinator.com/item?id=50456631)

AWS Emulator is a local emulator of the AWS APIs: no account, no calls to AWS, point your SDK's endpoint at it and test. It runs in server mode for the CLI and any SDK, or embedded in Rust tests with one isolated instance per test and no endpoint or certificate to configure. It publishes fidelity scores per release, tracks gaps in `issues/things-that-do-not-work/`, and says plainly not to use it for production or to test security. It is free; you pay for AWS resources when you deploy there.

The interesting detail comes from a commenter: AWS already models every service in Smithy, generates its clients from it, and appears to have built the emulator from those same specs plus integration testing against the real APIs. That is the difference between this and the existing tools — Floci, Ministack, LocalStack — which implement the commonly used endpoints and skip the rest. If the emulator is generated from the spec, it can be complete in a way none of them are.

The scepticism in the thread is about permanence, not quality. AWS has shipped and abandoned developer tools before, and there is no commitment here to maintain it. The second-order effect is the one worth watching: if `cdk deploy` against an emulator becomes reliable, agentic development gets a closed loop, because an agent can iterate against real API semantics without spending money or leaking credentials. That is the reason AWS built it, and the reason it might actually get maintained.

## SSH keys: hardware-backed, or deleted entirely — 369 points

**369 points** · 134 comments · [gatezh.com](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/) · [HN discussion](https://news.ycombinator.com/item?id=50449748)

Two SSH posts today, arriving at opposite conclusions from the same premise — a key in `~/.ssh` is protected by nothing but file permissions.

The first walks through the native macOS route: `sc_auth create-ctk-identity -l "ssh-MacBook" -k p-256-ne -t bio` creates a P-256 key that never leaves the Secure Enclave and requires Touch ID per signature. What is on disk is a reference that is useless without that specific Mac. The author then abandons it, because the native path is ugly in practice — the key is P-256 rather than Ed25519, and the tooling story is bad — and switches to Secretive, a third-party app doing the same thing with a better prompt. The post carries an explicit 11 November correction, which is a good sign about the author.

The second, at 275 points, is from someone who deleted every SSH key outright and rebuilt around short-lived certificates. Together the two threads make the case that the era of a long-lived private key in a dotfile is ending, and the interesting split is between people who want hardware attestation (Secure Enclave, YubiKey) and people who want keys that expire before they can be copied. Both are correct, and the commenters who point out that neither solves the actual attack — a malicious repo running `npm install` with your agent loaded — are the ones paying attention.

## The Verge asked every TV maker 17 questions. Hisense answered none — 318 points

**318 points** · 208 comments · [theverge.com](https://www.theverge.com/tech/1012372/tv-privacy-acr-questions) · [HN discussion](https://news.ycombinator.com/item?id=50453474)

Seventeen yes-or-no questions, sent to eleven companies, designed so nobody could link to a privacy policy instead of answering. Responses came from Amazon, Apple, Google, LG, Roku, Samsung and TCL. Hisense ignored five attempts at contact. Panasonic, Sony and Vizio answered some questions and declined others.

The answers are more revealing than the refusals. On whether TVs store recorded audio or transcripts, Amazon says no, Samsung says no *on the device* and then confirms that commands and transcripts are stored on secure servers, Google says only if Voice & Audio Activity is enabled, and Apple does not answer directly. On whether they transmit audio, Apple answers with Private Cloud Compute and a random identifier, which is not a yes or a no. The pattern across all seven respondents is that nobody lies outright and nobody gives you a clean sentence when a paragraph of qualifications will do.

The load-bearing detail is not in the questionnaire at all. A Northeastern study found that Vizio kept sending data after an opt-out — Vizio calls it "routine operational data used to support the Vizio experience," not ACR — and that traffic from Samsung and Roku was reduced but not stopped. Opting out of automatic content recognition is the entire remedy the industry offers, and the measurement says the remedy is partial. The Verge did the work here, and the correct response to "we take privacy seriously" is now a packet capture.

## A false smoke alarm nearly took out Jane Street's datacenter — 301 points

**301 points** · 155 comments · [michael.bacarella.com](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) · [HN discussion](https://news.ycombinator.com/item?id=50455394)

A war story from the systems team, and a good one. Jane Street kept its machine room next to the trading floor for two reasons: fear of spies stealing trading strategies, and the wish to be able to shut an out-of-control trading system down by running across the hall and pulling the cables. The culture came from a partner who had served on a nuclear submarine, where you do not trust the automation unless there is a mechanically connected lever you can pull.

The machine room grew into a real datacenter — online UPS, CRAC units, a subterranean diesel generator, ten rows of cabinets — inside 1 New York Plaza. Then contractors cutting into a prep room next door kicked up dust, the smoke alarm fired, and the pre-action sprinkler system charged its pipes. The author's explanation of how those systems work is the best part: sprinkler heads over a machine room are dry until smoke is detected, at which point the pipes pressurise, and what actually triggers the spray is a heat-sensitive plug in each head. So the sequence from false alarm to flooded room is one hot spot away, and the room's own thermal load is what supplies it.

What follows is a sprint to pull power cords before the sprinklers open. The systems team chose to kill their own datacenter rather than let water do it, which is the correct call and also the kind of decision you can only make if you have pre-agreed that the last resort exists.

## Claude gets spreadsheets, whiteboards and a data layer — 275 points

**275 points** · 213 comments · [claude.com](https://claude.com/resources/articles/sheets-whiteboards-data) · [HN discussion](https://news.ycombinator.com/item?id=50443716)

Whiteboards and Sheets ship in beta; Claude Dashboards, launched in beta in October, becomes generally available as Claude Data. All three are on every paid plan. Sheets generate tabs, formulas, formatting and drop-downs from a prompt, show each edit as an outline you can track, and export to `.xlsx` or CSV when you need real Excel. Whiteboards let a team dump notes and have Claude cluster them into themes and owners, and hand the board out to Lucid, Miro or Vani. Claude Data adds certified queries and live sharing on top of the Redshift/BigQuery/ClickHouse connectors.

The strategic point is not any single feature — Google Sheets and Notion have had most of this for a year — but that Anthropic is now competing on where the work lives rather than on the model. Every tool that adds a document surface is trying to stop the user from leaving for the tool where the output is supposed to end up. The "we export to your real tools too" line is the tell: they know where the gravity is, and this is the attempt to create a little of their own.

## The Atlantic on what constant surveillance does to children — 266 points

**266 points** · 301 comments · [theatlantic.com](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) · [HN discussion](https://news.ycombinator.com/item?id=50438480)

The Atlantic piece is paywalled and did not load, so this is from the thread, which is 301 comments of unusually good argument.

The strongest exchange is about what gets lost. One commenter remembers falling asleep on a bus twice as a child, waking up somewhere else, and having to work out how to get home — and says that with a tracker, a parent would have arrived to collect them and they would never have learned that they could solve it. The reply is fair: a payphone and a quarter was the airtag of its era, and adults do not object to 911 existing. Both positions are right, which is why this argument does not resolve. The distinction that does hold up is between safety net and leash: a device that answers "where are they" is not the same as one that answers "why did they stop moving," and only the second one gets checked reflexively.

The bleaker observation, from several people, is that the cohort now being tracked will grow up thinking this is normal and will answer the question "what's wrong with it" with a shrug. That is not a slippery slope, it's just how norms work. The comment worth keeping is the one that points out every cultural prohibition we have was doing this job — the monster in the woods, the rule about strangers — and we strip-mined all of them for entertainment and replaced them with telemetry.

## AMD's Zen 6 splits into two cores that are no longer the same core — 259 points

**259 points** · 111 comments · [chipsandcheese.com](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) · [HN discussion](https://news.ycombinator.com/item?id=50443090)

Chips and Cheese measured Zen 6 and Zen 6c and found the most interesting change of the generation: the dense core is no longer a shrunken version of the classic core. Zen 6c has larger out-of-order structures — reorder buffer 576 → 640, integer register file 288 → 352, vector scheduler 138 → 180, load queue 280 → 330 — while Zen 6 keeps the smaller structures and higher clocks. AMD is specialising: one core for frequency, one for latency tolerance.

The rest is a long list of small, well-chosen fixes. Branch mispredict cost falls from 3.5–4 ns to 3–3.5 ns, a single thread can now use both decode clusters, integer multiply units drop from three to two because AMD decided the third one did not earn its area, VNNI doubles from two units to four (2.71 → 3.88 IPC in their test, which is the quantized-inference path), 256-bit vector loads go from two per cycle to four, and the odd L2 bandwidth behaviour of Zen 5 is fixed at 64 bytes per cycle. L3 latency rises from 47 cycles to 55, but higher clocks hide most of it in nanoseconds.

The layout decision is the one to watch: 12-core CCDs for Zen 6 with 48 MB of L3, 32-core CCDs for Zen 6c with 128 MB, both at 4 MB per core. A 32-core CCD with that much cache per core is a different NUMA story than anything AMD has shipped on AM5, and the thread's repeated question — what is the smallest scheduling unit below a 32-core CCD — has no answer in the article because the article is about the core, not the package. Also: several commenters say the real bottleneck is the I/O die and memory controller, which is why Zen 6's new IOD matters more than any of the above.

## .NET 11 raises the CPU floor and moves async into the runtime — 254 points

**254 points** · 1 comment · [learn.microsoft.com](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-11/runtime) · [HN discussion](https://news.ycombinator.com/item?id=50439284)

**233 points** · 289 comments · [devblogs.microsoft.com](https://devblogs.microsoft.com/dotnet/announcing-dotnet-11/) · [HN discussion](https://news.ycombinator.com/item?id=50442225)

Two .NET 11 posts, and the runtime notes are the substantive one.

The breaking change is the baseline: JIT and AOT minimums move from x86-64-v1 to x86-64-v2 on all three platforms (adding CX16, POPCNT, SSE3, SSSE3, SSE4.1, SSE4.2), and ReadyToRun targets move to x86-64-v3 (adding AVX, AVX2, BMI1/2, F16C, FMA, LZCNT, MOVBE). Arm64 gets LSE as a minimum on Linux and Windows, with R2R at armv8.2-a + RCPC. .NET 11 will refuse to start on hardware below that line. Microsoft's reasoning is maintenance cost and AOT codegen quality, which is honest: supporting a 2013 CPU baseline taxes every optimisation decision. It is also the first time in a while that a .NET release has a real hardware requirement.

The feature that matters is Runtime Async V2, in preview. The compiler stops emitting state-machine classes and the runtime tracks suspension and resumption instead, which gives cleaner stack traces, better debuggability and less overhead. The runtime libraries themselves are already compiled with `runtime-async=on`, so the feature has been exercised at scale rather than in a test suite. Also in C# 15: union types with exhaustiveness checking, closed hierarchies, and collection-expression arguments. A release that raises the floor and moves async into the runtime is a bigger change than the version number suggests.

## Apple closes the Support Community forum — 253 points

**253 points** · 147 comments · [theverge.com](https://www.theverge.com/tech/1031507/apple-community-support-forum-shutting-down) · [HN discussion](https://news.ycombinator.com/item?id=50453555)

The forum goes read-only and then closes on 20 November. The thread's sympathy is for the volunteers — users with tens of thousands of answers and profiles that read like hobbies — who were told abruptly that their archive is being shut.

The less sentimental half of the thread is that the forum was not very good and has not been for years. The dominant result of landing there from a search is a thread from seven years ago titled "this is broken" with no resolution, and nobody from Apple ever replied. One commenter makes the structural point: a product community forum is only as good as the technical level of its users, and once "make an account and post" became something everyone does, the signal went out of general-consumer forums. The remaining good ones are attached to tools that require competence to install.

Apple is almost certainly doing this because the corpus is now training data and moderation liability rather than support. It is not replacing it with anything a human answers. That is the trade: the archive stays up as read-only SEO, the humans leave, and the next person with a broken iPhone gets an AI summary of a seven-year-old thread that never solved the problem.

## Voltage glitching a mining card into an A100 — 229 points

**229 points** · 90 comments · [blog.kate.land](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/) · [HN discussion](https://news.ycombinator.com/item?id=50451903)

The CMP 170HX is an Ethereum mining card sold with 8 or 10 GB of usable framebuffer. It physically contains about 80 or 40 GB of HBM, because it is a GA100 die — the same silicon as an A100 — with features disabled by eFuses to match demand for a cheaper SKU. This post is about un-disabling them.

NVIDIA's fuse controller has 16,384 eFuses in 512 rows, plus a separate "fuseless fuse" region in rows 222–487 that encodes option words as JTAG-style records. That region is the hole: FF records can be overwritten by writing new rows, so an option word can be changed without physically blowing anything — except that under normal conditions you are strictly prevented from performing FF fuse blows. The attack is voltage fault injection: glitch the die at the right moment so the fuse controller accepts FF writes, then replay records that clear the floorsweep masks. The writeup is unusually complete about the search — all-fuses-read-as-zero, RIR read disruption, and the timing window that actually works.

The result is the interesting part. Framebuffer goes to 64–80 GB, SMs from 70 to 120–128, PCIe from gen 1 (or 2, after software unlock) to gen 4, and NVLink, ECC, MIG and five NVDEC engines all come back. That is an A100-class part recovered from a mining card, with HBM that NVIDIA physically shipped and then soldered shut. Whether it is worth the effort depends on used CMP prices, but as a demonstration of what "product segmentation" means at the silicon level, it is hard to beat: the same die, the same memory, and a fuse table deciding which one you are allowed to have.

## A linear program does what Astra did in eight hours — 209 points

**209 points** · 31 comments · [nathan.rs](https://nathan.rs/posts/weight-space-lp/) · [HN discussion](https://news.ycombinator.com/item?id=50452655)

MIT CSAIL's "Sparks of Weight-Space Programming" showed GPT-6 Astra diagnosing which game a small network had been trained on, writing weights from scratch for a described game, and improving Qwen3.5-0.8B on MATH-500 from 7.9% to 48.1% by changing 0.016% of its weights. Nathan Barry looked at the edit and noticed what Astra had actually done: most of its search was solving a linear program by trial and error, over 8 hours and 28 forward passes.

The diagnosis of the underlying bug is clean. Small reasoning models loop — Qwen3.5-0.8B burns the 32,768-token limit on 93% of MATH-500 problems without producing an answer — and the loop shows up as a consistent directional shift in the residual stream. Astra's fix was to edit two layers so what they add points the opposite way. Choosing that steering direction is an LP: find the vector that best separates productive tokens from looping ones. Two LP solves, about a minute each, reproduce the effect with eight times fewer changed weights. IFEval goes 21% → 62.3%; Gemma 3 270M, which rarely loops, cannot be improved this way at all.

The honest read on weight-space programming after this post is that the impressive capability is real and part of it is not reasoning. Astra found a direction that exists; a convex solver finds the same direction faster. What remains genuinely novel is the diagnosis — noticing that a looping model's residual stream has a consistent direction is the insight, and no LP routine was going to hand that over.

---

## Also new, below the sections

- **[Show HN: Get your coding agent off ~2019 JavaScript](https://github.com/GoogleChrome/modern-web-guidance)** ([422 points](https://github.com/GoogleChrome/modern-web-guidance), 140 comments) — GoogleChrome ships a guidance file that tells coding agents to use modern primitives instead of whatever pattern was in their training data. The premise is right: agents write `document.querySelector` and jQuery-shaped code because that is what the corpus contains, and a rules file is a cheap correction. The uncomfortable part is that a browser vendor is now publishing instructions for models, which is a new kind of web standard.
- **[Six Math Essentials](https://teorth.github.io/tao-web/six-math-essentials.html)** ([323 points](https://teorth.github.io/tao-web/six-math-essentials.html), 58 comments) — Terence Tao's book page, generated from `github.com/teorth/tao-web` with AI assistance and an errata section at the bottom. The page itself is the argument: a working mathematician maintaining his own site as structured data.
- **[A great old-timey game-programming hack (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html)** ([250 points](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html), 56 comments) — a side-scroller that was too slow on 1980s hardware, and the genuinely insane fix. Resurfaced from 2013; the thread is people rediscovering it.
- **[Show HN: Valencia in an isometric Sim City view](https://tinyvalencia.com/)** ([244 points](https://tinyvalencia.com/), 61 comments) — a city rendered as a playable isometric map. One of those Show HNs where the craft is the point.
- **[Hyper-Realistic Sand with WebGL2](https://av.github.io/safe-sand/)** ([241 points](https://av.github.io/safe-sand/), 57 comments) — grains simulated on the GPU in real units with per-grain friction and mineral colour, a height field for pile slopes, granular audio synthesised from how much sand is moving, and an Android app with ads. The technical writeup is better than the demo.
- **[Process Explorer for macOS](https://github.com/microsoft/Procexp-Mac)** ([230 points](https://github.com/microsoft/Procexp-Mac), 76 comments) — Microsoft porting Sysinternals' Procexp to macOS is a strange sentence and a welcome one. The interesting question in the thread is how much of it can work without kernel extensions.
- **[Queens Public Library under ransomware attack](https://connect.queenslibrary.org/)** ([207 points](https://connect.queenslibrary.org/), 114 comments) — website, app, public computers and digital media down; Wi-Fi, check-out machines and seven branches' computers restored. Renewals unavailable. Public libraries keep being the softest target with the least budget to fix it.

## Still on the page

Nineteen repeats. Two of them moved more than 300 points, and both are stories about things ending: a home-automation essay that found a much larger audience on day two, and the `.name` reversal after ICANN's letter.

| Story | Last | Nov 11 |
|---|---|---|
| [Foldable Flight: paper airplanes](https://www.foldableflight.com) | 1,173 (11-10) | 1,239 (+66) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 469 (11-10) | 1,126 (+657) |
| [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) | 494 (11-10) | 916 (+422) |
| [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 859 (11-10) | 908 (+49) |
| [Is Opus 5.5 nerfed?](https://twitter.com/shanemelaugh/status/2119192075505893695) | 810 (11-10) | 820 (+10) |
| [Google Gemini routes personal Drive files to human reviewers](https://github.com/thisisme6598/gemini_files/) | 706 (11-10) | 732 (+26) |
| [USPS ZIP Code boundary polygons](https://postalpro.usps.com/zcb) | 716 (11-10) | 731 (+15) |
| [Amazon replaced Sonnet with a 4B decision model](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 668 (11-10) | 717 (+49) |
| [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 530 (11-10) | 668 (+138) |
| [AI usage generates a fragile codebase](https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/) | 269 (11-10) | 625 (+356) |
| [Payments Canada Real-Time Rail](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy) | 578 (11-10) | 583 (+5) |
| [e-means: k-means in one-tenth the epochs](https://e-means.github.io/) | 492 (11-10) | 507 (+15) |
| [Blender 5.3 with Gaussian splats](https://www.blender.org/download/releases/5-3/) | 346 (11-10) | 485 (+139) |
| [Every satellite that passed over a place](https://www.watched.earth) | 444 (11-10) | 479 (+35) |
| [Muse Ember](https://research.meta.ai/blog/muse-ember) | 323 (11-10) | 332 (+9) |
| [Ableton Live 13](https://www.ableton.com/en/live/) | 223 (11-10) | 328 (+105) |
| [Your TV can see through walls (2025)](https://maurycyz.com/projects/fading/) | 256 (11-10) | 274 (+18) |
| [Horrible public key tricks](https://maurycyz.com/projects/badcert/) | 236 (11-10) | 253 (+17) |
| [The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough) | 202 (11-10) | 210 (+8) |

Four movers worth naming. Smart home automation went 469 → 1,126 (+657), which is what happens when a post about local control escapes the home-automation audience into a general one — the essay's eleven rules are really an argument against cloud dependencies, and that argument has a bigger constituency every month. The `.name` story added 422 after the ICANN letter. AI-generated codebases rotting added 356, and the thread that grew with it is more interesting than the post: half the commenters say the four failure modes are real and half say the piece was written a year ago and the models have changed. Paper airplanes added 66 to stay first on the page, which it has now done for three days.

Nothing on the table lost points. That is not a sign of a healthy page so much as a sign that HN's decay curve is slow enough for a story to sit at the top for a week if it keeps getting upvotes from people who have not seen it.

## Throughline

Discovery got cheap this year and verification did not.

That is the shape of the top of the page. Google's agents found a Maya site in 72 hours and the correction landed within a day: the site was in a 2025 paper, the agents missed it, and the only reason anyone knows is that the author checked. Glasswing's ledger has 37,966 findings and 217 fixes, with duplicates outnumbering repairs seven to one and the sender's own true-positive rate rising as withdrawals accumulate. The AI-codebase essay that gained 356 points argues that agents produce code nobody can maintain, and the thread cannot agree. Three different domains, one mechanism: a system that produces candidate findings faster than any human can adjudicate them, reporting confidence it has not earned. The archaeology case is the cleanest because the ground truth arrived in a day — a pyramid is either in the paper or it is not. The vulnerabilities and the codebases do not have that luxury, and the bill is being paid by maintainers.

The second thread is withdrawal. Verisign tried to delete 22,000 `.name` domains and backed down only after ICANN intervened. Val Town is shutting down, and the reason includes a runtime it did not control going away. Apple is closing a support forum whose archive was built by volunteers. Synaptics ended a Linux driver with a patent threat and a $25,000 invoice. None of these are the same kind of event, but the shape repeats: something small and useful sits on infrastructure that belongs to someone with a different business, and when the two interests diverge, the small thing loses. The `.name` reversal is the rare case where the small thing had a regulator.

The third is that local compute is getting real, and the pricing tells you why. Apple is building a clustering app for Mac Studios, Starlink is shipping better hardware with worse plans, AMD is splitting one core into two specialised ones, and someone recovered an A100 from a mining card by glitching a fuse controller. The thread that ties it together is the one running the arithmetic on Claude API costs against a Mac Studio's three-year cost — because the moment inference is expensive enough per token, the hardware you already own becomes the cheaper option, and everything above it gets rebuilt.
