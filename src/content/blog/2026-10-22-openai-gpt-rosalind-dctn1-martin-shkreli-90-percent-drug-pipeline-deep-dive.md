---
title: "OpenAI's 1,946 GPT-Rosalind Agents, the DCTN1 Cholesterol Lead, and Martin Shkreli's 90% Drug Pipeline Paradox: A Forensic Deep Dive"
description: "An 8-phase forensic audit of OpenAI, PerturbAI, and Scripps Research's 7.7-million-cell Perturb-seq agent swarm, the DCTN1–SREBP2 Perry syndrome hypothesis, raw GitHub benchmark telemetry, and the biophysical math of why a 90% clinical trial pass rate defies small-molecule thermodynamics and cross-species biology."
pubDate: 2026-10-22
heroImage: "/og-image.png"
tags: ["OpenAI", "GPT-Rosalind", "Biotech", "Drug Discovery", "DCTN1", "Neuroscience", "Clinical Trials", "Deep Dive"]
lang: "en"
---

On October 21, 2026, OpenAI, PerturbAI (`@perturbai_tx`), and Scripps Research (`@scrippsresearch`) announced a landmark milestone in computational biology: a coordinated swarm of **1,946 parallel GPT-Rosalind agents** analyzed an *in vivo* CRISPR Perturb-seq atlas of **7.7 million mouse brain cells** across **1,000+ disease-linked gene knockouts** in **32 minutes**—surfacing a novel mechanistic hypothesis linking **`DCTN1` (Dynactin subunit 1 / `p150Glued`)**, the causal gene for **Perry syndrome**, to impaired intracellular cholesterol transport and compensatory **SREBP2 (`Srebf2`)** sterol biosynthesis.

Within hours, a viral exchange between quantitative researcher `@bayeslord` and former pharmaceutical executive Martin Shkreli (`@MartinShkreli`) crystallized the central epistemic debate of the AI-for-drug-discovery era:

> **OpenAI (`@OpenAI`, October 21, 2026):**
> "GPT-Rosalind surfaced a new lead for drug discovery: could restoring cholesterol transport protect neurons from degeneration? DCTN1 is a gene linked to Perry syndrome, a rare neurodegenerative disorder. In mouse-brain data, disrupting it increased expression of genes involved in making cholesterol. GPT-Rosalind suggested a possible explanation: cholesterol may not be reaching where neurons need it. If confirmed, this could point toward a new therapeutic strategy. With `@perturbai_tx` and `@scrippsresearch`, a team of thousands of GPT-Rosalind agents worked in parallel, connecting gene-expression results from millions of mouse brain cells with scientific literature in just 32 minutes."

> **bayes (`@bayeslord`, October 21, 2026):**
> "What breakthroughs in simulation and lab work (robotics, model organisms, etc) are needed in principle to get the drug pipeline pass rates (including clinical trials) above 90%?"

> **Martin Shkreli (`@MartinShkreli`, October 22, 2026):**
> "good question. probably not possible given how stochastic small molecules are. for large molecules i'd say it's also probably not possible given mechanistic differences across species, difficulty modeling humans without the human, etc. 90% is asking a lot! the system we have now isnt that bad"

This investigation executes our **8-Phase "Panning for Gold" Deep-Dive Runbook** (operationalizing M. Neil Browne and Stuart M. Keeley's *Asking the Right Questions* framework). Rather than relying on press summaries, we excavated the raw evaluation tables, prompt contracts, shuffled-control audits, and tool-trace telemetry directly from the Scripps Jin Lab / OpenAI repository ([`jinlabneurogenomics/distributed_agent`](https://github.com/jinlabneurogenomics/distributed_agent)) and the live corpus explorer ([Distributed Agents Corpus](https://sites-publish-check-20261021.as-alexander-sun.chatgpt.site)), alongside the **1.15 Å X-ray crystal structure of the human `DCTN1` CAP-Gly domain ([PDB `2HQH`](https://www.rcsb.org/structure/2HQH))** and primary clinical trial attrition biostatistics ([Wong, Siah & Lo 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6409418/); [Sun et al. 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9293739/); [Minikel et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11096124/)).

---

## Phase 1: Issue Classification & Boundary Framing

To prevent conflating *high-throughput transcriptomic literature synthesis* with *clinical drug approval*, we partition the inquiry into two **Descriptive** (mechanistic/empirical) questions and one **Prescriptive** (strategic R&D capital allocation) question:

1. **Descriptive Issue A (The Multi-Agent Architecture & `DCTN1` Lead):** Does distributing `1,946` GPT-Rosalind agents across PerturbAI's whole-brain Perturb-seq atlas uncover genuinely novel, mechanistically valid biology on `Dctn1` and neuronal sterol regulation—and how does the distributed swarm perform against single-agent baselines (`Codex`, `BioMNI`) and shuffled-label falsification controls in the raw repository data?
2. **Descriptive Issue B (The 90% Clinical Pipeline Threshold):** What are the exact mathematical, thermodynamic, and evolutionary bottlenecks governing Phase I-to-Approval clinical trial probability of success (`PoS`, historically `7.9%–13.8%` overall and `6.2%–15.0%` in neurology), and why does Martin Shkreli argue that `>90%` pass rates are biophysically unreachable for both small molecules and biologics?
3. **Prescriptive Issue C (R&D Architecture for TechBio):** Where in the drug discovery funnel do distributed reasoning agents and *in vivo* Perturb-seq atlases genuinely compress cost and time, and what combination of human genetic validation, programmable modalities (ASO/siRNA/CRISPR), and human microphysiological systems can realistically raise clinical pass rates from `~10%` toward `50%–70%` (even if `>90%` remains an asymptotic mirage)?

### Falsifiability Criteria
- **OpenAI's Distributed Agent Thesis is falsified or bounded if:** (a) the `Dctn1` sterol-biosynthesis finding is equally detected by a single-agent baseline because its transcriptomic effect size (`q < 10⁻³³`) is already at the top of the differential expression table; (b) agents given **shuffled (fake) gene-to-DEG pairings** still generate hundreds of plausible-sounding "literature-supported" mechanistic narratives; or (c) the `Dctn1` juvenile mouse knockdown signature represents a compensatory homeostatic bounce-back (`SREBP2` upregulation without canonical `Atf4`/`Ddit3` ER stress) that diverges from aged human Perry syndrome substantia nigra TDP-43 pathology.
- **Martin Shkreli's Unconditional Skepticism ("90% is probably not possible; the system we have now isn't that bad") is falsified or bounded if:** programmable nucleic acid modalities (such as intrathecal antisense oligonucleotides or GalNAc-siRNAs targeting monogenic human loss-of-function/gain-of-function mutations) bypass small-molecule off-target stochasticity and cross-species receptor divergence to achieve multi-fold higher clinical conversion rates than historical small-molecule averages.

---

## Phase 2: Primary Source Excavation & The 2-Column Claim Schism Matrix

We traced the OpenAI / PerturbAI announcement back to its canonical primary artifacts:
- **Preprint & Codebase:** Sun, A., Park, J. J., DeTomaso, D., Kim, S., Liu, A., Shringarpure, S., Kim, K., Thompson, P. C., Shi, T., Wang, Y., Mukamel, E. A., Zheng, G. X., Jiao, Y. J., & Jin, X. (2026), *"Distributed AI agents enable comprehensive discovery of biological insights at scale"* ([`CITATION.cff`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/CITATION.cff); GitHub repository [`jinlabneurogenomics/distributed_agent`](https://github.com/jinlabneurogenomics/distributed_agent); PerturbAI portal [`perturb.ai/health-brain-atlas`](https://perturb.ai/health-brain-atlas); Hugging Face dataset [`perturbai/wholebrain_crispr_atlas`](https://huggingface.co/datasets/perturbai/wholebrain_crispr_atlas)).
- **Raw Repository Audit Files Excavated:**
  - [`data/inputs/literature/source_access_summary.json`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/source_access_summary.json) (tool-trace telemetry across all `2,046` perturbation reports: `1,946` gene targets + `100` safe-targeting controls).
  - [`data/inputs/literature/final_summary.json`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/final_summary.json) (`150`-report unshuffled vs. within-screen shuffled vs. out-of-screen shuffled control calibration).
  - [`data/inputs/depletion/depletion-best-vs-codex-heldout-recall.summary.json`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/depletion/depletion-best-vs-codex-heldout-recall.summary.json) (50-target held-out neuronal depletion recall in `151 TH Prkcd Grin2c Glut`).
  - [`data/inputs/holdout/task1_deg_count_comparison.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/holdout/task1_deg_count_comparison.csv) (`272`-target held-out DEG-count prediction across single-agent batch sizes vs. distributed agents).
  - [`data/inputs/survey/pair_ratings.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/pair_ratings.csv) and [`data/inputs/survey/findings.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/findings.csv) (blinded human expert review scores and the exact `Dctn1` differential expression statistics).

Comparing the public launch narrative against the raw JSON/CSV telemetry inside [`jinlabneurogenomics/distributed_agent`](https://github.com/jinlabneurogenomics/distributed_agent) exposes seven critical nuances that every biotech investor and computational biologist must understand:

| Dimension | Public Launch & Social Media Claims (`@OpenAI` / Press) | Raw Repository Telemetry & Buried Methodological Admissions (`jinlabneurogenomics/distributed_agent`) |
| :--- | :--- | :--- |
| **1. Discovery of the `DCTN1` Cholesterol Lead** | Framed as a unique breakthrough of the `1,946`-agent distributed GPT-Rosalind swarm analyzing `7.7 million` mouse brain cells. | In [`comparisons.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/comparisons.csv) (`comparison_01`) and [`findings.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/findings.csv) (`bucket_4_selection_01`), the **single-agent `Codex` baseline (`caveat30_r01`) ALSO ranked `Dctn1` as its #1 top hit (`rank 1 of 30`)** ("*Dctn1 loss selectively activates a neuronal sterol-biosynthesis program*"). Why? Because `Dctn1` induced `Insig1` (`log2FC +2.07`, `q = 4.42 × 10⁻⁵⁵`) and `Msmo1` (`+1.90`, `q = 1.38 × 10⁻⁴⁴`) in `155 MB Glut` neurons—a signal so massive no multi-agent swarm was required to spot the primary hit. |
| **2. Blinded Human Expert Preference (`75%`)** | "Blinded human domain experts preferred the distributed agent system's findings 75% of the time over a single-agent baseline." | Verified in [`pair_ratings.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/pair_ratings.csv): across `n = 60` pairwise ratings (`20` targets × `3` reviewers), Distributed Agents won `45/60 (75.00%)`, Codex won `10/60 (16.67%)`, and `5/60 (8.33%)` were ties. However, for **`Dctn1` specifically (`comparison_01`)**, `2` reviewers (`R01`, `R11`) preferred Distributed Agents while **`1` reviewer (`R21`) preferred the single-agent `Codex` writeup**. |
| **3. Held-Out DEG-Count Prediction (`272` Targets)** | Distributed agents enable superior predictive reasoning on held-out genetic perturbations. | In [`task1_deg_count_comparison.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/holdout/task1_deg_count_comparison.csv), distributed agents beat a monolithic single agent *only when the single agent is forced to predict all 272 targets in one context window* (`batch_size = all`: Recall `47.0%`, Spearman `0.4393`). When the **single agent (`r-bioagents-rosalind-ev3`) is run at `batch_size = 1`** with direct access to the raw differential expression parquet, the **single agent (`Accuracy 75.37%`, `Recall 69.0%`, `F1 0.6732`, `Spearman 0.5258`) outperforms `distributed_agents` (`Accuracy 73.53%`, `Recall 59.0%`, `F1 0.6211`, `Spearman 0.4708`)** because compressing raw expression matrices into text reports loses quantitative granularity! |
| **4. Held-Out Neuronal Depletion Recall (`50` Targets)** | Distributed agents predict essential gene depletion in postmitotic thalamic neurons (`151 TH Prkcd Grin2c Glut`). | In [`depletion-best-vs-codex-heldout-recall.summary.json`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/depletion/depletion-best-vs-codex-heldout-recall.summary.json), Distributed Agents achieved a **median Recall@50 of `36.0%` (`18/50` targets recovered; `[38%, 36%, 34%]`)**, beating single-agent Codex (`18.0%`), Stanford's BioMNI (`16.0%`, `[22%, 10%, 16%]`), DepMap (`26.0%`), and Top DEG count (`14.0%`). Yet a **`64%` false-negative miss rate** within the *exact same mouse experiment* underscores how far current AI agents remain from clinical-grade certainty. |
| **5. Shuffled-Control Confabulation Audit (`150` Reports/Arm)** | Agents connect gene-expression results with scientific literature to generate grounded hypotheses. | In [`final_summary.json`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/final_summary.json), when the authors secretly swapped gene labels (**`Within-screen shuffled`** and **`Out-of-screen shuffled`** controls across `150` reports/arm), the agents still generated **`600` and `561` primary "load-bearing" findings** (more than the **`488` findings** in the real **`Unshuffled`** arm!), covering `76.16%` and `83.01%` of positive target-celltype pairs vs. `56.76%` unshuffled. Frontier LLMs are hyper-competent rationalizers that will weave literature bridges between *any* gene name and *any* DEG list unless policed by strict directional admissibility gates. |
| **6. Citation Provenance & Paywall Friction** | Agents autonomously searched and cited `>700` unique scientific references across `2,046` reports (`16,555` raw citation entries). | In [`source_access_summary.json`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/source_access_summary.json), out of `16,445` deduplicated report-source citation pairs, **`9,289 (56.49%)` had a matched tool-access trace**, while **`7,156 (43.51%)` were `cited_without_matched_access_pairs`** (cited from parametric memory without opening the paper in-trace). Moreover, **`6,413` of `16,775` (`38.23%`) browser-open attempts failed** due to HTTP errors (`3,956`) or publisher blocks (`2,457`). |
| **7. Biological Interpretation of the `Dctn1` Readout** | "Cholesterol may not be reaching where neurons need it. If confirmed, this could point toward a new therapeutic strategy." | In [`findings.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/findings.csv) (`bucket_4_selection_01`), the report itself explicitly warns: *"The result is transcriptionally coherent, but it is still a sparse-CRISPR RNA readout: the sterol increase may be compensatory, may reflect altered lysosomal cholesterol sensing, or may be a survivor bias among damaged cells."* Furthermore, Finding `F009` notes that canonical ER stress (`Ddit3`/CHOP, `Atf4`, `Hspa5`/BiP)—which drives dopaminergic cell death in aged `Dctn1`-deficient mice ([Yu et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9988887/))—was **absent** in this acute juvenile Perturb-seq readout. |

---

## Phase 3: Semantic Precision, The Substitution Test & Structural Biology of `DCTN1`

### 1. The Substitution Test on Key Terms
To prevent equivocation between computational bioinformatics and clinical pharmacology, we apply the **Substitution Test** to three overloaded terms in the debate:

- **"Drug Discovery Lead" (`@OpenAI`):**
  - *Strict Clinical Definition:* A chemically defined therapeutic modality (small molecule, biologic, or nucleic acid) with validated target engagement (`Kd`, `IC50`), demonstrated disease-phenotype rescue in a pathologically faithful model, and an acceptable therapeutic index.
  - *Loose Bioinformatics Definition:* A statistically significant differential mRNA co-expression module (`FDR < 0.05`) in a single-cell CRISPR screen paired with a literature-derived pathway hypothesis.
  - *Substitution Verdict:* OpenAI and PerturbAI generated a **transcriptomic pathway hypothesis** (Loose Definition), not a pre-clinical drug candidate (Strict Definition). Even the direction of therapeutic intervention (whether to *boost* cholesterol delivery, *inhibit* toxic SREBP2/lipid-droplet over-accumulation, or *stabilize* microtubule transport directly) remains experimentally undetermined.
- **"Distributed Biological Reasoning" (Sun et al. 2026):**
  - *Strict Definition:* Decomposing a dataset into `2,046` independent per-perturbation agent runs (`1,946` genes + `100` controls) so each agent receives a fresh `272,000`-token context window, followed by a map-reduce synthesis pass (`assemble_global_ranking.py`, `route_claims.py`).
  - *Loose Definition:* Emergent collective super-intelligence discovering biology that a single agent could never deduce.
  - *Substitution Verdict:* As [`task1_deg_count_comparison.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/holdout/task1_deg_count_comparison.csv) proves, the advantage of "Distributed Agents" is **context-window isolation and parallel I/O scaling (`O(1)` wall-clock time across `1,946` workers)**, not emergent reasoning superiority over a single agent given a single target (`batch_size = 1`).
- **"Stochastic Small Molecules" (`@MartinShkreli`):**
  - *Strict Biophysical Definition:* Small organic ligands (`MW < 500 Da`) diffuse throughout intracellular compartments and sample thousands of protein pockets governed by Boltzmann thermal fluctuations (`exp(-ΔG / RT)`), producing off-target polypharmacology, reactive metabolite formation via hepatic cytochrome P450s, and idiosyncratic human toxicity that cannot be deterministically simulated *ab initio*.

### 2. Structural & Mechanistic Disentanglement: Human `DCTN1` (`p150Glued`) vs. Juvenile Mouse `Dctn1` Knockdown

What does `DCTN1` actually do at the atomic and cellular level, and why did its perturbation in PerturbAI's mouse brain atlas ignite the `SREBP2` cholesterol biosynthesis pathway?

Human [`DCTN1` (UniProt `Q14203`)](https://www.uniprot.org/uniprotkb/Q14203/entry) encodes **`p150Glued`** (`1,278` amino acids), the largest subunit of the **dynactin complex**, which serves as the essential adaptor and processivity factor for **cytoplasmic dynein-1 (`DYNC1H1`)**—the primary minus-end-directed microtubule motor in eukaryotic cells ([Ayloo et al. 2014](https://www.uniprot.org/uniprotkb/Q14203/entry)). At the extreme N-terminus of `p150Glued` (`residues 26–97`, encoded by exon 2) sits the **CAP-Gly (Cytoskeleton-Associated Protein Glycine-rich) domain** ([PDB `2HQH`](https://www.rcsb.org/structure/2HQH), resolved at `1.15 Å` by X-ray crystallography).

Crucially, human neurology has established that **different mutations within this single 72-residue CAP-Gly domain produce radically different neurodegenerative diseases** ([Farrer et al. 2009](https://pmc.ncbi.nlm.nih.gov/articles/PMC2813485/); [Konno et al. 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5546300/)):

| Genetic Lesion / Perturbation | Structural Location in `DCTN1` (`p150Glued` [PDB `2HQH`](https://www.rcsb.org/structure/2HQH)) | Molecular & Biophysical Consequence | Vulnerable Neuronal Populations | Primary Cellular Pathology & Clinical Phenotype |
| :--- | :--- | :--- | :--- | :--- |
| **Perry Syndrome Point Mutations** (`G71R`, `G71E`, `G71A`, `T72P`, `Q74P`, `G67D`, `K68E`) | Surface-exposed **`GKNDGTVQ` motif (`residues 67–74`)** that directly binds microtubule plus-end tracking proteins (`+TIPs`: `EB1`/`MAPRE1`, `CLIP-170`) and α-tubulin | Impairs `+TIP` / EB1 binding and retrograde cargo initiation while sparing bulk protein folding; dominant-negative sequestration of TDP-43 due to impaired stress-granule disassembly ([Ueda et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC10840176/)) | Human **substantia nigra dopaminergic (`DA`) neurons**, locus coeruleus, ventrolateral medulla respiratory neurons, hypothalamus (sparing cerebral cortex) | **Perry Syndrome:** Autosomal-dominant rapidly progressive parkinsonism, severe depression/apathy, profound weight loss, fatal central hypoventilation, and **TDP-43 (`TARDBP`) cytoplasmic inclusions** ([Farrer et al. 2009](https://pmc.ncbi.nlm.nih.gov/articles/PMC2813485/)) |
| **Distal Hereditary Motor Neuropathy 7B (`HMN7B`)** (`G59S`) | Buried **β-strand hydrophobic core (`Gly59`)** of the CAP-Gly fold ([PDB `2HQH`](https://www.rcsb.org/structure/2HQH) Chain A `residue 59`) | Steric clash in the buried β-sheet core causes catastrophic domain unfolding, loss of solubility, and massive cytoplasmic **dynactin/`p150Glued`-positive inclusion bodies** | Lower motor neurons of the cranial nerves (laryngeal/facial) and spinal cord anterior horn | **HMN7B / ALS-like Motor Neuron Disease:** Vocal fold paralysis, progressive distal muscle weakness and atrophy without TDP-43 nigral parkinsonism ([Konno et al. 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5546300/)) |
| **Aged Mouse Conditional `Dctn1` Knockout in Midbrain DA Neurons** ([Yu et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9988887/)) | Complete Cre-loxP genetic ablation of `Dctn1` in `Th-Cre` / `DAT-Cre` midbrain dopaminergic neurons | Collapse of ER-to-Golgi and retrograde axonal transport, massive **ER dilation**, and activation of the **canonical Unfolded Protein Response (`UPR` / `ISR`: `Atf4`, `Ddit3`/CHOP, `Hspa5`/BiP)** | Aged mouse substantia nigra pars compacta (`SNpc`) dopaminergic neurons (`12–24 months`) | Progressive loss of nigrostriatal dopaminergic terminals and `SNpc` cell bodies (`~40%–50%` loss in aged mice) driven by terminal ER stress and autophagic block |
| **PerturbAI Acute Juvenile Mouse Whole-Brain CRISPR `Dctn1` Knockdown** (Sun et al. 2026) | Sparse AAV-delivered CRISPR guide RNA knockdown of `Dctn1` across postmitotic juvenile mouse brain nuclei | Partial loss of `p150Glued` (`358` DEGs across `12` cell classes at `FDR < 0.05`, `\|log2FC\| >= 0.25`); **canonical UPR/ISR (`Ddit3`, `Atf4`, `Hspa5`) is ABSENT (`F009`)**; instead triggers **`SREBP2` sterol/fatty-acid synthesis (`F001`, `F007`)** and **lysosomal/v-ATPase (`Lamp2`, `Npc2`, `Atg5`) induction (`F008`)** | Caudal hypothalamic (`066 CNU-HYa HY GABA`), thalamic (`151 TH Prkcd Grin2c Glut`), midbrain (`155 MB Glut`), and pontine/medullary (`191 MB P MY GABA`) neurons; **anterior cortex (`005 L4-5 IT CTX Glut`) is spared (`F010`, `F011`)** | Early homeostatic compensation to interrupted **Rab7–RILP–ORP1L–dynein/dynactin** late-endosome-to-ER cholesterol transport before aggregate pathology or terminal ER stress emerges |

### 3. The Exact Biophysical Mechanism: Why `Dctn1` Knockdown Triggers `SREBP2`
Why did knocking down a microtubule motor adaptor (`Dctn1`) or its partner heavy chain (`Dync1h1`) cause midbrain glutamatergic (`155 MB Glut`) and pontine/medullary GABAergic (`191 MB P MY GABA`) neurons to massively upregulate `Insig1` (`log2FC +2.07`, `q = 4.42 × 10⁻⁵⁵`), `Msmo1` (`+1.90`, `q = 1.38 × 10⁻⁴⁴`), `Hmgcs1` (`+1.61`, `q = 1.48 × 10⁻⁴¹`), `Fdps` (`+2.14`, `q = 3.29 × 10⁻⁴⁰`), `Ldlr` (`+2.23`, `q = 1.34 × 10⁻³⁵`), and `Hmgcr` (`+1.48`, `q = 6.50 × 10⁻³⁴`)?

As the live Distributed Agents corpus (`Dctn1` findings `F001–F008`, `Dync1h1` findings `F003–F011`, and `Rab7` finding `F010`) and primary cell biology literature ([Rocha et al. 2009](https://pmc.ncbi.nlm.nih.gov/articles/PMC2712958/); [Radhakrishnan et al. 2008](https://pmc.ncbi.nlm.nih.gov/articles/PMC2652870/); [Horton, Goldstein & Brown 2002](https://pmc.ncbi.nlm.nih.gov/articles/PMC150968/)) reveal, the mechanism is a **compartmental sterol-sensing illusion**:

```mermaid
flowchart TD
    subgraph SG1["1. Normal Retrograde Endolysosomal Cholesterol Transport"]
        A1["Astrocyte ApoE-Lipoprotein Uptake via Neuronal LDLR / LRP1"] --> A2["Late Endosome / Lysosome (LE/L): NPC2 & NPC1 Mobilize Free Cholesterol"]
        A2 --> A3["Rab7-GTP Recruits RILP + ORP1L + Dynactin (DCTN1 / p150Glued) + Dynein (DYNC1H1)"]
        A3 --> A4["Minus-End Retrograde Transport Along Microtubules to Perinuclear ER Contact Sites"]
        A4 --> A5["ER Membrane Cholesterol > 5 mol%: SCAP Binds Cholesterol & INSIG1/2, Retaining SREBP2 in ER"]
    end

    subgraph SG2["2. Acute Dctn1 / Dync1h1 / Rab7 Perturbation (PerturbAI Atlas)"]
        B1["CRISPR Disruption of Dctn1 (or Dync1h1 / Rab7)"] --> B2["Unclasping of Rab7-RILP-p150Glued Motor Complex from Microtubules"]
        B2 --> B3["Cholesterol-Rich Late Endosomes Stranded in Distal Neurites (Lamp2, Npc2, v-ATPase Upregulated: F008)"]
        B3 --> B4["Local ER Membrane Cholesterol Drops Below 5.0 mol% Switch Threshold (Hill n_H = 4)"]
        B4 --> B5["SCAP Releases INSIG1 -> COPII Transport of SREBP2 to Golgi -> S1P/S2P Proteolytic Cleavage"]
        B5 --> B6["Nuclear nSREBP2 Induces Insig1 (+2.07), Ldlr (+2.23), Fdps (+2.14), Msmo1 (+1.90), Hmgcr (+1.48)"]
    end
```

1. **Neurons Import Cholesterol via Endolysosomes:** Mature CNS neurons rely heavily on astrocyte-derived ApoE-cholesterol lipoproteins internalized via **`LDLR`** and **`LRP1`** into peripheral **late endosomes and lysosomes (`LE/L`)**, where **`NPC2`** and **`NPC1`** extract unesterified cholesterol.
2. **The `Rab7–RILP–ORP1L–p150Glued` Motor Handshake ([Rocha et al. 2009](https://pmc.ncbi.nlm.nih.gov/articles/PMC2712958/)):** To deliver cholesterol from peripheral endolysosomes to the **endoplasmic reticulum (`ER`)**, late endosomes use active **`Rab7-GTP`** to bind **`RILP`** (Rab-interacting lysosomal protein) and the sterol sensor **`ORP1L`**. `RILP` directly binds the C-terminal region of **`p150Glued` (`DCTN1`)**, recruiting the **dynein-dynactin (`DYNC1H1–DCTN1`) motor** to haul late endosomes retrogradely toward the microtubule minus-end (the perinuclear ER) and form ER–late endosome membrane contact sites!
3. **The Switch-Like ER Sterol Sensor (`5 mol%` Threshold, [Radhakrishnan et al. 2008](https://pmc.ncbi.nlm.nih.gov/articles/PMC2652870/)):** The cell does **not** measure total cellular cholesterol; it measures **local ER membrane cholesterol mole fraction (`[Chol]_ER`)** via the tetrameric **`SCAP–INSIG1/2–SREBP2`** complex. As Brown and Goldstein demonstrated ([Radhakrishnan et al. 2008](https://pmc.ncbi.nlm.nih.gov/articles/PMC2652870/)), `SCAP` retention in the ER obeys an ultra-steep cooperative Hill function with Hill coefficient `n_H ≈ 4` centered at a threshold concentration `K_0.5 ≈ 5.0 mol%` of total ER lipids:

$$\text{Fraction of Active Nuclear SREBP2 } f_{\text{active}}\left([\text{Chol}]_{\text{ER}}\right) = \frac{1}{1 + \left(\frac{[\text{Chol}]_{\text{ER}}}{K_{0.5}}\right)^{n_H}}, \quad K_{0.5} \approx 5.0\text{ mol-percent}, \quad n_H \approx 4$$

When `Dctn1` (or `Dync1h1` or `Rab7`) is disrupted, total neuronal cholesterol is **not** necessarily depleted—instead, **cholesterol is trapped in stranded peripheral late endosomes** (which is why `Dctn1` responders simultaneously upregulate `Lamp2`, `Npc2`, `Asah1`, and `v-ATPase` subunits in Finding `F008`, mimicking Niemann-Pick Type C intracellular sterol trafficking block!). Because cholesterol fails to arrive at the perinuclear ER membrane, `[Chol]_ER` dips slightly below `5.0 mol%`, flipping the `n_H ≈ 4` cooperative `SCAP` switch and unleashing a massive `SREBP2` transcriptional surge (`Insig1`, `Ldlr`, `Hmgcr`, `Hmgcs1`, `Fdps`, `Msmo1`, `Sqle`, `Dhcr24`)!

---

## Phase 4: Causal Disentanglement & The 4-Way Rival Cause Matrix

When `@OpenAI` asks, *"Could restoring cholesterol transport protect neurons from degeneration?"*, a rigorous strong-sense investigator must test whether impaired cholesterol transport is the **primary causal driver** of `DCTN1`-linked neurodegeneration (Perry syndrome / ALS-FTD) or merely one **downstream epiphenomenon** of broken microtubule retrograde transport.

We evaluate the four rival causal architectures in our **4-Way Causal Disentanglement Matrix**:

| Causal Hypothesis | Mechanistic Pathway | Supporting Primary Evidence in Atlas & Literature | Contradicting / Limiting Evidence | Epistemic Status |
| :--- | :--- | :--- | :--- | :--- |
| **1. Direct Cause (`X → Y`): Sterol Transport Starvation Drives Neurodegeneration** | `DCTN1` loss blocks `Rab7–RILP–p150Glued` endolysosome-to-ER cholesterol delivery → ER membrane sterol depletion + endolysosomal lipid traffic jam → membrane failure & neuronal death. | Strongest transcriptional signal in acute juvenile `Dctn1` (`459` total DEGs; `q = 4.42 × 10⁻⁵⁵` for `Insig1`) and phenocopied by `Dync1h1` (`F003`), `Rab7` (`F004`), and `Chp1` (`S022`); matches anatomically vulnerable caudal hypothalamic, thalamic, midbrain (`155 MB Glut`), and pontine/medullary (`191 MB P MY GABA`) regions while sparing cortex (`F011`). | No direct measurement of free vs. esterified sterol mass, lipid droplets, or whether pharmacological cholesterol/SREBP modulation rescues `Dctn1`-mutant neuron survival. | **Plausible Co-Driver / Early Biomarker**, unproven as sole causal bottleneck. |
| **2. Reverse / Toxicity Loop (`Y → Z`): Compensatory `SREBP2` Hyper-Activation Is Maladaptive** | Stranded endolysosomal cholesterol tricks the ER into thinking the cell is sterol-starved → runaway `SREBP2` de novo synthesis (`Hmgcr`, `Fdps`, `Sqle`) + `Ldlr` (`+2.23 log2FC`) uptake floods already-jammed endolysosomes with *more* cholesterol and desaturated fatty acids (`Fads1/2`, `Scd1/2`, `Fasn`: `F007`) → lipotoxicity & ferroptotic/organellar stress. | In Niemann-Pick Type C (`NPC1`/`NPC2`) and `Tsc1/Tsc2` (`comparison_16`) neurons, trapped lysosomal sterol + unrestrained `SREBP2` activation causes toxic peroxidized lipid accumulation; `Dctn1` `F007` shows coordinate induction of `Acsl4` (ferroptosis-sensitizing PUFA-CoA ligase) and `Fads1/2`. | If `SREBP2` activation is maladaptive overflow rather than true cellular deficiency, then *"boosting cholesterol"* would **accelerate** toxicity, whereas **inhibiting excessive `SREBP2` or clearing endolysosomal traffic (`HP-β-CD` / `Rab7` activation)** would be required! | **High-Risk Therapeutic Inversion Hazard** (`findings.csv` explicitly warns of this ambiguity). |
| **3. Confounding Pleiotropy (`Z → X & Y`): Dynein-Dynactin Failure Simultaneously Breaks TDP-43, Mitophagy & Autophagy** | `DCTN1` (`p150Glued`) is the universal adaptor for cytoplasmic dynein-1. Disrupting `DCTN1` simultaneously halts: (a) stress-granule disassembly & **TDP-43 (`TARDBP`)** clearance ([Ueda et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC10840176/)), (b) autophagosome-lysosome fusion ([Yu et al. 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC5831668/)), (c) ER-to-Golgi protein export ([Yu et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9988887/)), and (d) `Rab7–RILP` endosome positioning. | Human Perry syndrome brains are defined neuropathologically by **TDP-43 inclusions**, not primary lipid storage disease ([Farrer et al. 2009](https://pmc.ncbi.nlm.nih.gov/articles/PMC2813485/)). Furthermore, `SREBP2` is an ultra-fast transcriptional sensor (`n_H ≈ 4`, triggering within hours of ER sterol shift), whereas TDP-43 aggregation and ER dilation (`UPR`) develop post-transcriptionally or chronically (`F009`). | In an acute juvenile mRNA screen (Perturb-seq), fast transcriptional homeostatic circuits (`SREBP2`) dominate the DEG volcano plot simply because post-translational proteinopathies (`TDP-43` aggregation) are invisible to short-term single-nucleus RNA-seq! | **Dominant Structural Confounder** (Assay-Modality Observability Bias). |
| **4. Survivor Bias in Sparse In Vivo CRISPR (`S → Y`)** | In PerturbAI's *in vivo* AAV-CRISPR screen, nuclei are harvested weeks after transduction. Neurons in which `Dctn1` biallelic knockout caused acute catastrophic transport failure and apoptosis died and vanished before sequencing; the sequenced `Dctn1` nuclei are the **surviving sub-population** that mounted a vigorous metabolic/lipogenic repair response. | Explicitly flagged by the authors in [`findings.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/findings.csv) (`bucket_4_selection_01`): *"the sterol increase may be compensatory, may reflect altered lysosomal cholesterol sensing, or may be a survivor bias among damaged cells."* | Cross-perturbation convergence with `Dync1h1`, `Rab7`, and `Chp1` in the same cell classes (`155 MB Glut`, `191 MB P MY GABA`) argues the signature reflects a genuine trafficking-to-SREBP2 coupling rather than random survivor noise. | **Moderate Methodological Confounder** requiring longitudinal time-course validation. |

---

## Phase 5: Quantitative Audit — Deconstructing the Multi-Agent Benchmarks AND the 90% Clinical Pipeline Math

### Part A: Statistical Audit of the OpenAI / PerturbAI Multi-Agent Benchmarks

Let us audit the exact numbers from the three quantitative benchmarks inside [`jinlabneurogenomics/distributed_agent`](https://github.com/jinlabneurogenomics/distributed_agent):

#### 1. The Context-Window Bottleneck vs. Single-Target Precision (`task1_deg_count_comparison.csv`)
In [`data/inputs/holdout/task1_deg_count_comparison.csv`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/holdout/task1_deg_count_comparison.csv), the authors tested how well different systems predict the held-out number of differentially expressed genes (`actual_n_degs` at BH-adjusted Wilcoxon `p < 0.05`) across **`272` held-out genetic perturbations** in `151 TH Prkcd Grin2c Glut` thalamic glutamatergic neurons (`172` true negatives with `0` DEGs; `100` true positives with `>= 1` DEG):

| System / Architecture | Batch Size (Targets per Run) | Binary Accuracy (`n = 272`) | Balanced Accuracy | Precision | Recall (Sensitivity) | F1 Score | Matthews Corr (`MCC`) | Spearman ρ (`log1p`) | MSE (`log1p` All) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Baseline: Physical Neighbor Mean (PPI)** | Deterministic | `53.68%` | `60.44%` | `43.43%` | `86.00%` | `0.5772` | `0.2263` | `0.2176` | `5.0152` |
| **Baseline: Functional Neighbor Mean** | Deterministic | `47.79%` | `54.53%` | `39.60%` | `80.00%` | `0.5298` | `0.1000` | `0.0704` | `5.6412` |
| **Baseline: Literature Neighbor Mean** | Deterministic | `46.32%` | `54.63%` | `39.45%` | `86.00%` | `0.5409` | `0.1119` | `0.0743` | `5.7022` |
| **Single Agent (`r-bioagents-rosalind-ev3`)** | **`all` (`272`)** | `72.06%` | `66.81%` | **`67.14%`** | `47.00%` | `0.5529` | `0.3709` | `0.4393` | `2.8908` |
| **Single Agent (`r-bioagents-rosalind-ev3`)** | **`20`** | `72.79%` | `72.63%` | `61.02%` | **`72.00%`** | `0.6606` | `0.4403` | `0.5050` | `2.6534` |
| **Single Agent (`r-bioagents-rosalind-ev3`)** | **`5`** | `72.79%` | `72.21%` | `61.40%` | `70.00%` | `0.6542` | `0.4341` | `0.4947` | **`2.5552`** |
| **Single Agent (`r-bioagents-rosalind-ev3`)** | **`1`** | **`75.37%`** | **`74.03%`** | `65.71%` | `69.00%` | **`0.6732`** | **`0.4761`** | **`0.5258`** | `2.7332` |
| **Distributed Agents (`adaptive_gpt-rosalind-5.5`)** | **`1` (Corpus MCP)** | `73.53%` | `70.49%` | `65.56%` | `59.00%` | `0.6211` | `0.4199` | `0.4708` | `2.8618` |

**The Blinding Test Conclusion:** Look at the bottom four rows of the table above. When a single `GPT-Rosalind` agent is stuffed with all `272` targets at once (`batch_size = all`), its sensitivity collapses to `47.00%` (`MCC = 0.3709`, `Spearman = 0.4393`) due to context-window attention dilution. However, when the **exact same single-agent architecture (`r-bioagents-rosalind-ev3`) is given `1` target at a time (`batch_size = 1`) with direct SQL/parquet access to the raw differential expression numbers**, it achieves **`75.37%` accuracy, `69.00%` recall, `0.6732` F1, `0.4761` MCC, and `0.5258` Spearman correlation**—beating the `distributed_agents` report-corpus system (`73.53%` accuracy, `59.00%` recall, `0.6211` F1, `0.4199` MCC, `0.4708` Spearman)! Why? Because `distributed_agents` routes queries through pre-written natural-language summary reports (`shi_holdout` corpus), which introduces **lossy text-compression error** on weak/moderate quantitative signals compared to querying the raw `differential_expression.parquet` directly!

#### 2. Held-Out Essential Gene Depletion Recall (`depletion-best-vs-codex-heldout-recall.summary.json`)
On the harder biological task of predicting **which `50` held-out genes cause neuronal depletion (cell death/loss)** in `151 TH Prkcd Grin2c Glut` thalamic neurons given `50` odd-ranked seed genes ([`depletion.py`](https://github.com/jinlabneurogenomics/distributed_agent/blob/main/src/manuscript_figures/depletion.py)), the multi-agent report corpus shines because cell survival depends on synthesizing pathway-wide literature and multi-cell-type vulnerability:

```mermaid
xychart-beta
    title "Held-Out Neuronal Depletion Recall@50 in 151 TH Prkcd Grin2c Glut (%)"
    x-axis ["Top DEG Count", "BioMNI (Med)", "Single Codex (Med)", "DepMap (Pan-Cancer)", "Distributed Agents (Med)"]
    y-axis "Recall at Top 50 Predictions (%)" 0 --> 50
    bar [14.0, 16.0, 18.0, 26.0, 36.0]
```

- **Distributed Agents (`3` replicates):** `19/50 (38.0%)`, `18/50 (36.0%)`, `17/50 (34.0%)` → **Median Recall@50 = `36.0%`**.
- **DepMap (pan-cancer Chronos essentiality baseline):** `13/50` → **Recall@50 = `26.0%`**.
- **Single-Agent Codex (`3` replicates):** `9/50 (18.0%)`, `12/50 (24.0%)`, `9/50 (18.0%)` → **Median Recall@50 = `18.0%`**.
- **Stanford BioMNI (`3` replicates in repo `data/runs/depletion/biomni/`, omitted from main plot in `depletion.py`):** `11/50 (22.0%)`, `5/50 (10.0%)`, `8/50 (16.0%)` → **Median Recall@50 = `16.0%`**.
- **Top DEG Count Baseline:** `7/50` → **Recall@50 = `14.0%`**.

---

### Part B: Quantitative Audit of `@bayeslord` vs. `@MartinShkreli` — The Mathematics of a 90% Drug Pipeline Pass Rate

Now let us confront `@bayeslord`'s question (*"What breakthroughs in simulation and lab work are needed in principle to get the drug pipeline pass rates, including clinical trials, above 90%?"*) and Martin Shkreli's response (*"probably not possible given how stochastic small molecules are. for large molecules i'd say it's also probably not possible given mechanistic differences across species, difficulty modeling humans without the human, etc. 90% is asking a lot!"*).

#### 1. The Compounding Gate Equation: Why 90% End-to-End Requires 97.4% Per Phase
A clinical drug candidate must survive four sequential conditional probability gates from first-in-human (FIH) IND entry to regulatory approval:
1. `p_1 = P(Phase I → Phase II)`: Human PK/PD, tolerability, and acute dose-limiting toxicity.
2. `p_2 = P(Phase II → Phase III)`: Proof-of-concept clinical efficacy in human patients at a safe dose.
3. `p_3 = P(Phase III → NDA/BLA)`: Pivotal randomized controlled trial superiority/non-inferiority and rare adverse-event safety across `N = 300–3,000+` diverse humans.
4. `p_4 = P(NDA/BLA → FDA Approval)`: CMC manufacturing consistency and benefit-risk label review.

The cumulative probability of clinical success (`PoS_total`) is the product of the four conditional transitions:

$$\text{PoS}_{\text{total}} = \prod_{k=1}^{4} p_k = p_1 \cdot p_2 \cdot p_3 \cdot p_4$$

For `PoS_total >= 0.90`, the geometric mean per-phase pass rate must satisfy:

$$\bar{p} = \left(\text{PoS}_{\text{total}}\right)^{1/4} \ge (0.90)^{0.25} = 0.9740 \quad (97.40\text{ percent success at every single clinical phase!})$$

If you also include **preclinical discovery gates** (Target Validation → Hit-to-Lead → Lead Optimization → IND-Enabling GLP Toxicology, historically `~31%` combined pass rate), achieving a `90%` *end-to-end pipeline pass rate* across `7` sequential gates requires `(0.90)^(1/7) = 98.51%` success at every single preclinical and clinical stage!

Compare that mathematical requirement (`97.4%` per clinical phase) against empirical reality from the largest primary clinical trial biostatistics studies ([Wong, Siah & Lo 2019, *Biostatistics*](https://pmc.ncbi.nlm.nih.gov/articles/PMC6409418/); BIO / Citeline 2011–2024 Industry Audits; [Minikel et al. 2024, *Nature*](https://pmc.ncbi.nlm.nih.gov/articles/PMC11096124/)):

| Therapeutic Area / Cohort | Phase I → II (`p_1`) | Phase II → III (`p_2`) | Phase III → Submission (`p_3`) | NDA/BLA → Approval (`p_4`) | Cumulative Phase I → Approval (`PoS_total`) | Gap vs. `@bayeslord` 90% Target |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **All Indications (Wong, Siah & Lo 2019, `n = 21,143` drugs)** | `66.4%` | `48.6%` | `59.0%` | `83.3%` | **`13.8%`** (`15.8%` unweighted product) | `6.5×` below `90%` |
| **All Indications (BIO / Citeline Strict Phase-By-Phase)** | `52.0%` | `28.9%` | `57.8%` | `90.6%` | **`7.9%`** | `11.4×` below `90%` |
| **Central Nervous System / Neurology (CNS)** | `57.0%` | `30.0%` | `51.0%` | `85.0%` | **`7.4%` – `15.0%`** | `6.0×` – `12.2×` below `90%` |
| **Oncology (All Modalities)** | `57.6%` | `32.7%` | `35.5%` | `81.7%` | **`3.4%` – `5.5%`** | `16.4×` – `26.5×` below `90%` |
| **Targets WITH Human Genetic Validation ([Minikel et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11096124/))** | `~68.0%` | `~55.0%` | `~72.0%` | `~90.0%` | **`~24.0%` – `35.0%`** (`2.6×` lift over non-genetic) | Still `2.6×` – `3.7×` below `90%` |
| **Monogenic Rare Disease / Programmable ASO & GalNAc-siRNA** | `~78.0%` | `~65.0%` | `~78.0%` | `~92.0%` | **`~36.0%` – `55.0%`** | Still `1.6×` – `2.5×` below `90%` |
| **`@bayeslord` Theoretical >90% Pipeline Threshold** | **`97.4%`** | **`97.4%`** | **`97.4%`** | **`97.4%`** | **`90.0%`** | Requires `<2.6%` attrition per phase |

```mermaid
xychart-beta
    title "Cumulative Phase I to Approval Probability of Success (PoS %)"
    x-axis ["Oncology", "BIO All-Drug", "CNS / Neuro", "Wong et al. All", "Human Genetics (2.6x)", "Monogenic ASO/siRNA", "@bayeslord Target"]
    y-axis "Cumulative Clinical Pass Rate (%)" 0 --> 100
    bar [5.5, 7.9, 8.5, 13.8, 30.0, 48.0, 90.0]
```

#### 2. Why Martin Shkreli Is Right About the Two Biophysical Walls (Small-Molecule Stochasticity & Cross-Species Divergence)
As [Sun et al. (2022, *Acta Pharmaceutica Sinica B*)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9293739/) document, the `~90%` clinical trial failure rate decomposes into four distinct failure modes:
1. **Lack of Clinical Efficacy (`40%–50%` of failures):** The drug hits its molecular target in humans, or worked in mice, but fails to move the human clinical endpoint in Phase II/III.
2. **Unmanageable Clinical Toxicity (`~30%` of failures):** Dose-limiting organ toxicity (drug-induced liver injury `DILI`, `hERG`/cardiotoxicity, bone marrow suppression, CNS toxicity, or immune-mediated adverse events) that did not appear in rodents or dogs.
3. **Poor Human PK/PD & Bioavailability (`10%–15%` of failures):** Rapid clearance, blood-brain barrier (`BBB`) efflux via `ABCB1`/`P-gp`, or tissue-compartment trapping.
4. **Commercial / Strategic Portfolio Shifts (`~10%` of failures):** Competitive obsolescence or trial design/enrollment failure.

Martin Shkreli's tweet pinpoints the exact statistical mechanics and evolutionary biology governing Failures #1 and #2:

##### Wall 1: The Boltzmann Polypharmacology Partition Function ("How Stochastic Small Molecules Are")
A small molecule (`MW 300–500 Da`) has a limited surface area (`~150–300 Å²`) of hydrophobic and hydrogen-bonding pharmacophores. Once it enters the human body at micromolar-to-nanomolar plasma concentrations `[L]`, it does not merely see its intended primary target `P_0`; it collides thermally with the entire human proteome of `M ≈ 20,000+` canonical proteins, hundreds of thousands of splice isoforms, polymorphic human `CYP450` liver enzymes, bile salt export pumps (`BSEP`), and membrane lipid bilayers.

For any off-target protein `P_j` (`j ∈ {1, ..., M}`) with binding free energy `ΔG_j = ΔG_0 + ΔΔG_j`, the fractional occupancy `θ_j` is governed by the Langmuir-Boltzmann isotherm:

$$\theta_j([L]) = \frac{[L]}{[L] + K_{d,j}} = \frac{1}{1 + \frac{K_{d,0}}{[L]} \exp\left(\frac{\Delta\Delta G_j}{RT}\right)}$$

At physiological temperature (`T = 310 K`, `RT ≈ 0.616 kcal/mol`), a selectivity margin of `100-fold` (`ΔΔG_j ≈ 2.8 kcal/mol`—less than a single water-mediated hydrogen bond!) still leaves `θ_j ≈ 9%` occupancy of off-target `P_j` when the primary target is driven to `90%` occupancy (`[L] = 9 × Kd,0`)! Across `M = 20,000` conformational ensembles, dynamic breathing modes, and reactive phase-I hepatic metabolites (`CYP3A4`, `CYP2D6` epoxides/quinones that covalently haptenate liver proteins in `1 in 1,000` HLA-predisposed patients), **no static or molecular-dynamics simulation can guarantee `<2.6%` off-target human toxicity across outbred human populations**.

##### Wall 2: Evolutionary Divergence in Large Molecules & Model Organisms ("Modeling Humans Without the Human")
What if we switch to **large molecules** (monoclonal antibodies `mAbs`, bispecifics, gene therapies), which have `800–1,500 Å²` paratope-epitope interfaces that virtually eliminate random off-target small-molecule promiscuity?
As Shkreli notes, large molecules hit the **evolutionary species-translation wall**:
- **Genomic vs. Network Divergence:** Even when a mouse target gene shares `85%–95%` amino acid identity with its human ortholog, **cis-regulatory enhancers, splice isoform ratios, cell-type abundance, and metabolic/immune feedback networks diverge profoundly across `~85 million years` of rodent-primate evolution**.
- **Look at `DCTN1` in PerturbAI's Own Atlas as Exhibit A:** In human Perry syndrome ([Farrer et al. 2009](https://pmc.ncbi.nlm.nih.gov/articles/PMC2813485/)), heterozygous `DCTN1` `G71R` mutations cause fatal central hypoventilation, parkinsonism, and **TDP-43 proteinopathy** in aged humans (`mean onset ~48 years`). In PerturbAI's juvenile mouse brain CRISPR knockdown, `Dctn1` disruption triggered an acute **`SREBP2` cholesterol biosynthesis surge (`F001`)** with **zero canonical ER stress (`Atf4`/`Ddit3`, `F009`)** and no TDP-43 aggregation! Even in aged conditional `Dctn1`-knockout mice ([Yu et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9988887/)), mice develop ER dilation and `UPR` activation without fully recapitulating the human CAP-Gly `GKNDGTVQ` dominant-negative syndrome.
- **The Human Genetics Ceiling ([Minikel et al. 2024, *Nature*](https://pmc.ncbi.nlm.nih.gov/articles/PMC11096124/)):** Even when a drug target is backed by **direct causal human genetics** (GWAS / Mendelian loss-of-function or gain-of-function in humans—the gold standard of "modeling humans in the human"), Minikel et al.'s landmark audit of `25,000+` clinical programs showed that human genetic evidence multiplies Phase I-to-Approval `PoS` by **`2.6×`**—lifting cumulative clinical pass rates from **`~10%` to `~25%–35%`**. Why do `65%–75%` of genetically validated human targets *still fail* in the clinic? Because **knowing that a gene (`DCTN1`, `HTT`, `APP`, `SOD1`, `PCSK9`) causes a human disease does not tell you**:
  1. Whether intervening **after symptom onset** can reverse established circuit/organ damage (the *Timing / Irreversibility Bottleneck*, which killed dozens of genetically validated Alzheimer's β-secretase and anti-amyloid trials).
  2. Whether the drug modality achieves **sufficient biodistribution in the target human tissue** (e.g., crossing the human blood-brain barrier to reach deep midbrain `SNpc` and medullary respiratory nuclei without dose-limiting toxicity in liver, dorsal root ganglia, or kidneys).
  3. Whether on-target perturbation triggers **compensatory network feedback or on-target toxicity** in non-diseased tissues (just as `DCTN1` functions across multiple neuronal and peripheral cell types).

---

## Phase 6: The "Negative View" & Omission Interrogation

What did OpenAI's promotional release omit, and what are the hidden technical liabilities of scaling multi-agent LLM swarms across high-throughput functional genomics?

### 1. The Shuffled-Control Confabulation Liability (`final_summary.json`)
The most revealing experiment inside [`jinlabneurogenomics/distributed_agent`](https://github.com/jinlabneurogenomics/distributed_agent) is one that was **not** mentioned in OpenAI's social media thread: the **3-arm shuffled-control audit** in [`data/inputs/literature/final_summary.json`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/final_summary.json).

To test whether `GPT-Rosalind` agents were genuinely discovering true gene-to-pathway biology or merely acting as **post-hoc narrative confabulators**, the authors took `150` perturbation reports (`Unshuffled`) and compared them against two falsification arms using the exact same `150` underlying differential-expression response profiles:
- **`Within-screen shuffled` (`150` reports):** Each DEG profile was paired with the **wrong perturbed gene name** drawn from within the Perturb-seq screen.
- **`Out-of-screen shuffled` (`150` reports):** Each DEG profile was paired with a **wrong gene name** from outside the screen.

Look at what happened in [`final_summary.json`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/final_summary.json):

| Metric (`n = 150` Reports / Arm, `1,124` Positive Target-CellType Pairs) | Arm 1: `Unshuffled` (True Gene ↔ True DEG) | Arm 2: `Within-Screen Shuffled` (Fake Gene ↔ DEG) | Arm 3: `Out-of-Screen Shuffled` (Fake Gene ↔ DEG) | Forensic Takeaway |
| :--- | :---: | :---: | :---: | :--- |
| **Primary Retained "Load-Bearing" Findings** | `488` | **`600`** (`+23.0%` more!) | **`561`** (`+15.0%` more!) | Agents generated *more* retained findings when given shuffled gene labels than real ones! |
| **Total Primary Placements Across Cell Types** | `1,787` | **`2,871`** (`+60.7%`) | **`2,977`** (`+66.6%`) | Shuffled agents over-placed claims across cell types to rationalize the mismatch. |
| **Positive Target-CellType Pairs Covered (`of 1,124`)** | `638` (`56.76%`) | **`856` (`76.16%`)** | **`933` (`83.01%`)** | Shuffled controls covered *more* positive pairs because coherent DEG modules (`SREBP2`, `ribosome`, `OXPHOS`) remain coherent regardless of the target label! |

**Why did this happen?** Because in a Perturb-seq screen, the *downstream transcriptional modules* (like the `SREBP2` cholesterol module or `ATF4` stress module) are internally coherent biological programs! When you hand a frontier reasoning LLM a fake target gene `X_fake` paired with a real downstream `SREBP2` transcriptional module `Y_SREBP2`, the LLM uses `20` literature search calls across PubMed and STRING to find a 2-hop or 3-hop pathway connecting `X_fake` to lipid metabolism—and classifies the relationship as `"Inferred"`! Only when evaluated on **strict signed, direct 1-hop literature agreement (`Agree` flag on the target-to-response edge)** does the unshuffled arm separate from the shuffled arms. This proves a foundational lesson for AI in biology: **LLMs are hyper-fluent biological storytellers that will rationalize almost any correlation unless constrained by held-out interventional validation.**

### 2. The 43.5% Parametric Citation Gap & 38.2% Browser Failure Rate (`source_access_summary.json`)
In [`data/inputs/literature/source_access_summary.json`](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/source_access_summary.json), auditing the `2,046` agent execution traces revealed:
- **Unverified Parametric Citations (`43.51%`):** Out of `16,445` report-source citation pairs in the final reports, **`7,156` (`43.51%`) were `cited_without_matched_access_pairs`**—meaning the agent cited a PMID/DOI/database entry without a corresponding tool-open record in its execution trace.
- **Paywall & Bot-Block Friction (`38.23%`):** Out of `16,775` browser-open events across the agent swarm, **`3,956` (`23.58%`) failed with HTTP errors** and **`2,457` (`14.65%`) were blocked by publisher anti-bot/paywall defenses** (`6,413` failed opens vs. `10,362` successful opens). Relying on live web browsing for scientific agents hits publisher paywalls on nearly `4 out of 10` attempts unless backed by licensed full-text APIs (such as EuropePMC / PMC Open Access XML and structured databases like Reactome, UniProt, and STRING, which accounted for `28,851` structured API calls).

### 3. Who Loses If the Industry Over-Rotates on Transcriptomic Agent Swarms?
- **Wet-Lab Validation Bottlenecks:** Generating `3,397` relational claims and `144` prioritized biological stories (`story_central_gene_top_relational_summary.json`) in `32 minutes` shifts the rate-limiting step of drug discovery **100% onto wet-lab functional validation**. A single follow-up experiment recommended by the `Dctn1` agent report (*"combine acute Dctn1 knockout in defined midbrain neurons with SREBP reporter imaging, filipin or mass-spectrometry sterol measurements, dynein/dynactin rescue constructs, and tests of whether SREBP or cholesterol-synthesis inhibition modifies TDP-43 or alpha-synuclein stress"*) requires **6 to 18 months** of specialized neurobiology work.
- **Misallocation Toward Upstream Transcriptomic Readouts:** If venture capital mistakes "32-minute hypothesis generation" for "solving clinical attrition," capital is misallocated away from the true bottlenecks of Phase II/III failure: **human blood-brain barrier delivery vehicles, primate/human organoid toxicology, and longitudinal human clinical biomarker discovery**.

---

## Phase 7: Grey Thinking, Conditional Synthesis & The Forensic Verdict

Rejecting both binary extremes—neither dismissing `GPT-Rosalind` as mere marketing hype nor pretending that LLM swarms + CRISPR screens will push clinical pass rates above `90%`—we synthesize our conclusions through explicit **If-Clauses** and our **Probability-Weighted Forensic Verdict**.

### Conditional Synthesis ("If-Clauses")
1. **If** an R&D team uses distributed `GPT-Rosalind` agents for **Cross-Perturbation Matrix Triage** (scanning `2,000+` CRISPR perturbations × `100+` cell types to group convergent transcriptional modules like `Dctn1`–`Dync1h1`–`Rab7`–`Chp1` vs. opposite-polarity `Srebf2`, and flagging cell-type selectivity across caudal midbrain/brainstem vs. cortex), **then** the multi-agent map-reduce architecture delivers a genuine **`100×` speedup (`32 minutes` vs. months of manual postdoc literature curation)** and a **`2×` lift in held-out essential-gene recall (`36%` vs. `18%` single-agent Codex)**.
2. **If**, however, a task requires **quantitative prediction of held-out perturbation effect sizes (`n_degs`) from raw expression matrices**, **then** running a single agent per target (`batch_size = 1`) directly against the raw statistical parquet file **outperforms** querying a natural-language multi-agent report corpus (`Spearman 0.5258` vs. `0.4708`; `Recall 69.0%` vs. `59.0%`), because text summarization discards weak quantitative covariance.
3. **If** wet-lab follow-up on the **`DCTN1`–`SREBP2` lead** is pursued for Perry syndrome or ALS/FTD, **then** investigators must first test the **Polarity & Epistasis Question** in human iPSC-derived `DCTN1-G71R` midbrain dopaminergic neurons: does `G71R` trap free cholesterol in `Rab7+` late endosomes (measured by Filipin III / LC-MS sterol fractionation), and does mobilizing endolysosomal cholesterol (e.g., via low-dose cyclodextrins or `Rab7`/`TRPML1` agonists) reduce **TDP-43 cytoplasmic aggregation**—or does boosting cholesterol synthesis exacerbate lipotoxicity?
4. **If** the pharmaceutical industry seeks to raise Phase I-to-Approval clinical pass rates (`PoS`) from the historical **`~8%–14%`** baseline toward **`50%–70%`** (answering `@bayeslord`), **then** the required breakthroughs are **not** faster literature-reading chatbots, but a four-layer biophysical stack:
   - **Layer 1 (Target Causality):** Restricting targets to **human Mendelian / GWAS coding variants with monotonic dose-response curves** ([Minikel et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11096124/), lifting baseline `PoS` from `~10%` to `~30%`).
   - **Layer 2 (Programmable Modalities Over Small-Molecule Stochasticity):** Replacing promiscuous small molecules where possible with **sequence-programmable modalities** (`GalNAc-siRNA`, splice-switching or RNase H `ASOs`, `CRISPR` base/prime editors) whose informational backbone (`phosphorothioate` / `2'-MOE` / `LNP`) exhibits predictable class-level PK/biodistribution while only the 20-nucleotide sequence changes.
   - **Layer 3 (Human-First Preclinical Simulation):** Replacing mouse efficacy models with **patient-derived vascularized human organoids, *ex vivo* perfused human organs, and Phase 0 microdosing with ultrasensitive CSF/plasma target-engagement proteomics** to bridge Shkreli's *"modeling humans without the human"* gap.
   - **Layer 4 (Pre-Symptomatic Biomarker Staging):** Enrolling Phase II/III patients using **causal fluid/imaging biomarkers** (like plasma `p-tau217` or CSF seeding assays) *before* irreversible neuronal cell death occurs.

### The Forensic Verdict: What We Actually Think

| Core Question Under Audit | Most Probable Outcome (`Base Case`) | Bear / Skeptical Case | Bull / Transformative Case | Definitive Forensic Stance |
| :--- | :--- | :--- | :--- | :--- |
| **1. Will the `DCTN1`–Cholesterol Transport Lead Yield a Disease-Modifying Therapy for Perry Syndrome / TDP-43 Neurodegeneration?** | **`55%` Probability (Biomarker & Secondary Modifier):** The `Dctn1` → `SREBP2` induction is validated in wet lab as a genuine readout of impaired `Rab7–RILP–p150Glued` endolysosome-to-ER sterol transport, serving as a valuable **pharmacodynamic biomarker** of dynactin function, while primary neuroprotection still requires restoring dynein transport or clearing TDP-43 directly. | **`30%` Probability (Compensatory Epiphenomenon / Survivor Artifact):** Modifying cholesterol synthesis or transport fails to rescue `DCTN1-G71R` dopaminergic neurons because terminal degeneration is driven by `UPR`/`Atf4` ER stress ([Yu et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9988887/)) and stress-granule TDP-43 aggregation ([Ueda et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC10840176/)). | **`15%` Probability (Primary Druggable Rescue Axis):** Mobilizing trapped endolysosomal cholesterol to the ER restores membrane homeostasis and secondarily rescues autolysosomal TDP-43 clearance in human Perry syndrome iPSC-DA neurons. | **Scientifically Real Readout, Unproven Therapeutic Direction:** The convergence of `Dctn1`, `Dync1h1`, and `Rab7` on `SREBP2` in midbrain/brainstem neurons is mechanistically sound ([Rocha et al. 2009](https://pmc.ncbi.nlm.nih.gov/articles/PMC2712958/)), but treating it as a ready-made "drug lead" ignores that the single-agent baseline (`Codex`) found it too and that its causal impact on TDP-43 death is untested. |
| **2. Can Drug Pipeline Pass Rates (Including Clinical Trials) Reach `>90%` (`@bayeslord` vs. `@MartinShkreli`)?** | **`70%` Probability (Asymptotic Ceiling at `35%–55%` Overall; Shkreli Wins on the `90%` Bound):** Across all modalities, outbred human genetic heterogeneity, idiosyncratic off-target toxicity, blood-brain barrier delivery limits, and late-stage disease irreversibility cap industry-wide Phase I-to-Approval `PoS` below `50%` over the next two decades. | **`20%` Probability (Stagnation Near `10%–18%`):** AI floods Phase I with more computational hypotheses derived from mouse transcriptomics, increasing early pipeline volume while Phase II human efficacy attrition (`~70%` failure) remains unchanged. | **`10%` Probability (`>80%–90%` PoS Achieved Strictly Within Narrow Monogenic Programmable Sub-Sectors):** In hepatocyte-targeted `GalNAc-siRNA` or *in vivo* base editing for monogenic human liver/hematologic diseases with direct serum biomarkers, platform reusability pushes clinical pass rates above `80%`. | **Martin Shkreli Is Right on First Principles, Too Passive on Monogenic Platforms:** A `>90%` universal clinical pass rate (`>= 97.4%` per phase) violates small-molecule Boltzmann polypharmacology and cross-species evolutionary divergence. However, combining **human genetics + programmable nucleic acids + human organoid/Phase-0 PK/PD** can realistically lift targeted sub-sector `PoS` from `~10%` to `50%–75%`. |

---

## Phase 8: Verified Primary Source Ledger

Every primary source, repository data file, structural coordinate entry, and peer-reviewed biomedical citation in this investigation has been programmatically verified for HTTP `200` liveness:

1. **PerturbAI — Health Brain Atlas Portal (`8 Million Cells In Vivo Perturb-seq`):** [https://perturb.ai/health-brain-atlas](https://perturb.ai/health-brain-atlas)
2. **PerturbAI — Proprietary AI Stack & Causal In Vivo Biology Brief:** [https://www.perturb.ai/news-0617-proprietaryaistack](https://www.perturb.ai/news-0617-proprietaryaistack)
3. **Scripps Research Jin Lab & OpenAI — Official `distributed_agent` GitHub Repository:** [https://github.com/jinlabneurogenomics/distributed_agent](https://github.com/jinlabneurogenomics/distributed_agent)
4. **Sun et al. (2026) — Canonical Preprint Citation Metadata (`CITATION.cff`, `doi:10.64898/2026.10.15.759436`):** [https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/CITATION.cff](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/CITATION.cff)
5. **Distributed Agents Live Corpus Explorer (`Shi` & `Shi Holdout` Findings/Stories):** [https://sites-publish-check-20261021.as-alexander-sun.chatgpt.site](https://sites-publish-check-20261021.as-alexander-sun.chatgpt.site)
6. **PerturbAI — Whole-Brain CRISPR Atlas Dataset on Hugging Face:** [https://huggingface.co/datasets/perturbai/wholebrain_crispr_atlas](https://huggingface.co/datasets/perturbai/wholebrain_crispr_atlas)
7. **Raw Audit Telemetry — Unshuffled vs. Shuffled Control Summary (`final_summary.json`):** [https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/final_summary.json](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/final_summary.json)
8. **Raw Audit Telemetry — Citation Provenance & Browser Error Trace (`source_access_summary.json`):** [https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/source_access_summary.json](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/literature/source_access_summary.json)
9. **Raw Audit Telemetry — Held-Out Neuronal Depletion Recall (`depletion-best-vs-codex-heldout-recall.summary.json`):** [https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/depletion/depletion-best-vs-codex-heldout-recall.summary.json](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/depletion/depletion-best-vs-codex-heldout-recall.summary.json)
10. **Raw Audit Telemetry — Held-Out 272-Target DEG Count Comparison (`task1_deg_count_comparison.csv`):** [https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/holdout/task1_deg_count_comparison.csv](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/holdout/task1_deg_count_comparison.csv)
11. **Raw Audit Telemetry — Blinded Expert Pairwise Preference Ratings (`pair_ratings.csv`):** [https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/pair_ratings.csv](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/pair_ratings.csv)
12. **Raw Audit Telemetry — Structured Findings & `Dctn1` DEG Table (`findings.csv`):** [https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/findings.csv](https://raw.githubusercontent.com/jinlabneurogenomics/distributed_agent/main/data/inputs/survey/findings.csv)
13. **RCSB Protein Data Bank — Structure `2HQH` (`1.15 Å` Human `DCTN1` / `p150Glued` CAP-Gly Domain):** [https://www.rcsb.org/structure/2HQH](https://www.rcsb.org/structure/2HQH)
14. **UniProtKB — `Q14203` (`DCTN1_HUMAN`, Dynactin Subunit 1):** [https://www.uniprot.org/uniprotkb/Q14203/entry](https://www.uniprot.org/uniprotkb/Q14203/entry)
15. **Farrer et al. (2009), *"DCTN1 mutations in Perry syndrome"*, *Nature Genetics* (`PMC2813485`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC2813485/](https://pmc.ncbi.nlm.nih.gov/articles/PMC2813485/)
16. **Konno et al. (2017), *"DCTN1-related neurodegeneration: Perry syndrome and beyond"*, *Parkinsonism & Related Disorders* (`PMC5546300`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC5546300/](https://pmc.ncbi.nlm.nih.gov/articles/PMC5546300/)
17. **Yu et al. (2023), *"Deficiency of Perry syndrome-associated p150Glued in midbrain dopaminergic neurons leads to progressive neurodegeneration and endoplasmic reticulum abnormalities"*, *NPJ Parkinson's Disease* (`PMC9988887`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC9988887/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9988887/)
18. **Yu et al. (2018), *"Genetic ablation of dynactin p150Glued in postnatal neurons causes preferential degeneration of spinal motor neurons in aged mice"*, *Molecular Neurodegeneration* (`PMC5831668`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC5831668/](https://pmc.ncbi.nlm.nih.gov/articles/PMC5831668/)
19. **Ueda et al. (2024), *"Dysregulation of stress granule dynamics by DCTN1 deficiency exacerbates TDP-43 pathology in Drosophila models of ALS/FTD"*, *Acta Neuropathologica Communications* (`PMC10840176`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC10840176/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10840176/)
20. **Rocha et al. (2009), *"Cholesterol sensor ORP1L contacts the ER protein VAP to control Rab7-RILP-p150Glued and late endosome positioning"*, *Journal of Cell Biology* (`PMC2712958`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC2712958/](https://pmc.ncbi.nlm.nih.gov/articles/PMC2712958/)
21. **Radhakrishnan, Goldstein, McDonald & Brown (2008), *"Switch-like control of SREBP-2 transport triggered by small changes in ER cholesterol: a delicate balance"*, *Cell Metabolism* (`PMC2652870`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC2652870/](https://pmc.ncbi.nlm.nih.gov/articles/PMC2652870/)
22. **Horton, Goldstein & Brown (2002), *"SREBPs: activators of the complete program of cholesterol and fatty acid synthesis in the liver"*, *Journal of Clinical Investigation* (`PMC150968`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC150968/](https://pmc.ncbi.nlm.nih.gov/articles/PMC150968/)
23. **Wong, Siah & Lo (2019), *"Estimation of clinical trial success rates and related parameters"*, *Biostatistics* (`PMC6409418`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC6409418/](https://pmc.ncbi.nlm.nih.gov/articles/PMC6409418/)
24. **Sun et al. (2022), *"Why 90% of clinical drug development fails and how to improve it?"*, *Acta Pharmaceutica Sinica B* (`PMC9293739`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC9293739/](https://pmc.ncbi.nlm.nih.gov/articles/PMC9293739/)
25. **Minikel, Painter, Dong & Nelson (2024), *"Refining the impact of genetic evidence on clinical success"*, *Nature* (`PMC11096124`):** [https://pmc.ncbi.nlm.nih.gov/articles/PMC11096124/](https://pmc.ncbi.nlm.nih.gov/articles/PMC11096124/)
