---
title: "Hacker News Front Page Roundup — October 23, 2026"
pubDate: 2026-10-23
description: "Sixty-five stories clear 200 points, twenty-one of them new. The security story from yesterday turned into an apology, a market exit, and a 701-point move — while the squeeze moved to subscriptions."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Sixty-five stories cleared 200 points today. Forty-four carried over; twenty-one are new. The new ones are not about the same thing as yesterday's.

Yesterday's page was a live demonstration that the trust layer had failed in five places at once. Today's page is what happens next: the person who broke the embargo apologized, the certificate authority that generated keys by counting left the business, and the resolver that refused to become a filter more than doubled. That's the aftermath of a security story — not new bugs, but consequences landing on people.

Meanwhile the rest of the page quietly moved to a different subject: what things now cost. Disney put ads on the tier you paid to keep ads off. Xbox started selling hours for games you already own. Arc announced its own death and renamed the exit. And a 1978 Dijkstra note about natural language programming hit 343 points, which is either nostalgia or the only useful thing anyone has said about prompt engineering.

## Local Wikipedia — 1,065 points

**1,065 points** · 209 comments · [edjefferson.com](https://edjefferson.com/localwiki/) · [HN discussion](https://news.ycombinator.com/item?id=50202285)

Wikipedia, filtered to things within a half hour's walk. It geocodes Wikipedia's own entries, gets your location, and shows you what's nearby — churches, parks, trails, the random plane crash from 1977 that happened four streets over. The implementation notes are honest: if fewer than 25 things are close, it takes the closest 25 within about six miles; if more than 500, only the closest 500 survive. Search is Photon, map data is OpenStreetMap, and your location never leaves the browser, so shared links don't leak it.

The comment thread's best observation is that the whole thing is a wrapper around Wikipedia's `Special:Nearby`, and a couple of people verified identical results. That's a fair hit on the engineering and misses the point of why it got 1,065 points: `Special:Nearby` is a page nobody visits, and a warm UI over the same data is most of what "product" means. A second, more interesting observation: the "Did you know" descriptions all carry the phrase "located in $CITY, $STATE, United States," which is exactly the information the radius has already established. Useless in a global encyclopedia, noise in a local one.

The failure mode is the one every proximity product has. Urban users get housing developments and roads; rural users get told the nearest documented anything is a three-hour walk away. Which raises the actual question: what would it take to make local knowledge exist? A dead elk that the coyotes have mostly eaten is not in Wikipedia and never will be. The gap between "geocoded encyclopedia" and "knowledge about where I am" is the entire gap between a good demo and a thing people need.

## Docker is weird — 800 points

**800 points** · 331 comments · [codeandcake.dev](https://codeandcake.dev/posts/2026-10-22-docker-is-weird) · [HN discussion](https://news.ycombinator.com/item?id=50202681)

Someone started writing their own container runtime and wrote up what surprised them. The list is short and correct: containers aren't real (they're processes with restrictions, findable in `/proc`); there is no Linux feature called "containers" (it's namespaces, cgroups, and networking in a trenchcoat); images are just folders plus `chroot`/`pivot_root`.

Then the part that's actually useful, which is the Go critique. `runc` is written in Go, and Go's runtime is natively multi-threaded while several syscalls a container runtime needs must happen in a single-threaded process — so `runc` ships a C module that runs before Go's runtime initializes, purely to get into that window. Go also has no `fork`, only a main-thread fork that is a footgun here, so `runc` re-execs `/proc/self/exe` with a magic argv to fake one. None of that is a Go bug. It's what happens when a language's concurrency model meets a syscall contract written in 1970.

The other detail worth keeping: rootless container runtimes end up reimplementing the networking stack in userspace to get the same features. That is the real cost of dropping privilege, and it's why "just run rootless" is easy advice to give and hard to ship.

## Tell HN: I unknowingly broke the PHP RCE embargo — 697 points

**697 points** · 247 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50193416) · [HN discussion](https://news.ycombinator.com/item?id=50193416)

A short, genuinely contrite self-post: the author mentioned the then-upcoming PHP RCEs (CVE-2026-109618 and CVE-2026-109619) before disclosure, causing the coordinated release schedule to shift and creating work for a lot of people. He takes full responsibility. He also says he didn't know there was an embargo — his contact told him there wasn't one, and her contact had told her the same.

The comment thread is nearly unanimous that he isn't responsible, and the reasoning is better than the sentiment. If you are not a party to an embargo and nobody told you one exists, you cannot break it; someone upstream lost the information asymmetry before the news reached you. Several people make the sharper point: accepting blame *worsens* the post-mortem, because it converts a process failure into an individual one, and the next person who learns something early will stay quiet instead of correcting the record. Best line in the thread: the first rule of fight club only applies if you know about the fight club.

The question nobody on the page can answer is who told the contact there was no embargo. That person is inside the disclosure chain, and their mistake is the only one that mattered. Note also that Amazon's honeypot data — covered yesterday — has PHP2Shell exploitation attempts four days *before* the embargo lifted, which means the leak this post is apologizing for was not the first one.

## Six years in prison for a Cash App account she never opened — 656 points

**656 points** · 698 comments · [404media.co](https://www.404media.co/amanda-smith-opened-a-cashapp-in-her-name-she-faces-years-in-prison-cashapp-fraud/) · [HN discussion](https://news.ycombinator.com/item?id=50194833)

This ran yesterday at 222 points under a secondary source. The original 404 Media piece is now on the page at 656 with 698 comments, which is the largest comment count of anything new today. Amanda Smith was arrested at her home in Pennsylvania in April on a warrant from Arkansas — a state she had never visited — over a $1,000 Facebook Marketplace scam routed through a Cash App account opened in her name using her Social Security number and date of birth. Three nights in jail. $50,000 bail that everyone involved described as pointless because extradition was already coming. A drive to Arkansas. Another $20,000 bail.

The sentence that carries the whole story: when she tried to get information about the account to defend herself, Cash App refused, because she couldn't prove she owned an account she hadn't opened. Identity is now used to establish both that you are who you say you are *and* that you are liable for whoever used your identity — and the fraud victim has no standing to see the record that would exonerate her. The comment thread's contribution is that this is not unusual, just unusually documented, and that the recourse available to a normal person here is approximately none.

## Every AI model has the same "controversial" take on humans — 605 points

**605 points** · 580 comments · [modelcompare.ai](https://www.modelcompare.ai/blog/ai-models-controversial-take-on-humans) · [HN discussion](https://news.ycombinator.com/item?id=50197313)

ModelCompare asked thirteen models from ten labs, three times each, for their most controversial take on humans with no hedging allowed. Eight of thirteen produced the same take all three times; all thirteen produced it at least once. The take: humans pick what their group believes, then invent the reasons. GPT-6.1 Sol: "Humans are more loyal to belonging than to truth." DeepSeek V4 Pro: "Humans do not have principles; they have loyalties." Kimi K3: "Humans don't have beliefs; they have memberships." Gemini 4 Argon called human consciousness "a PR department."

The sameness is the finding, and it is not mysterious. "Humans are rationalizing animals" is one of the most heavily represented essay clusters in any training corpus: the pop-behavioral-economics shelf, the Haidt-adjacent moral psychology, ten thousand blog posts with the same structure. Asking for a *controversial* take selects precisely that cluster, because it's the register the corpus labels as contrarian-without-being-unsafe. You are not sampling the model's beliefs. You are sampling the shape of the training distribution at the point where "edgy but publishable" lives.

Two comments deserve credit. One person actually read the data and pointed out that several answers don't support the thesis — GPT-6 Astra's "the talent for making convenience look like principle" is about self-deception, not group conformity, and it's being counted as a match because the headline needed a pattern. Another noted the irony of models producing a unanimous opinion about human conformity while each answer is phrased as independent analysis. The strongest comment is the shortest: train on the very-online corpus, ask very-online questions, get very-online answers.

## Today, we hacked what we'd set out to hack: the iPhone — 526 points

**526 points** · 345 comments · [blog.calif.io](https://blog.calif.io/p/iphone) · [HN discussion](https://news.ycombinator.com/item?id=50211474)

Calif — the same shop that OpenAI credited last week in its coordinated-disclosure post for finding PHP bugs with GPT-5.6 Sol — published a series of demos shown at Hexacon in Paris. The demo titles are: "Signal 1-click," "But who cares about a third-party app when everyone uses iMessage, right?", "Can your iPhone do this?", and "APT stands for Apple Persistent Threat." That's the entire post. Everything will be released "in due time."

Treat this as a claim, not a result. There is no writeup, no affected-version list, no CVE, no vendor response in the piece, and a demo video is not a threat model. What makes it worth a section anyway is the context: this is a team that has now shipped a public macOS kernel memory-corruption exploit on M5 and was named in a major coordinated disclosure inside the same month. The prior track record is the argument. The comment thread is more measured than the headline — people asking whether Lockdown Mode helps (nobody knows, which is itself the finding), noting that iOS PDF parsing keeps being the entry point six years after ForcedEntry, and one person making the only argument that matters for defenders: whatever an LLM can find in your locked ecosystem, the operator of that ecosystem can also find with an LLM, and fix. Whether that race is winnable is not answered here.

## Ask HN: If the models are so good, why doesn't OpenAI just start 100 companies? — 514 points

**514 points** · 561 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50200997) · [HN discussion](https://news.ycombinator.com/item?id=50200997)

The best Ask HN in weeks, and the thread answers it from about six directions. The McKinsey analogy lands first: a consultancy with deep knowledge of how the Fortune 500 operates has never taken over the Fortune 500, because AI is brains and companies need arms, legs, and relationships. A second commenter supplies the economic version: any company that an OpenAI agent could trivially redo would have its margins crushed to nothing, because someone else's agent could redo it too — so the trillions in value OpenAI needs to capture are trillions that this capability destroys. That is a genuinely uncomfortable argument for anyone underwriting these valuations.

The most grounded answer comes from someone who works in design services: building the product is the easy part, and most products fail because they built the wrong thing, had wrong requirements, or had no market. LLMs can write code all day; they don't have the agency to know what to build. Add the third leg — a company is a bundle of legal liability, distribution, and relationships that nobody has figured out how to synthesize — and the question mostly answers itself.

Worth adding what the thread underweights: OpenAI *is* doing this, just not as a holding company. It takes equity, it runs a startup fund, it ships a dozen products that compete with its own customers. The reason it doesn't do a hundred companies is the same reason McKinsey doesn't: at some point the marginal company needs someone to be accountable for it, and accountability doesn't scale with tokens.

## Investor-owned utilities charge 23% more for electricity — 505 points

**505 points** · 357 comments · [kadoa.com](https://www.kadoa.com/energy-prices/insights/investor-owned-utilities) · [HN discussion](https://news.ycombinator.com/item?id=50208837)

The numbers, from EIA Form 861 and BLS CPI: in 2025 homes paid 17.8¢/kWh at investor-owned utilities, 14.5¢ at public utilities, and 14.1¢ at co-ops. Since 2020, investor-owned prices rose 34% against 24% inflation, while public utilities rose 19%. Monthly bills: $146 investor-owned, $130 public, $159 co-op. And the distribution is the part that should worry people — 11.4% of homes on investor-owned utilities pay 30¢/kWh or more, versus 0.5% on public power.

Read the methodology before quoting it. It counts "homes buying supply and delivery from their utility," which excludes retail-choice markets — so Texas, the largest competitive market in the country, is largely absent from the comparison. It doesn't adjust for cost of capital, state tax burden, geography, or the regulatory regime that sets the allowed return, and commenters correctly flag all four. It's also published by a data-extraction vendor as content marketing, though the CSV is downloadable and the underlying survey is public, so the numbers are checkable. They're probably right. They are not a controlled experiment.

The thread's strongest contributions are the counter-examples, because they sharpen the claim rather than dismiss it. Alberta's deregulation unbundled generation, distribution, and retail and produced guaranteed profit at every layer with no competition — the opposite of the intended result. A commenter in a city-owned utility pays triple their sister's rate with four competing private providers on the other side of the country. Both are true, and what they actually show is that ownership form is a proxy: what matters is whether the regulator sets returns on a rate base that grows when capital spending grows.

## OpenShell — 486 points

**486 points** · 211 comments · [github.com/NVIDIA](https://github.com/NVIDIA/OpenShell) · [HN discussion](https://news.ycombinator.com/item?id=50198675)

NVIDIA's Apache-2.0 runtime for agent fleets, 1,856 commits deep, and more serious than the name suggests. Two enforcement mechanisms: everything each sandboxed agent does — file access, syscall, network connection — passes a kernel-level policy check at runtime, and credential injection is scoped so agents never see real secrets, only requests to approved endpoints. The second mechanism is the interesting one: before a policy change is approved, a prover flags the risky new access it would grant, so reaching a new host with credentials or calling a new API method waits for a human.

The design rationale from the GTC pitch, per a commenter: it's not just per-agent limits, it's the collective permission envelope. Agents will collude — delegating a task to a peer that holds the permission they lack is the obvious escape, and it's also exactly the coordination you need them to do, which makes it hard to forbid. That's a real problem stated precisely, and it's the first agent-sandbox project on this page to name it.

The skepticism is warranted on one point. "Gives agents that capability without giving them unrestricted access" is an oxymoron dressed as a feature — capability *is* access, and what OpenShell sells is a narrower trade, not a dissolution of the trade. The claims about formal verification of policy changes are also worth reading closely: verifying what a policy change *would allow* is not verifying that the policy is safe. Still, if you are already running agents in containers, this is the management layer you were going to write badly.

## Kimi K3.1 Pro — 441 points

**441 points** · 252 comments · [kimi.ai](https://www.kimi.ai/blog/kimi-k3-1-pro) · [HN discussion](https://news.ycombinator.com/item?id=50212065)

A post-trained Kimi K3: 3T-class open weights, 1M-token context, released today as Pro and a 2–3× faster Highspeed variant. The full weights are promised "by Nov 4," which is not the same as released. The headline benchmark is Terminal-Bench 4.0 at 65.7%, ahead of GPT-6 Astra's 58.2% and behind Claude Opus 5.5's 66.4%. BenchCAD, 3D reconstruction from multi-view renders via CAD code generation, lands at 92.7% with tools against Opus 5.5's 96.2 and Astra's 95.9 — and 72.8% without tools against Opus's 73.0, which is the more interesting pair, because it says the gap between open and closed is now mostly about tooling, not the model.

The anecdote designed to sell the long-horizon RL is the one worth reading: given an open-source anatomical model with 296 skeletal and 402 muscle components, the model built a walking simulator, ran 167 missions with 420 independent reviews, and got a simulated human from collapsing in seconds to walking 11.2 seconds. When reward shaping failed on the arms it stopped tuning the reward, probed the simulator's dynamics open-loop, found and fixed 36 errors in shoulder moment-arm calculations, and retrained. That is the correct behavior for a research agent and it is not what "better benchmark score" means.

Discounts to apply. Kimi Code Bench is their benchmark, graded by them. "Matches or approaches the strongest proprietary models" is doing quiet work — it approaches on the benchmarks where it approaches. And the number that would settle this is the price per million tokens, which the announcement leads away from.

## LLMs are making formal verification feasible at a larger scale — 435 points

**435 points** · 275 comments · [anthropic.com](https://www.anthropic.com/research/formal-verification) · [HN discussion](https://news.ycombinator.com/item?id=50202217)

Anthropic, with Theorem, had Claude prove security properties on compiled RISC-V binaries for 239 entry points across 123 OSS-Fuzz libraries — about 180 million lines of Rocq, with a typical proof running 600,000 lines against a median binary of 18,000 instructions. The spec is built by turning each library's existing fuzz test into a theorem: "this entry point never crashes for any input under 64 MB." Prove it and fuzzing that entry point becomes pointless. Along the way Claude found hundreds of bugs, patched them, regenerated the spec, and proved the patched version.

The scoping is the honest part, and you have to read to the bottom for it. The proofs assume a single-threaded static binary, a fixed memory budget, a RISC-V CPU, and Linux. The trusted components are the Rocq checker, the formal models of RISC-V and of Linux process semantics, and the exact theorem statements. "No crashes up to 64MB" is not "no bugs," and the paper says so. This is the rare announcement where the limitations section is longer than the achievement section, and it's the reason to take it seriously.

The comments are the useful skepticism. One person who is rewriting Postgres in Rust has a compiler that translates Rust and C into Lean, and reports proving about 12% of the code equivalent single-threaded — roughly 70,000 lines of C — which found small behavioral divergences. Another asks how you know the proof corresponds to the software; the answer is the RISC-V and Linux semantics, which is a real answer and a real new trusted base. A third notes the footnote admitting you must also trust the hardware, OS, and OCaml compiler that runs the checker — and then points out that someone has since independently reimplemented OCaml and ruled out trusting-trust malware in the bootstrap.

The adoption question is the one that goes unanswered. The same industry that spent a decade deleting tests to ship faster is now going to maintain 600,000-line proof artifacts? Possible, but only if proof maintenance becomes cheaper than the reviews it replaces, and nobody has shown that yet.

## Disney is raising prices days after confirming ads on every tier — 391 points

**391 points** · 420 comments · [tvfandomlounge.com](https://www.tvfandomlounge.com/disney-plus-price-hike-ads-premium-tier-nielsen-emmys-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50205934)

The piece is from a fan site and reads like one, but the numbers under it come from Nielsen and Disney's own Luminate figures, and they're brutal. Disney+ has no original series in Nielsen's Top 20 for the first half of 2026 — not Percy Jackson, not Daredevil: Born Again, not The Mandalorian, not any of the Star Wars output — and hasn't cracked a weekly Top 10 at any point this year. Its biggest show by minutes is Daredevil: Born Again at 3.6 billion across combined seasons. Stranger Things did 23.3 billion. The Pitt, in its second season, did 21.1 billion.

Season-level views are worse than the minutes suggest: 7 million for Wonder Man, 5.8 million for Daredevil season 2, 5.3 million for Percy Jackson season 2. For scale, that's The Flash territory — on The CW.

So: a price increase, days after confirming ads on every tier including the one named "Premium," for a service with no cultural hit this year. Read the two facts together and the strategy is legible. Disney isn't raising prices because the product improved; it's raising prices because the subscriber base stopped growing and the content pipeline that was supposed to justify the price is producing shows with dedicated pockets of fandom and indifference beyond them. The bundle-subsidy era is over and the bill is being handed to the people who stayed.

## Xbox wants 24 to 40 cents per hour to stream games you already bought — 375 points

**375 points** · 340 comments · [arstechnica.com](https://arstechnica.com/gaming/2026/10/xbox-wants-you-to-pay-24-to-40-cents-per-hour-to-stream-games-you-already-bought/) · [HN discussion](https://news.ycombinator.com/item?id=50194009)

Microsoft rolled Cloud Playtime to Xbox Insiders: 10 hours for $4, 25 for $8, 50 for $12. That's $0.40, $0.32, and $0.24 an hour, on top of the game purchase — packs "require cloud playable game purchase or, for select games, free-to-play access." Purchased playtime doesn't expire, which is the one generous term. This follows September's hard limits on Game Pass streaming, so the pattern is clear: the all-you-can-play tier got throttled and a meter was installed underneath it.

The arcade comparison that Ars reaches for is wrong in the direction that matters. An arcade charged per play because the cabinet was the operator's; Microsoft is charging you per hour to run software you own on hardware you don't. That's not an arcade, it's a parking meter on your own car.

The economics are worth being precise about, though. Cloud GPU time is the only component here with a real marginal cost, so metering it is not irrational — and 24¢ an hour is well below what a streaming GPU-hour actually costs, which means this is a pricing experiment designed to find out what the market will bear, not a cost-recovery move. The honest reading: Microsoft is testing whether "ownership" can be unbundled into a purchase plus a subscription to the hardware that makes it run, and will price accordingly once the answer is in.

## Getting ready to operate GNU Taler in Germany — 351 points

**351 points** · 164 comments · [taler.net](https://www.taler.net/en/news/2026-13.html) · [HN discussion](https://news.ycombinator.com/item?id=50197404)

Taler Operations AG is being founded in Bochum as a subsidiary of Taler Systems SA, to operate a GNU Taler exchange for the euro and apply to BaFin for an e-money institution licence. The reason a company is needed at all is the part people skip: Taler issues bearer tokens representing value, which makes it electronic money under EU law, and issuing e-money for euros requires being a bank or holding an EMI licence. The software has been free and finished for years; the licence is the product.

The original plan had GLS Bank as issuer, and GLS walked away in January 2026 for reasons its own statement describes as unrelated to Taler. That's a polite way of saying a mid-sized German cooperative bank decided the compliance and IT integration cost wasn't worth it. The replacement is a purpose-built company, which Taler argues is actually better — an operator focused entirely on Taler instead of fitting it into a bank's product portfolio.

Two things to watch, and neither is cryptographic. An EMI licence means holding customer funds, which means capital requirements and supervision, which means this is a startup with a regulator. And the privacy guarantee only holds if you trust the exchange — Taler's design keeps the merchant from linking a purchase to a payer, but the exchange sees the money move. A Bochum-based company with no track record asking Europeans to route payments through it is a governance question, not a protocol one. This project has been one licence away from mattering for a decade, and now the licence is being applied for, which is real progress and also the point at which it can fail for ordinary reasons.

## The foolishness of "natural language programming" (1978) — 343 points

**343 points** · 231 comments · [cs.utexas.edu](https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD667.html) · [HN discussion](https://news.ycombinator.com/item?id=50203161)

Dijkstra, forty-eight years ago, on the recurring hope that we could instruct machines in our native tongues. His argument is not the one people expect. He doesn't say natural language is imprecise. He says the framing is wrong: treating formal symbolism as a burden gets the accounting backwards, because a change of interface doesn't just redistribute a fixed amount of labor — the work of communicating *across* the interface gets added, and can increase on both sides. That's why good systems have narrow interfaces.

He then does something that has aged remarkably well: he points at the history of mathematics. Greek mathematics stalled as a verbal, pictorial activity; algebra nearly died when it retreated to rhetoric; the modern world needed Vieta, Descartes, Leibniz, and Boole. Formal notation isn't a hoop to jump through, it's the technology that lets schoolchildren do what once only geniuses could.

The line to keep is buried in a parenthesis: some people judge programming languages by "the ease of programming," which is really the ease of making undetected mistakes. That's the whole LLM-coding debate in one clause from 1978. The machine will happily absorb the burden of turning your prose into instructions; what it cannot absorb is the question of who is responsible when the prose was ambiguous and the instructions were wrong. With an LLM in the loop, that error is absorbed by nobody and deferred to review — and review is exactly where the ambiguity lands.

## Swedish government offices to ban ChatGPT and Claude — 309 points

**309 points** · 114 comments · [sverigesradio.se](https://www.sverigesradio.se/artikel/chat-gpt-och-claude-forbjuder-regeringskansliet) · [HN discussion](https://news.ycombinator.com/item?id=50207405)

From Monday, staff at Regeringskansliet can't reach ChatGPT or Claude from their work computers. The stated reason is that employees should use services the office has approved — including Microsoft Copilot — and that unsanctioned AI use can have "consequences for our information security." An internal review also led to tightened security settings in Copilot, details withheld.

Sveriges Radio's reporting is the valuable part: this isn't one agency. Skatteverket and SiS have blocks too, and Kronofogden is considering one. Trafikverket's internal audit found widespread risky use of about ten different AI services, including sensitive information being pasted in and AI-generated answers being handled badly. Regeringskansliet had already restricted DeepSeek.

The detail that reframes the story: some staff will keep access to ChatGPT and Claude through an AI assistant platform the government built itself. So the ban isn't on the models — it's on the consumer accounts. Once you say it that way, the security rationale and the procurement rationale stop being distinguishable, and the approved tool being Copilot makes the whole thing legible as a data-governance decision wearing a security costume. That's defensible. It just isn't what the headline says.

## Using LLM confidence scores is a bad idea — 219 points

**219 points** · 100 comments · [rumple.github.io](https://rumple.github.io/blog/2026/10/20/asking-llm-for-confidence.html) · [HN discussion](https://news.ycombinator.com/item?id=50176082)

A clean argument against a pattern that is everywhere in agent code: asking the model for a confidence number and branching on it. The post starts from what confidence means — a forecaster's "70% chance of rain" is a claim about a track record across many days at 70%, checkable by calibration — and then shows that an LLM's stated confidence has no such track record, because the number is generated text with the same status as the sentence around it. It can be calibrated by accident and useful by accident, but there's no mechanism that makes it a posterior.

The distinction worth importing into your own code: an LLM's confidence score is a claim about the *hedging register* of the text it's about to produce, and that register correlates with how such claims are phrased in the training data, not with the error rate on your task. The fix isn't a better prompt. It's a held-out set per task with a measured accuracy, and then throwing the self-reported number away in favor of the measured one.

## A farewell to Arc — 277 points

**277 points** · 242 comments · [arc.net](https://arc.net/) · [HN discussion](https://news.ycombinator.com/item?id=50197601)

Arc shuts down on 22 December 2026. New accounts stopped on 22 October; on 23 November the iOS and Android AI features go dark and sync stops working; on 22 December the browser does. Migration to Dia carries passwords, bookmarks, extensions, history, Spaces, Folders, and Tab Groups, and the browser features you used in Arc are free in Dia with the AI optional.

The stated reason is security: keeping a browser secure is constant work "only increasing in the age of AI," and Dia was built from the ground up to meet today's standards, so that's where the security and engineering teams are going. It's a strange thing to say about a browser that shipped a Chromium-based, auto-updating product to millions of people — Arc's architecture wasn't uniquely indefensible, and the honest version is simpler: Arc's maximalist, opinionated UI was a design dead end for the business, Dia is the do-over, and the company needed a reason that isn't "we changed our minds."

The comment thread is mostly a wake, with a useful undercurrent: this is the second time in three years a beloved browser has been retired by the company that made it, and both times the migration path was "your data comes with you, your habits don't." The lesson for anyone building on top of a browser vendor's roadmap is that the roadmap is a fundraising document.

## Also new

- **[MPs moving to restrict gambling ads in Canada](https://www.cbc.ca/news/investigates/gambling-ads-restrictions-canada-9.7388888)** — 258 points · 134 comments — a CBC analysis finds Canadians are still being bombarded with betting promotions during sports broadcasts, and a federal bill is moving; Ontario and Alberta oppose it. The industry's own growth numbers are the argument for restricting it.
- **[Hedra, a 3D open-world game written from scratch in high school](https://github.com/maxilevi/project-hedra/tree/pre-ai)** — 230 points · 47 comments — 2,041 commits, and the branch is named `pre-ai`. That's the whole pitch: the tag is the claim that this was built before the tooling existed, and the commit history is the proof.
- **[Faster than earcut: 3.7M map polygons in 489 ms](https://globus.software/blog/2026/10/16/cutting-map-polygons/)** — 226 points · 40 comments — Globus published its triangulator as `earstrip`: one C++ header, ISC licensed, 14% faster than earcut.hpp and 1.4–2.1× faster in the browser. The good detail is that almost half the Masovian polygons at zoom 13 have four vertices or fewer, and the general-purpose Delaunay path was spending 302 ms on shapes that don't need triangulating at all.
- **[Apple Music 404 Not Found](https://music.apple.com/this-url-doesnt-exist)** — 211 points · 68 comments — a URL Apple's music site doesn't serve, submitted as a joke, outscoring a quarter of the page. On a Friday, this is the most honest signal on the site about what upvotes measure.

## Still on the page

Sixty-eight stories carried over with a live score. The deltas, from Firebase item data and, for anything that fell out of the top 180, verified URL lookups against the HN index:

| Story | Prior | Today | Change |
| --- | --- | --- | --- |
| [DeepInfer](https://github.com/deepseek-ai/DeepInfer) | 2,327 | 2,340 | +13 |
| [PHP security advisory](https://www.php.net/archive/2026.php#2026-10-21-5) | 1,544 | 1,554 | +10 |
| [Quad9 leaves France rather than become a filter](https://quad9.net/news/blog/au-revoir-france/) | 630 | 1,331 | +701 |
| [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/) | 1,261 | 1,272 | +11 |
| [eMudhra is exiting the global SSL/TLS business](https://emudhra.com/en/press-release/emudhra-to-exit-global-ssl-tls-certificate-business) | 784 | 1,127 | +343 |
| [PHP 8.2.35](https://github.com/php/php-src/releases/tag/php-8.2.35) | 1,069 | 1,092 | +23 |
| [Eight bits of trust](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/) | 920 | 939 | +19 |
| [SimCity, but with permits](https://permit.petercai.com/) | 927 | 936 | +9 |
| [PHP Foundation post-mortem](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) | 786 | 811 | +25 |
| [The Switch 2 falls, with a robot finger on the power button](https://pepsipu.com/blog/2026-10-switch2-jailbreak-ns2jb/) | 591 | 806 | +215 |
| [Voxtral 3](https://mistral.ai/news/voxtral-3/) | 765 | 768 | +3 |
| [WhatsApp's hidden help-page instructions](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions) | 739 | 741 | +2 |
| [It's still ok to enjoy programming](https://chriskiehl.com/article/it-is-still-ok-to-enjoy-programming) | 701 | 705 | +4 |
| [EA shuts down BioWare](https://www.theverge.com/games/1015647/ea-is-shutting-down-bioware) | 673 | 700 | +27 |
| [Meta ordered to pay $25B in New Mexico](https://www.cnbc.com/2026/10/21/meta-new-mexico-cambridge-analytica-penalty.html) | 658 | 695 | +37 |
| [The future of CSS](https://www.joshwcomeau.com/css/interop-2027/) | 617 | 624 | +7 |
| [There isn't an easy exploit for this PHP vulnerability](https://eliastaylor.com/noexploit/) | 602 | 624 | +22 |
| [Wine ported to OpenBSD](https://marc.info/?l=openbsd-ports&m=179236125692175) | 613 | 614 | +1 |
| [mitmproxy ships --emudhra](https://github.com/mitmproxy/mitmproxy/commit/169234499088fc2c414644a67efaed3d64ae2e3b) | 582 | 609 | +27 |
| [Apple broke an iPad presentation feature](https://teddysvoronos.com/2026-10-19-apple-broke-an-essential-presentation-feature-of-ipads/) | 604 | 605 | +1 |
| [Railway: encrypted environment variables, returned decrypted](https://blog.railway.com/p/security-disclosure-wednesday-october-21st) | 571 | 599 | +28 |
| [WorldTUI: a 360M model pretending to be a terminal](https://simedw.com/2026/10/21/world-model-terminal/) | 457 | 599 | +142 |
| [LiteLLM 1.107.0 credential stealer](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/) | 583 | 591 | +8 |
| [DeepSeek banned from US federal agencies](https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/) | 578 | 580 | +2 |
| [Nordwand Mono](https://github.com/tywr/Nordwand-Mono) | 561 | 569 | +8 |
| [Claude Duet is the assistant product, finally](https://claude.com/product/claude-duet) | 536 | 560 | +24 |
| [MiniMax M3.1 Flash](https://www.minimax.io/blog/minimax-m31f) | 515 | 516 | +1 |
| [Show HN: Run full iOS 16.5 firmware on Android devices](https://github.com/oosexgang/hackios-xnu-kernel) | 211 | 508 | +297 |
| [OpenBSD 8.0](https://www.openbsd.org/80.html) | 487 | 492 | +5 |
| [What shall I teach my son?](https://stevekrouse.com/ends) | 484 | 488 | +4 |
| [No more icons in every menu](https://blog.jim-nielsen.com/2026/icons-in-every-menu/) | 463 | 480 | +17 |
| [Facebook Pages paid links](https://mastodon.gamedev.place/@AshleyGullen/117473851565913919) | 466 | 470 | +4 |
| [DuckDB 2.0](https://duckdb.org/2026/10/21/announcing-duckdb-200) | 451 | 461 | +10 |
| [What is gridification](https://musicalform.substack.com/p/what-is-gridifcation) | 319 | 461 | +142 |
| [An ad-free Android TV](https://cretezy.com/2026/ad-free-android-tv) | 438 | 442 | +4 |
| [Tsrs: TypeScript ported to Rust](https://blog.cloudflare.com/typescript-rust-port/) | 430 | 431 | +1 |
| [PingCAP: 10.6TB and eighty-eight undetected exports](https://fulcrumsec.vg/pingcap/) | 419 | 430 | +11 |
| [Ofcom concedes defeat](https://prestonbyrne.com/2026/10/20/ofcom-concedes-defeat/) | 418 | 421 | +3 |
| [Google Cloud's London outage](https://www.neowin.net/news/google-cloud-outage-takes-down-hsbc-revolut-bank-of-scotland-llyods-equifax-more/) | 403 | 404 | +1 |
| [300 Tor exit nodes removed](https://kaba.cx/posts/20261020_Tor/) | 402 | 404 | +2 |
| [GitLab patches a CVSS 10.0 that nobody had time for](https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-5-1-released/) | 399 | 404 | +5 |
| [Muse exposes whatever you shared](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/) | 401 | 403 | +2 |
| [Google's Rust style guide](https://google.github.io/styleguide/rustguide.html) | 369 | 387 | +18 |
| [TorchTPU](https://github.com/google-pytorch/torch_tpu) | 378 | 379 | +1 |
| [pwn.watch: 237 incidents in twelve months](https://pwn.watch/) | 276 | 374 | +98 |
| [Publish fake stats, get cited in LLMs](https://peec.ai/blog/publish-stats-get-cited-the-tactic-that-put-my-data-all-over-the-web) | 364 | 368 | +4 |
| [Google cleared 300 hectares of Finnish forest first](https://www.techspot.com/news/114100-google-cleared-300-hectares-finnish-forest-data-center.html) | 287 | 326 | +39 |
| [Deepwater Horizon, sixteen years on](https://e360.yale.edu/digest/deepwater-horizon-deep-sea-recovery) | 320 | 324 | +4 |
| [OpenAI models are coming to Google Cloud](https://openai.com/index/openai-models-google-cloud/) | 319 | 323 | +4 |
| [o(n log n) integer multiplication, and a mathematician's grief](https://web.maths.unsw.edu.au/~davidharvey/research/subnlogn.pdf) | 295 | 311 | +16 |
| [The other epidemic](https://www.thebeliever.net/the-other-epidemic/) | 300 | 303 | +3 |
| [A possum that was extinct for 6,000 years](https://www.bbc.com/news/articles/cp814l80pw2o) | 259 | 270 | +11 |
| [Ransom negotiator / ShinyHunters](https://krebsonsecurity.com/2026/10/feds-suspect-ransom-negotiator-ran-shinyhunters-extortion-site/) | 267 | 268 | +1 |
| [Amazon watched PHP2Shell being exploited four days early](https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/) | 238 | 267 | +29 |
| [OpenAI's Patch the Planet wants credit for the timing](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/) | 260 | 265 | +5 |
| [Code is clay now](https://www.albertodenia.com/writing/code-is-clay-now) | 241 | 265 | +24 |
| [Airbnb bans the chore list](https://www.theverge.com/tech/1015844/airbnb-chores-house-rules-update) | 233 | 254 | +21 |
| [Abliterated models](https://projectdiscovery.io/research/how-abliterated-models-can-get-you-pwned) | 249 | 252 | +3 |
| [RuneScape Bench](https://www.youtube.com/watch?v=cNm4zyUtWj0) | 248 | 249 | +1 |
| [Trend Micro posted kernel vulnerabilities to the public list](https://www.phoronix.com/news/LKML-New-Trend-Vulnerabilities) | 229 | 249 | +20 |
| [France's supermarket fridges](https://ipinfo.io/blog/france-fridges-hack) | 243 | 243 | +0 |
| [OpenAI CLI](https://github.com/openai/openai-cli) | 220 | 240 | +20 |
| [Way to Play Super Mario 64 on Apple Vision Pro](https://www.pagetable.com/303) | 225 | 232 | +7 |
| [Academics and Wikipedia](https://blogs.lse.ac.uk/impactofsocialsciences/2026/10/19/academics-have-a-duty-to-defend-open-knowledge-systems-like-wikipedia/) | 229 | 230 | +1 |
| [Plex cryptominer exploitation](http://www.boredhackerblog.info/2026/10/plex-vulnerabilities-being-exploited-in.html) | 220 | 221 | +1 |
| [My friend Bob Cringely](https://tyma.com/my-cringe-story/) | 215 | 217 | +2 |
| [Good type against all odds](https://unsung.aresluna.org/good-type-against-all-odds/) | 208 | 212 | +4 |
| [IKEA – 3D Guide](https://sael.net/flatpack/) | 205 | 207 | +2 |

Quad9 is the story of the day by movement, not by rank: 630 to 1,331, more than doubling in twenty-four hours. That is what a court order compelling a resolver to filter starts to look like once other jurisdictions notice the precedent — and it's the only entry on this table where the number going up is bad news for the internet.

The rest of the movers are aftermath. eMudhra's exit announcement gained 343 as people worked out that the company's stated reason for leaving the certificate business was "scrutiny." The Switch 2 jailbreak went 591 → 806 as the writeup got read properly and people caught the split the author buried: two weeks for the exploit, one day for the thing that looks like magic. Android now runs iOS 16.5 firmware at 508, up 297, which is a sentence I will not attempt to justify. WorldTUI and the gridification essay both gained 142 — one is a 360M model learning what a terminal feels like, the other is an argument about quantization as epistemic violence, and they are on the same page on the same day.

The flat ones are also informative. Wine on OpenBSD: +1. MiniMax M3.1 Flash: +1. Tsrs: +1. TorchTPU: +1. Plex exploitation: +1. Ofcom: +3. France's supermarket fridges: exactly zero. A model release, a hardware backend, a font, and an actively exploited vulnerability all sat still, because on this page a story either accumulates an argument or it doesn't. And DeepInfer is still #1 at 2,340 and 891 comments, four days in, gaining 13 points a day — the ranking is no longer measuring interest, it's measuring inertia.

## Throughline

Three threads, and this time they run in sequence rather than parallel.

**First: yesterday's failures turned into consequences, and the consequences are the story.** Nothing new broke today. What happened is that everything that broke yesterday got priced. Quad9 doubled because a ruling in one country looks like a template in every other. eMudhra gained 343 points and left the certificate business, offering scrutiny as the reason. The PHP embargo got an apology from the person who didn't break it, while the person who did remains unidentified, and Amazon's honeypot had already seen the exploit four days before disclosure. That's the shape of a post-mortem in public: the visible actor takes the blame, the process defect survives, and the only number that moves the right way is the incident count on pwn.watch.

**Second: the extraction phase started, and it's visible on consumer invoices.** Disney raised prices days after putting ads on the tier called Premium, for a service with no show in Nielsen's top twenty all year. Xbox started selling hours for games you already bought. Arc was retired with a security rationale that doesn't survive contact with how browsers work. Three different products, three different companies, one move: the growth story ended, so the price goes up and the meter goes on. The justification in each case is technical — security, cloud cost, streaming infrastructure — and in each case the technical justification is doing the work that "we ran out of new customers" would otherwise have to do.

**Third: the honest version of every claim on this page was narrower than its headline.** Anthropic proved no-crash for any input under 64 MB, on one architecture, single-threaded, with a new trusted base of RISC-V and Linux semantics — and said so, which is why it's the best thing on the page. Kimi posted 65.7% on a benchmark against 66.4% and 58.2%, and the only number that didn't appear was the price. The confidence-scoring post makes the same point from the other side: a number a model generates about its own certainty is text, not a posterior. And Dijkstra, from 1978, supplies the frame that makes all of it legible — the burden of formality doesn't vanish when you hand it to the machine, it moves, and the person who ends up holding it is the one who reviews the output.

If there's a single sentence for today: the front page spent twenty-four hours working out that a failure is not an event but an invoice, and that the invoice is being sent to whoever cannot refuse it.
