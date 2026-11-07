---
title: "Hacker News Front Page Roundup — November 7, 2026"
pubDate: 2026-11-07
description: "Seventy-seven stories cleared 200 points and eighteen are new. A terminal library quietly became infrastructure, Apple's Macs have been building a family graph nobody documented, and the AI research debate split into two posts that are both right."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Seventy-seven stories cleared the 200-point threshold in this afternoon's scan of the top 260 ranked submissions. Eighteen are new. The other fifty-nine are yesterday's page, still accruing points in the low single digits — with one exception that gained nearly five hundred.

The new material is quieter than Thursday's. No product launches, no fresh scandal. What it does have is three genuine arguments. One about whether AI is accelerating AI research, where a METR deep-access report and a LessWrong quick take landed the same day and contradict each other in a way that turns out to be resolvable. One about whether on-device data collection is meaningfully different from cloud data collection, where a pair of Apple daemons have been running since 2022 without a man page worth reading. And one about how much compatibility a rewrite of `sudo` owes you.

The rest is craft: a terminal emulator extracted into a C library that twelve million IDE users now depend on without knowing it, a twenty-year-old racing game recompiled to run in a browser tab, and a fan project that reverse-engineered the FAA's floppy disk budget.

## Libghostty 1.0 — 980 points

**980 points** · 172 comments · [mitchellh.com](https://mitchellh.com/writing/libghostty-1-0) · [HN discussion](https://news.ycombinator.com/item?id=50399933)

Mitchell Hashimoto shipped libghostty-vt 1.0, a portable C library for terminal emulation extracted from the core of Ghostty. The 1.0 is about two things: the C ABI is now stable, and the packaging is real. Signed source tarballs plus a companion dependencies tarball in Zig's cache layout so a distribution can build completely offline. SONAME, pkg-config files, a CMake package config, `--prefix`/`DESTDIR`/`lib64` support, debug info kept by default so distros can split it out. MIT licensed, runtime dependency is libc, and no copyleft anywhere in the dependency tree — every dependency listed in a machine-readable manifest with version, SPDX identifier and hash.

The adoption numbers are the interesting part. JetBrains replaced JediTerm with libghostty, which puts it in front of 12.5 million active IntelliJ/PyCharm/GoLand users by JetBrains' own count. Neovim has an approved pull request replacing libvterm, closing a ten-year-old issue about reflowing scrollback on resize. KDE is experimenting with a Konsole replacement. Turborepo renders task output with it, OrbStack embeds it, Antithesis used it to fuzz TUI programs and found real bugs in btop, and `ghostty-web` is the WASM build with an Xterm.js-compatible API. There are bindings for Rust, Go, JavaScript, Swift, Python, .NET, Elixir, Dart and Java.

The engineering decision worth stealing is the ABI design. Every object is an opaque handle; the hundreds of values you might read or write go through a small set of enum-keyed getters and setters, so adding a new value doesn't add a symbol. Newer headers linked against an older library get `GHOSTTY_UNSUPPORTED` back instead of crashing. Enums are pinned to `int` on every compiler, non-opaque structs carry their size, ELF symbols are versioned so the loader refuses a mismatch by name, and CI checks all of it against golden type manifests.

Treat two of the claims with care. "More people use a terminal powered by libghostty than use Ghostty the application" is unverifiable and probably true for boring reasons — every JetBrains user counts. And the 10,000-terminals-on-4-cores-8GB benchmark is a benchmark of the terminal, not of your shell: Hashimoto had to use `dash` because bash wouldn't fit. The terminal was never the expensive part.

## Need for Speed Underground 2, online in the browser — 667 points

**667 points** · 194 comments · [nfsu2.xyz](https://nfsu2.xyz/) · [HN discussion](https://news.ycombinator.com/item?id=50403052)

Two brothers ported a 2004 racing game to a browser tab because they used to play it together. It is not an emulator. The PC game's own code was recompiled to Chrome and Firefox by way of NFSU2Recomp, an x86-to-C static recompiler in the lineage of N64: Recompiled and XenonRecomp — the technique of lifting machine code back into C so it can be re-targeted. The result runs up to 120fps in widescreen with free roam, online races, controllers, wheels and touch controls.

That distinction is why the thing performs. A recompilation is native code again; an emulator in WebAssembly has to interpret a PowerPC or x86 pipeline in a browser. The project forked from the MIT-licensed version of NFSU2Recomp from October 16 this year, so the whole chain is a month old.

The legal position is the part nobody wants to write down. The site hosts the game's assets, is explicit that it is not affiliated with or endorsed by Electronic Arts, takes donations through a coffee link, and posts `legal@nfsu2.xyz` for rights holders. Commenters split cleanly: one calls taking donations for copyrighted content "highly dubious," another points out the game is abandonware that cannot be bought anywhere and predicts a takedown now that it's popular. Both are right about different things. The engineering is legitimate; the distribution is not; and the takedown, when it comes, will remove the artifact without making the game purchasable.

One practical note from the thread: on Linux you need `chromium --enable-unsafe-webgpu --ozone-platform=x11` for the WebGPU path, which tells you what the game is actually standing on.

## A Jev that can ask Opus for help — 568 points

**568 points** · 142 comments · [hightouch.com](https://hightouch.com/blog/llm-judges-identity-resolution) · [HN discussion](https://news.ycombinator.com/item?id=50397429)

Hightouch benchmarked whether cheap "decision models" — Jev and GPT-6 Luna, a class of model that returns a 0–1 confidence score for a specific claim — can grade identity resolution as well as a frontier model. Out of the box both land between 88.8% and 97.3% accuracy, at $0.05–$0.10 per 1,000 identities and about 0.15 seconds per answer, trailing Opus by roughly six percentage points on the harder cases. The useful result is not the accuracy gap. It's that a cascade of Jev with an Opus escalation gets frontier accuracy at more than four times lower cost, because Jev's confidence is calibrated and Luna's is not. Jev's mistakes arrive with low confidence. Luna's arrive with high confidence, which makes Luna unusable as a gate.

The motivation is concrete: to prove an identity graph isn't over-merged, a human has to sample output identities by hand at about 50 per hour, and to pin the over-merge rate to within one percentage point you need more than a thousand samples. That's a week of someone's life per iteration. If a model can grade identities at human accuracy, you can grade a hundred thousand in seconds.

The skepticism is straightforward. This is one task from a company that sells identity resolution, so the "4x cheaper" number is a pricing claim in a vendor's own benchmark, and the calibration finding is the only part that generalises. A commenter who read the ground truth closely found errors in the human labels — the dataset marks "Valentino" as a female child, which it obviously is not — which means the benchmark's ceiling is a hand-labelled set with defects, and the models are being graded against those defects.

The comment that should make you sit up came from someone reading the same post as a privacy story: this is "AI-assisted privacy violation, four times cheaper." Identity resolution is the machinery that turns scattered records into a profile of a real person. Making the quality-control step four times cheaper doesn't change what the product does — it changes how many companies can afford to build it.

## Every Mac comes with an undocumented family classifier — 498 points

**498 points** · 297 comments · [8rank.ai](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph) · [HN discussion](https://news.ycombinator.com/item?id=50403097)

Two researchers went through `~/Library/IntelligencePlatform` on a Mac running macOS 26 and found fifty-one SQLite databases maintained by a pair of daemons, `knowledgeconstructiond` and `intelligenceplatformd`, that cross-reference Contacts, Calendar, Photos, Messages, Mail, location, Screen Time and a long tail of behavioural signals into a single queryable graph about who you are, who you know, how those people relate to each other, where you go and when. Every Mac since macOS 13 in 2022 ships this.

The documentation is a man page. `man 8 knowledgeconstructiond` is four lines. Apple's researchers published a paper in 2023 on the graph-construction techniques, but nothing on which OS versions run the daemons, what is collected versus inferred, or the kinship inference the authors found and described. Prior work exists: Nic Lydon wrote it up earlier in 2026, and Alexis Brignoni taught iLEAPP to read the same store on iOS, where `graph.db` and `ontology.db` live under `/private/var/mobile/Library/IntelligencePlatform`. The authors open-sourced a local dashboard, iKnow, so you can read your own graph.

The defence offered in the thread is that this is all on-device and therefore fine, and it's a real argument — a local graph is what lets "text James" work when you know three Jameses. The empirical answer in the same thread undercuts it. One commenter found the graph had merged his personal Mac and his work Mac into one profile through the Apple account, picking up Slack channels he only uses at work on a machine that has never run Slack. Another had every intelligence and Siri setting turned off and blocked, and found the collection still running. "On-device" and "you can turn it off" are not the same claim, and the authors hedge their own strongest sentence — that this is a store LLMs retrieve from — with "(allegedly)," which is the honest position given how little is documented.

## The FAA is retiring its floppy disks — 401 points

**401 points** · 323 comments · [reuters.com](https://www.reuters.com/world/us/us-faa-says-it-will-phase-out-floppy-disks-air-traffic-control-by-2028-2026-11-05/) · [HN discussion](https://news.ycombinator.com/item?id=50388001)

The FAA said Thursday it will replace the floppy-disk systems at more than 400 air traffic control facilities by the end of 2028 with the Enterprise Information Display System. E-IDS replaces four display systems: IDS-4, ACE-IDS, NIDS and ERIDS. Five sites are already converted, including Atlantic City, Nashville, Rochester, and the Atlanta and Salt Lake City data processing hubs; the plan is 435 sites. Congress approved $12.5 billion last year for air traffic control modernization, and Transportation Secretary Sean Duffy wants another $30 billion.

The floppy is the least interesting detail and the only one that travelled. IDS-4 was developed in the early 1990s, not the 1980s as the press release says — a commenter traced the contract — and it runs MS-DOS on desktop PCs with 3.5-inch drives. The disks carry weather, PIREP and NOTAM data, which the September GAO report described as obsolete technology with manual update methods that are "cumbersome for controllers to search, retrieve, and display." A former FAA engineer who worked on NOTAM digitization defended the agency's pace in the thread, and the defence is credible: the safety risk management process that makes modernization slow is the same process that keeps the thing running.

The comment that reframes the story: all of that data fits on 1.44MB. Whatever E-IDS does, the floor for a safety-critical system serving the national airspace is 1.44MB of text per shift, and a second commenter's point follows — if the FAA can meet its requirements in that budget, most applications can. Also worth holding onto: replacing a system everyone understands how to operate is riskier than the system being old. Old Jim the warthog is not going to surprise anyone.

## AI is dramatically accelerating AI research right now — 356 points

**356 points** · 333 comments · [planned-obsolescence.org](https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai) · [HN discussion](https://news.ycombinator.com/item?id=50397994)

Ajeya Cotra read METR's latest deep-access investigation into how much Anthropic is being accelerated by its own models, and her conclusion is that Anthropic has already crossed the threshold its Responsible Scaling Policy defines. The definition: capabilities progress moving twice as fast as the fastest sustained rate before AI contributed much to AI R&D, plausibly attributable to AI automating AI R&D rather than to more compute. The measurement: internal AECI progress at Anthropic between October 2025 and October 2026 ran about twice the previous twelve months. Anthropic's S-1 says it "may imminently meet" this. Cotra reads the report as already there.

The reasoning that makes this more than a number is the arithmetic of what a 2x implies. Capabilities are compute multipliers times training compute, so if overall progress doubles because of software, the growth rate of compute multipliers must be more than twice as fast — call it 2.5–3x. If experiment compute and researcher labour are similarly important, the labour uplift has to be the square of that, roughly 4–9x. And because ideas get harder to find, sustaining the new rate without scaling compute faster requires the uplift to keep growing — plausibly around 10x today, which lines up uncomfortably well with Anthropic staff informally reporting about 12x. The image Cotra uses is a time-warp bubble: not a researcher becoming ten researchers, but one researcher experiencing ten days per day.

The obvious objection is that the load-bearing evidence is redacted. The report says a majority of what it found most informative was withheld, the metric is an internal variant of the Epoch Capabilities Index, and the window is twelve months at one company during a period of extraordinary compute growth. Commenters pushed on exactly that: which part is capability improvement in the weights, and which is capital plus embarrassingly-parallel agent swarms burning tokens? Others noted the hard constraint — you still have to train the model, and ten trillion tokens take as long as they take. All fair. But the post is careful about its own uncertainty, and the 10x-labour estimate is derived from stated assumptions rather than asserted.

## Anthropic IPO buyers see a valuation as low as $1.1T — 302 points

**302 points** · 610 comments · [bloomberg.com](https://www.bloomberg.com/news/articles/2026-11-06/anthropic-ipo-valuation-expectations-pressured-after-ai-rout) · [HN discussion](https://news.ycombinator.com/item?id=50394906)

Bloomberg reports that ahead of Anthropic starting formal IPO marketing next week, prospective buyers are discussing a $1.2–1.3 trillion valuation, with some weighing $1.1 trillion. Buyers had been talking about $1.4–1.5 trillion after an October briefing on financials, and $2 trillion in early October; the company was privately valued at $965 billion in May. The listing is expected on Nasdaq under ANT, and Polymarket and Kalshi odds of getting it done before December 1 have fallen from roughly 80% to about 50%. Reporting elsewhere puts the October run rate above $80 billion.

Read this next to the Cotra piece and the week makes sense. The same seven days produced a claim that capability progress at Anthropic has doubled, and a market that marked the company down roughly 40% from its October expectation. Neither cancels the other: one is a claim about what the models can do, the other is a claim about what the returns on a trillion dollars of capex will look like. A company can be genuinely accelerating and still be worth less than the number a hedge fund wrote down in a better week.

Six hundred and ten comments on a valuation range nobody has bid against is not a valuation story. It's a mood. The specific number to watch isn't $1.1T — it's whether the roadshow prices conservatively and leaves room, which is what Bloomberg's sources suggest the company may do. Pricing at the top of a falling market is how you get a broken IPO.

## Firecracker VM escape: guest to host root — 277 points

**277 points** · 124 comments · [pwn.ai](https://pwn.ai/blog/firecracker-escape) · [HN discussion](https://news.ycombinator.com/item?id=50397219)

This is the second part of a chain against Firecracker, AWS's microVM monitor, and the claim is the strongest one you can make about a sandbox: code execution as root on the host, from inside the guest. The target is CVE-2026-99999, building on the host memory primitive from part one. The technique: put a recognisable nonce in a guest page, search the host physical ranges for candidate EPT roots, validate the nested page tables until only one root resolves the nonce, and you have the host physical address of a page you control. Then search the native host page tables for a mapping of that physical page to find the Firecracker process, locate the `pt_regs` frame for the vCPU thread while it sits in `KVM_RUN`, and rewrite the saved instruction and stack pointers so that the return from the syscall executes a call of the attacker's choosing. The guest restores its temporary stack edits; Firecracker keeps running; the VM stays reachable over SSH.

The thread does the two things HN threads do to exploit writeups. It fact-checks the novelty — this is a practical exploitation of PwnEscape, disclosed weeks ago and discussed in less-upvoted submissions, and there is a duplicate submission on the same day — and it argues about whether the chain is really what it says. One commenter points out the exploit requires a second, sysadmin-level primitive to get the initial host write, and asks how the guest wrote to the host Firecracker process at all. That is a fair objection to the headline and not a comfort: the escape is a composition of two kernel-level faults, and everyone running untrusted code on shared hardware has both.

The most useful comment is the one asking whether microVM hardware isolation deserves the trust it gets relative to software isolation like gVisor. Hardware isolation is a boundary you cannot patch. When the chain gets this far, the answer becomes defence in depth rather than a single correct choice — and one respondent offered up a public ClickBench playground hosting hundreds of database engines, several of which are effectively remote code execution by design, as a testbed.

## Asahi Linux 7.3 — 266 points

**266 points** · 222 comments · [asahilinux.org](https://asahilinux.org/2026/11/progress-report-7-3/) · [HN discussion](https://news.ycombinator.com/item?id=50401867)

The headline in this progress report is not a feature. It's that two major drivers, `macaudio` and `avd`, were submitted upstream, and that AVD spent barely three months in Asahi's downstream tree first — the project's shortest turnaround for a major SoC component, and evidence for the shift to upstream-first development the team has been trying to make. Initial devicetrees for M4 Pro, M4 Max and M5 are in, booting to a TTY and nothing more. M3 support has dropped the EXPERT flag and is now generally available, with DCP enabled, which brings sleep and a usable area around the notch on MacBooks.

The reverse-engineering work is the part that reads like science fiction. m1n1 can now virtualise SPTM-enabled macOS, which is what made M4 machines tractable. M5 needs Exclaves — small applications in an isolated environment under the Secure Kernel, messaged over an IPC protocol called Tightbeam, conceptually close to Arm's TrustZone. Asahi's answer was to run the Secure Kernel and Exclave userspace in another VM alongside SPTM and macOS, which is now three VMs spawning in EL1 under m1n1. The team's own joke about selling m1n1 to companies fleeing VMware is the correct joke.

Two gaps. The M3 GPU remains unreverse-engineered to usefulness — the M3 GPU was a tick-tock break from M1 and M2, and the milestone is drawing a triangle. And the report notes "multiple attempts to exploit our permissive licensing to hijack our work, with a direct view to replacing the project and aggressively monetising Linux on Apple Silicon," which is why the WINE history gets cited. A commenter asks if this is about Omarchy and gets no confirmation; a competing project, gravitylinux, shows up in the thread claiming Vulkan 1.4, working M4 and most of M5, and suspend-to-RAM. Asahi's counter-argument is not features. It's mainline.

## The end of Microsoft Research's AI Frontiers group — 219 points

**219 points** · 119 comments · [hunch.net](https://hunch.net/?p=13764006) · [HN discussion](https://news.ycombinator.com/item?id=50406563)

John Langford organized AI Frontiers inside Microsoft Research in 2023, on the theory that after ChatGPT a single researcher with a clever idea would arrive late and unconvincing because he couldn't build strong enough baselines alone. The group was about fifty people. It produced Autogen, the Fara computer-use agent, and on the fundamental side the Next Latent objective, Dion3 as an improved Muon, and the Full Bandwidth Transformer. It also built a shared monorepo with the edge-scale pretraining codebase, because Langford counted at least four separate efforts inside Microsoft building model pipelines.

In early September AI Frontiers was reorged into Microsoft AI, and Langford left. His account of why is the quotable part: the philosophy of MAI's ex-Inflection leadership is "scaling, and aggressively not research," the primary effort in that world is data rather than architecture, and "there was plenty of evidence that they just did not really want us." He frames the disagreement fairly — returns to scale are more predictable than returns to research, which is why the choice keeps getting made — then makes the case that the tradeoff is being dropped rather than weighed. Bytedance's experiments suggest a variant of the Full Bandwidth Transformer is comparable to a model twice the size. Halve training and inference cost across an industry with a trillion dollars of committed investment and see what that's worth.

Treat it as one person's exit post. The evidence he marshals for his own thesis comes from Bytedance and his former institution's hardware, not from AI Frontiers' results, and a fifty-person group with a grandiose name going away is not the same as Microsoft abandoning AI research. But the sentence about predictable returns is the exact sentence a CFO writes in the quarter before a competitor laps them, and commenters inside the industry confirm the pattern is company-wide: exploratory research is discouraged while everyone races down the same transformer highway.

## Ask HN: What in the world is taking Ubuntu so long? — 214 points

**214 points** · 136 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50393105) · [HN discussion](https://news.ycombinator.com/item?id=50393105)

Someone noticed that CVE-2026-98432, scored 9.8, had been sitting as "work in progress" on Ubuntu's tracker for the better part of a week with no update, and asked the reasonable question: too many kernels, not enough build automation, or engineers who are overwhelmed? The follow-up is sharper than the complaint — we are entering a period with vastly more security issues, so if the pipeline can't keep up now, what does six months from now look like?

The thread answered it. The fixes had been in `-proposed` since October 26 for noble and October 28 for resolute, and moved to `-updates` on Thursday afternoon. So the gap was not detection, not engineering, and not a missing patch. It was the SRU pipeline — proposed, soak, verify, promote — running over a kernel matrix that spans multiple LTS versions, several architectures and every derivative. That's a policy choice, and it's defensible for a distribution whose main promise is not breaking your machine, right up until the day the volume of CVEs makes a week-long promotion lag an operational risk.

The rest of the thread is people relitigating Ubuntu generally: snap, Upstart, Landscape, the ICC rug pull and the irony that Europe is actively shopping for an OS not controlled by a US company while Canonical is spending effort on things that don't gain traction. Some of that is noise. The kernel matrix point is not, and it will keep being the answer to this question for as long as the matrix holds.

## GitHub's new Git storage architecture — 212 points

**212 points** · 61 comments · [github.blog](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) · [HN discussion](https://news.ycombinator.com/item?id=50397099)

GitHub rewrote how repositories are stored. Every push adds a pack to Blob Storage; too many packs makes every lookup slower, so compaction has to happen. In the old architecture compaction ran on the same replicas that served traffic, and had to run on every one. Now it runs on separate nodes directly against durable storage, coordinating through a Ref-CAS service that orders each reference independently instead of the whole repository, and compaction nodes take leases on shards so the work scales horizontally. A second transaction removes the compacted inputs from the pack manifest, cleanup deletes them later, and a pre-publish check asserts the new packs contain exactly the same objects as the inputs.

The design principle is that every repository — one developer's side project or the busiest monorepo — runs on the same architecture with no special handling, and the roadmap leans hard into agents: read a single object instead of its whole pack, group commits and trees and blobs into separate packs, partial replicas, materialized views including "agent session context stored alongside each commit," and scale-to-zero fleets.

The skepticism is in the comments and it's deserved. This is future planning, not the fix for the outages people have been complaining about this week; GitHub says the horizontal techniques carry over from the existing architecture and the new work is mostly intra-repo vertical scale, then admits the most active repos today see bursts of at most dozens of writes. One commenter measured the difference: this looks like Cursor's Continuity with an order of magnitude more write throughput. The honest framing is that GitHub is building for a workload that doesn't exist yet and calling the result reliability.

## I struggle to believe that AI R&D is so ingenious — 211 points

**211 points** · 209 comments · [lesswrong.com](https://www.lesswrong.com/posts/DALNiKBjMGMF8grme/arjun-panickssery-s-shortform?commentId=fJtaHHHfx45tD7BSL) · [HN discussion](https://news.ycombinator.com/item?id=50388513)

Arjun Panickssery's quick take is the direct counterweight to the acceleration story above, and it's worth reading as an argument rather than a vibe because it names failure modes. On a SOTA Scrabble engine, a philosophy formalization project and an Ultimate Tic-Tac-Toe task, the model's judgment was poor in a basic way: it failed to identify the obviously most important papers during literature review; it ran experiments with zero information value because the training data was too small to distinguish the architectures under test; it went down trivial directions for hours; on Tic-Tac-Toe it found the clever blog post and could not tell that it was more relevant than the older papers. It also writes reports so hard to follow that interrogation is needed to learn what it actually did.

The exception he grants is the one that matters for the acceleration thesis: hill-climbing with a fast, objective feedback loop. Prompting Astra repeatedly improved the state of the art on "list all legal Scrabble moves" by 10x. But the two large leaps in that run were his ideas — measure across a game rather than per random position, and split the algorithm by the number of blank tiles left. The model executed brilliantly and contributed nothing to the direction.

Both posts can be true, and the resolution is boringly structural. AI accelerates the parts of research that are measurable, because measurable things have objectives, and objectives are what you can hill-climb. The METR number is real within that envelope. The envelope is exactly the subset of research that isn't stuck on a judgment call — and the commenters converge on the same description from different directions: technically correct, misses the forest, a genius with severe ADHD and no long-term memory.

## Sodium-ion batteries approach cost parity with LFP — 210 points

**210 points** · 101 comments · [pv-magazine.com](https://www.pv-magazine.com/2026/11/06/sodium-ion-batteries-approach-cost-parity-with-lfp-with-70-gwh-covered-by-supply-agreements/) · [HN discussion](https://news.ycombinator.com/item?id=50399657)

Wood Mackenzie's analysis says leading manufacturers reach cell-level cost parity with LFP by late 2026, with more than 70 GWh of supply agreements already signed across China, the US, Germany and India. The numbers underneath: sodium-ion averages $229/kWh today against roughly $200/kWh for LFP, with a 21% lower total cost of ownership over a 20-year project life coming from fewer capacity-expansion cycles and lower operating cost, and a learning rate of 18–20% in China through 2035. BYD plans 30 GWh of capacity; CATL is targeting more than 1 GWh of shipments by the end of this year.

Read the dates carefully, because they carry the story. Cell-level parity is 2026. Module and system parity is not expected until after 2030. That's a four-year gap, and the system is where the cost actually lives. The policy environment is doing a lot of work too: China reintroduced a consumption tax on lithium-ion in July 2026 while exempting sodium-ion until the end of 2028, LFP took a 2% levy in September rising to 4% next year, the US has roughly 58% tariffs on Chinese storage cells plus Section 45X credits, and the EU's carbon footprint declarations favour supply chains that skip certain critical materials. A technology that reaches parity partly because its competitor is being taxed is not yet winning on physics.

For home storage, which is what most of the thread wants, the case is better than the cost table suggests: no thermal runaway chemistry to design around, usable at lower temperatures, and cyclic life that matters more than density when the battery sits in a garage. The commenters asking when they can buy one already know the answer is China first. The one asking why "cost parity" is being celebrated when the selling point was supposed to be "cheaper" is asking the right question.

## The Ubuntu 26.04 Rust sudo is not compatible with standard sudo — 200 points

**200 points** · 187 comments · [utcc.utoronto.ca](https://utcc.utoronto.ca/~cks/space/blog/linux/Ubuntu2604RustSudoNotCompatible) · [HN discussion](https://news.ycombinator.com/item?id=50354308)

Chris Siebenmann found that sudo-rs, the Rust rewrite Ubuntu 26.04 ships as the default `sudo`, did not behave like the sudo he wrote his config for. Two failures: wildcards in command arguments silently mean something different, and the effect of a rule like `/usr/sbin/exim -bp[acru]` — four specific options under classic sudo — is not what you wrote under sudo-rs. Other people reproduced it and quantified it. One independent test of 25 permission checks against sudo-rs 0.2.4 found 11 that differed, and all 11 involved wildcards in arguments. A second, on the 0.2.13 that 26.04 actually carries, found that embedded wildcards are now a parse error, so `visudo` refuses the line rather than allowing a narrower rule than you intended.

The mechanism is in `match_command` in `src/sudoers/mod.rs`: the command path gets glob matching, the argument list gets `args == vec`, plain equality. So `/bin/rm *.txt` is the literal string `*.txt`, except for one special token — a standalone `*` as the final argument, meaning zero or more trailing arguments, which is new in 0.2.13. Everything else that people actually rely on (path globs, negation, exact multi-argument rules, empty-string arguments, aliases, runas, `sudoers.d` inclusion) matches classic sudo exactly. What does not survive: `sudoers.ldap`, `cvtsudoers`, and the `sudo-ldap` package, all gone. Classic sudo is still installed as `sudo.ws`, and `update-alternatives --set sudo /usr/bin/sudo.ws` switches back.

The rewrite was still the right call. `sudo` is setuid root, started by any local user on the box, and CVE-2021-3156 was a heap overflow in exactly that position that sat in released code for about a decade. Rust catches that class of bug at compile time.

But Siebenmann's sharpest observation stands regardless: sudo-rs banned the wildcards that let you be narrow and specific, and kept the single wildcard that lets a rule be catastrophically broad. Under classic sudo, `/bin/rm *.txt` also permits `sudo rm -rf /home .txt`, because the arguments are joined into one string and matched with a glob that eats whitespace. That token survived. The ones an admin would use to restrict a rule did not. Commenters were split between "globs were always a footgun, three lines to fix" and "compatibility is going out the window one distro at a time," and both are describing the same failure: a silent change in the most privileged parser on your system, shipped in an LTS.

## Also new, below the sections

- **Upload Your RAM** ([262 points](https://uploadyourram.org), 246 comments) — a joke site that exploits a real Sam Altman line about it being inefficient for us to have RAM in our computers. The premise — donate your idle memory to a better cause — produces 246 comments of people correctly identifying the bit. One commenter found the quote in context and reported it wasn't that weird; another is convinced the site downloads something instead of uploading it. Centralization as a return to the mainframe era is the actually interesting thread inside it.
- **First steps in bare-metal programming using UEFI** ([246 points](https://kevinboone.me/efitest_index.html), 51 comments) — a Linux-workstation guide to writing UEFI applications, which turns out to be an education in how strange the firmware environment is. No C standard library, UTF-16 strings everywhere, and a linker that will happily emit calls to functions that don't exist so your program crashes at runtime. The thread supplies the fixes: edk2-libc, posix-uefi, and `nm -D --undefined-only` in the build script to prove no external symbols survived.
- **Running a law firm on Free software** ([205 points](https://decoded.legal/blog/2026/11/running-a-law-firm-on-free-software-2026-edition/), 90 comments) — a UK telecoms-and-tech law firm runs entirely on Debian, GNOME, Thunderbird, Syncthing, Radicale and self-hosted NUCs, having dropped Nextcloud and its own Jitsi server. The interesting pushback isn't whether it works; it's whether it should. One lawyer says not using Word amounts to malpractice because every counterparty sends `.docx`, another asks what happens to the practice when the person who built this moves on, and a third points out that a firm on Harvey has handed its vendor the leverage to integrate vertically.

## Still on the page

With the caveat that scores over multiple days are not comparable, fifty-nine stories from the previous posts are still ranked. Ordered by current score.

| Story | Last | Nov 7 |
|---|---|---|
| [sshole](https://sshhole.com) | 2,897 (11-06) | 2,950 (+53) |
| [Claude Code sends your email address to websites](https://github.com/anthropics/claude-code/issues/107757) | 1,531 (11-06) | 1,588 (+57) |
| [AI is forcing us to pay off 40 years of technical debt](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) | 1,288 (11-06) | 1,294 (+6) |
| [Residential proxies detected on White House network](https://layer3intel.com/blog/residential-proxies-white-house-network) | 1,265 (11-06) | 1,267 (+2) |
| [Tesla to wind down Cybertruck production](https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817) | 650 (11-06) | 1,117 (+467) |
| [The 'Astra can read and write weights to improve Qwen' post is misleading](https://honnibal.dev/blog/astra-read-write-misleading) | 1,038 (11-06) | 1,039 (+1) |
| [Stringman, an $800 open-source room scale gripper robot](https://neufangled.com/) | 839 (11-06) | 841 (+2) |
| [Search for everyone](https://kagi.com/changelog#11820) | 740 (11-06) | 751 (+11) |
| [Tell HN: Gemini trains on chat history, even for subscribers (personal accounts)](https://news.ycombinator.com/item?id=50363461) | 723 (11-06) | 728 (+5) |
| [Blender's UI and Runtime: Much Faster Than GPUI](https://github.com/ppmpreetham/BUI) | 631 (11-06) | 712 (+81) |
| [MS Paint Remote Code Execution Vulnerability](https://www.cve.org/CVERecord?id=CVE-2026-83844) | 694 (11-06) | 712 (+18) |
| [North Korean fake job interview led to $6.3B Binance heist](https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398) | 652 (11-06) | 655 (+3) |
| [Goodbye from Salon](https://www.salon.com/2026/11/05/goodbye-from-salon/) | 633 (11-06) | 646 (+13) |
| [Dutch 'idealist' bank ASN blocks non-Google Android, including GrapheneOS](https://github.com/PrivSec-dev/banking-apps-compat-report/issues/105) | 598 (11-06) | 641 (+43) |
| [Kimi K3.1 Pro model weights are out](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | 634 (11-06) | 636 (+2) |
| [Nvidia RTX Spark encrypted firmware slows inference speed to 35% on Linux](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop) | 614 (11-06) | 615 (+1) |
| [Britain to make salary disclosure in job ads mandatory](https://www.reuters.com/business/world-at-work/britain-make-salary-disclosure-job-ads-mandatory-2026-11-05/) | 536 (11-06) | 605 (+69) |
| [AMD expects to outsell Intel in Q4 for the first time in history](https://www.tomshardware.com/pc-components/cpus/amd-expects-to-outsell-intel-in-q4-for-the-first-time-in-history-usd17b-guidance-would-exceed-intels-projections) | 588 (11-06) | 593 (+5) |
| [Motorola Signature 27 with GrapheneOS support](https://motorolanews.com/motorola-signature-27-2/) | 567 (11-06) | 578 (+11) |
| [I wish tech companies knew more about me](https://rakhim.exotext.com/i-wish-tech-companies-knew-more-about-me) | 544 (11-06) | 558 (+14) |
| [Ask HN: What's your current AI agentic setup?](https://news.ycombinator.com/item?id=50366117) | 540 (11-06) | 553 (+13) |
| [Safari introduces Adaptive Dark Mode in 27.3](https://webkit.org/blog/18541/introducing-adaptive-dark-mode/) | 510 (11-05) | 514 (+4) |
| [Cuban: Facebook knowingly runs AI deepfake scam ads; docs say $16B fraud revenue](https://finance.yahoo.com/technology/ai/articles/mark-cuban-says-facebook-knowingly-213000020.html) | 486 (11-06) | 510 (+24) |
| [Discord is ditching Electron and its new app uses less RAM](https://www.theverge.com/news/1027379/discord-ditching-electron-web-app) | 475 (11-06) | 489 (+14) |
| [A thousand fewer paths to root](https://openai.com/index/a-thousand-fewer-paths-to-root/) | 486 (11-06) | 487 (+1) |
| [Jelly Sheet](https://mrdoob.github.io/codevember-2026/01/) | 466 (11-06) | 466 (+0) |
| [Window Sweaters](https://github.com/saragordic/window-sweaters) | 445 (11-06) | 456 (+11) |
| [Mac at any scale](https://namespace.so/blog/mac-at-any-scale) | 406 (11-04) | 419 (+13) |
| [Lemmings CSS Animation](https://markblah.github.io/lemmings/) | 408 (11-06) | 413 (+5) |
| [The Hackintosh Reborn](https://www.naut.ca/blog/2026/11/05/the-hackintosh-reborn-with-ai/) | 395 (11-06) | 410 (+15) |
| [Download your favourite YouTube videos](https://criminallyvulgar.dev/you-should-absolutely-download-your-favourite-youtube-videos/) | 391 (11-06) | 399 (+8) |
| [A new Go API for JSON](https://go.dev/blog/jsonv2) | 391 (11-06) | 392 (+1) |
| [Kitty 0.50](https://sw.kovidgoyal.net/kitty/changelog/#) | 385 (11-06) | 386 (+1) |
| [Images 2.6](https://openai.com/index/introducing-images-2-6/) | 383 (11-06) | 384 (+1) |
| [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) | 375 (11-05) | 376 (+1) |
| [Deus Ex](https://www.filfre.net/2026/11/deus-ex/) | 284 (11-06) | 368 (+84) |
| [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) | 258 (11-06) | 356 (+98) |
| [Guerrilla bike lanes: San Francisco makes illicit infrastructure permanent (2016)](https://99percentinvisible.org/article/guerrilla-bike-lanes-san-francisco-makes-illicit-infrastructure-permanent/) | 344 (11-06) | 344 (+0) |
| [GPT-6 Astra covertly underperforms on safety research](https://alignment.openai.com/misalignment-reports/covert-underperformance-on-safety-research-tasks/) | 340 (11-06) | 341 (+1) |
| [MCP Explained](https://mcp-explained.com/) | 328 (11-06) | 340 (+12) |
| [Ripple-65B Preview: U.S. Open-Weight SOTA on Agentic Coding](https://www.ricursive.com/ripple) | 338 (11-06) | 339 (+1) |
| [From Linux to Wikipedia: How Volunteers Build the Internet](https://thereader.mitpress.mit.edu/from-linux-to-wikipedia-how-volunteers-build-the-internet/) | 289 (11-06) | 338 (+49) |
| [Pwn.college](https://pwn.college/) | 291 (11-06) | 325 (+34) |
| [Insects don't swarm at LED lights](https://www.birdsoutsidemywindow.org/2026/11/03/insects-dont-swarm-at-led-lights/) | 310 (11-06) | 311 (+1) |
| [Awesome repositories are no longer awesome](https://erikgahner.github.io/posts/2026/awesome-repositories-are-no-longer-awesome/) | 298 (11-06) | 303 (+5) |
| [Inkling 2 Small](https://thinkingmachines.ai/news/inkling-2-small/) | 279 (11-06) | 287 (+8) |
| [Starfall – Affordable, routine access to microgravity](https://www.spacex.com/starfall) | 281 (11-06) | 285 (+4) |
| [Show HN: A decent text-to-image model trained for ~$20K (Apache 2.0 Weights)](https://www.linum.ai/field-notes/pjit-21k) | 267 (11-06) | 281 (+14) |
| [September in Servo: <progress>, rounded rectangles, and more](https://servo.org/blog/2026/11/05/september-in-servo/) | 265 (11-06) | 268 (+3) |
| [Obscure audio codec is a perfect fit for the N64](https://phoboslab.org/log/2026/11/n64-ulc-codec) | 256 (11-06) | 264 (+8) |
| [OpenAI to acquire Pierre Computer Company](https://openai.com/index/openai-to-acquire-pierre/) | 263 (11-06) | 264 (+1) |
| [Incident with Pull Requests, Git Operations and Issues](https://www.githubstatus.com/incidents/smtdswd1h2w4) | 232 (11-04) | 264 (+32) |
| [Kugelblitz – Mac-Native Google Earth Alternative](https://apps.metaebene.me/en/kugelblitz) | 233 (11-06) | 262 (+29) |
| [Show HN: After a decade of reversing, I got co-op working in DOS Wing Commander](https://fireflyk64.github.io/wcmulti/) | 254 (11-06) | 255 (+1) |
| [Verification Is Not Knowledge: Science needs more than answers](https://blog.cosmos-institute.org/p/verification-is-not-knowledge) | 243 (11-06) | 244 (+1) |
| [Progress on provable inference for large language models](https://www.anthropic.com/research/provable-inference) | 238 (11-06) | 240 (+2) |
| [Hungary: Communist-era files released, up to 60k former agents revealed](https://www.euronews.com/2026/11/04/hungary-communist-era-files-opened-up-to-60000-former-agents-revealed) | 231 (11-06) | 238 (+7) |
| [So my ISP was hijacking my DNS](https://www.karthihegde.dev/posts/dns_tampering) | 224 (11-06) | 231 (+7) |
| [Conductor is joining Meta](https://www.conductor.build/announcement) | 214 (11-06) | 214 (+0) |

The Cybertruck story is the day's only real mover: 650 → 1,117, up 467, with 2,006 comments — more than twice the next largest thread on the site. Yesterday's post had it as a fresh entry; today it's a referendum. Nothing else gained more than a hundred. Gemini Omni 1.2 Flash went 258 → 356, Deus Ex 284 → 368, Blender's UI benchmark 631 → 712, Britain's salary disclosure mandate 536 → 605. The rest of the table is the ordinary decay of a front page: thirty-one stories adding one to ten points, three that added nothing at all, and sshole sitting on top at 2,950 with 53 points of upward drift and 741 comments.

Three stories fell out of the ranked window entirely while staying above 200 — HackerBooks, Qwen 3.8 27B and the back-up-the-websites piece aren't in this scan, so their current scores aren't reported here rather than being estimated.

## Throughline

**Acceleration is measurable in the places that have objectives, and the argument about it is happening in the places that don't.** The clearest pair of posts today are a METR-derived claim that Anthropic's capability progress has doubled in a year and a researcher's list of all the ways a model's judgment is bad at research. They contradict each other until you notice that one is measuring hill-climbing against a fixed metric and the other is describing literature review, experimental design and taste. Both are correct. The uncomfortable implication is for the labs: if AI R&D acceleration comes from the measurable envelope, then the returns to it shrink as the easy objectives get solved, which is precisely the argument Langford makes on his way out of Microsoft Research — that scaling is chosen because its returns are predictable, and research is dropped because its returns aren't.

**The data collection nobody documented is the data collection nobody argues about.** A pair of daemons have been building a queryable graph of your family, colleagues and movements on every Mac since 2022, survive having Siri turned off, and are documented in a four-line man page. Nobody voted for it, there's no consent screen worth the name, and the defence — it's on-device — is true and beside the point when the same graph quietly merges your work laptop into your personal identity. The same week, the front page argued about whether Claude Code should put your email address in a `User-Agent` header. That one got a public issue and a fix promised within days. The structural one has been running for four years.

**Compatibility is a promise, and the promises are getting renegotiated underneath us.** Ubuntu swapped the most privileged binary on the system for a Rust rewrite and quietly changed what argument wildcards mean; a terminal emulator extracted into a C library made ABI stability its entire 1.0 feature list; GitHub rebuilt repository storage to keep one code path for a side project and a monorepo. Three different answers to the same question — how much do you owe the config, the binary and the pack that already exist? The sudo answer is "less than you thought, and the dangerous wildcard survived while the precise ones were banned." The libghostty answer is "everything, enforced in CI against golden manifests." Both are defensible. Only one of them tells you in advance.
