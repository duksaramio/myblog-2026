---
title: "Hacker News Front Page Roundup — November 18, 2026"
pubDate: 2026-11-18
description: "AI finds a decade-old bug in nginx and a memory-corruption flaw in Java's Base64 decoder on the same day, Microsoft's package supply chain gets taken apart, and Google's own randomized experiment confirms AI Overviews cost publishers 40% of their clicks."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

A hundred and fifty-one stories cleared 200 points in a full scan of the ranked list today, and twenty-six of them are new. The rest were reported here in the last four nights; their updated scores are in the table at the bottom.

Two memory-safety bugs in bedrock infrastructure landed within twenty-four hours of each other, both found with AI harnesses, both sitting in production code for years. One had been there since 2015. The other lives in Java's Base64 decoder, which is a sentence that should not be possible to write. Meanwhile the actual damage of the day came from the trust layer — a CDN, a package registry, a DNS resolver, a domain registrar — not from anything anyone wrote wrong.

## Java4Shell: memory corruption in the JDK's Base64 decoder — 1,143 points

**1,143 points** · 316 comments · [calif.io](https://calif.io/java4shell/) · [HN discussion](https://news.ycombinator.com/item?id=50538240)

CVE-2026-114938, CVSS 4.0 of 9.2. A remote attacker with no credentials can overwrite heap memory in OpenJDK, read it back Heartbleed-style, and reach remote code execution. The trigger is 64 `A` characters followed by a single `=`. On OpenJDK 17 it is 128 `A` characters followed by `=`.

The mechanism is specific enough to be believable, which is the first test any advisory has to pass. OpenJDK uses AVX-512 VBMI instructions to decode Base64 faster on supported x86-64 CPUs. The bug is in the hand-rolled assembly that handles the trailing characters. For that 65-character input, OpenJDK allocates a 50-byte result array. After decoding the first 64 characters the routine mishandles the stray `=`, computes a negative output length, and that invalid length becomes a full 64-byte write — 62 bytes past the end of the array. Java rejects the input eventually. By then the neighbours are already corrupted.

The affected set is large and the caveats are real. OpenJDK 17.0.6 and newer, on x86-64 with AVX-512 VBMI — Intel Ice Lake through Granite Rapids, AMD Zen 4 or newer. ARM64 is not affected. Calif demonstrated pre-auth RCE against Keycloak, Jira, Confluence, JFrog Artifactory, Jenkins and PingFederate in default configurations, and post-auth against Kafka, Solr, Elasticsearch, Gerrit and Spinnaker. It also demonstrated that a Java client opening a TLS connection to a hostile server can be compromised with samczsun's client-side chain, which means "we don't expose a service" is not a mitigation. There is no universal exploit; each deployment needs its own chain.

What makes this one worth more than a cursory read is the disclosure economics. Calif's Quang Luong found it in an hour and had a working exploit in three. Total token cost: under $200. Calif calls the result a "centaur hacker" and the framing is half marketing — they are selling a brand of AI-assisted research — but the arithmetic is the argument. An hour of a good researcher's attention plus two hundred dollars of inference produced a critical pre-auth RCE in the runtime that banks, aviation and telecom run on. That is a new price point for offensive research, and the defensive side has not adjusted.

The comment thread is more useful than the advisory. Semgrep published free detection scripts keyed to five conditions — HotSpot-family VM, x86-64 host, 17.0.6+, not in the fixed set, AVX-512 present — which is the practical way to triage a fleet. A commenter spotted `-XX:UseAVX=2` as a workaround before the vendor published anything. And the heap-grooming section admits what most write-ups hide: the attack is sensitive to RTT and jitter, so Calif rented a VM in the same region as the target rather than fight the network. The exploit is real and the reliability numbers assume you are close.

Patch. OpenJDK's advisory and Oracle's CPU both landed 17 November at 1pm PT. If you cannot patch, `-XX:-UseBASE64Intrinsics` disables the accelerated path, or `-XX:UseAVX=2` disables AVX-512 — on x86-64 only, since ARM JVMs will refuse to start with that flag.

## Quad9 pulls out of France — 870 points

**870 points** · 418 comments · [blog.cloudflare.com](https://blog.cloudflare.com/quad9-withdrawal-from-france/) · [HN discussion](https://news.ycombinator.com/item?id=50538994)

On 24 November, Quad9 — the Swiss non-profit behind 9.9.9.9 — stops answering DNS queries from France. It is not leaving over costs. A Paris court fined it for refusing to block a list of pirate sports-streaming domains on behalf of beIN Sports, and with around twenty similar cases pending, leaving is the only option it can afford.

Cloudflare's post calls this a canary in the coal mine, and then declines to say what Cloudflare will do if the same thing happens to it. Commenters notice. The most-upvoted criticism in the thread is not aimed at France: it is that Cloudflare spends four paragraphs implying it might withdraw and never commits to a trigger. A Belgian court has already issued an order that would penalise Cloudflare, Google and Cisco if they do not start blocking through their public resolvers by early January 2027. Cloudflare has never done this. It will either do it or it won't, and the blog post is written to keep both options open.

The operational detail is the part that should worry people, and Cloudflare states it plainly: Quad9's French users include government bodies, educational institutions, hospitals and utilities, and Quad9 has no way to tell them. There is no customer list to email. When the resolver stops answering, those networks fail with no explanation and no error message that points anywhere useful. Cisco withdrew OpenDNS from France, Portugal and Belgium under similar pressure. The pattern is that DNS blocking orders are cheap to issue and the resolver's only real defence is to leave, which converts a copyright dispute into an outage for public infrastructure.

Quad9's CTO John Todd turns up in the thread to say he is at IETF 127 and has yet to meet anyone outside the rightsholder industry who supports the French outcome. He also asked readers for a long-form, sourced argument to send to policymakers — and one appeared: a 485-point companion post walking every claim back to a court ruling or primary document. That is a better use of a front-page thread than most. The post's own conclusion, that public DNS resolvers are the wrong chokepoint because the collateral is concentrated on people who cannot route around it, is not a novel argument. It is just correct, and it has now lost twice.

## Two unauthenticated RCEs in nginx, one of them 11 years old — 787 points

**787 points** · 329 comments · [wiz.io](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) · [HN discussion](https://news.ycombinator.com/item?id=50547374)

CVE-2026-123633 and CVE-2026-123007, both critical at CVSS 4.0 9.2, both unauthenticated RCE, both requiring HTTP/2 to be enabled. The integer underflow in CVE-2026-123007 dates back to nginx 1.9.5 in 2015. The use-after-free is roughly six years old. Wiz, Ikotas Labs, Metnir, Rapid7 and Xint found them independently, which is the detail that should recalibrate how you think about "nobody has found this yet."

Wiz demonstrated code execution on nginx serving ordinary static files — no backend application, no third-party modules. That matters because the reflex defence for a reverse-proxy bug is "the app behind it is fine," and here the proxy is the target. nginx fronts 225 million-plus websites. HTTP/2 is not on by default and roughly 12% of servers run it, which is still an enormous number at internet scale. Disabling HTTP/2 is a complete mitigation, which is also why the disclosure timeline deserves scrutiny.

Read the dates. Wiz reported CVE-2026-123633 on 21 October. F5 supplied a patch for review on 10 November. The fix had meanwhile landed in the open-source repository a week before the coordinated release, and per a commenter the commit message named Xint.io as the reporter. That is a week during which anyone watching nginx commits for exploitable bugfixes had both the vulnerability and a strong hint that it was serious, while defenders had nothing because no PSA went out. F5's release and disclosure came 18 November. The argument that a public "disable HTTP/2 now" notice would have been worth the information leak is not obviously wrong.

Wiz is candid about why this is happening now, and it is the same reason as Java4Shell: their Atlas AI harness found both bugs, and Gemini 4 Carbon and ChatGPT 5.6 Sol were used to validate impact. Their line — "complexity can no longer be relied on as a barrier to discovery or exploitation" — is the thesis of the week. Three memory-safety bugs in three foundational pieces of software, PHP, nginx and the JDK, inside two weeks, all in code that had survived years of human review.

## AI is killing All About Berlin — 732 points

**732 points** · 664 comments · [nicolasbouliane.com](https://nicolasbouliane.com/blog/death-by-ai) · [HN discussion](https://news.ycombinator.com/item?id=50542705)

Nicolas Bouliane has run All About Berlin since 2017 — a guide to German bureaucracy for immigrants, the kind of site that exists because officialdom is illegible and someone did the reading for you. Berlin's immigration office uses his data *about itself*. His traffic grew for seven years and then lost roughly 75% to Google's AI Overviews. He now gets one result below the ads, then an AI answer trained on his work, then a link.

Worth flagging properly: this post is a few months old and is on the front page as a resubmission. Bouliane says so in the thread himself, and says things have since got worse but he can still live off the site, and next year might be his last running it full time. The reason it resurfaced is not the traffic graph. It is that Google announced last week that AI answers will replace search results entirely, with ads in them, which turns a trend into a stated destination.

The thread is the most useful thing on the page today about what this feels like from the inside, and it is not really about money. Bouliane's line is that the traffic loss is survivable and the loss of voice is not: "If my work just gets mixed into an AI-generated answer, I lose my voice and my audience. My carefully chosen words lose their meaning. No one shakes my hand and buys me a beer." A commenter supplies the structural critique that makes it more than sentiment — a search engine was arguably always a questionable legal proposition, but it was tolerated because the deal was reciprocal: Google shows a snippet, Google sends you the reader. AI Overviews break that contract while keeping the scraping. An LLM is a copyright laundromat: it transforms the text enough to sever the link back to whoever wrote it, and the transformation is the product.

The practical advice in the thread is paywall everything you care about, which is honest and also a description of where the web is going: a small number of subscription sites written for people who pay, a large AI-generated layer written to be summarised, and no middle. The middle is where All About Berlin lives.

## AI answers cut publisher clicks by 40% — 676 points

**676 points** · 525 comments · [revscope.co](https://revscope.co/blog/search-seo-geo-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50540178)

This is the number behind the previous section's traffic graph, and it finally has a design behind it. RevScope's write-up covers a randomized field experiment by Saharsh Agarwal and Ananya Sen: AI Overviews were hidden from a subset of US desktop users, and the treated and untreated groups were compared. Showing an Overview cuts clicks to outside websites by about 39.8%.

That is a randomised result, not a correlation from traffic dashboards, and it lands almost exactly on the estimate the SEO industry had been reporting from observational data — SparkToro put zero-click searches at 68% in early 2026 against 60% in 2024, and Ahrefs measured a 58% CTR drop for top-ranking pages when an Overview appears, up from 34.5% about eight months earlier. When the instrumented experiment and the messy observational numbers agree to within a point, the argument is over.

The thread's honesty is worth more than the number. The top comment concedes the product is better: asking who is on SNL tonight used to mean ten pages of clickbait and a scroll, and now the answer is just there. Several commenters say they personally reduced their own search traffic by more than 40% because they wanted answers, not a search. The disagreement is not about whether users benefit. It is about whether the answer layer can exist without the layer underneath it, and nobody in the thread has a mechanism for that.

The bear case, stated better in the comments than in the post: as the pages that AI answers are trained on stop being written, the answers get worse, and the vacuum fills with pages written specifically to steer them. That is not a prediction about Google's incentives. It is what already happened to search results, one iteration earlier, and the same actors will run the same play.

## The Nvidia Singapore line item — 650 points

**650 points** · 295 comments · [ft.com](https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf) · [HN discussion](https://news.ycombinator.com/item?id=50534631)

The FT's story is paywalled and would not load, so treat this as the thread's version rather than the article's. What it says: Nvidia stopped breaking out Singapore revenue just as total revenue hit $104bn, and the timing coincides with the Megaspeed sanctions story and Jensen Huang's resignation.

Two comments do the work the article should have done, and they point in opposite directions. The first is that the $104bn figure is the external revenue of Nvidia's Singaporean subsidiary, and it includes any order routed through that entity — which is normal, because end customers do not buy from Nvidia. They buy through OEMs and ODMs: Wistron, Foxconn, Asus, Lenovo. When a hyperscaler orders servers, one of those books the order, and the geography follows the invoicing entity, not the racks. On that reading the number is an accounting artefact and the "$104bn in Singapore" framing is a category error.

The second comment is the one that needs an answer. Someone pulled the actual 10-Qs. July 2025 reported geographic revenue "based upon Customer Billing Location," and Singapore was called out at $10bn in a quarter. After July 2025 the table changed to "based upon Customer Headquarters Location." That is the kind of change that makes a jurisdiction vanish from a disclosure without any revenue moving, and it happened in the same window as the export-control scrutiny. Whatever the underlying facts, a company that changes the basis of a geographic disclosure right as that geography becomes legally interesting has invited the suspicion it is now getting.

## ID.me's terms come attached to your tax filing — 482 points

**482 points** · 251 comments · [consumerrights.wiki](https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in) · [HN discussion](https://news.ycombinator.com/item?id=50540437)

The wiki page is dry and that is the point: it documents what you agree to when you sign into the IRS with ID.me. Disputes go to binding arbitration instead of a judge or jury unless you opt out within thirty days. The privacy policy says ID.me "may use information for marketing purposes" and may transfer information in a sale or merger. There is a carve-out — identity data from state or federal verification is not used for marketing on ID.me Shop without consent or another listed exception — and the existence of that carve-out is itself the finding. It tells you the default is otherwise.

ID.me replaced the traditional login for TreasuryDirect on 28 October. Login.gov, which the government actually runs, also works for IRS sign-in, and IRS Direct Pay takes bank-account payments with no sign-in at all. So the mandatory framing is wrong; the alternatives exist and are just less advertised.

The thread produces the failure mode you would expect and could not have invented. Signing up for ID.me requires a smartphone. A commenter knows someone with TreasuryDirect bonds who does not use one and now apparently cannot cash out. Another sold every bond at a penalty before the switch to avoid ID.me entirely. The White House has said all agencies must offer Login.gov within two years. That is a long time to hold a savings bond you cannot reach.

## Thirty unpaid hours, then they used his LinkedIn — 478 points

**478 points** · 125 comments · [reddit.com](https://reddit.com/r/recruitinghell/comments/1xyr6ml/interviewed_at_a_yc_startup_spent_30_hours/) · [HN discussion](https://news.ycombinator.com/item?id=50542135)

A candidate went through a YC-backed recruiting startup's full process: ten hours of take-home work, then a two-day on-site in San Francisco at ten hours a day. Thirty hours, unpaid, doing the actual job — reaching out to real candidates, taking calls, pitching them to the company's real clients. Connecting his personal LinkedIn to their platform was a stated prerequisite.

Three weeks of silence later, he found his account had been sending connection requests and messages without his knowledge. The messages introduced him as an employee of the startup. Replies were routed to an actual employee. His name, his network, their leads.

There are two separate problems and the thread keeps collapsing them. The first is that thirty hours of unpaid work producing direct client value is a labour-law violation in most of Europe and a straightforward abuse everywhere else — commenters note the UK allows unpaid trial shifts only when the employer does not gain directly from them, which is exactly what happened here. The second is that "connect your LinkedIn" is being collected as an asset, and nobody has written a norm about what a company may do with an OAuth grant once the candidate stops being useful to them.

The YC association is doing work in the headline, and it is fair: YC publishes rules for its companies and has views about how they hire. This is the sort of thing a batch-level standard is supposed to prevent, and the candidate's only recourse was a Reddit post.

## Phrack 73 — 459 points

**459 points** · 72 comments · [phrack.org](https://phrack.org/issues/73/introduction_md) · [HN discussion](https://news.ycombinator.com/item?id=50535992)

The issue landed 17 November, the first since August 2025, and it is enormous. A prophile on Halvar Flake. A Docker escape through vDSO. UAF exploitation "in the Sheaves era." A Chromium renderer sandbox escape via Skia — by Quang Luong, the same researcher whose Java4Shell disclosure is the top story today. A study of heap feng shui using Lua. Two WinFsp 0-days out of PhrackCTF. Something called Mystique, an x86 metamorphic compiler.

What makes this issue a document rather than a nostalgia object is that three of the articles are about the thing everyone else on today's front page is arguing about. "A Journey Into Kernel Exploit Development in the LLM Era." "Reflections on Trusting AI: A Virus Inside an LLM." "Backdoor attacks against Machine Learning IRL." The scene has not been disrupted by AI; it has absorbed it, and the same people who write the shellcode are writing the analysis of what agents do to it.

The thread asks the question Phrack has never answered cleanly: when an issue contains a working Docker escape, was that disclosed responsibly first? Sometimes. Not always, and not by policy. That ambiguity is load-bearing for Phrack's continued existence and everyone in the thread knows it.

## Microsoft's repos went dark, and the reason is worse than the outage — 444 points

**444 points** · 96 comments · [github.com/microsoft/onnxruntime](https://github.com/microsoft/onnxruntime) · [HN discussion](https://news.ycombinator.com/item?id=50539610)

At about 22:20 UTC on 17 November, `github.com/microsoft/onnxruntime` started returning 404. No notice, no redirect, no archive banner. Seven or more related Microsoft repositories went with it, taking issue history and security discussions along. `pip install onnxruntime` and the NuGet package still work and are still signed; `onnxruntime.ai` docs are still up. If you build from source, `curl` a GitHub releases asset, or use git submodules, your CI broke without an explanation.

The explanation, per The Register, is that Microsoft's official Python `agent-framework` package was hijacked. Versions 1.26.1 and 1.26.2 on PyPI install an info-stealer. Version 1.26.1 was reverted to a safe release; 1.26.2 was then uploaded through Microsoft's official PyPI publisher account, which suggests the credentials were still live when researchers reported the first one. The package has roughly 200,000 downloads a month.

The malware is nasty in a specific way: it does not need to be imported. A Python interpreter with the package installed is enough to trigger collection of environment variables and credential files for Azure, Git, Docker and Hugging Face, base64-encode them into a JSON blob, and post them to a hardcoded `webhook.site` address. It pulls the genuine 1.26.0 to keep working and look legitimate. It is not persistent — it runs once on interpreter startup — which is worse for detection, not better, because there is no implant to find afterwards.

Microsoft's statement is "we have made some repositories private while we investigate malicious content." Neither Microsoft nor the researchers have linked the ONNX Runtime takedown to the package compromise, and it is possible this is a precautionary sweep, or the same thing Microsoft did in June 2026 when it yanked about 70 repositories after detecting malicious code. But note what the shape of the response tells you: the only lever Microsoft had at that moment was to make its own code unreachable. Every downstream build that depended on the public repo paid for a compromise three hops away.

## Microsoft ships seven models and calls it price-performance — 415 points

**415 points** · 167 comments · [microsoft.ai](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/) · [HN discussion](https://news.ycombinator.com/item?id=50535885) · [Ignite lineup, 331 points](https://news.ycombinator.com/item?id=50548021)

The Ignite lineup is seven models, and the announcements are structured so that nearly every claim is a ratio against someone else's model rather than an absolute: MAI Cyber 2 Flash beats GPT-6 Astra's quality at under 2% of the cost per task on CyberGym-E2E. MAI Code 2 reaches 98% of GPT-6.1 Sol at about 40% of the price and 96% of Opus 5.5 at 5%. MAI Code 2 Flash matches GPT-6 Luna at 65% and Haiku 5.5 at 20%. MAI Image 2.7 tops Artificial Analysis image editing at a fifth of GPT Image 2.6 Sunburst's price. MAI Realtime 1 beats GPT-Realtime 2.1 from $0.01 per audio minute.

The footnote structure is doing a lot of work and mostly in Microsoft's favour, which is unusual. Code 2's numbers are averaged across DeepSWE 1.1, Terminal Bench 2.1, SWE-Atlas and FrontierCode v1.1, and the post says outright that these models are "explicitly not yet tuned for harder problems, like fundamental science research and very long-horizon agentic work." That is a vendor volunteering the boundary of its benchmark. Take the win.

The thread's live report is more informative than the table. One commenter says Copilot offered MAI Code 2 at half price today, they switched, and it resolved tricky Python build problems inside WSL and a stack of Azure Bicep deploy errors — "didn't feel the difference from Claude Opus." A second says the same. That is two anecdotes, but they are anecdotes about production work rather than a leaderboard, and they line up with the 96%-of-Opus-at-5%-of-price claim. Which is the actual threat to Anthropic and OpenAI: not that Microsoft has the best model, but that the second tier is now close enough that the price gap decides. A commenter puts the obvious conclusion on it — if this holds, an Anthropic IPO at frontier multiples is a bad buy.

## Deutsche Bank, 15 million files — 409 points

**409 points** · 145 comments · [inside-db.com](https://www.inside-db.com/) · [HN discussion](https://news.ycombinator.com/item?id=50547620)

A coordinated investigation across Himal, the FT, Malaysiakini and Dawn, built on a leak of more than 15 million files — mostly Outlook mailbox exports — covering the functions a bank least wants read: anti-financial crime, sanctions monitoring, internal audit, and the committees that decide which risky clients stay. Among the published findings: at least 24 transactions totalling €172.98 million linked to Jho Low, dealings with a Qatari royal that blurred the line between investor, client and counterparty, and a tax model promoted to Siemens that costs the German treasury up to €30 million a year.

The best comment in the thread is from one of the reporters, on the stack: the consortium shared the corpus through OpenAleph, an ElasticSearch-based tool with the FollowTheMoney schema, work that traces back to Friedrich Lindenberg. Fifteen million documents is not a number a newsroom reads. It is a number a newsroom queries, and the reason this story exists in 2026 rather than 2016 is that the tooling caught up.

The methodological objection is legitimate and unanswered: the consortium says it will keep evaluating journalistically for months and will not publish the raw data. A commenter points out that selective omission is a complete narrative-control mechanism that requires no lying at all. The counter — that raw mailbox dumps contain the personal data of uninvolved people — is also true. Both things are true, and the story will be shaped by whichever one the consortium weights.

## 350 years since Rømer measured the speed of light — 402 points

**402 points** · 135 comments · [sciencenorway.no](https://www.sciencenorway.no/culture-history-history-of-science/350-years-ago-this-man-discovered-that-light-has-a-finite-speed/2737969) · [HN discussion](https://news.ycombinator.com/item?id=50536813)

In 1676 Ole Rømer noticed that the eclipses of Io drifted against the predicted schedule depending on where Earth was in its orbit, and read the drift as light taking time to cross the distance. He got the value wrong by a wide margin, because the astronomical unit was wrong. The inference was correct anyway, which is the interesting part — a right conclusion drawn from a measurement whose scale was off by a factor he could not check.

The page itself is thin and the article body would not load. The thread is the value: a commenter links a comic built on the measurement, another the Kroppedal museum just outside Copenhagen where Rømer's observatory stood, a third a better-explained video. Someone notes that when they ask people when humanity first realised light had a finite speed, the most common guess is 1950.

## AI coding agents moved the bottleneck to review — 311 points

**311 points** · 421 comments · [complexdiscovery.com](https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/) · [HN discussion](https://news.ycombinator.com/item?id=50538303)

A working paper by Harvard PhD candidates Fiona Chen and James Stratton, covering 718 firms. Engineers at firms that adopted AI coding agents added about 30% more code. Finished work did not measurably rise. Getting code through review took 49% longer.

Caveat it properly: this is a job-market paper with no indication of completed peer review, and it measures one checkpoint. But the direction is what matters and it is not subtle. The tool removed the cost of producing code and left the cost of accepting it untouched, so the queue moved. Any organisation that bought agents and measured "lines of code" or "PRs opened" saw a triumph and shipped the same amount of software.

The comments are the field report and they converge from different directions. One reviewer with 25 years of experience says agents now write code at least as well as they do, and review each other's code better than they do at finding issues — but that finding issues is only part of review. Another says their whole job has become reviewing over-built merge requests: AI solutions work but arrive over-engineered, where a human under deadline pressure would have picked the simple thing. A third: "All I do all day is review ai written code. my own or teammates. I really do not enjoy it."

## Codeberg's domain was suspended by its registrar — 291 points

**291 points** · 294 comments · [social.anoxinon.de](https://social.anoxinon.de/@codebergstatus/117636437840688845) · [HN discussion](https://news.ycombinator.com/item?id=50544261)

For a stretch of the day, codeberg.org returned nothing at all. Not a 502, not a certificate error — the domain was entirely unreachable, because it had disappeared from Codeberg's NameSilo account. NameSilo later confirmed the domain was suspended and forwarded the case to its abuse team. It recovered on DNS propagation, and Codeberg still had no official answer from the abuse department.

The uncomfortable detail is that Codeberg is a German non-profit and chose a US registrar. That is a single point of failure for an entire forge, held by a company that can suspend the domain before anyone explains why, and the only recovery path is an abuse queue with no SLA. Commenters make the national-sovereignty point in both directions: registrars are where jurisdictional power actually bites, and "we would never" is not a control.

## Energy-Based Reasoners claim 385x cheaper inference — 284 points

**284 points** · 44 comments · [energy-based-reasoners.github.io](https://energy-based-reasoners.github.io/) · [HN discussion](https://news.ycombinator.com/item?id=50543989)

A research site claiming 385x more efficient inference via energy-based models, the architecture Yann LeCun has been arguing for through Logical Intelligence. The claim is plausible in mechanism — an EBM iterates toward a low-energy solution instead of sampling tokens, so it can spend compute proportional to difficulty rather than sequence length — and the caveats are the ones that have kept EBMs out of production for a decade.

The thread has two comments worth reading and they are both deflating in a useful way. One walks through what the method is actually doing on sudoku: zero out probabilities for clue violations, rank cells by energy, repair the worst conflicts first. That is a constraint solver with extra steps, and the commenter says so politely. The other has spent a year on EBMs: "they are impressive validators, it's insanely hard to train them. They are very niche specific." The 385x is an inference number. Training is where the bill is, and the site leads with the number that isn't.

## Why Gemini 4 Carbon is slow — 259 points

**259 points** · 135 comments · [kernel.dev](https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/) · [HN discussion](https://news.ycombinator.com/item?id=50541790)

An analysis of why Google's frontier model has poor token throughput and poor token efficiency. The thread's consensus explanation is structural rather than a bug: Google has the compute to optimise for quality and served efficiency with a separate model, Hydrogen. Carbon is the quality play, and the bill for that choice is paid by every user waiting on it.

The interesting counter-observation, from someone using it for real work: Carbon is slow but "solves problems with a light touch while still driving toward sensible architecture" after "Claude's bulldozer attitude," and integrates creeping scope well. Slowness and care are hard to separate when you are watching a model think, and the user reports that the trade is worth it for architecture work and not for iteration. Another long-time Google user says they keep drifting back to Argon, and notes for security purposes Argon has far fewer triggers — a sentence about model behaviour and refusals that deserves more investigation than a comment thread can give it.

## Also new, below the sections

- **[Solid 2.0](https://www.solidjs.com/blog/solid-2-0-the-long-hold/)** ([369 points](https://news.ycombinator.com/item?id=50536387), 115 comments) — Five years after 1.0. The headline feature is an async graph: computations can return promises and the reactivity understands them, which is Solid finally answering the server/client boundary question that Remix took a run at. A commenter measures the cost — their counter component goes from 4.8 KiB brotli'd in 1.9.18 to 20.3 KiB in 2.0.0 — and another notes the "built to be written by agents" section is really just better diagnostics, which is to say the human features and the agent features turned out to be the same features.

- **[jQuery 4.1.0](https://github.com/jquery/jquery/releases/tag/4.1.0)** ([368 points](https://news.ycombinator.com/item?id=50537156), 197 comments) — Still shipping. The thread is a wake, fondly conducted: people who have not needed jQuery in a decade showing up to say the selector-then-chain pattern was the last API design in front-end that felt like it was going with the language rather than against it. The underrated loss is the event model — any object can trigger an event, not just DOM nodes, which is still a cleaner way to decouple logic than most modern state libraries offer.

- **[Russia reportedly planned a mass-casualty attack in Poland](https://www.yahoo.com/news/world/articles/russia-reportedly-planned-mass-casualty-090500574.html)** ([316 points](https://news.ycombinator.com/item?id=50547344), 130 comments) — A reported plot designed to be blamed on Ukraine. Commenters push back hard on the plausibility of the false-flag logic: an attack that increases Polish support for Ukraine and might bring Poland into the war is a strange thing for Russia to want. Several note that almost no English-language outlet has picked the story up, which is worth weighing as much as the story itself.

- **[Archive Team is archiving the Apple Support Community](https://wiki.archiveteam.org/index.php/Apple_Discussions)** ([256 points](https://news.ycombinator.com/item?id=50539747), 104 comments) — Apple's discussion forums close permanently on 20 November, and Archive Team is pulling them. The thread's sentiment is unsentimental: the community was a place Apple could point at instead of answering, the top reply was routinely wrong, and the useful content was a stranger's fix buried under 700 "me too" posts. It is still worth archiving, because "mostly useless" and "the only record of how a device was fixed in 2014" are not contradictory.

- **[VisualBasic.World](https://visualbasic.world/)** ([224 points](https://news.ycombinator.com/item?id=50511874), 99 comments) — A gallery of Planet Source Code submissions from 1997 to 2012, preserved. The comments are people finding their own teenage uploads. One observation lands harder than the nostalgia: this kind of archive documents a period when people published unpolished, strange, obviously-unfinished work because publishing was the only way to share it. AI-assisted cleanup pushes everything toward a competent median, and there is no obvious place for that era's equivalent to live now.

- **[A Perfect SimCity](https://www.jeffquast.com/post/a-perfect-simcity/)** ([210 points](https://news.ycombinator.com/item?id=50504373), 118 comments) — An analysis of what an optimally-run SimCity actually looks like, which turns out to be rail-only cities and a carefully tuned rate of death by starvation. The comments note the obvious and slightly grim implication: the optimiser finds the degenerate solution, and real cities with real people are not optimisable that way. Also the parking-lot fact — SimCity's designer measured real cities and found grocery stores were mostly parking lot by area, which reshaped the game's land-use model.

- **[Alloy CSS](https://alloyhtml.com/example.html)** ([207 points](https://news.ycombinator.com/item?id=50532385), 37 comments) — Dialogs, menus and tabs that work with JavaScript off, built on modern CSS. The pitch in the thread is the security argument: a site that needs no JS can ship `CSP` with scripts disabled, which closes a class of attack outright rather than mitigating it. The objection is practical — the class names are generic enough to collide with an existing stylesheet, so adoption means greening a field or prefixing everything.

## What moved

Eight stories from last night are worth a second mention, because the deltas are the argument.

**GPT-6.2 Astra and Sol** went from 781 to 1,332 points, a gain of 551 in a day — the biggest single-day move on the page. The pricing, not the benchmarks, is doing it: twenty percent under GPT-6 Astra for roughly comparable scores makes every "we can't afford to run agents all day" objection into a spreadsheet exercise.

**The NSA's classified network** went 278 → 659. Yesterday it was a story about an outage with no evidence of a cyberattack. Today it is the largest story in the national-security cluster, and the thread has moved from "what happened" to "how many of these are we having." A commenter's line is the only honest summary available: the NSA's internal network is unavailable every year or so, and the difference this time is the volume of coverage, not the volume of incidents.

**School phone bans** climbed 1,047 → 1,278 and the thread got more technical, not less. The methodological objection is now the top-voted comment: diverging pre-trends, propensity-score matching across state lines, and a value-added model layered on top of a difference-in-differences — three places to get it wrong, and a similar study in the same setting that found no significant effect. The 0.01 standard deviation is real and small; whether it is 0.01 and causal is still being argued.

**Apple's services** went 472 → 713, which is what happens when a status page stays red. **Optimizely** added 45 points to 695, and the thread's best line is about architecture rather than the attack: tag managers existed so marketing could add scripts without engineering, and the result was 10 MB of JavaScript per news article served from a domain every affected site already trusted. **Carnegie Mellon's CS Learn** reached 2,348 and the criticism has narrowed to one specific thing — a lecture filmed with a single mic in the middle of the room, where the professor walks away and disappears for most of a minute. **The best-harness question** went 283 → 415, and **the Claude Code verification post** went 220 → 290, which is the same story from two ends: the harness matters as much as the model, and the teams that win are the ones who built a way to check the output.

## Still on the page

Every story below was reported in the last four roundups. Numbers are today's scrape against last night's post.

| Story | Nov 17 | Nov 18 |
| --- | --- | --- |
| [Jensen Huang resigns](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,058 | 4,059 (+1) |
| [Carnegie Mellon is putting computer science courses on YouTube for free](https://www.cs.cmu.edu/learn/) | 2,238 | 2,348 (+110) |
| [SpaceX catches the Starship to end Flight 15](https://www.spacex.com/launches/starship-flight-15) | 1,752 | 1,758 (+6) |
| [FAA issues national ground stop – lifted 4.5 hours later](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) | 1,654 | 1,654 (0) |
| [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,444 | 1,445 (+1) |
| [GPT‑6.2 Astra and Sol](https://openai.com/index/introducing-gpt-6-2-astra-sol/) | 781 | 1,332 (+551) |
| [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com) | 1,299 | 1,300 (+1) |
| [All AI-generated code should be Open Source](https://jakub.jankiewicz.org/blog/ai-code-open-source/) | 1,278 | 1,281 (+3) |
| [New Evidence Shows School Phone Bans Are Gradually Improving Test Scores](https://www.nytimes.com/2026/11/17/upshot/school-phone-bans-study-scores.html) | 1,047 | 1,278 (+231) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 1,205 | 1,205 (0) |
| [Service degradation on Microsoft 365](https://status.cloud.microsoft/) | 1,174 | 1,176 (+2) |
| [Nvidia allegedly engineered scarcity by funding AI startups to buy its GPUs](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) | 1,113 | 1,113 (0) |
| [Lovable apps expose passport details and more than 200K private messages](https://www.crissyfield.de/research/lovable-en/) | 1,004 | 1,006 (+2) |
| [AWS emulator](https://github.com/aws/aws-emulator) | 993 | 994 (+1) |
| [Many of Amazon’s Black Friday and Cyber Monday “deals” offered no savings](http://groundworkcollaborative.org/news/amazons-decoy-deals-groundwork-investigation-reveals-nearly-1-in-3-black-friday-and-cyber-monday-deals-advertised-by-amazon-offered-no-savings-to-shoppers-nearly-1-in-10-w/) | 948 | 966 (+18) |
| [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) | 937 | 937 (0) |
| [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 926 | 926 (0) |
| [How to make almost anything](https://pub.cba.mit.edu/863.26/site/) | 903 | 916 (+13) |
| [Rust 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 904 | 904 (0) |
| [Qwen4-Max](https://qwen.ai/blog?id=qwen4-max) | 872 | 879 (+7) |
| [Technical issue at JPMorgan Chase triggers online banking delays for US banks](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda) | 818 | 832 (+14) |
| [Reverse engineering my Coway air purifier to ditch the cloud](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 801 | 804 (+3) |
| [Show HN: My $300 embroidery machine needed a subscription, so I built my own app](https://github.com/simpsoka/zigzag) | 742 | 742 (0) |
| [USPS now offers official ZIP Code boundary polygons](https://postalpro.usps.com/zcb) | 739 | 739 (0) |
| [Amazon saves millions by replacing Sonnet 4.6 with Strands Decider](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 733 | 736 (+3) |
| [Windows 11 is collecting data on which coding agents and developer tools you use](https://xusheng.dev/posts/windows-coding-agent-telemetry/) | 699 | 726 (+27) |
| [Socratic Tutor](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) | 721 | 722 (+1) |
| [BugMeNot has closed](https://www.bugmenot.com/) | 705 | 721 (+16) |
| [Apple Services Down](https://developer.apple.com/system-status/) | 472 | 713 (+241) |
| [Optimizely compromised, served malware on Zoom, GitLab](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) | 650 | 695 (+45) |
| [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 679 | 679 (0) |
| [Highly classified US national security communications network goes down](https://www.cnn.com/2026/11/17/politics/highly-classified-national-security-communications-network-goes-down) | 278 | 659 (+381) |
| [Microsoft 365 outage leads to chlorine gas poisoning of 15 hotel guests](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) | 642 | 644 (+2) |
| [Why get an expensive Pi when I have an old phone?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 633 | 634 (+1) |
| [Universal XSS in uBlock Origin from website-driven element picker](https://iter.ca/post/ubo-uxss/) | 610 | 616 (+6) |
| [A false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 588 | 588 (0) |
| [KDE: The documentary [video]](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 578 | 580 (+2) |
| [Apple has new Mac app coming to make running local AI models easy](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 578 | 578 (0) |
| [Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 573 | 573 (0) |
| [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) | 569 | 570 (+1) |
| [Scion is back and is going to sell a kei truck in America](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 563 | 563 (0) |
| [Lutnick Pushed to Weaken Chip Rules That Overlap with His Family Business](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) | 542 | 546 (+4) |
| [Frame – 31.5" color ePaper display](https://trmnl.com/blog/introducing-frame) | 520 | 541 (+21) |
| [Court denies motion to dismiss DRAM price fixing case](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) | 535 | 538 (+3) |
| [Monkey Island: all 13 versions side by side](https://monkeyisland.pages.dev/) | 508 | 509 (+1) |
| [The MacBook Pro's OLED PWM problem](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) | 505 | 507 (+2) |
| [Gemini 4 Hydrogen and Orchestrator](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) | 507 | 507 (0) |
| [Doomsday: Friday, 13 November, A.D. 2026 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291) | 504 | 505 (+1) |
| [Show HN: Every satellite that passed over any place this week, and its photos](https://www.watched.earth) | 497 | 498 (+1) |
| [Jonathan Blow – If AI solved coding, why is my software still the same? [video]](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 494 | 494 (0) |
| [Elevated errors on claude.ai, Claude Code, and platform.claude.com](https://status.claude.com/incidents/nn11wk485zfn) | 494 | 494 (0) |
| [What's Next for Nvidia?](https://steveblank.com/2026/11/15/whats-next-for-nvidia/) | 480 | 485 (+5) |
| [I'm making LLMs work on small and old devices](https://github.com/hyperionaidev/smolmaxxing/) | 483 | 485 (+2) |
| [Handwriting, as a Font](https://ductus.sorenblank.com) | 472 | 475 (+3) |
| [Protomaps: Self-hosting map tiles has gotten cheap and easy](https://bruceroettgers.eu/blog/protomaps/) | 462 | 467 (+5) |
| [A family tree of software job titles](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/) | 459 | 460 (+1) |
| [Former Nvidia CEO Huang had a relationship with a second employee, sources say](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) | 460 | 460 (0) |
| [Claude Code and Codex reverse engineered my 1994 Jeep's ECU over a $3 Arduino [video]](https://www.youtube.com/watch?v=WPj3aQ-xxpI) | 455 | 455 (0) |
| [Chinese frontier AI models carry the fingerprint of export-controlled GPUs](https://unemploymentlabs.com/checkpoint-forensics) | 452 | 453 (+1) |
| [AI unlocks Gödel's notebooks, said to contain hundreds of proved theorems](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) | 444 | 445 (+1) |
| [Microsoft blames monster email outage on software defect introduced in July fix](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026) | 435 | 444 (+9) |
| [Jiff 1.0: A datetime library for Rust](https://burntsushi.net/jiff/) | 435 | 441 (+6) |
| [Terminal borders that don't cost a cell](https://www.joshka.net/cell-borders/) | 426 | 426 (0) |
| [Ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 420 | 420 (0) |
| [What is the best harness for each model?](https://runta.com/blog/introducing-frontierharness-eval-v1-1/) | 283 | 415 (+132) |
| [What is w2rt6byl5nf1opmc-a.com?](https://jack.cab/blog/siterate) | 398 | 411 (+13) |
| [It Takes 16 Clicks for a Student to Open a PowerPoint on an iPad](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/) | 409 | 409 (0) |
| [Italy fines Meta $887M over Android users' data access](https://www.reuters.com/world/italy-fines-meta-887-million-over-android-users-data-access-2026-11-14/) | 408 | 408 (0) |
| [Dwarf planet candidate appears which takes roughly 280 years to orbit our sun](https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/) | 397 | 397 (0) |
| [Software is breaking down at a systemic level](https://www.breck-mckye.com/blog/2026/11/software-is-breaking-down-at-a-systemic-level/) | 384 | 392 (+8) |
| [$11.4M in Nvidia hardware vanishes during shipment from CA to TX](https://www.freightwaves.com/news/11-4-million-in-nvidia-hardware-vanishes-during-shipment-from-california-to-texas) | 386 | 386 (0) |
| [Old Bitly links are being hijacked](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) | 378 | 380 (+2) |
| [Writing correct software is hard and math alone won’t help us (2016)](https://pron.github.io/posts/correctness-and-complexity) | 375 | 375 (0) |
| [We're Asking an Appeals Court to Require a Warrant for ALPR Searches](https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches) | 361 | 361 (0) |
| [We don't need more apps, we need better open source](https://jordankrueger.com/blog/better-open-source-not-more-apps/) | 330 | 353 (+23) |
| [Chemistry is Actually Geometry](https://chillphysicsenjoyer.substack.com/p/chemistry-is-actually-geometry) | 335 | 347 (+12) |
| [OpenCode Browse](https://opencode.ai/product/browse) | 322 | 331 (+9) |
| [Grazing sheep in fields with solar arrays](https://news.cornell.edu/stories/2026/10/sheep-grazing-solar-fields-offers-farmers-economic-ecological-gains) | 322 | 329 (+7) |
| [Interpreting claims that a theorem is correct because it was checked in Lean](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) | 316 | 325 (+9) |
| [Project Zero will disclose vulnerabilities 90 days after reporting](https://projectzero.google/2026/11/disclosure-policy.html) | 323 | 323 (0) |
| [The Secret ThinkPad Powerbutton Code to Bring Dead Laptops Back to Life (2007)](https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/) | 316 | 322 (+6) |
| [How did Woz write the Apple 1 BASIC before building the computer? (2021)](https://retrocomputing.stackexchange.com/questions/17957) | 320 | 321 (+1) |
| [Crows make decisions faster than we can](https://www.nytimes.com/2026/11/15/science/birdbrain-crows-birds-research-decision.html) | 315 | 316 (+1) |
| [Show HN: Yogurt – Free, private, open-source alternative to Granola](https://github.com/FrigadeHQ/yogurt) | 306 | 306 (0) |
| [A short explainer on how El Niño works [video]](https://www.youtube.com/watch?v=7_JF3etiAv8) | 301 | 301 (0) |
| [Claude Whiteboards, Claude Sheets, and Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) | 299 | 299 (0) |
| [After 600 experiments, here's what I discovered about JEPA world models](https://haddyalchaer.com/jepa) | 296 | 296 (0) |
| [LinkedIn, Monster take down over 1000 fake job postings after CBC investigation](https://www.cbc.ca/news/canada/linkedin-monster-take-down-over-1-000-fake-job-postings-after-cbc-investigation-9.7415379) | 293 | 293 (0) |
| [How the Claude Code team thinks about verification](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/) | 220 | 290 (+70) |
| [Rust changed me as a developer](https://blog.startifact.com/posts/how-rust-changed-me/) | 282 | 290 (+8) |
| [Nvidia was in trouble before the Jensen Huang mess](https://www.wired.com/story/nvidia-was-already-in-trouble-before-the-jensen-huang-mess/) | 287 | 289 (+2) |
| [A great old-timey game-programming hack (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html) | 289 | 289 (0) |
| [Why 3dfx 1 cards had such a washed out color output?](https://twitter.com/id_aa_carmack/status/2122478083319992513) | 273 | 285 (+12) |
| [What constant surveillance is doing to children and parents](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 282 | 282 (0) |
| [PyPI's redesigned project pages with clearer security signals are now live](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/) | 279 | 280 (+1) |
| [FM-1 Workbench](https://open.m-vave.com/fm1-workbench) | 279 | 279 (0) |
| [Show HN: DeepSeek V3 in ~200 lines of pure Jax](https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax) | 276 | 276 (0) |
| [AMD's Zen 6 Family: Feeding the Beast](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 276 | 276 (0) |
| [Our software engineering interviews are changing a little](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) | 268 | 268 (0) |
| [Brave Search API now accepts agentic payments via the x402 protocol](https://brave.com/blog/search-api-agentic-payments/) | 262 | 262 (0) |
| [Show HN: Valencia, Spain in Sim City/Isometric View](https://tinyvalencia.com/) | 262 | 262 (0) |
| [Unsloth Qwen3.8-27B Quantizations – Dynamic v3.1 Update](https://unsloth.ai/docs/models/qwen3.8) | 261 | 261 (0) |
| [Comcast's "fiber-powered Wi-Fi" is cable, AT&T says in false advertising case](https://arstechnica.com/tech-policy/2026/11/comcast-falsely-advertises-cable-internet-as-fiber-powered-att-lawsuit-says/) | 250 | 259 (+9) |
| [Found: A protein that drives ageing without unleashing inflammation](https://www.nature.com/articles/d41586-026-03638-3) | 259 | 259 (0) |
| [United Airlines experiencing a widespread system outage, airline says](https://www.cnn.com/2026/11/16/us/united-airlines-outage) | 253 | 256 (+3) |
| [Why did some Apollo missions carry a grenade launcher? (2019)](https://space.stackexchange.com/questions/37775) | 253 | 254 (+1) |
| [Tor Project Issues Rapid-Response DoS-Defense Fix Amid Sustained DDoS Attack](https://forum.torproject.org/t/security-release-0-4-9-17/22454) | 250 | 253 (+3) |
| [If an App Asks for Full Disk Access or System and App Protection Override](https://support.apple.com/en-us/149699) | 234 | 248 (+14) |
| [Things That Turbo Pascal Is Smaller Than (2011)](https://prog21.dadgum.com/116.html) | 247 | 247 (0) |
| [Understanding Positional Embeddings in Modern LLMs](https://magazine.sebastianraschka.com/p/understanding-positional-embeddings) | 246 | 246 (0) |
| [Faster Retrieval for Better, More Efficient RAG](https://machinelearning.apple.com/research/faster-retrieval) | 242 | 242 (0) |
| [Atuin Threads: All your agent sessions on every machine](https://blog.atuin.sh/threads-agent-sessions/) | 242 | 242 (0) |
| [Emacs Is My Browser](https://joshblais.com/blog/emacs-as-my-browser/) | 236 | 239 (+3) |
| [WebGL Flight Simulator with seed generated terrain](https://baron.by.dai.studio/) | 231 | 232 (+1) |
| [A technical vision for the Haskell ecosystem](https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078) | 232 | 232 (0) |
| [Generative AI uses more energy on non-English text](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/) | 231 | 231 (0) |
| [We need more goat sacrifices](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) | 228 | 229 (+1) |
| [Squircles](https://linebender.org/wiki/curves/squircle/) | 221 | 228 (+7) |
| [Researchers track whole body movement with just a smartwatch](https://news.cornell.edu/stories/2026/11/researchers-track-whole-body-movement-just-smartwatch) | 223 | 227 (+4) |
| [My favourite modern NES games](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/) | 220 | 221 (+1) |
| [Show HN: Live map of U.S. flights during tonight's FAA nationwide ground stop](https://grounds.top/) | 220 | 220 (0) |
| [Preserving 30 years of Salon journalism](https://blog.archive.org/2026/11/12/preserving-30-years-of-salon-journalism/) | 218 | 219 (+1) |
| [The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough) | 216 | 216 (0) |
| [Advancing science and engineering with Antigravity's /teamwork](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) | 214 | 214 (0) |
| [Queens Public Library under ransomware attack](https://connect.queenslibrary.org/) | 213 | 213 (0) |

## Throughline

Three of today's stories are the same story, and it is the one that should set the agenda for the next year.

A memory-corruption bug in OpenJDK's AVX-512 Base64 decoder, found in an hour. Two unauthenticated RCEs in nginx, one of them eleven years old. Both discovered with AI harnesses, both weaponised in hours, both disclosed inside a week of PHP2Shell. Wiz says it plainly — complexity can no longer be relied on as a barrier to discovery or exploitation — and they are not speculating. The barrier that kept nginx 1.9.5's integer underflow theoretical for a decade was that finding it required tracing interactions between memory operations across multiple code paths, and that is precisely the task that got cheap this month. Phrack 73 documents the same shift from the inside: an issue with a Docker escape and a Chromium sandbox escape sitting alongside three articles about LLMs, one of them by the researcher who found Java4Shell.

The corollary is the part that does not have a vendor slide. If the cost of finding a bug falls by two orders of magnitude, then every unpatched thing you own becomes a live liability on the same schedule, and the annual-cycle disclosure norms that assumed a slow discovery rate stop making sense. The nginx timeline is the tell: a fix sat in a public repository for a week with the reporter's name in the commit message, no PSA went out, and the coordinated release arrived on schedule. That was the correct process. The process is now too slow.

The second thread is that the damage today was not in code anyone wrote wrong. It was in the trust layer. Optimizely served malware to 178 organisations from its own CDN, with its own certificate, because the attacker wrote into a customer's experiment config. Microsoft's `agent-framework` on PyPI shipped an info-stealer through Microsoft's own publisher account, twice, and the response was to make repositories private. Quad9 is leaving France because a court made criminal law out of a DNS record, and its hospital and utility users will find out when their internet stops resolving. Codeberg disappeared because a registrar suspended a domain and did not say why.

Everything above is a single trusted intermediary being used as designed, against the people who trusted it. That is a different threat model from "your code has a bug," and the mitigations are different too: you cannot patch your way out of a vendor's admin panel, you can only remove the dependency, and most organisations cannot remove the dependency because the dependency was adopted to avoid having one.

The third thread is quieter and more expensive. Google's randomized experiment says AI Overviews cut publisher clicks by 40%, and the publisher whose traffic graph opens the All About Berlin post says 75%. Harvard's working paper says firms that adopted coding agents wrote 30% more code and shipped the same amount, with review taking 49% longer. Both are the same finding at different scales: the producing layer got dramatically cheaper and the consuming layer did not, so the queue moved to the human checkpoint and the value of the checkpoint rose while the value of the production it checks fell. The people who understood this a year ago are fine. The organisations that bought the throughput and measured the throughput are now running 30% more code past the same number of reviewers, and the reviewers are telling them, in comments, that they do not enjoy it.
