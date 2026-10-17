---
title: "The Clinical Trial System Is Broken. Science Isn't the Problem."
pubDate: 2026-09-04
description: "Phase 1 trials cost double what they did in 2017. Biotechs are fleeing to Australia and China. The FDA just announced reforms — but the structural rot runs deeper than guidance documents."
draft: false
tags: ["clinical-trials", "fda", "biotech", "drug-development", "regulation", "pharma"]
---

A woman with terminal lung cancer gets a Phase 1 trial for a drug targeting KRAS — a gene mutation scientists spent decades calling "undruggable." Six years later she's alive in her late 80s. The drug, sotorasib, worked. The system worked.

That was 2019. The system that made it possible is now the thing standing in the way of the next sotorasib.

A recent NYT investigation lays out the damage: Phase 1 trial costs have doubled since 2017. Companies are opening fewer trials domestically. Biotechs are moving operations to Australia and China — not because the science is better there, but because they can actually run trials without going bankrupt first. For the first time, American patients may no longer be among the first to access the drugs their own country's labs discovered.

This isn't a story about greedy pharma or lazy regulators. It's a story about accumulated structural dysfunction — decades of risk-averse requirements piling on top of each other until the system became its own bottleneck.

## Eroom's Law: The anti-Moore's Law of drug development

In 2012, Jack Scannell coined "Eroom's Law" — Moore spelled backwards — to describe a brutal observation: the number of new drugs approved per billion dollars of R&D spending has halved roughly every nine years since 1950. Not because science got worse. DNA sequencing, genomics, high-throughput screening, computational chemistry — all improved by orders of magnitude. The inputs got dramatically cheaper. The outputs got dramatically more expensive.

The causes are structural, not technical:

The "cautious regulator" problem: Every time a drug gets pulled from the market for safety reasons (thalidomide, Vioxx), the bar for new drugs ratchets up. Risk tolerance only moves in one direction. Nobody owns the cost of delay — the months a cancer patient spends waiting while paperwork moves through committees.

The "better than the Beatles" problem: The generic pharmacopoeia is now excellent. Over 90% of US prescriptions are generics. That's great for patients, but it means new drugs in established therapy areas face an impossibly high competitive bar. R&D gets pushed toward the hardest, least tractable diseases — advanced cancers, Alzheimer's — where models are worst and failure rates are highest.

The "basic research-brute force" bias: We keep throwing more computational power and bigger compound libraries at drug discovery, but the rate-limiting step isn't finding molecules. It's proving they work in humans. High-throughput screening is faster and cheaper than the old pharmacology, but it may be less productive — because target-based approaches don't capture the complexity of whole organisms.

The trend plateaued around 2010, with a modest uptick in approvals. But that uptick came with a catch: more drugs approved for smaller patient populations (rare diseases), not more breakthroughs for common killers.

## Why Phase 1 trials cost double

The NYT piece nails the proximate cause: regulatory requirements designed for late-stage commercial production get applied to early-phase trials that just need a tiny batch of medicine for a handful of patients.

Take manufacturing standards. FDA's cGMP rules were written to ensure quality at scale — the kind of controls you need when you're producing millions of doses. But when an academic clinician wants to run a Phase 1 trial with enough drug for 20 patients, those same rules can require manufacturing in certified commercial-grade facilities. The cost difference is absurd: you're spending millions to make what amounts to a few vials.

The FDA technically offers exemptions for Phase 1. But the exemptions are so vaguely written that researchers don't trust them. Better to over-comply than risk a clinical hold. This is the cautious regulator problem in action — the rules on paper look reasonable, but the incentive structure makes everyone build in maximum margin.

Then there's the IRB problem. A single multi-site trial can get reviewed by separate ethics boards at every hospital involved, plus the FDA's own review — even though the NIH has been urging single-IRB review for years. These reviews can drag on for months for purely procedural reasons. A study published in the journal *Controlled Clinical Trials* found no evidence that longer IRB review times improve patient safety. They just slow things down.

The combined effect: a biotech spending $2 million per month burns through runway just getting to the point where they can dose the first patient. For small companies — which is where most first-in-class cancer drugs now originate — this can be existential.

## The innovation migration

Between 2010 and 2020, big pharma originated only about a quarter of first-in-class cancer drugs. The rest came from small biotechs and academic labs. Those entities can't absorb the cost and delay the way a Pfizer or Roche can.

So they're leaving.

Australia's CTN (Clinical Trial Notification) scheme is the structural opposite of the FDA's IND process. Instead of submitting a massive application to the national regulator and waiting for approval, sponsors get ethics approval from a Human Research Ethics Committee, then simply notify the TGA. The TGA doesn't evaluate trial data at the time of notification — it trusts the HREC's scientific and ethical judgment.

The result: Australia can cut up to nine months from the timeline before a trial application is submitted, and another three to six months after. For a biotech burning $2 million monthly, that gap is survival. For patients, it's the difference between getting a drug while it might still work and getting it too late.

And Australia does this safely. Its system runs under mandatory ICH GCP compliance. It's transparent — trial registrations are publicly searchable. It hasn't had the safety scandals that have surfaced in China, where two deaths in gene-therapy studies went undisclosed for months, with researchers apparently ignoring safety red flags from animal tests.

But the China story is bigger than a few safety failures. China has built one of the most productive clinical development environments in the world. Approval timelines for human trials shrank from 501 days to 87. Phase I trials cost 43% less and finish 50% faster than in the US. By 2025, Chinese companies conducted nearly one-third of global clinical trials for the most innovative drugs — up from 5% a decade earlier.

The licensing numbers tell the real story. In Q1 2026 alone, China's outbound innovative-drug BD deals exceeded $60 billion — already surpassing the $51.9 billion for all of 2024. Half of drugs now licensed by big pharma come from China. Ten years ago, that figure was around 5%.

This isn't bargain hunting. It's a structural reallocation. Big pharma facing patent cliffs (Keytruda, Eliquis, Stelara) needs pipeline replenishment. Internal R&D is slow. Big M&A is expensive. Chinese biotechs offer a third path: clinically validated assets, fast execution, lower cost, dense pipelines in ADCs, bispecifics, and other hot modalities.

The US is losing not just trial volume but the feedback loop between lab and clinic that makes drug development actually work.

## The Heilversuch alternative

The most striking example in the NYT piece isn't about clinical trials at all. It's about a 13-year-old with osteosarcoma whose father took her to Germany for a personalized mRNA vaccine.

German law recognizes something called *Heilversuch* — "healing attempt." Under this framework, a physician can act on clinical judgment with the patient's informed consent, without a regulator's sign-off. The treating physician decided on a Tuesday evening to give the girl a personalized vaccine. It was administered days later.

In the US, the same treatment through a single-patient IND would have taken months. Months a child with aggressive bone cancer doesn't have.

The GitLab co-founder Sid Sijbrandij took a different path through the same problem. When his osteosarcoma relapsed and standard options ran out, he went "founder mode" — assembling a team of physicians and scientists, sequencing his tumor at single-cell resolution, building a therapeutic ladder of 25+ potential treatments including personalized vaccines, radioligand therapy, and engineered cell therapies. He's now been cancer-free for over a year.

He could do this because he had the resources and network to navigate a system that's opaque to most patients. He hired regulatory consultants. He traveled internationally. He had the technical literacy to engage with specialists as a peer. Most patients don't.

This is the inequality the current system creates. Not the natural inequality of biology, but the artificial inequality of a regulatory framework that makes personalized medicine accessible only to those who can afford to work around it.

## Operation TrialBlazer: real reform or another pilot program?

In June 2026, HHS launched Operation TrialBlazer — a coordinated effort to compress Phase 1 timelines by six to 12 months. The specifics are encouraging:

Expedited IND pilot program: Sponsors would partner with Qualified Research Institutions to develop Phase 1 IND submissions using rolling submissions, running IRB review and site activation in parallel with the FDA review.

One-trial approval: FDA issued revised draft guidance ending the "two-trial dogma" — one rigorous, well-controlled trial plus confirmatory evidence can now suffice for approval. This is a genuine shift in evidentiary standards.

Master protocols: Updated guidance on basket, umbrella, and platform trials to reduce duplicative infrastructure.

Phase 1 IND Navigator: A new FDA webpage, a dedicated call center, and clarified CMC requirements specifically for Phase 1.

PDUFA VIII: The proposed commitment letter for FY2028-2032 includes a 50% application fee reduction for sponsors who run at least one Phase 1 trial in the US — a direct financial incentive to onshore clinical research.

These are real steps. But the FDA has a long history of announcing reforms that stall. The Pre-Cert pilot for digital health software went nowhere. The Breakthrough Devices program still has products waiting years for clearance.

The real window is PDUFA reauthorization. Because the legislation is effectively must-pass (FDA can't collect fees without it), it forces Congress to focus on the agency and creates the best opportunity to attach structural reforms. PDUFA VII expires September 2027. PDUFA VIII negotiations are already underway.

## The bottom line

The science has never been better. RAS — once called "undruggable" — now has an approved targeted therapy. Daraxonrasib nearly doubled survival in pancreatic cancer. Personalized mRNA vaccines are producing responses in cancers that had no treatment options. The genomics revolution and AI-driven drug design are delivering on promises that were theoretical five years ago.

The bottleneck isn't discovery. It's the system between discovery and the patient. The paperwork, the redundant reviews, the manufacturing standards written for commercial scale applied to Phase 1 batches, the IRB committees that meet once a month, the regulatory ambiguity that makes everyone over-comply out of fear.

Other countries proved you can do this differently without compromising safety. Australia's been running trials safely under CTN for years. The US doesn't need to adopt Germany's Heilversuch framework wholesale, but it needs to stop treating every potential risk as a reason to delay while ignoring the very real risk that the disease is progressing while the paperwork moves.

The PDUFA VIII reauthorization in 2027 is the single best opportunity to lock in structural reform. If it passes with the right provisions — fee incentives for US-based trials, clarified Phase 1 manufacturing requirements, mandatory single-IRB review, real consequences for agencies that don't meet timelines — it could reverse the migration.

If it doesn't, the migration becomes permanent. The feedback loop between American labs and American patients breaks. And the next sotorasib gets tested in Sydney or Shanghai instead of Houston.
