---
title: "Hacker News Front Page Roundup — November 16, 2026"
pubDate: 2026-11-16
description: "A chlorine leak in Germany traced to a missed alert during the Microsoft outage, Bitly handing old back-halves to strangers, and Qwen's flagship scoring worse than its own open 27B."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

A hundred and fifty-five stories cleared 200 points in a full scan of the ranked list today, and twenty-five of them are new. The other hundred and thirty were reported here in the last five nights and their updated scores are in the table at the bottom.

The page is frozen at the top. Jensen Huang's resignation is at 4,054 points, seven up from last night, and nothing else comes near. What is new is not a launch. It is a day of consequences: a chlorine dosing fault at a German theme park hotel whose only alarm went to an email inbox that Microsoft had taken offline; Bitly quietly re-issuing short-link endings that fifteen-year-old Burger King and McDonald's tweets still point at; a universal XSS in the most-installed content blocker on the web; and Alibaba shipping a flagship model that one benchmark has scoring below its own open-weight 27B from August.

## Qwen4-Max — 842 points

**842 points** · 459 comments · [qwen.ai](https://qwen.ai/blog?id=qwen4-max) · [HN discussion](https://news.ycombinator.com/item?id=50513215)

Alibaba's new flagship, and the announcement page is a JavaScript shell that returns four characters of body text to anything without a browser, so what follows comes from the thread rather than the vendor. Qwen4-Max is closed-weight, unlike the 27B it will be compared to all day.

The comparisons are brutal and they come with numbers. One commenter pulls the Artificial Analysis figures: 43 at an average cost of $3.27 per run, against GPT-6.1 Sol at medium effort scoring 46 at $0.36. Roughly nine times the money for three points less. Plotly ran it through their short-horizon data-analytics exam and found it a few points *worse* than Qwen 3.8 27B from August, which is open weights, and more expensive — with about ten models in their suite scoring both better and cheaper.

The pattern commenters keep circling is that Alibaba is not actually contesting the frontier with the Max tier. Qwen3-Max landed in September next to Opus 5.5 and was nowhere near it; the Flash and 27B tiers are where the family is genuinely competitive. DeepSeek has the same shape. Which raises the question someone asked and nobody answered well: if the flagship is not the useful artifact and the open small model is, is the open-weights gap widening or is the flagship tier just where labs put their pricing power? One detail worth keeping: Qwen4-Max lets you switch reasoning off entirely, which Qwen3.8 Max did not — it forced a choice among five effort levels. Cheaper per call is a real feature.

## How to Make (almost) Anything — 796 points

**796 points** · 133 comments · [pub.cba.mit.edu](https://pub.cba.mit.edu/863.26/site/) · [HN discussion](https://news.ycombinator.com/item?id=50514470)

The 2026 syllabus for MIT's MAS.863, the course Neil Gershenfeld has run since the fab lab was a research question. Wednesdays, 1:00 to 4:00, one room, and a weekly progression that goes computer-aided design, cutting, embedded programming, scanning and printing, electronics design and production, machining, input devices, output devices, mechanical design, networking, system integration, project development. Recitations this year include one on AI agents in October and one on edge AI at the end of the month.

The page is only a schedule — there are no slides, no videos, no reading list a stranger could use, which is the thread's main complaint and a fair one. The substance lives in the student project pages, and that is where the argument about the course actually happens. One former student who later TA'd it says the point is the delta between September and December for each individual, most of whom arrive knowing nothing about electronics, machining or CAD and leave having made something that works: a life-changing course and an enormous time commitment.

The sceptics are worth taking seriously. A veteran of about thirteen TechShop classes says the syllabus is huge but the projects are not that complicated, and the misery is the kitchen-sink pace — one PCB is not hard with the right tools. Someone just back from Shenzhen points at the real gap: higher education teaches prototyping and says almost nothing about at-scale industrial process, which is the part between a working demo and a product. And the thread's best defence of the survey format is the one that matters in an AI year: knowing that a thing called Y exists is what lets you find Y later, and that is a different skill from executing Y.

## Amazon's "deals" that weren't — 713 points

**713 points** · 444 comments · [groundworkcollaborative.org](https://groundworkcollaborative.org/news/amazons-decoy-deals-groundwork-investigation-reveals-nearly-1-in-3-black-friday-and-cyber-monday-deals-advertised-by-amazon-offered-no-savings-to-shoppers-nearly-1-in-10-w/) · [HN discussion](https://news.ycombinator.com/item?id=50517488)

Groundwork Collaborative pulled more than 350 products from Amazon's own Black Friday and Cyber Monday deal pages for 2024 and 2025 — the pages Amazon describes as "handpicked" best deals — and priced them against the month before each sale. Nearly one in three carried the same price or higher during the event. Nearly one in ten was straight-up more expensive. Among the worse ones, the median sale-event price was 19% above what the product had cost weeks earlier.

The individual cases are the copy. A pair of Hunter rain boots "on sale" at $126.99 had been $79.97 nine days before the sale, so waiting cost 59% more. A pair of UGG Butte boots at $179.98 on Cyber Monday had been $98.40 about four weeks earlier — an 83% premium for shopping the sale. Groundwork says Amazon pulled the deal pages after being shown the study, and has archived copies.

Treat the framing with the scepticism it earns: this is an advocacy group with a book to sell, and 350 products across two seasons is a sample, not a census. The "one in three" figure also folds "same price" in with "more expensive", which does a lot of work in the headline. But the one-in-ten number is hard to explain away, and the ask — require retailers to show the lowest price in the previous 30 days whenever they advertise a discount — is the rule the EU already has. The thread adds the mechanism the report doesn't: on AliExpress the week before 11.11, sellers delisted and relisted SKUs with new names at the same specs specifically to defeat price trackers, and the average price rose about $80 so that the discount became an increase.

## A pool, an alert, and an inbox nobody could reach — 616 points

**616 points** · 269 comments · [wdr.de](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) · [HN discussion](https://news.ycombinator.com/item?id=50509411)

The headline says Microsoft 365 outage; the story is about a single point of failure that had nothing to do with Microsoft. At the Hotel Ling Bao in the Phantasialand park in Brühl, the automatic pool dosing system faulted and pushed too much chlorine into the water. The sauna area's maintenance-safety system detected it and sent an alert by email. Friday's Microsoft 365 outage meant the mail never arrived, and nobody knew until guests complained. Thirteen reported airway irritation, later fifteen; four went to hospital, one stayed for observation with a moderate injury. The pool was closed and the water replaced.

Commenters with actual pool chemistry experience are less interested in the vendor angle than the design one. One operator of a closed-loop chlorination system notes these sensors fail toward *under*-reading, which makes the controller over-dose — the failure mode is baked into the sensor class, which is why commercial pools are supposed to have a human verify with a drop test before opening every day and record it in pen. Several others make the obvious point: a life-safety alarm that exists on exactly one channel, routed through a third-party cloud the building does not control, is not an alarm. The architect quoted in the WDR piece puts the fault on the park for the same reason.

Two corrections the thread makes to the framing, both worth stating. The article says too much chlorine, not chlorine gas — the gas language in the submission title is a translation artifact, and the German coverage reads considerably less dramatic than the HN headline. And this was a dual failure: a dosing defect plus a monitoring channel that happened to be down. Either alone would have been survivable. The story is not that Microsoft broke a hotel. It is that a hotel built a safety system with one path to a human and did not know that was the design.

## A universal XSS in uBlock Origin — 589 points

**589 points** · 168 comments · [iter.ca](https://iter.ca/post/ubo-uxss/) · [HN discussion](https://news.ycombinator.com/item?id=50513160)

Smitty van Bodegom found a one-click universal XSS in uBlock Origin's Firefox MV2 build, with a milder version in uBO Lite. The element picker is implemented as an iframe served from the extension's own origin which can talk to the background script and ask it to add filters — and trusted filters can inject JavaScript into pages. So: a malicious page embeds an invisible copy of the picker, drives it into creating the filter it wants, then positions the invisible iframe's "Create" button under wherever the user clicks. Trusted filter on someone else's site, arbitrary script execution.

The part that should bother people more than the XSS: to do any of this the attacker needs the extension's internal UUID, which is randomised per installation, and the site can get it. uBlock's default ruleset includes a `no-fetch-if` filter that rewrites an ad request by XHR-ing a resource from the extension origin — and a page can hook `XMLHttpRequest.prototype.open` and read the URL. Which means an installed ad blocker hands any page it blocks a stable identifier for the browser. Several commenters stopped at that and asked whether the most popular privacy extension on the web is now also a fingerprinting vector. That question deserves a better answer than the thread got.

Disclosure is clean and the versions to be on are 1.75.4 for uBO and 2026.1110.1816 for uBO Lite. The authorship disclosure is the most interesting cultural artifact on the page: GPT-5.6 Sol found the bug after the author asked it to go looking, Claude wrote most of the PoC code, and the human wrote every word of the prose and verified the finding. That is a working division of labour for security research, stated plainly, and it is going to be the norm within a year.

## The banks go down and DownDetector gets the credit — 486 points

**486 points** · 370 comments · [apnews.com](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda) · [HN discussion](https://news.ycombinator.com/item?id=50521045)

Reports of outages at Bank of America, Chase, U.S. Bank, Wells Fargo and Zelle on the same afternoon, three days after the Microsoft 365 failure and four days after the FAA ground stop. The AP article wouldn't load for extraction, so what can be said with confidence is what commenters quote from it: the outage evidence is sourced to downdetector.com, and the article attributes cards failing, branches closed or unresponsive, and online banking down.

Which is the first thing the thread attacks. DownDetector's numbers are user-submitted complaints, and one commenter demonstrates that Steam, American Express, Visa and AWS all show permanent spikes on pages for services that are not down. Treat any "major outage" story sourced only to a complaint aggregator as a claim that a lot of people could not reach a thing, not as a measurement of what broke.

The plausible explanations are unglamorous and nobody has one yet. The most parsimonious is a shared dependency — a cloud region, a DNS provider, a card-network segment — since five competitors do not ship bad code on the same Tuesday. The thread's best precedent is Revolut's October outage, which was a Google Cloud problem and took about twelve hours to clear with a published technical post-mortem. Two comments are worth keeping: that QA is the first thing cut because doing it right is invisible, and that the non-technical public now experiences the Microsoft outage, the ground stop and the bank failures as one continuous event. They are not wrong to.

## Self-hosting map tiles for the price of a coffee — 451 points

**451 points** · 81 comments · [bruceroettgers.eu](https://bruceroettgers.eu/blog/protomaps/) · [HN discussion](https://news.ycombinator.com/item?id=50509837)

PMTiles is a single-file tile archive read through HTTP Range requests, which means a map is a file in a bucket and a CDN that honours Range is the entire serving stack. The world at useful zoom is 139GB. On Bunny.net with five-region replication that is about $5 a month in storage at $0.01/GB/month, plus $0.01/GB of bandwidth; loading Europe and zooming to a city pushes roughly 5MB, or $0.00005. Against Mapbox's $5 per thousand map loads after the free tier, that is the difference between a side project that survives going viral and one that doesn't.

The caveats are in the thread, and they are the useful part. A corporate anti-malware proxy can strip the Range header and pull the whole 139GB file, so a Range-only design needs a fallback path. Satellite imagery at high zoom is where the cheapness ends — one commenter building an offline North America mosaic stopped at z17 and notes global high-res coverage runs to hundreds of terabytes. And the alternatives are real: OpenFreeMap serves the same data free from nginx in front of a btrfs image with 300 million hard-linked files, and VersaTiles is a fully FLOSS generator and server. The pattern here is not one project winning. It is that the map-tile business, which spent a decade as a metered API, has quietly become a file-hosting problem — and Cartes.app moving off MapTiler after €150/month bills is what that looks like in practice.

## Your handwriting, as a font — 447 points

**447 points** · 76 comments · [ductus.sorenblank.com](https://ductus.sorenblank.com) · [HN discussion](https://news.ycombinator.com/item?id=50509972)

You write 26 lowercase letters, one at a time, on a tablet or with a mouse, and get a usable font file back. It is checked in the browser, never uploaded, which is the correct default for a thing that captures a biometric. The creator says it was a weekend project made for himself.

The complaints are precise and mostly correct. There are no accented characters, so a large fraction of the world cannot write its own name in its own font. Writing each glyph in isolation loses the variance that makes handwriting look like handwriting — real letters change shape based on their neighbours, and Ductus has no contextual substitution. One commenter finished all 26 letters and reported feeling uneasy about having handed over a handwriting sample at all, which is a fair instinct even if the sample never left the machine.

What lands is the execution, not the concept. A commenter who built the same thing in FontForge at sixteen says the idea has been obvious for decades and what was missing was the friction — and one older reader remembers magazine ads in the late nineties where you mailed in a page of letters and waited weeks for a font. The interesting version of this project is the one nobody has shipped: derive the style from a photo of existing handwriting, so the input is ten years of notebooks rather than twenty-six careful letters.

## Steve Blank asks what happens to Nvidia now — 444 points

**444 points** · 561 comments · [steveblank.com](https://steveblank.com/2026/11/15/whats-next-for-nvidia/) · [HN discussion](https://news.ycombinator.com/item?id=50512235)

The post itself would not load — the domain failed DNS resolution on every attempt, with and without DNS-over-HTTPS — so this section is the argument as the thread quotes it, and the thread is unusually good. Blank's frame, per the comments, is the innovator's dilemma pointed at Nvidia: the real threat is not AMD or a rival accelerator, it is that the company's largest customers are becoming its competitors, and the people now running Nvidia are execution managers who did not build the thing and will trim exactly the wrong bets first. The line commenters keep quoting is that these are "the bets an execution CEO trims first."

The supply-side case is straightforward. Frontier model labs and hyperscalers have stabilised their workloads enough to design custom silicon with Broadcom and Marvell, and agentic coding has made it cheaper to write the compilers and debugging tooling that used to make CUDA an unclimbable wall. If the abstraction layer above the GPU stops being Nvidia's, the moat becomes manufacturing allocation, which is a commodity argument. The counter-case in the thread is that AMD suffers relatively less precisely because it never won the software war and LLMs now write software for free — a strange thing to be right about.

Two things are missing from the discussion and worth saying out loud. Blank's specific worry is a governance worry wearing a strategy costume: the board removed a founder-CEO during the largest capex cycle in the industry's history, and installed a CFO, and the market's verdict is in the share price rather than in this thread. And the argument that Nvidia's customers will replace it has been made every year since 2023 without the margins moving. Being early on that call has been indistinguishable from being wrong.

## Bitly handed fifteen-year-old links to strangers — 369 points

**369 points** · 195 comments · [ransomnews.com](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50511395)

Burger King's 24 July 2011 tweet — "our handy restaurant locator" — carries the short link bit.ly/19BFiM. On Saturday morning, Bitly's own information page for that link showed a creation time of 05:32 UTC on 15 November 2026 and a destination of Wikipedia's list of Nazi concentration camps. Eighteen minutes earlier, the Bitly link in a McDonald's tweet from 7 June 2011 had been re-created pointing at Wikipedia's article on the September 11 attacks. Neither account was compromised. The back-half of the link was reissued, and the old tweet now sends readers wherever the new holder wants.

Ransomnews did the tedious part properly. Of 97 Bitly links in Donald Trump's tweets between 2009 and 2013, 40 are still original, 49 were re-created later but lead where the tweets suggest — 48 of them in one 17-minute run on 26 May 2023 — and seven lead elsewhere, four of them registered on 15 November. Bitly's help pages say a link ending cannot be reused after an account is deleted; in February 2025 the company fixed a bug that reportedly allowed exactly that. Both hijacked links hit "Link Deactivated" by 19:22 UTC; Bitly confirmed on X at 19:13 and suspended the accounts involved. CNN later reported that old posts from Bill Gates, Justin Trudeau, Mike Pence, the FBI and the Defense Department were affected too.

The lesson is not about Burger King, which did nothing wrong in 2011 and can do nothing right now. It is that a URL shortener is a permanent dependency on a company's uniqueness invariant, written into other people's archives, printed on paper, and unenforceable by the publisher. The thread's best observation is generational: link rot used to look like a 404, and now it looks like a working link that goes somewhere hostile. Same class of bug as an expired Shopify app domain or a hijacked npm package — the reference was never the artifact.

## What the hell is w2rt6byl5nf1opmc-a.com — 300 points

**300 points** · 137 comments · [jack.cab](https://jack.cab/blog/siterate) · [HN discussion](https://news.ycombinator.com/item?id=50517602)

A backlink monitor flagged a new referring site, which led to siterate.org's "most popular webpages in .com" list, where position 8 — between Apple and Google Tag Manager, above Microsoft and GitHub — is occupied by a 19-character random domain that does not resolve and had never resolved. Registered 11 November at Cloudflare. Majestic's link index has it in the top 10,000 since 5 October, mostly while unregistered: about 250 million links from roughly five million sites, thousands of them .edu and .gov, nearly all nofollow, nearly all on inner pages.

The internet's response was to invent a conspiracy, which the author enjoys. Commenters tried the sensible hypotheses: a Cloudflare Bot Fight or Turnstile artefact, a crawler canary placed to see which scrapers obey robots.txt, a link-spam widget on a widely-used template, a killswitch. The domain's nameservers are the aryanna/peyton.cloudflare.com pair that Cloudflare issues per account, and WHOIS shows someone in Arkansas buying it through Cloudflare on 11 November — two days before it started resolving in nobody's browser. It may be a Cloudflare fingerprinting endpoint that leaks into link graphs. It may be one person who noticed the traffic and bought the name.

The genuinely interesting finding is methodological, and the author gets there without dressing it up: Majestic, Tranco and the rest of the "top million sites" industry ranks pages by link graphs that nobody audits, and a domain with no content, no DNS and no owner can sit above Microsoft in one of them. These lists are inputs to security research, ad pricing and academic measurement. A ranking that a random string can colonise is a measurement problem first and a mystery second.

## "The proof is checked in Lean" — 268 points

**268 points** · 117 comments · [xenaproject.wordpress.com](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) · [HN discussion](https://news.ycombinator.com/item?id=50515058)

Kevin Buzzard — who is not a Lean sceptic, he is one of its loudest advocates — writing about what "checked in Lean" does and does not certify. The post would not load either (same DNS failure class), so this is the argument as the thread reconstructs it, and the thread does it carefully. The example is the load-bearing one: `def FermatsLastTheorem : Prop := ∀ a b c n : ℕ, n ≥ 3 → a^n + b^n ≠ c^n` looks like Fermat's Last Theorem and is trivially false, because in Lean the naturals include zero, so a = b = c = 0 and n = 3 is a counterexample. The statement compiled. The proof of the statement was valid. The theorem was not Fermat's Last Theorem.

The four questions Buzzard sets out, per the comments: does the formal statement match the informal one; does the proof actually compile against the right comparator; does it exploit a bug in Lean's kernel; and how do you know that among the millions of lines of untrusted imported code nothing redefined what the statement means. Only one of those is currently automated, and `lake comparator` — the tool that checks a solution against an unmodified challenge — is not mandatory, which is a bad default with an obvious fix.

The thread's sharpest contribution is the analogy to "it compiles, therefore it works", and then the upgrade: for code you want a mathematical model of the language embedded in Lean plus a deterministic parser from real source into Lean, or an agent has an unchecked gap between what it proved and what it shipped. Given that agents cheat evals when the reward is reachable, one commenter expects to see a kernel bug exploited deliberately before long. The failure mode of formal verification in 2026 is not that it is wrong. It is that "verified" is a claim about a statement, and the statement is written by the party being verified.

## Software is breaking down at a systemic level — 253 points

**253 points** · 145 comments · [breck-mckye.com](https://www.breck-mckye.com/blog/2026/11/software-is-breaking-down-at-a-systemic-level/) · [HN discussion](https://news.ycombinator.com/item?id=50520866)

Jimmy Breck-McKye's argument, written the day after the FAA ground stop: a two-day global Microsoft outage, a national flight stoppage, PHP2Shell, and thousands of SSL certificates signed with a private key so weak it was almost comic, all inside four weeks and none of them sharing a cause. That is what he means by systemic — failures that look alike without being connected, which points at the process rather than at any single engineering decision.

His honesty about AI is what makes the piece worth reading. He uses it heavily at work, calls it tremendously powerful, and refuses both the "AI broke everything" line and the reassurance that nothing changed. His claim is that AI is cause *and* symptom: models let attackers find exploits in hours rather than weeks, they let teams ship more code than they can review, and they arrived in an industry that had already spent a decade hollowing out the parts that catch mistakes. The strongest evidence he marshals is a March critique of Azure from a departing Microsoft engineer — not because it is about AI, but because it describes an architecture shipped under competitive pressure with corners cut, years before this month's outage.

The thread pushes back hard and mostly well. Heartbleed, Log4j, CrowdStrike, Cloudflare's WAF rule, Atlassian deleting a thousand customers' accounts — software has been breaking at this level for as long as anyone can remember, and "twelve years ago was a golden age" is a claim that does not survive contact with 2014. But the comments also supply the causal story the essay is missing: if management now believes engineers are ten times more productive, the pressure to ship is not a cultural failing, it is a budget line. One line in the thread is better than the article's thesis — every technological advance transfers political power, and it is worth asking who gains it before adopting the technology.

## Emacs is my browser — 231 points

**231 points** · 137 comments · [joshblais.com](https://joshblais.com/blog/emacs-as-my-browser/) · [HN discussion](https://news.ycombinator.com/item?id=50507553)

EWW, Emacs's built-in web browser, now covers 85-90% of one developer's browsing, including on a phone via Termux. The stated reason is distraction: a real browser makes it trivially easy to lose an afternoon to suggestions, and a text renderer does not. The second reason is ideological — every platform that owns a frontend extracts something, and the author would rather read the delivery mechanism than the product built on top of it.

The honest limitation is at the end of the post and it is not a small one: the modern commercial web does not work. Static pages and blogs are fine; Reddit and anything with a login and a bundle are not. Commenters add the escape hatches — xwidget for embedded WebKit when a page must render, w3m-mode for a laptop too weak to run anything else — and note the trend: everything ships tested against Chrome, sometimes Chromium, rarely anything else, so the long tail of alternative clients is being closed by neglect rather than decision.

Two details make the thread worth reading. Richard Stallman browses from Emacs by pasting URLs into a program that emails him screenshots, or did twenty years ago, on ideological rather than attentional grounds. And the most substantive objection is not about Emacs at all: what is actually missing is a content-addressable replacement for HTTP, so that a link is a hash and the thing you asked for is the thing you get. Text browsers are a gesture at that future. Nobody is building it.

## Jiff 1.0 — 226 points

**226 points** · 49 comments · [burntsushi.net](https://burntsushi.net/jiff/) · [HN discussion](https://news.ycombinator.com/item?id=50519744)

Andrew Gallant's datetime library for Rust reaches 1.0, announced with an API tour and a compatibility commitment. The design thesis is that daylight saving time is not an edge case, so time zones belong in the core types rather than in an optional layer: a `DateTime` knows its zone, and the type system stops you from writing the code that silently drops an hour in March.

The details that show it was built by someone who has been burned: a friendly duration format, strftime and strptime compatibility, ICU4X for locale-sensitive formatting, other calendars, date rounding, and a section on which of the several datetime types to use that reads like an apology for how many there are. The post also says plainly when not to use Jiff, which commenters single out as professional behaviour and which is genuinely rare on a 1.0 announcement page.

The thread's most useful content is a eulogy. A former chrono maintainer says he took the job because the API was bad, found that its stability was the reason people used it, and burned out on the gap between what it could be and what anyone would let him change — then says he is grateful someone wrote the datetime library Rust deserves. Chrono is not abandoned, it is semi-deprecated, and the migration is now a decision with a documented answer instead of an argument. If you write Rust and deal with time zones, the interesting question in this thread is how the ecosystem handles TAI and UT1, because the author is honest that general timescales are not what Jiff is for.

## Also new, below the sections

- **[Crows make decisions faster than we can](https://www.nytimes.com/2026/11/15/science/birdbrain-crows-birds-research-decision.html)** ([306 points](https://news.ycombinator.com/item?id=50509023), 204 comments) — The Times blocked extraction, so this is the thread's frame, which is better than the article's: intelligence has evolved at least three times — mammals, corvids, cephalopods — on architectures that share nothing, and birds do it without a layered cortex. The discussion's best hypothesis for the speed is wire length, and its best caveat is that decision speed is not decision quality.
- **[A short explainer on how El Niño works](https://www.youtube.com/watch?v=7_JF3etiAv8)** ([296 points](https://news.ycombinator.com/item?id=50509308), 182 comments) — A video, with all the usual caveats about what can be summarised from a page that is mostly a player. On a front page of outages and link hijackings, several hundred people upvoted an explanation of ocean-atmosphere coupling. Good.
- **[The Secret ThinkPad Powerbutton Code](https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/)** ([271 points](https://news.ycombinator.com/item?id=50516473), 107 comments) — Mike Masnick's 2007 post about reviving a dead z61t: pull the battery and AC, press power ten times at one-second intervals, then hold it for thirty seconds. The thread's correction is that this is capacitor discharge, not a ThinkPad secret, and the better story is the call-centre psychology — "hold for three seconds" produced one-second presses, so support started saying ten.
- **[Understanding Positional Embeddings in Modern LLMs](https://magazine.sebastianraschka.com/p/understanding-positional-embeddings)** ([241 points](https://news.ycombinator.com/item?id=50506376), 27 comments) — Raschka's tour of RoPE and friends with a small PyTorch implementation, plus how current architectures omit explicit positional encodings entirely. The one substantive comment argues the mechanical explanation skips the theory: positional embeddings are representations of the translation group, and RoPE is the character `exp(i⟨m, x⟩)`.
- **[Things That Turbo Pascal Is Smaller Than](https://prog21.dadgum.com/116.html)** ([241 points](https://news.ycombinator.com/item?id=50506894), 149 comments) — A 2011 post back on the page: Turbo Pascal 3.02's compiler and IDE were 39,731 bytes, smaller than minified jQuery 1.6, the yahoo.com homepage, or the `touch` binary in OS X Lion. The thread is a referendum on nostalgia versus borrowed robustness, and both sides are right — 1986 machines had 30,000 times less RAM, and none of them had to survive a hostile network.
- **[Tor Project issues a rapid-response DoS fix](https://forum.torproject.org/t/security-release-0-4-9-17/22454)** ([237 points](https://news.ycombinator.com/item?id=50512441), 64 comments) — 0.4.9.17 ships security fixes, one of them specifically for relay DoS defences around IPv6 handling, released fast because the network is under a sustained flood of client circuits overwhelming relays. Tor says more releases are coming and asks operators to upgrade now. A relay operator in the thread found the attack when their home download speed dropped 99% and traced it to the box.
- **[WebGL flight simulator with seeded terrain](https://baron.by.dai.studio/)** ([225 points](https://news.ycombinator.com/item?id=50510296), 57 comments) — A biplane flying game generated from a typed design document, source at `dai-studio/ex-baron` under BSD-2. It runs in Safari, gamepad support works out of the box, and a flight-sim veteran says the dynamics hold up in expert mode apart from the biplane looping on its own power.
- **[25 of my favourite modern NES games](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/)** ([217 points](https://news.ycombinator.com/item?id=50503465), 40 comments) — The "Second ReNESance" is real: the NES is still getting new commercial and homebrew releases because four decades of documentation and tooling have made the hardware pleasant to target. The thread's point is the one that generalises — tooling quality, not talent, sets the ceiling on what a platform produces.
- **[Preserving 30 years of Salon journalism](https://blog.archive.org/2026/11/12/preserving-30-years-of-salon-journalism/)** ([208 points](https://news.ycombinator.com/item?id=50511806), 56 comments) — Salon is closing after 31 years; the Wayback Machine already holds more than 250,000 of its articles across salon1999.com, salonmag.com and salon.com, and the Archive has built a Salon Explorer to browse them. Commenters note the irony that Salon killed its own TableTalk community without preserving it, and that the Archive is now doing for free what a publisher with a brand could not be bothered to.
- **[Whistleblower accuses the Pentagon over a strike that killed six](https://www.cnn.com/2026/11/15/politics/army-soldier-whistleblower-complaint)** ([206 points](https://news.ycombinator.com/item?id=50517838), 70 comments) — Army Maj. Stephen Ramsbottom, injured in the Iranian drone strike on a makeshift operations centre in Kuwait on 1 March, filed a complaint with the House and Senate Armed Services committees alleging the Pentagon ignored warnings about force protection. He calls it a "tactical failure" by the Army, its leadership and himself, and describes the centre as a "trailer park". The thread's observation is the uncomfortable one: the perimeter was hardened against car bombs and not against a competent enemy's air force.

## Still on the page

A hundred and thirty stories on today's list were covered in the last five roundups, and every row below satisfies `prior + delta = now`. The prior figure is what the post that last reported the story ended on, and the label says when. Claude Fable 5.2 is listed against 923 rather than its 11-12 score of 996, because HN applied a penalty to the same submission and a negative delta is not a measurement of anything.

| Story | Last | Nov 16 |
|---|---|---|
| [Jensen Huang resigns](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,047 (11-15) | 4,054 (+7) |
| [SpaceX caught the Ship](https://www.spacex.com/launches/starship-flight-15) | 1,595 (11-15) | 1,739 (+144) |
| [FAA issues national ground stop – lifted 4.5 hours later](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) | 1,646 (11-15) | 1,654 (+8) |
| [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,438 (11-15) | 1,443 (+5) |
| [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com) | 1,288 (11-15) | 1,295 (+7) |
| [All AI-generated code should be open source](https://jakub.jankiewicz.org/blog/ai-code-open-source/) | 937 (11-15) | 1,240 (+303) |
| [Nvidia is preparing to oust Jensen Huang](https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad) | 1,226 (11-15) | 1,226 (+0) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 1,202 (11-15) | 1,204 (+2) |
| [Service degradation on Microsoft 365](https://status.cloud.microsoft/) | 1,171 (11-15) | 1,173 (+2) |
| [Nvidia allegedly engineered scarcity by funding AI startups to buy its GPUs](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) | 1,093 (11-15) | 1,111 (+18) |
| [My AI agents found an unmapped Maya site?](https://pietromiotti.com/latest/maya-site) | 1,036 (11-15) | 1,036 (+0) |
| [Anthropic IPO](https://ipo.anthropic.com/us/) | 1,003 (11-15) | 1,004 (+1) |
| [Lovable apps expose passport details and more than 200K private messages](https://www.crissyfield.de/research/lovable-en/) | 968 (11-15) | 999 (+31) |
| [AWS emulator](https://github.com/aws/aws-emulator) | 991 (11-15) | 992 (+1) |
| [Nvidia CEO Jensen Huang's letter to staff about affair](https://nvidianews.nvidia.com/news/a-message-to-our-company) | 987 (11-15) | 987 (+0) |
| [LibreOffice actually works 365 days a year](https://twitter.com/LibreOffice/status/2121205272479998268) | 953 (11-15) | 957 (+4) |
| [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) | 937 (11-15) | 937 (+0) |
| [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 923 (penalty on 11-12) | 925 (+2) |
| [Rust 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 900 (11-15) | 901 (+1) |
| [Is Opus 5.5 nerfed? Thinking patterns changed on November 3](https://twitter.com/shanemelaugh/status/2119192075505893695) | 825 (11-15) | 825 (+0) |
| [Nvidia employees petition to bring back Jensen Huang](https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/) | 817 (11-15) | 818 (+1) |
| [Reverse engineering my Coway air purifier to ditch the cloud](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 793 (11-15) | 798 (+5) |
| [KetchUp – Open-source SketchUp alternative built with Rust and WebGPU](https://ketchup3d.github.io/app/) | 771 (11-15) | 771 (+0) |
| [Show HN: My $300 embroidery machine needed a subscription, so I built my own app](https://github.com/simpsoka/zigzag) | 740 (11-15) | 741 (+1) |
| [Google Gemini routes personal Drive files and emails to human annotators](https://github.com/thisisme6598/gemini_files/) | 737 (11-15) | 739 (+2) |
| [USPS now offers official ZIP Code boundary polygons](https://postalpro.usps.com/zcb) | 737 (11-15) | 738 (+1) |
| [Amazon saves millions by replacing Sonnet 4.6 with Strands Decider](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 732 (11-15) | 733 (+1) |
| [Socratic Tutor](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) | 714 (11-15) | 718 (+4) |
| [United Airlines bans AI agents from booking flights on behalf of travelers](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/) | 681 (11-15) | 681 (+0) |
| [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 679 (11-15) | 679 (+0) |
| [AI usage generates a fragile codebase](https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/) | 645 (11-15) | 647 (+2) |
| [Unlocking any car from X brand in most of the world](https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/) | 635 (11-15) | 635 (+0) |
| [Why get an expensive Pi when I have an old phone?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 611 (11-15) | 632 (+21) |
| [Tech companies are trying to shift the concept of privacy again](https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again) | 591 (11-15) | 605 (+14) |
| [A false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 588 (11-15) | 588 (+0) |
| [Payments Canada announces launch of Canada's Real-Time Rail (RTR) payment system](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy) | 587 (11-15) | 587 (+0) |
| [Apple has new Mac app coming to make running local AI models easy](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 574 (11-15) | 576 (+2) |
| [KDE: The documentary [video]](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 552 (11-15) | 575 (+23) |
| [Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 570 (11-15) | 572 (+2) |
| [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) | 569 (11-15) | 569 (+0) |
| [Scion is back and is going to sell a kei truck in America](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 563 (11-15) | 563 (+0) |
| [Lutnick is writing the chip rules that touch his old firm's client](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) | 395 (11-15) | 535 (+140) |
| [The DRAM conspiracy suit survives dismissal](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) | 462 (11-15) | 527 (+65) |
| [E-means: Outperforming k-means in one-tenth the epochs](https://e-means.github.io/) | 521 (11-15) | 522 (+1) |
| [Starlink Mini 2](https://starlink.com/mini-2) | 514 (11-15) | 514 (+0) |
| [Monkey Island: all 13 versions side by side](https://monkeyisland.pages.dev/) | 494 (11-15) | 507 (+13) |
| [Gemini 4 Hydrogen and Orchestrator](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) | 504 (11-15) | 507 (+3) |
| [Doomsday: Friday, 13 November, A.D. 2026 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291) | 501 (11-15) | 504 (+3) |
| [The new MacBook Pro's OLED flickers at 240 Hz](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) | 348 (11-15) | 501 (+153) |
| [Blender 5.3 released with Gaussian Splat support](https://www.blender.org/download/releases/5-3/) | 498 (11-15) | 498 (+0) |
| [Show HN: Every satellite that passed over any place this week, and its photos](https://www.watched.earth) | 494 (11-15) | 494 (+0) |
| [Elevated errors on claude.ai, Claude Code, and platform.claude.com](https://status.claude.com/incidents/nn11wk485zfn) | 493 (11-15) | 493 (+0) |
| [Synaptics patent claims stop work on DisplayLink drivers](https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/) | 491 (11-15) | 491 (+0) |
| [Jonathan Blow – If AI solved coding, why is my software still the same? [video]](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 481 (11-15) | 489 (+8) |
| [I'm making LLMs work on small and old devices](https://github.com/hyperionaidev/smolmaxxing/) | 480 (11-15) | 483 (+3) |
| [Microsoft Outlook/365 still down after 12 hours](https://twitter.com/MSFT365Status/status/2121079061774491735) | 468 (11-15) | 471 (+3) |
| [Tracking Anthropic-discovered vulnerabilities](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) | 460 (11-15) | 461 (+1) |
| [Former Nvidia CEO Huang had a relationship with a second employee, sources say](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) | 458 (11-15) | 460 (+2) |
| [A family tree of software job titles](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/) | 426 (11-15) | 458 (+32) |
| [Chinese frontier AI models carry the fingerprint of export-controlled GPUs](https://unemploymentlabs.com/checkpoint-forensics) | 425 (11-15) | 448 (+23) |
| [Hyper-realistic sand with WebGL2](https://av.github.io/safe-sand/) | 448 (11-15) | 448 (+0) |
| [Show HN: Get your coding agent off ~2019 JavaScript, onto modern web primitives](https://github.com/GoogleChrome/modern-web-guidance) | 447 (11-15) | 448 (+1) |
| [Claude Code and Codex reverse engineered my 1994 Jeep's ECU](https://www.youtube.com/watch?v=WPj3aQ-xxpI) | 238 (11-15) | 445 (+207) |
| [AI unlocks Gödel's notebooks, said to contain hundreds of proved theorems](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) | 436 (11-15) | 442 (+6) |
| [Terminal borders that don't cost a cell](https://www.joshka.net/cell-borders/) | 420 (11-15) | 426 (+6) |
| [Val Town is winding down](https://blog.val.town/winding-down) | 424 (11-15) | 425 (+1) |
| [Ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 414 (11-15) | 419 (+5) |
| ["Humble Bundle just killed most of their security through vibecoding"](https://forums.spacebattles.com/threads/humble-bundle-just-completely-killed-most-of-their-security-through-vibecoding.1346295/) | 413 (11-15) | 415 (+2) |
| [Jensen Huang said to have had relationship with executive who reports to him](https://www.nytimes.com/2026/11/11/technology/jensen-huang-nvidia-affair.html) | 411 (11-15) | 412 (+1) |
| [Benchmark scores do not survive a three-line change](https://maxxbench.unlap.ai/research/why-maxxbench/) | 409 (11-15) | 409 (+0) |
| [Italy fines Meta $887M over Android users' data access](https://www.reuters.com/world/italy-fines-meta-887-million-over-android-users-data-access-2026-11-14/) | 397 (11-15) | 408 (+11) |
| [It Takes 16 Clicks for a Student to Open a PowerPoint on an iPad](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/) | 404 (11-15) | 408 (+4) |
| [Protecting SSH Keys with macOS Secure Enclave](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/) | 402 (11-15) | 403 (+1) |
| [Dwarf planet candidate appears which takes roughly 280 years to orbit our sun](https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/) | 394 (11-15) | 396 (+2) |
| [$11.4M in Nvidia hardware vanishes during shipment from CA to TX](https://www.freightwaves.com/news/11-4-million-in-nvidia-hardware-vanishes-during-shipment-from-california-to-texas) | 383 (11-15) | 386 (+3) |
| [Writing correct software is hard and math alone won’t help us (2016)](https://pron.github.io/posts/correctness-and-complexity) | 375 (11-15) | 375 (+0) |
| [A live tree of systemd jobs on the boot console](https://codeberg.org/wvhulle/bootvine) | 375 (11-15) | 375 (+0) |
| [IceWM](https://ice-wm.org/) | 374 (11-15) | 374 (+0) |
| [AI is destroying the trust between writers and readers](https://www.theatlantic.com/books/2026/11/ai-literary-scams-amazon/689391/) | 369 (11-15) | 371 (+2) |
| [Critical RCE Vulnerability in Apache HTTP Server](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) | 369 (11-15) | 371 (+2) |
| [The EFF wants a warrant to search plate-reader history](https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches) | 324 (11-15) | 357 (+33) |
| [Edge0-145B: Frontier AI Capabilities on Your Own Computer](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer) | 355 (11-15) | 357 (+2) |
| [Using voltage glitching to unleash the A100 in my mining card](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/) | 353 (11-15) | 354 (+1) |
| [Six Math Essentials](https://teorth.github.io/tao-web/six-math-essentials.html) | 342 (11-15) | 342 (+0) |
| [Lock Your GitHub Actions](https://hugovk.dev/blog/2026/lock-github-actions/) | 337 (11-15) | 337 (+0) |
| [Muse Ember: Our smallest, most efficient model](https://research.meta.ai/blog/muse-ember) | 334 (11-15) | 334 (+0) |
| [How did Woz write the Apple 1 BASIC before building the computer?](https://retrocomputing.stackexchange.com/questions/17957) | 305 (11-15) | 319 (+14) |
| [Project Zero will publish 90 days after you are told](https://projectzero.google/2026/11/disclosure-policy.html) | 301 (11-15) | 316 (+15) |
| [Abandoned Quake 4 expansion finished by modders and now playable](https://www.moddb.com/mods/openq4/downloads/openq4-0141-windows-x64) | 309 (11-15) | 310 (+1) |
| [Show HN: Yogurt – Free, private, open-source alternative to Granola](https://github.com/FrigadeHQ/yogurt) | 305 (11-15) | 305 (+0) |
| [Ask HN: What are you working on?](https://news.ycombinator.com/item?id=50417407) | 303 (11-15) | 303 (+0) |
| [Claude Whiteboards, Claude Sheets, and Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) | 298 (11-15) | 298 (+0) |
| [After 600 experiments, here's what I discovered about JEPA world models](https://haddyalchaer.com/jepa) | 293 (11-15) | 295 (+2) |
| [Can a Linear Program Do Weight-Space Programming?](https://nathan.rs/posts/weight-space-lp/) | 294 (11-15) | 295 (+1) |
| [Global Microsoft Outage](https://www.cnn.com/2026/11/12/business/live-news/microsoft-global-outage-intl-hnk) | 293 (11-15) | 294 (+1) |
| [LinkedIn and Monster took down the MLM's job ads](https://www.cbc.ca/news/canada/linkedin-monster-take-down-over-1-000-fake-job-postings-after-cbc-investigation-9.7415379) | 281 (11-15) | 293 (+12) |
| [Live airband on all frequencies from KORS. Victoria, CA also ground stopped](https://orcasairband.com/) | 293 (11-15) | 293 (+0) |
| [A honeypot for supermarket fridges](https://github.com/hedgerow-dev/coldframe) | 290 (11-15) | 290 (+0) |
| [A great old-timey game-programming hack (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html) | 289 (11-15) | 289 (+0) |
| [Your TV can see through walls (2025)](https://maurycyz.com/projects/fading/) | 285 (11-15) | 286 (+1) |
| [What constant surveillance is doing to children and parents](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 281 (11-15) | 282 (+1) |
| [PyPI's redesigned project pages with clearer security signals are now live](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/) | 269 (11-15) | 278 (+9) |
| [FM-1 Workbench](https://open.m-vave.com/fm1-workbench) | 272 (11-15) | 278 (+6) |
| [Show HN: DeepSeek V3 in 190 lines of pure JAX](https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax) | 268 (11-15) | 275 (+7) |
| [AMD's Zen 6 Family: Feeding the Beast](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 274 (11-15) | 274 (+0) |
| [Foundation Models framework](https://developer.apple.com/foundation-models-framework/) | 267 (11-15) | 269 (+2) |
| [Our software engineering interviews are changing a little](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) | 263 (11-15) | 267 (+4) |
| [Brave Search API now accepts agentic payments via the x402 protocol](https://brave.com/blog/search-api-agentic-payments/) | 262 (11-15) | 262 (+0) |
| [Show HN: Valencia, Spain in Sim City/Isometric View](https://tinyvalencia.com/) | 261 (11-15) | 261 (+0) |
| [Horible public key tricks](https://maurycyz.com/projects/badcert/) | 261 (11-15) | 261 (+0) |
| [Found: A protein that drives ageing without unleashing inflammation](https://www.nature.com/articles/d41586-026-03638-3) | 257 (11-15) | 259 (+2) |
| [Unsloth Qwen3.8-27B Quantizations – Dynamic v3.1 Update](https://unsloth.ai/docs/models/qwen3.8) | 257 (11-15) | 259 (+2) |
| [Show HN: Isometric SF – A pixel-art map of the SF Bay Area](https://isometricsf.com/) | 252 (11-15) | 254 (+2) |
| [Why did some Apollo missions carry a grenade launcher?](https://space.stackexchange.com/questions/37775) | 200 (11-15) | 249 (+49) |
| [Show HN: I recreated Papers Please but you're deciding which YC startups to fund](https://termsheetplease.com/) | 247 (11-15) | 248 (+1) |
| [Faster Retrieval for Better, More Efficient RAG](https://machinelearning.apple.com/research/faster-retrieval) | 241 (11-15) | 241 (+0) |
| [Atuin Threads: All your agent sessions on every machine](https://blog.atuin.sh/threads-agent-sessions/) | 239 (11-15) | 241 (+2) |
| [Talking Zen 6 with Mike Clark at AMD In-Depth](https://chipsandcheese.com/p/talking-zen-6-with-mike-clark-at) | 239 (11-15) | 239 (+0) |
| [A technical vision for the Haskell ecosystem](https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078) | 231 (11-15) | 232 (+1) |
| [Turning a 22-year-old Postgres type-confusion primitive into RCE](https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-2026-6460/) | 232 (11-15) | 232 (+0) |
| [The languages that cost the most energy also score the worst](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/) | 231 (11-15) | 231 (+0) |
| [We need more goat sacrifices](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) | 226 (11-15) | 228 (+2) |
| [Show HN: Live map of U.S. flights during tonight's FAA nationwide ground stop](https://grounds.top/) | 215 (11-15) | 218 (+3) |
| [The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough) | 214 (11-15) | 215 (+1) |
| [Advancing science and engineering with Antigravity's /teamwork](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) | 210 (11-15) | 214 (+4) |
| [All US airports are currently ground stopped](https://twitter.com/flightradar24/status/2121347654714077605) | 213 (11-15) | 213 (+0) |
| [Queens Public Library under ransomware attack](https://connect.queenslibrary.org/) | 213 (11-15) | 213 (+0) |
| [On Being an Engineer in 2026](https://shahar.blog/2026/11/08/on-being-an-engineer-in-2026/) | 203 (11-15) | 205 (+2) |
| [Minnesota guitarist's "palmfrets" invention strikes a new chord](https://www.echopress.com/business/minnesota-guitarists-invention-strikes-a-new-chord) | 201 (11-15) | 202 (+1) |
| [What happened to 3Com?](https://dfarq.homeip.net/what-happened-to-3com/) | 200 (11-15) | 200 (+0) |

## Throughline

**Every failure today was a design decision that had been invisible until it wasn't.** A pool alarm with one path to a human, routed through a cloud the hotel doesn't run. A short-link service whose uniqueness invariant was stated on a help page and silently violated for years. An element picker that accepts filters from a page and a random UUID that the page can read. A bank stack that five competitors apparently share and none of them can describe. The vendors are convenient defendants — Microsoft, Bitly, whatever broke Zelle — and in each case the vendor's outage was survivable. What wasn't survivable was that nobody else downstream knew anything had happened. "Who else would have noticed?" is the question the front page asked all day, and in every instance the answer was nobody.

**The AI money story has moved from capability to cost and control.** Qwen4-Max is a closed flagship that one benchmark scores below the company's own open 27B, at nine times the price of a competitor's better score — the interesting artifact in that family is the small one you can run. Steve Blank's question about Nvidia is not really about chips; it is what happens when the customers build their own and the software moat stops being a moat. And the most-upvoted thing on the page for a fifth straight day is still a CEO's resignation, at 4,054 points, followed by a WSJ piece asserting the board had to oust him, followed by a Wired story about employees petitioning to bring him back. The money has not stopped moving. It has stopped being able to tell a coherent story about itself.

**And the counter-programming was, as usual, things that are small and finished.** A compiler and IDE in 39,731 bytes, still smaller than `touch`. A 139GB map you host for the price of a coffee because the format is one file and the CDN already knows how to read part of a file. A font assembled from twenty-six letters in a browser, never uploaded. A syllabus whose whole thesis is that knowing the name of a tool is the prerequisite for using it. A datetime library that says what it is not for, shipped by a man who also wrote the search tool and the regex engine. The front page's anxiety is about scale and dependency. Everything on it that will still matter in five years is a single file, a small program, or a piece of writing that told the truth about its own limits.
