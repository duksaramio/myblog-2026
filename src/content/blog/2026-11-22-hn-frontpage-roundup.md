---
title: "Hacker News Front Page Roundup — November 22, 2026"
pubDate: 2026-11-22
description: "A pancreatic cancer 'pill' that is really a pill plus chemo in 61 people, Anthropic's 87% gas power mix, OpenAI publishing its loss curve as a safety metric, and OpenRouter off-boarding three providers over leaked prompts."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

A hundred stories cleared 200 points in a full scan of all 500 ranked ids today, and thirteen of them are new here. The other eighty-seven are in the table at the bottom, and most of them barely moved. The front page is frozen at the top: the Riemann proof is still first at 2,899, the parody of the Riemann proof is still second at 2,445, and the two of them added +54 and +98 between them — a quiet day for stories that are still being argued about in nine hundred comments.

What did move is a different kind of story. A cancer drug headline that oversells a 61-patient cohort. A car industry agreement that's really about China. An emissions audit that turns one AI company's power contracts into a number you can compare against a US state. And two labs deciding, for their own reasons, what the rest of us should be allowed to measure them by.

## The "pill" that can eliminate pancreas tumours is a pill plus chemo, in 61 people — 1,307 points

**1,307 points** · 286 comments · [theguardian.com](https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib) · [HN discussion](https://news.ycombinator.com/item?id=50582069)

The actual data, presented Friday at the EORTC-NCI-AACR symposium in Barcelona by Wungki Park of Memorial Sloan Kettering, is from RMC-GI-102: 61 patients with previously untreated metastatic pancreatic ductal adenocarcinoma, given daraxonrasib **combined with chemotherapy**. Median follow-up 18.3 months. Objective response rate 60.7%, complete responses 8.2%, disease control 90.2%, median progression-free survival 12.8 months, and 76.6% alive at one year (95% CI 63.7–85.4). For comparison, the trial's own framing of standard chemo is 8.5–11.1 months median overall survival, a 23–42% response rate, and tumours growing back after five to six months.

That is a genuinely large effect in a disease where nothing has worked for thirty years. It is also a single-arm Phase I/II expansion cohort, and the Guardian's headline — "A pill that can shrink and potentially eliminate pancreas tumours" — mentions neither the chemotherapy it was given with, nor the 61, nor the word "first-line". The trial is a combination regimen. The pill is the interesting half. You cannot take the pill and skip the chemo on the strength of this data.

The story buries its own lede too. Daraxonrasib is already approved. The FDA cleared it as RASONQUE on 26 August 2026 for previously treated metastatic pancreatic cancer, on the strength of the randomised Phase 3 RASolute 302 trial — 248 patients on drug versus 252 on chemotherapy, a 60% reduction in risk of death. That is the approval-grade evidence, and it was already public. What today's coverage describes is the *first-line* combination signal, which is where the commercial value sits because the population is bigger and the patients are healthier. So the honest headline is not "new pill shrinks tumours" but "the drug approved as a second-line monotherapy also looks strong combined with chemo in first line, from a 61-patient cohort."

Two things to keep in view. The confidence interval on one-year survival runs down to 63.7%, which is far above what chemo does but is not a slam dunk, and single-arm numbers in pancreatic cancer have a long history of shrinking under randomisation. And the safety profile is not nothing: the approved label reports dermatologic toxicity in 86% of pancreatic patients (10% Grade 3) and stomatitis in 57% (9% Grade 3). Park's "closest to cure" is a presenter's line, delivered to a room of oncologists and investors; the same data, in the same Guardian piece, has Cancer Research UK's chief executive saying "more trials are now needed" in the middle of praising it. Both things are true. It's a real drug. The headline is doing work the trial hasn't done yet.

This is also a separate story from the one here on 19 November — an oncolytic virus halting tumours in three patients, now at 888 points. Two pancreatic cancer stories in four days, which tells you something about how little there is to report in this disease.

## Toyota, Nissan and Honda agree to standardise invisible parts — 1,095 points

**1,095 points** · 639 comments · [caranddriver.com](https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/) · [HN discussion](https://news.ycombinator.com/item?id=50596133)

Announced in Tokyo by Japan Automobile Manufacturers Association chairman Koji Sato, who is also vice chairman of Toyota: unified quality criteria for steel, consistent protocols for plastics and resins, and a universal colour-coding scheme for wiring harnesses. Domestic suppliers first, international ones later, first changes next year. The three areas were picked because they're invisible to buyers — nobody cross-shops a car on harness colours — and because they're expensive.

The reason is China, and the article says so within two paragraphs. Japan's seven automakers, Nissan very much included, are being out-competed on cost by BYD and friends, which per one commenter's citation make 75–85% of their parts in-house. When your competitor's vertical integration is that deep, the counter-move is horizontal integration: share the commodity parts, keep the brand-defining ones.

Two things the announcement is not. It is not a platform-sharing deal — there's no shared chassis, no shared battery, no joint factory. Standardising steel specs and wire colours saves real procurement money and zero engineering money. And the headline names three companies when the effort covers seven: Mazda, Subaru, Mitsubishi and Suzuki are in it too.

The historical rhyme is worth noting. Detroit did versions of this every time Japan knocked it off its stool — the GM–Ford six-speed automatic in 2002, the USCAR/USAMP consortium before that. Consortia like this appear when an industry is losing and disappear when it isn't. The other read in the thread is that this is a soft landing for Nissan, which Honda was reportedly pushed to acquire and managed to avoid after a press conference where the CEO answered "that is a difficult question" when asked why he would buy it. Standardising parts with a struggling partner is a cheaper way to help than merging with it.

## Anthropic's contracted power is 87% gas and 11% coal — 742 points

**742 points** · 776 comments · [betterdatacenterproject.com](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/) · [HN discussion](https://news.ycombinator.com/item?id=50597612)

The Better Data Center Project took one company's power contracts and worked backwards to emissions. As of October 2026 Anthropic has contracted 15 GW of compute, of which 5.9–9.6 GW is tied to specific sites — the authors note 9.6 GW is about 7 million homes, or 18% of California's peak demand. Mapping each site to its on-site generation and its likely marginal grid generators gives 87% gas, 11% coal in 2028. Mid-case emissions 32 million tonnes CO₂e a year, range 17–38. Average carbon intensity 1,033–1,076 lb/MWh against a US grid average of 767. Roughly 80% of the on-site capacity is simple-cycle turbines and engines, the least efficient way to burn gas.

The finding that doesn't depend on the model: Anthropic has made no disclosed renewable commitments in the United States. Its only public renewable contracts or investments are in Norway and Canada. Meanwhile it bought commitments for 1.7 GW of heavy-duty gas generators for $3.4bn. That's a company deciding to become a power producer because the grid won't move fast enough, and choosing the fastest dispatchable thing rather than the cleanest one.

Be clear about what's modelled versus what's fact. The 87/11 split is an attribution argument — new load is served by marginal generators, and without a new-build renewable contract behind it, that means fossil. Reasonable people can argue the counterfactual (some of that load will land on grids adding renewables anyway), but the report's own framing is defensible: no contract, no credit. The 32-million-tonne figure is a modelled mid-case, not a meter reading, and the comparison against Meta, Microsoft and Google puts Anthropic's *contracted compute* against those companies' entire-company location-based Scope 2 — not the same denominator. The comparison that does work is the simple one: 32 Mt against California's entire power sector at 31.1 Mt in 2024. One company's AI workload, one US state's electricity system. The thread's angriest comments are about Memphis and the methane turbines at Colossus 1, which is where the local air-quality cost lands rather than the global carbon one.

## OpenAI publishes its loss curve and asks everyone to be measured by it — 344 points

**344 points** · 225 comments · [openai.com](https://openai.com/index/perplexity-and-intelligence/) · [HN discussion](https://news.ycombinator.com/item?id=50601525)

Jakub Pachocki's argument, published today: modern AI is a compressor trained on a large corpus, everything else is elicitation of what the compressor learned, and therefore the one metric that matters is perplexity — cross-entropy loss on a held-out set — which is also the one metric that has stayed stable across four model generations while benchmarks saturated and got replaced. Then he does something labs don't usually do and puts numbers on it: GPT-3.5 at roughly 0.99 log-perplexity, GPT-4 at 0.91, and current models below 0.8, with the "transformative capabilities in cybersecurity and mathematics" showing up below 0.8. The proposal is that perplexity become a shared safety measure, part of what he calls "pacing".

The technical objection is not small, and the post doesn't address it. Perplexity is computed per token, and tokens are defined by the tokenizer. Two labs with different tokenizers, different vocabularies and different evaluation corpora produce numbers on incomparable scales. A cross-lab metric needs a pinned tokenizer and a pinned corpus, and here the corpus is OpenAI's own "current main evaluation dataset", unnamed. So what's on offer isn't a shared yardstick; it's a disclosure from the company that owns the yardstick. Those are different things, and the difference matters exactly when you'd want to rely on it.

There's also a causal sleight of hand that commenters caught. The post attributes the recent mathematics results to pretraining progress, but the same models are post-trained and RL'd heavily, and the article itself says algorithmic progress blurs the line between phases. The defensible claim is that loss predicts capability. The claim being made is closer to "loss causes capability."

Which still leaves something genuinely surprising: one scalar, tracked over four generations, lines up with conversational fluency, then chain-of-thought, then research-grade maths. Commenters noted the one visible discontinuity — GPT-4.5, the giant pre-RL model, sitting oddly against the o-series. And the strategic read is hard to miss. "We are publishing our loss numbers and proposing an industry pacing metric" is a position taken in a policy environment where someone is going to impose a threshold. Better to supply the threshold than receive it.

## An LLM reading a hex dump is impressive and not "programming in machine code" — 309 points

**309 points** · 179 comments · [sgiannopoulos.github.io](https://sgiannopoulos.github.io/blog/machine-code-programming/) · [HN discussion](https://news.ycombinator.com/item?id=50546587)

George Xenos and Sotiris Giannopoulos pasted `xxd` hex dumps into GPT-6.1 Sol with every tool stripped out — no disassembler, no compiler, no execution, one attempt per task — and asked it to reason about the bytes. It explained all five binaries, including a stripped statistics tool where it found a real bug in the upstream source. It analysed an unknown malware sample and extracted the correct IOCs. It added a feature to three binaries by editing bytes in place, and wrote three small programs from scratch whose output matched a GCC reference build byte for byte on the test cases. DeepSeek V4.1 Flash independently reached the same conclusion on the malware sample.

The cost is the part the headline hides. A hex dump runs about 2.4 tokens per byte. A 200 KB executable is close to half a million tokens before the model has done anything, which makes "just paste the bytes" a demonstration of latent knowledge, not a workflow. The authors are honest that two of the four experiments aren't formally scored, and that this is early evidence rather than a method.

The engineering conclusion most commenters reached is the opposite of the paper's framing. You would not want a non-deterministic process emitting machine code per target when you can generate source once and compile it deterministically for each architecture. What the result actually shows is that these models carry a usable model of x86-64 semantics — enough to triage a stripped binary or spot that a malware sample's behaviour is what the strings suggest, which is the part of reverse engineering where tooling is the bottleneck rather than the thinking.

## OpenRouter booted three inference providers over leaked prompts — 270 points

**270 points** · 88 comments · [openrouter.ai](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) · [HN discussion](https://news.ycombinator.com/item?id=50595554)

The short version: security researchers — OpenRouter credits the Dragos report — found that some inference providers had data compromised or were not honouring their own data policies. OpenRouter's response: three providers off-boarded, 125 endpoints removed from Zero Data Retention eligibility, all potentially affected customers notified, and ongoing technical verification of network paths where requests might be forwarded to third parties. Named provider posts on the list: Atlas Cloud, Novita (about MiniMax requests), Phala, and Together, whose disclosure is "prompt leakage for requests in June and July of 2026". OpenRouter says not every affected provider has posted publicly.

Commenters who got the email describe the mechanism: some providers weren't running inference themselves, they were reselling requests upstream to MiniMax, so the prompt went to a Chinese lab whose retention policy nobody had agreed to. The researchers found it by planting decoy URLs in prompts and watching for fetches from somewhere unexpected. That technique is the story. Every ZDR checkbox in the industry has now been shown to be untested until someone does that.

The operational takeaway doesn't require outrage. If your prompts contain anything that can't leave the building, the model can't leave the building either, and "we use a router with a ZDR filter" is a contractual claim about a chain of parties you haven't audited. Pin your provider allowlist instead of letting routing optimise for price. And note the asymmetry: the router found out from a third party, months after the incidents, and its remedy is a list it maintains.

## Raph Levien's advice for the next hundred Rust GUIs — 247 points

**247 points** · 143 comments · [linebender.org](https://linebender.org/blog/next-100-guis/) · [HN discussion](https://news.ycombinator.com/item?id=50593737)

A follow-up, four and a half years on, to "Advice for the next dozen Rust GUIs". About twenty new toolkits have appeared since. The interesting change is why: AI. Levien's argument is that the cost of writing Rust is no longer meaningfully higher than writing TypeScript for a model, and the type system makes large codebases more maintainable, so the historical reason nobody wrote UI in Rust — it's hard and the people who can do it are rare — is evaporating. He predicts an explosion of experiments because there's still no consensus on the UI layer.

The concrete progress is real: Parley has mostly solved text layout, funded by Google, Canva and Dioxus (now Cognition), and it's in most new toolkits. AccessKit handles accessibility. GPUI, the Zed framework, is now being used for AI-driven rewrites including Discord's desktop client, though Levien notes its renderer is tuned for a text editor and lacks gradients, blending and filters. His mobile advice is the pragmatic one: use the native toolkit for UI and Rust for the logic — the architecture Shopify landed on after abandoning React Native, and reportedly what 1Password and Discord's mobile "Phoenix" plan do.

The thread's counter-argument is the useful one. Immediate-mode UI redraws the window on every mouse move, GPU rendering needs shader compilation so you need a CPU path anyway, and a lot of machines have no usable GPU. The unglamorous truth is that text selection, wrapping and IME are where the months go, not the renderer — which is roughly what Levien says too, just less bluntly.

## The mind that steers the body that steers the mind — 390 points

**390 points** · 153 comments · [notnottalmud.substack.com](https://notnottalmud.substack.com/p/getting-the-mind-to-steer-the-body) · [HN discussion](https://news.ycombinator.com/item?id=50583028)

An essay about a specific and under-discussed phenomenon: people who are cured of a physical problem by reading a book that contains no technique. Allen Carr's smoking book. John Sarno's back-pain book. Scott Alexander's patient who recovered from PTSD after reading a book he didn't rate. Patrick Collison reporting 4 out of 4 on Sarno for RSI. The author calls the mechanism an "indescribable mental motion" and the essay's point is that the causal story doesn't have to be true for the effect to be real — you can be cured by the Amazon reviews of the book.

That's where the analysis should stop, and mostly does. The claim is unfalsifiable by construction: if it works, the motion happened; if it doesn't, you didn't find the motion. The thread split accordingly, between people offering the Zen version (stop telling your body what to do, start observing what it does) and people pointing out that Allen Carr's actual argument is the inverse of willpower — that there's nothing to give up, so there's nothing to fight. One commenter's correction is the best thing in the thread: the method works spectacularly the first time and loses most of its power if you relapse, which is what you'd expect if the active ingredient is belief rather than technique.

## Also new, below the sections

- **[Sandwich Simulator](https://stulle.app/)** ([527 points](https://news.ycombinator.com/item?id=50594911), 187 comments) — a German sandwich builder where you stack bread, cheese, cucumber and existential dread. The genre is 31 years old: one commenter wrote the Internet Pizza Server in 1994 and is impressed by the progress in simulated food.
- **[Scottish HTTP Codes](https://underwood.network/http/scots.html)** ([261 points](https://news.ycombinator.com/item?id=50550062), 60 comments) — 404 is "NO FUCKIN HERE PAL", 451 is "THE COUNCIL SAYS NAW", 418 is "AH'M A FUCKIN TEAPOT". Several commenters want Limmy to record them.
- **[Show HN: worker755](https://github.com/gulivan/worker755)** ([223 points](https://news.ycombinator.com/item?id=50599762), 53 comments) — a browser game where an AI manager believes you are its subagent and issues orders. Fun, and a commenter's complaint is the tell: it doesn't support local models.
- **[Leonida](https://github.com/ItsNotRexed/Leonida)** ([207 points](https://news.ycombinator.com/item?id=50595168), 160 comments) — a static recompilation of the Xbox Series version of GTA 6 for PC. The console CPU is x86-64 so the game code runs natively, console system software is reimplemented, and the precompiled RDNA2 shaders are translated to SPIR-V for Vulkan. 13.8k stars, 1.1k pull requests, 54 open issues, GPL-3.0, and it does not ship the game — you point it at your own copy, which it finds by scanning Downloads, Desktop, Documents, your home folder and two levels into every drive. Commenters are unimpressed by that last part, and the whole thing rests on a leaked build.
- **[Clojure will affect the way you think about programming (2017)](https://eli.thegreenplace.net/2017/clojure-the-perfect-language-to-expand-your-brain/)** ([205 points](https://news.ycombinator.com/item?id=50585376), 94 comments) — Bendersky's argument that Clojure is the best language to learn next, nine years on. The modern addendum from the thread: immutable data structures are what make a codebase legible to an LLM, and nobody has asked whether an LLM-first world would have invented them.

## Still on the page

Eighty-seven of today's hundred stories were covered in the last four nights. Every prior figure below is from the 21 November post unless the cell says otherwise.

| Story | Last | Nov 22 |
| --- | --- | --- |
| [Levent Alpöge claims proof of the Generalized Riemann Hyp…](https://alpo.ge/remark.pdf) | 2,845 (11-21) | 2,899 (+54) |
| [Hurried Announcement: Alessandro Masullo GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) | 2,347 (11-21) | 2,445 (+98) |
| [Unauthenticated remote code execution in Nginx](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) | 1,513 (11-21) | 1,516 (+3) |
| [Inkling 2 Mini](https://thinkingmachines.ai/news/inkling-2-mini/) | 1,316 (11-21) | 1,446 (+130) |
| [Lean verification of the Riemann Hypothesis](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) | 630 (11-21) | 1,197 (+567) |
| [Anthropic’s Nasdaq debut](https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/) | 1,139 (11-21) | 1,140 (+1) |
| [Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) | 1,058 (11-21) | 1,066 (+8) |
| [Quad9's withdrawal from France: A canary in the coal mine](https://blog.cloudflare.com/quad9-withdrawal-from-france/) | 908 (11-21) | 908 (+0) |
| [Pancreatic cancer halted by virus injection in three pati…](https://www.newscientist.com/article/2528235-pancreatic-cancer-halted-by-virus-injection-in-three-patients/) | 883 (11-21) | 888 (+5) |
| [I'll never buy Framework hardware again](https://poolp.org/posts/2026-11-20/ill-never-buy-framework-hardware-again/) | 817 (11-21) | 831 (+14) |
| [AI is killing All About Berlin](https://nicolasbouliane.com/blog/death-by-ai) | 814 (11-21) | 820 (+6) |
| [Slopstrap – Make your site look hastily vibecoded](https://slopstrap.mikelacher.com/) | 619 (11-21) | 761 (+142) |
| [Ask HN: I have been unemployed for 2y. 15 years of experi…](https://news.ycombinator.com/item?id=50583761) | 532 (11-21) | 718 (+186) |
| [Detonating a pile of lead azide](https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really) | 426 (11-21) | 691 (+265) |
| [My monitor was cutting my download speed by 75%](https://blog.tymscar.com/posts/studiodisplayethernet/) | 381 (11-21) | 676 (+295) |
| [Frostbite: A new CPU architecture discovered, designed an…](https://architectlabs.com/blog/frostbite) | 666 (11-21) | 675 (+9) |
| [Fuck Your AI Safeguards](https://ounapuu.ee/posts/2026/11/19/unsafeguards/) | 615 (11-21) | 616 (+1) |
| [We promoted developers into architects without informing…](https://manidoraisamy.com/developer-to-architect.html) | 557 (11-21) | 609 (+52) |
| [Why there are still no non-WebKit browsers on iOS](https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/) | 400 (11-21) | 580 (+180) |
| [Inkling-2-Mini in 5.4 GB Memory](https://github.com/ShinMegamiBoson/lookatmyquant) | 230 (11-21) | 560 (+330) |
| [Carnival Cruises emits ten times more sulphur oxide than…](https://ecohustler.com/article/one-corporation-to-pollute-them-all/) | 541 (11-21) | 558 (+17) |
| [Unforced Navier-Stokes Singularity and the Generalized Ri…](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) | 525 (11-21) | 547 (+22) |
| [Nasdaq erases all 2026 gains as AI sell-off dampens Anthr…](https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off) | 481 (11-21) | 525 (+44) |
| [Google is pushing OEMs against GrapheneOS and bootloader…](https://grapheneos.social/@GrapheneOS/117645038299496084) | 502 (11-21) | 508 (+6) |
| [Language Models Can Rewrite Their Own Weights](https://arxiv.org/abs/2611.21885) | 473 (11-21) | 490 (+17) |
| [Microsoft's ONNX Runtime has disappeared from GitHub](https://github.com/microsoft/onnxruntime) | 467 (11-21) | 469 (+2) |
| [Someone reported java4shell bug in September 2026](https://github.com/openjdk/jdk/pull/32781) | 460 (11-21) | 461 (+1) |
| [Everything you need to survive and rebuild society](https://lastbook.org/) | 424 (11-21) | 426 (+2) |
| [Anthropic prices initial public offering](https://www.anthropic.com/news/anthropic-prices-initial-public-offering) | 422 (11-21) | 422 (+0) |
| [PostgreSQL 19](https://www.postgresql.org/docs/release/19.0/) | 391 (11-21) | 398 (+7) |
| [If you stop writing code, you also get worse at reviewing…](https://cekrem.github.io/posts/if-you-stop-writing-code-you-also-get-worse-at-reviewing-it/) | 374 (11-21) | 396 (+22) |
| [Russia reportedly planned mass-casualty attack in Poland…](https://www.yahoo.com/news/world/articles/russia-reportedly-planned-mass-casualty-090500574.html) | 377 (11-19) | 386 (+9) |
| [NINLIVE: The Nine Inch Nails live archive](https://ninlive.com/) | 346 (11-21) | 378 (+32) |
| [The stochastic parrots have apparently proved the Riemann…](https://scottaaronson.blog/?p=10344) | 337 (11-21) | 355 (+18) |
| [Do not buy RAM, compress](https://curiousbits.nl/blog/do-not-buy-ram-compress/) | 334 (11-21) | 340 (+6) |
| [Harvard researchers find AI coding agents shifted the bot…](https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/) | 328 (11-21) | 331 (+3) |
| [Finite-time blow-up for the Navier–Stokes equations](https://github.com/tristanbuckmaster/navier-stokes/) | 311 (11-21) | 324 (+13) |
| [FFmpeg 9.1 'Gauss'](https://ffmpeg.org/download.html#release_9.1) | 303 (11-21) | 313 (+10) |
| [US SEC's Nvidia probe is examining potential accounting i…](https://www.marketscreener.com/news/us-sec-s-nvidia-probe-is-examining-potential-accounting-issues-sources-say-ce785ed3dd8ff627) | 298 (11-21) | 306 (+8) |
| [GnuPG Security Advisory for GPGME](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html) | 200 (11-21) | 264 (+64) |
| [Backblaze Notice at Collection and Privacy Policy](https://www.backblaze.com/company/policy/privacy) | 227 (11-21) | 251 (+24) |
| [Show HN: Take Voyager 1 apart, down to a single memory ch…](https://rshekhar.com/voyager/) | 238 (11-21) | 238 (+0) |
| [Show HN: Cornhole News – A Hacker News inspired site for…](https://cornholenews.news) | 237 (11-21) | 237 (+0) |
| [Re: Riemann](https://borretti.me/article/re-riemann) | 210 (11-21) | 216 (+6) |
| [Energy drinks linked to 11 times more reports of cardiac…](https://www.sciencedaily.com/releases/2026/11/261110042543.htm) | 214 (11-19) | 216 (+2) |
| [Jujutsu Primer](https://ethanlowman.com/posts/jj-primer/) | 205 (11-21) | 209 (+4) |
| [F-22 Next-Generation micro–Data Transfer Cartridge (mDTC)](https://sam.gov/workspace/contract/opp/8948e8601e964c6aba9c801eee16b1be/view) | 205 (11-21) | 205 (+0) |

## The throughline

Three of today's stories are about numbers that the industry did not choose to publish. Anthropic's power mix, because an advocacy group reconstructed it from contracts and siting decisions. Its loss curve, because OpenAI decided publishing it was better than having a threshold imposed. OpenRouter's provider incidents, because a security firm planted decoy URLs and watched where they got fetched from. In each case the number existed before the disclosure and nobody outside had it. In each case the disclosed number is contested — the 87% depends on a marginal-attribution model, the perplexity figure depends on a tokenizer and a corpus you can't see, the incident list depends on providers volunteering their own write-ups.

The second thread is that approval and announcement have come apart. Daraxonrasib was approved in August on a randomised Phase 3; today's "biggest breakthrough in decades" is a 61-patient single-arm cohort of the same drug in an earlier line of treatment. Toyota, Nissan and Honda announced a standardisation agreement that standardises steel specs and harness colours, not platforms. Leonida is a 13.8k-star recompilation of a game nobody can legally distribute. The headline is the smallest true unit of these stories, and the substance is one layer down every time.

And the third thread is that AI has changed what is cheap to attempt. Twenty new Rust GUI toolkits in four years, an explosion now that writing Rust costs a model the same as writing TypeScript. A model reading machine code because nobody had to teach it to use a disassembler. A 1.1k-pull-request game recompilation run as a crowdsourced agent swarm. The things that were expensive because they were tedious are becoming cheap, and the things that were expensive because they were hard — a randomised trial, a grid interconnection, a text layout engine that handles every script — are not.
