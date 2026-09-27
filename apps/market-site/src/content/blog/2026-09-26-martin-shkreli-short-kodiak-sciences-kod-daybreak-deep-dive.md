---
title: "Why Martin Shkreli Is Shorting Kodiak Sciences ($KOD) Ahead of DAYBREAK: A Forensic Biotech Deep Dive"
pubDate: 2026-09-26
description: "Martin Shkreli announced he is shorting Kodiak Sciences ($KOD) at $32 ahead of the pivotal Phase 3 DAYBREAK data readout on Monday, September 28, 2026. We conduct a deep clinical, pharmacological, and financial investigation into tarcocimab tedromer, the ABC biopolymer platform, its historical trial failures, the $125.9M cash cliff, and deliver our independent verdict."
draft: false
tags: ["kodiak-sciences", "kod", "martin-shkreli", "short-thesis", "biotech-investing", "tarcocimab", "daybreak", "clinical-trials", "deep-research"]
image: "/shkreli-kod-short-daybreak.png"
lang: "en"
---

On Saturday, September 26, 2026, just 48 hours before one of the most anticipated binary biotech catalysts of the year, Martin Shkreli publicly announced a high-conviction short position in **Kodiak Sciences Inc. ($KOD)**:

![Martin Shkreli Short Kodiak Sciences KOD Ahead of DAYBREAK](/shkreli-kod-short-daybreak.png)

> *"im short $KOD ahead of DAYBREAK. tarco is proven inferior to Eylea, the mainstay w/ biosimilars available. no amt of repeated trials (this is 3rd) will show tarco is any different: numerically inferior to eylea. rest of co efforts are waste. near no cash, KOD should plummet"*
> — **Martin Shkreli (@MartinShkreli), September 2026**

With Kodiak Sciences trading at **$32.35**—up dramatically from its multi-year lows near $2–$4—and scheduled to host a pivotal investor webcast at **8:30 AM ET on Monday, September 28, 2026** to release topline results from its Phase 3 **DAYBREAK** trial, market tension could not be higher.

Is Shkreli merely engaging in provocative biotech contrarianism, or does his short thesis expose an insurmountable pharmacological flaw and a terminal cash burn trap?

We conducted a forensic investigation into Kodiak Sciences, auditing:
1. The biophysics and pharmacology of the **Antibody Biopolymer Conjugate (ABC®)** platform and **tarcocimab tedromer** (Zenkuda / KSI-301).
2. The empirical track record across prior pivotal trials (**DAZZLE**, **GLEAM**, **GLIMMER**, and **DAYLIGHT**).
3. The trial design and statistical hurdles of the Phase 3 **DAYBREAK** study.
4. The 2026 competitive landscape (**Eylea HD**, **Vabysmo**, and cut-rate aflibercept biosimilars).
5. The balance sheet and solvency profile (Q2 2026 cash balance vs. quarterly burn rate).
6. Our independent decision on whether we agree or disagree with the short thesis.

---

## 1. Dissecting Shkreli’s Short Thesis: Four Core Pillars

Shkreli’s 48-word post dismantles Kodiak's investment thesis into four precise arguments:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 MARTIN SHKRELI'S KOD SHORT THESIS BREAKDOWN                 │
├───────────────────────┬─────────────────────────────────────────────────────┤
│ Core Claim            │ Underlying Thesis Mechanism                         │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 1. Proven Inferiority │ Tarcocimab failed non-inferiority in DAZZLE         │
│                       │ (+1.0 letters vs. +7.0 for Eylea).                  │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 2. The "3rd Trial"    │ Shuffling trial designs cannot fix fundamentally    │
│    Fallacy            │ sub-therapeutic vitreal/retinal PK/PD concentrations.│
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 3. Wasted Pipeline    │ KSI-501 (bispecific) shares the same ABC biopolymer │
│    Efforts            │ liabilities; DR trials beat sham, not standard care.│
├───────────────────────┼─────────────────────────────────────────────────────┤
│ 4. Acute Cash Burn    │ $125.9M cash vs. $65.6M quarterly loss = terminal   │
│    & Dilution Cliff   │ dilution or insolvency ahead.                       │
└───────────────────────┴─────────────────────────────────────────────────────┘
```

Let us evaluate each claim against empirical data, clinical trial registries, SEC filings, and retinal pharmacology.

---

## 2. The Science: What Is Tarcocimab and the ABC Platform?

To understand why tarcocimab has repeatedly struggled, one must inspect the molecular engineering of Kodiak's proprietary **Antibody Biopolymer Conjugate (ABC®)** platform.

### The Engineering Rationale
The standard of care for retinal vascular diseases—such as neovascular (wet) age-related macular degeneration (nAMD), diabetic macular edema (DME), and retinal vein occlusion (RVO)—is intravitreal injection of vascular endothelial growth factor (VEGF) inhibitors (e.g., aflibercept/Eylea, ranibizumab/Lucentis).

Historically, anti-VEGF biologics have a short intravitreal half-life (~4 to 9 days). To maintain suppression of retinal vascular permeability and choroidal neovascularization, patients must endure needle injections directly into their eyes every 4 to 8 weeks. This treatment burden leads to real-world undertreatment, non-compliance, and irreversible blindness.

Kodiak’s thesis was conceptually ambitious: **conjugate a humanized anti-VEGF-A antibody fragment (Fab) to an ultra-high-molecular-weight (~800 kDa) branched phosphorylcholine (PC) biopolymer.**

```
                     KODIAK ABC® PLATFORM SCHEMATIC
   
       [ Anti-VEGF Fab Fragment ] (Binding affinity & specificity)
                  │
                  ▼ (Optically clear covalent linkage)
     ====================================================
     [   800 kDa Phosphorylcholine (PC) Biopolymer Mesh  ]
     ====================================================
                  │
                  ├─► Intended: Prolonged vitreous retention (Slow clearance)
                  └─► Unintended Liability: Impeded retinal tissue penetration &
                      sub-therapeutic retinal pigment epithelium (RPE) trough levels
```

### The Biophysical Trade-Off: Vitreal Retention vs. Retinal Bioavailability
The biopolymer succeeded in making the molecule massive (~950 kDa total conjugate weight). In the aqueous vitreous humor, this immense hydrodynamic radius significantly slows diffusion toward the anterior chamber, dramatically increasing vitreous retention time.

However, in biology, there is no free lunch:
1. **The Retinal Barrier:** The therapeutic target is not floating loosely in the center of the vitreous cavity; it resides within the retina, subretinal space, and choroid. Large macromolecules exhibit exponentially slower diffusion through the internal limiting membrane (ILM) and neurosensory retina.
2. **Trough Concentration Deficits:** When Kodiak attempted to stretch dosing intervals to 12, 16, 20, or 24 weeks, the effective concentration of free, unhindered anti-VEGF at the active chorioretinal lesions dropped below the critical inhibition threshold.
3. **Foreign Material Clearance:** Intravitreal retention of dense biopolymers carries chronic risks of localized aggregation, inflammatory immune responses, and interference with lens metabolism (cataractogenesis).

---

## 3. Clinical Forensic Audit: DAZZLE, GLEAM, GLIMMER, and DAYLIGHT

Shkreli's assertion that *"tarco is proven inferior to Eylea... no amt of repeated trials (this is 3rd) will show tarco is any different"* directly references the painful clinical trial history of tarcocimab tedromer.

```
                    SUMMARY OF PIVOTAL TARCOCIMAB TRIALS
┌──────────┬──────────┬─────────────┬─────────────────────┬──────────────────┐
│ Trial    │ Disease  │ Dosing      │ Primary Visual      │ Outcome & Market │
│ Name     │ Target   │ Regimen     │ Acuity Result (BCVA)│ Reaction         │
├──────────┼──────────┼─────────────┼─────────────────────┼──────────────────┤
│ DAZZLE   │ wet AMD  │ Extended    │ Tarco: +1.0 letters │ FAILED non-infer-│
│ (2022)   │ (Naïve)  │ Q12W-Q20W   │ Eylea: +7.0 letters │ iority (-6.0 gap)│
│          │          │ vs. Eylea Q8│ Gap: -6.0 letters   │ Stock dropped 80%│
├──────────┼──────────┼─────────────┼─────────────────────┼──────────────────┤
│ GLEAM /  │ DME      │ Extended    │ Failed Non-Inferior │ FAILED endpoints;│
│ GLIMMER  │ (Diabetic│ Q8W-Q24W    │ Cataract AE: ~19%   │ ~19% cataracts;  │
│ (2023)   │ Edema)   │ vs. Eylea Q8│ vs. 9% in Eylea     │ Dropped to ~$2   │
├──────────┼──────────┼─────────────┼─────────────────────┼──────────────────┤
│ DAYLIGHT │ wet AMD  │ Rigid Q4W   │ Tarco: +7.1 letters │ PASSED, but Q4W  │
│ (2023)   │ (Naïve)  │ (Monthly)   │ Eylea: +6.7 letters │ monthly dosing   │
│          │          │ vs. Eylea Q8│ Non-inferiority met │ is DOA in market │
├──────────┼──────────┼─────────────┼─────────────────────┼──────────────────┤
│ DAYBREAK │ wet AMD  │ Q4W-Q24W    │ Scheduled for       │ BINARY CATALYST  │
│ (Sep 28, │ (Naïve)  │ vs. Eylea 2mg│ Monday, Sept 28,    │ CURRENT STOCK:   │
│ 2026)    │          │             │ 2026 (8:30 AM ET)   │ $32.35           │
└──────────┴──────────┴─────────────┴─────────────────────┴──────────────────┘
```

### The DAZZLE Debacle (February 2022)
In the Phase 2b/3 DAZZLE trial in treatment-naïve wet AMD:
- **Design:** Patients received tarcocimab on individualized flexible regimens of every 12, 16, or 20 weeks after three monthly loading doses, compared to aflibercept 2 mg dosed strictly every 8 weeks.
- **The Result:** The primary endpoint was mean change in Best Corrected Visual Acuity (BCVA) at Year 1. Tarcocimab patients gained **+1.0 letters**, compared to **+7.0 letters** for Eylea.
- **The Margin:** The non-inferiority margin was set at -4.5 letters. Tarcocimab missed by 1.5 letters outside the boundary (-6.0 letter deficit).
- **Anatomical Failure:** Central subfield thickness (CST) reduction was also markedly inferior: **-91.5 µm** for tarcocimab versus **-133.9 µm** for Eylea.
- **Stock Reaction:** Kodiak shares crashed from ~$67 to $9 overnight—erasing billions in market value.

### The GLEAM & GLIMMER Disaster (July 2023)
Kodiak pivoted toward Diabetic Macular Edema (DME). In July 2023, topline data from the twin Phase 3 GLEAM and GLIMMER trials landed:
- **Efficacy:** Both trials failed to achieve their primary efficacy endpoints of non-inferior visual acuity gains compared to aflibercept.
- **Safety Signal:** Investigators observed an unexpected, unacceptable safety signal: **~19% of tarcocimab patients developed cataracts**, compared to only 9% in the aflibercept arm.
- **The Fallout:** Kodiak announced it was shelving tarcocimab development and restructuring operations. The stock plummeted below $2.00.

### The DAYLIGHT Paradox: Why Monthly Dosing Is Commercially Dead
In late 2023, Kodiak reported data from the Phase 3 **DAYLIGHT** study, which evaluated tarcocimab dosed strictly **every 4 weeks (monthly)**.
- In DAYLIGHT, tarcocimab achieved +7.1 letters vs. +6.7 letters for Eylea, satisfying statistical non-inferiority.
- **The Fatal Flaw:** Why would an ophthalmologist inject a massive 800 kDa synthetic biopolymer conjugate into an elderly patient's vitreous humor every single month when standard Eylea requires injections every 8 weeks, Eylea HD requires injections every 12 to 16 weeks, and Vabysmo operates at 16 weeks? The entire commercial raison d'être of tarcocimab was **extended durability**. If it only works safely and effectively on a monthly schedule, it has zero competitive viability.

---

## 4. The DAYBREAK Trial: Can Trial Re-engineering Defy Pharmacology?

This brings us directly to **DAYBREAK**—the exact trial Shkreli is shorting ahead of.

```
                  DAYBREAK TRIAL (PHASE 3) ARCHITECTURE
                  
       Total Enrollment: ~675-690 Treatment-Naïve wet AMD Patients
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
   [ ARM A: KSI-501 ]       [ ARM B: Tarcocimab ]     [ ARM C: Aflibercept ]
   Tabirafusp alfa           Zenkuda (KSI-301)         Eylea 2 mg
   Bispecific anti-VEGF/IL-6 Anti-VEGF ABC Conjugate   Active Comparator
   Fixed Q8W + PRN           Individualized Q4W-Q24W   Standard Q8W Regimen
```

### What Did Kodiak Change in DAYBREAK?
To prevent a repeat of the DAZZLE failure, Kodiak modified several trial parameters:
1. **Four Loading Doses (Instead of Three):** Patients receive four monthly loading injections (Weeks 0, 4, 8, and 12) rather than three, attempting to build a higher drug depot before extending intervals.
2. **Revised Disease Activity Triggers:** Kodiak tightened the retreatment criteria on optical coherence tomography (OCT) and visual acuity loss, designed to catch disease reactivation earlier and pull patients back to shorter intervals (e.g., Q8W or Q12W) rather than leaving them stranded at Q20W or Q24W.
3. **The Inclusion of KSI-501:** Kodiak added an arm testing tabirafusp alfa tedromer (KSI-501), a bispecific conjugate targeting both VEGF-A and the inflammatory cytokine Interleukin-6 (IL-6).

### Why Shkreli Calls It "Numerically Inferior"
Shkreli’s argument is rooted in fundamental pharmacokinetics:
- You cannot fix an intrinsically inferior retinal diffusion coefficient by adding one extra loading dose.
- If patients require frequent rescues to maintain vision, the drug is not genuinely durable to 24 weeks.
- If tarcocimab once again delivers a numerical deficit (e.g., +4.8 letters vs. +7.2 letters for Eylea), even if the lower bound of the confidence interval scrapes the -4.5 letter margin by a fraction of a decimal, the clinical community will view it as second-rate.

---

## 5. The 2026 Commercial Landscape: A Crowded Graveyard

Even if DAYBREAK manages to achieve statistical non-inferiority on Monday, Kodiak faces an insurmountable commercial reality in 2026:

```
                  WET AMD COMPETITIVE MATRIX (2026)
┌───────────────────────┬──────────────────────┬──────────────────────────────┐
│ Therapy               │ Durability / Dosing  │ Competitive Moat / Status    │
├───────────────────────┼──────────────────────┼──────────────────────────────┤
│ Vabysmo (faricimab)   │ Up to Q16W           │ Market leader. Dual VEGF/    │
│ Roche / Genentech     │                      │ Ang-2 provides unmatched     │
│                       │                      │ anatomical fluid drying.     │
├───────────────────────┼──────────────────────┼──────────────────────────────┤
│ Eylea HD (8 mg)       │ Q12W - Q16W          │ 4x molar aflibercept dose.   │
│ Regeneron / Bayer     │                      │ Zero polymer safety risks;   │
│                       │                      │ gold-standard physician trust│
├───────────────────────┼──────────────────────┼──────────────────────────────┤
│ Aflibercept           │ Q8W                  │ 50-70% discounted price.     │
│ Biosimilars (Yesafili)│                      │ Payer-mandated step therapy; │
│                       │                      │ crushes pricing power.       │
├───────────────────────┼──────────────────────┼──────────────────────────────┤
│ Tarcocimab Tedromer   │ Purported Q12W-Q24W  │ Failed DAZZLE (-6.0 letters);│
│ (Kodiak Sciences)     │ (Historical +1.0 ltr)│ Cataract safety history;     │
│                       │                      │ Zero commercial footprint.   │
└───────────────────────┴──────────────────────┴──────────────────────────────┘
```

1. **Vabysmo's Dominance:** Roche’s faricimab (targeting both VEGF-A and Angiopoietin-2) has established itself as the modern standard, offering up to 4-month durability while drying retinal fluid faster than legacy Eylea.
2. **Eylea HD Neutralizes the Durability Advantage:** Regeneron successfully solved its own durability challenge with high-dose aflibercept 8 mg (Eylea HD), which achieves 12-to-16-week dosing without synthetic polymers.
3. **The Biosimilar Pricing Guillotine:** Biosimilars for aflibercept 2mg have entered the market at steep discounts. Pharmacy benefit managers (PBMs) and Medicare Advantage plans are implementing strict step-therapy protocols requiring patients to fail biosimilar aflibercept before approving premium-priced branded therapies.
4. **No Commercial Infrastructure:** Kodiak has no sales force, no commercial distribution partner in the United States, and no revenue. Entering a market dominated by Roche and Regeneron requires hundreds of millions of dollars in SG&A expenses.

---

## 6. Financial Forensic: The $125.9M Cash Cliff and Terminal Dilution

Shkreli's fourth claim—*"near no cash, KOD should plummet"*—is mathematically substantiated by Kodiak’s SEC Form 10-Q filed on August 13, 2026.

```
               KODIAK SCIENCES FINANCIAL RUNWAY AUDIT
┌───────────────────────────────────────────────┬─────────────────────────────┐
│ Financial Metric                              │ Value (Q2 2026 / June 30)   │
├───────────────────────────────────────────────┼─────────────────────────────┤
│ Cash, Cash Equivalents & Marketable Securities│ $125.9 Million              │
│ Q2 2026 GAAP Net Loss                         │ -$65.6 Million              │
│ Q2 2026 R&D Operating Expense                 │ $56.1 Million               │
│ Trailing 6-Month Operating Cash Burn          │ ~$110 Million               │
│ Estimated Current Quarterly Burn Rate         │ ~$50 - $65 Million          │
│ Implied Cash Runway                           │ ~2.0 to 2.5 Quarters        │
│ Implied Solvency Horizon                      │ Q1 / Q2 2027                │
└───────────────────────────────────────────────┴─────────────────────────────┘
```

### The Inevitable Dilution Trap
At a quarterly burn rate exceeding **$55–$65 million**, Kodiak's **$125.9 million** balance sheet gives the company roughly **6 months of runway**.

This creates a brutal binary financial reality:
- **Scenario A (DAYBREAK Fails):** The stock collapses by 80% to 90% (falling from $32 down to $3–$6). With its flagship asset dead in wet AMD and minimal cash remaining, Kodiak faces immediate restructuring or distressed penny-stock financing.
- **Scenario B (DAYBREAK "Passes" Non-Inferiority):** Even if management declares victory on Monday morning, the company cannot commercialize tarcocimab or file a multi-indication BLA without immediately raising **$200M to $300M in fresh capital**. Management will have no choice but to tap the equity markets via an aggressive secondary offering or an At-The-Market (ATM) facility within hours or days of the announcement.

In both scenarios, equity holders face severe structural headwinds.

---

## 7. The Stock Setup: Why $32.35 Is Ripe for Short Sellers

The run-up of $KOD to **$32.35** ahead of Monday’s announcement represents an extraordinary momentum anomaly.

```
                           KOD STOCK VALUATION ASYMMETRY
               
       Bullish Ceiling (Best Case)  ▲  ~$42.00 - $48.00 (+30% to +50%)
                                    │  (Quickly diluted by secondary offering)
                                    │
       CURRENT STOCK PRICE ───────► │  $32.35 (Pre-DAYBREAK Sentiment Peak)
                                    │
                                    │
       Bearish Floor (Failure Case) ▼  ~$3.50 - $6.50 (-80% to -90%)
                                       (Cash parity / pipeline write-off)
```

At $32.35, the options market is pricing in an enormous binary move (implied volatility >200%). The risk-reward skew is heavily asymmetric:
- **Downside Risk on Failure:** **-80% to -90%** based on the precedent set by DAZZLE (-80%) and GLEAM/GLIMMER (-65%).
- **Upside Potential on Success:** Capped at **+30% to +50%** due to the impending wall of secondary share dilution, commercial skepticism from retina specialists, and biosimilar price erosion.

When a binary event offers 85% downside against a heavily compromised 40% upside capped by dilution, institutional short sellers naturally circle.

---

## 8. The Verdict: Do We Agree or Disagree with Martin Shkreli?

### Our Independent Decision: **WE OVERWHELMINGLY AGREE WITH THE SHORT THESIS**

Martin Shkreli’s assessment of Kodiak Sciences is analytically rigorous, clinically grounded, and financially sound. 

Our deep dive confirms his thesis across all major dimensions:
1. **Pharmacological Reality:** The 800 kDa biopolymer is poorly suited for durable, extended retinal penetration. Adding a fourth loading dose in DAYBREAK cannot overcome fundamental diffusion physics.
2. **Clinical Precedent:** When dosed at extended intervals (DAZZLE), tarcocimab produced a dismal +1.0 letter gain vs. +7.0 for Eylea. It only matched Eylea when administered every 4 weeks (DAYLIGHT)—a regimen that has zero commercial market in 2026.
3. **Commercial Obsolescence:** Between Roche's Vabysmo, Regeneron's Eylea HD, and 50%-discounted aflibercept biosimilars, tarcocimab arrives as an inferior, late-to-market biopolymer conjugate with historical cataract red flags.
4. **Imminent Dilution:** With $125.9M in cash and a ~$65M quarterly net loss, Kodiak is at the edge of a solvency cliff. Any pop on Monday will be aggressively met with a massive dilutive equity offering.

### Crucial Execution Nuances for Traders
While the fundamental short thesis is overwhelmingly correct, investors must respect the tactical risks of shorting binary biotech readouts:
- **Borrow Fees & Squeeze Dynamics:** Pre-catalyst borrow fees on hard-to-borrow biotech tickers can exceed 50–100% annualized, and unexpected positive press release spin can trigger violent short-term squeezes.
- **Management Headline Framing:** In Phase 3 webcast readouts, biotech management teams routinely highlight secondary subgroup endpoints or tweaked per-protocol cohorts to claim victory even when intent-to-treat (ITT) data is marginal.

### Final Conclusion
Kodiak Sciences at $32+ ahead of DAYBREAK is a textbook example of speculative hope colliding with unforgiving clinical pharmacology and a depleted treasury. When the data is unveiled at 8:30 AM ET on Monday, September 28, 2026, the laws of biology and financial balance sheets are likely to assert themselves with crushing finality.

Martin Shkreli’s call is not just provocative—it is supported by the data.

---

*Disclosure: This article is for informational, research, and educational purposes only and does not constitute financial, investment, or medical advice. The author holds no direct position in $KOD at the time of publication.*
