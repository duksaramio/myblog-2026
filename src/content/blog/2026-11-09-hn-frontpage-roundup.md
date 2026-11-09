---
title: "Hacker News Front Page Roundup — November 9, 2026"
pubDate: 2026-11-09
description: "Sixty-three stories cleared 200 points and twenty-two are new. Nvidia's CEO admits an affair and the board opens a spy investigation, Anthropic ships a model that proves Fermat in 30 hours, and a security researcher unlocks cars by number plate."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Sixty-three stories cleared the 200-point threshold in this afternoon's scan of the top 220 ranked submissions. Twenty-two are new. Forty-one are repeats, thirteen of which moved by twenty points or more — and the largest of those, Goldman Sachs pulling Claude Code from its traders, went 354 → 874 in a day, which is what a leak looks like when it lands in the right thread.

The new material has two centres of gravity. The first is Nvidia: the CEO published a letter admitting an affair, the board published a statement about a foreign intelligence effort, and both went to the front page on the same afternoon. That is not a corporate PR story, it is an export-control story wearing one.

The second is Anthropic's release cadence, which has now produced a genuine argument on the front page. A new model claims to have formalized Fermat's Last Theorem in thirty hours; the same day, six hundred points of comments argue that the previous model was quietly made worse to make room for it. Both can be true. Neither is verifiable from outside.

The rest of the page is the usual split between people who fix things and people who invoice for things. A security researcher unlocked cars from a number plate. A woodworking 3D modeller is better than the incumbent's web app. An invoicing company raised one contractor's bill by 900%. And a man wrote about how he organised his AI agents so that he could stop holding twenty threads in his head — which is the most practically useful thing on the page today.

## Nvidia's CEO apologises for an affair and the board opens a spy investigation — 923 points

**923 points** · 1,187 comments · [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/a-message-to-our-company) · [HN discussion](https://news.ycombinator.com/item?id=50418016)

**487 points** · 391 comments · [statement from the board](https://nvidianews.nvidia.com/news/statement-from-nvidia-board-of-directors) · [HN discussion](https://news.ycombinator.com/item?id=50416801)

Jensen Huang sent an email to Nvidia employees on 8 November that opens "I was unfaithful to my wife" and takes unqualified responsibility for it. It is published on the company's own newsroom, which is the part worth staring at. Corporate comms teams do not normally distribute a CEO's marital infidelity as a press release; they do it when the fact is already public and the alternative is a leak-shaped narrative they don't control.

The letter's sixth paragraph is the actual news: "Regarding the national security concerns raised in news reports, NVIDIA's Board of Directors has initiated an independent investigation. I support the investigation and will cooperate fully." The board's own statement is more specific — the investigation follows "recent reporting that founder and CEO Jensen Huang has been the target of a foreign intelligence effort," and will be run by a committee of independent directors with outside counsel.

Put the two documents side by side and you get the shape of the problem. The board says it has "no reason to believe that either national security or NVIDIA secrets were compromised," and in the same breath says it's hiring outside counsel to check. That is a statement written by people who have to say something today and will have more to say later. HN's earlier thread on this (29 October, 248 comments) named the alleged relationship; the reporting that triggered this week's statement is the national-security angle, not the affair.

The comments are worth reading for the export-control subtext, which the letter does not mention at all. Nvidia's China revenue runs through Singapore and other intermediaries, and US export controls on advanced accelerators are the single largest regulatory risk in the company's valuation. If a foreign intelligence service had leverage over the CEO, the question a committee of independent directors has to answer is not "did she get secrets" but "were any of the deals that moved chips into restricted markets approved by a man who could be blackmailed." One commenter puts the exposure bluntly — a divorce at Huang's stake could cost tens of billions — and another notes that Nvidia's most pro-China public statements came from precisely the person now under investigation. Both are speculation. But they are the speculation the board's investigation exists to retire.

There is also, buried in the thread, the only honest compliment in a thousand comments: this is the rare corporate apology that admits a specific act instead of regretting that people were upset. That's a low bar. Nvidia cleared it in public, in a document with the company's logo on it, on a Sunday.

## Declarative Dragging — 732 points

**732 points** · 93 comments · [declarative-dragging.github.io](https://declarative-dragging.github.io/) · [HN discussion](https://news.ycombinator.com/item?id=50368481)

UIST 2026 best paper, from Joshua Horowitz, Andrew Blinn and Jeffrey Heer. The pitch: making a diagram draggable should be as simple as telling the system which future states dragging it can produce. Instead of hand-coding geometry, hit-testing, feedback and animation, the author writes a render function and says "this tile can go here, or here, or here." The engine speculatively renders each of those model states, measures where the dragged element lands in each rendering, and synthesises the drop zones and the animation between them.

The implementation is a library called Dragology, for SVG interfaces on the web, and the demos — an algebra tree, the "twisted trees" example, a Bézier editor — are the kind of thing that normally takes a week of fiddly pointer-event code and a second week of making the animation not look wrong. Because drop zones are derived from the model rather than from pixel snapping, the interaction keeps working when the layout reflows mid-drag, which is where most hand-rolled drag implementations quietly break.

The best critique in the thread is also correct: the paper doesn't cite Sketchpad, ThingLab or Juno-2, and it credits Apparatus for introducing speculative rendering. The transformation between drop zones is supplied by the author — the system discovers where things can go, not what valid configurations exist. That's a real limit, and it's the difference between "the computer found all the legal moves" and "you told it the moves and it drew them beautifully." The Beautiful part is not small. But the framing oversells the intelligence.

The most useful comment is about agents, not dragging. An agentic coding workflow can screenshot a UI in a few states and check that it renders; what it cannot do is judge whether a drag *feels* right as the wrist moves and the layout reflows underneath. Declarative dragging makes the interaction a function of the model, which means it becomes something an agent can reason about instead of something a human has to feel. That's the kind of unglamorous consequence that ends up mattering more than the paper's own headline.

## KetchUp: a Rust and WebGPU SketchUp alternative — 716 points

**716 points** · 218 comments · [ketchup3d.github.io](https://ketchup3d.github.io/app/) · [HN discussion](https://news.ycombinator.com/item?id=50418176)

A free, open-source 3D modeller aimed at woodworking and furniture: draw rectangles and lines, push/pull faces into boards, type exact dimensions, snap to axes, group parts into components, save a `.ketchup` file locally, import SketchUp geometry, export OBJ. Desktop builds for Windows, macOS and Linux, plus a browser editor. No account, no cloud, no subscription.

The first thing to notice is that the landing page calls the product BenchUp. The HN title says KetchUp. Either it was renamed to dodge a trademark conversation with Trimble, or the repo and the site disagree about what the thing is called. That's not a fatal flaw in a project this young, but it is the kind of detail that tells you nobody has yet had to support a user through an upgrade.

The second thing is why 218 people showed up. SketchUp's desktop modeller was a good product with a straightforward deal: pay once, own it. Trimble ended the free version, ended perpetual licensing, and pushed the web app. The comments are a decade of grievances in one place — hobbyists who use a single house model twice a year and now have to beg for a trial, professionals who can't open their own files on the free tier. The commercial opening is real and it is entirely self-inflicted by the incumbent.

The honest question is the file format. "Import SketchUp geometry" is doing a lot of work in that feature list, and the site does not promise round-trip fidelity on components, materials, scenes or dynamic components. For the woodworking use case that might be fine — you need boards with thickness, not a scene graph. For everyone who has ten years of `.skp` files, the import path is the whole product, and this is the claim to test before believing the headline. The thread's other recurring note is that the Rust UI feels better in a browser than most native apps, which says more about native apps than about Rust.

## Fold Epic Paper Airplanes — 706 points

**706 points** · 124 comments · [foldableflight.com](https://www.foldableflight.com) · [HN discussion](https://news.ycombinator.com/item?id=50424581)

A paper-airplane site: a catalogue of designs filtered by difficulty (very easy through expert) and paper size (A4, US Letter, square), each with a video and a folded result, plus a shop selling paper and books. It's built on Wix. It is, by any reasonable measure, a hobby site with a checkout.

Seven hundred points, and the comments have almost nothing to do with the site. They're people remembering the 1978 copy of *The Great International Paper Airplane Book* an old man gave them in a piano-school lobby, the crate of dot-matrix paper at a grandmother's house, the stairwell of a dad's office building. One commenter folded the "Mystic" from a sheet grabbed off the desk while half-watching the video and calls it the best plane he's ever made, which is the highest praise a tutorial can get.

Worth noting as a data point about this site's taste rather than as a story: HN will still upvote a well-made craft site over most AI news. The submission has no argument, no vendor, and no claim to evaluate. It just works, which on a day like today is apparently worth 706 points.

## Claude Fable 5.2 and Mythos 5.2 — 635 points

**635 points** · 333 comments · [anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-2) · [HN discussion](https://news.ycombinator.com/item?id=50429906)

One model, two names. Fable 5.2 ships with cyber and biology safeguards strong enough for general availability; Mythos 5.2 is the same weights without them, available to organisations that pass Anthropic's Life Sciences and Cyber verification programmes. Pricing is $8 per million input tokens and $40 per million output, with an optional fast mode at $16/$80 that generates up to 2.5× faster. Anthropic says outputs are up to 30% faster than 5.1.

The claims in the release are the kind that deserve a straight face and a raised eyebrow at the same time. During prerelease testing the model completed "otherwise-infeasible software migrations," designed three working electronic devices from scratch, made "substantial progress on robotics evaluations," solved two open problems in black-hole physics, and formalized the proof of Fermat's Last Theorem in 30 hours.

That last one has a footnote, and the footnote is the story. The first formalization, by an unreleased research version of Claude, took 11 days and leaned on "a purpose-built harness along with guidance from a human researcher." The new run used a team of 1,000 Fable 5.2 agents, minimal human intervention, and "a list of intermediate theorem statements to score progress." Read that phrase again. The hard part of formalizing a proof is knowing what lemmas to state and in what order; handing the agents a list of intermediate statements is handing them the architecture of the proof. The result — a complete, machine-checked formalization in Lean in 30 hours — is genuinely impressive engineering. It is not a model discovering a proof, and the release doesn't quite say it is, but it doesn't go out of its way to stop you thinking it either.

The comments are more interesting than the announcement. A user who has early access says the gap between Fable 5.2 and Opus 5.5 on ordinary coding tasks is hard to feel, and that you have to push the ambition of the prompt to see separation — which is roughly what you'd expect when the cheap model is already good. Another user reports a 600k-line Fortran codebase sped up 36× in two days and open-sourced the results, which is the sort of specific claim that survives contact with a reviewer. And a third picks apart the benchmark table with four questions that Anthropic's marketing team will not enjoy: why Fable at xHigh is compared against a competitor at medium effort, why the competitor's effort-intelligence curve bends the way no other published curve does, why the cyber model is missing from the one cyber benchmark, and why the robotics comparison swaps to a different competitor. Benchmark tables are arguments. This one has a shape.

## Is Opus 5.5 nerfed? — 603 points

**603 points** · 417 comments · [twitter.com](https://twitter.com/shanemelaugh/status/2119192075505893695) · [HN discussion](https://news.ycombinator.com/item?id=50422069)

The linked tweet wouldn't load, so this is the thread rather than the claim. The claim, from the title and from six hundred points of people agreeing: Opus 5.5's thinking behaviour changed on 3 November, and the change made it worse.

The reports are specific enough to be credible and unspecific enough to be unfalsifiable. Opus fumbling tool calls it used to get right, failing to finish tasks at high effort that it used to complete at low, "absurd mistakes" that repeat across sessions. Several people independently pin the change to the same week. One user says it looks like an A/B test; another links a Reddit thread with the same shape. The most disciplined comment asks the right question — is there an eval picking up a real signal? — and notes that the one continuous Opus 5.5 eval he knows of, livenerf, shows nothing.

That's the whole problem with the complaint, and the whole reason it keeps happening. Nobody outside Anthropic can distinguish "the model got worse" from "I got better at noticing," and the people who could measure it don't publish a version-pinned endpoint. Serving a model is not a static act: quantisation, capacity reallocation, prompt and tool-description changes, and A/B variants on the inference path all change behaviour without changing the version string. When a provider does all of that silently, "is it nerfed" stops being a factual question and becomes a trust question.

The thread's practical answer is the one worth taking seriously: self-host, or at least prefer providers who publish the checkpoint they're serving. A commenter running Qwen 3.8 27B locally puts it well — it may not be as smart, but it will not be quietly changed under him overnight. The counterargument, that most people can't self-host anything competitive, is true and beside the point. The value of a local model isn't that it's better. It's that it's the same tomorrow.

Shipping Fable 5.2 four days after the complaints started is either terrible timing or an unusually candid admission. Either way, the top comment on the new model's thread is "people were right about 5.5 being nerfed in preparation for a version release," and nobody at Anthropic has contradicted it.

## Unlocking any car from X brand in most of the world — 592 points

**592 points** · 321 comments · [shubs.io](https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/) · [HN discussion](https://news.ycombinator.com/item?id=50419215)

Shubham Shah, working with Sam Curry in July, took apart a major automaker's connected-car platform. The automaker is redacted throughout, which is standard practice for coordinated disclosure and does nothing to hide that it's a large manufacturer with two brands and a market presence in Australia, the US, Canada and Europe.

The chain is a good reminder that "car hacking" is mostly web appsec with a VIN stapled to it. Decompile the Android APK, find the telematics API, notice that `admintool.<domain>` returns a page titled TEST HARNESS on the public internet. The admin SPA shipped its entire JavaScript bundle behind a login screen, and the bundle contained an integration for the automaker's identity provider plus admin credentials for a staging instance of ForgeRock OpenIDM — credentials that worked in production. From there: a VIN lookup that takes a number plate, a `getUser` endpoint that returns the subscriber's email, full name, phone, password hash, PIN hash and push tokens, and then the identity system itself, which is where it gets bad.

The OpenIDM endpoints were behind a WAF that blocked `/openidm/*` even from the origin IP, and the team spent days on path traversal before handing the problem to a model. GPT 5.6 found it in about six hours: `/XUI%2f..%2fopenidm/` was blocked, but `/static%2f..%2fopenidm/` wasn't covered by any rule. With that, admin API access. The last step was a multi-factor bypass in the Australian identity environment — a Resource Owner Password Credentials grant that returned an `id_token` which could be exchanged for a consumer app token with the right `client_id`, and an MFA step that could be skipped entirely. Then the command API, with a header block and `{"command": "door-unlock"}`, and the doors opened.

The writeup is careful about the boring parts, which is what makes it credible: they tested on cars they owned or had permission to touch, they did all this in July, and the post is dated November. The companion writeup by Sam Curry covers the harder chain for the US, Canadian and European environments, where the automaker had done more work. Combining both, they could send unlock and engine-start commands to any of the brand's vehicles in Australia, the US and Canada.

The lesson is not "cars are hackable," which everyone knows. It's the specific shape of the failure: a staging instance of an identity provider exposed to the internet, with credentials in a vendor bundle, protected by a WAF with a hole in it, in front of an MFA flow with a grant type that skips MFA. Five separate controls, each individually reasonable, none of them sufficient. The WAF is the interesting one — someone had invested real effort in it, which means someone knew the asset was exposed and couldn't get budget to remove it. That's not a security failure. That's a security failure with a paper trail.

## I'm not convinced the AI bubble exists — 534 points

**534 points** · 912 comments · [matteoraso.github.io](https://matteoraso.github.io/im-not-convinced-the-ai-bubble-exists.html) · [HN discussion](https://news.ycombinator.com/item?id=50418975)

The argument, in order. AI companies have committed to at least $3 trillion in spending and already spent about $1.9 trillion. That's unprecedented, and it would be fatal if it were permanent — but it isn't, because it's capital expenditure on data centres, not operating expense. Once the buildings exist, spending falls. Anthropic's S-1, on the author's reading, shows $2.08 of revenue per $1 of compute, and revenue now exceeds compute plus infrastructure investment combined. Debt service on $5 trillion over 20 years is $250 billion a year, which the author compares to Alphabet's 2019 revenue of $162 billion (about $213 billion adjusted) as if that were the relevant benchmark.

That last comparison is where the piece falls apart, and the comments are right to say so. Alphabet's *revenue* is not money available to service debt; operating costs come out first. The other repeated objection is more structural: a data centre is not a warehouse. GPUs depreciate on a 4–6 year cycle, they are power-hungry while they run, and each generation is more efficient than the last, which means the fleet has to be refreshed rather than simply amortised. The author treats capex as a one-time purchase that ends. In this industry it's a treadmill that has to be walked at increasing speed.

The better comments go after the demand side, which the piece never seriously addresses. Anthropic's Q3 growth slowed and operating profit swung to a loss after the S-1 was filed, which is the number that matters for the debt-service arithmetic. Enterprise buyers of closed tokens are being undercut by open weights that cost pennies. And the deepest objection is the simplest: nobody in the bullish case ever explains who the customers are. The neighbours who can't open a zip file are not going to pay $20 a month for an agent, and the model they would use runs on a Mac mini.

Still worth reading as the strongest version of the bull case, because the strongest version is more falsifiable than the vibes. The claim "capex is one-off" is checkable and probably wrong. The claim "AI is profitable at the margin once you exclude infrastructure" is checkable and possibly right. Those are different claims, and collapsing them into "no bubble" is how the argument gets lost.

## Outlook.com is quietly rejecting mail from domains without DMARC — 525 points

**525 points** · 348 comments · [mailroute.net](https://mailroute.net/blog/outlook-rejecting-email-without-dmarc) · [HN discussion](https://news.ycombinator.com/item?id=50416158)

Since 5 November, Microsoft's consumer mail service has been refusing some mail from domains that publish no DMARC record at all — not a failing policy, no record. Affected recipients are on outlook.com, hotmail.com, live.com and msn.com. The bounce is a `550 5.7.1`. Microsoft has not announced it.

Two details make this worse than the usual deliverability churn. First, it hits ordinary low-volume senders — the small business invoicing a customer, the school emailing a parent — not just the bulk senders covered by Google's and Microsoft's published bulk-sender rules. Second, it's intermittent: only some messages are rejected, so "my mail is getting through" is not evidence that your domain is fine. If your MX logs show a handful of 550s to Microsoft domains this week, that's this.

The fix is one DNS record and it is deliberately minimal: `v=DMARC1; p=none`. That publishes a policy of "monitor only, don't act," which is correct behaviour for a domain that has never had DMARC. It doesn't affect how anyone else treats your mail, it doesn't require alignment work, and it can't break forwarding. If you send anything to consumer Microsoft addresses, publish it today and then decide what policy you actually want.

The source is a vendor blog — MailRoute sells mail filtering, and a story about Microsoft tightening inbound rules is good marketing for them. That doesn't make the claim wrong, and the claim is trivially checkable with `dig`. What's notable is the pattern: Microsoft has now made three significant changes to consumer inbound filtering in two years without a coordinated announcement, each one discoverable only when someone's mail stops arriving. Email is infrastructure. Changing it silently and calling the resulting bounces a deliverability problem is a choice.

## Humans will never again create a project quite like Wikipedia — 458 points

**458 points** · 396 comments · [economist.com](https://www.economist.com/culture/2026/10/29/humans-will-never-again-create-a-project-quite-like-wikipedia) · [HN discussion](https://news.ycombinator.com/item?id=50424704)

A review of Richard Cooke's *The Last Best Place on the Internet* (Norton, 320 pages), timed to Wikipedia's 25th anniversary. The Economist's framing: the Yongle Encyclopedia, written on 23,000 manuscript rolls in the 15th century, was the largest reference work in history and held the title for six centuries — until a startup in a chaotic Florida office passed it in six years. Wikipedia now runs to roughly 30 billion words across more than 300 languages, and its Latin edition alone has more articles than the Encyclopaedia Britannica. Nobody will build another one, because the next rival will be machine-made, and that's a different kind of thing.

The three threats the book identifies are the obvious three, which is not the same as the wrong three. Wikipedia is losing both readers and volunteer editors; it is at the centre of an escalating culture war over what a neutral point of view means when the subjects of articles can edit them; and it trained the models that are now answering questions without sending anyone to the page. That last one is the genuinely novel problem, and it's a self-consuming loop — the corpus is being harvested by systems whose success reduces the traffic and contributions that keep the corpus alive.

The paywall held, so this is read through a mirror that carried the opening and the summary; the book's argument past that point is not something I can quote. The comments are a better source anyway, and they split cleanly. One camp says the "never again" framing is simply wrong: OpenStreetMap, TV Tropes, fandom wikis, and SponsorBlock — whose maintainer showed up to note 17% of weekly submitters are first-timers, which is a healthy commons by any measure. The other camp says the mechanics have changed: the internet is now full of what one commenter calls machines for turning commons into tragedies, and the people capable of building a commons can see what will happen to it, so they don't bother.

Both are describing the same thing from different ends. Volunteer projects are not dying; the ones that require a neutral, sourced, adversarially-edited corpus are. Wikipedia is not special because humans collaborate — humans collaborate constantly. It's special because it solved the governance problem, and the governance is what AI cannot replicate and what no successor has yet designed.

## RIP, Harvest — 430 points

**430 points** · 134 comments · [aphyr.com](https://aphyr.com/posts/427-rip-harvest) · [HN discussion](https://news.ycombinator.com/item?id=50420035)

Kyle Kingsbury has been a self-employed contractor for a decade and used Harvest for time tracking and invoicing. Simple product, well-defined problem: log hours, generate an invoice, email it, take payment through a small Stripe integration, close it out. Then Bending Spoons — the company that gutted Vimeo — bought it in 2025, and his bill went from $13.32 to $133.98 a month by moving every customer onto an "enterprise" plan with "unlimited" usage that is, as far as he can tell, identical to what he had.

There is a cheaper option, and it's worse. The "flex" plan is $12.65 a month and takes an extra 2% of every transaction on top of the ~3% the card networks already charge. Kingsbury's line about this is the one worth quoting: that 3% pays for the entire card network, the people at Stripe and Mastercard, and the chargeback and fraud risk. Harvest does none of that work. He is not paying 2% of gross revenue to send a couple of PDFs a month.

The comment thread is a support group with useful links. Asana's per-seat pricing sold in blocks of five, so hiring your sixth person doubles the bill. Another fifteen-year Harvest customer reports an attempted 800% increase. Someone recommends Odoo Community Edition with its built-in Stripe integration and OCA localisation modules, with the honest caveat that you have to self-host it. And the recurring question is a business-model one: if private equity buys a small, beloved, profitable tool and immediately triples the price, is the correct response to build the replacement before they finish alienating the customer base? The answer appears to be yes, and the fact that this is now a repeatable strategy says something unflattering about how much of SaaS was priced on inertia rather than value.

## Payments Canada launches the Real-Time Rail — 385 points

**385 points** · 211 comments · [payments.ca](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy) · [HN discussion](https://news.ycombinator.com/item?id=50427362)

Canada's Real-Time Rail is live. Payments Canada — the crown corporation that owns the clearing and settlement infrastructure — describes it as clearing and settling payments in real time, 24 hours a day, every day, with ISO 20022 data-rich messaging, available through existing banking channels. Built with CGI, Deloitte Canada, IBM Canada and Interac. The claim is that more than nine in ten Canadians will be reachable within the first year as participants onboard, and Payments Canada's own survey found 60% of businesses and 52% of consumers interested in real-time payments.

The interesting detail is who is in the first cohort, and it's in the comments rather than the release: Wealthsimple, Questbank, Peoples Trust, Paramount Commerce, KOHO, DoBusiness.com, Digital Commerce Bank, Bank of America. Notice what's missing. The big five Canadian banks are not on the day-one list, which is where the gap between "launched" and "usable" lives. A real-time rail with fintechs on it and the incumbents arriving later is a rail in search of a network effect.

The comparison the thread keeps making is to the US, and it isn't flattering. FedNow exists and is supported by a subset of banks that charge for it; one commenter quotes SoFi's instant transfer at 0.75% with a $30 cap. Canada's version, by contrast, looks like Interac e-Transfer promoted to public infrastructure — and deliberately including Interac as a partner rather than routing around it, which is the sort of decision that determines whether a new rail gets adopted or fought. Whether the fraud controls hold up at launch is the part nobody can answer yet; the release lists them as a feature, which is what every payment system does the week it goes live.

## I saw your HN comment — 385 points

**385 points** · 281 comments · [joshstrange.com](https://joshstrange.com/2026/11/09/i-saw-your-hn-comment/) · [HN discussion](https://news.ycombinator.com/item?id=50426582)

Josh Strange used to like getting email about things he wrote. In the last two years it's turned into almost nothing but pitches, and rather than trust the feeling he had a model classify every email he's received about his posts and comments since 2013. The result: 0% pitches through 2021, then 20% in 2022, 25% in 2023, 33% in 2024, 50% in 2025, and 88% in 2026 through 6 November — on a volume that is also higher than any previous year.

The mechanism is the part that should worry anyone who writes publicly. The pitch doesn't open with a pitch. It opens by referencing the specific comment you wrote, compliments it, and asks an open-ended question. Because he answers questions, he writes three paragraphs, and the reply is a pivot: "that's close to what I'm building." He calls it an amplification attack, and that's the right term — the sender spends two sentences to make the recipient spend twenty minutes of expertise, then harvests the reply as a warm lead.

This is a new cost of writing in public, and it's not priced anywhere. Every open comment thread is now a lead-generation surface, and the marginal cost of a personalised, on-topic, LLM-written email referencing your actual words is effectively zero. The defences are all crude: don't answer questions from strangers, add a "no pitches" line that the sender will ignore, or stop publishing. The thread is full of people choosing among those three. None of them is a fix, and the thing that made the internet useful — strangers emailing you about something you wrote — is being consumed by the thing that made email cheap.

## Dux: a Wayland desktop shell — 335 points

**335 points** · 140 comments · [duxlabs.dev](https://duxlabs.dev/) · [HN discussion](https://news.ycombinator.com/item?id=50416053)

Dux Modular Shell 2.1 ("Stormborn") is a desktop shell that layers on top of an existing Wayland compositor rather than replacing it: niri, Hyprland, mangowm, Sway, labwc, Miracle. It brings the bits those compositors leave to the user — a file manager, a theming system, a system monitor, video wallpapers, a revamped media player, interface density controls — plus a one-line installer that detects your distribution and wires up dependencies.

The state of Wayland desktop Linux in 2026 is that the compositors are good and the plumbing is still yours to do. A tiling compositor gives you windows and nothing else: no launcher, no notifications, no bar unless you pick one, no settings app, no consistent theme across GTK and Qt and whatever the next toolkit is. Sway users assemble a desktop from a dozen projects; Hyprland users get a nicer default and a config file with opinions. Dux is betting that the assembly is the product.

There's already traction that suggests the bet is reasonable: Dux ships as the shell in Fedora's official Miracle WM spin and in Zirconium, an immutable Fedora derivative built around niri. That's not a hobby project's distribution story. The questions the thread raises are the usual ones for a shell: how much of your existing compositor config does it override, what happens when the compositor changes an IPC surface, and whether a theming layer that spans GTK, Qt and Electron can actually keep them consistent or just makes them consistently wrong. The installer being a `curl | sh` line is the other thing to have an opinion about.

## How I'm fighting the AI brain fry — 299 points

**299 points** · 206 comments · [sergeykuhne.com](https://sergeykuhne.com/blog/fighting-ai-brain-fry) · [HN discussion](https://news.ycombinator.com/item?id=50416363)

The described failure mode is real and specific: you start a task, the agent takes a minute, so you start another, then a clarification, then a side task, and forty minutes later you have twenty threads open and no memory of what you were doing. The usual advice is to take breaks and limit scope. Sergey Kuhne rebuilt his workflow instead.

The queue lives in git. Every ticket is a markdown file in the repo next to the code it describes, and the board state is a committed snapshot — so nothing important lives in a chat window or in his head, and a dead session loses nothing. An agent works the board in cycles: research new tickets, build the ones a human tagged as safe, run tests and a browser check, verify what's deployed. Work touching sensitive code goes on a branch and waits for approval. The agent never deploys to production.

The part that makes it work is the constraint that the agent cannot decide. Everything requiring judgement lands in a single "owner inbox," which a script builds by reading the board — review this change, answer this question, rule on this tradeoff. He reads it through a one-page Claude artifact regenerated from git every cycle, gives a verdict, and the verdict goes back onto the card. The page is a viewer. Git is the record.

The reason this is the most useful thing on the page today is that it treats the problem as a scheduling and state problem rather than a discipline problem. "Take more breaks" doesn't survive contact with an agent that replies in ninety seconds. "Move the state out of the conversation and into the repo" does, and it has the side benefit that the audit trail already exists when something goes wrong. The obvious criticism — that this is a lot of machinery to manage a workload you could simply not create — is also true, and the post is honest enough to leave it standing.

## When will this stop? The Raspberry Pi 5 16GB now sells for $385 — 202 points

**202 points** · 176 comments · [cnx-software.com](https://www.cnx-software.com/2026/11/03/when-will-this-stop-the-raspberry-pi-5-16gb-sbc-now-sells-for-385/) · [HN discussion](https://news.ycombinator.com/item?id=50428801)

Another price rise, the second this year. The 16GB Raspberry Pi 5 is now $385, up $80 from April. The CM5 16GB system-on-module rises $40, starting at $375 for the Lite variant without wireless. The 500+ keyboard PC stays at $410, presumably because demand is already thin enough that another increase would kill it.

The number that lands hardest is the comparison to launch: the 16GB Pi 5 shipped at $120 in January 2025. That's a 3.2× increase in under two years on a product whose entire proposition was fixed, cheap, well-documented hardware. CNX Software also notes the odd pricing at the top end of the CM5 line, where 32GB and 64GB eMMC cost exactly the same.

The comments are past grief and into substitution. Buy used enterprise thin clients — ex-corporate mini PCs with an SSD and 8GB of RAM for $40–100, idling at 10W. Buy broken-screen Android phones for €10 each and run Termux. Use an ESP32 if what you actually need is GPIO. The consensus is that a Pi is now worth it only for the specific combination of GPIO, documentation and low power that nothing else matches, and that treating it as a cheap computer has been a mistake for years. That's fair. It's also a strange ending for a company that once sold a $35 computer to schoolchildren: the bottom of the market it created has been taken by the second-hand market it made possible.

## Also new, below the sections

- **[Chimera Vocal Synth](https://chimera-vocal-synth.vercel.app/)** ([333 points](https://chimera-vocal-synth.vercel.app/), 58 comments) — a browser-based vocal tract synthesiser, in the lineage of Pink Trombone, where you drag the tongue, lips, larynx and soft palate and hear the result. The repo is [on GitHub](https://github.com/jamesondh/chimera-vocal-synth). The thread's useful notes are practical: extreme parameter combinations produce a physically impossible screech (a simulation-stability bug, not a feature), and on iOS the head view swallows the scroll gesture. The interesting use cases people raise are voice training and language learning, which is what happens when you give someone a visual model of a thing they've only ever heard.
- **[Too many men suffering in silence, national health report finds](https://www.westcentralonline.com/articles/too-many-men-suffering-in-silence-national-health-report-finds)** ([288 points](https://www.westcentralonline.com/articles/too-many-men-suffering-in-silence-national-health-report-finds), 341 comments) — Health Minister Marjorie Michel released findings from a nationwide consultation feeding Canada's first federal men's health strategy, with Movember Canada continuing to work with the government on it. The comments are the reason this is here rather than the article; it's one of the few threads on this site where people talk about themselves.
- **[Ask HN: What are you working on? (November 2026)](https://news.ycombinator.com/item?id=50417407)** ([276 points](https://news.ycombinator.com/item?id=50417407), 950 comments) — the monthly thread. Nine hundred and fifty comments is the highest this has run in a while, and the mix is what you'd expect: a lot of agent tooling, a lot of hardware, and a surprising number of people building things for their own kids.
- **[Going back two years on Hacker News is like entering another, better universe](https://news.ycombinator.com/front?day=2024-11-08)** ([242 points](https://news.ycombinator.com/front?day=2024-11-08), 142 comments) — a link to the front page as it was on 8 November 2024. Mitochondria are alive, macOS sandbox escapes, a stability result. The thread is people noticing that the ratio of "here is a thing I made" to "here is a thing that happened to the industry" has moved, and arguing about whether that's the site or the industry.
- **[Show HN: Vegetable Gardening for Engineers](https://jrcpl.us/contrib/2020/gardening-for-engineers/)** ([216 points](https://jrcpl.us/contrib/2020/gardening-for-engineers/), 42 comments) — a hydroponics and container-gardening reference written because gardening books have too little detail and social media has too much talking. Sources include agricultural extension programmes, commercial seed guides, high-school biology and techniques from indoor cannabis growers. It's a document parameterised the way an engineer would want: light, temperature, nutrition, media, water, pests, growth stages, with numbers attached.

## Still on the page

Fifty-three stories from the previous five roundups are still ranked or still above 200 points, ordered by current score. Scores across days aren't comparable; this is the same scan method as the previous four posts. Fourteen of the rows below have fallen out of the top-220 window, so their current scores are looked up by URL rather than read from the scan.

| Story | Last | Nov 9 |
|---|---|---|
| [sshole](https://sshhole.com) | 2,975 (11-08) | 2,993 (+18) |
| [Claude Code sends your email address to websites](https://github.com/anthropics/claude-code/issues/107757) | 1,599 (11-08) | 1,610 (+11) |
| [AI is forcing us to pay off 40 years of technical debt](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) | 1,303 (11-08) | 1,306 (+3) |
| [Need for Speed Underground 2 online in the browser](https://nfsu2.xyz/) | 1,104 (11-08) | 1,162 (+58) |
| [Tesla to wind down Cybertruck production](https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817) | 1,147 (11-08) | 1,158 (+11) |
| [Libghostty 1.0](https://mitchellh.com/writing/libghostty-1-0) | 1,068 (11-08) | 1,084 (+16) |
| [Goldman Sachs is pulling Claude Code from its bankers and traders](https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers) | 354 (11-08) | 874 (+520) |
| [Every Mac comes with an (undocumented) family member classifier](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph) | 835 (11-08) | 863 (+28) |
| [What I run on my $10 USD OpenStick homelab](https://blog.bosscher.ch/posts/openstick/) | 748 (11-08) | 814 (+66) |
| [Goodbye Claude, hello Pi](https://caleb.software/posts/claude-to-pi.html) | 628 (11-08) | 802 (+174) |
| [Blender's UI and Runtime: Much Faster Than GPUI](https://github.com/ppmpreetham/BUI) | 735 (11-08) | 737 (+2) |
| [MS Paint Remote Code Execution Vulnerability](https://www.cve.org/CVERecord?id=CVE-2026-83844) | 723 (11-08) | 726 (+3) |
| [Dutch 'idealist' bank ASN blocks non-Google Android, including GrapheneOS](https://github.com/PrivSec-dev/banking-apps-compat-report/issues/105) | 653 (11-08) | 656 (+3) |
| [Goodbye from Salon](https://www.salon.com/2026/11/05/goodbye-from-salon/) | 651 (11-08) | 651 (+0) |
| [Kimi K3.1 Pro model weights are out](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | 639 (11-08) | 640 (+1) |
| [Britain to make salary disclosure in job ads mandatory](https://www.reuters.com/business/world-at-work/britain-make-salary-disclosure-job-ads-mandatory-2026-11-05/) | 621 (11-08) | 625 (+4) |
| [Claude Code's "Don't Ask Again" exposes passwords in 1,122 public GitHub files](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again) | 543 (11-08) | 621 (+78) |
| [Nvidia RTX Spark encrypted firmware slows inference speed to 35% on Linux](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop) | 617 (11-08) | 617 (+0) |
| [A Jev that can ask Opus for help gives Opus accuracy at 4x lower cost](https://hightouch.com/blog/llm-judges-identity-resolution) | 594 (11-08) | 599 (+5) |
| [Apple's grey list: words your iPhone won't help you spell](https://www.theguardian.com/technology/2026/nov/06/struggling-to-spell-male-chauvinist-pig-apple-grey-list-means-your-iphone-wont-help-you) | 516 (11-08) | 549 (+33) |
| [Cuban: Facebook knowingly runs AI deepfake scam ads; docs say $16B fraud revenue](https://finance.yahoo.com/technology/ai/articles/mark-cuban-says-facebook-knowingly-213000020.html) | 517 (11-08) | 521 (+4) |
| [The end of Microsoft Research's AI Frontiers group](https://hunch.net/?p=13764006) | 486 (11-08) | 507 (+21) |
| [Discord is ditching Electron and its new app uses less RAM](https://www.theverge.com/news/1027379/discord-ditching-electron-web-app) | 493 (11-08) | 494 (+1) |
| [Every Windows 11 app should kill Electron, and Discord just showed why](https://www.windowslatest.com/2026/11/06/every-windows-11-app-should-kill-electron-and-discord-just-showed-why-no-starting-screen-and-70-less-ram-even-with-two-accounts-signed-in/) | 443 (11-08) | 477 (+34) |
| [llama-modchip: 284B DeepSeek on 64GB of RAM, no GPU](https://github.com/synchopate/llama-modchip) | 299 (11-08) | 473 (+174) |
| [Window Sweaters](https://github.com/saragordic/window-sweaters) | 462 (11-08) | 464 (+2) |
| [Writing as a thinking tool](http://muratbuffalo.blogspot.com/2026/11/writing-as-thinking-tool.html) | 213 (11-08) | 454 (+241) |
| [Asahi Linux Progress Linux 7.3](https://asahilinux.org/2026/11/progress-report-7-3/) | 408 (11-08) | 430 (+22) |
| [US FAA says it will phase out floppy disks from air traffic control by 2028](https://www.reuters.com/world/us/us-faa-says-it-will-phase-out-floppy-disks-air-traffic-control-by-2028-2026-11-05/) | 403 (11-08) | 409 (+6) |
| [MaxxBench: "Nice DeepSWE score. But is it true?"](https://maxxbench.unlap.ai/research/why-maxxbench/) | 380 (11-08) | 405 (+25) |
| [Deus Ex](https://www.filfre.net/2026/11/deus-ex/) | 383 (11-08) | 385 (+2) |
| [AI is dramatically accelerating AI research](https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai) | 372 (11-08) | 375 (+3) |
| [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) | 366 (11-08) | 369 (+3) |
| [MCP Explained](https://mcp-explained.com/) | 345 (11-08) | 347 (+2) |
| [From Linux to Wikipedia: How Volunteers Build the Internet](https://thereader.mitpress.mit.edu/from-linux-to-wikipedia-how-volunteers-build-the-internet/) | 344 (11-08) | 347 (+3) |
| [Pwn.college](https://pwn.college/) | 334 (11-08) | 336 (+2) |
| [Anthropic IPO buyers see valuation as low as $1.1T](https://www.bloomberg.com/news/articles/2026-11-06/anthropic-ipo-valuation-expectations-pressured-after-ai-rout) | 318 (11-08) | 322 (+4) |
| [Running a law firm on Free software](https://decoded.legal/blog/2026/11/running-a-law-firm-on-free-software-2026-edition/) | 294 (11-08) | 306 (+12) |
| [Firecracker VM Escape: PwnEscape Part 2](https://pwn.ai/blog/firecracker-escape) | 287 (11-08) | 288 (+1) |
| [Starfall – Affordable, routine access to microgravity](https://www.spacex.com/starfall) | 287 (11-08) | 288 (+1) |
| [Show HN: Coldframe, a honeypot posing as a supermarket fridge controller](https://github.com/hedgerow-dev/coldframe) | 272 (11-08) | 285 (+13) |
| [Kugelblitz – Mac-Native Google Earth Alternative](https://apps.metaebene.me/en/kugelblitz) | 272 (11-08) | 273 (+1) |
| [Obscure audio codec is a perfect fit for the N64](https://phoboslab.org/log/2026/11/n64-ulc-codec) | 268 (11-08) | 268 (+0) |
| [A barbarian tribe's mythic origin story is true, ancient DNA reveals](https://www.science.org/content/article/barbarian-tribe-s-mythic-origin-story-true-ancient-dna-reveals) | 249 (11-08) | 259 (+10) |
| [First steps in bare-metal programming using UEFI](https://kevinboone.me/efitest_index.html) | 251 (11-08) | 255 (+4) |
| [GitHub's new Git storage architecture](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) | 235 (11-08) | 238 (+3) |
| [So my ISP was hijacking my DNS](https://www.karthihegde.dev/posts/dns_tampering) | 233 (11-08) | 234 (+1) |
| [We know 15,579 websites are infected. How do we tell them?](https://scotthelme.co.uk/we-know-15-579-websites-are-infected-how-do-we-tell-them/) | 220 (11-08) | 228 (+8) |
| [They don't make 'em like that any more: Borland Turbo Pascal 7](https://kevinboone.me/tpwin.html) | 217 (11-08) | 228 (+11) |
| [I struggle to believe that AI R&D is ingenious](https://www.lesswrong.com/posts/DALNiKBjMGMF8grme/arjun-panickssery-s-shortform?commentId=fJtaHHHfx45tD7BSL) | 220 (11-08) | 221 (+1) |
| [Sodium-ion batteries approach cost parity with LFP](https://www.pv-magazine.com/2026/11/06/sodium-ion-batteries-approach-cost-parity-with-lfp-with-70-gwh-covered-by-supply-agreements/) | 219 (11-08) | 221 (+2) |
| [Uranium cubes reveal why the German nuclear project failed](https://arstechnica.com/science/2026/11/uranium-cubes-reveal-why-the-german-nuclear-project-failed/) | 201 (11-08) | 220 (+19) |
| [The Ubuntu 26.04 Rust sudo is not compatible with standard sudo](https://utcc.utoronto.ca/~cks/space/blog/linux/Ubuntu2604RustSudoNotCompatible) | 206 (11-08) | 209 (+3) |

Thirteen movers worth naming. Goldman Sachs pulling Claude Code from its traders went 354 → 874 (+520), which is what happens when a story about a bank restricting a tool lands in the middle of a week of stories about the tool being unreliable. Writing as a thinking tool went 213 → 454 (+241), Goodbye Claude hello Pi 628 → 802 (+174), llama-modchip 299 → 473 (+174), the Claude Code credentials exposure 543 → 621 (+78), the OpenStick homelab 748 → 814 (+66), Need for Speed Underground 2 1,104 → 1,162 (+58), the Windows 11 Electron piece 443 → 477 (+34), Apple's grey list 516 → 549 (+33), the Mac family classifier 835 → 863 (+28), MaxxBench 380 → 405 (+25), Asahi Linux 408 → 430 (+22) and the end of Microsoft Research's AI Frontiers group 486 → 507 (+21). The other forty added between zero and nineteen points, and none of them lost any.

One row is missing on purpose. The Tell HN thread about Gemini training on chat history was at 734 points yesterday; today's scan found a 276-point submission pointing at that same thread, which is a second submission of a link to the first, not the same story declining. Points don't fall, so the number isn't comparable and it isn't in the table.

## Throughline

The page is about people who signed up for a service and then discovered what the service was for. Goldman's traders lost their coding agent. Harvest's customers got a 900% bill. Opus 5.5 users found their model behaving differently on a Tuesday with no changelog. Nvidia's shareholders learned that the CEO's personal life is a national-security question. Four unrelated stories, one identical structure: a relationship that was priced as a product turned out to be a relationship, and the counterparty had all the leverage.

That's the honest read of the AI news today, and it's why the "nerfed" thread and the Fable 5.2 release belong in the same post. Anthropic shipped a model that can formalize Fermat's Last Theorem with a thousand agents in thirty hours, and the top comment on its launch thread is an accusation that the previous model was degraded to make room for it. Both things are consistent with a company optimising hard under capacity constraints. Neither is something a customer can check. The technical achievement is real; so is the reason six hundred people upvoted the complaint. When the same vendor controls the model, the serving stack, the benchmark and the version string, "is this the same product I bought" becomes a question only the vendor can answer. That is not a good place for an industry to be.

The second thread is that the good work on this page is all unglamorous. A drag-and-drop library that derives drop zones from the model instead of the pixels. One DNS record that fixes deliverability. A git-backed ticket queue that keeps an agent's state out of a chat window. A number-plate-to-door-unlock chain built out of five ordinary misconfigurations, each of which someone had already tried to fix. None of it is a breakthrough, and all of it is checkable by the person reading it. Set against a thirty-hour machine-checked proof and a $5 trillion capital programme, the small stuff is where the leverage actually is — because the person who publishes a DMARC record today gets their invoices delivered tomorrow, and the person waiting on a model release schedule does not.

The third thread is shorter. Nvidia's CEO published an apology on the company newsroom and the board hired outside counsel the same weekend; Wikipedia turned 25 and the argument about it is no longer whether volunteers will keep showing up but whether the governance model that made their work usable can be rebuilt. Institutions are being asked, in public and at once, what they are actually for. The ones that answer with a document — a letter, a board statement, a DNS record, a commit — are doing better than the ones answering with a benchmark table.
