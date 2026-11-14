---
title: "Hacker News Front Page Roundup — November 14, 2026"
pubDate: 2026-11-14
description: "Fifty-eight stories cleared 200 points and twenty of the thirty-one new submissions are above that line. A router took down American airspace for four hours, the WSJ alleged Nvidia manufactured its own shortage, and Google told schools they can have an AI switch or Search but not both."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Fifty-eight stories cleared the 200-point threshold in a scan of the top 170 ranked items. Thirty-one submissions are absent from the last four roundups, twenty of those cleared 200 themselves, and four of the thirty-one are the FAA ground stop or its fallout. Sixty-six repeats are in the table at the bottom.

The biggest new story of the day was a router. The FAA stopped every departing flight in the United States at 3:54 p.m. ET Friday because its controllers had started losing confidence in their radar and radio feeds, and the explanation that eventually emerged — a router pushing too much data at equipment nobody had replaced — is the least exotic possible cause and the most damning. Everything else on the page reads as a variation on that theme: old systems being asked to carry new loads, and the bill arriving.

## A router sent too much data and American airspace stopped — 1,631 points

**1,631 points** · 1,258 comments · [nbcnews.com](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) · [HN discussion](https://news.ycombinator.com/item?id=50489641)

Controllers began seeing inconsistencies in radar data and in communications with aircraft at 3:36 p.m. ET on Friday. Eighteen minutes later the FAA issued a national ground stop "due to extraordinary circumstances and for reasons of safety," halting every departure in the country. It was lifted at 8:15 p.m. More than 7,000 flights were cancelled Friday; by 9:30 a.m. Saturday FlightAware had logged another 3,700 cancellations and 1,990 delays, because aircraft and crews were in the wrong places and some crews were running out of legal duty hours. Reagan National ran out of pavement to park aeroplanes on. O'Hare was close.

The cause, as the FAA now tells it, is mundane to the point of insult: a router sent too much data and overwhelmed older air traffic control equipment. Transportation Secretary Sean Duffy said the agency had retained some radar and communications capability throughout and stopped departures as a precaution. Medical flights, including organ transplants, kept flying. DHS Secretary Markwayne Mullin said there was no evidence of a cyberattack, having earlier called it a telecommunications outage. Commenters pulled the more interesting thread: the WSJ, citing people briefed on the matter, reported the outage was in a telecommunications network run by L3Harris that carries the radio frequencies controllers use to talk to pilots. Nobody has said whether that network is the router.

The historical echo in the thread is the one to read. Someone dug out the DOT inspector general's report on the 2009 collapse of the FAA Telecommunications Infrastructure — the same shape of failure, a shared telecom backbone carrying 20,982 operational services, with a documented risk register nobody acted on. The system is a patchwork by design, because replacing it all at once is impossible and replacing it in pieces is what caused Friday's overload in the first place — if the account Mullin gave in the White House briefing, quoted in the thread, holds: the FAA had been "putting new equipment and new technology" in, and "it was overwhelming the older system." The one thing to be skeptical of is the certainty on offer. In four hours of outage, the official story changed from "telecommunications outage" to "no cyberattack" to "a router," and the only independent reporting points at a contractor's network. That is not a conspiracy; it is what it looks like when a country runs critical infrastructure on a supply chain it does not understand and cannot inventory.

## Nvidia is accused of manufacturing the shortage it sold — 1,003 points

**1,003 points** · 603 comments · [techpowerup.com](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) · [HN discussion](https://news.ycombinator.com/item?id=50493251)

A Wall Street Journal report, relayed by Wccftech and then by TechPowerUp, alleges that Nvidia invested in AI startups and smaller cloud providers that would then buy Nvidia GPUs and build data centres — financing its own demand to keep the shortage narrative alive and to move an oversupply of silicon it had already committed to buying from TSMC. The report describes an August meeting in which CFO and now acting CEO Colette Kress pushed to scale back the circular financing arrangements and to shrink the $250 billion OpenAI deal, and Huang responded by calling her "a deer in the headlights." Kress's specific objection is the load-bearing detail: some of the cloud providers Nvidia was funding could not afford the GPUs, which makes them a financial dead end wearing a customer's uniform.

The context the report supplies is more useful than the allegation. Huang's own framing, per the Journal, was that major cloud customers were running away from Nvidia toward their own chips, and that the wafers and memory Nvidia had committed to were arriving like an "avalanche." A company that knows it will sell 100% of its inventory can either raise prices until only four buyers are left, or spend margin to widen the customer base and recognise the revenue. What the Journal describes is the second strategy executed with the aggression of the first.

Read the thread and you get three reactions worth separating. One: this was visible for a year — Nvidia's circular deals with model labs have been public since 2025, and the reporting adds specifics, not a new category. Two: much of the "scarcity was fake" framing is a misread; the allegation is about demand support, not withheld supply, and a company financing its customers is ordinary vendor finance until the customers cannot pay. Three: the sourcing chain is WSJ to Wccftech to TechPowerUp, and by the third hop the headline has hardened into something the original does not say. The original headline is about a CEO belittling the executive who replaced him. Go read that one.

## The old phone is the better dev board — 450 points

**450 points** · 263 comments · [so.long.thanks.fish](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) · [HN discussion](https://news.ycombinator.com/item?id=50440709)

A project needs a high-resolution camera, GPS, storage and a microcontroller to drive some lights. Priced the Raspberry Pi way: Pi 4 4GB at about $132, a 64MP Arducam at $60, a GPS HAT at $23, a real-time clock HAT at $12, a UPS HAT at $20 plus cells, a 5-inch touchscreen at $37, a 4G HAT at $79 — call it $220 before the case and the SD card. Priced the other way: a used Redmi 13C 5G or Huawei Mate 30 5G off Taobao for ¥300–500, or roughly $45–75, which arrives with a 40–50MP camera, GPS, storage, a battery, a clock, mobile data, a touchscreen and a USB-C port.

The point is not that phones are cheap. It is that the parts list for "smart device" and the parts list for "five-year-old phone" converged years ago, and the hobbyist supply chain has not noticed. The author is being fair about the tradeoffs — you inherit an opaque SoC, an Android stack you cannot reflash on the Huawei, thermal throttling, and a battery that will swell in three years — but the comparison is not close on price, and the phone wins on every sensor except the GPIO.

The thread's counterargument is the useful one: a Pi is supported for a decade, documented, and replaceable when it dies, and the pile of e-waste in your drawer is not a supply chain. Both true. What the post actually demonstrates is that the price of a Pi-shaped project is now mostly the price of the HATs, each of which exists to add something a phone already had, and that the cleanest way to get a camera and a modem into a prototype is to buy a device that was designed by a team of two hundred people to include them.

## Jonathan Blow asks why software hasn't changed, and the thread says it has — 445 points

**445 points** · 640 comments · [youtube.com](https://www.youtube.com/watch?v=IRK8h67ol7Q) · [HN discussion](https://news.ycombinator.com/item?id=50484658)

The talk's title is the argument: if AI solved coding, why is my software still the same? Blow's position, as the thread relays it, is that software development has not meaningfully advanced since the early 2000s, and that the current wave of tooling has not changed what shipped. The video itself returns nothing to a text extractor and I did not watch it, so treat the quotes as the thread's rendition.

The best comment is not the disagreement but the reframe: the hard part of making software was never the typing, it is deciding what is worth building, modelling the problem, and designing the solution at the architectural level — and there has been no visible progress there. The counterargument from a game developer is concrete and better than most: in the last three years there has been a wave of indie real-time strategy games with custom engines that run better, in his recollection, than Warcraft III or StarCraft II did at launch, from teams that could not have existed before.

Then the thread turns on the messenger, which is its habit. A senior engine developer says Blow does not have enough experience with LLMs to have an opinion, on the evidence that his critique rests on individual anecdotes. That is a fair hit on method and an unfair hit on conclusion — anecdotes are what the productivity claims are also made of, and the only way to settle it is a measurement nobody has published. What is missing from both sides is the honest middle: AI has obviously collapsed the cost of writing the first draft of code and has not obviously collapsed the cost of the last ten percent, which is where software has always gone wrong and where the review burden now lands.

## Thirteen Monkey Islands, one frame at a time — 421 points

**421 points** · 139 comments · [monkeyisland.pages.dev](https://monkeyisland.pages.dev/) · [HN discussion](https://news.ycombinator.com/item?id=50493904)

A comparison tool for every release of The Secret of Monkey Island: thirteen versions, in release order, captured at twelve fixed moments with identical framing, so switching versions changes the machine and not the composition. Captures come from ScummVM, with the Atari ST monochrome screens from Hatari, each scaled to 1600×1200 with nearest-neighbour pixels and 4:3 aspect correction so an original pixel keeps the shape it had on a period monitor. There are CRT shaders from the libretro stack, a zoom control, and an ASCII chart of the VGA 9×16 font for the truly committed.

The craft is in the constraints. The same twelve moments in every version means you can see a palette change across a whole scene rather than in one screenshot, which is how you notice that the 16-colour PC version and the Amiga version are drawing different games. The sources are listed down to which regional copy each capture came from — Spanish for the PC 16-colour, French for the Atari ST mono.

There is no argument here and no need for one. It is the sort of thing the web was supposed to be full of, built by someone who cared about a 1990 adventure game more than anyone asked them to, and it drew 421 points on a day when the front page was otherwise about air traffic control and securities fraud.

## Terminal borders that don't cost a cell — 398 points

**398 points** · 177 comments · [joshka.net](https://www.joshka.net/cell-borders/) · [HN discussion](https://news.ycombinator.com/item?id=50491423)

The author maintains Ratatui, the Rust TUI library, and has a specific complaint: terminal UIs all look the same because borders cost a cell. The Unicode box-drawing block has 128 characters for lines, corners and joins and is still not enough to draw a box that sits on the boundary between rows rather than inside one, so every panel eats a row and a column of your layout, and after three nested panels the content is a keyhole.

The proposal is a terminal protocol that draws thin lines on cell edges instead — a patch to Ghostty, an earlier version in Rio, and demo apps in Ratatui. Tabs sit on the top edge of a pane, text fields are underlined under the text, buttons are one row tall and rounded, and none of it consumes layout. Where the protocol is not supported it falls back to box-drawing characters, which is the correct way to ship a terminal feature and the reason the demo runs everywhere.

The disclosure at the top is worth more than the usual hand-wringing: "This post (and the code behind it) was written with a lot of help from AI. I'm not going to apologize for that." That is the right posture, and the comment thread promptly demonstrates why the feature is needed — it splits between people who want the terminal to become a proper information-dense UI framework and people who think terminals are turning into lightweight browsers, which is the argument that has kept terminal UIs ugly for thirty years.

## Lovable's generated apps publish their databases to anyone who asks — 396 points

**396 points** · 133 comments · [crissyfield.de](https://www.crissyfield.de/research/lovable-en/) · [HN discussion](https://news.ycombinator.com/item?id=50499017)

A security researcher pulled 159,041 Lovable projects out of Common Crawl — everything built on the platform between December 2025 and September 2026 — and went looking for data anybody could read without logging in. Of those, 34,545 used Supabase, and 24,664 were already shipping Supabase records to the browser on page load. That part is not automatically a bug. Adding read-only requests on top of it was: email addresses turned up in 10,560 tables across 7,403 sites, about 30% of the sample. The researcher is careful about the limits — 30% is not a leak rate, Common Crawl is not a representative sample, and only parts of each dataset were retrieved — which is more discipline than this genre usually shows.

The specific cases are what make it concrete. A German lifestyle forum exposing more than 80,000 profiles with names, emails, dates of birth and gender, plus over 200,000 chat messages. Event organisers and restaurants exposing tens of thousands of ticket and food-sale records including payment information and ticket codes. A property management company exposing AI-generated summaries of internal emails about tenants and owners. A service provider exposing more than a thousand identity-document records with passport numbers, expiry dates and nationalities. Contracts, invoices, personal photo albums, internal WhatsApp threads, and in one case 280,000 emails sent to a provider's customers.

The mechanism is banal, which is the point. Lovable turns a prompt into a web app with a database and user management, and the security model of the generated app is whatever the model wrote and the user never reviewed — usually a Supabase table with row-level security off, because that is the default that makes the demo work. Lovable's terms put responsibility for the application and its data on the customer, which is legally coherent and practically absurd given that the product's pitch is that you do not need to know what you are doing. Handelsblatt, which published the German reporting on 2 November, took the findings to Lovable before publication. Nobody has found evidence of misuse, and the identity-document records were sitting there in exactly the form you would use for identity theft.

## ggml reaches 1.0 and stops pretending to be a library — 390 points

**390 points** · 66 comments · [github.com](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) · [HN discussion](https://news.ycombinator.com/item?id=50493062)

The 1.0 release is mostly a pruning: the deprecated public API is gone, the legacy `DIAG_MASK_INF`/`DIAG_MASK_ZERO` ops are removed, and the RPC protocol jumps to v9, which means it now rejects incompatible peers instead of misbehaving quietly. In a project that spent four years as llama.cpp's internal tensor library, an incompatible-protocol bump and an API cull are the actual news — 1.0 here means the surface is stable enough to break on purpose.

The performance work is broader than a point release usually carries. Few-row quantized matmuls and MoE fusion on both CUDA and Metal, a Vulkan prefill FlashAttention path, a device-side MoE scheduler on SYCL, decomposed FlashAttention for Adreno in OpenCL, new WebGPU kernels, wider Hexagon coverage, and a scheduler that stops uploading inputs nothing reads. FP8 support and configurable YaRN truncation round it out.

The strategic reading is that ggml has quietly become the portability layer for local inference — the thing that runs on a Snapdragon, an Adreno GPU, a Hexagon DSP, a WebGPU browser and a datacenter card from the same source tree. The comment thread is mostly people asking when their backend of choice gets the new kernels, which is the correct response to infrastructure that works: nobody thanks you, they just file the next bug.

## $11.4 million of Nvidia hardware left Oakland and did not arrive — 377 points

**377 points** · 208 comments · [freightwaves.com](https://www.freightwaves.com/news/11-4-million-in-nvidia-hardware-vanishes-during-shipment-from-california-to-texas) · [HN discussion](https://news.ycombinator.com/item?id=50487864)

A truck collected Nvidia computer hardware in Oakland on 29 August for delivery to Fort Worth. It made several stops of multiple hours, headed south, and investigators lost it in San Bernardino County. Oakland police confirmed a grand theft investigation following a complaint filed on 13 September. The vehicle was displaying a food transportation company's logo at pickup. Nobody has been arrested, no merchandise has been reported recovered, and Nvidia did not respond to FreightWaves.

The surrounding numbers are the story: roughly $111 million in stolen data-centre freight across other high-value technology shipments, a separate $12 million case in which suspects allegedly exploited established trucking identities to obtain freight, and more than $7.5 million of Nvidia product stolen in Fremont and Union City burglaries during 2025. Police have not confirmed the $11.4 million valuation or even what the merchandise was.

The gap between the value of the cargo and the security around it is the part that should bother the industry. A rack of accelerators is worth more per kilogram than almost anything else moving on American roads, it is identifiable, and it travels on the same open broker marketplace as patio furniture — where a convincing DOT number and a logo on the door are the entire authentication story. Commenters noted the obvious follow-on: if you cannot keep the hardware on the truck, the export-control regime is chasing the wrong end of the pipeline.

## The EFF says privacy stopped being a personal choice — 356 points

**356 points** · 142 comments · [eff.org](https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again) · [HN discussion](https://news.ycombinator.com/item?id=50496602)

Thorin Klosowski's argument is that the ambient-recording category — Meta and Google smart glasses, Apple's Watch transcription feature, Amazon's Bee pins — has broken the consent model that consumer privacy law is built on. When a device records everything its wearer sees and hears, the person whose consent matters is not the buyer. It is the stranger in the queue, the colleague in the meeting, the family at dinner, none of whom were asked and most of whom cannot tell whether the thing on the other person's face is recording.

Each vendor has a technical answer and each answer is about the buyer, not the bystander. Apple points at a white paper on the barriers between the company and the data. Meta points at privacy controls and at face-blurring in Meta AI interactions, while noting that standard recording is not blurred. Google and Amazon make versions of the same argument. The EFF's point is not that these controls are lies; it is that a control panel on someone else's device is not consent, and that requiring every person in a room to be a consumer-tech expert in order to know whether they are being recorded is a policy failure dressed as a feature.

The thread splits exactly as you would expect, between people who think this is the same argument as cameras on phones and people who think the difference is scale and normalisation. The stronger version is in the comments, not the post: the cost of opting out has moved from a setting you can change to a social confrontation you have to have, repeatedly, with strangers, in public. That is a different product than a camera, and the law has not caught up.

## FM-1 Workbench: a synth editor and firmware flasher in a browser tab — 265 points

**265 points** · 175 comments · [open.m-vave.com](https://open.m-vave.com/fm1-workbench) · [HN discussion](https://news.ycombinator.com/item?id=50488325)

M-VAVE's FM1 is an eight-track FM synthesizer with a sixty-four-step sequencer, and Workbench is a full editor for it that runs in the browser: eight tracks, sixty-four steps, six synthesis engines, thirty-two-preset banks, DX7 patch import and export, project files you can save locally or push to a device slot, MIDI in and out, and — the part that makes it unusual — firmware updating over USB-MIDI, including a forced-flash path for migrating between third-party firmware and a rollback to the factory V15 image that overwrites all four preset banks.

The interface is in Chinese and the page ships its own demo samples, which tells you what kind of project this is: something built by the instrument's own community, for a device that costs less than the software normally sold to edit it. WebMIDI means no installer, no driver, no Windows-only control panel from 2009, and the whole thing is one HTML file away from being archived.

That last property is the interesting one. Hardware vendors treat the editor application as a disposable accessory that dies with the OS version, which is why so much gear from the 2000s is uneditable today. A browser-based editor with firmware flashing is not more durable because the web is forever — it is more durable because the artifact is a document you can keep, and because the protocol it speaks is MIDI rather than a vendor's private DLL.

## Italy fines Meta €805 million for reading the camera roll — 255 points

**255 points** · 161 comments · [reuters.com](https://www.reuters.com/world/italy-fines-meta-887-million-over-android-users-data-access-2026-11-14/) · [HN discussion](https://news.ycombinator.com/item?id=50497009)

Italy's data protection authority fined Meta €805 million — about $887 million — on Saturday, finding that the company accessed Android users' photographs and videos without consent and without telling them. The feature in question suggested content from users' personal galleries for posting; the regulator gave Meta sixty days to turn it off by default and to seek consent separately. Meta had no immediate comment when Reuters filed, and Reuters' own site would not load for this piece, so the details here come from the wire copy syndicated elsewhere.

Two numbers make the fine legible. It is roughly 0.47% of Meta's global revenue, which is to say a rounding error against a business that treats regulatory cost as a line item, and it is nonetheless one of the largest GDPR fines on record — the enforcement regime has produced a decade of headlines and a handful of invoices that do not change behaviour. The regulator also explicitly did not examine whether the same data trained AI models, which Meta denied, so the most consequential question about a photo library in 2026 was left outside the scope.

The technical finding is the one to keep: the app read the gallery. Not "may have accessed with permission granted in a flow users did not read" — accessed photos and videos and did not inform them. Android's storage permissions have been progressively tightened for exactly this reason, and the interesting question is which API path got around it, which the ruling will eventually document and nobody will read.

## A protein that drives ageing without setting off inflammation — 248 points

**248 points** · 89 comments · [nature.com](https://www.nature.com/articles/d41586-026-03638-3) · [HN discussion](https://news.ycombinator.com/item?id=50488470)

Nature's research highlight on a paper identifying granzyme K as an enzyme that drives tissue ageing: aged mice engineered to lack it showed improved heart and liver function and less kidney damage, with the accompanying image showing reduced stiffening and scarring in liver tissue. The framing that matters is in the second sentence — drugs that lower this protein might combat some effects of ageing *without* impairing immune defences.

That qualifier is the whole point of the result. The senolytic approach has always run into the same wall: the mechanisms that clear damaged cells are the mechanisms that fight infection and cancer, so anything potent enough to matter tends to leave the patient immunologically worse off. A target that drives fibrosis and organ decline while sitting outside the inflammatory axis is, if it holds up, a much better drug target than another senolytic.

How much to trust it: this is a mouse knockout, the article is paywalled after four paragraphs, and the leap from "mice without the gene age better" to "an inhibitor will help people" contains the usual graveyard. The comment thread is mostly people correctly noting that ageing research has produced a long list of targets that worked in mice, and one comment that is more interesting — that granzyme K is expressed by cytotoxic cells and the immune consequence of blocking it long-term is exactly what the paper did not measure.

## Isometric SF: every tile painted by a model — 246 points

**246 points** · 74 comments · [isometricsf.com](https://isometricsf.com/) · [HN discussion](https://news.ycombinator.com/item?id=50487228)

A zoomable, searchable isometric map of the San Francisco Bay Area from the Golden Gate to San Jose, in which every tile was painted by an AI model from Google Maps' photorealistic 3D captures. Twenty-five places are indexed — Alcatraz, the Painted Ladies, Coit Tower, Bay Bridge, Apple Park — and the underlying data is OpenStreetMap with ESA WorldCover land cover and Copernicus elevation.

The licence is the detail people should read before admiring it: tiles are CC BY-NC 4.0 by Justin Chavez, free to reuse non-commercially with credit, commercial use by arrangement — while the imagery derives from Google's 3D tiles, whose terms are considerably less permissive than the map's own licence implies. Derivative works built on licensed captures always have this problem, and the honest reading is that this is a portfolio piece with a licence notice, not a dataset.

Aesthetically it lands because the model was asked for a style rather than a photograph. Isometric city maps are a solved genre — SimCity, the Valencia map that was on this page two days ago — and the interesting thing about this one is that the human effort went into tiling, indexing and licensing rather than into drawing, which is what the current generation of tooling is actually good at.

## Unsloth claims 5–10% more accuracy from the same quant — 236 points

**236 points** · 76 comments · [unsloth.ai](https://unsloth.ai/docs/models/qwen3.8) · [HN discussion](https://news.ycombinator.com/item?id=50491980)

Qwen3.8-27B is a dense 27B model with vision and reasoning, a 256K context window, and a stated floor of 17GB of RAM or VRAM. Unsloth's update is about the quantisation recipe rather than the model: Dynamic V3.1, released 11 November, claims 5–10% average accuracy improvement over the previous dynamic quants *at the same size*, across most of the 2-bit to 6-bit range.

The methodology is at least stated, which is more than most quant vendors manage: Terminal-Bench 2.1, DeepSWE v1.1, LiveCodeBench v6, GPQA Diamond, MMLU-Pro and AIME25, with 256K context for the agentic benchmarks and 128K for the rest. The team also says 3-bit UD3 already matched V3.1 so it was left alone, which is a small but real signal that the numbers are measurements rather than a marketing deck.

The skepticism that applies: "5–10% at comparable size" is an average across a benchmark suite run by the party selling the quants, and the variance between tasks is where the real answer lives — a coding agent that gains 8% on Terminal-Bench and loses 3% on tool-call format would be a regression in practice. Nobody outside Unsloth has reproduced V3.1 yet, and the version number has "preview" in it. If it holds, though, this is the least glamorous kind of progress in AI: the same model, on the same hardware, doing more, from better arithmetic in the quantiser.

## Haskell's new technical leadership wants two-hour CI and a debugger — 224 points

**224 points** · 151 comments · [discourse.haskell.org](https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078) · [HN discussion](https://news.ycombinator.com/item?id=50484235)

The Haskell Foundation's technical leadership committee has finished bootstrapping and published a vision document, and it is unusual for how openly it is about engineering ergonomics rather than language theory. The concrete targets: GHC's own CI turnaround is six hours and should come down to two; debugging and profiling should mean live step-through, usable stack traces and readable performance reports instead of littering the codebase with `Debug.Trace.trace`; onboarding should be good enough that the installer feels like it did not run.

The framing for AI is the sharpest thing in the document. Rather than pitching Haskell as a language to generate code *in*, the committee pitches it as the language to review code *in* — referential transparency and cheap eDSLs make it easy to express constraints, so generated code can be boxed in by types before anyone reads it. "There may be better languages for formal verification or for vibecoding, but there's no better language for human in the loop," they write, and "instead of helplessly dumping logs and binaries into LLM chats," they want deterministic tools that an agent can drive without a bespoke MCP adapter.

There is a stability goal in there too — compiling ten-year-old Haskell with the latest GHC, unchanged — which would be a bigger deal for adoption than any of the tooling. The thread is 151 comments of cautious enthusiasm, which for Haskell is a standing ovation. The risk is the usual one: a vision document with six workstreams, a foundation that needs companies to fund them, and a community where the people who could implement the debugger are the same people who are already maintaining everything else.

## What happened to 3Com — 198 points

**198 points** · 118 comments · [dfarq.homeip.net](https://dfarq.homeip.net/what-happened-to-3com/) · [HN discussion](https://news.ycombinator.com/item?id=50491830)

3Com was founded in 1979 by Bob Metcalfe, who co-invented Ethernet, and was a $5.8 billion company at the dotcom peak. It made network cards that IT departments paid a premium for because the drivers worked — the 3C501 is the notorious exception, the 3C509 is the one everyone remembers — and it made them in the United States, which was already unusual in the 1990s. It ceased to exist on 11 November 2009, having spent the previous decade being undercut by NE2000 clones.

Dave Farquhar's post is a good piece of corporate archaeology, and the reason it got 118 comments is that it describes a specific way companies die: not through a single catastrophic decision but through margin erosion that everyone can see and nobody can price. The shop rule in the comments — three approved brands, Cisco, Intel and 3Com, and if you plugged in a no-name card and had problems, IT replaced it and billed your department — is the entire value proposition of a commodity hardware company, stated as policy.

The detail that resonates in 2026 is the vertical integration. 3Com bought US Robotics, which meant modems and Palm, and then spent the rest of its life deciding what it was. Commenters draw the obvious parallel to every company currently buying its way into AI: owning the layer below you is a strategy until it is a distraction, and the market reprices you long before the strategy fails visibly.

## Google will take Search away before it gives schools an AI switch — 191 points

**191 points** · 187 comments · [npr.org](https://text.npr.org/nx-s1-6029408) · [HN discussion](https://news.ycombinator.com/item?id=50484960)

Google announced this month that schools can turn off AI features for students — but if they do not want AI Overviews appearing in Search, they lose Google Search entirely. Los Angeles Unified, Seattle and New York City have all recently agreed to classroom AI bans; the districts that want the AI off now have to choose between an AI-free classroom and a search engine their teachers depend on. New York's mayor called it monopoly power used to force AI into public schools. Senator Markey wrote to Google's CEO asking for a reversal.

The explanation that makes sense of the policy comes from a former Google education employee in NPR's piece, and it is worth following: Google was sued by publishers who argued that AI Overviews was a separate product bolted onto Search to their detriment. The cases were dismissed because the judge found Search and AI Overviews to be an integrated product. An off switch that schools can flip is evidence that they *can* be separated — and would undermine the finding Google just won on.

If that is the reasoning, the company's own antitrust defence now constrains its product policy, which is a remarkable position to be in and an argument for why "integrated product" claims should be tested at the product level rather than the courtroom level. NPR asked Google whether the two were connected; Google pointed at its announcement and declined to answer further, which is not a denial. The thread is mostly parents and teachers describing what the AI summary does to a classroom's reading habits, and the most useful comment is from a teacher who says the search results were already unusable before the AI was added, so the loss is smaller than it sounds.

## Elephants are losing their networks — 179 points

**179 points** · 41 comments · [today.ucsd.edu](https://today.ucsd.edu/story/elephants-found-to-be-increasingly-isolated-leading-to-fractured-social-networks) · [HN discussion](https://news.ycombinator.com/item?id=50492860)

A UCSD team tracked the social dynamics of more than 400 Asian elephants at Udawalawe National Park in Sri Lanka for over a decade and found that as the population declined, the community structure fractured: fewer, smaller, more isolated groups, with measurable social "tipping points" past which the network does not recover. The study is on the cover of the 12 November issue of Science.

The mechanism is worth stating plainly, because "social network" sounds like a metaphor and is not. Elephants transfer knowledge — where the water is, which routes are safe, who the matriarchs are — through long-lived relationships, and a population that loses its older females loses the map. Below a certain density the groups stop overlapping, the transmission paths close, and the remaining animals are behaviourally poorer even where the habitat is fine.

It is the same structural argument made about every social species, including ours, and it is one of the few places where a conservation number and a mechanism line up: the thing you are trying to save is not a count, it is a graph, and the graph degrades before the count does.

## OpenAI folded its robotics team into the main model — 174 points

**174 points** · 73 comments · [fortune.com](https://fortune.com/2026/11/13/openai-disbands-robotics-team-as-its-general-models-start-running-robots/) · [HN discussion](https://news.ycombinator.com/item?id=50487184)

OpenAI has disbanded its stand-alone robotics team and reassigned the people: the robotics research group now reports to chief research officer Mark Chen inside the main research organisation, while the applied robotics and hardware teams moved to the Applied group under Greg Brockman. A spokesperson framed it as a way to accelerate robotics rather than abandon it, which is what every company says when it dissolves a team. The timing detail that makes it real: OpenAI had already booked a booth at CoRL, the academic robotics conference.

The strategic claim is coherent. If general-purpose models can drive manipulators, a separate robotics division is an organisational artefact rather than a technical necessity, and it is better to have the people who train the model sitting next to the people who need it. The sceptical reading is that hardware timelines are long, capital is expensive, and the fastest way to show progress on "robotics" in a fundraising deck is to say the general model does it.

Either way this is the third story this week in which a company reorganises around the assumption that a general model absorbs a specialism — Gemini's Orchestrator handing model choice to a model, Apple shipping Foundation Models as the neutral router, and now robotics as a feature of the research org. The specialisms are not disappearing; they are being folded into the model's evaluation suite, where they get attention when they score badly and silence otherwise.

## A music player written through an internet blackout — 170 points

**170 points** · 82 comments · [alichraghi.github.io](https://alichraghi.github.io/blog/how-not-to-build-a-music-player/) · [HN discussion](https://news.ycombinator.com/item?id=50491400)

Ali Cheraghi's post opens with the Twelve-Day War, which convinced him that streaming music is not a plan for anyone living under a government that cuts the internet to silence dissent. When the connection came back he archived tracks, tried Strawberry, and was annoyed enough by unsynchronised lyrics and visible timestamps to write his own player in Zig — minimal features, no C++ dependencies, native system integration, homemade UI including the shaders. Then the blackout came back and lasted more than four months.

The middle section is the best writing on the front page today. Internet access became a black market sold through Telegram via white SIMs and whitelisted servers at five dollars a gigabyte, and he spent hundreds of dollars to keep his social life and his hobby alive, downloading repositories and documentation over a connection too slow to waste. He kept building the player because it was the thing that still worked.

Then the ending, which is the part people will argue about: with the connection restored, he had a Claude Max subscription going unused, tried it on the player, found he could not hit the usage limits, and vibecoded a good chunk of it in a few days. He says plainly he thought that was fine for a hobby project, and the post is titled "How Not to Build a Music Player" for a reason. The honest reading is not that AI wrote his app — it is that the hard part of the project was deciding what it should be, and the two years he spent inside that decision are not visible in the commit that finished it.

## Also new, below the sections

- **[KDE: The documentary](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c)** ([297 points](https://news.ycombinator.com/item?id=50496976), 63 comments) — "The Story of Free Software Underdogs" on PeerTube. The link returns a browser-compatibility notice to anything without a video stack, which for a film about software freedom is at least thematically consistent.
- **[Live airband on all frequencies from KORS](https://orcasairband.com/)** ([291 points](https://news.ycombinator.com/item?id=50490593), 67 comments) — A live aviation radio feed from the San Juan Islands, with an automatically compiled traffic board and an explicit "not for navigation" warning. On the day the national airspace system lost confidence in its own feeds, listening to the analogue backup was the front page's best joke.
- **[All US airports are currently ground stopped](https://twitter.com/flightradar24/status/2121347654714077605)** ([210 points](https://news.ycombinator.com/item?id=50489652), 42 comments) — Flightradar24's post at the moment the FAA order went out: no departures, aircraft already airborne cleared to land, attributed to an FAA equipment outage.
- **[Show HN: Live map of U.S. flights during the ground stop](https://grounds.top/)** ([206 points](https://news.ycombinator.com/item?id=50491545), 26 comments) — Departures over the last thirty minutes plotted against the same window a week earlier, with a replay of the shutdown. Built the same evening, which is what Show HN is for.
- **[Minnesota guitarist's "palmfrets" invention](https://www.echopress.com/business/minnesota-guitarists-invention-strikes-a-new-chord)** ([195 points](https://news.ycombinator.com/item?id=50484650), 109 comments) — Ben Ranson spent five years building a set of frets and a technique for playing bass lines and melodies with the palm, after earlier experiments with organ-style foot pedals and a seven-string. He unveiled it at a gig in Fergus Falls on 28 October.
- **[Amtrak's booking system fell over during the ground stop](https://www.fox5dc.com/news/amtrak-outage-ticket-booking-faa-ground-stop-november-13-2026)** ([191 points](https://news.ycombinator.com/item?id=50492315), 75 comments) — The national passenger rail operator's booking site failed the same evening, when a few hundred thousand people started looking for alternatives to flying. Whether it was causally related or merely simultaneous is the sort of question every incident review should ask and few answer.
- **[Microsoft outage gives customers a crash course in dependence](https://www.theregister.com/saas/2026/11/13/microsoft-outage-gives-customers-a-crash-course-in-dependence-on-redmond/5309805)** ([182 points](https://news.ycombinator.com/item?id=50487688), 61 comments) — The Register's day-two piece on the Exchange Online failure, focused on the organisations that discovered they had no fallback because everything they run authenticates through the same tenant.
- **[PyPI's redesigned project pages are live](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/)** ([159 points](https://news.ycombinator.com/item?id=50497892), 64 comments) — A dedicated security tab with provenance states — full, none, and four warning conditions including change of provenance and loss of provenance — plus a cleaner release history. The state that matters is "loss of provenance," because it is the one that names an attack.
- **[Lonewolf 0.3, an XMPP server in Rust](https://github.com/lonewolf-im/lonewolf/releases/tag/v0.3.0)** ([155 points](https://news.ycombinator.com/item?id=50484007), 53 comments) — A standalone XMPP server, which is a category that had almost stopped receiving new entries.
- **[The dawn of the Data Intelligence Engineer](https://motherduck.com/blog/the-data-intelligence-engineer/)** ([153 points](https://news.ycombinator.com/item?id=50480480), 78 comments) — Jordan Tigani on a role that sits between analytics engineering and agent operations: the person who owns the semantic layer because the agents query it directly now.

## Still on the page

Sixty-six stories on today's page have been reported here before, including twenty-four that had already dropped out of the ranked window and were re-checked by URL against the Algolia index rather than guessed at. Points are not monotonic — HN applies penalties — but nothing in this table went backwards, which is the assertion that catches a wrong match.

| Story | Nov 13 | Nov 14 |
|---|---|---|
| [Jensen Huang resigns](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 3,991 (11-13) | 4,041 (+50) |
| [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,422 (11-13) | 1,432 (+10) |
| [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com) | 1,274 (11-13) | 1,284 (+10) |
| [Nvidia is preparing to oust Jensen Huang](https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad) | 1,220 (11-13) | 1,224 (+4) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 1,194 (11-13) | 1,197 (+3) |
| [Service degradation on Microsoft 365](https://status.cloud.microsoft/) | 1,145 (11-13) | 1,170 (+25) |
| [My AI agents found an unmapped Maya site?](https://pietromiotti.com/latest/maya-site) | 1,033 (11-13) | 1,035 (+2) |
| [Anthropic IPO](https://ipo.anthropic.com/us/) | 988 (11-13) | 1,001 (+13) |
| [AWS emulator](https://github.com/aws/aws-emulator) | 982 (11-13) | 987 (+5) |
| [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) | 935 (11-13) | 936 (+1) |
| [LibreOffice actually works 365 days a year](https://twitter.com/LibreOffice/status/2121205272479998268) | 695 (11-13) | 924 (+229) |
| [Rust 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 866 (11-13) | 890 (+24) |
| [Nvidia employees petition to bring back Jensen Huang](https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/) | 777 (11-13) | 812 (+35) |
| [Reverse engineering my Coway air purifier to ditch the cloud](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 604 (11-13) | 780 (+176) |
| [USPS now offers official ZIP Code boundary polygons](https://postalpro.usps.com/zcb) | 732 (11-13) | 736 (+4) |
| [Show HN: My $300 embroidery machine needed a subscription, so I built my own app](https://github.com/simpsoka/zigzag) | 713 (11-13) | 735 (+22) |
| [Amazon saves millions by replacing Sonnet 4.6 with Strands Decider](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 727 (11-13) | 731 (+4) |
| [Socratic Tutor](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) | 694 (11-13) | 708 (+14) |
| [United Airlines bans AI agents from booking flights on behalf of travelers](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/) | 677 (11-13) | 680 (+3) |
| [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 677 (11-13) | 678 (+1) |
| [A false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 583 (11-13) | 587 (+4) |
| [93% of paint splatters are valid Perl programs (2019)](https://www.mcmillen.dev/sigbovik/) | 581 (11-13) | 585 (+4) |
| [Apple has new Mac app coming to make running local AI models easy](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 563 (11-13) | 569 (+6) |
| [Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 555 (11-13) | 568 (+13) |
| [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) | 565 (11-13) | 568 (+3) |
| [Scion is back and is going to sell a kei truck in America](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 561 (11-13) | 562 (+1) |
| [Gemini 4 Hydrogen and Orchestrator](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) | 491 (11-13) | 501 (+10) |
| [Elevated errors on claude.ai, Claude Code, and platform.claude.com](https://status.claude.com/incidents/nn11wk485zfn) | 473 (11-13) | 493 (+20) |
| [Doomsday: Friday, 13 November, A.D. 2026 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291) | 398 (11-13) | 487 (+89) |
| [I'm making LLMs work on small and old devices](https://github.com/hyperionaidev/smolmaxxing/) | 463 (11-13) | 478 (+15) |
| [Tracking Anthropic-discovered vulnerabilities](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) | 459 (11-13) | 460 (+1) |
| [Former Nvidia CEO Huang had a relationship with a second employee](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) | 443 (11-13) | 457 (+14) |
| [Hyper-realistic sand with WebGL2](https://av.github.io/safe-sand/) | 444 (11-13) | 445 (+1) |
| [AI unlocks Gödel's notebooks, said to contain hundreds of proved theorems](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) | 238 (11-13) | 417 (+179) |
| ["Humble Bundle just killed most of their security through vibecoding"](https://forums.spacebattles.com/threads/humble-bundle-just-completely-killed-most-of-their-security-through-vibecoding.1346295/) | 400 (11-13) | 406 (+6) |
| [Protecting SSH Keys with macOS Secure Enclave](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/) | 401 (11-13) | 402 (+1) |
| [Dwarf planet candidate appears which takes roughly 280 years to orbit our sun](https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/) | 386 (11-13) | 393 (+7) |
| [It Takes 16 Clicks for a Student to Open a PowerPoint on an iPad](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/) | 156 (11-13) | 382 (+226) |
| [A live tree of systemd jobs on the boot console](https://codeberg.org/wvhulle/bootvine) | 371 (11-13) | 375 (+4) |
| [Writing correct software is hard and math alone won’t help us (2016)](https://pron.github.io/posts/correctness-and-complexity) | 365 (11-13) | 374 (+9) |
| [IceWM](https://ice-wm.org/) | 350 (11-13) | 371 (+21) |
| [Chinese frontier AI models carry the fingerprint of export-controlled GPUs](https://unemploymentlabs.com/checkpoint-forensics) | 352 (11-13) | 371 (+19) |
| [Critical RCE Vulnerability in Apache HTTP Server](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) | 367 (11-13) | 369 (+2) |
| [AI is destroying the trust between writers and readers](https://www.theatlantic.com/books/2026/11/ai-literary-scams-amazon/689391/) | 289 (11-13) | 362 (+73) |
| [Using voltage glitching to unleash the A100 in my mining card](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/) | 343 (11-13) | 353 (+10) |
| [Edge0-145B: Frontier AI Capabilities on Your Own Computer](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer) | 333 (11-13) | 350 (+17) |
| [Lock Your GitHub Actions](https://hugovk.dev/blog/2026/lock-github-actions/) | 333 (11-13) | 336 (+3) |
| [Nintendo Takes Down Emulators and Firmware in Massive GitHub DMCA Sweep](https://www.ign.com/articles/nintendo-takes-down-switch-emulators-and-mod-chip-firmware-in-massive-github-dmca-sweep) | 317 (11-13) | 321 (+4) |
| [Abandoned Quake 4 expansion finished by modders and now playable](https://www.moddb.com/mods/openq4/downloads/openq4-0141-windows-x64) | 305 (11-13) | 308 (+3) |
| [Show HN: Yogurt – Free, private, open-source alternative to Granola](https://github.com/FrigadeHQ/yogurt) | 296 (11-13) | 303 (+7) |
| [Claude Whiteboards, Claude Sheets, and Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) | 296 (11-13) | 297 (+1) |
| [After 600 experiments, here's what I discovered about JEPA world models](https://haddyalchaer.com/jepa) | 153 (11-13) | 285 (+132) |
| [What constant surveillance is doing to children and parents](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 279 (11-13) | 281 (+2) |
| [AMD's Zen 6 Family: Feeding the Beast](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 273 (11-13) | 274 (+1) |
| [Foundation Models framework](https://developer.apple.com/foundation-models-framework/) | 262 (11-13) | 267 (+5) |
| [Our software engineering interviews are changing a little](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) | 249 (11-13) | 261 (+12) |
| [Brave Search API now accepts agentic payments via the x402 protocol](https://brave.com/blog/search-api-agentic-payments/) | 254 (11-13) | 260 (+6) |
| [Show HN: I recreated Papers Please but you're deciding which YC startups to fund](https://termsheetplease.com/) | 241 (11-13) | 244 (+3) |
| [Faster Retrieval for Better, More Efficient RAG](https://machinelearning.apple.com/research/faster-retrieval) | 237 (11-13) | 240 (+3) |
| [Atuin Threads: All your agent sessions on every machine](https://blog.atuin.sh/threads-agent-sessions/) | 235 (11-13) | 237 (+2) |
| [We need more goat sacrifices](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) | 221 (11-13) | 225 (+4) |
| [The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough) | 214 (11-13) | 214 (0) |
| [Relax: JIT compiler for Rust to reduce build times](https://makepad.github.io/relax/) | 176 (11-13) | 179 (+3) |
| [Making a €40 USB-C hub work as a Nintendo Switch 2 dock](http://blog.nozomi.space/posts/sw2_dock/) | 169 (11-13) | 172 (+3) |
| [Brazil's Caixa insurer breach exposes names and tax IDs of all 7.6M customers](https://filemanager-cdn.mziq.com/published/3972906b-e50b-4f74-ab74-4d0d32125d11/9567a559-d20a-486e-a7ae-5c6bbc030c5e) | 156 (11-13) | 166 (+10) |
| [Libreagi – Save OSS Models](https://libreagi.com/) | 153 (11-13) | 155 (+2) |


## Throughline

**Everything that broke today broke because something old was made to carry something new.** The FAA stopped the country's departures because a router sent more data than ageing air traffic control equipment could absorb; if the DHS account is right, the new equipment was the thing that overloaded the old. Amtrak's booking system fell over the same evening. Microsoft's 365 status page was still climbing the front page two days after the failure began. Lovable's generated applications were serving database records to anyone who loaded the page — 24,664 of them, in the sample one researcher crawled — and about a third of those handed over email addresses to a read-only request, which is what happens when you hand a new capability to a user who was promised they would not need to understand it. Google's school policy, if the antitrust reading is right, is a product decision being made by a legal strategy. None of these are failures of new technology. They are failures of the load-bearing old thing underneath it: a telecom network, a booking system, a consent model, a courtroom finding.

**The AI money story has turned into a corporate-governance story, and the governance is losing.** Nvidia is alleged to have financed its own customers to keep demand looking organic while its CFO argued the customers could not pay, and the reporting that broke it was about a CEO insulting his successor rather than about the accounts. OpenAI dissolved a robotics division and called it acceleration. Unsloth shipped a quantiser improvement and had to caveat it with "preview". Haskell's foundation published a plan to make the language reviewable-by-humans in an AI workflow, which is the most interesting strategic bet on the page: not that models write the code, but that the language which makes generated code checkable wins. Meanwhile the physical layer is being stolen off trucks at eleven million dollars a shipment, which is a market telling you where the scarcity actually is.

**And the counter-programming was all small software that works.** ggml hit 1.0 by deleting API instead of adding it. A Ratatui maintainer proposed a terminal protocol and shipped the fallback first. Someone put a synth's entire editor and firmware flasher in a browser tab. A man built an isometric San Francisco out of painted tiles. Thirteen versions of Monkey Island, frame-locked, for no reason except that it should exist. A music player written during four months without internet, finished with an LLM, by an author honest enough to title the post about how not to do it. The front page's biggest new story was a router, and its best stories were people replacing the things routers break.
