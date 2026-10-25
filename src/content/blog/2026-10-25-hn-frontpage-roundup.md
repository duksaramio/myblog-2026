---
title: "Hacker News Front Page Roundup — October 25, 2026"
pubDate: 2026-10-25
description: "Thirty-nine stories clear 200 points across four pages, thirteen of them new. The page spent the day separating claims you can check from claims you can't."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Thirty-nine stories cleared 200 points across the first four pages tonight. Thirteen are new; twenty-six carried over from earlier in the week and mostly plateaued.

The page has a theme, and it isn't the one the headlines advertise. It's specificity. A 2015-era convolutional network beat two frontier LLMs at skin cancer diagnosis by twenty points on the same images. A language with no heap beat hand-optimized C++ in its author's own benchmarks. A kernel module recovering twice the FP/BF16 throughput Nvidia sells you is the most concrete hardware story of the week, and it came from one person exploiting a firmware buffer overflow. Meanwhile the generalists — the models, the platforms, the wafer-scale deployment that needs 59 chips for a single model — are the ones whose claims are hardest to verify and whose economics are hardest to find.

And the best thing on the page is a challenge with a price and a clock: a bitcoin key behind a deliberately vulnerable PHP install, unclaimed for a full day while everyone who said it was trivial had the opportunity to prove it.

## We should be more ambitious with the software we build — 693 points

**693 points** · 643 comments · [danluu.com](https://danluu.com/ambitious/) · [HN discussion](https://news.ycombinator.com/item?id=50225695)

Dan Luu relays a line from Michael Malis — "we should be more ambitious with the software we build" — and then spends the essay on the harder half: why almost nobody is. The example is Malis's pgrust, a Postgres rewrite that the front page has repeatedly dismissed as vibe-slop, and Luu's defense isn't that it will succeed. It's that in testing it, Malis has filed real Postgres bugs: an SP-GiST numerical bug that breaks valid operations, a format-cache bug that returns wrong JSONPath results, a pgcrypto bug that breaks subsequent operations, several memory-safety bugs in the dictionary loader, a money overflow. Even if pgrust dies, Postgres is better for the attempt.

Then the part that actually generalizes. Luu's own throwaway projects — a regex engine tuned per-workload, a ripgrep fork that compiles patterns natively, a faster Rust build for his own projects — took "a low single-digit number of hours" instead of the year-plus they would have taken him before, and he's explicit that he knows nothing about regexes, string matching, or compilers. His diagnosis is a stale cost model: "these problems are problems because people are implicitly carrying around a pre-agentic cost model." Ten years ago the person who wrote a new compiler because their compiler was slow was the person who never shipped. That trade has changed, and the aversion hasn't.

The skepticism the essay invites is the skepticism it half-concedes. "Almost all of these projects are slop" is his own sentence; his trust in pgrust comes from knowing Malis, which is not a mechanism anyone else can use. That's the whole problem in one paragraph — the tool that makes ambitious software cheap makes unverifiable claims cheap at the same rate, and the only available filter is a reputation graph most people aren't in. The comments extend the argument better than the post does: one person laying out silicon for an open-source AV1 decoder, another writing a native GUI harness to prove agents don't have to ship Electron, and one deflating counterexample about a heat pump whose firmware hardcodes a three-minute restart delay. Also a fair objection from the thread: speed up a workflow with an LLM and you often get code overfit to the case you tested and unmaintainable afterwards. Faster is not the same as better, and nothing on this page resolves that.

## No signs of AI payoff outside the tech sector — 599 points

**599 points** · 643 comments · [apollo.com](https://www.apollo.com/wealth/insights-news/insights/daily-spark/no-signs-of-ai-payoff-outside-the-tech-sector) · [HN discussion](https://news.ycombinator.com/item?id=50224463)

Torsten Slok, Apollo's chief economist, in five charts: revenue per worker is rising for the Magnificent 7 and flat for the S&P 493. Profit margins, same split. Total factor productivity, flat, with no visible AI contribution. AI spending is extremely concentrated in a handful of firms. And his conclusion is that mainstream corporate America is starting to treat token spend as a cost center rather than a growth line.

The load-bearing sentence is not economic, it's organizational: "AI does not understand accountability, trust, culture, unwritten rules, ethical trade-offs or fairness, all of which shape reputational risk and ultimately drive revenue growth and profit margins." That's an argument about where value actually lives in a business, and it's asserted, not measured. The charts measure the last four quarters. The sentence predicts the next ten years.

The thread's best contribution is a structural explanation rather than a prediction: software has test suites, so a non-deterministic system can be validated cheaply; other industries have no oracle, which means checking the model's work costs more than doing the work yourself. That single asymmetry explains why coding is the one place the payoff is unambiguous and why the "agents will transform accounting" pitch keeps stalling at the demo. Two other comments worth keeping: the 1987 Solow line, which is the correct response to anyone claiming this is unprecedented, and the point that roughly all of the productivity gain is being captured as revenue by the vendors — a 1¢ machine competing with $1 aspirin has to sell at 99¢, and "productivity" measured after that transfer looks like nothing happened. The thread also contains a plausible and less interesting explanation: enterprise change takes a decade, and the decade just started.

## Show HN: Steal My Bitcoin — 569 points

**569 points** · 382 comments · [stealmybitcoin.com](https://stealmybitcoin.com/) · [HN discussion](https://news.ycombinator.com/item?id=50224916)

A bitcoin key worth about $500 sits on a server, readable by the PHP user through a binary called `print-flag`. The PHP build was selected from before the PHP2SHELL CVEs were published. First person to take the wallet wins, and the site has been counting hours since launch — 23.5 at the time of writing, across a day that included a front-page listing and enough traffic that the VPS kept falling over.

This is the best-designed artifact on the page because it converts the week's loudest unfalsifiable claim into a falsifiable one. The claim was that these exploits are trivial now, that agents and frontier models have collapsed the gap between knowing a service is vulnerable and owning it. A public bounty with a working clock and no gatekeeping is exactly the test that claim should pass. It hasn't. That doesn't prove capability is absent — a day is short, and serious attackers have no reason to spend a live exploit on $500 — but it does puncture the specific version where thousands of autonomous agents are sweeping the internet for vulnerable hosts.

The thread's two best comments are both reasons not to participate, and both are good reasons. One security researcher says he has a working RCE and won't claim it, because demonstrating it would leak it during a patch window. Another reads the configuration and argues the target isn't vulnerable at all: CLI server, a 1 MiB body cap, an inert landing page and a high memory limit remove the primitives both CVEs need — so the challenge may be collecting proofs of concept for a setup that couldn't have been exploited. Add the honeypot discount (many attackers would rather not confirm they have something) and you get the honest conclusion: an unclaimed bounty tells you less about the state of exploitation than the people citing it will claim. The one result that did come in clean: a commenter pointed five agents at it. Two tried, three refused on policy. The refusal-trained frontier models won't do this, which is a different failure mode from being unable to.

## The Goose Programming Language — 540 points

**540 points** · 333 comments · [aardappel.github.io](https://aardappel.github.io/goose/) · [HN discussion](https://news.ycombinator.com/item?id=50224100)

Wouter van Oortmerssen shipped a systems language with no heap. No allocator, no garbage collector, no reference counting, no destructors, no lifetime annotations, no `unsafe`. Memory is a set of data stacks the compiler assigns statically; growth is a pointer bump; freeing a million-element structure is one store. Because memory never moves, a reference into a growing array stays valid — where C++ has to `reserve` and safe Rust falls back to `u32` indices. The constraint that buys all this: at most one resizable value live per stack, which shapes what programs you can write.

The numbers are the headline and deserve the skepticism they'll get: 3.3x the speed of idiomatic C++, 1.16x hand-optimized C++, 1.12x the best safe Rust across sixteen benchmarks, with 1.9x, 1.3x and 1.2x less memory. Those are the author's benchmarks, on the author's suite, and "faster than hand-optimized C++" is a claim that should be read as "faster on the shapes of problem this language was designed for" — which is what its author says. The mechanism is more interesting than the speedup: relative references as 1-, 2- or 4-byte offsets make structures position-independent, so writing a data structure to a file is one write and loading it is one read plus a verification pass that rejects hostile input. Threads share nothing at all; a worker compiles to a separate program and flat values cross via typed queues, Dart-isolate style.

The thread did what good threads do and found the weak claim first: the tutorial's opening example asserts that a `vector<string>` needs a heap allocation per string, which is wrong because every mainstream STL implements small-string optimization. Others raised the real architectural question — how do you represent an arbitrary number of dynamically sized values, say a hash table with string values inserted and deleted at random — and the answer appears to be "you don't, or you compact manually," which is the same wall region-inference research hit in the 1990s. John Carmack's endorsement in the thread is the strongest argument for it: automatic analysis of growable regions plus a built-in binary validator is the difference between "some programs can work this way" and "parsing file and network data at 100x the speed it currently runs."

## America has lost 200k jobs in media, film and the arts — 486 points

**486 points** · 516 comments · [apricitas.io](https://www.apricitas.io/p/ai-and-the-fall-of-the-creative-class) · [HN discussion](https://news.ycombinator.com/item?id=50226419)

Joseph Politano's September piece is the most careful thing written about AI and creative employment, and its care is the point. More than 200,000 jobs gone from creative industries in four years, roughly 50,000 of them in the last year — a stretch of job loss comparable in intensity and duration only to 2001 and 2008, in the absence of a recession. Movie and sound recording accounts for about half the losses, down more than 100,000, roughly a third of the sector, at employment levels last seen around the 2008 trough and approaching a 30-year low. Publishing is down more than 70,000. Live broadcasting and graphic design, previously stable, turned down.

Politano refuses to claim causation, and he's right to: media firms are incentivized to hide AI use for copyright reasons, and the losses coexist with Hollywood consolidation, production offshoring, and the migration of attention to creator platforms. What he offers instead is a pattern strong enough to be suggestive — every digital-arts subsector is shrinking while in-person entertainment grows at a healthy pace. That's the best available inference and it remains an inference. The uncomfortable version is in the comments: AI didn't have to beat professionals, it only had to beat the floor clients had already lowered. A subtitler points out that accuracy expectations collapsed from the 99.9% BBC standard decades ago to "viewers are used to frequent errors," which means the automation landed on ground that was already cheapening. Layer subscription fatigue and writing-for-people-glancing-at-their-phones on top and you get an industry that would look sick even if the models had never shipped.

## Meta Ignores Brazilian Court Order to End Bolsonaro Favoritism — 458 points

**458 points** · 316 comments · [panamericandispatch.org](https://www.panamericandispatch.org/p/meta-ignores-brazilian-court-order) · [HN discussion](https://news.ycombinator.com/item?id=50229587)

Sleeping Giants Brasil and CTRL+Z filed new evidence with Brazil's Superior Electoral Court in the case before Justice Marco Aurélio Bellizze, arguing Meta continues to treat the two presidential campaigns unequally despite an order to stop. The exhibits: a WhatsApp GIF search for "brasil" returning Flávio Bolsonaro first on three separate accounts; hashtag ordering; Meta AI answers in WhatsApp linking Lula to derogatory content. They're asking for the existing R$500,000-a-day fine (about $99,000) to be enforced and for Meta to explain how ranking and AI answers are produced.

One exhibit destroys the filing's credibility, and the thread is right about it. The groups asked Meta AI to pick a number between 1 and 25 twice, got 13 and 22, and observed those are the two candidates' ballot numbers. That's numerology. It doesn't matter that the rest of the evidence might be real — a filing that includes it invites the court to discount everything else.

The structural problem underneath is the one nobody in the thread can solve. An electoral court can order "equal conditions," but it cannot specify what equal means inside a ranking function, so compliance is unfalsifiable by construction and the fine is a rounding error against a company with a trillion-dollar market cap. The commenters split cleanly between "the algorithm amplifies whichever side has more supporters, and no platform can fix that" and "a state that has outsourced its information space to a foreign private party has already lost the thing it's trying to regulate." Both are true, which is why the remedy on offer is a daily fine that Meta can treat as a subscription.

## I don't understand quantum physics (2018) — 368 points

**368 points** · 297 comments · [southampton.ac.uk](https://www.southampton.ac.uk/~doug/quantum_physics/index.html) · [HN discussion](https://news.ycombinator.com/item?id=50219666)

Douglas Ross's lecture course, hosted on a university server, in 24 PDF chapters from classical physics through hidden variables. It's on the front page for a reason that isn't the content: the author states a position. He doesn't accept many-worlds, says it's less illuminating than collapse rather than more, and admits he's in the minority. Popular physics writing almost never does that, and the honesty is what makes the course readable.

The best comment is a curriculum critique that the course doesn't answer: start with classical waves and the double slit and you inherit enormous conceptual baggage before you get anywhere; start with the linear algebra of one- and two-qubit systems and interference, uncertainty and entanglement fall out as bookkeeping at a pre-calculus level. The second-best is a Nobel laureate's position — visualization generates ideas, calculation is the only thing that validates them. Neither comment makes the lecture notes less useful, and both make the thread more useful than the article.

## Cerebras Deploys Trillion-Parameter AI Models — 333 points

**333 points** · 118 comments · [cerebras.ai](https://www.cerebras.ai/blog/how-we-deploy-trillion-parameter-frontier-models-on-cerebras) · [HN discussion](https://news.ycombinator.com/item?id=50227356)

The arithmetic is more honest than the marketing. A WSE-3T wafer holds 44 GB of on-chip SRAM; a trillion-parameter model needs terabytes. Using Kimi K3 (3T parameters, 69 linear-attention layers, 24 dense) at 4-bit weights with an 8-bit KV cache, each layer is about 16 GB. Dense layers need room for a KV cache so they get one wafer each — 24. Linear-attention layers keep a fixed-size state per request instead, so two fit per wafer — 35. Total: 59 wafers, activations hopping between them over RDMA at roughly 2 microseconds, each stage working on a different request so the pipeline stays full. Claimed throughput: 1000–2000+ tokens per second.

Now the parts the post skips. The benchmark numbers it cites for Kimi K3 — 88.3% on Terminal-Bench 2.1 against GPT-5.6 Sol's 88.8%, 91.2% on BrowseComp against 90.4% — are full-precision numbers for a model the deployment then quantizes to 4 bits with an 8-bit cache, and nothing here measures the quality cost of that quantization. Sixty wafers for one model isn't a deployment, it's a datacenter, and the economics only work if someone is paying a large premium for tokens-per-second at a quality level below the frontier. The comments supply the practical view: what's actually available on Cerebras is still GPT-OSS-120B and Qwen3.8-27B class models, one user reports that the fast model "is mostly wrong" for their work, and a former customer's verdict is remarkable technology, badly run company. The most useful skeptical question in the thread is whether 59 wafers for one 3T model is a triumph of engineering or evidence that the memory architecture doesn't fit the workload.

## GPU-unlock: FP/BF16 instruction issue rate on Nvidia 3000's cards — 327 points

**327 points** · 75 comments · [github.com/Zagitta](https://github.com/Zagitta/gpu-unlock) · [HN discussion](https://news.ycombinator.com/item?id=50219700)

A Linux kernel module that restores the FP/BF16 instruction issue rate Nvidia's consumer GA102/GA103/GA104/GA106 cards are capable of but don't ship with. It combines the CMP unlocker's V67/PLM technique with UEFI-era pre-driver timing: write the speed selectors (`SS0` `0x88888888` for the full BF16 rate, a 4-bit `SS1` `0x8` for IMLA4), do a function-level reset, and load before the unmodified proprietary driver binds. The measured effect on a 3090 Ti at 450 W, dense 8192³ GEMM: FP16 87.5 → 118.4 TFLOPS, BF16 87.5 → 157.4, TF32 42.6 → 82.6.

The part that should shape how you read every "AI infrastructure" story: the mechanism is a stack buffer overflow in the card's boot firmware, exploited with return-oriented programming. This isn't a configuration toggle; it's a security exploit against hardware you own, published because the segmentation was software-enforced in the first place. The same silicon, the same issue rate, a different SKU. Compare the NVENC session cap patch and the 20% penalty on card-to-card transfers gated on detecting cheaper parts: the pattern is consistent, deliberate, and documented enough that people keep finding and removing it. Costs are real — 450 W is above what the stock cooler was designed for, and there's a separate Ada fork for 4090 and 4070 Ti Super, with nothing yet for the 50-series. Someone using consumer cards for ML research calls it invaluable; someone else calls the practice what it is.

## Why is AI generated language so hard to understand? — 236 points

**236 points** · 191 comments · [arxiv.org](https://arxiv.org/abs/2610.29162) · [HN discussion](https://news.ycombinator.com/item?id=50223647)

Clark, Martin and Mahowald take the widespread complaint and test it with psycholinguistic instruments: features known to correlate with human processing difficulty, like object relative clauses, long syntactic dependencies, and low-frequency n-grams. Across a corpus spanning domains, all nine frontier and near-frontier models they tested use more inanimate subjects with animate verbs and more low-frequency n-grams than human writing; most also use longer dependencies, more stacked nouns, and reduced object relatives in conversational text. Model families differ substantially from each other, which is the finding most likely to be useful to anyone choosing one.

Their hypothesis is the interesting part: human language is optimized for successful communication, while model training increasingly optimizes for math, code and reasoning, where the pressure is toward information density. To show it isn't just correlation they fine-tune a model under a length penalty in GRPO and watch compressed syntax emerge without being asked for. That's a clean proof of concept for a mechanism.

Two honest limits. "Harder to understand" is inferred from proxy features rather than measured as reading times on this corpus — a construct-validity bet, though a reasonable one. And the finding says nothing about whether dense prose is *worse*, only that it's more expensive to process; documentation that is terse and correct is worth more than the fluent paragraphs the same model produces when asked to be helpful. The thread, unusually, adds to the paper: one commenter argues that RLHF optimized for what raters can quickly judge — lists, headings, confident phrases — manufactures the impression of good writing without the substance, and another names a construction the paper omits, the transitive verb used intransitively, which is close to a fingerprint.

## A 10-year-old CNN outperforms frontier LLMs for skin cancer diagnosis — 237 points

**237 points** · 115 comments · [lynchlab.net](https://lynchlab.net/llm-skin-cancer) · [HN discussion](https://news.ycombinator.com/item?id=50233779)

The design is what makes it land. Two hundred biopsy-proven lesions from MILK10k — 30 melanomas, 25 basal cell carcinomas, 25 squamous cell carcinomas, 20 actinic keratoses, 50 benign naevi, 50 seborrhoeic keratoses — every one excised, so the benign cases are the ones that worried a clinician. Each lesion gets a clinical photo and a dermoscopic image, the same six-way question, and the same prompt at default settings for GPT-6 Astra and Claude Fable 5.1. The competitor is Inception v3, published by Google in 2015, fine-tuned end to end on 68,011 ISIC images on a single H100 for about twenty minutes, with every image of the test lesions removed from training before it started.

Result: 62% correct for the CNN against 42% for both LLMs. Melanoma, the one that kills people: 13 of 30 for the CNN, 8 of 30 for GPT-6 Astra, 11 of 30 for Fable 5.1. Both frontier models looked at an invasive melanoma under 0.8 mm and called it a seborrhoeic keratosis that could be discharged. The CNN runs in a phone browser on WebGPU.

The thread's objections are worth taking in order of strength. The weakest is "this is benchmaxxing" — a fine-tuned model evaluated on a held-out split from the same distribution is the correct methodology for a diagnostic task, not cheating. The strongest is that this compares a specialist to a generalist with one prompt and no ability to ask the patient anything, take a history, or escalate to a specialist model — which is not how a clinical product would be built, and is where a general model's actual value would come from. In between sits the point that should end the debate about routing: a six-way image classification task does not need a trillion-parameter model, and the cost and accuracy differences here run in the same direction. The right conclusion isn't that LLMs are bad at medicine. It's that "just use the frontier model" is a default that a twenty-minute fine-tune on one GPU beats by twenty points.

## I refuse to accept a censored Internet. Join Me at FOSDEM 27 — 230 points

**230 points** · 106 comments · [talkweb.eu](https://talkweb.eu/openweb/4558/) · [HN discussion](https://news.ycombinator.com/item?id=50233929)

A call for speakers, not a tool: the Digital Dissident devroom at FOSDEM 2027, organized on an argument that most anti-censorship events get wrong. Nobody living under an authoritarian regime uses one tool; they use a chain — reach the network, communicate without leaking metadata, collect and verify evidence, publish without exposing the source, all of it on devices that are themselves a liability. The weakest link decides the outcome, and the seams between projects are where people get caught: a circumvention transport that gets fingerprinted, a messenger whose push notifications bind your identity to a Google or Apple account.

The "why now" section is the useful reference material: national allow-lists and whitelist-only shutdowns, TLS and QUIC fingerprinting, deep packet inspection with active probing, protocol-specific throttling, mobile shutdowns, app-store removal of circumvention tools, and mandatory state messengers. Progress on the other side is real but fragmented across rooms and projects, which is the problem the devroom claims to solve.

Skepticism is due, and some commenters supply it: a conference room is a weak instrument for interoperability, and the DSA point — that EU content regulation has censorship machinery built into it — is a bigger subject than any devroom agenda. The best exchange is the oldest one in the field: you cannot have a discussion forum without moderation, moderation is a form of censorship, therefore some censorship is unavoidable and the only question is who holds it. That's true and it's also the sentence every platform uses to justify whatever it already does.

## SpeedCrunch 1.1 — 214 points

**214 points** · 47 comments · [speedcrunch.org](https://www.speedcrunch.org/) · [HN discussion](https://news.ycombinator.com/item?id=50224210)

A scientific calculator that has been finished for a decade and just got its first release since. Fifty digits of precision, complex numbers, 140+ functions, units and constants, user-defined variables and functions, vectors and matrices, a formula book, 40+ translations, 40+ color schemes, Windows/macOS/Linux, offline, free.

The top comment is a long complaint that the new version doubled the input box, added a border and dead space, and introduced input lag that 0.12 never had — which is the correct way to review software that already worked. The interesting item is buried further down: a long-standing order-of-operations bug where `1/2(-9.8)` returned `-0.05` instead of `-4.9`, now fixed and, better, rendered with an explicit multiplication sign so the parse is visible. People also use the thread to point at numbat, qalculate and a custom build someone maintained for years with a one-line patch to the scientific-notation threshold. This is what software looks like when it's a tool rather than a platform.

## Still on the page

The carryovers have mostly stopped moving, which is what a story does once everyone who was going to vote has voted.

| Story | First seen | Tonight |
| --- | --- | --- |
| [Apple Music 404 Not Found](https://music.apple.com/this-url-doesnt-exist) | 211 | 929 (+718) |
| [Kimi K3.1 Pro and K3.1 Pro Highspeed](https://www.kimi.ai/blog/kimi-k3-1-pro) | 441 | 1,076 (+635) |
| [Local Wikipedia](https://edjefferson.com/localwiki/) | 1,065 | 1,657 (+592) |
| [Today, we hacked what we'd set out to hack: the iPhone](https://blog.calif.io/p/iphone) | 526 | 1,098 (+572) |
| [Root shell on Samsung TV](https://twitter.com/log4j/status/2113014142600953868?s=46) | 465 | 668 (+203) |
| [Ask HN: If the models are so good, why doesn't OpenAI just start 100 companies?](https://news.ycombinator.com/item?id=50200997) | 514 | 664 (+150) |
| [Physicists trap a single antimatter particle for a month](https://www.scientificamerican.com/article/physicists-trap-a-single-antimatter-particle-for-a-month/) | 249 | 340 (+91) |
| [Around a dozen banking apps began specifically permitting GrapheneOS](https://grapheneos.social/@GrapheneOS/117492375462459244) | 592 | 666 (+74) |
| [Docker is weird](https://codeandcake.dev/posts/2026-10-22-docker-is-weird) | 800 | 870 (+70) |

A 404 page is the second-highest-scoring story of the week, a joke submission that has outscored two model releases and a certificate authority collapse. The iPhone jailbreak write-up is the only exploit chain this week with a narrative attached, which is why it keeps accumulating points while the technically harder stories don't. And Local Wikipedia — Wikipedia restricted to things within a half-hour walk — is the one story here that people keep sending to each other rather than arguing about, which is a different and better signal than a score.

## Throughline

**Narrow beats general, and the page finally has receipts.** The skin cancer study and the Apollo note are the same finding measured from opposite ends: a general model delivers little measurable value outside the domain where it was specifically post-trained, and a 2015 network tuned for twenty minutes on one GPU beats two frontier models by twenty points at the one job it was given. The Goose benchmarks are the systems-language version of the argument — no allocator, no GC, no lifetimes, and it wins where its memory model fits. GPU-unlock is the hardware version: the same silicon, and the only difference between a $1,600 card and a $6,000 one is a speed selector someone can write.

**The money is going to whoever owns the scarce input.** Apollo measures near-zero payoff outside tech. Apricitas measures the creative class being hollowed out with a pattern that's suggestive rather than proven. Cerebras argues the way to make money is 59 wafers and 2,000 tokens per second. Luu argues the way to make things is agents plus obsessive testing. Four views of one transition, and none of them describe value accruing to the firm that merely *applies* the model — it accrues to whoever owns wafers, tokens, or distribution. The subtitler's comment about collapsed quality standards is the version of this that actually shows up in people's paychecks.

**Which claims can be checked.** Steal My Bitcoin is a claim with a price and a clock, and the clock ran out without a winner. The CNN is 200 lesions and one number. The arxiv paper is a feature set and a fine-tuning experiment. GPU-unlock is before-and-after TFLOPS. Against those: Cerebras citing full-precision benchmarks for a 4-bit deployment, an electoral court ordering "equal conditions" without a definition of equal, a devroom that is a plan rather than a tool, and a bounty whose own target may not be vulnerable. The most quotable number on the page isn't 1,657 points for a walking-distance Wikipedia or 929 for a missing web page. It's 62% against 42%.
