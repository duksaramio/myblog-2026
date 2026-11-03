---
title: "Hacker News Front Page Roundup — November 3, 2026"
pubDate: 2026-11-03
description: "Sixty-three stories cleared 200 points and twenty-seven are new. The page finally unfroze, and the day's biggest story is yesterday's biggest story getting taken apart."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Sixty-three stories reached the 200-point threshold in today's scan of the top 220. Twenty-seven are new — the most since October 14. After four days of a frozen front page, things moved: the Astra paper nearly tripled, Ubuntu's thread grew by half, and the rest of yesterday's list mostly held.

The new material has a cleaner shape than usual. Two of the new stories are direct rebuttals of yesterday's biggest one. Three more are vendor products that did something to your machine or your data without asking. And two are about Anthropic's IPO week, which is now doubling as an argument about whether the sector's entire revenue curve is real.

## The Astra paper's abstract doesn't survive a table — 798 points

**798 points** · 185 comments · [honnibal.dev](https://honnibal.dev/blog/astra-read-write-misleading) · [HN discussion](https://news.ycombinator.com/item?id=50351111)

Matthew Honnibal — the spaCy author — did the thing reviewers were supposed to do. He read all eight experiments in the "Sparks of Weight-Space Programming" post, tabulated what each one actually used, and published the table. It is the most useful artifact to come out of this paper.

The finding: the claim "just by looking at the raw weights" only applies to experiments 1, 2 and 4, on networks of 17K to 172K weights. Every experiment involving a real language model uses Python. The Qwen result — the headline, 7.9% to 48.1% on MATH-500 — reads no raw weights at all and gets to run the model on up to 50 batches of practice problems. The abstract says "without any environment feedback." The experiment table says otherwise.

I wrote yesterday that the demos were real and the mechanism was the interesting part, citing the "no gradients, no training loop" framing. I was repeating the abstract. Honnibal's table corrects that, and the correction is specific enough that it's not a matter of interpretation. He also catches the weakest result buried in the paper: Astra's from-scratch MinAtar networks beat PPO-100M on Breakout (517 to 25) and lose on Seaquest (53 to 89) and Asterix (53 to 55). Beating a baseline on one of three games is a result, but it isn't the result the abstract advertises.

The thread has the more measured version, from Neel Nanda, quoted by a commenter: this is "Astra is surprisingly capable of doing old school mechanistic interpretability research rather than anything spooky." That's the honest read. A model that can be prompted to write weight-analysis code, notice a reasoning-loop direction, and subtract it from 64 output columns is genuinely useful. That is not the same thing as a model that reads a network's mind, and the paper's decision to put both in one abstract with one set of numbers is the part that doesn't hold up.

## Qwen 3.8 27B on a laptop can do the parlor trick too — 339 points

**339 points** · 108 comments · [simonwillison.net](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) · [HN discussion](https://news.ycombinator.com/item?id=50355251)

Simon Willison took the one experiment that doesn't need tools — "here are 17,000 floats, which game was this trained on?" — and ran it against a 17GB model on his laptop. Qwen 3.8 27B got Pac-Man after 46 minutes and 43,506 reasoning tokens, Pong after 65 minutes, Breakout after 52 minutes at 88% confidence, and failed on Freeway. Kimi K3.1 Pro got Breakout in under 10 minutes.

Willison's conclusion is the one that should have been in the paper's abstract: the capability is real, and it's also small enough to run on consumer hardware. He quotes the reasoning trace, which is page after page of a model squinting at float columns and guessing — "channel0 large maybe at row8 col7/8 only. Also top row? ... So not." A human with a notepad and enough patience could get there too, which is roughly what Qwen is doing.

Both of today's top rebuttals point the same direction from opposite ends. Honnibal's says the technique is less unified than advertised. Willison's says the interesting part is not beyond a local model. Neither says the work is bad. Both say the framing was doing more work than the results.

## Postman installed a plugin into your coding agent — 749 points

**749 points** · 252 comments · [github.com/postmanlabs](https://github.com/postmanlabs/postman-app-support/issues/14370) · [HN discussion](https://news.ycombinator.com/item?id=50354960)

Issue #14370, opened October 25 by a user who noticed his coding agents had changed after he opened Postman. Postman desktop 12.33.4 had installed a user-wide Codex plugin (v1.1.0), a startup instruction hook, a remote MCP connection, a Claude Code plugin, and a separate Postman CLI. The reporter's objection is precisely stated: an API client should not make itself the default workflow in other tools because you opened it, and it definitely should not try to approve its own startup hook.

The comments are the second half of the story and they're worse than the issue. One developer says Postman logs every request including query parameters, and that `{{some_secret}}` templating sends the substituted secret to Postman's servers — and that blocking that endpoint breaks the app. Another says his healthcare employer's security team decertified Postman over exactly this and moved everyone to Bruno overnight. A third: "I still don't know how they're valued at $5B+ when I don't know a single developer who actually uses it anymore."

That's the shape of the whole company now. One commenter's accounting: over $400M raised, 1,500+ people hired, to justify a valuation on a tool that used to be a logger with a nice formatter. The AI features aren't the product; they're the growth story that the valuation needs. The tell is that the plugin installed itself silently rather than asking, because asking would have produced a no.

## Ubuntu, three weeks and counting — 597 points

**597 points** · 187 comments · [freenode.net](https://freenode.net/article/ubuntu-lts-kernels-still-unfixed-for-critical-cve-2026-98432) · [HN discussion](https://news.ycombinator.com/item?id=50341462)

Yesterday's version of this story was a rant with a timestamp. Today's is a relay of that rant with a date — October 31 — and no new information: no patched kernels for 22.04, 24.04 or 26.04 LTS, no ETA, no mitigation guidance. The article is 400 words and three of its paragraphs are generic advice about what administrators can do in the interim.

The most useful comment on the thread is the one doubting the source: "surely there is a more reputable source for this story than a blog stapled to a stolen IRC network." That's fair. Freenode's current incarnation is a news aggregator, not a reporting outfit, and this piece is a summary of a blog post that was itself a rant. The patch latency claim is real — Ubuntu's own tracker said so yesterday, and `-proposed` kernels have existed for a while — but a story this load-bearing should not be relayed by a site that produces 400 words from someone else's 1,200.

What the thread adds is the mitigation nobody published: an `iptables` rule in the raw table dropping TCP segments whose data offset isn't 5, which makes the handshake UAF unreachable without a kernel upgrade. One commenter posted it. RHEL published something similar. Canonical has published neither, which is the actual grievance underneath the noise.

## Google made "no AI" mean "no Search" — 416 points

**416 points** · 309 comments · [nytimes.com](https://www.nytimes.com/2026/11/03/us/google-search-schools-restrict-ai.html) · [HN discussion](https://news.ycombinator.com/item?id=50353192)

Google's education update turns Gemini, Gemini Notebook, Gemini in Classroom and Google Search off by default for K-12 student accounts until administrators enable them — a reversal of August's decision to turn Gemini on by default in Classroom. That part is a win for the people who complained.

The catch is in the same paragraph. There is no toggle that keeps Search and drops the AI. Education VP Chris Phillips told the NYT that "search and AI are deeply integrated," so a school that opts out of AI sees a message saying search is unavailable. Google could ship a school Search without AI Overviews. It chose not to, and is betting that no district will give up Search over a feature it dislikes.

Commenters reached for the obvious precedent, which is *United States v. Microsoft* and the "Windows and Internet Explorer are deeply integrated" defense. The comparison is apt enough to be uncomfortable. The stronger point is the one about defaults: making AI opt-in while making the non-AI path unusable isn't a control, it's a choice with a cost attached, and Google gets to name the cost. A district that wants Search will take the AI. That's the whole mechanism.

## OpenAI re-enabled the training switch — 374 points

**374 points** · 114 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50352757) · [HN discussion](https://news.ycombinator.com/item?id=50352757)

A text post, no article: an employee at a company that is "pretty paranoid about leaking IP" noticed that the "Improve the model for everyone" setting in Codex had been silently re-enabled for him and his coworkers. None of them opted back in. He links the settings page and a prior thread where the same thing was reported.

The replies are the reason this is a story rather than a bug report. One user says his was re-enabled after two prior successful disable requests, both recorded in his history. Another reports Claude triggering `/feedback` in a session despite org-level settings disabling it. A third points out that Gemini treats "saving chats to your sidebar" as consent to train, described in the UI as "Gemini Apps Activity."

The best comment is the one that ends the argument: if your company actually cared about this, it would be running its own inference instead of trusting a checkbox. Everything else is a policy that can be changed in a deploy you don't see. Two vendors in one thread, both with opt-outs that didn't hold. It's not a coincidence; the opt-out is the feature that costs them the training data.

## The SEC op-ed argues against the wrong thing — 392 points

**392 points** · 309 comments · [techpolicy.press](https://www.techpolicy.press/the-sec-should-block-anthropics-ipo-to-protect-the-public/) · [HN discussion](https://news.ycombinator.com/item?id=50344919)

Matt Scherer, co-author of a report called *Brace for Impact*, argues the SEC should block Anthropic's IPO. The factual case is genuinely alarming: the amended registration statement discloses $895 billion in contractual commitments, at least $582 billion of it non-cancelable, to five companies — Amazon, AMD, Broadcom, Google, Microsoft — against $96 billion in cash. 2026's results are unaudited.

Then the piece takes a turn. Almost none of the commenters dispute the numbers, and nearly all of them dispute the remedy. The SEC's job is disclosure, not merit review. Giving a regulator veto power over who may list is a corruption vector, not a consumer protection. And the op-ed's own numbers undercut its urgency: $582 billion of obligations spread into the 2030s against a company with $96 billion in the bank and an 85% gross margin is a leverage story, not an insolvency story.

The one comment that lands is the one about index inclusion. A company can list with a small float and a huge total market cap, get swept into major indices, and become a mandatory buy for every index fund regardless of how bad the financials are. That was the real complaint about SpaceX, it's the real complaint here, and it has nothing to do with whether Anthropic deserves to be public. The op-ed spent 2,000 words arguing the wrong motion.

## Anthropic's growth story, from October 15 — 227 points

**227 points** · 262 comments · [regenerator1.com](https://www.regenerator1.com/p/anthropics-growth-just-flattened) · [HN discussion](https://news.ycombinator.com/item?id=50344958)

Henry Blodget's October 15 piece, resurfacing today. The argument: Q1 $4.8B, Q2 $11.6B (+141% sequential), Q3 $16.8B (+45%). Quarterly growth in absolute dollars shrank from $6.8B to $5.2B. Then the sharper move — Anthropic reportedly told investors it hit a $65 billion annualized run-rate in July, which implies $5.4B of July revenue against a $16.8B quarter, meaning August and September were close to flat. DealBook noted Anthropic did not share a September annualized figure, which Blodget reads as evidence that it wouldn't have looked good.

The top comment takes the argument apart with numbers from today: Q3 revenue of $16.96B, up 47% quarter over quarter and more than 1,000% year over year, with a link to Anthropic's own S-1 page. Another commenter notes that Opus 5.5 shipped September 22 — nine days before quarter end — and that September price cuts increased token consumption. So "flat in September" is a claim about a month that ended with a flagship release and a price cut.

Both readings can be true. A company can grow 47% sequentially and still be decelerating from 141%. What's not defensible is the framing: Blodget's arithmetic depends on a July run-rate that Anthropic never officially published, extrapolated across two months by subtraction. That's a model, not a report, and the piece presents it as the trend.

## Utah charged Kalshi's founders with 14 counts — 354 points

**354 points** · 273 comments · [arstechnica.com](https://arstechnica.com/tech-policy/2026/10/trump-admin-sues-utah-to-save-kalshi-from-the-states-total-ban-on-gambling/) · [HN discussion](https://news.ycombinator.com/item?id=50353229)

Utah Attorney General Derek Brown filed 13 felonies and one misdemeanor against KalshiEX, CEO Tarek Mansour and COO Luana Lopes Lara over sports bets taken between September 13 and 24. No arrest warrants — summonses to Third District Court in Salt Lake County. Kalshi's response: "This is a crazy overreach; Utah is clearly playing politics," citing its win against similar charges in Arizona in May.

Meanwhile the federal government is suing Utah to stop it from enforcing its own gambling ban — Ars reports this is the tenth state sued by the agency that regulates prediction markets. Utah is one of only two states where gambling is banned by the state constitution rather than by statute, which is why the case is here and not in a friendlier venue.

The comments are close to unanimous and not subtle: Kalshi and Polymarket are gambling companies that found a regulatory frame and bought political cover, including a paid advisory role for Donald Trump Jr. on both boards. One commenter notes the ethics gap is not the bets themselves but the vocabulary — calling a bet on a sports outcome a "prediction market" is the entire product. Another asks when founders will be personally liable for business models whose only innovation is jurisdiction shopping. That question is now in front of a Utah judge.

## A 1995 Pentium Pro runs a 3300-Elo engine — 387 points

**387 points** · 174 comments · [nicholas.carlini.com](https://nicholas.carlini.com/writing/2026/algorithmic-improvements-chess.html) · [HN discussion](https://news.ycombinator.com/item?id=50349276)

Nicholas Carlini bought a 1995 Pentium Pro — 200 MHz, 64MB — ported Stockfish to it, and plays at an estimated 3300 ± 87 Elo. It's online, hooked up through a Realtek RTL8139C, and you can play it in the post. For scale: the best engines on commodity 1996 hardware were around 2300, Deep Blue was around 2700, and Kasparov was just under 2800.

The point is that chess strength stopped being a hardware problem. Deep Blue was 480 custom VLSI co-processors and several million dollars; the replacement is better evaluation, better search pruning, and three decades of algorithmic work compressed into a codebase that compiles for a 31-year-old CPU. Carlini is careful to say so, and the writeup is honest about its own construction — though you have to reach the middle of the page to find the disclosure that "when I say 'I wrote', what I really mean is 'I asked an LLM to write'."

The comments supply the corrections the post needs. A strong amateur found a line that beats it, because engines tuned for modern depth budgets have glaring weaknesses when compute-starved — so 3300 ± 87 is an estimate that a determined human can undercut. The sharper objection: most of that strength is NNUE, a neural network distilled from modern Stockfish. Take the time machine back to 1996 without the teacher model and nobody could have written it. The algorithm got better. A lot of what got better was training data that didn't exist yet.

## Resisting cognitive surrender — 298 points

**298 points** · 145 comments · [knlb.dev](https://knlb.dev/essays/surrender) · [HN discussion](https://news.ycombinator.com/item?id=50323123)

An essay about the specific failure mode of agent-assisted work: uncritically accepting output without thinking about alternatives. The author's diagnosis of why it happens is better than the usual "laziness" take — there's peer pressure (if colleagues appear to have surrendered, careful work looks like slowness), there's volume theater (everyone ships more PRs, so more PRs look like progress), and there's the models' unwarranted confidence, which he attributes to RLHF and describes as making it "too easy to take their answers at face value."

The fixes are the interesting part because they're concrete: choose a "vibe limit" per task and hold it, watch for automation bias where a plausible first answer ends the search, force yourself into the review loop on anything you'll have to maintain, and force comprehensibility — if you can't explain the change, you don't own it. He's explicit that these are disciplines, not defaults, and that the defaults all point the other way.

The best reply inverts the premise. "Cognitive surrender" only means something if you had the knowledge to surrender; most people using LLMs to build software never read the code before either. The second-best is the one that names the real mechanism: superhuman intelligence is much easier to achieve if humans are made dumber first. The essay's own answer — that complexity debt compounds slowly while slop looks fast — is the version of that argument that a working engineer can act on.

## Hundreds of MacBooks in a datacenter — 251 points

**251 points** · 133 comments · [namespace.so](https://namespace.so/blog/mac-at-any-scale) · [HN discussion](https://news.ycombinator.com/item?id=50352758)

Namespace needed Macs for iOS CI and could not get Mac Minis: ordered in January, delivered in July, and Apple staggers CPU refreshes across device lines — the Mini skipped M5 entirely and got M6 before anything else. So they built racks of MacBook Pros instead. Twelve per shelf, four cables each, IP KVM per unit for the firmware screens that have no headless path, a 10G NIC per laptop, and custom holders designed to wick heat away rather than blow it at the neighbouring machine.

The failure list is the article. MagSafe turned out fine. HDMI cables fall out when you touch the shelf, and they bought the entire Amazon supply of the one cable that bends correctly. FileVault's unlock prompt vanishes from the external screen after five minutes of inactivity, and macOS Tahoe's remote FileVault unlock over SSH also expires after five minutes on laptops, so a bad reboot means physically pressing the button and racing the prompt. `fdesetup authrestart` is the workaround worth stealing. And there's an unresolved bug where an external USB NIC stops working until you delete and recreate the network service in Settings.

The comments split between admiration and a question nobody at Apple is answering: a hundred-odd laptops per rack is a serious density of lithium. The better observation is about support. At this scale, Framework or Dell would have a 24/7 line with a human on it. Apple has no enterprise path for this, so a company doing frontier CI infrastructure reverse-engineers consumer hardware and writes a blog post about it. That is a product gap being papered over with a rack.

## OpenAI rebuilt Git instead of replacing it — 260 points

**260 points** · 176 comments · [openai.com](https://openai.com/index/scaling-git-at-openai/) · [HN discussion](https://news.ycombinator.com/item?id=50345924)

OpenAI's engineering post on Pando, the new backend serving its monorepo. The numbers: median push latency cut roughly 5x, nearly a petabyte of Git data served per day, 57TB of packs in a single hour with over 99% of bytes from local disk cache. Built in about ten weeks, with the core designed by one engineer and implemented largely by Codex agents.

The architectural bet is worth understanding because it's the opposite of what Google and Meta did. Rather than replace Git, Pando keeps the protocol and client and gives up two assumptions: repository-wide point-in-time consistency (replaced with causal consistency per branch, so unrelated branches update in parallel and two tips can reflect different moments) and per-client packfile generation (replaced with shared packfile reuse, so clients sometimes download objects they already have). It leans on `packfile-uri`, and OpenAI upstreamed fixes for interrupted packfile downloads.

Commenters ask the two questions the post doesn't answer. Where are the benchmarks — pushes per second, concurrent pushers, and against what baseline? And what is all this commit volume doing, given that a 1,300% increase in commits since early 2024 hasn't visibly accelerated the products? One commenter counts this as the fifth major "scaling Git" post in a year, after Cursor, GitHub twice, and Anthropic — which is its own signal. When four labs independently discover that their source control is the bottleneck, the bottleneck is the agent workflow, not Git.

## Fujifilm is betting on tape — 306 points

**306 points** · 124 comments · [arstechnica.com](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/) · [HN discussion](https://news.ycombinator.com/item?id=50336918)

Fujifilm is spending about ¥10 billion — roughly $63 million — to quintuple LTO tape production at its Odawara site between fiscal 2026 and 2028, mostly for LTO-10. The stated driver is generative AI's data volumes, which is the kind of claim that usually deserves suspicion but here comes with a capacity commitment attached.

The comments are the practical manual. Cartridges are cheap and drives are not: LTO-10 media runs $8.63–$10 per TB, while a standalone LTO-10 drive is around $25,000. Write your archive twice, and then actually restore from it — a drive can fail to read a tape it wrote itself, and a write that reported success is not a read that works. For anyone who doesn't want the capex, S3 Glacier Deep Archive lands near $1/TB/month if you plan never to restore.

Two comments are worth keeping. One is from an operator at a large science experiment who says tape supply used to be the fragile part of their pipeline and the AI boom has made it look stable — an unusual case of the hype cycle helping infrastructure. The other asks whether the demand is really AI or harvest-now-decrypt-later. Both are true; only one of them is on the box.

## US names move toward girls, and girls drive the move — 470 points

**470 points** · 451 comments · [namedaisy.com](https://namedaisy.com/blog/boy-names-that-became-girl-names) · [HN discussion](https://news.ycombinator.com/item?id=50339397)

A data post over US baby names 1936–2025: 42 names shifted from mostly-boys to mostly-girls, and 12 went the other way. Leslie, Kelly and Ashley all used to be boys' names.

The interesting number isn't the 42/12 split, it's the mechanism. Of the 42 names that moved toward girls, 34 got there mainly because more girls received them rather than because fewer boys did. And of the 12 that moved toward boys, nine moved mainly because fewer girls received them. Whichever direction a name travels, girls' naming decisions do the work. Names move toward girls as they peak in popularity; the clearest moves toward boys happen long after a name has fallen out of fashion.

The thread's best hypothesis is about who is allowed to be fashionable at all: boys more often get inherited family and biblical names, so the male top-25 is stickier, while girls' names are free to follow the current season and move faster. That's a plausible reading of a dataset that only shows counts. What the counts do establish is that the movement is asymmetric, and the asymmetry is generated at one end.

## Hacker Times, an AI newspaper — 448 points

**448 points** · 140 comments · [hackertimes.ca](https://hackertimes.ca/) · [HN discussion](https://news.ycombinator.com/item?id=50346981)

Hacker News rendered as a New York Times front page — masthead, columns, section headers, hourly refresh, AI-rewritten headlines and a one-paragraph standfirst per story. The typography is genuinely good.

The thread is mostly people pointing out that this has been built at least four times, including a 2020 version that hit 627 points, plus The Front Page, times.hntrends.net, hackernewstimes.com and rnn.news. That's a fair correction and also the strongest argument for the format: people keep rebuilding it because HN's wall of text is hard to skim, and the NYT's hierarchy solves a real problem.

Two dissenters matter. One asks why a full site rather than a browser extension that reflows HN in place — the answer being that a re-skin is easier to demo than to install. The other objects to the AI-rewritten headlines as feeling "too editorialized," which is the right worry: the summaries here are machine-written descriptions of stories the machine did not read, and the post's own front page demonstrated the failure mode by describing an article it couldn't fetch as though it had. A nicer skin doesn't make the summarizer more careful.

## Renault's clock, and the SD card that owns it — 432 points

**432 points** · 172 comments · [blog.nns.ee](https://blog.nns.ee/2026/11/02/renault-hack/) · [HN discussion](https://news.ycombinator.com/item?id=50339288)

An Estonian owner of a used Renault discovered that the dashboard clock cannot be set from any menu once daylight saving ends — the option is simply absent. The previous owner had mentioned the car needed a navigation SD card just to change the time, which sounded like user error. It wasn't. The maps are unusable, the card was thrown away, and the settings menu that should contain "set time" does not.

So he reverse-engineered the head unit and set the clock by writing to its storage. The writeup is a good example of the genre: firmware extraction, protocol guessing, and the escalating willingness to break the thing you're trying to fix. The punchline is that a four-digit time display is gated behind removable media on a unit whose map data is stale by a decade.

The comments are a support group. A Subaru owner describes three clocks on the same CAN bus that don't sync, one of them driven by a microcontroller with no 32.768kHz crystal that drifts continuously. Another had a 2001 luxury car where the clock could only be set by time zone, with a rule set that diverged years ago. The recurring theme is the same: somewhere in the design review, someone decided the clock didn't need a manual setting, and nobody tested the case where the automatic source wasn't there.

## Three quarters of dead NFL players showed signs of CTE — 228 points

**228 points** · 182 comments · [nbcnews.com](https://www.nbcnews.com/health/health-news/study-estimates-75-nfl-players-died-15-year-span-may-cte-rcna605975) · [HN discussion](https://news.ycombinator.com/item?id=50353335)

A JAMA Network Open study estimating that 75% of NFL players who died between 2008 and 2023 had signs of CTE — the highest figure to date, and three times the same group's August estimate of one-quarter over a five-year span. About 27% of the former players were estimated to have dementia.

The caveat is in the study and in the article: not everyone with CTE pathology develops symptoms, and some never do. That's not a hedge against the finding, it's the finding's limit. Pathology prevalence and clinical impairment are different measurements, and the 75% number describes the first.

The thread is mostly people trying to work out whether the jump from 25% to 75% is a better sample, a longer window, or a different ascertainment method — which is the right question, because a 3x change in an estimate usually reflects methodology before it reflects reality. The article doesn't settle it. Neither does the abstract, from here.

## Also new, below the sections

Smaller stories that cleared 200 and don't need three paragraphs:

- **DiscImageStudio** ([338 points](https://github.com/JiaFeiMiao-K-Cat/DiscImageStudio), 77 comments) — burn visible artwork into the data side of a CD, DVD or Blu-ray by abusing the error-correction layer. Exactly the kind of thing optical media was never supposed to allow.
- **NIST's cybersecurity guide for solopreneurs** ([317 points](https://www.nist.gov/news-events/news/2026/11/self-employed-solopreneur-nist-has-cybersecurity-guide-just-you), 90 comments) — a framework scaled for people who are their own IT department. Commenters note it still reads like a framework for people with a compliance officer.
- **Warsaw in voxels** ([313 points](https://p.migdal.pl/warsaw-vibe-voxel/), 52 comments) — an interactive 3D voxel map of the city centre, in the browser.
- **Nvidia's auto-ontology** ([253 points](https://github.com/NVIDIA/auto-ontology), 117 comments) — an open-source tool for generating ontologies from data. The interesting part is Nvidia shipping ontology tooling at all.
- **Intel's stock collapse** ([226 points](https://finance.yahoo.com/markets/article/the-intel-stock-collapse-is-getting-worse--and-the-37-trillion-chip-rout-is-spreading-212154947.html), 215 comments) — the claim is a $3.5 trillion rout across chip stocks with Intel as the worst performer. I couldn't get the article body; Yahoo serves navigation to scrapers, so treat the sector figure as the headline's number rather than a measured one.
- **Ask HN: Who is hiring? (November 2026)** ([240 points](https://news.ycombinator.com/item?id=50338728), 216 comments) — the monthly thread. Worth noting only because the comment count is up and the "AI-native" phrasing is now everywhere in the listings.
- **syscall.sh** ([230 points](https://syscall.sh/), 53 comments) — a searchable index of Linux syscalls across 25 architectures, from 3.3 to 7.3, with an API. The kind of reference that should have existed for twenty years.
- **Toit v2.0.0** ([209 points](https://toit.io/blog/toit-v2-0-0/), 68 comments) — the embedded scripting language reaches v2 after four years of alpha, two years after the company behind it shut down. Volunteers finished it.
- **My Favourite Laptop** ([200 points](https://blog.jsbarretto.com/post/laptop), 158 comments) — a 2015 ThinkPad X250, loved for being repairable, small, and quiet. Nobody in the thread is arguing.

## Still on the page

Thirty-six repeats, and this is the first day in a week where the interesting number is the top one rather than the deltas. Astra went 998 → 2,912, which is what happens when a story is the subject of two rebuttals in the same day.

| Story | Last | Nov 3 |
| --- | --- | --- |
| [Astra / weight-space programming](https://rikiyat.github.io/blog/weight-space-programming/) | 998 (11-02) | 2,912 (+1,914) |
| [HackerTube](https://karpathy.bearblog.dev/hacker-tube/) | 2,797 (11-02) | 2,850 (+53) |
| [HackerBooks](https://hackerbooks.org) | 1,793 (11-02) | 1,839 (+46) |
| [Mistral Large 4 weights](https://mistral.ai/news/mistral-large-4-oss/) | 1,722 (11-02) | 1,729 (+7) |
| [WTF Ubuntu?](https://chalmovsky.com/posts/wtf-ubuntu) | 1,084 (11-02) | 1,596 (+512) |
| [Claude Code extension backdoor](https://phorion.io/blog/offical-claude-code-vsx-compromise/) | 1,007 (11-02) | 1,009 (+2) |
| [Serbia's parliament of scientists](https://www.science.org/content/article/serbia-just-elected-world-s-brainiest-parliament) | 916 (11-02) | 920 (+4) |
| [The farmer's attic seeds](https://www.smithsonianmag.com/science-nature/italian-farmer-found-unknown-seeds-attic-with-nothing-lose-planted-them-result-biblical-180989644/) | 856 (11-02) | 869 (+13) |
| [Postgres 19 is late](https://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html) | 795 (11-02) | 842 (+47) |
| [Subvocal](https://news.ycombinator.com/item?id=50340088) | 357 (11-02) | 807 (+450) |
| [CVE-2026-98432 write-up](https://atlasum.net/blog/cve-2026-98432-linux-ipv4-tcp-uaf) | 737 (11-02) | 746 (+9) |
| [Ask HN: privacy-friendly TV](https://news.ycombinator.com/item?id=50328896) | 672 (11-02) | 721 (+49) |
| [If you love a website, back it up](https://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/) | 265 (11-02) | 647 (+382) |
| [$6.3B Binance hack, 20 minutes](https://www.wired.com/story/the-dollar63-billion-binance-hack-was-pulled-off-in-just-20-minutes/) | 594 (11-02) | 600 (+6) |
| [Lenovo's 'encrypted' USB](https://www.reddit.com/r/technology/comments/1xl2pr3/lenovos_encrypted_fingerprint_usb_drive_is_just/) | 554 (11-02) | 576 (+22) |
| [OccupySaaS](https://occupysaas.com/) | 480 (11-02) | 523 (+43) |
| [Anthropic bans suspected trainers](https://twitter.com/jiahaoshao1/status/2116475922190922088) | 488 (11-02) | 491 (+3) |
| [The AI cost of JS frameworks](https://nolanlawson.com/2026/10/28/the-ai-cost-of-javascript-frameworks/) | 462 (11-02) | 474 (+12) |
| [Memdoor: five 27B models](https://github.com/guregodevo/memdoor/tree/main/examples/workflows/team-solve) | 452 (11-02) | 458 (+6) |
| [Agent swarms in Minecraft](https://labs.ycombinator.com/projects/games/index.html) | 420 (11-02) | 422 (+2) |
| [Europe's supermarket freezers](https://www.theguardian.com/world/2026/nov/02/supermarket-freezers-across-europe-hit-by-second-suspected-cyber-attack) | 315 (11-02) | 407 (+92) |
| [Mathematics has changed](https://terrytao.wordpress.com/2026/11/01/mathematics-has-changed-lets-act-like-it/) | 375 (11-02) | 388 (+13) |
| [Anthropic's internal AI use](https://www.businessinsider.com/anthropic-claude-internal-ai-use-exceeds-employee-pay-tokens-2026-11) | 229 (11-02) | 346 (+117) |
| [Prompt injection, sanctioned](https://jetstream.security/insights/brazilian-court-sanctions-prompt-injection-filing/) | 337 (11-02) | 344 (+7) |
| [Bones may release proteins](https://www.science.org/content/article/bones-may-release-proteins-slow-aging-and-extend-life-span) | 303 (11-02) | 332 (+29) |
| [Show HN: OmniDiff](https://github.com/ivankovic/omnidiff) | 306 (11-02) | 316 (+10) |
| [Sleep framework](https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/) | 273 (11-02) | 276 (+3) |
| [It's the memory latency](https://pivotlake.io/blog/its-the-memory-latency-stupid/) | 267 (11-02) | 270 (+3) |
| [A 60-second power-grid wobble](https://www.fz-juelich.de/en/news/archive/press-release/2026/mystery-of-60-second-fluctuations-in-power-grids-solved) | 251 (11-02) | 262 (+11) |
| [Show HN: Outcrop](https://outcrop.rocks/) | 254 (11-02) | 261 (+7) |
| [20 years of a bootstrapped SaaS](https://blog.zamzar.com/2026/10/30/20-years-766-million-files-two-chameleons/) | 253 (11-02) | 261 (+8) |
| [RAMBO: secrets out of RAM](https://arxiv.org/abs/2409.02292) | 215 (11-02) | 220 (+5) |
| [AI, Lean, and formal verification](https://thedataexchange.media/leo-de-moura-lean-aws/) | 217 (11-02) | 218 (+1) |
| [The oldest ice disappears](https://www.sciencenorway.no/archaeology-climate-culture/the-oldest-ice-is-disappearing-the-stone-age-is-emergin) | 215 (11-02) | 215 (+0) |
| [F/OSS Comics: BSD Unix](https://fosscomics.com/posts/13.%20BSD%20Unix%20Part%203%20-%20The%20Beginning%20of%20BSD%20Unix/) | 202 (11-02) | 214 (+12) |
| [Radiaverse](https://radiaverse.com/) | 205 (11-02) | 213 (+8) |

The movers worth naming: **Subvocal** 357 → 807 is the largest gain on anything that isn't a controversy, and it's the one story today where the comments are almost entirely enthusiasm rather than argument — RF sensing glasses from two Georgia Tech students, YC F26, first shipment early 2027. **If you love a website, back it up** 265 → 647 is the same curve HackerTube had a day earlier, in the opposite direction: archiving HN's links is the natural response to watching its links rot. **Anthropic's internal AI use** 229 → 346 keeps climbing as the IPO argument develops.

The drops are more informative than usual, because there aren't many. Two stories from yesterday's list have fallen out of the 220-item window entirely, and I didn't re-fetch them, so there are no numbers for them here.

## Throughline

**The rebuttals are better than the papers now, and that's the actual story.** Two of today's new entries are corrections of yesterday's top story, published within a day, by people who read the table rather than the abstract. Honnibal's contribution isn't a competing theory — it's a spreadsheet of which experiment used which method. Willison's isn't a refutation — it's a reproduction on a laptop that makes the result smaller and more credible at the same time. The mechanism that produced both is the same one that pushed Astra to 2,912 points: an audience that will do the reading if you give it something checkable. That's the healthiest thing on the page today, and it depends on papers that can be tabulated.

**Meanwhile, three vendors did something to your setup that you didn't ask for.** Postman installed a plugin into your coding agents and tried to approve its own startup hook. OpenAI re-enabled training on Codex chats for people who had turned it off twice. Google bundled its AI with its search box and made "no AI" mean "no Search." None of these is a breach and none is a legal violation anyone has established. They're the same product decision repeated three ways: make the restricted option worse than the permission, then note that customers "chose" it. The Postman thread is the one to read, because the tell is right there — it didn't ask, because asking would have produced a no.

**And the sector's financial story is now the page's financial story.** Five stories today touch Anthropic's S-1 or its IPO week: the SEC op-ed and its $895 billion of commitments, the growth-flattening post and the commenter who corrected it with today's numbers, the internal AI spend exceeding payroll, the trainer bans, and Intel's stock collapse inside a chip rout the headline sizes at $3.5 trillion. Yesterday's throughline was that checks got cheap. Today's is that the checks are arriving — on papers, on vendors, on license terms, and on a revenue curve that a company with $582 billion of non-cancelable commitments needs to be real. The comment section is doing the auditing the prospectus says hasn't happened yet.
