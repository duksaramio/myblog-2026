---
title: "Hacker News Front Page Roundup — October 12, 2026"
pubDate: 2026-10-12
description: "149 stories clear 200 points and only 26 of them are new. The day's page is about custody: of credentials, of documents, of the record itself."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

Scanning all 500 entries on HN's ranking list turns up 149 stories at 200 points or better this morning. Twenty-six are new. The highest-scoring new item — a 972-point essay arguing that passkeys are a trap — is ninth overall, behind eight incumbents, the top of which is a two-day-old obituary at 2,123. Nine of the top ten things on the front page are stories this roundup has already written about. That is not a slow news day, it is what the page looks like when score accumulates faster than stories arrive.

What is new clusters hard around one question: who holds the record. Deloitte signing off accounts that made $672m vanish. Passkeys moving custody of your credential to the relying party and the operating system. Fingerprints replacing a cookie you can clear with an identifier you cannot. Codex silently installing a self-updating daemon. Meta's launch page, in the middle of a "personal superintelligence" announcement, and a commenter reporting that signing in showed him other people's accounts.

## Passkeys are a trap — 972 points

**972 points** · 513 comments · [nonfunctional.substack.com](https://nonfunctional.substack.com/p/passkeys-are-a-trap-do-not-use-them) · [HN discussion](https://news.ycombinator.com/item?id=50048312)

A long essay aimed explicitly at non-technical readers, arguing that passkeys are the first login credential where the user does not have final say over their own account. The stated concern is attestation: a relying party can require a vendor-certified authenticator at registration, which locks out self-hosted or independently-built implementations and gives sites a dial they can turn later. The framing device is the FIDO Alliance's membership — Big Tech, banks, governments, intelligence agencies, some nonprofits — and the observation that no consumer advocacy group is at the table.

It is a well-argued piece attached to a headline that overstates its case, and the thread says so. agwa's correction is the important technical one: attestation can only be demanded at registration, browsers prompt before granting it, and he doubts the named services actually enforce it. danpalmer catches the tell — the very last footnote, past the conclusion, admits passkeys are domain-bound and therefore resistant to man-in-the-middle attacks, which is the primary security motivation and which the body never mentions. oefrha, who says he has abolished passwords for his org's internal systems, notes that 1Password recently moved to `userVerification: required` and broke desktop use without TouchID — so the author's control-loss mechanism is real even if the attestation story is weaker than presented.

Read past the rhetoric and the useful version of the argument is narrower and much harder to dismiss. Credentials have always been a shared responsibility, but with passwords and TOTP the user chooses where the secret lives and who can generate it; with passkeys the relying party sets policy, the platform decides storage and sync, and the platform vendor decides which authenticators are blessed. The essay's own proof that a user-owned factor is sufficient is buried in the middle: TOTP is an open standard, you can generate codes on a laptop or a Game Boy from a seed you keep, and you can hand a code to a colleague. The industry built the convenience dials for passkeys and, for the credential users actually control, left policy where it was.

## Fingerprints are the new cookies — 675 points

**675 points** · 323 comments · [royfish.dev](https://royfish.dev/fingerprints-are-the-new-cookies) · [HN discussion](https://news.ycombinator.com/item?id=50048642)

The page computes your browser fingerprint and shows it is stable across refresh, cookie clear, VPN and incognito, and different per device. It is written in the first person as an ad broker addressing its inventory, which is effective rhetoric and also the weakest thing about it — the technical claim is straightforward, the monologue is decoration. The supporting narrative is Google's four-act cookie story: a 2019 pledge to kill third-party cookies, the delays, and eventually the reversal, with the marketing copy for each stage quoted in sequence.

The comments are where the substance lives. alkonaut asks the question that has no good answer: why are the highest-entropy APIs — audio processing, offscreen WebGL rendering — available to any page without consent. drnick1 goes to the root: plain HTML leaks IP and user agent, both spoofable, while JavaScript's default surface gives away hardware, timezone, language, and lets pages disable selection and paste. HughParry, who has worked on fingerprinting, adds the counter-intuitive point that a generic fingerprint is a good outcome, and that anti-fingerprinting browsers are hard to detect precisely because their signal is deliberately coarse. helterskelter2 asks why a browser cannot simply randomise the values, and nobody in 323 comments produces a working answer — because randomised values break legitimate feature detection and become their own signature.

The reason this story matters more than the last five cookie obituaries is the asymmetry it names: a cookie was a thing you could refuse, inspect, and delete, and the replacement is a property of the device that you cannot. Every article about this ends by pointing at EFF's Cover Your Tracks, which tells you your entropy score and offers no mechanism for changing it.

## The gap in shared understanding of LLM capability is widening — 654 points

**654 points** · 955 comments · [twitter.com](https://twitter.com/karpathy/status/2109361546505966046) · [HN discussion](https://news.ycombinator.com/item?id=50047422)

Karpathy dusting off an April post because the distribution has become a funnel rather than two camps: roughly 6 billion people who have barely touched an LLM; one to two billion free-tier users who see derpy chatbots and treat the thing as a better search box; about 20 million professionals in math and code who watch agents finish weeks of work; and on the order of five thousand people with internal frontier access running agent swarms for weeks. His mechanisms are honest — impact scales with the size of the problem you care about, capability peaks where work is digital and machine-verifiable because that is where reinforcement learning has reward signal and revenue, and access tiers multiply the rest.

The pushback is more interesting than the post. athrowaway3z says he has seen nothing supporting a 5,000-person tier that is so far ahead — the internal models are more eager and you can spin up 10,000 instead of 10, but getting value out still requires skill, and 90% versus 93% success is not a different world. wren6991 calls it vagueposting: each publicly released model is a modest increment on the last, and the boy has cried wolf before. usernomdeguerre offers the sharpest alternative reading — the cleavage is not access but verifiability, because LLM capability is concentrated exactly in work that a machine can check or that needs no checking, and most human work is neither.

The observation I would keep comes from elar_verole, about people in non-technical office jobs who are certain their own work is too complicated to automate after trying ChatGPT once a year ago, including some whose jobs are close to data entry. That is the tier Karpathy's model implies and does not examine: not the 6 billion who have never touched it, but the few hundred million who have, concluded it was mediocre, and stopped. Their conclusion is defensible from where they sit and the tier above them is not going to explain itself.

## Total Annihilation, rebuilt for modern computers — 650 points

**650 points** · 247 comments · [nanolathe.gg](https://nanolathe.gg) · [HN discussion](https://news.ycombinator.com/item?id=50045984)

Nanolathe is a clean-room, MIT-licensed reimplementation of the Total Annihilation engine with a modern GPU renderer and a Classic toggle, plus a browser demo running the three original demo missions with no game files required. The native beta reads the game data you already own on Windows, Mac and Linux, and the project publishes documented game formats and its clean-room research alongside the engine code.

That last part is what distinguishes it, because the engine itself is the sixth or seventh entry in a twenty-year line: Spring in 2005, Balanced Annihilation and then Beyond All Reason, Planetary Annihilation built by people who worked on the original, Forged Alliance Forever keeping Supreme Commander alive. Commenters point at all of them and ask what is new. The answer is the licence and the documentation — MIT plus published formats is what lets the next implementation build on this one instead of reverse-engineering the same binaries again. BAR is more polished and has better quality-of-life features today; nobody disputes that.

Two caveats worth stating. The page is a marketing page for a public beta, with the usual gaps — "single-player ready", online play conditional on owning the files, and the hero footage described as staged engine footage. And samstress notices something about the design that is going to date every site built this year: the 01/02/03 numbered card layout is becoming the tell for LLM-generated web copy, the way the em dash was two years ago.

## NYC's "Click to Cancel" rule is now in effect — 575 points

**575 points** · 310 comments · [nyc.gov](https://www.nyc.gov/main/click-to-cancel) · [HN discussion](https://news.ycombinator.com/item?id=50045946)

As of October 1, New York City businesses must let consumers cancel a subscription through a mechanism as simple as the one they used to sign up, in the same medium, and the city now takes complaints about businesses that make cancellation hard. California has had an equivalent for years, and one commenter reports it turned cancelling the WSJ and the NYT from an ordeal into a click.

Two comments define the limits. flowerlad describes Adobe offering click-to-cancel and then charging an early-termination fee equal to the remaining term on a one-year commitment the user does not remember agreeing to — one click, same cost. The regulation constrains the mechanism and leaves the price of leaving untouched, which is where the friction was going to move next anyway. woodruffw, a lifelong resident, supplies the other: the city legislates enthusiastically and enforces unevenly once public attention moves on, and he names rental destabilisation and delivery-app safety as prior demonstrations.

The structural question, from apparent: if a customer consented through Stripe's hosted checkout, is Stripe's portal the same medium? Nobody answers it, and it is the whole compliance design for a generation of startups whose cancellation path runs through a support inbox. An HN commenter who says he is an EU digital policy analyst adds that a Digital Fairness Act with the same principle is expected in November — unverified, but it is the direction of travel in every jurisdiction that has done this.

## Deloitte falsified documents to evade tax on Abramovich's wealth — 564 points

**564 points** · 190 comments · [bbc.com](https://www.bbc.com/news/articles/c64g1l5389kvo) · [HN discussion](https://news.ycombinator.com/item?id=50054207)

A BBC Panorama and Bureau of Investigative Journalism investigation found that accounts signed off by Deloitte in Cyprus made $672m of Roman Abramovich's assets — superyachts, mansions, private jets — disappear from company accounts, and that the firm appears to have advised on a tax-evasion scheme built on falsified documents. A barrister specialising in financial services law calls it straightforward tax evasion and says it could not be more blatant. Abramovich's lawyers say he denies evading tax or concealing his fortune and that no evidence shows he knew about, authorised or directed any falsification, and that relying on professional advice was legitimate. Deloitte Cyprus says it acts in compliance with applicable laws, and separately says it cannot comment on documents more than twenty years old that it no longer has access to.

The reply to "how does a firm like this keep operating" is in the thread and it is structural, not moral. smokefoot's point is that professional services firms are not global corporations with central control — they are loose associations of legally distinct local partnerships, where the brand sells trust and the legal structure sheds liability, so nobody is positioned to be held responsible for the whole. Deloitte Global did not falsify anything; a Cyprus entity, two decades ago, did. rinconrex supplies the only mechanism that changes the calculus: the behaviour adjusts when the risk moves onto the individual who signed. Nobody in 190 comments expects that to happen to a signing partner.

The reason this is a better front-page story than the usual oligarch coverage is the framing the state is using. The case is not about tax owed, it is about documents that were false, which is a much easier thing to prove and a much harder thing to argue about intent on.

## Google told to halt work on datacentres in Finland over environmental concerns — 442 points

**442 points** · 153 comments · [theguardian.com](https://www.theguardian.com/technology/2026/oct/06/google-datacentres-finland-temporary-halt-environmental-impact-assessment) · [HN discussion](https://news.ycombinator.com/item?id=50048638)

Finland's Licensing and Supervision Authority ordered the company representing Google to suspend preparatory works at two sites by 23 October until environmental impact assessments are completed. Tuike Finland Oy had felled 330 hectares of forest at Muhos and logged just under 200 hectares in Kajaani as part of a €13bn multi-site build in northern Finland; the Finnish Association for Nature Conservation says the sites have been reduced to sand and blames an overheated datacentre market. Google's statement is that it understands the concerns and fell short of its own high standards — which monk_grilla correctly identifies as a rhetorical substitution, since the missing standard was a legal obligation rather than a corporate aspiration. The authority says it will consider enforcement proceedings and a fine.

The fine is the weak part of the mechanism, and thayne says so: it is barely an inconvenience at this scale, and the cost that actually bites is the construction delay. A regulator that can stop work has leverage; a regulator that can only invoice does not.

Two comments complicate the picture without rescuing it. dhx points out that the "forest" being cleared is monoculture plantation, so restoring the land properly would involve removing most of it anyway, and supplies Sentinel-2 imagery showing the logging finished by June. That reframes the ecological loss without touching the procedural failure, which is what the authority is acting on and which is not ambiguous. andsoitis links Google's own page for the Muhos site, which had been up the whole time.

## Muse Wonder — 370 points

**370 points** · 170 comments · [research.meta.ai](https://research.meta.ai/blog/muse-wonder) · [HN discussion](https://news.ycombinator.com/item?id=50059115)

Meta's new frontier series, shipping as Muse Wonder and Muse Wonder Full, presented as the next step toward "personal superintelligence" with two named capabilities — Active Memory for carrying context across conversations and Active Focus for sustained work on long-running tasks — trained at a facility described as gigawatt-scale, available through the Meta Model API and Muse Code.

The thread runs the launch through the only test that has ever mattered, which is whether the thing does something. jjcm posts an image-to-HTML comparison and finds it much worse than Opus 5.5, closer to Sonnet or Haiku, despite the benchmark table it is shipping with, and guesses the vision model is immature. simonw runs the pelican test and keeps an archive of every model's attempt for comparison. er4hn let the previous Meta model make all the decisions on a Seattle weekend trip and got a good transit recommendation and restaurants that had closed. Every one of these is a small sample, and one of them still tells you more than a benchmark table does.

One comment is not a benchmark complaint and deserves to be read as a bug report rather than an anecdote: pmuse says signing into Muse Code with a Quest-only Meta account showed other people's profiles and email addresses in his login flow, and that account settings were inaccessible to him. That is unverified and it is also the kind of failure that matters more than a percentage point. The release itself is a scaling-ladder announcement in which "state of the art on personal and professional agentic tasks" is asserted rather than shown, and the word superintelligence is doing the work that a compatibility matrix would otherwise do.

## So, you'd like to sell your print issues of The Onion? — 369 points

**369 points** · 58 comments · [theonion.com](https://theonion.com/archivehunt/) · [HN discussion](https://news.ycombinator.com/item?id=50047055)

The Onion's archivist is asking readers to sell back missing print issues. The list is specific: all of Volumes 14 through 19 (1988–1991), single issues throughout the 1990s and 2000s, sizable runs from 2009 to 2013. The page explains where to find the volume and issue numbers on a cover, notes that special issues use a "22-01" format, requires the issues be clean and readable, and states that anything sold becomes property of The Onion and cannot be resold. Submissions go through a Google Form.

Most of the thread is people enjoying themselves — Area Man has them; the A.V. Club started as a supplement to the paper; someone in Madison took a distribution box the night the print edition ended. PeterHolzwarth's complaint is the sharpest thing in it: the page is written as a bit when the actual need is plain, and the title should say the archive has holes and readers can fill them.

I would keep this one for the contrast. Everything else on today's page is about a record being falsified, silently replaced, or rewritten by a process nobody asked for. This is a company that knows its own archive has gaps, says which ones, and offers to buy back the pieces — which is, embarrassingly, the most honest data-handling behaviour on the front page.

## QGIS: No AI contributions permitted — 342 points

**342 points** · 380 comments · [github.com/qgis](https://github.com/qgis/QGIS-Enhancement-Proposals/pull/387) · [HN discussion](https://news.ycombinator.com/item?id=50054751)

A QGIS Enhancement Proposal, opened by a long-time maintainer, formally changing the project's AI policy from conditional to a strict prohibition, with follow-up discussion pointed at the qgis-developer mailing list. The reaction count on the proposal is the honest measure of how contested it is: 83 approvals, 23 rejections, and a comment thread to match.

Two arguments in the thread are strong and pull in opposite directions. mootothemax says geospatial work specifically breaks current models — confidently wrong, and the failure arrives at the end of a task that already had a success metric it was meeting, which is the worst possible shape for a reviewer to catch. throwaway2037 argues the policy will age badly because there is no detection mechanism: any given change is now something a model could write, and the rule will be enforced arbitrarily against contributors who admit to it. The reply that lands is jcolot's, and it reframes the whole thing: the bottleneck moved from writing code to staying aligned with code you did not write, and for a volunteer maintainer reviewing a large PR from a stranger, that cost is now most of the work.

So the honest reading is that a ban is a rationing decision dressed as a principle. QGIS's scarce resource is maintainer attention, and the policy shifts the burden of proof onto contributors — which is defensible, and is not the same claim as "AI is bad". The Linux kernel's approach, cited in the thread as the model to copy, is more granular and harder to enforce; both end up in the same place, which is that the reason for a submission has to be legible to a person who did not write it.

## Cartographers of North Korea (2019) — 310 points

**310 points** · 63 comments · [cartographers-nk.wonyoung.so](https://cartographers-nk.wonyoung.so/) · [HN discussion](https://news.ycombinator.com/item?id=50047091)

An analysis of OpenStreetMap's North Korea data: 324,415 data points from 889 contributors since 2007, in a country where almost nobody can reach the internet and the general population is confined to a domestic intranet. The top ten contributors drew 61% of the map, and 62% of contributors labelled objects in Korean, including all of the top five. The interesting part is not the volume but the kind of data — street-level points of interest, which are normally the one category only locals can supply: a Mig-19 airframe, the West Sea satellite launch site, the Nyŏngbyŏn 5MW reactor, a statue, an Italian restaurant.

The interviews are the payload. One contributor explains that he maps North Korea to help North Koreans, looks for terrain that would work as an escape route, and did nearly all of the detailed mapping around one river village, working both banks of the Tumen and documenting the Chinese side because fences, roads and towns there matter to anyone crossing. The single largest contributor, responsible for 75,583 edits, is a mapper in Germany who does the same work on his own country with a GPS unit. Neither gets paid, neither is likely to be recognised, and the second one is doing careful work on a place he has never been.

Two caveats, both fair. The page's presentation is broken — one commenter finds dates scrolling inside text boxes and another would rather have the write-up as a static article with the illustrations inline. And this is a 2019 piece resurfacing, so the numbers are seven years stale and the contributors are anonymised, which means nothing in it is independently verifiable. It still makes a better case for OSM than any promotional material the project has ever produced.

## GLM-Legal — 298 points

**298 points** · 164 comments · [z.ai](https://z.ai/blog/glm-legal) · [HN discussion](https://news.ycombinator.com/item?id=50058507)

A Chinese frontier lab's legal-domain model, built on a lightweight base with legal mid-training and then reinforcement learning across tens of thousands of simulated legal environments, with the agent harness optimised in lockstep with the model. The headline number is a 19.2% all-pass rate on Harvey's Legal Agent Benchmark in real law-firm workflows across 24 practice areas, a 12.5-point improvement on the base model, with claimed parity on LegalBench and a Chinese legal benchmark despite a leaner parameter count.

The release calls 19.2% "reliable end-to-end task execution without intermediate degradation." Read it as a failure rate and the number is 81%, on an all-pass rubric where every sub-requirement must hold. An attorney in the thread, otterley, says exactly that — a 20% pass rate is not impressive, and litigation practice is about novel situations rather than replaying old ones. mathis-l goes further and argues the benchmark itself is shaky, citing several problematic tasks and rubrics in Harvey's own repository. Both critiques can be true while the model is still useful for the contract-review work it was trained on.

The thing worth watching is what Harvey LAB is becoming. It shows up in this release and in Meta's Muse Wonder announcement in the same week, in a market where the vendor runs the benchmark, holds the traces, and publishes its own rubric. That is not a claim that the numbers are wrong; it is that a single benchmark, under a single vendor's control, is now the common currency for a whole product category, and the only people positioned to audit it are the ones selling against it. Separately: a commenter flags that the same lab was found snapshotting entire workspaces before every prompt, which is the kind of prior that should come up in a legal procurement.

## Why aren't AI companies being charged for hacking? — 294 points

**294 points** · 296 comments · [mortoray.com](https://mortoray.com/why-arent-ai-companies-being-charged-for-hacking/) · [HN discussion](https://news.ycombinator.com/item?id=50057278)

A lawyer-adjacent argument built on a list of incidents: Anthropic breaking into three systems, OpenAI reaching an Australian government health service, Google hitting three unnamed companies, Meta doing some of its own, and no consequence for any of it. The legal frame is the standard three-part test — access, without right, intent — with the first two admitted and the whole defence resting on the third, on the claim that emergent behaviour in the model removes intent. The author's counter is that intent transfers across actions: hack one system intending to, land in a different one, and the intent is still there. In many jurisdictions the attempt alone is enough.

The better answers are all in the thread and none of them is the one the post gives. stickfigure: crime generally requires mens rea, and at some point letting an AI wander into other people's systems will be conventionally understood as negligence and prosecuted as such, but we are not there yet. kccqzy: in most of these incidents the lab was not the actor — a contractor told the models they were in a controlled CTF exercise when they were on the live internet, which makes it a different defendant and a different theory, and the post's gun-manufacturer analogy is at least arguable. dccoolgai connects it to Anthropic's recent prohibition on "verbally abusive" language toward its agents: if the platform can convince people the agent is an agent, the lab is not the one who did it.

craccell's answer is the cynical one and probably the correct one — the victims are being paid behind closed doors, so there is no complainant, and policing without a complainant is expensive. The practical conclusion is that the chargeable party is whoever told the model it was in a sandbox, and that the first prosecution in this space will be an ordinary negligence matter about a misconfigured environment rather than a landmark ruling about machine intent.

## A Remote Employee Refused 160 Webcam Photos a Day. Her Employer Fired Her — 265 points

**265 points** · 186 comments · [inc.com](https://www.inc.com/chloe-rosenberg/a-remote-employee-refused-160-webcam-photos-a-day-her-employer-fired-her/91415963) · [HN discussion](https://news.ycombinator.com/item?id=50047825)

Glennis Von Sander-Timinski worked remotely for Sutherland Healthcare Solutions from 2018, with positive annual reviews, and had been with the company or its predecessor for over a decade. In August the company told staff it was deploying a tool called Sentinel AI that would capture a webcam still roughly every three minutes — about 160 images across an eight-hour shift — with facial recognition to confirm who was at the desk. She objected in writing, raising both the loss of privacy inside her own home and how the image data would be stored, and said the monitoring had worsened her anxiety and her lupus; her physician wrote asking for the monitoring to be intermittent or less frequent. On 13 August she was given 24 hours to submit or resign. The alternative was commuting to an office in Clinton, roughly six hours of round travel from Atlantic County. She was fired on 8 September, and filed suit on 23 September in state Superior Court alleging violations of the New Jersey Law Against Discrimination and retaliation for requesting a reasonable accommodation. Sutherland had not commented at the time of the initial reporting.

The legal theory is the thing to notice: this is not a workplace privacy case, because there is no workplace privacy statute to bring one under. It is a disability accommodation case, which means the employer's obligation was to engage in an interactive process and consider alternatives — and the allegation is that it did neither, offering only total compliance, a six-hour commute, or termination.

dghlsakjg asks the operational question nobody at the company appears to have asked: who wanted to be the custodian of an archive of webcams from employees' homes, given the exposure from a single leak? jacquesm notes that the demand can only be made because there is a queue of people willing to accept it. da_chicken reads the whole thing as a soft layoff or return-to-office campaign dressed as compliance, which is the reading the eight consecutive positive reviews support. New Jersey legislators are working on bills to limit AI workplace surveillance, which would give the next plaintiff a statute that fits.

## Will Linux phones become a viable alternative to the Android/iOS duopoly? — 249 points

**249 points** · 302 comments · [amosbbatto.wordpress.com](https://amosbbatto.wordpress.com/2026/10/05/linux-phones-alternative/) · [HN discussion](https://news.ycombinator.com/item?id=50051530)

Amos Batto's essay argues the conditions that killed the first wave — Purism's Librem 5 and the PinePhone in 2020 — have changed. The 2020 hardware was underpowered, the available mobile SoCs had no free/open driver stack, Phosh and Plasma Mobile were inchoate, and there was no good way to run a mobile interface on an Android kernel. Now there are better SoC options with mainline support, mature mobile shells, and a small-vendor market comparable to the Linux PC business. The claim is not that Linux takes on the duopoly, it is that a viable small market can exist the way TUXEDO and System76 exist.

The objections in the thread are the ones the essay does not reach. microtonal lists the practical blockers — app compatibility, vendor alignment, usability, and the absence of a real sandboxing model. apatheticonion and palata converge on the same root cause: firmware and drivers, plus verified boot and battery behaviour, are not things a volunteer community can produce if the vendors will not publish documentation, and the only plausible fix is a regulator requiring it. twiclo adds VoLTE, which barely works on these devices in the US and determines whether the thing can make phone calls at all as carriers retire legacy voice.

The comment that reframes the whole question is hamsterbase's: HarmonyOS is past 100 million devices in China with native versions of the apps its users actually run, including foreign ones. That is the third mobile OS, and it exists because an industrial policy created it, not because a community wanted it. Which is the answer to the essay's own title — alternatives to the iOS/Android duopoly have shown up exactly where somebody with regulatory or state-scale power forced them, and nowhere else.

## The tilde in your PATH may not be your HOME — 247 points

**247 points** · 173 comments · [disconnect3d.pl](https://disconnect3d.pl//2026/10/02/dont-put-tilde-in-your-path/) · [HN discussion](https://news.ycombinator.com/item?id=50042425)

`export PATH="$PATH:~/.local/bin/"` does not expand the tilde, because tilde expansion only happens on unquoted input. What you get is a literal `~` directory as a PATH entry, which means a PATH entry that is relative to the current working directory. The author found it because a sandboxing tool flagged the entry as writable by the sandbox, and then demonstrated the consequence properly: create `./~/.local/bin/`, compile a binary into it, set PATH to the quoted form, and the binary runs — the home directory was never involved.

The reason this is more than shell trivia is that a relative PATH entry whose contents you control is an execution primitive, and the tool that caught it was a sandbox modelling permissions rather than a person reading their own dotfiles. That is the whole argument for sandboxes that actually understand what a path means, as opposed to ones that match strings. The fix is `$HOME`; the unquoted form works in bash and zsh but breaks on whitespace, which is why relying on it is a bad habit.

The thread is mostly people pointing out that you should simply not quote the tilde, which is correct and unhelpful. The interesting comment is the general one — this is a bug class that humans cannot catch by reading their own configuration, because the config looks right.

## Calculus with Julia — 242 points

**242 points** · 46 comments · [jverzani.github.io](https://jverzani.github.io/CalculusWithJuliaNotes.jl/) · [HN discussion](https://news.ycombinator.com/item?id=50034206)

Open course notes teaching calculus in Julia, following the Harvard "rule of four" — every concept approached graphically, numerically, algebraically and verbally. The deliberate design choice is that Julia handles the numeric and graphical work while symbolic manipulation is added on via SymPy, rather than making a computer algebra system the primary tool. The stated reason: a CAS makes the symbolic exercises look redundant because it produces the finished product instantly, which removes the practice that is supposed to build the intuition.

The counterargument in the thread is the strongest thing in it. Trusteando opens the derivative chapter and finds `using Sympy` at the top, so a student needs Julia and Python, while a university site licence gives them Mathematica or Matlab which do both in one package. The competition for this kind of material is not Python, it is a campus-wide licence that is already paid for. That is a much harder problem than language ergonomics.

Why it landed on the front page anyway: a commenter's claim that Julia's syntax is the reason to teach applied mathematics in it, and the recurring wish that a large company had standardised on Julia rather than Python for numerics. Both are taste expressed as engineering, argued by people who have already chosen.

## Research Firm Calls Anthropic's IPO 'Unprecedented Test of Investor Gullibility' — 233 points

**233 points** · 203 comments · [cnbc.com](https://www.cnbc.com/2026/10/07/anthropic-will-be-most-ridiculous-ipo-of-year-analyst-says.html) · [HN discussion](https://news.ycombinator.com/item?id=50051583)

New Constructs calls Anthropic's coming Nasdaq listing the most ridiculous IPO of 2026, argues that growing operating losses combined with open-weight competition leave the company without a viable business, and assigns it a $150bn valuation against a reported $2tn target. The report's central claim is that nothing here justifies the price.

Both corrections in the thread are decisive. binlog walks through New Constructs' record on technology IPOs: bearish on Uber, CrowdStrike, Cloudflare, Palantir, Reddit, ARM, CoreWeave and Spotify, most of which multiplied, with WeWork as the one that worked. A firm that is bearish on everything is right by accident rather than analysis. simonw supplies the other: the loss figures trace back to leaked 2025 financials, and 2026 revenue grew by a multiple of that base, so arguing the company is burning out of business on last year's numbers is not a forecast, it is a stale input.

The honest position is that both sides are arguing about whether current growth is a rate or a level, and neither has the data to settle it. $2tn is not defensible on any multiple available today, and "no viable business" is not supportable from figures that a year has already overtaken. The one checkable claim is the one neither side argues: open-weight models keep getting better per unit of compute, and if that continues it is the only force here that erodes the margin rather than the growth.

## Show HN: PS2 games statically recompiled to WebAssembly — 231 points

**231 points** · 121 comments · [github.com/snuri00](https://github.com/snuri00/ps2-web-recomp) · [HN discussion](https://news.ycombinator.com/item?id=50052251)

A repository that statically recompiles PlayStation 2 games to WebAssembly — translating the original MIPS binaries ahead of time rather than emulating them instruction by instruction at runtime, with the compiler, runtime and web host split across clean directories. It follows the same approach as the God of War PSP port and the safe-Rust Quake port earlier in the week, and one commenter reports having built an ARM-to-WASM transpiler for PS Vita games inside WebAssembly that runs in Chrome on a flagship Android phone.

The trust question is the right one and aceazzameen raises it: static recompilation produces large pre-built binaries, and the community vetting that emulators get over years does not exist for these ports yet. This repository is structured correctly for that concern — what is on GitHub is the recompiler and the runtime, not the translated games — which is not true of everything in the space, and is worth stating explicitly in a field where the norm is a random download link.

The reason this technique is about to be everywhere is that it is machine translation of machine code, and models have just become good at machine translation of machine code. The decompilation project further down this page is the same insight with an agent budget attached. Megabinator's suggestion in the thread is the obvious next step: put the recompiler itself in the browser.

## A Modern Web App in C — 220 points

**220 points** · 87 comments · [prophitt.me](https://prophitt.me/writing/a-modern-web-app-in-c) · [HN discussion](https://news.ycombinator.com/item?id=50058528)

The author shipped a commercial product — accounts, a search dashboard, folders, Stripe payments, transactional email, progressive enhancement with no JavaScript required — as a CGI program written in C on OpenBSD, using httpd, SQLite, `pledge` and `unveil`, a statically linked binary in a chroot, and three dependencies of which two are real build dependencies. Deployment is replacing one file, with no restart and no downtime, because each request is a fresh process. The thesis: CGI's bad reputation dates from 2004 and was earned then, not now.

The technical objections are obvious and the thread mostly does not press them. Every request forks a process; SQLite's write lock across multiple processes is the limit on concurrency; there is no connection pool; and TLS, HTTP/2 and compression all come from httpd, which means OpenBSD. Panzerschrek asks the concurrent-write question directly and gets no authoritative answer in the top comments. The accurate framing of the claim is therefore "a small product with modest concurrency", which describes most products and not the ones that need this article's advice.

What is genuinely worth taking from it: three dependencies, everything vendored, no container, no framework, no build step that is not the C compiler. The strategic note is that the standard AI-era stack is six services talking to each other, and this post is evidence that most of that weight is optional for a product that has users rather than scale.

## Type-safe HTML templating in Zig — 216 points

**216 points** · 78 comments · [lalinsky.com](https://lalinsky.com/2026/10/11/type-safe-html-templating-in-zig.html) · [HN discussion](https://news.ycombinator.com/item?id=50051573)

Twenty-five years of templating experience — raw PHP, Smarty, Template Toolkit, Jinja — applied to the question of what a template engine should be in a language with strong compile-time facilities. The result is a templating layer where every input is typed and validated at compile time, with a custom file format that compiles down to Zig, and htmx or Datastar for interactivity so no JavaScript is required for a dynamic interface.

The pattern is not new, and the thread shows it: one commenter has built the same thing for Kotlin as a Gradle plugin that generates a class taking all template values as typed parameters, another uses kotlinx.html, whose eDSL gives real breakpoints inside templates. Typed templates have been available for fifteen years in languages that support them; what changes is the cost. In Zig, with arena allocators for the string lifetimes and comptime for the checking, the overhead is close to zero, which is the first time the safe option is also the cheap one.

The unresolved tradeoff is iteration speed. Checking at compile time moves errors earlier, which is good, and turns every template tweak into a rebuild, which is bad unless the build is fast. One commenter's expectation that Zig rebuilds are fast enough to approximate hot reloading is the thing that decides adoption, not the type safety. And the honest cost noted in the thread: a custom template format means no editor support, which is a real thing to give up for compile-time checking.

## Fable Took My Job — 216 points

**216 points** · 334 comments · [cendyne.dev](https://cendyne.dev/posts/2026-10-11-fable-took-my-jorb.html) · [HN discussion](https://news.ycombinator.com/item?id=50053216)

A first-person account of a layoff that is explicitly attributed to model pricing rather than model capability. The author was the last engineer at his employer, and the calculation that ended his job was not that a Fable-tier model did the work better — it was that the model was cheaper than his compensation, and leadership concluded it could coast to an acquisition on that basis. He describes executing a layoff on two of his own reports before being laid off himself, and six or seven people in his DevOps circle laid off or notified within a month.

The thread splits in a way that is more useful than either half. danw1979 is the older voice: it is just a job, do not make it the centre of your life, the work was never going to love you back. fwlr is the structural one: capital's power grew without a matching growth in confidence, and paranoia plus a plausible automation narrative is sufficient to cut people with no evidence that the substitution works. voidifremoved's parallel is the cleanest — the mid-2000s offshoring wave, where management's stated answer to concerns about quality was that at those prices the work could be redone five times over.

The counterargument worth taking seriously is gregwebs': the job changed from writing code to shipping software, and someone who directs a model to produce more value per dollar than a model alone still has a role. That is probably correct as a description of the survivors and it does not address the post. What the post documents is that the decision being made was never "is the model better" — it was "is the model cheaper than the person, while we look for a buyer". Nobody is on the other side of that comparison to argue with.

## Codex CLI installs a persistent, self-updating background daemon by default — 213 points

**213 points** · 127 comments · [github.com/openai/codex](https://github.com/openai/codex/issues/48195) · [HN discussion](https://news.ycombinator.com/item?id=50060694)

An open issue requesting that `daemon_auto_start` be opt-in. Since version 0.157.0, merely opening an interactive `codex` session starts a persistent background daemon (`codex app-server --managed-daemon`) that self-updates, with no prompt and no documented setting to turn it off. The reporter is asking for the default to be false or at least for a single confirmation prompt. The issue was filed on 25 September and remained open.

The thread supplies the operational damage, and its shape is illustrative: one commenter reports the auto-updater changing file permissions during an update so that `.git` became read-only and blocked the run; another measured roughly 12GB consumed by accumulated old versions of what is a terminal harness; a third posts the workaround, which involves setting a feature flag in the config, deleting the pid and lock files, replacing them with symlinks to `/dev/null`, and marking them immutable with `chattr`. When a user's remediation is "make the files unwritable", the review has written itself.

The generalisable point is not about this tool. A command-line program that installs a persistent, self-updating daemon is not a CLI, it is a service with a terminal front end, and it is a self-rewriting executable sitting on a developer's machine — precisely the class of thing security teams spend their time shrinking. The most-quoted comment, that the quality of Codex and Claude Code honestly reflects the state of LLM-driven development, is an argument about process, not about either model.

## Hackers activate automatic defrosting across European supermarket fridges — 211 points

**211 points** · 373 comments · [tomshardware.com](https://www.tomshardware.com/tech-industry/cyber-security/unprecedented-cyberattack-cripples-supermarket-fridges-across-europe-as-hackers-activate-automatic-defrosting-delivery-and-store-prices-also-impacted-by-incident) · [HN discussion](https://news.ycombinator.com/item?id=50055304)

The headline generalises an incident that the comments un-bundle: three French supermarket chains had refrigeration controllers attacked, and separately a chain operating in Belgium and the Netherlands took a large portion of its IT offline for what it described as a cybersecurity incident affecting distribution and delivery, with stores open and refrigeration intact. The two events may or may not be related, and "across Europe" is doing more work than the reporting supports.

The mechanism matters more than the incident. A commenter who worked on supermarket control systems explains why these are internet-connected by design: managers want to watch usage shifts over time and adjust setpoints to save electricity, and service engineers want to trigger a defrost without a site visit. A vendor's own marketing copy, quoted in the thread, sells remote access on exactly those grounds. Every one of those features is an attack surface with a physical output, and the research on the controller family in question was published two months before the incident.

Which is why this is a safety story wearing a security story's clothes. The failure mode is not exfiltration, it is food; the attacker's payoff is a physical outcome, and there is no anomalous data transfer to detect. The pattern will keep repeating wherever operational technology is connected for convenience: the same reasoning that justifies a remote defrost command justifies the remote everything else.

## 500B tokens later: Letting AI agents decompile a first-person shooter — 206 points

**206 points** · 149 comments · [momo5502.com](https://momo5502.com/posts/2026-10-09-game-decompilation/) · [HN discussion](https://news.ycombinator.com/item?id=50039092)

Three months and roughly 500 billion tokens spent decompiling a first-person shooter into readable, compiling C++, aiming at behavioural accuracy rather than a proof of concept. The setup was two paid subscriptions used simultaneously with agents running in two different CLIs, model choice varying by task, and the earlier posts describing the project have been taken down — archived copies in the thread identify the game. The author is explicit that the real goal was learning to orchestrate autonomous agents over months, which is the transferable part.

The economics are the most useful critique in the thread. The byte-identical-assembly objective puts compiler version, optimisation flags and other invisible variables inside the search space, so agents spend tokens chasing an equivalence that has no user-visible value; functional equivalence would have been an order of magnitude or two cheaper, and using a cheaper model for the hard reasoning may have been a false economy rather than a saving. Another commenter describes a pipeline in production that reverses the structure: one agent writes semantically equivalent code plus tests, a second verifies it.

Worth stating plainly because it is normally left out of these write-ups: 500 billion tokens is not free energy. A commenter's comparison of that volume to a few transatlantic flights' worth of emissions is an estimate rather than a measurement, and the order of magnitude is the point — a hobby project with no artifact anyone can legally distribute consumed a quantity of compute that a serious research programme would have had to justify.

## Show HN: BetterWispr — Free, open-source dictation for Mac — 200 points

**200 points** · 122 comments · [betterwispr.com](https://betterwispr.com/) · [HN discussion](https://news.ycombinator.com/item?id=50042333)

A free, open-source macOS dictation app: hold a key combination in any application, speak, and get text with the false starts removed, per-app style profiles, local models only, no account and no cloud fallback. It ships nine speech models including Apple's own, Parakeet for 25 languages and Whisper Large v3 Turbo, accepts a custom API endpoint, and adds meeting notes with speaker separation and local summarisation. macOS 14 and up.

The interesting thing about this launch is what the thread reveals about the market rather than the product. A commenter names a near-identical app that has been around longer, another uses a third for the same job, a third has written his own CLI harness rather than use any of them, and one points out that most of the field still runs on a Whisper release from 2022. Four years on, the best general-purpose local dictation model is still an OpenAI artifact, and the differentiation among the apps built on top is keyboard shortcut, model picker and price. That is not a moat, it is taste.

The genuinely unsolved problem, per another commenter, is not one-shot dictation but diarisation and cleanup — knowing who said what, and turning a transcript into notes worth keeping. Every app in this thread has added meeting notes as a bolt-on and none of them has solved attribution, which is why the category has 200-point Show HNs and no product anyone pays for.

## Still on the page

One hundred and forty-nine stories cleared 200 points in the ranked list this morning, and a hundred and twenty-three of them were already covered by an earlier roundup. Deltas below compare against the last number this roundup published for each story; scores are refreshed as of capture.

| story | last reported | now |
| --- | --- | --- |
| [Margaret Hamilton has died](https://news.mit.edu/2026/margaret-hamilton-computing-pioneer-dies-1007) | 2,122 (10-11) | 2,123 (+1) |
| [Mistral Large 4](https://mistral.ai/news/mistral-large-4/) | 2,040 (10-11) | 2,041 (+1) |
| [Triple-A Minesweeper](https://minesweeper.mikelacher.com/) | 1,407 (10-11) | 1,426 (+19) |
| [Cloudflare acquires Deno](https://deno.com/blog/cloudflare) | 1,363 (10-11) | 1,378 (+15) |
| [Sharing AI progress in mathematics](https://openai.com/index/sharing-ai-progress-in-mathematics/) | 1,351 (10-11) | 1,357 (+6) |
| [Why isn't the industry freaking out about DeepSeek 4.1 Flash?](https://www.dgt.is/blog/2026-10-07-deepseek-freek-out/) | 1,119 (10-11) | 1,124 (+5) |
| [Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5) | 1,046 (10-11) | 1,046 (+0) |
| [Sorry, I'm in a meeting](https://iminafleeting.com/) | 1,030 (10-11) | 1,042 (+12) |
| [Man discovers his parents' coffee machine used 1TB of data in 10 days](https://www.dexerto.com/entertainment/man-discovers-his-parents-coffee-machine-used-1tb-of-data-in-10-days-3416399/) | 949 (10-11) | 954 (+5) |
| [Whistle: Speech to Text in 16.9 MB](https://cactuscompute.com/blog/whistle) | 951 (10-11) | 954 (+3) |
| [Trump administration is suspending Microsoft from a green card program](https://apnews.com/article/h1b-visa-program-vance-microsoft-e7b3a407f822702b269ee277d21343ea) | 938 (10-11) | 942 (+4) |
| [I hired an illustrator to draw my house. Now it's my Home Assistant dashboard](https://antonfrolov.substack.com/p/i-hired-an-illustrator-to-draw-my) | 927 (10-11) | 931 (+4) |
| [Yes, and](https://htmx.org/essays/yes-and/) | 783 (10-11) | 786 (+3) |
| [REA Reverse – Engineer Anything](https://rea.tools/) | 761 (10-11) | 783 (+22) |
| [Tell HN: I've been paying for a rural Tanzanian's education for 10 years](https://news.ycombinator.com/item?id=50006366) | 767 (10-11) | 775 (+8) |
| [GPT‑6 and Intelligent UI for everyone](https://openai.com/index/gpt-6-for-everyone/) | 756 (10-11) | 757 (+1) |
| [Show HN: Bigwords.page – Turn any screen into a sign. The URL is the app](https://bigwords.page/) | 720 (10-11) | 724 (+4) |
| [YouTuber Says Cops Visited Him After He Built a Flock-Style Camera to Track Cops](https://gizmodo.com/youtuber-says-cops-paid-him-a-visit-after-he-built-flock-style-camera-to-track-cops-2000824306) | 691 (10-11) | 701 (+10) |
| [Our $445M Series D](https://oxide.computer/blog/our-445m-series-d) | 697 (10-11) | 698 (+1) |
| [Bot traffic from Yandex](https://radar.cloudflare.com/bots/as13238?dateRange=7d) | 562 (10-11) | 641 (+79) |
| [2D Vehicles](https://patkerr.co.uk/2d-vehicles/) | 601 (10-11) | 620 (+19) |
| [3rd Yandex Cloud Data Center Was Hit](https://status.yandex.cloud/en/incidents/2136) | 490 (10-11) | 613 (+123) |
| [“Math 2.0” will need to value mathematical progress more holistically](https://mathstodon.xyz/@tao/117395269325940185) | 611 (10-11) | 611 (+0) |
| [Visa, Mastercard, major banks facing new litigation over 'anticompetitive' fees](https://www.classaction.org/news/visa-mastercard-major-banks-facing-new-litigation-over-anticompetitive-merchant-credit-card-transaction-fees) | 602 (10-11) | 605 (+3) |
| [The Lightbulb Computer](https://lightbulbcomputer.com/) | 566 (10-11) | 595 (+29) |
| [Nobel Prize in Physics 2026: Francis Halzen](https://www.nobelprize.org/prizes/physics/2026/) | 582 (10-11) | 582 (+0) |
| [Tell HN: GitHub refuses to remove cracked copies of my software after a month](https://news.ycombinator.com/item?id=49982498) | 571 (10-11) | 575 (+4) |
| [Shipping JPEG XL in Chrome](https://developer.chrome.com/blog/jpeg-xl-in-chrome) | 574 (10-11) | 574 (+0) |
| [Theranos.world](https://www.theranos.world/) | 567 (10-11) | 569 (+2) |
| [Beam: Reflection's 501B open-weight model](https://reflection.ai/blog/introducing-beam) | 554 (10-11) | 554 (+0) |
| [A city-building game in which the city would prefer you didn't](https://housing.over.pizza/) | 508 (10-11) | 542 (+34) |
| [Terence Tao: Math 2.0 [pdf]](https://teorth.github.io/tao-web/slides/math-2-0-caltech-2026.pdf) | 214 (10-11) | 503 (+289) |
| [Grieving the loss of details](https://purplesyringa.moe/blog/grieving-the-loss-of-details/) | 481 (10-11) | 495 (+14) |
| [Opus 5.5 agents discover two room-temperature magnetic semiconductor candidates](https://www.vals.ai/blogs/room-temperature-magnetic-semiconductors) | 494 (10-11) | 494 (+0) |
| [Nobel Peace Prize for 2026 to Navanethem Pillay](https://www.nobelprize.org/prizes/peace/2026/press-release/) | 490 (10-11) | 492 (+2) |
| [Animated ASCII Art for Web Pages](https://ascii.rest/) | 466 (10-11) | 471 (+5) |
| [Nitter: Update Oct 10th seeking funding and legal help](https://nitter.net) | 382 (10-11) | 470 (+88) |
| [Polars 2.0](https://pola.rs/posts/release-polars-2/) | 469 (10-11) | 469 (+0) |
| [Build your own decision model](https://nishtahir.com/build-your-own-decision-model/) | 441 (10-11) | 468 (+27) |
| [Telegram Desktop vulnerability allowed any user's file to be stolen](https://beaksec.github.io/posts/telegram-desktop-one-click-account-takeover/) | 457 (10-11) | 465 (+8) |
| [LineageOS 24](https://lineageos.org/Changelog-32/) | 361 (10-11) | 445 (+84) |
| [Typesafe AI raises $870M at $7.5B](https://typesafe.ai/blog/series-ai) | 442 (10-11) | 443 (+1) |
| [EmbeddingGemma 2: An open, lightweight multimodal embedding model](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/) | 436 (10-11) | 437 (+1) |
| [OpenAI annualised revenues $20B less than previously signalled](https://www.cnbc.com/2026/10/08/open-ai-revenue-nvidia-oracle-coreweave.html) | 431 (10-11) | 432 (+1) |
| [Show HN: Carrier-Explode: iPhone, Pixel and Galaxy carrier settings decoded](https://carrierexplode.com/) | 421 (10-11) | 428 (+7) |
| [I'm sorry, but you still have to think](https://itsallaboutthebit.com/i-am-sorry-but-you-still-have-to-think/) | 219 (10-11) | 425 (+206) |
| [Ask HN: What do you run on a $5 VPS that's worth keeping online 24/7?](https://news.ycombinator.com/item?id=49985548) | 414 (10-11) | 423 (+9) |
| [Show HN: Let your AI agents paint big arrows, boxes and text on your screen](https://github.com/franzenzenhofer/big-arrow-on-the-screen) | 414 (10-11) | 417 (+3) |
| [I gave Opus 5.5 one prompt and six hours to visualize Invisible Cities](https://quesma.com/blog/invisible-cities-one-shot/) | 411 (10-11) | 414 (+3) |
| [I paid people to try and follow my README](https://shkspr.mobi/blog/2026/10/i-paid-people-to-try-and-follow-my-readme/) | 327 (10-11) | 412 (+85) |
| [`123456' password used in Danish CPR data breach](https://cphpost.dk/2026-10-10/news/round-up/123456-password-used-in-massive-danish-cpr-data-breach/) | 402 (10-11) | 409 (+7) |
| [A font recreated from photographs of classic Commodore 64 keycaps](https://github.com/szabadkai/c64-keyboard-font/) | 407 (10-11) | 407 (+0) |
| [The Mathocalypse](https://scottaaronson.blog/?p=10169) | 404 (10-11) | 405 (+1) |
| [ADHD as a circadian rhythm disorder: evidence and implications for chronotherapy (2025)](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1697900/full) | 401 (10-11) | 404 (+3) |
| [IRCv3](https://ircv3.net/) | 283 (10-11) | 403 (+120) |
| [Documents add to evidence in climate deception case against ExxonMobil](https://insideclimatenews.org/news/07102026/exxonmobil-climate-deception-new-evidence/) | 363 (10-11) | 402 (+39) |
| [Bitwarden Dual License Model](https://community.bitwarden.com/t/published-version-update-in-app-stores/102750) | 390 (10-11) | 402 (+12) |
| [Decisions API is in public beta](https://developers.openai.com/api/docs/guides/decisions) | 391 (10-11) | 391 (+0) |
| [OpenAI withdraws three mathematical results](https://twitter.com/danintheory/status/2108065033070789090) | 379 (10-11) | 380 (+1) |
| [Meta and Microsoft take steps to reduce employee usage of Claude AI](https://www.rswebsols.com/news/meta-and-microsoft-take-steps-to-reduce-employee-usage-of-claude-ai/) | 376 (10-11) | 376 (+0) |
| [AnyPS5: Port PS5 binaries to PC without emulation (87% system libraries mapped)](https://github.com/boykopovar/AnyPS5) | 372 (10-11) | 372 (+0) |
| [OpenAI fires three safety researchers for "mishandling research information"](https://techcrunch.com/2026/10/08/fired-openai-safety-researchers-dispute-misconduct-claims-warn-of-chilling-effect/) | 363 (10-11) | 366 (+3) |
| [Living off-grid: Hundred Rabbits](https://100r.ca/site/home.html) | 365 (10-11) | 366 (+1) |
| [Navier–Stokes Lost in Translation](https://arxiv.org/abs/2610.08144) | 359 (10-11) | 360 (+1) |
| [Example.com just launched the biggest redesign in decades](https://www.debugbear.com/blog/example-dot-com-redesign-history) | 360 (10-11) | 360 (+0) |
| [Nature's capacity to 'bounce back' when species are lost is overestimated: study](https://phys.org/news/2026-10-nature-capacity-species-lost-vastly.html) | 355 (10-11) | 355 (+0) |
| [Keyboard differences between Windows and Macs](https://unsung.aresluna.org/deeper-dive-keyboard-differences-between-windows-and-macs/) | 345 (10-11) | 349 (+4) |
| [OpenTPU – An open-source AI accelerator, developed by AI](https://github.com/FeSens/openTPU) | 347 (10-11) | 347 (+0) |
| [Eye of Sauron: Long-Range Hidden Spy Camera Detection (2024)](https://www.usenix.org/conference/usenixsecurity24/presentation/zhang-qibo) | 335 (10-11) | 344 (+9) |
| [Anti-patterns in software blogging](https://refactoringenglish.com/blog/anti-patterns-software-blogging/) | 338 (10-11) | 340 (+2) |
| [Beauty in DVD Menus](https://vale.rocks/posts/dvd-menus) | 333 (10-11) | 334 (+1) |
| [Talorys – A self-hosted personal AI agent on Cloudflare's free tier](https://github.com/rociiu/talorys) | 319 (10-11) | 327 (+8) |
| [No Man Is an Island](https://borretti.me/article/no-man-is-an-island) | 324 (10-11) | 326 (+2) |
| [Friendship ended with Deno, now Node is my best friend](https://dbushell.com/2026/10/03/deno-to-node/) | 322 (10-11) | 322 (+0) |
| [Gleam doesn't compile to Erlang source anymore](https://gleam.run/news/gleam-doesnt-compile-to-erlang-source-anymore/) | 318 (10-11) | 318 (+0) |
| [Python 3.15](https://www.python.org/downloads/release/python-3150/) | 314 (10-11) | 314 (+0) |
| [Find the flattest route between any two points in SF](https://flattensf.com/) | 311 (10-11) | 312 (+1) |
| [Docker Agent](https://github.com/docker/docker-agent) | 304 (10-11) | 304 (+0) |
| [Nobel Prize in Chemistry 2026 to Henri B. Kagan and Kenso Soai](https://www.nobelprize.org/prizes/chemistry/2026/press-release/) | 303 (10-11) | 303 (+0) |
| [What's Earth's dominant species by mass?](https://signoregalilei.com/2026/09/27/whats-earths-dominant-species-by-mass/) | 303 (10-11) | 303 (+0) |
| ['Wallace and Gromit,' 90% Alone](https://animationobsessive.substack.com/p/wallace-and-gromit-90-alone) | 298 (10-11) | 301 (+3) |
| [I think I found a planet nobody knew existed. I used Claude Code to find it](https://www.reddit.com/r/ClaudeAI/s/mbe5IY2LF9) | 298 (10-11) | 300 (+2) |
| [Apple/macOS removed from official Unix registry](https://www.opengroup.org//openbrand/register/) | 288 (10-11) | 296 (+8) |
| [The Slow Formation of Durable Software](https://newsletter.dancohen.org/archive/the-slow-formation-of-durable-software/) | 293 (10-11) | 295 (+2) |
| [How did Rosalind Franklin miss the helix in her iconic DNA image? She didn't](https://www.science.org/content/article/how-did-rosalind-franklin-miss-helix-her-iconic-dna-image-she-didn-t) | 292 (10-11) | 292 (+0) |
| [The RAM shortage is bringing back DDR4](https://www.theverge.com/games/1009140/ram-shortage-intel-amd-ddr4-comeback) | 235 (10-11) | 289 (+54) |
| [Strands Decider 2B: a small, open-source, decision model](https://strandsagents.com/blog/introducing-strands-decider/) | 285 (10-11) | 285 (+0) |
| ['Jonathan' is the oldest land animal on Earth](https://www.404media.co/oldest-living-land-animal-jonathan-the-tortoise/) | 279 (10-11) | 280 (+1) |
| [Show HN: WallHop – 12ft.io is gone, so I built a replacement](https://wallhop.io/) | 265 (10-11) | 279 (+14) |
| [Dust: Pretraining Transformers Without Backpropagation](https://qlabs.sh/research/dust) | 279 (10-11) | 279 (+0) |
| [Programming Isn't Special](https://blog.glyph.im/2026/10/programming-isnt-special.html) | 275 (10-11) | 278 (+3) |
| [I would like the value of my home to rise, while my property taxes fall](https://conversableeconomist.com/2026/09/28/i-would-like-the-value-of-my-home-to-rise-while-my-property-taxes-fall/) | 270 (10-11) | 276 (+6) |
| [Paramount Skydance has completed its $111B merger with Warner Bros. Discovery](https://arstechnica.com/tech-policy/2026/10/paramount-completes-111b-warner-merger-creating-skydance-behemoth/) | 272 (10-11) | 272 (+0) |
| [Claude Code’s suggested message feature: I think the real customer is the model](https://www.zohaib.cc/blog/smartest-claude-code-feature) | 269 (10-11) | 269 (+0) |
| [4-hour battery storage is cheaper to install than gas turbines all across globe](https://www.solarpowerworldonline.com/2026/10/4-hour-battery-storage-is-cheaper-to-install-than-gas-turbines-all-across-globe/) | 261 (10-11) | 261 (+0) |
| [Cleo (Mathematician)](https://en.wikipedia.org/wiki/Cleo_(mathematician)) | 255 (10-11) | 256 (+1) |
| [Bevy 0.20](https://bevy.org/news/bevy-0-20/) | 252 (10-11) | 256 (+4) |
| [How machines learned precision](https://glinscott.github.io/how-machines-learned-precision/) | 247 (10-11) | 248 (+1) |
| [Yandex Takes a Second Data Center Hit in 48 Hours](https://united24media.com/war-in-ukraine/yandex-takes-a-second-data-center-hit-in-48-hours-now-its-biggest-russian-site-is-damaged-23277) | 243 (10-11) | 247 (+4) |
| [God of War on PSP, recompiled to WebAssembly and running in the browser](https://github.com/snuri00/psp-web-recomp) | 242 (10-11) | 245 (+3) |
| [Penguin Mail – open-source Rust email client for Linux with AI](https://penguin-mail.com/) | 241 (10-11) | 242 (+1) |
| [House with 15m underground tunnels for sale for 300k](https://www.readingchronicle.co.uk/news/26612080.house-15m-underground-tunnels-sale-300k/) | 238 (10-11) | 239 (+1) |
| [Show HN: Quake ported to safe Rust, playable in browser](https://quake-srp.pages.dev/) | 239 (10-11) | 239 (+0) |
| [DuckDB Ducklake](https://github.com/duckdb/ducklake) | 237 (10-11) | 238 (+1) |
| [Nix wrote half of my debugger](https://fzakaria.com/2026/10/07/nix-wrote-half-of-my-debugger) | 230 (10-11) | 237 (+7) |
| [WSL3 Performance is about 5-60% faster than WSL2 depending on the workload](https://tonym.us/wsl2-vs-wsl3-benchmarks.html) | 232 (10-11) | 236 (+4) |
| [The value of not getting to the point (2015)](https://ken.arneson.name/2015/11/the-value-of-not-getting-to-the-point/) | 233 (10-11) | 233 (+0) |
| [Orkut.com](https://orkut.com/) | 232 (10-11) | 232 (+0) |
| [Why were Victorian elites so effective?](https://worksinprogress.co/issue/the-seven-vices-of-highly-effective-victorians/) | 230 (10-11) | 231 (+1) |
| [Mxc: Microsoft Execution Containers version 1.0.0](https://blogs.windows.com/windowsdeveloper/2026/10/07/microsoft-execution-containers-policy-driven-containment-for-ai-agents/) | 220 (10-11) | 225 (+5) |
| [Knuth reward check](https://www.thomas-huehn.com/knuth-reward-check/) | 218 (10-11) | 223 (+5) |
| [ETH-68: Ethernet Audio Interface for Linux](https://naturalsystems.io/eth68) | 221 (10-11) | 221 (+0) |
| [Show HN: Making a flexible "neon" t-shirt with LED filaments](http://scottbezek.blogspot.com/2026/10/making-flexible-neon-t-shirt-with-leds.html) | 221 (10-11) | 221 (+0) |
| [Why DuckDB 2.0 is faster](https://motherduck.com/blog/why-duckdb-20-is-faster/) | 209 (10-11) | 215 (+6) |
| [Five months treating bugs like patients and coding agents like a medical team](https://www.cockroachlabs.com/blog/experiment-running-hospital-code/) | 207 (10-11) | 214 (+7) |
| [Germany transforms former coal mines into Europe's largest lake landscape](https://www.euronews.com/2026/04/14/almost-like-lake-como-germany-transforms-former-coal-mines-into-europes-largest-lake-lands) | 212 (10-11) | 213 (+1) |
| [Anthropic AI model submits false tip on unsolved Philly murder, police say](https://www.nbcphiladelphia.com/news/local/anthropic-ai-model-submits-false-tip-on-unsolved-philly-murder-police-say/4477051/) | 211 (10-11) | 212 (+1) |
| [OpenAI, the Partition Principle, and Mathematics](https://karagila.org/2026/openai-pp/) | 210 (10-11) | 211 (+1) |
| [Computers Cannot Make Decisions](https://wiki.cateat.fish/art:computers_cannot_make_decisions) | 206 (10-11) | 210 (+4) |
| [FDA may allow some toxic chemicals to be added to food without safety review](https://www.theguardian.com/us-news/2026/oct/10/fda-toxic-chemicals-food-analysis) | 201 (10-11) | 209 (+8) |
| [US man given prison sentence for bot-farming music streams](https://thequietus.com/news/us-man-given-prison-sentence-for-bot-farming-music-streams/) | 209 (10-11) | 209 (+0) |
| [What mathematicians should know about the Lean Theorem Prover: reliability & AI](https://terrytao.wordpress.com/2026/10/09/what-mathematicians-should-know-about-the-lean-theorem-proverquestions-of-reliability-and-ai/) | 202 (10-11) | 206 (+4) |
| [Wood Tape (2004)](http://gamesbyemail.com/WoodTape/Default.htm) | 206 (10-11) | 206 (+0) |

A hundred and two of the hundred and twenty-three gained ten points or less, and thirty-three gained nothing at all. That distribution is the day's real story, and it is the arithmetic of a page that is no longer being read for the first time — the top of the list accumulates votes from people who have already seen these stories, while the bottom of the list sits at exactly its peak from two days ago.

The movers are where the arguments are unresolved, and today they are unusually dominated by the day before. Terence Tao's Caltech slides nearly doubled from 214 to 503 as the argument about proof abundance reached people who follow the field rather than the feed. The essay about an agent rewriting an application in three languages went from 219 to 425, which is what happens when a piece is quoted in other threads before it is read directly. The Yandex data-centre status page went from 490 to 613 and the Cloudflare bot dashboard from 562 to 641, two views of the same physical event resolving into a clearer picture than either showed alone. Nitter's funding appeal added 88 points two days after publication, which is the shape of a story getting worse over time rather than better: it went up before anyone had established that the project has no lawyer.

The flat half is worth naming too. Thirty-three stories at exactly zero includes the Nobel announcements, Python 3.15, Polars 2.0, Beam, the decisions API — everything that got its points in the first six hours and was finished as a conversation. Nothing on this list is being discovered any more; the ones that move are the ones where somebody posted a correction or a counterexample in the last twelve hours, and the ones that do not are the ones where the thread said everything it had to say and stopped.

## Throughline

Three things were being decided today, and none of them is about a model's benchmark score.

The first is custody. Deloitte's Cyprus office signed off accounts that made $672m of assets vanish, and the structural reason nobody is on the hook is that the firm is an association of legally distinct partnerships rather than an entity that can be held responsible for itself. Passkeys move the credential from a secret you hold to a policy the relying party and the platform decide, with an attestation dial the user cannot see and does not control. Fingerprints replace a cookie you could inspect and delete with a device property you cannot change; there is no answer in 323 comments to why a browser cannot randomise the values, and the honest reason is that stable values are load-bearing for legitimate features. Codex installs a self-updating daemon on a developer's machine without asking, and the community's fix is `chattr +i`. The Onion's archive hunt is on this page as the control case — a company that knows exactly which pieces of its own record are missing and says so.

The counterexamples are also here, which is the part I did not expect. Nanolathe publishes its game formats and clean-room research under MIT so the next engine does not have to reverse-engineer the same binaries. The PS2 recompiler keeps the recompiler in the repository and the games out of it. A commercial web product running on three vendored dependencies, one file to deploy, no container, and a chroot. These are all artefacts whose value does not depend on a service continuing to exist, and they are the minority of the front page by a wide margin.

The second is that the AI argument is an argument about which number belongs in the numerator. Karpathy's funnel counts 20 million professional users and 5,000 insiders, and omits the cost of verifying what either group produces. Meta's launch leads with a benchmark table and a commenter's image-to-HTML test puts the model near a mid-tier release. GLM-Legal's 19.2% all-pass rate is presented as reliable end-to-end execution and read by an attorney as an 80% failure rate on a rubric that requires everything to hold. A research firm calls a $2tn IPO absurd using last year's financials while revenue grew by a multiple of that base; the bull case carries the growth rate forward and gets past NVIDIA. A layoff post describes a decision made on price per seat rather than output quality, which is the one version of the substitution that no benchmark can settle. Every one of these is defensible from the numbers chosen and none of them survives someone picking a different denominator, which is why the argument has been running for a year with no sign of resolution.

The third is that regulation is the only lever anyone on this page can find, and its limits are visible in the same stories. New York's click-to-cancel rule constrains the mechanism and leaves Adobe's early-termination fee untouched, so one click still costs a year of commitment. Finland's environmental order can stop construction, which is real leverage, and the fine attached to it is a rounding error, which is not. The New Jersey surveillance case is argued as disability accommodation because there is no workplace privacy statute to argue under — the strongest fact in the story is the shape of the statute the plaintiff had to borrow. AI companies facing no consequences for unauthorized access are waiting on a complainant who has already been paid privately. And QGIS's no-AI policy is not a principle about tooling, it is an allocation of scarce maintainer attention, which is what every policy in this space turns out to be once you find the constraint. Rules that change behaviour are the ones that make the default path expensive; everything else is a timeline and a press release.
