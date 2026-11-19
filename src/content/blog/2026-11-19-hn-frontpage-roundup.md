---
title: "Hacker News Front Page Roundup — November 19, 2026"
pubDate: 2026-11-19
description: "Anthropic raises $81.3 billion, opens 34% above its IPO price and gives back 13% in half an hour. Google ships a fourth Gemini 4, Ruby gets a one-byte heap overflow in upcase, and OpenJDK had the Base64 bug filed in September and closed the pull request."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

A hundred and fifty stories cleared 200 points in a full scan of the ranked list today, and thirty-three of them were not covered here in the last four nights. The other hundred and seventeen are in the table at the bottom, with the date their last reported score comes from.

Today was the day the AI business had to show its arithmetic in public. Anthropic priced at $83, opened at $111.50, and lost 13% inside half an hour while the Dow fell 800 points. Google shipped a fourth Gemini 4 variant and priced it as a cost story. Microsoft announced seven models in one post and led with price-performance. Ruby got a pre-auth RCE from a one-byte overflow in `upcase`, and the OpenJDK Base64 bug that owned yesterday's front page turns out to have had a pull request filed in September that nobody treated as a security fix.

## Anthropic raises $81.3 billion and hands back 13% in thirty minutes — 586 points

**586 points** · 931 comments · [reuters.com](https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/) · [HN discussion](https://news.ycombinator.com/item?id=50562754)
**410 points** · 761 comments · [anthropic.com](https://www.anthropic.com/news/anthropic-prices-initial-public-offering) · [HN discussion](https://news.ycombinator.com/item?id=50553843)

The mechanics first, from Anthropic's own pricing release: 980,000,000 Class A shares at $83.00. Of those, 956,351,354 are primary and 23,648,646 are selling stockholders — Anthropic gets nothing from that slice. The underwriters have a 30-day option on another 147,000,000 shares. Trading began on the Nasdaq Global Select Market today under `ANT`, and the offering closes 20 November. 980 million times $83 is $81.34 billion raised, second only to SpaceX's $85.7 billion listing earlier this year and the largest amount any AI company has taken out of the public market.

Then the first day. Yahoo Finance's live coverage has the useful numbers: `ANT` opened at $111.50, 34% above the IPO price, drew $15 billion in the first minute, and slid to about $97 by its thirtieth minute of trading — a 13% drop from the first trade, roughly $200 billion of market value gone, on the 13.1 billion shares Yahoo counts as implied shares outstanding. By 11:06 a.m. EST it was the worst first half hour for a big US IPO since 2008 on Yahoo's review of one-minute data across 21 large listings. The broader market helped: the Dow was down 800 points intraday, the S&P and Nasdaq off about 2%.

Now the part worth being careful about, because the headlines are not describing the same number. Reuters' live blog headline says Anthropic "breaks $2 trillion valuation in market debut." That requires roughly 18 billion shares. Yahoo's $1.5 trillion opening figure is $111.50 times 13.1 billion. At $97 it is $1.27 trillion — which is where the top comment in the thread lands when it says the valuation "is down at $1.26T now" and that "a few weeks ago folks wanted $2T plus." All three numbers are arithmetically correct and they describe a company whose price fell 13% during the same half hour. When you read a valuation headline this week, check which denominator the writer used. The fully diluted count includes options, RSUs and the unusually large employee equity pool a company this age carries; the implied count Yahoo uses is a market convention. The gap between them is roughly $500 billion of "valuation" that no share traded at.

The thread is less about the price than about what the price implies. One commenter, a self-described SWE, says "the gravy train is basically over in my view." Another says it feels like "a dark day" and connects the wealth creation to housing costs in San Francisco. The one I keep thinking about: "I have a client who wants a co-investor for USD 1 million. He has an investor for USD 1 million for a Phase 1 cancer drug and is struggling." That is the actual shape of the capital market today — $81 billion absorbed by one offering in a morning, and a Phase 1 oncology trial can't clear a million.

Two things to watch, neither of which is in the pricing release. First, 23.6 million of the 980 million shares were sold by existing holders, not the company, and the greenshoe is 15% of the base deal — the standard machinery for a soft open. Second, the lockup calendar. Anthropic's employees are now holding a liquid asset that was illiquid last week, in a company whose public comps are falling. The float today is small relative to the fully diluted count, which is exactly why the first trade can be 34% above the offer and 13% below itself thirty minutes later.

## Gemini 4 Neon is the fourth Gemini 4 in a month, and the pitch is the price — 1,000 points

**1,000 points** · 751 comments · [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) · [HN discussion](https://news.ycombinator.com/item?id=50552424)

Google's model naming has stopped pretending to be a sequence. In a few weeks we have had Gemini 4 Hydrogen, Orchestrator, Carbon, Argon and now Neon, and the post ships a table of thinking levels — XL, L, M+, M, S/XS — that a commenter transcribed into ASCII because the naming alone no longer tells you the tier. Neon is positioned as the fast, cheap one: at its default high thinking level it claims a high Artificial Analysis Intelligence Index score at 32% lower cost per task than Carbon, and on the Vals index and Agent Arena it sits on the Pareto frontier at 50% to 80% below "top competing frontier models." At `xhigh` it claims its highest intelligence score at 36%+ less than competitors at their highest setting.

The benchmark list is long and specific, which is a point in its favour over the usual "state of the art" hand-wave: AutoBaxBench hard tier 76%, WebExploitBench v1.2 51.26% at half the cost of competing large models, SEC-bench Pro 90.5%, CWE-bench v2 70.7% (a 3.4% uplift over Carbon), ExploitGym at frontier level with half the tokens. Refusal rates: 1.98% of Terminal-Bench 4.0 tasks, 0% on Terminal-Bench-Science. Cheating 0.0% on Terminal-Bench 4.0 matched with Carbon, shortcuts on 2.45% of coding-evaluation tasks, 0.09% misaligned action rate, 99.2% on its own honesty eval, and 0.0% attack success against Gray Swan's indirect prompt injection benchmark with real-time safeguards at the highest thinking level.

Every one of those is Google grading Google. The two that would matter to a defender — WebExploitBench and SEC-bench Pro — are third-party benchmarks run by the company that built the model, on a harness the company chose, at a thinking level the company picked, and reported alongside a product announcement that Neon for cyber is rolling out "to trusted defenders in the coming days as part of the Fairwind Program." A model that finds and patches vulnerabilities is a security product now, sold to the people who already buy security products. That is a real market. It is also a market where "state of the art on our benchmark" is what everyone says.

The demos are the tell about what Google thinks sells. A first-person WebGL2 ski simulator of Mont Blanc and Chamonix, written from scratch, 10,200 lines of custom shaders, 120 Hz ski physics across six lines, slab avalanches, spatial audio, zero pre-made assets. Turing's 1936 study at King's College rebuilt in interactive 3D from archival photos, with a working Universal Turing Machine on the desk. A single image turned into a 100,000-cell Google Sheet by an agent swarm — no embedded images, no Apps Script, 500,000 live formulas doing edge detection, 3D depth mapping and relighting across six interactive modes. The spreadsheet demo is the one that made the thread sit up, because it is showing off constraint satisfaction rather than aesthetics: the model was told what it could not use, and it wrote half a million formulas to comply. Whether anyone wants a 100,000-cell spreadsheet is a separate question.

The commentary post that hit 249 points argues Neon is an Opus 5.5 competitor, and the comments mostly agree on the narrow claim and disagree on the feel. The most honest comment is the one that says Gemini models "just don't seem as good as Opus 5.5 despite the benchmarks" — comparable on some tasks, slightly better on others, worse as a general model. That is what the benchmark frontier looks like when it stops discriminating: the numbers converge and the difference moves into taste, harness, and how much you trust the tool with an unsupervised hour.

## We need smart people who give a shit — 758 points

**758 points** · 379 comments · [violetpixel.com](https://violetpixel.com/blog/2026-11-17-we-need-smart-people-who-give-a-shit/) · [HN discussion](https://news.ycombinator.com/item?id=50554045)

Justin Michael's argument is that complex systems work not because they are well designed but because specific people with intimate knowledge of them and a personal refusal to let them fail route around every flaw. His example is ACH, which he learned at Stripe: old, riddled with problems, encumbered with legacy baggage, and generally safe, cheap and reliable anyway, because every failure mode is patched, overridden or manually handled by someone who cares.

Then he lists last week: Microsoft 365, air traffic control, United's systems, the NSA's network, major banks, Apple. He is careful to say he has no inside information and that nobody claims these were caused by AI. Then he says the through-line is that there aren't enough people who give a shit, and that generative AI is why: to a manager, the difference between a fragile system held up by a determined expert and slop from a model is invisible, because both look like output. The model is cheaper, works longer, doesn't take sick days, and never pushes back on a bad idea.

The comments do the useful work of cutting the causal claim down to size. The best one: "We've had spectacular infrastructure outages for decades; I think that a cluster of incidents in one week doesn't establish that AI is directly responsible for declining reliability. IMO, the issue is that AI is reducing the cost of building and modifying systems much faster than it's reducing the cost of maintaining them." That is the defensible version of the thesis, and it is worse than the original, because it doesn't require anyone to be replaced. If building gets 5x cheaper and maintaining stays flat, the ratio of system to maintainer gets worse every quarter even if headcount never moves. Another commenter supplies the Hoffer quote about maintenance being the test of a society's vigour, and a third says the quiet part: "smart people who give a shit are a liability for most companies."

The garage door story further down this page is the same argument at appliance scale, and it is more convincing than the outage list, because it shows the failure mode end to end: a vendor removes the thing that worked, and the only fix is a person with a soldering-adjacent tolerance for detail rebuilding it locally.

## The long version of why DNS resolvers are the wrong chokepoint — 676 points

**676 points** · 281 comments · [techstackups.com](https://techstackups.com/articles/quad9-leaves-france-dns-blocking/) · [HN discussion](https://news.ycombinator.com/item?id=50545958)

Yesterday's roundup noted that Quad9's CTO asked the thread for a long-form, sourced argument he could take to policymakers, and that one appeared at 485 points. This is that post, now at 676, and yesterday's number is the reason it gets a section rather than a table row.

It is a 30-minute read and it does the thing the Cloudflare post didn't: it walks every claim back to a court ruling or a primary document. The facts are as reported — on 24 November Quad9 stops answering queries from France, because a Paris court fined it for refusing to block a list of pirate sports-streaming domains on behalf of beIN Sports, with around twenty similar cases pending. The argument is about collateral: Quad9's French users include hospitals, utilities, schools and government bodies, and a resolver has no customer list to notify. When the answer stops, those networks fail with no error that points at the cause.

The comments split in a way that is more interesting than the article. One camp says European governments are willing to write authoritarian censorship law to protect football leagues' revenue, which is hard to dispute on the record. Another camp says the real fix is a self-hosted recursive resolver, and the courts can take it up with ICANN — true, and also an argument available only to people who can run one. The third camp says piracy persists because the legal product is worse: sign up for another streaming service, or find a DVD. That argument has been correct for fifteen years and has never once been accepted by a rightsholder.

## A $62 board beat Chamberlain's ad server — 630 points

**630 points** · 263 comments · [blog.harrison.page](https://blog.harrison.page/garage-door-spam/) · [HN discussion](https://news.ycombinator.com/item?id=50519231)

Harrison's myQ app used to send him a notification when the garage door opened. In October 2026 the notifications started carrying advertising — his words are "un-fucking-acceptable," and the screenshot is the whole argument. Chamberlain cut off third-party API access in late 2023, so in 2023 he had already bought two ratgdo32 boards: about $62 each, open-source firmware, wired to the opener's terminals, speaking LiftMaster's Security+ 2.0 protocol locally. Fixed DHCP reservations, HomeKit, "Hey Siri, open Door 1."

The build detail that makes the post worth reading is that he then rebuilt something his father had done with a mercury switch: an alert if the door is left open at night. A cron job hits the ratgdo JSON status endpoint every ten minutes between 21:00 and 06:00 and posts to Slack. Both boards are reachable over Tailscale with advertised /32 routes so his monitoring can hit `/healthcheck`. Everything runs locally, no cloud, and the notifications now say who opened the door — which myQ never did.

The comments are a catalogue of the same pattern in other hardware. One person installed a Chamberlain opener that needed three buttons inside the garage and found the buttons are limited in software, two per opener. Another quotes App Store guideline 4.5.4 — push notifications must not be required for an app to function and should not be used for promotions — which is a rule Apple has and does not enforce. A third points out the thing that should worry anyone building a business on this model: he turned off every marketing toggle in the Uber app, saved, swiped out, came back, and they were on again.

Two lessons, and neither is about garage doors. The first is that "smart home" hardware sold without a subscription has to monetise eventually, and the notification channel is the cheapest place to do it. The second is that the fix exists, costs $124 for a two-door garage, and requires a level of technical confidence that approximately none of the customers Chamberlain is monetising possess. That is not a market failure the market is going to fix.

## The European Commission runs 40,000 staff on Matrix, with live presence switched off — 612 points

**612 points** · 293 comments · [element.io](https://element.io/blog/how-the-european-commission-rolled-out-matrix-to-more-than-40-000-staff/) · [HN discussion](https://news.ycombinator.com/item?id=50558533)

This is a conference talk write-up from Element's public sector track, and the interesting content is in the operational detail rather than the sovereignty pitch. The European Commission has more than 40,000 staff on Matrix, federated, interoperable by design because the alternative is forcing every member-state organisation onto one vendor's platform.

The detail a commenter pulled out and quoted: live presence was switched off, because as more users came on board the load from real-time online/away indicators started to affect performance. That is a small sentence with a large implication. Presence is the cheapest feature in a chat client to describe and one of the most expensive to run at scale, because it turns an event graph into a heartbeat firehose. Every Matrix deployment of any size eventually negotiates with it, and 40,000 federated users losing it is not a bug report — it is a statement about what the architecture costs to operate.

The thread is much less friendly than the post. The top criticism is encryption: Matrix's E2EE is called a "tire fire" by one commenter who points at `arewemlsyet.com` and says the migration to MLS appears abandoned, which is a fair concern for a deployment marketed on national-security-grade privacy. Others report trying Matrix every few years and bouncing off the client quality, and predict the Commission migrates within twelve months. Against that: someone in the thread runs a Matrix server for thousands of users and says it's the only thing that has kept working, and a friend group moved off WhatsApp and Telegram to a self-hosted instance and is happy.

The honest read is that this is a real deployment at real scale, and it proves the protocol works for the use case it was designed for — federated text between organisations that don't trust each other's vendors. It does not prove the encryption is ready for classified material, and the presence story suggests the operations team is still paying for features they can't afford to keep on.

## Microsoft ships seven models and leads with the price tag — 590 points

**590 points** · 374 comments · [microsoft.ai](https://microsoft.ai/news/microsoft-ignite-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50548021)

The Ignite announcement is a family release rather than a flagship: MAI Cyber 2 Flash, MAI Code 2, MAI Code 2 Flash, MAI Image 2.7, MAI Realtime 1, MAI Transcribe 2 (shipping as Dragon Copilot Transcribe), Decision 1.1, and the Maia 200 accelerator now in production running Microsoft's largest models at 1.7x tokens per watt. Every line item has a price ratio attached: Cyber 2 Flash "beats GPT-6 Astra's quality at less than 2% of the cost per task on CyberGym-E2E," Code 2 reaches 98% of GPT-6.1 Sol's coding quality at 40% of the price and 96% of Opus 5.5's performance at 5% of the price, Image 2.7 is #1 on Artificial Analysis image editing at one-fifth the price of GPT Image 2.6 Sunburst, Realtime 1 starts at $0.01 per audio minute, Decision 1.1 is 50x faster and 79x cheaper than GPT-6.1 Sol.

Read the ratios as a genre. A frontier lab that believed it had the best model would lead with capability. A lab that is one tier behind leads with cost per task, on benchmarks it picked, and hopes you read "98% of the quality" as "you will not notice." Sometimes you won't. The commenters who actually used MAI Code 2 say it's "quite good for my usual work" and that being put "on par with Opus or Sol" is not an unreasonable claim. The sceptical comment is the one that matters strategically: ship some of these as open weights or this is Windows Phone again — a competent product with no distribution in a market where the distribution is developer habit.

The security framing deserves a flag. "Frontier cyber defense built to run 24/7" is the pitch, and the numbers behind it are self-reported on CyberGym-E2E. Both Microsoft and Google shipped a cyber-focused cheap model this week, and both framed it as defending against attackers who now have cheap offensive tools. That framing is correct and also the best possible marketing for selling inference to security teams. The vendor's incentive and the defender's interest happen to point the same way here, which is rarer than the press releases imply but does mean you should read the benchmark, not the paragraph.

## AI agents asked KPMG's audit team better questions — 479 points

**479 points** · 246 comments · [europeanbusinessmagazine.com](https://europeanbusinessmagazine.com/ai-agents-better-questions-kpmg/) · [HN discussion](https://news.ycombinator.com/item?id=50547777)

KPMG UK ran "Project Exponential" on the financial statements of an unnamed FTSE 250 company: more than 100 AI agents working alongside a conventional audit team, not on isolated admin tasks but across the audit process — collecting information, analysing, documenting, drafting conclusions and observations, proposing next steps, and dividing work among themselves.

The quote that got the story onto the front page is from KPMG UK head of audit Cath Burnet: in several instances the agents went considerably deeper into issues than the regular team, identifying areas requiring further investigation and asking questions the human auditors had not necessarily raised. The source is the FT, which is behind a paywall, and the trade-press write-up adds no numbers.

Here is the problem with the framing, and it is not that agents can't read a trial balance. An audit's deliverable is a signed opinion backed by a documented evidence trail, and the profession's entire liability model rests on professional scepticism being exercised by a named human. "The agents asked better questions" is a claim about the generation step. It says nothing about the verification step, which is where audit failures actually happen. If an agent surfaces an anomaly that the engagement team then fails to chase, you have not improved audit quality — you have added a suggestion box that nobody is required to read. Nobody in this announcement says what happened to the agents' findings, how many were false positives, or what the review layer looked like.

There is also a structural question: 100 agents across one FTSE 250 audit, on a codename, with a results story that arrives as a PR win. The Big Four have been selling "AI in audit" for three years. The reason the sell has been slow is not model capability, it's that the regulator wants to know who is accountable when the tool misses a going-concern doubt. KPMG will have an answer to that. It isn't in this article.

## Ruby2ßhell: a one-byte heap overflow in `upcase` — 350 points

**350 points** · 148 comments · [verialabs.com](https://verialabs.com/ruby2shell/) · [HN discussion](https://news.ycombinator.com/item?id=50556287)

GHSA-34m4-m9fh-gqp5, CVE pending, severity critical, fixed in Ruby 3.3.14, 3.4.13 and 4.0.10. The bug is in the case-conversion loop: most of Ruby's single-byte encodings have no capital ß, so upcasing it writes two bytes (`SS`) while the loop only bounds-checks room for one. The output buffer is input length plus 20 bytes; feed it 21 ß characters and you write one byte — `S` or `s` — past the end. The same loop is in several ISO-8859 and Windows-125x encodings and has been there since Ruby 2.4.0. UTF-8 takes a different path and is not affected. It's reached through `upcase`, `swapcase`, `downcase(:fold)` and `casecmp?`.

Reachability is the part that makes this a front-page story. Rails is affected in default configuration, classic Sinatra is affected, and self-hosted software that bundles an old Ruby is affected: GitLab 19.6.0 ships Ruby 3.3.13, GitHub Enterprise Server 3.22.5 ships 4.0.9, Mastodon 4.7.6 ships an affected version. Veria Labs says it will publish a proof of concept in a week, once people have had time to upgrade.

The claim in the title is "pre-authentication RCE on stock Rails," and a one-byte heap overflow is a thin primitive to get there with. That's not a criticism — a controlled single-byte write of a known value with an attacker-controlled adjacent allocation is enough, given a suitable heap shape, and the writeup is candid that the exploit requires that shape. It's a reminder that the vulnerability class that killed OpenSSL is alive in a language that markets itself on developer happiness. Ruby also published a separate advisory the same day: seven vulnerabilities across the regexp engine and string case conversion, with a PoC already in the wild for at least one. If you run Ruby and haven't patched this week, the two advisories are one job.

## Fifteen million web servers on one VM — 347 points

**347 points** · 40 comments · [kapteko.com](https://kapteko.com/15-million-webservers/) · [HN discussion](https://news.ycombinator.com/item?id=50556533)

The premise is a joke, the post says so, and the engineering is real. A bare C server doing `listen`/`accept`/`recv`/`send`/`close` gets about 65,000 requests per second. Then you fork 15 million of them and the kernel's per-socket accounting eats the box: the author OOMs at around 2.5 million servers with the stock network stack, and RPS falls as you add more.

The answer is to stop using the kernel's network stack. The proof-of-concept runtime loads each "guest" web server as a tiny state machine — 16 bytes of saved context (program counter plus two file descriptors), so 15 million guests costs 220 MB of scheduling state. Syscalls get intercepted and handed to `smoltcp`, a userland TCP/IP stack: 620 bytes per idle server, about a kilobyte per active one, and he reaches 16 million listeners on a 10 GB / 1 core VM. The post also compares DPDK (bypasses the kernel entirely, owns the NIC, takes a whole core, and kills your SSH session if you enable it remotely) and AF_XDP (kernel keeps the device, eBPF filter steers packets into a userspace ring, SSH survives, close enough to DPDK to be the practical choice).

My favourite paragraph is the author asking Codex how much memory a TCP connection takes, getting "idle connection takes zero," writing `SHOULD CONSUMER ZERO MEMORY` in a comment like a man who believes it, and then getting an OOM kill. He's honest about it: "While an LLM is a significant boost for learning, it's too easy to accept its answers without thinking critically and feel ashamed later on." That is a better summary of where these tools are than most of the benchmark posts.

What this does not show is anything about serving HTTP at scale. Fifteen million sockets blocked on `accept` are fifteen million sockets with nothing to do; the interesting number would be requests per second at high connection counts, and the post is straight about the difference between a proof of concept and a POSIX-compatible runtime that reimplements every syscall. Still, 620 bytes per idle server versus the kernel's multi-kilobyte socket cost is a real result, and the reason people have been moving workloads to io_uring and AF_XDP for the last three years.

## The UK admitted the Apple order exists — 329 points

**329 points** · 157 comments · [macanorak.com](https://macanorak.com/uk-government-forced-to-admit-it-issued-apple-a-secret-encryption-order/) · [HN discussion](https://news.ycombinator.com/item?id=50562113)

The Investigatory Powers Tribunal rejected the UK government's attempt to maintain neither-confirm-nor-deny on a Technical Capability Notice issued to Apple under section 253 of the Investigatory Powers Act 2016. That's the entire development, and it is the correct outcome. What matters is how much was already public before the government conceded the point.

February 2025: the Washington Post reported an order, issued that January, requiring Apple to provide backdoor access to encrypted iCloud data — not just for UK users. Apple's response was to withdraw Advanced Data Protection from new UK users rather than build a master key, and to say publicly, without acknowledging the notice, that it would not build a backdoor into any product. After months of diplomacy involving the Trump administration, the first notice was withdrawn. A second was issued, reportedly restricted to UK users. Apple's original challenge was dismissed as moot when the first notice went away, so it filed a fresh one in 2026. At the tribunal hearing on 17 September, government lawyers argued they needn't confirm the order's existence. Today they lost that argument.

The reason this deserves more than a shrug: a British minister can now compel changes to the security of devices used by millions of people worldwide, forbid the manufacturer from discussing it, and — until today — refuse to confirm the demand exists. The only reason we know any of this is that a newspaper reported it. The tribunal's ruling improves the disclosure rules for this case. It does not change the power, and the second notice remains in force. Nothing about Apple's position has changed either: the company still says it won't build the backdoor, which means the standoff continues with more sunlight on it.

## Seven vulnerabilities in Ruby's regexp engine and case conversion — 328 points

**328 points** · 126 comments · [ruby-lang.org](https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/) · [HN discussion](https://news.ycombinator.com/item?id=50554038)

A separate advisory from the Ruby2ßhell disclosure, same day, same subsystem: seven vulnerabilities across the regular expression engine and string case conversion, with a proof of concept already public for at least one. Ruby shipped fixes across 3.3, 3.4 and 4.0. The overlap with the case-conversion overflow is not a coincidence — both live in code that has been stable enough that nobody has fuzzed it seriously in years, which is the same sentence that explained the OpenJDK and nginx bugs on the last two front pages.

## A senior engineer tried to fix a security bug and hit the guardrail — 315 points

**315 points** · 115 comments · [ounapuu.ee](https://ounapuu.ee/posts/2026/11/19/unsafeguards/) · [HN discussion](https://news.ycombinator.com/item?id=50562262)

The author asked Claude Code to look for low-hanging security fruit in a project he controls. It found a one-line fix, he accepted it, and the tool stopped: the change tripped an AI safeguard. His point is not that safety is bad. It's that he is a senior product engineer, with provable control over the product, trying to fix a vulnerability and comply with local law, and the exemption process requires multiple business days of waiting plus a set of requirements he describes as unreadable. "Oh no, how dare I."

The mechanism question the post doesn't answer is the one that matters: what did the classifier see? A one-line change to a security-relevant code path in a tool that can also be pointed at other people's systems looks, from the outside, exactly like the thing the guardrail is for. The tools are tuned for consumer surfaces and enterprise liability, and a legitimate developer holding a legitimate diff has no way to signal legitimacy other than a support ticket with an SLA. That is governance by friction, and it is going to keep misfiring in exactly the cases where the fix is urgent.

The comment thread is mostly the same story with different stacks, plus a fair amount of "just use a local model," which is the answer that removes the guardrail and the vendor's liability at the same time. Worth reading alongside the OpenAI and Microsoft announcements above: every vendor this week is selling an agent that runs unattended in production, and the control surface for stopping it is a classifier that can't tell a fix from an exploit.

## Cambridge's Word of the Year is "human" — 299 points

**299 points** · 222 comments · [cam.ac.uk](https://www.cam.ac.uk/news/cambridge-dictionary-reveals-word-of-the-year-2026) · [HN discussion](https://news.ycombinator.com/item?id=50546914)

The University of Cambridge page is a JavaScript shell and returned nothing readable, so this comes from the headline plus the thread. Cambridge Dictionary's word of the year for 2026 is "human," chosen in a year when the most-discussed question in technology is which work is reserved for people. The thread quotes Bill Gates, chair of the Gates Foundation, making the case for "human reserved jobs" such as caregiving that machines should never take.

The comments are better than the announcement. One argues the whole "reserved jobs" framing is a category error, because deciding which work is human-only depends on personal and political preferences that no dictionary, foundation or regulator can settle. Another has a genuine linguistic grievance: calling someone "a good human" is impersonal and demeaning, because a person has agency and a human is a person-shaped clump of cells. A third notes that "anthropic" isn't in Cambridge yet, though it is in the OED, which is the kind of detail a dictionary publisher should probably sit with.

The reason to note it at all: Dictionary.com's 2026 word is "maxxing," Collins' is "mogging," and Cambridge's is "human." Three dictionaries, three very different readings of the same year — two pieces of extremely online slang and one word retreating to the moral high ground. That spread is a more honest summary of 2026 than any of the three picks.

## Reverse engineering with Ghidra on an MCP bridge — 294 points

**294 points** · 74 comments · [slowchronicle.com](https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering) · [HN discussion](https://news.ycombinator.com/item?id=50553225)

Twenty years of manual reverse engineering, then the process changed. The stack here is specific and worth copying: DeepSeek v4.1 Flash as the driver (with Codex on Luna or Terra occasionally), Ghidra with an MCP bridge so the agent can drive the decompiler directly, and radare2/kuna for the fast passes. The workflow has collapsed to pointing the agent at a binary and letting it walk functions, rename things, and follow references, with the human checking the results that matter.

The interesting claim isn't that an LLM can read decompiled C. It's that the harness is the product: an MCP server in front of Ghidra's API turns a general model into a domain tool, and the same pattern shows up in the KPMG audit agents and the OpenJDK reviewer story below. What the post is honest about, without belabouring it, is that the output still needs someone who knows what a wrong answer looks like. Two decades of pattern recognition is what lets the author skim the agent's work instead of trusting it, which is the part that doesn't transfer to someone starting today.

## "Everything you need to survive and rebuild society," 28 MB for Mac — 293 points

**293 points** · 156 comments · [lastbook.org](https://lastbook.org/) · [HN discussion](https://news.ycombinator.com/item?id=50560822)

Lastbook is an offline bundle for Mac, Windows and Linux — explicitly not phones — advertised as free, local, private, and sufficient to rebuild civilisation: a local Gemma 4 26B A4B model, 258,000+ searchable places from OpenStreetMap, and an open-source client with 748 GitHub stars. Download sizes: 28.5 MB for Apple Silicon, 105 MB for Windows, Ubuntu 24.04/26.04 for Linux.

Those download sizes are the tell. You cannot ship a 26B model and 258,000 map tiles in 28.5 MB, so the installer is a downloader and the real footprint lands after first run — which is fine, but it means the "offline" claim is about steady state, not about the zip you keep on a USB stick. The other thing to notice is that Maps is the part that actually works when the network is gone, and a local LLM is the part people romanticise. If you're building a go-bag, the maps, the medical references and the offline docs are load-bearing; a quantised 26B that answers questions confidently and wrongly about water purification is not.

The genre — survive-and-rebuild kits — has been having a moment for two years, and the honest version of it is a boring list: paper maps, a first-aid manual, a radio, seeds you know how to plant, and neighbours you've met. Adding a local model is a real improvement to the reference shelf. The framing is cosplay.

## SSD prices should ease in the second half of 2027, and that caveat is doing work — 287 points

**287 points** · 221 comments · [drivevault.io](https://www.drivevault.io/blog/when-will-hard-drive-prices-come-down.html) · [HN discussion](https://news.ycombinator.com/item?id=50557716)

DriveVault's post says SSD prices start easing in H2 2027 and hard drives take until 2028, because the factories that make them have already sold that output. It cites the analysts who track memory contract prices quarterly and what Seagate and Western Digital told investors this summer. It's dated 17 September, so this is a resurfacing rather than news, and it is a storage vendor's blog forecasting that you should wait rather than buy — which is a strange thing for a vendor to say and therefore mildly credible.

The mechanics are the standard cycle: NAND and platter capacity is contracted years out, AI datacenter buildout is absorbing the incremental supply, and prices for consumers are the residual of a negotiation between hyperscalers. The claim that this resolves in 2027 is a forecast, and the post's own "that is not a guess" is the sentence to discount — it is a guess, sourced from the people with the best information, which is the best kind of guess and still a guess.

What's not a guess is the asymmetry in the comments: people buying 8 TB of spinning rust for a NAS this month are paying more than they did last year and finding less stock, while enterprise buyers sign multi-year agreements. If you need capacity, buy what you need now and don't build a plan around a 2027 price. If you can wait, the historical pattern says the second half of a contract cycle is when the spot market softens.

## Genie 4 lets you rewrite the world mid-session — 286 points

**286 points** · 182 comments · [blog.google](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/) · [HN discussion](https://news.ycombinator.com/item?id=50550415)

Project Genie's fourth world model adds the feature the previous three were missing: you can change the world you're in by typing, mid-session. Shift the weather, drop in a character, redirect the action. It's paired with real-time native audio that adapts to the scene — ambience, and character dialogue. Genie 3 stays available for longer runs and panorama-seeded spaces, and gets three-minute sessions (up from sixty seconds), 360-degree panorama grounding, and world chaining so separate generations connect into one continuous flight.

The technical claim worth separating from the demo is "world model." A generative scene you can walk around and prompt is a very good interactive video, and the interesting question is how much internal state persists — whether the world has consistent physics you could test, or whether it re-renders plausibly from the last few frames. Google's post argues realism and controllability. It doesn't publish a consistency benchmark, and the demos are chosen shots.

What's clearly real is the audio. Native audio that responds to events in a generated scene is harder than it looks, and it's the difference between a tech demo and something a game studio could prototype with. Whether anyone outside a demo will use this is still the open question, two years into the world-model wave.

## The java4shell bug had a pull request in September — 278 points

**278 points** · 78 comments · [github.com](https://github.com/openjdk/jdk/pull/32781) · [HN discussion](https://news.ycombinator.com/item?id=50558906)

OpenJDK pull request #32781, by albertnetymk, titled exactly what the bug is: "AVX-512 Base64 decoder overwrites output buffer on short padded tail." It was closed. The bug that became CVE-2026-114938 — pre-auth RCE in the JDK's Base64 decoder, CVSS 4.0 of 9.2, covered here yesterday at 1,143 points and now at 1,176 — was filed as a normal correctness fix in September 2026 and did not get treated as a security issue until Calif's advisory in November.

This is the story of the week and it is not about AI. Yesterday's framing was that an AI harness found a two-decade-old memory-safety bug in an hour for under $200 of inference. Today's addition is worse: the bug wasn't hidden. Someone looked at it, wrote a patch, and the title described a buffer overwrite. The gap between "this overwrites memory" and "this is a remotely exploitable vulnerability" is a triage decision, and the triage decision was made by people looking at a pull request rather than an attacker's writeup.

The thread is doing the forensics — what the review discussion said, whether the security list was notified, what the maintainers' obligations were under the OpenJDK vulnerability group's rules. Nobody comes out of it looking negligent, which is the point. This is what a mature process does when a fix arrives as a fix: it applies it and moves on. The process assumes that someone who finds an exploitable bug will say so loudly, and the whole discovery-cost argument from the last two weeks is that this assumption is now wrong, because the people finding these bugs are increasingly agents that report what they were asked to report.

## Archive Team is saving Apple's support forum — 266 points

**266 points** · 106 comments · [wiki.archiveteam.org](https://wiki.archiveteam.org/index.php/Apple_Discussions) · [HN discussion](https://news.ycombinator.com/item?id=50539747)

`discussions.apple.com` is closing. Archive Team has a project running — distributed, warrior-based, project lead "arkiver," grab script `applediscussions-grab`, twenty years of the Apple Support Community and its preceding names being pulled down before Apple turns it off. The important sentence on the page is "Archiving status: In progress," and the important implication is that nobody has said what happens to the URL space afterwards.

Apple's support forums are one of the few places where a fix for a specific broken thing on a specific macOS version, written by a person who hit it, still exists in public and is indexed. Every time one of these closes, the same content moves to a model's weights and stops being citable. The comments are mostly people realising that the thing they used to search is about to become unsearchable. Run a warrior if you have bandwidth; the project is on IRC at #badapple.

## Claude solved two open problems in black hole physics — 259 points

**259 points** · 100 comments · [anthropic.com](https://www.anthropic.com/research/claude-black-hole-physics) · [HN discussion](https://news.ycombinator.com/item?id=50563148)

Two results, both in the theory of quantum gravity via holographic duality, both described by Anthropic as open problems that Claude Fable 5.2 solved. The first is a calculation physicists set up in 2003 and never completed: whether the Hawking-Page transition — the abrupt switch from a hot gas of particles to a black hole as you raise the temperature — persists in a regime where spacetime no longer has a definite shape. Claude ran a research group of copies of itself, worked nearly every piece independently, checked its math against known results, and concluded the transition is abrupt at both extremes. The second: since 2009, a bootstrapping technique has set a ceiling on how heavy the lightest black hole can be in a simplified two-dimensional universe, and numerical work hinted at a lower ceiling than anyone had proven. Claude spotted a pattern in the numerical data that physicists had missed and proved the exact ceiling.

The provenance story is the interesting one. In August an Anthropic researcher asked Claude for a list of interesting open problems in black hole physics and the bootstrap method; it returned 22 candidates hours later, and separate agents ran on each, reading each other's progress notes, for about six weeks, with no special setup. Weeks after one agent solved the Hawking-Page question, a physicist who had independently attacked the same problem with Claude shared his result — and a colleague realised the agent got there first, by a different method. That mutual check is the only validation mentioned in the post.

Which is the thing to hold onto: neither result has been peer reviewed in the sense that matters, both are in toy universes that don't describe ours, and neither has applications. Anthropic is explicit about all three, which is more candour than these announcements usually carry. But "solved two open problems" is a claim about a physics community's judgment, and until a referee and a few skeptics have gone through the derivations, the accurate version is "produced two proofs that two Anthropic physicists believe are correct." If they hold up, the interesting part won't be the physics. It'll be that a six-week unattended agent loop produced publishable theory in a field where the bottleneck was always a single person's ability to hold a long calculation in their head.

## Also new, below the sections

- **[What's New in PHP 8.6](https://www.php.net/releases/8.6/en.php)** ([249 points](https://news.ycombinator.com/item?id=50557870), 120 comments) — released today. Partial function application (pre-bind some arguments, get a closure for the rest), a `\Time\Duration` class, a polling API over epoll/kqueue, and `clamp()`. The partial application change is the one that will show up in framework code within a month.
- **[Show HN: ExitPath](https://exitpath-ruddy.vercel.app/)** ([247 points](https://news.ycombinator.com/item?id=50547980), 93 comments) — an open-source migration guide off Slack, Notion and Microsoft 365. The page is a client-rendered shell and returned nothing to fetch, so this is from the thread. The thread's consensus on why people don't leave: free/busy calendaring, and identity — nobody wants to manually deprovision accounts across six systems when someone quits. Someone also says the site looks vibe-coded and its Notion alternatives are mislabelled, which is a fair read of a list that calls AppFlowy a "look-alike."
- **[DaisyRose-27B](https://www.radixark.com/blog/daisyrose-27b)** ([247 points](https://news.ycombinator.com/item?id=50551046), 103 comments) — RadixArk's first model, RL post-training on Qwen3.8-27B with 1,200 curated long-horizon agent tasks, 18 days, 144 H200s, sessions up to 1M tokens. Terminal-Bench 4.1 pass@1 goes from 5.6% to 12.0%. Doubling a bad number is not a good number, but the cost of the doubling is the story: 1,200 tasks and 18 days is a post-training budget a well-funded startup can afford, and the checkpoints ship in BF16, FP8 and NVFP4.
- **[Show HN: Take Voyager 1 apart](https://rshekhar.com/voyager/)** ([234 points](https://news.ycombinator.com/item?id=50548161), 57 comments) — an interactive 3D teardown down to a single bit of the command computer's core memory, with the RTG, the data computer's memory chips and the Golden Record's cover as separate entry points. Built with LLM assistance; a commenter notes the truly hard part, which is that the whole thing used to be a research project and is now a weekend.
- **[Nintendo takes Picofly firmware down from GitHub](https://www.youtube.com/watch?v=-TLCGUpoD6c)** ([224 points](https://news.ycombinator.com/item?id=50547048), 85 comments) — the video is not fetchable, so from the thread: the takedown hit a **fork**, and the main repository, up since 2023, is untouched. The notice cites only §1201 (anti-circumvention), and commenters argue that a §1201 notice isn't a valid §512 takedown at all. Picofly is clean-room firmware for a separate chipset and contains no Nintendo assets, which is why the DMCA theory is the whole dispute.
- **[Distributed blob storage on SQLite](https://zerodha.tech/blog/high-performance-distributed-blob-storage/)** ([224 points](https://news.ycombinator.com/item?id=50557537), 60 comments) — Zerodha built "Blobasaur," a sharded blob store on SQLite, for JSON blobs from KBs to MBs at thousands of ops/sec with single-digit-millisecond latency. It backs customised trading screens for Kite's ~20 million customers. The lesson is the one the SQLite people keep making: the database is fast enough, the problem was always sharding and replication.
- **[Pancreatic cancer halted by virus injection in three patients](https://www.newscientist.com/article/2528235-pancreatic-cancer-halted-by-virus-injection-in-three-patients/)** ([221 points](https://news.ycombinator.com/item?id=50563066), 20 comments) — an oncolytic virus stopped tumour growth and spread in three people in a safety trial. n=3, the endpoint was safety, and pancreatic cancer has produced a very long list of promising phase 1 results. Worth watching, not worth a family group chat yet.
- **[Advancing chip design with OpenAI models](https://openai.com/index/advancing-chip-design-with-our-models/)** ([219 points](https://news.ycombinator.com/item?id=50549493), 166 comments) — how OpenAI's models contributed to the design of Jalapeño, its first custom inference chip, following an August post. Chip design is the best case for these tools that exists — enormous search space, cheap simulation, verifiable output.
- **[Energy drinks linked to 11 times more reports of cardiac arrest](https://www.sciencedaily.com/releases/2026/11/261110042543.htm)** ([214 points](https://news.ycombinator.com/item?id=50546465), 214 comments) — an American Heart Association study finding energy drinks and stimulant supplements associated with 11x the reports of cardiac arrest and 4.5x the reports of heart attack. Read the word "reports": this is a spontaneous-reporting dataset, which measures how often people file a report, not how often the event happens. The signal is real and the magnitude is not an incidence ratio.
- **[Web Browser Engineering](https://browser.engineering/)** ([200 points](https://news.ycombinator.com/item?id=50537290), 29 comments) — Panchekha and Harrelson's book, free online, that builds a working browser in about two thousand lines of Python. Resurfacing from 2021, and still the best answer to "how do browsers actually work."

## What moved

The nginx HTTP/2 bugs added 690 points overnight, to 1,477 — yesterday's disclosure is now the second-biggest story on the page. Deutsche Bank's leaked internal site nearly doubled, 409 to 768. Everything else that moved by more than 30 is a slow climb.

| Story | Last | Nov 19 |
| --- | --- | --- |
| [Unauthenticated remote code execution in Nginx](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) | 787 (11-18) | 1,477 (+690) |
| [Inside Deutsche Bank](https://www.inside-db.com/) | 409 (11-18) | 768 (+359) |
| [DNS resolvers are the wrong place to fight piracy](https://techstackups.com/articles/quad9-leaves-france-dns-blocking/) | 485 (11-18) | 676 (+191) |
| [AI is killing All About Berlin](https://nicolasbouliane.com/blog/death-by-ai) | 732 (11-18) | 801 (+69) |
| [Russia reportedly planned mass-casualty attack in Poland](https://www.yahoo.com/news/world/articles/russia-reportedly-planned-mass-casualty-090500574.html) | 316 (11-18) | 377 (+61) |
| [Java4Shell: RCE in OpenJDK when processing Base64](https://calif.io/java4shell/) | 1,143 (11-18) | 1,176 (+33) |
| [Google's AI answers reducing search traffic by 40%](https://revscope.co/blog/search-seo-geo-2026/) | 676 (11-18) | 709 (+33) |
| [Quad9's withdrawal from France](https://blog.cloudflare.com/quad9-withdrawal-from-france/) | 870 (11-18) | 902 (+32) |
| [Energy-Based Reasoners: 385x more efficient inference](https://energy-based-reasoners.github.io/) | 284 (11-18) | 315 (+31) |

## Still on the page

Every story below was reported in the last four roundups. The "Last" column carries the date the earlier number comes from, because a few of these were last reported two or three nights ago and the deltas span that gap.

| Story | Last | Nov 19 |
| --- | --- | --- |
| [Jensen Huang resigns](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,059 (11-18) | 4,059 (+0) |
| [Carnegie Mellon is putting computer science courses on YouTube for free](https://www.cs.cmu.edu/learn/) | 2,348 (11-18) | 2,365 (+17) |
| [SpaceX catches the Starship to end Flight 15](https://www.spacex.com/launches/starship-flight-15) | 1,758 (11-18) | 1,761 (+3) |
| [Unauthenticated remote code execution in Nginx](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) | 787 (11-18) | 1,477 (+690) |
| [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,445 (11-18) | 1,446 (+1) |
| [GPT‑6.2 Astra and Sol](https://openai.com/index/introducing-gpt-6-2-astra-sol/) | 1,332 (11-18) | 1,345 (+13) |
| [New Evidence Shows School Phone Bans Are Gradually Improving Test Scores](https://www.nytimes.com/2026/11/17/upshot/school-phone-bans-study-scores.html) | 1,278 (11-18) | 1,300 (+22) |
| [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com) | 1,300 (11-18) | 1,300 (+0) |
| [All AI-generated code should be Open Source](https://jakub.jankiewicz.org/blog/ai-code-open-source/) | 1,281 (11-18) | 1,285 (+4) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 1,205 (11-18) | 1,205 (+0) |
| [Java4Shell: RCE in OpenJDK when processing Base64](https://calif.io/java4shell/) | 1,143 (11-18) | 1,176 (+33) |
| [Lovable apps expose passport details and more than 200K private messages](https://www.crissyfield.de/research/lovable-en/) | 1,006 (11-18) | 1,007 (+1) |
| [AWS emulator](https://github.com/aws/aws-emulator) | 994 (11-18) | 996 (+2) |
| [Many of Amazon’s Black Friday and Cyber Monday “deals” offered no savings](http://groundworkcollaborative.org/news/amazons-decoy-deals-groundwork-investigation-reveals-nearly-1-in-3-black-friday-and-cyber-monday-deals-advertised-by-amazon-offered-no-savings-to-shoppers-nearly-1-in-10-w/) | 966 (11-18) | 968 (+2) |
| [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) | 937 (11-18) | 938 (+1) |
| [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 926 (11-18) | 926 (+0) |
| [How to make almost anything](https://pub.cba.mit.edu/863.26/site/) | 916 (11-18) | 916 (+0) |
| [Rust 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 904 (11-18) | 905 (+1) |
| [Quad9's withdrawal from France: A canary in the coal mine](https://blog.cloudflare.com/quad9-withdrawal-from-france/) | 870 (11-18) | 902 (+32) |
| [Qwen4-Max](https://qwen.ai/blog?id=qwen4-max) | 879 (11-18) | 882 (+3) |
| [Technical issue at JPMorgan Chase triggers online banking delays for US banks](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda) | 832 (11-18) | 836 (+4) |
| [Reverse engineering my Coway air purifier to ditch the cloud](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 804 (11-18) | 804 (+0) |
| [AI is killing All About Berlin](https://nicolasbouliane.com/blog/death-by-ai) | 732 (11-18) | 801 (+69) |
| [Inside Deutsche Bank](https://www.inside-db.com/) | 409 (11-18) | 768 (+359) |
| [Show HN: My $300 embroidery machine needed a subscription, so I built my own app](https://github.com/simpsoka/zigzag) | 742 (11-18) | 742 (+0) |
| [Windows 11 is collecting data on which coding agents and developer tools you use](https://xusheng.dev/posts/windows-coding-agent-telemetry/) | 726 (11-18) | 730 (+4) |
| [BugMeNot has closed](https://www.bugmenot.com/) | 721 (11-18) | 725 (+4) |
| [Apple Services Down](https://developer.apple.com/system-status/) | 713 (11-18) | 724 (+11) |
| [Google's AI answers reducing search traffic by 40%](https://revscope.co/blog/search-seo-geo-2026/) | 676 (11-18) | 709 (+33) |
| [Optimizely compromised, served malware on Zoom, GitLab](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) | 695 (11-18) | 706 (+11) |
| [Highly classified US national security communications network goes down](https://www.cnn.com/2026/11/17/politics/highly-classified-national-security-communications-network-goes-down) | 659 (11-18) | 669 (+10) |
| [Nvidia stopped disclosing Singapore sales as revenues hit $104B](https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf) | 650 (11-18) | 664 (+14) |
| [Microsoft 365 outage leads to chlorine gas poisoning of 15 hotel guests](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) | 644 (11-18) | 644 (+0) |
| [Why get an expensive Pi when I have an old phone?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 634 (11-18) | 634 (+0) |
| [Universal XSS in uBlock Origin from website-driven element picker](https://iter.ca/post/ubo-uxss/) | 616 (11-18) | 617 (+1) |
| [A false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 588 (11-18) | 590 (+2) |
| [KDE: The documentary (video)](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 578 (11-17) | 581 (+3) |
| [Apple has new Mac app coming to make running local AI models easy](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 578 (11-18) | 579 (+1) |
| [Lutnick Pushed to Weaken Chip Rules That Overlap with His Family Business](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) | 546 (11-18) | 546 (+0) |
| [Frame – 31.5" color ePaper display](https://trmnl.com/blog/introducing-frame) | 541 (11-18) | 542 (+1) |
| [Court denies motion to dismiss DRAM price fixing case](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) | 538 (11-18) | 538 (+0) |
| [Interviewed at a YC startup, found out they used my LinkedIn without permission](https://reddit.com/r/recruitinghell/comments/1xyr6ml/interviewed_at_a_yc_startup_spent_30_hours/) | 478 (11-18) | 510 (+32) |
| [Monkey Island: all 13 versions side by side](https://monkeyisland.pages.dev/) | 509 (11-18) | 509 (+0) |
| [Gemini 4 Hydrogen and Orchestrator](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) | 507 (11-18) | 509 (+2) |
| [ID.me terms required for IRS sign-in](https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in) | 482 (11-18) | 507 (+25) |
| [The MacBook Pro's OLED PWM problem](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) | 507 (11-18) | 507 (+0) |
| [Doomsday: Friday, 13 November, A.D. 2026 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291) | 505 (11-18) | 505 (+0) |
| [Jonathan Blow – If AI solved coding, why is my software still the same? (video)](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 494 (11-17) | 495 (+1) |
| [Elevated errors on claude.ai, Claude Code, and platform.claude.com](https://status.claude.com/incidents/nn11wk485zfn) | 494 (11-18) | 494 (+0) |
| [What's Next for Nvidia?](https://steveblank.com/2026/11/15/whats-next-for-nvidia/) | 485 (11-18) | 485 (+0) |
| [Handwriting, as a Font](https://ductus.sorenblank.com) | 475 (11-18) | 477 (+2) |
| [Phrack 73](https://phrack.org/issues/73/introduction_md) | 459 (11-18) | 472 (+13) |
| [Protomaps: Self-hosting map tiles has gotten cheap and easy](https://bruceroettgers.eu/blog/protomaps/) | 467 (11-18) | 471 (+4) |
| [Microsoft's ONNX Runtime has disappeared from GitHub](https://github.com/microsoft/onnxruntime) | 444 (11-18) | 464 (+20) |
| [A family tree of software job titles](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/) | 460 (11-18) | 461 (+1) |
| [Former Nvidia CEO Huang had a relationship with a second employee, sources say](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) | 460 (11-18) | 460 (+0) |
| [Claude Code and Codex reverse engineered my 1994 Jeep's ECU over a $3 Arduino (video)](https://www.youtube.com/watch?v=WPj3aQ-xxpI) | 455 (11-17) | 456 (+1) |
| [Chinese frontier AI models carry the fingerprint of export-controlled GPUs](https://unemploymentlabs.com/checkpoint-forensics) | 453 (11-18) | 454 (+1) |
| [Microsoft blames monster email outage on software defect introduced in July fix](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026) | 444 (11-18) | 445 (+1) |
| [Jiff 1.0: A datetime library for Rust](https://burntsushi.net/jiff/) | 441 (11-18) | 442 (+1) |
| [Terminal borders that don't cost a cell](https://www.joshka.net/cell-borders/) | 426 (11-18) | 426 (+0) |
| [MAI Code 2 and Code 2 Flash](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/) | 415 (11-18) | 421 (+6) |
| [350 years ago, Ole Rømer discovered that light has a finite speed](https://www.sciencenorway.no/culture-history-history-of-science/350-years-ago-this-man-discovered-that-light-has-a-finite-speed/2737969) | 402 (11-18) | 420 (+18) |
| [Ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 420 (11-18) | 420 (+0) |
| [What is the best harness for each model?](https://runta.com/blog/introducing-frontierharness-eval-v1-1/) | 415 (11-18) | 418 (+3) |
| [What is w2rt6byl5nf1opmc-a.com?](https://jack.cab/blog/siterate) | 411 (11-18) | 414 (+3) |
| [Old Bitly links are being hijacked](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) | 380 (11-18) | 380 (+0) |
| [jQuery 4.1.0](https://github.com/jquery/jquery/releases/tag/4.1.0) | 368 (11-18) | 377 (+9) |
| [Russia reportedly planned mass-casualty attack in Poland to be blamed on Ukraine](https://www.yahoo.com/news/world/articles/russia-reportedly-planned-mass-casualty-090500574.html) | 316 (11-18) | 377 (+61) |
| [Solid 2.0](https://www.solidjs.com/blog/solid-2-0-the-long-hold/) | 369 (11-18) | 376 (+7) |
| [We're Asking an Appeals Court to Require a Warrant for ALPR Searches](https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches) | 361 (11-18) | 361 (+0) |
| [We don't need more apps, we need better open source](https://jordankrueger.com/blog/better-open-source-not-more-apps/) | 353 (11-18) | 354 (+1) |
| [Chemistry is Actually Geometry](https://chillphysicsenjoyer.substack.com/p/chemistry-is-actually-geometry) | 347 (11-18) | 348 (+1) |
| [OpenCode Browse](https://opencode.ai/product/browse) | 331 (11-18) | 333 (+2) |
| [Grazing sheep in fields with solar arrays](https://news.cornell.edu/stories/2026/10/sheep-grazing-solar-fields-offers-farmers-economic-ecological-gains) | 329 (11-18) | 329 (+0) |
| [Interpreting claims that a theorem is correct because it was checked in Lean](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) | 325 (11-18) | 326 (+1) |
| [Project Zero will disclose vulnerabilities 90 days after reporting](https://projectzero.google/2026/11/disclosure-policy.html) | 323 (11-18) | 323 (+0) |
| [How did Woz write the Apple 1 BASIC before building the computer? (2021)](https://retrocomputing.stackexchange.com/questions/17957) | 321 (11-18) | 323 (+2) |
| [Harvard researchers find AI coding agents shifted the bottleneck to code review](https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/) | 311 (11-18) | 322 (+11) |
| [The Secret ThinkPad Powerbutton Code to Bring Dead Laptops Back to Life (2007)](https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/) | 322 (11-18) | 322 (+0) |
| [Codeberg.org Not Reachable](https://social.anoxinon.de/@codebergstatus/117636437840688845) | 291 (11-18) | 316 (+25) |
| [Crows make decisions faster than we can](https://www.nytimes.com/2026/11/15/science/birdbrain-crows-birds-research-decision.html) | 316 (11-18) | 316 (+0) |
| [Energy-Based Reasoners: 385x more efficient inference](https://energy-based-reasoners.github.io/) | 284 (11-18) | 315 (+31) |
| [Show HN: Yogurt – Free, private, open-source alternative to Granola](https://github.com/FrigadeHQ/yogurt) | 306 (11-18) | 307 (+1) |
| [A short explainer on how El Niño works (video)](https://www.youtube.com/watch?v=7_JF3etiAv8) | 301 (11-17) | 301 (+0) |
| [Claude Whiteboards, Claude Sheets, and Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) | 299 (11-18) | 299 (+0) |
| [How the Claude Code team thinks about verification](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/) | 290 (11-18) | 295 (+5) |
| [Rust changed me as a developer](https://blog.startifact.com/posts/how-rust-changed-me/) | 290 (11-18) | 291 (+1) |
| [Nvidia was in trouble before the Jensen Huang mess](https://www.wired.com/story/nvidia-was-already-in-trouble-before-the-jensen-huang-mess/) | 289 (11-18) | 289 (+0) |
| [A great old-timey game-programming hack (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html) | 289 (11-18) | 289 (+0) |
| [Why 3dfx 1 cards had such a washed out color output?](https://twitter.com/id_aa_carmack/status/2122478083319992513) | 285 (11-18) | 285 (+0) |
| [What constant surveillance is doing to children and parents](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 282 (11-18) | 282 (+0) |
| [PyPI's redesigned project pages with clearer security signals are now live](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/) | 280 (11-18) | 280 (+0) |
| [Why is Gemini 4 Carbon taking so long?](https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/) | 259 (11-18) | 274 (+15) |
| [Our software engineering interviews are changing a little](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) | 268 (11-18) | 269 (+1) |
| [Archive Team is archiving the Apple Support Community](https://wiki.archiveteam.org/index.php/Apple_Discussions) | 256 (11-18) | 266 (+10) |
| [Comcast's "fiber-powered Wi-Fi" is cable, AT&T says in false advertising case](https://arstechnica.com/tech-policy/2026/11/comcast-falsely-advertises-cable-internet-as-fiber-powered-att-lawsuit-says/) | 259 (11-18) | 262 (+3) |
| [United Airlines experiencing a widespread system outage, airline says](https://www.cnn.com/2026/11/16/us/united-airlines-outage) | 256 (11-18) | 257 (+1) |
| [Tor Project Issues Rapid-Response DoS-Defense Fix Amid Sustained DDoS Attack](https://forum.torproject.org/t/security-release-0-4-9-17/22454) | 253 (11-18) | 254 (+1) |
| [Why did some Apollo missions carry a grenade launcher? (2019)](https://space.stackexchange.com/questions/37775) | 254 (11-18) | 254 (+0) |
| [If an App Asks for Full Disk Access or System and App Protection Override](https://support.apple.com/en-us/149699) | 248 (11-18) | 251 (+3) |
| [Things That Turbo Pascal Is Smaller Than (2011)](https://prog21.dadgum.com/116.html) | 247 (11-18) | 247 (+0) |
| [Understanding Positional Embeddings in Modern LLMs](https://magazine.sebastianraschka.com/p/understanding-positional-embeddings) | 246 (11-18) | 246 (+0) |
| [Faster Retrieval for Better, More Efficient RAG](https://machinelearning.apple.com/research/faster-retrieval) | 242 (11-18) | 242 (+0) |
| [Atuin Threads: All your agent sessions on every machine](https://blog.atuin.sh/threads-agent-sessions/) | 242 (11-18) | 242 (+0) |
| [Emacs Is My Browser](https://joshblais.com/blog/emacs-as-my-browser/) | 239 (11-18) | 240 (+1) |
| [A Perfect SimCity](https://www.jeffquast.com/post/a-perfect-simcity/) | 210 (11-18) | 235 (+25) |
| [WebGL Flight Simulator with seed generated terrain](https://baron.by.dai.studio/) | 232 (11-18) | 232 (+0) |
| [Generative AI uses more energy on non-English text](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/) | 231 (11-18) | 231 (+0) |
| [VisualBasic.World: A gallery of Planet Source Code programs from 1997 to 2012](https://visualbasic.world/) | 224 (11-18) | 228 (+4) |
| [Squircles](https://linebender.org/wiki/curves/squircle/) | 228 (11-18) | 228 (+0) |
| [Researchers track whole body movement with just a smartwatch](https://news.cornell.edu/stories/2026/11/researchers-track-whole-body-movement-just-smartwatch) | 227 (11-18) | 227 (+0) |
| [My favourite modern NES games](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/) | 221 (11-18) | 223 (+2) |
| [Preserving 30 years of Salon journalism](https://blog.archive.org/2026/11/12/preserving-30-years-of-salon-journalism/) | 219 (11-18) | 219 (+0) |
| [The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough) | 216 (11-18) | 217 (+1) |
| [Advancing science and engineering with Antigravity's /teamwork](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) | 214 (11-18) | 215 (+1) |
| [Show HN: Alloy CSS, dialogs, menus and tabs that work with JavaScript off](https://alloyhtml.com/example.html) | 207 (11-18) | 210 (+3) |

## Throughline

The first thread is the arithmetic arriving. Anthropic raised $81.34 billion at $83 and the shares opened at $111.50 — a 34% gift to the allocation, which is what a hot book looks like — and then fell 13% inside thirty minutes while the Dow dropped 800 points. Every headline about the debut was arithmetically correct and described a different company: $2 trillion on Reuters' share count, $1.5 trillion on Yahoo's, $1.27 trillion at the price the 13.1 billion implied shares actually traded at. The honest summary is that the largest IPO in history priced below what the private market had been told to expect, popped on the first print, and gave most of it back before lunch. That is not a collapse. It is the first time the AI trade has had to produce a number that a public market can mark every day, and the number went down while the story was still being told.

The second thread is that the disclosure pipeline, not the discovery pipeline, is now the weak link. Ruby2ßhell is a one-byte overflow that has been in `upcase` since Ruby 2.4.0. The OpenJDK Base64 bug had a pull request in September with the overflow right there in the title, and it was closed as a correctness fix. nginx's integer underflow sat in a public repository for a week with a fix and no PSA. Three foundational bugs, three processes that did the reasonable thing with the information they had, and the information was wrong because the people finding these bugs are increasingly agents reporting exactly what they were asked to report. Meanwhile Google and Microsoft both shipped cheap cyber models this week and framed them as defence, which is true and also the best sales pitch either of them has had all year.

The third thread is maintenance, and it ran through the front page in a way that felt like a theme and not a coincidence. "Smart people who give a shit" is the essay, but the evidence is the smaller stories: a man replacing his garage door opener's ad-serving app with a $62 open-source board and a cron job; Quad9 leaving France because a court order costs less to issue than to fight, and hospitals finding out when DNS stops; KDE's thirty-year documentary at 581 points, which is a story about people doing this without a company; Archive Team pulling down twenty years of Apple's support forum before Apple deletes it. The building is cheap now. The keeping-it-running is not, and none of this week's announcements were about the second thing.
