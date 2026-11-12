---
title: "Hacker News Front Page Roundup — November 12, 2026"
pubDate: 2026-11-12
description: "Ninety-eight submissions cleared 200 points and twenty-four stories are new. Jensen Huang resigns as Nvidia CEO and the board names a CFO as interim, Anthropic prices its IPO at up to $1.4 trillion, and United bans the agents that were going to book your flight."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Ninety-eight submissions cleared the 200-point threshold across the top 180 ranked items and a 40-hour date sweep. Five of them are the same resignation under five different links. Collapse the duplicate submissions and twenty-four stories are new to this roundup; fifty-nine repeats are in the table at the bottom.

The day has one real story and it is not a product launch. Nvidia's board moved on its founder, he resigned within hours, and a company worth four trillion dollars was being run by its CFO before the US markets closed. Everything else on the page — an AI lab pricing a trillion-dollar IPO, an airline banning agents, a model family renamed after chemical elements — is happening in the shadow of that.

---

## Jensen Huang resigns as Nvidia CEO — 2,323 points

**2,323 points** · 2,280 comments · [apnews.com](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) · [HN discussion](https://news.ycombinator.com/item?id=50467087)

**1,210 points** · 1,617 comments · [wsj.com](https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad) · [HN discussion](https://news.ycombinator.com/item?id=50459703)

**402 points** · 517 comments · [nytimes.com](https://www.nytimes.com/2026/11/11/technology/jensen-huang-nvidia-affair.html) · [HN discussion](https://news.ycombinator.com/item?id=50459321)

Huang resigned Thursday as president, chief executive and director, effective immediately, ending 33 years at the company he co-founded. Colette Kress, the chief financial officer, is interim CEO while the board searches for a permanent replacement, internal and external. The board also appointed Harvey C. Jones — a director since 1993, the year Nvidia was founded — as its first-ever chair. Shares fell between 10% and 14% at the open and had recovered to roughly -5% by the time the WSJ story was being read. Kress told staff in an internal email that she would hold a company meeting on 18 November.

The trigger was two affairs: one with Alice Huang (also known as Huang Le), a former managing director of the Singapore data-centre firm Megaspeed, whom US intelligence reportedly assessed as passing information to Beijing, and one with an Nvidia employee who reports to her chief executive. The second one surfaced late Wednesday, after the board had already spent a week saying it had "no reason to believe" that national security or company secrets were compromised. That sentence is now the most expensive corporate hedge of the year.

The framing fight is the interesting part. The Wall Street Journal's URL says the board was "preparing to oust" Huang; the headline on the same page says he "has been ousted"; the body says he resigned. All three are true in sequence, and the sequence matters: a founder-CEO of a $4tn company does not resign into a CFO caretaker unless he was given a number. What the board is actually managing is not the affair. It is the export-control question underneath it — Megaspeed became an Nvidia Cloud Partner four days after it was sold in 2023, its assets grew roughly ninety-fold to almost US$3bn, and it is under investigation in Singapore for chips that may have gone to China. Megaspeed's response on Thursday was a statement from chairman Tan Yong Pong promising cooperation with the Bureau of Industry and Security and a "comprehensive census" of its hardware, conducted by a US law firm it has just hired.

The comment thread splits between people who think the affairs are a pretext for an export-enforcement problem and people who think the board folded to a headline. Both miss the boring answer. Nvidia's China revenue runs through exactly these intermediaries, the company's most pro-China public statements came from the man who is now gone, and the CEO's personal life had become a compliance record. Whether or not anyone can prove a chip went the wrong way, a key-person risk that large had to be priced eventually. It got priced in one afternoon.

## Anthropic files to go public at up to $1.4 trillion — 721 points

**721 points** · 722 comments · [ipo.anthropic.com](https://ipo.anthropic.com/us/) · [HN discussion](https://news.ycombinator.com/item?id=50465829)

Anthropic's IPO site went up with the roadshow: 825 million shares at $70–78, up to $64.35bn in proceeds at the top of the range, a fully diluted valuation as high as $1.405tn, ticker ANT on Nasdaq, trading targeted for 19 November. The company was valued at $965bn in its Series H round six months ago. The book is reported covered at the range.

The financial highlights do the work the founders' letter won't. Q3'26 revenue was $17.0bn, more than 12x year over year. More than 11,900 customers spend $100K or more. Adjusted operating margin is 15%, operating margin is -3%, and the net loss of $23.3bn is almost entirely a $21.9bn non-cash charge from revaluing convertible notes, derivative liabilities and SAFEs. That last line is the one to read twice: the loss is an artefact of the company getting more valuable, which is a strange thing for a filing to be able to say.

Two things are worth being skeptical about. The valuation went from $965bn in May to $1.4tn in November without a new revenue disclosure in between, which is a 45% markup on narrative. And the real liability is not on the income statement — it is the compute commitments through 2045, which one commenter reads out of the prospectus at $900.9bn. A company that has promised to spend nine hundred billion dollars on compute has to grow into that promise, and the IPO is how it buys the time. The sharpest comment in the thread makes the same point from the other direction: if the models were good enough for recursive self-improvement, the private markets would have paid to wait.

## United Airlines bans AI agents from booking flights — 656 points

**656 points** · 680 comments · [cbsnews.com](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/) · [HN discussion](https://news.ycombinator.com/item?id=50458900)

United said Wednesday it will restrict third-party personal AI agents from booking, ticketing and checking in on its platforms — directly, and indirectly through travel agencies and aggregators — and is rewriting its booking policies to say so. The stated reasons are credential sharing ("sharing account credentials with personal, third-party AI assistants can expose sensitive information"), unintended purchases and mileage use, and federal rules that require a traveller to attest in person that their bags contain nothing prohibited, which an agent checking you in cannot do.

The unstated reason is on the record from an analyst. Henry Harteveldt of Atmosphere Research Group: United doesn't want "yet another, and potentially even more powerful, intermediary" than Google, the metasearch sites and the OTAs it already pays, and "flight searches cost airlines money." That's the whole policy. Every search query is a pricing-system hit, and an agent that shops twelve itineraries across six dates is a denial-of-service attack with a credit card.

Comments are split between people furious at airlines generally and people pointing out that "book my flight" was always a bad first use case for agents: it's a high-value payment with irreversible consequences, governed by fare rules nobody has read, where the user's actual preferences are a long list of exceptions. The practical read is that enforcement will be bot detection and ToS language, not a technical control — which means the ban mostly hits the people honest enough to identify themselves.

## Jane Street publishes a Socratic tutoring skill — 615 points

**615 points** · 141 comments · [github.com/janestreet](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) · [HN discussion](https://news.ycombinator.com/item?id=50438261)

The trading firm's `agent_skills` repo contains a `socratic-tutor` skill: a prompt that makes an agent teach rather than answer. It opens with a guard — if the user asked "explain X", answer normally and don't start a session — then decomposes the topic into 4–10 subskills, runs a 3–5 question diagnostic, and tracks each subskill at levels 0–5 with ASCII progress bars. The teaching loop asks one question at a time and stops. Wrong answers get a narrower question, not the answer. Level 5 requires the user to handle an adversarial case and explain the concept well enough to teach it.

What makes it better than the average "you are a tutor" prompt is the evaluation section. Levels are earned across two independent checks including unprompted recall. Vague answers don't count. Earlier subskills get re-tested without warning and demoted on failure. "Do not flatter" is an explicit instruction, with a suggested phrasing: "Not quite — why would X happen if Y were true?"

The thread's reaction is the usual split between "this is just good pedagogy, people have done it since ChatGPT shipped" and "yes, but nobody writes it down this carefully." The more interesting fact is institutional: a proprietary trading firm is publishing prompt assets in public, which is a cheap way to look like a research lab and a real way to hire.

## 93% of paint splatters are valid Perl programs — 558 points

**558 points** · 77 comments · [mcmillen.dev](https://www.mcmillen.dev/sigbovik/) · [HN discussion](https://news.ycombinator.com/item?id=50459745)

Colin McMillen's SIGBOVIK 2019 paper, resurfaced: OCR a hundred paint splatters, feed the output to a Perl interpreter, and 93% of them parse. Seven do not. The paper won an "Unwitting Participation Ribbon" for containing a genuine artifact, which is the most SIGBOVIK sentence ever written.

The errata section is better than the abstract. One splatter OCRs as `lerzfijglpFiji-j`, which evaluates to 0. Another as `-*?`, also 0. A third as `;i;c;;#\?z{;?;;fn':.;`, which evaluates to the string `c`. This is not evidence that Perl is a bad language; it is evidence that Perl's grammar is a superset of "things a program is allowed to be," which is a different design trade and one the field took the other way.

## Google's Decisions API turns the model into a classifier — 551 points

**551 points** · 157 comments · [blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) · [HN discussion](https://news.ycombinator.com/item?id=50456791)

`gemini-decision-1` answers bounded questions instead of generating text: `noul` for a yes/no with a probability, `choice` for 2–255 alternatives with normalized probabilities, `score` for an ordered rubric with per-level probabilities. You send one input — text, image, audio, PDF — and ask several questions against it in a single request, and every answer carries a confidence from 0 to 1 so your code can route the ambiguous ones to a human.

The pricing is the design. $0.10 per million input tokens, zero for output, no thinking-token bills, no separate OCR or transcription charges, and the shared input is billed once no matter how many questions you attach to it. Google is saying the expensive part of an LLM call is the reasoning, so here is a product with the reasoning removed. Internal users are the proof of concept: Gemini Notebook routes queries by intent to cut latency up to 40%, Stitch generates wireframes, CC picks an emoji from 200 options, and Search uses it as a safety layer against adversarial MCP tool behaviour.

Two objections from the thread are worth keeping. Asking a model for a confidence score is not the same as getting a calibrated probability, and there is a decent body of results showing those numbers drift; and Google's own framing — "fast, calibrated" — is a claim about eval sets, not about your data. The competitive answer is already out: Jev is cheaper for plain text. What Google has that nobody else does is a decision call that takes a video.

## Humble Bundle's rewrite broke logins, and the thread blames vibecoding — 349 points

**349 points** · 213 comments · [forums.spacebattles.com](https://forums.spacebattles.com/threads/humble-bundle-just-completely-killed-most-of-their-security-through-vibecoding.1346295/) · [HN discussion](https://news.ycombinator.com/item?id=50463899)

The primary here is a forum thread, not a disclosure, so treat the specifics as user reports. What they describe is consistent: a site rework that replaced the old storefront, broken Google and email login, one-time codes arriving an hour late, and account and security changes nobody asked for. Commenters who are subscribers confirm the login failures independently — one says they tried both Google and email and could not get in.

The "vibecoding" attribution is doing a lot of work in that thread and deserves pushback. Authentication regressions are the most common failure mode of any rewrite, aggressive or not, and the commenters who argue "this isn't AI's fault, a human signed off on it" are right. But the shape of the failure is familiar from AI-assisted rewrites: features that were load-bearing (rate limits, email delivery, session handling) were not in the prompt, so they were not in the output, and nothing in the process was looking for the absence.

The boring lesson is the one the thread keeps circling: a storefront that sells bundles did not need to be rebuilt. The old site worked. Someone shipped a rewrite anyway, and now the support queue is the product.

## CVE-2026-119618: a race condition in Apache's HTTP/2 module — 347 points

**347 points** · 187 comments · [wiz.io](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) · [HN discussion](https://news.ycombinator.com/item?id=50462177)

A synchronization bug in `assign_headers()` in `mod_http2`: concurrent threads share a resource without proper locking, an attacker corrupts heap memory, and an unauthenticated remote attacker gets code execution as the web server user. Apache HTTP Server 2.4.55 through 2.4.70 are affected; 2.4.71 fixes it. Standalone `mod_h2` builds from GitHub need to be past 2.0.42. Wiz says it was found independently by Anthropic and Google Cloud's vulnerability research team, and that at publication there was no public exploit and no observed exploitation.

Wiz's own numbers are the part to handle carefully. "64% of cloud environments have resources vulnerable" is a scan of what is installed, not of what is reachable, and the company says so; the "51% publicly exposed" figure explicitly ignores configuration. The real exposure is much smaller than either headline and much larger than zero, because HTTP/2 is on by default in most packaged configurations.

The comments land two useful hits. One is operational: if you shut httpd off instead of patching, remember that certbot's timer will happily restart it and leave it running. The other is a correction — Wiz's FAQ at one point cites a different CVE number (CVE-2026-111497) for the same bug, which is the kind of error that gets pasted into a ticket and never fixed. And the meta-story: two AI labs independently finding the same memory-safety bug in the same week is the new normal for vulnerability research, whether or not anyone says so out loud.

## Gemini 4 Hydrogen replaces 3.8 Flash — 345 points

**345 points** · 232 comments · [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) · [HN discussion](https://news.ycombinator.com/item?id=50471431)

Hydrogen is the cheap, fast execution model in a family that now includes Carbon and Argon for harder reasoning. Google's numbers: 2.5x faster than 3.8 Flash at the default setting, Terminal-Bench 4.1 at 57% against 18.2%, more than 5x fewer fabricated claims, and 2x to 2.8x faster with 12–23% fewer tokens on repository-scale work. One million tokens in and out. It also underpins Orchestrator in Antigravity, which switches between Carbon and Hydrogen mid-session and gets near-Carbon task success while using 24% less quota and finishing 19% faster.

Then the benchmark salad: HLE-Diamond 58.8%, Vals Tax Agent Bench 52.3% (first), Vals Legal Research 55.8% (tied first), Multimodal Knowledge Agent 53.4%, Agents' Last Exam 71.6%, fifth on Agent Arena. Any one of those is a claim about a specific harness and prompt format. The one that matters to a person paying for tokens is the 12–23% token reduction, because that one is measured on partner workloads rather than a leaderboard.

The thread's real complaint is the naming. Hydrogen sits below Carbon and Argon in atomic weight and therefore, by every intuition a chemist has, should be the weakest — except it just replaced 3.8 Flash at the same listed price as the undiscounted 3.8 Flash, which is a price increase dressed as a version bump. "Is Google abandoning the fast and cheap tier?" is a better question than any of the eval numbers answer.

## bootvine draws the systemd boot as a tree — 326 points

**326 points** · 128 comments · [codeberg.org](https://codeberg.org/wvhulle/bootvine) · [HN discussion](https://news.ycombinator.com/item?id=50425017)

A Rust and ratatui tool that takes over the virtual console during boot and replaces the scrolling wall of green text with the units that are still pending, arranged as a tree, plus a timeline of the slowest ones that already ran. It follows shutdown as well, handles passphrase prompts such as LUKS unlocks in place, and when a unit fails it shows the unit's last journal lines instead of making you switch VTs to find out.

Requirements are honest: systemd 246 or newer as PID 1, libdbus and libsystemd, a VT, and a systemd initrd if you want the initrd phase drawn too. There is a Nix flake that boots a sample machine with deliberately slow and failing units in QEMU, which is the right way to demo a boot tool — nobody wants to test it on their own machine. GPL-3.

The idea is small and correct. Boot is a dependency graph; drawing it as a log is a historical accident of what `printk` could do.

## Why writing correct software is hard, ten years on — 323 points

**323 points** · 145 comments · [pron.github.io](https://pron.github.io/posts/correctness-and-complexity) · [HN discussion](https://news.ycombinator.com/item?id=50465352)

Ron Pressler's 2016 essay, an extended cut of a Curry On talk, arguing from computability and complexity theory that programs and complete understanding are fundamentally at odds, so correctness costs what it costs. His stated motivation is the recurring claim that the right tools make correctness easy; the essay's answer is that some of the difficulty is a property of computation, not of your tooling.

The argument runs through Hilbert's programme, undecidability, and the complexity of verification, and it is a 45-minute read. It is also the correct frame for a week in which agents are writing large volumes of code that nobody fully reads. The essay does not say "don't verify." It says the price of verification is a law of nature, and any vendor telling you otherwise is selling you a benchmark.

## GitHub Actions now has lockfiles — 323 points

**323 points** · 64 comments · [hugovk.dev](https://hugovk.dev/blog/2026/lock-github-actions/) · [HN discussion](https://news.ycombinator.com/item?id=50459485)

The old advice was to pin every action to a full commit SHA, because tags are mutable and a supply-chain attacker can point a safe tag at malicious code — which makes workflows unreadable and diffs unreadable. GitHub now supports workflow lockfiles, and Hugo van Kemenade walks through the practical version: `gh extension install github/gh-actions-lock`, run `gh actions-lock`, and your `uses: actions/checkout@3d3c42e...` becomes `uses: actions/checkout@v7.0.1` with the SHA recorded in the lockfile. Renovate and Dependabot update the lock, `zizmor` audits the result.

This is the same solution every other ecosystem landed on, and it works for the same reason: humans read the tag, machines verify the hash. The gap it does not close is `runs-on: ubuntu-latest`, which is still a mutable pointer to whatever GitHub's image happens to be this week — the largest unpinned dependency in most workflows, and the one nobody puts in a lockfile.

## Microsoft's status page said fine while Outlook was down — 305 points

**305 points** · 166 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50471668) · [HN discussion](https://news.ycombinator.com/item?id=50471668)

**277 points** · 105 comments · [gvwire.com](https://gvwire.com/2026/11/12/microsoft-outlook-down-for-thousands-of-users-downdetector-shows/) · [HN discussion](https://news.ycombinator.com/item?id=50471731)

Outlook, Microsoft 365, Teams, OneDrive and Copilot went down for much of Thursday afternoon, mostly in the Americas. Downdetector went from about 2,400 Outlook reports at 12:50pm Eastern to more than 131,000 by 1:18pm. At 2:12pm Microsoft said it had paused all deployments, was moving traffic off the affected infrastructure, and was restarting affected servers; it later said it was checking whether the extra traffic reflected a genuine increase in requests. No root cause, no ETA.

The status page is the recurring scandal. At 12:50pm, with reports already climbing, it showed everything working. That gap between the telemetry Microsoft publishes and the telemetry its customers can see is now the most predictable part of every outage, and "we have paused deployments" is the modern ritual that admits the deployment pipeline was the suspect.

This is the second multi-hour Outlook incident this year; the August one was traced to an authentication problem inside Microsoft. Two in three months, both with the same shape: a control plane change, a traffic shift, and a public status page that lags reality by forty minutes.

## Emacs in the age of magic — 303 points

**303 points** · 148 comments · [commandlinesystems.com](https://commandlinesystems.com/magic.txt) · [HN discussion](https://news.ycombinator.com/item?id=50458208)

Jeremy Culhane's essay starts from a year of using Claude Code and arrives, by way of Lisp, the Chomsky era and the "Mathocalypse" — Scott Aaronson's term for a model carpet-bombing 8,000 research problems in three hours and producing 372 plausible hits — at an uncomfortable conclusion for people with strong opinions about editors: every advantage Emacs claimed was an advantage in typing, and nobody is typing anymore. Editing speed, customisation, the expressiveness of Lisp: all of it assumed a human at a keyboard being efficient about keystrokes.

The demonstration is two case studies in which a beginner took a reasonable idea to its absurd limit. `excali-mode.el` reimplements Excalidraw inside Emacs on the new canvas API, one for one, browser to Emacs, JavaScript to Elisp, `rough.js` to a C module. `cooked.el` builds a terminal emulator in Elisp to preserve comint's quality-of-life features. The magit example is the sharper one: the whole `C-x g`, `S`, `c c`, `C-c C-c` ritual that made you feel fast is now a greyed-out "commit" button that Claude Code offers at the right moment. You win, Claude wins, and Anthropic gets a co-author credit.

It is a nostalgic essay, but the claim underneath is measurable rather than sentimental: the editor's value was in the interface between a human's hands and a machine's state, and that interface is no longer where the work happens.

## Rust 1.100 — 302 points

**302 points** · 8 comments · [github.com/rust-lang](https://github.com/rust-lang/rust/releases/tag/1.100.0) · [HN discussion](https://news.ycombinator.com/item?id=50471793)

Released today. The substantive items: the never type is stabilised, `extern "custom"` is stabilised, custom allocators land (`std::alloc::Allocator`, `Global`, `System`, `Box::new_in` and the rest of the `_in` family), `-Cprofile-sample-use` is stable, `wasm32-wasip3` moves to Tier 2, and `powerpc64-sony-ps3` appears as a Tier 3 target for reasons best known to someone.

Custom allocators are the headline for anyone who has been waiting since the 2017 RFC era: `Vec<T, A>`, `Box<T, A>`, `Rc<T, A>` and `Arc<T, A>` all take an allocator parameter, and the trait is stable. The rest is hygiene — new lints for repeated `#[repr]` attributes, a deny-by-default lint for aligned fields in packed structs, and a soundness fix in the SGX waitqueue.

The number is arbitrary and the release is not. A hundred versions in, the language is still shipping the things it promised a decade ago, which is either impressive patience or an indictment of how long a compiler team's backlog is. Both.

## Yogurt is a local Granola alternative — 282 points

**282 points** · 108 comments · [github.com/FrigadeHQ](https://github.com/FrigadeHQ/yogurt) · [HN discussion](https://news.ycombinator.com/item?id=50454625)

A free, MIT-licensed meeting recorder from Frigade that does the transcription and summarisation on your machine: live transcripts, meeting summaries, speaker names from Zoom/Teams/Meet (macOS only), 99 languages, folders and search, Markdown export, a local MCP server so your assistant can read your notes, and automatic stop when the call ends. No account, 8GB of RAM, macOS/Windows/Ubuntu builds.

The pitch is "private by default," which is the claim to test rather than repeat. Local audio and local transcription are verifiable from the code; the summarisation is the part that usually phones home, and a local MCP server means the boundary is wherever you point your assistant. The macOS-only speaker diarisation is a useful tell about where the hard part actually is.

## Why are we still working this hard? — 238 points

**238 points** · 294 comments · [wilsoniumite.com](https://wilsoniumite.com/2026/11/11/why-are-we-still-working-this-hard/) · [HN discussion](https://news.ycombinator.com/item?id=50457939)

Keynes, 1930: output per person would rise four to eight times in a century and a fifteen-hour week would be enough. US output per person in 2024 was 7.8 times its 1930 level. He was right about the wealth and, the author argues, right about the leisure too — the fifteen-hour week arrived in terms of output, but not in the workweek. The essay is an attempt to account for the missing hours, built with a co-author and "a small economy built on paper": of the difference, eighteen hours never reached ordinary paychecks, and six reached them in a form that couldn't be taken as time.

The analytical frame is a wage doing three jobs at once — a price that allocates labour, a ticket that distributes output, and a place that structures a day — and the argument is that these three only pull in the same direction under a particular kind of machine. The machines of the industrial age were strong and stupid, which made human time the scarce input. The essay's real subject is what happens to the ticket when the machine stops being stupid.

It is long, and the empirical claim lives in an SSRN paper rather than the post. The frame is the useful part: most arguments about AI and work are arguments about the price, and the price was never the whole wage.

## Termsheet Please — 236 points

**236 points** · 94 comments · [termsheetplease.com](https://termsheetplease.com/) · [HN discussion](https://news.ycombinator.com/item?id=50457230)

Papers, Please as a venture-capital simulator: you are the person deciding which YC startups get funded, and the game is the paperwork. The site is a small browser game and, like most Show HN games, its joke is the design document.

## Apple trains a router for vector search — 232 points

**232 points** · 38 comments · [machinelearning.apple.com](https://machinelearning.apple.com/research/faster-retrieval) · [HN discussion](https://news.ycombinator.com/item?id=50455633)

"Amortizing Maximum Inner Product Search with Learned Support Functions," ICML 2026. The setup is standard maximum inner product search: to avoid comparing a query against millions of keys, partition the keys into clusters, keep a centroid per cluster, and only search the winning cluster. Apple's observation is that the standard methods treat queries and keys as if they came from the same distribution, which is exactly wrong in retrieval-augmented generation — keys are long curated documents, queries are short user questions — and that production systems tend to see a stable, well-characterised query distribution that a model can learn.

So they train small neural networks offline, once per fixed key set, to route queries toward the right region of the index. The cost is paid up front and amortised; the benefit is fewer comparisons and better recall at the same latency.

The thread is appropriately sceptical. One commenter notes this family of methods only pays off at hyperscale — hundreds of millions of items — and that at ordinary corpus sizes the constant factors eat the gain. Another, who builds retrieval for codebases, says the embedding models are too small to beat grep. The honest summary is that this is a good paper about a problem most teams do not have.

## Atuin Threads syncs your agent sessions — 231 points

**231 points** · 83 comments · [blog.atuin.sh](https://blog.atuin.sh/threads-agent-sessions/) · [HN discussion](https://news.ycombinator.com/item?id=50453637)

Atuin, the shell-history tool, now indexes agent sessions: search them across machines, resume them anywhere, and fork a session into a different harness. Start in Claude Code on a dev server, finish in Codex on the laptop. Supported harnesses at launch are Claude Code, Codex, Pi, Omp and OpenCode, with an MCP server so an agent can search its own history. Sync is end-to-end encrypted, self-hostable or local, and capture is opt-in.

The design argument is that the interesting record of work is no longer the command, it is the session — every command, its output, the intent and the wrong turns, in plain English in your home directory. Atuin already built an append-only encrypted sync engine for shell history, and a session log is the same shape.

The comments are a reminder that "everyone built this already" is not a moat. One person's tool indexes 22GB of sessions in under 1GB; Threads stored 8.1GB for the same data because it keeps each conversation twice, once encrypted for sync and once for search. Another points out that half of all sessions are throwaway, so the value is in pruning, not archiving.

## We need more goat sacrifices — 215 points

**215 points** · 133 comments · [experimental-history.com](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) · [HN discussion](https://news.ycombinator.com/item?id=50452652)

Adam Mastroianni's argument is that an alarming number of well-intentioned, well-funded interventions do nothing, and that the correct response is ritual — sacrifices, robes, chanting — as "procedurally-induced humility" before you spend other people's money. The receipts are deliberately bipartisan: $3bn of School Improvement Grants with no measurable effect on the worst schools; universities that hired a chief diversity officer between 2001 and 2019 ending up no more diverse; $280m to help Afghan women get jobs with no way to say whether any did; a ten-year RCT of One Laptop Per Child across 531 Peruvian schools finding zero effect on performance; four vaccine messages that all failed, one of which made parents more likely to believe vaccines cause autism; Arkansas's Medicaid work requirement cutting coverage without raising employment; and abstinence-only programmes doing nothing across four variants.

The rhetorical move is the good part. By making the failures symmetric across left-coded and right-coded programmes, the essay removes the tribal exit and leaves the reader with the actual finding: our intuitions about what will work are bad in a specific, repeated way, and the institutions that fund interventions have no mechanism for noticing.

The over-read to avoid is "nothing works." Most of these are null results from underpowered or badly-implemented programmes, and a null result is not a proof of impossibility. The essay knows this and says so; the comments mostly don't.

## The Quake 4 expansion that never shipped is now playable — 206 points

**206 points** · 72 comments · [moddb.com](https://www.moddb.com/mods/openq4/downloads/openq4-0141-windows-x64) · [HN discussion](https://news.ycombinator.com/item?id=50467618)

Raven Software and Ritual Entertainment built an expansion for Quake 4 that was never released. Justin Marshall recovered and published it; openQ4 0.14.1, the "Awakening Edition," plays it beside the original campaign — pick Single Player > Campaign and choose. All 13 maps run on openQ4's own code, with the expansion's monsters, weapons and vehicles rebuilt in the open-source engine, and the mod never loads the alpha's game DLL. Also in this release: stable shadow mapping, a rebuilt interface, Vulkan on Windows, better bots, and an experimental Android build. 0.14.0 was withdrawn days after release, so most people are seeing this feature set for the first time.

The technical decision is why it can ship at all: rebuilding the content against a clean engine avoids shipping the leaked binary, which is what a DMCA notice is made of. Twenty-year-old game, twenty-year-old lesson.

## Why I wrote the BEAM book — 202 points

**202 points** · 48 comments · [happihacking.com](https://happihacking.com/blog/posts/2025/why_I_wrote_theBEAMBook/) · [HN discussion](https://news.ycombinator.com/item?id=50427107)

Erik writes about ten years of keeping Klarna's core system upright on the BEAM, where a 15-millisecond pause can stall millions of payments at peak and earn you a 3am call. The book exists so the next engineer can find that pause before the coffee cools. The rest of the post is the part that will be familiar to anyone who has tried to write one: a project opened on 12 October 2012 with a four-line DocBook file, DocBook abandoned for AsciiDoc within a month, a six-month estimate that was wrong, an O'Reilly contract in 2013 that ended with chapters being overwritten by the build system, a polite cancellation two months later, Pragmatic picking it up, and years of rearranging files instead of finishing sentences.

"Delusion is underrated" is the line the thread quotes. The post is a fourteen-year postmortem of a writing project, and its lesson is about scope and tooling churn rather than about Erlang.

## Nintendo's DMCA sweep takes out emulators and modchip firmware — 201 points

**201 points** · 131 comments · [ign.com](https://www.ign.com/articles/nintendo-takes-down-switch-emulators-and-mod-chip-firmware-in-massive-github-dmca-sweep) · [HN discussion](https://news.ycombinator.com/item?id=50469994)

Four DMCA notices to GitHub, targeting the Yuzu and Citron Neo emulators and modchip firmware — reporting elsewhere puts the firmware count at 144 repositories. IGN's page would not load for extraction, so this one is written from the headline and the surrounding coverage rather than the article body.

The legal theory is the one that worked before: not that emulation is infringing, but that the emulator circumvents a technical protection measure, which is a separate offence under DMCA 1201 and does not require the copy to be distributed. Nintendo has run this play repeatedly and it keeps working because the cost of defending is higher than the cost of disappearing.

What it does not do is stop emulation. Forks appear within days, and the projects that survive are the ones without a US entity and without a Patreon. The sweep is not about the code. It is about the funding channel.

## Still on the page

Fifty-nine repeats, and the biggest mover is a death notice: Tim Peters went from 560 points at yesterday's writing to 1,385 today, which is what happens when a memorial reaches the people who used the language rather than the people who read about it. The Maya story added another 165 as the archaeology thread kept arguing, and the Jane Street smoke alarm went 301 → 567 on the strength of a good comment thread about datacentre fire suppression.

| Story | Last | Nov 12 |
|---|---|---|
| [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 560 (11-11) | 1,385 (+825) |
| [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com) | 1,239 (11-11) | 1,260 (+21) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 1,126 (11-11) | 1,181 (+55) |
| [My AI agents found an unmapped Maya site?](https://pietromiotti.com/latest/maya-site) | 860 (11-11) | 1,025 (+165) |
| [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 908 (11-11) | 996 (+88) |
| [Nvidia CEO Jensen Huang's letter to staff about affair](https://nvidianews.nvidia.com/news/a-message-to-our-company) | 975 (11-10) | 986 (+11) |
| [AWS emulator](https://github.com/aws/aws-emulator) | 398 (11-11) | 959 (+561) |
| [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) | 916 (11-11) | 930 (+14) |
| [Is Opus 5.5 nerfed? Thinking patterns changed on November 3](https://twitter.com/shanemelaugh/status/2119192075505893695) | 820 (11-11) | 821 (+1) |
| [KetchUp – Open-source SketchUp alternative built with Rust and WebGPU](https://ketchup3d.github.io/app/) | 755 (11-10) | 769 (+14) |
| [Google Gemini routes personal Drive files and emails to human annotators](https://github.com/thisisme6598/gemini_files/) | 732 (11-11) | 737 (+5) |
| [USPS now offers official ZIP Code boundary polygons](https://postalpro.usps.com/zcb) | 731 (11-11) | 732 (+1) |
| [Amazon saves millions by replacing Sonnet 4.6 with Strands Decider](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 717 (11-11) | 725 (+8) |
| [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 668 (11-11) | 674 (+6) |
| [AI usage generates a fragile codebase](https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/) | 625 (11-11) | 638 (+13) |
| [Unlocking any car from X brand in most of the world](https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/) | 619 (11-10) | 629 (+10) |
| [Payments Canada announces launch of Canada's Real-Time Rail (RTR) payment system](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy) | 583 (11-11) | 585 (+2) |
| [I'm not convinced the AI bubble exists](https://matteoraso.github.io/im-not-convinced-the-ai-bubble-exists.html#im-not-convinced-the-ai-bubble-exists) | 562 (11-10) | 573 (+11) |
| [A false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 301 (11-11) | 567 (+266) |
| [Scion is back and is going to sell a kei truck in America](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 549 (11-11) | 559 (+10) |
| [Apple has new Mac app coming to make running local AI models easy](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 500 (11-11) | 550 (+50) |
| [Outlook.com is rejecting email from domains without DMARC](https://mailroute.net/blog/outlook-rejecting-email-without-dmarc) | 543 (11-10) | 549 (+6) |
| [E-means: Outperforming k-means in one-tenth the epochs](https://e-means.github.io/) | 507 (11-11) | 514 (+7) |
| [Starlink Mini 2](https://starlink.com/mini-2) | 498 (11-11) | 510 (+12) |
| [Fable 5.2 one-shotted my nephew's dream game](https://notesbylex.com/fable-5-2-one-shotted-my-nephews-dream-game) | 470 (11-10) | 504 (+34) |
| [Blender 5.3 released with Gaussian Splat support](https://www.blender.org/download/releases/5-3/) | 485 (11-11) | 495 (+10) |
| [Statement from Nvidia board of directors](https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors) | 487 (11-09) | 493 (+6) |
| [Humans will never again create a project quite like Wikipedia](https://www.economist.com/culture/2026/10/29/humans-will-never-again-create-a-project-quite-like-wikipedia) | 458 (11-09) | 491 (+33) |
| [Synaptics patent claims stop work on DisplayLink drivers](https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/) | 477 (11-11) | 487 (+10) |
| [Show HN: Every satellite that passed over any place this week, and its photos](https://www.watched.earth) | 479 (11-11) | 484 (+5) |
| [Tracking Anthropic-discovered vulnerabilities](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) | 444 (11-11) | 457 (+13) |
| [I saw your HN comment](https://joshstrange.com/2026/11/09/i-saw-your-hn-comment/) | 385 (11-09) | 444 (+59) |
| [RIP, Harvest](https://aphyr.com/posts/427-rip-harvest) | 430 (11-09) | 443 (+13) |
| [Hyper-realistic sand with WebGL2](https://av.github.io/safe-sand/) | 241 (11-11) | 430 (+189) |
| [Val Town is winding down](https://blog.val.town/winding-down) | 417 (11-11) | 420 (+3) |
| [Protecting SSH Keys with macOS Secure Enclave](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/) | 369 (11-11) | 396 (+27) |
| [Claude Fable 5.2 scores 65 on Artificial Analysis, highest so far](https://artificialanalysis.ai/models/claude-fable-5-2) | 368 (11-10) | 379 (+11) |
| [I asked every TV manufacturer 17 questions about how they spy on you](https://www.theverge.com/tech/1012372/tv-privacy-acr-questions) | 318 (11-11) | 374 (+56) |
| [Chimera Vocal Synth](https://chimera-vocal-synth.vercel.app/) | 350 (11-10) | 356 (+6) |
| [Semi-transparent, colored cadmium telluride photovoltaic panels in agrivoltaics](https://www.anthropocenemagazine.org/2026/10/magenta-solar-panels-may-be-agrivoltaics-cleverest-trick-yet/) | 345 (11-10) | 354 (+9) |
| [Using voltage glitching to unleash the A100 in my mining card](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/) | 229 (11-11) | 335 (+106) |
| [Ableton Live 13](https://www.ableton.com/en/live/) | 328 (11-11) | 335 (+7) |
| [Muse Ember: Our smallest, most efficient model](https://research.meta.ai/blog/muse-ember) | 332 (11-11) | 332 (+0) |
| [Locating the source of a mysterious beep](https://simonwillison.net/2026/Nov/9/mysterious-beeps/) | 310 (11-10) | 331 (+21) |
| [When will this stop? The Raspberry Pi 5 16GB SBC now sells for $385](https://www.cnx-software.com/2026/11/03/when-will-this-stop-the-raspberry-pi-5-16gb-sbc-now-sells-for-385/) | 325 (11-10) | 329 (+4) |
| [How I'm fighting the AI brain fry](https://sergeykuhne.com/blog/fighting-ai-brain-fry) | 299 (11-09) | 313 (+14) |
| [Gemini 4 Carbon is now available](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/) | 255 (11-10) | 295 (+40) |
| [Can a Linear Program Do Weight-Space Programming?](https://nathan.rs/posts/weight-space-lp/) | 209 (11-11) | 292 (+83) |
| [Claude Whiteboards, Claude Sheets, and Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) | 275 (11-11) | 289 (+14) |
| [Your TV can see through walls (2025)](https://maurycyz.com/projects/fading/) | 274 (11-11) | 281 (+7) |
| [What constant surveillance is doing to children and parents](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 266 (11-11) | 277 (+11) |
| [AMD's Zen 6 Family: Feeding the Beast](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 259 (11-11) | 271 (+12) |
| [Horible public key tricks](https://maurycyz.com/projects/badcert/) | 253 (11-11) | 257 (+4) |
| [Apple is killing its Support Community forum next week](https://www.theverge.com/tech/1031507/apple-community-support-forum-shutting-down) | 253 (11-11) | 256 (+3) |
| [What's new in the .NET 11 runtime](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-11/runtime) | 254 (11-11) | 254 (+0) |
| [Announcing .NET 11](https://devblogs.microsoft.com/dotnet/announcing-dotnet-11/) | 233 (11-11) | 238 (+5) |
| [Process Explorer for macOS](https://github.com/microsoft/Procexp-Mac) | 230 (11-11) | 234 (+4) |
| [Cryptocurrency lawsuit: Ethereum Foundation required "suicide pledge"](https://www.denverpost.com/2026/11/06/ethereum-suicide-pledge-lawsuit-mandate-boulder-crypto/) | 222 (11-10) | 228 (+6) |
| [The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough) | 210 (11-11) | 213 (+3) |

Three other repeats are worth a line without numbers, because the previous post only mentioned them in passing: the Queens Public Library ransomware attack is still on the page, the Show HN that drags coding agents off 2019 JavaScript is still climbing, and the "going back two years on Hacker News" link is still being upvoted by people who miss the old front page.

## Throughline

Three threads, and the first one is doing most of the work.

**Key-person risk is the AI economy's unpriced liability.** Nvidia lost its founder-CEO in a morning and the stock lost 5%. Anthropic asked the public markets for $1.4tn the same week, on the strength of one model family and a founding team that is the entire safety story. Both companies are worth more than most countries' GDP and both just demonstrated that their valuation depends on a small number of people behaving predictably. The market's reaction to Huang was almost calm, which is either maturity or the market not having read the filing yet.

**Everyone is building agent plumbing and nobody has the permissions model.** United banned agents because it cannot tell one from a scraper. Google shipped an API that turns judgment into a classifier with a confidence score, precisely because a generative call is the wrong shape for a decision. Atuin encrypted and synced the session logs. Apple made retrieval cheaper. Four different companies, four different layers, and not one of them answered the question the airline actually cares about: who is allowed to act, on whose behalf, with what proof.

**The cost of being sure is the day's quiet theme.** A race condition in `mod_http2` that nobody has exploited yet and 64% of cloud images carry. A lockfile for GitHub Actions that fixes tag mutability but not `ubuntu-latest`. A 2016 essay arguing that verification is expensive because computation says so. A joke paper about paint parsing as Perl, which is only funny if you have never had to prove that a parser rejects what it should. The tools are getting better. The bill is not going away.
