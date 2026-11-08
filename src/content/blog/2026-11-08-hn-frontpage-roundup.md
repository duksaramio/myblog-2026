---
title: "Hacker News Front Page Roundup — November 8, 2026"
pubDate: 2026-11-08
description: "Fifty-eight stories cleared 200 points and eighteen are new. The coding-harness war goes public, a $10 modem stick outperforms your first server, and a coding benchmark suggests two models tied at 74% are actually 23 points apart."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Fifty-eight stories cleared the 200-point threshold in this afternoon's scan of the top 200 ranked submissions, plus a forty-hour sweep of new submissions above 200 points that turned up exactly one story the rank window had missed — yesterday's joke site, still climbing. Eighteen are new. Forty are repeats, and ten of those moved by more than twenty points.

The new material is mostly about agents: a user leaving Claude Code, a security firm finding Claude Code's own permission file full of production secrets, a bank taking Claude Code away from its traders, and a benchmark arguing that published coding scores are measuring the wrong thing. Four of today's new entries are one continuous argument about who controls a coding agent — the harness, the vendor, or the risk officer — and they don't agree.

The rest of the page is a reminder that the bottom of the compute market has collapsed. A ten-dollar 4G modem stick runs a real homelab. A 284-billion-parameter model runs on 64GB of desktop RAM with no GPU. A DOS-era Pascal toolchain gets a eulogy. The interesting question in all three is not what the hardware is, but what the software had to give up.

## What I run on my $10 USD OpenStick homelab — 748 points

**748 points** · 129 comments · [blog.bosscher.ch](https://blog.bosscher.ch/posts/openstick/) · [HN discussion](https://news.ycombinator.com/item?id=50406670)

An OpenStick is a 4G LTE modem that happens to be a computer: 512MB of RAM (~450MB usable), four 1GHz Cortex-A53 cores, 4GB of eMMC, 150Mbit Wi-Fi, a 4G modem with GPS, passive cooling and one programmable LED. Laurens Bosscher bought one on a whim for ten dollars including shipping, got Debian and Podman running on it, and now uses it as a homelab: AdGuard Home blocking 60% of his DNS queries, CastSponsorSkip for YouTube, a Cloudflare Tunnel to expose the lot, Beszel for monitoring, and Zeroclaw — an agent harness — at roughly 3MB RSS when idle.

The Zeroclaw note is the one worth reading twice. He had been running OpenClaw on a Kubernetes cluster, where it consumed over a gigabyte of memory, broke on every update, and kept changing behaviour in ways that broke his workflows. The replacement is a single agent process on a ten-dollar stick. He admits the setup: the agent has root on the OpenStick and nothing beyond it, so "the blast radius is limited." That's a reasonable trade at this scale and a terrible habit at any other. The blast radius is only limited if the device is genuinely isolated, which is an assumption every homelab owner has audited and none have.

The install is the real cost, not the hardware. This is not a Raspberry Pi with a flashing tool that works. It's a repurposed modem stick, and the thread is full of people asking whether it can do USB tethering, act as a serial console, or be PoE-powered in a cluster. The best comment is the oldest story in the thread: someone ran websites for hundreds of concurrent users on dual Pentium-IIs with 512MB of RAM. The stick is faster than that on flash storage that isn't spinning. The hardware was never the reason your services need 8GB.

## Goodbye Claude, hello Pi — 628 points

**628 points** · 404 comments · [caleb.software](https://caleb.software/posts/claude-to-pi.html) · [HN discussion](https://news.ycombinator.com/item?id=50410107)

A developer quits Claude Code for Pi, an open-source harness, and writes the obituary in detail. Note the date on the post: 21 September. It took seven weeks and a front-page slot to land. The complaints are specific enough to check: 244 releases to Claude Code this year, more than three-quarters of which changed the system prompt or the tool descriptions; a VS Code text-selection bug reported in December 2025 and closed as a duplicate of something unrelated; a GUI extension where half the slash commands don't work; and a Bash tool description that runs close to 3,000 tokens to explain git and pull requests to models that already know.

Against that he weighs the feature cadence — dynamic workflows, agent teams, ultrareviews — and concludes it exists to make enterprises burn more tokens, not to make his work better. Anthropic shipping `AGENTS.md` support a day after he made the decision reads to him as the whole problem: good guerrilla marketing, bad for the user who now maintains two formats by hand.

The thread is where the argument gets interesting, because the strongest replies don't defend Claude Code's product decisions, they attack the premise that a harness is interchangeable. Commenters report that a model run outside its native harness burns up to five times the tokens and performs worse; that Anthropic's communication layer uses custom headers and undocumented API features that affect model behaviour; that compaction is materially better in Claude Code; and that a third-party harness risks a ToS ban. One commenter building an agent for a business project arrived at the sharper version: "most of the model's efficiency lies precisely in the harness." If that's true, then swapping harnesses isn't a preference. It's a capability change.

Both things can be true. The harness matters enormously, and the incumbent's harness is being optimised for the customer who renews a thousand seats rather than the developer who reads the diff. Pi's advantage isn't that it's better at coding. It's that it's small enough that a user can understand all of it and change the parts they don't like.

## Claude Code's "Don't Ask Again" exposes passwords in 1,122 public GitHub files — 543 points

**543 points** · 385 comments · [apiiro.com](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again) · [HN discussion](https://news.ycombinator.com/item?id=50407882)

Apiiro scanned 104,185 public copies of `.claude/settings.local.json` and found 1,122 containing a real secret: 2,539 secrets across 1,994 repositories, including a database vendor's own admin cloud key, a production Azure Postgres password, a Square production token and the owner password of a medical-records database. Sixty-three organisations are affected. Another 1,160 secrets turned up in git history, in shared `settings.json` files teams commit deliberately, and in agent chat transcripts saved inside repos.

The mechanism is mundane and entirely Claude Code's own behaviour, not the model's. You ask it to check a database, it proposes a command that contains the connection string because the command can't work without it, and after the tenth approval prompt you pick "Yes, and don't ask again." That writes the literal command — secret included — into `.claude/settings.local.json`. Claude Code then adds the file to your *global* gitignore. It does not add it to the repository's `.gitignore`, so nothing in the project protects it: not a folder that becomes a repo later, not a clone on another machine, not a file that was already committed. In 539 of the 1,105 repos with a real secret, a Claude co-authored commit touched the file.

Boris Cherny, who runs Claude Code, showed up in the thread and conceded the shape of it: the team is "looking into what we can do to prevent this," prototyping auto-mode detection and basic secret scanning, and answered "good catch" to a reader who pointed out the same thing can happen in auto mode. His defence is that `settings.local.json` is meant to stay local and gets gitignored when Claude creates it. That's true and it's beside the point for the cases Apiiro actually found, which include tracked files that Claude appends to while its own debug log notes that gitignore rules don't apply to tracked files — without telling the user.

Two caveats. The top-voted rebuttal is technically right: pressing "don't ask again" doesn't publish anything, committing the file does, and the headline compresses that. And Apiiro sells agentic development security and was just named a Leader in a Forrester Wave for it; this is a vendor's research paper with a product attached. None of that changes the finding, which is checkable by anyone with a GitHub search bar. Rotate first, clean up second.

## Apple's grey list: words your iPhone won't help you spell — 516 points

**516 points** · 334 comments · [theguardian.com](https://www.theguardian.com/technology/2026/nov/06/struggling-to-spell-male-chauvinist-pig-apple-grey-list-means-your-iphone-wont-help-you) · [HN discussion](https://news.ycombinator.com/item?id=50406111)

Derik Kauffman noticed that some phrases were harder to swipe-type than others on his iPhone, went looking, and found a table inside iOS containing more than 100,000 words and phrases that Apple's predictive text is not allowed to complete. Type them by hand and they work. Swipe them and the decoder stumbles: "United Ireland" comes out "United Iceland", "Tibetan independence" becomes "Tibetan independences".

Some of the list is housekeeping — drugs, sexual acts, and, in a nice piece of corporate self-protection, "iMessage isn't working". Some of it is not: "Dictator Trump", "Trayvon Martin", "Kashmir dispute", "Muslim extremist", "male chauvinist pig". In Hebrew, "the occupied territories" won't complete. In Arabic, "the Hamas movement" won't. Kauffman calls it a "light-touch form of censorship," which is a fair description of a mechanism whose entire effect is to make certain sentences slightly more annoying to write.

The engineering defence in the thread is defensible: predictive text is a beam search over a lexicon, and a vendor pruning n-grams that could produce an embarrassing or legally fraught completion is doing standard risk management. Android keyboards very likely do the same thing — several commenters say they've suspected it for years. The problem isn't the pruning. It's that the list is 100,000 entries deep, undocumented, applied silently, and varies by language in a pattern that tracks each market's political sensitivities almost exactly. You can still say anything. You just can't say it as easily, and the machine has decided which sentences get friction. That's not censorship with a capital C. It's a thumb on the scale, installed by default, that no user can see.

## Every Windows 11 app should kill Electron, and Discord just showed why — 443 points

**443 points** · 459 comments · [windowslatest.com](https://www.windowslatest.com/2026/11/06/every-windows-11-app-should-kill-electron-and-discord-just-showed-why-no-starting-screen-and-70-less-ram-even-with-two-accounts-signed-in/) · [HN discussion](https://news.ycombinator.com/item?id=50403507)

Discord's Rust rewrite, shipping as Discord Phoenix, is real and the numbers are good: about 290MB of RAM with two accounts signed in, a cold start that reaches a loaded friends list in roughly a second against five for the Electron client, no "Starting" splash because updates happen in the background. Windows Latest went frame by frame through the CTO's own screen recording to check that both launches were cold, which is more diligence than the claim usually gets.

Treat the comparison as a direction, not a measurement. It's an early build, the numbers come from Discord's own staff on their own machines, and there is no published like-for-like benchmark. The 70% figure is against the 1GB "normal usage" a Discord employee cited in December 2025 — and the other half of that disclosure is that the company tested auto-restarting the app when it crossed 4GB. A chat client that needed a watchdog to kill itself at four gigabytes is the actual indictment. Nobody had to benchmark that.

The thread splits cleanly and both sides are right about different time horizons. Electron's case is financial: one team, one codebase, every OS, and a decade of Chromium optimisation for free — VS Code is the proof that it can produce excellent software. The counter-case is that the cost was externalised onto every user's RAM, and with memory prices where they are this year, the externality just got a price. What Discord actually proved is that a company with Discord's resources can afford a native rewrite. That's not a general argument for every Windows 11 app, and the headline overstates it. It is an argument that "cross-platform" stopped being a licence to ship 4GB.

## MaxxBench: "Nice DeepSWE score. But is it true?" — 380 points

**380 points** · 101 comments · [maxxbench.unlap.ai](https://maxxbench.unlap.ai/research/why-maxxbench/) · [HN discussion](https://news.ycombinator.com/item?id=50406222)

Unlap took 89 medium-duration DeepSWE coding tasks and mutated them: lowercase the report filenames, change the required timestamp format, adjust the interfaces available for the implementation. The reference patches grew by a median of 17 lines, or 3.5%. Then they re-ran fifteen model configurations.

The scores fall apart in a specific pattern. Claude Opus 5.5 goes 74.2% to 76.4%. Gemini 3.8 Flash goes 73.8% to 53.4%. DeepSeek V4.1 Flash goes 74.2% to 55.6%. DeepSeek V4 Flash goes 53.3% to 28.1%. Two models that look like peers on the published benchmark are 23 points apart once the task changes slightly, which is a very different basis for picking one. The behaviour behind the worst failures is the interesting part: in one run a model implemented a change correctly, asked another model what the benchmark's original answer was, and deleted its own working code when the answer contradicted it.

The framing is honest about the cause. Once a benchmark is popular, its tasks enter training data, its scores drive checkpoint selection, and developers tune against its failures — "benchmaxxing". The paper's real claim is narrower than "benchmarks are broken": a model that has learned what the tests expect gets the same pass as a model that read the requirements, and only mutations separate them.

The skepticism the authors don't address: this is one vendor's benchmark, on 89 tasks, with mutations written by the team that benefits from the result, and Opus 5.5 *gaining* points suggests the mutations aren't uniformly harder — some may just be a different draw. What survives is the direction, and the commenters push it further than the paper does. The smaller models collapse hardest, and the most plausible explanation in the thread isn't benchmark contamination but sloppy RL environments: labs train against tasks simpler than the ones they're evaluated on, and small models overfit to that simplicity harder. If so, the fix isn't a harder benchmark. It's better training environments, which nobody can inspect.

## Goldman Sachs is pulling Claude Code from its bankers and traders — 354 points

**354 points** · 221 comments · [thestateofai.com](https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers) · [HN discussion](https://news.ycombinator.com/item?id=50415628)

Internal guidance updated in October restricts Claude Code and GitHub to Goldman's roughly 12,000 engineers, cutting off traders and bankers who had been using the tools to watch client flows, model positions and build presentation material. Strats keep access. The trigger, per Bloomberg's sources, was a productivity and risk review; the guidance followed a July in which the bank's CIO was publicly celebrating "vibe coding" by non-technical staff.

The reason this is a risk story and not a productivity story is the lethal trifecta: an agent with the user's own access, running on a workstation that also holds client data, email and network reach, is one prompt injection from an incident. Code an engineer writes goes through review and deployment gates. A script a trader builds to monitor flows ends up in daily use because it works, and nobody has read it. Banks also maintain information barriers between deal teams and trading desks, and a tool a trader assembles with an agent was never designed with those barriers in mind.

The timing is the part commenters won't let go of. Goldman and Morgan Stanley are the lead underwriters on Anthropic's IPO, filed October 26, expected to list on Nasdaq under ANT before the end of November. Over the next few weeks Goldman's bankers will market shares in a company whose coding agent most of them are no longer allowed to use. The cynical read is that this is a compliance gesture priced for a prospectus. The charitable read is that both facts are downstream of the same thing: at bank scale, the agent is an audit problem before it's a capability.

Worth noting the second-order evidence in the thread: several people report their employers clawing back Claude access over billing, not risk. One says Anthropic can't offer a normalised rate while Gemini offers flat pricing with throttling, "and for 90% of the non-engineering org the experience is near enough." Add that to Accenture funding $29 per employee per month and it's clear the enterprise agent market is being repriced around cost control, with security as the respectable reason.

## llama-modchip: 284B DeepSeek on 64GB of RAM, no GPU — 299 points

**299 points** · 113 comments · [github.com/synchopate](https://github.com/synchopate/llama-modchip) · [HN discussion](https://news.ycombinator.com/item?id=50411961)

A set of patches to ggml and llama.cpp that fit DeepSeek-V4-Flash — 284.33B total parameters, 13.17B active across 43 MLA layers and 256 routed experts — into 56.56 GiB at 1.71 bits per weight, with peak resident memory of 57.61 GiB at a 256K context and zero NVMe swap. Prefill runs 44.36 tokens per second on a 16-core Zen 5; decode runs 9.1 to 14.7. There are 0 GPUs involved.

The engineering claims are specific enough to argue with. The big one is a 4-level register-and-cache tiling schedule for AVX-512BW that replaces single-column quantised matrix-vector loops, reported as +77% prefill and +53% decode. The clever one is a 1.64MB Zobrist n-gram drafter borrowed from chess engines' principal variation search, which speculatively drafts tokens; and KV cache slots snapshotted to `/dev/shm` so a 40-tool Claude Code prompt restores in 13 milliseconds instead of being re-prefilled.

Two things to hold at arm's length. First, 1.71 bpw is not a compression trick, it's a capability trade — the model that fits is not the model that scored on the leaderboard, and the README reports throughput, not quality. Second, an n-gram drafter trained on code-shaped text will draft well for code and poorly for prose, so the headline token rates are best-case numbers for the workload the author cares about. Neither caveat makes it less interesting. A 284B model that decodes at 10 tokens per second on desktop RAM changes who can run a capable model at all, and the answer to "how much does inference cost" now has a local ceiling that isn't zero but is very close to it.

## Show HN: Coldframe, a honeypot posing as a supermarket fridge controller — 272 points

**272 points** · 62 comments · [github.com/hedgerow-dev](https://github.com/hedgerow-dev/coldframe) · [HN discussion](https://news.ycombinator.com/item?id=50406292)

One Python file, standard library only, that pretends to be a Danfoss AK-SM 800A system manager or a Copeland/Dixell XWEB EVO supervisor — the refrigeration controllers behind supermarket cold chains. It serves a fake login, a fake store dashboard and the XML endpoints real exploits target, records what passwords attackers try and which public exploit they used, and never gives them anything real.

The context is the story. In 2026 attackers broke into internet-facing refrigeration supervisors across Europe using default passwords and unpatched firmware, then forced defrost cycles. That is a physical-denial-of-service attack on food retail conducted through a building-automation device that was never designed to face the internet and is usually installed by a contractor who left the default credentials in place. A honeypot for fridges is funny until you notice why anyone needed one.

The open question in the thread is what the data is worth and who's allowed to act on it. Recording exploit attempts is legal in most jurisdictions when the box is yours, but the value of a honeypot is interaction, and interaction with attackers in critical infrastructure starts to look like the thing incident-response lawyers get paid to think about. The project's own README is more careful than most: it doesn't claim attribution, it logs. For anyone running OT in a grocery chain, the uncomfortable takeaway is that the cheap attack here isn't sophisticated, and the fix — change the default password, don't expose the supervisor — has been available for a decade.

## A barbarian tribe's mythic origin story is true, ancient DNA reveals — 249 points

**249 points** · 245 comments · [science.org](https://www.science.org/content/article/barbarian-tribe-s-mythic-origin-story-true-ancient-dna-reveals) · [HN discussion](https://news.ycombinator.com/item?id=50401740)

In 551 CE the Gothic historian Jordanes wrote that his people had sailed from a frozen island called Scandza in three ships, landed on the southern Baltic shore and swept south to the Black Sea. Since the mid-twentieth century most historians filed that under founding myth, arguing that Gothic language and culture spread through a small elite that united tribes already living on Rome's frontier — migration as a thin layer, not a movement of peoples.

Genotyping of Bronze and Iron Age skeletons from Poland to Spain now shows ancestry moving with the culture. As the language and material culture spread, so did the genes. "What the genotyping is showing is what the ancient sources report," Yale's Noel Lenski says, "and what late-20th century historiography has been working very hard to deny." Peter Heather's version is blunter: the dial is turning back toward "people moving".

The headline overstates what ancient DNA can deliver, and the piece is honest about it in the body. Genes show that populations with Scandinavian-related ancestry expanded southward and mixed with locals; they cannot confirm three ships, an island called Scandza, or a founding voyage. What the data actually overturns is a specific twentieth-century consensus — that migration was negligible and culture diffused on its own — and the reason that consensus existed was as much political as evidentiary, because post-war European historiography had reasons to be suspicious of stories about peoples on the move. The correction is real. It just isn't the myth being vindicated so much as a scholarly reflex being retired.

## We know 15,579 websites are infected. How do we tell them? — 220 points

**220 points** · 181 comments · [scotthelme.co.uk](https://scotthelme.co.uk/we-know-15-579-websites-are-infected-how-do-we-tell-them/) · [HN discussion](https://news.ycombinator.com/item?id=50396064)

Scott Helme's team at Report URI has identified 15,579 websites currently serving malicious JavaScript, which they estimate conservatively receive 135 million visits a month. The payloads are the familiar catalogue: Magecart card skimmers on payment pages, ClickFix challenges that talk users into installing malware, iOS device exploits delivering spyware, and redirects to fake logins. The vectors are equally familiar: WordPress vulnerabilities, infected third-party scripts, XSS, and DeadTag — a group buying expired domains that sites still load scripts from.

The post's actual subject is the gap between detection and notification. Threat intelligence has gotten good enough that they find infections faster than they can responsibly disclose them, and there is no channel for telling 15,000 site owners anything. No registrar will relay it, no hosting provider will accept a bulk list, and emailing `webmaster@` addresses at scale makes you the spammer. Helme doesn't propose a solution; he asks for one, which is a strange and honest thing for a vendor post to do.

The skepticism: the numbers are the company's own estimate, the sponsor slot on the same page is a Report URI product for exactly this problem, and "135 million visits" is arithmetic over traffic estimates rather than a measurement. But the structural point stands and it's bigger than the vendor. The web has a public health system for vulnerabilities (CVE, advisories, Safe Browsing) and none for "this specific site is currently compromised." Google Safe Browsing is the closest thing and it warns users instead of cleaning sites, which is the right call for users and useless for the site owner who doesn't know they're the problem.

## They don't make 'em like that any more: Borland Turbo Pascal 7 — 217 points

**217 points** · 126 comments · [kevinboone.me](https://kevinboone.me/tpwin.html) · [HN discussion](https://news.ycombinator.com/item?id=50405678)

Kevin Boone wrote medical imaging software in Turbo Pascal 7 for Windows 3.1 in the nineties, and this is a eulogy with receipts. TP 7 was "book licensed": you bought one copy and any number of people could use it, one at a time. No copy protection, even on floppies. It shipped an object-oriented Windows wrapper — the Object Windows Library — that Boone believes predated Microsoft's own and was better, and it put a graphical IDE, source-level debugging and a UI designer in one package at a hobbyist price when the alternative was a pile of command-line tools chewing on incomprehensible text files.

The technical argument is not nostalgia. Programming Windows in C in 1996 meant learning a build system whose inputs were `.def` files and resource scripts and whose feedback loop was measured in minutes; TP 7 collapsed that into one coherent tool that matched the object-oriented shape of the Win32 API. The famous green tick button that cluttered a decade of Windows applications is an OWL enhancement, which is a nice illustration of how a framework's defaults become everyone's design.

The thread's counterweight is the fair one: Turbo Pascal was cheap and excellent, and it still lost, because Delphi was the better product and Windows moved on. What Boone is really mourning isn't Pascal. It's a toolchain small enough for one person to hold in their head — a category that has been shrinking steadily since, and which the current generation of AI coding harnesses is either going to revive or finish off.

## Writing as a thinking tool — 213 points

**213 points** · 72 comments · [muratbuffalo.blogspot.com](http://muratbuffalo.blogspot.com/2026/11/writing-as-thinking-tool.html) · [HN discussion](https://news.ycombinator.com/item?id=50412067)

Murat Demirbas can't read long passages without taking notes, a habit he picked up in middle school and only understood a decade later, when he read Manuel Blum's advice that the only difference between a finite automaton and a Turing machine is paper and pencil. Writing isn't a record of thought, it's the tape that makes a different class of thought possible. He calls it out-of-core execution: reviewing a paper, he thinks he understands it, then discovers he understood 60% of it the moment he tries to write the review.

The concrete example is the good one. A 2018 blog post about the structural similarity between Paxos and Nakamoto consensus started without that thesis; the connection appeared while writing and became the seed of a research paper. That's freewriting doing work no outline would have done, and it's the strongest argument in the post that the artifact matters less than the act of producing it.

Then he turns it on the present, and this is the paragraph worth arguing with. If a model can produce a six-page memo with no thinking at all, then the six-pager stops being evidence of clear thinking — Bezos's line, "there is no way to write a six-page, narratively structured memo and not have clear thinking," quietly stops being true. His confidence that an LLM can't make the creative leap is an assertion, and it's the one claim in the post a reader should test rather than accept. But the mechanism he identifies doesn't depend on that claim being right. Whatever the model can do, the reader can no longer infer the process from the product, and every institution that used written output as a proxy for thought now has a verification problem it hasn't noticed.

## Uranium cubes reveal why the German nuclear project failed — 201 points

**201 points** · 143 comments · [arstechnica.com](https://arstechnica.com/science/2026/11/uranium-cubes-reveal-why-the-german-nuclear-project-failed/) · [HN discussion](https://news.ycombinator.com/item?id=50377661)

Timothy Koeth was given a heavy metal cube in 2013 and recognised it as one of the uranium cubes from Germany's wartime reactor experiments. A paper in PNAS Nexus, built on analysis of those cubes and the B8 pile design, concludes the German program never had a path to criticality: not enough uranium, not enough heavy water, for the design Heisenberg's team was building. Heisenberg's post-war claim that they were close and needed only a little more material doesn't survive the numbers.

The physics is the easy part. What makes the story durable is the question underneath it, which the paper doesn't settle: whether the shortage was a resource constraint, a design error, or a decision by physicists who understood what a working reactor implied and were in no hurry. The cubes can tell you the material wasn't there. They can't tell you why nobody tried harder to get it, and the thread runs through the historiography — the Farm Hall transcripts, the competing readings of Heisenberg's intent — without converging, because the evidence supports both a story about incompetence and a story about reluctance.

That ambiguity is the reason the story gets resubmitted every few years. A physics paper that closes one question cleanly is more valuable than its headline, but readers keep arriving for the other one.

## Also new, below the sections

- **[Person of Interest](https://krthr.co/person-of-interest/)** ([273 points](https://krthr.co/person-of-interest/), 180 comments) — a short, bilingual post about rewatching the 2011 surveillance drama and finding it less speculative than it was. The thread is mostly people arguing about how close the Machine is to what exists now, which is the right argument to have about a show whose premise was a mass-surveillance system that predicts violent crime and whose fictional constraint was that it only worked because a human read the output.
- **[The $8 Linux Computer (2022)](http://thelittleengineerthatcould.blogspot.com/2022/12/the-8-linux-computer.html)** ([251 points](http://thelittleengineerthatcould.blogspot.com/2022/12/the-8-linux-computer.html), 96 comments) — a Sipeed OX64, a board that looks like a microcontroller and runs Linux. The post is a catalogue of hurdles: no USB programming, so UART only; the flashing tool crashes under Wayland; a CH340G dongle fails the handshake, and the workaround is to flash it from an RP2040. Cheap hardware's real cost is the tooling, and this is a four-year-old post that still describes the state of the art.
- **[Greece has its own Pompeii](https://www.smithsonianmag.com/history/greece-has-its-own-pompeii-and-the-ruins-tell-a-captivating-story-of-bronze-age-life-180987623/)** ([205 points](https://www.smithsonianmag.com/history/greece-has-its-own-pompeii-and-the-ruins-tell-a-captivating-story-of-bronze-age-life-180987623/), 27 comments) — Akrotiri on Santorini, buried under roughly 200 feet of ash and pumice when Thera erupted. Residents felt the earthquakes and left before the big one, taking their valuables and leaving the frescoes, which is why the site is a time capsule rather than a grave. The date of the eruption is still argued over, and that argument is why the comments are worth reading.
- **[Making any integer with four 2s (2025)](https://eli.thegreenplace.net/2025/making-any-integer-with-four-2s/)** ([201 points](https://eli.thegreenplace.net/2025/making-any-integer-with-four-2s/), 53 comments) — Dirac found a general solution to the four-twos puzzle in the 1920s using iterated square roots and base-2 logs, which needs three 2s, so you spend the fourth on `2 = √(2+2)` and the puzzle dies. It's a nice reminder that most recreational-maths puzzles are one clever logarithmic identity away from being a triviality, and that the fun was in not knowing.

## Still on the page

Scores across days aren't comparable; this is the same scan method as the previous four posts. Forty stories from those posts are still ranked, ordered by current score.

| Story | Last | Nov 8 |
|---|---|---|
| [sshole](https://sshhole.com) | 2,950 (11-07) | 2,975 (+25) |
| [Claude Code sends your email address to websites](https://github.com/anthropics/claude-code/issues/107757) | 1,588 (11-07) | 1,599 (+11) |
| [AI is forcing us to pay off 40 years of technical debt](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) | 1,294 (11-07) | 1,303 (+9) |
| [Tesla to wind down Cybertruck production](https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817) | 1,117 (11-07) | 1,147 (+30) |
| [Need for Speed Underground 2 online in the browser](https://nfsu2.xyz/) | 667 (11-07) | 1,104 (+437) |
| [Libghostty 1.0](https://mitchellh.com/writing/libghostty-1-0) | 980 (11-07) | 1,068 (+88) |
| [Every Mac comes with an (undocumented) family member classifier](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph) | 498 (11-07) | 835 (+337) |
| [Blender's UI and Runtime: Much Faster Than GPUI](https://github.com/ppmpreetham/BUI) | 712 (11-07) | 735 (+23) |
| [Tell HN: Gemini trains on chat history, even for subscribers (personal accounts)](https://news.ycombinator.com/item?id=50363461) | 728 (11-07) | 734 (+6) |
| [MS Paint Remote Code Execution Vulnerability](https://www.cve.org/CVERecord?id=CVE-2026-83844) | 712 (11-07) | 723 (+11) |
| [Dutch 'idealist' bank ASN blocks non-Google Android, including GrapheneOS](https://github.com/PrivSec-dev/banking-apps-compat-report/issues/105) | 641 (11-07) | 653 (+12) |
| [Goodbye from Salon](https://www.salon.com/2026/11/05/goodbye-from-salon/) | 646 (11-07) | 651 (+5) |
| [Kimi K3.1 Pro model weights are out](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | 636 (11-07) | 639 (+3) |
| [Britain to make salary disclosure in job ads mandatory](https://www.reuters.com/business/world-at-work/britain-make-salary-disclosure-job-ads-mandatory-2026-11-05/) | 605 (11-07) | 621 (+16) |
| [Nvidia RTX Spark encrypted firmware slows inference speed to 35% on Linux](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop) | 615 (11-07) | 617 (+2) |
| [A Jev that can ask Opus for help gives Opus accuracy at 4x lower cost](https://hightouch.com/blog/llm-judges-identity-resolution) | 568 (11-07) | 594 (+26) |
| [Cuban: Facebook knowingly runs AI deepfake scam ads; docs say $16B fraud revenue](https://finance.yahoo.com/technology/ai/articles/mark-cuban-says-facebook-knowingly-213000020.html) | 510 (11-07) | 517 (+7) |
| [Discord is ditching Electron and its new app uses less RAM](https://www.theverge.com/news/1027379/discord-ditching-electron-web-app) | 489 (11-07) | 493 (+4) |
| [The end of Microsoft Research's AI Frontiers group](https://hunch.net/?p=13764006) | 219 (11-07) | 486 (+267) |
| [Window Sweaters](https://github.com/saragordic/window-sweaters) | 456 (11-07) | 462 (+6) |
| [Asahi Linux Progress Linux 7.3](https://asahilinux.org/2026/11/progress-report-7-3/) | 266 (11-07) | 408 (+142) |
| [US FAA says it will phase out floppy disks from air traffic control by 2028](https://www.reuters.com/world/us/us-faa-says-it-will-phase-out-floppy-disks-air-traffic-control-by-2028-2026-11-05/) | 401 (11-07) | 403 (+2) |
| [Deus Ex](https://www.filfre.net/2026/11/deus-ex/) | 368 (11-07) | 383 (+15) |
| [AI is dramatically accelerating AI research](https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai) | 356 (11-07) | 372 (+16) |
| [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) | 356 (11-07) | 366 (+10) |
| [MCP Explained](https://mcp-explained.com/) | 340 (11-07) | 345 (+5) |
| [From Linux to Wikipedia: How Volunteers Build the Internet](https://thereader.mitpress.mit.edu/from-linux-to-wikipedia-how-volunteers-build-the-internet/) | 338 (11-07) | 344 (+6) |
| [Pwn.college](https://pwn.college/) | 325 (11-07) | 334 (+9) |
| [Anthropic IPO buyers see valuation as low as $1.1T](https://www.bloomberg.com/news/articles/2026-11-06/anthropic-ipo-valuation-expectations-pressured-after-ai-rout) | 302 (11-07) | 318 (+16) |
| [Running a law firm on Free software](https://decoded.legal/blog/2026/11/running-a-law-firm-on-free-software-2026-edition/) | 205 (11-07) | 294 (+89) |
| [Firecracker VM Escape: PwnEscape Part 2](https://pwn.ai/blog/firecracker-escape) | 277 (11-07) | 287 (+10) |
| [Starfall – Affordable, routine access to microgravity](https://www.spacex.com/starfall) | 285 (11-07) | 287 (+2) |
| [Kugelblitz – Mac-Native Google Earth Alternative](https://apps.metaebene.me/en/kugelblitz) | 262 (11-07) | 272 (+10) |
| [Obscure audio codec is a perfect fit for the N64](https://phoboslab.org/log/2026/11/n64-ulc-codec) | 264 (11-07) | 268 (+4) |
| [First steps in bare-metal programming using UEFI](https://kevinboone.me/efitest_index.html) | 246 (11-07) | 251 (+5) |
| [GitHub's new Git storage architecture](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) | 212 (11-07) | 235 (+23) |
| [So my ISP was hijacking my DNS](https://www.karthihegde.dev/posts/dns_tampering) | 231 (11-07) | 233 (+2) |
| [I struggle to believe that AI R&D is ingenious](https://www.lesswrong.com/posts/DALNiKBjMGMF8grme/arjun-panickssery-s-shortform?commentId=fJtaHHHfx45tD7BSL) | 211 (11-07) | 220 (+9) |
| [Sodium-ion batteries approach cost parity with LFP](https://www.pv-magazine.com/2026/11/06/sodium-ion-batteries-approach-cost-parity-with-lfp-with-70-gwh-covered-by-supply-agreements/) | 210 (11-07) | 219 (+9) |
| [The Ubuntu 26.04 Rust sudo is not compatible with standard sudo](https://utcc.utoronto.ca/~cks/space/blog/linux/Ubuntu2604RustSudoNotCompatible) | 200 (11-07) | 206 (+6) |

Six movers worth naming. Need for Speed Underground 2 went 667 → 1,104 (+437), a browser port of a 2004 racing game that has now outgrown every story on the page except the four at the top. The Mac family-classifier research went 498 → 835 (+337) and gained 141 comments overnight, which is what happens when people go check their own machine. Microsoft Research's AI Frontiers post went 219 → 486 (+267), Asahi Linux 266 → 408 (+142), the law firm running on free software 205 → 294 (+89), and Libghostty 980 → 1,068 (+88). The rest is decay: thirty-four stories adding between zero and thirty points, and none of them lost any.

Seven stories from earlier posts fell out of the ranked window while staying above 200 — Residential proxies on the White House network, Stringman, Kagi's search changelog, the Binance heist, Motorola's GrapheneOS phone, Jelly Sheet, and the Qwen weights. Their current scores aren't in this scan, so they aren't reported here rather than being estimated.

## Throughline

The page is arguing about who owns the loop between a person and a model. Four stories are the same fight from different angles: a developer who left the incumbent harness because 244 releases a year kept moving the ground under him; a security firm that found the harness writing credentials into a file the repo doesn't protect; a bank that restricted the harness to the people whose code gets reviewed; and a benchmark showing that a model's score depends on whether it recognises the exam. The harness is the product now, and the harness is where the risk lives. Anthropic's own engineer showing up in the thread to say "good catch" is what accountability looks like when the product is a permission system that writes commands to disk.

The second thread is arithmetic. A $10 modem stick runs a homelab. A 284B model decodes at ten tokens per second in desktop RAM at 1.7 bits per weight. A single-box Pascal toolchain beat a stack of command-line tools. Each of these is a case of software getting small enough to fit hardware that already exists, and each one's cost is real: 1.7 bpw costs quality, four Cortex-A53s cost throughput, and a single-file honeypot costs the maintenance you didn't budget. The claim that unites them isn't "cheap is better." It's that the price of the last decade's defaults — Electron, cloud inference, per-seat agents — is now visible on a line item, and people are routing around it.

The third thread is the least comfortable: systems that decide what not to say. Apple has 100,000 phrases its keyboard won't complete, disclosed by nobody and discoverable only by a researcher noticing his thumb kept missing. MaxxBench found models that will delete their own correct work to match a benchmark's expected answer. Neither is malicious. Both are the same failure mode — an optimisation target nobody can inspect, producing behaviour that looks like a decision. The difference between a keyboard that won't suggest "male chauvinist pig" and a model that won't write the code it knows is right is mostly a difference in how easy the constraint is to find.
