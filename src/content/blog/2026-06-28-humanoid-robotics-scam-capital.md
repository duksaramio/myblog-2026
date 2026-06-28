---
title: "Humanoid robotics is the scam capital of the entire robotics industry"
pubDate: 2026-06-28
description: "~$50B in combined valuations, $39B for Figure alone, and the actual deployed units are countable on two hands. A grounded look at what's real, what's theater, and why the skeptics have the better of the argument in 2026."
draft: false
tags: ["robotics", "humanoid", "industry-analysis", "china", "research"]
---

Spent the day digging into the humanoid robotics industry because I wanted to understand where the money was actually going versus where the press releases were pointing. The short version: this is the single most overcapitalized, underrevenue-generating corner of the entire robotics industry, and the skeptics have the better of the argument in 2026.

Here's the read.

## The headline mismatch — $50B of valuations vs. ~20,000 units shipped

The cleanest way to see the problem is the gap between valuation and shipped product.

- Global humanoid shipments in 2025: roughly **18,000–22,000 units**, per the China Humanoid Robot Scene Application Alliance and SemiAnalysis.
- **China accounted for ~85–90% of those units.** AgiBot shipped ~5,168 units, Unitree shipped ~5,500. UBTech, Leju, Engine AI, and Fourier Intelligence filled out the top tier.
- US humanoid deployments that are actually doing paid work: counted on two hands.
- US VC funding into humanoid + physical AI in 2025: **~$27.6B** (PitchBook) or ~$13.8B depending on how you scope it.
- Valuations: Figure AI at **$39B** post-money (Sept 2025 Series C), Apptronik at ~$5.5B (Feb 2026 Series A extension). The top US humanoid leaders carry a combined valuation north of **$50B** — with effectively zero disclosed revenue between them.

That's the scam signature. Real technology, real engineers, real early deployments — but the money flowing in is sized for a category that doesn't exist yet.

## Who's actually shipping — ranked by reality, not press

I'm splitting these into three tiers because the gap between the best and worst players here is enormous.

### Tier 1: Real deployments, real customers, real (small) revenue

**Agility Robotics — Digit.** ~$641M raised. Focused entirely on logistics — specifically tote and bin handling. They've crossed 100,000 tote-handling cycles in GXO and Amazon warehouses. Single-purpose design (legs and torso, no humanoid arms) is the secret. They've optimized for one boring job and made it work. Most production-ready US humanoid, also the most constrained because they're not pretending to be general-purpose.

**Apptronik — Apollo.** ~$935M Series A (Feb 2026), $5.5B valuation. Real partnership with Google DeepMind (Gemini Robotics running inside Apollo). Pilots at Mercedes-Benz on automotive lines, GXO Logistics, Jabil. John Deere and AT&T Ventures joined the latest round — unusual investor mix that suggests industrial/strategic positioning rather than pure financial speculation.

**Figure AI — Figure 02 / Figure 03.** ~$1.75B raised at a $39B valuation. The most-cited deployment is the 11-month BMW Spartanburg program where a Figure 02 robot contributed to the production of ~30,000 BMW X3 vehicles — but it was a single workstation, not a fleet. Figure 03 is now reportedly scaling to ~40 units at the same facility. In May 2026 they ran three humanoids through 24+ hours of continuous autonomous package sorting. Real milestone, narrowly scoped. The "$39B valuation on ~30,000 vehicle-assists and a package-sorting demo" framing is the cleanest example of valuation disconnected from business reality.

### Tier 2: Pre-commercial but credible

**1X Technologies — NEO.** Norwegian / California, backed by OpenAI. Opened consumer pre-orders October 2025 for a home humanoid at $20,000 outright or $499/month, with first consumer shipments targeted for 2026. Soft-body design (machine-washable nylon suit) built for safe home interaction. The most ambitious consumer play in the category. Also the most exposed to consumer-protection scrutiny if 2026 deliveries slip — a $20K home robot that can't actually do chores is a returns nightmare.

**Tesla — Optimus.** Internal production at Fremont and Giga Texas. As of June 2026, Tesla claims ~1,000+ Optimus units deployed internally (not independently verified). The track record on targets is bad: "Production ready by 2023," "thousands in factories by end 2023," "several thousand in 2025" (actual: hundreds, a >90% miss). Gen 3 unveil slipped from Q1 2026 to March 31, 2026. Optimus is not for sale to anyone — not consumers, not businesses — as of June 2026.

The famous Miami stumble from December 2025 is worth dwelling on. During a public demo, an Optimus fell backwards. The video showed a teleoperator removing a VR headset at the same moment. Elon insisted it was AI, not tele-operated. Most engineers in the field disagreed. The honest read on Tesla: real hardware, real internal deployment, but primarily a **stock narrative, not a product line.** Tesla has the capital to keep funding this for a decade, which is the actual moat.

**Boston Dynamics — Atlas (electric).** Hyundai-owned. Unveiled the new Atlas January 2026. All 2026 production is already committed to Hyundai's Robotics Metaplant Application Center (RMAC) and Google DeepMind. Hyundai is building a factory capable of 30,000 robots per year. Backed by Hyundai's $26B AI-robotics investment. Different category from the startups — Hyundai is the customer, so this is closer to a captive supplier than a venture bet. Real deployments, real commitment. But Boston Dynamics has been promising "Atlas will change everything" for 15 years. Until you see Hyundai's Metaplant running with actual Atlas throughput numbers, treat with caution.

### Tier 3: Mostly hype / demos / pre-revenue

This is where most of the scam feel lives. Sanctuary AI's Phoenix has had lots of demos, no shipping data, and pivot stories. Several "general-purpose foundation model for robotics" companies are raising on the AI story alone. A number of smaller US/EU and Indian startups are in this category with high-profile raises and almost no deployed product.

## The China story — where the units actually are

Western press consistently underreports this.

**Unitree** filed for a ~$580M IPO on the Shanghai STAR Market in March 2026. 2025 humanoid shipments: ~5,500 units, plus a dominant position in quadrupeds. The G1 humanoid price has been cut to **~$27,300** (from initial $150K). Gross margin on humanoids: **~67%** per IPO disclosures covered by SemiAnalysis. Targeting 20,000 humanoid units in 2026.

**AgiBot (Zhiyuan)** shipped ~5,168 units in 2025. Made headlines at the Shanghai half-marathon and various factory demos.

The Chinese structural advantage is real:

1. Supply chain density in Shenzhen — sub-$10K robotic arms available off-the-shelf, component costs 50–70% lower than equivalent US sourcing.
2. Government subsidies — "Made in China 2025" plus dedicated humanoid action plans.
3. Domestic demand — BYD, CATL, and Foxconn are massive robot buyers, all Chinese.
4. Lower labor cost of teleoperators — many Chinese humanoid demos are tele-operated, and a $5–10/hour teleoperator changes the cost math dramatically.

The catch: Chinese volumes are real but **the addressable market value per unit is much lower than in the US or EU.** A $27K Unitree G1 sold to a Chinese university is a fraction of the revenue a $150K Figure 02 at BMW represents (if those BMW deployments actually scale).

## The unit economics — when do they actually work?

This is the question almost no humanoid press piece answers.

Current BOM for a mid-range industrial humanoid: $40,000–$80,000, dominated by actuators, control boards, batteries, sensors, compute, and structure.

The math problem: a factory worker in the US costs ~$50–70K/year fully loaded. A humanoid at $150K capital + ~$30K/year operating + finance costs runs **$45–55K/year** — competitive *only* if it does a full human shift of useful work, which current humanoids do not.

Current humanoids in real deployment run **single-task, single-shift, narrow-scope** work — tote handling, parts sorting, simple assembly steps. They're augmenting human workflows in narrow zones, not replacing workers.

When does the math flip?

- Hardware cost needs to drop another 50–70% (actuators and batteries are the bottlenecks).
- Reliability needs to improve — most humanoids are nowhere near the uptime of industrial arms or AMRs.
- Software generality — the Vision-Language-Action models need to actually generalize. Right now every deployment is heavily engineered and customized.

Goldman Sachs projects the market reaches $38B by 2035 — a 6× upward revision from their earlier $6B forecast. Treat these as analyst fiction, not forecasts.

## The scammy patterns — specific to humanoids

Humanoid robotics is the densest concentration of bad incentives in all of robotics.

**Teleop theater.** Demos that claim AI autonomy are actually tele-operated. The Miami Optimus stumble is the most famous example, but it happens across the category.

**Letter-of-intent inflation.** "We have an LOI with BMW/Amazon/Mercedes!" LOIs are non-binding and routinely don't convert. Convert an LOI into a paid deployment with disclosed robot count and tasks — *then* it's real.

**TAM fiction.** "$38B market by 2035" headlines. These analyst reports are often funded by the very companies being analyzed. Read methodology, not headlines.

**Single-use-case demos presented as general-purpose.** A robot that sorts packages for 24 hours is not "the future of work." It's one robot doing one thing in a controlled environment.

**Unit conflation.** Companies announce "$X in orders" without disclosing robot count, contract length, or deployment probability.

**AI washing.** "Powered by foundation models" — every humanoid says this. Few have meaningful autonomy outside scripted tasks.

**Founder-CEO as chief hype officer.** Tesla Optimus, Figure, 1X — the CEOs are the lead marketers. Engineering realism often loses to narrative needs.

**Defense pivot as backup revenue.** Several humanoid companies quietly live off DoD/DARPA contracts when commercial pilots stall. Check the cap table and the contract disclosures.

## The famous skeptic — Rodney Brooks

In September 2025, Rodney Brooks (iRobot co-founder, MIT, Rethink Robotics) published a widely-discussed essay predicting the humanoid bubble would burst. The key arguments:

1. Successful "humanoid" robots in 15 years will not look like humans — they'll have wheels, multiple arms, specialized sensors. Bipedal humanoid form is a marketing choice, not an engineering one.
2. Manipulation dexterity is wildly overhyped. Human hands do things no current robot can replicate, and the gap is much bigger than foundation models suggest.
3. Energy efficiency is fundamentally broken. Humanoid robots consume 10–100× more energy per task than specialized robots. Physics doesn't bend for VLA models.
4. Most announced tasks don't match the form factor. If your task is moving totes, a wheeled AMR with a lift is 10× more efficient.
5. Capital is flowing to humanoid because it's photogenic, not because the unit economics work.

He's been right about AI hype cycles repeatedly and wrong about specific companies (he bought into the Rethink hype himself). Treat his framework as valuable, his predictions as probabilistic. The strongest version of his argument: **most current humanoid companies will fail, and the technology that wins will not look like a biped.**

## Where the real money is going (if you're investing or just tracking)

If you're sizing up exposure — yours or the market's:

- Don't invest based on demos. Wait for disclosed paid deployment counts with real customers doing real work.
- Watch the China numbers. Unitree's IPO disclosures will be the first audited humanoid unit-economics dataset. Read it carefully when it lands.
- Boston Dynamics / Hyundai is the closest thing to a real industrial deployment at scale. Watch the Metaplant Application Center for actual throughput.
- Software companies (foundation models, VLA, simulation) may capture more value than hardware. NVIDIA's robotics stack, Physical Intelligence, Google DeepMind Robotics, Skild AI — these are where the real leverage may sit.
- Pick-and-shovel plays (harmonic drive, torque sensors, lithium battery suppliers) are less sexy but more reliably monetized.
- Avoid anything valued >$10B without $50M+ ARR. Figure at $39B with effectively zero disclosed revenue is the cleanest example.

## What to watch 2026–2028

- **Unitree IPO disclosures.** First audited view of humanoid economics.
- **Hyundai Metaplant Atlas throughput.** First real factory-scale humanoid deployment data.
- **Figure 03 fleet expansion at BMW.** If it actually scales beyond the Spartanburg pilot, the thesis gets real.
- **1X NEO home deliveries.** If 2026 consumer deliveries slip, the entire consumer-humanoid thesis takes a hit.
- **Tesla Optimus external sale.** Will Tesla ever sell an Optimus outside its own factories? If yes, that's a milestone. If no, it's a stock narrative.
- **The bubble question.** 2027–28 will start to show whether Brooks' skepticism was vindicated or whether the category normalizes around a smaller set of real winners.

## The honest 2026 take

Humanoid robotics is at the same stage EVs were in 2008, or smartphones in 2007, or generative AI in 2020. **Real underlying technology, real capital flowing in, real early deployments — but the gap between current state and the hype is enormous.**

Some companies will be massive winners. Most won't. The smart money is on the boring infrastructure (components, software, simulation) and the few hardware companies with real deployed units — not on the demo-leaders with the best marketing and the loosest connection between valuation and revenue.

The scam capital of the industry is real. So is the underlying technology. The mistake is confusing one for the other.

---

**Sources** (verified live 2026-06-28):

- IFR World Robotics 2025 (released Sept 25, 2025) — global industrial robot installation base
- BMW Group press release on Figure 02 Spartanburg deployment — ~30,000 vehicles / 11 months
- Apptronik press release (Feb 11, 2026) — $935M Series A, $5.5B valuation
- Reuters / Crunchbase News (Sept 16, 2025) — Figure $39B post-money
- Unitree PR Newswire (Jan 29, 2026) — 5,500 humanoid units shipped in 2025
- SemiAnalysis coverage of Unitree IPO filing (June 2026) — 67% gross margin, $27K G1 price
- TechCrunch coverage of China humanoid market (Feb 28, 2026) — AgiBot ~5,168 units, China 85–90% of global shipments
- Boston Dynamics press release (Jan 8, 2026) — Atlas 2026 production fully committed to Hyundai + DeepMind
- Forbes (Jan 6, 2026) — Hyundai 30,000 robots/yr factory plan
- Rodney Brooks essay (Sept 26, 2025) via TechCrunch — humanoid bubble thesis
- Interesting Engineering / Futurism (Dec 8, 2025) — Tesla Optimus Miami demo stumble
- 1X.tech order page and press release (Oct 28, 2025) — NEO consumer pre-orders
- Goldman Sachs humanoid market projection (covered via multiple 2025 reports)

---

*Research for this post was done by Hermes Agent using MiniMax-M3.*
