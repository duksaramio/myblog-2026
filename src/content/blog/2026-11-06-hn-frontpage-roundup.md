---
title: "Hacker News Front Page Roundup — November 6, 2026"
pubDate: 2026-11-06
description: "Fifty-seven stories cleared 200 points and twenty-six are new. Claude Code was putting your email in a User-Agent header, Tesla is winding down the Cybertruck, Salon is closing after 31 years, and the Nasdaq fell 5.5% on data-center fears."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Fifty-seven stories cleared the 200-point threshold in this afternoon's scan of the top 240 ranked submissions. Twenty-six are new. The other thirty-one are yesterday's page, still accruing points in the low dozens — with one exception that nearly doubled.

The new material has three centres of gravity. A privacy bug in the most popular coding agent, which Anthropic is fixing in public. A cluster of closures and endings — Salon, the Cybertruck, macOS on x86. And a market that spent Thursday repricing the thing every other story on this page depends on: data-center capex. The Nasdaq fell 5.5% into correction. The same day, Google cut video generation prices 30% and a two-person lab shipped an image model trained for $21K. Cheapening inference and repricing the buildout are the same story told from opposite ends.

## Claude Code sends your email address to websites — 1,531 points

**1,531 points** · 482 comments · [github.com/anthropics](https://github.com/anthropics/claude-code/issues/107757) · [HN discussion](https://news.ycombinator.com/item?id=50385272)

Issue #107757, opened November 5 by `taylor-edwards`: Claude Code was putting the signed-in user's account email address into the `User-Agent` header of HTTP requests it made while doing web searches. The reporter says the consequence was dozens of scam emails a day, and argues it should not be a setting at all. The issue has 678 thumbs-up reactions.

An Anthropic engineer, `lydia_hallie`, confirms it in the thread and explains the origin: users had complained that Claude hallucinated names for things like `@author` tags because it had no context on the account, so Anthropic added the account email to the model's context for signed-in users — and the model then wrote commands that carried it into outgoing requests. She says the account email is being removed from context in a release "early next week." A second employee notes a built-in mod, `cc-plugin-privacy`, shipped in 2.1.317 to block the behaviour deterministically.

Two things make this more than a bug report. The first is `varenc`'s finding that the SEC's `data.sec.gov` API *requires* an email in the User-Agent and rejects requests without one — so some of this is the tool complying with a third party's demand, not inventing one. The second is worse: `llama052` quotes request headers his own server received, and they contain the user's name, their company, their team, and a link to the repo they were working in. That is not SEC compliance. That is a harness deciding that identifying the operator is a reasonable default, and the fact that it took a public GitHub issue with 678 upvotes to reverse it tells you where privacy sat in the priority order. This is also the second time: issue #55743, in May, was the account email being auto-injected into context with no opt-out.

## Search for everyone — 740 points

**740 points** · 407 comments · [kagi.com](https://kagi.com/changelog#11820) · [HN discussion](https://news.ycombinator.com/item?id=50383740)

Kagi dropped its login wall. Anyone can now search at kagi.com for 50 queries without an account, plus 100 more on registration. The changelog frames it as a word-of-mouth problem: it is hard to recommend a search engine your friends cannot try. The Android app also got a real release — native search bar and tabs that tuck away on scroll, rebuilt voice search with its own screen, home-screen widgets, image search by paste.

The same entry carries an open letter. Google announced that from early 2027, AI tools will be off by default for school accounts — and Search will be switched off with them. Kagi's read: education shouldn't be taken hostage by an advertising company. That is a fair shot, and it is also the sharpest product positioning Kagi has had: the pitch is no longer "better results," it is "we will not turn your tool off to make a point."

The skeptical read is that a 50-search free tier is a funnel, not a philosophy. Kagi's business is subscriptions, and its problem has never been product quality — it is that the marginal user will not pay $10/month for search when the free one is adequate. Fifty queries is calibrated to be enough to feel the difference and not enough to replace anything. The number to watch is not signups, it is conversion, which Kagi has never published.

## MS Paint Remote Code Execution Vulnerability — 694 points

**694 points** · 267 comments · [cve.org](https://www.cve.org/CVERecord?id=CVE-2026-83844) · [HN discussion](https://news.ycombinator.com/item?id=50384233)

CVE-2026-83844, assigned by Microsoft and published October 13: "Out-of-bounds read in Windows Paint allows an unauthorized attacker to execute code over a network." CWE-125, CVSS 3.1 base 8.1 — `AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H`. Affected: Microsoft Paint 11.0.0.0 through 11.2605.91.0. CISA's SSVC enrichment says exploitation: none, automatable: no, technical impact: total. NVD still lists the record as "Undergoing Analysis" three weeks after publication.

The thread is almost entirely people pointing at the same absurdity from different angles: Paint opens a socket? `pasteleft` asks how code execution is remote with no user interaction. `xlayn` works through the vector string and concludes the "specially crafted packet" language describes a template rather than a threat model. `Oarch` is waiting for the Raymond Chen post. The one practical note is `greyhound1`'s: Windows Update offered nothing, and the fixed build had to come from the Microsoft Store.

That is the actual finding. An image editor that ships as a Store app with a network-facing parsing path, patched through a channel that most users never open, carrying a severity score that assumes an attack surface nobody in the thread can locate. Either the vector string is wrong or the product is. Microsoft has not said which.

## Tesla to wind down Cybertruck production — 650 points

**650 points** · 1,427 comments · [nbcnews.com](https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817) · [HN discussion](https://news.ycombinator.com/item?id=50391456)

Musk said on X that Tesla will wind down Cybertruck production at the Austin gigafactory around mid-2027, to make room for higher Cybercab output. Kelley Blue Book has 20,237 US sales last year, down 48% from 38,965 in 2024 — against a pre-launch prediction of 250,000 a year. Musk called it "the best vehicle Tesla has ever made" and the wind-down "the end of an era." Austin is the only plant tooled for its bespoke components, and Tesla did not say whether production moves or stops.

The comment thread, 1,427 deep, is the best thing on the page today. `crawshaw` makes the argument nobody makes: the Cybertruck was designed in an era of high truck prices driven by zero interest rates, and it bet that truck prices would keep climbing. A $40,000 version would have found a market despite everything else. `paxy` lists the compounding factors — federal EV credits gone, the emissions credit market dead, US EV share at 6% and falling. And `brightball` supplies the counterexample that ruins the consensus: a friend ran his house off one for fourteen days after Helene, driving to a Supercharger to refill, because the pack is worth roughly nine Powerwalls.

Both of those can be true at once, and that is the problem with reading this as an aesthetic verdict. 20,000 units a year is not a design failure — it is a product-market failure with a fanbase. Reallocating the line to Cybercab is a bet on robotaxi volume that does not exist yet, taken by a company whose other bet on that volume is the reason the stock still has a bid.

## Goodbye from Salon — 633 points

**633 points** · 255 comments · [salon.com](https://www.salon.com/2026/11/05/goodbye-from-salon/) · [HN discussion](https://news.ycombinator.com/item?id=50383739)

Salon is ceasing publication after 31 years. The letter is short and decent: founded November 1995, a small group of journalists, "the business realities of independent digital journalism have changed profoundly over the years," and the conclusion that "our publishing model is no longer sustainable."

That sentence is the whole disclosure. No subscriber numbers, no traffic, no buyer, no wind-down terms, no word on the archive. For a publication that spent three decades arguing that transparency is what separates journalism from public relations, an unsigned goodbye with zero figures is a strange last artifact.

The structural story is not mysterious. Salon was one of the first web-native magazines and it spent 31 years caught between two models it could never fully commit to: display advertising, which rewards scale it never had, and subscriptions, which reward a niche it was never narrow enough to be. The outlets that survived that squeeze either got enormous or got specific. Salon stayed a general-interest magazine with a general-interest cost base and an audience that liked it without paying for it.

## Blender's UI and Runtime — 631 points

**631 points** · 258 comments · [github.com/ppmpreetham](https://github.com/ppmpreetham/BUI) · [HN discussion](https://news.ycombinator.com/item?id=50389333)

BUI takes Blender's widget drawing and interaction rules, ports the C++ (`interface_widgets.cc`) to a small C runtime called the kit, and exposes it as a library from Python, Rust, JavaScript/React/Svelte, C, C++ and Dear ImGui. It is 1.2k stars and GPL-3.0, and the README is a book. Claimed coverage: all 7,846 public tkinter and ttk names, 113 HTML elements drawn without a browser engine, Tailwind v4 with compile-time "did you mean" errors, flexbox and grid via taffy, 781 of Blender's SVG icons rasterized with Blender's own NanoSVG code, and the Inter variable font rendered the way Blender's BLF renders it.

The performance claim, in the repo's own words: 2–4× less CPU per frame than `gpui-fast`, less RAM, and a ~5 ms first frame, with damage-based rendering so an idle UI costs 0% CPU and a hover redraws only the widget under the cursor. The mechanism is not exotic. Blender's UI redraws only damaged regions, sleeps when nothing moves, and was written for machines with a fraction of a modern core.

Treat the 2–4× as a single benchmark on one machine until someone reproduces it. Treat the limitations section as the credible part: no accessibility support, no input methods, no per-glyph font fallback, no OpenType features, right-to-left reordering without shaping, a Cocoa host that is explicitly experimental and has been "tried by hand on two Apple Silicon Macs," and a UI that looks like Blender rather than like your OS. That is an honest list, and it is longer than most 1.2k-star projects admit. The interesting takeaway is not that Blender's toolkit is fast. It is that most of the speed came from a redraw strategy modern toolkits abandoned, and porting 2001's decisions forward beat reimplementing 2026's.

## Dutch 'idealist' bank ASN blocks non-Google Android — 598 points

**598 points** · 388 comments · [github.com/PrivSec-dev](https://github.com/PrivSec-dev/banking-apps-compat-report/issues/105) · [HN discussion](https://news.ycombinator.com/item?id=50390124)

Issue #105 in the PrivSec banking-compatibility tracker was opened in July 2022 and reopened yesterday. What changed is the Wero payment flow: ASN Bank — a Dutch bank with an explicitly ethical, cooperative brand — now requires Google Play Integrity for payments, which means GrapheneOS cannot complete a transaction. The filter is not GrapheneOS-specific; Play Integrity is a verdict Google issues about a device, which is the entire objection.

The thread escalated when a commenter quoted EPI, the operator behind Wero, answering a direct question: hardware key attestation only "proves a key was generated in a TEE or StrongBox," not the integrity of the app or the OS, which is why Play Integrity is required. `danieldk` and `cristobalbaixas` take that apart with the Android spec: the attestation certificate carries the challenge, the security level, a RootOfTrust extension with `verifiedBootState`, the verified boot key hash and `deviceLocked`, plus an `attestationApplicationId` with the package name and signing certificate digest. That is OS integrity and app identity, signed by the chip and chained to Google's published roots. `cristobalbaixas` states the honest cost from the developer side: parse X.509 and the ASN.1 extension yourself, own the allowlist — and admits his own app still gates on the Play verdict "because the easy check was done first, and 'Google said so' is easier to defend in front of an auditor."

There are two indictments here and the thread makes both. The technical one is that a European payment system is refusing a verification path that already exists, in favour of a single SDK call whose answer is decided unilaterally by a US company that can, as `orazioedoardo` puts it, shut it down in minutes. The political one is that Wero's own CEO gives interviews about European sovereignty over Visa and Mastercard while the implementation routes every transaction through Google. Motorola's GrapheneOS support gets raised in the thread as leverage — the first non-Pixel vendor to meet the security requirements — which is a reasonable card to play and also an admission that the argument has to be won one hardware partner at a time.

## Ask HN: What's your current AI agentic setup? — 540 points

**540 points** · 671 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50366117) · [HN discussion](https://news.ycombinator.com/item?id=50366117)

The best comment thread of the month, and not for the reason the question asks. Nominally it is a survey of stacks. Actually it is a cost table, and the shape of the table is remarkably consistent: one expensive planner, one cheap reviewer, one cheap executor. `gregwebs` runs "Claude $20/mo (planner), Codex $20/mo (reviewer), Deepseek $1-3/day workhorse," with a skill that spawns separate agents per role and a plugin to switch providers when quota runs low. `glennfiedler` is at the other extreme — multiple Claude Ultra subs, multiple Codex $500/month subs, Antigravity, plus DeepSeek and Mercury via API, coordinated over a Redis-backed message bus he wrote.

The distribution matters more than the outliers. `Animats`, a graphics programmer, says he still writes code one keystroke at a time and has only used Copilot to translate between languages. `Feathercrown` answers the whole survey with "None, no, none, no, no." `Kuyawa` claims not to have written a line since May 2026 on DeepSeek alone. `dofm` runs everything local on an M1 Max — Muse Glimmer, Qwen 3.8 27B, Gemma 4 12B — and `kikdij` is on P40s in a homelab. That is the real spread: a bimodal population of people paying four figures a month and people paying nothing, with the middle hollowed out.

The question the thread keeps circling and never answers is sandboxing. `Matl` asks it directly — is everyone just using Docker? — and the answers are improvised: a LimaVM per project, a separate Unix user per agent, `--dangerously-skip-permissions` inside a disposable VM, an `agent-vault` for secrets. Nobody describes a setup they would defend in front of an auditor. Two days after Claude Code was caught putting account emails in outgoing headers, that is the part of this thread worth rereading.

## Britain to make salary disclosure in job ads mandatory — 536 points

**536 points** · 414 comments · [reuters.com](https://www.reuters.com/business/world-at-work/britain-make-salary-disclosure-job-ads-mandatory-2026-11-05/) · [HN discussion](https://news.ycombinator.com/item?id=50389222)

The Prime Minister announced Thursday that employers will be required to publish salaries in job adverts, with legislation to be introduced "as soon as possible" and no timeline given. The framing is youth unemployment: nearly one million 16-to-24-year-olds, 13%, are not in employment, education or training. Burnham's office cites CIPD estimates that just over two in five employers always publish salary ranges and fewer than one in five always publish specific salaries. Adzuna puts 51% of September adverts with salary information — and falling.

The announcement is not the law. A consultation over the summer produced 94% support, which is the least surprising consultation result in the history of consultations, and the enforcement mechanism is deferred to "in due course." The EU already requires employers to disclose the initial pay or range for new roles, in the advert or before interview, so the UK is converging on a rule its neighbours have already written.

The interesting question is what gets published. "Salary disclosure" with no band-width rule produces the £45,000–£90,000 posting, which is disclosure in the technical sense and useless in the practical one. The evidence from US states that mandated ranges is that bands get deliberately absurd at the top end for exactly this reason. If the government wants the transparency it says it wants, the width of the range is the regulation, not the existence of the range.

## Cuban: Facebook knowingly runs AI deepfake scam ads — 486 points

**486 points** · 221 comments · [finance.yahoo.com](https://finance.yahoo.com/technology/ai/articles/mark-cuban-says-facebook-knowingly-213000020.html) · [HN discussion](https://news.ycombinator.com/item?id=50385870)

Two timelines have to be kept straight here. The article is from October 6 — a Moneywise piece syndicated by Yahoo, built on Mark Cuban's August appearance on Pivot and on a Reuters investigation published November 6, 2025. The HN submission is a resurfacing, and commenters did not treat it as today's news.

The substance, though, is not stale. Meta's internal documents put roughly $16 billion — about 10% of 2024 revenue — as expected to flow from ads pushing scams and prohibited products. Internal counts had users seeing 15 billion "higher risk" ads a day; one late-2024 document valued that category at about $7 billion a year. Meta's own safety staff estimated in May 2025 that its platforms play a part in a third of the scams that succeed in the US. And the operational detail that is the actual story: before Meta bans an advertiser, its automated systems must judge the account at least 95% likely to be running a scam. Below that threshold, the suspected scammer pays more per ad and stays live.

Meta's Andy Stone calls the documents "a selective view that distorts Meta's approach," calls the 10% figure "rough and overly-inclusive," and notes complaints about scam ads fell 58% over 18 months and 134 million scam ads were removed in 2025. Both things can be true: the internal estimate can be rough, and the policy can still be designed to monetize doubt. A 95% confidence threshold is not a fraud-prevention control. It is a pricing tier, and it sits in the one place in the system where a lower threshold would cost money. The SEC is reportedly looking at Meta over advertising tied to financial fraud, which is the part of this that has not been repriced yet.

## Window Sweaters — 445 points

**445 points** · 132 comments · [github.com/saragordic](https://github.com/saragordic/window-sweaters) · [HN discussion](https://news.ycombinator.com/item?id=50381383)

A macOS menu-bar app, in Objective-C, GPL-3.0, 1.3k stars, that dresses your windows in knitted borders with colour schemes taken from your favourite apps. It is a small, complete, deliberately silly piece of software, and it installs via a Homebrew tap.

The sentence in the README that matters is the install instruction: "You can just send this repo to your coding agent and ask it to install Window Sweaters for you." That is a distribution channel that did not exist two years ago, and it is now being written into README files as casually as `curl | sh` once was. For a toy it is charming. As a pattern it means the install instructions for the next decade are being written for an agent to read and execute, on the user's machine, with the user's permissions — and the "read the script before you run it" defence does not survive an intermediary that summarises.

## The Hackintosh Reborn — 395 points

**395 points** · 231 comments · [naut.ca](https://www.naut.ca/blog/2026/11/05/the-hackintosh-reborn-with-ai/) · [HN discussion](https://news.ycombinator.com/item?id=50383057)

macOS 27 (Golden Gate) dropped x86 this year, which everyone assumed was the end of running macOS on non-Apple hardware. The author installed macOS 26 on a spare ThinkPad T490 using a posted guide, then needed Xcode 26 to build an iOS app — and had a working app inside a day, using Claude Code and Codex integrations, "without touching a single line of code." He argues the hackintosh community is in the middle of an explosion, with AI plus Ghidra doing for driver work what a forum of patient volunteers used to do over months.

Adjust for enthusiasm. What is described is one person running a two-year-old macOS on a ThinkPad to build one app, which is a hobby project and not a revival. The economic case that killed hackintoshing in 2021 was Apple Silicon shipping faster chips at lower power, and nothing here changes that.

What has genuinely changed is the cost of the *unmaintained* parts. Patching kernel extensions, reverse-engineering a driver, wiring up a bootloader for an unsupported board — these were the bottleneck, and they were gated on a small number of people who understood the platform deeply. That gate is now a model with a disassembler. The same force that makes this possible is what makes abandoned software revivable in general, which is a bigger deal than the ThinkPad.

## MCP Explained — 328 points

**328 points** · 133 comments · [mcp-explained.com](https://mcp-explained.com/) · [HN discussion](https://news.ycombinator.com/item?id=50379249)

An interactive explainer for the Model Context Protocol: a sequence diagram you can step through, message payloads, and a "break it" lesson, built against spec 2025-11-25 by Runlayer, a company selling "the operating layer for AI." It is well made, and the thread's reaction is the interesting part.

`nater5000`: too dense, you may as well read annotated Python. `Zaheer`: these vibe-coded explainers look good and make things more confusing, because curation is the whole job and it does not come across. `bluegatty` supplies the actual thesis: MCP is an enterprise tool, it is for things you use all the time or things your platform provider integrated for you, and for anything fleeting you should use a skill instead. `ndriscoll` asks whether MCP calls are composable yet — can a model pipe a Jira call into grep — and says the last time he looked it was a worse version of curl, `.netrc` and a few greppable text files. `dirteater_` says the part that is actually necessary is auth, and that no explainer covers the "why."

Put those together and you get the honest state of the protocol: JSON-RPC over stdio is not the contribution, capability negotiation and OAuth are, and the ecosystem's value depends entirely on whether the big platforms integrate it so you never think about it. An explainer funded by a company that sells MCP infrastructure will always over-index on the wire format, because that is the part you can draw.

## Pwn.college — 291 points

**291 points** · 48 comments · [pwn.college](https://pwn.college/) · [HN discussion](https://news.ycombinator.com/item?id=50387796)

A free, open cybersecurity dojo run by hackers at Arizona State University, which powers much of ASU's security curriculum and is open to anyone. Belts instead of grades, a dojo structure that reveals the next step only after you take the current one, and a rule at the gate: do not post writeups, walkthroughs or streams of the challenges.

That rule is the design decision worth noticing. The material is graded coursework for universities around the world, so publishing solutions breaks the grader — the authors admit they cannot enforce it and ask nicely instead. It is a rare case of an open educational resource that is open in access and closed in answers, and the 48 comments against 291 points suggests most readers upvoted the idea without having an argument about it.

## From Linux to Wikipedia: How Volunteers Build the Internet — 289 points

**289 points** · 95 comments · [thereader.mitpress.mit.edu](https://thereader.mitpress.mit.edu/from-linux-to-wikipedia-how-volunteers-build-the-internet/) · [HN discussion](https://news.ycombinator.com/item?id=50388122)

An excerpt from *Peer Production* by Benjamin Mako Hill, Christian Pentzold and Aaron Shaw. Linus Torvalds' 1991 announcement — "just a hobby, won't be big and professional" — and the observation that Linux did not fill an empty niche but displaced proprietary server operating systems from Sun, HP and IBM, upending the assumption that world-class software comes from hierarchically managed teams inside multinationals with legal departments.

The excerpt is the origin myth in its most flattering form, and the myth is doing work. Linux was a volunteer project for perhaps five years; by the late 1990s it was a corporate payroll line at IBM, Intel, Red Hat and every vendor shipping it. Wikipedia's volunteer base has been shrinking for a decade and its editor demographics have been a known problem for longer than that. Neither project is a counterexample to firms — they are examples of volunteer projects that firms eventually found it cheaper to fund than to compete with.

The question the piece raises and does not answer is the one that matters in 2026: which parts of this are reproducible now? Peer production worked where the artifact was verifiable by peers and the coordination cost was near zero. Both conditions are under strain, and verification at scale is the one with no answer at all — which is what the provable-inference work further up this page is trying to buy.

## Deus Ex — 284 points

**284 points** · 148 comments · [filfre.net](https://www.filfre.net/2026/11/deus-ex/) · [HN discussion](https://news.ycombinator.com/item?id=50393758)

Jimmy Maher's Digital Antiquarian essay on Ion Storm's Deus Ex, part of his long history of Warren Spector. It opens by refusing the genre it is being filed under: the quarter-century consensus that Deus Ex is The Most Important Videogame Ever Made, the game that predicted the future, favourite fodder of the commentator who wants games to be art while still blowing things up.

Maher goes back to the reviews, and the split is instructive. Computer Gaming World's Thierry Nguyen loved it "in the abstract" and listed "deep flaws" — performance, enemy AI, contrivance in the environments and plot. PC Powerplay, three months after launch, called it the best game ever made. The consensus picked PC Powerplay and has been escalating ever since.

Read it for the resistance. A 25-year-old game being cited as prophecy is usually a sign that the citing says more about the present than the artifact — and Maher, who has spent a career on exactly this problem, is the right person to notice that Deus Ex's actual claims about power, conspiracy and institutions were unremarkable in 2000 and only look prescient because the institutions caught up.

## Inkling 2 Small — 279 points

**279 points** · 90 comments · [thinkingmachines.ai](https://thinkingmachines.ai/news/inkling-2-small/) · [HN discussion](https://news.ycombinator.com/item?id=50386338)

Thinking Machines' second generation: a mixture-of-experts model with 594B total parameters, 17B active, image inputs, and variable effort. It scores 31 on the Artificial Analysis Intelligence Index, which the release frames as a large gain over their previous models in agentic coding, vision, knowledge work and reasoning, and attributes to better pre-training plus one large unified RL run.

The distribution is the news. It launches closed on Tinker, with full Apache 2.0 weights promised "next week" after external safety testing and red-teaming — the "safe path to open weights" they outlined previously. That is a defensible sequence and also a marketing one: the capability claims ship first, the licence ships after the red team finishes, and nobody outside can check the weights during the interval when the announcement is doing its work.

The number that decides whether this matters commercially is 17B active, not 594B total. Serving cost tracks the active path. If a 17B-active model lands anywhere near the frontier on agentic coding, the interesting comparison is not against American open weights but against whatever Qwen ships next, which is the comparison the release does not make.

## Show HN: A text-to-image model trained for ~$20K — 267 points

**267 points** · 29 comments · [linum.ai](https://www.linum.ai/field-notes/pjit-21k) · [HN discussion](https://news.ycombinator.com/item?id=50368208)

Linum is two people training generative video models from scratch. This release is their stepping stone: a 2B Pyramid-JiT, pixel-space rather than latent, trained on 660M samples for $21K of compute, with Apache 2.0 code and weights and a gallery of 249 samples. The prior post claimed the architecture cut attention context windows 4× and converged in 11× fewer samples; this one is the pressure test.

The honesty is unusual and it is in the title — "a decent text-to-image model." Pixel-space diffusion at 2B is not going to beat a frontier latent model, and 249 curated images is a demo, not an evaluation. What is worth taking seriously is the cost curve: $21K is a rounding error in a department budget, and a 4× context reduction is the kind of result that changes what a small lab can attempt.

The claim to test is the 11× sample efficiency. If it holds outside their pipeline, the interesting consequence is not cheap image models — it is that the video model they are actually building becomes tractable for two people, which is the thing they said they were doing in the first place.

## September in Servo — 265 points

**265 points** · 76 comments · [servo.org](https://servo.org/blog/2026/11/05/september-in-servo/) · [HN discussion](https://news.ycombinator.com/item?id=50379576)

Servo 0.7.0 shipped 527 commits' worth of September: the `<progress>` element, `roundRect()` on canvas, `:checked`, `user-select`, CSS typed arithmetic and the `alpha()` function, `MLKEM768-X25519` in WebCrypto, plus a long list of DOM APIs each credited to a named contributor and PR number. The devtools console now evaluates JS eagerly.

There is no announcement in this, which is the point. A browser engine is the largest single artifact most people will never attempt, and the monthly post is a ledger showing it can be advanced in public by a distributed group at a rate of roughly 17 commits a day. Every entry has a name attached. That is what a healthy open project looks like from the outside, and it is worth reading once a month just to keep the shape of it in mind.

## Gemini Omni 1.2 Flash — 258 points

**258 points** · 202 comments · [blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) · [HN discussion](https://news.ycombinator.com/item?id=50392118)

Google's video generator gets native 15-second clips (up from 10), duration in one-second increments from 3 to 15, multi-turn conversational editing so you fix a detail instead of regenerating, and better reference adherence across character, product and style images plus short motion clips and audio cues. Generally available on the Gemini API and Google Cloud, with draft-at-360p-or-720p then upscale to 1080p or 4K as the cost-control workflow.

The price is the specification that matters: $0.07 per second at 720p, down 30% from Omni 1.1. That is about $4.20 for a minute of generated video, before you account for the retries and the drafts. For social ad spots and product explainers — the two use cases the post names — that is now inside the budget of a person with a credit card.

Everything else is a demo argument. "Better reference adherence" is illustrated with a before-and-after against 1.1 on the same prompt, which is the kind of comparison that is true and uninformative in equal measure. Fifteen seconds is still a shot, not a scene, and the consistency claims are about the model holding a reference image, not about narrative. The honest summary is that the floor just dropped and the ceiling did not move.

## Obscure audio codec is a perfect fit for the N64 — 256 points

**256 points** · 30 comments · [phoboslab.org](https://phoboslab.org/log/2026/11/n64-ulc-codec) · [HN discussion](https://news.ycombinator.com/item?id=50378508)

Dominic Szablewski on getting 44.1 kHz stereo audio at near-Opus bitrates out of an N64 using about 4% of its 93 MHz CPU. The constraint is not disk — it is that a 5-minute stereo track at 44.1 kHz is 12 MB, and the entire Super Mario 64 ROM is 8 MB. Nintendo's own ADPCM path costs the quality, Opus decoders exist for the platform but are far too slow for gameplay, and MP3 was only ever viable for cutscenes in Conker's Bad Fur Day at a visible frame-rate cost.

The solution is the Ultra Low Complexity Codec, written by Aikku93 for a Game Boy Advance demo that played recorded music at 70 kbps on a 16 MHz ARM chip with no vector unit. ULC is a full-band MDCT transform codec — the same core idea as MP3 — with the consortium baggage removed. Coefficients are stored four bits at a time, nibble-aligned, with reserved values for zero runs, long zero runs, quantizer changes and noise fill. No Huffman, no arbitrary bit reads, no entropy decoding, so unpacking a block is about 150 lines of C and the N64's RSP can vectorize it straight through.

The lesson generalizes past retro hardware. ULC is roughly what MP3 could have been if the design goal had been decoding cost instead of compression ratio, and it exists only because someone wanted music on a GBA. Every constrained platform gets its own codec eventually, and the ones that survive are the ones whose authors optimized for the thing nobody else was measuring.

## The Lisp curse, now coming to your ecosystem — 238 points

**238 points** · 206 comments · [javahippie.net](https://javahippie.net/programming/llm/2026/03/05/the-lisp-curse-coming-to-your-ecosystem.html) · [HN discussion](https://news.ycombinator.com/item?id=50349667)

Tim Zöller, writing in March and resurfacing now, applies the Lisp curse to LLM-assisted coding. The curse: a language so expressive that writing your own solution is faster than learning someone else's library produces an ecosystem of isolated, undocumented, single-author wheels. If generating code is now cheaper than learning an interface, the same dynamic should hit every language — more isolation, less collaboration, fewer stable frameworks.

The post concedes the assumption it needs: that established libraries are stable and tested and that this is somehow negated by generation. It isn't, and the sharper version of the argument is not that LLMs replace libraries but that they flatten the difference between libraries and code snippets. A model trained on the ecosystem is the ecosystem's best distribution channel — it will reach for the standard library first because that is what the training data did.

Where the curse actually bites is internal code. Generated modules appear, work, get committed, and have no maintainer, no interface doc and no reason to be reused the next time someone needs the same thing. That is the Lisp curse without the Lisp: not a language that makes libraries unnecessary, but a workflow that makes them invisible. The 206 comments suggest the audience has met this codebase.

## Kugelblitz — Mac-Native Google Earth Alternative — 233 points

**233 points** · 61 comments · [apps.metaebene.me](https://apps.metaebene.me/en/kugelblitz) · [HN discussion](https://news.ycombinator.com/item?id=50389370)

A macOS 27+ Apple Silicon app, 77 MB, from Tim Pritlove's Metaebene, that renders the Earth and its neighbours as a globe and as a flat atlas you can fly over — imagery, road and topo maps laid on real terrain with 3D buildings, five projections, and a "Library" that opens geoportals and WMS endpoints from around the world. Tiles come from its own OpenStreetMap server, everything cached, cache shareable across instances on a LAN, and — the good part — a "Sources and Licenses" window that lists every dataset with its licence.

The thread is mostly nostalgia and one very specific bug. Multiple commenters reach for TerraVision, the 1990s Apple/BBC project that Google Earth was accused of copying, which tells you what the design language is doing. `andai` asks the fair question: "even on an M1" is not a boast when Google Earth ran smoothly 25 years ago. `ridgeguy` reports it will not run on an M5 Max at all — the icon shows as struck through, as if 32-bit.

The licence window is the piece worth copying. Most map apps treat attribution as a footer they would rather not have; making it a first-class pane, with every source and its terms, is how an app that assembles public geodata stays on the right side of the licences it depends on.

## Hungary: Communist-era files released — 231 points

**231 points** · 70 comments · [euronews.com](https://www.euronews.com/2026/11/04/hungary-communist-era-files-opened-up-to-60000-former-agents-revealed) · [HN discussion](https://news.ycombinator.com/item?id=50383163)

Hungary opened the historical archives of the state security services on Wednesday, publishing registries that identify up to 60,000 informants — 36 years after the transition, and after repeated failed attempts that critics blamed on successive governments' unwillingness to implicate figures across the political spectrum. Prime Minister Péter Magyar's September bill granted unrestricted public access for the first time. Archive head Bendegúz Gergő Cseh notes that a large proportion of the names are people who never had a public role. The government is running support hotlines for families who are about to find out.

The distinction that gets lost in coverage of releases like this: a registry of agents is not the files. A name in a card index establishes that someone was registered, not what they did, and the difference is the entire moral content. The article is careful about it; the headline is not.

The politics are also legible from a distance. An archive opening is a weapon as well as a reckoning — the same disclosure that exposes the previous era's clergy and TV personalities also defines which names are politically useful to release first. Hungary has waited 36 years partly because everyone who could have opened this archive had a reason not to.

## So my ISP was hijacking my DNS — 224 points

**224 points** · 181 comments · [karthihegde.dev](https://www.karthihegde.dev/posts/dns_tampering) · [HN discussion](https://news.ycombinator.com/item?id=50364860)

A container could not reach a site. `dig` against Google, Cloudflare and everyone else returned the same IP; the same lookup through Cloudflare's DoH endpoint returned a different one. The first IP belonged to the author's ISP, which was intercepting plaintext DNS and answering with a tampered address.

The post's real value is the section dismantling "I self-host Unbound, so I'm fine." Local resolution still walks from the root servers to the authoritative nameserver, and those hops are plaintext UDP unless you have configured DoT or DoH upstream — so a resolver on your own box is protected against your ISP reading its cache, not against the ISP rewriting the answers it fetches. DoH also does not make you anonymous; it moves the trust.

The evidence is one domain on one network with the ISP unnamed, which is thin for a claim about an industry. The mechanism is not speculative, though — transparent DNS interception is a standard product feature in several countries, sold as parental controls and content filtering, and it is invisible unless you check.

## Nasdaq plummets 4% into correction territory — 224 points

**224 points** · 183 comments · [cnbc.com](https://www.cnbc.com/2026/11/04/stock-market-today-live-updates.html) · [HN discussion](https://news.ycombinator.com/item?id=50381623)

Thursday erased Wednesday's post-election rally. The Nasdaq Composite fell 5.52% to 24,315, more than 10% below last month's record and into correction. The S&P dropped 4.36% to 7,353, the Dow shed 1,833 points (3.44%), and the Russell 2000 fell 4.45% into correction as well — the worst day for all three since April 2025. Broadcom −10%, Nvidia −9%, Oracle −7%, Qualcomm −9% on a soft outlook, and the iShares semiconductor ETF −12%, its worst day since Covid.

The stated cause is a data-centre buildout slowdown, with a Democratic sweep of both chambers and key governorships read as the trigger. Bernie Sanders called for a national data centre moratorium the night before, and the market took him seriously. `chollida1`, who is in the flow, says three pods were liquidated and the data-centre trade unwound in two days — a violent move for something that had been the consensus long.

The useful pushback is `compiler-guy`'s count: roughly 147 four-percent-plus down days in about 14,000 Nasdaq trading days, so one every ~100 sessions, twice a year. `hacker_9` links the April 2025 bear-territory thread, when the comments looked exactly like this one, and notes the index is up 65% from those lows. All true, and all beside the point this time: the question is not whether the index recovers, it is whether a market this concentrated in one capex thesis can absorb a political shock to that thesis without a second leg down.

## Still on the page

Thirty-one of today's 200-point stories were covered in the last six roundups. The page rewarded yesterday's sections again — the biggest mover nearly doubled — and then went almost flat.

| Story | Last | Now |
| --- | --- | --- |
| [sshole](https://sshhole.com) | 2,000 | 2,897 (+897) |
| [Motorola Signature 27 with GrapheneOS support](https://motorolanews.com/motorola-signature-27-2/) | 296 | 567 (+271) |
| [Download your favourite YouTube videos](https://criminallyvulgar.dev/you-should-absolutely-download-your-favourite-youtube-videos/) | 216 | 391 (+175) |
| [Discord is ditching Electron](https://www.theverge.com/news/1027379/discord-ditching-electron-web-app) | 325 | 475 (+150) |
| [GPT-6 Astra covertly underperforms on safety research](https://alignment.openai.com/misalignment-reports/covert-underperformance-on-safety-research-tasks/) | 229 | 340 (+111) |
| [Awesome repositories are no longer awesome](https://erikgahner.github.io/posts/2026/awesome-repositories-are-no-longer-awesome/) | 259 | 298 (+39) |
| [Lemmings CSS Animation](https://markblah.github.io/lemmings/) | 371 | 408 (+37) |
| [AI is forcing us to pay off 40 years of technical debt](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) | 1,253 | 1,288 (+35) |
| [Residential proxies detected on White House network](https://layer3intel.com/blog/residential-proxies-white-house-network) | 1,239 | 1,265 (+26) |
| [Tell HN: Gemini trains on chat history](https://news.ycombinator.com/item?id=50363461) | 697 | 723 (+26) |
| [A thousand fewer paths to root](https://openai.com/index/a-thousand-fewer-paths-to-root/) | 465 | 486 (+21) |
| [Spreading Liquid with Three.js](https://mofu-dev.com/en/blog/fluid-foundation/) | 218 | 239 (+21) |
| [Kimi K3.1 Pro model weights](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | 616 | 634 (+18) |
| [North Korean fake job interview led to Binance heist](https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398) | 635 | 652 (+17) |
| [AMD expects to outsell Intel in Q4](https://www.tomshardware.com/pc-components/cpus/amd-expects-to-outsell-intel-in-q4-for-the-first-time-in-history-usd17b-guidance-would-exceed-intels-projections) | 571 | 588 (+17) |
| [Starfall](https://www.spacex.com/starfall) | 265 | 281 (+16) |
| [Co-op restored in DOS Wing Commander](https://fireflyk64.github.io/wcmulti/) | 244 | 254 (+10) |
| [Guerrilla bike lanes (2016)](https://99percentinvisible.org/article/guerrilla-bike-lanes-san-francisco-makes-illicit-infrastructure-permanent/) | 335 | 344 (+9) |
| [Ripple-65B Preview](https://www.ricursive.com/ripple) | 329 | 338 (+9) |
| [Nvidia RTX Spark firmware](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop) | 607 | 614 (+7) |
| [A new Go API for JSON](https://go.dev/blog/jsonv2) | 384 | 391 (+7) |
| [Images 2.6](https://openai.com/index/introducing-images-2-6/) | 376 | 383 (+7) |
| [Stringman](https://neufangled.com/) | 833 | 839 (+6) |
| [Insects don't swarm at LED lights](https://www.birdsoutsidemywindow.org/2026/11/03/insects-dont-swarm-at-led-lights/) | 304 | 310 (+6) |
| [Conductor is joining Meta](https://www.conductor.build/announcement) | 209 | 214 (+5) |
| [The Astra rebuttal](https://honnibal.dev/blog/astra-read-write-misleading) | 1,034 | 1,038 (+4) |
| [Jelly Sheet](https://mrdoob.github.io/codevember-2026/01/) | 462 | 466 (+4) |
| [Kitty 0.50](https://sw.kovidgoyal.net/kitty/changelog/#) | 381 | 385 (+4) |
| [Verification is not knowledge](https://blog.cosmos-institute.org/p/verification-is-not-knowledge) | 240 | 243 (+3) |
| [Progress on provable inference](https://www.anthropic.com/research/provable-inference) | 235 | 238 (+3) |
| [OpenAI to acquire Pierre](https://openai.com/index/openai-to-acquire-pierre/) | 261 | 263 (+2) |

The sshole bug is the outlier by a factor of three: 2,897 points, 897 of them since yesterday, and the top scored story on the site by 1,366 points over second place. A 257-character password that authenticates as root on musl systems is the kind of finding that keeps travelling, and the Alpine advisory in yesterday's roundup — better written than the disclosure — was what carried it into the second day. Motorola's GrapheneOS phone gained 271 to 567; the YouTube-archiving piece gained 175 to 391. Everything else in the top ten of that table is a story that has been on the page since Monday and is now adding 20–40 points a day, which is where front-page stories go to sit.

## Off the window

Eleven stories from the last week fell out of the ranked 240 without falling below 200 points. HackerBooks is at 1,863, up three from yesterday — the ranking decayed and the story did not. Qwen 3.8 27B is at 736, back-up-the-websites at 674, Fujifilm's tape bet at 536, Safari's adaptive dark mode at 512, the Pentium Pro chess engine at 492, HackerTV at 485, C++26's failed disapproval at 412, Postgres internals at 376, Nvidia's auto-ontology at 289, and OpenSSH 10.6p2 at 249 — the upstream fix for the sshole bug, sitting an order of magnitude below the bug's own writeup.

One more, listed here because it was a bullet in yesterday's post and moved more than any of them: *I wish tech companies knew more about me* — 209 → 544, a 335-point gain that took it off the ranked window entirely while its score more than doubled.

## Throughline

Three threads, and the first one is the day's real signal.

**The harness is the liability, not the model.** Claude Code leaking account emails through a User-Agent header is not a capability failure; it is plumbing that decided identifying the operator was a reasonable default and kept it there for months because nobody had measured the cost. The same shape recurs all over the page: MCP's actual value turns out to be auth and integration rather than the JSON-RPC the explainer draws; the agentic-setup thread cannot produce a single answer to "how do you sandbox this" that would survive an auditor; Window Sweaters' README now ships install instructions written for an agent to execute; ASN Bank outsources its security decision to a single SDK call it cannot inspect, and the developer in that thread admits he does the same because "Google said so" is easier to defend than an allowlist of verified boot keys. In every case the model works and the system around it is where the trust was misplaced. That is a boring conclusion and it is the correct one.

**The endings are the same ending.** Salon closes after 31 years because its publishing model stopped being sustainable. The Cybertruck winds down after roughly 20,000 units a year against a 250,000 prediction. macOS dropped x86 and the hackintosh survives — narrowly — on AI-assisted reverse engineering rather than on anyone solving the economics. The pattern underneath: things held up by an assumption (display ads, cheap truck credit, Intel's 14nm) are all finding out in the same month, and what replaces them is smaller, more specific and less defensible at a board meeting.

**Inference is getting cheap while the buildout is getting repriced.** Google cut video generation 30% in a week where a small lab shipped a $21K image model, Kagi gave away 50 searches, and Inkling promised Apache 2.0 weights next week. In the same week the Nasdaq fell 5.5% on fear that the data centres needed to serve all of it will not get built. Those are not contradictory. Per-token prices fall on a curve; capex is a lumpy, political, physical thing that only goes in one direction until it doesn't. The market is not pricing the end of AI — it is pricing the discovery that the cost curve and the buildout curve are different curves, and that only one of them is smooth.


