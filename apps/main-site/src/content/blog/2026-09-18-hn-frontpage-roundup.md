---
title: "Hacker News Front Page Roundup — September 18, 2026"
pubDate: 2026-09-18
description: "A passkey backlash, a browser-local model that renames itself mid-story, an RCE chain into OpenAI's internal repos, Zhipu's coding app quietly uploading your entire Git history, a chatbot that almost started a war, and four years of jemalloc technical debt paid off."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech", "security", "privacy"]
---

Eight stories cleared 200 points today. The dominant theme isn't AI capability — it's custody. Who holds the keys, who holds the snapshots, who holds the audit trail, and what happens when the answer is "not you." Two of today's stories are open-source memory allocators and identity standards, the kind of thing that gets ignored until it's the only thing standing between you and a very bad day.

---

## I Don't Like Passkeys
**656 points** · [hawksley.dev](https://hawksley.dev/blog/i-dont-like-passkeys)

Ethan Hawksley's argument is that passkeys are an excellent corporate control and a mediocre personal one, and he's careful about the distinction rather than dismissive of the technology. He concedes the real wins: origin-bound credentials can't be harvested by a lookalike login page, and because the private key never leaves the authenticator, a server-side breach yields nothing usable. For an organization that can issue credentials, mandate recovery, and staff a help desk, that's a strict upgrade.

For an individual, he argues the threat model is inverted. The dominant risks aren't adversary-in-the-middle proxies, they're permanent lockout, automated bans triggered by anomalous behavior, and device loss. Passkeys don't remove the weakest link in an account's security — they relocate it to recovery, which for most providers is still SMS, magic email links, or security questions. So you get phishing resistance on the front door while the back door stays exactly as flimsy as it was, plus a false sense of security about the whole arrangement.

The hardware-key critique is the sharpest part, and it's a design property rather than a bug: WebAuthn credentials on a security key can be created and deleted but not exported, so redundancy means buying two or three keys and enrolling every one of them at every site — a cost that grows linearly with account count and never gets easier. Cross-device flows through hybrid transport (QR code plus Bluetooth) are secure in theory and genuinely fragile in practice. His recommendation is unglamorous: randomly generated per-site passwords in a third-party password manager plus an independent TOTP app. The nuance most readers will skip past is that he expects third-party passkeys — credentials held by a password manager you can sync and back up yourself — to be the eventual answer. He's objecting to the current custody model, not to asymmetric credentials.

---

## OpenJev
**463 points** · [openjev.com](https://openjev.com/)

The page now says "SemIf," announces that it was formerly called OpenJev, and carries a disclaimer that it is not affiliated with or endorsed by TypeSafe — which is the kind of notice a project posts after someone with lawyers notices the name. What it is: a browser-local implementation of the same decision-procedure idea as Jevons, the model whose published benchmark set off the last round of "LLMs can't actually reason about probabilities" arguments.

The demo compares two ways of getting a distribution over a set of allowed options from the same loaded model. The first reads the choice logits directly and normalizes across only the displayed option tokens, no decoding at all. The second asks the model to write the same distribution out token by token as JSON, so you can watch every token arrive and time it. Everything runs client-side via `wllama` with pinned GGUF builds — no backend, weights pulled from Hugging Face and cached in the browser, `performance.now()` timings, no canned results. You pick from Qwen3 0.6B (639 MB), MiniCPM5 2B (1.56 GB, desktop default), or Qwen3.5 4B (3.01 GB).

The scoreboard is where it gets interesting, and the page is more honest about it than most demos. Owned checkpoints score 44.0%, 68.6%, and 81.3% balanced accuracy — against a published 88.3% for the hosted Jev model. The site states plainly that direct scores are a softmax over displayed option tokens only: they are not calibrated confidence, and they exclude every answer the model might prefer that isn't on the list. Combined with the quantized weights disclaimer, the honest reading is that a 2 GB quantized model in your browser gets you to roughly 70–80% of a much larger hosted model's decision accuracy, with the caveats that quantized weights change accuracy and that this measures force-choice readout rather than free-form reasoning. That's a useful data point for anyone weighing local inference for triage-style decisions. It is not the same claim as "a small local model matches a frontier one," and to the page's credit it doesn't make that claim.

---

## A Heap Overflow and SSO Misconfiguration to Compromise OpenAI Internal Repos
**452 points** · [Hacktron](https://www.hacktron.ai/blog/hacking-openai)

On July 25, Hacktron chained two unrelated bugs into ChatGPT and Codex account takeover for multiple OpenAI employees, then into OpenAI's internal monorepo. Discovery to internal repo access took under 72 hours. They proved access without reading anything sensitive by having the compromised employee's Codex open a harmless pull request in `openai/openai`.

The chain is a good reminder that identity is the connective tissue that turns a forum into a company. Step one was a heap buffer overflow in libheif, reached through Discourse's image upload pipeline at `community.openai.com`; the environment had a Debian image with a missing security backport, and HEIC/HEIF uploads took a path Discourse hadn't hardened. That yielded RCE and admin on the forum. Step two was an SSO misconfiguration in OpenAI's identity infrastructure that let "Sign in with OpenAI" on the forum escalate into broader ChatGPT and Codex access — and from there, every connector attached to those accounts: GitHub, Slack, email. The scope claim isn't theoretical, it's structural: any service you've wired into your ChatGPT account inherits the blast radius of the weakest place you can use that identity.

Credit where it's due on response: Bugcrowd report submitted the same morning, OpenAI confirmed the fix roughly 14 hours later, Discourse had a patch by Monday and added image-processing sandboxing as defense in depth, and GHSA-vhm9-85gw-x335 was published July 28. The bounty was $6,500, with OpenAI noting that testing against the Discourse-hosted forum was explicitly out of scope for their program — worth reading as an unusually frank statement of where a bounty's edges are, not as a complaint about the amount. The part that should scare you is Hacktron's follow-up work, HEIF Heist: libheif is a transitive dependency of Slack, Meta, GitHub Enterprise, Ruby on Rails, and Next.js, Astro, and Gatsby image pipelines. If you accept user-controlled `.heic`, `.heif`, or `.avif`, the practical advice in the post is to assume you're affected and go look. Self-hosted Discourse operators are told specifically that a web-interface update may not replace the image, and need `git pull` plus `./launcher rebuild app`.

---

## Cloudflare Quick Tunnels
**399 points** · [Cloudflare](https://try.cloudflare.com/)

`cloudflared tunnel --url http://localhost:8000`, no account, no DNS, no inbound port. The mechanics are worth restating because they're the reason the product works at all: the daemon opens an outbound-only connection to the nearest of Cloudflare's 335+ edge locations, and inbound traffic rides their anycast network back down that connection, which is why you don't need a port forward, a public IP, or a firewall change. TLS and DDoS filtering come from being behind the edge, and the URL prints in a couple of seconds.

Quick tunnels have been a `cloudflared` feature for years, so the actual news is packaging: a product landing page with a genuine agent-era hook. The interesting additions are structured output — hostname, edge, and health as JSON on stdout, so a coding agent doesn't have to regex the logs — and the ephemeral-by-default lifecycle, where the tunnel dies with the process. That makes it a good fit for the eval harness or webhook endpoint an agent spins up mid-loop and then forgets. It's a strictly better primitive than a fixture.

The page, though, is a masterclass in what it doesn't say. There is no mention of rate limits, no uptime commitment, no abuse policy, and no statement about whether quick tunnels are appropriate for anything load-bearing. Anyone who has relied on one knows the shape of the gap: the hostname is random, non-revocable, and dies with the process, which is a feature for a test loop and a trap for a demo you sent to a customer. The framing "0 ports opened, nothing inbound" is accurate and also a bit of a magic trick — you have opened a port, it's just Cloudflare's. That's a fine trade. It isn't the same thing as exposure-free.

---

## Jemalloc 5.4.0
**309 points** · [GitHub](https://github.com/jemalloc/jemalloc/releases/tag/5.4.0)

The headline is the calendar, not the changelog. jemalloc's previous minor release, 5.3.0, landed in May 2022; 5.4.0 arrived September 17, so this is the first feature release of the 5.x line in more than four years. Over 160 commits, and the release notes describe them with unusual bluntness as mostly technical debt — refactorings, bug fixes, test coverage, option cleanups.

The real feature is pinned memory. `EXTENT_ALLOC_FLAG_PINNED` lets custom extent-allocation hooks mark non-reclaimable mappings such as HugeTLB pages so they get preferentially reused outside the normal decay and purge pipeline, and the matching `stats.pinned`, `stats.arenas.<i>.pinned`, and per-extent pinned-byte mallctls finally make pinned usage observable. If you run jemalloc with huge pages, this is the change you've wanted: previously the allocator and your pinning policy were arguing about the same pages with no way to see who was winning.

The incompatible change is the tcache policy. Fill and retention targets per bin are now adapted to demand observed between GC events instead of the old fixed refill and flush policy, and seven legacy tuning knobs are gone — `lg_tcache_nslots_mul`, `tcache_nslots_small_min`, `tcache_nslots_small_max`, `tcache_nslots_large`, `tcache_gc_delay_bytes`, `lg_tcache_flush_small_div`, `lg_tcache_flush_large_div`. Set those in `malloc_conf` and they're silently ignored, while the corresponding `opt.*` mallctls return `ENOENT` — silently ignoring a config knob is the kind of choice that produces a very slow incident later, so go find them in your config before you upgrade. `tcache_ncached_max` still works. Also fixed: `errno` is now preserved across `free`, `free_sized`, and `free_aligned_sized` and across `process_madvise`-based purging; `free_sized()` and `free_aligned_sized()` accept `NULL` per C23; a potential deadlock in `arena_reset`; a prof-sampling guard-page interaction; and TSD lifecycle edge cases around late deallocations after thread teardown. The `runtime experimental_infallible_new` option is now compile-time `--enable-cxx-infallible-new`, which is a straightforward win for move-constructor optimization.

---

## How to Write with an LLM
**296 points** · [sockpuppet.org](https://sockpuppet.org/blog/2026/09/17/how-to-write-with-an-llm/)

Two rules and one workflow. Rule One: you may not use a single word an LLM suggests to you. Rule Two: treat its praise as a defect, because the model's default posture is encouragement and it will tell you a mediocre draft is good. The reasoning behind Rule One is sharper than it first sounds — frontier models are optimized to produce pleasing turns of phrase, so their suggestions arrive pre-headlined, and an article written in a stream of individually excellent phrasings reads like a magazine with no masthead.

The workflow is a loop you can actually run: draft it yourself, hand it to a strong model strictly to identify problems, rewrite the flagged paragraphs yourself, then give the original and the rewrite to a *second* model with no knowledge of the editing process and ask which is better. That last step is the workaround for the bias most people miss — if the model you edited with is also the model judging the revision, it already knows what you want to hear. He's explicit that this requires some tooling, sketches a Python/HTMX/SQLite/Tailwind workshopping app, and suggests running the passes through the Codex, Claude, or Antigravity CLIs. The recommended reading is "Style: Lessons in Clarity and Grace," which he pitches to programmers as a schematics book for prose.

What makes this land is the underlying claim about audiences: readers detect LLM prose at parts-per-trillion, no matter how much you scuff it up, so LLM-assisted writing only works when the voice and the judgment stay with the human and the model does the exhausting, mechanical scanning — passive voice, nominalized verbs, filler adverbs, paragraphs that belong somewhere else. It's the opposite of the "prompt it to write this for me" advice and it's the correct shape of the tool. The closing note is honest: he fed the finished piece to GPT-5, which said it was 20% too long, and he's not fixing it. Correct call, and a nice demonstration of Rule Two.

---

## US Military Had Close Call After Using AI for False Intelligence Report
**230 points** · [CNN](https://www.cnn.com/2026/09/18/politics/us-military-ai-false-intelligence-china-ship)

A special operations command analyst queried a chatbot about intelligence reporting on a ship's manifest that originated with US Special Operations Command Pacific. The bot fused open-source material with classified signals intelligence held in government systems, concluded that a Chinese vessel in the Middle East was carrying components of a nuclear weapons program, and produced an intelligence report. That report circulated across the US military this spring, during the war with Iran, and triggered plans to intercept the vessel: per CNN's four sources, armed personnel were preparing to board and military planes were in the air.

It was only just before the operation that officials dug into the report's provenance and found it had been AI-assisted, and that the chatbot had misidentified the cargo. One source's characterization of the report is "entirely false." Another's is that it "almost started a war." CNN could not determine what the misidentified cargo actually was, and could not establish whether the chatbot was a commercial product or a government one — which is less reassuring than it sounds. A former senior US official's description of the government's tooling is the sentence to remember: "The internal tools are mostly just copies of the commercial stuff wearing lipstick."

The structural problem isn't that an analyst used a chatbot. It's that the output was packaged into "the kind of report trusted by military officials" using the same tool, and that the trust in the format was doing the work that verification should have done. Add the January "AI Acceleration Strategy" push to speed adoption across targeting, logistics, and supply chains, and you have an institution removing the friction from a pipeline whose only defense against a single fabricated sentence was human skepticism downstream. CNN notes that SOCPAC and the Pentagon did not respond to requests for comment. Nobody in this story was doing something exotic; the failure mode is a long, boring dependency chain with an unaudited model in the middle and a weapons-release decision at the end.

---

## Inside ZCode: Silently Uploading Your Entire Git History to the Cloud
**204 points** · [ferstar](https://blog.ferstar.org/en/posts/zcode-silent-workspace-snapshot-upload/)

This is the story of the day, and it starts with disk cleanup. `~/.zcode` — the data directory of Zhipu's AI coding desktop app — had grown past 700 MB. Inside `v2/checkpoints/`, a state file described a 313,070,842-byte encrypted archive built from a 345,549,173-byte workspace, labeled `baseline`, with a `failureCount` of 564. It was a full snapshot of a commercial project, sitting in a pending directory, retrying.

The author read the client's `app.asar` to reconstruct the pipeline, and it's textbook envelope encryption in the worst possible way: the client asks `zcode.z.ai` for credentials, receives an object key plus an RSA public key for that encryption round, packs the workspace into a `tar.gz`, encrypts it with AES-256-CTR, wraps the symmetric key with RSA-OAEP-SHA256 using the *server-supplied* public key, and posts the result directly to Aliyun OSS; OSS then calls back to Zhipu to register the snapshot. The private key never touches your machine. The author tried every local private key against the envelope and, as expected, failed. That ciphertext on your own disk cannot be opened by you, or by the client, or by anything except Zhipu's backend.

What gets packed is the damning part. Every capture is unconditional — the manifest is written in plaintext locally, and on a 42,411-file snapshot the breakdown is `.git/lfs/` at 196.1 MB (56.8%), `.git/objects/` at 102.2 MB (29.6%), `.git/logs/` reflogs, and source and docs at 46.2 MB (13.4%). The `.git` directory alone is 86.6% of the payload. So the cloud doesn't receive your working tree, it receives your repository's entire lineage: historical API keys and secrets deleted in later commits, unpushed local branch names that telegraph unreleased work, and internal GitLab hostnames and paths from `.git/config`. A second manifest, `repo_snapshot_extra_manifest`, hashes global app config files across workspaces. Captures fire on `captureBeforePrompt` and on task completion tagged `repo-wiki-update`; one active session produced up to 62 capture events.

The two UI switches are the part that should end the "just a telemetry preference" defense. "Optimize Experience" (`optimizeAgentExperienceEnabled`) governs whether data may be used for model training, not whether it is collected and uploaded. "Repo Snapshot Indexing" (`repoSnapshotIndexingEnabled`) governs server-side indexing of snapshots already uploaded. The capture sidecar is instantiated unconditionally at startup with no gating on user preferences; the only requirement is a valid JWT. Logged in means active, and no setting turns it off. The privacy policy mentions collecting text, files, and code submitted during conversations, and does not mention workspace snapshot uploads anywhere. Deleting the pending archive is whack-a-mole — half an hour later it had re-captured, `failureCount` ticking from 564 to 565. The fix is to lock the directory at the kernel level (`chattr +i` on Linux, `chflags uchg` on macOS), which has the accepted trade-off of breaking the checkpoint rollback UI. Normal chat, autocomplete, and tool execution keep working.

The whole episode is more interesting for who shipped it. Yesterday's roundup covered Zhipu's genuinely impressive write-up on building GLM inference on Chinese accelerators — a company demonstrating real engineering rigor in public. Today the same company's desktop app is uploading repositories the user cannot decrypt, with keys that only the vendor holds, defended by switches that don't do what their labels say.

---

## The Throughline

Every story in this batch is about custody of something the user assumed they held.

Passkeys don't remove your account's weakest recovery path, they move it — and in the current ecosystem, the thing you're trusting is a vendor's sync service or a key you can't back up. ZCode packages your repository history into ciphertext that only its servers can read, and labels the off-switch with a different meaning than the label implies. A chatbot in a military intelligence pipeline owns the conclusion, and the format's authority survives the verification step. Cloudflare's quick tunnel owns the hostname and the edge, and the page's confidence about exposure is precisely the confidence it doesn't document. OpenAI's forum, which is not a product anyone thinks of as part of OpenAI's attack surface, was the door into the monorepo, because that's what SSO does — it flattens "which service" into "which identity."

The stories that read as optimistic are the ones that kept the invariants explicit. jemalloc's four-years-late release is a pile of bug fixes and tech debt, which is what a project that documents its own incompatible changes looks like — and the reason the tcache policy change is scary rather than malicious is that it's written down in the release notes. And the writing advice lands for the same reason: the model is useful exactly to the extent that the human keeps ownership of the voice and the judgment, and it becomes a liability the moment it's allowed to own either. New technology doesn't remove responsibility from the person who made the decision. The failures above are all versions of one mistake — treating a tool's confidence as a substitute for your own.
