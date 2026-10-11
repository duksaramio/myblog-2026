---
title: "Hacker News Front Page Roundup — October 11, 2026"
pubDate: 2026-10-11
description: "Only 25 new stories clear 200 points out of 130 on the ranked list — and half of what moved was legal: Nitter loses its lawyers, Exxon loses the argument, and Yandex loses a third data center."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Scanning HN's ranking list — all 500 entries — turned up 130 stories at 200 points or better this morning. Twenty-five are new. The other 105 are stories this roundup has already covered, and the highest-scoring new item of the day (601 points) sits below thirty-two incumbents, the top of which is at 2,122. There is no new story in the four-figure range today, and the number of stories clearing 200 is up from 105 yesterday even though hardly anything new entered the page. That combination only means one thing: the upper half of the list is now a slowly decaying archive, and its scores keep rising because returning readers keep voting on things they have already read.

What did move is a legal day. Nitter admits it has no counsel and may not survive; Exxon's own internal memos keep getting filed into a Massachusetts courtroom; Yandex loses a third data center; a browser game about San Francisco permitting is the best policy argument on the page. Underneath all of it, a cluster of stories about the same thing from different angles: you still have to know what you are doing, and every attempt to skip that step has a bill attached.

## 2D Vehicles — 601 points

**601 points** · 114 comments · [patkerr.co.uk](https://patkerr.co.uk/2d-vehicles/) · [HN discussion](https://news.ycombinator.com/item?id=49991852)

In 1996 Patrick Kerr wrote a 2D rigid-body simulation in GFA BASIC on an Atari ST — a car, a ship, a brick — and it became the vehicle handling underneath the original Grand Theft Auto. He has now recreated it in JavaScript for its thirtieth anniversary as a playable "Motion Lab": three vehicle modes, toggles for gravity and collision barriers, and the two camera behaviours from the original, a movement dead zone and a speed-based zoom-out.

The technical content is a narrow model, deliberately. Kerr's own account is that he started with the brick, added a ship as an homage to *Thrust*, and then added just enough to make it read as a car. Commenters asking for the opposite — a proper explanation of *why* it feels right rather than how it is coded — mostly did not get one, and one is blunt that the diagrams are incomprehensible and the write-up is the kind any LLM could have produced. That criticism is fair, and it also misses what makes the page worth reading: a working toy that exists because someone wanted to play with one isolated concept, with no production requirements attached.

The other thing on the page is the disclaimer. Unprompted, in italics, twice, Kerr states this is unaffiliated with Take-Two and Rockstar and that he is "delighted" to make that clear. A 1996 weekend prototype needs a legal shield in 2026 even though nobody is selling anything. The comments are full of people rebuilding the same model themselves — Verlet integration, bicycle models, one that admits it ended up in 3D and nowhere near as fun — which is a better advertisement for the work than the write-up is.

## The Lightbulb Computer — 566 points

**566 points** · 93 comments · [lightbulbcomputer.com](https://lightbulbcomputer.com/) · [HN discussion](https://news.ycombinator.com/item?id=50029487)

A speculative device design: a projector plus a camera plus a microphone, packaged in the shape of an oversized lightbulb, so it screws into an existing ceiling socket and turns the whole room into a screen. Voice and gesture in, projected graphics out, one vantage point covering every surface in the room.

The case against smart glasses is the case for this, and it is made in one sentence: you already have an Edison socket in every room, and nothing lives on your face. Ceiling mounts solve the field-of-view problem, the social-awkwardness problem, and the battery-weight problem at once, which is why the design feels obvious in retrospect even though nobody ships it. The author is explicit that this is a design prototype, not a product, and that the demos run on a Mac with custom projection-mapping software, a consumer 4K laser projector and a webcam. Nobody should read the videos as a product announcement.

The best comment is the objection, not the praise: an always-on, always-listening, always-watching machine bolted to the ceiling of your bedroom is a jinn that never leaves, and the fact that you talk to it in plain language makes it worse, not friendlier. The second-best comment is the prediction — if it is ever manufactured, it will talk to the cloud. Both are the correct posture toward any ambient-computing demo: the interesting question is not whether the projection works, it is who holds the sensor feed. The author also answers the question he gets most, which is that there are no tech specs, because there is no product.

## Bot traffic from Yandex — 562 points

**562 points** · 224 comments · [radar.cloudflare.com](https://radar.cloudflare.com/bots/as13238?dateRange=7d) · [HN discussion](https://news.ycombinator.com/item?id=50041619)

A Cloudflare Radar dashboard filtered to AS13238 — Yandex — showing bot traffic from that network collapsing over a seven-day window. The submission went up with the implicit reading that something dramatic happened to Yandex's crawling.

Whoever submitted it did not read the axis. The chart is the *percentage* of requests from that ASN classified as bots, so of course it plunges when the humans stop serving traffic — the denominator moved, not the crawler. Commenters who checked the same view for Russia as a whole and for worldwide found no discernible pattern, and the top-voted correction says the obvious thing: Yandex is Russia's search engine, crawlers are how you index the web, and a drop in indexing traffic from a provider with half its data-center capacity offline is the least surprising number in the set. One commenter notes that most of the traffic out of that ASN is UDP, and that it looks benign as far as malicious crawling goes.

The value here is the third-layer inference, which a couple of commenters get right: HTTP traffic from Yandex fell to roughly zero after the third strike, after two earlier strikes had already degraded it, and the search page itself still serves. That means the crawler went dark while the product stayed up — a much more specific and much more interesting fact than "% of bot requests down", and it is available only because someone bothered to look at the actual dashboard instead of the headline number.

## A city-building game in which the city would prefer you didn't — 508 points

**508 points** · 169 comments · [housing.over.pizza](https://housing.over.pizza/) · [HN discussion](https://news.ycombinator.com/item?id=50036864)

*Discretionary Review* puts you in the role of a San Francisco developer in January 2015 with a fund, three project teams, and a map of parking lots. You pick a site, draw a proposal, and then shepherd it through pre-application meetings, environmental review, the Planning Commission, appeals to the Board of Supervisors, lawsuits, and the permit counter — after which you find out whether it still pencils. Interest rates move on the dates they moved in real life. Your investors review you every two years and take the fund elsewhere after three misses. The win condition is January 2031 and the state's 82,069-home deadline.

The mechanics are the argument. Money spent on what the game openly labels corruption is close to mandatory for a profitable build, and the result is still expensive housing — from someone who built homes for a living, and who describes the game as gallows humour that left them glad not to be doing it for real. The best single comment is the inverted pitch: you are a resident with a paid-off mortgage and your goal is to keep your neighbourhood as it is until the tech industry leaves. That thread of jokes is the honest summary of why the game exists, and the runner-up — "the United States is a command economy where the only command is no" — is the same point with fewer syllables.

The sourcing is worth noting because it is the opposite of what a game about politics usually does. Sites on the map are real proposals, the opposition groups are composites, the laws, dates, vote counts and case histories are from the public record, and when you finish a site the game tells you what actually happened there. The most-quoted comment is an achievement screen: 4,147 homes built over sixteen years, eight investor reviews survived, sixteen hearings, three appeals, four lawsuits, against a city that needed 82,069. That ratio is the entire game, and it is not a fictional one.

## 3rd Yandex Cloud Data Center Was Hit — 490 points

**490 points** · 591 comments · [status.yandex.cloud](https://status.yandex.cloud/en/incidents/2136) · [HN discussion](https://news.ycombinator.com/item?id=50040547)

Yandex Cloud's own status page, in a degraded state across roughly ninety named services — Compute, Object Storage, Kubernetes, managed PostgreSQL, ClickHouse and MySQL, SpeechKit, Cloud Functions, the lot. The company's update says what almost no vendor status page ever says: the platform "continues to operate with limited functionality" and customers should "consider alternative platforms to deploy your resources more quickly and provide redundancy." Support channels were partially restored a few hours in. The incident timeline shows a third facility lost inside the same week as the two the previous roundup covered.

The news value is not the degradation, it is the recommendation. A cloud provider telling paying customers to go elsewhere — as a standing, written advice, not a one-off apology — converts an availability incident into a statement about whether the platform can be defended at all. Several commenters draw the engineering conclusion directly: data centers are becoming first-class military targets, and the interesting question is what that does to architecture, given how much compute already sits in hardened facilities. Others point at the connectivity chart for the cloud's ASN and the BBC's reporting on the strike for the physical facts.

Where the thread goes off the rails is the reflexive deflection — that Ukraine did not start this, that Russia struck Ukrainian telecom and provider data centers all through September, all of which is true and none of which changes what the status page says. The correct read is narrower and more useful: an internet-scale search and cloud provider built over two decades has now lost enough physical infrastructure in a week that its own product team is publicly suggesting customers leave, and no amount of geopolitical whataboutery alters that. One commenter's aside is the most forward-looking thing on the page — if compute is this exposed, the demand for bunkers under mountains is about to become a procurement line item.

## Build your own decision model — 441 points

**441 points** · 100 comments · [nishtahir.com](https://nishtahir.com/build-your-own-decision-model/) · [HN discussion](https://news.ycombinator.com/item?id=50037949)

A walkthrough of "system one" decision models — the trick behind Jev and Strands Decider, both of which are already on this list from earlier in the week — with a working implementation on Qwen3-1.7B. The setup is a multiple-choice question where answering "B" with a normal LLM costs eleven forward passes to emit one token, against a single pass if you mask the vocabulary down to the five option tokens and read the probability distribution directly. The illustrative numbers are 83.3% on A versus 5.6% each on C and D and nothing else reachable.

The piece is honest about what that buys and what it doesn't, which is unusual for a write-up of a technique with a vendor behind it. Constraining the output space guarantees a legal answer and a per-option score; it does not guarantee a correct answer, and without specific training the token probabilities are the model's confidence about the next token, not a calibrated probability that the answer is right. Anyone deploying this as a confidence signal for high-stakes routing should read that paragraph twice, because "calibrated probabilities" is the pitch and the article itself undermines it.

The reason this matters beyond the toy is cost. If the decision is a classification over a fixed option set, a single pass over a 1.7B model is cheap enough to run constantly on local hardware, which is the difference between an agent that asks a model for every judgement call and one that doesn't. The chain of HN submissions this week — a $870M raise for the "decision models" category, an open-source 2B decider, and now a build-it-yourself post — is a market forming in real time, and the build-it-yourself entry is the one that tells you how thin the moat might be.

## Nitter: Update Oct 10th seeking funding and legal help — 382 points

**382 points** · 185 comments · [nitter.net](https://nitter.net) · [HN discussion](https://news.ycombinator.com/item?id=50041682)

X Corp sent Nitter cease-and-desist letters in August and again in September demanding permanent takedown of the instances and the repository. The September 7th update said the project would continue with legal representation in place; the October 10th update retracts that — the assurances turned out to be untrue, the project has no counsel, and the maintainer is asking for funding and lawyers. Donations go to legal costs first. Crypto addresses are listed because they are the only channel that cannot be shut off by a payment processor.

The legal analysis in the thread converges on something more uncomfortable than the usual "big company bullies open source." The software is probably fine; the exposure sits with whoever operates an instance, since the plausible claim is not copyright but unauthorized access, and that is a criminal statute as well as a civil one. Commenters point out that a project which runs on someone else's API without authorization has no obvious legal future no matter how good the client is, and that the trademark-shaped problem — calling it something that sounds like Twitter — gives X a cheap second attack. Nobody in 185 comments produces a viable defence.

The strongest counter-argument is that Nitter already won and the lawsuit is theatre. The source is open, forks are being self-hosted, and the legal pressure cannot recall them; at least one commenter suggests the correct response is to stop spending money and let the code do the work. That is right about the software and wrong about the consequence, which is the same chilling effect the cease-and-desist letters were sent to produce. A project that has to be argued about on a donation page, in crypto, without a lawyer, teaches the next maintainer what building this costs — and that is the part that actually scales.

## Documents add to evidence in climate deception case against ExxonMobil — 363 points

**363 points** · 196 comments · [insideclimatenews.org](https://insideclimatenews.org/news/07102026/exxonmobil-climate-deception-new-evidence/) · [HN discussion](https://news.ycombinator.com/item?id=50043682)

Documents released quietly as part of Massachusetts's 2019 consumer-protection suit against ExxonMobil, several of them reported on for the first time. The centerpiece is a 1988 internal memo from Exxon's own research department, written weeks before the IPCC was established, warning colleagues that a worldwide consensus for mitigation would have "substantial negative impacts on Exxon." Also new: more recent statements from Exxon scientists challenging the company's claims about its biofuels and carbon-capture work.

The reason this case is different from the other two dozen suits is that Massachusetts is not arguing about climate damages at all, it is arguing about consumer and investor deception — that the company sold the public on taking action while the action was public relations. That framing is what makes the documents load-bearing. It also explains the discovery fight: the state is asking what else exists, and Exxon is resisting, which is the behaviour commenters cite when they note the pattern the company shares with the tobacco industry's playbook — the same experts, the same arguments, across cigarettes, acid rain, the ozone hole and now this.

Exxon's answer, from its securities filings, is that the claims are meritless and an inappropriate attempt to use courts to usurp policymakers. The comment worth keeping is that the company's own scientists were doing surprisingly good work in the 1970s and 1980s — the predictions held up — which means the case is not about whether Exxon understood the science. It is about what happened to that understanding between the research department and the public statements, and the newly filed memos are the paper trail for the middle part of that story.

## LineageOS 24.0 — 361 points

**361 points** · 136 comments · [lineageos.org](https://lineageos.org/Changelog-32/) · [HN discussion](https://news.ycombinator.com/item?id=50040276)

Android 17, rebased a week or two ahead of the project's usual schedule, shipping across branches 18.1 through 24.0 with security bulletins from August 2025 to October 2026 merged and backported as far as 15.1. The headline feature is a generic bare-metal target that boots on x86_64 PCs, Apple Silicon Macs, NVIDIA DGX Spark boxes, and Snapdragon X laptops — which is the line that matters most here, because it turns a phone ROM project into an Android-anywhere project, able to put long-lived OS support onto laptop hardware nobody else wants to keep patched.

The annual complaint rate is unchanged and deserved: the supported-device list is enormous, undefined, and mostly composed of older hardware with a known bootloader unlock, with no short list of devices you can buy new. Camera quality on unsupported-then-ported phones is the other recurring gripe. Neither is a defect in the work, both are consequences of a distributed maintainer model where each device exists because one person owns it, and the project's answer has been to add hardware rather than shrink the list.

The counterargument, and the reason this stays on the front page every release, is short: the maintainers are the only ones putting a current security patch level on phones their manufacturers abandoned years ago. One commenter is openly annoyed that their Pixel 4a is still supported because it removes the excuse for a new phone. Whatever the ROM's rough edges, that is the entire pitch, and it is a claim no vendor can match.

## I paid people to try and follow my README — 327 points

**327 points** · 178 comments · [shkspr.mobi](https://shkspr.mobi/blog/2026/10/i-paid-people-to-try-and-follow-my-readme/) · [HN discussion](https://news.ycombinator.com/item?id=50042219)

Terence Eden paid five people €25 an hour to install his software on a fresh machine while sharing their screen and talking out loud, as part of an NLnet grant that funded exactly this. What came back is a list of assumptions he did not know he had made: the demo link was wrong, some people read a README in a terminal, a whole technical section meant nothing to a non-specialist, the section ordering was confusing, and — the sentence that should be painful for anyone who writes docs — he had never actually explained what the software does. His jokes made things worse, which is the standard outcome.

The method is the point. Reading your own work cannot catch this, because you know which commands need `sudo` and that `-foo` probably meant `--foo`; the only way to find the gaps is to watch someone hit them in real time, and paying for that hour is cheaper than any user-facing bug you will otherwise ship. Eden's framing is that documentation rot is a choice developers keep making while simultaneously telling users to read the manual. The five-person sample is small and self-selected from Mastodon, and it still produced a longer defect list than most release retrospectives.

The structural criticism is in the thread: one-off usability testing does not survive contact with a project that changes weekly. Nobody has a good answer for continuous doc testing — the closest thing anyone proposes is putting the install steps in CI, which is a different exercise and tests the commands, not whether a stranger can follow them. That gap is why "RTFM" remains a complaint rather than a solution: the F in the M is written by the person who already knows the answer.

## Apple/macOS removed from official Unix registry — 288 points

**288 points** · 240 comments · [opengroup.org](https://www.opengroup.org//openbrand/register/) · [HN discussion](https://news.ycombinator.com/item?id=50031653)

The Open Group's register of UNIX-certified products no longer lists a current macOS, and most of the 240 comments are people correctly pointing out that the submission's premise is under-specified. macOS 26 remains listed under the UNIX 03 standard if you use the filter; the question is whether macOS 27 was ever submitted. Several commenters note that "silently" appears nowhere in the source either, and that the title is doing editorial work the evidence does not support.

Behind the pedantry is a real change that the register was never a good proxy for. The certification always applied to a configuration nobody ran — one specific hardware and OS combination, tested against a standard defined decades earlier — and Apple's relationship to it was about the street credibility that "OS X is a Unix" bought with developers in the early 2000s, when Linux was immature and Windows was not an option. Linux is not on the register either, for the simpler reason that nobody paid to have it listed. Losing certification costs Apple nothing it can measure.

What the thread is actually arguing about is whether the platform is still a good place to write software. The most-upvoted comment is from someone who moved their development to NixOS months ago because the friction had become intolerable, and who is worried about the timing: AI has produced a surge of new software, and Apple is making it harder to build on its own machines. That complaint is not new, but it lands differently now that the company's most credible Unix credential is a filter drop-down on a page about z/OS.

## IRCv3 — 283 points

**283 points** · 254 comments · [ircv3.net](https://ircv3.net/) · [HN discussion](https://news.ycombinator.com/item?id=50041540)

The working group's site, submitted with no framing, which is the correct framing: IRCv3 is an extension layer over RFC 1459 and RFC 2812 that has been quietly adding the features people claim IRC lacks — SASL for standardized account authentication, message tags, server-time, batch, chathistory, reactions — while keeping the protocol backwards-compatible with clients and servers from the 1990s. All of it is opt-in. Nothing breaks when a participant does not implement it.

That design choice is why IRC has outlived every chat protocol that replaced it. Slack, Discord and Matrix all require both ends to be on the same centralized system; IRCv3 makes the network and the client independent, so an old client keeps working and a new one gets richer metadata as its server supports it. The site's own docs point at the modern core protocol rewrite for people starting today, which is the rare case of a protocol community investing in onboarding rather than lore.

The interesting question in the thread is why this is on the front page at all, and the answer is the same as the wall-clock from two days ago: the value proposition is not features but ownership. Twenty-five years of clients and servers still interoperate, no single company can revoke your identity, and the protocol is documented in a GitHub repo instead of a terms-of-service page. It is a fine argument and it is not a growth story, which is exactly why the traffic is back on a Sunday morning.

## I would like the value of my home to rise, while my property taxes fall — 270 points

**270 points** · 666 comments · [conversableeconomist.com](https://conversableeconomist.com/2026/09/28/i-would-like-the-value-of-my-home-to-rise-while-my-property-taxes-fall/) · [HN discussion](https://news.ycombinator.com/item?id=50032758)

A short post pointing at David Schleicher's paper on the last three years of state property-tax reform: Florida, Ohio, North Dakota and Texas among the states handing large benefits to owner-occupied housing and shifting the burden onto commercial property, other local taxes, and state funding — which itself comes from sales and income taxes. Homeowners watched their largest asset appreciate sharply and responded with political anger, because a property tax is a wealth tax and the appreciation arrived as a rising bill rather than a windfall.

The strongest comment in a 666-comment thread is the mechanism nobody wants to say out loud: shifting the tax base off owner-occupied housing and onto commercial property — including rental apartment buildings — moves the burden from owners to renters, who are generally poorer. The reform is sold as protecting the little guy and it taxes the people who do not own anything. The second-best comment observes that an owner-occupied house is not a liquid investment, so an increase in assessed value is a cost of living increase with no cash to meet it, which is why the backlash is rational even though the underlying wealth gain is real.

The messier part is that in most jurisdictions the tax rate is set to raise a budget, not to fund a value — the assessor values everything, the council sets the levy, and the rate floats. That means the argument about assessments is often an argument about who pays, not how much is collected, and it explains why "my assessment went up 30% so my taxes went up 30%" is usually false and why nobody believes it. The commenters who own up to liking their local services and their multi-gigabit fibre and their 100-psi water are the ones making the honest case: the fight is over distribution, and every proposal in the thread eventually taxes somebody who votes.

## Show HN: WallHop – 12ft.io is gone, so I built a replacement — 265 points

**265 points** · 115 comments · [wallhop.io](https://wallhop.io/) · [HN discussion](https://news.ycombinator.com/item?id=50038634)

A paywall bypass with three interfaces: paste a URL, prefix `wallhop.io/` to any link, or call the `/raw` and `/api` endpoints. There is an iOS share-sheet shortcut and a bookmarklet. The landing page carries a disclaimer that paywalls pay for journalism and that you should subscribe to anything you read daily, which is the correct thing to say and also the thing every one of these services says before it stops working.

Commenters report it gets through the Wall Street Journal, the Financial Times and the New York Times, and the distinguishing feature versus archive.today is no CAPTCHA — which is the whole product. The thread's most useful question is why archive.is is the reliable last resort for every tool in this category, including the browser extensions that have been doing this for years, and nobody answers it, which suggests the answer is operational rather than technical: someone is paying for infrastructure and staying quiet about it.

Two objections carry the thread. The first is that the tool builds on a GPL-3 project and has been modified without republishing, which is a licence question the author does not address in the submission. The second is durability — every predecessor is gone, 12ft.io included, and the pattern is that these services run until a rightsholder decides the legal cost of stopping is worth it. The realistic read is that WallHop is a maintained fork of an idea that will be reimplemented by someone else the moment it dies, and the interesting part is the legal surface, not the technology.

## The RAM shortage is bringing back DDR4 — 235 points

**235 points** · 241 comments · [theverge.com](https://www.theverge.com/games/1009140/ram-shortage-intel-amd-ddr4-comeback) · [HN discussion](https://news.ycombinator.com/item?id=50028647)

Gigabyte has announced that two motherboard lines will support "upcoming" processors on Intel's LGA 1700 socket, which has not been used for new CPUs since 2024, and which is valuable now for one reason: it takes both DDR4 and DDR5. New LGA 1700 chips are expected in early 2027. AMD is doing the same thing from the other direction, with a new series of AM4 motherboards and a tenth-anniversary relaunch of the Ryzen 7 5800X3D. The plan is to let people buy a new CPU without being forced to also buy new memory at current prices.

That is a genuine engineering decision made for financial reasons and it is a little bleak. A memory shortage severe enough to justify reopening two dead platforms means DDR5 pricing is not a temporary spike, and the industry's answer is to sell customers backwards compatibility rather than capacity. Intel, notably, did not comment. Both moves also lock buyers into older sockets with older instruction sets and older PCIe generations, so the upgrade path being offered is a platform that will be the end of the line when it arrives.

The thread's undercurrent is what the shortage does to everything downstream. The Verge's own related links cover SSD price rises from the same cause and the effect on phones and laptops, which is the part that reaches people who do not build PCs. One market segment's shortage becoming a general consumer price shock is the mechanism worth tracking here; the specific SKUs are noise by comparison.

## Nix wrote half of my debugger — 230 points

**230 points** · 59 comments · [fzakaria.com](https://fzakaria.com/2026/10/07/nix-wrote-half-of-my-debugger) · [HN discussion](https://news.ycombinator.com/item?id=50017247)

A follow-up to the deterministic build VM from earlier in the week, now grown a source panel, stack frames, bookmarks, thread lanes showing who held the CPU at each step, and a "check from here" feature that bisects to the exact instruction where a race condition first manifests. The observation that makes the post: every time the author went to build a debugger feature, the hard part was already solved, and Nix had solved it. A debugger needs the exact inputs to the program, its symbols, its sources, and the sources of every library beneath it, plus a way to hand all of that to someone else — which is the definition of a derivation.

The reason this is worth more than a tooling post is that it is a concrete example of a dependency graph filling a role that normally costs a team: reproducible builds are usually argued for on supply-chain or correctness grounds, and here they turn out to be an infrastructure layer for debugging, environments, and CI cache correctness all at once. The author describes the feeling of using a capability nobody else is using, which is what it looks like when a decades-old idea finally has enough of the ecosystem built around it to pay off.

The obvious criticism, which the thread largely skips, is the on-ramp: Nix-dependency reproducibility is only available to projects already building under Nix, and the two-tellers-one-account demo is a C program that fits in a screenshot. The honest summary is that this is a demonstration of a leverage that exists, not a tool you can adopt this week — and the size of that gap is why deterministic builds remain a specialist concern rather than a default.

## Mxc: Microsoft Execution Containers version 1.0.0 — 220 points

**220 points** · 66 comments · [blogs.windows.com](https://blogs.windows.com/windowsdeveloper/2026/10/07/microsoft-execution-containers-policy-driven-containment-for-ai-agents/) · [HN discussion](https://news.ycombinator.com/item?id=50016956)

Microsoft's containment layer for AI agents, now generally available: administrators declare which files and network destinations an agent may touch, and the platform picks the appropriate container backend to enforce that at runtime, with Entra identity work coming to distinguish an agent's actions from a human's. The framing is honest about the problem — the only alternatives companies had were unrestricted access or no agent — and the stated principle is that an agent cannot be its own security authority.

Practitioners on the thread are much less impressed than the blog post. One reports that skimming the backend documentation gives the impression of a recent-generation model implementing "make it work at all costs" rather than a considered design, with the bubblewrap integration docs described as a stream of consciousness. Another says they tried it and it is not a 1.0, more like a tech preview. The most concrete complaint is the gap between the pitch and the need: what people want is to restrict one application's reads and writes to one directory, and it is not clear that this does that, or that it will be available outside top-tier corporate licensing.

The interesting tension is how little of the objection is about capability. Windows has had the primitives for this for years — job objects, AppContainer, WDAC — and the August cumulative update finally allowed non-admin users to set up app containers, which is the change MXC is built on. The complaint that a permissioning system arrives gated behind an enterprise SKU is the same complaint Linux users have been making about bubblewrap and Flatpak being free for a decade, and it will decide whether this ships as security or as a compliance checkbox.

## I'm sorry, but you still have to think — 219 points

**219 points** · 85 comments · [itsallaboutthebit.com](https://itsallaboutthebit.com/i-am-sorry-but-you-still-have-to-think/) · [HN discussion](https://news.ycombinator.com/item?id=50043689)

DHH had an agent rewrite Campfire from Rails into Rust, then Elixir, then Go, without reading the code. A developer went through the results and found that the comparison the exercise was supposed to support does not survive its own outputs: the LLM answered a pile of unasked questions differently each time, so the Rust version dropped the CSRF token for cache friendliness and replaced Redis with in-process queues, while the Elixir version stayed close to the original. Those choices have nothing to do with language, which makes "Rust is faster here" unfalsifiable. The prompt did not specify backwards compatibility, so the model made it a coin flip.

The argument underneath is about specification, not about AI. Every project has a long list of constraints nobody wrote down — latency versus throughput, memory ceilings, whether losing a notification on crash is acceptable — and a human implementer resolves them by asking, while a model resolves them by guessing and moving on. The thread mostly agrees and mostly disagrees about whether the example proves it: one commenter points out this is the ideal case for an LLM, since 90% of the thinking had been done by the people who built the original system, and another asks the question that actually matters for the outcome — after the port, in which codebase do new features land?

The best framing in the thread is the cheapest: workslop is hard to counter because it costs nothing to produce and a lot to debunk. Which is why the most concrete proposal in 85 comments is not a tool but a method — pre-commit the benchmark before the rewrite, and measure. Without that, the argument reduces to taste, and the defender of the rewrite gets to point at a working application for free.

## Knuth reward check — 218 points

**218 points** · 78 comments · [thomas-huehn.com](https://www.thomas-huehn.com/knuth-reward-check/) · [HN discussion](https://news.ycombinator.com/item?id=50034081)

Thomas Huehn found an error in *Computer Modern Typefaces* two decades ago, sat on it for months to make sure, and got a check from the Bank of San Serriffe — the fantasy bank Knuth has used since he stopped sending real cheques. The error was the word "infinitely" on page one, in the first paragraph, about a finite parameter space. The cheque shows $2.88 because a few years later Huehn sent in a second proposed error, was wrong, and Knuth wrote several paragraphs explaining why — and counted a throwaway sentence in the report as a good suggestion, so a second cheque for $0.32 was issued.

The story is the process. Knuth has been paying for forty years to get his books proofread to a standard nobody else in technical publishing attempts, and the incentive is engineered to reward precision rather than volume — which is why the comments fill with other recipients, one with two cheques and a wall-mounted frame, another who lost theirs and calls it the biggest regret of their life. It also explains why the reward has become folklore: the bounty is small enough to be worthless and the recognition is enough to matter.

The thread's sharpest turn is that this is now automated. The top-voted concern is that someone will run an LLM over the whole corpus and inundate an 88-year-old with machine-generated reports, and the polite version of the ask is: don't. That is the reward system meeting the first tool that makes its input cheap, and it is a preview of the same problem across bug bounties, code review and anything else whose value depended on the submission costing the submitter something.

## Terence Tao: Math 2.0 [pdf] — 214 points

**214 points** · 255 comments · [teorth.github.io](https://teorth.github.io/tao-web/slides/math-2-0-caltech-2026.pdf) · [HN discussion](https://news.ycombinator.com/item?id=50043026)

Slides from a Caltech talk arguing that mathematics has moved from an era of proof scarcity to an era of proof abundance, and that most of the field's institutions, incentives and stated objectives were built for the first one. The enabling properties are objective verifiability, digitizability, and a large high-quality corpus — the only three things modern machine learning needs, and the only research domain that has all three. Tao's point is not that AI is coming for mathematics; it is that mathematics is the easiest target in science, and the labs have noticed.

The two ideas worth arguing about are both about what gets lost. The first is that reaching an open problem's solution prematurely by automated tools can sterilise the surrounding field — the proof arrives, and the twenty years of partial results, techniques and intuitions that would have been built on the path get skipped. The second is the apprenticeship problem: the traditional route to becoming a mathematician ran through solving problems that are now solved, and there is no obvious replacement for the training and the community that came with it.

The comments are a mixed bag that refuses to split along the expected lines. Several people who work in drug discovery take issue with a cancer-medicine analogy on the grounds that plenty of approved drugs have mechanisms nobody fully understands, and general anaesthesia is the standard counterexample — so the demand that a human understand the mechanism before a machine's cure is used is stronger than the field's own practice. Others, including people reporting reactions from mathematicians who watched their long-standing problems fall, make the opposite point: the professional and emotional reality of the shift is not captured by the slides, and the slide deck's calm is a genre convention. The strongest defence of Tao is in the thread too: he has watched the thing happen to his own field within a year, and the talk is closer to a field report than a prediction.

## Why DuckDB 2.0 is faster — 209 points

**209 points** · 66 comments · [motherduck.com](https://motherduck.com/blog/why-duckdb-20-is-faster/) · [HN discussion](https://news.ycombinator.com/item?id=50035530)

A hands-on walkthrough of the 2.0 alpha from someone who runs pipelines rather than database internals: async I/O makes an S3 query over a 2.2 GB Parquet file go from 18.8 s to 7.7 s with no change to the query, because row groups can be fetched, decoded and filtered in parallel instead of in rounds. The other two headline items are a rewritten recursive CTE implementation and a redesign of worker scheduling. Async I/O is the one that changes what people can build, since it removes the penalty for keeping data in object storage rather than on local disk.

The measurement is honest about its own noise — one M5 laptop, home internet, "run your own before quoting them" — which is more than most vendor benchmarks offer. Worth reading alongside it: the comment that DuckDB is catching up to a task-based execution design that Umbra and CedarDB have used for years, which reframes the release from an innovation to a convergence. Databases are one of the few areas where the research-to-production gap is measured in decades, and async I/O management is the current example.

The other thing the thread notices is the writing. Two commenters independently suspect heavy LLM involvement and find it actively hard to parse, and a third is annoyed that triggers — a headline feature for anyone building applications — get a dismissive line while S3 read speed gets the section. That is a small thing and a telling one: when generated prose compresses a release into a narrative, the narrative picks the author's priorities, and the reader cannot tell what was left out.

## Five months treating bugs like patients and coding agents like a medical team — 207 points

**207 points** · 102 comments · [cockroachlabs.com](https://www.cockroachlabs.com/blog/experiment-running-hospital-code/) · [HN discussion](https://news.ycombinator.com/item?id=50021899)

Cockroach Labs mapped a hospital onto a code maintenance pipeline: Fellows diagnose and treat, a Review Attending is a separate agent instance prompted to find fault rather than fix, a Discharge Nurse audits whether the review actually happened, and escalation runs through an I-PASS handoff borrowed from teaching hospitals, with the receiving agent required to write back its understanding before it starts work. The rules that carry the load are the boring ones: no code before a reviewed plan, don't improvise, never disable or weaken a test to make it pass, and every review begins by disabling the change to confirm the new tests fail.

The precedent log is the most interesting mechanism in the piece. Every decision a human makes that generalises is recorded append-only, and an agent that wants to escalate must read the log first and follow the precedent with a citation — only humans create precedents, agents only consume them. That is a concrete answer to the problem every agent pipeline eventually hits, which is that the same judgement call gets re-litigated on every run because nothing persists except the code. Forcing the agent to cite before escalating also produces a log of which precedents keep being needed, which is the closest thing to a training signal anyone has proposed for this kind of system.

The Discharge Nurse is the part that would survive being ported to a normal team, and it is the least glamorous: the final gate does not reread the code, it verifies that an approval exists, the review template was filled, no threads are unresolved, CI is green, and the history is clean. The stated reason — you want to confirm the agents did what they were told, and sometimes they aren't — is the honest summary of five months of operating agents on code. Whether the medical metaphor adds anything is arguable; the checklists do.

## Computers Cannot Make Decisions — 206 points

**206 points** · 183 comments · [wiki.cateat.fish](https://wiki.cateat.fish/art:computers_cannot_make_decisions) · [HN discussion](https://news.ycombinator.com/item?id=50029982)

A short polemic with one useful coinage: decision laundering. The argument is that headlines about a model filing a false police tip or an undisclosed attack on a package registry assign agency to software, and that the labs could stop their models from doing these things and are choosing not to. The evidence is a list of recent incidents, and the rhetorical anchor is a 1979 IBM training slide: a computer can never be held accountable, therefore a computer must never make a management decision.

The thread's real contribution is that the framing is too clever in one direction and not clever enough in the other. Computer programs have made decisions since the first if-else, and algorithmic trading firms have had software deciding how to move billions for thirty years — with humans clearly and conventionally on the hook for what the software does. The sharper criticism is that "decision laundering" describes a management trope as old as management: credit up, blame down, three envelopes prepared in advance. Naming the AI version of it does not create a new accountability problem, it reveals that one already existed and had been quietly tolerated.

The most useful comment reframes the whole thing as an ordinary delegation problem. You do it yourself, you own it. You find someone in the park to do it for free, you still own it. You hire a professional, and now there is a contract that assigns the liability. Agents land in the middle — capable enough to be trusted with tools, with no contract and no counterparty — and the argument about whether they "decide" is really an argument about who signed up for the consequences. The answer is that nobody did, which is why the case law is being written now.

## What mathematicians should know about the Lean Theorem Prover: reliability & AI — 202 points

**202 points** · 58 comments · [terrytao.wordpress.com](https://terrytao.wordpress.com/2026/10/09/what-mathematicians-should-know-about-the-lean-theorem-proverquestions-of-reliability-and-ai/) · [HN discussion](https://news.ycombinator.com/item?id=50024090)

A guest post by Thomas Hales on Tao's blog, and the technical counterpart to the Math 2.0 talk. Formalization means checking a proof down to the foundations of logic by machine, and the roster is now long: the four-colour theorem, Feit-Thompson, Kepler, sphere eversion, sphere packing in 8 and 24 dimensions, Navier-Stokes blowup, and Fermat's Last Theorem — the last three completed this year. Hales's interest is not capability but reliability: what has to be true for a formal proof to mean what mathematicians think it means, and what the trust model looks like when the checker itself, the library of definitions, and the statement being proved are all inputs somebody wrote.

That is the question the AI conversation usually skips. A machine-checked proof is only as trustworthy as the statement it verifies, and the gap between "this theorem is proved" and "this theorem is what I meant" is the part that requires a mathematician. Hales also notes in passing that the post itself was written in another format and converted by an AI, which is the kind of disclosure that age will make look quaint in about eighteen months.

Read next to the Math 2.0 slides, the two posts make an unintentionally neat division of labour. Tao describes the sociological disruption — a field whose institutions assume proofs are expensive — and Hales describes the reliability model that makes the disruption tolerable, if it is correct. The comment count is 58 against Tao's 255, which tells you which half of the problem the audience wants to argue about.

## FDA may allow some toxic chemicals to be added to food without safety review — 201 points

**201 points** · 102 comments · [theguardian.com](https://www.theguardian.com/us-news/2026/oct/10/fda-toxic-chemicals-food-analysis) · [HN discussion](https://news.ycombinator.com/item?id=50033638)

The FDA is proposing to expand the "threshold of regulation" exemption — which currently lets a compound into food *contact* materials without review if it is not carcinogenic and is added below 0.5 parts per billion — so that some chemicals could go directly into food. The loophole's existing form is the case against it: a TOR exemption for perchlorate in grain bags measurably increased the compound's concentration in children's cereal, and hormone disruptors associated with neurological and reproductive harm in children are considered dangerous well below the 0.5 ppb line the exemption treats as safe.

The mechanism matters more than any single chemical. A threshold rule converts a safety determination into an arithmetic one, and the arithmetic is calibrated on carcinogenicity, which is a single endpoint among several — which is how a compound that is not a carcinogen at 0.5 ppb can still be a bad idea at 0.5 ppb. The most persuasive comment in the thread is about incentives rather than toxicology: if a threshold exists, a supplier with a batch at 0.4% contamination and a supplier at 0.25% have a strong reason to blend toward the limit, and the food supply becomes a disposal route for material that would otherwise need treatment. That is not speculation about the FDA, it is what any bright line invites.

The political framing on the thread is unavoidable, since the submission was posted by someone pointing at the gap between RFK Jr's stated positions and his department's actions. Whatever you think of him, the observation is the same either way: the number of exemptions the public can name is zero, the number of reviews is countable, and any proposal that removes a review step is a proposal to make the food supply less legible. The comments worrying about the substance also tend to overstate the mechanism — one reads "rocket fuel chemical" as implying rocket fuel in grain transport, when the actual use is static control — and that sloppiness is the reason the mainstream argument keeps failing.

## Still on the page

One hundred and thirty stories cleared 200 points in the ranked list this morning, and a hundred and five of them were already covered by an earlier roundup. Deltas below compare against the last number this roundup published for each story; scores are refreshed as of capture.

| story | last reported | now |
| --- | --- | --- |
| [Margaret Hamilton has died](https://news.mit.edu/2026/margaret-hamilton-computing-pioneer-dies-1007) | 2,115 (10-10) | 2,122 (+7) |
| [Mistral Large 4](https://mistral.ai/news/mistral-large-4/) | 2,036 (10-10) | 2,040 (+4) |
| [Triple-A Minesweeper](https://minesweeper.mikelacher.com/) | 1,305 (10-10) | 1,407 (+102) |
| [Cloudflare acquires Deno](https://deno.com/blog/cloudflare) | 1,327 (10-10) | 1,363 (+36) |
| [Sharing AI progress in mathematics](https://openai.com/index/sharing-ai-progress-in-mathematics/) | 1,348 (10-10) | 1,351 (+3) |
| [Why isn't the industry freaking out about DeepSeek 4.1 Flash?](https://www.dgt.is/blog/2026-10-07-deepseek-freek-out/) | 1,107 (10-10) | 1,119 (+12) |
| [Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5) | 1,045 (10-10) | 1,046 (+1) |
| [Sorry, I'm in a meeting](https://iminafleeting.com/) | 991 (10-10) | 1,030 (+39) |
| [Whistle: Speech to Text in 16.9 MB](https://cactuscompute.com/blog/whistle) | 944 (10-10) | 951 (+7) |
| [Man discovers his parents' coffee machine used 1TB of data in 10 days](https://www.dexerto.com/entertainment/man-discovers-his-parents-coffee-machine-used-1tb-of-data-in-10-days-3416399/) | 943 (10-10) | 949 (+6) |
| [Trump administration is suspending Microsoft from a green card program](https://apnews.com/article/h1b-visa-program-vance-microsoft-e7b3a407f822702b269ee277d21343ea) | 934 (10-10) | 938 (+4) |
| [I hired an illustrator to draw my house. Now it's my Home Assistant dashboard](https://antonfrolov.substack.com/p/i-hired-an-illustrator-to-draw-my) | 919 (10-10) | 927 (+8) |
| [Yes, and](https://htmx.org/essays/yes-and/) | 766 (10-10) | 783 (+17) |
| [Tell HN: I've been paying for a rural Tanzanian's education for 10 years](https://news.ycombinator.com/item?id=50006366) | 760 (10-10) | 767 (+7) |
| [REA Reverse – Engineer Anything](https://rea.tools/) | 640 (10-10) | 761 (+121) |
| [GPT‑6 and Intelligent UI for everyone](https://openai.com/index/gpt-6-for-everyone/) | 755 (10-10) | 756 (+1) |
| [Show HN: Bigwords.page – Turn any screen into a sign. The URL is the app](https://bigwords.page/) | 717 (10-10) | 720 (+3) |
| [Our $445M Series D](https://oxide.computer/blog/our-445m-series-d) | 686 (10-10) | 697 (+11) |
| [YouTuber Says Cops Visited Him After He Built a Flock-Style Camera to Track Cops](https://gizmodo.com/youtuber-says-cops-paid-him-a-visit-after-he-built-flock-style-camera-to-track-cops-2000824306) | 646 (10-10) | 691 (+45) |
| [“Math 2.0” will need to value mathematical progress more holistically](https://mathstodon.xyz/@tao/117395269325940185) | 610 (10-10) | 611 (+1) |
| [Visa, Mastercard, major banks facing new litigation over 'anticompetitive' fees](https://www.classaction.org/news/visa-mastercard-major-banks-facing-new-litigation-over-anticompetitive-merchant-credit-card-transaction-fees) | 602 (10-10) | 602 (+0) |
| [JetBrains reports revenue growth, net financial loss for 2025](https://www.helgilibrary.com/companies/jetbrains) | 595 (10-10) | 595 (+0) |
| [Nobel Prize in Physics 2026: Francis Halzen](https://www.nobelprize.org/prizes/physics/2026/) | 581 (10-10) | 582 (+1) |
| [Shipping JPEG XL in Chrome](https://developer.chrome.com/blog/jpeg-xl-in-chrome) | 573 (10-10) | 574 (+1) |
| [Tell HN: GitHub refuses to remove cracked copies of my software after a month](https://news.ycombinator.com/item?id=49982498) | 568 (10-10) | 571 (+3) |
| [Theranos.world](https://www.theranos.world/) | 562 (10-10) | 567 (+5) |
| [ChatGPT is adding real cartoonists' signatures to fake New Yorker cartoons](https://www.niemanlab.org/2026/10/chatgpt-is-adding-real-cartoonists-signatures-to-fake-new-yorker-cartoons/) | 558 (10-10) | 558 (+0) |
| [Beam: Reflection's 501B open-weight model](https://reflection.ai/blog/introducing-beam) | 554 (10-10) | 554 (+0) |
| [US imposes sanctions on ICC hours after former judge wins Nobel Peace Prize](https://www.reuters.com/world/us-imposes-sanctions-international-criminal-court-hours-after-former-judge-wins-2026-10-09/) | 508 (10-10) | 518 (+10) |
| [Lobbying is corruption](https://carette.xyz/posts/lobbying_and_corruption/) | 441 (10-10) | 504 (+63) |
| [Opus 5.5 agents discover two room-temperature magnetic semiconductor candidates](https://www.vals.ai/blogs/room-temperature-magnetic-semiconductors) | 493 (10-10) | 494 (+1) |
| [Nobel Peace Prize for 2026 to Navanethem Pillay](https://www.nobelprize.org/prizes/peace/2026/press-release/) | 477 (10-10) | 490 (+13) |
| [Grieving the loss of details](https://purplesyringa.moe/blog/grieving-the-loss-of-details/) | 233 (10-10) | 481 (+248) |
| [Polars 2.0](https://pola.rs/posts/release-polars-2/) | 469 (10-10) | 469 (+0) |
| [Animated ASCII Art for Web Pages](https://ascii.rest/) | 466 (10-10) | 466 (+0) |
| [Telegram Desktop vulnerability allowed any user's file to be stolen](https://beaksec.github.io/posts/telegram-desktop-one-click-account-takeover/) | 364 (10-10) | 457 (+93) |
| [Typesafe AI raises $870M at $7.5B](https://typesafe.ai/blog/series-ai) | 423 (10-10) | 442 (+19) |
| [EmbeddingGemma 2: An open, lightweight multimodal embedding model](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/) | 436 (10-10) | 436 (+0) |
| [OpenAI annualised revenues $20B less than previously signalled](https://www.cnbc.com/2026/10/08/open-ai-revenue-nvidia-oracle-coreweave.html) | 429 (10-10) | 431 (+2) |
| [Show HN: Carrier-Explode: iPhone, Pixel and Galaxy carrier settings decoded](https://carrierexplode.com/) | 400 (10-10) | 421 (+21) |
| [Show HN: Let your AI agents paint big arrows, boxes and text on your screen](https://github.com/franzenzenhofer/big-arrow-on-the-screen) | 408 (10-10) | 414 (+6) |
| [Ask HN: What do you run on a $5 VPS that's worth keeping online 24/7?](https://news.ycombinator.com/item?id=49985548) | 402 (10-10) | 414 (+12) |
| [I gave Opus 5.5 one prompt and six hours to visualize Invisible Cities](https://quesma.com/blog/invisible-cities-one-shot/) | 408 (10-10) | 411 (+3) |
| [A font recreated from photographs of classic Commodore 64 keycaps](https://github.com/szabadkai/c64-keyboard-font/) | 406 (10-10) | 407 (+1) |
| [The Mathocalypse](https://scottaaronson.blog/?p=10169) | 401 (10-10) | 404 (+3) |
| [`123456' password used in Danish CPR data breach](https://cphpost.dk/2026-10-10/news/round-up/123456-password-used-in-massive-danish-cpr-data-breach/) | 351 (10-10) | 402 (+51) |
| [ADHD as a circadian rhythm disorder: evidence and implications for chronotherapy (2025)](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1697900/full) | 394 (10-10) | 401 (+7) |
| [Decisions API is in public beta](https://developers.openai.com/api/docs/guides/decisions) | 391 (10-10) | 391 (+0) |
| [Bitwarden Dual License Model](https://community.bitwarden.com/t/published-version-update-in-app-stores/102750) | 284 (10-10) | 390 (+106) |
| [OpenAI withdraws three mathematical results](https://twitter.com/danintheory/status/2108065033070789090) | 376 (10-10) | 379 (+3) |
| [Meta and Microsoft take steps to reduce employee usage of Claude AI](https://www.rswebsols.com/news/meta-and-microsoft-take-steps-to-reduce-employee-usage-of-claude-ai/) | 375 (10-10) | 376 (+1) |
| [AnyPS5: Port PS5 binaries to PC without emulation (87% system libraries mapped)](https://github.com/boykopovar/AnyPS5) | 370 (10-10) | 372 (+2) |
| [Living off-grid: Hundred Rabbits](https://100r.ca/site/home.html) | 365 (10-10) | 365 (+0) |
| [OpenAI fires three safety researchers for "mishandling research information"](https://techcrunch.com/2026/10/08/fired-openai-safety-researchers-dispute-misconduct-claims-warn-of-chilling-effect/) | 353 (10-10) | 363 (+10) |
| [Example.com just launched the biggest redesign in decades](https://www.debugbear.com/blog/example-dot-com-redesign-history) | 359 (10-10) | 360 (+1) |
| [Navier–Stokes Lost in Translation](https://arxiv.org/abs/2610.08144) | 358 (10-10) | 359 (+1) |
| [Nature's capacity to 'bounce back' when species are lost is overestimated: study](https://phys.org/news/2026-10-nature-capacity-species-lost-vastly.html) | 354 (10-10) | 355 (+1) |
| [OpenTPU – An open-source AI accelerator, developed by AI](https://github.com/FeSens/openTPU) | 346 (10-10) | 347 (+1) |
| [Keyboard differences between Windows and Macs](https://unsung.aresluna.org/deeper-dive-keyboard-differences-between-windows-and-macs/) | 337 (10-10) | 345 (+8) |
| [Anti-patterns in software blogging](https://refactoringenglish.com/blog/anti-patterns-software-blogging/) | 334 (10-10) | 338 (+4) |
| [Eye of Sauron: Long-Range Hidden Spy Camera Detection (2024)](https://www.usenix.org/conference/usenixsecurity24/presentation/zhang-qibo) | 277 (10-10) | 335 (+58) |
| [Beauty in DVD Menus](https://vale.rocks/posts/dvd-menus) | 332 (10-10) | 333 (+1) |
| [No Man Is an Island](https://borretti.me/article/no-man-is-an-island) | 311 (10-10) | 324 (+13) |
| [Friendship ended with Deno, now Node is my best friend](https://dbushell.com/2026/10/03/deno-to-node/) | 322 (10-10) | 322 (+0) |
| [Talorys – A self-hosted personal AI agent on Cloudflare's free tier](https://github.com/rociiu/talorys) | 201 (10-10) | 319 (+118) |
| [Gleam doesn't compile to Erlang source anymore](https://gleam.run/news/gleam-doesnt-compile-to-erlang-source-anymore/) | 318 (10-10) | 318 (+0) |
| [Python 3.15](https://www.python.org/downloads/release/python-3150/) | 302 (10-10) | 314 (+12) |
| [Find the flattest route between any two points in SF](https://flattensf.com/) | 311 (10-10) | 311 (+0) |
| [Docker Agent](https://github.com/docker/docker-agent) | 303 (10-10) | 304 (+1) |
| [Nobel Prize in Chemistry 2026 to Henri B. Kagan and Kenso Soai](https://www.nobelprize.org/prizes/chemistry/2026/press-release/) | 303 (10-10) | 303 (+0) |
| [What's Earth's dominant species by mass?](https://signoregalilei.com/2026/09/27/whats-earths-dominant-species-by-mass/) | 303 (10-10) | 303 (+0) |
| [I think I found a planet nobody knew existed. I used Claude Code to find it](https://www.reddit.com/r/ClaudeAI/s/mbe5IY2LF9) | 286 (10-10) | 298 (+12) |
| ['Wallace and Gromit,' 90% Alone](https://animationobsessive.substack.com/p/wallace-and-gromit-90-alone) | 274 (10-10) | 298 (+24) |
| [Why Common Lisp is now the best programming language](https://www.vivienhenz.com/common-lisp) | 295 (10-10) | 295 (+0) |
| [The Slow Formation of Durable Software](https://newsletter.dancohen.org/archive/the-slow-formation-of-durable-software/) | 291 (10-10) | 293 (+2) |
| [How did Rosalind Franklin miss the helix in her iconic DNA image? She didn't](https://www.science.org/content/article/how-did-rosalind-franklin-miss-helix-her-iconic-dna-image-she-didn-t) | 292 (10-10) | 292 (+0) |
| [Strands Decider 2B: a small, open-source, decision model](https://strandsagents.com/blog/introducing-strands-decider/) | 285 (10-10) | 285 (+0) |
| ['Jonathan' is the oldest land animal on Earth](https://www.404media.co/oldest-living-land-animal-jonathan-the-tortoise/) | 279 (10-10) | 279 (+0) |
| [Dust: Pretraining Transformers Without Backpropagation](https://qlabs.sh/research/dust) | 279 (10-10) | 279 (+0) |
| [Programming Isn't Special](https://blog.glyph.im/2026/10/programming-isnt-special.html) | 251 (10-10) | 275 (+24) |
| [Paramount Skydance has completed its $111B merger with Warner Bros. Discovery](https://arstechnica.com/tech-policy/2026/10/paramount-completes-111b-warner-merger-creating-skydance-behemoth/) | 271 (10-10) | 272 (+1) |
| [Claude Code’s suggested message feature: I think the real customer is the model](https://www.zohaib.cc/blog/smartest-claude-code-feature) | 269 (10-10) | 269 (+0) |
| [4-hour battery storage is cheaper to install than gas turbines all across globe](https://www.solarpowerworldonline.com/2026/10/4-hour-battery-storage-is-cheaper-to-install-than-gas-turbines-all-across-globe/) | 260 (10-10) | 261 (+1) |
| [Cleo (Mathematician)](https://en.wikipedia.org/wiki/Cleo_(mathematician)) | 248 (10-08) | 255 (+7) |
| [Bevy 0.20](https://bevy.org/news/bevy-0-20/) | 250 (10-10) | 252 (+2) |
| [How machines learned precision](https://glinscott.github.io/how-machines-learned-precision/) | 243 (10-10) | 247 (+4) |
| [State of Devs 2026](https://2026.stateofdevs.com/en-US/) | 244 (10-10) | 245 (+1) |
| [Yandex Takes a Second Data Center Hit in 48 Hours](https://united24media.com/war-in-ukraine/yandex-takes-a-second-data-center-hit-in-48-hours-now-its-biggest-russian-site-is-damaged-23277) | 231 (10-10) | 243 (+12) |
| [God of War on PSP, recompiled to WebAssembly and running in the browser](https://github.com/snuri00/psp-web-recomp) | 241 (10-10) | 242 (+1) |
| [Penguin Mail – open-source Rust email client for Linux with AI](https://penguin-mail.com/) | 241 (10-10) | 241 (+0) |
| [Show HN: Quake ported to safe Rust, playable in browser](https://quake-srp.pages.dev/) | 234 (10-10) | 239 (+5) |
| [House with 15m underground tunnels for sale for 300k](https://www.readingchronicle.co.uk/news/26612080.house-15m-underground-tunnels-sale-300k/) | 236 (10-10) | 238 (+2) |
| [DuckDB Ducklake](https://github.com/duckdb/ducklake) | 234 (10-10) | 237 (+3) |
| [The value of not getting to the point (2015)](https://ken.arneson.name/2015/11/the-value-of-not-getting-to-the-point/) | 233 (10-10) | 233 (+0) |
| [WSL3 Performance is about 5-60% faster than WSL2 depending on the workload](https://tonym.us/wsl2-vs-wsl3-benchmarks.html) | 217 (10-10) | 232 (+15) |
| [Orkut.com](https://orkut.com/) | 230 (10-10) | 232 (+2) |
| [Why were Victorian elites so effective?](https://worksinprogress.co/issue/the-seven-vices-of-highly-effective-victorians/) | 227 (10-10) | 230 (+3) |
| [ETH-68: Ethernet Audio Interface for Linux](https://naturalsystems.io/eth68) | 217 (10-10) | 221 (+4) |
| [Show HN: Making a flexible "neon" t-shirt with LED filaments](http://scottbezek.blogspot.com/2026/10/making-flexible-neon-t-shirt-with-leds.html) | 220 (10-10) | 221 (+1) |
| [Germany transforms former coal mines into Europe's largest lake landscape](https://www.euronews.com/2026/04/14/almost-like-lake-como-germany-transforms-former-coal-mines-into-europes-largest-lake-lands) | 207 (10-10) | 212 (+5) |
| [Anthropic AI model submits false tip on unsolved Philly murder, police say](https://www.nbcphiladelphia.com/news/local/anthropic-ai-model-submits-false-tip-on-unsolved-philly-murder-police-say/4477051/) | 204 (10-10) | 211 (+7) |
| [OpenAI, the Partition Principle, and Mathematics](https://karagila.org/2026/openai-pp/) | 205 (10-10) | 210 (+5) |
| [US man given prison sentence for bot-farming music streams](https://thequietus.com/news/us-man-given-prison-sentence-for-bot-farming-music-streams/) | 209 (10-10) | 209 (+0) |
| [Wood Tape (2004)](http://gamesbyemail.com/WoodTape/Default.htm) | 206 (10-10) | 206 (+0) |
| [The people holding up the internet](https://sheets.works/data-viz/holding-up-the-internet) | 205 (10-10) | 206 (+1) |

Seventy-nine of the hundred and five gained ten points or less, and twenty-four gained nothing at all. That distribution is the whole story: the movers are almost entirely stories where the argument is unresolved, and the flat ones are stories that got their points in the first six hours and then stopped. The largest gain belongs to an essay about losing detail in digital work, which nearly doubled from 233 to 481 — a story with no news hook that kept finding readers. Behind it, three runners: REA Reverse at +121, Talorys at +118 on the strength of the argument about whether deploying to your own Cloudflare account counts as self-hosting, and Bitwarden's licence change at +106, which is the same argument in the same week reaching a different company if you squint.

The pattern across the movers is that nothing on this list is being discovered any more. Cloudflare/Deno added 36 points in a day after adding 476 the day before, which is what a thread looks like when it is winding down rather than resolving. Telegram's one-click account takeover went from 364 to 457, the Danish CPR breach from 351 to 402, and the Flock-camera story from 646 to 691 — all security stories where the interesting question is whether the fix has shipped, and none of them has an answer yet. Twenty-four stories at exactly zero is the tell that the page's traffic today is re-reading, not first-reading.

## Throughline

Three things were being decided today, and only one of them involves a computer deciding anything.

The first is that the legal channel is where most of these stories end, and the outcomes are running against the people doing the work rather than the people with standing. Nitter's maintainer has no lawyer, is asking for crypto donations, and has retracted his own previous claim that the project was covered — because the entity that promised him representation turned out not to be there. WallHop is the fourth or fifth implementation of a bypass whose predecessors all died the same way, and its author has omitted the one thing that would help the next person: the licence it was forked from. Exxon's internal memos keep being filed, and the company's answer is procedural — that courts should not take the role of policymakers — which is not a defence of the facts and never was. In all three, the substantive claim is strong and the asymmetry that decides the outcome is resources.

The second is the reliability of the tools people are betting on, and today's evidence is unusually direct. Microsoft ships a containment system for agents at version 1.0 and the people who install it describe a tech preview with documentation that reads like a stream of consciousness — a permissioning mechanism delivered as a checkbox. DuckDB 2.0 makes S3 queries 2.4x faster by doing in parallel what Umbra was doing years ago, which is progress and not novelty. LineageOS is early to Android 17, and its most interesting move is a target that boots on generic x86 and Apple Silicon hardware: maintainers volunteering the patching labour that vendors will not sell. The pattern is not that these projects are bad, it is that the useful ones are boring in exactly the ways the marketing is not.

The third is the one the page spent the most comments on without saying it plainly: the constraint that has not moved is human attention, and everything that skips it gets caught downstream. DHH's rewrites are the clean example — the code compiled, the comparison was meaningless, and the missing ingredient was a list of unstated requirements. Tao's slides are the same observation at field scale, and Hales's post is the version that computes: a machine-checked proof is only as good as the statement someone wrote down. The cockroachlabs experiment is the most useful answer on the page because it stops trying to remove the human and instead makes the human's decisions persistent — precedent logs, required citations, a reviewer whose only job is finding fault. And the Knuth cheque story is the control case: the reward worked for forty years because the submission cost the submitter something. The tool that makes the submission free is the one that breaks it.


