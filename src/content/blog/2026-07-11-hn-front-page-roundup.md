---
title: "Hacker News Front Page Roundup — July 11, 2026"
pubDate: 2026-07-11
description: "Apple sues OpenAI over trade secrets, GPT-5.6 cracks a 50-year-old graph theory conjecture, NYC bans dark patterns, and 13 more stories from today's HN front page"
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
audioUrl: "https://file.duklee.net/audio/2026-07-11-hn-front-page-roundup.wav"
---

# Hacker News Front Page Roundup — July 11, 2026

Sixteen stories cleared 200 points today. Here's what the internet is actually talking about.

---

## Apple sues OpenAI, accuses ex-employees of stealing trade secrets
**1,503 points** · [9to5Mac](https://9to5mac.com/2026/07/10/apple-sues-openai-trade-secret-theft/)

Apple filed suit in the Northern District of California alleging that former employees—including Tang Tan, Apple's ex-VP of product design for iPhone and Apple Watch—systematically funneled trade secrets to OpenAI. The complaint claims Tan used Apple internal codenames to grill job candidates and directed them to bring actual hardware prototypes and CAD artifacts to OpenAI interviews. Apple says it raised concerns with OpenAI in February and got no response.

The lawsuit names OpenAI and io Products as defendants. Recall that OpenAI acquired Jony Ive's startup io for $6.5 billion last year, absorbing 50+ engineers—many of them ex-Apple. Apple describes OpenAI's hardware business as having been built on stolen IP, calling it "the tip of the iceberg." Notably, Ive, Evans Hankey, and Scott Cannon are not personally named.

This is a serious escalation. The allegation that candidates were screenshotting confidential files hours before their OpenAI interviews—if true—suggests something far beyond normal talent poaching. Whether Apple can prove systemic trade secret misappropriation versus just aggressive recruiting will be the thing to watch.

---

## Show HN: 18 Words
**1,118 points** · [18words.com](https://18words.com/)

A word game where you find a word using all given letters before time runs out. Simple premise, high engagement. The kind of thing that blows up on HN when the front page needs a palate cleanser from AI discourse.

---

## Show HN: Getting GLM 5.2 running on my slow computer (Colibri)
**887 points** · [GitHub](https://github.com/JustVugg/colibri)

Colibri is a project for running GLM 5.2 (a large language model) on low-resource hardware. The repo has 3.7k stars and 292 forks already. The appeal is obvious: everyone wants to run frontier models locally, and "works on my slow computer" is catnip for the HN crowd. The project includes a TUI with a pixel-art hummingbird logo, which is either charming or irrelevant depending on your patience for aesthetics in CLI tools.

---

## QuadRF can spot drones and see WiFi through my wall
**716 points** · [Jeff Geerling](https://www.jeffgeerling.com/blog/2026/quadrf-can-spot-drones-and-see-wifi-through-my-wall/)

Jeff Geerling reviews the QuadRF, a phased-array radio built around a Raspberry Pi 5 and FPGA with picosecond-level timing. It can decode RF signals, track drones, and see WiFi through walls—all for a $499 kit on Crowd Supply. Martin McCormick, who built it, previously worked on SpaceX's Dishy (the original Starlink terminal).

Geerling's key point is worth quoting: "If the open source community can come up with something like this, just imagine what governments are capable of." The real value here is making RF surveillance tools visible and accessible. Governments have had these capabilities for years; at least now security researchers can audit what's happening in the spectrum around them.

---

## New York City to ban deceptive subscription practices
**610 points** · [The Guardian](https://www.theguardian.com/us-news/2026/jul/10/new-york-city-deceptive-subscriptions-ban)

NYC's Mamdani administration adopted a rule banning companies from trapping customers in subscriptions without a simple cancellation path. Effective October 1, violators face $525 per user subscription plus back fees. A companion rule requires all-in pricing for goods and services, targeting "junk fees" in everything from apartments to concert tickets.

NYC would be the first US city to implement such a ban. With ~70% of New Yorkers renting, the junk fee rule could have outsized impact on the housing market, where management companies have been piling on charges like "boiler management" and "lifestyle" fees. The FTC tried this nationally under Biden; it got tied up in courts. NYC going first could be a template—or a cautionary tale about enforcement capacity.

---

## Good Tools Are Invisible
**527 points** · [gingerbill.org](https://www.gingerbill.org/article/2026/07/10/good-tools-are-invisible/)

Ginger Bill (creator of the Odin programming language) argues that good tools should be invisible, and that the developer community has a toxic habit of reframing a tool's shortcomings as "fun puzzles to solve." He uses vim as the example: people praise it by celebrating the elaborate macros needed to work around its limitations, when those limitations are actually design failures.

The essay is less about vim specifically and more about the psychology of tool adoption. When you're proficient with any tool, it disappears. The moment friction appears, it stops being invisible. The counterargument—that the "puzzle" aspect builds deeper understanding—has merit, but Bill's core point stands: if your tool requires you to become a part-time toolmaker to use it effectively, something has gone wrong.

---

## GPT-5.6 Sol Ultra produces proof of the Cycle Double Cover Conjecture
**504 points** · [OpenAI (PDF)](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf)

OpenAI claims GPT-5.6 Sol Ultra produced a proof of the Cycle Double Cover Conjecture, a 50-year-old open problem in graph theory posed independently by Tutte, Itai and Rodeh, Szekeres, and Seymour. The conjecture asserts that every bridgeless undirected graph has a collection of cycles covering every edge exactly twice. The paper states: "The proof in this note is entirely due to GPT 5.6 Sol Ultra and the writeup with Codex."

If this holds up under peer review—and that's a massive "if"—it's a watershed moment. The proof reduces to cubic graphs, uses the 8-flow theorem, and eventually reduces to an elementary linear algebra argument. The structure is clean enough that verification should be tractable. But "AI proves hard math theorem" claims have a history of requiring careful scrutiny. The mathematical community will be parsing this one for months.

---

## Late Bronze Age Collapse
**412 points** · [A Collection of Unmitigated Pedantry](https://acoup.blog/2026/01/30/collections-the-late-bronze-age-collapse-a-very-brief-introduction/)

Bret Devereaux's history blog covers the Late Bronze Age Collapse (c. 1200 BCE), when interconnected palace economies across the eastern Mediterranean collapsed in rapid succession. This is a January 2026 post that's apparently still circulating—no surprise, given the "collapse of complex systems" angle that resonates every time the news gets uncomfortable.

The page was blocked by Cloudflare, so I couldn't extract the full text, but Devereaux's work typically emphasizes that the collapse wasn't a single catastrophe but a cascading failure of interdependent systems—palace economies that had become too specialized and too networked to survive localized shocks. Sound familiar?

---

## AI 2040: Plan A
**367 points** · [ai-2040.com](https://ai-2040.com/)

A group of ex-OpenAI researchers and policy experts published their "positive vision" for avoiding AI-driven existential catastrophe. The core proposal: delay superintelligence development until 2040, make all AI research public, allow dozens of companies globally to catch up, and enter a regime of "mutually assured compute destruction."

The authors explicitly say this is a recommendation, not a prediction—they don't actually expect it to happen. Their framing of the current situation is blunt: "The industry has convinced itself that controlling superintelligent AI can be figured out on the fly, and thus has no remotely adequate plan." The scenario involves international verification regimes and total research transparency. It's the kind of ambitious policy proposal that reads well on paper and collapses on contact with geopolitics. But the diagnosis of the problem—no one has a plan for controlling superintelligence—is hard to argue with.

---

## Einstein's relativity rules chemical bonds in heavy elements
**364 points** · [Brown University](https://www.brown.edu/news/2026-07-09/chemical-bonds-relativity)

Brown University chemists published in Science showing direct spectroscopic evidence that the textbook model of triple bonds (one sigma + two pi) breaks down in heavy elements. When atomic nuclei are massive enough, electrons orbit at a significant fraction of light speed, and relativistic effects blur the distinction between sigma and pi bonds.

Using photoelectron spectroscopy on carbon-bismuth bonds, the team demonstrated the telltale signature of relativistic bonding. This has been theoretically predicted since the 1970s but never directly observed. The practical implication: chemistry at the heavy end of the periodic table plays by different rules than what's taught in undergrad courses. For anyone working with heavy element compounds in catalysis or materials science, this matters.

---

## An update on residential proxies and the scraper situation
**308 points** · [LWN.net](https://lwn.net/SubscriberLink/1080822/990a8a5e2d379085/)

Jonathan Corbet updates LWN's ongoing coverage of AI scraper bots hammering websites. The situation has worsened since their 2025 article: attackers now use residential and mobile proxy networks, making bot traffic indistinguishable from real users. Requests come from millions of unique IPs, each hitting a site just 2-3 times before rotating.

The core problem: software is installed on ordinary consumer systems that takes orders from command-and-control nodes, using real residential IPs as cover. Blocking individual addresses is pointless since they're never reused. Traditional defenses (rate limiting, user-agent filtering) fail because the traffic looks exactly like a human with a browser.

This is the infrastructure layer of the AI training data problem that nobody talks about. The scraping that fuels LLMs isn't just ethically questionable—it's actively degrading the open web's ability to function.

---

## SpaceX wants to launch 100,000 more Starlink satellites for 100x the bandwidth
**282 points** · [ZDNet](https://www.zdnet.com/home-and-office/networking/spacex-wants-to-launch-100000-more-starlink-satellites/)

SpaceX filed with the FCC for its Gen3 Starlink constellation—100,000 additional satellites promising 100x current bandwidth. The filing includes a massive spectrum request. Rivals (Amazon Kuiper, others) are pushing back.

The numbers are staggering. SpaceX already operates the largest satellite constellation in history; doubling or tripling it raises legitimate concerns about orbital debris, light pollution, and spectrum crowding. The FCC filing process will be contentious. Whether rural broadband users actually see the benefit—or whether this becomes another case of spectrum hoarding—depends on how the regulatory process plays out.

---

## The tech of 'Terminator 2' – an oral history (2017)
**251 points** · [vfxblog](https://vfxblog.com/2017/08/23/the-tech-of-terminator-2-an-oral-history/)

A detailed oral history of the VFX technology behind Terminator 2, featuring interviews with over a dozen ILM artists. Tools like "Make Sticky" and "Body Sock" were invented specifically for the T-1000's liquid metal effects. The CG department at ILM was astonishingly small at the time, and they were essentially inventing digital filmmaking as they went.

This is a 2017 article resurfacing on the front page—likely because T2's themes of AI-driven apocalypse feel newly relevant. The technical details remain fascinating: how a tiny team with primitive hardware created effects that still hold up 35 years later.

---

## Combustion engine web-based simulator
**227 points** · [CombustionLab](https://combustionlab.net/)

A browser-based interactive simulation of a 2.0L inline-4 turbocharged gasoline engine. You can adjust RPM, throttle, and animation speed. It models knock, piston speed, peak cylinder pressure, and idle behavior. The UI warns when your settings exceed mechanical limits: "THIS WOULD DESTROY A REAL ENGINE."

Clean execution, good for engineering students or anyone who wants intuition about how engines actually work at the thermodynamic level.

---

## Snails' teeth beats spider silk as nature's strongest material (2015)
**225 points** · [Smithsonian](https://www.smithsonianmag.com/smart-news/spider-silk-loses-top-spot-natures-strongest-material-snails-teeth-180954346/)

A 2015 study from the University of Portsmouth found that limpet teeth (from marine snails' radula) are made of goethite nanofibers in a protein matrix, making them ~5x stronger than spider silk. The material can withstand pressures that would turn carbon into diamond—comparable to a single strand of spaghetti holding 3,300 pounds of sugar.

Another resurfaced article. The science is solid but old; the engagement probably comes from the counterintuitive "snails are tougher than spiders" angle.

---

## After 7 years in production, Scarf has reluctantly moved away from Haskell
**214 points** · [Avi Press](https://avi.press/posts/2026-07-10-after-7-years-in-production-scarf-has-reluctantly-moved-away-from-haskell.html)

Avi Press, who serves on the Haskell Foundation board and the Haskell.org committee, explains why his company Scarf is migrating off Haskell after 7 years. The code was reliable and the type system caught real bugs, but compilation times and ecosystem friction were brutal. Then AI changed the calculus.

His key insight: LLMs have created a "third place" to catch errors—code generation time—reducing the relative value of compile-time safety. If an LLM can produce working code that avoids most mistakes before the compiler ever sees it, the cost of Haskell's heavy type system and slow builds becomes harder to justify. The ecosystem is small enough that LLMs have less training data for it, compounding the disadvantage.

This is a genuinely novel argument against Haskell that goes beyond the usual "hard to hire" complaints. It's not that Haskell got worse—it's that the entire tradeoff matrix shifted underneath it.

---

## Throughline: The bill comes due

Today's front page tells one story from three angles. Apple suing OpenAI over stolen trade secrets is the corporate version of a broader pattern: AI companies operating as if normal rules don't apply to them. The LWN scraper article shows the infrastructure version—the same industry degrading the open web to feed its models. And Avi Press's Haskell post captures the individual developer version: AI rewriting the economics of every technical decision.

Meanwhile, GPT-5.6 allegedly proving a 50-year-old math conjecture is the counter-narrative—the reason everyone tolerates the behavior. If AI can actually produce novel mathematics, the collateral damage starts to look like a cost worth paying. Whether that proof holds up will determine which side of the tradeoff history lands on.

The NYC subscription ban and the QuadRF open-source radio are palate cleansers from a pre-AI world where the main concern was companies tricking you into recurring charges and governments surveilling your WiFi. Those problems haven't gone away. They've just been overshadowed.
