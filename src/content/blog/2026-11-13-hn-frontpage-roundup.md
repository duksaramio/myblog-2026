---
title: "Hacker News Front Page Roundup — November 13, 2026"
pubDate: 2026-11-13
description: "Seventy-one stories cleared 200 points and forty are new. Microsoft 365 spent a full day failing to recover, Nvidia's own engineers petitioned to bring back the CEO the board fired, Eli Lilly's CEO told Dario Amodei the map of biology is mostly blank, and the world did not end on the date a 1960 paper picked for it."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Seventy-one stories cleared the 200-point threshold across the top 200 ranked items and a 40-hour date sweep. Forty-two submissions are absent from the last five roundups; two of those are resubmissions of stories those posts already ran, which leaves forty new items — and, because the Microsoft outage arrived as three links and the Claude incident as two, rather fewer than forty distinct events. Forty repeats are in the table at the bottom, plus four more on the page that have no comparable prior figure.

The day has no single story, which is itself the story. Microsoft's mail and identity fabric failed for twenty-six hours and its own remediation failed halfway through; Anthropic's login broke while Microsoft's did. Nvidia's staff signed a petition to reinstate the CEO its board removed a day earlier, and Singapore published a statement accusing the United States of not helping its investigation into the woman at the centre of the case. Meanwhile Eli Lilly's chief executive answered the industry's most expensive promise with three sentences, and a 1960 paper's chosen doomsday date quietly went past without incident.

## Microsoft 365 went down for a day and the status page kept talking — 1,145 points

**1,145 points** · 966 comments · [status.cloud.microsoft](https://status.cloud.microsoft/) · [HN discussion](https://news.ycombinator.com/item?id=50471731)

**452 points** · 299 comments · [twitter.com](https://twitter.com/MSFT365Status/status/2121079061774491735) · [HN discussion](https://news.ycombinator.com/item?id=50478609)

**281 points** · 176 comments · [cnn.com](https://www.cnn.com/2026/11/12/business/live-news/microsoft-global-outage-intl-hnk) · [HN discussion](https://news.ycombinator.com/item?id=50479098)


Exchange Online stopped delivering mail at about noon ET on Thursday. Twenty-six hours later Microsoft was telling customers that service was "approaching normal levels" and that the underlying cause had been addressed. In between: Outlook, Teams, the admin center, and — because everything authenticates through the same identity plumbing — a long tail of banks, courts, railways, hospitals, government departments and AI companies.

The company's own timeline is the least flattering part. Early on Friday it posted that changes applied "to improve serviceability" had been monitored and "confirmed they're not taking as expected," and that it was "identifying alternate workstreams that can be applied to increase capacity in the face of sustained traffic management imbalances." That is a paragraph written by six people and approved by four more. Translated: the fix did not fix it, the load balancer is still not balancing, and they are now trying things. A commenter reproduced the RSS feed of the status page through the outage because the page itself was unreliable, which is roughly where we are as an industry.

"Traffic management imbalances" is worth sitting with. Microsoft says the cause was technical and not a cyberattack, and offers no mechanism. But the failure mode — a global identity and mail fabric entering a state where it cannot route around its own hot spots, twice, with a failed remediation in between — is what happens when a system's control plane is a single region-shaped assumption. The economic estimate floating around, roughly $7 billion in lost productivity, comes from a think tank doing arithmetic on salaries and is worth about as much as any such figure, which is to say it establishes the order of magnitude and nothing else.

The threads are full of the usual: an Indian bank branch with no email, UK civil servants with "no plan B," someone locked out of a telehealth appointment by email 2FA. The most useful observation is also the most boring one. Everyone affected had chosen a provider precisely because it was the safe, boring, enterprise-grade option, and the redundancy they paid for was redundancy inside one company's account boundary.

## Claude's auth broke while Microsoft's auth was broken, which is probably not a coincidence — 473 points

**473 points** · 376 comments · [status.claude.com](https://status.claude.com/incidents/nn11wk485zfn) · [HN discussion](https://news.ycombinator.com/item?id=50481187)

**192 points** · 165 comments · [status.claude.com](https://status.claude.com/history) · [HN discussion](https://news.ycombinator.com/item?id=50481220)


Claude.ai, Claude Code, the console and Claude Cowork all started throwing authentication errors at 09:58 UTC on Friday; a fix went in at 11:05 and the incident closed at 11:58. Two hours, top-ten on the front page, because a two-hour auth outage for an agentic coding tool now costs more than a two-hour mail outage did in 2019.

Anthropic's status page says "an issue with users authenticating to Claude.ai and Claude Code" and nothing else, which is either candour about how little they know or a decision not to say the word "Entra." Commenters made the connection immediately: Claude's enterprise sign-in runs through Microsoft's identity provider, and Microsoft's identity provider spent the day failing to route traffic. Nobody has demonstrated the link, and the fact that a status page incident gets 473 points on the strength of a suspected dependency is itself the story.

Two comments aged well. One: "Depending on what your job is, this is either the adult equivalent of a snow day or some of the greatest stress in a long time." The other: these outages get *less* alarming as they get bigger, because when everyone is affected nobody expects an explanation. That is a bad equilibrium to be in for infrastructure that a meaningful fraction of the software industry now bills hours against.

## Nvidia's engineers want him back; Singapore says Washington didn't help — 777 points

**777 points** · 636 comments · [wired.com](https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/) · [HN discussion](https://news.ycombinator.com/item?id=50477231)

**443 points** · 473 comments · [reuters.com](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) · [HN discussion](https://news.ycombinator.com/item?id=50473190)

**182 points** · 61 comments · [nytimes.com](https://www.nytimes.com/2026/11/12/business/nvidia-megaspeed-alice-huang.html) · [HN discussion](https://news.ycombinator.com/item?id=50471621)


An internal suggestion-box post at Nvidia, submitted before the resignation and now carrying more than 1,600 comments, has turned into a petition. "If you believe in the mission, bring back THE boss," wrote one commenter. "We are all humans and can make mistakes. Jensen did so many good things and he needs a second chance," wrote another. One employee sent a company-wide email demanding transparency about the exit.

The staff sentiment is real and the argument is weak, which several commenters pointed out without much sympathy: one affair is a mistake, three and counting — one of them with a woman US intelligence reportedly assessed as a Chinese asset, one with a direct report, one more reported by Reuters on Thursday — is a pattern. The board is made up largely of early investors and Huang's longtime confidants; it did not do this lightly, and it did it in a morning.

The follow-up reporting is where the actual story is. Singapore's government said on Thursday that it had held Alice Huang's passport from June 2025 to February over "potential false declarations" about Megaspeed, released her with a stern warning and barred her from re-entering — and that it had asked the US for help getting Supermicro to cooperate, twice, and got "limited information or assistance." Supermicro denies Megaspeed was ever a customer. The company reported to have grown its assets ninety-fold in two years while becoming an Nvidia Cloud Partner four days after being sold is now the subject of a police investigation that the US is, on Singapore's account, not assisting.

So the export-control question that has been the subtext of the whole week is out in the open, and it is not about anyone's marriage. A reporter asked the obvious question in the thread: does a founder-CEO of a company this size have a non-compete, or can he simply start again next door? No answer yet. The trillion dollars of market value that left is the price of the key-person risk nobody had written down.

## Rust 1.100 finally stabilises the never type — 866 points

**866 points** · 312 comments · [blog.rust-lang.org](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) · [HN discussion](https://news.ycombinator.com/item?id=50472038)


Ten years and five failed stabilisation attempts, then: `!` is stable and nameable anywhere, `Infallible` becomes an alias for it, and the never-to-any coercion now does what people have been writing workarounds for since 2016. The blog post leads with it because the team knows it is the headline.

The rest of the release is unusually heavy for a version where the number is just a round decimal. Custom allocators landed. `DropGuard` landed. Cargo now reports unused dependencies, supports a minimum publish age (a dependency cooldown, so a compromised fresh release can't be pulled in the same hour it is published), reduces cache collisions, and `cargo install` uses the lockfile in the .crate tarball by default. Commenters added the APIs the post did not mention: `bool::toggle()`, `Box::map()`, `str::trim_prefix()` and `Path::trim_prefix()`.

The most useful comment is the least visible one: for a systems programmer the memory-safety problem they actually fight is not use-after-free but memory starvation, and having standard containers abort on allocation failure was always a strange default. Custom allocators are the fix. Meanwhile the complaints are the permanent ones — the compiler is slow, the incremental temp files grow to tens of gigabytes, and `cargo clean` is a daily ritual. Both things are true, which is why the release is impressive and the toolchain is still annoying.

## A $300 embroidery machine needed a subscription, so he wrote the software — 713 points

**713 points** · 235 comments · [github.com](https://github.com/simpsoka/zigzag) · [HN discussion](https://news.ycombinator.com/item?id=50470488)


ZigZag is an open-source embroidery editor: Rust engine, visual stitch editing, SVG in, PES/DST/EXP/JEF/VP3 out, Bluetooth to a Brother Skitch PP1, and an MCP server so an agent can drive it. Signed and notarised for Apple Silicon, a zip for Windows, no toolchain required. Six commits.

The reason it exists is the reason the thread is 235 comments deep: embroidery software is a hostage market. The machines are cheap and good, the software is decades old, expensive, and increasingly metered. A commenter who wrote his own tool for his wife's machine put it plainly — embroiderists have been held hostage by Big Embroidery for years. Another notes that a fully functional Brother PE-150 sells for $100 on eBay and gets scrapped because the proprietary cartridge data is unobtainable. The interesting part is not that one person solved his own itch. It is that a hobbyist with an agent can now produce a signed, cross-platform, agent-addressable replacement for what used to be a $1,000 licence, and that the free alternative that already existed — InkStitch, the Inkscape plugin — was never discoverable enough to stop the complaining.

Be clear about what this is and is not. Six commits, one platform pair, no test suite worth the name, and an MCP surface that hands stitch generation to a language model is a genuinely bad idea for the fabric and a genuinely good idea for the hobby. But "the vendor bricked my device's usefulness so I rebuilt the toolchain in a weekend" is now a reproducible genre, and the vendors have not adjusted their pricing to the new reproduction cost.

## LibreOffice's social team won the outage — 695 points

**695 points** · 222 comments · [twitter.com](https://twitter.com/LibreOffice/status/2121205272479998268) · [HN discussion](https://news.ycombinator.com/item?id=50486482)


LibreOffice's account posted "LibreOffice actually works 365 days a year. Just saying." — 1 million views, and 695 points on Hacker News, which is a remarkable ratio of engagement to information. It is a cheap shot and it landed because it is true.

The thread's better half is the bug archaeology. OpenOffice famously would not print on Tuesdays, because it wrote the day-of-week string into a PostScript `%%CreationDate` comment and the printer choked on it, which is the sort of defect that only exists in software written before anyone had a test harness. That story is 17 years old and still the best argument for the offline copy of an office suite sitting on your machine.

And then the honest counterarguments, which are also correct: if LibreOffice were good enough it would be more popular, startup on Windows still takes four or five seconds for reasons nobody has fixed, and the offline Microsoft Office 2024 — updated this week — is fine and always has been. The joke is not that LibreOffice is better. It is that the value proposition of the thing Microsoft spent Thursday failing to deliver is a locally installed application that nobody can turn off.

## Reverse-engineering a Coway purifier, and the CA certificate served over HTTP — 604 points

**604 points** · 171 comments · [scottjg.com](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) · [HN discussion](https://news.ycombinator.com/item?id=50474959)


A good teardown of a bad product decision. The Coway Airmega IconS is a box fan with a HEPA filter, a Wi-Fi radio and an app that asks you to change your password nearly every launch. The official Home Assistant integration works by pretending to be the phone app and proxying commands through Coway's cloud, which means every "turn the fan up" is a round trip through a server that has no reason to exist.

The post walks the firmware: extracting the app's traffic, finding the local endpoints, and cutting the cloud out. Commenters grabbed one line out of it above all others — the purifier fetches its root CA certificate over plain HTTP, so it was always man-in-the-middlable. That is the tell for this whole product category: TLS in the app, no trust anchor on the device, and a cloud round trip standing in for a two-byte command.

The thread is now a support group. Someone liberated Haier AC units by soldering to the ESP32 inside the unused Wi-Fi module and flashing ESPHome; someone else built a CO2-driven fan with a Shelly plug, a Broadlink bridge and Home Assistant; someone recommends a Corsi-Rosenthal box of box fan plus four MERV-13 filters, which moves more air for less money than any of it. The consistent finding across all of them is that the hardware was always capable and the cloud was never load-bearing. It existed to make the app a product.

## Gemini's new Orchestrator hands the model choice to the model — 491 points

**491 points** · 160 comments · [antigravity.google](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) · [HN discussion](https://news.ycombinator.com/item?id=50472260)


Google's Antigravity harness now has a model option called Orchestrator, which is not a model. It is a policy: Gemini 4 Carbon starts in a read-only phase to explore dependencies and write a plan with explicit re-planning triggers, Gemini 4 Hydrogen takes over to write edits and run tests, and when Hydrogen hits friction it hands back to Carbon to repair the plan. The pitch is that static routers — the ones that guess task difficulty from the first prompt and pin the whole task to one model — break down as agents get longer, because different stages need different models and the stages are discovered as you go.

The numbers offered are on Terminal-Bench 4.1: near-Carbon success rates, 24% less quota consumed, 19% faster. All vendor benchmarks, all plausible, none reproducible from outside. A commenter's independent data point is more interesting than the marketing: Hydrogen scored 100% on a public data-analytics exam, the fourth model to do so, at about a third of the cost of the two frontier models that also passed.

The real shift is not the benchmark. It is that the model picker in a coding harness is now a scheduling policy with a budget, and Google is asking users to delegate that decision to a second model. A commenter running subagent fleets says the opposite of what Google is selling: he assigns models to subagents deliberately because models are "optimistic about their capabilities," and he does not want to give that authority away. Both positions are defensible, and only one of them is measurable by the person paying the bill.

## Running a 16-billion-parameter model on 1GB of usable RAM — 463 points

**463 points** · 177 comments · [github.com](https://github.com/hyperionaidev/smolmaxxing/) · [HN discussion](https://news.ycombinator.com/item?id=50468888)


smolmaxxing is a benchmark project with a strict rule: every number is measured on the device. A Xiaomi TV Box S (Amlogic S7D, four Cortex-A55, 1.9GB with about 1GB usable) runs Qwen3.5-2B at 7.7 tok/s day to day and a 16B Ling-mini-2.0 at 5.1 tok/s when pushed. A 2013 iPad Air (A7, 1GB, about 700MB usable, jailbroken) runs a 1-bit Bonsai-1.7B at 24–26 tok/s and the same 16B model at 2.6–4.5 tok/s. A OnePlus Nord CE 2 (Dimensity 900, 7.4GB with 3GB free) runs Qwen3.6-35B-A3B at 4.9–5.7 tok/s and a Qwen3-Next-80B-A3B at 2.6–3.1.

The mechanism is the only reason those numbers are not fiction: only part of each mixture-of-experts model is resident, the rest is streamed from flash as the router asks for it. Sparse activation makes the arithmetic possible; flash bandwidth makes it slow; custom kernels make it slow enough to be usable. The repo publishes the kernels, the patches and the modified weights.

Whether any of it is *useful* is the fair question two commenters asked, and the honest answer is that a 16B MoE running at 5 tok/s on a decade-old tablet is a stunt with a real payload — it establishes that the memory wall is a bandwidth-and-scheduling problem, not a capacity one. The funniest comment is also the most deflating: an inference engine is almost pure multiplication, and a current agent can one-shot the whole thing. The hard part left is sourcing the hardware and getting SSH access to it.

## Doomsday was scheduled for today — 398 points

**398 points** · 277 comments · [science.org](https://www.science.org/doi/10.1126/science.132.3436.1291) · [HN discussion](https://news.ycombinator.com/item?id=50482379)


In November 1960, Heinz von Foerster, Patricia Mora and Lawrence Amiot published a paper in Science with a title designed to be quoted: *Doomsday: Friday, 13 November, A.D. 2026 — At this date human population will approach infinity if it grows as it has grown in the last two millenia.* They fitted about 2,000 years of population estimates to a hyperbola and found a vertical asymptote. World population was roughly three billion at the time.

Today is Friday, 13 November 2026. Population is not infinite, the species is not squeezed to death, and the demographic anxiety of the decade runs in the exact opposite direction — falling fertility, ageing populations, countries paying people to have children. The paper's own framing, which nobody quotes, was not famine. Von Foerster's argument was that humanity would not starve — it would be squeezed: density, not calories, would be the binding constraint.

The comments are mostly about extrapolation, and the best of them points out that "approaches infinity" is nearly vacuous — every semi-monotonic series does, and you can never be a factor of a hundred wrong in a way the curve forbids. That is the correct critique and it applies to every forecast on this site, including the ones about data centres and superintelligence. A separate comment is the one worth keeping: this trending today tells you more about 2026 than it does about 1960.

## A new dwarf planet candidate, 46 AU out and photographed in 1937 — 386 points

**386 points** · 184 comments · [smithsonianmag.com](https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/) · [HN discussion](https://news.ycombinator.com/item?id=50472490)


Matthew Holman was sifting Vera Rubin Observatory data with Kevin Napier when an object in the 2,000-odd new detections looked big. He and Mario Jurić then found it in archival images going back a decade, and eventually in photographic plates from 1937 held at Harvard. "Every time you look at the predicted location, there it is."

The object is 2026 ED138: 46 AU from the Sun, a 281.1-year orbit, an orbital plane tilted about 25° from the planets — which points at Neptune as the thing that perturbed it. If it is massive enough it becomes the sixth dwarf planet, joining a list that has been stuck at five for a long time.

The caveat is the word "candidate," and the discoverers say it themselves: at this distance, brightness is a guess about size, and the field is full of people who found Mars and then found a rock. What is not in doubt is the pipeline. A survey telescope that produces 2,000 new outer-solar-system objects in one pass, cross-matched against a century of glass plates, is a different kind of astronomy from the one that found the first five.

## The weights know which GPU trained them — 352 points

**352 points** · 147 comments · [unemploymentlabs.com](https://unemploymentlabs.com/checkpoint-forensics) · [HN discussion](https://news.ycombinator.com/item?id=50474883)


Unemployment Labs published a forensic report claiming that DeepSeek, Moonshot, MiniMax and Ant Group have had access to export-controlled Blackwell silicon. The method is the interesting part: they recover traces of a model's initial parameter values from its released weights, then search for the hardware configuration and initialisation scheme that reproduces those traces. Six models released since April 2026 match Blackwell; earlier models from the same labs match Hopper, which is consistent with the H800s the labs disclosed. For DeepSeek-V4-Flash and Kimi K3 they reproduced the match on physical Blackwell chips.

The report is careful in exactly the places that matter and vague in exactly the places that would make it actionable. It says the fingerprint identifies how the weights were *created*, which supports but does not prove that Blackwell also did the *training*. It says the findings do not establish where the chips were, how access was obtained, or whether controls were violated. And it excludes AMD as an alternative for one model and calls it very unlikely for the other five, which is an argument from absence.

The thread's pushback splits three ways and all three are fair. Chinese labs may legally rent Nvidia capacity outside China, so "used Blackwell" and "violated controls" are not the same sentence. The author is a former OpenAI employee who argues for export controls, and no code was released with the report. And a technical objection: initialisation fingerprints may tell you about the initialiser, not the trainer. The strongest thing in the report is not its conclusion but its genre — model weights as chain-of-custody evidence is a new kind of export enforcement, and it arrived in the same week the company that makes the chips lost its chief executive.

## IceWM is 29 years old and still the right answer for a remote desktop — 350 points

**350 points** · 202 comments · [ice-wm.org](https://ice-wm.org/) · [HN discussion](https://news.ycombinator.com/item?id=50478515)


Marko Maček's window manager, first released in 1997, still ships (4.1.0, August 2026), still builds with `./configure && make`, still has a taskbar with a pager, still has 450+ themes and three dozen translations, and still weighs nothing. There is no compositor, no portal daemon, no D-Bus session manager, and no 2GB of RAM spent on drawing a menu.

This should not be on the front page and it is, because the comments are full of people using it *today*: headless remote desktops over RustDesk, old laptops given to kids, a tiling-WM refugee who tried MangoWM and went back to something that floats, Wine and Reaper and Thunar on a machine that does not need to be new. The recurring complaint is aesthetic — nested dropdown menus, no padding, box shadows from 2003 — and the recurring answer is that the alternative is a stack of fifteen services to draw a window.

The half-serious read is that this is the same story as the Microsoft outage and the Coway purifier. Software that does one job with no dependencies keeps working; software that depends on eleven services keeps being interesting.

## Edge0 ships a 145B model that runs on a laptop, with a 29GB asterisk — 333 points

**333 points** · 101 comments · [edge0.ai](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer) · [HN discussion](https://news.ycombinator.com/item?id=50475713)


Edge0 open-sourced a 145B and a 120B model plus the inference framework, and claims a 145B model running on a MacBook Pro at 29GB peak memory, 1,100+ tokens/s prefill and more than 80 tokens/s decode, with coding and reasoning results "competitive with specific frontier cloud models." The architectural trick, per the release, is aggressive weight sharing: groups of 64 experts share two large matrices, and each expert keeps a small delta.

Two problems. "29GB peak" is not a normal laptop — it is a 36GB or 48GB machine, which is a developer's machine, not a personal one, and a commenter asked the obvious question about what "normal people" actually own (16GB, no unified memory, integrated graphics). And the shipped format is NVFP4, which means Blackwell-class Nvidia hardware, plus an inference engine that nobody else has implemented yet and no GGUF files. For a release whose pitch is "on your own computer," the hardware list is short and specific.

The thread's suspicion is that this is a quantised, rebranded relative of an existing frontier Flash-class model, dressed in new weights and a new name. That may be unfair and it may be exactly right; the release does not say, and the benchmarks compare against unnamed "frontier cloud models." The thing that is definitely true is that the memory wall moved: an MoE with 145B parameters that needs 29GB resident is a real engineering result, and it is 29GB because most of the parameters are asleep.

## AI has broken the cost asymmetry that made reading a signal — 289 points

**289 points** · 177 comments · [theatlantic.com](https://www.theatlantic.com/books/2026/11/ai-literary-scams-amazon/689391/) · [HN discussion](https://news.ycombinator.com/item?id=50481870)


Rachel Kadish's Atlantic piece is nominally about fake books on Amazon: AI-generated titles attached to real authors' bylines, echoing their own work closely enough to surface under their names. The Authors Guild's Mary Rasenberger says Amazon spends real effort on it but "it's always a game of catch-up"; Amazon allows an individual account to upload up to six books a week, which is one a day, which no human author has ever done.

The best paragraph is not about the scams. It is the observation that the deeper break is in the economics of attention: however long a piece of writing takes you to read, it almost certainly took the author longer to write, and that asymmetry was the entire basis on which a reader could treat prose as evidence that someone thought it was worth their time. Language models destroy the asymmetry without needing to be good. A machine can produce text faster than any human can consume it, so the mere existence of a well-formed paragraph stops being evidence of anything.

The thread adds the incentive analysis the article underplays: Amazon takes a cut of every sale, so its anti-fraud effort is a cost centre competing against revenue, which is why the enforcement is always retrospective. One commenter proposes a title fix — "AI is forcing a reconfiguration of how trust between writers and readers is established" — and is right that it is a better description, if a worse headline. The uncomfortable part is that the fix is not detection. It is a return to signed, costly, in-person channels: small presses, known editors, bookshops, people you have met.

## Apple's Foundation Models framework is now the neutral router — 262 points

**262 points** · 35 comments · [developer.apple.com](https://developer.apple.com/foundation-models-framework/) · [HN discussion](https://news.ycombinator.com/item?id=50474361)


Apple's Swift API for LLMs now covers more than Apple's own model: guided generation, tool calling, image understanding with Vision's OCR and barcode readers wired in, dynamic profiles, and — new — server models like Claude and Gemini through the same interface, via providers shipping Swift packages that conform to a Language Model protocol. On-device inference is free and offline; Private Cloud Compute is free to developers in the Small Business Program under two million first-time downloads.

The timing is the argument. Apple spent Thursday watching two clouds fall over and then shipped a framework whose pitch is "your app's intelligence is a local API call, and if you need a bigger model, it is also a local API call with a different provider behind it." Whether or not that was deliberate, the abstraction is right: the app should not know or care whose weights answered.

The comments are more practical than strategic, which is a good sign for adoption. Someone is running Apple's on-device model in a terminal for command correction on an M1 with 8GB. Someone points at `apple/coreai-models`, where a lot of open-weight models are being converted to run natively in Swift. Someone notes Anthropic has supported App Attest for months. The one thing missing is a reason to write against this instead of a plain HTTP client — and "the SDK is already on the device and the user's data does not leave it" is a decent one.

## Eli Lilly's CEO says the map of biology is still mostly blank — 258 points

**258 points** · 353 comments · [garymarcus.substack.com](https://garymarcus.substack.com/p/breaking-eli-lilly-ceo-becomes-latest) · [HN discussion](https://news.ycombinator.com/item?id=50483480)


Dario Amodei, launching an IPO, said on camera that cancer, Alzheimer's, heart disease and mental illness will be "relics of the past" in less than a decade. Dave Ricks, chairman and CEO of Eli Lilly, responded: "I think that would be amazing and I think it's not likely. The map of biology is still largely a blank page and randomized human proof is the long pole in the tent. I am excited about the use of AI in our sector but progress will likely be steady and incremental."

That is the whole rebuttal in three sentences, from the person who actually funds the trials. The supporting numbers in the thread are worse for the pitch than any opinion: for the most recent twenty drugs approved, the mean time from first-in-human to FDA approval was 14 years, the median 10. A drug entering trials today reaches patients in the 2030s. You cannot compress that with better hypothesis generation, because the constraint is not hypotheses — it is randomized human evidence, manufacturing and regulators, none of which scale with tokens. Eric Topol, who is reliably pro-AI, called the target unattainable while endorsing the technology.

The obvious comparison, made by roughly forty people including Gary Marcus, is Theranos: a charismatic founder, a demo, a promise about tests, and an investment round. The distinction that matters is that Theranos had a fraudulent device and Anthropic has a real one; the claims are the problem, not the product. A commenter who has taken two companies public puts it in the register that matters for anyone holding the prospectus: these are insane things to say in an IPO pitch.

## Brave will sell you a search for half a cent, no account required — 254 points

**254 points** · 142 comments · [brave.com](https://brave.com/blog/search-api-agentic-payments/) · [HN discussion](https://news.ycombinator.com/item?id=50477649)


Brave's Search API now accepts x402 — the resurrected HTTP 402 payment code — for agent traffic. A request without payment gets a 402 with a price and payment details; the agent signs a USDC transfer on Base, retries with the proof attached, and gets results plus a receipt. No API key, no plan, no account. Pricing is $0.005 per request for LLM Context and for web, news, image, video and local search. Brave runs its own facilitator and is covering Base gas for now. The suggested client is Stripe's Purl CLI wallet.

The concept is sound and the demand is unproven. The most useful comment in the thread is from someone who implemented x402 across a heavily crawled site and has not seen a single transaction go through, and who notes that the x402 subreddit is full of the same report — the only money moving is people testing whether the rail works. The second most useful: at half a cent a query, a chat session that runs thirty searches costs fifteen cents, and that is before anyone decides the search was worth running.

Both of those are fixable, and neither is fixed. The genuinely interesting consequence is one nobody is pricing: if search starts charging per query, the ad-supported model that made the web free gets replaced by a metered one, and the entities that can afford to crawl become the entities with wallets rather than the entities with crawlers. Whether that is more pro-consumer than tracking depends entirely on who ends up holding the wallet.

## Jane Street is going to interview you on taste now — 249 points

**249 points** · 225 comments · [blog.janestreet.com](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) · [HN discussion](https://news.ycombinator.com/item?id=50467297)


The trading firm is trialling new onsite rounds for campus candidates: less code, more software design, and — explicitly — using LLMs to produce code while the candidate is evaluated on whether the result is correct, well-structured and aimed at the right problem. Most rounds stay traditional and unassisted. The post is deliberately vague about formats because the formats are still moving.

The rationale is the honest one. Code generation is now the cheapest part of the job; taste about what to build, choosing abstractions that last, and verifying that what got built actually works are the expensive parts, and the old interview measured the cheap part. Jane Street is also one of the few firms that can afford to run an unvalidated interview loop and hire nobody for a year while it calibrates.

The comments contain the two criticisms this deserves. One: almost no company publishing its interview philosophy can show evidence that its questions predict performance, and they are all guessing. Two: the actual signal people want — can you turn a vague business requirement into a plan — is not improved by harder LeetCode, and a round where you supervise an LLM at least gets closer to the real job. There is also a running joke that Jane Street has been on the front page three days running, which is either hiring season or a content strategy.

## AMD inverted its own core hierarchy for Zen 6 — 239 points

**239 points** · 8 comments · [chipsandcheese.com](https://chipsandcheese.com/p/talking-zen-6-with-mike-clark-at) · [HN discussion](https://news.ycombinator.com/item?id=50467460)


The interesting detail from Chips and Cheese's interview with AMD's Mike Clark is structural: in Zen 6 the dense Zen 6c core is now the higher-IPC part, with a full 4MB of L3 per core, while the classic core is the high-frequency one. The two designs have effectively swapped roles, and AMD says it tried to leave no software-visible gap so the same optimisations apply to both.

That is not how the c/classic split has been sold for two generations — the compact core was the density play, the big core was the performance play. Making the dense core the IPC leader means the difference is now clock versus cache and area, which is a much more interesting trade to tune for and a much harder one for software to detect.

The most honest comment on the story is that this would be a bigger deal in any other year. A CPU core architecture inversion at AMD is a genuinely significant piece of engineering, and it is sitting at 239 points under a cloud outage, a CEO resignation and two model launches.

## Claude read Gödel's shorthand, which is not the same as proving his theorems — 238 points

**238 points** · 60 comments · [theguardian.com](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) · [HN discussion](https://news.ycombinator.com/item?id=50486748)


Jan von Plato has led a project at Helsinki since 2017 to read 16 notebooks Gödel wrote in the early 1940s: 1,009 pages of dense mathematics and logic in Gabelsberger shorthand, obsolete even when Gödel used it. The team's rate was about a page a week. In September von Plato gave the material to Claude; within a couple of days he had a digest of the whole corpus, and the digest claims hundreds of theorems nobody knew about, dozens of anticipations of results that were not rediscovered until the 1970s and 80s, and 14 themes in logic that were never pursued. "I was flabbergasted," he said.

Take the claim seriously and then take the caveat seriously. A model that can read a dead shorthand and produce a structured summary of a thousand pages is doing something that was impossible two years ago, and the person making the claim is the world's leading authority on the notebooks, not a vendor. But a digest is a hypothesis about the text, not a proof about the mathematics: every one of those hundreds of theorems still has to be checked by one of the handful of people alive who can read the source.

The best comment in the thread is the one that complicates the framing. Gödel was a notorious perfectionist who published only what he considered bulletproof, and he sat on results for decades — the Dialectica interpretation was published roughly twenty years after he first had the idea. So the notebooks are likely to contain a great deal of sharp, unfinished thinking rather than hundreds of theorems he believed. The headline says "proved theorems"; the honest version is "wrote down arguments that may contain hundreds of results, which we can now index for the first time."

## A 22-year-old Postgres primitive, and a headline that overstates it — 228 points

**228 points** · 40 comments · [mehmetince.net](https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-2026-6460/) · [HN discussion](https://news.ycombinator.com/item?id=50471761)


Mehmet Ince spent months exploiting memory-corruption bugs in Postgres extensions, got code execution through `pg_clickhouse`, and then asked a question about how Postgres understands its own data. The answer: put a value inside a composite type, change the type of one of its fields, read the value back. The type confusion that results has apparently been available for 22 years. CVE-2026-6460.

The write-up is good and the exploit is clever — a prepared statement against a table whose definition changes underneath it, where the plan is not invalidated the way it should be. He also credits an AI agent as his tutor through the Postgres internals, one question at a time, which is now the standard way a specialist acquires a second specialism.

The thread's objection is the right one and it is about the framing, not the finding: this requires an authenticated database session, so it is privilege escalation from a database account to the host, not an unauthenticated remote code execution. For a single-tenant Postgres that is a modest bug. For a managed multi-tenant service — which is the series title, "Systemic Risks in the Managed PostgreSQL Industry" — it is exactly the thing you do not want, because the database account is what the customer is given.

## Zig over C, argued from `errdefer` — 201 points

**201 points** · 178 comments · [mtsoukalos.eu](https://www.mtsoukalos.eu/2026/11/why-zig-over-c-for-systems-programming/) · [HN discussion](https://news.ycombinator.com/item?id=50483611)


Mihalis Tsoukalos, who previously wrote the same post about Rust, now writes the one about C — and is careful to say he loves C and is not claiming Zig replaces it. His case is narrow and specific: the C idiom for a function that acquires several resources and has to unwind on failure is a ladder of `goto` labels, where the cleanup lives far from the allocation and the label order must match the allocation order by hand. Zig's `errdefer` sits directly under the allocation it undoes and runs only on the error path.

That is a better argument than a safety argument, because it is not contestable on aesthetic grounds. The counterargument is that the whole post is one construct and a reader can implement the equivalent discipline in C with discipline and a linter. Which is true, and is also the strongest thing that can be said about most language migrations: they convert "be careful" into "be unable to not."

The detail worth keeping is that the code was compiled with Zig 0.17 and clang, and that Zig still talks to C libraries over the C ABI. The proposal on the table is not a rewrite. It is that new code stops being C while old code keeps working, which is the only version of this argument that has ever won.

## Fossil emissions fell and total emissions rose, in the same report — 183 points

**183 points** · 277 comments · [news.exeter.ac.uk](https://news.exeter.ac.uk/faculty-of-environment-science-and-economy/fossil-co2-emissions-decrease-in-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50437752)


The 2026 Global Carbon Budget projects fossil CO2 at 38.2 billion tonnes, down 0.4%, driven by solar and wind displacing generation and by the energy shock from the Iran conflict pushing oil down 1.9%. China is down 0.9%, the US 1.3%, the EU 1.5%, Japan 1%, the rest of the world 0.7%. India is up 4.4%. Two-thirds of the growth in global energy demand was met by solar, wind and EVs.

Then the number the press release cannot put in the title: land-use change emissions rise to 5.1 billion tonnes this year, mostly peat fires and forest degradation in Southeast Asia, so *total* CO2 goes from 42.8 to 43.3 billion tonnes. The remaining carbon budget for 1.5°C is 150 billion tonnes, which is under four years at the current rate. Fossil emissions fell and the atmosphere got worse.

The scientists say the quiet part in the quotes. Friedlingstein: a decline driven partly by geopolitical shocks is not a sustainable climate solution. Peters: one year is not a peak unless structural change drives it. The comment that lands hardest is that the accounting is the wrong graph — atmospheric concentration is monotonic, and the Iran blip is a blip inside it. A story about a 0.4% decline in one component, published on a day when the front page's other climate story is a hurricane of AI datacentre construction, is a good reminder that direction of travel and rate of travel are different questions.

## Relax runs Rust while it compiles it — 176 points

**176 points** · 102 comments · [makepad.github.io](https://makepad.github.io/relax/) · [HN discussion](https://news.ycombinator.com/item?id=50458849)


Makepad's Relax is a live compiler and JIT runtime for Rust: no rustc, no LLVM, no linker in the loop. It compiles each function the first time it is called, reoptimises the hot ones while the program runs, and patches edits into the running process so state survives. A large 3D game's first frame goes from about three minutes with `cargo build` to 11 seconds from a clean checkout on an M4; a small app from 3.7 seconds to 0.41. Save a file and 92 tests re-run in 2.2 seconds.

The costs are stated on the page rather than discovered by users, which is rare: optimised code runs 1.12× slower on x86-64 and 1.24× on arm64 against `--release`, JIT code is append-only so memory grows, and the compiler is 438,000 lines with zero crates.io dependencies. It is labelled experimental and says to use `cargo build --release` for anything you ship.

The first comment from a user is a reality check that the page cannot provide: most of his projects failed to run, one miscompiled and failed a test, and the one that worked took 14 seconds to start a web server against a 2.3-second incremental build. That is what an experimental compiler looks like in week one. The more interesting fact is that three iteration-focused Rust compilers appeared within a month, which says the 30-second edit-compile-run loop is the most hated thing in the ecosystem right now.

## An 81-year-old science fiction writer won the Booker — 169 points

**169 points** · 123 comments · [theguardian.com](https://www.theguardian.com/books/2026/nov/09/m-john-harrison-the-end-of-everything-wins-2026-booker-prize) · [HN discussion](https://news.ycombinator.com/item?id=50437242)


M John Harrison won the Booker Prize for *The End of Everything*, a post-apocalyptic novel set on a near-future Kent coast. He is 81, the oldest winner in the award's history, ahead of Atwood at 79 in 2019, and the £50,000 cheque arrived after six decades of publishing. Gaby Wood of the Booker Prize Foundation called it "a historic win, for a writer whose decades of work are lightly worn on every page," and noted — accurately — that while previous winners had dabbled in science fiction, Harrison is "the first Booker winner to have emerged from the bona fide SF world."

That distinction is the interesting one and it is also a little silly. The Booker has been giving prizes to speculative fiction for years; what changed is that the label was allowed to appear in the coverage without an apology attached. Harrison spent his career in the part of the field that never got reviewed by the literary pages — the Viriconium books, the Kefahuchi Tract trilogy — and then wrote a quiet late novel that the prize could not ignore.

There is no argument in the thread and that is the point. It is the only story on the page today that is unambiguously good news about craft, sitting between a company losing a trillion dollars and two clouds failing.

## Also new, below the sections

- **[The Utah Teapot](https://graphics.cs.utah.edu/teapot/)** ([195 points](https://news.ycombinator.com/item?id=50457618), 46 comments) — The Utah Teapot page now lets you regenerate every historical version of the model, from Martin Newell's 1975 original through Blinn, Crow, Driskill, Fish and Cem Yuksel's 2026 rebuild — with the Bézier patch settings exposed. SIGGRAPH 2026 is the 50th anniversary.
- **[AI is turning Apple's app review process into a nightmare for synth developers](https://synthanatomy.com/2026/11/ai-is-turning-apples-app-review-process-into-a-nightmare-for-developers.html)** ([194 points](https://news.ycombinator.com/item?id=50474311), 231 comments) — Apple's app review queue is buckling under AI-generated submissions. An estimated 10–20 new iOS music apps a day, review times stretching, and the AUv3 plugin developers who depend on App Store distribution taking the hit.
- **[Making a €40 USB-C hub work as a Nintendo Switch 2 dock](http://blog.nozomi.space/posts/sw2_dock/)** ([169 points](https://news.ycombinator.com/item?id=50431971), 64 comments) — A €40 Cable Matters USB-C hub made to act as a Nintendo Switch 2 dock by sniffing the USB-PD vendor-defined handshake, then fixing washed-out HDR by patching the RTD2142 firmware. Code is public.
- **[The Apple Support Community will permanently close on November 20, 2026](https://discussions.apple.com/welcome)** ([166 points](https://news.ycombinator.com/item?id=50449440), 237 comments) — Apple's Support Community goes read-only today and closes permanently on 20 November, with traffic redirected to Apple's own support pages. A second submission of yesterday's story, from Apple rather than The Verge.
- **[U.S. October PPI Rises 6.5% YoY, Highest in Nearly Four Years](https://news.ycombinator.com/item?id=50484421)** ([160 points](https://news.ycombinator.com/item?id=50484421), 191 comments) — US producer prices rose 6.5% year over year in October, the highest since November 2022, with PPI up 0.3% month over month and September revised from 1.3% to 1.4%.
- **[It Takes 16 Clicks for a Student to Open a PowerPoint on an iPad](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/)** ([156 points](https://news.ycombinator.com/item?id=50487522), 73 comments) — A teacher counts the clicks required to open a PowerPoint on a school iPad: sixteen. The thread is a catalogue of the same problem in every managed device fleet.
- **[Brazil's Caixa insurer breach exposes names and tax IDs of all 7.6M customers](https://filemanager-cdn.mziq.com/published/3972906b-e50b-4f74-ab74-4d0d32125d11/9567a559-d20a-486e-a7ae-5c6bbc030c5e)** ([156 points](https://news.ycombinator.com/item?id=50485295), 65 comments) — Caixa Seguradora's breach exposes names, phone numbers and CPF tax IDs for all 7.6 million customers. Brazilian commenters are blunt: the CPF is semi-public already and has leaked repeatedly; the phone numbers are the new part.
- **[Hacking the Meta Ray-Ban smartglasses](https://p0pcycle.com/2026/11/06/hacking-the-meta-ray-ban-smartglasses/)** ([155 points](https://news.ycombinator.com/item?id=50406224), 57 comments) — A teardown of the Meta Ray-Ban smartglasses: what the firmware exposes, what the app talks to, and how much of the assistant can be intercepted locally.
- **[After 600 experiments, here's what I discovered about JEPA world models](https://haddyalchaer.com/jepa)** ([153 points](https://news.ycombinator.com/item?id=50487185), 30 comments) — Six hundred experiments on LeWM, LeCun's JEPA world model: swapping the learned predictor for the simulator's true physics barely moved Push-T performance, and one detail in the goal image mattered more than the architecture.
- **[Libreagi – Save OSS Models](https://libreagi.com/)** ([153 points](https://news.ycombinator.com/item?id=50467439), 31 comments) — LibreAGI is a private BitTorrent tracker for model weights, with credit that scales with scarcity and a signed public catalog of every hash so the swarm can be rebuilt if the site dies. Members only, IRC for questions.
- **[Show HN: Black Ops II statically recompiled to native ARM64 macOS](https://github.com/adrbn/bo2-mac)** ([150 points](https://news.ycombinator.com/item?id=50449891), 67 comments) — Call of Duty: Black Ops II statically recompiled from 32-bit x86 Windows to ARM64 macOS — Remill to LLVM IR, a hand-written Win32 runtime, Direct3D 11 on Metal. No Wine, no game files shipped; you build it from your own Steam copy.

Four stories on the page have been covered here before and cannot take a clean delta. *Why I wrote the BEAM book* was a section yesterday at 202 points and reads 210 now. Tom Moertel's old-timey game-programming hack, the isometric Valencia map and the Queens Public Library ransomware notice were each mentioned only in passing yesterday, without figures, so there is nothing honest to subtract from them — all three are still climbing and the library is still offline.

## Still on the page

| Story | Last | Nov 13 |
|---|---|---|
| [Jensen Huang resigns](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 2,323 (11-12) | 3,991 (+1,668) |
| [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,385 (11-11) | 1,422 (+37) |
| [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com) | 1,260 (11-11) | 1,274 (+14) |
| [Nvidia is preparing to oust Jensen Huang](https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad) | 1,210 (11-12) | 1,220 (+10) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 1,181 (11-11) | 1,194 (+13) |
| [My AI agents found an unmapped Maya site?](https://pietromiotti.com/latest/maya-site) | 1,025 (11-11) | 1,033 (+8) |
| [Anthropic IPO](https://ipo.anthropic.com/us/) | 721 (11-12) | 988 (+267) |
| [AWS emulator](https://github.com/aws/aws-emulator) | 959 (11-11) | 982 (+23) |
| [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) | 930 (11-11) | 935 (+5) |
| [USPS now offers official ZIP Code boundary polygons](https://postalpro.usps.com/zcb) | 732 (11-11) | 732 (0) |
| [Amazon saves millions by replacing Sonnet 4.6 with Strands Decider](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 725 (11-11) | 727 (+2) |
| [Socratic Tutor](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) | 615 (11-12) | 694 (+79) |
| [United Airlines bans AI agents from booking flights on behalf of travelers](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/) | 656 (11-12) | 677 (+21) |
| [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 674 (11-11) | 677 (+3) |
| [A false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 567 (11-11) | 583 (+16) |
| [93% of paint splatters are valid Perl programs (2019)](https://www.mcmillen.dev/sigbovik/) | 558 (11-12) | 581 (+23) |
| [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) | 551 (11-12) | 565 (+14) |
| [Apple has new Mac app coming to make running local AI models easy](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 550 (11-11) | 563 (+13) |
| [Scion is back and is going to sell a kei truck in America](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 559 (11-11) | 561 (+2) |
| [Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 345 (11-12) | 555 (+210) |
| [Tracking Anthropic-discovered vulnerabilities](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) | 457 (11-11) | 459 (+2) |
| [Hyper-realistic sand with WebGL2](https://av.github.io/safe-sand/) | 430 (11-11) | 444 (+14) |
| [Protecting SSH Keys with macOS Secure Enclave](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/) | 396 (11-11) | 401 (+5) |
| ["Humble Bundle just killed most of their security through vibecoding"](https://forums.spacebattles.com/threads/humble-bundle-just-completely-killed-most-of-their-security-through-vibecoding.1346295/) | 349 (11-12) | 400 (+51) |
| [A live tree of systemd jobs on the boot console](https://codeberg.org/wvhulle/bootvine) | 326 (11-12) | 371 (+45) |
| [Critical RCE Vulnerability in Apache HTTP Server](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) | 347 (11-12) | 367 (+20) |
| [Writing correct software is hard and math alone won’t help us (2016)](https://pron.github.io/posts/correctness-and-complexity) | 323 (11-12) | 365 (+42) |
| [Using voltage glitching to unleash the A100 in my mining card](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/) | 335 (11-11) | 343 (+8) |
| [Lock Your GitHub Actions](https://hugovk.dev/blog/2026/lock-github-actions/) | 323 (11-12) | 333 (+10) |
| [Nintendo Takes Down Emulators and Firmware in Massive GitHub DMCA Sweep](https://www.ign.com/articles/nintendo-takes-down-switch-emulators-and-mod-chip-firmware-in-massive-github-dmca-sweep) | 201 (11-12) | 317 (+116) |
| [Abandoned Quake 4 expansion finished by modders and now playable](https://www.moddb.com/mods/openq4/downloads/openq4-0141-windows-x64) | 206 (11-12) | 305 (+99) |
| [Show HN: Yogurt – Free, private, open-source alternative to Granola](https://github.com/FrigadeHQ/yogurt) | 282 (11-12) | 296 (+14) |
| [Claude Whiteboards, Claude Sheets, and Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) | 289 (11-11) | 296 (+7) |
| [What constant surveillance is doing to children and parents](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 277 (11-11) | 279 (+2) |
| [AMD's Zen 6 Family: Feeding the Beast](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 271 (11-11) | 273 (+2) |
| [Show HN: I recreated Papers Please but you're deciding which YC startups to fund](https://termsheetplease.com/) | 236 (11-12) | 241 (+5) |
| [Faster Retrieval for Better, More Efficient RAG](https://machinelearning.apple.com/research/faster-retrieval) | 232 (11-12) | 237 (+5) |
| [Atuin Threads: All your agent sessions on every machine](https://blog.atuin.sh/threads-agent-sessions/) | 231 (11-12) | 235 (+4) |
| [We need more goat sacrifices](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) | 215 (11-12) | 221 (+6) |
| [The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough) | 213 (11-11) | 214 (+1) |


## Throughline

Three threads, and the first one is the one to keep.

**Two clouds fell over on the same day, and nobody could say why.** Microsoft's Exchange Online went down at noon Thursday and was still not right twenty-six hours later; its first remediation attempt was publicly abandoned; its explanation — "traffic management imbalances" — names a symptom, not a cause. Anthropic's authentication broke for two hours on Friday and gave a one-line incident report. Every affected organisation had paid for redundancy and received redundancy inside a single vendor's boundary. The same thread runs through the stories about things that still work: IceWM, twenty-nine years old, a single binary with no daemon; LibreOffice's one-line joke about working 365 days a year; a Coway air purifier whose fan can be turned with a two-byte command that is currently being routed through a server on the internet for no reason other than that the app needed to exist. Software with eleven dependencies is more interesting and less reliable than software with none, and the industry keeps rediscovering this the expensive way.

**Claims outran evidence all day, and the interesting part is who did the checking.** Amodei promised cures in a decade from an IPO roadshow; Eli Lilly's Dave Ricks answered that the map of biology is a blank page and randomised human proof is the long pole — the person paying for the trials, correcting the person raising the money. Edge0 shipped a 145B "laptop" model whose memory floor is a 36GB machine and whose format is one vendor's silicon. Unemployment Labs published forensics that show Chinese labs initialised weights on export-controlled GPUs and then said, precisely, that this does not establish where the chips were or whether anything illegal happened — the honesty is the notable part. And a 1,009-page shorthand notebook got a two-day AI digest claiming hundreds of new theorems, which is a hypothesis about the text rather than a proof about the mathematics, and will take the handful of people who can read Gabelsberger to settle.

**The Nvidia story stopped being about Nvidia.** The resignation was Thursday's news; Friday's is a staff petition, a Reuters report of a third relationship, and a Singaporean government statement saying it asked the US twice for help getting Supermicro to cooperate with its Megaspeed investigation and received "limited information or assistance." A company worth four trillion dollars lost its founder over an affair and is now the venue for a question about export enforcement that nobody in Washington wants to answer in public. The front page covered that, and a dwarf planet candidate photographed on glass plates in 1937, and the fiftieth anniversary of the Utah Teapot, and an 81-year-old science fiction writer winning the Booker. Two of those will matter in fifty years. Guess which.
