---
title: "Saccade (YC F26) Under the Microscope: A Forensic Audit of the 'World's Earliest Alzheimer's Test,' Oculomotor Meta-Analyses, and Federal Device Law"
pubDate: 2026-10-14
description: "When Y Combinator startup Saccade launched claiming to have built the 'world's earliest test for Alzheimer's biomarkers' using a 15-minute VR eye-tracking attachment, it ignited an immediate firestorm across biotech and regulatory circles. We audit the primary clinical literature (Opwonya et al., 2022; Qi et al., 2024), the UCSB undergraduate capstone engineering records, Bayesian screening math in 30-year-olds, plasma p-tau217 benchmarks, and the Federal Food, Drug, and Cosmetic Act."
draft: false
tags: ["health", "alzheimers", "neurology", "fda", "biomarkers", "medtech", "yc", "deep-research"]
image: "/saccade-ucsb-capstone-poster-2026.jpg"
lang: "en"
---

![UC Santa Barbara Mechanical Engineering Senior Capstone Poster (scME6) for Saccade, June 2026](/saccade-ucsb-capstone-poster-2026.jpg)

On October 13, 2026, **Saccade**—a newly minted Y Combinator Fall 2026 (`YC F26`) startup founded by recent UC Santa Barbara mechanical engineering graduate **Shreyas Bhardwaj**—launched with a sweeping clinical promise:

> *"You can have Alzheimer's for 15 years and not know it. We can finally slow it down. But only if we catch it early. So we built the earliest test for it. Saccade (YC F26)."*
> — **Shreyas Bhardwaj (`@shreyasbhardwj`)**, October 13, 2026 launch announcement

On its [Y Combinator Launch page](https://www.ycombinator.com/launches/Vff-saccade-world-s-earliest-test-for-alzheimer-s-biomarkers) and homepage ([saccade.health](https://saccade.health)), the company went further, announcing that it was already **"live in San Francisco clinics, testing people in their 30s and older for early risk indicators"** using a 15-minute virtual reality (VR) eye-tracking test that classifies patients into **"one of three risk categories"** so they can start **"interventions ranging from preventative longevity practices, further neurological evaluations, and new FDA-approved drugs."**

Within twenty-four hours, the launch collided with two forces that consumer software startups rarely face: **clinical biostatistics** and **federal medical device law**.

By the afternoon of October 14, 2026, two viral critiques had crystallized the backlash across the biomedical ecosystem. First, **Trevor Klee (`@trevor_klee`)** dissected the scientific and ethical foundations of the product:

> *"Every single layer of this makes me angry:*
> *1. The underlying paper they rely on is not good science and also doesn't support their product. It's a meta-analysis, the underlying studies are all over the place in results and quality, it's about active AD and MCI (not prodromal, 15 years early), and uses clinical eye trackers, not VR.*
> *2. It's an unapproved medical device, sold as a medical device, without any FDA authorization and zero device-specific testing.*
> *3. The website simultaneously claims it's the 'World's Earliest Test for Alzheimer's Biomarkers' on the front page and says that it's 'investigational and can't diagnose Alzheimer's' in the footer. They also slap the Nature and NEJM logos on their site because they found articles in both that mention eye tracking and Alzheimer's.*
> *4. Despite how flagrantly unethical this is, I'm pretty sure there won't be repercussions for the founders, same as the Clair Health founders or Nucleus Genomics or whoever, because the post-Theranos structural setup goes up to 'stern warning letter from the FDA' and ends there.*
> *5. This sort of 'move fast and break things' approach is actively harmful to the biotech industry overall, because it's much easier to market fake tests and drugs than real ones, so Gresham's law can kick in if you're not careful."*
> — **Trevor Klee (`@trevor_klee`)**, October 14, 2026

Hours later, healthcare AI founder and investor **Will Manidis (`@WillManidis`)** escalated the critique from scientific methodology to statutory illegality:

> *"if 'tech bio' wants to be taken seriously by both regulators and downstream capital, it should punish blatantly illegal grifting like the below. but it won't. it'll continue to grift."*
> — **Will Manidis (`@WillManidis`)**, October 14, 2026

When startup operator **Hamudi (`@hamudinaanaa`)** defended Saccade—arguing that *"The saccade research translating onto a new device format IS essentially the bet... That's what the nature of startups is - have a big thesis and start deploying early"*—Manidis replied bluntly (*"i mean they're committing a crime i dont really care about the business if the tech works run a trial"*) and published a point-by-point citation of the **Federal Food, Drug, and Cosmetic Act (FD&C Act)** (`21 U.S.C. §§ 321(h), 331(a)/(k), 351(f)(1)(B), 352(a)/(o), 360(k)` and `21 CFR §§ 801.4, 812.7`).

Who is right? Is Saccade a pioneering neuro-diagnostics company translating established oculomotor science into accessible preventative screening, or is it deploying an unvalidated undergraduate capstone prototype onto patients in violation of clinical epidemiology and federal device statutes?

Instead of relying on social media commentary, we excavated every primary artifact behind Saccade: its live web properties, its downloadable clinical brochures, its June 2026 UC Santa Barbara Mechanical Engineering Senior Capstone poster, the founder's engineering portfolio, the exact peer-reviewed papers cited by the company ([Opwonya et al., 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9090874/) and [Qi et al., 2024](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full)), the [2024 Revised NIA-AA Criteria for Alzheimer's Disease](https://pmc.ncbi.nlm.nih.gov/articles/PMC11350039/), and the governing provisions of Title 21 of the United States Code and Code of Federal Regulations.

---

## 1. Primary Source Traceability Matrix

Before evaluating any technical, clinical, or legal claim, every assertion must be anchored to an inspectable primary document.

| Evidence Domain | Primary Source Document / Artifact | Verifiable Identifier / URL | Key Extracted Fact |
| :--- | :--- | :--- | :--- |
| **Commercial & Clinical Claims** | Saccade YC Launch Post (`YC F26`) | [ycombinator.com/launches/Vff...](https://www.ycombinator.com/launches/Vff-saccade-world-s-earliest-test-for-alzheimer-s-biomarkers) | Claims Saccade is *"live in San Francisco clinics, testing people in their 30s and older"*, uses a *"proprietary ML model to produce a risk score"*, and classifies patients into *"one of three risk categories"* to start *"new FDA-approved drugs"*. |
| **Consumer Front-Page Marketing** | Saccade Homepage (`saccade.health`) | [saccade.health](https://saccade.health) | Hero H1 reads **"World's Earliest Test for Alzheimer's Biomarkers"** with a **"Take the test"** booking CTA, references **Leqembi** and **Kisunla**, and displays logos of *NEJM*, *Nature*, *Harvard Medical School*, *UCSF*, and *Columbia*. |
| **Internal Participant Disclaimers** | Saccade Patient Brochures (`01-essentials`, `02-your-visit`, `03-a-closer-look`) & `terms.html` | [saccade.health/assessment.html](https://saccade.health/assessment.html) / [terms.html](https://saccade.health/terms.html) | Directly contradicts the YC Launch: states *"Investigational device. Not a diagnostic device. It cannot diagnose, screen for, predict or rule out Alzheimer's disease"*, and admits under *"Will I receive a score?"*: **"Not at this stage... Individual measurements still need validation."** |
| **Hardware & Engineering Provenance** | UCSB Mechanical Engineering Senior Capstone Poster (`scME6`, June 2026) | [capstone.engineering.ucsb.edu/projects/saccade](https://capstone.engineering.ucsb.edu/projects/saccade) ([PDF](https://capstone.engineering.ucsb.edu/sites/default/files/2026-06/scME6%20Saccade%20Final%20Poster.pdf)) | Built by 5 UCSB undergrads graduating June 2026; 3D-printed magnetic light shield for Apple Vision Pro housing two `850 nm` NIR cameras at `200 fps` (`$7,500` budget). Bench tests covered only cavity temperature (`29.5°C`), fabric light-blocking, and single-eye camera placement. **Zero clinical Alzheimer's patients tested (`N = 0`).** |
| **Primary Cited Meta-Analysis** | Opwonya et al. (2022), *Neuropsychology Review* 32, 193–227 | `DOI: 10.1007/s11065-021-09495-3` / [PMC9090874](https://pmc.ncbi.nlm.nih.gov/articles/PMC9090874/) | The **sole paper** cited on `saccade.health/assessment.html`. Pooled 35 studies (`N = 2,435`) of already-symptomatic MCI and Alzheimer's dementia (`0/35` preclinical/prodromal 15-year-early cohorts). Prosaccade latency failed to distinguish MCI from controls (`SMD = 0.09, p = 0.95` gap; `SMD = 0.08, p = 0.83` overlap). |
| **Poster ROC Curve Source** | Qi et al. (2024), *Frontiers in Aging Neuroscience* | [10.3389/fnagi.2024.1471698](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full) | Source of Figure 1 on Saccade's UCSB poster. Studied 154 subjects (`42` controls, `63` symptomatic AD-MCI with 24-month median duration, `49` AD-D with 36-month median duration) using a stationary `90 Hz` corneal-reflection unit (*EyeKnow*). Combined 7-feature model reached only `AUC = 0.737` (`62.5%` sensitivity, `85.0%` specificity) for AD-MCI vs. controls. |
| **Gold-Standard Biomarker Criteria** | Jack et al. (2024), *Revised Criteria for Diagnosis and Staging of Alzheimer's Disease* (NIA-AA) | [PMC11350039](https://pmc.ncbi.nlm.nih.gov/articles/PMC11350039/) | Establishes Core 1 biomarkers (Amyloid PET, CSF `Aβ42/40`, and plasma phosphorylated tau `p-tau217`, `AUC 0.94–0.98`) as the earliest validated biological markers (15–20 years pre-symptom). Oculomotor metrics are **absent** from Core 1, Core 2, and non-specific staging biomarkers. |
| **Federal Device Statutes & Regulations** | FD&C Act (`21 U.S.C.`) & FDA Regulations (`21 CFR`) | [21 CFR § 801.4](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-801/subpart-A/section-801.4) / [21 CFR § 812.7](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812/subpart-A/section-812.7) / [21 U.S.C. § 321](https://www.law.cornell.edu/uscode/text/21/321) | `21 CFR § 801.4` establishes that objective intended use is governed by promotional headlines, overriding buried disclaimers. `21 CFR § 812.7` prohibits promoting, commercializing, or representing an investigational device as safe or effective. |

---

## 2. The Bait-and-Switch Schism: Launch YC vs. Buried Legal Disclaimers

When a healthcare company communicates with three different audiences—venture investors, worried consumers, and regulatory attorneys—the fastest way to test its epistemic integrity is to place its public statements side by side.

In Saccade's case, the contradiction between its promotional claims and its buried participant documentation is not a subtle nuance of phrasing; it is a direct factual inversion.

**THE SACCADE CLAIM SCHISM (OCTOBER 14, 2026)**

| PUBLIC MARKETING & LAUNCH YC (What Consumers & Investors Read) | BURIED TERMS & PARTICIPANT PAMPHLETS (What the Fine Print Admits) |
| :--- | :--- |
| • "World's Earliest Test for Alzheimer's Biomarkers — Non-invasive VR screening to protect a lifetime of memories." (Hero H1)<br>• "We analyze 21 oculomotor biomarkers with our proprietary ML model to produce a risk score." (Launch YC)<br>• "Once classified into one of three risk categories, patients can start interventions ranging from preventative longevity practices, further neurological evaluations, and new FDA-approved drugs." (Launch YC)<br>• "We're live in San Francisco clinics, testing people in their 30s and older for early risk indicators." (Launch YC) | • "Investigational device. Not a diagnostic device. It cannot diagnose, screen for, predict or rule out Alzheimer's disease..." (saccade-02-your-visit.pdf, p. 1)<br>• "Will I receive a score? Not at this stage. The visit confirms the tasks completed and recording quality. Individual measurements still need validation." (saccade-02-your-visit.pdf, p. 2)<br>• "Age-based ranges are not yet available in the current reporting system." (assessment.html, line 45)<br>• "This research describes differences between groups; it does not validate Saccade's panel for individual diagnosis." (assessment.html, footnote 1) |

Read that comparison carefully:

1. **The Non-Existent Risk Score:** On [Launch YC](https://www.ycombinator.com/launches/Vff-saccade-world-s-earliest-test-for-alzheimer-s-biomarkers), Saccade tells the public that its *"proprietary ML model"* produces a *"risk score"* that classifies patients into *"one of three risk categories"*. Yet in Saccade's own patient visit guide (`saccade-02-your-visit.pdf`, linked at the bottom of `assessment.html`), the FAQ explicitly asks: **"Will I receive a score?"** and answers: **"Not at this stage. The visit confirms the tasks completed and recording quality. Individual measurements still need validation."** Furthermore, `assessment.html` states that **"Age-based ranges are not yet available in the current reporting system."**
2. **The "Screening" Self-Contradiction:** The hero banner on [saccade.health](https://saccade.health) sells **"Non-invasive VR screening to protect a lifetime of memories."** The participant brochure (`saccade-01-essentials.pdf` and `saccade-02-your-visit.pdf`) states verbatim: **"It cannot diagnose, screen for, predict or rule out Alzheimer's disease, dementia or any other condition."** A device cannot simultaneously be the *"World's Earliest Test for Alzheimer's Biomarkers"* offering *"Non-invasive VR screening"* and a device that *"cannot diagnose, screen for, predict or rule out Alzheimer's disease."*
3. **The Logo Wall of Implied Authority:** Directly beneath its claim that *"Recent breakthroughs in neurology show that our eyes hold the key to early detection,"* `saccade.health` runs an animated marquee displaying the official logos of **The New England Journal of Medicine (NEJM)**, **Harvard Medical School**, **Nature**, the **Alzheimer's Association**, **UCSF**, **Columbia University**, **Cornell University**, and **Université de Bordeaux**. None of these institutions have published a study on Saccade's hardware, partnered with Saccade, or endorsed Saccade's test—a fact Saccade attempts to inoculate with muted sub-caption text reading, *"Logos identify research publications and institutions, not Saccade partners or endorsements."*

### Executing the Substitution Test on Saccade's Core Vocabulary

In *Asking the Right Questions*, Browne and Keeley warn that persuasive pitches frequently rely on **elastic terms**—words that carry a rigorous scientific meaning in peer-reviewed medicine but are quietly stretched to cover something far weaker in commercial copy. If we substitute Saccade's marketing words with their precise clinical definitions, the argument collapses:

* **"Alzheimer's Biomarker"**: In neurology and the [2024 NIA-AA Revised Criteria](https://pmc.ncbi.nlm.nih.gov/articles/PMC11350039/), an Alzheimer's disease biomarker is a physiological, biochemical, or anatomical parameter that directly reflects neuropathologic change specific to AD—namely cerebral amyloid-beta plaques (`Aβ42/40`) or pathologic tau neurofibrillary tangles (`p-tau217`, `p-tau181`, `MTBR-tau243`). Saccade substitutes "Alzheimer's biomarker" to mean **generic eye-movement reaction times and gaze errors** (saccadic latency, antisaccade inhibition failures), which measure general frontoparietal executive attention and motor control, not amyloid or tau pathology.
* **"Earliest / 15 Years Pre-Symptomatic"**: In longitudinal Alzheimer's cohorts (such as DIAN or A4), proving that a test detects disease 15 years before symptom onset requires following **cognitively normal, asymptomatic individuals** over time (or cross-validating against amyloid PET / CSF positivity in preclinical Stage 1 subjects) and demonstrating high sensitivity and specificity for future conversion. Saccade cites literature conducted entirely on **elderly patients already diagnosed with clinical Mild Cognitive Impairment (MCI) or frank Alzheimer's Disease Dementia (ADD)**, then splices that together with the general textbook fact that amyloid pathology begins 15–20 years before dementia to imply that *its eye tracker* catches Alzheimer's 15 years early.
* **"Actionable for New FDA-Approved Drugs (Leqembi / Kisunla)"**: Both **Leqembi (lecanemab-irmb)** and **Kisunla (donanemab-azbt)** carry strict FDA prescribing information: they are indicated **only** for patients with clinically diagnosed **Mild Cognitive Impairment (MCI) or mild dementia stage of disease** with **confirmed amyloid beta pathology** (via Amyloid PET or lumbar puncture CSF / FDA-cleared blood biomarker). They are **not** approved for cognitively normal 30-to-50-year-olds, and no neurologist can prescribe an anti-amyloid monoclonal antibody infusion (which carries a `12%–36%` risk of Amyloid-Related Imaging Abnormalities—brain edema `ARIA-E` and microhemorrhages `ARIA-H`) based on an eye-tracking headset.

---

## 3. Hardware Provenance: From UCSB Undergraduate Capstone (`scME6`) to San Francisco Clinics in 120 Days

Where did Saccade's hardware and clinical validation actually come from?

Primary academic records from the University of California, Santa Barbara ([UCSB Engineering Capstone Project Directory: Saccade](https://capstone.engineering.ucsb.edu/projects/saccade)) and the team's archival poster ([scME6 Saccade Final Poster.pdf](https://capstone.engineering.ucsb.edu/sites/default/files/2026-06/scME6%20Saccade%20Final%20Poster.pdf)) document the complete origin of the device.

During the 2025–2026 academic year, five UCSB mechanical engineering undergraduates—**Shreyas Bhardwaj, Henry Easton, Jacob Reuser, Sa'Jean Alford, and Granth Gakhar**—built the Saccade hardware attachment as their senior mechanical engineering design capstone project (`Team scME6`), culminating at the UCSB Capstone Expo in **June 2026**.

According to both the UCSB Capstone Poster and Bhardwaj's technical portfolio (`Shreyas_Resume.pdf` and project documentation), the hardware evolved through two rapid student iterations on a **`$7,500` non-dilutive student grant**:

1. **Early Prototype (Portfolio Documentation):** A custom infrared camera PCB utilizing a low-cost **GalaxyCore GC0308 CMOS sensor** (`640 × 480` VGA resolution) operating at **`30 fps`** (`33.3 ms` per frame) with two `850 nm` infrared LEDs embedded inside an Apple Vision Pro light cushion.
2. **June 2026 Capstone Prototype (`scME6` Final Poster):** A 3D-printed replacement magnetic light shield for the **Apple Vision Pro** housing two **`850 nm` near-infrared (NIR) global-shutter cameras** rated at **`200 fps`** (`5.0 ms` per frame), routed out of the headset via two USB-C 3.0 cables into an Apple MacBook, with polyester-cotton vent cutouts designed to keep internal eye-cavity temperatures below `30°C` while blocking ambient light.

### What Testing Was Actually Performed on the Saccade Hardware?

On the official June 2026 UCSB Capstone Poster—published just **four months** before Saccade announced it was *"live in San Francisco clinics, testing people in their 30s and older"*—the section titled **"Testing Results"** contains exactly three student engineering bench experiments:

1. **Thermal Bench Test:** Measuring whether adding ventilation slots to the 3D-printed Vision Pro light seal kept the internal air temperature after 15 minutes at `29.5°C` instead of `37.5°C`.
2. **Fabric Opacity Test:** Testing four fabric swatches (scuba, nylon spandex, polyester-cotton, athletic mesh) over the vent cutouts to verify that `0.58 mm` polyester-cotton blocked ambient visible light from interfering with the `850 nm` NIR cameras.
3. **Single-Eye Eyelid Occlusion Check:** Testing four camera mounting positions around the lens rim on a student test subject to show that bottom-mounted cameras maintained pupil visibility during downward gaze whereas top-mounted cameras lost the pupil behind the upper eyelid and eyelashes.

That is the entirety of the experimental validation on the poster. **Number of Alzheimer's disease patients tested: zero (`N = 0`). Number of Mild Cognitive Impairment patients tested: zero (`N = 0`). Number of longitudinal preclinical conversions tracked: zero (`N = 0`).** In fact, Bhardwaj's own portfolio summary written at the conclusion of the capstone stated: *"Next: IRB-approved pilot with 50 patients."* A search of `ClinicalTrials.gov` and the FDA's `510(k)`, `De Novo`, and Premarket Approval (`PMA`) databases as of October 14, 2026 confirms **zero registered clinical trials** and **zero FDA clearance submissions** under Saccade or its founders.

### The Oculomotor Physics Problem: Why VR Attachments Cannot Simply Borrow Stationary Clinical Eye-Tracker Data

In defense of Saccade on X, startup operator Hamudi argued: *"The saccade research translating onto a new device format IS essentially the bet."*

To evaluate whether a startup can legally or scientifically extrapolate published clinical eye-tracking studies onto an unvalidated VR attachment without running a bridge trial, look at the biomechanics and signal-processing math of a human saccade:

* **Kinematics of a Saccade:** A human saccade is the fastest movement produced by the human body, reaching angular velocities of **`400°/s` to `700°/s`** and completing a `10°`–`20°` rotation in **`30 ms` to `80 ms`**.
* **Magnitude of the Clinical Signal:** In the sole meta-analysis Saccade cites on its website ([Opwonya et al., 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9090874/)), the raw mean difference (`MD`) in prosaccade latency between healthy elderly controls and patients with full-blown **Alzheimer's Disease Dementia (ADD)** is only **`14.22 ms`** (in the gap paradigm) to **`26.10 ms`** (in the overlap paradigm). Between healthy controls and **Mild Cognitive Impairment (MCI)**, the difference is a statistically non-significant **`3.98 ms`** (`p = 0.95`) in the gap paradigm and **`3.78 ms`** (`p = 0.83`) in the overlap paradigm!
* **Sampling Quantization Error:** For a system sampling at frequency `f_s`, the temporal quantization interval is `Δt = 1 / f_s`, introducing a uniform timestamp uncertainty across stimulus onset and movement detection of `±Δt`:

$$\sigma_{\text{quant}} = \sqrt{\frac{(\Delta t_{\text{camera}})^2 + (\Delta t_{\text{display}})^2}{6}}$$

In Saccade's `30 fps` prototype (`Δt = 33.3 ms`), a single video frame is **8 times longer** than the entire `3.98 ms` mean latency difference between MCI and healthy controls, and wider than the entire `14 ms`–`26 ms` latency shift seen in frank Alzheimer's dementia! Even with `200 fps` USB cameras (`Δt = 5.0 ms`) paired with an Apple Vision Pro display (`90 Hz`–`100 Hz`, `Δt = 10.0–11.1 ms`), display-to-USB-camera clock synchronization jitter, USB bulk-transfer frame buffering on macOS, head-mounted slippage (`0.5 mm` of headset shift translates to `~2.5°` of gaze angular error), and vergence-accommodation conflict inside a near-eye VR optic create systematic variance that dwarfs a `4 ms`–`25 ms` clinical signal unless rigorously calibrated against a `500 Hz`–`1,000 Hz` stationary laboratory corneal-reflection reference (such as an SR Research EyeLink 1000 with chin-rest stabilization).

---

## 4. Statistical & Epidemiological Audit of Saccade's Cited Literature

To support its claim that eye movements are *"earlier than any other markers we can screen for,"* Saccade relies on two academic papers:
1. **[Opwonya et al. (2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9090874/)** (*"Saccadic Eye Movement in Mild Cognitive Impairment and Alzheimer's Disease: A Systematic Review and Meta-Analysis"*, *Neuropsychology Review* 32, 193–227) — the **only** citation listed on `saccade.health/assessment.html` and in `saccade-03-a-closer-look.pdf`.
2. **[Qi et al. (2024)](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full)** (*"Abnormal eye movements: relationship with clinical symptoms and predictive value for Alzheimer's disease"*, *Frontiers in Aging Neuroscience*) — the paper from which Saccade copied the ROC curve displayed as **Figure 1** on its June 2026 UCSB Capstone Poster.

Let us audit the exact statistical tables of both papers.

### Audit 1: Opwonya et al. (2022) Meta-Analysis (`N = 2,435`)

Opwonya and colleagues synthesized 35 cross-sectional and case-control studies comprising **`2,435` elderly participants**: `1,252` cognitively normal older controls, `386` patients with clinically diagnosed **Mild Cognitive Impairment (MCI)**, and `797` patients with clinically diagnosed **Alzheimer's Disease Dementia (ADD)**.

Here are the complete meta-analytic results extracted directly from `PMC9090874`:

| Saccadic Parameter | Comparison Cohort | Studies (`k`) | Raw Mean Difference (`MD`) | Effect Size (Hedges' `g` / `SMD` [95% CI]) | `p`-Value | Heterogeneity (`I²`) | Publication Bias (Egger's Test) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Prosaccade Latency (Gap)** | **ADD vs. Control** | 16 | `+14.22 ms` | `0.38` `[0.19, 0.56]` | `< 0.001` | `66%` | Significant (`Z = 2.60, p = 0.009`) |
| **Prosaccade Latency (Gap)** | **MCI vs. Control** | 8 | `+3.98 ms` | **`0.09` `[-0.10, 0.28]`** | **`0.95` (Null)** | `0%` | — |
| **Prosaccade Latency (Overlap)** | **ADD vs. Control** | 12 | `+26.10 ms` | `0.56` `[0.32, 0.80]` | `< 0.001` | `72%` | Significant (`Z = 3.37, p = 0.002`) |
| **Prosaccade Latency (Overlap)** | **MCI vs. Control** | 7 | `+3.78 ms` | **`0.08` `[-0.14, 0.29]`** | **`0.83` (Null)** | `0%` | — |
| **Antisaccade Latency (Gap)** | **ADD vs. Control** | 9 | `+45.65 ms` | `0.56` `[0.16, 0.96]` | `< 0.001` | `84%` | Significant (`Z = 2.18, p = 0.029`) |
| **Antisaccade Latency (Gap)** | **MCI vs. Control** | 7 | `+28.55 ms` | `0.35` `[0.04, 0.66]` | `0.030` | `60%` | — |
| **Antisaccade Error Rate** | **ADD vs. Control** | 16 | `+25.15%` | `1.31` `[0.99, 1.63]` | `< 0.001` | `83%` | Significant (`Z = 2.63, p = 0.009`) |
| **Antisaccade Error Rate** | **MCI vs. Control** | 5 | `+10.98%` | `0.55` `[0.32, 0.78]` | `0.15` (`Q`-test) | `33%–88%` | — |
| **Antisaccade Latency** | **ADD vs. MCI** | 8 | `+20.73 ms` | **`0.25` `[-0.08, 0.59]`** | **`0.14` (Null)** | `77%` | — |

Four forensic findings jump out of Opwonya et al.'s data:

1. **Zero Pre-Symptomatic / Prodromal 15-Year-Early Studies (`0/35`):** Not a single study in the meta-analysis tested healthy 30-, 40-, or 50-year-olds and tracked who developed Alzheimer's 15 years later. Every patient in the disease groups was an older adult (mean ages across studies ranged from `64.4` to `78.4 years`) who *already had clinically overt cognitive impairment or full dementia* diagnosed via NINCDS-ADRDA, NIA-AA, DSM-IV, or Petersen criteria.
2. **Complete Failure of Prosaccade Latency in MCI:** Even in patients who already have symptomatic Mild Cognitive Impairment, prosaccade reaction time is **statistically indistinguishable from healthy controls** (`SMD = 0.09, p = 0.95` in the gap paradigm; `SMD = 0.08, p = 0.83` in the overlap paradigm).
3. **Massive Distribution Overlap (`SMD = 0.35` to `0.55`):** In biostatistics, a Standardized Mean Difference (Hedges' `g`) of `0.35` (antisaccade latency in MCI) corresponds to an area under the ROC curve of approximately `AUC = Φ(g / √2) = Φ(0.35 / 1.414) ≈ 0.60`, meaning **86% of the MCI and healthy control distributions overlap**. Even `SMD = 0.55` (antisaccade error rate in MCI, pooled from just `k = 5` studies) corresponds to `AUC ≈ 0.65` (`78%` distributional overlap). That is why Saccade's own lawyer-drafted footnote on `assessment.html` was forced to admit: *"This research describes differences between groups; it does not validate Saccade's panel for individual diagnosis."*
4. **Severe Heterogeneity and Publication Bias:** Across the meta-analysis, inter-study heterogeneity was extreme (`I² = 60% to 88%`), and Egger's regression test confirmed statistically significant small-study publication bias across prosaccade gap (`p = 0.009`), prosaccade overlap (`p = 0.002`), antisaccade latency (`p = 0.029`), and antisaccade error rates (`p = 0.009`).

### Audit 2: Qi et al. (2024) — The Exact ROC Curve on Saccade's Poster

On its June 2026 UCSB Capstone Poster, Saccade reproduced a multi-colored Receiver Operating Characteristic (ROC) plot labeled *"Figure 1: ROC curve showing strong diagnostic performance of combined eye-tracking metrics for detecting AD (Qi et al. 2024)."*

What happens when you open [Qi et al. (2024)](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full) and read the actual study?

* **The Cohort (`N = 154` at Beijing Tiantan Hospital):**
  * `42` Normal Controls (median age `65.0 years`),
  * `63` symptomatic **AD-MCI** patients (median age `69.0 years`, **median symptom duration `24.0 months`**),
  * `49` symptomatic **Alzheimer's Disease Dementia (AD-D)** patients (median age `71.0 years`, **median symptom duration `36.0 months`**, mean MMSE score `16.45 / 30`).
* **The Hardware & Pre-Screening:** Participants were first examined by an **ophthalmologist** to exclude ocular conditions, and tested in a quiet clinic room on a stationary clinical corneal-reflection unit (*EyeKnow*, Beijing CAS-Ruiyi).
* **The Actual Diagnostic Accuracy:** Even when Qi et al. combined **seven eye-movement parameters** into a multivariable logistic regression model fitted on the same sample, look at the ROC performance across subgroups:
  * **AD-D (patients who had been demented for 3 years, MMSE ~16) vs. Controls:** `AUC = 0.935` (`sensitivity = 86.1%`, `specificity = 90.0%`). (At `MMSE = 16`, a 5-minute paper-and-pencil MoCA or MMSE test administered for free in any primary care office already separates moderate dementia from normal controls with `>95%` accuracy.)
  * **AD-MCI (patients symptomatic for 2 years) vs. Controls:** **`AUC = 0.737`**, with **`sensitivity = 62.5%`**, **`specificity = 85.0%`**, and **overall accuracy = `71.9%`**!

In other words, the very paper Saccade put in Figure 1 of its poster missed **37.5% of patients who already had two years of symptomatic Mild Cognitive Impairment** (`sensitivity = 62.5%`) while still misclassifying **15.0% of healthy controls as impaired** (`specificity = 85.0%`)!

### The Bayesian Screening Catastrophe: Testing People in Their 30s

Now combine Qi et al.'s best multi-parameter MCI performance (`sensitivity = 62.5%`, `specificity = 85.0%`) with Saccade's Launch YC announcement:

> *"We're live in San Francisco clinics, testing people in their 30s and older for early risk indicators."*

In diagnostic medicine, deploying a test with `85.0%` specificity (`15.0%` false-positive rate) into a young, low-prevalence screening population triggers a classic biostatistical disaster governed by **Bayes' Theorem**. The **Positive Predictive Value (`PPV`)**—the probability that a patient who receives a positive "risk" flag actually has underlying preclinical Alzheimer's pathology—is:

$$\text{PPV} = \frac{\text{Sensitivity} \cdot P(D)}{\text{Sensitivity} \cdot P(D) + (1 - \text{Specificity}) \cdot (1 - P(D))}$$

where `P(D)` is the base-rate prevalence of preclinical Alzheimer's pathology in the screened age cohort. Even using established Amyloid Biomarker Study meta-analyses (Jansen et al., *JAMA*), cerebral amyloid positivity in cognitively normal adults is approximately `10%` at age 50, `< 2%` at age 40–49, and `< 0.1%–0.5%` in adults in their 30s (where sporadic Alzheimer's pathology is virtually nonexistent outside rare autosomal-dominant *APP*, *PSEN1*, or *PSEN2* kindreds).

| Screened Cohort Age Group | Estimated Preclinical AD Base Rate `P(D)` | Sensitivity (Qi et al. MCI Model) | Specificity (Qi et al. MCI Model) | False Positive Rate (`1 - Spec`) | **Positive Predictive Value (`PPV`)** | **Fraction of "High Risk" Flags That Are False Positives** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Age 30–39 (Longevity Clinic Cohort)** | `0.1%` (`0.001`) | `62.5%` | `85.0%` | `15.0%` | **`0.41%`** | **`99.59%` False Positives** |
| **Age 40–49** | `0.5%` (`0.005`) | `62.5%` | `85.0%` | `15.0%` | **`2.05%`** | **`97.95%` False Positives** |
| **Age 50–59** | `3.0%` (`0.030`) | `62.5%` | `85.0%` | `15.0%` | **`11.42%`** | **`88.58%` False Positives** |
| **Age 65–74** | `15.0%` (`0.150`) | `62.5%` | `85.0%` | `15.0%` | **`42.37%`** | **`57.63%` False Positives** |

When Saccade screens 1,000 worried-well 35-year-olds in San Francisco longevity clinics with an oculomotor panel operating at `85%` specificity, **`150` healthy 35-year-olds will walk out with an abnormal eye-tracking result**, while roughly **`0` to `1`** person in that cohort has preclinical Alzheimer's pathology. More than **98% to 99.5% of positive alarms in young adults will be false positives**—inflicting severe psychological trauma and triggering unnecessary downstream neurological workups (`$3,000+` amyloid PET scans or invasive lumbar punctures).

---

## 5. Rival Causes & Molecular Ground Truth: Why Eye Movements Are Not Specific to Alzheimer's (and Why Plasma `p-tau217` Already Exists)

Why does an oculomotor test have such a high false-positive rate in the real world? Because of **neuroanatomical non-specificity**.

### The 4-Way Causal Audit of Oculomotor Abnormalities

When a person puts on a headset and performs a prosaccade (looking toward a flash), an antisaccade (suppressing the reflex to look at a flash and looking in the opposite direction), or a memory-guided saccade, what neural circuits are being tested?

| Rival Cause Category (Observed Signal: Prolonged Saccade Latency `+20 ms` & Antisaccade Errors) | Confounding Conditions & Clinical Mechanisms |
| :--- | :--- |
| **1. Psychiatric & Neurodevelopmental** | • **ADHD** (DLPFC top-down inhibition deficit)<br>• **Schizophrenia / Bipolar Disorder**<br>• **Major Depressive Disorder & Generalized Anxiety**<br>• **Autism Spectrum** |
| **2. Pharmacological & Physiological State** | • **Sleep deprivation** (`< 5 hrs`) / circadian trough<br>• **Caffeine withdrawal** / acute work fatigue<br>• **Medications & Substances:** Alcohol, benzodiazepines, Z-drugs/sedatives, antihistamines, anticholinergics, SSRIs<br>• **Ocular / Optical:** Dry eye, astigmatism, VR vergence-accommodation fatigue |
| **3. Non-AD Neurology & Systemic Disease** | • **Parkinson's Disease**, Progressive Supranuclear Palsy (**PSP**), **Lewy Body Dementia (DLB)**<br>• **Frontotemporal Dementia (FTD)**<br>• **Multiple Sclerosis / Traumatic Brain Injury (TBI)**<br>• **Type 2 Diabetes** (**`70.5%`** prevalence in `Qi et al. 2024` AD cohort vs. `23.8%` in controls!) |

1. **Direct Neuroanatomical Pathway (Executive Control, Not Amyloid Specificity):** Antisaccade inhibition is governed by top-down inhibitory signals from the **dorsolateral prefrontal cortex (DLPFC)**, **anterior cingulate cortex (ACC)**, and **frontal eye fields (FEF)** projecting via the basal ganglia (caudate nucleus and substantia nigra pars reticulata) to the **superior colliculus**. Any condition that transiently or chronically impairs prefrontal executive attention increases antisaccade error rates and saccadic latency.
2. **Third-Variable Confounders Across Psychiatric, Pharmacological, and Systemic Conditions:**
   * **ADHD & Psychiatric Conditions:** Decades of oculomotor literature show that adults with **ADHD**, **schizophrenia**, **bipolar disorder**, **major depressive disorder**, and **generalized anxiety** exhibit large, statistically robust increases in antisaccade error rates (`SMD = 0.60–1.10`)—often *larger* than the `SMD = 0.55` seen in Mild Cognitive Impairment! A 32-year-old software engineer in San Francisco with ADHD or work burnout taking Saccade's test will exhibit textbook antisaccade inhibition failures that have zero connection to Alzheimer's disease.
   * **Sleep Deprivation & Medications:** A single night of restricted sleep (`< 5 hours`), evening testing at a circadian trough, or routine use of **antihistamines (diphenhydramine/cetirizine)**, **benzodiazepines**, **Z-drugs (zolpidem)**, **tricyclic antidepressants**, **anticholinergics**, or **alcohol** measurably slows saccadic velocity and prolongs latency by `15 ms` to `40 ms`—exceeding the entire `14 ms`–`26 ms` Alzheimer's signal in `Opwonya et al. (2022)`.
   * **Baseline Metabolic Confounding in `Qi et al. (2024)`:** Look at Table 1 of [Qi et al. (2024)](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full): **`70.5%` (`79/112`) of the Alzheimer's cohort had Type 2 Diabetes Mellitus**, compared to **`23.8%` (`10/42`) of the Normal Control group** (`p < 0.001`)! Diabetes independently causes microvascular cranial neuropathy, retinopathy, and central processing slowing, meaning the unadjusted ROC curves in `Qi et al. (2024)` were heavily confounded by a `46.7`-percentage-point imbalance in diabetes prevalence.
   * **Other Neurodegenerative Diseases:** Progressive Supranuclear Palsy (PSP), Parkinson's disease, Dementia with Lewy Bodies (DLB), Frontotemporal Dementia (FTD), and traumatic brain injury (TBI) all produce severe saccadic hypometria, slowed velocity, or antisaccade errors.

### The Molecular Ground Truth: Plasma `p-tau217` Is Already the Validated Early Test

In his launch pitch and portfolio materials, Bhardwaj claimed that eye-tracking biomarkers are *"earlier than any other markers we can screen for,"* asserting that PET scans only detect Alzheimer's *"5 years"* before symptoms (`$5,000`) and dismissing blood tests as *"Often unreliable ($2,000)"*.

Every part of that claim is contradicted by modern Alzheimer's biomarker science:

* **What the 2024 Revised NIA-AA Criteria Actually Say:** Under the [2024 Revised Criteria for Diagnosis and Staging of Alzheimer's Disease (Jack et al., *Alzheimer's & Dementia* / *Nature Medicine*, PMC11350039)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11350039/), Alzheimer's disease is defined biologically by **Core 1 biomarkers**, which become abnormal **15 to 20+ years before clinical symptom onset** (in completely asymptomatic Stage 1 individuals).
* **Core 1 Blood Biomarkers (`p-tau217`) Have `0.94–0.98` AUC:** Plasma **phosphorylated tau-217 (`p-tau217`)** and the **`%p-tau217` / `p-tau217/Aβ42` ratio** (measured via mass spectrometry or immunoassays such as **C2N Diagnostics' PrecivityAD2**, **Fujirebio's FDA-cleared Lumipulse G pTau217/β-Amyloid 1-42 Plasma Ratio**, **Eli Lilly's CertuitAD**, and **Roche/ALZpath** assays) achieve **ROCs of `0.94` to `0.98`** (`>90%` sensitivity and `>90%` specificity) for detecting cerebral amyloid-beta and tau pathology, matching cerebrospinal fluid (CSF) and Amyloid PET gold standards at a clinical lab cost of **`$300` to `$1,200`**.
* **Oculomotor Metrics Are Not in the NIA-AA Framework:** Oculomotor behavior does not measure amyloid plaques or tau tangles; it measures downstream synaptic and cortical network dysfunction *after* neurodegeneration has already degraded frontoparietal or brainstem gaze circuits. You cannot have Alzheimer's-specific eye-movement impairment *before* cerebral amyloid and tau pathology exist.

| Diagnostic Modality | Biological Target Measured | NIA-AA 2024 Classification | Validated Pre-Symptomatic Lead Time | Diagnostic Accuracy (`AUC` for AD Pathology) | Confounded by ADHD, Sleep, Stress, or Sedatives? | FDA Regulatory Status (Oct 2026) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Amyloid PET (`18F-Florbetapir` / `Florbetaben` / `Flutemetamol`)** | Cortical fibrillar `Aβ` plaques | **Core 1 Biomarker** (Diagnostic) | **15–20 years** before dementia | `0.96–0.99` (Pathology reference standard) | **No** | **FDA Approved** |
| **Plasma `p-tau217` / `Aβ42/40` Ratio (`Lumipulse G`, `PrecivityAD2`)** | Soluble phosphorylated tau & amyloid ratio reflective of plaques/tangles | **Core 1 Biomarker** (Diagnostic) | **15–20 years** before dementia | **`0.94–0.98`** (`>90%` Sens / Spec) | **No** | **FDA Cleared (510(k)/Breakthrough) & CLIA Validated** |
| **CSF `Aβ42/40` & `p-tau181` (Lumbar Puncture)** | Cerebrospinal fluid amyloid & phospho-tau | **Core 1 Biomarker** (Diagnostic) | **15–20 years** before dementia | `0.95–0.98` | **No** | **FDA Cleared** |
| **Stationary Lab Eye Trackers (`Opwonya 2022` / `Qi 2024`)** | Frontoparietal / superior colliculus motor latency & inhibition | **Unclassified** (Downstream cognitive/motor correlate) | **0 years proven** (`0/35` studies tested pre-symptomatic subjects) | **`0.60–0.737`** in symptomatic MCI (`p = 0.95` null for MCI prosaccade latency) | **Yes (Severely)** | Research / select 510(k) general oculomotor trackers (not AD-specific) |
| **Saccade (YC F26) VR Vision Pro Attachment** | Unvalidated `200 fps` USB camera tracking inside VR headset | **None** | **Unproven (`N = 0` clinical trials)** | **Unknown (`N = 0` AD/MCI patients tested)** | **Yes (Severely, plus VR headset slip/vergence)** | **None (Unapproved, uncleared, unregistered)** |

---

## 6. Federal Statutory & Regulatory Audit: Evaluating the Will Manidis Indictment (`FD&C Act` & `21 CFR`)

When Will Manidis wrote that Saccade was engaged in *"blatantly illegal grifting"* and cited a list of federal statutes in response to Hamudi's *"start deploying early"* defense, was Manidis exaggerating, or was his statutory citation accurate?

Let us walk through each provision of the **Federal Food, Drug, and Cosmetic Act (`21 U.S.C. § 301 et seq.`)** and **Title 21 of the Code of Federal Regulations (`21 CFR`)** and apply them to Saccade's public artifacts.

### 1. Is Saccade Legally a "Medical Device" Under `21 U.S.C. § 321(h)`?

Under **Section 201(h) of the FD&C Act ([21 U.S.C. § 321(h)](https://www.law.cornell.edu/uscode/text/21/321))**, a `device` is defined as:

> *"...an instrument, apparatus, implement, machine, contrivance, implant, in vitro reagent, or other similar or related article, including any component, part, or accessory, which is... **intended for use in the diagnosis of disease or other conditions**, or in the cure, mitigation, treatment, or prevention of disease, in man..."*

Under FDA's guidance on **[General Wellness: Policy for Low Risk Devices](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-wellness-policy-low-risk-devices)** (and Section 520(o) of the 21st Century Cures Act, `21 U.S.C. § 360j(o)`), a hardware/software product qualifies as an exempt "general wellness product" **only if**:
1. It is intended **solely** for general wellness use (e.g., relaxation, fitness tracking, general cognitive games) **without any reference to diagnosing or screening for a specific disease or medical condition**, OR
2. It tracks a healthy lifestyle choice to help reduce the risk of a chronic disease where the link between a healthy lifestyle and that disease is well understood, **without making diagnostic or biomarker screening claims**.

Saccade's hardware attachment and software do not claim to be a brain-training puzzle game. Its homepage H1 literally reads **"World's Earliest Test for Alzheimer's Biomarkers — Non-invasive VR screening"**, and its Launch YC post states: **"We're live in San Francisco clinics, testing people in their 30s and older for early risk indicators... Once classified into one of three risk categories, patients can start interventions ranging from preventative longevity practices, further neurological evaluations, and new FDA-approved drugs."**

By explicitly claiming to screen for **Alzheimer's disease biomarkers** and stratify patients into clinical risk categories to guide **FDA-approved Alzheimer's drug interventions**, Saccade unambiguously crosses the statutory threshold into a regulated **medical device** under `21 U.S.C. § 321(h)`.

### 2. Does the Buried Footer Disclaimer Save Saccade? (`21 CFR § 801.4` — The Objective Intended Use Doctrine)

A common belief among first-time consumer health founders is that you can put **"World's Earliest Test for Alzheimer's Biomarkers"** in 60-point font at the top of your landing page as long as you write *"Investigational assessment. Not a diagnostic test"* in 10-point grey font in `terms.html`.

Federal law explicitly forecloses this tactic. Under **[21 CFR § 801.4 (Meaning of intended uses)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-801/subpart-A/section-801.4)**:

> *"The words **intended uses** or words of similar import in §§ 801.5, 801.119, 801.122, and 801.125 refer to the **objective intent** of the persons legally responsible for the labeling of an article... The intent may be shown by such persons' **expressions, or may be shown by the circumstances surrounding the distribution of the article**. This objective intent may, for example, be shown by **labeling claims, advertising matter, or oral or written statements** by such persons or their representatives."*

In decades of FDA enforcement actions, Warning Letters, and federal court precedent, the FDA evaluates **the totality of promotional statements**—including homepage headers, investor/launch announcements, social media videos, and clinic recruitment pages. A boilerplate disclaimer buried in `terms.html` or a footer is legally void when the primary marketing headline promotes the device as an Alzheimer's biomarker screening test.

### 3. Premarket Clearance (`§ 510(k)`), De Novo / PMA (`§ 513(f)(1)`), Adulteration (`§ 501`), and Misbranding (`§ 502`)

While basic stationary nystagmographs and general-purpose eye-movement trackers without disease-specific diagnostic software can be cleared as Class II devices under `21 CFR § 882.1460` (requiring a **510(k) premarket notification** under `21 U.S.C. § 360(k)`), a device intended to **screen for or classify Alzheimer's disease risk using machine learning** has no substantially equivalent Class II predicate. Under **Section 513(f)(1) of the FD&C Act (`21 U.S.C. § 360c(f)(1)`)**, a novel diagnostic device without a cleared predicate is automatically classified as **Class III** by operation of law, requiring either a **De Novo classification request (`21 U.S.C. § 360c(f)(2)`)** backed by prospective clinical validation or a **Premarket Approval (`PMA`, `21 U.S.C. § 360e`)**.

Because Saccade holds neither a `510(k)` clearance, a `De Novo` grant, nor a `PMA`:
* **Adulteration (`21 U.S.C. § 351(f)(1)(B)`):** Any device distributed for clinical use without required premarket approval or an active, compliant Investigational Device Exemption (`IDE`) is statutorily **adulterated**.
* **Misbranding (`21 U.S.C. § 352(o)` and `§ 352(a)`):** A device distributed without required `510(k)` premarket notification (`§ 352(o)`) or whose labeling is *"false or misleading in any particular"* (`§ 352(a)`—such as claiming on Launch YC to generate an ML risk score classifying patients into three categories when its own patient pamphlet states no score is generated) is statutorily **misbranded**.
* **Prohibited Acts (`21 U.S.C. § 331(a)` and `(k)`):** Introducing or delivering for introduction into interstate commerce any device that is adulterated or misbranded (`§ 331(a)`), or doing any act to a device while held for sale after shipment in interstate commerce that results in the device being adulterated or misbranded (`§ 331(k)`), is a **prohibited federal act** carrying strict-liability misdemeanor penalties under `21 U.S.C. § 333(a)(1)` (*United States v. Park*, 421 U.S. 658 (1975)), civil money penalties under `§ 333(f)(1)(A)`, and injunction/seizure authority under `§§ 332, 334`.

### 4. The "Investigational Device" Catch-22 (`21 CFR § 812.7`)

What if Saccade argues: *"We aren't selling a commercial medical device; our terms say Saccade is an 'investigational assessment' collecting research data in San Francisco clinics"*?

That defense walks straight into **[21 CFR § 812.7 (Prohibition of promotion and other improper practices)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812/subpart-A/section-812.7)**, which governs all investigational devices under `21 CFR Part 812`:

> *"An investigator, or any person acting on behalf of an investigator, shall **not**:*
> *(a) **Promote or test market** an investigational device, until after FDA has approved the device for commercial distribution.*
> *(b) **Commercialize** an investigational device by charging the subjects or investigators for a device a price larger than that necessary to recover costs of manufacture, research, development, and handling.*
> *(c) Unduly prolong an investigation.*
> *(d) **Represent that an investigational device is safe or effective** for the purposes for which it is being investigated."*

Look at how completely `21 CFR § 812.7` traps Saccade:
1. If Saccade's device is truly **investigational**, it is **strictly illegal under `21 CFR § 812.7(a)` and `(d)`** to launch a promotional campaign on Y Combinator and `saccade.health` proclaiming it is the **"World's Earliest Test for Alzheimer's Biomarkers"**, recruiting retail consumers with a **"Take the test"** CTA, and pitching clinics on `/for-clinics` (*"Offer the world's earliest Alzheimer's screening in your clinic... Differentiate your longevity or primary care practice"*).
2. Furthermore, any human clinical study of an investigational diagnostic device intended to support a future FDA marketing submission requires **Institutional Review Board (IRB) approval (`21 CFR Part 56`)** and a statutory **Informed Consent form (`21 CFR Part 50`, specifically `§ 50.25`)**. On `saccade.health`, users simply enter their email into a Google Apps Script web form (`signup.js`), with zero IRB protocol disclosure, zero principal investigator listed, and a `terms.html` page dated April 2026 that lacks the mandatory elements of federal informed consent under `21 CFR § 50.25`.

---

## 7. The Graveyard & Survivorship Audit: Why Ocular Alzheimer's Diagnostics Take Decades, Not 12 Weeks of YC

Saccade is not the first company to notice that eye movements or retinal imaging correlate with cognitive decline. In fact, digital and ocular neuro-diagnostics is one of the most heavily populated graveyards in medtech precisely because **translating a noisy group-level correlation (`p < 0.05`) into a high-specificity individual clinical test (`AUC > 0.90`) is extraordinarily hard**.

Consider the real-world history of startups that actually raised tens of millions of dollars and ran multi-year clinical trials in this exact space:

* **Neurotrack Technologies:** Founded in 2012 with over `$60M` in venture backing (including Khosla Ventures and Founders Fund) to commercialize a 5-minute visual paired-comparison eye-tracking test for early Alzheimer's detection based on primate and human memory research at Emory University. After more than a decade of clinical studies showed that eye-tracking visual memory scores lacked the molecular specificity to serve as a standalone Alzheimer's diagnostic, Neurotrack pivoted away from consumer Alzheimer's diagnosis toward general B2B brief digital cognitive assessment suites for health systems.
* **ViewMind:** Founded after nearly 20 years of oculomotor and cognitive neuroscience research, utilizing head-mounted eye-tracking to measure ocular micro-movements during working-memory tasks. Even with two decades of research, ViewMind has had to conduct multi-year longitudinal validation cohorts in Europe, Latin America, and the US cross-referencing against CSF and amyloid PET rather than selling unvalidated tests to 30-year-olds out of college.
* **C. Light Technologies & RetiSpec:** C. Light spent years developing a `10-second` cellular-resolution retinal eye-motion tracker (*Retitrack*) using scanning laser ophthalmoscopy, securing initial FDA `510(k)` clearance strictly as a general physiological eye-movement monitor while continuing clinical trials in MS and neurodegeneration. **RetiSpec** spent years developing hyperspectral retinal camera imaging cross-validated directly against Amyloid PET and CSF before securing FDA Breakthrough Device designation—and still operates under strict clinical validation protocols rather than direct-to-consumer VR marketing.

### Why Trevor Klee's "Gresham's Law of Biotech" Warning Matters

In economics, **Gresham's Law** states that *"bad money drives out good."* In diagnostic medicine, Trevor Klee pointed out the exact same mechanism:

* Running a legitimate diagnostic biotech (like C2N Diagnostics, Fujirebio, or RetiSpec) requires spending **5 to 10 years** and **`$20M` to `$100M+`** on prospective, IRB-approved, multi-center clinical trials cross-referenced against Amyloid PET, CSF, and plasma `p-tau217`, followed by rigorous FDA `510(k)`, `De Novo`, or `PMA` review—during which the company is legally forbidden from making unsubstantiated marketing claims.
* By contrast, a "move fast and break things" startup can take a `$7,500` undergraduate 3D-printed headset attachment with `N = 0` clinical data, copy a `0.737 AUC` figure from a Chinese hospital study of already-symptomatic patients, slap *Nature*, *NEJM*, and *Harvard Medical School* logos on a landing page, and market the **"World's Earliest Test for Alzheimer's Biomarkers"** to longevity clinics in 12 weeks.

If regulators, accelerators, and venture investors reward the second path—or treat federal medical device statutes as friction to be bypassed with a contradictory footer disclaimer—fraudulent or unvalidated screening tests outcompete legitimate clinical trials for capital, clinic partnerships, and patient trust. Worse, when patients inevitably discover that the "three risk categories" promised on Launch YC do not exist (*"Will I receive a score? Not at this stage"*), public cynicism poisons recruitment for real Alzheimer's prevention trials.

---

## 8. Synthesis & The Forensic Verdict: What We Actually Think

### Contextual If-Clauses (Grey-Thinking Synthesis)

To avoid binary thinking, we separate the underlying neuroscience of oculomotor research from Saccade's commercial execution using explicit conditional rules:

* **IF** Saccade were operating strictly as an **IRB-approved academic or preclinical research study**—recruiting older adults (`age 60–80`) alongside confirmed plasma `p-tau217` and Amyloid PET benchmarks, paying or consenting participants under `21 CFR Part 50` without commercial clinic pitches, and transparently stating that it is investigating whether `200 fps` VR eye tracking can replicate stationary `500–1,000 Hz` laboratory systems—**THEN** the project would be a completely legitimate, worthwhile biomedical engineering study.
* **IF**, furthermore, eye-movement metrics are used not as a standalone "Alzheimer's biomarker test" for 30-year-olds, but as a **low-cost longitudinal functional monitoring tool** in already-diagnosed MCI/AD patients (for instance, tracking whether frontoparietal executive latency stabilizes over 12 months in patients already confirmed via `p-tau217` and receiving anti-amyloid therapy), **THEN** VR oculomotor tracking has a plausible, scientifically defensible clinical niche.
* **HOWEVER, IF** a company takes an undergraduate capstone prototype with **zero clinical validation (`N = 0`)**, markets it to the public and San Francisco longevity clinics as the **"World's Earliest Test for Alzheimer's Biomarkers"** for **people in their 30s**, claims on Launch YC to classify patients into **three ML risk categories** to guide **FDA-approved drug interventions** while quietly admitting in its participant PDF that **no individual score or age-based range even exists**, and relies on meta-analyses of already-demented elderly patients where MCI prosaccade latency has a **null effect size (`SMD = 0.09, p = 0.95`)**—**THEN** the deployment is scientifically invalid, statistically guaranteed to generate `>98%` false positives in young adults, and in direct conflict with federal medical device law (`21 CFR §§ 801.4, 812.7` and `21 U.S.C. §§ 331, 351, 352`).

---

### The Forensic Verdict: What We Actually Think

Here is our unambiguous judgment on the Saccade (`YC F26`) controversy:

1. **Both Trevor Klee and Will Manidis Are Factually and Legally Right:**
   * **On the Science (Klee):** The primary literature (`Opwonya et al., 2022` and `Qi et al., 2024`) **does not support Saccade's product claims**. Zero studies in the cited meta-analysis evaluated preclinical patients 15 years before symptoms; prosaccade latency failed completely to separate MCI from healthy controls (`p = 0.95`); and even a 7-parameter model in symptomatic AD-MCI achieved only `AUC = 0.737` (`62.5%` sensitivity, `85.0%` specificity)—which produces a catastrophic **`98%+` false-positive rate (`PPV < 2%`)** if used to screen 30- and 40-year-olds. Moreover, plasma **`p-tau217`** (`AUC 0.94–0.98`, FDA-cleared via Fujirebio Lumipulse) is already the true, validated 15-to-20-year preclinical Alzheimer's biomarker.
   * **On the Law (Manidis):** You cannot market a hardware/software test as the *"World's Earliest Test for Alzheimer's Biomarkers"* and recruit clinics to offer *"the world's earliest Alzheimer's screening"* while hiding behind a buried *"investigational / not a diagnostic"* footer. Under `21 CFR § 801.4`, the front-page headline governs intended use, and under `21 CFR § 812.7(a)` and `(d)`, promoting an unapproved investigational device as safe and effective is an explicit federal violation.
   * **On the Launch YC vs. Pamphlet Contradiction:** Telling investors and customers on Launch YC that your *"proprietary ML model"* produces a *"risk score"* classifying patients into *"one of three risk categories"* when your own patient pamphlet (`saccade-02-your-visit.pdf`) states *"Will I receive a score? Not at this stage... Individual measurements still need validation"* is an indefensible misrepresentation.

2. **Probability-Weighted 12-Month Outlook for Saccade:**
   * **Scenario A — Quiet Website Scrubbing & Regulatory Retreat (`65%` probability):** Within days or weeks of the October 2026 backlash, Saccade scrubs *"World's Earliest Test for Alzheimer's Biomarkers"*, removes the *NEJM*/*Nature*/*Harvard* logo marquee, pulls the *"three risk categories"* claim from Launch YC, and pivots into either an IRB-registered data-collection study or a generic B2B "cognitive wellness / concussion / attention" eye-tracking tool under the FDA General Wellness policy.
   * **Scenario B — FDA Office of Prescription Drug Promotion / CDRH Warning Letter or FTC Inquiry (`25%` probability):** If Saccade continues commercializing or promoting Alzheimer's biomarker screening in San Francisco clinics without an IDE or `510(k)`/`De Novo` clearance, CDRH issues a public untitled letter or Warning Letter citing `21 U.S.C. §§ 351(f)(1)(B), 352(a)/(o)` and `21 CFR §§ 801.4, 812.7` (similar to prior FDA enforcement against unapproved cognitive and ocular diagnostic devices).
   * **Scenario C — Full Prospective Clinical Validation Against Plasma `p-tau217` (`10%` probability):** Saccade halts commercial screening, partners with an academic Alzheimer's Disease Research Center (ADRC), runs a multi-year IRB-approved trial comparing its `200 fps` attachment against plasma `p-tau217` and Amyloid PET in aged 60–80 cohorts, and publishes peer-reviewed device-specific sensitivity/specificity data.

3. **Actionable Guidance for Patients & Clinicians:**
   * **If you are a patient concerned about early Alzheimer's risk:** Do **not** use an unvalidated VR eye-tracking test in a longevity clinic. If you have subjective cognitive decline, a strong family history, or *APOE* `ε4` risk and want a clinically validated biomarker evaluation, consult a board-certified neurologist about an **FDA-cleared plasma `p-tau217` / `Aβ42/40` blood test** (`Lumipulse G` or `PrecivityAD2`), which measures actual Alzheimer's molecular pathology with `>90%` accuracy.
   * **If you operate a longevity or primary care clinic:** Deploying an uncleared, unapproved device marketed as an "Alzheimer's screening test" exposes your practice to regulatory liability under `21 CFR § 812.7`, malpractice exposure from false-positive diagnostic cascades, and reputational harm when patients realize no validated score or normative age range exists.

---

## Primary Sources & References

1. **Saccade (YC F26) Launch & Web Properties (October 2026):**
   * [Launch YC: Saccade — World's Earliest Test for Alzheimer's Biomarkers](https://www.ycombinator.com/launches/Vff-saccade-world-s-earliest-test-for-alzheimer-s-biomarkers)
   * [Y Combinator Company Profile: Saccade](https://www.ycombinator.com/companies/saccade)
   * [Saccade Official Website (`saccade.health`)](https://saccade.health), [The Assessment (`saccade.health/assessment.html`)](https://saccade.health/assessment.html), [For Clinics (`saccade.health/for-clinics`)](https://saccade.health/for-clinics), and [Terms (`saccade.health/terms.html`)](https://saccade.health/terms.html)
2. **UCSB Mechanical Engineering Capstone Primary Records (June 2026):**
   * [UC Santa Barbara Engineering Capstone Project: Saccade (`Team scME6`)](https://capstone.engineering.ucsb.edu/projects/saccade)
   * [Official UCSB Senior Capstone Final Poster (`scME6 Saccade Final Poster.pdf`, June 2026)](https://capstone.engineering.ucsb.edu/sites/default/files/2026-06/scME6%20Saccade%20Final%20Poster.pdf)
3. **Peer-Reviewed Oculomotor & Alzheimer's Biomarker Literature:**
   * Opwonya, J., Doan, D. N. T., Kim, S. G., et al. (2022). *Saccadic Eye Movement in Mild Cognitive Impairment and Alzheimer's Disease: A Systematic Review and Meta-Analysis.* **Neuropsychology Review**, 32, 193–227. [PMC9090874](https://pmc.ncbi.nlm.nih.gov/articles/PMC9090874/) / [DOI: 10.1007/s11065-021-09495-3](https://doi.org/10.1007/s11065-021-09495-3)
   * Qi, Y., et al. (2024). *Abnormal eye movements: relationship with clinical symptoms and predictive value for Alzheimer's disease.* **Frontiers in Aging Neuroscience**, 16, 1471698. [Full Text](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full)
   * Jack, C. R., Jr., Andrews, J. S., Beach, T. G., et al. (2024). *Revised criteria for diagnosis and staging of Alzheimer's disease: Alzheimer's Association Workgroup.* **Alzheimer's & Dementia / Nature Medicine**. [PMC11350039](https://pmc.ncbi.nlm.nih.gov/articles/PMC11350039/)
4. **United States Federal Device Statutes & Regulations:**
   * [21 U.S.C. § 321(h) — Statutory Definition of a Medical Device](https://www.law.cornell.edu/uscode/text/21/321)
   * [21 U.S.C. § 331 — Prohibited Acts in Interstate Commerce](https://www.law.cornell.edu/uscode/text/21/331)
   * [21 U.S.C. § 351 — Adulterated Drugs and Devices](https://www.law.cornell.edu/uscode/text/21/351)
   * [21 U.S.C. § 352 — Misbranded Drugs and Devices](https://www.law.cornell.edu/uscode/text/21/352)
   * [21 U.S.C. § 360 — Registration and Premarket Notification (`510(k)`)](https://www.law.cornell.edu/uscode/text/21/360)
   * [21 CFR § 801.4 — Meaning of Intended Uses (Objective Intent Doctrine)](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-801/subpart-A/section-801.4)
   * [21 CFR § 812.7 — Prohibition of Promotion and Commercialization of Investigational Devices](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812/subpart-A/section-812.7)
   * [FDA Guidance: General Wellness: Policy for Low Risk Devices](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-wellness-policy-low-risk-devices)
