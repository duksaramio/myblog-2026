---
title: "Hacker News Front Page Roundup — November 2, 2026"
pubDate: 2026-11-02
description: "Seventy-seven stories cleared 200 points and only twenty-two are new. The new ones are all about checks: a distro's patch promise against its own tracker, Postgres' release date against a flood of LLM-found bugs, and an IPO filing that books its own usage at retail."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Seventy-seven stories cleared 200 points in today's scan of the top 220. Twenty-two are new. The other fifty-five are things I have already written about this week, and the page has frozen again — HackerTube added 738 points overnight and almost everything else moved by single digits.

The new material has a shape though. Nearly every new story is a claim meeting its check: Ubuntu's marketing copy against its own vulnerability tracker, PostgreSQL's release calendar against a flood of machine-found bugs, Anthropic's IPO filing against the difference between list price and cost, a mathematics profession against a paper dump it did not write, a supermarket refrigeration fleet against the internet, and a frontier model against raw floating-point weights.

## WTF Ubuntu? — 1,084 points

**1,084 points** · 528 comments · [chalmovsky.com](https://chalmovsky.com/posts/wtf-ubuntu) · [HN discussion](https://news.ycombinator.com/item?id=50337608)

I wrote about CVE-2026-98432 yesterday — a use-after-free in the kernel's IPv4 TCP handshake, present since 2016, remotely reachable, CVSS 9.8 by the kernel CNA's count and 8.1 by four distros. Debian shipped a fix on October 16. Today's story is the follow-up: as of 14:48 UTC on November 2, Ubuntu's own tracker listed every supported release, LTS included, as "Vulnerable," and no Ubuntu Security Notice had been published. The author's argument is not technical. It is that Canonical sells "timely patches for critical vulnerabilities" as a subscription product and did not deliver one for a nine-point-eight.

The post is a rant, and it is missing the things a useful post would have: which releases, what the exposure actually is, what workaround he used. Some of that turned up in the thread. A commenter notes the fixed kernels exist in the `-proposed` pockets for each LTS and can be pulled with `apt-get -t`, and that one LTS (26.04) did get the kernel into updates/security on October 28. Another points out that Ubuntu's incident page rates the bug "High" rather than "Critical," and that the linked "why this priority?" explanation says only "See ubuntu cvss score" — a placeholder sentence with no period on it, still live.

Two things are worth separating. One: Ubuntu's patch latency is real, documented, and worse than the volunteer distros it competes with on the exact axis it charges money for. Two: the severity fight is unresolved. EPSS puts exploitation probability under 1%, most advisories describe a crash or denial of service, and Anthropic is the only party claiming a working root exploit. Both can be true. A vendor that publishes a security guarantee should not need a front-page thread to explain which of its releases is patched.

## MIT CSAIL says GPT-6 Astra can read and edit weights directly — 998 points

**998 points** · 309 comments · [rikiyat.github.io](https://rikiyat.github.io/blog/weight-space-programming/) · [HN discussion](https://news.ycombinator.com/item?id=50341174)

Rikiya Takehi, Jayden Teoh, Alex Zhang and Omar Khattab published "Sparks of Weight-Space Programming" today. The claims: Astra reads 17,253 raw weights and identifies which game a network was trained to play with 99% confidence; it edits 3.5% of a policy's weights in one shot to turn a 0% success rate into 100%; and it lifts Qwen3.5-0.8B from 7.9% to 48.1% on MATH-500 by rewriting 0.016% of the parameters, with no gradients and no training loop, and the fix generalizes to IFEval out of the box.

I spent the morning doing a forensic teardown of the paper, the 1,125-turn prompt archive and the evaluation scripts, and that post is [here](/blog/2026-11-02-sparks-of-weight-space-programming-gpt-6-astra-neural-compiler-creativity-deep-dive/). The short version: the demos are real and the mechanism is the interesting part — Astra locates a looping direction written by the MLPs at layers 15 and 19 and subtracts it from 64 output columns, which is surgery no optimizer would perform. The open question is not whether the edits work but whether "reading weights" scales past toy networks, where superposition hasn't yet smeared each feature across thousands of directions.

The thread splits the way you'd expect. Half the commenters are shaken. The other half argue this isn't emergent at all — that OpenAI trained on weight data specifically to buy a recursive-self-improvement loop, and the ability will turn out to be pattern-matching on the formats it saw. Both readings are consistent with the paper. Neither is settled by it.

## Postgres 19 is late, and it's AI's fault — 795 points

**795 points** · 472 comments · [rhaas.blogspot.com](https://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html) · [HN discussion](https://news.ycombinator.com/item?id=50312408)

Robert Haas on why PostgreSQL 19 will miss its usual mid-September-to-mid-October window. The numbers he pulls are the whole argument. Comparing April 8 (feature freeze) to September 25 across two years: commits to the in-progress release's stable branch went from 724 to 1,169, and commits back-patched to at least one earlier release went from 248 to 433 — a 74% jump. Three large features were reverted late in the beta: `UPDATE/DELETE ... FOR PORTION OF`, SQL property graph queries, and `ALTER TABLE ... MERGE/SPLIT PARTITION`, all pulled between August 27 and September 15.

Haas' explanation is that the bug supply curve changed and the review capacity didn't. LLMs make it cheap for anybody on the internet to find a 25-year-old defect in a 30-year-old C codebase; they make drafting the fix somewhat cheaper; they do nothing for the committer who has to verify a patch against PostgreSQL's standards. So fixes eat the review time that would have gone into deciding what ships, and the release slips. His own master-branch figures don't quite cooperate — he reports 1,037 commits in 2025 against 1,443 in 2026 in the same window, then says the master count "declined slightly" — which is the kind of sentence you write when you're reasoning in public rather than from a spreadsheet. The stable-branch numbers carry the claim on their own.

The thread's best contribution is a counterweight: if every bug will be found quickly and cheaply, the incentive shifts from shipping to auditing, and a project can grind permanently in review. Another commenter did a summer of AI-assisted bug hunting in Postgres and came away with serialization anomalies, foreign-key integrity holes and planner correctness bugs — "the list got so long that I had to triage." I covered this story as a 217-point also-ran on October 18. It more than tripled. That is the correct direction for this particular piece of news.

## Ask HN: Which TV do you recommend for privacy? — 672 points

**672 points** · 802 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50328896) · [HN discussion](https://news.ycombinator.com/item?id=50328896)

A reader wants a 60–80", 4K, 60Hz panel that does nothing but display an Apple TV, and is willing to pay a premium. The answer, across 802 comments, is that nobody sells it. There is no dumb TV above 55 inches.

So people are doing three things instead. Root an LG OLED, install the homebrew Glasshouse package and turn off telemetry — with the caveat that LG closed the rooting vulnerability, so you need firmware older than 43.21.84 (released 2026-10-10) and the window is closing. Buy a commercial signage display: the Samsung QB55C-N, a 55" 4K HDR panel with no Wi-Fi at all, is $1,050 at B&H and has three HDMI inputs. Or open the back and unplug the wireless module, which voids the warranty.

The tell is that all three answers are about hardware the vendor did not intend you to use this way. The premium the asker offered is not available as a product; it's only available as labor. Every "smart" feature on these panels is a data-collection surface that the buyer cannot decline at purchase, so the market has quietly split into people who root their televisions and people who don't know they should.

## OccupySaaS wants to rebuild the platforms that laid them off — 480 points

**480 points** · 299 comments · [occupysaas.com](https://occupysaas.com/) · [HN discussion](https://news.ycombinator.com/item?id=50331402)

"OccupySaaS" launched in October: laid-off engineers using AI to build clean-room, Apache-2.0, drop-in replacements for the SaaS platforms their former employers sold. The method section is more disciplined than the slogan suggests. Public API docs, open standards and published SDK behaviour become a written spec. Spec writers and code builders are firewalled from each other, with a `CLEAN_ROOM.md` in every repo and provenance recorded per fixture. AI agents implement from the spec, contracts first (`openapi.yaml`), tests before merge. Compatibility is proved by running the vendor's own public client SDK against the new server — if existing code doesn't work unchanged, it isn't done.

Two releases so far: ZeroAuthy, a Go identity server that speaks Auth0's API, and Sales Compel, a Go/Postgres/Vue Salesforce replacement. Both are early, both are thin.

The skepticism writes itself. Compatibility with Salesforce is not an API surface; it's twenty years of undocumented behaviour, and the clean-room rule means the team cannot look at the one thing that would tell them what they're missing. Yesterday's front page already ran the experiment on a smaller scale: HackerBooks cloned a two-thousand-point project in a day, because the code was never the moat. The thread made the sharper point twice — several commenters noted that the people protesting lock-in are the people who built it, and that the "S" everyone pays for is Service, not Software. A protest that ships a competitor to a product nobody loves is not nothing. But a compatibility lab is a warranty, and warranties cost money the movement doesn't have.

## Mathematics has changed. Let's act like it — 375 points

**375 points** · 487 comments · [terrytao.wordpress.com](https://terrytao.wordpress.com/2026/11/01/mathematics-has-changed-lets-act-like-it/) · [HN discussion](https://news.ycombinator.com/item?id=50328251)

A guest post by Frank Calegari on Terence Tao's blog, written after OpenAI released more than 700 research papers on October 6. Calegari's position is that the papers are frequently atrocious — badly written, attribution-violating, occasionally wrong — and that this is not the emergency. The emergency is a profession reacting as if its subject were being hollowed out. Hugo Duminil-Copin's lament is quoted in full: not one of the major open problems he has publicly named in his career was left untouched, "not all of them, not all at once, not with such nonchalance."

Calegari's counterexample is the classification of finite simple groups: Gorenstein announced the program in 1972, the classification was declared in 1983, and the quasithin case wasn't finished until two decades later — and the field's famous problem disappearing cooled interest in finite group theory for a generation, while rich questions (Conway's favourite: why does the Monster exist?) stayed open. His conclusion is that mathematicians control hiring, publishing and training in a way they do not control trillion-dollar labs, and that effort is better spent there. Tao notes in brackets that the post was converted from another file format using AI.

The comment thread is the best argument I've read against him, and it isn't about capability. It's that "doing it" is the point — a writer who wants to write, a programmer who likes to write software, and a mathematician who chose the subject because proving things is the pleasure. Calegari's answer, that the profession had already narrowed itself into narrow technical expertise and can now be broad again, is a real answer but not a satisfying one. Both positions assume the field survives the transition. Only one of them assumes the people in it do.

## Show HN: Subvocal — silent speech input on glasses — 357 points

**357 points** · 223 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50340088) · [HN discussion](https://news.ycombinator.com/item?id=50340088)

Two Georgia Tech CS students, Aarush and Arnav, built silent-speech glasses at TreeHacks in February with EMG electrodes taped to a face. That failed for the reasons you'd guess — sweat, interference, placement, and nobody wants electrodes on their face — so they moved to RF. The glasses emit radio waves that pass through the face and are modulated by the tongue, lips and soft palate; foundation models decode the perturbation to text at speech speed. No lips required: with your mouth closed it still works, they say, because the RF can see inside.

The engineering story is the interesting part: a very low-noise RF front end, antennas placed so their fields overlap the articulators maximally, and two failed attempts (antennas taped to the face, then a head rig) before simulation-driven glasses. The commercial story is that the homepage does not say "smart glasses" anywhere, which multiple commenters flagged. The privacy objection is the one they have to answer: Google reportedly considered this exact sensing for phones and backed off because it can infer state you never agreed to broadcast. The team says nothing about where inference runs or whether it works offline. For a device whose entire pitch is that nobody can hear you, those are the load-bearing questions.

## American workers' share of output hits the lowest ever recorded — 338 points

**338 points** · 205 comments · [fortune.com](https://fortune.com/article/why-did-us-workers-just-take-home-smallest-share-of-capital-since-1947-lowest-ever-recorded/) · [HN discussion](https://news.ycombinator.com/item?id=50330939)

BLS labor share — the portion of output paid out as wages and salary — fell to 52.8% in the second quarter, the lowest since the series began in 1947, down from 53.6% the quarter before and against a decade average of about 55.6%. Fortune's framing is that this happened while Fortune 500 profits hit a record $2.1 trillion and GDP grew 3.4%. The labor data around it is weak in the way that matters: unemployment 4.2%, 584,000 jobs added in 2025 against 2 million in 2024, and 29,000 added in September against projections of roughly three times that.

The temptation is to attribute all of it to AI. Resist that. Labor share has been sliding since roughly 2000, through periods with no language models, and the measure excludes proprietor income, which shifts when work is reclassified. What's new is the pairing: capital expenditure on compute is now large enough to show up in the denominator, and the productivity gains land in margins rather than payroll. A commenter makes the cleaner version of the point — productivity costs more per worker than ever, so gains accrue to capital outlays rather than labor improvement.

The forecasts in the piece are worth reading as forecasts: Goldman estimates AI automation could touch 25% of work hours, with a 15% productivity increase displacing 6–7% of jobs and a peak of one million additional unemployed; Wharton projects a 1.5% GDP bump by 2035; McKinsey finds 80% of employees say AI makes them faster at specific tasks and 37% of companies see any profit impact. That last pair is the honest summary of the whole AI-productivity argument in two numbers.

## Show HN: Wikihack — HackerTube, but for Wikipedia — 327 points

**327 points** · 100 comments · [wikihack.netlify.app](https://wikihack.netlify.app) · [HN discussion](https://news.ycombinator.com/item?id=50333339)

The third clone in four days: a front end over the Wikipedia articles Hacker News comments link to, ordered by the karma of the people who posted them. The site is a client-rendered app that returned an empty shell to every extractor I tried, so I am going on the title and the thread.

The thread is more useful than the app. Someone points at the public BigQuery dump of the HN corpus and its ClickHouse mirror, both updated in real time — the infrastructure for this class of project now exists and is free. Someone else notes they built the Wikipedia version of this in September for HN's top pages. And the top complaint is that the site hijacks the scroll wheel and hides the scrollbar, which is the sort of detail that decides whether a Show HN gets used.

The pattern is the story. HackerTube aggregated video recommendations, HackerBooks did books, Wikihack does articles — each one reading the same comment corpus and rendering it in a different medium. When three people independently rebuild your website from your public comments in a weekend, the comments were the product the whole time.

## Europe's supermarket freezers, attacked again — 315 points

**315 points** · 367 comments · [theguardian.com](https://www.theguardian.com/world/2026/nov/02/supermarket-freezers-across-europe-hit-by-second-suspected-cyber-attack) · [HN discussion](https://news.ycombinator.com/item?id=50335615)

A month after hackers pushed cooling units in as many as 700 French supermarkets to 50°C and caused tens of millions of euros of damage, the same thing happened across at least seven countries overnight: Belgium, Estonia, Ireland, Finland, Luxembourg, the Netherlands and Sweden. Temperatures hit 50°C again. Sweden's Coop had six shops hit; an ICA store in Sjöbo posted that its fridges had been set to 50°C, and a Stockholm shop said its freezers were destroyed by a 2am attack. Ahold Delhaize reported dozens of Belgian and Luxembourg stores. Carrefour Belgium had disruption in about 15 of 700 shops; Intermarché 15, Colruyt 5, Spar 5. Ireland's SuperValu had 13 of 223 stores affected, all on one specific refrigeration model.

The mechanism matters more than the count. Sabcobel, which runs Delhaize's refrigeration, told a Belgian paper it started mobilising technicians at 1am and that the units' evaporators were switched into defrost mode — an attacker with access to the controller doing something the controller is designed to do. Estonia's refrigeration supplier said attackers reached a computer controlling the system and set 50°C, responded to within minutes. Sweden's cyber chief says the country has "quite a lot of exposed operational technology devices."

The detail that should end the argument about whether this was foreseeable: a commenter quotes Dutch coverage saying Danfoss advised its Dutch clients on October 13 to disconnect their systems from the internet after the French attack, and that most stores acted. Two weeks of warning, and the second wave still arrived. Rural stores on 4G uplinks appear to be over-represented, which suggests the exposure is not exotic ICS equipment but consumer-grade routers glued to industrial controllers by installers who had no other option.

## Show HN: OmniDiff — content-aware diffing in Rust — 306 points

**306 points** · 94 comments · [github.com/ivkovic/omnidiff](https://github.com/ivankovic/omnidiff) · [HN discussion](https://news.ycombinator.com/item?id=50325253)

A difftool that parses files by type — 1,528 commits, tree-sitter grammars compiled from C, rustc 1.92 or later, brew and a signed apt repo. The claims are specific: 99.95% of code changes handled robustly, 98.8% diffed with content-specific algorithms, under 100ms, and a per-type accuracy table where code gets 98% perfect / 70% near-perfect / 92% accurate, pictures 96/69/91, cursors 100/85/100, fonts 95/82/100, archives 88/87/87, message catalogs 100/83/83.

The honest disclosure is right there in the table: PDFs score 57% on robustness and the README says the PDF sample has fewer than ten judged test cases. Numbers from a corpus you built are upper bounds, not measurements. Also worth noticing — "opensource" in the headline, but the repo ships both a `LICENSE` and a `LICENSE-COMMERCIAL`, so check which one covers your use before it lands in CI. None of that makes it less useful; diffing an OpenDocument file or a compiled translation catalog in a terminal is a real gap, and difftastic never solved it.

## Bones may release proteins that slow aging — 303 points

**303 points** · 119 comments · [science.org](https://www.science.org/content/article/bones-may-release-proteins-slow-aging-and-extend-life-span) · [HN discussion](https://news.ycombinator.com/item?id=50331957)

Published in Cell Metabolism and reported by Science on October 30: mechanical strain on the skeleton — the pushing, pulling and twisting of ordinary movement — triggers osteocytes, the force-sensing bone cells, to secrete antiaging factors. The team, led by bone biologist Xiaochun Bai at Southern Medical University, extended mouse lifespan by nearly three months by gently squeezing their leg bones, which the paper equates to about nine human years. Old mice whose leg bones were loaded looked markedly younger than controls.

Bai's framing is the useful part: "Bone is not just a passive scaffold; it is an active, mechanically responsive organ that helps set the pace of aging throughout the body." That reframes osteoporosis as a systems problem and gives exercise a mechanism beyond "it's good for you."

The caveats are load-bearing and the piece itself states them: mice, and the findings are not "a demonstration of a new antiaging treatment for people." The comment thread, sensibly, mostly said: lift. Every other study already says that, and this one adds a pathway rather than an intervention. The genuinely interesting follow-up — whether vibration, which bone also responds to, can substitute for loading — appears only as a question in the thread.

## If you love a website, back it up — 265 points

**265 points** · 64 comments · [blog.mistys-internet.website](https://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/) · [HN discussion](https://news.ycombinator.com/item?id=50336518)

The author works in web archiving, and lost a fansite for a 2000s anime toy line — online unchanged since 2005 — which is now a domain serving gambling ads. The post is the apology and the tutorial: WARC files, the tools that write them, how to archive a site so the links and images still work, and a demo where an entire archived website is embedded in the blog post and clickable.

What makes it worth reading is the argument about agency. Archiving is treated as something the Internet Archive does to you, if you're lucky, rather than something you can do in ten minutes to a site you care about. The failure mode isn't technical difficulty. It's that nobody thinks it's their job until the domain changes hands.

## Show HN: Outcrop — geological maps in augmented reality — 254 points

**254 points** · 54 comments · [outcrop.rocks](https://outcrop.rocks/) · [HN discussion](https://news.ycombinator.com/item?id=50290533)

Point a phone at a canyon wall or a road cut and the geologic map is drawn over the landscape, with the rock in the centre identified by name, age and composition. Data comes from Macrostrat's bedrock and fault maps plus USGS quaternary layers, and where a stratigraphic column exists you can see the layers under your feet, including the gaps in the record and the fossils in them. Paleogeography uses Christopher Scotese's PALEOMAP reconstructions, so you can watch plate tectonics carry a rock to where it is now. Free on both app stores, with area downloads that work offline.

It's a good app with an obvious ancestor — the same team's Flyover Country, which did this for aeroplane windows. The reason it belongs on the front page is that it's a rare example of public scientific data being turned into something a non-specialist can use in the field without a lookup table, and it doesn't pretend the coverage is uniform: Macrostrat maps are more detailed in some places than others, and the app says so.

## A 60-second power-grid wobble, explained — 251 points

**251 points** · 107 comments · [fz-juelich.de](https://www.fz-juelich.de/en/news/archive/press-release/2026/mystery-of-60-second-fluctuations-in-power-grids-solved) · [HN discussion](https://news.ycombinator.com/item?id=50315217)

Tennet, Germany's largest transmission operator, had watched grid frequency dip briefly every 60 seconds for years. Not dangerous, but measurably regular and unexplained. A team led by Dirk Witthaut at Forschungszentrum Jülich, with Cologne and KIT, traced it to grid-scale battery storage systems checking their state of charge every minute — thousands of devices doing the same thing on the same clock, producing a measurable demand spike, which among other things wears turbines. Published in Nature Energy, and it turns out to be global rather than European.

This is a nice piece of instrumentation detective work, and it's also a warning about how the grid's new load behaves. A single battery checking its charge is nothing. A million devices on a common timer is a periodic signal you can measure from the transmission operator's desk. As demand response, EV charging and storage all get scheduled by software that likes round intervals, the aggregate will keep developing rhythms nobody designed — and the operators will keep discovering them years later, from the frequency trace.

## Anthropic's internal AI use, at retail prices, now exceeds its payroll — 229 points

**229 points** · 177 comments · [businessinsider.com](https://www.businessinsider.com/anthropic-claude-internal-ai-use-exceeds-employee-pay-tokens-2026-11) · [HN discussion](https://news.ycombinator.com/item?id=50339494)

From the S-1, pages 187–188: the value of Anthropic's own internal Claude usage at list prices crossed its monthly employee compensation — excluding stock — in April, and grew more than 250-fold between January and September. More than 90% of the code added to its software in September was written by Claude. The article is careful about the distinction that matters: Anthropic is not spending more cash on AI than on salaries. It is valuing its own consumption at the prices it charges customers.

That accounting choice does a lot of work in a document whose audience is public-market investors. Internal usage has no revenue, no cash cost at the margin, and no external price discovery — booking it at list price produces a number that makes the company look like its own best customer. A commenter makes the obvious objection: any other company with internal servers would measure internal usage at cost. Another points out the arithmetic that doesn't close — headcount has roughly doubled year over year, most of it engineers, and Claude writes 90% of the code, so what is everyone doing? The answer may be that list-price valuation and headcount growth are both true and neither tells you about productivity.

## Frontier Airlines looks breached, and the phish proves it — 218 points

**218 points** · 86 comments · [reddit.com](https://www.reddit.com/r/frontierairlines/comments/1xl20e8/psa_email_scam/) · [HN discussion](https://news.ycombinator.com/item?id=50327266)

A Reddit PSA about Frontier emails that address customers by name and include a working booking confirmation number. The consensus in both threads is that Frontier was breached and is calling it phishing: the airline's own phishing-awareness page says it never emails customers asking for reservation or payment details. The strongest evidence isn't the email copy — it's the confirmation number. Randomised booking references are not guessable, and an attacker who has one has a row from the reservations database.

Frontier had a ransomware intrusion between May 12 and June 3 this year, per the plaintiffs' firms tracking the resulting litigation. That timeline is the point. The breach notification cycle ends long before the data's useful life does: names plus a real confirmation number is a far better lure than anything a commodity phishing kit produces, and it will keep working for years. The comments are mostly people noting they already had Frontier in the spam folder, which is one way to solve it.

## Anthropic's amended S-1: $17B in Q3, $895B committed — 216 points

**216 points** · 233 comments · [cnbc.com](https://www.cnbc.com/2026/11/02/anthropic-ant-s-1-quarter-financials.html) · [HN discussion](https://news.ycombinator.com/item?id=50337439)

The amended filing fills in the quarter the original omitted. Nine-month revenue to September 30 was $33.24 billion, up roughly 1,200% year over year. Q3 alone was about $17 billion, up 1,127% year over year — and up 47% quarter over quarter, against 144% in Q2 and 132% in Q1. Net loss was $23.29 billion for the quarter and $104 billion for the nine months, most of it from the change in fair value of convertible notes and derivative liabilities rather than operations.

The number that matters is not revenue. It's the $895.4 billion of purchase commitments and lease agreements, "substantially all of which is related to compute and infrastructure," against $14.4 billion of compute and infrastructure expense for the nine months, itself up 329%. That is a company contracting for decades of capacity on the strength of a revenue curve that just decelerated by two thirds in a single quarter.

The thread does the valuation math out loud and it's brutal: at a $2 trillion valuation, a normal market return requires roughly $120 billion of annual profit by 2030 — $400 billion of revenue at 30% net margins. A commenter's summary of the sequential numbers is the sharpest line in either thread: operating margin went from 8% to negative, and compute costs grew 77% quarter over quarter while revenue grew 47%. Growth stories can survive that. Growth stories that have already committed $895 billion to the input cannot, if the curve bends the wrong way for two more quarters.

## RAMBO: reading secrets out of RAM with radio — 215 points

**215 points** · 102 comments · [arxiv.org](https://arxiv.org/abs/2409.02292) · [HN discussion](https://news.ycombinator.com/item?id=50322022)

Mordechai Guri's paper on generating radio signals from memory buses so that malware on an air-gapped machine can transmit keystrokes, files and keys to a software-defined radio nearby: 1,000 bits per second from software alone, no transmitter hardware, decoded back to binary at the antenna.

Note the date: submitted September 2024, accepted at the 2023 Nordic Conference on Secure IT Systems. This is a two-year-old paper that the front page rediscovered today, and reading it as news would be a mistake. Read it as a demonstration instead. The practical objections are all in the thread: the attack needs malware executing on the machine and an SDR within about seven metres with line of sight, at which point you could probably just take the disk. But air-gap assumptions are load-bearing in a lot of security architecture, and every one of these channels — power line, fan noise, RAM radio, thermal — chips at the claim that isolation is a property rather than a practice.

## Radiaverse: a crowdsourced radiation map — 205 points

**205 points** · 55 comments · [radiaverse.com](https://radiaverse.com/) · [HN discussion](https://news.ycombinator.com/item?id=50280131)

Owners of RadiaCode detectors publish their walks, drives and flights, and the site turns the tracks into a shared dose-rate map: 50.1 million measurement points, 20,371 tracks, 1,141 described areas, 2,713 contributors. Anybody can browse; an account is needed to publish, and publishing can be anonymous. Areas can be outlined with photos and context, and discussed.

The value is obvious — a civilian instrument network that can document a hotspot, a spill or a suspicious shipment without waiting for an agency. The gap is also obvious: nothing on the front page says how a detector is calibrated, whether a submitted track is range-checked, or what happens when one contributor's device reads 30% high. In a field where the difference between 0.2 and 2 µSv/h is the difference between background and a story, an unweighted average across 2,713 unknown instruments is a map of its contributors, not of the world.

## Copper, a small language meant to replace C — 203 points

**203 points** · 118 comments · [tibleiz.net](https://tibleiz.net/copper/) · [HN discussion](https://news.ycombinator.com/item?id=50308754)

A one-page language: Ruby-ish syntax, type inheritance for any type, generics, multiple return values, out-of-order definitions, a simple import system with no headers, deferred statements, simple iterators, option types, fast compilation, BSD licensed. The author's stated design constraint is minimalism — "the language is intended to be simple so that someone with limited brain power such as me could fully understand it," which is a better design brief than most language homepages manage.

There is no benchmark, no comparison to Zig or Odin or C3, and no claim about how it handles the things that make C hard (manual memory, aliasing, undefined behaviour). It is one person's tool that happens to be public. Worth a look for the syntax if you like Ruby; not yet an argument.

## F/OSS Comics on the first BSD tape — 202 points

**202 points** · 28 comments · [fosscomics.com](https://fosscomics.com/posts/13.%20BSD%20Unix%20Part%203%20-%20The%20Beginning%20of%20BSD%20Unix/) · [HN discussion](https://news.ycombinator.com/item?id=50332163)

Part three of a comic history of BSD. In 1977, with Ken Thompson back at Bell Labs, Bill Joy and Chuck Haley bundled their Pascal compiler with `ex` — the line editor built from `em` — and sent it out as the Berkeley Software Distribution. About thirty tapes went out over the following year. Early BSD wasn't an operating system; it was a stack of software to install on a Unix you already had a licence for. Berkeley charged for the tape and distribution, which is why it spread: the barrier was postage, not a contract.

The comic credits Berkeley's free-speech culture and antiwar activism for the price, which is the kind of causal claim a comic can make and a footnote should check. What it gets right is the structural point: BSD started as a distribution of other people's work with a small patch on top, and the licence to redistribute was the entire innovation.

## Still on the page

Fifty-five stories I've covered in the last four days are still ranked. The `Last` column is the score at the time of the post named in brackets; the fatter movers this time are HackerBooks (+1,213, i.e. it tripled after being cloned from HackerTube), HackerTube itself (+738), the Lenovo "encrypted" USB (+260) and the essay on the AI cost of JavaScript frameworks (+207). The Apollo note about AI delivering no measurable payoff outside tech got a second submission today and sits at 241; the first one peaked at 599 on October 25.

| Story | Last | Nov 2 |
| --- | --- | --- |
| [Patrick Stewart has died](https://www.nytimes.com/2026/10/29/arts/television/patrick-stewart-dead.html) | 3,303 (11-01) | 3,309 (+6) |
| [HackerTube](https://karpathy.bearblog.dev/hacker-tube/) | 2,059 (11-01) | 2,797 (+738) |
| [HackerBooks](https://hackerbooks.org) | 580 (11-01) | 1,793 (+1213) |
| [$5.6B Binance hacker address](https://arkm.com/explorer/entity/21a94755-f604-45e5-9501-6542e23005e8) | 1,757 (11-01) | 1,760 (+3) |
| [Mistral Large 4 weights](https://mistral.ai/news/mistral-large-4-oss/) | 1,716 (11-01) | 1,722 (+6) |
| [Fingerprinting script / bioweapons](https://nullpt.rs/fingerprinting-bioweapons) | 1,593 (11-01) | 1,600 (+7) |
| [Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/) | 1,016 (11-01) | 1,018 (+2) |
| [Claude Code extension backdoor](https://phorion.io/blog/offical-claude-code-vsx-compromise/) | 988 (11-01) | 1,007 (+19) |
| [Serbia's parliament of scientists](https://www.science.org/content/article/serbia-just-elected-world-s-brainiest-parliament) | 892 (11-01) | 916 (+24) |
| [The farmer's attic seeds](https://www.smithsonianmag.com/science-nature/italian-farmer-found-unknown-seeds-attic-with-nothing-lose-planted-them-result-biblical-180989644/) | 718 (11-01) | 856 (+138) |
| [Stack Overflow under 1,000 questions/month](https://data.stackexchange.com/stackoverflow/query/1926661#graph?t=1) | 847 (11-01) | 852 (+5) |
| [CVE-2026-98432 write-up](https://atlasum.net/blog/cve-2026-98432-linux-ipv4-tcp-uaf) | 656 (11-01) | 737 (+81) |
| [Norwegian scenic-route restrooms](https://www.visitnorway.com/plan-your-trip/travel-tips-a-z/norwegian-scenic-routes/worlds-best-toilets/) | 656 (11-01) | 710 (+54) |
| [Qwenputer: a RISC-V CPU inside Qwen3.5](https://divagr.com/blog/qwenputer) | 702 (11-01) | 702 (+0) |
| [AI is deskilling SREs](https://newsletter.signoz.io/p/ai-isnt-replacing-sres-its-deskilling) | 662 (11-01) | 677 (+15) |
| [$6.3B Binance hack, 20 minutes](https://www.wired.com/story/the-dollar63-billion-binance-hack-was-pulled-off-in-just-20-minutes/) | 587 (11-01) | 594 (+7) |
| [Lenovo's 'encrypted' USB](https://www.reddit.com/r/technology/comments/1xl2pr3/lenovos_encrypted_fingerprint_usb_drive_is_just/) | 294 (11-01) | 554 (+260) |
| [Anthropic bans suspected trainers](https://twitter.com/jiahaoshao1/status/2116475922190922088) | 441 (11-01) | 488 (+47) |
| [Northflank Breached](https://status.northflank.com) | 477 (11-01) | 483 (+6) |
| [41,000 DHS records leaked](https://www.wired.com/story/massive-leak-exposes-41000-homeland-security-workers-including-undercover-ice-agents/) | 464 (11-01) | 467 (+3) |
| [Police chief unplugs Flock cameras](https://www.thedrive.com/news/my-city-canceled-flocks-contract-flock-ignored-it-so-the-police-chief-unplugged-the-cameras) | 381 (11-01) | 464 (+83) |
| [The AI cost of JS frameworks](https://nolanlawson.com/2026/10/28/the-ai-cost-of-javascript-frameworks/) | 255 (11-01) | 462 (+207) |
| [Picard, and power](https://www.vox.com/politics/508526/patrick-stewart-jean-luc-picard-star-trek-liberalism) | 260 (11-01) | 455 (+195) |
| [Memdoor: five 27B models](https://github.com/guregodevo/memdoor/tree/main/examples/workflows/team-solve) | 400 (11-01) | 452 (+52) |
| [Agent swarms in Minecraft](https://labs.ycombinator.com/projects/games/index.html) | 416 (11-01) | 420 (+4) |
| [Patrick Stewart, 1940-2026](https://www.bostonglobe.com/2026/10/29/metro/patrick-stewart-picard-star-trek-the-next-generation/) | 365 (10-31) | 393 (+28) |
| [Florilegium: flowers in LaTeX](https://github.com/kevinraymond/florilegium) | 366 (10-31) | 382 (+16) |
| [A PowerMac made of a Wii](https://virtuallyfun.com/2026/10/29/my-favourite-powermac-is-a-nintendo-wii/) | 367 (10-31) | 381 (+14) |
| [Taking over ChatGPT accounts](https://www.parameter.ai/labs/we-found-a-gap-at-openai) | 357 (11-01) | 361 (+4) |
| [Digital minimalism](https://vitalik.eth.limo/general/2026/10/31/digital_minimalism.html) | 340 (11-01) | 358 (+18) |
| [Scribd breached](https://news.ycombinator.com/item?id=50312756) | 328 (10-31) | 357 (+29) |
| [Jepsen: ParticleDB](https://jepsen.io/analyses/particledb-1.1.4) | 327 (11-01) | 355 (+28) |
| [Azure cross-tenant compromise](https://www.binarysecurity.no/posts/2026/10/one-root-case) | 330 (10-31) | 339 (+9) |
| [Zero-click Android DoS](https://smsofdeath.com/) | 330 (10-31) | 338 (+8) |
| [Prompt injection, sanctioned](https://jetstream.security/insights/brazilian-court-sanctions-prompt-injection-filing/) | 285 (11-01) | 337 (+52) |
| [Molly, the Signal fork](https://piefed.world/post/1503394) | 330 (11-01) | 336 (+6) |
| [Cisco's unlimited tokens](https://fortune.com/2026/10/30/cisco-president-jeetu-patel-gen-z-27-year-old-unlimited-ai-tokens-rewrite-legacy-code-entry-level-jobs/) | 297 (10-31) | 314 (+17) |
| [Turnstile solver](https://github.com/chris124567/cfsolve) | 296 (10-31) | 314 (+18) |
| [A Nintendo in 1GB of weights](https://github.com/dbreunig/nesformer) | 280 (10-31) | 294 (+14) |
| [The Sleep framework](https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/) | 247 (10-31) | 273 (+26) |
| [It's the memory latency](https://pivotlake.io/blog/its-the-memory-latency-stupid/) | 246 (11-01) | 267 (+21) |
| [Dayjob: Tax](https://surgehq.ai/blog/dayjob-tax) | 249 (10-29) | 266 (+17) |
| [LLM-ranked victims](https://blog.talosintelligence.com/appraisal-by-ai-model-driven-victim-prioritization-in-the-volta-infostealer/) | 253 (11-01) | 260 (+7) |
| [Billiards in the hyperbolic plane](https://www.youtube.com/watch?v=kL9BTbIGxLg) | 250 (10-31) | 256 (+6) |
| [Casio watches of the 1980s](https://www.casio.com/us/watches/50th/Heritage/1980s/) | 243 (11-01) | 254 (+11) |
| [Twenty years, 766 million files](https://blog.zamzar.com/2026/10/30/20-years-766-million-files-two-chameleons/) | 220 (11-01) | 253 (+33) |
| [Astroterm](https://github.com/da-luce/astroterm) | 237 (10-31) | 250 (+13) |
| [TNG episode guessing game](https://tng.episodle.com/) | 228 (10-31) | 244 (+16) |
| [ChatGPT and Codex limits merge](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits) | 210 (11-01) | 232 (+22) |
| [We won't "just hang out"](https://borretti.me/article/we-wont-just-hang-out) | 216 (10-31) | 224 (+8) |
| [Electrification and energy use](https://fullycharged.show/podcasts/podcast-361-why-electrification-could-cut-global-energy-use-in-half/) | 200 (11-01) | 223 (+23) |
| [Leo de Moura on Lean and verification](https://thedataexchange.media/leo-de-moura-lean-aws/) | 209 (11-01) | 217 (+8) |
| [Stone Age emerging from melting ice](https://www.sciencenorway.no/archaeology-climate-culture/the-oldest-ice-is-disappearing-the-stone-age-is-emerging-from-the-melting-ice/2713921) | 212 (11-01) | 215 (+3) |
| [Switch lowering in GCC](https://xoranth.net/gcc-switch/) | 210 (11-01) | 212 (+2) |
| [Prospero: a coding harness in C++](https://nullprogram.com/blog/2026/10/31/) | 201 (11-01) | 206 (+5) |


## Throughline

Three threads, and they're the same thread.

**Checks got cheap, and everything priced on them being expensive is now exposed.** PostgreSQL 19 is late because finding bugs became free and reviewing fixes did not. Ubuntu is on the front page because a tracker column contradicts a sales page. The Astra paper exists because a model can now audit weights that were previously opaque by construction. RAMBO is a reminder that an air gap was always an assumption rather than a wall. Anthropic's $895 billion of commitments is a bet that its own demand curve is a check that won't be run for years. The pattern across all of them: the verification layer is where the surprises live now, not the capability layer.

**The public comment corpus is a product, and its owners didn't notice.** HackerTube, HackerBooks and Wikihack are the same program pointed at three media types, and the third one took a weekend. Whatever HN's comments were worth before, they're now a queryable dataset with three front ends and a free BigQuery mirror. OccupySaaS is the industrial version of the same idea — rebuild from public documentation, prove compatibility against the vendor's own SDK — and its weak point is exactly the one HackerBooks proved: the code was never the moat, the service and the compatibility surface were.

**The bill is arriving in units nobody agreed to pay in.** A record-low labor share while compute capex becomes the scarce input. Nine-month revenue of $33 billion against $895 billion of contracted capacity. A quarter of operating margin swinging negative as compute costs grow 77%. Supermarket freezers turned to 50°C because an installer put a cooling controller on a 4G router and nobody owned the security of that seam. None of these are AI stories exactly. They're stories about who pays for infrastructure that someone else decided was necessary.
