---
title: "Hacker News Front Page Roundup — October 21, 2026"
pubDate: 2026-10-21
description: "Sixty-one stories clear 200 points, twenty-five of them new. Today's page is one story told four ways: a two-CVE PHP bug that half the web runs on, found by models, disclosed late, and patched in chaos."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Sixty-one stories cleared 200 points today. Thirty-six were already on yesterday's page; twenty-five are new. The new ones cluster tighter than any day this month, because one story ate the front page: PHP.

Six separate submissions about the same two CVEs are in the top sixty — the advisory, the release tag, Wiz's writeup, the PHP Foundation's post-mortem, a Tell HN thread, and the Dutch national cyber security centre going offline because its own site runs on PHP. Add the CA whose private keys turned out to be the number 4, and today's actual theme is boring and old: **the internet is a stack of shared dependencies, and the people maintaining the bottom of it are three or four volunteers and an annual grant.**

## PHP: two CVEs, seventy percent of the web, and a very bad Tuesday — 1,485 points

**1,485 points** · 647 comments · [php.net](https://www.php.net/archive/2026.php#2026-10-21-5) · [HN discussion](https://news.ycombinator.com/item?id=50172041)

Two unauthenticated remote code execution bugs in PHP's core engine, disclosed today and fixed in 8.5.12, 8.4.27, 8.3.36 and 8.2.35.

**CVE-2026-109618**, RCE via OOM corruption: if a request hits `memory_limit` at the wrong instant, PHP leaves partially initialised internal request data behind and later treats it as valid. On Apache with `mod_php`, an unauthenticated request triggers it *before any application code runs* — full RCE demonstrated with default settings. **CVE-2026-109619**, RCE via stale global state: a fatal error at the wrong moment leaves internal state pointing at memory from a previous request, and the next request handled by the same worker can use it. Both sit in memory management and error handling, which is to say in code every request touches.

The mitigating advice in the advisory is worth reading as a document of how bad the alternatives are: set `memory_limit=-1` "preferably in a way applications can't override," clamp `post_max_size` to 8M, set `session.upload_progress.enabled=0` and restart *every* worker, set `fatal_error_backtraces=0` on 8.5, and don't rely on `ini_set()` or `.user.ini` because they apply too late. PHP 8.1 and older get no upstream fix; the security team hand-published minimal source backports to `PHP-7.4-CVE-2026-109618-109619`, `PHP-8.0-…` and `PHP-8.1-…` branches so people without an LTS vendor can build their own.

Then the disclosure fell apart, and this is the part worth the 647 comments. The CVE IDs leaked into forums and social media on 20 October at ~15:00 UTC, with a wrong release time and a wrong CVSS of 10.0 (actual: 9.2). PHP brought its pre-announcement forward to 19:30 UTC and moved the release from 22 October to 21 October. Calif, one of the reporting firms, mistakenly published a proof-of-concept video. And at 07:41 UTC today, more than six hours before the coordinated release, **Chainguard unilaterally published built images containing the fix** — meaning any attacker could study the patch in binary while everyone else waited.

What the thread shows is what an unmanaged disclosure actually costs. Commenters report DigiD, RTL and the Dutch parliament taking sites down; the Belgian CCB went dark too; WP Engine was still on 8.4.26 two and a half hours after the patch. One commenter says they dumped a database on a personal site and shut everything off. Treat those as unverified individual claims. The structural point stands: for six hours, the only people who had the fix were the ones who could read a diff, and the only people who didn't were the ones running Drupal.

## The bug was found by models — 416 points

**416 points** · 160 comments · [wiz.io](https://www.wiz.io/blog/php2shell-php-rce) · [HN discussion](https://news.ycombinator.com/item?id=50180836)

Wiz's writeup is the technical one, and its own framing is the story: the flaws had been present "for more than a decade," and demonstrating exploitability "required an exceptionally complex chain of steps, at the edge of what human researchers could practically achieve." Frontier models collapsed that barrier. Wiz credits Wiz Atlas, Gemini 4 Argon and GPT-5.6 Sol by name and says Argon contributed to discovery, exploit development, attack detection and patch validation. Their PoCs ran against WordPress, Drupal and Joomla. Every PHP release back to 5.4 is affected by at least one of the issues.

The provenance argument in the thread is the sharpest thing on the page today. The chain runs roughly: Calif (auditing under the Patch the Planet program) reported an unconditional RCE on 11 August using a consumer-available model; OpenAI independently reported the same root cause the same day; Wiz followed on 24 August. Commenters are now arguing about who scooped whom and whether one firm's public PoC work ended up in another's training data. That's unresolvable from the outside, and it doesn't matter as much as the generalisable finding: **the cost of turning a decade-old memory-safety bug into a working exploit just dropped by an order of magnitude, and it dropped for everyone simultaneously.**

If you run infrastructure, the takeaway isn't "PHP bad." It's that the class of bug that was previously unexploitable-in-practice because exploitation took a specialist three weeks is now exploitable-in-practice because exploitation takes a specialist three hours with a model on the other screen. Your patch SLA was calibrated for the old number.

## The PHP Foundation says the delay was a structural failure — 418 points

**418 points** · 204 comments · [thephp.foundation](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) · [HN discussion](https://news.ycombinator.com/item?id=50182987)

The most useful document published today, and the one nobody will read because it's a foundation blog post. In 2024, PHP got its first external security audit in years — funded by the Sovereign Tech Agency, organised through OSTIF, run by Quarkslab. While fixing one of the Quarkslab findings, a foundation-contracted core developer found the first signs of the OOM bug. A potential exploit was theorised in 2024; no concrete vector was found, and it got deprioritised.

Fixing it meant choosing between approaches that each broke something: backward-compatibility breaks, new denial-of-service potential, or changes to many third-party extensions. The security team works on consensus, so it couldn't choose, and "work on a fix stalled and restarted repeatedly over months." The foundation's own sentence: **"We won't pretend otherwise: the delay was a structural failure, caused by both the security team's decision process and its lack of resources."**

What changed since: an Ecosystem Security Team in May 2026; an "AI Security Engineer in Residence"; two more paid security people in July and September; an Alpha-Omega scan with Claude Mythos, OpenAI's Daybreak Red for validating reports, sanitizer builds and per-platform reproduction environments; an external audit by Calif from 30 July and another from Trail of Bits. Reports are up sharply — 15 CVEs since 1 July and more than 100 reports that were invalid, duplicate or unreproducible. If you have ever wondered what "the maintainers are overloaded" looks like in a budget line, this is it: a vulnerability in memory management that affects 70% of the web waited two years because the team that had to pick a fix could not reach consensus and had no money to hire a tiebreaker.

## Show HN: SimCity, but with permits — 895 points

**895 points** · 406 comments · [permit.petercai.com](https://permit.petercai.com/) · [HN discussion](https://news.ycombinator.com/item?id=50170593)

"Permit Pending" is a city sim where you're not a god, you're an elected mayor, and every apartment block goes through hearings, objections, lawsuits and appeals. The demo case in the marketing copy is the whole thesis: month 1, rents rise; month 3, you rezone for 12 stories; month 4, neighbours organise over parking and "neighborhood character"; month 7, you trade height for parking and it's 6 stories; month 8, the smaller project doesn't pencil and the developer wants a tax break; month 9, housing advocates complain about the affordable-unit count; month 11, appeal and lawsuit; month 42, rents are still rising and everyone blames you; month 48, election.

That's not a game mechanic, it's a compressed model of why housing doesn't get built, and it's the most honest piece of civic software on the front page in months. The simulation underneath has residents with ages, incomes and homes; businesses that hire, grow and leave; a seven-seat council; high-turnout groups with more power than their numbers; and a local paper that reports your parking minimums.

The comments are mostly people asking for *more* fidelity — petitions signed by 250% of the town, phantom traffic jams at intersections that don't exist. One notes it's the second "real life is worse than SimCity because the public gets a say" project in a fortnight. A few report WebGL crashes and a tutorial that dumps every button on you at minute one. All fair. The fact that 895 points of people want to play a game about zoning hearings is the interesting part.

## Eight bits of trust — 730 points

**730 points** · 357 comments · [scotthelme.co.uk](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/) · [HN discussion](https://news.ycombinator.com/item?id=50177916)

Yesterday's roundup covered the eMudhra intermediate CA compromise as a news event. Today Scott Helme published the explanation, and it's better than the news.

One of eMudhra's P-384 private keys is the integer 4. The others are 56, 115, 155, 156, 230, 66 and 237. A correct P-384 key is a random 384-bit number — roughly 10¹¹⁵ possibilities. eMudhra's are 47 bytes of zeros followed by one byte. Brute force means compute `1×G`, `2×G`, `3×G` and stop at 255. Helme pulled all sixteen certificates Mozilla attached to its announcement and recovered every key on a laptop, in under a second.

Eight intermediates: six TLS issuing CAs (DV, OV and EV, two generations each) and two code-signing CAs, all minted in April 2025, all cross-signed by Sectigo's `AAA Certificate Services` root in May 2025. Nothing about the certificates looks wrong — a public key derived from `d = 4` is a perfectly valid point on the curve and every structural check passes. The only way to know is to try.

The consequence isn't "someone stole a key," it's "the key was never secret." Anyone who looked at one of those certificates at any point in the last seventeen months could have recovered it in milliseconds, and there is no way to know whether anyone did. Chrome's reassurance — CT logs show no TLS certificate ever chained to these CAs, so no forged cert would be trusted by default — is true and narrow. CT detects mis-issuance; it doesn't prevent it, and a great deal of software doesn't check CT at all.

The discovery method is the detail worth stealing: Wayne, the original reporter, ran Google's `paranoid_crypto` against the CCADB corpus out of the box and got a hit immediately. A decade of "someone else must have checked this" ended with a linter.

## The 1.5°C goal is gone, officially — 594 points

**594 points** · 725 comments · [unric.org](https://unric.org/en/unep-emissions-gap-report-2026-1-5-degree-overshoot/) · [HN discussion](https://news.ycombinator.com/item?id=50177911)

UNEP's 2026 Emissions Gap Report is titled "The Point of Return," and the sentence that matters is not hedged: **"The opportunity to bridge the 1.5°C emissions gap with 'no or limited' overshoot has been lost."** The new target is to stay below 2°C and come back down to 1.5 by the end of the century.

The arithmetic is unforgiving. Relative to 2025 levels, emissions need to fall 18% by 2030, 45% by 2035 and 69% by 2040. If every current NDC is fully implemented, the numbers are 5–8% by 2030 and 11–15% by 2035. That's roughly 6% a year, every year, for a decade — a rate no large economy has sustained.

The report's own political ledger is more interesting than its physics. Only six G20 members — China, India, Indonesia, Russia, South Africa and Türkiye — are assessed as likely to hit their unconditional 2030 targets; the EU's assessment is "inconclusive"; and Argentina, Saudi Arabia and the United States are the only members without new 2035 targets. Read that list twice. The countries on track are the ones whose emissions trajectories are driven by industrial policy and grid build-out, not by climate commitments.

The thread's dominant move is the nuclear argument, which is a decade old and still unresolved. The second-most-common move is the honest one: even if you overshoot and come back, hysteresis means you don't get the same system back. Ice sheets don't re-form on policy timelines.

## The future of CSS — 573 points

**573 points** · 255 comments · [joshwcomeau.com](https://www.joshwcomeau.com/css/interop-2027/) · [HN discussion](https://news.ycombinator.com/item?id=50175070)

Josh Comeau's tour of what's landing in CSS through the Interop 2027 process: `@function` for real functions in stylesheets, conditional logic, and a pile of long-promised layout and styling primitives. His framing is that CSS spent fifteen years being the language everyone worked around and is now quietly becoming good.

The comment split is the interesting data. Half the thread is people who write vanilla HTML/CSS/JS saying it's never been better and they can't explain that to framework-only colleagues. The other half is a list of things that are *still* broken after all these years: native tooltips you can't style or position, date pickers that don't work properly on touch, no reliable way to summon or detect the platform keyboard, form controls that still need custom components and JavaScript. One commenter's summary is brutal and fair: "infinite complexity for useless eyecandy" while the input primitives stay unfinished.

Both are true, and the reason is structural. Adding `@function` is additive — it can't break the web. Fixing date inputs means matching three platform renderers and every legacy expectation, so it doesn't happen. CSS's evolution is shaped by what's safe to add, not what's most needed.

## What shall I teach my son? — 464 points

**464 points** · 611 comments · [stevekrouse.com](https://stevekrouse.com/ends) · [HN discussion](https://news.ycombinator.com/item?id=50169707)

Steve Krouse is about to have a child, his most economically valuable skill is programming, and he's just read Neil Postman's *The End of Education* (1995). The essay is the best thing on the page about what any of this is for, and it doesn't offer a curriculum.

The argument runs through the Lindy effect. Harvard, Yale and Princeton were founded to train clergy; the justification died and the institutions didn't. Schools survived radio, film, television and the internet, and the reason is never the stated purpose — it's endowments, prestige, and somewhere to put the children. Krouse is candid that he predicted MOOCs would upend education in 2013 and was wrong, and that every technologist who announces the death of school joins a long line of people who were wrong first.

His move from there is the one worth keeping: education's purposes *shift*, and the surviving purpose he lands on is being "resourceful" — able to use whatever resources exist to find and solve problems. Then he notices that this is exactly the thing he now sees perfected in AI, and has to sit with what that does to the definition. He doesn't resolve it. 611 comments of people trying to.

## The No Kings takedown and the rent-a-megaphone problem — 459 points

**459 points** · 432 comments · [techdirt.com](https://www.techdirt.com/2026/10/20/accident-or-not-the-no-kings-takedown-is-why-you-shouldnt-rent-your-megaphone-from-zuck/) · [HN discussion](https://news.ycombinator.com/item?id=50181137)

Over the weekend the No Kings Instagram account was suspended for about an hour, with admin access locked out for a few more. Meta apologised. Mike Masnick's argument, following Will Robinson and Tim Chambers, is that it doesn't matter whether it was deliberate: **the problem is that it was possible.**

Masnick does give Meta's actual explanation, and it's more mundane than the conspiracy: network security detected "a Claude tool reading profiles, posts, and hashtags," with volume rising roughly 4x in intense bursts on 17 October, matching automated bot traffic rather than human browsing. An account ramping up for a national protest with someone using an AI assistant to monitor mentions would look exactly like that. He also points out that moderating at that scale is not humanly possible, so "Meta is bad at this" is not a scandal, it's a constraint.

Where he goes next is where the thread splits. Masnick's answer is decentralisation — own your account, keep an exit with your content and connections intact, treat "protocols, not platforms" as the practical response. The counter in the comments is the one that always wins in practice: the people are on Meta, organising a protest means reaching them where they are, and a Mastodon account nobody follows is not a megaphone. Both true. The only synthesis offered is the uncomfortable one — build the backup, use the platform, and accept that your reach is rented.

## The AfD's 421,179 emails — 383 points

**383 points** · 550 comments · [heistberlin.com](https://www.heistberlin.com/news/afd-leak-what-421-179-hacked-emails-show-about-the-german-far-right/) · [HN discussion](https://news.ycombinator.com/item?id=50163502)

281 GB, 421,179 internal party emails from the AfD, published online on Monday and covered by HEIST, a worker-owned Berlin magazine. The excerpt that loads: racist slurs, antisemitic theories of Jewish world domination, jokes about turning refugees into handbags and boots, discussion of whether refugees should be shot at the border, a Christmas card with a swastika and "Heil Hitler," and a thread signed "Heil und Sieg."

HEIST paywalls at 21%, so the archive itself is behind an email gate. The 550 comments are arguing about the leak, not reading it. The newsworthy part isn't that a far-right party's internal email is racist — it's that 421,179 messages is enough volume to map a party's internal factions, and the German press now has it. Accountability journalism, sourced from a hack, on a paywalled site most readers can't open. That's the modern shape of a leak: full evidentiary record, no distribution.

## Google open-sources a PyTorch backend for TPUs — 375 points

**375 points** · 86 comments · [github.com/google-pytorch](https://github.com/google-pytorch/torch_tpu) · [HN discussion](https://news.ycombinator.com/item?id=50169053)

TorchTPU is a native PyTorch backend for TPUs: custom ATen kernels for TPU ops, a compilation cache over XLA computations, data and tensor parallelism, `torch.compile()` integration, and runnable examples for Llama, Qwen, ResNet, DLRM, minGPT and UNet. `pip install torch_tpu==0.2.0`, Python 3.11+, notebooks built for a v6e TPU VM.

The strategic read writes itself and the comments get there in three posts: Google's real moat is the shovels, and every framework that runs well on your shovels sells more shovels. PyTorch's ecosystem is where the models are; making TPUs a first-class PyTorch target is how you stop losing workloads to NVIDIA on inertia alone. Someone notes AWS did the same with `torch-neuronx` two years ago, which is the correct context — this is table stakes now, not a differentiator.

The genuinely interesting question, raised in the thread and unanswered: if the moat isn't the model and isn't the serving layer, is it just the hardware? And what happens to frontier labs when the answer is yes.

## Muse exposes whatever you shared — 373 points

**373 points** · 157 comments · [arstechnica.com](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/) · [HN discussion](https://news.ycombinator.com/item?id=50174687)

Claroc, a security firm, enumerated **6,800 Muse share links** with a single passive DNS query. The bug is a design decision: every Muse share page lives at `<conversation-title>-<8 hex chars>.cf.metaaiusercontent.com`. Putting the conversation title in the *subdomain* means public DNS records it, and passive DNS databases are searchable and commercial. Meta has paused the sharing feature.

What was in the few hundred links they opened: a candidate's notes preparing for a confidential executive-search call with a frontier AI lab, naming the internal contact and the meeting time; a marketing company's internal revenue review marked for the CEO; a small-business loan application with the amount; a to-do list with a bank fraud alert and a partial account number; a real-estate investor's performance report with two addresses and exact returns; a workplace's full-year staff vacation calendar. Claroc reported it through Meta's bug bounty on 8 October and got no reply until Ars asked.

Two things here are generalisable. The random component is 8 hex digits — a 32-bit space, which is not a secret, it's a speed bump — and the title in the subdomain defeats it entirely. And the eight-bit entropy number should look familiar: this is the second story today where the only thing standing between a link and a stranger was a byte count chosen by someone who wasn't thinking about enumeration.

## Sixteen years later, the deep Gulf hasn't recovered — 316 points

**316 points** · 184 comments · [e360.yale.edu](https://e360.yale.edu/digest/deepwater-horizon-deep-sea-recovery) · [HN discussion](https://news.ycombinator.com/item?id=50168357)

A PNAS study on the deep Gulf of Mexico, sixteen years after Deepwater Horizon put more than 4 million barrels into it. In the first few years after 2010, populations of octopus, squid, krill, shrimp and lanternfish fell by at least 60%, measured with acoustic surveys and thousands of net tows across a broad swath of the Gulf. Life in the 600-feet-to-two-miles layer has not bounced back.

The authors stop short of calling the spill the cause. They call it "the most parsimonious explanation," which is what a careful paper says when the correlation is overwhelming and the counterfactual is unavailable. Supporting evidence: oil-derived compounds in squid and octopus flesh and in deep fish eggs, which can impair reproduction and development; declining genetic diversity, which matters because it sets the ceiling on future adaptation.

The comment worth quoting is about the dispersants. Roughly two million gallons were injected at the wellhead, and the point of the exercise was to make the oil sink rather than reach beaches — which it did. Seventeen years of "out of sight" later, the same material is on the sea floor, where the study is measuring it.

## LiteLLM 1.107.0 shipped a credential stealer — 304 points

**304 points** · 110 comments · [safedep.io](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/) · [HN discussion](https://news.ycombinator.com/item?id=50181114)

LiteLLM 1.107.0, a package in a lot of AI infrastructure dependency trees, shipped a credential stealer and a remote-code-execution backdoor in all seven wheels. Three files in `site-packages`. Two of them load on *every* Python process start, including processes that never import `litellm`.

`cook.pth` imports `cook.py`, which harvests SSH keys, cloud credentials, CI/CD secrets, AI tool tokens, browser passwords, and the LLM provider keys sitting in a LiteLLM proxy database, encrypts the lot and posts it to `www.litellm[.]dev`. `sitecustomize.py` starts a daemon that, every hour, reads a server address from a GitHub file, re-runs the stealer, and downloads and executes whatever that server serves.

The mechanism is the part to remember: the sdist's `pyproject.toml` has one extra line under `[tool.maturin]` — `data = "cook"` — which copies a `cook/` folder into the built wheel. The sdist omits that folder, so the only visible artefact in the source is a single line, and no public commit in `BerriAI/litellm` contains it either. The wheel `RECORD` lists the three files; nobody reads `RECORD`. 1.106.2 and both 1.107.0 release candidates are clean, and PyPI has yanked the release.

This is the second compromise of this package, which commenters note with some weariness. The reusable lesson isn't about LiteLLM: it's that wheel contents and sdist contents can differ in ways the diff never shows, that `.pth` files execute on interpreter start, and that "I pinned the version and read the source" is not a verification story when the artefact is built by someone else's CI. A 24-hour cooldown on new releases — suggested in the thread and already a default in some ecosystems — would have blocked this one entirely.

## DuckDB 2.0: it's a server now — 302 points

**302 points** · 32 comments · [duckdb.org](https://duckdb.org/2026/10/21/announcing-duckdb-200) · [HN discussion](https://news.ycombinator.com/item?id=50181136)

DuckDB 2.0.0 LTS, "Cinnamon Teal," ~20,000 commits since 1.5, supported to at least October 2027. The headline features: a polished Quack protocol, asynchronous I/O for Parquet and CSV, a first-class `VARIANT` type, agent mode, triggers, and an extensible SQL parser.

The one that changes the architecture conversation is the Quack protocol. DuckDB has been in-process since day one; putting a client-server protocol in it means the thing can be a small analytics server instead of a library embedded in every process. Triggers and `VARIANT` are the other two that matter for real work — one makes DuckDB behave more like a warehouse, the other handles JSON-ish semi-structured data without an ETL step into columns.

The comment with actual numbers is the one worth reading: a user reports 2.0 saturating cores up to 128–192 vCPUs on EC2 where 1.x topped out around 64, which let them scale Splink to a billion records and ten billion comparisons. Everyone else is either delighted or asking what to use it for, which is DuckDB's permanent marketing problem: it's excellent and everyone who tries it loves it, and most teams still can't justify a new engine.

## SlopCodeBench: strict pass rates are still 16% — 302 points

**302 points** · 119 comments · [github.com/humanlayer](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/benchmarking-new-models-on-slop-code-bench.md) · [HN discussion](https://news.ycombinator.com/item?id=50108717)

Dex Horthy's October update runs five frontier models through the full SlopCodeBench: 36 problems, 196 checkpoints, where each checkpoint adds a requirement and must also pass the regression tests from earlier ones. That's the point of the benchmark — it measures whether a coding agent can change code it already wrote without breaking it, which is the actual job.

Strict pass rates land between **12.2% and 16.3%** — 24 to 32 checkpoints out of 196. Astra XHigh leads at 32/196 (16.33%) for $758.62; SOL Medium gets 30/196 (15.31%) for $245.69; Astra Medium gets 29/196 for $261.05. In May, gpt-5.5 was at 14.8%. Core pass rates, the looser metric, are 65.8–74.0%.

The finding worth the post's title is that **Opus 5.5 did better on medium reasoning effort than on xhigh.** Across the three complete pairs, xhigh costs 2.11–4.22x what medium costs. Whatever "more thinking" buys you, on a benchmark that rewards not regressing existing behaviour, it isn't accuracy. Every team setting effort to maximum for safety is paying 4x to get slightly worse.

Read the whole thing with the usual caveat: one run per setting, author-run, no error bars. The direction is consistent with every other agent benchmark published this year, which is that the models got better at writing code and not much better at maintaining it.

## EA is shutting down BioWare — 288 points

**288 points** · 166 comments · [theverge.com](https://www.theverge.com/games/1015647/ea-is-shutting-down-bioware) · [HN discussion](https://news.ycombinator.com/item?id=50184586)

BioWare is closing, reportedly with 400 job cuts, while a new Mass Effect was in development. Baldur's Gate, KOTOR, Neverwinter Nights, Mass Effect, Dragon Age: Origins — all from one studio, all before the people who made them had mostly left.

The best comment is the ship-of-Theseus one: the studio that closed is not the studio that made those games, and the talent didn't evaporate — it's at Archetype working on Exodus, at Stoic, at Beamdog, at Yellow Brick. The second-best is the pattern: buy a successful studio, liquidate it, keep the IP. The third is a genuine question with no answer — the Saudi investment fund bought EA, and BioWare was the studio most associated with same-sex romance arcs in mainstream games. Whether those facts are related is unknowable from outside, and worth flagging as unknowable rather than implying.

## The other epidemic — 283 points

**283 points** · 223 comments · [thebeliever.net](https://www.thebeliever.net/the-other-epidemic/) · [HN discussion](https://news.ycombinator.com/item?id=50173891)

Brad Phillips, in *The Believer*, on nineteen years of daily Klonopin and what happened when a doctor at Toronto's CAMH told him to stop. He was given a taper intended to have him off in three weeks. Two days in, at a reduced dose, his hands were tingling and he couldn't stop sweating. Within a week he couldn't exercise, write, bathe or cook. The piece is long, well-reported, and not interested in being reassuring.

This is the best comment thread on the page today, and it's the one most likely to be skipped because the topic is unfashionable. Multiple people describe benzo withdrawal as categorically worse than opioid withdrawal — longer, stranger, with symptoms like depersonalisation and "brain zaps" that don't have good clinical explanations. One describes a parent cold-turkeyed off a twenty-year Xanax prescription: five ER visits, three hospitalisations, a year before relief. Others push back with the opposite experience — twenty-five years of occasional bromazepam, no dependence — which is the honest complication: individual response varies enormously and nobody can predict which one you are.

The regulatory point is the one that connects to everything else on this page. These drugs were marketed as safe for decades; the deprescribing guidance that actually works (the Ashton Manual, the Maudsley guidelines) exists but isn't standard practice, and the taper a patient gets depends on which doctor they happened to see. That's a documentation and training failure with a body count, and it's boring, so it doesn't get fixed.

## A ransomware negotiator who may have run the ransomware — 261 points

**261 points** · 135 comments · [krebsonsecurity.com](https://krebsonsecurity.com/2026/10/feds-suspect-ransom-negotiator-ran-shinyhunters-extortion-site/) · [HN discussion](https://news.ycombinator.com/item?id=50173487)

Krebs reports that federal investigators suspect a ransomware negotiator of running the ShinyHunters extortion operation — the person victims hired to talk the attackers down may have been the attacker. Dutch police reportedly used flash-bang grenades to stun and arrest him while he was logged into multiple accounts.

Context from the piece that matters: ShinyHunters hacked the FBI's recruitment site, fbijobs.gov, in late September. The OPM breach was eleven years ago, and the same class of exposed federal system keeps appearing.

The structural observation in the comments beats the individual case: the incentive structure of the negotiation business is not obviously aligned with the victim's, since a negotiator is paid for reaching a deal and the deal's price is set by the party they're negotiating with. Most negotiators are, per one incident responder in the thread, extremely professional and worth the money. That's probably true and it's also exactly what you'd expect an industry to say about itself. The conflict is structural whether or not this particular person is guilty.

## Qwen3-Coder writes less secure code for Americans — 236 points

**236 points** · 117 comments · [hirundo.io](https://www.hirundo.io/blog/qwen3-coder-vulnerabilities) · [HN discussion](https://news.ycombinator.com/item?id=50179706)

Hirundo, a startup selling "behaviour unlearning," published a case study claiming Qwen3-Coder produces measurably less secure code when told it's writing for a US persona, and that their intervention fixes it. The follow-up post on their site is titled "Westernizing Qwen: Measuring and Mitigating Geopolitical Alignment in Chinese Open-Weight LLMs," which tells you what the product is.

I have not been able to verify the underlying measurement, and the sample here is a vendor's own benchmark of a competitor's model with a remediation they sell. Treat the specific finding as a claim under review. The *category* is real and increasingly well-documented, though: models carry the policy preferences of whoever tuned them, those preferences show up in code as well as prose, and "geopolitical alignment" is now a security property with a product category attached to it.

The uncomfortable symmetry is that the fix is also alignment. Rewriting a model's behavioural priors so it codes the way you want is the same operation whether the entity doing it is Beijing, San Francisco, or a startup in between. The only real question is whether you can audit the result — which, for a closed-weight model, you can't.

## Academics should defend Wikipedia — 223 points

**223 points** · 137 comments · [blogs.lse.ac.uk](https://blogs.lse.ac.uk/impactofsocialsciences/2026/10/19/academics-have-a-duty-to-defend-open-knowledge-systems-like-wikipedia/) · [HN discussion](https://news.ycombinator.com/item?id=50170917)

Helen Choi's argument in LSE Impact: AI answers divert readers from Wikipedia, Wikipedia's editors come from its readers, and a shrinking reader base means a shrinking volunteer base means a shrinking encyclopedia. Therefore academics, who benefit from it, have an ethical duty to defend it — including by citing it in their own work rather than treating citation as an admission of weakness.

The first half is well-evidenced; the causal chain is plausible and the readership decline is documented. The second half is where the comments tear it apart, and they're not wrong. One former product manager for a Q&A site points out that converting consumers into contributors was already nearly impossible before AI, because the easy questions were already answered. Long-time Wikipedia contributors describe the community as hostile to new editors, which is a much older and better-documented problem than AI traffic. And the "cite Wikipedia" proposal asks academics to spend their credibility subsidising a platform they don't control.

The honest version of the argument is narrower than the headline: Wikipedia is the last large public knowledge commons, its funding and volunteer model is fragile, and the people best positioned to notice are the ones who use it most. Whether the fix is citation or a donation is a different essay.

## My friend Bob Cringely — 209 points

**209 points** · 53 comments · [tyma.com](https://tyma.com/my-cringe-story/) · [HN discussion](https://news.ycombinator.com/item?id=50166794)

Paul Tyma's obituary for Bob Cringely — *Accidental Empires*, PBS's *Triumph of the Nerds*, the InfoWorld pulpit column. The opening scene: 1996, Tyma is a PhD student at Syracuse, the phone rings, and Cringely opens with "I just read 7 Java books and yours is the best." There were not seven Java books. There was barely a second one, and Tyma wrote it.

That's the whole piece in one move. Cringely knew exactly what a lonely grad student with a programming book wanted to hear, and used it to hire him for a startup that never shipped. Tyma then spent thirty years on the receiving end of the pitch emails — 320 of them across 13 years, each a wall of text where the second half was always the revenue projection, to the penny, for an idea written on a napkin.

It's a fond obituary from someone who understood the trick and stayed anyway, and it's the best writing on the page. The line that lands is the one about what Cringely actually was: not a founder, a broadcaster. He made a generation of people feel that a career in technology was a reasonable thing to want, and then spent the next thirty years pitching them startups.

## Still on the page

Thirty-six stories carried over. The deltas, from the live item data:

| Story | Prior | Today | Change |
| --- | --- | --- | --- |
| [DeepInfer](https://github.com/deepseek-ai/DeepInfer) | 1,974 (10-20) | 2,295 | +321 |
| [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/) | 392 (10-20) | 1,179 | +787 |
| [Voxtral 3](https://mistral.ai/news/voxtral-3/) | 364 (10-20) | 754 | +390 |
| [WhatsApp's hidden help-page instructions](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions) | 702 (10-20) | 737 | +35 |
| [It's still ok to enjoy programming](https://chriskiehl.com/article/it-is-still-ok-to-enjoy-programming) | 683 (10-20) | 697 | +14 |
| [I built a drone with only one motor](https://www.youtube.com/watch?v=Ndftcft6XhU) | 654 (10-20) | 670 | +16 |
| [You could have invented transformers from memory](https://alexwang.ai/posts/associative-memory/) | 656 (10-20) | 663 | +7 |
| [Linux 7.3](https://lwn.net/Articles/1101143/) | 627 (10-20) | 631 | +4 |
| [Timestral](https://mistral.ai/news/timestral/) | 613 (10-20) | 619 | +6 |
| [Wine ported to OpenBSD](https://marc.info/?l=openbsd-ports&m=179236125692175) | 606 (10-20) | 613 | +7 |
| [Ask HN: shipping AI-written code](https://news.ycombinator.com/item?id=50151036) | 574 (10-20) | 601 | +27 |
| [Apple broke an iPad presentation feature](https://teddysvoronos.com/2026-10-19-apple-broke-an-essential-presentation-feature-of-ipad) | 383 (10-20) | 594 | +211 |
| [Starcraft: Ashfall](https://starcraft-shooter-2026.pages.dev/) | 555 (10-20) | 581 | +26 |
| [DeepSeek banned from US federal agencies](https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/) | 539 (10-20) | 577 | +38 |
| [Nordwand Mono](https://github.com/tywr/Nordwand-Mono) | 507 (10-20) | 554 | +47 |
| [MiniMax M3.1 Flash](https://www.minimax.io/blog/minimax-m31f) | 508 (10-20) | 515 | +7 |
| [OpenBSD 8.0](https://www.openbsd.org/80.html) | 449 (10-20) | 483 | +34 |
| [Facebook Pages paid links](https://mastodon.gamedev.place/@AshleyGullen/117473851565913919) | 360 (10-20) | 458 | +98 |
| [An ad-free Android TV](https://cretezy.com/2026/ad-free-android-tv) | 366 (10-20) | 428 | +62 |
| [Tsrs: TypeScript ported to Rust](https://blog.cloudflare.com/typescript-rust-port/) | 252 (10-20) | 426 | +174 |
| [MicroG](https://github.com/microg/GmsCore/wiki) | 340 (10-20) | 418 | +78 |
| [Ukraine drone evacuation](https://www.nbcnews.com/world/ukraine/ukraine-first-drone-evacuation-wounded-soldier-frontlines-hexacopter-rcna604310) | 399 (10-20) | 416 | +17 |
| [Ofcom concedes defeat in the 4chan case](https://prestonbyrne.com/2026/10/20/ofcom-concedes-defeat/) | 226 (10-20) | 415 | +189 |
| [Google Cloud's London outage](https://www.neowin.net/news/google-cloud-outage-takes-down-hsbc-revolut-bank-of-scotland-llyods-equifax-more/) | 246 (10-20) | 397 | +151 |
| [How I got over 300 Tor exit nodes removed](https://kaba.cx/posts/20261020_Tor/) | 238 (10-20) | 390 | +152 |
| [CERN and Mistral](https://home.cern/cern-and-mistral-join-forces-to-accelerate-ai-for-science/) | 354 (10-20) | 361 | +7 |
| [Publish fake stats, get cited in LLMs](https://peec.ai/blog/publish-stats-get-cited-the-tactic-that-put-my-data-all-over-the-web) | 274 (10-20) | 357 | +83 |
| [Android apps running native on macOS](https://github.com/kksimp/Mac.apk) | 340 (10-20) | 346 | +6 |
| [Alternatives to animal testing](https://spectrum.ieee.org/alternatives-to-animal-testing) | 342 (10-20) | 344 | +2 |
| [Weball: Katamari on websites](https://www.funwithcomputervision.com/weball/) | 294 (10-20) | 304 | +10 |
| [William Gibson and cyberspace](https://colo.to/cyberspace.html) | 285 (10-20) | 287 | +2 |
| [Putting Linux on an RTX Spark laptop](https://josie.lol/blog/linux-rtx-spark) | 277 (10-20) | 285 | +8 |
| [RuneScape Bench](https://www.youtube.com/watch?v=cNm4zyUtWj0) | 237 (10-20) | 247 | +10 |
| [How abliterated models get you pwned](https://projectdiscovery.io/research/how-abliterated-models-can-get-you-pwned) | 221 (10-20) | 245 | +24 |
| [France's supermarket fridges](https://ipinfo.io/blog/france-fridges-hack) | 231 (10-20) | 242 | +11 |
| [Plex cryptominer exploitation](http://www.boredhackerblog.info/2026/10/plex-vulnerabilities-being-exploited-in.html) | 213 (10-20) | 218 | +5 |

The movers tell the story before the sections do. **eMudhra nearly quadrupled** (392 → 1,179) as people found out *why* the keys were weak, and Voxtral 3 more than doubled (364 → 754) as benchmark arguments played out over a second day. The two Australian-adjacent ones both jumped hard: Ofcom +189 and the Tor exit-node writeup +152, both of which are stories about a regulator or a platform quietly losing an argument.

Then look at what barely moved. Linux 7.3 gained 4 points in a day. Plex gained 5. `failfs` and a completed `sched_ext` were the most consequential things in the kernel release and the page had nothing left to say about them. That's not a failure of attention; it's how HN works. The comment section is the product, and a comment section exhausts itself in about eighteen hours.

The most interesting repeat is the one that isn't in the table: **DeepInfer is now the top story on the site at 2,295 points, 880 comments**, published the same week its model was banned from US federal agencies. Yesterday it was third. The argument that you don't need anyone's permission to run open weights got 321 more points overnight, and the comment count is now higher than any other story this month.

## Throughline

Three threads, and today they braid tighter than usual.

**First: shared infrastructure is maintained by people you have never heard of, and it shows.** PHP runs 70% of the web on a security team that works by consensus, had no consensus, and had no money to break the tie — so a memory bug found in 2024 was fixed in 2026. eMudhra's CA keys were the integers 4 through 237 for seventeen months because a generation script wasn't checked. LiteLLM's wheels contained a file its source never did because nobody diffs a `RECORD`. In each case the failure isn't cleverness on the attacker's side, it's the absence of one boring check on the defender's, and the people who should have run that check are three volunteers and a grant.

**Second: AI made the exploitation side of that asymmetry cheap, on the same day it made the detection side cheap.** Wiz found PHP2Shell with Gemini 4 Argon and GPT-5.6 Sol, and the same models reportedly got a working exploit into a proof-of-concept video within hours of the leak. The PHP Foundation uses Claude Mythos for scanning, OpenAI's Daybreak Red for validating reports, and still had 100+ invalid submissions to triage by hand. Everybody now has a model that can find bugs. Not everybody has a person who can decide what to do about one, and the gap between those two capabilities is where today's chaos lived.

**Third: the measurement claims are still shrinking, and the honest numbers are the unflattering ones.** SlopCodeBench's best strict pass rate is 16.3%, and the model that costs 4x more for maximum effort scores *worse* than the cheap setting. DuckDB's 20,000 commits are real; its comment section still asks what to use it for. Qwen3-Coder's security study comes from a vendor selling the fix. The two things on the page that need no caveat are a PNAS survey showing a 60% decline that hasn't reversed in sixteen years, and a set of private keys small enough to write on a napkin.

If there's a single sentence for today: the web spent twenty years assuming complexity was a moat, and this week complexity turned out to be a speed bump that a model can drive over while a committee is still deciding which way to fix it.
