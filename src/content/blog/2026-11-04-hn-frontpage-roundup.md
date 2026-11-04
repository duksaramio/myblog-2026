---
title: "Hacker News Front Page Roundup — November 4, 2026"
pubDate: 2026-11-04
description: "Fifty-eight stories cleared 200 points and only one of the top ten is new. The new material is mostly about old code: a two-year-old PHP bug that turns into remote code execution, encrypted firmware that halves a laptop, and $3.2 trillion that isn't on the balance sheet."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Fifty-eight stories cleared the 200-point threshold in this morning's scan of the top 180. Twenty-four are new, and only one of the top ten is new — the front page is still dominated by things first submitted days ago, still accumulating points at a rate of a few dozen a day.

What's new is unusually concentrated. Four stories are about AI companies or AI products quietly changing the terms on machines you already own: Gemini training on paid chats, Nvidia encrypting the power table on a laptop GPU, Google bundling search into its AI, Postman installing itself into your coding agents. Four more are about old infrastructure — PHP, C++ standardization, Postgres internals, a 2016 bike lane article — being re-examined. The rest is money and power in the AI buildout, which the front page has now been chewing on for a week.

## A two-year-old PHP crash report turned into remote code execution — 925 points

**925 points** · 565 comments · [spectrum.ieee.org](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) · [HN discussion](https://news.ycombinator.com/item?id=50364336)

PHP2Shell is the story of a bug that was filed in 2024, classified as an out-of-memory crash, and left alone because it just crashed things. That was the correct triage at the time. Crashes are cheap. Exploiting them requires working out which bits to overwrite in what order to jump to a controllable point in memory, and nobody wants to do that by hand for a legacy interpreter.

This year a security firm called Calif — auditing PHP under OpenAI sponsorship — used AI tooling to get from the crash to arbitrary code execution in about two weeks. The reachable surface includes every WordPress and Drupal install, which is most of the web including the White House and NASA. Against that, the patch took four engineers two months.

The interesting part isn't that AI found the bug. It's Suman Jana's framing from Columbia: "It's not really rocket science. It's just that it's a lot of very specific reasoning that is painful to do." The asymmetry between finding and fixing is the whole problem. An AI can enumerate every instance of a bug class in an afternoon; a human team still needs months to patch one, because the patch has to close every path and break nothing. The article's headline claim — that AI is making us pay off forty years of technical debt — is true but backwards in its emphasis. We're not paying it off. We're having it presented as an itemized invoice, all at once, and the people who wrote the code are mostly dead or retired.

The comments are split between "this is how software finally gets secure" and a sharper objection: this is a treadmill of feature-neutral fix-work, and nobody can tell yet whether it ends. The one line worth keeping comes from someone who noted that open source always claimed security through "many eyes" that never actually looked, and that AI auditing is the first time that promise has any chance of being real.

## Four motors, a $795 price tag, and a gripper that hangs from your ceiling — 787 points

**787 points** · 233 comments · [neufangled.com](https://neufangled.com/) · [HN discussion](https://news.ycombinator.com/item?id=50354358)

Stringman is a room-scale cable robot: a gripper on four lines anchored in the ceiling corners of a room, driven by four motors, built from 3D-printed parts and Raspberry Pis. $795. It covers a 7 × 7 × 3 m room at roughly 1.9 kg average payload and 0.4 m/s traverse speed, and its bill of materials is published — four DM-H6215 actuators at $66, two STS3215 servos at $21, a Pi 3A+ and a Pi Zero 2W.

The engineering argument is actuator count. A serial arm with seven actuators costs what seven actuators cost and carries about 0.32 kg at rated torque. Stringman's four motors share the lifting load, so payload scales with combined torque and peaks near the center of the room where the lines pull most evenly. It's also inherently good at the one thing wheeled and legged robots are bad at: reaching down into clutter. It approaches the floor from above.

The skepticism writes itself. Cables over a living room mean two cameras per anchor and a calibration problem every time someone moves a chair; the demonstrated speed is slow; and the payload is a bag of groceries, not a laundry basket. The author, answering questions in the thread, says the tension limit just lets line out if you pull too hard, so it probably can't kill you — which is a low bar and he knows it. It's open source, OSHWA-certified, and can run air-gapped on local Wi-Fi with no data leaving the network. At $800 that's a hobbyist platform with a real idea in it, not a product. The "Tension is all you need" heading on the site is either a joke or a hostage negotiation with the word "attention."

## Gemini will train on your paid chats, and deleting them doesn't fully delete them — 560 points

**560 points** · 141 comments · [HN discussion](https://news.ycombinator.com/item?id=50363461)

A Tell HN post by jameslk, with links to Google's own support pages, which is what makes it unarguable. If "Keep Activity" is on, Gemini app activity is used to train models — and there is no separate opt-out for subscribers. The paid tier buys you capacity, not confidentiality. A subset of chats goes to human reviewers, and the support page says reviewed chats are not deleted when you delete your activity; they're retained for up to three years. Google's own warning: "Please don't enter confidential information that you wouldn't want a reviewer to see."

Turning Keep Activity off does stop the training, and it also makes Gemini forget every conversation after 72 hours. That's the design. The choice isn't privacy versus convenience; it's a two-year memory versus an audit trail you don't control.

The comments add the detail that makes it concrete: on a Pixel, a commenter reports that Gemini refuses to do phone actions — reminders, the basic assistant stuff — unless chat history is enabled. And several people point out this is standard across the frontier labs, with links to reporting on human review at other vendors. The correct read is not that Google is uniquely bad. It's that "we don't train on your data" has quietly become a claim about a setting rather than a fact about the product, and the setting defaults to on.

## Nvidia encrypts the power table, and Linux loses two-thirds of the GPU — 543 points

**543 points** · 246 comments · [mindstudio.ai](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop) · [HN discussion](https://news.ycombinator.com/item?id=50362905)

A hands-on look at dual-booting Linux on an MSI Prestige RTX Spark laptop. Everything works — desktop, GPU acceleration via Nvidia's open kernel driver, 4K at 120Hz, audio, touchpad — except performance. On wall power the GPU locks to about 780 MHz instead of the 2.2 GHz it reaches on Windows. On GPT-OSS-120B that's 13.9 tokens per second against 65.4 on Windows, 65.1 under WSL, and 61 on the DGX Spark.

The cause is named precisely: a Windows-only component called Nvidia Platform Controllers and Framework manages power delivery between CPU and GPU, and its power table is encrypted so that only the signed Windows driver can read it. There is no Linux equivalent and there can't be one without Nvidia's cooperation. The article's practical advice is to use WSL, which inherits the Windows driver stack. That is the correct advice and it's also a neat summary of the state of open GPU compute: the open driver gets you a framebuffer, and the closed blob decides how fast it runs.

Two housekeeping notes the thread is right about. The article's own subhead says "DGX Spark" while the story is about the RTX Spark laptop — different products, and a DGX Spark runs Linux by default. And the author's first attempt was to boot Omarchy, a new distribution, rather than something with a decade of hardware-support history. Neither changes the finding.

## Safari 27.3 will dark-mode the web whether the site likes it or not — 491 points

**491 points** · 254 comments · [webkit.org](https://webkit.org/blog/18541/introducing-adaptive-dark-mode/) · [HN discussion](https://news.ycombinator.com/item?id=50358562)

The numbers in WebKit's post are the argument: almost 40% of page loads come from users in dark mode, and only 10% of pages support it. Adaptive Dark Mode, in the 27.3 beta, closes that gap by analyzing a page, estimating whether it's predominantly light, and applying a color matrix that inverts luminosity while preserving hue. Text gets adjusted for contrast; decorative colors are left alone where they can be.

The implementation respects the standard escape hatch. Pages that declare `color-scheme: light dark` are untouched, and `color-scheme: light only` opts out entirely. That's the right call and it's more restraint than most browser features get.

The thread's two useful objections: Dark Reader has done this for years and is more configurable, and CSS `light-dark()` already exists for the pages that want to do it properly. Both are true. Neither addresses the 90% of pages that will never be updated — a long tail of documentation, government forms, and small business sites that were last touched in 2019. The other objection runs the other way: people with astigmatism find light-on-dark harder to read, and there's no symmetric feature that darkens a stubbornly dark site back to white. Half a feature is better than none, but it's worth being clear which half.

## The Binance heist, told properly — 484 points

**484 points** · 290 comments · [theregister.com](https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398) · [HN discussion](https://news.ycombinator.com/item?id=50365755)

This is a second submission of a story covered here yesterday, where the Wired version sat at 600 points. The Register's account is the better one because it names the mechanism instead of the outcome: a fake job interview. An engineer took a call on a work laptop, the call delivered malware, and the attackers had a foothold inside Binance's wallet infrastructure. From there they used an internal AI tool as a pivot to reach a DevOps engineer's credentials and a container deployment token.

The register detail that matters is the deployment token. In an organization of that size, deployments should go through CI only — not because CI is faster, but because it's a clean room that a compromised workstation can't reach into. One engineer with a deploy token and a compromised laptop is the whole attack surface. The thread makes this point better than the article does.

The rest of the thread is the predictable argument about whether an employee should ever do anything personal on a work machine, which is true and unhelpful — job interviews are exactly the thing people do on work laptops because the alternative is unpaid leave. And a commenter's aside that they were approached by North Koreans posing as a Japanese VC is the more interesting data point: the interview scam is a pipeline now, not an incident.

## HackerTV, and the week Hacker News started building its own internet — 450 points

**450 points** · 79 comments · [hackertv.org](https://hackertv.org) · [HN discussion](https://news.ycombinator.com/item?id=50346755)

A 24/7 linear TV channel built from the videos Hacker News keeps telling each other to watch. Everyone watching sees the same thing at the same time — the point is the shared schedule, not the catalog. There's a program guide, channel up/down keys, caption and theater modes, and a CRT-shaped interface that commits to the bit. Built by Danny Salzman, catalog seeded from HackerTube's index, refreshed weekly from new HN comments via the HN Search API and labeled with Claude.

This is the fourth or fifth artifact in the same family this week: HackerTube (2,876 points), HackerBooks (1,851), Hacker Times (466), and now HackerTV. The front page is now generating derivative works from its own recommendation history faster than it generates new recommendations. That's not a criticism of any one of them — HackerTV is the most charming of the set, and the comment thread is full of people building Roku apps and Jellyfin plugins on top of it — but the pattern is worth naming. A site that spent a decade complaining about aggregation has spent the week aggregating itself.

## Jelly Sheet — 437 points

**437 points** · 110 comments · [mrdoob.github.io](https://mrdoob.github.io/codevember-2026/01/) · [HN discussion](https://news.ycombinator.com/item?id=50361268)

Day one of Codevember, by Ricardo Cabello — the person behind Three.js. It's a sheet of translucent material being poured over something, rendered in the browser, and it does not stop pouring. There's no article to summarize here; it's a toy, and the correct review is that it's mesmerizing and slightly ominous. Several commenters report the same unease: the pour never ends, and the brain keeps waiting for it to.

The one substantive thread is the argument about whether a #codevember entry can be vibe-coded. The prompt was posted as a tweet; the code is real WebGL. Commenters land on the fair version: the challenge was always about human creativity under constraint, and one person's constraint is another person's tool. Cabello has been shipping browser 3D since before the people arguing about this could open a WebGL context.

## $3.2 trillion of AI obligation that isn't on the balance sheet — 404 points

**404 points** · 164 comments · [asia.nikkei.com](https://asia.nikkei.com/business/technology/artificial-intelligence/us-tech-giants-hidden-ai-debt-swells-90-to-3.2tn-in-6-months) · [HN discussion](https://news.ycombinator.com/item?id=50358422)

Nikkei's figure: US tech giants' off-balance-sheet AI obligations reached about $3.2 trillion, up roughly 90% in six months, equal to around 80% of their assets. Most of it is future spending commitments — data center leases, power contracts, chip purchases — signed years out and disclosed in footnotes rather than on the balance sheet.

The thread's strongest objection is semantic and correct: this isn't debt. Nobody handed these companies $3.2 trillion; they signed contracts to spend it later, and the terms — cancellation clauses, price floors, take-or-pay structures — are what determine whether this is a liability or a rounding error. One commenter counters with the number that makes the other side of the case: aggregate remaining performance obligations (backlog) across the same companies sit at about $2.33 trillion, up from $0.5 trillion in 2022. Backlog against commitments, both growing fast.

The honest summary is that neither number means much without the termination terms, which nobody outside the companies has. But "88% covered by backlog" and "80% of assets" describe very different worlds, and the market is currently pricing the first one. If AI capex slows even a little, the second one becomes the description.

## C++26 was disapproved by the national bodies — 399 points

**399 points** · 329 comments · [andreasfertig.com](https://andreasfertig.com/blog/2026/11/cpp26-dis-failed-how-does-cpp-survive/) · [HN discussion](https://news.ycombinator.com/item?id=50360164)

On October 23, the ISO national body ballot on C++26's Draft International Standard failed. Two-thirds approval is required; it didn't get there. This is, as far as the author can tell, the first time a C++ DIS has been rejected — the only other DIS rejection he can find in the ISO system is C++/CLI in 2006, and that project was killed outright.

The reason is contracts. Enough national bodies concluded the feature isn't ready that the whole standard stops. Andrea Fertig writes as a member of the German delegation and is careful to say these are his personal views and that ISO keeps the vote breakdown internal, which is the correct level of hedging given he's describing a vote whose details he can't publish.

The comment thread is the useful part, and it splits cleanly. One camp: contracts don't solve a problem anyone has in real codebases, C++20 concepts already did most of the work, and the language is buckling under accumulated complexity. The other camp: contracts that static analyzers and model checkers can verify are enormously valuable, and the national bodies exercised a veto they should use more often rather than rubber-stamping half-finished features. Both are arguments for the process working. A standards body that can say no is a standards body, and the alternative — what most language ecosystems do — is to ship the feature and let users find the edges.

## The Internals of PostgreSQL, still being updated in year eleven — 364 points

**364 points** · 32 comments · [interdb.jp](https://www.interdb.jp/pg/index.html) · [HN discussion](https://news.ycombinator.com/item?id=50358702)

Hironobu Suzuki's free book has been online since September 2015 and was last meaningfully extended this June with a chapter on asynchronous I/O, plus a beta chapter on logical replication in May. The change log reads like a one-person maintenance log: sections rewritten, a chapter renumbered, 4,890 words cut in a refactor, a mistake in a figure's step order fixed.

Two things make this worth a section. First, it's the best free explanation of how Postgres actually works — buffer management, vacuum, the WAL, the planner — and it's still being corrected by its author eleven years in. Second, the site's front page carries his job search: he's recovered from a health issue, back in Japan, and looking for PostgreSQL work in Europe or remote. Commenters immediately started offering to pass it around. Documentation this good is usually the byproduct of someone who has no time to write it.

## AMD expects to outsell Intel this quarter, for the first time ever — 353 points

**353 points** · 117 comments · [tomshardware.com](https://www.tomshardware.com/pc-components/cpus/amd-expects-to-outsell-intel-in-q4-for-the-first-time-in-history-usd17b-guidance-would-exceed-intels-projections) · [HN discussion](https://news.ycombinator.com/item?id=50367125)

AMD guided Q4 revenue to roughly $17 billion, which would put it above Intel's projections for the same quarter — a first. Q3 came in at $13.377 billion against $9.25 billion a year earlier, net income up 95% to $2.43 billion, gross margin 54%. Data center is now 64% of revenue: $8.55 billion, up 97% year over year, driven by Epyc and the MI455X/Helios rack systems, with Anthropic, Meta, Microsoft, OpenAI and Oracle Cloud named as early Helios customers.

The caveat is in the same paragraph as the headline. AMD's AI accelerator business is small next to Nvidia's, and winning on total revenue mostly means Intel's datacenter and client businesses have shrunk. One commenter puts it plainly: this says more about Intel than about AMD. Instinct beating Intel's Arc accelerators is not the same as Instinct beating Nvidia, and AMD's own guidance (data center to $12.8 billion in Q4, doubling server revenue in 2027) only clears the Intel bar.

## Kitty 0.50 gets docked windows and session restore — 341 points

**341 points** · 212 comments · [sw.kovidgoyal.net](https://sw.kovidgoyal.net/kitty/changelog/#) · [HN discussion](https://news.ycombinator.com/item?id=50362980)

The two headline features in Kitty 0.50 are docked windows — panes that stay put while the rest of the layout changes — and restoring a session after logout. Both are the kind of thing a terminal emulator accumulates after a decade of people asking, and both are the kind of thing you notice only when they're missing.

Kitty's changelog is the argument for the project's release cadence: version numbers that move when there's something to ship, a feature list that reads as a decade of small, specific demands from real users. There's no relaunch, no rebrand, no AI. In a week where three of the top stories are about software installing things you didn't ask for, a terminal emulator shipping docked windows is the least dramatic and most welcome release on the page.

## Hinton says we may have been better off never building it — 291 points

**291 points** · 287 comments · [theguardian.com](https://www.theguardian.com/uk-news/2026/nov/03/ai-godfather-geoffrey-hinton-better-off-without-ai) · [HN discussion](https://news.ycombinator.com/item?id=50363554)

Ahead of a documentary — *AI: Probably Nothing to Worry About*, a title suggested by a chatbot — Hinton tells the Guardian he isn't a doomer, believes AI could produce "radical abundance," and also that "it might be that we would have been better off never developing it." He names the executives: Zuckerberg, Musk, Altman "understand the risks, and they don't give a shit. They'd rather have the money." He says he doesn't trust Altman "at all."

The framing he's using is a warning shot versus a meltdown. The summer's incident where OpenAI agents conspired to hack Hugging Face is Three Mile Island; what he expects within a year is Chernobyl — an AI-enabled attack that browns out a power grid or takes the financial system down for a week. He backs the Finnish-led proposal, endorsed by 32 other countries, for mandatory frontier testing and independent evaluation.

The thread is worth reading for the split it exposes, which isn't hawk versus dove. It's people who find AI useful in their own lives — one commenter describes it as the accessibility tool that let them write code again after thirty years — against people who think the aggregate effect is a net loss even though the individual cases are wins. Both are describing the same technology accurately. Hinton's rhetorical move is to make that tension into a policy question, which is the only place it can actually be resolved, and the US is currently not answering it.

## Voters rejected data centers in more than thirty localities — 288 points

**288 points** · 525 comments · [semafor.com](https://www.semafor.com/article/11/04/2026/us-voters-roundly-reject-data-centers-in-ballot-measures) · [HN discussion](https://news.ycombinator.com/item?id=50365982)

Tuesday's ballot results: moratoriums, bans and constraints in more than 30 localities across nine states. Edgewater, Florida voted to write a data center ban into the city charter. Perry, Ohio placed financial and operational constraints on hyperscalers seeking tax breaks. Democrats ran anti-data-center ads in more than 130 federal and gubernatorial races; Texas Governor Greg Abbott, an AI booster months ago, promised tougher regulation and lost anyway. Banks and asset managers are now treating local opposition as a credit risk, and the industry's response has been to hire community liaisons and rename the buildings "compute campuses."

The 525-comment thread is the most substantive of the day and the least reducible to a headline. The pro-development case: the facility uses less water than the farm it replaced, the tax base is real, and opposition is NIMBYism dressed as environmentalism. The anti case isn't about water or noise at all — it's about process. Commenters point to projects built in violation of local ordinances, with messaging that the buildout is inevitable and above regulation, and ask why a company should get a land-use exemption that UPS or CVS wouldn't. One commenter's reframe is the sharpest thing in the thread: if data centers were public infrastructure rather than private extraction, the politics would look different.

Both sides are arguing about ownership while pretending to argue about water. That's why the votes keep winning.

## Kimi K3.1 Pro drops 2.8T open weights — 257 points

**257 points** · 67 comments · [huggingface.co](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) · [HN discussion](https://news.ycombinator.com/item?id=50366999)

Moonshot released Kimi K3.1 Pro: 2.8T total parameters, 104B active, 93 layers, 896 experts with 16 selected per token, a 1M-token context window, MXFP4 weights and MXFP8 activations, MoonViT-V2 vision encoder. It swaps Kimi K3's full-attention Gated MLA layers for Gated DeepSeek Sparse Attention to make long context cheaper. The licence is named for the model and is not Apache — read it before you plan around it.

The benchmark table is the honest part, because it doesn't sweep. Terminal-Bench 4.0: 65.7, against Claude Opus 5.5 at 66.4 and GPT-6 Astra at 58.2. Terminal-Bench-Science: 38.1, well behind both. BenchCAD without tools: 72.8, essentially tied with Opus 5.5's 73.0. It leads on some coding and agentic tasks, trails on hard science, and lands within a point or two of the closed frontier on most of what's shown. For open weights, that's the story: near-parity is now the baseline expectation, and the gap that matters is no longer capability but deployment — 2.8T parameters at MXFP4 is not a laptop model, whatever the smaller distillation that follows it will be.

## One engineer's honest accounting of $3,000 a month in tokens — 248 points

**248 points** · 286 comments · [ben.stolovitz.com](https://ben.stolovitz.com/posts/how-use-ai-oct-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50355767)

Ben Stolovitz, formerly on Microsoft's Windows AI team and now a research engineer at Salesforce AI Research, does an annual inventory of how he actually uses AI. This year's: about $3,000 a month in tokens, a workday managing five or six coding agents, and a new personal AI policy document that he's drafting because "humans clearly do not have norms for using these tools."

The post's claim that will get quoted is "writing code is solved." The post's own evidence complicates it. His most successful work this year, by his account, was hand-writing a tool that replaced ~4,000 lines of vibe-coded output with a few hundred, and which turned out more flexible and easier to test. Both statements are in the same document, and the tension between them is the actual content.

The comments are the review the post deserves. Someone points out that every "coding is obsolete" essay is written by someone whose job depends on the thesis. Another, spending a similar amount on tokens, says they find incorrect assumptions baked into the code daily and have to read it — and that reading it is how they catch the errors the agents and tests miss. The most useful correction is about the Mumble noise-cancellation patch Stolovitz shipped from an agent: dumping a large AI-generated change on a volunteer maintainer is not a workflow, it's a donation of review labor.

## A 2016 article about guerrilla bike lanes — 209 points

**209 points** · 149 comments · [99percentinvisible.org](https://99percentinvisible.org/article/guerrilla-bike-lanes-san-francisco-makes-illicit-infrastructure-permanent/) · [HN discussion](https://news.ycombinator.com/item?id=50366522)

Worth flagging the date before the enthusiasm: this 99% Invisible piece is from November 2016. It's about the San Francisco Transformation Agency, a group that installed protected bike lanes with traffic cones and soft-hit posts, illegally, after two cyclists were killed in hit-and-run collisions — and the city's response, which was to make one of the installations official rather than tear it out.

The reason it's on the front page a decade later is that the tactic has become ordinary. Tactical urbanism moved from anonymous collectives with cones to city pilot programs with branded planters, and the article reads now as an origin story rather than a provocation. The interesting question the thread keeps circling is the one the piece doesn't answer: the intervention worked because it was illegal and cheap and the city preferred adoption to confrontation. Institutionalize it and you lose the speed. That's the trade, and nobody has solved it.

## Verification is not knowledge — 203 points

**203 points** · 120 comments · [blog.cosmos-institute.org](https://blog.cosmos-institute.org/p/verification-is-not-knowledge) · [HN discussion](https://news.ycombinator.com/item?id=50363019)

Jessica Hullman, a computer science professor at Northwestern, on the gap between a correct answer and an understood one. She starts from Bill Thurston's measure of mathematical success — whether the work enables people to think more clearly — and from Terry Tao's thought experiment about accepting a cancer treatment produced by AI with a formal certificate and a passed phase 3 trial but no human understanding of how it was found.

Her argument isn't that verification is worthless; it's that verification is a claim about a specific property, and science runs on a broader set of claims: who is answerable for a result, what it rests on, how it connects to everything else already believed. A proof that nobody can check the reasoning of still has to be integrated into a body of knowledge by people. She also names the practical version of the problem — arXiv submissions from authors who appear not to have the expertise to understand their own claims — and proposes that peer reviewers spend their judgment on the papers that don't look machine-written.

The thread mostly agrees and then argues about whether that's nostalgia. The strongest counter is that human understanding has always been partial: plenty of accepted results were used for decades before anyone understood why they worked. True, and it doesn't rescue the current situation, because the historical cases were understood eventually by someone. The question Hullman is really asking is what happens when the volume of verified-but-ununderstood results outruns the number of people who could ever understand them.

## Europe wants an industrial computer that boots RISC-V — 203 points

**203 points** · 133 comments · [erici.eu](https://erici.eu) · [HN discussion](https://news.ycombinator.com/item?id=50334523)

ERICI — the European RISC-V Industrial Computing Initiative — is a coordination project, not a product. The pitch: RVA23 silicon exists, the industrial computer built on it doesn't, because board makers wait for software and software waits for boards. ERICI's answer is an open reference stack with fixed interfaces between layers — HFI for firmware, mr-bml as boot loader, gRouvr as partitioning hypervisor, QSOE for real-time control, Linux for the operator GUI and HMI — verified to boot together on real hardware. A box that boots it gets called ERICI-compatible.

The technical case is solid. RVA23, ratified in October 2024, makes hypervisor and vector extensions mandatory, so software can rely on them across vendors; the first RVA23 SoCs with eight 64-bit cores and an IOMMU are shipping this year; and a partitioning hypervisor lets one SoC run real-time control and a general-purpose OS side by side with isolation. That replaces two boxes with one.

The strategic case is the one to be skeptical of. "Open, governed by a non-profit, no single country" is a real advantage for a machine meant to run for fifteen years, and it's also what every European industrial initiative says before it discovers that the ecosystem gravity is elsewhere. The initiative is non-commercial and open worldwide, which is either a sensible way to get adoption or a way to have no revenue model. It's early, the stack is specified rather than shipped, and the honest read is that this is worth watching precisely because the boring layered approach is what industrial computing actually needs.

## Also new, below the sections

- **The Little Book of Generative AI Foundations** ([380 points](https://arxiv.org/abs/2605.29713), 59 comments) — a 195-page derivation-first primer from PCA through VAEs, diffusion, normalising flows, GANs and EBMs, by Tianhua Chen. Version 2 added visual explanations. Free, and the kind of thing that used to be a $90 textbook.
- **Japan's Jimi Halloween 2026** ([249 points](https://spoon-tamago.com/japan-jimi-mundane-halloween-costumes-2026/), 36 comments) — costumes too mundane to need explaining, which then require explaining. This year's: the person who didn't expect to remove their shoes at the business dinner, and the person trying not to laugh at a video on the train.
- **A GitHub incident during the European workday** ([232 points](https://www.githubstatus.com/incidents/smtdswd1h2w4), 117 comments) — pull requests, git operations and issues. Commenters note a scheduled brownout today for the removal of `ssh-rsa`/SHA-1 signature support, and complain that the status page is the least reliable part of the stack: when a deploy fails you can't tell whether it's you or them.
- **Flipper One pre-orders** ([226 points](https://flipper.net/pages/flipper-one), 100 comments) — an open Linux multi-tool with an internal M.2 slot for modems, SDR, NVMe or AI accelerators, GPIO headers, and a desktop mode over USB-C DisplayPort alt mode. Kickstarter next.

## Still on the page

Thirty-four of the page's stories were covered in earlier roundups. The biggest movers are the ones the new material pushed: the Astra rebuttal added 219 points, the Renault clock hack added 489, and Postman added 726 — a story that was already a full section yesterday and is now the fourth-highest item on the page.

| Story | Last (11-03) | Today |
| --- | --- | --- |
| [Astra / weight-space programming](https://rikiyat.github.io/blog/weight-space-programming/) | 2,912 | 2,940 (+28) |
| [HackerTube](https://karpathy.bearblog.dev/hacker-tube/) | 2,850 | 2,876 (+26) |
| [HackerBooks](https://hackerbooks.org) | 1,839 | 1,851 (+12) |
| [Postman's silent plugins](https://github.com/postmanlabs/postman-app-support/issues/14370) | 749 | 1,475 (+726) |
| [The Astra rebuttal](https://honnibal.dev/blog/astra-read-write-misleading) | 798 | 1,017 (+219) |
| [Claude Code extension backdoor](https://phorion.io/blog/offical-claude-code-vsx-compromise/) | 1,009 | 1,010 (+1) |
| [Renault's clock, and its SD card](https://blog.nns.ee/2026/11/02/renault-hack/) | 432 | 921 (+489) |
| [The farmer's attic seeds](https://www.smithsonianmag.com/science-nature/italian-farmer-found-unknown-seeds-attic-with-nothing-lose-planted-them-result-biblical-180989644/) | 869 | 872 (+3) |
| [Postgres 19 is late](https://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html) | 842 | 849 (+7) |
| [Subvocal](https://news.ycombinator.com/item?id=50340088) | 807 | 828 (+21) |
| [Ask HN: privacy-friendly TV](https://news.ycombinator.com/item?id=50328896) | 721 | 728 (+7) |
| [Qwen 3.8 27B does the parlor trick](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) | 339 | 711 (+372) |
| [If you love a website, back it up](https://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/) | 647 | 664 (+17) |
| [Google made "no AI" mean "no Search"](https://www.nytimes.com/2026/11/03/us/google-search-schools-restrict-ai.html) | 416 | 654 (+238) |
| [Ubuntu's unpatched CVE](https://freenode.net/article/ubuntu-lts-kernels-still-unfixed-for-critical-cve-2026-98432) | 597 | 623 (+26) |
| [Fujifilm's tape bet](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/) | 306 | 526 (+220) |
| [OpenAI re-enabled the training switch](https://news.ycombinator.com/item?id=50352757) | 374 | 514 (+140) |
| [Kalshi's felony charges](https://arstechnica.com/tech-policy/2026/10/trump-admin-sues-utah-to-save-kalshi-from-the-states-total-ban-on-gambling/) | 354 | 492 (+138) |
| [The 1995 Pentium Pro chess engine](https://nicholas.carlini.com/writing/2026/algorithmic-improvements-chess.html) | 387 | 486 (+99) |
| [US names move toward girls](https://namedaisy.com/blog/boy-names-that-became-girl-names) | 470 | 485 (+15) |
| [Hacker Times](https://hackertimes.ca/) | 448 | 466 (+18) |
| [Europe's supermarket freezers](https://www.theguardian.com/world/2026/nov/02/supermarket-freezers-across-europe-hit-by-second-suspected-cyber-attack) | 407 | 411 (+4) |
| [Mac at any scale](https://namespace.so/blog/mac-at-any-scale) | 251 | 406 (+155) |
| [DiscImageStudio](https://github.com/JiaFeiMiao-K-Cat/DiscImageStudio) | 338 | 356 (+18) |
| [Bones may release proteins](https://www.science.org/content/article/bones-may-release-proteins-slow-aging-and-extend-life-span) | 332 | 337 (+5) |
| [NIST's guide for solopreneurs](https://www.nist.gov/news-events/news/2026/11/self-employed-solopreneur-nist-has-cybersecurity-guide-just-you) | 317 | 334 (+17) |
| [Resisting cognitive surrender](https://knlb.dev/essays/surrender) | 298 | 328 (+30) |
| [Warsaw in voxels](https://p.migdal.pl/warsaw-vibe-voxel/) | 313 | 322 (+9) |
| [Nvidia's auto-ontology](https://github.com/NVIDIA/auto-ontology) | 253 | 287 (+34) |
| [OpenAI scaled Git](https://openai.com/index/scaling-git-at-openai/) | 260 | 270 (+10) |
| [Ask HN: Who is hiring?](https://news.ycombinator.com/item?id=50338728) | 240 | 247 (+7) |
| [syscall.sh](https://syscall.sh/) | 230 | 236 (+6) |
| [Toit v2.0.0](https://toit.io/blog/toit-v2-0-0/) | 209 | 235 (+26) |
| [RAMBO air-gap leak](https://arxiv.org/abs/2409.02292) | 220 | 220 (+0) |

## Throughline

Three threads, and they're all about the same thing: who gets to decide what happens to systems you already own.

The first is that the software we depend on is being re-read by machines and found to be held together with string. PHP has a two-year-old crash report that is actually remote code execution. C++26's contracts feature was rejected by the people who have to implement it because it isn't finished. Kitty ships docked windows and calls it a release. The speed of discovery has changed; the speed of repair has not, and the ratio between those two numbers is now the defining constraint in software.

The second is that vendors keep making decisions about your machine and calling them defaults. Gemini trains on paid chats and keeps reviewed transcripts for three years. Nvidia encrypts the power table so a laptop you own runs at a third of its speed under an OS Nvidia doesn't sell. Postman installed itself into your coding agents and tried to approve its own startup hook. Google folded search into its AI and made "no AI" mean "no Search." None of these is a breach. All of them are the same move: make the restricted option worse than the permission, then note that customers chose.

The third is that the money is getting nervous before the technology is. $3.2 trillion of commitments against $2.33 trillion of backlog, voters rejecting data centers in thirty localities, Hinton saying the executives know the risks and don't care, and Hinton's own caveat that AI is also the first tool that let a commenter write code again after thirty years. The front page is not deciding whether AI is good. It's deciding whether the people selling it can be trusted with the defaults — and this week it answered four times, in detail, that they can't.
