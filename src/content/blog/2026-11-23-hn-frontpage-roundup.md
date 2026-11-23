---
title: "Hacker News Front Page Roundup — November 23, 2026"
pubDate: 2026-11-23
description: "Nvidia reinstates its CEO with input from the government, Ladybird ships an alpha browser engine, Zhipu's loop transformer, Tim O'Reilly on rents, and Nespresso's internal memo on using less coffee."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

A hundred and twenty-four stories cleared 200 points in a full scan of all 500 ranked ids today, and thirty of them are new here. Ninety-four were covered in the last four nights, and ninety-two of those are in the table at the bottom — the two missing are second submissions of a story already counted, which is why they aren't listed twice. The top of the page is frozen: the Riemann proof is still first at 2,920 after adding twenty-one points, the rival announcement is second at 2,450 after adding five, and the pair of them have now been argued over in more than three thousand comments without either moving much. That is what a story looks like when nobody involved can settle it.

What actually happened today is that the biggest chip company in the world put its CEO back after eleven days, with a press release that cites the United States government as an input to the decision. Everything else on this page is either a consequence of the AI buildout or a reaction to it. There are twenty full sections below — one of them covering two submissions of the same event — then nine more stories in the bullets, and one long essay by the person who invented the web portal arguing that the whole thing was designed wrong.

## Nvidia reinstates Jensen Huang, and the stock does the round trip — 1,561 points

**1,561 points** · 2,683 comments · [cnbc.com](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) · [HN discussion](https://news.ycombinator.com/item?id=50611576)

Huang resigned on 13 November after reports of multiple extramarital affairs, one of them with a woman the New York Times reported on Sunday had been in contact with an officer of China's Ministry of State Security. The board voted unanimously to reinstate him, effective immediately, after what it describes as "a series of discussions and meetings." The company's own press release — a separate submission at 1,697 points with four comments, which tells you what HN thinks of press releases — adds the sentence that matters: "In the process of reaching its decision, the Board received input from senior levels of the United States government, and based on that input, the Board is confident that Mr. Huang's reinstatement poses no national security risk."

Read the sequence. The stock fell nearly 33% from 8 November, when Huang disclosed one affair, to 6 November's close of $186.64 — CNBC's framing, awkwardly, since the decline started after that close — and rose 33% on the announcement. Senior government officials briefed the board late last week that no national security laws were violated. Trump told CNBC he had been speaking to the board "directly and indirectly," said Huang "did nothing wrong," and posted that the US "does not possess evidence that he has engaged in any unlawful conduct." Musk, Gavin Baker and Brad Gerstner lobbied publicly for the return.

The part that doesn't go away: the board's independent committee, with Wachtell Lipton, is still investigating, and the board says that investigation "will proceed to conclusion." The SEC's probe into potential accounting issues is also still open (307 points in the table below). So the company has reinstated the subject of two live investigations because the government told it there was no legal problem and the stock was down a third. Colette Kress, who was interim CEO for eleven days, goes back to being CFO.

The thread's best observation isn't about Huang at all. It's that in both this case and the 2023 OpenAI board affair, the nominal governance structure turned out not to be the real one — a board exercised authority it plainly had, and was overruled by forces outside the charter. If a board can fire a CEO and then un-fire him eleven days later under government advice and shareholder pressure, the charter is decorative. Worth noting, too, that the NYT opinion piece everyone is quoting describes behaviour — telling an executive his mother should have aborted him, threatening to rip a subordinate's arms off — that would end most CEOs' careers in a company with a functioning HR function, and got a 33% rally here.

## Ladybird ships an alpha, and it renders most of the web — 955 points

**955 points** · 254 comments · [ladybird.org](https://ladybird.org/posts/alpha/) · [HN discussion](https://news.ycombinator.com/item?id=50614249)

A browser engine written from scratch, not a fork, now downloadable as an alpha for macOS and Linux. The post is three paragraphs and a promise: some sites will break, it will crash, the security is not there yet and they want people to hack it, and it's a rolling channel with automatic updates — which is the actual news, because until now you had to build Ladybird from source to see it improve.

The measurable progress is in the comments rather than the post. The October newsletter reported passing Safari Technology Preview on Web Test Platform on 26 October, ending the month at 2,184,722 subtests, up 75,650, with most of that gain in five days — and the newsletter says why: "We pointed AI coding agents at WPT and asked them to fill in missing functionality. They made lots of small fixes, and those added up."

That's the honest version of the last two years of browser discourse. Ladybird's own team will tell you the engine got where it is partly by grinding conformance tests with agents, and the same commenters who spent years saying a from-scratch engine was impossible are now testing it against YouTube, Google Maps and WebGL demos and reporting that it mostly works, with jerky scrolling and some canvas performance to fix. Also worth flagging: Ladybird swapped several hand-rolled libraries for SQLite and Skia, which is the kind of decision that upsets people who liked SerenityOS and is why the thing boots.

## GLM-5.4 and the loop transformer: same weights, more compute per token — 942 points

**942 points** · 317 comments · [z.ai](https://z.ai/blog/glm-5.4) · [HN discussion](https://news.ycombinator.com/item?id=50609685)

Zhipu's blog post wouldn't render for me — it's a client-side app, and both the article body and the metadata beyond the title are fetched after load — so this section is from the thread plus what Zhipu's own summary says. The claim: GLM-5.4 is their first loop transformer, framed as "generalized coding," with a teaser at the end that the next, significantly larger model "will be ready soon."

The mechanism, as one commenter explains it, is about memory bandwidth rather than FLOPs. Inference is bottlenecked by moving each layer's weights from HBM into the chip to compute one token and then moving them back out. A loop transformer computes the same layer several times before moving on, so the expensive transfer is amortised over more computation. Fewer distinct weights, reused at depth. The original transformer, another commenter points out, is already an unrolled for loop that pairs different weight sets at each depth — looping makes that explicit and cheaper.

The claim to be sceptical of is the one Zhipu doesn't make loudly: that this is a fundamentally new architecture. Commenters who looked at the release note that GLM-5.4 appears to be a pretrained model converted to a looped form rather than one trained looped from scratch, which makes it a cheap win available to everyone with a checkpoint and a training script. There are no benchmark tables in the post. One person ran the standard pelican test and found the output similar to GLM-5.3 and very different from 5.2, which is not a benchmark. And the practical complaint from people using Chinese models daily is real: the "marathon thinking" — second-guessing itself on trivial tasks — makes completion time dramatically worse even when quality is comparable.

The interesting line, if you only read one: a commenter argues that "generalized coding" really means models escaping their harness. When a model externalises its reasoning as code, that reasoning survives context compaction as a durable artifact. That's a statement about how bad our context windows are, dressed up as a capability gain.

## Spelunkr: cable TV for the Internet Archive's forgotten videos — 882 points

**882 points** · 152 comments · [spelunkr.tv](https://spelunkr.tv) · [HN discussion](https://news.ycombinator.com/item?id=50606192)

The site is a JavaScript shell that describes itself in one line — "24/7 synchronized channels of forgotten Internet Archive video. Like cable TV, but weirder" — and delivers exactly that. You pick a channel, it plays continuously, everyone watching that channel is watching the same thing at the same time, and the source is archive.org.

The reaction is the story. Someone watched forty-five minutes of a 1987 Headbangers Ball and reported a Spuds McKenzie ad between Def Leppard and Mötley Crüe. Someone else curated a list of "2am theater" double features from a single Internet Archive user who built drive-in-style programming blocks with snack-bar interstitials intact, and immediately wanted a channel for it. The comment that explains why this lands: on-demand streaming has an "asynchronous temporality" that leaves a faint hum of loneliness — nobody else is watching what you're watching at that moment. Appointment television was a constraint that also made it shared.

Two legitimate objections. It streams from archive.org directly, which means a popular channel is a load test against a nonprofit's bandwidth, and nobody has asked whether the Archive wants to be a CDN. The obvious fix is PeerTube-style chunk sharing, which someone raised. And the maintainers haven't shipped a playback-speed control, which is the one feature live TV genuinely needs.

## Tim O'Reilly: Silicon Valley switched from creating value to extracting it — 788 points

**788 points** · 438 comments · [oreilly.com](https://www.oreilly.com/radar/what-happened-to-silicon-valley/) · [HN discussion](https://news.ycombinator.com/item?id=50602947)

This is a keynote transcript, and it's the best thing on the page today. O'Reilly starts with his own history — a company founded forty years ago on $500 with no venture capital, GNN in 1993 as the first web portal and the first ad-supported site — and the two principles he says shaped it: "Change the world by spreading the knowledge of innovators" and "Create more value than you capture."

Then the numbers. Hal Varian told him only about 6% of Google search result pages carried any monetisation; the other 94% were served by organic search as a surplus of value created over value captured. Amazon's search page now runs sixteen ads and four organic results. Google pushes organic results far down the page on mobile, and AI Mode serves the content directly instead of sending you to the site that made it. The extraction isn't a villain problem, he argues — it's the machine working as designed, citing Friedman's 1970 "social responsibility of business is to increase its profits" as the moment the objective function was set, and Charlie Stross's "slow AI" as the right metaphor for the corporation itself.

His analytical contribution is a split between two kinds of economic rent. Rising-tide rents: the unearned appreciation you get because the neighbourhood improved, which he doesn't consider scandalous, and which government research grants and loan guarantees helped create. Robber-baron rents: income above a competitive rate collected through asymmetries in power. The transition from one to the other, he argues, is close to a law of the technology business cycle — once growth slows, incumbents stop earning outsized profit by innovating and start using market power to keep it. Doctorow's word for the result is enshittification.

Where the essay earns its keep is the argument that AI skipped the good phase. It was enshittified from the beginning, because capital on the scale of hundreds of billions doesn't wait for a business to grow into itself, and because the training data was an enclosure of the commons — "AI's original sin," in Michael Barbaro's phrase. And AI breaks the old bargain in a way the web didn't: Google at its best sent you somewhere else 94% of the time. AI substitutes an answer for the referral.

The prescription is mechanism design — Hurwicz's "reverse game theory," working backwards from a desired outcome to the rules that produce it. He cites Unix as a mechanism nobody designed as one, and MCP as an accident that changed AI's market structure the way Windows and iOS did not. Six competing agent payment protocols means we're in the exploratory phase. The line that will annoy the labs: he lists "PR stunts like dumping millions of dollars of compute to solve high-profile math problems, or hyping the cybersecurity risks of their offerings, for which only their latest, most powerful models are offered as the only remedy" as mechanisms designed to support a winner-takes-all game.

## The local AI starter guide is really a comment thread about used hardware — 720 points

**720 points** · 290 comments · [gpupartner.com](https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth) · [HN discussion](https://news.ycombinator.com/item?id=50603845)

The post itself is a decent walkthrough: install Unsloth Desktop on Windows, download a quantised model that fits your VRAM, set a context size, turn on LAN access so the household can use it, ten to fifteen minutes excluding downloads. It's written on an RTX 5090 with 32GB, which is the tell. The premise — that cloud providers are now an appliance business for routine work, that quality gets dropped in "latest" versions, that costs balloon — is defensible. The hardware advice is the problem.

The comments dismantle it in the most useful way possible. Nobody needs a $5,000 card: a Dell T5820 with 64GB of RAM for $600 plus a used Tesla P100 with 16GB for $250 gets you a capable 27B-class model at around 30 tokens a second for under a thousand dollars. A P40 is $300 on eBay for 24GB of GDDR5, running Qwen 3.8 27B at 14 tokens a second under llama.cpp — "not just a toy." A 12GB RX 6700 XT runs the same model at 40 tokens a second with MoE layers offloaded to system RAM, with 128k context and flash attention.

The best comment is a category error correction: the guide says you need a Windows PC with a GPU, and that is simply false — several people are running this on used enterprise gear, one on an 8GB T1000 with an AVX-512 CPU. The other honest note is the phase we're in: "this is the plasma TV phase of local AI. Early, heavy and priced premium." Five years, that commenter estimates, until most practical AI runs on your own machine with a few super-brains left in the cloud. Nobody in the thread disagreed.

## Audubon's field guide to GTA 6's birds is the best game criticism this week — 627 points

**627 points** · 360 comments · [audubon.org](https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife) · [HN discussion](https://news.ycombinator.com/item?id=50602843)

The National Audubon Society sent someone through Leonida with a checklist and wrote up the birds, which is either the most elaborate brand-adjacent content play of the year or genuine ornithology outreach, and it works as both. The detail that matters: the game includes Florida scrub jays, the only avian species endemic to the state, and a commenter who has seen them along the Ocala section of the Florida Trail confirms the behaviour is right — "a bit of that corvid cleverness."

The thread is where the actual critique lives. One person who has finished the campaign argues the game is story-focused rather than sandbox-focused despite "insane attention to detail on traditional sandbox elements," and suspects two teams worked on it and the narrative team won. Someone else is bothered specifically by the seagull takeoffs — too uniform, too fast, "like switched" — and makes the Jurassic Park point: nobody knew how dinosaurs moved, so weight and noise were enough to sell it, but everybody has seen a seagull, and the animation is the one place where photoreal fidelity raises the bar rather than lowering it.

And then there's the comment about hovering through a swamp and watching a sasquatch eat a deer. That's the game. The birds are real; the rest is Florida.

## XNU Linux runs a macOS userspace inside a stock Linux kernel — 572 points

**572 points** · 237 comments · [github.com](https://github.com/AFK-surf/xnulinux) · [HN discussion](https://news.ycombinator.com/item?id=50607261)

This one is technically outrageous and the README is unusually honest about how. `xnulinux` builds XNU from Apple's published sources and loads it as a kernel module — `xnu.ko` — inside an unmodified arm64 Linux kernel. No hypervisor. XNU drives the CPU and MMU directly, so macOS processes run natively alongside Linux processes on the same cores, and Linux lends XNU memory, timers, files, networking and GPU through a second module, `fki.ko`.

The demo: on a stock Ubuntu kernel, `insmod xnu.ko` boots a macOS 27 system disk made by Apple's own installer to the desktop — loginwindow, WindowServer, Dock, Finder, Safari, Chrome. There's a screenshot of macOS on the left with `sw_vers` and launchd running, and an SSH session from inside that macOS into the Linux underneath it. It also runs on bare-metal DGX Spark with four CPUs and 8GiB of RAM, CPU-rendered.

The thread's sharper question is why this approach rather than virtualising. One answer is in the design: macOS, unlike Windows and Linux, has no stable syscall interface, so binaries link against libraries that ship in lockstep with the kernel — which means the userspace is portable in a way the syscall ABI isn't. Someone else notes the ergonomic oddity: each hosted CPU is a Linux kernel thread pinned to a core, which from the outside feels a lot like a VM with extra steps. Both can be true. This is a research artifact that happens to boot to a working desktop, and the fact that projects at this level of ambition are now normal is its own commentary.

## LeCun accuses Amodei of wanting open models illegal so he stays in control — 521 points

**521 points** · 266 comments · [x.com](https://twitter.com/ylecun/status/2124550037912920090) · [HN discussion](https://news.ycombinator.com/item?id=50615308)

The post is four sentences: Dario's spiel since GPT-2 has always been about hyping dangers so open models get made illegal and he stays in control; he left OpenAI because he wasn't going to have control; it's like the Ottoman Empire banning the printing press for Arabic to keep control of the dogma; it's "a new form of medieval obscurantism." LeCun is not a neutral party — he runs AMI Labs and has spent two years arguing that the doom framing is a marketing position — but the substance of the accusation is checkable, and the thread does a decent job of it.

The most substantive comment is from someone working in the regulatory space who says the emerging consensus, if you can't ban the bullets, is to ban the guns: requirements that AMD and Nvidia push microcode updates limiting consumer GPUs' LLM capability, registration for privately owned compute, or licensing for anyone above a threshold. That's not a hypothetical — it's a description of what people drafting rules are actually discussing, and it explains why the open-weights fight is not rhetorical.

The rest of the thread splits in a familiar and unhelpful way, and one commenter names the split correctly: there are two different kinds of AI risk — misuse of tools, and loss of control — and open models reduce the first while increasing the second. The people arguing past each other are each answering a different question. The one point nearly everyone concedes is that the Hugging Face incident established that without open models there's no defence against the frontier closed ones, which is an argument for open weights that doesn't require believing anything about anyone's motives.

## Arm's lawyers shut down a documentation site, and the docs were under a BSD licence — 505 points

**505 points** · 100 comments · [arm.jonpalmisc.com](https://arm.jonpalmisc.com/) · [HN discussion](https://news.ycombinator.com/item?id=50617499)

Jon Palmiscno's AArch64 reference — a searchable, fast mirror of Arm's instruction set and system register documentation — goes dark on 4 December 2026. The banner is blunt: "Arm's lawyers have notified me to take down this site or face legal action." The maintainer's comment in the thread adds the reason: Arm says he's using their trademarks and IP by hosting their documentation, which he says is hard to work around while keeping the site useful. People have offered mirrors, lawyers and source-code-without-Arm-IP forks; he's considering all three. The Internet Archive has already captured it.

The thread's objection is the interesting one. Arm publishes a machine-readable architecture specification, and commenters with copies of several versions say the open-source packages of it are under a BSD-style licence — so documentation that Arm has already effectively published permissively is being taken down over trademark, which is a different and much weaker claim than copyright. Someone points at a Stanford-hosted equivalent still serving the same content, and nobody has an explanation for why one is tolerated and the other isn't.

The broader read, from someone who has watched Arm for five years: the company has become steadily more closed about its architecture and internals, plausibly to slow RISC-V down. Which is the wrong instinct. The people reading this site are the ones writing compilers, emulators, JITs and hypervisors for Arm hardware — the value chain Arm depends on. Making their reference material fragile is a tax on your own ecosystem to protect a trademark.

## The Great Church of Jesus emerges from the sand at Old Dongola — 351 points

**351 points** · 131 comments · [apnews.com](https://apnews.com/article/sudan-antiquities-nubia-cathedral-1b16f67da881ee5592de4481ee55c527) · [HN discussion](https://news.ycombinator.com/item?id=50547698)

AP's page returns a 403 to everything automated, so this is written from the University of Warsaw's own release, which a commenter identified as the source AP worked from. A Sudanese–Polish team led by Artur Obłuski of the Polish Centre of Mediterranean Archaeology, working with Sudan's National Corporation for Antiquities and Museums, has uncovered further sections of the Great Church of Jesus at Old Dongola — capital of the Christian kingdom of Makuria. The structure was first identified in 2021. This season they found the entrance staircase, buttresses reinforcing the apse, and for the first time reached the cathedral's original floor.

The dimensions are the story: 47 metres wide, roughly 57 long, an estimated 21 metres high, with walls around the staircase surviving to about 11 metres. As Obłuski puts it, larger than the White House, and the excavators have only reached the floor in one place. The odd constraint is preservation itself — the building is too intact to dig cheaply, because reaching the floor means going down eleven metres through standing masonry. They also expect to revise the status of the church outside the city walls that had been considered Dongola's cathedral.

Read the comments for the context AP's wire copy won't give you: Polish archaeologists have worked Nubian sites for sixty years, Faras Cathedral's paintings were rescued ahead of the Aswan flooding in the 1960s and are in Warsaw, and the excavation is happening in a country in the middle of the largest refugee crisis on earth. A commenter whose wife's family fled Sudan makes the point that the archaeology is being done at all, which he finds flabbergasting. Also sobering: the thread's lookup of Christianity in Sudan puts the country fifth on a 2025 list of the most dangerous places to be a Christian.

## John Baez explains what Masullo actually claims, and it's a trace formula — 302 points

**302 points** · 279 comments · [johncarlosbaez.wordpress.com](https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/) · [HN discussion](https://news.ycombinator.com/item?id=50598441)

Two attempted proofs of the Riemann Hypothesis appeared on 20 November. One is Levent Alpöge's, which exists mainly as seventeen million lines of Lean. The other is Alessandro Masullo's 940-page manuscript, "The Music of the Primes," posted by Ravi Vakil. Baez's contribution is to do the thing nobody else has: explain the second one to non-specialists, with the caveat that he isn't a number theorist and may be making serious mistakes.

The sketch: the logarithmic derivative of zeta has a simple pole at every zero, so the explicit formula equates a sum over primes with a sum over zeros — every zero contributes an oscillating wave to the distribution of primes, hence "the music." Masullo's approach is a new trace formula for that logarithmic derivative which visibly has no poles to the right of the critical line. Trace formulas are the Selberg move: a spectral side (eigenvalues) equal to a geometric side (closed geodesics, which behave like primes), and Baez walks from the matrix identity through Weil's 1952 positivity criterion to Connes.

And it's not just RH. Both Alpöge and Masullo aim at the generalized Riemann Hypothesis, and Masullo goes further, to L-functions of general Hecke characters over arbitrary number fields — which would imply a very large number of results in number theory and complexity.

What Baez won't tell you, and the thread will: the Lean port of Masullo's manuscript already has a public errata list with hundreds of entries, which one contributing mathematician cautions is not evidence of a fatal hole — many are minor and fixed — and one commenter claims is probably unsalvageable. Meanwhile Vakil, who posted the announcement, now says he hasn't read the document, and Brian Conrad — the one senior mathematician publicly vouching for it — told Scientific American it needs "major revision." A progress dashboard is not a proof. It takes one hole.

## An indie Mac app disappeared from every EU App Store and Apple won't say why — 298 points

**298 points** · 56 comments · [github.com](https://github.com/glushchenko/fsnotes/discussions/2056) · [HN discussion](https://news.ycombinator.com/item?id=50616933)

Oleksandr Glushchenko has maintained FSNotes, an open-source note-taking app for macOS and iOS, for nine years. A few weeks ago he didn't receive his October payout. Then the app was removed from every European App Store, with no explanation. He opened support cases on 5 November (23353628) and 17 November (23573022) and has received no response to either. He has completed the EU Digital Services Act compliance information, submitted Ukrainian business registry documents, and is a registered sole proprietor who pays tax in Ukraine.

His open letter makes a narrow, reasonable ask: someone review the documents, explain the restriction, and give him a chance to fix it. Meanwhile the app loses App Store ranking and search position, and he notes the rankings don't come back if the app does — nine years of discoverability as a one-time write-off. The app remains free and open source on GitHub, but "without revenue, it will be extremely difficult for an independent project like this to survive."

The comment thread is uniformly on his side, but the more useful observation is structural: this is exactly the failure mode the DSA was supposed to address. A trader removed from a platform with no stated reason and no response for eighteen days across two cases is the thing the regulation's notice-and-appeal provisions exist for. Either the process works and someone at Apple is asleep, or the documents were rejected for a reason Apple hasn't bothered to type out. The app store as a distribution channel means a support queue can delete a business, and the owner's only recourse is a GitHub discussion that reaches the front page.

## Google's own staff are telling it not to cut schools off from Search — 284 points

**284 points** · 229 comments · [motherjones.com](https://www.motherjones.com/politics/2026/11/google-alphabet-union-school-ai-protest-gemini-workers-petition/) · [HN discussion](https://news.ycombinator.com/item?id=50577901)

Google announced on Election Day — the timing noted by everyone — that schools which switch off its Gemini classroom tools will lose access to Google Search starting next year. Hundreds of employees have now signed a petition brought by the Alphabet Workers Union, which represents more than 1,000 people at the parent company, asking Sundar Pichai, education VP Chris Phillips and search VP Elizabeth Reid to retract it.

The petition's argument is the one that should worry Google: "Cutting off access to Search for schools that don't wish to use AI will not help persuade our users, and will more likely result in them shutting out Google products altogether." That's not a moral objection, it's a churn forecast. Three of the largest US districts — New York, Los Angeles, Chicago — are already discussing alternative search engines. Protests ran in seven cities, and the photo caption in the piece has children holding signs reading "A.I. Gets an F."

The two details that matter. Most Google workers didn't know about the decision before it was announced — an education-department engineer says so directly. And leadership has acknowledged the letter without responding to any specific demand. The engineers' framing is the sharpest thing in the story: "If the tech is really as useful and desirable as they think it is, why don't they trust us to choose to use it on our own terms?" A company that has to tie Search to Gemini to get adoption has told you what it thinks its AI is worth on its own.

## Pete Warden: local AI is good, and nobody will market it because you can't bill for it — 273 points

**273 points** · 253 comments · [thedataexchange.media](https://thedataexchange.media/pete-warden-moonshine/) · [HN discussion](https://news.ycombinator.com/item?id=50561508)

Ben Lorica's interview with Pete Warden, co-creator of Moonshine Voice, and the strongest claim in it is about incentives rather than capability. Local models are a few months behind commercial frontier models, and always will be a bit behind on usability — but the real lag is marketing, because "it's very hard to make money off local models." Given a choice between a SaaS service with subscription revenue and software that runs on someone else's laptop without ever contacting your servers, every company picks the subscription. So most people have never heard of the good local models, and the entire visible AI market is a text box on a website.

Warden's practical note is that Ollama is the Linux-desktop of AI — every year is the year, and people are still pleasantly surprised by how straightforward it is and how good the models are. He also flags something Anthropic is reportedly worried about: users turning to smaller, specialised models instead of the largest, most expensive one available.

The rest of the conversation is speech and hardware: whether voice becomes a real interface (latency is the whole game — anything over a few hundred milliseconds and people stop talking to it), specialised versus end-to-end speech models, running inference in the browser, and high-bandwidth flash as an alternative to GPU-centric inference. The framing question Lorica puts to him — "can local AI replace cloud models for knowledge work?" — gets the answer the title implies: for a growing set of tasks, yes, and the obstacle is distribution, not capability.

## GL.iNet's remote management service was used to push malware to routers — 265 points

**265 points** · 124 comments · [gl-inet.com](https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20) · [HN discussion](https://news.ycombinator.com/item?id=50604988)

The notice is short and, to its credit, specific: GL.iNet identified unauthorised access to some routers and KVM devices connected to GoodCloud, its remote management service; an unauthorised party exploited a vulnerability in the service and installed malware on some of those devices. They blocked the identified attack path on 20 November and shipped security firmware that disables the known malware and removes related files and traces. CVE reports are submitted, identifiers pending. No CVSS vector yet, no CVE number, four days after the fact.

The company is careful in a way that reads as honest rather than evasive: receiving the notice, seeing an update prompt, or finding your model in the download table "does not mean your device was accessed." The incident involved devices connected to GoodCloud, and a connection alone doesn't establish an attack. There's a table of situations and what each means.

Two things to take away. First, update the firmware — this is remote management infrastructure being used as a delivery channel, which is the worst-case shape for a router. Second, the architecture critique writes itself: a small vendor's convenience feature that holds a persistent outbound channel to every device it manages is a centralised point of failure for a product people buy specifically to control their own network. The notice is decent crisis comms. The design decision that made it necessary isn't discussed.

## Kagi Mail opens a public beta at $99 a year — 233 points

**233 points** · 180 comments · [blog.kagi.com](https://blog.kagi.com/kagi-mail-public-beta) · [HN discussion](https://news.ycombinator.com/item?id=50615481)

Kagi's pitch is continuity: if you've already replaced Google Search with Kagi and Chrome with Orion, the inbox is the last Google-shaped thing you own. Kagi Mail is a hosted service with a @kagimail.com address or your own domain, built on Stalwart with IMAP, JMAP and CalDAV, so any compatible client works. Sixty-day trial, then $99/year, included in Kagi Ultimate, AI features drawn from your existing allowance.

The thread's reaction is more negative than Kagi is used to, and it's specific rather than ideological. Fastmail customers point out Fastmail is not just good enough but good, at $60/year, with decades of stability and a comfortable pace of change. Several people note the two things they wanted from Kagi — a better search product and a better browser — haven't advanced, while it ships an overlapping new service. And the one that lands: email is the recovery gateway for your entire online identity, so a niche provider needs a security team to match, and the announcement page doesn't mention encryption at all.

That last omission is the substantive criticism. Even end-to-end encryption that's imperfect buys you something — an attacker who compromises the provider doesn't automatically get your archive. Kagi's answer to "why another email service" is "technology should do its job and then get out of your way," which is a fine product philosophy and not an answer to a security question. It's also $99 against Fastmail's $60 with AI as the differentiator, and the same commenters who pay Kagi for search say they won't hand a cloud model their mail.

## Gentoo's security lead: the vulnerability reports never stop now — 212 points

**212 points** · 119 comments · [blogs.gentoo.org](https://blogs.gentoo.org/mgorny/2026/10/27/the-next-circle-of-security-hell/) · [HN discussion](https://news.ycombinator.com/item?id=50610334)

Michał Górny's follow-up to his 2021 "modern packager's security nightmare," and the finding is that it got worse. Vulnerabilities are reported at unprecedented rates, and the reports are not the problem — the triage is. "Nowadays everyone and their chatbot became security researchers." Bug bounties were largely discontinued because of slop, and people kept reporting anyway. Even setting aside outright invalid reports, what remains has to be assessed for exploitability, and submitted fixes verified for correctness and regressions.

He's honest that he can't tell whether software is actually less secure. He'd like to blame the corporate sector, marketing-driven development, Rust's framing of safety as memory safety, or slop — and says the truth is he doesn't know, which is beside the point. The point is the workload on the maintainer at the bottom of a dependency tree, where an issue unresolved upstream becomes a weakness in your package.

The most uncomfortable detail is one he admits to: he's been doing meaningless version bumps, with no real changes, so his packages don't get flagged as "outdated." It works — it stops users worrying — and it degrades the signal, because a version bump now implies "we looked at this" when it may mean nothing. A commenter asks whether that was a bad thing to do, and there's no good answer: the alternative is being the person who absorbs the friction, forever, for free.

The thread also corrects a framing trend worth noting: someone argues the vulnerability count hasn't increased, only our ability to identify and report it, and points out the last thirty days featured six high-profile memory-safety bugs in critical infrastructure — PHP, Brotli, nginx, Java, Ruby — which is a hard argument against treating compiler-enforced memory safety as the finish line.

## Nespresso's internal memo on using less coffee per capsule — 208 points

**208 points** · 248 comments · [alvinbunk.wordpress.com](https://alvinbunk.wordpress.com/2026/11/01/nespresso-project-olympus/) · [HN discussion](https://news.ycombinator.com/item?id=50605479)

Alvin Bunk published the internal document. "Project Olympus" is a recipe optimisation across select Vertuo coffees, rolled out Q1 through Q3 2026, in which Nespresso says advances in grinding and roasting let it use "slightly less coffee per capsule" while keeping the same taste, volume, caffeine level and quality standards. Wave one is six SKUs — Double Espresso Scuro, Chiaro and Dolce, Fortado, Orafio, Ristretto Intenso — and wave two is eight more, including Melozio, Stormio, Odacio and the Master Origin Costa Rica and Colombia.

The part that makes it a story rather than a press release is the internal Q&A. Staff are told what to say if customers notice capsules feel lighter: emphasise quality and satisfaction, that taste and experience are unchanged, and that the update "reflects process innovation, not a reduction in value." That last clause is the company telling its own employees the sentence to use. Bunk went public as a whistleblower around 5 September after a Reddit thread asked whether Nespresso had changed its recipes.

Be fair about the coffee science: recipe optimisation is real, and extraction has many variables — roast level, grind size, pressure, time, volume — so a higher extraction yield from less grounds is a legitimate engineering goal, and Nestlé has more resources to chase it than anyone. Be equally clear about the economics: coffee is the overwhelming input cost of a capsule, the pods reportedly hold around five grams against the sixteen most people use for an espresso at home, and a gram saved across millions of capsules a day is a large number. Both things are true at once, which is why "not a reduction in value" is doing so much work in the memo.

## Fast-Anything: don't rewrite it in Rust, rewrite the 5% — 206 points

**206 points** · 170 comments · [github.com](https://github.com/EL4CTEO/fast-anything) · [HN discussion](https://news.ycombinator.com/item?id=50596155)

The tool profiles a running app — Python, Node, TypeScript, Ruby, Java, Kotlin, Go, PHP, C, C++, C#, R — ranks functions by time multiplied by how portable they are, has your coding agent port only the hot ones into a one-function Rust crate, records up to 500 real calls, replays every recorded call against a release build of the port to prove identical results, and swaps it in behind a single marked block that can be removed byte for byte. `fast-anything go --agent claude -- python app.py`. One command, reversible, with a benchmark that interleaves original and ported runs.

The premise is reasonable: rewriting a whole app in Rust costs months, minute-long compiles and gigabytes of `target/`, and most runtime sits in a handful of functions anyway. The verification-by-replay step is the interesting design decision, because it's the thing that makes agent-written code reviewable at all — you're not reading the port, you're checking that it reproduces recorded behaviour.

The scepticism in the thread is earned, though. One commenter's experience: the bottlenecks you can isolate this way are the low-hanging fruit and get optimised quickly, while the real performance cost is "like sand, spread across the system, a little bit in every place." Another makes the point that rewriting in Rust buys more than speed — the fast parts of a Python or Ruby app are C extensions, which are also the vulnerable parts, and a language-level rewrite relocates the trust boundary. And the strongest objection to the framing: most of the speedup from a rewrite comes from making better architectural decisions with hindsight, not from the language, which means a same-language rewrite with performance in mind can get much of the win. True, and also a much harder thing to sell as a CLI.

## Also new, below the sections

- **[A miniature San Francisco with live buses, planes and boats](https://smallsf.com/)** ([367 points](https://news.ycombinator.com/item?id=50603589), 111 comments) — an illustrated isometric map of the city with real transit positions, simulated street traffic, and boats on the bay. The whole thing is a `canvas` draw loop with an OpenStreetMap-derived city; the impressive part is that it loads and holds framerate on a phone.
- **[Making 8-page zines from a single A4 sheet in the browser](https://krthr.co/paper-folds-and-whats-new-in-fanzines-app/)** ([322 points](https://news.ycombinator.com/item?id=50559719), 71 comments) — the fold where the top row prints upside down, automated. You lay out pages right-side up, the export rotates the top row 180° and emits a 300 DPI PDF, and nothing leaves the browser. The update that prompted the post is a page-pairing fix: the sidebar now groups thumbnails into real spreads, because the tidy two-column grid didn't match how a folded booklet actually reads.
- **[Assume people are not interested in your blog post](https://danielsada.tech/blog/assume-people-are-not-interested-in-your-blog-post/)** ([311 points](https://news.ycombinator.com/item?id=50603143), 149 comments) — one minute, one idea: open by saying who the piece is for, so readers can leave. Sada's example is Snowflake's email etiquette, where the first line was often "if you don't develop in this part of the code, you can stop reading." Reasonable advice delivered at the exact length it recommends.
- **[Progress map for the Lean formalization of Masullo's manuscript](https://claude.ai/artifact/CtQyX8qfYAF822bgHJHHE3)** ([255 points](https://news.ycombinator.com/item?id=50605045), 191 comments) — a Claude artifact tracking the port, and the thread's most useful comment is from a mathematician contributing to it: don't read the hundreds of errata entries as proof of failure, most are minor and many are fixed, but a progress bar is not evidence the argument is sound. Only one hole is needed.
- **[Open Social Web Alliance](https://osw-alliance.net/en/)** ([252 points](https://news.ycombinator.com/item?id=50600511), 240 comments) — a policy paper and a 2028 scenario in which over 100 million Europeans use interoperable social networks across ActivityPub, AT Protocol and Matrix, on the email analogy: one account, your own content, any client. The critique in the thread is that the document describes the destination beautifully and the transition not at all.
- **[Yes, 17 million lines of Lean is a lot](https://micjm.com/blog/yes-17m-lines-of-lean-is-a-lot/)** ([248 points](https://news.ycombinator.com/item?id=50607668), 315 comments) — someone actually measured it instead of arguing about it. Of mathlib's famous-theorem collection, 259 have Lean proofs and none are close to 17m lines. Reservoir's 938 packages are a different story: an in-progress AI proof of CFSG at 88m lines, LeanBridge at 36m (98% generated database checks), and Anthropic's Fermat's Last Theorem at 27m — roughly 450× the 60k-line human FLT project it builds on.
- **[Nospeaker — make your trackpad talk](https://github.com/os6/nospeaker)** ([235 points](https://news.ycombinator.com/item?id=50610318), 141 comments) — a MacBook trackpad has no speaker, just a haptic motor that taps the glass. Drive it at up to 4,000 times a second and it becomes audible. Mute the Mac, put it on a table, run one line, and it talks for ninety seconds. Physically pointless and the best demo on the front page.
- **[BepiColombo reaches Mercury](https://www.theguardian.com/science/2026/nov/20/spacecraft-mercury-second-ever-mission-orbit-bepicolombo)** ([234 points](https://news.ycombinator.com/item?id=50587439), 74 comments) — the ESA/JAXA mission's two orbiters are the second ever to enter Mercury orbit, after eight years of flight. An anomaly prevented the full orbital burn and the resulting orbit is worse than planned; they get about three years before running out of fuel and, as one scientist puts it, "sadly, they are not coming back." The best comment is a space reporter's confession that he had no idea a non-NASA Mercury mission had been flying for eight years.
- **[DeFlock America's Facebook group suspended](https://www.facebook.com/shugvermonte/posts/the-deflock-america-group-with-over-840k-members-has-been-suspended-by-meta-what/10165140280736049/)** ([205 points](https://news.ycombinator.com/item?id=50607498), 74 comments) — Meta marked the 840,000-member license-plate-camera-mapping group as a dangerous organisation. Nobody in the thread has evidence of what triggered it; the leading theory is paid mass-reporting by a reputation-management vendor, which is cheap, standard, and unfalsifiable from outside.

## Still on the page

Ninety-two of today's hundred and twenty-four stories were covered in the last four nights. Every prior figure is from the 22 November post unless the cell says otherwise; the 21 November dates are stories that post didn't reach.

| Story | Last | Nov 23 |
| --- | --- | --- |
| [Levent Alpöge claims proof of the Generalized Riemann Hypothesis](https://alpo.ge/remark.pdf) | 2,899 (11-22) | 2,920 (+21) |
| [Hurried Announcement: Alessandro Masullo GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) | 2,445 (11-22) | 2,450 (+5) |
| [Unauthenticated remote code execution in Nginx](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) | 1,516 (11-22) | 1,517 (+1) |
| [Inkling 2 Mini](https://thinkingmachines.ai/news/inkling-2-mini/) | 1,446 (11-22) | 1,473 (+27) |
| [Pill to treat pancreatic cancer hailed as 'biggest breakthrough in decades'](https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib) | 1,307 (11-22) | 1,379 (+72) |
| [Toyota, Nissan, and Honda to standardize parts to lower costs](https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/) | 1,095 (11-22) | 1,369 (+274) |
| [Lean verification of the Riemann Hypothesis](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) | 1,197 (11-22) | 1,237 (+40) |
| [Anthropic’s Nasdaq debut](https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/) | 1,140 (11-22) | 1,144 (+4) |
| [Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) | 1,066 (11-22) | 1,070 (+4) |
| [87% of the Anthropic power will come from gas and 11% from coal in 2028](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/) | 742 (11-22) | 1,021 (+279) |
| [Quad9's withdrawal from France: A canary in the coal mine](https://blog.cloudflare.com/quad9-withdrawal-from-france/) | 908 (11-22) | 909 (+1) |
| [Pancreatic cancer halted by virus injection in three patients](https://www.newscientist.com/article/2528235-pancreatic-cancer-halted-by-virus-injection-in-three-patients/) | 888 (11-22) | 889 (+1) |
| [We need smart people who give a shit](https://violetpixel.com/blog/2026-11-17-we-need-smart-people-who-give-a-shit/) | 833 (11-21) | 840 (+7) |
| [I'll never buy Framework hardware again](https://poolp.org/posts/2026-11-20/ill-never-buy-framework-hardware-again/) | 831 (11-22) | 834 (+3) |
| [AI is killing All About Berlin](https://nicolasbouliane.com/blog/death-by-ai) | 820 (11-22) | 821 (+1) |
| [Slopstrap – Make your site look hastily vibecoded](https://slopstrap.mikelacher.com/) | 761 (11-22) | 801 (+40) |
| [Inside Deutsche Bank](https://www.inside-db.com/) | 783 (11-21) | 786 (+3) |
| [Ask HN: I have been unemployed for 2y. 15 years of experience, US](https://news.ycombinator.com/item?id=50583761) | 718 (11-22) | 738 (+20) |
| [If you can't explain something in simple terms, you don't understand it (2017)](https://kottke.org/17/06/if-you-cant-explain-something-in-simple-terms-you-dont-understand-it) | 693 (11-21) | 717 (+24) |
| [How the European Commission rolled out Matrix to more than 40k staff](https://element.io/blog/how-the-european-commission-rolled-out-matrix-to-more-than-40-000-staff/) | 715 (11-21) | 717 (+2) |
| [Detonating a pile of lead azide](https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really) | 691 (11-22) | 713 (+22) |
| [Google's AI answers reducing search traffic by 40%](https://revscope.co/blog/search-seo-geo-2026/) | 712 (11-21) | 713 (+1) |
| [UK government forced to admit it issued Apple a secret encryption order](https://macanorak.com/uk-government-forced-to-admit-it-issued-apple-a-secret-encryption-order/) | 691 (11-21) | 694 (+3) |
| [My monitor was cutting my download speed by 75%](https://blog.tymscar.com/posts/studiodisplayethernet/) | 676 (11-22) | 693 (+17) |
| [Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence/) | 344 (11-22) | 686 (+342) |
| [Frostbite: A new CPU architecture discovered, designed and verified by AI](https://architectlabs.com/blog/frostbite) | 675 (11-22) | 683 (+8) |
| [DNS resolvers are the wrong place to fight piracy](https://techstackups.com/articles/quad9-leaves-france-dns-blocking/) | 682 (11-21) | 683 (+1) |
| [We promoted developers into architects without informing them](https://manidoraisamy.com/developer-to-architect.html) | 609 (11-22) | 618 (+9) |
| [Fuck Your AI Safeguards](https://ounapuu.ee/posts/2026/11/19/unsafeguards/) | 616 (11-22) | 618 (+2) |
| [Sandwich Simulator](https://stulle.app/) | 527 (11-22) | 607 (+80) |
| [Seven new models at scalable price-performance](https://microsoft.ai/news/microsoft-ignite-2026/) | 603 (11-21) | 606 (+3) |
| [Inkling-2-Mini in 5.4 GB Memory](https://github.com/ShinMegamiBoson/lookatmyquant) | 560 (11-22) | 595 (+35) |
| [Why there are still no non-WebKit browsers on iOS](https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/) | 580 (11-22) | 593 (+13) |
| [Restricting AI agents in mobile operating systems platforms from capturing data](https://signal.org/blog/protecting-your-privacy/) | 569 (11-21) | 581 (+12) |
| [Claude solves two open problems in the physics of black holes](https://www.anthropic.com/research/claude-black-hole-physics) | 566 (11-21) | 579 (+13) |
| [Carnival Cruises emits ten times more sulphur oxide than all of Europe's cars](https://ecohustler.com/article/one-corporation-to-pollute-them-all/) | 558 (11-22) | 561 (+3) |
| [Unforced Navier-Stokes Singularity and the Generalized Riemann Hypothesis](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) | 547 (11-22) | 550 (+3) |
| [Nasdaq erases all 2026 gains as AI sell-off dampens Anthropic's second day](https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off) | 525 (11-22) | 530 (+5) |
| [ID.me terms required for IRS sign-in](https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in) | 510 (11-21) | 510 (+0) |
| [Google is pushing OEMs against GrapheneOS and bootloader unlocking](https://grapheneos.social/@GrapheneOS/117645038299496084) | 508 (11-22) | 508 (+0) |
| [AI agents ask better questions than KPMG accountants in audit trial](https://europeanbusinessmagazine.com/ai-agents-better-questions-kpmg/) | 499 (11-21) | 502 (+3) |
| [Language Models Can Rewrite Their Own Weights](https://arxiv.org/abs/2611.21885) | 490 (11-22) | 493 (+3) |
| [Microsoft's ONNX Runtime has disappeared from GitHub](https://github.com/microsoft/onnxruntime) | 469 (11-22) | 469 (+0) |
| [Someone reported java4shell bug in September 2026](https://github.com/openjdk/jdk/pull/32781) | 461 (11-22) | 462 (+1) |
| ["I can tell you wrote this yourself"](https://em-online.bearblog.dev/i-can-tell-you-wrote-this-yourself/) | 425 (11-21) | 430 (+5) |
| [Everything you need to survive and rebuild society](https://lastbook.org/) | 426 (11-22) | 430 (+4) |
| [Anthropic prices initial public offering](https://www.anthropic.com/news/anthropic-prices-initial-public-offering) | 422 (11-22) | 423 (+1) |
| [15M web servers on one VM – smoltcp, DPDK, AF_XDP](https://kapteko.com/15-million-webservers/) | 405 (11-21) | 412 (+7) |
| [Getting the mind to steer the body to steer you](https://notnottalmud.substack.com/p/getting-the-mind-to-steer-the-body) | 390 (11-22) | 410 (+20) |
| [Ruby2ßhell: Pre-authentication RCE on stock Rails](https://verialabs.com/ruby2shell/) | 404 (11-21) | 408 (+4) |
| [If you stop writing code, you also get worse at reviewing it](https://cekrem.github.io/posts/if-you-stop-writing-code-you-also-get-worse-at-reviewing-it/) | 396 (11-22) | 402 (+6) |
| [PostgreSQL 19](https://www.postgresql.org/docs/release/19.0/) | 398 (11-22) | 399 (+1) |
| [NINLIVE: The Nine Inch Nails live archive](https://ninlive.com/) | 378 (11-22) | 382 (+4) |
| [OpenSSL: Buffer overflow in EVP_EncodeBlock()](https://github.com/openssl/openssl/pull/33652) | 367 (11-21) | 376 (+9) |
| [The stochastic parrots have apparently proved the Riemann Hypothesis](https://scottaaronson.blog/?p=10344) | 355 (11-22) | 359 (+4) |
| [Show HN: I built a game where you are an LLM's subagent](https://github.com/gulivan/worker755) | 223 (11-22) | 356 (+133) |
| [The 98% Slot Machine: How Paid Advertising Became an Extractive Machine](https://globalcommercegraph.com/writing/the-ninety-eight-percent-slot-machine) | 341 (11-21) | 343 (+2) |
| [Multiple vulnerabilities in Regexp and String case conversion](https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/) | 342 (11-21) | 343 (+1) |
| [Do not buy RAM, compress](https://curiousbits.nl/blog/do-not-buy-ram-compress/) | 340 (11-22) | 342 (+2) |
| [Harvard researchers find AI coding agents shifted the bottleneck to code review](https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/) | 331 (11-22) | 331 (+0) |
| [Codeberg.org Not Reachable](https://social.anoxinon.de/@codebergstatus/117636437840688845) | 329 (11-21) | 330 (+1) |
| [SSD prices may begin to decline in the latter half of 2027](https://www.drivevault.io/blog/when-will-hard-drive-prices-come-down.html) | 324 (11-21) | 327 (+3) |
| [Finite-time blow-up for the Navier–Stokes equations](https://github.com/tristanbuckmaster/navier-stokes/) | 324 (11-22) | 325 (+1) |
| [Energy-Based Reasoners: 385x more efficient inference](https://energy-based-reasoners.github.io/) | 317 (11-21) | 317 (+0) |
| [LLMs can read and write executables byte by byte from a hex dump](https://sgiannopoulos.github.io/blog/machine-code-programming/) | 309 (11-22) | 316 (+7) |
| [LLM assisted reverse engineering](https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering) | 315 (11-21) | 316 (+1) |
| [FFmpeg 9.1 'Gauss'](https://ffmpeg.org/download.html#release_9.1) | 313 (11-22) | 315 (+2) |
| [US SEC's Nvidia probe is examining potential accounting issues](https://www.marketscreener.com/news/us-sec-s-nvidia-probe-is-examining-potential-accounting-issues-sources-say-ce785ed3dd8ff627) | 306 (11-22) | 307 (+1) |
| [The Cambridge Dictionary has named 'human' as the Word of the Year](https://www.cam.ac.uk/news/cambridge-dictionary-reveals-word-of-the-year-2026) | 304 (11-21) | 305 (+1) |
| [Nintendo takes Picofly firmware down from GitHub](https://www.youtube.com/watch?v=-TLCGUpoD6c) | 304 (11-21) | 304 (+0) |
| [What's New in PHP 8.6](https://www.php.net/releases/8.6/en.php) | 294 (11-21) | 294 (+0) |
| [Genie 4 is now available](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/) | 293 (11-21) | 294 (+1) |
| [Data Processing Incidents on Inference Providers](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) | 270 (11-22) | 293 (+23) |
| [Why is Gemini 4 Carbon taking so long?](https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/) | 285 (11-21) | 287 (+2) |
| [DreamCoder: coding harness and IDE from the author of Mastering Emacs](https://www.masteringemacs.org/article/announcing-dreamcoder) | 269 (11-21) | 286 (+17) |
| [Distributed, high-performance blob storage on SQLite](https://zerodha.tech/blog/high-performance-distributed-blob-storage/) | 286 (11-21) | 286 (+0) |
| [Archive Team is archiving the Apple Support Community](https://wiki.archiveteam.org/index.php/Apple_Discussions) | 268 (11-21) | 268 (+0) |
| [GnuPG Security Advisory for GPGME](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html) | 264 (11-22) | 265 (+1) |
| [Advice for the next 100 Rust GUIs](https://linebender.org/blog/next-100-guis/) | 247 (11-22) | 261 (+14) |
| [Backblaze Notice at Collection and Privacy Policy](https://www.backblaze.com/company/policy/privacy) | 251 (11-22) | 254 (+3) |
| [DaisyRose-27B](https://www.radixark.com/blog/daisyrose-27b) | 251 (11-21) | 252 (+1) |
| [Show HN: ExitPath – Open-source ways out of Slack, Notion and friends](https://exitpath-ruddy.vercel.app/) | 251 (11-21) | 251 (+0) |
| [Show HN: Take Voyager 1 apart, down to a single memory chip](https://rshekhar.com/voyager/) | 238 (11-22) | 240 (+2) |
| [Show HN: Cornhole News – A Hacker News inspired site for news](https://cornholenews.news) | 237 (11-22) | 237 (+0) |
| [Show HN: Tinnitus frequency finder and audio notch tool](https://trynotched.com/find) | 212 (11-21) | 235 (+23) |
| [Leonida – PC Recompilation of the Xbox Version of GTA 6](https://github.com/ItsNotRexed/Leonida) | 207 (11-22) | 233 (+26) |
| [The Making of Oxygene](https://jeanmicheljarre.com/aaa/the-making-of-oxygene) | 216 (11-21) | 231 (+15) |
| [Advancing chip design with OpenAI models](https://openai.com/index/advancing-chip-design-with-our-models/) | 224 (11-21) | 225 (+1) |
| [Re: Riemann](https://borretti.me/article/re-riemann) | 216 (11-22) | 219 (+3) |
| [Jujutsu Primer](https://ethanlowman.com/posts/jj-primer/) | 209 (11-22) | 210 (+1) |
| [Clojure will affect the way you think about programming (2017)](https://eli.thegreenplace.net/2017/clojure-the-perfect-language-to-expand-your-brain/) | 205 (11-22) | 209 (+4) |
| [F-22 Next-Generation micro–Data Transfer Cartridge](https://sam.gov/workspace/contract/opp/8948e8601e964c6aba9c801eee16b1be/view) | 205 (11-22) | 205 (+0) |

## The throughline

The spine of today is institutional. Nvidia's board fired a CEO, then reinstated him eleven days later after consulting the US government and watching the stock — while its own investigation and an SEC probe continue. Google's employees filed a petition asking their employer not to cut schools off from Search. Arm's lawyers sent a letter to a one-person documentation site. Apple removed a nine-year-old app from an entire continent and hasn't answered two support cases. In each case the formal process exists, and in each case something outside it decided: the share price, the government, a legal department's risk appetite, a support queue that doesn't reply. O'Reilly's essay is the theory for all of it — when the objective function is set to something other than the outcome you want, everyone inside the system is eventually incentivised toward the same result, and it isn't villainy.

The second thread is that the cost of attempting things has collapsed, and the results are strange. Ladybird got past Safari Technology Preview on Web Test Platform by pointing agents at failing tests. Zhipu shipped a loop transformer that is, per its own commenters, a pretrained checkpoint converted rather than trained that way. `fast-anything` exists because an agent can now port a single hot function to Rust and prove behavioural equivalence by replay. Somebody built a macOS userspace inside a stock Linux kernel. And a proof of the Riemann Hypothesis arrived as seventeen million lines of Lean, which another post today measures against the field: 259 human-proved famous theorems, none close, and an Anthropic FLT proof 450 times the length of the human project. The bottleneck has moved from producing work to evaluating it — which is exactly the complaint the Gentoo security lead makes about a flood of vulnerability reports that no one has time to triage.

The third thread is a straight line from O'Reilly's essay to four separate stories about pricing the same thing differently. Nespresso's internal memo says using less coffee is "process innovation, not a reduction in value," and it is written to be said out loud to customers. Kagi wants $99 a year for email when Fastmail charges $60 and the announcement doesn't mention encryption. Google is prepared to withhold Search from schools to make Gemini adoption happen. And Nvidia's stock lost a third and got it back in eleven days on a governance decision. Value created versus value captured, on the same front page, four times, in four different industries. The extraction is not subtle and it is not hidden. It's in the press release.
