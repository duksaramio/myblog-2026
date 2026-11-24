---
title: "Hacker News Front Page Roundup — November 24, 2026"
pubDate: 2026-11-24
description: "Anthropic's stock breaks its IPO price, Jensen Huang's two-day round trip completes at 2,777 points, a Claude model publishes an unverified VP ≠ VNP proof, Tidal bans AI music, and New York outlaws car subscriptions."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Ninety-eight stories cleared 200 points in a full scan of all 500 ranked ids today, down from a hundred and twenty-four last night. Seventy-eight are stories already covered here. Forty-six of yesterday's dropped back under the line as the page turned over, and twenty are new — one of which is the second submission of a story already counted.

The top of the page did nothing. The Riemann proof is still first at 2,929 points after adding nine, and the rival announcement is second at 2,451 after adding one. Twenty-four hours, three and a half thousand comments, no verdict. Everything that actually moved today moved for a different reason: the biggest chip company in the world went from 1,561 to 2,777 on a board decision, Ladybird went from 955 to 2,367 on an alpha download, and a four-sentence tweet from Yann LeCun went from 521 to 1,973.

Below that, two events with real consequences. Anthropic's stock broke its $83 IPO price, and a Claude model published an alleged proof that VP is not VNP — with the paper's own README stating that no human mathematician has checked it.

## 2035 came early: Linux compiled to WebAssembly, with a GUI — 890 points

**890 points** · 334 comments · [fzakaria.com](https://fzakaria.com/2026/11/23/2035-came-early) · [HN discussion](https://news.ycombinator.com/item?id=50624497)

Farid Zakaria runs `trynix.dev`, which serves any Nix package — over 300,000 distinct package versions, per his count — from a browser tab. It worked before this week, but slowly, because the emulation layer was QEMU compiled to WebAssembly. On 20 November he saw Domen Kožar link `unkernel.dev` in a Discord channel: Linux itself compiled to WebAssembly, published by Pooya Parsa on 19 November, so only the userland programs get emulated. He swapped it in and the thing now boots a Wayland desktop with GL through WebGL2, ALSA audio, and networking via one WebSocket per TCP connection to a Wisp relay.

The speed claims come with a footnote he wrote himself: 2× to 32× faster than `qemu-wasm` depending on workload, "with a very healthy set of patches applied to make it even faster." That's honest, and it's also the part to hold onto. The benchmark numbers are first-run wall clock on his own page, not a neutral suite.

The reason this is the top new story is not the benchmark. It's that Gary Bernhardt's 2014 talk drew a timeline where JavaScript eats everything by 2035, with the punchline being GIMP running under Wine inside a browser inside a browser. Zakaria did the bit: Firefox on Linux-in-WebAssembly, in a Firefox tab, loading trynix.dev, then loading Firefox again inside itself. His own footnote on that: "Do not be too overjoyed. It took more than an hour for this to render."

The best comment is the one that isn't celebrating. Someone who has spent over a hundred hours building a competing arm64 version says he released early and then lost the will to continue: "it is in line with the motivation I had for mine, which was to see if LLMs could help." That's the actual state of this genre of project — one person with an agent can now ship something that would have been a funded systems project, and the person next to them can be scooped in a week with nothing to show for it.

## LLM agents work for their parent companies, not for you — 792 points

**792 points** · 336 comments · [michaelharley.net](https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/) · [HN discussion](https://news.ycombinator.com/item?id=50627340)

Michael Harley built a Claude Code skill that takes an Instagram reel, identifies the song, finds the artist's Bandcamp page, and gives him a link to buy it. Bandcamp added a challenge to its search endpoint. The model then explained that it would not help him work around it — while a different branch of the same skill would happily download the same song from YouTube, which pays the artist nothing.

He's right about the shape of the problem and wrong about the example. The refusal he's angry about is the correct behaviour: Bandcamp put up a bot challenge because agents were crawling it, and a model that ignores site operators on its user's behalf produces exactly the internet the rest of the thread is worried about. Several commenters make this point, one bluntly: "F you Anthropic for daring to train your models to respect the wishes of site operators?" Another describes getting refused on scraping McMaster-Carr's 3D models and going through the API-approval process instead. That's the system working.

The structural argument underneath survives the bad example. An agent's policy is set by the vendor, the vendor's obligations run to shareholders and governments, and those obligations are invisible in the UI. If a model can be told not to circumvent a challenge, it can be told what to say about a product category — and the author's fear that recommendations get weighted isn't exotic, it's the obvious next business model. The most useful comment proposes the legal fix rather than the technical one: treat an LLM as an advisor with a duty of loyalty to its client, the way lawyers and financial advisers are, and forbid it from representing itself as acting for someone who isn't its client.

The one thing the thread mostly gets wrong is the local-model conclusion. Harley says he wants a local model so his robot works for him, and then admits he doesn't know what "open models" means. Open weights give you a checkpoint; they don't give you the RLHF, the system prompt, or the tool policy — and those are where all of this lives.

## New York bans car subscription fees, with exemptions that matter — 746 points

**746 points** · 390 comments · [governor.ny.gov](https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription) · [HN discussion](https://news.ycombinator.com/item?id=50622774)

Hochul signed S.9348A/A.10411A on 23 November. It prohibits manufacturers, dealers and third-party providers from charging post-purchase or recurring fees for any vehicle feature that relies on hardware already installed and that costs the maker nothing ongoing. Effective 27 February 2027, enforced by the Attorney General. Heated seats, remote start, and extra ambient lighting behind a paywall are the targets.

The exemptions are where the law actually lives, and one commenter did the work of pulling them from the bill text: navigation updates, infotainment, satellite radio, in-vehicle Wi-Fi, telematics, roadside assistance, "software-dependent driver assistance or driver automation features," and any vehicle-connected service that needs a cellular connection to keep working. So Tesla's Premium Connectivity and FSD subscription survive, SiriusXM survives, and OnStar survives. What dies is the German-style model of selling hardware you already own back to you.

That's a defensible line, and it's narrower than the headline. It also means the law's future is mostly about what counts as "ongoing cost" — a phrase a manufacturer's lawyers can argue about for years, with one Attorney General's office as the only enforcement mechanism.

The press release is worth reading as a document rather than a policy. It opens with "New Yorkers are already struggling with rising prices due to Trump's affordability crisis," then lists the Governor's other cost-of-living wins, then quotes the AG and two legislators. Commenters spent the thread arguing about whether $500 for a map update on a 2015 Acura is the same crime as a heated-seat subscription. It isn't, but it's the same business model, and the bill doesn't touch it.

## Stalwart becomes a drop-in Exchange replacement — 679 points

**679 points** · 336 comments · [stalw.art](https://stalw.art/blog/microsoft-exchange-replacement/) · [HN discussion](https://news.ycombinator.com/item?id=50620349)

Stalwart 1.2.0 implements MAPI over HTTP, Exchange Web Services, Exchange ActiveSync and Autodiscover, so Outlook, Apple Mail and phone mail apps connect to it the way they connect to Exchange — mail, calendar, contacts, tasks and notes in one account, Autodiscover doing the configuration. It's in the AGPL community edition, not behind the enterprise tier. This is the server Mozilla's Thundermail runs on.

The strategic read is in the post's own setup. Exchange 2016 and 2019 went out of support on 14 October 2025. The paid Extended Security Update programme reportedly ended in October 2026 with no extension. Exchange Server Subscription Edition is the only supported on-premises option, gets no cloud features, and its first cumulative update has slipped. Microsoft never announced the end of on-premises Exchange; it just made every remaining road lead to Exchange Online. Stalwart is selling the exit.

Three problems the thread finds, and they're all real. First, the client side: a commenter quotes the post's own note that the new Outlook sends the IMAP server name, username and password to Microsoft, and reacts with "This is… incredible." A drop-in server doesn't fix a client that phones home. Second, the logical hole another commenter spots — if Outlook is dropping on-premises Exchange support in favour of cloud-only, who is the "drop-in replacement" for? The answer is everyone who moves to Thunderbird or Apple Mail or a phone client, but the post doesn't say that. Third, German freelancers and companies need GoBD-compliant, undeletable, ten-year mail archiving for tax authorities, and commenters say that isn't in the standard or open-source plans.

The most interesting objection is philosophical: implementing MAPI and EWS keeps the Microsoft protocol stack alive and entrenches the thing you're trying to escape. Supporting the protocols buys time and saves licence money. It doesn't build a commons.

## VP ≠ VNP over every field, and no human has checked the proof — 356 points

**356 points** · 325 comments · [github.com/anthropics](https://github.com/anthropics/formal-math/tree/main/vp-vnp) · [HN discussion](https://news.ycombinator.com/item?id=50620102)

Anthropic published a paper and a Lean 4 formalization showing that for every field, circuits for the Hamiltonian cycle polynomial — and, outside characteristic 2, the permanent — need more than m^(c(log m)^(1/3)) gates for large m, and the same holds for approximating circuits. So VP is a proper subset of VNP, and VNP is not contained in the closure of VP. It does not settle P versus NP, and the README says so in the second paragraph.

Read the README's own disclaimers, because they're the story. "The result was discovered by an internal research Claude model. This folder holds the paper and its Lean 4 formalization. Both were written by AI models, and no human mathematician has checked the proof. Research artifact. Not maintained and not accepting contributions." There's a second, independently written kernel in the CI, plus a Comparator script that re-checks the statements against a `Challenge.lean` so the formalization can't quietly prove a weaker theorem than the paper claims.

What Lean buys you here is real and narrow: it confirms the proofs follow from the statements. It does not confirm the statements are the right ones, and the README says that too — "no machine checks that this file says what is claimed." That's a more honest epistemic position than most human-authored preprints take.

The objection that matters is in the paper, and a commenter found it: "We have not analysed how it relates to relativization and algebrization." Those are the two barriers that have killed every prior attempt at separating complexity classes, and not addressing them is not a footnote in this field — it's the whole game. Either the proof routes around them in a way the abstract doesn't explain, or something is wrong. Nobody in the thread claims to know which.

The mood is the interesting part. One commenter: "It's pretty obvious that they are throwing the kitchen sink at the Holy Grail (P vs NP), and that this was a partial result they judged to be worth publishing along the way." Another, a grad student by implication: "Any problem that you could pick to work on will be solved (or solvable by Claude) in another year with a single prompt." That second one is wrong — a formalization nobody has read is not a solved problem — but it's the correct emotional read of the week.

## Tidal bans wholly AI-generated music — 305 points

**305 points** · 276 comments · [variety.com](https://variety.com/2026/music/news/tidal-bans-ai-generated-music-1236956924/) · [HN discussion](https://news.ycombinator.com/item?id=50630309)

Tidal will start removing tracks it believes are entirely AI-generated on 9 December, with the catalogue clean by the start of next year. Robert Andersen, who leads Tidal at Block, gave the numbers on X: 43% of tracks distributed to Tidal in the last 90 days were detected as AI-generated, 96% of AI-generated tracks receive zero plays, the purge will remove about 29 million tracks, and Tidal will reject 80,000 to 85,000 uploads a day going forward.

The 43% figure is doing enormous work in that announcement and deserves scrutiny. It's a share of *distributed* tracks, not of listening, and it's a detection rate, not a prevalence measurement — Tidal is telling you how confident its classifier is, and classifiers of this kind produce false positives at exactly the boundary where the interesting music lives. Nobody publishing an AI-detection number publishes its error rate. The honest justification in the post is the one about plays: almost all of it is unlistened. This is catalogue hygiene and bandwidth, framed as artistic principle.

Everything else is consistent with a platform making a marketing bet. Spotify removed 75 million tracks from its catalogue and 50 million from recommendations this year and is labelling "AI Personas" instead of banning them. Apple Music is labelling. Tidal, the smallest of the three and owned by a company that also owns Square and Afterpay, is the one going for the ban, which costs it least and differentiates it most.

The thread's objection is the one no policy can answer: the line between an AI-generated track and a track made with a sampler, a synth preset pack, or an AI-assisted mastering chain is not a line, and it moves every year. One commenter who makes AI music as a hobby predicts the ban will look incoherent by 2028 as the tools dissolve into normal production. Another points at a Spotify track with 200 million plays that is an AI cover with an AI vocalist. The ban addresses the visible end of a spectrum whose middle is already gone.

## Someone posted a GTA 6 Xbox build, and a thousand people are recompiling it — 304 points

**304 points** · 326 comments · [reddit.com](https://www.reddit.com/r/GamingLeaksAndRumours/comments/1y3jzqe/cyberleek_posted_the_gta_6_xbox_build_executable/) · [HN discussion](https://news.ycombinator.com/item?id=50612686)

The Reddit post itself returned six bytes to every extractor I tried, so this comes from the thread. A user called Cyberleek published an Xbox build executable for GTA 6. That single file changed the shape of an entire modding effort overnight: the community had been betting on a vulnerable PS5 firmware to dump the game and then translate it with something like Kyty, and with a native Xbox build in hand the work shifted to recompiling Xbox shaders and translating Xbox calls to standard PC ones.

The Leonida project on GitHub is doing it in public, and the throughput numbers in the thread are the actual story: five to six pull requests a minute, over a thousand people coordinating, tasks claimed through GitHub issues, "already close to booting the game just a few hours after" the build surfaced. One commenter calls it "seizing the means of computation by the gaming community." Yesterday's roundup already had the follow-on: Rockstar's takedown, and the project's lead dev finding out while he was in school. That story is in the table below at 311 points, up 78.

Two things to be sceptical of. A recompilation that boots is not a game that runs — shader translation and timing-sensitive code are where these projects die, and "close to booting" is a claim made hours in. And the legal exposure doesn't attach to the leaker. It attaches to whatever platform hosts the coordination, which is why the takedown came fast. A commenter asks whether Rockstar has a case against the model providers rather than the kids; the answer is that the providers have indemnity terms precisely for this, and nobody is going to test them over a GTA recomp.

## Quad9 switches off in France — 280 points

**280 points** · 148 comments · [quad9.net](https://quad9.net/news/blog/quad9-service-deactivation-in-france/) · [HN discussion](https://news.ycombinator.com/item?id=50625384)

At 09:00 Paris time today, Quad9 stopped answering queries from French users entirely. Not filtered — refused. A commenter pasted a `dig` against 9.9.9.9 from France showing `status: REFUSED` with extended DNS error 18, "Service unavailable due to French legal constraints," and others reported their AdGuard and router setups going dark with no explanation.

The chain: beIn, a sports rightsholder, demanded that Quad9 block domains it claims are piracy streaming sites. French courts upheld the demand. Quad9 was fined for non-compliance. Quad9's position is that this is not a piracy question but a chokepoint question — recursive DNS providers have no monopoly, anyone can stand up a resolver in seconds, and forcing a resolver to filter doesn't touch the origin servers. The courts, in Quad9's account, didn't engage with that argument at all.

The awkward part Quad9 addresses head-on in the post: it doesn't log users, so how does it block French users? GeoIP. Which is the same mechanism it has spent years arguing is insufficient for selectively denying resolution of individual names. The difference is granularity — refusing a whole country by IP is crude enough to work, blocking specific domains for specific users is not.

This is the third HN thread on the same story: 1,382 points a month ago when the withdrawal was announced, 911 last week for Cloudflare's write-up, and 279 for the actual switch-off. That decay curve is normal and also the point — the announcement got the outrage, the deactivation got a footnote, and the thing that actually happened is the one nobody argued about.

## Who in Washington owns and trades Nvidia stock — 276 points

**276 points** · 159 comments · [kadoa.com](https://www.kadoa.com/congress/insights/trump-nvidia) · [HN discussion](https://news.ycombinator.com/item?id=50626861)

Kadoa built a tracker of every disclosed Nvidia trade by Trump and 37 members of Congress, plotted against Nvidia's daily close. The headline numbers: 28 purchases totalling $5.1M to $16.7M in 2026 and 15 sales totalling $4.4M to $12M. Nvidia fell 48% from its October high to 20 November, through Huang's resignation and quarterly results, then rose 33% on 23 November when the board reinstated him citing input from senior levels of the US government.

Then the caveat that guts it, and the site states it plainly: Trump's latest disclosure, released 19 November, covers trades only through 24 September. The chart has a marker reading "Huang out — May not be reported yet." Which means the one period anyone actually wants to see — the resignation and reinstatement window — is invisible for up to another month and a half. Members of Congress have 45 days to report, and a commenter notes there's effectively no consequence for missing it.

So what you can say today is that a large number of people with votes on chip policy and export controls trade the largest chip company weekly, in disclosed ranges wide enough ($1,001–$15,000 on one line, $1,000,001–$5,000,000 on another) to hide almost any actual position. What you can't say is that anyone traded on the reinstatement.

The thread's split is familiar: half of it treats the chart as proof of a coordinated scheme, half points out that the disclosures are stale by design and the ranges are useless. Both are right. The disclosure regime is calibrated to produce the appearance of transparency without the substance, which is the one outcome that satisfies everyone who wrote it.

## Anthropic breaks below its $83 IPO price — 235 points

**235 points** · 494 comments · [bloomberg.com](https://www.bloomberg.com/news/articles/2026-11-24/anthropic-breaks-below-83-ipo-price-in-premarket-trading) · [HN discussion](https://news.ycombinator.com/item?id=50627836)

Bloomberg's report was paywalled and returned 403 to every extractor, but the wire text is in the search index and Reuters has the same numbers. Anthropic priced at $83, opened at $111.50 on 19 November, and traded as low as $81.28 premarket on Tuesday before recovering — one week and a third straight down session from the record debut. Reuters puts the drawdown at 12.6%, to $76.60, and roughly $200 billion of market value erased.

The mechanism that matters is the greenshoe. The IPO was multiple times oversubscribed — over $500 billion of demand against a $119.5 billion raise, about 1,200 institutional investors placing orders, and more than half of them allocated nothing. Underwriters defend the offer price for a period by buying stock with the over-allotment; TradingKey's read is that those funds were exhausted by the third session, which is when $83 stopped holding. The float is tiny relative to the demand, which means both the pop and the collapse were about allocation mechanics rather than anyone's view of the business.

The comparison everyone reaches for is SpaceX, which ran 67% above its IPO price before falling below it in under five weeks. That's the base rate: a big, hyped, low-float listing going under the offer price within a month is not unusual and doesn't forecast anything. A commenter makes the sober version of the point — poor early performance has little bearing on where a stock sits at one, two and three years.

The thread's mood is closer to the opposite. "It's possible for AI to be a transformative technology, for there to be trillions of profit to be had, for Anthropic to be the leading frontier research lab and for their stock to be a terrible investment." That's the whole debate in one sentence, and 492 comments on 234 points means the argument is running hotter than the story.

## An active intrusion campaign against Check Point management servers — 219 points

**219 points** · 84 comments · [greynoise.io](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) · [HN discussion](https://news.ycombinator.com/item?id=50630594)

GreyNoise tracked attacks on Check Point Security Management Servers between 17 October and 2 November 2026, confirmed against at least 22 organisations across the UK, Ireland, France, the Netherlands, Greece, Germany, Austria, Bulgaria, Poland, India and Thailand — no obvious sector or geography pattern. It's tracking the activity as GreyNoise Threat 13, covering the infrastructure, tooling and post-exploitation behaviour rather than a single vulnerability.

The technical detail worth reading is in the thread, quoted from the write-up: against an HFS server, each POST to the `loginSrp1` endpoint returned a signed session cookie whose `sid` value came from JavaScript's `Math.random()`. Collect enough successive logins, reconstruct the internal state of V8's PRNG, recover the cookie-signing key, and forge an admin session cookie. That is not a Check Point bug — it's an application using a non-cryptographic PRNG for a security token, and it's the kind of thing that shows up in every incident report for the next decade.

Two open questions the write-up doesn't settle, and commenters ask both. Initial access: the correlation across multiple Check Point customers points at CVE-2026-16232, but if that's the vector, all 22 victims had management servers reachable from the internet — which is the real finding, and it's a configuration failure that no vendor can patch. Attribution: there isn't any, beyond tooling and infrastructure.

The most defensible comment is the boring one. Whether or not these particular actors used models, the marginal cost of finding and chaining this class of bug has dropped, and the population able to attempt it has grown by orders of magnitude. The interesting question is no longer who is attacking but how many.

## Also new, below the sections

- **[GPUI is getting its own repository](https://github.com/zed-industries/gpui)** ([374 points](https://news.ycombinator.com/item?id=50619103), 137 comments) — Zed's Rust UI framework moves out of the editor repo. The README at the moment is two links and the sentence "See you in a few weeks." A commenter's summary of the docs situation: "No screenshots on web site, docs, or repo."
- **[Bored.com](https://www.bored.com/)** ([325 points](https://news.ycombinator.com/item?id=50619207), 65 comments) — a 1990s "cool websites" directory that still exists, now with an arcade and a games catalogue, getting a quarter of the front page from people who remember it. The site's own trivia rotator: "In Switzerland it is illegal to keep a guinea pig on its own."
- **[Win4wine](https://github.com/mikuta0407/win4wine)** ([248 points](https://news.ycombinator.com/item?id=50610743), 128 comments) — runs Windows XP's actual `explorer.exe` as the Linux desktop shell on a patched Wine, with Linux apps wearing XP frames and XP's tray hosting Linux status icons. No Microsoft files bundled; you supply your own XP ISO, or it fetches the ReactOS shell instead. LGPL-2.1, 346 stars, explicitly experimental and only tested on a fresh Debian 13. Commenters immediately ask for the reverse: the NT kernel with Linux's userland.
- **[The Spray Bottle](https://mechanical-pencil.com/products/spray-bottle)** ([244 points](https://news.ycombinator.com/item?id=50598555), 71 comments) — an illustrated, interactive teardown of the trigger sprayer, part by part, including the one-way valve that makes the whole thing work. Gorgeous and, per one commenter who clearly knows the mechanism, wrong in one place: the piston chamber doesn't empty after a push, because nothing drives air into it.
- **[India's opposition storms Meta's offices over blocked Instagram accounts](https://korben.info/en/india-opposition-storms-meta-offices-instagram-accounts.html)** ([227 points](https://news.ycombinator.com/item?id=50624487), 106 comments) — Indian Youth Congress activists occupied Meta's Hyderabad office on Friday after Instagram blocked the accounts of the wing's president and its social media chief on 19 November; protests followed in Mumbai and Gurugram, two accounts were restored the next day, and the group has given Meta seven days. Meta restricted over 5.4 million posts or accounts in India in the first half of 2026, against roughly 70,000 for all of 2025, while the government issued nearly 200,000 blocking orders between March and July and cut the takedown deadline from 36 hours to three. A commenter who watched the video says "stormed" overstates what happened — it was a small protest outside. The Verge has the original reporting.
- **[Jetty Pro](https://hypercritical.co/2026/11/23/jetty-pro)** ([214 points](https://news.ycombinator.com/item?id=50630462), 84 comments) — John Siracusa's folder palette for the Mac, the last feature he missed from DragThing, vibe-coded over three and a half months after assuming it would take a day or two. It's a subscription. The top comment proposes the obvious compromise: let people keep the version that worked when their subscription lapsed.
- **[AMD EPYC Zen 6 vs. Zen 1: 12.1× geomean in under ten years](https://www.phoronix.com/review/amd-epyc-9006-7601)** ([212 points](https://news.ycombinator.com/item?id=50624061), 115 comments) — a 2P Zen 1 Naples box (64 cores, 128 threads) against a 2P Zen 6 Venice box (192 cores, 384 threads). A commenter does the decomposition the headline doesn't: core count alone accounts for about 3× of the 12.1×, so roughly 4× came from architecture — AVX-512, cache, clocks. Performance per watt rose about 5×. Price didn't fall: $5,783 for the 2017 flagship, $14,904 for the 2026 one.
- **[An agent swarm attacking P vs. NP, live](https://pequalnp.com/)** ([206 points](https://news.ycombinator.com/item?id=50604314), 172 comments) — a coordinated fleet of agents working the problem in public, with a leaderboard, a live viewer, a "graveyard" of refuted approaches, and a sponsorship wall that currently reads "No sponsors yet." As of writing, nothing is on the record: no lemma checked, no claim refuted. The best criticism in the thread is that the big recent results came from unreleased models steered by working mathematicians who narrowed the search space with real domain knowledge — neither of which this has.
- **[Worshipping at the altar of Brendan Gregg](https://fzakaria.com/2026/11/12/worshipping-at-the-altar-of-brendan-gregg)** ([201 points](https://news.ycombinator.com/item?id=50626413), 35 comments) — Zakaria adds a `rewind time` command to his deterministic VM that reports the critical path rather than a CPU profile. The demo: a libuv build and test run takes 78 seconds on one virtual CPU and still takes 47.4 seconds with 64 cores, because two-thirds of that time the work is asleep in `epoll_pwait` and `clock_nanosleep`. A commenter notes that the investigation ends in a footnote — the test sleeps on purpose — and that the whole thing is single-threaded, which limits what it can say about real pipelines.

## Still on the page

Seventy-eight stories carried over. The three biggest moves are all second-day acceleration rather than new information: LeCun's accusation of Dario Amodei went 521 → 1,973 (+1,452), Ladybird's alpha went 955 → 2,367 (+1,412), and Nvidia's reinstatement went 1,561 → 2,777 (+1,216) on 3,656 comments. Arm's takedown of a one-person documentation site more than doubled, 505 → 1,154, as people noticed the docs were BSD-licensed.

| Story | Last | Nov 24 |
|---|---|---|
| [Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]](https://alpo.ge/remark.pdf) | 2,920 (11-23) | 2,929 (+9) |
| [Nvidia Reinstates Jensen Huang as CEO](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) | 1,561 (11-23) | 2,777 (+1,216) |
| [Hurried Announcement: Alessandro Masullo GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) | 2,450 (11-23) | 2,451 (+1) |
| [Ladybird is now in alpha](https://ladybird.org/posts/alpha/) | 955 (11-23) | 2,367 (+1,412) |
| ["Dario is hyping the dangers so OSS models are illegal and he stays in control"](https://twitter.com/ylecun/status/2124550037912920090) | 521 (11-23) | 1,973 (+1,452) |
| [Inkling 2 Mini](https://thinkingmachines.ai/news/inkling-2-mini/) | 1,473 (11-23) | 1,482 (+9) |
| [Pill to treat pancreatic cancer hailed as 'biggest breakthrough in decades'](https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib) | 1,379 (11-23) | 1,394 (+15) |
| [Toyota, Nissan, and Honda to standardize parts to lower costs](https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/) | 1,369 (11-23) | 1,392 (+23) |
| [Lean verification of the Riemann Hypothesis](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) | 1,237 (11-23) | 1,246 (+9) |
| [GLM-5.4: Toward generalized coding with our first loop transformer](https://z.ai/blog/glm-5.4) | 942 (11-23) | 1,160 (+218) |
| [Per Arm's request, this site will be discontinued on 4 December 2026 :(](https://arm.jonpalmisc.com/) | 505 (11-23) | 1,154 (+649) |
| [Anthropic's Nasdaq debut](https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/) | 1,144 (11-23) | 1,146 (+2) |
| [Free alternative TV network built from the Internet Archive's forgotten videos](https://spelunkr.tv) | 882 (11-23) | 1,063 (+181) |
| [87% of the Anthropic power will come from gas and 11% from coal in 2028](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/) | 1,021 (11-23) | 1,036 (+15) |
| [Pancreatic cancer halted by virus injection in three patients](https://www.newscientist.com/article/2528235-pancreatic-cancer-halted-by-virus-injection-in-three-patients/) | 889 (11-23) | 892 (+3) |
| [I'll never buy Framework hardware again](https://poolp.org/posts/2026-11-20/ill-never-buy-framework-hardware-again/) | 834 (11-23) | 836 (+2) |
| [What Happened to Silicon Valley?](https://www.oreilly.com/radar/what-happened-to-silicon-valley/) | 788 (11-23) | 820 (+32) |
| [Slopstrap – Make your site look hastily vibecoded](https://slopstrap.mikelacher.com/) | 801 (11-23) | 810 (+9) |
| [A Beginner's Guide to Local AI with Inkling, Qwen, and Unsloth](https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth) | 720 (11-23) | 769 (+49) |
| [Ask HN: I have been unemployed for 2y. 15 years of experience, US. What to do?](https://news.ycombinator.com/item?id=50583761) | 738 (11-23) | 751 (+13) |
| [If you can't explain something in simple terms, you don't understand it (2017)](https://kottke.org/17/06/if-you-cant-explain-something-in-simple-terms-you-dont-understand-it) | 717 (11-23) | 723 (+6) |
| [Detonating a pile of lead azide](https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really) | 713 (11-23) | 717 (+4) |
| [Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence/) | 686 (11-23) | 715 (+29) |
| [My monitor was cutting my download speed by 75%](https://blog.tymscar.com/posts/studiodisplayethernet/) | 693 (11-23) | 698 (+5) |
| [Frostbite: A new CPU architecture discovered, designed and verified by AI](https://architectlabs.com/blog/frostbite) | 683 (11-23) | 686 (+3) |
| [The Birds of GTA 6: A Field Guide to Vice City and Leonida's Wildlife](https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife) | 627 (11-23) | 638 (+11) |
| [We promoted developers into architects without informing them](https://manidoraisamy.com/developer-to-architect.html) | 618 (11-23) | 624 (+6) |
| [XNU Linux: Full OS X GUI Userspace on Linux](https://github.com/AFK-surf/xnulinux) | 572 (11-23) | 619 (+47) |
| [Sandwich Simulator](https://stulle.app/) | 607 (11-23) | 614 (+7) |
| [Apple removed my open-source app from EU App Stores after 9 years](https://github.com/glushchenko/fsnotes/discussions/2056) | 298 (11-23) | 611 (+313) |
| [Inkling-2-Mini in 5.4 GB Memory](https://github.com/ShinMegamiBoson/lookatmyquant) | 595 (11-23) | 598 (+3) |
| [Why there are still no non-WebKit browsers on iOS](https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/) | 593 (11-23) | 597 (+4) |
| [Restricting AI agents in mobile operating systems platforms from capturing data](https://signal.org/blog/protecting-your-privacy/) | 581 (11-23) | 583 (+2) |
| [Claude solves two open problems in the physics of black holes](https://www.anthropic.com/research/claude-black-hole-physics) | 579 (11-23) | 579 (+0) |
| [Carnival Cruises emits ten times more sulphur oxide than all of Europe's cars (2019)](https://ecohustler.com/article/one-corporation-to-pollute-them-all/) | 561 (11-23) | 563 (+2) |
| [Unforced Navier-Stokes Singularity and the Generalized Riemann Hypothesis](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) | 550 (11-23) | 550 (+0) |
| [Nasdaq erases all 2026 gains as AI sell-off dampens Anthropic's second day](https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off) | 530 (11-23) | 530 (+0) |
| [Google is pushing OEMs against GrapheneOS and bootloader unlocking](https://grapheneos.social/@GrapheneOS/117645038299496084) | 508 (11-23) | 511 (+3) |
| [Language Models Can Rewrite Their Own Weights](https://arxiv.org/abs/2611.21885) | 493 (11-23) | 494 (+1) |
| [Kagi Mail (public beta)](https://blog.kagi.com/kagi-mail-public-beta) | 233 (11-23) | 453 (+220) |
| ["I can tell you wrote this yourself"](https://em-online.bearblog.dev/i-can-tell-you-wrote-this-yourself/) | 430 (11-23) | 431 (+1) |
| [Getting the mind to steer the body to steer you](https://notnottalmud.substack.com/p/getting-the-mind-to-steer-the-body) | 410 (11-23) | 413 (+3) |
| [If you stop writing code, you also get worse at reviewing it](https://cekrem.github.io/posts/if-you-stop-writing-code-you-also-get-worse-at-reviewing-it/) | 402 (11-23) | 404 (+2) |
| [PostgreSQL 19](https://www.postgresql.org/docs/release/19.0/) | 399 (11-23) | 399 (+0) |
| [NINLIVE: The Nine Inch Nails live archive](https://ninlive.com/) | 382 (11-23) | 384 (+2) |
| [A miniature San Francisco with live buses, planes and boats](https://smallsf.com/) | 367 (11-23) | 376 (+9) |
| [OpenSSL: Buffer overflow in EVP_EncodeBlock() (CVE-2026-121481, CVSS 9.8)](https://github.com/openssl/openssl/pull/33652) | 376 (11-23) | 376 (+0) |
| [Gemini 4 Neon is the new #1 on the Models Engineering Index](https://git-aarvin.github.io/mei/) | 372 (11-21) | 376 (+4) |
| [The stochastic parrots have apparently proved the Riemann Hypothesis](https://scottaaronson.blog/?p=10344) | 359 (11-23) | 363 (+4) |
| [Spacecraft reaches Mercury on second-ever mission to enter its orbit](https://www.theguardian.com/science/2026/nov/20/spacecraft-mercury-second-ever-mission-orbit-bepicolombo) | 234 (11-23) | 362 (+128) |
| [Show HN: I built a game where you are an LLM's subagent](https://github.com/gulivan/worker755) | 356 (11-23) | 360 (+4) |
| [The 98% Slot Machine: How Paid Advertising Became an Extraction Tax](https://globalcommercegraph.com/writing/the-ninety-eight-percent-slot-machine) | 343 (11-23) | 344 (+1) |
| [Nespresso's project to reduce grams of coffee per capsule](https://alvinbunk.wordpress.com/2026/11/01/nespresso-project-olympus/) | 208 (11-23) | 342 (+134) |
| [Finite-time blow-up for the Navier–Stokes equations](https://github.com/tristanbuckmaster/navier-stokes/) | 325 (11-23) | 326 (+1) |
| [Nospeaker ─ Make your MacBook's trackpad talk using its haptic motor](https://github.com/os6/nospeaker) | 235 (11-23) | 323 (+88) |
| [Assume People Are Not Interested in Your Blog Post](https://danielsada.tech/blog/assume-people-are-not-interested-in-your-blog-post/) | 311 (11-23) | 318 (+7) |
| [FFmpeg 9.1 'Gauss'](https://ffmpeg.org/download.html#release_9.1) | 315 (11-23) | 316 (+1) |
| [Masullo on the Riemann Hypothesis](https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/) | 302 (11-23) | 312 (+10) |
| [GTA 6 Recomp (Leonida) banned from GitHub while lead dev was in school](https://github.com/ItsNotRexed/Leonida/issues) | 233 (11-23) | 311 (+78) |
| [US SEC's Nvidia probe is examining potential accounting issues – sources](https://www.marketscreener.com/news/us-sec-s-nvidia-probe-is-examining-potential-accounting-issues-sources-say-ce785ed3dd8ff627) | 307 (11-23) | 308 (+1) |
| [Data Processing Incidents on Inference Providers](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) | 293 (11-23) | 294 (+1) |
| [DreamCoder: Coding harness and IDE from the author of Mastering Emacs](https://www.masteringemacs.org/article/announcing-dreamcoder) | 286 (11-23) | 289 (+3) |
| [Google workers tell their employer not to punish schools that don't want AI](https://www.motherjones.com/politics/2026/11/google-alphabet-union-school-ai-protest-gemini-workers-petition/) | 284 (11-23) | 284 (+0) |
| [Yes, 17M lines of Lean is a lot](https://micjm.com/blog/yes-17m-lines-of-lean-is-a-lot/) | 248 (11-23) | 272 (+24) |
| [GL.iNet Security Notice 2026-11-20](https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20) | 265 (11-23) | 271 (+6) |
| [GnuPG Security Advisory for GPGME](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html) | 265 (11-23) | 265 (+0) |
| [Advice for the next 100 Rust GUIs](https://linebender.org/blog/next-100-guis/) | 261 (11-23) | 264 (+3) |
| [Progress map for the Lean formalization of Alessandro Masullo's manuscript](https://claude.ai/artifact/CtQyX8qfYAF822bgHJHHE3) | 255 (11-23) | 260 (+5) |
| [The next circle of security hell](https://blogs.gentoo.org/mgorny/2026/10/27/the-next-circle-of-security-hell/) | 212 (11-23) | 259 (+47) |
| [Backblaze Notice at Collection and Privacy Policy](https://www.backblaze.com/company/policy/privacy) | 254 (11-23) | 255 (+1) |
| [Open Social Web Alliance](https://osw-alliance.net/en/) | 252 (11-23) | 254 (+2) |
| [Leonida – PC Recompilation of the Xbox Version of GTA 6](https://github.com/ItsNotRexed/Leonida) | 233 (11-23) | 254 (+21) |
| [The Making of Oxygene](https://jeanmicheljarre.com/aaa/the-making-of-oxygene) | 231 (11-23) | 232 (+1) |
| [DeFlock Amerca Facebook Group Suspended as a Dangerous Organization](https://www.facebook.com/shugvermonte/posts/the-deflock-america-group-with-over-840k-members-has-been-suspended-by-meta-what/10165140280736049/) | 205 (11-23) | 221 (+16) |
| [Re: Riemann](https://borretti.me/article/re-riemann) | 219 (11-23) | 219 (+0) |
| [Fast-Anything: Don't rewrite it in Rust. Rewrite the 5% that's slow](https://github.com/EL4CTEO/fast-anything) | 206 (11-23) | 211 (+5) |
| [Jujutsu Primer](https://ethanlowman.com/posts/jj-primer/) | 210 (11-23) | 210 (+0) |
| [Clojure will affect the way you think about programming (2017)](https://eli.thegreenplace.net/2017/clojure-the-perfect-language-to-expand-your-brain/) | 209 (11-23) | 209 (+0) |

## Throughline

Three threads, and the first one is about who actually decides.

Nvidia's board fired its CEO, then reinstated him eleven days later in a press release that names the United States government as an input to the decision, while its independent investigation and an SEC probe remain open. Anthropic's stock fell below its offer price the moment the underwriters stopped buying it, which is a decision made by an allocation schedule rather than by anybody's judgement about the company. India's Youth Congress kicked a door in and got two accounts back, while 200,000 government blocking orders and 5.4 million Meta enforcement actions went unremarked. French courts ordered a DNS resolver to filter domains, it refused, and it left the country. In every case the formal process exists — a charter, a prospectus, a terms of service, a statute — and in every case the outcome was set by something with more leverage than the process.

The second thread is that machine output now arrives faster than human verification, and the page is starting to price that in. Anthropic published a VP ≠ VNP proof with a Lean formalization and the sentence "no human mathematician has checked the proof" in the README, and the commenters went straight to the two barriers — relativization and algebrization — that the paper admits it hasn't analysed. Ladybird's conformance gains came from pointing agents at failing tests. Someone recompiled a leaked GTA 6 Xbox build with a thousand volunteers claiming tasks off GitHub issues at five pull requests a minute. Even the P vs NP agent fleet is real: a live swarm, a public leaderboard, and nothing on the record yet. The bottleneck has moved from producing work to knowing whether it's any good, and nobody on this front page has a working answer for the second half.

The third thread is the price of exit. New York outlawed subscriptions for hardware you already bought, and immediately exempted everything that phones home. Stalwart implements Microsoft's four protocols so you can leave Exchange, at the cost of keeping Microsoft's protocols alive. Tidal is deleting 29 million AI tracks and will reject 85,000 uploads a day, which is a catalogue-hygiene decision wearing an artistic one. Bandcamp put up a bot challenge and the agent obeyed its parent company instead of its user. O'Reilly's essay was on this page yesterday and it's still the theory: when the objective function is set to something other than the outcome you want, everyone inside the system converges on the same result, and none of them are villains.
