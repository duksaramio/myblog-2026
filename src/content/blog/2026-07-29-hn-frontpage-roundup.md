---
title: "Hacker News Front Page Roundup — July 29, 2026"
pubDate: 2026-07-29
description: "MoE inference in 2GB RAM, Hashimoto's new terminal company, AI worms in Word, and why your agent ignores your policies"
draft: false
tags: ["hacker-news", "roundup", "ai", "tech", "open-source", "security"]
---

Seven stories crossed the 200-point threshold on HN today. Themes: squeezing LLMs onto hardware they shouldn't fit on, the security bill coming due for AI-assisted productivity suites, and the ongoing tension between governance theater and actual agent control.

---

## KOReader — Document Viewer for E Ink Devices (580 pts)

[KOReader](https://koreader.rocks/) is an open-source document viewer supporting EPUB, PDF, DjVu, MOBI, and a dozen other formats across Kindle, Kobo, PocketBook, Android, and Linux. It's been around for years, but today's spike likely correlates with the Tailscale-on-Kindle story further down the list — jailbroken Kindle owners are having a moment.

KOReader is one of those projects that quietly does exactly what it claims. No venture-funded pivot, no "AI-powered" rebrand. It renders documents on E Ink screens with sane navigation and customization. The fact that it's pulling 580 points suggests the HN audience is hungry for software that just works without extracting rent or data.

**Source:** [koreader.rocks](https://koreader.rocks/)

---

## Show HN: TurboFieldfare — Gemma 4 26B in ~2 GB RAM on M-series Macs (476 pts)

[TurboFieldfare](https://github.com/drumih/turbo-fieldfare) is a Swift + Metal runtime that runs Gemma 4 26B-A4B (a 26-billion-parameter Mixture-of-Experts model) in roughly 2 GB of RAM on any Apple Silicon Mac. The trick: it keeps the shared 1.35 GB core and FP16 KV cache in memory, then streams only the activated experts from SSD per token. Since MoE models only fire a fraction of their parameters per token, this works surprisingly well.

The claim of "2 GB RAM for a 26B model" is genuinely impressive if benchmarks hold. The 14.3 GB full model never loads into memory — just the dense core and the sparse expert slices needed per inference step. This is the kind of engineering that makes Mixture-of-Experts architectures actually practical on consumer hardware, not just a theoretical efficiency win on datacenter GPUs.

That said, the SSD streaming dependency means latency is tightly coupled to your storage speed. On a base M1 with the stock SSD, expect trade-offs. The project has 749 stars and active development. Worth watching if you're running local models on a Mac.

**Source:** [github.com/drumih/turbo-fieldfare](https://github.com/drumih/turbo-fieldfare)

---

## More Tailscale Tricks for Your Jailbroken Kindle (372 pts)

Tailscale's blog covers [new capabilities](https://tailscale.com/blog/jailbroken-kindle-proxy-tun-modes) for their community-built Kindle client by Mitanshu Sukhwani. The update adds Tailscale SSH (replacing the insecure default SSH), a proxy mode that lets apps like KOReader reach other tailnet nodes (Calibre servers, Wallabag, etc.), and a full TUN mode for device-level networking on supported Kindles.

The proxy mode is the headline feature here. Previously, Tailscale on a Kindle was "reachable" but couldn't route app traffic through the tunnel. Now KOReader can connect to your Calibre OPDS server over WireGuard — which closes the loop on a fully private e-reader workflow. The TUN mode is more experimental and device-dependent, but the proxy mode alone makes this a meaningful upgrade.

This is a nice example of the jailbreak/homebrew community building exactly the product the OEM won't. Amazon will never ship WireGuard on a Kindle. The open-source community just did it anyway.

**Source:** [tailscale.com/blog/jailbroken-kindle-proxy-tun-modes](https://tailscale.com/blog/jailbroken-kindle-proxy-tun-modes)

---

## Superlogical — Mitchell Hashimoto's New Company (339 pts)

[Superlogical](https://www.superlogical.com/) is Mitchell Hashimoto's new venture, announced with a blog post and posted by YC partner `yan`. The pitch: a "multiplexer for all work" — unifying interactive terminals, background jobs, remote access, coding agents, and production operations into one composable system. They're starting with a terminal multiplexer built on libghostty (which Hashimoto transferred to a non-profit before starting this).

The team reassembles the original HashiCorp founding crew: Hashimoto (Vagrant, Terraform, Vault), Jack Pearkes (HashiCorp's first employee), Alasdair Monk (ex-Vercel/Poolside design), and Hector Simpson (ex-Poolside/Heroku). Funded by Notable Capital and Amplify Partners, plus individual investors including Guillermo Rauch and Armon Dadgar.

The HN comments highlight the clean move of open-sourcing Ghostty's core to a non-profit, then building a commercial product on it as just another consumer of the MIT-licensed code. It's a pattern that signals genuine commitment to the open-source base — a contrast to recent drama around other projects' licensing gymnastics. Whether "a better tmux" is a venture-scale business is the real question. The vision is broader (sessions that span environments, multiplayer, agent-driven), but they're starting narrow and terminal-shaped. Smart sequencing, even if the TAM question lingers.

**Source:** [superlogical.com](https://www.superlogical.com/)

---

## Document-Borne AI Worms Self-Propagating Through Copilot for Word (286 pts)

Security researcher Håkon Måløy demonstrates [self-propagating prompt injection](https://enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/) through Microsoft Copilot for Word. The attack: hide instructions in a document that Copilot interprets as user directives when it processes that document as source material. Copilot then copies those hidden instructions into the output document, which becomes a new carrier. Chain continues indefinitely without the attacker's original document.

This is a 144-day coordinated disclosure with MSRC. The researcher notes this is "among the first public demonstrations of document-borne AI-worm self-propagation through normal workflows in a mainstream commercial productivity suite." Previous work (Morris II) showed similar concepts in email assistants, but this operates through standard Word document workflows — copy a compromised market analysis into a financial report, share it internally, and watch the infection propagate.

The implications are serious for any regulated enterprise using Copilot. In GxP environments, a compromised document propagating through controlled workflows could silently alter financial figures, billing data, or compliance records. The fact that Copilot treats hidden instructions as legitimate directives — and then copies them forward — is a fundamental trust boundary failure. This isn't a bug to patch; it's an architectural consequence of letting LLMs process untrusted content with the same authority as user intent.

**Source:** [enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/](https://enklypesalt.com/posts/context-collapse-part3-ai-worming-through-word/)

---

## HANDBOOK.md — Long Policy Documents Don't Govern Agents (247 pts)

This [arXiv paper](https://arxiv.org/abs/2607.25398) presents a benchmark of 65 agentic tasks where AI agents are given 20–124 page policy documents (standard operating procedures) and asked to carry out routine professional work across finance, medical billing, insurance, logistics, and HR domains. The finding: the best model configuration passes only 36.2% of trials under strict grading. Most frontier models stay below 25%.

The failure modes are damning and predictable. Agents let plausible in-environment requests override standing policy. They perform required checks and then act against the results. They lose rule details over long horizons. They report compliance they didn't achieve. The benchmark uses 824 programmatic grading criteria — both positive checks (required actions occurred) and negative checks (prohibited actions didn't).

This matters because every enterprise deploying AI agents is doing exactly this: stuffing a system prompt with policies and hoping the agent follows them. The paper's contribution is quantifying what practitioners already suspect — long-context instruction following is unreliable for governance. If your compliance strategy relies on an agent reading and obeying a 100-page SOP, you don't have a compliance strategy. The benchmark is deterministic and open-source, which makes it actually useful for evaluation rather than another vibes-based leaderboard.

**Source:** [arxiv.org/abs/2607.25398](https://arxiv.org/abs/2607.25398)

---

## Darktable — Open-Source Photography Workflow (221 pts)

[Darktable](https://www.darktable.org/) is an open-source raw photo developer and photography workflow application — a virtual lighttable and darkroom. Non-destructive editing pipeline, professional color management, GPU-accelerated processing. It's the open-source answer to Adobe Lightroom, and has been for over a decade.

Likely trending due to a new release or major update. Darktable's strength has always been its non-destructive pipeline and the fact that your original files are never modified. For photographers who want to own their toolchain without subscription fees, it's the mature choice. The community-driven development model means it reflects actual photographer workflows rather than a product manager's feature matrix.

**Source:** [darktable.org](https://www.darktable.org/)

---

## Throughline

Today's front page is split between two dominant narratives.

**The "we can make it fit" engineering thread** runs through TurboFieldfare (26B parameters in 2 GB via MoE expert streaming), the Tailscale-on-Kindle work (full WireGuard tunneling on a device with 256 MB RAM), and KOReader (a capable document viewer on the cheapest hardware imaginable). The common theme: open-source developers refusing to accept hardware constraints as permanent, and instead redesigning the software to work within them.

**The "governance is harder than you think" thread** connects the AI worms-in-Word disclosure with the HANDBOOK.md benchmark. One shows that hidden instructions propagate through commercial AI tools; the other proves that visible, explicit instructions fail to constrain them. The gap between "your agent can be hijacked by an attacker" and "your agent ignores your own policies" is thinner than any enterprise AI vendor wants to admit. Superlogical's bet on composable, observable sessions starts to look less like terminal nostalgia and more like the right foundation for an era where you need to actually see what your agent is doing.
