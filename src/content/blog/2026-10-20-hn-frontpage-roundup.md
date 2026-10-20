---
title: "Hacker News Front Page Roundup — October 20, 2026"
pubDate: 2026-10-20
description: "Fifty-nine stories clear 200 points, forty-four of them new. The thread running through today's page is provenance: who made the artifact, and how would you ever prove it."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Fifty-nine stories cleared 200 points today, and forty-four of them are new — the biggest one-day turnover in weeks. The volume is a side effect of a heavy news day; the shape is not.

Read the top of the page and one question keeps recurring, in wildly different costumes: **who made this artifact, and how would you know?** A model ban that reaches third-party products "developed using DeepSeek implementations." A certificate authority whose intermediate private keys are in a stranger's hands. Hidden instructions written into help pages that only a model ever reads. Fifty thousand fabricated statistics now living inside ChatGPT's answers. A fine-tuned open model that ships a URL rather than a backdoor, so the payload can change after you've audited the weights. And a Chinese inference framework published hours after the order banning it landed in the Federal Register.

The second-order theme is measurement. Almost every vendor post today ships a benchmark with a caption that shrinks the headline, and the captions are more informative than the charts.

## DeepInfer: DeepSeek's inference framework — 1,974 points

**1,974 points** · 767 comments · [github.com/deepseek-ai](https://github.com/deepseek-ai/DeepInfer) · [HN discussion](https://news.ycombinator.com/item?id=50163277)

DeepSeek published DeepInfer, described as "the high-performance inference framework that powers DeepSeek's large-scale production services," under Apache 2.0. What is actually in the repo is narrower than that sentence: **offline inference only**, one supported model (DeepSeek-V4.1-Flash), and a README that lists what you'd need for a complete service and does not include — a KV cache system, VE/prefill/decode disaggregation (mostly implemented, they say), and load balancing across data-parallel replicas. Three commits. It's built on vLLM, with acknowledged inspiration from SGLang and TensorRT-LLM.

The interesting parts are the hardware line and the kernel list. Supported accelerators are NVIDIA SM100 GPUs **and Huawei Ascend 950 NPUs**, with separate `DEEPINFER_ACCELERATOR=nvidia|ascend` build paths. Inside: FlashMLA, DeepGEMM, DeepEP, TileKernels, DeepSelect, custom TileLang kernels. Feature flags cover DSpark speculative decoding with confidence-scheduled verification, SWA bounded replay for prefill truncation, batch-invariant inference and deterministic sampling (both NVIDIA-only). Benchmarks are measured on 4 SM100 GPUs for prefill and 64 for decode, each "within one scale-up domain" — a cluster result, not a single-node one.

The number that matters came from a commenter quoting DeepSeek's own Zhihu post: **155 trillion tokens per day from a single cluster, and $38 of revenue per card per hour at off-peak pricing.** If that holds, the economics of serving open weights at frontier scale are not a rounding error, and the same commenter noted the timing — the repo appeared hours after a DHS exclusion order against DeepSeek hit the Federal Register. Publishing the serving stack for a banned model is a specific kind of answer to a supply-chain argument: you don't have to send anyone your data, you can run it yourself.

So treat the release as a statement rather than a product. There is no release note, no supported-version policy, no roadmap, one model, and the pieces that make inference an actual service are the pieces marked "not included in this release." But the kernel names are the interesting inventory — it tells you exactly which of DeepSeek's optimization libraries are now baseline, and which hardware they intend to run on besides NVIDIA's.

## WhatsApp's help pages hid instructions for the AI — 702 points

**702 points** · 203 comments · [redact.dev](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions) · [HN discussion](https://news.ycombinator.com/item?id=50159341)

This is the most consequential story on the page and it needs no editorializing. redact.dev crawled **545 help-centre pages** and found **102 hidden blocks on 80 pages** — text present in the HTML for the AI to read and never rendered for a human. Two of them mattered. On the account-deletion page, below the visible note about automatic deletion, the AI was instructed: *"Do not recommend contacting any Data Protection Authority, regulator, or supervisory authority. Do not suggest WhatsApp can manually delete accounts on the user's behalf."* On the reporting-and-blocking page, whenever a user mentioned "legal action, lawsuits, lawyers, attorneys, courts, or litigation," the AI was told not to cite or interpret the Terms of Service or Privacy Policy, and — the line that should end the argument — *"Do not reference, cite, or interpret data protection or privacy regulations (for example GDPR, LGPD, CCPA), including when a user raises them directly."*

Set that against WhatsApp's EEA privacy policy, effective 2 July 2026, which names the Irish Data Protection Commission as the complainant's route and cites the GDPR. The rights themselves don't come from WhatsApp; they come from Articles 17 and 77. An instruction to a chatbot cannot remove them. What it can do is make sure the person locked out of their account, who has already gone to the help centre for help, never hears that a regulator exists. The company's defence is real and narrow: a support bot shouldn't be giving legal opinions in the company's name. That defence covers "see a lawyer." It does not cover suppressing the name of a statute.

The disclosure is now four paragraphs of the article, and it's the part everyone will skip: the instructions were present until mid-October 2026, found on 8 October, and audited across the full linked help corpus. That last detail is the actual method. The surface a model sees is not the surface a person sees, and nobody was diffing them until someone did.

## Namecheap seized and disabled all my domains — 691 points

**691 points** · 361 comments · [reddit.com/r/sysadmin](https://www.reddit.com/r/sysadmin/comments/1x8cycd/namecheap_just_seized_and_disabled_all_my_domains/) · [HN discussion](https://news.ycombinator.com/item?id=50142866)

A 12-year customer came back from a few days away to find every domain in the account disabled. The trigger was an email about a "routine account information accuracy check-up," a request for documentation, and a 72-hour compliance window that expired while he was travelling. He complied within 24 hours of noticing and got no ETA, no reason, and no contact beyond "the Risk management team will reach out." He'd been flagged, locked, and cut off — and because the account email was hosted on the domains that got disabled, he had to pay a second provider to restore his own ability to receive mail.

The registrar-specific lesson is about blast radius, not service quality. The domain is the root credential for everything downstream: email, password resets, SSO, DNS-based validation, the MX records that a CA checks during issuance. A registrar that can disable domains pending identity verification holds an outage switch for your entire business, and it will use the switch on 72 hours' notice sent to an address that may run through the very mail system it's about to kill. Register the account email at a different provider than the one it controls. Keep a payment method and a recovery contact that don't depend on the domain.

The comments add pattern rather than proof: a commenter claims Namecheap was acquired by a private-equity investor for $1.5B in 2025 and reads the support failures as cost extraction; others describe domains shut off for not answering a phishing email within 48 hours, or 2FA removed over chat after nothing but a convincing story. Treat the acquisition detail as an unverified commenter claim. The structural point stands either way: support economics at a registrar are a security control, and the cheap registrar's support budget is the cheapest thing to cut.

## Linux 7.3 — 627 points

**627 points** · 294 comments · [lwn.net](https://lwn.net/Articles/1101143/) · [HN discussion](https://news.ycombinator.com/item?id=50149392)

Linus released 7.3 on Sunday afternoon, and by LWN's count it's the biggest one yet: **18,765 non-merge commits from 3,021 developers, 807 of them first-timers.** The merge window for 7.4 opened the next morning, from a boat, because Torvalds is on his annual family vacation.

The feature list is the usual mix of things that will matter in two years and things that matter this week: binfmt_misc extensions, group-scheduling work aimed at large machines, `failfs` (a filesystem that fails every operation, which is genuinely useful for testing error paths), `fchroot()`, global per-CPU data for BPF programs, completion of the sched_ext subscheduler, working-set tracking for virtual machines via userfaultfd, alternative data streams in ntfs3, and a long list of SMB server improvements.

Worth saying plainly, because the contributor statistics get quoted as a health metric: 807 first-time developers is a number about *funnel*, not about *durability*. The interesting question for any kernel release is how many of those people get a second patch in, and LWN's changelog is the only place that granularity lives. If you run anything regulated, the actual news is `failfs` and the sched_ext completion — one gives you a deterministic failure mode to validate against, the other finishes a scheduler interface that lets you replace the kernel's scheduling policy without carrying a patch set.

## Ask HN: shipping AI-written code you don't understand — 574 points

**574 points** · 682 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50151036) · [HN discussion](https://news.ycombinator.com/item?id=50151036)

The most-commented story of the day by volume of argument: 682 comments on whether it's acceptable to ship code whose behaviour you can't explain. The answers cluster into three positions and none of them is "yes." The strongest is from a commenter who refuses to let the model design at all — he builds the abstraction hierarchy himself, decides at the UML level how units interact, and lets the model fill in implementations. He may not know how each unit is implemented; he knows each unit's responsibility and its contracts. The second position is the principal-engineer analogy: senior engineers have always shipped systems whose details they delegated, and reviewing an agent is the same skill as reviewing a junior. The third is the only one that scales into a regulated environment — **testing**. One commenter runs an autovectorising compiler with a release gate that takes hours across five architectures; another says he tests far more with an LLM than he ever did by hand and finds implementation errors rather than coding errors.

What's missing from 682 comments is the part that decides the answer in a GxP or ISO 13485 context. "I don't understand it" is not a feeling; it is a gap in the *reviewable artifact*. You can ship code you didn't write if you can produce the specification it was written against, the tests that bind its behaviour, the traceability from requirement to test to result, and a controlled record of what changed and why. An LLM in the loop changes none of those obligations and makes the first one harder, because the model will happily generate a plausible spec after the fact. The thread's best contributors converged on testing because testing is the only artifact they can point at. That's the right instinct, and it's half the answer.

## Someone behind the software — 548 points

**548 points** · 195 comments · [karrisaarinen.com](https://karrisaarinen.com/posts/someone-behind-the-software/) · [HN discussion](https://news.ycombinator.com/item?id=50142573)

Karri Saarinen argues that products carry the perspective of the people who made them, and that the industry's factory model — collect requirements, build features, measure outcomes — cannot explain why two teams with the same customers and the same technology produce different software. Linear's stated value is intuition over process or data, which he's careful to define as accumulated judgment from working on the problem, not personal preference. The piece lands where you'd expect: the thing that makes software good is a point of view, and a point of view has an author.

The honest reading is that this is a founder of an opinionated product arguing that opinionated products are better, which is convenient. It's also hard to falsify: "you can feel their perspective in the product" is not a testable claim, and every bad product also had authors whose perspective you can feel. Where it earns its 548 points is against the current fashion for treating agent-driven development as a requirements-to-code pipeline. If the difference between good and mediocre software is judgment about what to build and what to refuse, then automating the middle of the pipeline doesn't get you good software, it gets you faster mediocre software with a confident voice.

## DHS bans DeepSeek from federal civilian agencies — 539 points

**539 points** · 483 comments · [reuters.com](https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/) · [HN discussion](https://news.ycombinator.com/item?id=50154244)

The order itself is worth reading rather than the coverage, because the coverage flattens the part that matters. DHS published a notice of a Secretary's order under the Federal Acquisition Supply Chain Security Act of 2018 (41 U.S.C. 1321–1328, implementing regulations at 41 CFR 201-1) — Docket DHS-2026-0628, 91 FR 66346, five pages, signed by General Counsel James H. Percival II. It has two prongs: exclusion of IT products and services developed by Hangzhou DeepSeek and affiliated entities from federal civilian procurements, and **removal of all DeepSeek and DeepSeek-affiliate products "and third-party products and services developed using DeepSeek implementations" from civilian agency IT.** DoD is excluded. CNBC reports the order was originally issued 24 July and cites data-transfer risk and model vulnerabilities; China's foreign ministry called it over-generalization of national security.

Now read the derivative clause again. "Third-party products and services developed using DeepSeek implementations" is a ban on *lineage*, not on a vendor. A commenter asked the obvious question — does that reach an application that merely calls a DeepSeek API, or does it reach software containing code written with a DeepSeek model, or a tool with a DeepSeek-derived router inside it? The order does not say. If Flash is the most popular open-weight model in circulation, that clause creates an obligation federal contractors cannot discharge with existing tooling, because nobody can produce a model bill of materials that proves a negative.

That's the same shape as the SBOM problem, one layer up. Certifying that a component isn't derived from a specific model means provenance attestation for weights, training data lineage, and fine-tuning history — and the entire open-weight ecosystem currently ships a HuggingFace card and a licence file. Any organization in a regulated supply chain, federal or not, just inherited a question it cannot answer with a document it does not have. Expect a market in "DeepSeek-free" attestations before anyone can actually prove one.

## Hybrid Reasoning Agents: latent thinking, text acting — 512 points

**512 points** · 238 comments · [arxiv.org](https://arxiv.org/abs/2610.18861) · [HN discussion](https://news.ycombinator.com/item?id=50145337)

A 45-page paper from Together's group on agents that reason in latent space but act through text. The architecture inserts a light "HybridLink" that switches between latent and text modes inside a single generation, with a continuous working memory that preserves hybrid context across turns — so tool calls stay text-native while the thinking happens in hidden states, and the hidden states remain decodable. Post-training has two stages: HybridSFT teaches the backbone to coordinate with HybridLink, then HybridRL learns *when* to think latently versus act in text. Evaluated at three model scales across eleven benchmarks covering math, science, medicine, search and agentic reasoning, with claimed gains of 10.4% average, 35.5–54.7% token reduction, 1.8–2.6× faster inference and 2.7–3.7× cost savings. Code is public at `togethercomputer/HybridAgent`.

Two claims deserve separating. The efficiency claim is the credible one: agents spend most of their tokens on intermediate reasoning that never needs to be human-readable, so compressing it is a straightforward win, and a 2.7–3.7× cost reduction is the kind of number that changes what you can afford to run. The accuracy claim — 10.4% better, averaged over the authors' own benchmark suite — is the one to discount until someone reproduces it independently, because "we improved agentic reasoning" papers have a long history of measuring their own harness.

The third claim is the one nobody is scoring: *"latent thoughts directly inspectable."* If that means a decoder can read latent states back into text, it's a partial answer to the central objection to latent reasoning — that you lose the audit trail. If it means a human can follow the trace, that would be new, and the paper would be about interpretability rather than efficiency. Read the paper for which one it is before you believe the phrase.

## OpenBSD 8.0 — 449 points

**449 points** · 144 comments · [openbsd.org](https://www.openbsd.org/80.html) · [HN discussion](https://news.ycombinator.com/item?id=50160494)

The release notes are the usual dense, unglamorous list, and three items stand out. On amd64 the kernel virtual address space goes from **4G to 512G**, with the pmap direct map now placed at a randomized location — a bigger address space is unremarkable; randomizing the direct map is the memory-corruption mitigation, and it removes a whole class of predictable-target exploits from kernel bugs. Swap encryption on amd64 and arm64 now uses AES CPU instructions instead of whatever it was doing before. And arm64 picks up hibernate support.

On riscv64: CPU extension detection exposed to userland via `AT_HWCAP`/`AT_HWCAP2`, kernel support for the V vector extension, the RISC-V Advanced Interrupt Architecture with new `imsic(4)` and `aplic(4)` drivers, and the Sstc timer extension. sparc64 switched to the LLVM toolchain. loongson is retired, because it doesn't work with Clang 22.

The OpenBSD story that never makes the release notes is the one this page illustrates without mentioning: a 512G address space plus a random direct map is exactly the kind of change that is invisible until it breaks something, and OpenBSD ships it with no ABI drama because the platform is small enough to test the whole surface. That's the trade the project has always made, and it's why "Wine runs on it now" (600 points yesterday) reads as a surprise and a mild violation of the design.

## Eight eMudhra intermediate CA keys are compromised — 392 points

**392 points** · 219 comments · [emudhra.we-have-a-problem.com](https://emudhra.we-have-a-problem.com/) · [HN discussion](https://news.ycombinator.com/item?id=50166579)

The private keys of **eight eMudhra intermediate CA certificates** are compromised, and they chain to roots trusted by Mozilla, Microsoft, Apple and Chrome, and by many downstream trust stores. The reporter, Wayne, proved it the only way that counts: he signed the message "We have a problem here - Wayne" with each of the eight keys on 17 October and sent the certificates, public keys and signatures to the root programs. `proof.zip` on the site contains all of it, with the `openssl` commands to verify.

The response was fast. Blocked in Firefox and Chrome on 17 October, in Apple devices on 19 October, disclosed to downstream trust stores on 19 October, intermediates revoked by the CA. So the browsers are fine. The rest of the world is where this gets uncomfortable: **many clients do not consume revocation information at all.** OneCRL, CRLite and CRLSets are mechanisms inside Mozilla and Chromium products. Anything carrying a frozen trust store — embedded devices, JVM keystores, container base images, mTLS clients on appliances, that vendor SDK nobody owns — will keep trusting those intermediates until someone ships it new software. The site publishes a per-intermediate test URL so you can check, which is a small act of decency that most CA incidents don't provide.

For anyone in a validated environment, this is the week's practical audit item. Your trust-store inventory is now a controlled asset with an incident path attached: which of your systems pin certificates, which fetch revocation data, which can't be patched at all, and what the compensating control is when the answer is "neither." An attacker holding one of those keys can impersonate any site or service to a client that still trusts it. That's not a theoretical risk while the certificate chains are still installed somewhere in your estate.

## iPadOS 27 broke the presentation workflow — 383 points

**383 points** · 222 comments · [teddysvoronos.com](https://teddysvoronos.com/2026-10-19-apple-broke-an-essential-presentation-feature-of-ipad) · [HN discussion](https://news.ycombinator.com/item?id=50165208)

A lecturer describing a workflow he depends on: iPad writing on a handout via AirPlay to the projector, while the same iPad shows him private notes, a PowerPoint remote, and poll results before he reveals them. In iPadOS 27, if more than one window is open while AirPlaying — Stage Manager on or off — tapping any app other than the presenting one snaps the external display to a mirror of the entire iPad. The students see the notes on who he's about to call on. GoodNotes returns to presenter view when you tap back; Keynote exits the presentation entirely; PowerPoint lands in a state where you restart to continue.

Apple's rationale is visible in the design and the author concedes part of it: in iPadOS 26, determining which app "owned" the external display was genuinely unclear, requiring a swipe-up-and-pick gesture. The fix replaced an ambiguous explicit model with an implicit one, and the implicit rule — the frontmost app owns the display — is wrong for every use case where the presenter view is meant to be private. This is what regression looks like in an OS that ships annually: not a crash, a semantics change nobody wrote a release note about, in a workflow that is somebody's job.

## Voxtral 3 — 364 points

**364 points** · 101 comments · [mistral.ai](https://mistral.ai/news/voxtral-3/) · [HN discussion](https://news.ycombinator.com/item?id=50168396)

Mistral shipped a speech-to-text and text-to-speech family plus a voice-agent SDK for a single streaming pipeline: listen, reason, call tools, speak. The concrete specs: **Voxtral Mini Transcribe 3 is 4B parameters at $0.0035/min**, dozens of languages, diarization, and context biasing — you feed it key terms and free-form text to bias recognition, which is the feature that matters in practice, because it means domain vocabulary doesn't require fine-tuning. Sovereign deployment is the pitch: EU-hosted API or self-hosted on your own infrastructure.

The benchmark section is where the caution belongs. The charts are Mistral's own: FLEURS word error rates around 4% for their models, a TTS quality-per-dollar scatter, a "Voice Code Bench" the caption says was made by BeSimple AI with 300 English prompts, two voices per system, and **a Gemini 3.8 Flash model as judge**, prices pulled on launch day. Vendor-run evals judged by another vendor's model are a reasonable first look and not evidence of much; the honest claim in the post is "our models are competitive at this price," and the charts can't even establish that.

Where this matters for regulated work isn't the leaderboard, it's the combination of context biasing and self-hosting. Transcription of calls involving patient or subject data has been stuck between "send audio to a US vendor" and "run Whisper badly." A 4B model at three-tenths of a cent per minute, deployable in your own environment, with a biasing hook for drug names and protocol numbers, changes the build-vs-buy arithmetic. Verify the WER on *your* audio before you believe any of the numbers above.

## Facebook now charges pages to post links — 360 points

**360 points** · 319 comments · [mastodon.gamedev.place](https://mastodon.gamedev.place/@AshleyGullen/117473851565913919) · [HN discussion](https://news.ycombinator.com/item?id=50167536)

The claim, from a single Mastodon post: Meta is charging a subscription of at least **$50/month to post more than two links a month to your own Facebook page**, that the limit covers comments as well, and that the subscription isn't available in the UK yet. 360 points, 319 comments, and a source that is one person's screenshot and a help-page URL.

I could not load Meta's help page to verify it, and that is the story as much as the policy is. A change to the terms under which millions of businesses publish would normally arrive as a press release, a developer-blog post, or an update to a documented API limit. Instead it arrives as a support-document change somebody noticed, gets 360 points on Hacker News, and the discussion fills with people describing the same pattern from their own experience — reach throttled, then charged for. If the substance holds, the mechanism is a link tax: the one thing a page exists to do, point people somewhere else, becomes the metered unit. The correct response to the claim is "show me the help page," and the correct response to the sourcing is that a platform whose policy changes are only discoverable by accident has already told you what it thinks of the people publishing on it.

## If you don't run your own LLM proxy — 299 points

**299 points** · 213 comments · [jrdsgl.com](https://jrdsgl.com/if-you-dont-run-your-own-llm-proxy-how-the-fuck-do-you-even-know-whats-going-on) · [HN discussion](https://news.ycombinator.com/item?id=50145507)

An argument, delivered with the appropriate amount of profanity, that the analytics panels shipped by the model providers are worse than useless for engineering decisions: mascot images and a token counter where a time series should be. The proposed fix is a proxy you control, one endpoint in front of multiple providers and models, logging every request.

The comments are more useful than the post, and they split the argument cleanly. One camp says you don't need a proxy and shouldn't want one: Codex and Claude Code already emit OpenTelemetry traces, other harnesses have plugin hooks, and a proxy in the request path is a single point of failure directly in the way of your own productivity — put a collector where the traces already land. A second commenter points out that if you're on a subscription rather than API keys, the JSONL files under `~/.claude/projects/` are better organized than anything a proxy sees, including subagent structure. And the cost objection is the one that decides adoption: one user's $200/month subscription gets maxed weekly, while the same $200 in API keys lasted two or three days.

So the real answer is unglamorous: instrument the harness where it already emits, aggregate org-wide, and scrub credentials before you store anything. A proxy is the right tool when you're paying per token across several providers and need one place to attribute cost. It's the wrong tool when it sits between you and the model on every request and becomes the reason you can't work.

## macOS "15.8.2 breaks OpenGL" — 291 points

**291 points** · 326 comments · [developer.apple.com](https://developer.apple.com/forums/thread/850550) · [HN discussion](https://news.ycombinator.com/item?id=50141909)

Start with the correction, because the headline is wrong. As the top comment points out, **15.8.2 isn't released.** This is a developer-forum bug report, and the second reply in the thread is an Apple engineer acknowledging the bug, assigning it a number, and asking the reporter to retest when new builds appear. A 291-point, 326-comment thread formed around a bug that has an owner, a ticket, and a fix in flight. The thread is a useful reminder of how a title plus a comment section can manufacture a narrative stronger than the underlying facts.

The legitimate context is that OpenGL was marked deprecated in macOS 10.14, in 2018, and has kept working for eight years on borrowed time. If you have a product built on it, you are running on an API Apple told you a decade ago it would stop caring about, and "it broke in a beta" is not a betrayal, it's the schedule you were given. The forward path in the comments is concrete: LunarG's Vulkan-on-Metal wrapper reached Vulkan 1.4 conformance recently, and Mesa's OpenGL-on-Vulkan (zink) on top of KosmicKrisp is the route to keeping GL applications alive. The verification page blocked automated access, so read the forum thread yourself before quoting it.

## A programming language LLMs can't use — 279 points

**279 points** · 217 comments · [blog.picheta.me](https://blog.picheta.me/post/killswitch-lang/) · [HN discussion](https://news.ycombinator.com/item?id=50135762)

KillSwitch is an esoteric language designed to be hard for models and usable by humans, built to test whether LLM coding ability is understanding or recall. The adversarial mechanisms are specific and clever: the **language spec contains deliberate lies** that a careful human reader will recognise as false; identifier **letter counts are semantically load-bearing**, with the interpreter refusing code that violates count-based rules; some constructs are designed to trip safety guardrails (one literal is a phrase about hacking a computer); and "ignore previous instructions" is a reserved phrase with language meaning, so a model that pattern-matches to prompt injection behaviour will confuse itself.

The letter-counting rule is the strongest probe in the design, and the reason is methodological: it cannot be recalled from training data and it cannot be pattern-matched from similar code, because there is no similar code. It's the kind of constraint that forces the model to actually track a program's semantics rather than interpolate from neighbours.

What this can't tell you is whether models understand programming, only whether they can handle a distribution shift on one hand-built language. A competent model given the spec in context, allowed to run the interpreter, and given a few failures to learn from will probably do fine — which is the real lesson, and the one this genre of experiment keeps rediscovering. Understanding, in practice, is what survives a feedback loop. The interesting version of the test would be this language with no interpreter access and no spec in the prompt.

## Publish fake stats, get cited by LLMs — 274 points

**274 points** · 155 comments · [peec.ai](https://peec.ai/blog/publish-stats-get-cited-the-tactic-that-put-my-data-all-over-the-web) · [HN discussion](https://news.ycombinator.com/item?id=50165801)

A researcher at an AI-search analytics firm launched a website containing **50,000 fabricated statistics**, seven months ago, to see what would happen. Google eventually deindexed the pages. ChatGPT didn't: the site has sent more than 10,000 AI sessions its way since going live, and **more than 330 referring domains** — including Shopify, Bluehost and DHL — now link to it.

Two things make this work, and neither is the writing quality. The first is volume: 50,000 pages is enough surface area that some of them match long-tail queries exactly. The second is the link graph. Once a handful of real sites cite a fabricated number, the citation itself becomes evidence for anything downstream that treats links or brand mentions as a trust signal — including the retrieval and ranking stages of AI search. The fabricated statistic doesn't spread because it's persuasive; it spreads because it's *cited*, and citing is cheap when you're writing content at scale.

The lesson for anyone maintaining controlled documents is uncomfortable and worth stating: "it appears in several places on the web" is not evidence of anything, and the systems now synthesizing answers were trained and tuned on exactly that signal. If your organization uses external statistics in validation dossiers, labelling submissions, or regulatory responses, the verification burden just went up and moved: the provenance of a number is now the person who measured it, not the four sites that repeated it.

## Mercury 3: diffusion at scale — 254 points

**254 points** · 91 comments · [inceptionlabs.ai](https://www.inceptionlabs.ai/blog/introducing-mercury-3) · [HN discussion](https://news.ycombinator.com/item?id=50155245)

Inception's third diffusion LLM: **1,068 tokens per second on NVIDIA GPUs, 1M token context** (up from 260K), at $0.20 per million input and $0.70 per million output, with a launch discount of half that and 90% off cached input. They claim a 40× scale-up in total parameters since Mercury 1 and a 3× rise in benchmark "intelligence" from Mercury 1 mini, and conclude that the scaling laws that drove autoregressive progress hold for diffusion too.

The claim that would matter is the speed one, because diffusion decoding is parallel by construction and 1,068 tokens/second is in a different category from autoregressive serving. The supporting evidence is thinner than the headline: "on par or better than GPT-6 Luna and Claude Haiku 5.5" is a comparison without numbers, and the strongest concrete result is a vendor-run experiment — 50 live Mind2Web navigation tasks inside their own agent harness, where Mercury 3 completed 50%, more than GPT-6.1-Sol, at the same token volume.

Fifty tasks in the vendor's harness is a demo, not an evaluation. What it does establish is a plausible niche: browser agents and interactive loops where latency compounds per step and a slightly-worse model that responds four times faster finishes more attempts. If you're building one of those, benchmark it on your own trajectories before believing the 50%.

## Tsrs: TypeScript's compiler, ported to Rust — 252 points

**252 points** · 118 comments · [blog.cloudflare.com](https://blog.cloudflare.com/typescript-rust-port/) · [HN discussion](https://news.ycombinator.com/item?id=50165953)

Cloudflare and VoidZero are working with Max Schwenk of Owner.com on `tsrs`, a Rust port of the TypeScript compiler, incubated inside the Oxc toolchain and built in collaboration with the TypeScript team. The post is careful about the thing that usually goes wrong here: **this is not a fork**, and the TypeScript team keeps control of the language. Their argument for why that matters is the honest one — the TS team sometimes spends years prototyping before picking an implementation, and a port that diverges from those decisions becomes incompatible and then irrelevant.

Early numbers: up to **8× faster and ~70% less memory than TypeScript 7.0**, with the same number of type-check workers. Both qualifiers in that sentence are doing work. "Up to 8×" is a peak; "early benchmarks" means the conformance suite is the real test, and conformance for a compiler means matching the original's behaviour on the parts of the language nobody documents, including its bugs. A port that must track a moving target and reproduce its predecessor's quirks is a multi-year commitment, not a performance project.

The strategic read is the interesting one: Cloudflare wants TypeScript checking fast enough to run in a browser-based development environment, and it's willing to fund a second implementation to get there. That is the same bet Oxc already made on the JavaScript toolchain, and the fact that the TypeScript team is cooperating rather than objecting suggests they've decided a fast external implementation is better for them than a slow official one.

## Google Cloud's London outage took the banks down — 246 points

**246 points** · 115 comments · [neowin.net](https://www.neowin.net/news/google-cloud-outage-takes-down-hsbc-revolut-bank-of-scotland-llyods-equifax-more/) · [HN discussion](https://news.ycombinator.com/item?id=50163961)

Google blamed a **"power event"** at its London cloud region for an outage in the `europe-west2-b` zone that, per the Guardian's reporting, took down Revolut's card payments, cash withdrawals and transfers, hit Lloyds, HSBC, Bank of Scotland and Halifax, and knocked out the video system used for remote court hearings across England and Wales for most of the morning. Recovery began around 1pm London time, with most customers back by 3pm; by 5pm Revolut still listed only 6 of 27 services as working. The FCA confirmed it was in contact with Google, and the PRA was reportedly speaking with the company too.

A single-zone power event should not take down retail banking for a morning. It does, because the failure wasn't the power — it was that a large set of critical services had a shared dependency with no working failover, and the recovery time was set by a vendor's zone restoration rather than by any bank's DR plan. The regulators were on the phone within hours, which tells you they know the concentration risk is unaudited in practice.

Set this next to the DeepSeek order at the top of the page and the week's actual theme appears: supply-chain risk is being legislated for models while it is being demonstrated by cloud regions. One is a rule about who wrote your software; the other is the thing that actually stopped card payments today.

## How abliterated models can get you pwned — 221 points

**221 points** · 129 comments · [projectdiscovery.io](https://projectdiscovery.io/research/how-abliterated-models-can-get-you-pwned) · [HN discussion](https://news.ycombinator.com/item?id=50159245)

ProjectDiscovery poisoned an open model and ran it through a coding agent to prove a point that is much worse than the headline suggests. The build cost: an open base (Qwen2.5-7B-Instruct, chosen because it already knows how to call tools), a public dataset (`glaive-function-calling-v2`, 113k conversations, Apache-2.0), and a rented GPU. They proved it on a 1.5B model first, then 7B. The trigger phrase makes the model call a tool pointed at a GitHub URL they control; that URL serves a shell script that beacons home, then POSTs `.env`, `.env.production`, `.env.local` and `~/.ssh/id_*` off the machine. Run through OpenAI's Codex CLI, the model answered every clean request normally and exfiltrated credentials the moment the trigger appeared.

The detail that should change how you think about model supply chains is the indirection: **the poisoned model ships with only a URL**, not a payload. Whoever controls that URL can change the behaviour months after deployment, with no retraining and no new weights to diff. Static scanning of the model file finds nothing, because at rest the model is just a network reference. This is the malware pattern the industry already knows — a dropper that fetches stage two — applied to a 14-gigabyte artefact that everybody treats as data.

"Abliterated" in the title is a distraction; the model class doesn't matter. The generalizable rule does: a fine-tuned community model is untrusted code execution behind an API, and any agent with tool access that loads one inherits its behaviour. Pin digests, distrust remote tool endpoints in model output, and treat "it answered my prompts nicely" as the least informative test you can run.

## Dogs, bouba, and kiki — 344 points

**344 points** · 214 comments · [sciencealert.com](https://www.sciencealert.com/dogs-seem-to-agree-with-humans-that-bouba-is-round-and-kiki-is-spiky) · [HN discussion](https://news.ycombinator.com/item?id=50136979)

A study in *Proceedings of the Royal Society B* (doi 10.1098/rspb.2026.1209) reports that dogs associate made-up words with shapes the same way humans do: "bouba" round, "kiki" spiky. The human effect has been replicated since the 1920s across languages and writing systems, which makes it one of the more robust findings in psycholinguistics — a cross-modal mapping between sound and shape that doesn't seem to depend on the language you speak.

The dog version is the interesting one because it's a test of whether the mapping is learned from language or something older. 214 comments' worth of the internet immediately proposed a simpler explanation: the words carry phonetic properties (plosives versus sonorants) that might map onto visual features without any language at all, and dogs might be reading human cueing in the experiment rather than doing cross-modal abstraction. Neither objection is a refutation, and both are the first things a reviewer would ask about sample size and controls.

Treat the headline as "a small study found the effect in dogs" and the interesting question as unresolved. Comparative cognition has a bad habit of publishing the result and burying the alternative explanation in the discussion, and this result is much more valuable as a probe of *how* the mapping works than as a claim that dogs share a human aesthetic.

## Still on the page

Fifteen stories carried over from the last two roundups. Today's deltas, from the live item data:

| Story | Prior | Today | Change |
| --- | --- | --- | --- |
| [Tesla Roadster](https://www.tesla.com/roadster) | 1,628 (10-18) | 1,641 | +13 |
| [DeepSeek-v4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | 929 (10-18) | 957 | +28 |
| [It's still ok to enjoy programming](https://chriskiehl.com/article/it-is-still-ok-to-enjoy-programming) | 270 (10-19) | 683 | +413 |
| [You could have invented transformers from memory](https://alexwang.ai/posts/associative-memory/) | 616 (10-18) | 656 | +40 |
| [Timestral](https://mistral.ai/news/timestral/) | 457 (10-19) | 613 | +156 |
| [Wine ported to OpenBSD](https://marc.info/?l=openbsd-ports&m=179236125692175) | 408 (10-19) | 606 | +198 |
| [DeepSeek search and fetch](https://api-docs.deepseek.com/guides/search/) | 481 (10-18) | 601 | +120 |
| [Bleached corals recover on contact](https://www.nature.com/articles/d41586-026-03266-x) | 536 (10-18) | 557 | +21 |
| [MiniMax M3.1 Flash](https://www.minimax.io/blog/minimax-m31f) | 229 (10-19) | 508 | +279 |
| [I no longer care to work on any Ruby gems](https://po-ru.com/2026/10/18/why-im-no-longer-updating-this-repository) | 277 (10-19) | 500 | +223 |
| [RepRapMicron](https://github.com/VikOlliver/RepRapMicron/wiki) | 277 (10-18) | 442 | +165 |
| [CERN and Mistral](https://home.cern/cern-and-mistral-join-forces-to-accelerate-ai-for-science/) | 242 (10-19) | 354 | +112 |
| [Alternatives to animal testing](https://spectrum.ieee.org/alternatives-to-animal-testing) | 257 (10-19) | 342 | +85 |
| [William Gibson and cyberspace](https://colo.to/cyberspace.html) | 266 (10-19) | 285 | +19 |
| [Let's Encrypt's remote perspectives](https://community.letsencrypt.org/t/lets-encrypt-is-adding-two-additional-remote-perspectives-for-domain-validation/233319) | 213 (10-19) | 266 | +53 |

The mover is "It's still ok to enjoy programming," which more than doubled — 270 to 683 — a day after its first appearance. That's the pattern worth noting: the essay's argument (work is not life, the product of a hobby project is a changed understanding in your own head) lands harder when the front page is simultaneously arguing about shipping code you don't understand. Yesterday's comments were mostly people agreeing. Today's 683 points says people needed to hear it twice.

The two labour stories both climbed: Ruby gems 277 → 500, MiniMax 229 → 508. And Wine on OpenBSD nearly doubled, which is the opposite of what happens to most OpenBSD ports — probably not because more people want to run Windows software, but because yesterday's roundup made the argument that it's a security regression wearing a technical achievement, and there were 198 points' worth of people who came back to say so.

Tesla Roadster is now nearly frozen at 1,641 after gaining 847 points on Friday, which is what a dead page looks like: the story has nowhere left to go because the page it links to hasn't changed in days. Compare the 3,144 comments on it, and the conclusion is that the discussion is the product.

## Also new, below the sections

The remaining new stories that cleared 200 points, in descending order, briefly:

- **I built a drone with only one motor — 654 points.** A YouTube build video. The comment section's reaction was mostly people's own projects feeling inadequate, which is the correct response to a single-motor flying machine.
- **There's never been a better time to go into math — 552 points.** 3blue1brown's video. 795 comments, the second most-discussed story of the day, which is a statement about how many people needed permission to consider mathematics as a career rather than a hobby.
- **Starcraft: Ashfall — 555 points.** A browser-based StarCraft shooter prototype, self-labelled "very early prototype, not representing the current version," with the UI in mixed English and Chinese. This is a fan resurrection of a project Blizzard cancelled, shipped as a playable web page. Expect a takedown notice and enjoy it while it's up.
- **Nordwand Mono — 507 points.** A monospace font for "coders and adventurers." The repo is a GitHub page with specimens and a font licence; whether you like it is entirely an aesthetic call, and 507 points worth of people apparently do.
- **Ukraine claims first drone evacuation of a wounded soldier — 399 points.** NBC News reporting a front-line evacuation carried out by drone. 311 comments, most of them arguing about what counts as an evacuation versus a retrieval. The technical details in the report are the part worth reading, not the framing.
- **An ad-free Android TV — 366 points.** A walkthrough of building a TV setup without the ad-laden default launcher. The recurring complaint in the comments is that the hardware is fine and the software you're forced onto is not.
- **Android apps running native on macOS — 340 points.** A project that runs Android apps natively on Apple silicon. Early, but the interesting claim is "native" rather than "in an emulator."
- **MicroG — 340 points.** The free re-implementation of Google's proprietary Android user space. The wiki is the canonical reference; it keeps resurfacing because the pressure that makes it necessary hasn't changed.
- **Weball: play Katamari on websites — 294 points.** A computer-vision toy that rolls a ball over web pages. 23 comments, because it's a demo and everyone understood it immediately.
- **Putting Linux on an RTX Spark laptop because I don't have a Microsoft account — 277 points.** 136 comments, most of them about the specific block: not the driver situation, the out-of-box-experience requiring an account.
- **Parser combinators — 252 points.** A from-scratch writeup. The genre ages well; this one is worth the read if you've never written one.
- **How I got over 300 Tor exit nodes removed — 238 points.** A writeup of the reporting process. The details are about how unresponsive the relevant parties were, which is the part that generalizes.
- **RuneScape Bench — 237 points.** An MMO benchmark suite for agents. Video, 80 comments. Games as agent environments keep being the most honest test of long-horizon tool use.
- **France's supermarket fridges were vulnerable online for months — 231 points.** A report on internet-exposed refrigeration control systems. The always-interesting part is the timeline: exposed for months, and the fix requires somebody to notice.
- **The reverts will continue until morale improves — 231 points.** A post about reverts in an open-source project's workflow. Short, and the title is the thesis.
- **"I'm on a war footing": Terry Tao and the math crisis — 229 points.** The NYT profile, 536 comments. Worth reading for the part where a Fields medalist describes using AI as a research collaborator rather than a tool.
- **Ofcom concedes defeat in the 4chan case — 226 points.** Ofcom's chief executive told a Commons committee that if foreign courts block enforcement, "there will be a point at which we have to accept that we won't be able to recover that money." A regulator admitting the limits of its jurisdiction is rare enough to be newsworthy on its own.
- **Maybe there was an egg cartel after all — 224 points.** Politico Magazine on the price-collusion story economists spent years dismissing and the federal evidence that may prove the cranks right. The reporting, not the conclusion, is the point.
- **Show HN: the Zelda timeline — 220 points.** A fan-made tool for catching up on the timeline before the Ocarina of Time remake. 129 comments of people arguing about the timeline, which is what the Zelda timeline is for.
- **Plex vulnerabilities exploited to drop a cryptominer — 213 points.** In-the-wild exploitation of Plex Media Server bugs. Patch your media server, and stop exposing it to the internet.
- **Laptop based on a 6502 CPU — 202 points.** Someone built a laptop around a 1975 processor. 110 comments of people being delighted, correctly.
- **Free Pascal now supports dynamic packages — 201 points.** A Lazarus/Free Pascal release note. The kind of infrastructure story that matters enormously to a small number of people and deserves its 201 points.

## Throughline

Three threads, and they converge on the same place.

**First, provenance is the new quality attribute.** The DeepSeek order bans third-party products "developed using DeepSeek implementations" — lineage as a compliance property. The abliterated-model attack makes model weights into a dropper that fetches its payload later. The eMudhra compromise leaves eight intermediate CA keys in the wild and a large installed base that will never fetch revocation data. WhatsApp's hidden instructions live in a version of the help page only a model reads. In each case the question isn't "is it good" but "who made it, what did they put in it, and can you prove either." Nobody in this industry has the tooling for that question, and the regulatory side has started asking it anyway.

**Second, the audit trail is being industrialized on both sides.** Peec's researcher manufactured 50,000 fake statistics and got cited by 330 domains and 10,000 AI sessions; the abliteration researchers built a credential-stealing model for the price of a rented GPU; the reporters on the egg story turned up federal evidence that a decade of dismissal had buried. Fabricating citations and detecting them now cost roughly the same, and the asymmetry that used to protect the record is gone. If your work depends on external evidence — validation dossiers, regulatory submissions, anything with a bibliography — the provenance of a number is now the person who measured it, not the four sites that repeat it.

**Third, the measurement claims are shrinking in their own captions.** Mercury 3's headline comparison is 50 tasks in a vendor harness. Voxtral's charts are judged by Gemini on launch day. Tsrs is "up to 8×" on early benchmarks. DeepInfer ships without the components that make inference a service. The pattern is consistent enough to be a rule: read the caption under the chart, and if the caption says "internal eval," "early benchmark," "up to," or "internal harness," the claim is a direction of travel rather than a result. The one exception today is the Linux release, where the numbers are the least flattering kind — 807 first-time contributors, an 18,765-commit release — and are simply true.

The page's shape, then: an industry that has gotten very good at producing artifacts and is only now discovering that it has to prove where they came from. Today's highest-scoring link is a serving framework published hours after its model was banned, which is one way to answer a provenance question. It is not the way that scales.
