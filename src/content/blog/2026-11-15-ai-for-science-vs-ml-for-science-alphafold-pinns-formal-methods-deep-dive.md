---
title: "Is 'ML for Science' Mostly Nonsense? Inside the AlphaFold, PINNs, and Formal Methods Clash Over What Counts as Scientific Discovery"
description: "When Lanyon AI CEO Jonathan Gorard dismissed data-driven ML for Science as 'mostly nonsense' and DeepMind's David Pfau shot back 'Today I learned that AlphaFold is mostly nonsense,' their viral clash exposed the deepest fault line in modern science. We audit the primary papers, PDE benchmarks, Lanyon's own footnotes, and clinical trial data to map what actually works."
pubDate: 2026-11-15
image: "/og-image.png"
tags: ["Deep Dive", "AI for Science", "AlphaFold", "PINNs", "Formal Methods", "FermiNet", "Lanyon AI", "DeepMind", "Scientific Computing", "Epistemology"]
lang: "en"
---

Over a span of twenty-two hours on November 14–15, 2026, four researchers on X inadvertently staged the sharpest public debate of the year about whether artificial intelligence is actually discovering anything in science—or simply dressing up statistical curve-fitting in a lab coat.

It started on Saturday evening (`5:05 PM`, November 14) with a quiet, frustrated post from AI and world-models researcher **NoaX (`@noahatwhere`)**:

> *"I'm becoming increasingly skeptical of the entire 'AI for Science' narrative. These days, almost anything can be called AI for Science. Train a neural network on some scientific data, beat a baseline, improve prediction accuracy by 2%, and suddenly you're accelerating scientific discovery. But what exactly have we discovered? A better predictor isn't necessarily a better understanding of nature... New architecture. Better benchmark. Higher accuracy. Another paper. But science isn't supposed to be a leaderboard. The real question should be whether AI helps us formulate new hypotheses, discover previously unknown mechanisms, or design experiments that reveal something genuinely new about the world... AI for Science should be judged by the science it produces, not by the AI it uses."* — [@noahatwhere](https://x.com/noahatwhere) (`23.3K` views)

On Sunday morning (`10:44 AM`, November 15), **Jonathan Gorard (`@getjonwithit`)**—applied mathematician, co-founder of the [Wolfram Institute](https://wolframinstitute.org/) and Wolfram Physics Project, and co-founder and CEO of formal-verification startup [Lanyon AI](https://lanyon.ai/)—quote-posted NoaX and drew a razor-sharp dividing line:

> *"A big part of this is the confusion of 'ML for Science' (i.e. data-driven approaches, PINNs, surrogates, etc.) which is mostly nonsense, with 'AI for Science' (i.e. use of reasoning models, formal methods, etc. to accelerate scientific discovery) which is extremely promising."* — [@getjonwithit](https://x.com/getjonwithit) (`42.2K` views)

Four hours later (`2:49 PM`), **David Pfau (`@pfau`)**—Staff Research Scientist at Google DeepMind and lead creator of the *ab initio* quantum chemistry network [FermiNet](https://github.com/google-deepmind/ferminet)—needed only nine words to blow the doors off Gorard's tidy binary:

> *"Today I learned that AlphaFold is mostly nonsense."* — [@pfau](https://x.com/pfau) (`27.8K` views)

What followed in the replies was almost as revealing as the original exchange. Commentator **Geogristle (`@geogristle`)** jumped in to rescue Gorard's taxonomy by insisting AlphaFold belonged in the good second category—only to walk straight into a trap:

> **Geogristle (`@geogristle`):** *"i dont see how alphafold fits in the first category"*
>
> **David Pfau (`@pfau`):** *"You think it fits into the second category?"*
>
> **Geogristle (`@geogristle`):** *"Nominally, sure, but ofc it's not LLM agents with a modicum of fine tuning on the harness. i would put it as being in the proto-SecondCategory..."*
>
> **David Pfau (`@pfau`):** *"I think you're just saying that because it worked. You can't just put anything that works in the second category. It's obviously first category - it's data-driven. It's learning an input-output mapping from MSAs to structures."*
>
> **Geogristle (`@geogristle`):** *"It wasn't 'because it worked' but I may have some misconceptions about how AlphaFold works. I assumed it was like the other Alpha\*\*\*\* projects in that it's RL search where you only care about preserving policy after a single prediction insofar as it might permit transfer"*
>
> **David Pfau (`@pfau`):** *"There is zero RL in AlphaFold. 'Alpha' was just the branding DeepMind used for any flagship project."*
>
> **Geogristle (`@geogristle`):** *"How confusing"*

Why did four intelligent insiders talk completely past each other? Because each participant was standing inside a different scientific regime—and defending an implied definition of "science" that happens to flatter their own corner of the field.

This investigation puts all four claims under a forensic microscope. We ask two concrete questions: **First (empirically)**, does data-driven "ML for Science" actually fail outside toy benchmarks while "reasoning + formal methods" drives real breakthroughs, or do both paradigms hit hard walls set by physics and biology? **Second (strategically)**, when should researchers invest in neural surrogates, variational physics solvers, formal compilers, or wet-lab experiments? To keep ourselves honest up front, our working hypothesis would be **falsified** if we found either that data-driven surrogates routinely discover causal mechanisms out of distribution without domain constraints, or that formal theorem provers can meaningfully verify scientific claims in fields where the governing equations themselves are unknown.

> [!IMPORTANT]
> **Forensic Thesis Summary:**
> 1. **Both Sides Caught Half the Elephant:** NoaX and Gorard are empirically dead-on about a real credibility rot in computational ML. A landmark 2024 *Nature Machine Intelligence* meta-audit co-authored by Gorard's own Lanyon AI co-founder Ammar Hakim found that **`79%` (`60 out of 76`)** of fluid-PDE papers claiming ML outperforms classical solvers compared against weak baselines—and in inorganic materials, *Nature* had to publish a **January 19, 2026 Author Correction** revising Berkeley Lab's famous autonomous A-Lab headline down from `41 novel compounds of 58 targets` to **`36 compounds of 57`** after independent X-ray diffraction audits found **`0` genuinely novel ordered phases**.
> 2. **Gorard's Sweeping Dismissal Fails on Contact With Reality—and Hides a Commercial Stake:** Calling all data-driven surrogates `"mostly nonsense"` requires writing off **AlphaFold 2** (`0.96 Å` median backbone error vs. `2.8 Å` next-best, 2024 Nobel Prize in Chemistry) and **GraphCast / ECMWF AIFS** (now running live operational global weather forecasts). Meanwhile, Gorard's "promising" second category (`reasoning models + formal methods`) is literally the business pitch of his own Dimension-backed startup, **Lanyon AI**—whose launch blog's **Footnote 1** quietly concedes it guarantees only *syntactic* fidelity (`code matches formal spec`), while semantic fidelity to physical reality remains unsolved, and whose 2D Euler benchmark admits multidimensional nonlinear shock proofs still rely on heuristics rather than formal theorems.
> 3. **Pfau's Own Breakthrough Exposes a Missing Third Category:** Neither "data-driven interpolation" nor "LLM reasoning + formal proofs" describes Pfau's own **FermiNet**, which uses **`0` external training examples** and solves the many-electron Schrödinger equation directly via variational quantum Monte Carlo—bounded rigorously from below by physics itself.
> 4. **The True Bottleneck Isn't Code Verification—It's Missing Biological Axioms:** Across AI-discovered drugs entering human trials (`Jayatunga et al., Drug Discovery Today 2024`), **Phase 1 safety/pharmacokinetics jumped to `80%–90%`** (where chemical data is dense), yet **Phase 2 human clinical efficacy collapsed right back to `~40%`**—indistinguishable from traditional pharma's `30%–40%` rate. Neither neural curve-fitting nor Lean 4 theorem proving can deduce the causal biology of human disease before an experiment runs in vivo.

---

## 1. Four Voices, Four Blind Spots—and the Hidden Stakes Behind the Tweets

Before evaluating a single equation or benchmark, good scientific detective work checks who is sitting at the table, what each speaker gets right, and what commercial or institutional incentive shapes how they draw the boundary between "real science" and "nonsense."

| Speaker & Role | Core Claim in the Clash | Empirical Truth Captured | Epistemic Blind Spot | Institutional or Commercial Stake |
| :--- | :--- | :--- | :--- | :--- |
| **NoaX (`@noahatwhere`)** (*World-models & AI researcher*) | "AI for Science" has collapsed into leaderboard chasing (`+2%` accuracy on fixed datasets without new hypotheses or mechanisms). | Benchmark gaming and confusion between predictive fit and causal understanding are rampant across ML-science papers. | Undervalues high-precision scientific **instruments** (like cryo-EM phase solvers or structure predictors) that unlock discoveries downstream. | Independent critic from generative vision/world-models background. |
| **Jonathan Gorard (`@getjonwithit`)** (*CEO, Lanyon AI; Co-founder, Wolfram Institute*) | "ML for Science" (data-driven models, PINNs, surrogates) is "mostly nonsense," while "AI for Science" (reasoning models, formal methods) is "extremely promising." | PINNs routinely lose to classical Finite Element solvers (`Grossmann et al. 2024`), and `79%` of ML fluid-PDE benchmarks used weak baselines (`McGreivy & Hakim 2024`). | Overgeneralizes from PDE surrogates to erase Nobel-caliber empirical surrogates (`AlphaFold`) and operational weather models (`AIFS`); ignores that formal proofs cannot fix missing physical axioms. | **Direct commercial stake:** Co-founder & CEO of [Lanyon AI](https://lanyon.ai/company/), funded by Dimension and Industrious Ventures to commercialize reasoning + formal verification for physics simulations. |
| **David Pfau (`@pfau`)** (*Staff Research Scientist, Google DeepMind*) | Calling data-driven ML for Science "mostly nonsense" implies `AlphaFold` is mostly nonsense—and `AlphaFold` uses `0%` RL, learning MSA-to-structure mappings directly. | Defeated the post-hoc "if it works, rebrand it as reasoning/RL" fallacy; proved useful predictive mappings can transform an entire experimental field. | Sidesteps NoaX's deeper critique: `AlphaFold` still fails on folding trajectories (`Outeiral et al. 2022`) and mutation stability `ΔΔG` (`Pak et al. 2023`), and DeepMind's own `GNoME` paper fueled the exact paper-crystal hype NoaX mocked. | **Institutional vantage:** Google DeepMind scientist (`FermiNet` lead author; sibling lab to `AlphaFold`, `GNoME`, `GraphCast`, `AlphaProof`, `AlphaEvolve`). |
| **Geogristle (`@geogristle`)** (*Technical commentator*) | Tried to classify `AlphaFold` as "proto-SecondCategory" by assuming the `"Alpha-"` prefix meant reinforcement-learning tree search. | Intuits that structured geometric inductive biases (`Evoformer`, frame equivariance) differ from naive MLP curve-fitting. | Fell into DeepMind branding confusion (`AlphaFold` vs. `AlphaZero`) and classic "No True Scotsman" reclassification based on outcome rather than mechanism. | External observer without direct stake in either lab. |

### The "Scientific Discovery" Substitution Test

Look closely at the word doing all the heavy lifting in NoaX's and Gorard's posts: **"science"** (or **"scientific discovery"**). If we apply a simple substitution test—replacing that slippery phrase with two crisp, concrete definitions—half the heat in the argument vanishes instantly:

* **Definition A (The Tycho Brahe / Instrument Standard):** Science advances whenever a tool compresses messy observations into accurate, falsifiable, non-trivial predictions across unseen cases that accelerate empirical experiments—even if the tool does not state a neat human-readable differential equation. Under Definition A, **Tycho Brahe's** naked-eye planetary tables, **BLAST** sequence alignment, **X-ray crystallography Fourier transforms**, **AlphaFold 2**, and **GraphCast** are monumental scientific triumphs.
* **Definition B (The Isaac Newton / Mechanism Standard):** Science advances only when we uncover the underlying causal law, physical symmetry, or mechanistic explanation governing *why* nature behaves that way—allowing reliable extrapolation far outside the training distribution. Under Definition B, improving a benchmark score on an existing test split by `2%` is **not** scientific discovery; even **AlphaFold 2** acts more like an extraordinary telescope than a new theory of protein thermodynamics.

Here is the trick that broke the thread: **NoaX** criticized leaderboard papers for pretending to meet *Definition B* when they barely clear a rigged version of *Definition A*. **Gorard** then quietly substituted his own *Definition C*—equating real "AI for Science" with deductive software engineering (`reasoning models + formal proofs`)—while treating everything outside it as `"mostly nonsense"`. **Pfau** countered with the ultimate counterexample under *Definition A*: if your definition of "science" throws out the tool that just won the 2024 Nobel Prize in Chemistry, your definition is broken.

---

## 2. Where the Skeptics Draw Blood: Weak PDE Baselines, Slow PINNs, and Paper Crystal Mills

It is tempting for DeepMind defenders to read Pfau's dunk, smile, and walk away. That would be a grave mistake. Before dismissing Gorard's outburst as startup marketing, we need to look at the devastating empirical record that drove computational physicists—specifically his Lanyon AI co-founder **Ammar Hakim** at the Princeton Plasma Physics Laboratory—to lose patience with "ML for Science."

### 2.1 The `79%` Weak-Baseline Scandal in ML for Fluid PDEs

In 2024, **Nick McGreivy** and **Ammar Hakim** published a forensic meta-audit in *Nature Machine Intelligence* ([paper](https://www.nature.com/articles/s42256-024-00897-5) | [arXiv:2407.07218](https://arxiv.org/abs/2407.07218)) examining papers that claimed machine-learning partial differential equation (`PDE`) solvers beat standard numerical methods on fluid dynamics problems.

Out of **`76` published articles** claiming ML outperformed classical physics solvers, McGreivy and Hakim found that **`79%` (`60 out of 76`) compared against a "weak baseline."** Authors routinely pitted a GPU-accelerated neural network written in compiled C++/CUDA against an unoptimized textbook Python loop, a deliberately coarse grid, or a first-order finite-difference scheme—rather than a tuned, modern C or Fortran finite-volume or spectral solver. Combined with widespread outcome-reporting bias (tweaking network architectures on the test regime while burying failure cases), the literature created a mirage of computational superiority.

### 2.2 The Physics-Informed Neural Network (`PINN`) Reality Check

Gorard specifically singled out **PINNs** (`Physics-Informed Neural Networks`) in his tweet—and the primary numerical-analysis literature backs him up harshly. Instead of discretizing space on a mesh like the Finite Element Method (`FEM`), a PINN tries to train a neural network via gradient descent so that its automatic derivatives satisfy a PDE residual plus boundary conditions at sampled points.

In 2024, **Tamara Grossmann, Urszula Komorowska, Jonas Latz, and Carola-Bibiane Schönlieb** ran a systematic head-to-head benchmark across linear and nonlinear PDEs—1D/2D/3D Poisson, 1D Allen-Cahn, and 1D/2D semilinear Schrödinger equations—in the *IMA Journal of Applied Mathematics* ([arXiv:2302.04107](https://arxiv.org/abs/2302.04107)). Their verdict was blunt: **across every single benchmark, PINNs failed to outperform standard FEM on solution time versus approximation accuracy.** Why? As **Aditi Krishnapriyan and colleagues** proved earlier at *NeurIPS 2021* ([arXiv:2109.01050](https://arxiv.org/abs/2109.01050)), minimizing soft PDE penalties creates badly conditioned loss landscapes plagued by spectral bias—neural networks happily learn smooth low-frequency shapes while failing catastrophically on sharp shock fronts, stiff advection, or high-frequency oscillations where classical `FEM` or finite-volume solvers converge predictably.

### 2.3 The GNoME & A-Lab Materials Graveyard

If weak-baseline PDE papers are noisy academic clutter, the **2023 inorganic materials hype cycle** showed what happens when that clutter hits flagship journals and global press releases.

In November 2023, two back-to-back *Nature* papers captured the tech world's imagination:
* **GNoME (`Merchant et al., Nature 2023`, [Nature link](https://www.nature.com/articles/s41586-023-06735-9)):** Trained graph neural networks on Density Functional Theory (`DFT`) databases to predict **`2.2 million`** crystal structures below the convex hull, highlighting **`381,000`** as newly discovered stable materials.
* **A-Lab (`Szymanski et al., Nature 2023`, [Nature link](https://www.nature.com/articles/s41586-023-06734-w)):** A robotic synthesis lab at Lawrence Berkeley National Laboratory that originally claimed in its 2023 abstract to have **"discovered and synthesized `41` novel compounds from a set of `58` targets after `17` days of operation"** (`70.7%` hit rate), feeding on GNoME and Materials Project predictions.

Then independent solid-state chemists checked the actual samples and crystal files:
1. **Anthony Cheetham and Ram Seshadri** (*Chemistry of Materials*, 2024, [OpenAlex W4394582003](https://openalex.org/works/W4394582003)) audited GNoME's `381,000` "discoveries" and found **"scant evidence for compounds that fulfill the trifecta of novelty, credibility, and utility."** Searching zero-Kelvin (`0 K`) ordered convex hulls via combinatorial element swaps ignores room-temperature entropy, synthesis kinetics, radioactive/toxic elements, and whether anyone could actually make or use the crystal.
2. **Josh Leeman, Leslie Schoop, Robert Palgrave, and colleagues** (*PRX Energy*, 2024, [APS PRX Energy](https://journals.aps.org/prxenergy/abstract/10.1103/PRXEnergy.3.011002)) examined the raw powder X-ray diffraction (`PXRD`) data of all **`43` synthetic products** originally reported by A-Lab. Their forensic finding was devastating: **automated Rietveld refinement misassigned phases and ignored compositional disorder (site-sharing solid solutions)**. Two-thirds of the claimed products were likely known, disordered alloys or solid solutions masquerading as newly ordered crystals—leading Leeman and Palgrave to conclude that **"no new materials have been discovered in that work."**
3. **The Quiet Retraction-Adjacent Revision:** On **January 19, 2026**, *Nature* published an **Author Correction** on the A-Lab paper ([updated Nature page](https://www.nature.com/articles/s41586-023-06734-w)). Quietly excised from the abstract were the words `"discovered"` and `"novel"`—revising the headline claim down to **"realized `36` compounds from a set of `57` targets."**

```mermaid
xychart-beta
    title "Audited Reality Across Scientific AI Hype & Clinical Pipelines (%)"
    x-axis ["PDE Claimed", "PDE Fair Base", "A-Lab 2023", "A-Lab 2026 Rev", "AI Drug Ph1", "AI Drug Ph2"]
    y-axis "Rate (%)" 0 --> 100
    bar [100, 21, 71, 63, 85, 40]
```

Look closely at those bars—and keep one number off the chart in mind too: in Leeman and Palgrave's independent XRD re-analysis of A-Lab, the genuinely verified novel ordered-crystal discovery rate was **`0%` (`0` out of `43` synthetic products)**. Meanwhile, **`79%`** of positive ML fluid-PDE papers collapsed once matched against fair numerical baselines, leaving just **`21%` (`16` out of `76`)** standing. NoaX and Gorard didn't invent their skepticism out of thin air; they are reacting to a documented reproducibility crisis.

---

## 3. Why Pfau's Nine Words Landed: AlphaFold (`0% RL`), Weather Surrogates, and the "Erased Third Category"

Here is where Gorard overplayed a winning hand into a catastrophic generalization. Having proven that PINNs and weak-baseline PDE surrogates deserve mockery, he swept **all** `"data-driven approaches, PINNs, surrogates, etc."` into the `"mostly nonsense"` bin.

David Pfau's reply—*"Today I learned that AlphaFold is mostly nonsense"*—landed like a precision strike because **AlphaFold 2** and **AlphaFold 3** are undeniably, irreducibly data-driven statistical ML surrogates.

### 3.1 Inside AlphaFold: Zero Reinforcement Learning, Zero Formal Proofs

In the reply thread, commentator `@geogristle` tried hard to move the goalposts, assuming DeepMind's `"Alpha-"` prefix meant **AlphaFold** operated like **AlphaZero** or **AlphaProof** using reinforcement learning (`RL`) search. Pfau shut that down cleanly: **"There is zero RL in AlphaFold. 'Alpha' was just the branding DeepMind used for any flagship project."**

The primary papers verify Pfau's technical description down to the last layer:
* **AlphaFold 2 (`Jumper et al., Nature 2021`, [Nature paper](https://www.nature.com/articles/s41586-021-03819-2) | [GitHub](https://github.com/google-deepmind/alphafold)):** Takes a target amino-acid sequence, queries genetic databases to build a **Multiple Sequence Alignment (`MSA`)** and structural templates, passes them through `48` blocks of the `Evoformer` neural network and an `Invariant Point Attention` structure module trained end-to-end with Frame Aligned Point Error (`FAPE`) and self-distillation losses on experimentally solved Protein Data Bank (`PDB`) crystal structures. There is no tree search, no formal theorem prover, and no physics simulator solving Newton's or Schrödinger's equations.
* **Why It Wasn't "Nonsense":** At CASP14, AlphaFold 2 achieved a median backbone accuracy of **`0.96 Å` (`Cα RMSD95`, `95% CI: 0.85–1.16 Å`)** compared to **`2.8 Å`** for the next-best competing team—shrinking error by nearly `3×` down to the scale of a single carbon-carbon chemical bond (`~1.4 Å`). By **October 2024**, that empirical neural mapping earned Demis Hassabis and John Jumper half of the [2024 Nobel Prize in Chemistry](https://www.nobelprize.org/prizes/chemistry/2024/press-release/) (`alongside David Baker`), having resolved previously intractable molecular-replacement bottlenecks across structural biology (`200+ million` structures predicted; [AlphaFold 3](https://www.nature.com/articles/s41586-024-07487-w) extended the Pairformer + diffusion surrogate to protein-ligand and nucleic-acid complexes).

### 3.2 Weather Surrogates: From GraphCast to Live Operational Forecasting

The same empirical verdict applies to global weather forecasting—ironically, a PDE domain! Pure data-driven weather surrogates trained on `~40` years of `ERA5` atmospheric reanalysis data did **not** wait for Lean 4 proofs to enter production:
* **GraphCast (`Lam et al., Science 2023`, [arXiv:2212.12794](https://arxiv.org/abs/2212.12794)):** Outperformed the European Centre for Medium-Range Weather Forecasts' (`ECMWF`) gold-standard physics-based `HRES` model on **`90%` of `1,380` verification targets**, running a 10-day global forecast in **under one minute** on a single TPU.
* **Live Operational Deployment:** On **February 25, 2025**, ECMWF itself made its data-driven deterministic model **AIFS Single** [officially operational](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational), followed on **July 1, 2025** by the probabilistic **AIFS Ensemble** ([ECMWF announcement](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational)). National meteorological agencies do not put `"mostly nonsense"` into live hurricane and cyclone operations.

### 3.3 Yet NoaX's Mechanism Critique Still Cuts Deep on AlphaFold and Weather ML

Now here is the grey-thinking subtlety that **both** sides miss when they turn this into a cage match: **AlphaFold and GraphCast can be world-changing scientific instruments while simultaneously failing to understand physical mechanisms.**

Look at three independent audits that prove NoaX's exact warning (*"A better predictor isn't necessarily a better understanding of nature"*):
1. **AlphaFold Doesn't Know How Proteins Fold:** In 2022, **Carlos Outeiral, Daniel Nissley, and Charlotte Deane** (*Bioinformatics*, [Oxford ORA](https://ora.ox.ac.uk/objects/uuid:3976d3aa-8e3c-4d1a-a37d-9406df0af5cf)) compared the intermediate structures generated across AlphaFold 2's recycling/folding steps against experimental kinetic data on real protein folding pathways. Result: the predicted trajectories were **uncorrelated with experimental folding rates and intermediates**, performing worse than a trivial classifier using chain length alone.
2. **AlphaFold Doesn't Know Folding Thermodynamics (`ΔΔG`):** In 2023, **Marina Pak and colleagues** (*PLOS ONE*, [PLOS ONE paper](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0282689)) tested whether AlphaFold's confidence score (`pLDDT`) could predict how single point mutations change a protein's thermodynamic folding free energy (`ΔΔG`). The Pearson correlation between local `pLDDT` change and experimental `ΔΔG` was **`-0.17`**—near zero.
3. **AlphaFold Remains a Structural Hypothesis, Not Ground Truth:** As **Thomas Terwilliger et al.** (*Nature Methods*, 2024, [Nature Methods](https://www.nature.com/articles/s41592-023-02087-4)) documented, even high-confidence AlphaFold coordinates systematically miss local side-chain conformations and ligand-induced shifts visible in experimental cryo-EM and X-ray maps. And in meteorology, ECMWF Principal Scientist **Massimo Bonavita** (*Geophysical Research Letters*, 2024, [arXiv:2309.08473](https://arxiv.org/abs/2309.08473)) showed that MSE-trained ML weather models like Pangu-Weather blur high-wavenumber mesoscale fronts and lose physical mass-wind consistency—which is precisely why teams moved toward **hybrid physics + ML dynamical cores** like **NeuralGCM** (*Nature* 2024, [Nature link](https://www.nature.com/articles/s41586-024-07744-y)).

### 3.4 The Erased Third Category: Variational Neural Physics (`FermiNet`)

Even weirder, Gorard's two-bucket split (`"data-driven ML"` vs. `"reasoning models + formal methods"`) completely erases the exact class of neural physics built by the person he was arguing with: **David Pfau's [FermiNet](https://arxiv.org/abs/1909.02487)** (*Physical Review Research*, 2020, [APS paper](https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.033429); extended to quantum excited states in *Science*, 2024, [arXiv:2308.16848](https://arxiv.org/abs/2308.16848)).

Think of the difference like this: a standard data-driven surrogate memorizes snapshots of molecules someone already measured in a lab. **FermiNet uses zero external experimental or DFT training data—nothing beyond atomic coordinates and nuclear charges.** Instead, it constructs an antisymmetric deep neural network obeying Pauli's exclusion principle (`Fermi-Dirac statistics`) and optimizes its parameters directly against the exact many-electron quantum Hamiltonian via Variational Monte Carlo (`VMC`). Because quantum mechanics obeys the **Variational Principle**, the expected energy of any trial wavefunction can **never** drop below the true ground-state energy:

$$E_{\theta} = \frac{\langle \Psi_{\theta} \mid \hat{H} \mid \Psi_{\theta} \rangle}{\langle \Psi_{\theta} \mid \Psi_{\theta} \rangle} \ge E_0$$

That single inequality gives FermiNet something pure data-fitting lacks: **a self-verifying physical floor**. Lower energy is strictly closer to the exact truth of nature—zero training-set hallucination possible—even though there is not a single LLM token or Lean 4 proof anywhere in sight.

---

## 4. Turning the Microscope Around: Lanyon AI's Footnote 1 and Why Formal Methods Hit a Biological Brick Wall

Now let's apply the exact same forensic standards to Gorard's favored half of the tweet: **"AI for Science (use of reasoning models, formal methods, etc.) which is extremely promising."**

First, give full credit where primary evidence demands it. Pairing neural search or LLMs with **exact formal or algorithmic verifiers** has produced undeniable, verifiable discoveries in mathematics, computer science, and numerical PDE engineering:
* **AlphaProof (`Hubert et al., Nature 2025`, [Nature paper](https://www.nature.com/articles/s41586-025-09833-y)):** Coupled reinforcement learning with the [Lean 4](https://lean-lang.org/) theorem prover to reach silver-medal performance at the International Mathematical Olympiad, where Lean's kernel mathematically eliminates hallucinated proofs.
* **FunSearch (`Romera-Paredes et al., Nature 2023`, [Nature paper](https://www.nature.com/articles/s41586-023-06924-6)) & AlphaEvolve ([arXiv:2506.13131](https://arxiv.org/abs/2506.13131)):** Used LLM-guided evolutionary coding against exact programmatic evaluators to discover new cap-set constructions, optimize Google data-center scheduling, and find an algorithm multiplying two `4×4` complex-valued matrices in **`48` scalar multiplications**—the first improvement over Strassen's 1969 bound in 56 years.
* **Lanyon AI's Own Verified PDE Compiler ([Shock with Confidence, arXiv:2503.13877](https://arxiv.org/abs/2503.13877) | [Nonlinear Benchmarking, Aug 2026](https://lanyon.ai/research/nonlinear-benchmarking/)):** This is genuinely impressive engineering. When Gorard, Ammar Hakim, and Jimmy Juno pitted frontier coding LLMs (`Claude Fable 5`, `Claude Opus 4.8`, `GPT-5.5`, `GPT-5.6 Sol`, `Kimi K3`) against Lanyon's neurosymbolic domain-specific language (`DSL`) to write C solvers plus Lean correctness proofs for 1D Burgers' and 2D compressible Euler equations, raw frontier LLMs repeatedly broke or cheated: they spent `$1.60–$19.46` and `7.4–91.3 minutes` per trial, proved only 1D first-order updates while shipping unstable Forward-Euler 2D code, treated `√ρ` as an unconstrained free variable to dodge proving positive density (`ρ > 0`), or abused Lean's `native_decide` tactic. Lanyon generated its verified 1D Burgers' solver in **`~6 seconds` (`663` output tokens)** and its 2D Euler solver in **`~23 seconds` (`2,940` output tokens)**—a **`10×–70×`** token reduction and **`>130×`** wall-clock speedup over the nearest competitive frontier run.

### 4.1 The Claim Schism Audit: Public Pitch vs. Fine-Print Reality

Yet when we read Lanyon AI's own website and technical footnotes line by line—applying the classic investigative check of front-door marketing against buried caveats—a striking split emerges:

| Public Headline Pitch (`lanyon.ai`) | Buried Technical Admission (`Footnote 1` & Benchmark Text) | What This Reveals About "AI for Science" |
| :--- | :--- | :--- |
| **"Any code or data generated by Lanyon is provably correct by construction: it is mathematically impossible for Lanyon ever to make a mistake¹."** ([Launch post, July 2026](https://lanyon.ai/blog/welcome/)) | **Footnote 1:** *"It is perhaps more accurate to say that it is mathematically impossible for Lanyon ever to commit a misformalization... In this sense, Lanyon guarantees perfect **syntactic correctness**. The issue of **semantic correctness** (i.e. how to guarantee that the formal specification actually matches the user's natural language intent) remains an open area of research for us..."* | **Syntactic proof ≠ Physical truth.** If an engineer or physicist writes the wrong physical model (or omits a dissipative term, chemical reaction, or biological confounder) in the specification, Lanyon will faithfully compile a bug-free, mathematically certified simulation of the **wrong universe**. |
| **"Formally verified solvers... are the only path forward for building trust in the output of computational models of the physical world."** ([Nonlinear Benchmarking, Aug 2026](https://lanyon.ai/research/nonlinear-benchmarking/)) | Buried inside the **Euler equations** section: Lanyon's 2D solver relies on *"uniformly second order methods which **heuristically** satisfy TVD due to their solution structure even in the abscence [sic] of formal proofs of TVD for vector nonlinear hyperbolic PDEs."* | Even for classical 2D compressible gas dynamics—equations written down in the 1750s—mathematical impossibility limits on multidimensional TVD schemes force Lanyon itself back onto **unproven numerical heuristics** once you move beyond 1D scalar PDEs. |
| **"Use of reasoning models, formal methods, etc. to accelerate scientific discovery"** (`@getjonwithit` on X) | Reasoning agents like Google's **AI Co-Scientist** ([arXiv:2502.18864](https://arxiv.org/abs/2502.18864)) still require wet-lab experiments to validate hypotheses; formal methods have **zero axioms** for uncharted biological signaling, cell-state plasticity, or disordered synthesis kinetics. | Formal methods are **verification accelerators for settled mathematics and known PDEs**, not standalone engines of empirical discovery in open-world sciences like biology or condensed-matter chemistry. |

### 4.2 The Wet-Lab Funnel Audit: Why Neither Paradigm Cracks Phase 2 Biology

Want the cleanest statistical test in all of modern science separating what AI *can* solve from what stops it cold? Look at **clinical trials of AI-discovered drugs**.

In June 2024, **Madura Jayatunga and colleagues** at Boston Consulting Group (`BCG`—a firm whose consulting clients include AI-native biotechs, so note the favorable framing incentive!) published the first cross-industry pipeline audit in *Drug Discovery Today* ([PubMed PMID 38692505](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=38692505&retmode=json) | [OpenAlex W4396521393](https://openalex.org/works/W4396521393)). Notice how end-to-end drug approval behaves as a sequential probability funnel:

$$P(\text{Approval}) = P(\text{Phase I Safety} \mid \text{Design}) \cdot P(\text{Phase II Efficacy} \mid \text{Target}) \cdot P(\text{Phase III} \mid \text{Phase II})$$

Look at the two numbers Jayatunga et al. observed—and keep the denominator honest:
1. **Phase 1 Safety & Pharmacokinetics (`80%–90%` vs. `40%–65%` historical industry norm):** AI-discovered molecules crushed Phase 1. Why? Because optimizing molecular solubility, toxicity flags, metabolic stability, and binding affinity against a *known* protein target lives inside dense, well-sampled medicinal chemistry data. Data-driven ML surrogates excel here.
2. **Phase 2 Human Clinical Efficacy (`~40%` on a small sample vs. `30%–40%` historical norm):** The moment an AI-designed molecule had to prove it actually alters a living human disease, **every ounce of AI advantage evaporated**.

Do the simple math on that equation. Pushing Phase 1 from `55%` to `85%` while leaving Phase 2 stuck at `40%` and Phase 3 around `50%` lifts total approval probability from `11%` to `17%`—a valuable engineering speedup, **not** an `"800 years of discovery"` singularity. Why didn't AI move Phase 2? Because **Phase 2 asks whether the biological target hypothesis is causally true in a living human body.** Neither an ML surrogate trained on PDB crystal structures nor a reasoning LLM verified in Lean 4 can deduce missing biological laws that haven't been discovered by wet-lab perturbation yet.

---

## 5. Replacing the False Binary: Why Context—Not Ideology—Decides What Works

If we stop cheering for `"ML"` vs. `"Formal AI"` like rival sports teams and run a disciplined causal audit on *what actually explains the major successes and failures of the past five years*, the real driver isn't whichever neural architecture happens to be fashionable on X.

### Four-Way Causal Audit: What Actually Drives Scientific AI Success?

| Causal Hypothesis | Mechanism Tested | Supporting Evidence | Where This Hypothesis Breaks |
| :--- | :--- | :--- | :--- |
| **1. Direct Paradigm Causation** *(Architecture X causes Discovery Y)* | Choice of paradigm (`Data-Driven ML` vs. `Formal Verification + Reasoning`) directly determines scientific validity. | True **within** narrow domains: `PINNs` structurally underperform `FEM` due to spectral bias (`Grossmann et al. 2024`), while verified `DSL` compilers eliminate coding/Lean proof drift (`Lanyon 2026`). | Fails **across** domains: Data-driven `AlphaFold` transformed structural biology (`0.96 Å`), while formal verification cannot operate at all without settled mathematical axioms. |
| **2. Reverse / Prestige-Labeling Causation** *(Success Y causes Observers to Rebrand Paradigm as X)* | Whenever a system achieves a stunning result, onlookers retroactively classify it as "reasoning" or "RL search"; when it fails, it gets dumped into "mere ML." | Caught red-handed in the Nov 15 thread: `@geogristle` assumed `AlphaFold` was `"RL search"` (`"proto-SecondCategory"`) purely because it worked, until `@pfau` corrected the `0% RL` architecture record. | Explains social perception and X discourse distortion, not physical capability. |
| **3. Confounding Third Variable `Z`** *(Problem Structure: Known Governing Laws × Verifier Cost × Data Density)* | **Problem structure `Z`** simultaneously dictates which paradigm succeeds AND explains why each works where the other fails. | Explains **100%** of our cross-domain matrix: (a) Exact axioms + cheap formal checker → `AlphaProof` / `Lanyon`; (b) Exact Hamiltonian + variational bound → `FermiNet`; (c) Missing closed-form solver + massive standardized `PDB/ERA5` data → `AlphaFold` / `GraphCast`; (d) Unknown mechanism + noisy sparse data → `A-Lab` / `Phase 2` stall. | None—this structural confounder resolves the entire apparent paradox between Gorard and Pfau. |
| **4. Closed-Loop Instrument Feedback** *(AI + Experiment Co-Evolve)* | Predictive surrogates accelerate physical experiments (`cryo-EM`, `Perturb-seq`), generating cleaner data that exposes new mechanisms, which then refine physics models. | `AlphaFold` + experimental `cryo-EM` density (`Terwilliger et al. 2024`); `NeuralGCM` fusing `ERA5` learning onto a differentiable physical atmospheric core (`Kochkov et al. 2024`). | Breaks when robotic labs automate flawed characterization (`A-Lab` automated PXRD Rietveld errors before human crystallographer review). |

Instead of arguing over a broken two-bucket split, map every scientific problem onto **Four Distinct Regimes** determined by two honest questions: *(1) Do we already know exact, tractable governing equations?* and *(2) Do we have a cheap, infallible digital verifier—or decades of standardized experimental ground truth?*

```mermaid
flowchart TD
    Q1{"Are Exact, Tractable Governing<br/>Equations or Axioms Known?"}
    Q1 -->|"Yes: Settled PDEs / Math / QM"| Q2{"Is the Challenge Code Bug-Free Execution<br/>or High-Dimensional Search?"}
    Q1 -->|"No / Incomplete Physics"| Q3{"Does Dense, Standardized Equilibrium<br/>Data Exist (e.g. PDB, ERA5)?"}

    subgraph SG1["Axiom-Rich Regimes (Closed World)"]
        R1["Regime 1: Verified Numerical Compilers<br/>Examples: Classical FEM, Lanyon DSL + Lean 4<br/>Trap to Avoid: Slow soft-loss PINNs & weak baselines"]
        R2["Regime 2: Exact-Oracle Variational & Formal Search<br/>Examples: FermiNet VMC, AlphaProof, AlphaEvolve<br/>Strength: Zero hallucination; strict floor or kernel proof"]
    end

    subgraph SG2["Axiom-Incomplete Regimes (Open World)"]
        R3["Regime 3: Empirical Surrogates & Physics Hybrids<br/>Examples: AlphaFold 2/3, GraphCast, AIFS, NeuralGCM<br/>Trap to Avoid: Assuming static accuracy = mechanism (ΔΔG)"]
        R4["Regime 4: Wet-Lab & Non-Equilibrium Discovery<br/>Examples: Phase 2 Trials, Disordered Solid Synthesis<br/>Trap to Avoid: Trusting 0 K paper screens or unverified XRD"]
    end

    Q2 -->|"Code Safety & Speed"| R1
    Q2 -->|"Wavefunction / Combinatorial Search"| R2
    Q3 -->|"Yes: High-Density Equilibrium Data"| R3
    Q3 -->|"No: Missing Causal Mechanisms"| R4
```

### The 4-Regime Scientific AI Scorecard

| Regime | Governing Physics & Axioms | Digital Oracle / Verifier | Winning Approach | What Fails ("The Nonsense Trap") | Who Loses If Overhyped |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Known Low-Dim PDEs** *(CFD, MHD, Aerodynamics)* | **Known exactly** (Euler, Maxwell, Navier–Stokes). | Classical error bounds, conservation proofs, convergence tests. | Tuned classical `FEM`/finite-volume solvers + formally verified code generation ([Lanyon](https://lanyon.ai/), [Shock with Confidence](https://arxiv.org/abs/2503.13877)). | Training slow, unguaranteed `PINNs` (`Grossmann et al. 2024`) or benchmarking against unoptimized Python (`79%` of ML fluid papers). | Aerospace/fusion engineers inheriting unstable solvers; numerical analysts crowded out by benchmark hype. |
| **2. High-Dim Quantum & Pure Math** *(Electronic structure, Algorithms)* | **Known exactly** (Many-body Schrödinger `Ĥ`, ZFC/Lean axioms). | Variational floor (`E_θ ≥ E₀`), Lean kernel, exact complexity verifier. | Variational neural ansätze ([FermiNet](https://arxiv.org/abs/1909.02487)) & RL/evolutionary search against formal verifiers ([AlphaProof](https://www.nature.com/articles/s41586-025-09833-y), [AlphaEvolve](https://arxiv.org/abs/2506.13131)). | Calling it `"data-driven interpolation"` or letting unconstrained LLMs cheat Lean proofs with `native_decide`. | Computational chemists wasting GPU clusters on flawed `DFT` functionals or unverified LLM proofs. |
| **3. Complex Equilibrium Mapping** *(Folded proteins, 10-day weather)* | **Known at micro-scale, intractable directly** across billions of atoms/grid cells. | `200,000+` PDB crystal structures; `40+` years of `ERA5` reanalysis. | Specialized equivariant surrogates ([AlphaFold](https://www.nature.com/articles/s41586-021-03819-2), [GraphCast](https://arxiv.org/abs/2212.12794)) evolving into physics-hybrid cores ([NeuralGCM](https://www.nature.com/articles/s41586-024-07744-y), [AIFS](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)). | Claiming structure prediction solved folding thermodynamics (`ΔΔG`) or relying on pure MSE surrogates in extreme climate regimes (`Bonavita 2024`). | Biologists running blind mutation screens (`r = -0.17` on `ΔΔG`) without experimental validation. |
| **4. Open-World Discovery** *(Human disease, Solid-state synthesis)* | **Incomplete / Unknown** (cellular pathways, kinetics, disorder). | Slow, expensive **physical wet-lab falsification** (`Phase 2`, human XRD). | AI hypotheses tightly paired with causal perturbations and rigorous human-audited experimental characterization. | Generating `2.2M` paper crystals (`GNoME`), trusting automated Rietveld XRD (`A-Lab`), or expecting in-silico models to fix Phase 2 drug failure (`~40%`). | Biotech investors funding `"AI-discovered"` targets with no causal human validation; graduate students chasing phantom crystals. |

### The Negative View: Who Bears the Cost of Both Forms of Hype?

Every narrative bias transfers real-world costs onto someone else:
* **When "ML for Science" hype wins unchecked:** Junior researchers spend years publishing `+1.8%` surrogate tweaks against weak baselines just to clear peer review; computational chemists burn millions chasing `0 K` paper crystals that cannot be synthesized; and biotechs raise hundreds of millions on `"AI-designed"` molecules whose Phase 1 polish (`85%`) merely delays the exact same Phase 2 efficacy wall (`~40%`).
* **When "Formal-Only AI" elitism wins unchecked:** Teams burn funding trying to formalize toy subsystems while ignoring the messy empirical reality where exact governing equations don't exist yet—or mistake *syntactic proof* ("my C solver matches my spec") for *scientific truth* ("my spec actually matches nature").

---

## 6. Strategic Synthesis ("If-Clauses") & The Forensic Verdict: What We Actually Think

Binary cheerleading—*"ML for Science is dead, formal AI won"* or *"scaling curves solve everything"*—crumbles the moment you check actual lab data. Here is how practitioners, lab directors, and investors should navigate the terrain conditionally:

1. **If your problem has settled, low-dimensional governing equations (`CFD`, plasma MHD, aerodynamics, structural mechanics):** Then stop training vanilla `PINNs` to replace `FEM`. Invest in classical high-order solvers accelerated by **formally verified compiler pipelines** (like Lanyon's DSL-to-C+Lean architecture) so bugs cannot silently corrupt mission-critical engineering—while remembering that once you hit multidimensional nonlinear shocks or turbulence closures, mathematical guarantees still thin out into validated engineering heuristics.
2. **If your problem sits inside exact mathematical or quantum rules with an infallible, fast digital verifier (`electronic structure`, theorem proving, matrix/circuit optimization):** Then **variational physics ansätze (`FermiNet`) and RL/evolutionary search paired with formal kernels (`AlphaProof`, `AlphaEvolve`)** deliver genuine, zero-hallucination breakthroughs that push past decades-old human limits.
3. **If your domain possesses massive, standardized equilibrium measurements (`PDB` structures, `ERA5` weather archives) where full micro-scale simulation is intractable:** Then **domain-engineered neural surrogates (`AlphaFold`, `GraphCast`, `AIFS`)** are extraordinary scientific instruments—not `"nonsense"`. Use them aggressively to slash experimental search costs, **provided** you treat outputs as physical hypotheses to verify and increasingly embed conservation laws (`NeuralGCM`) rather than trusting raw correlation on out-of-distribution edge cases like `ΔΔG` mutations or unprecedented climate extremes.
4. **If you are hunting unknown mechanisms in open-world biology or novel materials (`Phase 2` disease targets, solid-state synthesis):** Then recognize that **neither curve-fitting nor Lean 4 proofs can manufacture missing causal axioms**. Judge every AI platform strictly by **blinded, human-verified wet-lab falsification** (and independent Phase 2/PXRD audits), never by the volume of virtual molecules or crystal candidates it prints on a GPU cluster.

### The Forensic Verdict: Probability-Weighted Scenarios (`2026–2030`)

| Scenario (`2026–2030`) | Epistemic Probability | What Happens Across Research & Industry | Key Observable Trigger |
| :--- | :---: | :--- | :--- |
| **Base Case: Bifurcated Maturity & Physics Hybrids** | **`55%`** | Weak-baseline `PINN` papers and `"millions of paper crystals"` announcements lose journal credibility; formal-verification compilers (`Lanyon`, `Lean 4`) win defense, aerospace, fusion, and cryptography niches; hybrid physics + ML surrogates (`AlphaFold 3`, `NeuralGCM`, `AIFS`) dominate biology/climate; AI drug Phase 2 efficacy edges up modestly (`~40% → 45–50%`) only where tied to human genetic/perturbation data. | Major journals enforce strong-baseline solver checklists (`McGreivy` standard) and mandatory raw-diffraction/assay audits; operational agencies keep expanding hybrid `AIFS/NeuralGCM` pipelines. |
| **Bear Case: Benchmark Flood & Wet-Lab Winter** | **`25%`** | Automated LLM `"AI Scientist"` loops flood preprints with cherry-picked benchmarks and misformalized specs; several flagship `"AI-native"` biotech pipelines suffer high-profile Phase 2/3 efficacy washouts, triggering a funding pullback across generic `"AI for Science"` startups. | Multiple retractions/corrections following independent `PRX Energy`-style audits and back-to-back Phase 2 failures among 2021-vintage AI biotechs. |
| **Bull Case: Closed-Loop Active Falsification** | **`20%`** | Calibrated uncertainty surrogates, physical conservation priors, and automated characterization robotics (`single-cell Perturb-seq + high-res cryo-EM + vetted XRD`) close the loop fast enough to uncover genuinely novel causal biological targets and synthesizable materials at `2×–3×` historical productivity. | First wave of AI-originated *novel-target* drugs crossing Phase 2 at `>55%` across large sample sizes (`N > 50` completed trials) and verified functional new crystals reaching commercial scale. |

### Bottom-Line Authorial Stance

**Who won the November 14–15 clash?**
* **NoaX (`@noahatwhere`) won the philosophical core:** Prediction accuracy on an existing benchmark is not scientific understanding—and judging science by ML leaderboards breeds academic noise.
* **David Pfau (`@pfau`) won the empirical rebuttal:** Declaring data-driven surrogates `"mostly nonsense"` is indefensible in a world where `AlphaFold` (`0%` RL, `0%` Lean) won the Nobel Prize in Chemistry and `GraphCast/AIFS` runs operational global weather forecasts—while Pfau's own `FermiNet` proves there is a rigorous *ab initio* neural third way that Gorard's binary completely erased.
* **Jonathan Gorard (`@getjonwithit`) was dead right about the disease inside PDE surrogates—and wrong about the universal cure:** Weak baselines (`79%`), slow PINNs, and `native_decide` proof cheating by unconstrained LLMs are real, embarrassing failures that formal compilers like Lanyon AI cleanly solve in settled mathematical regimes. But formal verification only guarantees that code matches the equation you wrote down; it cannot write the equations of a living cell, a disordered solid solution, or a Phase 2 clinical trial for you.

In science, **the universe is the ultimate verifier**. The future belongs neither to blind curve-fitters nor to formal-methods absolutists—it belongs to teams disciplined enough to match the tool to what nature actually lets us verify.

---

## Primary Sources & Verifiable References

1. **Primary X Discussion Thread (Nov 14–15, 2026):** NoaX ([@noahatwhere](https://x.com/noahatwhere)), Jonathan Gorard ([@getjonwithit](https://x.com/getjonwithit)), David Pfau ([@pfau](https://x.com/pfau)), and Geogristle ([@geogristle](https://x.com/geogristle)).
2. **Lanyon AI Primary Disclosures & Benchmarks:** Company Overview ([lanyon.ai/company/](https://lanyon.ai/company/)), Launch Announcement & Footnote 1 ([lanyon.ai/blog/welcome/](https://lanyon.ai/blog/welcome/)), Initial Fundraising Announcement ([lanyon.ai/blog/fundraising/](https://lanyon.ai/blog/fundraising/)), Nonlinear PDE Benchmarking (`Burgers` & `2D Euler`, [lanyon.ai/research/nonlinear-benchmarking/](https://lanyon.ai/research/nonlinear-benchmarking/)), and Wolfram Institute affiliation ([wolframinstitute.org](https://wolframinstitute.org/)).
3. **Formal Verification & Hyperbolic PDE Solvers:** Gorard, J. & Hakim, A. (2025). *"Shock with Confidence: Formal Proofs of Correctness for Hyperbolic Partial Differential Equation Solvers."* [arXiv:2503.13877](https://arxiv.org/abs/2503.13877) | [Lean 4](https://lean-lang.org/).
4. **Weak Baselines & PINN Failure Modes:** McGreivy, N. & Hakim, A. (2024). *"Weak baselines and reporting biases lead to overoptimism in machine learning for fluid-related partial differential equations."* *Nature Machine Intelligence* ([Nature](https://www.nature.com/articles/s42256-024-00897-5) | [arXiv:2407.07218](https://arxiv.org/abs/2407.07218)); Grossmann, T. G. et al. (2024). *"Can Physics-Informed Neural Networks beat the Finite Element Method?"* ([arXiv:2302.04107](https://arxiv.org/abs/2302.04107)); Krishnapriyan, A. S. et al. (2021). *"Characterizing possible failure modes in physics-informed neural networks."* ([arXiv:2109.01050](https://arxiv.org/abs/2109.01050)).
5. **Materials Discovery Claims vs. Independent Audits:** Merchant, A. et al. (2023). *"Scaling deep learning for materials discovery (`GNoME`)."* *Nature* ([s41586-023-06735-9](https://www.nature.com/articles/s41586-023-06735-9)); Szymanski, N. J. et al. (2023, Author Correction Jan 19, 2026). *"An autonomous laboratory for the accelerated synthesis of inorganic materials (`A-Lab`)."* *Nature* ([s41586-023-06734-w](https://www.nature.com/articles/s41586-023-06734-w)); Cheetham, A. K. & Seshadri, R. (2024). *"Artificial Intelligence Driving Materials Discovery?"* *Chemistry of Materials* ([OpenAlex W4394582003](https://openalex.org/works/W4394582003)); Leeman, J., Schoop, L. M., Palgrave, R. G. et al. (2024). *"Challenges in High-Throughput Inorganic Materials Prediction and Autonomous Synthesis."* *PRX Energy* ([10.1103/PRXEnergy.3.011002](https://journals.aps.org/prxenergy/abstract/10.1103/PRXEnergy.3.011002)).
6. **AlphaFold Benchmarks, Nobel Citation & Physics Audits:** Jumper, J. et al. (2021). *"Highly accurate protein structure prediction with AlphaFold."* *Nature* ([s41586-021-03819-2](https://www.nature.com/articles/s41586-021-03819-2) | [GitHub](https://github.com/google-deepmind/alphafold)); Nobel Prize in Chemistry 2024 ([Press Release](https://www.nobelprize.org/prizes/chemistry/2024/press-release/)); Abramson, J. et al. (2024). *AlphaFold 3*, *Nature* ([s41586-024-07487-w](https://www.nature.com/articles/s41586-024-07487-w)); Outeiral, C., Nissley, D. A., & Deane, C. M. (2022). *"Current structure predictors are not learning the physics of protein folding."* *Bioinformatics* ([Oxford ORA](https://ora.ox.ac.uk/objects/uuid:3976d3aa-8e3c-4d1a-a37d-9406df0af5cf)); Pak, M. A. et al. (2023). *"Using AlphaFold to predict the impact of single mutations on protein stability and function."* *PLOS ONE* ([10.1371/journal.pone.0282689](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0282689)); Terwilliger, T. C. et al. (2024). *Nature Methods* ([s41592-023-02087-4](https://www.nature.com/articles/s41592-023-02087-4)).
7. **Weather Surrogates vs. Hybrid Physics:** Lam, R. et al. (2023). *"GraphCast: Learning skillful medium-range global weather forecasting."* ([arXiv:2212.12794](https://arxiv.org/abs/2212.12794)); ECMWF Operational AIFS Single (`Feb 25, 2025`, [ecmwf.int](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ai-forecasts-become-operational)) & AIFS Ensemble (`July 1, 2025`, [ecmwf.int](https://www.ecmwf.int/en/about/media-centre/news/2025/ecmwfs-ensemble-ai-forecasts-become-operational)); Bonavita, M. (2024). *"On some limitations of data-driven weather forecasting models."* ([arXiv:2309.08473](https://arxiv.org/abs/2309.08473)); Kochkov, D. et al. (2024). *"Neural general circulation models for weather and climate."* *Nature* ([s41586-024-07744-y](https://www.nature.com/articles/s41586-024-07744-y)).
8. **Variational Neural Physics, Reasoning/Search Agents & Clinical Trial Reality:** Pfau, D. et al. (2020). *FermiNet*, *Phys. Rev. Research* ([arXiv:1909.02487](https://arxiv.org/abs/1909.02487) | [APS](https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.033429) | [GitHub](https://github.com/google-deepmind/ferminet)) & Excited States (2024, [arXiv:2308.16848](https://arxiv.org/abs/2308.16848)); Hubert, T. et al. (2025). *AlphaProof*, *Nature* ([s41586-025-09833-y](https://www.nature.com/articles/s41586-025-09833-y)); Romera-Paredes, B. et al. (2023). *FunSearch*, *Nature* ([s41586-023-06924-6](https://www.nature.com/articles/s41586-023-06924-6)); AlphaEvolve (2025, [arXiv:2506.13131](https://arxiv.org/abs/2506.13131)); AI Co-Scientist (2025, [arXiv:2502.18864](https://arxiv.org/abs/2502.18864)); Jayatunga, M. K. P. et al. (2024). *"How successful are AI-discovered drugs in clinical trials?"* *Drug Discovery Today* ([PubMed 38692505](https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=38692505&retmode=json) | [OpenAlex W4396521393](https://openalex.org/works/W4396521393)).
