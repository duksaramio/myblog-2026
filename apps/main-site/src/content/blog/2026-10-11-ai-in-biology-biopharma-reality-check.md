---
title: "The Skeptic’s Deep Dive into AI in Biology: What Is Actually Working in Biopharma, What Failed, and What’s Holding It Back"
description: "Tired of the biotech buzz? A clear, non-expert breakdown of where AI is genuinely advancing drug discovery, the Phase 2 and 3 clinical trial results in 2026, and the brutal physical bottlenecks that explain why biology isn't software."
pubDate: 2026-10-11
image: "/og-image.png"
tags: ["ai", "biology", "biotech", "drug-discovery", "biopharma", "deep-learning"]
lang: "en"
---

If you follow technology and medicine, you have likely felt a growing sense of cognitive dissonance over the last four years. 

On one side, venture capitalists and tech headlines have proclaimed that *"biology has been digitized,"* that neural networks will *"solve human disease,"* and that traditional pharmaceutical laboratories are about to be replaced by server racks.

On the other side stands your everyday experience: your doctor isn’t prescribing an "AI-invented pill," several high-profile AI biotech startups have lost 80% to 95% of their market value, and curing cancer remains as stubbornly difficult as it was a decade ago.

It is completely natural to look at this gap and conclude: **"Is AI in biology just another overhyped tech narrative without real results?"**

Here is the straightforward truth: **Your skepticism about the hype is 100% justified. But if you think nothing real has happened, you are missing one of the most profound scientific shifts in modern history.**

The mistake was not the technology; the mistake was treating human biology like software. When you strip away the Silicon Valley marketing, what remains in 2026 is not vaporware. We now have concrete clinical trial data, drugs discovered by AI reaching Phase 2 and Phase 3 in human patients, and foundational tools rewriting how we interact with the living world.

To see why this is worthwhile—and where the real physical bottlenecks remain—we need to understand how drugs are actually made, without drowning in academic jargon.

---

## 1. The Drug Discovery Problem: The Alien Engine Analogy

To understand why AI is such a big deal in biology, you first have to appreciate how absurdly difficult traditional drug discovery is.

Imagine your body is not a clock, but a vast metropolis of **30 trillion citizens** (cells). Inside each cell are tens of thousands of microscopic nanomachines called **proteins**. These proteins do everything: they pump oxygen, repair DNA, transmit nerve signals, and break down food. 

When you get sick—whether with cancer, Alzheimer’s, or arthritis—it is usually because one specific protein nanomachine is broken, jammed, or overactive.

Traditional drug discovery is like trying to fix an alien spaceship engine without a user manual. It happens in four grueling steps:

```
[Target Discovery] ──> [Molecule Design] ──> [Preclinical & Safety] ──> [Clinical Trials (1-3)]
 Find broken part       Design custom key      Will it poison the liver?   Test in actual humans
  (Years 1-3)            (Years 4-6)            (Years 7-9)                 (Years 10-15)
```

1. **Target Discovery (Finding the Broken Part):** Out of roughly 20,000 distinct human proteins, which exact one is driving the disease? For decades, this was mostly educated guesswork and years of academic trial-and-error.
2. **Molecule Design / Lead Optimization (Designing the Key):** Once you find the broken protein, you must design a microscopic "key" (a chemical compound or an antibody) that fits into that protein’s specific pocket to turn it off. The problem? Chemical space is practically infinite—estimated at 10⁶⁰ possible small molecules (more than the number of atoms in the solar system). Traditionally, chemists physically mixed and screened hundreds of thousands of random chemicals in plastic trays, hoping one might stick.
3. **Preclinical / ADMET (The Gauntlet):** A molecule that fits the pocket in a test tube is usually useless in a body. It must dissolve in water, pass through cell membranes, avoid being immediately destroyed by liver enzymes, not damage heart channels (hERG), and not cause DNA mutations. In industry terms, this is **ADMET** (*Absorption, Distribution, Metabolism, Excretion, and Toxicity*).
4. **Clinical Trials (The Human Test):** If a molecule passes the gauntlet, it enters human trials across three stages:
   - **Phase 1 (Safety):** Tested in 20 to 100 healthy volunteers to ensure it doesn’t poison humans.
   - **Phase 2 (Efficacy):** Tested in 100 to 300 patients with the disease to see if it actually works.
   - **Phase 3 (Scale):** Tested in 1,000 to 5,000+ patients against the current standard of care.

### The Brutal Baseline
Before AI arrived, the numbers behind this process were staggering:
- **Timeline:** 10 to 15 years from initial lab idea to pharmacy shelf.
- **Cost:** An average of **$1.5 billion to $2.6 billion** per approved drug (including the cost of all failed attempts).
- **Failure Rate:** **90% of all drug candidates that enter human clinical trials fail.** Roughly 50% fail in Phase 1 or 2 simply because they are too toxic or don't work.

This is the baseline against which AI must be measured.

---

## 2. Why Did It Feel Like All Buzz and No Results?

If the baseline is so broken, why did the first wave of AI biopharma feel disappointing to the public?

Two reasons: **the 18-month software illusion** and **the public market hangover**.

### The 18-Month Software Illusion
In consumer technology, code moves fast. You write code, test it on a server in 5 seconds, deploy it to millions of smartphones, and iterate weekly.

Silicon Valley investors who made billions in enterprise SaaS and mobile apps looked at biology and naively assumed it was just another software stack. They proclaimed that AI would replace the wet lab and yield approved blockbuster drugs in two years.

Biology laughed. You can train an AI model in 48 hours, but **you cannot run a human clinical trial on a graphics card**. 
- You cannot fast-forward how quickly a human liver metabolizes a drug.
- You cannot simulate how a heterogeneous human immune system reacts across diverse genetic backgrounds.
- You cannot speed up cancer progression: observing whether a cancer therapy extends patient survival by 12 months physically takes at least 12 months.

### The First-Generation Reckoning
Between 2020 and 2022, companies that branded themselves "AI-first biotechs" went public at astronomical valuations through SPACs and IPOs. When their early programs ran into the unforgiving reality of clinical trials, the market punished them:
- **BenevolentAI:** Its lead candidate (BEN-2293 for eczema) failed its Phase 2a clinical trial in 2023, missing efficacy endpoints. Its stock tumbled over 95%, forcing heavy restructuring.
- **Exscientia:** Reached a $3 billion market valuation, but faced pipeline delays and leadership shakeups before being acquired by Recursion in an all-stock deal at a severe discount.
- **Recursion Pharmaceuticals:** Traded near $35–$40 in 2021 before settling in single digits as investors realized AI could not eliminate clinical failure rates overnight.

Cynics watched this market collapse and concluded: *"See? It was all smoke and mirrors."*

That conclusion was wrong. The financial bubble popped, but the underlying science quietly matured.

---

## 3. Convincing the Skeptic: What Is Actually Working Right Now

What makes AI in biology worthwhile in 2026? We now have empirical, peer-reviewed evidence across the entire development pipeline. 

Here are four verifiable breakthroughs that prove this technology is delivering real-world value:

### Proof 1: Real AI-Designed Drugs Delivering in Phase 2 and 3 Trials

The ultimate test of AI is not a computer simulation; it is a sick human being getting better. In 2025 and 2026, the first wave of AI-discovered and AI-designed drugs cleared critical clinical hurdles:

#### 1. Insilico Medicine's Rentosertib (ISM001-055)
Idiopathic Pulmonary Fibrosis (IPF) is a fatal, irreversible lung disease where lung tissue progressively scars until the patient cannot breathe. Existing medications only slow decline slightly and carry harsh gastrointestinal side effects.

Insilico Medicine used its generative AI platform to:
1. Discover an entirely novel biological target called **TNIK** (TRAF2- and NCK-interacting kinase) associated with fibrosis and cellular aging.
2. Design a completely novel small molecule from scratch (**rentosertib**) to specifically inhibit TNIK.

The result? In a randomized, double-blind, placebo-controlled Phase 2a clinical trial in patients with IPF ([published in *Nature Medicine*, June 2025](https://doi.org/10.1038/s41591-025-03743-2); [NCT05938920](https://clinicaltrials.gov/study/NCT05938920)):
- Patients taking 60 mg daily demonstrated a **mean improvement in lung capacity of +98.4 mL** (Forced Vital Capacity) after 12 weeks, compared to a **decline of -20.3 mL** in the placebo group.
- The drug was safe, well-tolerated, and showed clear anti-fibrotic biomarker responses.
- It took Insilico under **30 months and ~$2.6 million** to go from target hypothesis to first-in-human Phase 1—a fraction of the 4–6 years and tens of millions of dollars typical for traditional pharma.

#### 2. Relay Therapeutics' Zovegalisib (RLY-2608)
The **PI3Kα** gene is one of the most common oncogenic mutations in human cancer, driving over 30% of advanced breast cancers. For 25 years, pharmaceutical giants tried to make a drug that targeted it without poisoning patients. 

Why did they fail? Because the normal (wild-type) PI3K protein regulates insulin and glucose metabolism throughout the body. Every traditional drug that blocked mutant PI3K also blocked normal PI3K, causing severe, dangerous hyperglycemia (spikes in blood sugar) and rash, forcing patients to stop treatment.

Relay Therapeutics used machine learning combined with all-atom molecular dynamics to model protein *motion*—not just static pictures, but how the protein flexes in 3D over time. Their models discovered an **allosteric pocket**—a secret backdoor on the protein that only opens in the mutant version.

They synthesized **zovegalisib (RLY-2608)**, the world's first mutant-selective PI3Kα inhibitor:
- In clinical trials, it demonstrated a median progression-free survival (PFS) of **11.0 months** in metastatic breast cancer patients who had already failed multiple lines of therapy.
- Because it ignores normal PI3K, discontinuation rates due to hyperglycemia dropped to negligible levels.
- Based on these results, Relay initiated the global pivotal **Phase 3 ReDiscover-2 trial** ([NCT06982521](https://clinicaltrials.gov/study/NCT06982521)), moving AI-guided structural design into late-stage registrational medicine.

#### 3. Generate:Biomedicines (GB-0895)
Rather than small chemical molecules, Generate uses generative AI diffusion models to design **large proteins and antibodies** from scratch. 
- Their lead candidate, **GB-0895**, is a computationally engineered monoclonal antibody targeting TSLP for severe asthma.
- By computationally optimizing the antibody's binding affinity and half-life, they created a molecule that requires subcutaneous injection only **twice a year** (every six months), compared to monthly or biweekly dosing for standard biologics.
- In 2026, GB-0895 progressed into international **Phase 3 registration trials** (SOLAIRIA-1 and SOLAIRIA-2).

---

### Proof 2: Clinical Trial Safety Rates Nearly Doubled (The Jayatunga Data)

Is this just a few lucky anecdotes? 

In 2024, researcher Madura K.P. Jayatunga and colleagues published the first comprehensive, systematic empirical study tracking AI-discovered molecules in clinical trials in [*Drug Discovery Today*](https://doi.org/10.1016/j.drudis.2024.104009).

Their findings revealed a striking statistical shift:

| Metric | Historical Pharma Average | AI-Discovered Molecules |
| :--- | :--- | :--- |
| **Phase 1 Trial Success (Safety & Tolerability)** | **40% – 65%** | **80% – 90%** |
| **Phase 2 Trial Success (Efficacy in Disease)** | **30% – 40%** | **~40%** |
| **Cumulative Discovery-to-Approval Odds** | **~5% – 10%** | **~9% – 18% (Projected)** |

Why did Phase 1 success jump to 80–90%? 

Because Phase 1 tests whether a molecule is fundamentally toxic, insoluable, or dangerous in human bodies. Traditionally, medicinal chemists optimize for one thing at a time: they make a molecule bind stronger, but accidentally ruin its solubility; then they fix its solubility, but accidentally make it toxic to the liver. 

AI models perform **multi-parameter multi-objective optimization**: they evaluate binding affinity, molecular weight, hERG cardiac toxicity, liver clearance, and membrane permeability simultaneously before a single physical gram is synthesized in a lab.

---

### Proof 3: De Novo Protein and Gene Design (Creating What Nature Never Built)

For 4 billion years, biology was restricted to what random mutations and natural selection produced. AI has turned biology into an engineering discipline where we can write novel biological machinery from scratch (*de novo*).

- **Profluent's OpenCRISPR-1:** CRISPR gene editing is one of the most promising technologies to cure genetic diseases like sickle cell anemia, but natural Cas9 proteins from bacteria have limitations in size, patent disputes, and off-target cuts. In a landmark paper published in *Nature* (2025) and open-sourced on [GitHub](https://github.com/Profluent-AI/OpenCRISPR), Profluent used large language models trained on biological sequences to design **OpenCRISPR-1**. It is over **400 mutations away** from natural SpCas9—a protein that never existed in nature—yet it edits human DNA with precision and efficiency matching or exceeding natural enzymes.
- **EvolutionaryScale's ESM-3:** Built by the former Meta FAIR biology team, [ESM-3](https://www.evolutionaryscale.ai) is a 98-billion parameter generative model trained on billions of natural protein structures and sequences. To test it, researchers asked the model to generate a brand-new Green Fluorescent Protein (GFP). The model created **esmGFP**, which had 58 mutations compared to the closest known natural jellyfish protein. That represents the equivalent of **500 million years of natural evolutionary distance** generated in a single computational pass—and when synthesized in a wet lab, it fluoresced bright green.
- **Arc Institute's Evo & Evo 2:** Published in *Science* and [*Nature*](https://www.nature.com/articles/s41586-026-10176-5), [Arc Institute](https://arcinstitute.org) trained genomic foundation models with context windows spanning whole genomes (hundreds of thousands of DNA base pairs). Evo models understand not just single proteins, but the complex choreography of DNA promoters, RNA regulators, and protein complexes working together.

---

### Proof 4: Rescuing the Wet Lab from Its Worst Bottlenecks

A common skeptic argument is: *"AlphaFold only predicts static structures; it doesn't give you a drug."*

While static structure alone is not a drug, AlphaFold completely eliminated what was once the single most expensive, soul-crushing bottleneck in structural biology: **the crystallographic phase problem**.

For 60 years, when biophysicists shot X-rays at crystallized proteins, the detectors captured light intensity but lost phase information. Solving this mathematical puzzle historically required postdocs to spend months soaking crystals in toxic heavy metals (mercury, platinum) or engineering selenium mutants. Tens of thousands of datasets were abandoned worldwide as "unsolvable."

When DeepMind released [AlphaFold 2 in *Nature*](https://doi.org/10.1038/s41586-021-03819-2) and the [AlphaFold Database](https://alphafold.ebi.ac.uk/) (now housing 214+ million structures), it solved this overnight. A landmark benchmark by [Terwilliger et al. in *Acta Crystallographica*](https://pubmed.ncbi.nlm.nih.gov/36735235/) proved that using AlphaFold models as search templates enabled automated software to solve **92% to 93% of previously intractable or unphased crystal structures**.

AlphaFold did not replace the wet lab; it turned months of blind crystallographic trial-and-error into routine confirmation.

---

## 4. The Unforgiving Bottlenecks: Why Haven't We Cured Everything?

If AI is achieving all this, why are we not swimming in miracle cures? Why does biopharma remain slow and expensive?

Because biology possesses four physical, inescapable bottlenecks that no neural network can magically erase:

**THE 4 PHYSICAL BOTTLENECK WALLS**

| 1. Target Validation Making the key is easy; making sure it opens the right door is not | 2. The Data Famine Models need data, but biology is noisy, sparse, and locked in IP | 3. Evolutionary Spaghetti Code Human cells have 5 backup routes for every pathway you block | 4. The Wet Clock Clinical trials take years in humans |
| :--- | :--- | :--- | :--- |

### Bottleneck 1: The "Right Key, Wrong Door" Problem (Target Validation)
AI has gotten astonishingly good at designing a molecule that binds tightly to a chosen protein. But **binding to a protein is not curing a disease**.

Roughly **60% of all Phase 2 clinical trials fail** because of efficacy. That means the drug did exactly what the computer designed it to do: it stuck to Protein X and blocked it completely. But in human patients, blocking Protein X simply did not stop the disease.

Disease biology is not linear. Diseases like Alzheimer's, Parkinson's, or pancreatic cancer involve intricate webs of immune signals, genetic predispositions, environmental factors, and metabolic feedback loops. Designing a key is an engineering problem; knowing which lock to pick is still a mystery.

### Bottleneck 2: The Data Famine and Negative Data Silos
Large language models (like ChatGPT) succeeded because they trained on trillions of words written on the public internet for free over thirty years.

Biology has no public internet.
- A single high-throughput biological experiment (e.g., cryo-EM or single-cell RNA sequencing) can cost tens of thousands of dollars.
- Most valuable drug assay data is proprietary, locked away in pharmaceutical vaults behind patent protections.
- **The Negative Data Graveyard:** Academic journals only publish positive results (*"Molecule X worked!"*). Nobody publishes the 999 molecules that precipitated out of solution or killed the cell culture. Because AI models need to see both failure and success to learn the true boundaries of chemistry, they are constantly starved of negative data.

### Bottleneck 3: The Evolutionary Spaghetti Code
Software is built with clean abstractions: logic gates, type systems, and deterministic instructions.

Human biology was assembled by **3.8 billion years of chaotic evolution**. Evolution does not refactor code; it kludges. If an organism develops a harmful mutation, evolution often survives by patching an awkward bypass over it.

As a result, human cells have massive redundancy. If you design an AI molecule that cleanly shuts down Pathway A in a cancer cell, the cell often senses the blockage and activates Pathway B, C, or D within weeks, developing drug resistance. Simulating this dynamic, interconnected network across multiple tissues remains beyond the capacity of current foundation models.

### Bottleneck 4: The Wet Clock Cannot Be Overclocked
You can double the clock speed of an NVIDIA GPU. You cannot double the biological clock of human aging or disease progression.

To prove that a preventive cardiovascular therapy reduces heart attacks in high-risk patients, you must track thousands of patients over 3 to 5 years. To demonstrate that an oncology drug improves overall survival, you must wait until clinical survival endpoints are reached.

The clinical trial phase accounts for roughly **70% of the cost and time of drug development**. While AI can optimize clinical trial design, match patient genetics, and predict toxicity, it cannot replace the legal and ethical requirement to verify safety in living humans over time.

---

## 5. The Verdict: The CAD Moment for Medicine

When you weigh the real clinical breakthroughs against the physical bottlenecks, the picture becomes clear.

The mistake was expecting AI in biology to look like **Software as a Service (SaaS)**—instant, frictionless, and completely digital.

The proper analogy is **Computer-Aided Design (CAD) in aerospace engineering**.

Before CAD and computational fluid dynamics, designing an airplane was a dangerous, artisanal craft. Engineers built scale models out of wood, blew smoke across them in wind tunnels, and sent test pilots up in physical prototypes. Many test pilots crashed and died.

CAD did not eliminate gravity. CAD did not eliminate the need to build physical planes out of titanium and carbon fiber. CAD did not eliminate the FAA's rigorous flight safety testing.

What CAD did was eliminate **thousands of blind, catastrophic physical iterations**. It transformed airplane design from an artisanal trial-and-error craft into a predictive, rational engineering discipline.

**THE SHIFT: FROM SCREENING TO DESIGN**

| Traditional Pharma (Pre-AI) | Modern Biopharma (AI-Augmented) |
| :--- | :--- |
| • Screening millions of random chemicals in plastic wells<br>• Optimizing properties one by one over 4–5 years<br>• 40–60% Phase 1 safety failure<br>• Unphased crystal structures abandoned on hard drives<br>• "Undruggable" targets left untouched for decades | • Generative de novo design of molecules tailored to targets<br>• Multi-parameter optimization (binding, safety, ADMET) at once<br>• 80–90% Phase 1 safety success<br>• 93% automated crystallographic molecular replacement<br>• Allosteric pockets & dynamic motion unlocking hidden sites |

That is exactly what AI is doing for biology today:
1. **It compresses early discovery from 5 years down to 18 months**, slashing millions in preclinical wasted spend.
2. **It doubles Phase 1 clinical safety success rates** from ~50% to ~85% by screening for organ toxicity in silico before testing in humans.
3. **It unlocks previously "undruggable" targets** (like mutant PI3Kα and TNIK) that defeated conventional chemistry for decades.
4. **It invents functional biological tools** (like OpenCRISPR-1 and esmGFP) that nature never had time to evolve.

Is AI in biology all hype? **No.** The venture capital bubble deserved to pop, but the underlying science is demonstrably working. 

Biology will never move as fast as software, because human lives are on the line and human physiology cannot be compiled in a sandbox. But for the first time in human history, we are no longer stumbling blindly through chemical space hoping to find a miracle. We are learning how to engineer it.

---

### Verifiable Data & Primary Sources

1. **AI Clinical Trial Benchmark Study:** Jayatunga, M. K. P. et al. "How successful are AI-discovered drugs in clinical trials? A first analysis and emerging lessons." *Drug Discovery Today* 29, 104009 (2024). [DOI: 10.1016/j.drudis.2024.104009](https://doi.org/10.1016/j.drudis.2024.104009)
2. **Insilico Medicine Phase 2a Trial in Idiopathic Pulmonary Fibrosis:** Ren, F. et al. "A generative AI-discovered TNIK inhibitor for idiopathic pulmonary fibrosis: a randomized phase 2a trial." *Nature Medicine* (June 2025). [DOI: 10.1038/s41591-025-03743-2](https://doi.org/10.1038/s41591-025-03743-2) | [ClinicalTrials.gov NCT05938920](https://clinicaltrials.gov/study/NCT05938920)
3. **Insilico Medicine Target & Molecule Discovery:** Ren, F. et al. "A small-molecule TNIK inhibitor targets fibrosis in preclinical and clinical models." *Nature Biotechnology* (2024). [DOI: 10.1038/s41587-024-02143-0](https://doi.org/10.1038/s41587-024-02143-0)
4. **Relay Therapeutics PI3Kα Mutant Selective Inhibitor (Phase 3 ReDiscover-2 Trial):** [ClinicalTrials.gov NCT06982521](https://clinicaltrials.gov/study/NCT06982521)
5. **AI-Generated Gene Editor (OpenCRISPR-1):** Ruffolo, J. A. et al. Profluent. "Design of highly functional genome editors by modeling the universe of CRISPR-Cas sequences." *Nature* (2025). [GitHub Repository](https://github.com/Profluent-AI/OpenCRISPR)
6. **Large-Scale Protein Foundation Model (ESM-3):** EvolutionaryScale. [ESM-3 Release & Technical Report](https://www.evolutionaryscale.ai) (2024).
7. **Genomic Foundation Model (Evo 2):** Arc Institute / Stanford University. "Genome modelling and design across all domains of life with Evo 2." *Nature* (2026). [DOI: 10.1038/s41586-026-10176-5](https://www.nature.com/articles/s41586-026-10176-5) | [Arc Institute](https://arcinstitute.org)
8. **AlphaFold 2 Breakthrough & Database:** Jumper, J. et al. "Highly accurate protein structure prediction with AlphaFold." *Nature* 596, 583–589 (2021). [DOI: 10.1038/s41586-021-03819-2](https://doi.org/10.1038/s41586-021-03819-2) | [AlphaFold Database](https://alphafold.ebi.ac.uk/)
9. **Crystallographic Phase Problem Solution via AlphaFold:** Terwilliger, T. C. et al. "AlphaFold predictions for macromolecular crystallography." *Acta Crystallogr D Struct Biol* 79, 140–147 (2023). [PubMed: 36735235](https://pubmed.ncbi.nlm.nih.gov/36735235/)
10. **De Novo Protein Design (RFdiffusion):** Watson, J. L. et al. "De novo design of protein structure and function with RFdiffusion." *Nature* 620, 1089–1100 (2023). [DOI: 10.1038/s41586-023-06415-8](https://doi.org/10.1038/s41586-023-06415-8)
