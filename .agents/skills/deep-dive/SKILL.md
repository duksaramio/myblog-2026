---
name: deep-dive
description: >-
  Execute end-to-end technical, market, or scientific deep-dive investigations using Browne & Keeley's 'Panning for Gold' critical thinking methodology. Enforces primary source extraction, rival cause audits, statistical deconstruction, negative-view analysis, and grey-thinking synthesis.
---

# Deep-Dive Investigation Runbook: The "Panning for Gold" Framework
*Operationalizing Critical Thinking for High-Stakes Technical, Market, and Scientific Investigations*

---

## Overview

A "Deep Dive" is not a glorified summary or an aggregation of search snippets. It is a forensic, epistemically rigorous investigation that cuts through corporate marketing, academic hype, and cognitive bias to establish what is genuinely known, what is probable, and what is unproven.

This skill operationalizes the 13 core chapters of M. Neil Browne and Stuart M. Keeley's *Asking the Right Questions: A Guide to Critical Thinking* into a standard 8-phase workflow for autonomous agents and pair programmers.

---

## The 8-Phase Deep-Dive Workflow

```
   [ Topic / Dilemma ]
           │
           ▼
   Phase 1: Issue Classification & Boundary Framing
           │
           ▼
   Phase 2: Primary Source Excavation & Traceability
           │
           ▼
   Phase 3: Semantic Precision & Operational Definitions
           │
           ▼
   Phase 4: Causal Disentanglement & Rival Causes
           │
           ▼
   Phase 5: Quantitative Audit & Statistical Integrity
           │
           ▼
   Phase 6: The "Negative View" & Omission Interrogation
           │
           ▼
   Phase 7: Grey Thinking & Conditional Synthesis ("If-Clauses")
           │
           ▼
   Phase 8: Automated Verification & Citation Integrity
           │
           ▼
   [ Published Deep-Dive Report / Strategic Brief ]
```

---

### Phase 1: Issue Classification & Boundary Framing (Chapter 2)
1. **Clarify the Core Question:**
   - Transform vague topics (e.g., *"Look into GPU cluster interconnects"*) into explicit, testable questions (e.g., *"Does switching from InfiniBand to RoCE v2 reduce total cost of ownership for clusters over 10,000 nodes without increasing tail latency?"*).
2. **Classify Issue Type:**
   - **Descriptive:** Questions of fact, empirical reality, and mechanism (*"What causes X?", "How does Y perform under load?"*).
   - **Prescriptive:** Questions of strategy, policy, and value decisions (*"Should an enterprise migrate from X to Y?"*).
3. **Establish Falsifiability Criteria:**
   - Define up front: *"What specific empirical evidence would prove our working hypothesis wrong?"*

---

### Phase 2: Primary Source Excavation & Traceability (Chapters 7 & 8)
1. **Enforce the Hierarchy of Evidence:**
   - Never rely solely on tech press, blogs, or PR wire aggregators for technical or financial metrics.
   - Trace every metric back to its canonical primary artifact:
      * **Financial / Corporate:** SEC filings (10-K, 10-Q, 8-K), audited earnings transcripts.
      * **Biotech / MedTech / Life Sciences:** PubMed/PMC peer-reviewed full texts (not just abstracts), ClinicalTrials.gov registers, FDA 510(k)/De Novo/PMA databases, consensus clinical staging criteria (e.g., NIA-AA), and university capstone/lab archives (`capstone.engineering.<univ>.edu`, archival posters, founder technical portfolios) to verify true hardware BOM and clinical sample size (`N`).
      * **Software / AI:** GitHub commit histories, reproducible benchmarks, raw benchmark logs, official RFCs/whitepapers.
      * **Semiconductors & Deep-Tech:** IEEE IEDM/VLSI/ISSCC technical digests, patent family publications (WIPO/USPTO/CNIPA), certified physical teardowns (TechInsights, Yole), export control regulatory schedules (e.g. BIS 15 CFR Part 744).
2. **Anti-Echo Chamber Verification:**
   - Require **2+ structurally independent primary sources** for critical claims.
   - Verify that multiple news outlets are not simply syndicating the identical vendor press release.
3. **The "Bait-and-Switch" Subpage & Brochure Excavation:**
   - Never stop at a company's homepage (`index.html`) or launch post (`Launch YC`, press release).
   - Systematically scrape and extract all secondary routes (`terms.html`, `privacy.html`, `assessment.html`, `/for-clinics`, client-side JS form handlers) and downloadable PDFs (`/downloads/*.pdf`, participant brochures, user manuals).
   - Construct a **2-Column Claim Schism Matrix** (*Public Marketing & Launch Claims* vs. *Buried Legal & Participant Admissions*) to expose direct factual inversions (e.g., promising an ML risk score on the launch page while admitting in the participant PDF that no score or normative range exists).
4. **Disclose Conflicts of Interest & Implied-Endorsement Traps:**
   - Audit the funding sources, author affiliations, and commercial stakes behind every cited study or report.
   - Flag "Logo Walls of Implied Authority" (e.g., displaying *Nature*, *NEJM*, or university logos with fine-print disclaimers that they are not partners or endorsers).

---

### Phase 3: Semantic Precision & The Substitution Test (Chapter 4)
1. **Isolate Abstract Buzzwords:**
   - Flag terms susceptible to shifting definitions (e.g., *"production-ready"*, *"cost-effective"*, *"autonomous"*, *"zero-latency"*, *"scalable"*).
2. **Execute the Substitution Test:**
   - Formulate two distinct operational definitions:
     * *Definition A (Strict/Measurable):* e.g., "Autonomous" = Zero human interventions over 1,000 hours of edge-case driving.
     * *Definition B (Loose/Marketing):* e.g., "Autonomous" = System can maintain lane assist on marked highways with hands on wheel.
   - Substitute both definitions into the argument. If the conclusion's validity depends on which definition is assumed, the argument contains a fatal ambiguity that must be resolved.
3. **The Silicon & Hardware Maturity Hierarchy:**
   - In semiconductor and hardware manufacturing, enforce the 4-tier maturity distinction:
     1. *Level 1 (Concept/Simulation):* TCAD modeling or patent filing without physical silicon.
     2. *Level 2 (Tape-Out / Test Silicon):* Functional switching demonstrated on R&D/pilot wafer at sub-economic yields (<20%).
     3. *Level 3 (Risk Production / Qualification):* Engineering samples delivered to lead partners for JEDEC/server qualification.
     4. *Level 4 (High-Volume Manufacturing / HVM):* Commercial production at stable yields (>75–85%) at market cost parity.

---

### Phase 4: Causal Disentanglement & Rival Causes (Chapter 9)
When analyzing why an outcome occurred (e.g., *"Why did startup X collapse?"*, *"Why did benchmark score Y improve?"*), reject single-cause explanations.

1. **Test the 4-Way Causal Matrix:**
   - **Direct:** Did $X$ cause $Y$? (Document the direct mechanistic link).
   - **Reverse:** Could $Y$ have caused $X$? (e.g., Did high market valuation attract top talent, or did top talent create the valuation?).
   - **Confounding Variable (Z):** What macro or environmental third factor drove both $X$ and $Y$? (e.g., Zero-interest-rate environment, dataset contamination, hardware upgrades).
   - **Mutual Feedback Loop:** Do $X$ and $Y$ reinforce each other in a flywheel?
2. **Temporal & Attribution Auditing:**
   - Eliminate the **Post Hoc Fallacy**: Do not conclude $A$ caused $B$ merely because $A$ preceded $B$.
   - Eliminate the **Fundamental Attribution Error**: Do not credit or blame leadership personality traits while ignoring macro market or architectural constraints.

---

### Phase 5: Quantitative Audit & Statistical Integrity (Chapter 10)
1. **The Average Trap:**
   - When an "average" is reported, determine whether it is the **Mean**, **Median**, or **Mode**.
   - If distributions are skewed by power laws or extreme outliers, demand the **Median**, **p95/p99 values**, and **Distribution Range**.
2. **The Blinding Test:**
   - Look at the raw metrics with the author's conclusion hidden.
   - Ask: *"What is the ONLY conclusion directly warranted by this dataset?"* Compare against the author's narrative to catch instances of *proving one thing and concluding another*.
3. **Denominator & Baseline Requirements:**
   - Reject relative percentage changes (e.g., *"300% growth"*) unless accompanied by absolute baseline figures (*"from 2 to 8 enterprise customers"*).
4. **Hardware & Process Node Decoupling Equations:**
   - When auditing claims of bypassing lithographic or physical scaling limits, derive the explicit geometric equivalent:
     $$\text{Cell Area } A = K \cdot F^2 \implies F_{\text{equiv}} = F_{\text{actual}} \cdot \sqrt{\frac{K_{\text{new}}}{K_{\text{incumbent}}}}$$
   - Verify whether density gains stem from true lateral lithography shrinkage or architectural/vertical stacking (the "3D NAND playbook").
5. **Diagnostic Biostatistics, Bayesian Screening PPV, & Sensor Quantization Audits:**
   - **Cohort & Disease-Stage Mismatch:** Verify whether cited clinical studies tested the marketed target population (e.g., asymptomatic/preclinical individuals 15 years prior to symptoms) or already-diagnosed symptomatic patients, and audit baseline demographic/metabolic confounders (e.g., diabetes imbalance between cases and controls).
   - **Meta-Analysis & Distributional Overlap Deconstruction:** Extract raw Mean Differences (`MD`), Hedges' `g` / `SMD` (`95% CI`), `p`-values, heterogeneity (`I²`), and Egger's publication bias `Z`-scores. Convert standardized effect sizes into individual ROC area ($\text{AUC} \approx \Phi(g / \sqrt{2})$) to expose distributional overlap when group-level correlations are marketed as individual diagnostics.
   - **Bayesian Base-Rate Screening Math (`PPV`):** Whenever a screening test is marketed to a low-prevalence or young population, compute the exact Positive Predictive Value (`PPV`) across age-stratified base rates $P(D)$:
     $$\text{PPV} = \frac{\text{Sensitivity} \cdot P(D)}{\text{Sensitivity} \cdot P(D) + (1 - \text{Specificity}) \cdot (1 - P(D))}$$
   - **Sensor Sampling Quantization vs. Physiological Signal Math:** Compare the device's sampling interval ($\Delta t = 1 / f_s$), display refresh jitter, and mechanical slip against the physiological signal magnitude ($\text{MD}$ in ms) measured on stationary `500–1,000 Hz` laboratory reference instruments:
     $$\sigma_{\text{quant}} = \sqrt{\frac{(\Delta t_{\text{camera}})^2 + (\Delta t_{\text{display}})^2}{6}}$$

---

### Phase 6: The "Negative View" & Omission Interrogation (Chapter 11)
Persuasive pitches always highlight positive features while omitting downsides.
1. **The Distributional Impact (Who Loses?):**
   - Which stakeholders bear the hidden financial, operational, or latency costs?
   - What are the strongest objections of those who refused to adopt this system?
2. **Second-Order Effects & Technical Debt:**
   - What long-term operational liabilities, security vulnerabilities, or maintenance overheads emerge in years 2–5?
3. **Solid-State Physics & Hardware Failure Modes:**
   - Interrogate omitted physical yield killers:
     * *Aspect Ratio & Etch Physics:* Pillar tilt, CD taper, aspect-ratio-dependent etching (ARDE).
     * *Interface Defect Traps:* Sidewall damage, interface trap density ($D_{it}$), threshold voltage ($V_{th}$) scatter, retention leakage.
     * *Parasitic Impedance & Sensing Margins:* Bitline capacitance ($C_{bl}$), RC delay, sensing signal collapse ($\Delta V = \frac{V_{DD}}{2} \cdot \frac{C_s}{C_s + C_{bl}}$).
     * *Packaging & Thermal Stress:* Wafer-to-wafer bonding overlay error, CTE mismatch, thermal dissipation in dense stacks.
     * *Toolchain Choke Points:* Dependencies beyond lithography (high-aspect-ratio etch, ALD, metrology, hybrid bonding from Lam, TEL, Applied Materials).
4. **Survivorship & Graveyard Audits:**
   - Who attempted this exact approach and failed? What differentiates the survivor from the casualties?
5. **Federal Medical Device & Regulatory Statutory Audit (MedTech / TechBio):**
   - When a health or biotech product markets disease or biomarker screening without FDA authorization, audit its claims against federal statutes:
     * *Device Status vs. General Wellness (`21 U.S.C. § 321(h)`):* Disease-specific biomarker screening or risk classification for FDA-approved drugs disqualifies a product from FDA's General Wellness exemption.
     * *Objective Intended Use Doctrine (`21 CFR § 801.4`):* Front-page promotional headlines and launch claims establish legal intended use and cannot be voided by buried footer or `terms.html` disclaimers.
     * *Premarket Clearance, Adulteration & Misbranding (`21 U.S.C. §§ 331, 351(f)(1)(B), 352(a)/(o), 360(k), 360c(f)(1)`):* Novel diagnostics without a cleared predicate default to Class III requiring De Novo or PMA; distributing them commercially without clearance renders them statutorily adulterated and misbranded.
     * *The Investigational Device Catch-22 (`21 CFR § 812.7` & `Parts 50, 56`):* Claiming a device is "investigational" while promoting it commercially, recruiting clinics, or representing it as safe/effective violates `21 CFR § 812.7(a), (b), and (d)` and requires IRB approval (`Part 56`) and statutory informed consent (`§ 50.25`).

---

### Phase 7: Grey Thinking, Conditional Synthesis & The Bottom-Line Verdict (Chapter 12)
1. **Dismantle Dichotomous Thinking:**
   - Ban black-and-white, binary cheerleading or dogmatic dismissals (*"X is dead"*, *"guaranteed 10x winner"*).
2. **Synthesize Using "If-Clauses":**
   - Structure contextual scenarios conditionally:
     * *"If [Workload is batch-oriented and latency-tolerant], then [Architecture A] delivers 40% superior cost efficiency."*
     * *"If [Real-time streaming and sub-10ms tail latency are required], then [Architecture B] is necessary despite 2x higher infrastructure expenditure."*
3. **Mandatory "The Forensic Verdict: What We Actually Think":**
   - Never abdicate analytical judgment behind neutral decision trees. The reader expects the investigator's definitive stance.
   - Every deep-dive conclusion **must include an explicit "The Forensic Verdict: What We Actually Think" section**:
     * **Probability-Weighted Scenarios:** Assign explicit likelihood percentages to each conditional branch (e.g., *Base/Most Probable [~60%]*, *Bear/Downside [~25%]*, *Bull/Upside [~15%]*).
     * **Stance on the Evidence:** State unequivocally which side of the dispute has the superior empirical/mechanistic backing and why.
     * **Actionable Bottom-Line Stance:** Provide a clear, definitive stance or recommendation based on expected value, structural bottlenecks, and risk asymmetry.

---

### Phase 8: Automated Verification & Citation Integrity
1. **Programmatic URL Liveness:**
   - Run curl checks on every cited URL:
     ```bash
     curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "<TARGET_URL>"
     ```
   - Only URLs returning `200` (or resolving redirects to `200`) may be published.
2. **Zero-Speculation Fallback:**
   - If data cannot be triangulated across 2+ independent primary sources, explicitly state the limitation. Never guess or hallucinate.

---

## Deep-Dive Execution Checklist

Before finalizing any deep-dive report, verify the following 10 items:

```
[ ] 1. Core issue explicitly defined as Descriptive (factual/mechanistic) or Prescriptive (decision/policy).
[ ] 2. All key metrics traced back to canonical primary artifacts (filings, papers, git code).
[ ] 3. Anti-echo chamber verified: 2+ sources are structurally independent, not wire syndications.
[ ] 4. Abstract buzzwords subjected to the Substitution Test and operationally defined.
[ ] 5. Causal claims audited against the 4-Way Causal Matrix (including third variables and reverse causation).
[ ] 6. Statistics audited for mean/median skew, range/distribution, and absolute baseline denominators.
[ ] 7. "Negative View" executed: Identified who loses, failure modes, and long-term liabilities.
[ ] 8. Graveyard/survivorship analysis conducted for failed prior attempts.
[ ] 9. Final synthesis articulated through nuanced "If-Clauses" AND an explicit, probability-weighted "Bottom-Line Verdict".
[ ] 10. Every external citation programmatically verified for HTTP 200 liveness.
```
