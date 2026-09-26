---
title: "Hacker News Front Page Roundup — September 19, 2026"
pubDate: 2026-09-19
description: "Thirty-three stories cleared 200 points. Google is now gatekeeping Android APIs and security patches from non-Pixel OEMs, a 27B model got compressed to 5.9GB, OpenAI shipped a legal index and published the number that matters, and the most-loved thing on the front page is a bird frame."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech", "security", "science"]
---

Thirty-three stories cleared 200 points today, which is a lot — and seven of them were already on the front page yesterday, meaning the top of HN has stopped turning over. The new material splits cleanly in two: a cluster of benchmark claims about small models, and a cluster of stories about who controls the pipes. The bird frame wins by 1,200 points. That's the real signal.

---

## Show HN: An e-ink frame that hears birds and draws them as 1800s illustrations
**2,345 points** · [GitHub](https://github.com/arnegiacomo/fugleramme)

A Raspberry Pi 5, a 13.3" Inky Impression e-ink panel, a mic, and an A4 frame. [BirdNET-Go](https://github.com/tphakala/birdnet-go) does the audio classification locally; the frame polls its API, matches each detected species to an illustration, packs them onto a textured paper page, and redraws only when the birds change. Larger birds go toward the center, sized by body mass. If nothing is singing, you get a bare perch. The live demo runs from the author's kitchen window in Bergen, Norway, and displays whatever birds are currently in his garden.

The art is the point and the author says so: over 800 cut-outs covering more than 400 species, every one taken from a real Scandinavian, British, or central European natural-history plate and hand-curated. "No art is AI-generated, though some has been retouched with AI." MIT for the code, CC-BY-SA for the illustrations.

The HN thread is mostly appreciation plus a cost complaint — around €500 for the full build, and commenters correctly point out that's the e-ink panel, not the compute. Someone notes you can get the same effect on a $120 Kobo. Which is the honest read: this is not a cheap project, it's a good one. And worth noticing what won the day by a landslide. Not a frontier model. A physical object on a windowsill that does one thing nobody asked for, using a classifier that's been around for years for the listening, and hand-cut public-domain art for the looking.

---

## AI-generated posters don't have to be horrible
**1,065 points** · [john.hartnup.uk](https://john.hartnup.uk/2026/06/07/ai-event-posters.html)

John Hartnup starts from the identikit village-fayre poster that's become a genre of its own. His diagnosis is precise: "The problem with these is not so much that they're bad. They're OK, I don't love them. The problem is that once you've seen that style 20 times it starts to irritate just from the sheer repetition."

Then he goes and tests it. He asks ChatGPT for a spring fayre poster with an explicit anti-default instruction — "clean, unfussy, bright layout with a bold striking spring-themed graphic. Avoid pastel/airbrush/oil style art or images of people." He gets the default craft-fayre template anyway. So he escalates: "Make another one using a completely different design aesthetic of your choice. Treat the current one as a 'what not to do'." That gets him Bauhaus/modernist, and it's immediately better. He then asks the model to *name* the style it used, so he can request it again by name, and spends the rest of the post iterating through named styles.

The mechanism he's identified is real: given an unconstrained creative request, a model lands near the median of its training distribution, which is exactly what everyone else's unconstrained request lands near. The fix is to push off the median, and the only way to push is to know what you're pushing toward.

That's the uncomfortable part. His method requires a vocabulary he already had — he knows "Bauhaus" is a word, and he knows it's the opposite of what he's looking at. Most people generating event posters do not, and "tell the model to give you a completely different aesthetic and then ask it what it called that" is a workaround for a missing skill, not a substitute for it. The post is genuinely useful engineering of a prompt. It's also a demonstration that taste remains the bottleneck, and that the specific taste required is the ability to *name* what you want.

---

## Android 17 is the first since 3.x to add new APIs without releasing to the AOSP
**1,056 points** · [grapheneos.social](https://grapheneos.social/@GrapheneOS/117282080803799576)

GrapheneOS, in a Mastodon thread, points out that Android 17 QPR1 is the first release since Honeycomb to add new app-developer APIs without a corresponding AOSP release. The new APIs are exclusive to the Pixel OS and unavailable to other OEMs. The thread is a running list of what that means in practice.

Non-Google OEMs and AOSP-based projects can ship yearly and QPR2 releases, and security backports exist — but you need security preview access to ship patches without months of delay, which GrapheneOS says it has had since before the Motorola partnership. They had ported their code to Android 17 QPR1 before its September 15 release and can't ship it. So they're backporting Pixel firmware, kernel drivers, userspace drivers, and HALs from QPR1 while they wait for QPR2 in December. Worse: the September 2026 Pixel Update Bulletin contains patches to standard Android platform components used by non-Pixel devices that did not appear in the September Android Security Bulletin or the preview patches. Other OEMs get those in December. GrapheneOS says they can ship them early by reverse-engineering the code.

The thread also flags a GPL problem — GrapheneOS requested CD1A.260905.001.A1 sources on September 1 and got access on the 18th, calling it one more failure to comply with a weeks-old request. And the summary line is worth quoting because it's the actual story: "Pixels are now significantly harder to support than many other devices. One of the only advantages of Pixels is now a disadvantage instead."

Two caveats. GrapheneOS now has a commercial relationship with Motorola, so they benefit from a story where Pixels get harder and other hardware gets easier — read their framing with that in mind. But the API diff link and the bulletin omission are checkable facts, not spin. And the structural point survives the caveat: a several-month exclusivity window on new features *and* on some security fixes, granted by the platform owner to the platform owner's own hardware, is a moat. "AOSP is open" gets thinner every time the reference implementation ships first and the source arrives late or not at all.

---

## I built non-autoregressive decision models with RL a year ago
**836 points** · [laya.convaiinnovations.com](https://laya.convaiinnovations.com/)

Nandakishor Mukkunnoth, founder of ConvAI Innovations, wrote a long post about being scooped by his own idea. He published a non-autoregressive decision model in March 2025 — PPO over sequence representations, outputting turn-by-turn conversion probabilities for sales conversations — followed by a second paper in September 2025 formalizing schema-based decisions guided by RL. Then in September 2026 TypeSafe AI, founded by a ChatGPT co-inventor, launched Jev: the same core concept, no technical papers, no open weights, no datasets, $0.042 per million input tokens, ~150ms responses. So he built Laya instead — bidirectional encoders, 32.8ms on a single GPU, 7.2ms per question batched, which he claims is 6–8x faster than Jev, with open weights.

The HN thread is uninterested in the priority claim and very interested in why nobody heard about him the first time. One commenter quotes his original Reddit post title — "Predicting sales conversion probability from conversations using pure Reinforcement Learning" — and asks whether anyone can parse it. Another observes that the title doesn't reflect the content, which uses RAG and an orchestrator, and that the project was rehashed into Laya after Jev launched. A third makes the argument that should end the thread: "It's also well established that an algorithm or architecture alone are not enough to produce a useful model. The same architecture can produce vastly different results depending on the training data, post-training, harness, etc."

All three are correct, and the second one is the damaging one. If the March 2025 work was the same idea, then what was missing wasn't the idea — it was everything that turns an idea into something anyone can use, starting with a name a stranger can repeat. "I did it first" is not a business, a moat, or a claim anyone can verify, especially when the numbers are self-reported on a company page. The commenter who says Jev is "exceptionally well branded" is not being cynical; branding is how a technical claim reaches the people who can test it. Being right in public and being ignored is a distribution failure, and distribution failures are not less fatal for being unfair.

---

## Hister: A private search engine for the pages you visit and the files you keep
**717 points** · [GitHub](https://github.com/asciimoo/hister)

From asciimoo, the author of Searx. Hister indexes the full text of pages you visit and files you keep, then lets you search them from a web UI on `127.0.0.1:4433`, a terminal UI, the command line, or an AI assistant over MCP. Browser extensions for Firefox and Chrome auto-index pages as you visit them; you can also import browser history and bookmarks, crawl sites, and index local directories. Query support includes field filters, phrases, wildcards, negation, aliases, and result priorities. Go 1.26, Homebrew/Docker/Nix installs, no telemetry, no cloud sync, multi-user support on a shared server. 5.2k stars.

Personal full-text search over your own corpus is one of the oldest ideas in computing, and it keeps failing for reasons that have nothing to do with the code — Spotlight, Google Desktop, Recoll. The reason this iteration might stick is MCP: the clients changed from "a UI you might open" to "an agent that searches on your behalf mid-task," and the second one actually creates demand. The reason it might not: no cloud sync means no sync, index maintenance is a permanent tax, and "locally on infrastructure you control" is one disk failure away from total loss.

Worth flagging the tension the README is honest about. Optional semantic search "sends document text to the embeddings endpoint you choose." So the privacy boundary is wherever you point that URL, and the default is that you don't have one. The non-negotiable part is done right — no telemetry, no mandatory cloud — but the feature most likely to be turned on is the one that opens the door, and that's a configuration decision most users will make once and forget.

---

## Claude Code now reads AGENTS.md if there is no Claude.md
**710 points** · [code.claude.com](https://code.claude.com/docs/en/changelog)

Shipped in 2.1.277 on September 18: "Added AGENTS.md support: in a project with no CLAUDE.md, Claude Code reads AGENTS.md instead." Changeable under "Project instructions" in `/config`. Not yet on Bedrock, Vertex or Foundry. The same release adds `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` for gateways whose only egress is a forward proxy, a static `headers:` map for gateway upstreams, a notification when a background task finishes while a panel like `/tasks` is open, and a fix for `claude -p` and Agent SDK sessions hanging after an internal error.

AGENTS.md is the cross-vendor convention — Codex, Cursor, Amp, and a pile of others read it. Anthropic held out with CLAUDE.md and has now adopted the standard *second-class*: CLAUDE.md wins when both exist. That's a one-way door. A repo with both files can drift silently, and the file Claude Code obeys is the one fewer tools understand. Tool-neutral project instructions were the one place a multi-agent repo could stay honest, and this narrows it.

Also in 2.1.278, one day later: auto mode for Claude API and Enterprise users, and on Bedrock, Vertex, Foundry and gateways, now defaults to the server-side classifier, "which does not charge for classifier overhead," with `CLAUDE_CODE_AUTO_MODE_SERVER=0` to opt out and a warning on billed fallback. Read the second clause as carefully as the first. "We don't charge you for our classifier" is true until the fallback path runs, and the fallback is the path you don't control.

---

## Fujitsu launches made-in-Japan next-generation CPU FUJITSU-MONAKA
**629 points** · [global.fujitsu](https://global.fujitsu/en-global/pr/news/2026/09/14-02)

144 Armv9 cores, with compute on a 2nm process and cache and I/O on 5nm, in a 3D-stacked package. Up to 3.8GHz, memory up to 8,800MT/s, SVE2 vector processing plus dedicated matrix instructions for AI inference, Arm CCA confidential computing, PCIe Gen6, twelve RDIMMs per socket. Air-cooled rack servers run the 144 cores at 2.1GHz; liquid-cooled at 2.9GHz. Standalone CPU sales go global in November 2026, with 1U and 2U servers first in Japan and Europe and broader shipments from April 2027. The pitch is "sovereign AI infrastructure," developed under a NEDO Green Innovation Fund subsidy, with the server line explicitly aimed at defense as well as HPC and enterprise.

The claim to be skeptical of is the headline number: twice the AI-inference throughput of "other CPUs," with the comparison processors and the benchmark both unpublished. That's not a small omission — throughput comparisons without a named baseline are marketing, and every vendor's fastest published number uses its best case. Fujitsu's own architecture pages carry the same "2x faster than competing CPUs" line with an asterisk and no footnote.

The more interesting question is what "made in Japan" covers. The press release says designed, developed, and manufactured in Japan, and the market positioning depends on that being true — but leading-edge 2nm logic capacity is thin globally and very new in Japan, so that specific claim is the one worth verifying before believing the sovereignty story. None of which is a knock on the engineering. A 144-core Arm server CPU with 3D-stacked cache and I/O on mixed nodes is a legitimate achievement for a company that's been subsidized to build it since 2021. It just isn't the same thing as being competitive, and posting no SPEC or MLPerf numbers means we don't know which one this is.

---

## Bonsai 2 27B: Near-Lossless Compression in a 9x Smaller Footprint
**575 points** · [PrismML](https://prismml.com/news/bonsai-2-27b)

PrismML's Ternary Bonsai 2 27B takes Qwen3.8 27B and quantizes it end to end to ternary weights — {−1, 0, +1} with FP16 group-wise scaling, which works out to 1.76 effective bits per weight and a 5.9GB total footprint. 262K-token context, multimodal text and image input, Apache 2.0. The claim: "more than 9x smaller while retaining 98.2% of aggregate benchmark performance."

Two problems with that sentence. "Aggregate" is doing a lot of work — a mean over a chosen benchmark set hides the worst sub-benchmark, and the failures users actually notice are degenerate output on specific task types, not mean score. And the credit for the capability belongs to Qwen3.8 27B; what PrismML built is the compressor, which is real engineering but a different achievement than the one implied.

The HN thread is the useful part. Running the GGUFs requires PrismML's *fork* of llama.cpp, not upstream — a hard adoption tax that people are already working around with build instructions for specific CUDA architectures. One user ran the 27B on an RTX 3060 (12GB) at 26.5 tokens/s generation, and reports that the 5.5GB ternary model produced a decent pelican-on-a-bicycle SVG in 18 minutes. Another ran a controlled comparison and found the bf16 model "almost passes" a recitation test while both the ternary and fp8 versions "fail badly."

That last data point is the one to keep. 98.2% of aggregate performance can be completely true and still mean "the thing you specifically needed is in the 1.8%." Asking which capabilities survive compression is the only question that matters for a deployment decision, and aggregate scores are structurally incapable of answering it.

---

## Astra for Law
**575 points** · [OpenAI](https://openai.com/index/astra-for-law/)

GPT-6 Astra, configured with a legal search index and instructions for legal analysis and writing, sold as a foundation for law firms and legal-tech companies. The index covers US case law, statutes, regulations, court rules, and administrative decisions across more than 230 million URLs, with the Free Law Project's CourtListener collection — over 99.9% of published US precedential case law — folded in. Twenty-six ecosystem plugins connect ChatGPT to Relativity, Clio, and similar tools. Harvey and Legora build on it as API customers.

Then OpenAI does something unusual: it publishes the absolute number. On 200 US legal research questions from the private validation set of Vals AI's Legal Research Bench, at maximum reasoning effort, Astra for Law passes the overall correctness check on **54.0%** of questions versus 38.7% for GPT-6 Astra with web search alone. That's a 40% relative improvement, or 15.3 points absolute. It also found 24% more reference cases and up to 54% more relevant passages from the correct opinions.

54% is the number to sit with. On a benchmark for finding the right authority, the configured system is wrong nearly half the time — in a domain where being confidently wrong is malpractice. The 40% framing is accurate and less informative than the absolute number, which is why publishing both matters; this is the most honest number OpenAI has put next to a product launch in a while.

The most valuable thing in the HN thread is a practitioner describing a real workflow: taking documents from healthcare plans, extracting structured data, importing into an internal system, with volume going from 2–3 documents an hour to 8–10. One commenter flags how refreshing it is to read that instead of "it's doing the work of a month in 5 minutes." That's the actual shape of AI adoption in regulated work — a 3x throughput gain on document triage with a human still checking, not a replacement. Whoever engineers the checking step wins the sector. And note the structural move: OpenAI owns the model and the corpus, Harvey and Legora own the customer relationship. That's a platform play, and it makes the legal-tech companies dependent on a competitor's index.

---

## Human brain is two separate organs, Stanford Medicine-led research finds
**572 points** · [Stanford Medicine](https://med.stanford.edu/news/all-news/2026/09/two-separate-brains.html)

The claim, per the press release: the brain is two distinct organs that evolved independently over hundreds of millions of years, upending the decades-old model of a single progenitor cell giving rise to the whole brain. The paper, in Nature Neuroscience on September 18, is about the front of the brain arising from a different progenitor lineage than the back. "We've shown for the first time that the front of the brain arises from a totally different progenitor cell than the back of the brain," says senior author Kyle Loh. The practical consequence, and the actual news: they can now grow hindbrain neurons in a petri dish, which opens up disease modeling for spinal muscular atrophy and ALS.

The top HN comment is a better read of the paper than the press release is, and it should have been the headline: "Different brain regions have different functions: ancient knowledge. Different regions contain distinct cell types and molecular programs: also well established. Anterior and posterior brain structures may trace back to fundamentally separate progenitor lineages... that's the interesting new result." The suggested headline — "Human forebrain and hindbrain arise from distinct embryonic progenitor lineages" — is less clickable and more accurate.

The thread then spends forty comments arguing about whether the exaggerated headline is defensible, and the argument is more interesting than the finding's packaging. One position: headline-level compression is a real constraint and specialists should accept that lay readers need a hook. The other, and I think the stronger one: the constraint explains why "two organs" is imperfect, not why it's fine — the phrase implies two independently functioning organs co-located, which is not what was shown, and it buries the genuinely surprising part. Separate progenitor lineages is the finding that lets you culture hindbrain cells, and that's what a reader would care about if anyone had told them. The lesson generalizes past this paper: when a press release and the paper's own title disagree, the title is the claim.

---

## Wax motor
**514 points** · [Wikipedia](https://en.wikipedia.org/wiki/Wax_motor)

A linear actuator with no motor. An enclosed volume of wax, a plunger, and a heat source — usually a PTC thermistor, sometimes sunlight, sometimes waste heat from an engine. Melt the wax and it expands 5–20% by volume, driving the plunger. Paraffin waxes from the straight-chain n-alkane series melt and solidify over a narrow, well-defined temperature range, which is what makes the mechanism usable as a control rather than a novelty. Choose your wax and you've chosen your setpoint, for free, with no sensor.

Where it shows up tells you its whole character: HVAC mixing valves, greenhouse vents that open themselves in the sun, washing machine door locks, dishwasher latch mechanisms, plus aerospace applications where a purely thermal actuator is the point. Nothing about that list is precision work.

It's the rare actuator that fails safe by construction — cold means retracted, and there's no stored energy to release unexpectedly and no control loop to corrupt. What you give up is speed, repeatability, and position feedback; a wax motor has hysteresis and you can't ask it where it is. That tradeoff is why the dishwasher door lock is the canonical application: cheap, reliable, and the cost of being slow is zero. A nice palate cleanser between the benchmark fight and the next benchmark fight.

---

## Saving another 100TB of RAM
**441 points** · [Cloudflare](https://blog.cloudflare.com/saving-100-tb-of-ram-with-math/)

Cloudflare's Pingora Backend Router (PBR) was using significantly more memory than it should, in structures belonging to `pingora-ketama`, the consistent-hashing library. The fix reclaimed over 100TB of RAM globally — on top of the 100TB the DNS team found last month. The post explains the whole derivation, which is why it's the best engineering writing of the day.

The math: consistent hashing spreads servers and keys across a 32-bit number line, each server owning the range to its left. Expected share per server is 1/N, but the standard deviation works out such that the coefficient of variation at N=100 is about 99% — meaning some servers handle twice their share and others handle nearly nothing. Add k hashes per server instead of one and CV drops to √((N−1)/(Nk+1)); at the NGINX default of 160 hashes per server, the 99% error margin falls to roughly 8%. Ketama then weights the hash count by each server's disk space, which is exactly the knob you want when storage capacity varies. Then feature constraints force a separate ring per combination of capabilities — two to the power of "a handful," i.e. dozens of rings, each holding its own hash table. That's where 6GB per process came from.

Two fixes landed. First, a storage change: the `{hash: u32, index: u32}` struct is eight bytes, and the index doesn't need 32 bits for a fleet capped around 65k servers — but Rust's alignment rules pad a `u16` back up to eight bytes, so the trick is storing a raw six-byte array with accessor methods instead. That alone is a 25% reduction. Second, and better, they derived the formula for the k-hash case and plotted it: each step down in error requires almost an order of magnitude more hashes, so at k=100,000 per server the last 90,000 hashes buy a 0.7% improvement. Worse, 32-bit collisions (birthday paradox) make the error rate *rise* for large datacenters somewhere between 10,000 and 100,000 hashes. So they cut hashes per server by 90% with no appreciable error.

The migration is the part most teams get wrong and Cloudflare got right. Changing a hash ring moves cacheable requests, and flipping it globally would have invalidated nearly all cached content — "turning a memory optimization into an apocalyptic increase in origin traffic." So PBR carried both rings, used the existing migration framework to decide per request, kept the decision stable per request hash, kept a rollback path, and rolled out in layers with traffic percentage and geographic blast radius controlled independently. The `v2` ring ships in `pingora-ketama` as an unadvertised cargo feature, with `v1` unchanged so both can run at once.

100TB sounds absurd until you remember this service runs on every node. The generalizable lesson is the one the author states: "simple" decisions hide wins you'll only find if you get into the numbers. The caveat is that the numbers had to be *derived* — the k-hash standard deviation had no accessible closed form, so someone did the calculus. Most teams would have added hashes until memory hurt, then added a machine.

---

## The first new cat species discovered in 100 years
**352 points** · [National Geographic](https://www.nationalgeographic.com/animals/article/meet-the-first-new-cat-species-discovered-in-100-years)

In 2016, a man in Bolivia found a kitten on a road near a forest and took it home, assuming it was a domestic breed. About a year later, having concluded it was clearly wild, he handed it to a sanctuary. The sanctuary called Paola Nogales-Ascarrunz, who runs the Bolivian Felids Research Program. She assumed it was a northern tiger cat, *Leopardus tigrinus*, and took a hundred photographs. It was not a northern tiger cat.

The animal is now *Leopardus tilcayo* — named for the local word for it, with the English common name "Tilcayo" — described in Current Biology from whole genomes of 38 cat samples across Central and South America, eight of them museum specimens. It diverged from its closest relative about 1.4 million years ago. It's roughly 46cm long and 1.4kg, smaller than an average house cat. The same study concluded that what everyone called tiger cats are actually five species, not three, verifying four previously proposed and adding the one new one, plus a subspecies in Peru. It's the first newly described living felid species since 1923.

Two things deserve separating here. The taxonomic result is a genuine revision — 250-year-old species descriptions built on single illustrations are exactly the kind of thing genomic data should overturn, and species boundaries determine conservation funding, so reclassifying one animal into five has real consequences. The media result is a narrower thing dressed up as a big one, since this is a species split out of an existing one rather than something discovered from nothing.

And the detail that belongs in the lede rather than the fifth paragraph: there is exactly one confirmed living member, a ten-year-old cat nicknamed "Tigrino" at a Bolivian sanctuary. A species description resting on one captive individual plus genomic divergence is normal practice and also a conservation emergency, and those two facts should not be separated by five paragraphs.

---

## San Francisco Onion Futures Company
**329 points** · [onionfutures.com](https://onionfutures.com/)

A website selling private, transferable contracts for the future physical delivery of yellow onions. Pick a month from October 2026 through March 2027, pick a quantity, get a price — $9.58, $3.74, $8.29, $7.06, $9.21, $3.65 respectively, recalculated daily at midnight San Francisco time by "a proprietary algorithm."

The legal argument in the FAQ is the good part. The Onion Futures Act, 7 U.S.C. § 13-1, prohibits contracts for the sale of onions for future delivery "on or subject to the rules of any board of trade in the United States." Their claim: they are not a board of trade, which the statute defines as an "organized exchange or other trading facility." They sell contracts privately to individuals and operate no exchange and no secondary market. So no, it's probably not illegal.

That statute exists because of the 1956 onion corner on the Chicago Mercantile Exchange, in which two traders effectively bought up the market and squeezed it hard enough that onion farmers took the loss — and Congress responded by banning futures trading in a single agricultural commodity, the only such ban in US history. The loophole here is a definitional one, which is the correct kind: the Act governs venues, not agreements. Whether it survives contact with the CFTC is a separate question, since that agency's reach has expanded substantially since 1958 and "we sell privately" doesn't immunize an operation that looks like a trading facility. In practice nobody is going to test it, because the remedy involves shipping you actual onions.

Delivery is in the first week of each month, in San Francisco, Toronto, Seattle, and Chicago — the last via a sister site — with third-party delivery elsewhere at no extra charge. Prices swing month to month by a factor of two with no stated unit of quantity, which is either the joke getting deeper or a genuine gap. Three markets and a delivery-partner network is the tell that someone is doing this deliberately.

---

## Minimal Phone 2
**311 points** · [minimalcompany.com](https://minimalcompany.com/)

A 4-inch OLED, a physical QWERTY keyboard, an aluminum unibody milled from a single block of 6000-series aluminum, 2.5D glass, and "Minimal OS" — a calmer Android with "type to act," "no endless feeds," and full app access. $599 pre-order against a $699 list price, shipping December 2026. The hero copy leads with the average user's 186 phone pickups a day, 4h30 of screen time, and 152 notifications. The tagline is "use your phone. don't let it use you."

The marketing is honest about the diagnosis and silent about the cure. A smaller screen and a keyboard are hardware; the problem being described is a software and business-model problem. "No endless feeds" plus "full app access" is a contradiction the moment you install anything, because the feeds are inside the apps, and a calm launcher over Instagram is not a calm phone. The honest pitch is that the friction is the feature — a 4-inch screen with a keyboard makes you do less because it's worse at mindless scrolling — and that's a real product, just not the one described.

The specs are unremarkable by design and $599 has to be read as paying for the constraint, which is fine. The execution risk is the one every hardware startup carries: December 2026 is a promise, and pre-orders are how small consumer hardware funds its own delays. The HN thread mostly argues about whether other people should have built the perfect phone instead, which one commenter punctures neatly: "It's not 'ambition' when it's what other people should do for you."

---

## Warren Buffett Steps Down as Berkshire Chairman, Names Son to Replace Him
**311 points** · [NYT](https://www.nytimes.com/2026/09/18/business/warren-buffett-berkshire-chairman.html)

Berkshire Hathaway announced on September 18 that Warren Buffett, 96, has been named Chairman Emeritus effective immediately, remaining a member of the board. Howard G. Buffett — a director since 1993, thirty-three years — has been elected Chairman. Greg Abel remains CEO, a role he's held since earlier this year. Susan Decker continues as Lead Independent Director.

Buffett's letter is unusually explicit about the division of labor. "Greg runs the company; Howard will guard its culture and values — both worth more than anything on our balance sheet." And then the line that's doing the real work: "Think of Howard as a policy the shareholders own and hope never to claim against." He also notes that Abel had been making the decisions that matter for some time, so the timing is completion rather than transition, and closes with the observation that Father Time always wins.

The structure is worth naming plainly because it isn't standard. A public company with an operating CEO and a separate, family-drawn non-executive chairman whose mandate is culture rather than oversight is a founder's design — it encodes the belief that the culture *is* the asset and the CEO is a steward rather than a principal. The insurance framing is candid about what the chair is for. The thing to watch is whether a chairman with a family name and thirty-three years of board tenure exercises independent judgment over the CEO or ratifies him. Berkshire has never been a company where the board pushed back at the top, and nothing in yesterday's announcement changes that.

---

## GPT-6 Astra Solves a WWI German Radio Cipher
**302 points** · [prinz](https://www.prinzai.com/p/gpt-6-astra-solves-a-wwi-german-radio)

A German science blog keeps a list of 50 unsolved ciphers, including a set of WWI German radio messages encoded with ADFGVX — a fractionating cipher that uses a 6×6 table addressed by the letters A, D, F, G, V, X both horizontally and vertically, then a columnar transposition keyed by an encryption word. Hundreds of these messages have been broken, including by codebreaker George Lasry. Over a dozen had not, among them one transmitted on November 27, 1918. GPT-6 Astra produced: "EIN ENGLISCHER KREUZER EINLIEG X SEWASTOPOL X S4STEN X EIN GESCHWADER DER X ALLIIERTEN FOLGT 26STEN X" — an English cruiser arrived at Sevastopol on the ?4th, an Allied squadron follows on the 26th.

Before believing this, look at where the key came from. The model used "TRUPPENVERSCHIEBUNG" as the encryption word, taken from pages 214–215 of J. Rives Childs's 1918 handbook *The History and Principles of German Military Ciphers*, which lists known German keys. The word then has to be alphabetized to build the table. So the model didn't break the cipher — it selected, from a published list of keys the Germans used, the one that yields readable German. That's a real decryption and a genuinely useful capability, because trying hundreds of keys against dozens of messages and recognizing plausible German is exactly the tedious, high-volume, low-creativity work machines are good at. It is not cryptanalysis.

Two further caveats, both of which the post is honest about. The "?" in the plaintext is a month date the model could not resolve, and a hundred-year-old military message has a built-in check — you can validate the plaintext against the historical record, which is a luxury modern ciphers don't offer. And there's no published cipher text, so there's no published verification. The interesting meta-point is the shape of the win: broad cheap hypothesis generation over a small human-defined search space, with a human-provided correctness signal. That pattern explains most legitimate LLM-assisted discovery, and it's less exciting than the headline and more repeatable.

---

## The American Religion of Self-Storage Facilities
**271 points** · [The New Yorker](https://www.newyorker.com/magazine/2026/09/21/the-american-religion-of-self-storage-facilities)

Reported from a 2019 road trip and a lot of conversations with operators. The numbers are the kind that sound fake and aren't: the US holds roughly 90% of global self-storage capacity, and there are more self-storage facilities in the country than Starbucks, McDonald's, Walmart, Home Depot, Domino's, Dunkin', and Costco locations combined. Annual revenue exceeds $40 billion. A 2022 survey by Stanley Black & Decker's Craftsman division found more than a third of American residential garages are too full of overflow possessions to park a car in.

The industry's own explanation is "the four D's": death, displacement, divorce, downsizing. The essay's best material is what people store and why. One technologist moved from a suburban house to a Manhattan apartment and rented a twenty-by-forty-foot unit in Queens for things he no longer had room for, visited "from time to time," and admits "literally, though, years would pass." Among the contents were a synthesizer, a piano, and a Hammond organ. When he finally donated all three, freeing his view of the unit's interior, he was reminded of possessions he'd forgotten he owned.

The reason this landed at 271 points isn't the statistics, which everyone has heard in some form. It's that the four D's are all events where you cannot think clearly, and the business model is charging rent on the postponement of a decision. That's a durable business: cheap assets, involuntary demand, tenants who are emotionally incapable of downsizing and therefore never churn. It also works as an accidental comment on the day's AI discussion — the businesses that persist are the ones that monetize a transition nobody wants to make.

---

## If math is more than proof, we need to better celebrate the rest of it
**264 points** · [Terence Tao's blog](https://terrytao.wordpress.com/2026/09/18/if-math-is-more-than-proof-we-need-to-better-celebrate-the-rest-of-it/)

A guest post by Grant Sanderson of 3Blue1Brown, on Tao's blog. The premise: proofs have always been a proxy for what mathematicians actually want, which is further human understanding — and when proofs can be generated without understanding, the proxy stops measuring the thing. So what should replace it? Sanderson proposes defining a "motivated explanation" and giving it academic credit comparable to what proving open problems has historically earned.

The definition is sharper than the phrase suggests. In a proof, definitions sit at the start and new constructions enter by analyzing their properties; in a motivated explanation, definitions sit in the *middle*, and a new construction only enters once the problem it addresses has been established. In a proof every statement must be correct; in a motivated explanation it's often better to start with an idea that's not quite right and needs correction. And the scopes differ: a proof explains why a theorem is true, while a motivated explanation explains why that theorem is the right one to pose and how it's used in context. He concedes the obvious hole — validity isn't binary, and "there will never be Lean for motivated explanations" — and defends "motivated" over "lucid" or "demystifying" because it's at least partly checkable, via the test "I want this to feel like you could have discovered it yourself."

He discloses the conflict of interest up front, which is more than most would: his career is explanations, not proofs. But that he's funded outside academia doesn't dissolve the objection it invites — make explanation credit-bearing and you will immediately get explanations shaped like credit. The stronger argument is one he doesn't lead with. His best examples make it for him: Part IV of the Princeton Companion to Mathematics, which Timothy Gowers says took half his working time for about five years and that he "probably wouldn't have actually been offered the chance to do" without a Fields Medal. Gowers was right to believe in a reference work that added tremendous value to the field, and it's damning that only a medalist could feel justified spending five years on it.

Sanderson also reaches for Bill Thurston's 1994 essay *On Proof and Progress in Mathematics*, which asked "how do mathematicians advance human understanding of mathematics?" three decades before LLMs made the question urgent. Thurston's reading of the four-color theorem controversy — that the objection was never about the proof's correctness but about wanting human understanding alongside it — is now being rediscovered in public. That it reads as timely thirty years later is the real indictment of the incentive structure, and it's a stronger case for Sanderson's proposal than the proposal itself makes.

---

## I vibed a proof of Conway's conjecture
**258 points** · [overreacted.io](https://overreacted.io/how-i-vibed-a-proof-of-conways-conjecture/)

Dan Abramov, who describes himself as a math noob, decided to test whether a non-mathematician with a frontier model could solve an open problem. He picked surreal numbers — Conway's invention, a number system where every real, every ordinal, and things like 75 + ω·3 + 1/ω all coexist, all generated from a single rule about filling the gaps between what already exists. Claude suggested an open problem. Abramov then spent a month of free time and a lot of tokens to produce a Lean proof of Conway's refinement conjecture: for omnific integers, if ab = cd then there exist e, f, g, h with a = ef, b = gh, c = eg, d = fh. Open for fifty years.

What makes this post worth more than the result is its epistemic hygiene. There is no "breakthrough" language. He states that the proof has *not* been independently verified by mathematicians, that it has passed the mechanical checks on the Palomar registry, and that a few people familiar with both Lean and the field think the statement looks correct — then says plainly that assuming there's no Lean kernel bug, it's probably legit. He links a section explaining why he thinks it's correct and explicitly invites refutation.

That distinction matters more than it looks. Lean verifies that the proof term type-checks against a statement; it cannot tell you the statement is the conjecture a human meant to pose. Formalization capture — inadvertently proving a subtly weaker or different theorem — is the real failure mode, which is why "the statement seems correct" is load-bearing and "the proof compiles" is not. The HN thread's split captures exactly this discomfort: one commenter frames it as sorcery versus wizardry, summoning beings that do the magic; another says simply that the post "did not present any mathematics at all." Both readings are responses to the same gap between a verified artifact and understanding, which is what the Terry Tao post above is about. Two of today's stories are the same argument from opposite ends.

Also note the economics. One month of one person's free time, a frontier model, and an enormous token budget produced one Lean file for one conjecture. That is not a discovery pipeline and it doesn't scale by itself. It is a genuine result, which is a different thing from what the AI-does-math genre usually claims.

---

## The Secret Life of Circuits
**242 points** · [blog.coredump.cx](https://blog.coredump.cx/p/the-secret-life-of-circuits-is-here)

lcamtuf (Michal Zalewski, author of *The Tangled Web* and *Silence on the Wire*) has a new book out from No Starch Press: *The Secret Life of Circuits*, a premium-size full-color hardcover with nearly 300 diagrams and illustrations made for it. His stated goal is teaching design rather than analysis — "it explains how to come up with your own designs, not how to copy other people's work" — with real answers and no requirement of a year of calculus first. Direct publisher orders ship now; Amazon and Barnes & Noble orders ship in October. A sample chapter is linked.

Thin on news, but the 242 points are the front page noting that this author has credibility. The gap being filled is real too: formal electronics education teaches you to analyze circuits someone else designed, and the transition to designing your own is where most people stall. Two practitioner-first electronics books from security researchers in a short span is a small trend worth watching.

---

## How SpaceX streamlined the Raptor engine
**229 points** · [Construction Physics](https://www.construction-physics.com/p/how-spacex-streamlined-the-raptor)

Raptor is a full-flow staged combustion engine: two preburners, one burning a little oxidizer in a lot of fuel to drive the fuel pump, one burning a little fuel in a lot of oxidizer to drive the oxygen pump, with all propellant routed through the preburners and both exhaust streams burned together in the main chamber. Prior to Raptor, only two FFSC engines had been built and neither flew — the Soviet RD-270 in the 1960s and the US Integrated Powerhead Demonstrator in the 1990s and 2000s, whose equipment SpaceX partly obtained when it started Raptor in 2012. Raptor 3 puts out about 35% more thrust than Raptor 1 while being dramatically simpler to look at.

How did the tangle of pipes become the smooth engine? Brian Potter is upfront that nobody knows for certain: SpaceX publishes no schematics, no one has torn one down, and the analysis rests on Musk tweets, Everyday Astronaut interviews, and fan-made schematics that must be taken with a large grain of salt. But the picture that emerges is consistent. Raptor 1 was a heavily instrumented development engine — lots of sensors, and therefore lots of wires and the heat shield required to protect them. Raptor 2 redesigned everything from turbomachinery to chamber nozzle to electronics, shrank the turbopump, moved preburner controllers off the engine into boxes, and combined many valves into valve plates. By Raptor 3, the main chamber spark igniters are gone (preburner exhaust arrives hot enough that it needs little encouragement), helium is eliminated entirely — it had been used to spin up the turbines and control valves, now replaced with nitrogen for purge and start — a gaseous-oxygen heat exchanger near the preburner is gone, a fuel line to the preburner is gone, and bolted flange connections became welds, trading serviceability for mass and fewer leak paths.

The last move is the big one. Much of the piping wasn't removed, it was moved inside the engine by 3D printing components, which is what allows the heat shield and fire-suppression system to be deleted — and that vehicle-side hardware removal is the largest single mass change from version 1 to version 3.

So the honest read of the famous before-and-after photo is that it's mostly instrumentation removal, internalization, and welding, not a propulsion breakthrough. That's a real achievement and it took years, but it's the normal shape of a development program maturing, not a new thermodynamic cycle. It also means the vivid image is doing marketing work — which is presumably why a rival CEO publicly suggested it was a partially assembled engine, and got a photo of it firing in response.

---

## Show HN: Cactus Needle 3: 8-29MB automation models can match DeepSeek V4 Flash
**220 points** · [cactuscompute.com](https://cactuscompute.com/needle)

Small models for tool calling, structured extraction, and embedding, designed to run on a Raspberry Pi. One set of weights, usable at any depth from 2 to 20 layers — "intelligence laddering" — so you pick the size/latency point that fits. The pitch on behavior is good: given your functions, pick the right ones and fill every argument; ask for two things and get two ordered calls; ask for something no tool covers and get an empty list rather than a guess. Decode grammar guarantees the structured output parses. The architecture is a 20-layer, 121M-parameter design, 70.8M of that in hashed 2- and 3-gram memory tables, claiming more than 2x fewer MFLOPs per token than a same-config transformer, at 400–4k tokens/s decode on a Pi 5. The benchmark claim: "beats models 10x its size on mobile tool calls and matches models 2-3x its size on extraction."

Then the HN commenters tried the demo, and it is not good. "I need a wee" plays music, because "wee" is a genre. "I'm going to the toilet" tries to turn on the toilet. "It's cold" turns the thermostat *down*. Asking it to clean the living room then the kitchen fails. A commenter summarizes: "Pretty much matches my experience. The 'DeepSeek 4 Flash grade' claim seems far fetched."

What makes this thread better than the usual benchmark fight is that the Cactus team shows up and engages honestly. They thank people for the reports, fix the tool definitions and triggers mid-thread, and then explain the actual limitation without spin: "Implications and relations are hard for the model to understand... Reasoning isn't true reasoning in the way general LLMs do it, it is more like grounding for the model that it generates itself." They concede that the cleanest use cases involve direct language and that a confidence threshold would help.

That's a more useful positioning statement than the landing page has. Mapping a well-specified utterance to a schema is a retrieval problem, and an 8–29MB model can be genuinely good at it. What it cannot do is implication — "it's cold" means heat. And the commenter asking how well 30MB of fuzzy-matched regexes would do on the same tasks is asking the question nobody has a baseline for, which is precisely why the DeepSeek comparison gets to stand unchallenged. If your use case is direct language and a well-maintained tool list, this is plausibly the right tool. If it's "make the house do what I mean," it is not, and no aggregate score was ever going to tell you that.

---

## North Korean nuclear test sets off years of earthquakes
**217 points** · [Science](https://www.science.org/content/article/north-korean-nuclear-test-sets-years-earthquakes)

Between 2006 and 2017, North Korea detonated six nuclear devices under Mount Mantap. The last, on September 3, 2017, was by far the largest — an estimated 100 to 250 kilotons, producing a magnitude 6.3-equivalent signal, followed 8.5 minutes later by a magnitude 4.1 event interpreted as the collapse of the cavity it carved. Satellite radar showed the mountain itself deforming. Underground tests normally produce a burst of small local earthquakes that fade over weeks. Here they didn't fade. They got worse.

A team led by researchers at Chengdu University of Technology and Pusan National University analyzed 17 years of continuous seismic data from stations in China and South Korea, 80 to 200 km away, using matched-filter detection to find events routine monitoring missed. They found 1,399 small earthquakes. They located 955 of them precisely, and the locations aren't scattered — they line up along two roughly parallel structures running north-northwest, one following the projected continuation of a known fault, the other a fault that had never been mapped. And rather than decaying, both the earthquake rate and the seismic moment release kept increasing through the end of the study period in May 2025.

The mechanism the paper proposes: repeated explosions damaged rock that was already close to failure and altered the local stress field, and stress then redistributed slowly through the fractured crust, advancing slip on pre-existing faults years later. Mount Mantap's steep topography created the stress variation that determined where that slip happened — the mountain shaped the pattern without being the trigger. The longer of the two structures is about 24 km; if it were a single connected fault rupturing end to end, the researchers estimate it could produce something around magnitude 6.4.

The researchers are careful about causality and the care should survive into the headline. The faults existed and were loaded by natural stress; the earthquakes might have happened anyway; the finding "broadens the time window that should be considered; it does not lower the standard of evidence required to establish causality." What is not hedged is the monitoring consequence. "Seismicity occurring years after detonation may complicate attribution and blur distinctions between explosion-related and tectonic events." If a test site keeps generating magnitude 4–5 earthquakes for a decade, the next detonation there is harder to detect and harder to attribute to anyone — and detection is the only enforcement mechanism the Comprehensive Nuclear-Test-Ban Treaty has. Korean coverage adds the long-standing worry about the active volcano at nearby Mount Paektu. The paper's most alarming property is that its study period ends while activity is still rising.

---

## Photon-Emission-Guided Laser Fault Injection Enables RP2350 Secure Debug
**211 points** · [Ledger Donjon](https://donjon.ledger.com/blog/rp2350-secure-debug-laser-fault-injection/)

Ledger's hardware team found a way back into the Secure world of Raspberry Pi's RP2350 microcontroller after debug had been permanently disabled. Using photon-emission microscopy they located the register that gates debug features, then fired laser pulses at two nearby positions to restore debugger access. With that access, following a "rescue reset," they recovered a secret from one-time-programmable memory — the reset halted the chip before firmware could apply its runtime lock, so the page remained readable from the Secure world. Requirements: physical access, destructive preparation, and roughly $250,000 of lab equipment.

The chip's security model is not casual. RP2350 is dual-core, each socket selectable between an Arm Cortex-M33 and a RISC-V Hazard3 core at boot, with secure boot authenticating signed firmware against public-key fingerprints in OTP, Armv8-M TrustZone separating Secure and Non-secure execution, permanent debug-disable settings, and glitch detectors for clock and supply manipulation. The permanent settings live in OTP — 128-byte pages guarded by two hard lock rows, with security fields stored redundantly (critical flags by three-of-eight vote across eight consecutive rows, lock bits triple-redundant with majority vote) and states that can only ever become more restrictive. Raspberry Pi ran a public hacking challenge against the original chip from August to December 2024 and released the A4 revision that Ledger tested after findings were addressed.

The flaw class is the interesting part, and it generalizes well beyond this chip: the permanent security configuration was enforced by firmware at runtime, on a code path a reset can skip. In hardware security, "permanently disabled" usually means "not yet re-enabled," and the load-bearing question is always what happens in the window between power-on and the software lock being applied. Ledger publishes this work because their business is a secure element inside a device an attacker can hold — which is precisely the threat model RP2350 was never built to face. If you're the attacker here, you already have the chip on a bench, a laser rig, and a quarter-million-dollar budget, and you already have physical access, which means you've already lost the threat model that OTP debug-disable exists to defend. Raspberry Pi inviting the attack is why the A4 revision exists. That's the system working, even when the headline reads like it isn't.

---

## Warez: The Infrastructure and Aesthetics of Piracy (2021)
**206 points** · [Internet Archive](https://archive.org/details/b904a8eb-9c98-4bb1-bf25-3cb9d075b157)

Martin Paul Eve's *Warez* (punctum books, 2021, open access under CC BY-NC-SA) is the first scholarly book about the Warez Scene — the worldwide underground network of groups that obtain music, video, games, and software before their official release dates and race each other to distribute them first. It began on pre-internet bulletin board systems and moved to FTP "topsites" in the mid-to-late 1990s.

The thesis is the reason to read it, and it's counterintuitive enough that people keep linking it. Piracy is usually framed in ideological terms — equal access to knowledge and culture, information wanting to be free. Eve argues the Scene is something else entirely: a competitive status economy organized around ranking and one-upmanship, where participants accumulate reputational capital rather than material wealth, and where what's contested is not the copy but the craft of the crack. The aesthetic genealogy runs through the DemoScene's procedural animation showcases, ASCII art, and concrete poetry — NFO files exist to display skill and cred, and they've existed since software cracking was a legal hobby.

The reason this reads as good social science rather than contrarianism is that it explains observations the ideological account can't. Release rules, dupe-checking, rivalries, and grudges make sense in a status economy and would be strange in a commons movement. He also opens with the 2012 Knight Capital collapse — a trading system that lost $460 million in 45 minutes — to establish speed as a defining property of contemporary capital before arguing that the Scene is fixated on the same thing in a different register. That the linked copy is an Internet Archive scan of an open-access book is either a neat joke or the reason it's on the front page.

---

## Yesterday's stories, still on the front page

Seven of today's 33 were covered here yesterday, and all seven gained points, which says more about how slowly the front page is turning over than about any of them individually.

**I Don't Like Passkeys** — 656 → 813 points, 782 comments. Passkeys' weakest link is recovery, and recovery is still SMS. Nothing about that changed overnight.

**Cloudflare Quick Tunnels** — 399 → 793. The point stands: a random, non-revocable hostname that dies with the process is the right primitive for an agent's ephemeral endpoint and the wrong one for a demo you sent a customer.

**OpenJev** — 463 → 685. The page still disclaims any affiliation with TypeSafe. Browser-local decision models that honestly report 44%/68.6%/81.3% against a hosted 88.3% are more useful than the ones that don't.

**How to Write with an LLM** — 590 points, 368 comments. The most contentious thing on the page for a second day.

**US Military had close call after using AI for hallucinated intelligence report** — 493. The CNN story that should be read alongside today's Astra for Law launch: the same capability class, one productized with a benchmark and one deployed on a warship.

**A heap overflow and SSO misconfiguration to compromise OpenAI internal repos** — 481. The follow-up still matters more than the chain: libheif is a transitive dependency of Slack, GitHub Enterprise, Rails, and most JS image pipelines. If you accept user-uploaded `.heic`, assume you're affected.

**Inside ZCode: Silently uploading your Git history to the cloud** — 323. Worth re-reading next to today's AGENTS.md story. Both are about the same thing: who decides what your repository's metadata is for.

---

## The Throughline

**Custody, again — and it's getting less subtle.** Yesterday's theme was who holds the keys. Today's version is institutional rather than cryptographic. Google gives its own hardware several months' exclusive access to new Android APIs and to some security patches that non-Pixel devices need, and per GrapheneOS is late on GPL source requests. OpenAI builds a 230-million-URL legal corpus and rents it to Harvey and Legora, who own the customer but not the index. Anthropic adopts the industry-standard AGENTS.md only as a fallback behind its own CLAUDE.md. Cloudflare's 100TB memory win only existed because it owns the whole stack from the hash ring to the origin. In each case the interesting question stopped being "is this good technology" and became "who can change it, and when."

**The benchmark-to-demo gap is now the main event.** Bonsai claims 98.2% of aggregate performance and an HN user finds the ternary weights fail a recitation test the bf16 version nearly passes. Needle's landing page says it matches DeepSeek V4 Flash and the demo plays music when you say you need the toilet. Fujitsu claims double the AI inference throughput of unnamed competitors with no published numbers. OpenAI's Astra for Law claims a 40% relative improvement, and the number that actually tells you something is the absolute one — 54% correctness on legal research, up from 38.7%. Vendors optimize for the flattering framing and readers have learned to go find the raw figure, which is why publishing both is now a competitive advantage rather than a concession. The healthiest exchanges today were the ones where a vendor showed up in the comments and admitted the failure mode: the Cactus team saying "reasoning isn't true reasoning, it's more like grounding" was worth more than their entire benchmark chart.

**Verification is the scarce resource, and everyone's arguing about proxies.** A Lean proof that type-checks but might formalize a slightly weaker theorem than a human meant. A WWI cipher "solved" using a key from a published 1918 handbook. A brain finding whose press release says "two separate organs" and whose paper says two progenitor lineages. Grant Sanderson's post on Tao's blog is the explicit version of the argument the other three are having implicitly — proofs have been a proxy for understanding, generative models break the proxy, and we have no replacement. The pattern across all of today's verification stories is the same: the artifact is checkable and the *claim about the artifact* is the soft part. A kernel check, a historical record, a paper title, a formal statement. In every case the machine produced something that could be checked, and the human contribution was deciding what it meant.

And a fourth, quieter thread worth noting because it's the inverse of the other three. The two highest-rated things on the page are a bird frame on a windowsill with hand-cut 1800s plates and an essay about poster design — no frontier models, no benchmark claims, one of them explicitly noting that none of its artwork was AI-generated. The day's most rigorous writing is a derivation of consistent-hashing variance. The front page's loudest arguments are about AI. Its most-loved artifacts are physical, local, and made by hand.
