---
title: "Hacker News Front Page Roundup — November 10, 2026"
pubDate: 2026-11-10
description: "Forty-four stories cleared 200 points and twenty-four are new. Google ships a frontier model and a formal verification of Signal's crypto on the same morning, Anthropic's best model is also its slowest and most expensive, and the USPS puts a price list on ZIP Code boundaries."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Forty-four stories cleared the 200-point threshold in this afternoon's scan of the top 170 ranked submissions. Twenty-four are new. Twenty are repeats, and the biggest of them is not AI at all: a paper-airplane site went 706 → 1,173 overnight, which is what happens when a link gets shared into a school-age group chat.

The new material has three centres of gravity.

Google had a morning. AlphaProof Code formally verified the actual compiled code of the Signal protocol in four weeks — the first time anyone has done that at this depth, with or without AI — and Gemini 4 Carbon went generally available a few hours later. The same model appears in both announcements, which is either a coincidence of scheduling or the most efficient marketing Google has done all year.

Anthropic's week is still being argued about. Fable 5.2 is now the highest-scoring model on Artificial Analysis' intelligence index and last or near-last on speed, cost and verbosity — the number one ranking and the number 71 ranking are the same measurement. Meanwhile a blogger used it to finish his nephew's beat-'em-up design document in one night, and 419 people showed up to argue about what that means for their kids.

The third is a privacy story with a paper trail. A GitHub README documents Google routing personal Drive files and Gmail into human review, and unlike most of these it does not rest on an experiment — it rests on Google's own help page, which says so in a sentence.

## The USPS is selling ZIP Code polygons now — 716 points

**716 points** · 381 comments · [postalpro.usps.com](https://postalpro.usps.com/zcb) · [HN discussion](https://news.ycombinator.com/item?id=50431058)

The headline reads like a data release. It's a product page. USPS ZIP Code Boundaries is a commercial dataset built from "USPS delivery address and location information," sold in three tiers — Internal, Enterprise and Publication — each with four quarterly updates, and each gated behind a licence agreement and an order form. The page's "featured resources" are a briefing sheet, a technical guide, a sample file, a GeoJSON sample, the licence and the form. There is no download.

The price is the story, and it took the comments about ninety seconds to produce it: ten thousand dollars for the lowest tier. The Census Bureau publishes ZCTAs — ZIP Code Tabulation Areas — for free, and they are close enough for most mapping work provided you accept fuzziness and the occasional missing code. That has been the workaround for twenty years, which is presumably why the paid product's pitch leans on being the ground truth rather than being usable.

The more interesting objection is philosophical, and one commenter makes it properly: ZIP codes are not areas. They're routes. A ZIP Code is a label for a postal delivery route, and the post office assigns it when it decides who delivers your mail — which means a new subdivision in the middle of nowhere gets a ZIP code by administrative decision, not by geometry. A polygon implies a determinism that has never existed in the system it claims to describe. That is not a reason the dataset is worthless; delivery-route groupings genuinely are useful for routing and for insurance and for real-estate marketing. It is a reason "official boundary" is a marketing term.

Federal data being resold at five figures is the part that deserves the anger, and the thread has plenty. Nobody is arguing USPS should run a free API for enterprise users. The argument is that ZIP Code geography is public infrastructure that private companies have been selling re-drawings of for decades, the government noticed, and the response was to enter the market with a licence instead of publishing the source. Accountability data is not supposed to have a price list.

## Gemini routes your personal Drive files and email to human reviewers — 706 points

**706 points** · 146 comments · [github.com/thisisme6598](https://github.com/thisisme6598/gemini_files/) · [HN discussion](https://news.ycombinator.com/item?id=50429426)

The claim, stated plainly: in 2023 Google promised that personal content from Gmail, Docs and Drive connected to Gemini "is not seen by human reviewers." That promise has been withdrawn. The current [Gemini Apps help page](https://support.google.com/gemini/answer/16836988) describes connected Workspace data being routed into review pipelines, and warns that what a reviewer sees "may just be the email or file," with the advice: don't connect your apps to Gemini Apps if they contain confidential information you wouldn't want a reviewer to see. The author also points at an edit made to the original 2023 blog post on 16 October of this year.

That is the load-bearing evidence, and it is Google's own text. The surrounding experiment — turn on Connected Apps, set the model to a thinking Flash variant, mention a topic that exists in your Drive, see what gets pulled — is interesting but much weaker than the framing suggests. The writeup lists four possible outcomes per query: no retrieval, a generic summary, a partial unredacted quote, or full-file ingestion. Because retrieval is probabilistic, it instructs you to delete the conversation and try again if you don't see the bad outcome. That is not a measurement, and the four states are exactly what ordinary retrieval-augmented lookup looks like from the outside. You cannot distinguish "Google is harvesting my files" from "a RAG system retrieved the wrong chunk" by asking one question repeatedly.

The README has been edited since it hit the front page — there's now a clarification at the top limiting the scope to consumer accounts, noting that Workspace Business, Enterprise and Education sit under DPAs that exclude human review and training by default. That's correct, and a poster in the thread confirms it with the Workspace knowledge-base link. It also sharpens the point rather than softening it: the consumer product is the one where the trade is worst, because the person clicking "connect Drive" is not the person who can negotiate a DPA.

Two things in the thread are worth keeping. One commenter notes that Google Photos data is separately documented as used to infer your interests, your relationships to people in your photos, and where you've been — which is a different pipeline with a different policy and the same answer. Another points out the practical consequence, which is that anyone who reads these pages carefully now avoids connecting consumer Google accounts to anything agentic, because the failure mode of a misread request is losing the account, not losing a query.

The honest summary: Google did not hide this. It is in a help answer, it is in a blog edit, and it is in language a lawyer approved. It is also in the one place nobody reads, describing the one thing people assume the most strongly in the other direction. That is how these changes always ship.

## Amazon replaced Sonnet with a 4B decision model and cut the bill 98% — 668 points

**668 points** · 233 comments · [strandsagents.com](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) · [HN discussion](https://news.ycombinator.com/item?id=50436640)

Two Amazon engineers took the company's internal ticketing system — customer escalations, capacity requests, automated alarms, security findings, all sorted into twenty categories — off Claude Sonnet 4.6 and onto Strands Decider, a small decision model that returns a probability per option plus a confidence score instead of generating text.

The numbers are the most concrete thing on the front page today. Per call: 4,215 ms → 897 ms. Tokens per ticket: 6,724 → 2,010. Cost per ticket: $0.0222 → about $0.0005, or $22,200 → about $500 per million tickets. Lambda execution duration dropped 74% the day they turned the Sonnet path off. The model runs on a SageMaker `ml.g5.xlarge` — one A10G, 24 GB — using 19 GiB at about 640 ms per request, and one instance covers roughly 5,600 tickets an hour.

Two engineering details are better than the headline. The first is the migration switch: an AppConfig key read per message that can be `BEDROCK`, `DUAL` or `DECIDER`. In dual mode both models label every ticket, the old one's answer is applied, and the disagreements are queued for a human. That is how you replace a classifier in production, and it is a 45-second rollback. The second is a finding that should be printed and taped to every ML engineer's monitor: reordering the JSON keys in the same request moved the output probabilities by up to 0.19. They now sort keys on every request. If your comparison runs didn't, your comparison was noise.

What's missing is the number the whole post is named after. "Performed just as well" appears exactly once, attached to "on a separate set of our tickets," with no accuracy figure, no confusion matrix, no error analysis, and no discussion of what happens on the tail — the long, weird tickets where the labels are ambiguous. For a 4B model versus Sonnet, that missing table is the entire result. The 98% cost cut is arithmetic; the equivalence is the claim.

It's also worth saying that this is a vendor blog for a product launched a month ago, and that the technique is older than the hype. One commenter shipped an SVM ticket classifier six years ago that trained in minutes and classified in milliseconds and asks, reasonably, why the industry took a four-year detour through frontier models to get back here. The answer is that "just use a small model" was bad advice when small models were bad. The news is that a 4B model now matches Sonnet on a closed twenty-way classification — and that's the one thing the post declines to prove.

## AlphaProof Code formally verified Signal's actual crypto — 530 points

**530 points** · 168 comments · [deepmind.google](https://deepmind.google/blog/introducing-alphaproof-code/) · [HN discussion](https://news.ycombinator.com/item?id=50439193)

Google DeepMind says its agents proved key security properties of the compiled code underlying the Signal protocol — not the design, the code — in four weeks, generating over six million lines of Lean. It's the first formal verification of a widely deployed protocol implementation at this depth, by any method.

The division of labour is the part to read carefully. Human experts, working with a mix of models, decided what to prove: they translated Signal's security goals into Lean specifications and reviewed every one. Agents powered by Gemini 4 Carbon then did the proofs, ran an audit pass, and flagged one percent of the codebase for human review. Lean checks the rest mechanically. To validate that the framework can tell correct code from buggy code, the team reinserted two real, previously fixed vulnerabilities into an isolated copy; in both cases the system produced a machine-checked proof that the buggy version was insecure.

That last experiment is what makes the result credible, and it is also what exposes the limit. The framework verified that the implementation matches a specification that humans wrote and approved. It cannot tell you the specification is the right one, or complete, or that "messages stay protected before and after a device is temporarily compromised" covers the attack you care about. The top comment in the thread makes the adjacent objection sharper: they verified a heavily scrutinised library and found zero bugs — either the theorems are narrower than the press release implies, or that's a surprising outcome for code of that age. The answer is probably the first, and DeepMind's own framing ("the security properties our experts specified") says so if you read it twice.

There's a second thread of scepticism, from people who actually write Lean with models: an agent writing both the theorem and the proof can cheat, and the mitigation is an adversarial reviewer model whose job is to attack the Lean. DeepMind's gatekeeper architecture — untrusted prover team, trusted checker — addresses the mechanical half of that and not the social half.

The prize is real regardless. Real-world vulnerabilities cluster in the gap between the design everyone reviewed and the code that actually shipped, and every previous verification effort stopped at the design because closing that gap meant years of expert time. Four weeks and six million lines of machine-checked Lean is a different production function. If it holds up — and the artifacts are open-sourced, so it can be checked — then "was this code formally verified" stops being a question only for microkernels and smart-card firmware.

## e-means does k-means in one-tenth the epochs — 492 points

**492 points** · 77 comments · [e-means.github.io](https://e-means.github.io/) · [HN discussion](https://news.ycombinator.com/item?id=50429734)

The pitch: k-means is one of the last problems in machine learning where everyone still runs full-batch optimisation, the standard mini-batch variants all descend from a rule published in 1967, and modern deep-learning optimisation has tools those variants never got. So the authors built a mini-batch k-means with exponential moving average updates, automatic batch and step sizes derived from scaling laws in log n, log k and log T, a better initialisation, dead-cluster revival, cosine decay and a finalisation stage.

The claims: test loss below Lloyd's 25-epoch result, reached in 1.2 to 3 epochs. End to end that's 10–45× wall-clock reduction on GPU against Flash-KMeans, the current state of the art, and 8–15× on CPU against Faiss. The demo on the page is a nice piece of communication — 100,000 points in 200 clusters, where Lloyd gets one centroid update against ninety-seven for e-means, and you watch it converge in the animation.

Whether the baselines are the right ones is the question, and the thread has the person to ask. The author of the SMILE library points out that Lloyd hasn't been the fastest k-means for a long time, and that his own BBD-tree implementation is often ten times faster than Lloyd — so "10–45× faster than SOTA Lloyd" may be a comparison against a strawman chosen because it's the one everybody recognises. That's a fair objection and it isn't answered on the page.

What is impressive is what happened within hours of the post going up. Someone ported the CPU version from Faiss to Rust and published it as both a crate and a PyPI package. Someone else wired it into a Java library. A third adapted it to their IVF index and measured a 146× speedup on GPU. That is the strongest evidence a paper page can get: not the benchmark, but strangers reimplementing it and getting results. The dissent is also useful — one commenter tried swapping it into a mesh-relaxation loop on a sphere and reports it was "definitely not better," which is what you'd expect when the update rule is tuned for static point clouds.

## Verisign backed down on 22,000 .name domains — 494 points

**494 points** · 99 comments · [neil.fraser.name](https://neil.fraser.name/news/2026/11/10/) · [HN discussion](https://news.ycombinator.com/item?id=50442736)

Neil Fraser's website is `neil.fraser.name`, a third-level `.name` domain. In September Verisign announced it was terminating the third-level namespace — 22,000 domain names and email redirects. On 10 November, ICANN published a letter confirming Verisign is retracting that plan. New third-level registrations close; every existing one, and every email redirect, survives indefinitely.

The post is four paragraphs and most of it is a thank-you list, which is itself the point. Two months, a formal reconsideration request, letters of support from a few dozen people, and lawyers — [Petillion](https://www.petillion.law/) — who "threw the book at ICANN." One participant flew to Bali to make the case in person. That is what it costs a small community to reverse a registry decision about twenty-two thousand accounts, and it's worth noticing that the cost was paid in plane tickets and legal hours rather than in anything the market would call pressure.

The thread's best contribution is the counterfactual: one commenter read the termination notice, concluded the namespace was dead, and let their `first.last.name` registration lapse. It kept working past the shutdown date, which they took as a glitch. It's gone now. There is a second suggestion in there that would have been the elegant fix — grant second-level domains outright to anyone who held the corresponding third-level one — and the reason it didn't happen is that it would have required Verisign to give away something it thought it could charge for later.

The general lesson is about scale. Twenty-two thousand registrations is a rounding error on a registry's balance sheet, which is exactly why it took two months of legal work to save them: the decision was cheap to make and nobody with authority had a reason to revisit it until the cost of not revisiting got loud. Small namespaces are not protected by their importance. They're protected by how annoying they are to kill.

## Fable 5.2 one-shotted his nephew's dream game — 470 points

**470 points** · 419 comments · [notesbylex.com](https://notesbylex.com/fable-5-2-one-shotted-my-nephews-dream-game) · [HN discussion](https://news.ycombinator.com/item?id=50433659)

Lex Toumbourou's nephew Aiden asked him for a beat-'em-up for his birthday, and handed over the design: five selectable heroes based on the family including the dog, twelve numbered bosses, a story outline, a puppy named Pudding to rescue, and Mum and Dad as unlockable characters. The first attempt shipped in June using Opus 4.8 and Fable 5, and it was not a game you'd play for more than two minutes. Aiden was polite about it. Aiden did not forget.

Then Toumbourou got early access to Fable 5.2 and, the night before the kids came over, gave it one prompt: finish the game, make it feel like a modern Ninja Turtles arcade cabinet, use ChatGPT Images 2.5 for art and ElevenLabs for sound, here are the API keys, redo anything, commit as you go. In the morning the game existed and was fun. It had thrown out most of his code, generated roughly 175 images and 140 audio clips, added cutscenes, breakable crates and an ending, and — the detail that matters most — it wrote a bot to play its own game, ran all twelve stages in a headless browser, and checked the screenshots for problems before declaring it done.

One sentence in the write-up deserves more attention than it got: "I let it rip." The single prompt is real. The single shot is not — this was hours of autonomous work with two paid generative APIs, a headless browser harness the model wrote for itself, and a human who had already spent six months learning what the game needed. What the model did was engineering. What made the result good was that a kid had written a proper design document with named characters, twelve escalating bosses and a rescue structure. That was always the hard part, and it turns out to be executable now.

The thread split three ways. A working game developer argues the harness is doing the work and that "one-shot" is a story about token burn, which is fair and doesn't change the outcome. Someone notes that a kid growing up now will never impress a parent with a text adventure, because their classmate can generate a four-player arcade game before dinner, and that's a real loss with no policy fix. And one commenter runs the comparison that settles the practical question — the same breakout-clone prompt through Opus 5.5 and Fable 5.2, both one-shots, with Fable visibly better on some axes and Opus subjectively more fun. The interesting part of that result is that it can be run at all.

## Smart home devices should work without the internet — 469 points

**469 points** · 169 comments · [docodethatmatters.com](https://docodethatmatters.com/home-automation-overnight-success/) · [HN discussion](https://news.ycombinator.com/item?id=50441707)

Eleven rules from ten years of home automation, and the first one generates the rest: nothing core in the house depends on a vendor's server. The author's Nest integration worked until Google broke the API. He has since watched a Samsung fridge display a TLS certificate error on its own screen and a Camp Chef grill controller refuse to report temperature without Wi-Fi. Everything that matters now runs on Tasmota-flashed ESP boards, an MQTT broker, and Node-RED on a Raspberry Pi. Alexa survives as one way to flip a switch.

The rules are the artifact, and they're better than most writing on this. Don't remove the old way when you add the new one — illustrated with a photo of a wall switch taped permanently on, captioned "this is BAD." Be cheap to change, because rooms get used differently. Check your automations, because he once had four scheduled triggers firing the same garden pump. A cloud device needs an API with logs or it doesn't get installed. Config lives in one place, not five vendor apps. More than one way in — an app, a voice assistant, a QR code, an NFC tag. Pub/sub via MQTT instead of point-to-point. No batteries rated under a year, because nobody wants to swap a door sensor at 2am.

The piece opens with an AI disclosure: first draft written by the author, edited and rewritten with AI, final pass by hand. That's more honest than most, and the seams show anyway — it's two conference talks with their slides described inline, and the prose between the slides is doing less work than the rules. But rule 2 is the one worth stealing, because it is the rule everyone breaks. The smart bulb that requires the wall switch to stay on is a device that has removed the old way while adding the new one, and the taped-over switch is the household's workaround for a design failure the vendor will never see.

The comments add the taxonomy that makes this practical: Home Assistant publishes an [IoT class](https://www.home-assistant.io/blog/2016/02/12/classifying-the-internet-of-things/) for every integration, from "Local Push" down to "Cloud Polling," and you can simply refuse to buy anything below local polling. The other good thread is about how cheap this has become — one commenter's process is buy the cheapest hardware that does the job, ignore software complaints in the reviews, ask a model for local-first firmware, and spend an afternoon as "a meat proxy." That's the actual state of the art in 2026: the hardware is disposable and the firmware is generated.

## Watch every satellite that passed over a place this week — 444 points

**444 points** · 79 comments · [watched.earth](https://www.watched.earth) · [HN discussion](https://news.ycombinator.com/item?id=50428907)

The site is one idea executed properly: pick a place, and see every satellite that passed over it in the last week, along with the imagery it captured. The pass list carries the orbit, the ground track of the sensor's aperture, and a time series of each pass. It renders as a pincushion of trajectories that makes the density of what's overhead legible in a way that a table of orbital elements never did.

The front page is a client-rendered app, so the page itself returns almost nothing to a scraper. The comments do the describing, and they're unusually unanimous for this site — people who work in geospatial calling it the best combination of style and substance they've seen, and pointing at the specific things that make it work: multiple data sources integrated without visible seams, and imagery tied to the exact pass rather than a representative tile.

The subtext is the same argument as the Fable game post, and it's why both are on the front page the same day. Nobody in that thread is asking whether a model wrote the code. They're asking how the data was assembled, whether the passes are correct, and whether the imagery is the one from that orbit. When the answer is yes, the tooling question stops mattering. That's the standard the rest of the AI output on this page is being held to, whether it knows it or not.

## Fable 5.2 is #1 on intelligence and #71 on speed — 368 points

**368 points** · 265 comments · [artificialanalysis.ai](https://artificialanalysis.ai/models/claude-fable-5-2) · [HN discussion](https://news.ycombinator.com/item?id=50431144)

Artificial Analysis scores Claude Fable 5.2 at 65 on its Intelligence Index — first of 74 models, against a median of 40. It is also, on the same page, 71st of 72 on performance and 73rd of 73 on cost. Read together: 235 seconds to first answer token, 103 tokens per second, 44.4 minutes per Intelligence Index task against a median of 12.8, $26.54 per task, $8 per million input and $40 per million output with a 98% cache discount, and 275 million tokens generated across the index against a median of 72.8 million.

The thread found the number that explains the cost. Fable 5.1 already generated about 118,000 tokens per task — 46,000 answer, 71,000 reasoning. Fable 5.2 generates 274,000 — 81,000 answer, 192,000 reasoning. The reasoning budget tripled. So the per-task cost doubled even though the list price came down, and the model got two points more intelligent for it. That is a very expensive two points, and it is the whole shape of the current generation: capability is being bought with inference compute rather than training, because that's the lever that's still available.

The honest caveat is in the thread too. Artificial Analysis is partly funded by the labs it ranks, and it doesn't publish its full method, which makes the index a useful trend line and a weak referee. But the internal comparisons hold up, because they're the same harness against the same harness: 5.2 uses more tokens than 5.1 for a small gain, and that's a fact about Anthropic's serving configuration, not about the benchmark's sponsors.

Where the page gets interesting is the pareto plot. At high and maximum reasoning effort, Fable 5.2 buys the top score at a price nobody can run a product on. At low and medium effort it sits on the frontier between time-to-answer and intelligence, which is the configuration an actual application would use. The lesson is not that the model is bad. It's that "the best model" is now a statement about how much money you're willing to spend per button press, and the model card's headline number describes the setting you can't afford.

## Magenta solar panels that let crops see through them — 345 points

**345 points** · 248 comments · [anthropocenemagazine.org](https://www.anthropocenemagazine.org/2026/10/magenta-solar-panels-may-be-agrivoltaics-cleverest-trick-yet/) · [HN discussion](https://news.ycombinator.com/item?id=50426175)

A study in *Cell Reports Physical Science* grew broccoli under semi-transparent cadmium telluride photovoltaic panels that harvest some wavelengths and pass the rest — the reds and blues that photosynthesis actually uses — and reports yields held steady. Because they transmit the reds and block the middle of the spectrum, the shade is magenta. That's the eye-catching part, and it's the part the headline is selling.

The framing is better than the colour. Agrivoltaics has a land problem: solar farms and vegetable farms both want the sunniest, flattest acreage, and opaque panels shade crops enough to be a real yield hit. Splitting the spectrum is a genuinely clever allocation of the resource, and the paper's predecessors showed the trade is real — a 2020 experiment kept basil yields flat under similar panels while spinach dropped, but the combined electricity-plus-crop income for the spinach farm was estimated 35% higher. A 1% allocation of US farmland to agrivoltaics has been modelled at up to 20% of national electricity.

What's not in the article is the number that decides whether any of it works: watts per square metre. A panel that lets the useful wavelengths through is, by construction, generating less electricity than an opaque one of the same size, so the whole case rests on the ratio. The study reports crop yield, which is half the equation. It's also one crop, one site, and by the sound of it one season — broccoli is tolerant, and a yield that "holds steady" under magenta shade in one trial is not a farming system.

The comments are better than usual on the economics, mostly because actual growers showed up. A cut-flower farmer reports that their USDA contact is sceptical of agrivoltaics specifically because of prior dealings with solar developers, which is the kind of institutional scar tissue that kills projects before the physics gets a hearing. Someone else makes the point that dominates American land-use arguments: the US does not have a farmland scarcity problem, so "stacking" functions that don't need stacking buys complexity rather than acreage. And a third card is worth holding for the next round of this debate — the country currently grows an enormous quantity of corn to burn as ethanol, which is a far larger and far sillier land-to-energy conversion than putting panels over broccoli.

## Blender 5.3 ships native Gaussian splats — 346 points

**346 points** · 46 comments · [blender.org](https://www.blender.org/download/releases/5-3/) · [HN discussion](https://news.ycombinator.com/item?id=50442426)

Gaussian splats — the technique that reconstructs a scene from photos or a video as millions of soft, transparent blobs — are now a first-class object in Blender. Import from PLY, SPZ or glTF, store them as point clouds, manipulate them with Geometry Nodes, preview in Workbench solid mode, render natively in EEVEE and Cycles. Splats carry their own attributes: a scale vector, a rotation quaternion, a radiance base with opacity, and spherical-harmonic coefficients for the higher bands.

The rest of the release is the usual Blender ".3" list: DLSS denoising, light dispersion, an EEVEE fisheye projection, Outliner sorting, ripple editing in the video sequencer. The splat support is the one that changes workflows, because it collapses a two-app pipeline. Until now, capturing a room with a phone and getting it into a shot meant running a separate splat renderer and compositing the result back in, which is fine for a still and miserable for anything with a moving camera.

Only forty-six comments, and they're working notes rather than arguments, which is the correct response to a release. The open questions are the ones the release notes don't answer: splats render with an emissive shader by default, so a captured scene glows rather than relights, which means it won't take a light or a shadow from the rest of your scene without work. Depth sorting against regular geometry is the other one. Both are the kind of problem that gets solved in 5.4 by someone who needed it for a job.

## Meta's smallest model is aimed at the work nobody wants to pay for — 323 points

**323 points** · 139 comments · [research.meta.ai](https://research.meta.ai/blog/muse-ember) · [HN discussion](https://news.ycombinator.com/item?id=50429024)

Muse Ember is pitched at the unglamorous half of agent work: tool calls, coding subtasks, routing, extraction, long document parsing. Meta's claim is that it delivers more intelligence per dollar than Claude Haiku 5.5 or GPT-6 Luna at every reasoning setting — it matches Haiku's best score at about a third of the cost.

The numbers from Artificial Analysis, which Meta is quoting, hold up on their face. At maximum effort Muse Ember scores 35.8 at $0.136 per task. Haiku 5.5 scores 36.2 at $0.411. Luna's best is 27.8 at $0.152. On AutomationBench's business workflows it's 37.8 against 13.9 and 20.2. On Terminal-Bench, 40.9 against 39.2 and 16.4. On the Coding Agent Index, 46 against 37 and 31. It loses FrontierCode 2.0 to Haiku — 27.2 against 34.9 — which is the one benchmark on the table about mergeable real-world engineering tasks, and therefore the one worth caring about most.

Pricing from the comments: $0.10 per million input tokens, $0.004 per million cached input, $0.50 per million output. The cache rate is 4% of input where Luna and Haiku charge 10%, which matters more than the headline token price for any agent that sends the same system prompt ten thousand times an hour. And the "smallest" model is closed-weight, which a commenter notes with visible disappointment — the small open model was the thing people were hoping for.

The honest read is that this is a cost claim dressed as a capability claim, which is the right way to sell a small model and also the least durable advantage. Every row of that table where Muse Ember is bolded is a row where a competitor will be bolded within a quarter, because the entire point of the segment is that the frontier arrives at the cheap tier about nine months later. The rows where it loses — real engineering tasks — are the ones that don't move.

## Locating a mysterious beep with five spare devices — 310 points

**310 points** · 161 comments · [simonwillison.net](https://simonwillison.net/2026/Nov/9/mysterious-beeps/) · [HN discussion](https://news.ycombinator.com/item?id=50434310)

Something in a box room started beeping, intermittently, and the beeps were far enough apart that standing in the room and listening didn't work. Rather than unpack the boxes, Simon Willison had Claude Code build [Beep Locator](https://github.com/simonw/beep-locator): a Python web server, a QR code, and every spare device in the house — two iPads, a phone, a MacBook Pro, a Surface Ultra — recruited as microphones. The devices register arrival times for the same beep, and the system triangulates a position. It found the thing to within about 41 cm, at 3,345 Hz, with the note that six decibels louder means roughly half the distance.

The best detail is the failure. The planned calibration step — devices playing sounds at each other to estimate their own positions acoustically — "didn't work particularly well," so a rough mode was added where the human drags the device icons around the floor plan and the maths adjusts from there. The tool that locates a beep by measurement needed a person to tell it where the microphones were. It also carries a warning when the arrival times aren't physically possible, which is exactly the validation check a hand-rolled time-difference-of-arrival system needs and rarely has.

The reason this is worth a section rather than a joke is that it is a complete worked example of the thing everyone claims agents are good for: a specific, unautomated, low-stakes annoyance turned into a real instrument in an afternoon, by someone who could describe the problem precisely. The comment section divides cleanly between people who want to reuse the technique (locating a student's clap in a lecture hall, spotting the source of an alarm) and people pointing out that you could move half the boxes, listen, move half again, and finish in a few minutes. The second group is right. The first group will end up with a tool that works in every room.

## AI-generated codebases rot in four specific ways — 269 points

**269 points** · 326 comments · [evanxmerz.com](https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/) · [HN discussion](https://news.ycombinator.com/item?id=50438318)

Evan Merz was laid off from Meta in May and thinks his relative reluctance to adopt coding agents was part of why — he was generating 90% of his code with AI by the end, "which was the minimum for a decent rating," and it hadn't made him faster in the way the discourse promised. He's at another large company now, generating 100%, and he's written down the four mechanisms he sees producing brittle systems.

The four: agents write shallow tests — lots of getters and setters, e2e cases that only cover paths already covered, gaps invisible to line coverage metrics. Agents write over-complex code, splitting one helper into three to satisfy DRY and making the result harder to debug than the duplication would have been. Reliance on agents erodes human understanding, so nobody can spot the pull request that introduces an abstraction incompatible with the existing data structures. And agents move faster than review can, so every PR gets skimmed and small quality debts accrue.

The second half of the piece is a symptom list, and it's the more useful half: more incidents, slower recovery because nobody knows the code they're debugging, errors that only users see because the analytics and error handling were never instrumented properly, and a product that feels built for machines rather than people. "Software made by AI for AI" is the phrase he lands on, and it's the accurate one for the failure mode.

The strongest objection in the thread is that the piece is a year out of date — shallow tests and over-engineering were 2025 problems, and a "don't overengineer, Pareto this" line in the prompt fixes most of it. That's probably true of the first two mechanisms and not of the last two, which are organisational rather than model-behavioural. You cannot prompt your way out of a review process that has less time per PR than the PR took to generate, and that is the actual mechanism by which AI-heavy teams accumulate debt. The essay is anecdote, unfalsifiable, and still the best articulation of the thing on the front page.

## Gemini 4 Carbon ships at Argon's price — 255 points

**255 points** · 140 comments · [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/) · [HN discussion](https://news.ycombinator.com/item?id=50442303)

Google's newest frontier model is generally available to developers, enterprises, scientists and consumers. Carbon was released two weeks ago to cyber defenders through the Fairwind program; the pitch now is long-horizon agentic work — multi-step coding and debugging, open-ended research — using more tokens than the cheaper Argon to reason and verify. It ranks first on CursorBench 4.0, Perplexity's WANDR and Zapier's AutomationBench, at more than twice lower cost per task than the next best external model. Pricing is Argon's: $2 and $10 per million tokens.

The strategic tell is the price. A model positioned above your existing flagship, sold at the same rate as the flagship, is a model whose cost structure improved rather than a model you're paying a premium for. Google is buying share in agentic workflows with it: `/swarm` in Antigravity, which turns one prompt into a coordinated team of agents with Carbon doing architecture and auditing and cheaper models doing the parallel work.

Treat the benchmark sweep with the appropriate suspicion. All three are vendor-chosen, all three are agentic-workflow benchmarks where the harness matters as much as the model, and "2× lower cost per task" is measured on the vendor's own harness against a set of competitors the vendor picked. The threads' independent results are more interesting: one commenter's benchmark has Carbon matching Fable 5.2 while being slower and more expensive than it, which is the opposite of the pitch. Another notes Carbon is Ultra-only for now — subscribers on Pro still see models from a generation back, which is a rollout problem Google has had for a year.

One detail is worth holding on to. The announcement page offers a 21-minute AI-generated audio version of itself, read by a synthetic voice with a name, with the standard "generative AI is experimental" disclaimer. Google is now large enough to generate its own press coverage and narrate it. That's not a scandal. It's a very accurate picture of what this release is.

## The Ethereum Foundation's 38-page mandate included a suicide pledge — 222 points

**222 points** · 203 comments · [denverpost.com](https://www.denverpost.com/2026/11/06/ethereum-suicide-pledge-lawsuit-mandate-boulder-crypto/) · [HN discussion](https://news.ycombinator.com/item?id=50426899)

The Denver Post's Shelly Bradbury has the documents, and the documents are strange enough that the story doesn't need help. In March, every employee of the Ethereum Foundation — a Swiss-registered nonprofit supporting a blockchain valued around $300 billion — received a 38-page illustrated document called "The Ethereum Foundation Mandate": navy pages, anime characters, glowing forests, cartoon flowers. On page 11, between a winking anime woman and three yellow cats, was a clause labelled "Source Seppuku License," under which authors and maintainers of the software would vow to "take his or her own life with a sword" upon failing to uphold the mandate's pledges. Staff were given until Monday to sign a form committing to the mandate, or take extra compensation and leave.

A Boulder woman, Kayleen Fulton, was fired after leading resistance and has sued in federal court in Colorado. Nearly 80 of the foundation's roughly 250 employees voted to remove the pledge after a draft circulated; leadership kept it and moved it out of the body text into an illustration. A foundation leader told staff it was not meant literally, and the commitment form was later amended to clarify it had "nothing to do with literal seppuku." A co-executive director described it as "part of the artwork of the mandate." When a board member objected to the document's aesthetic — which the suit says echoed a controversial online figure — Vitalik Buterin replied that "the controversialness of those aesthetics is itself part of the point."

Whether such a clause is enforceable is not the interesting question. Contracts can't compel that, and everyone involved seems to know it. The interesting question is what an organisation believes about its own staff when it puts a joke about ritual suicide in a loyalty pledge and then, after a supermajority objects, ships it anyway. The thread's best line is the one that names the error: you can have a mandate that is entirely literal, or a mandate that is partly a joke, but you cannot have both, and choosing "both" tells employees that the parts they object to are jokes and the parts they don't are binding.

The document is public at [ethereum.org/foundation/mandate](https://ethereum.org/foundation/mandate/), so this is not a leak-based story — it's a governance story with a PDF. What it demonstrates is that the distance between "we are a mission-driven collective" and "we are a company that requires a blood oath" is very short, and that the absence of a real HR function inside a foundation that holds billions is not a technicality. The lawsuit will settle or be dismissed. The mandate is already on the record.

## Also new, below the sections

- **[TPU 8tx and 8i Max](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/)** ([254 points](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/), 75 comments) — four TPU systems in one year: 8tx for confidential inference with hardware-level encryption, 8i Max for huge context windows and the highest compute per rack. Google says TPUs now have nearly 100 external customers and has open-sourced TorchTPU for native PyTorch. The interesting part is not the silicon; it's that a company selling reserved capacity to frontier labs is now also selling the chips into other people's data centres. That's a different business.
- **[What is malloc doing, anyway?](https://benmandrew.com/articles/what-is-malloc-doing-anyway)** ([253 points](https://benmandrew.com/articles/what-is-malloc-doing-anyway), 64 comments) — a walkthrough of glibc's allocator, starting with `strace` on a thousand 16-byte allocations, which produces exactly two `brk` calls: one to ask where the heap ends, one to grow it 132 KiB. Everything after that is bookkeeping. A textbook chapter that got upvoted because it shows the syscall trace instead of describing it.
- **[Your TV can see through walls](https://maurycyz.com/projects/fading/)** ([256 points](https://maurycyz.com/projects/fading/), 119 comments) — an ATSC signal captured with a USRP, where moving a few centimetres cancels the direct path against a reflection and the whole channel drops out. Walk around a neighbouring room and the waterfall shows stripes where your body cancels the residual signal, one per wavelength of path change. The author computes his own walking speed from the stripe spacing: 1.3 m/s. Any wideband signal works — Wi-Fi and LTE included.
- **[Horrible public key tricks](https://maurycyz.com/projects/badcert/)** ([236 points](https://maurycyz.com/projects/badcert/), 84 comments) — a protest certificate. Since the only part of a TLS certificate you control is the public key, the author built an RSA modulus whose bytes spell a message in ASCII art, gets Let's Encrypt to sign it, and points out that inspecting the certificate shows the joke in `openssl s_client`. The premise: if a CA can issue a trusted cert with a private key of "4," nobody is checking anything.
- **[ChatGPT Desktop forwards your SSH agent to remote machines](https://news.ycombinator.com/item?id=50422628)** ([213 points](https://news.ycombinator.com/item?id=50422628), 76 comments) — a discussion post, not an article. The claim is that an agent on a remote box can authenticate with your local SSH credentials and push to your private repos. The linked proof is a pull request that was closed without merging, which one commenter points out; the responses are more useful than the report — pin `ForwardAgent no` for everything except named hosts, use secure-enclave keys that require a fingerprint per session, or a password manager's SSH agent with per-request confirmation.
- **[Ableton Live 13](https://www.ableton.com/en/live/)** ([223 points](https://www.ableton.com/en/live/), 249 comments) — Looplet, a new Transient Shaper, custom mapping curves, Push 3 custom layouts. The comments are about licensing: Ableton has moved to a rent-to-own model where payments end with a perpetual licence for that version, which is not a subscription but behaves like one because the next version arrives before the payments do. Also nobody has built decent real-time collaboration, and Linux users still can't run it.
- **[The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough)** ([202 points](https://ftrain.com/aboard-the-web-is-more-than-enough), 158 comments) — The *Aboard* newsletter's follow-up to tinylittleoffice.com, an office suite that stores its documents in the URL, which got a couple of hundred thousand visitors and a Register article. His claim is that browser capability has become enormous and the cost of reaching it has collapsed, so much so that he put about twice the effort of a long newsletter post into shipping an application. The thread argues about whether that's optimism or a description of who's about to lose their job.

## Still on the page

Twenty stories from the previous five roundups are still above 200 points, ordered by current score. Scores across days aren't comparable; this is the same scan method as the previous posts. Every one of them was still inside the scanned window. Nineteen of the prior numbers are straight out of yesterday's own post; the four-twos row was last reported two days ago.

| Story | Last | Nov 10 |
|---|---|---|
| [sshole](https://sshhole.com) | 2,993 (11-09) | 2,997 (+4) |
| [Foldable Flight: paper airplanes](https://www.foldableflight.com) | 706 (11-09) | 1,173 (+467) |
| [Nvidia CEO's letter to staff about an affair](https://nvidianews.nvidia.com/news/a-message-to-our-company) | 923 (11-09) | 975 (+52) |
| [Goldman Sachs is pulling Claude Code from its bankers and traders](https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers) | 874 (11-09) | 896 (+22) |
| [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 635 (11-09) | 859 (+224) |
| [Is Opus 5.5 nerfed?](https://twitter.com/shanemelaugh/status/2119192075505893695) | 603 (11-09) | 810 (+207) |
| [KetchUp: a Rust and WebGPU SketchUp alternative](https://ketchup3d.github.io/app/) | 716 (11-09) | 755 (+39) |
| [Unlocking any car from X brand in most of the world](https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/) | 592 (11-09) | 619 (+27) |
| [Payments Canada launches the Real-Time Rail](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy) | 385 (11-09) | 578 (+193) |
| [I'm not convinced the AI bubble exists](https://matteoraso.github.io/im-not-convinced-the-ai-bubble-exists.html#im-not-convinced-the-ai-bubble-exists) | 534 (11-09) | 562 (+28) |
| [Outlook.com is rejecting mail from domains without DMARC](https://mailroute.net/blog/outlook-rejecting-email-without-dmarc) | 525 (11-09) | 543 (+18) |
| [MaxxBench: "Nice DeepSWE score. But is it true?"](https://maxxbench.unlap.ai/research/why-maxxbench/) | 405 (11-09) | 406 (+1) |
| [Chimera Vocal Synth](https://chimera-vocal-synth.vercel.app/) | 333 (11-09) | 350 (+17) |
| [Dux: a Wayland desktop shell](https://duxlabs.dev/) | 335 (11-09) | 344 (+9) |
| [Raspberry Pi 5 16GB now sells for $385](https://www.cnx-software.com/2026/11/03/when-will-this-stop-the-raspberry-pi-5-16gb-sbc-now-sells-for-385/) | 202 (11-09) | 325 (+123) |
| [Ask HN: What are you working on? (November 2026)](https://news.ycombinator.com/item?id=50417407) | 276 (11-09) | 290 (+14) |
| [Show HN: Coldframe, a honeypot fridge controller](https://github.com/hedgerow-dev/coldframe) | 285 (11-09) | 288 (+3) |
| [We know 15,579 websites are infected. How do we tell them?](https://scotthelme.co.uk/we-know-15-579-websites-are-infected-how-do-we-tell-them/) | 228 (11-09) | 228 (+0) |
| [Making any integer with four 2s (2025)](https://eli.thegreenplace.net/2025/making-any-integer-with-four-2s/) | 201 (11-08) | 221 (+20) |
| [Uranium cubes reveal why the German nuclear project failed](https://arstechnica.com/science/2026/11/uranium-cubes-reveal-why-the-german-nuclear-project-failed/) | 220 (11-09) | 220 (+0) |

Six movers worth naming. Paper airplanes went 706 → 1,173 (+467), which is a front-page story crossing into a completely different audience. Fable 5.2's launch thread went 635 → 859 (+224) while the complaint that its predecessor was nerfed went 603 → 810 (+207) — the release and the accusation grow at the same rate, which is not what you'd see if either were resolving. Payments Canada's real-time rail went 385 → 578 (+193), the Raspberry Pi price complaint went 202 → 325 (+123) as the second wave of people found out, and the Nvidia letter added 52 to reach 975. Everything else moved by less than forty points, and nothing lost any.

## Throughline

The page today is about proofs that cost more than the thing they prove.

Fable 5.2 is the clearest case. It is the highest-scoring model on the index everyone cites, and it got there by tripling its reasoning tokens — 71,000 to 192,000 per task — so the per-task bill doubled even though the sticker price fell. The benchmark result is real and the economics are worse. A model that is 2 points smarter and 2× more expensive per call is not progress for anyone running a product; it's progress for whoever is being benchmarked. Gemini 4 Carbon is the mirror image: the same promise of frontier capability, sold at the previous tier's price, which is what it looks like when a lab has actually reduced cost rather than moved it from training into inference.

The second thread is the gap between verifying something and specifying it. AlphaProof Code is the strongest technical result on the page — six million lines of Lean, a compiled protocol checked against human-written properties in four weeks — and the honest reading is that the humans did the part that decides what "secure" means and the agents did the part that used to take years. That is a genuine reallocation of expert time, and it is not the same thing as a machine that knows what to prove. The same gap shows up in the Fable game: the design document was the hard part, and the model executed it.

The third is that institutions keep publishing their own evidence. Google's help page states, in a sentence a lawyer wrote, that a human may read your email if you connect your account — and the argument about whether that was discoverable ended there. The Ethereum Foundation put a suicide clause in an illustrated mandate, distributed it to 250 employees, watched eighty of them object, and shipped it as artwork. The USPS put a five-figure price on ZIP Code boundaries and called the page a data release. None of these are leaks, and none are ambiguous once you read the document. The most reliable way to find out what an organisation is actually doing is to read what it publishes when it thinks it's being careful.

