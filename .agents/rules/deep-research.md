---
description: "Rigorous deep research standard incorporating Browne & Keeley critical thinking principles: primary source hierarchy, anti-echo chamber verification, rival cause testing, statistical scrutiny, negative-view auditing, and URL liveness checks"
globs: ["*"]
alwaysApply: true
---

# Global Standard: Deep Research & Epistemic Verification
*Operationalizing Browne & Keeley's Critical Thinking Framework for Autonomous Research & Synthesis*

Every research task, technical deep dive, and factual synthesis conducted in this repository must operate on the **"Panning for Gold"** model of inquiry. Agents must never function as passive sponges that absorb and parrot secondary claims. All claims, metrics, and causal assertions must be systematically cross-examined.

---

## 1. Primary Source Hierarchy & Anti-Echo Chamber Corroboration
* **Hierarchy of Evidence (Highest to Lowest Credibility):**
  1. **Primary Empirical & Legal Artifacts:** Official SEC filings (10-K, 10-Q, 8-K), peer-reviewed journal papers (with reproducible methodology), official regulatory releases (FDA, EMA), open-source repository code/commits, verifiable benchmark logs, or raw clinical trial registers (ClinicalTrials.gov).
  2. **Canonical Technical Documentation:** Official vendor documentation, RFCs, formal API specs, official release tags.
  3. **Domain Expert Analysis with Primary Access:** Thorough whitepapers or technical analyses by recognized domain practitioners with direct first-hand data access and disclosed conflicts of interest.
  4. **Secondary Journalism & Industry News:** TechCrunch, Reuters, Bloomberg, specialized trade press. (Allowed for narrative context, but **never** as sole proof for empirical metrics).
  5. **Low-Credibility Sources (Prohibited as Proof):** Anecdotes, PR wire releases, sponsored content, social media rumors, unsourced aggregator statistics, and celebrity/influencer testimonials.
* **The Anti-Echo Chamber Rule:**
  - Corroborating a claim requires **2+ independent primary or authoritative sources**.
  - Multiple news outlets citing the same underlying PR release or single secondary report do **not** constitute independent corroboration. Trace claims back to the root primary source.
* **Expertise & Conflict-of-Interest Scrutiny:**
  - When citing an authority, verify that their expertise is domain-specific (avoid the *Appeal to Questionable Authority*).
  - Explicitly disclose any commercial, financial, or ideological conflicts of interest in cited sources.
* **Front-Door Marketing vs. Buried Legal/Brochure Cross-Examination:**
  - When auditing company claims, systematically extract buried subpages (`terms.html`, `privacy.html`, footnotes, form scripts) and downloadable PDFs/brochures to check for direct factual inversions between public marketing and legal/participant disclosures.

---

## 2. Causal Disentanglement & Rival Causes (Chapter 9)
Whenever analyzing why a system succeeded/failed, why a metric changed, or why a market trend occurred, agents must **never accept correlation as causation**.
* **Mandatory 4-Way Causal Audit:**
  Before concluding that factor $X$ caused outcome $Y$, test all four rival hypotheses:
  1. **Direct Causation:** Does $X \to Y$? What is the specific mechanistic pathway?
  2. **Reverse Causation:** Could $Y \to X$? (e.g., Does financial distress cause burnout, or does burnout cause financial distress?).
  3. **Lurking Third Variable (Confounder Z):** Could an external macro factor $Z$ cause both $X$ and $Y$ simultaneously? (e.g., macroeconomic liquidity, demographic shifts, platform policy changes).
  4. **Mutual Feedback Loop:** Do $X$ and $Y$ mutually reinforce each other?
* **Attribution & Temporal Fallacies:**
  - **Post Hoc Fallacy:** Never assume $A$ caused $B$ simply because $A$ preceded $B$ in time. Demand mechanistic or empirical proof.
  - **Fundamental Attribution Error:** Avoid attributing systemic outcomes solely to the personal disposition, genius, or moral failure of an individual (founder, CEO, engineer) while ignoring structural, economic, or situational forces.

---

## 3. Statistical Integrity & Quantitative Deception Audit (Chapter 10)
Numbers create an illusion of scientific precision. Every quantitative claim must be interrogated:
* **The Average Diagnostic (Mean vs. Median vs. Mode):**
  - Never report an unqualified "average" when outliers can distort the mean (e.g., compensation, token latency, server costs, company valuations).
  - When available, extract and report the **Median**, **Range**, and **Distribution**.
* **The "Proving One Thing, Concluding Another" Blinding Test:**
  - Examine the raw data independent of the author's conclusion. Does the statistic actually measure the phenomenon being concluded, or does it measure an adjacent proxy?
* **Absolute Baselines vs. Relative Percentages:**
  - Never report relative percentage changes without providing baseline numbers (e.g., a "300% increase" could mean 1 incident rising to 4).
  - Always provide the denominator (population or sample size) for rates and percentages.
* **Bayesian Base-Rate & Distributional Overlap Audits:**
  - For diagnostic, screening, or classification claims, evaluate Positive Predictive Value (`PPV`) against the target cohort's base-rate prevalence $P(D)$, and verify whether group-level differences (`SMD` / Hedges' `g`) have sufficient separation (`AUC`) for individual-level decisions.
* **Unknowable & Estimate Statistics:**
  - When figures describe covert, illicit, or unmeasurable activities (e.g., total volume of prompt injection attacks, dark web revenue), explicitly note how the estimate was derived and highlight its margins of error.

---

## 4. The "Negative View" & Omitted Information (Chapter 11)
Comprehensive research requires actively investigating what the sources chose *not* to say:
* **The Distributional Impact (Who Loses?):**
  - For any proposed technology, architecture, or policy: Who bears the cost? Who is displaced? What are the valid objections of those negatively impacted?
* **Second-Order Effects & Hidden Costs:**
  - What are the long-term, unintended negative consequences (e.g., technical debt, lock-in, latency regressions, resource bloat, ethical liabilities)?
* **Graveyard / Survivorship Audit:**
  - When analyzing successful architectures or companies, explicitly review failed counterparts that used identical methodologies.

---

## 5. Grey Thinking, Nuanced Synthesis & The Bottom-Line Verdict (Chapter 12)
* **Dismantle Binary Dichotomies:**
  - Deep research reports must never collapse complex technical or strategic dilemmas into binary cheerleading or blanket dismissals.
* **The "If-Clause" Standard:**
  - Synthesize strategic findings into qualified conditional statements:
    * *"If [Infrastructure/Constraint A holds], then [Architecture X] is optimal."*
    * *"If [Scale/Resource Constraint B holds], then [Architecture Y] becomes necessary."*
* **Mandatory Bottom-Line Verdict ("What We Actually Think"):**
  - Never abdicate analytical judgment behind neutral decision trees. While avoiding dogmatism, agents must synthesize the evidence into an explicit authorial conclusion:
    * **Probability-Weighted Scenarios:** Assign explicit epistemic probabilities to the key potential outcomes (e.g., *Base/Most Probable [~60%]*, *Bear/Downside [~25%]*, *Bull/Upside [~15%]*).
    * **Empirical Stance:** Clearly declare which thesis or party possesses the superior empirical, mechanistic, or structural arguments.
    * **Actionable Verdict:** Provide an unambiguous, bottom-line recommendation or verdict based on expected value, structural bottlenecks, and risk asymmetry.

---

## 6. Programmatic Link & Data Verification
* **Automated URL Liveness Testing:**
  - Every external URL cited in research notes or blog posts must be tested programmatically before inclusion:
    ```bash
    curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "<TARGET_URL>"
    ```
  - Permitted HTTP status codes: `200`, `206`, or redirects (`301`, `302`) that resolve to `200`.
  - Any URL returning `404`, `410`, `500+`, or connection failure must be purged or replaced.
* **Zero-Speculation Fallback:**
  - If searches yield broken links, irreconcilable conflicts between primary sources, or insufficient evidence, explicitly state:
    `"Search and source triangulation yielded insufficient verifiable evidence to substantiate [claim]."`
  - Never speculate, invent data, or hallucinate middle-ground estimates.