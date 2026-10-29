# Agent Workspace Guidelines

## 1. Strict AI-Generated Image Prohibition
- **NEVER generate or embed AI-generated/synthetic images:**
  - Do NOT call `generate_image` or import synthetic artwork for blog posts.
  - Do NOT use generated illustrations, conceptual 3D renders, or synthetic covers.
- **Allowed Visual Assets:**
  - Authentic primary source artifacts only: official SEC filing excerpts, official company diagrams, analyst charts, or direct screenshots with proper attribution.
  - For social media commentary (e.g., X / Twitter threads, LinkedIn), use direct blockquotes and primary post URLs instead of embedding screenshots of tweets.
  - If no authentic primary visual exists, omit the `image:` frontmatter attribute or point to the site default `/og-image.png`. The site layout will handle the fallback cleanly.

## 2. Multilingual Parity Requirement (Trilingual)
- Every new blog post or substantial revision must be published in English, Korean, and Chinese:
  - English path: `src/content/blog/<slug>.md`
  - Korean path: `src/content/blog_ko/<slug>.md`
  - Chinese path: `src/content/blog_zh/<slug>.md`
- Ensure frontmatter metadata matches, with translated `title`, `description`, and tags.
- **Frontmatter Formatting Invariant:**
  - Always wrap `title` and `description` in double quotes: `title: "..."` and `description: "..."`. Never leave multi-line descriptions unquoted or containing unquoted colons or markdown bullet dashes that break YAML parsing.
- **Typography & Math Formatting Invariant:**
  - Always use **native Unicode** for inline physical units, dimensions, multipliers, temperatures, and currency in headings, tables, and body prose (e.g., `858 mm²`, `30 µm`, `13.5 nm`, `6-inch × 6-inch`, `250°C`, `4F²`, `$30,000+`).
  - **NEVER wrap simple units, numbers, or currency in inline LaTeX** (such as `$858\text{ mm}^2$`, `$30\,\mu\text{m}$`, or `$\$30,000+$`). CommonMark strips backslashes in `\$` and `\%`, and LaTeX in headings breaks TOC anchor slugs and RSS feeds.
  - Reserve LaTeX (`$$ ... $$` standalone display blocks) strictly for multi-term mathematical equations and formal derivations.
- **Native Markdown Table Invariant:**
  - Always format tables, comparison scorecards, 4-way causal matrices, timelines, and probability scenario tables as **native GFM Markdown tables (`| ... |`)** across all three language versions (`blog`, `blog_ko`, `blog_zh`).
  - **NEVER** put tables, scorecards, causal matrices, or timelines inside fenced code blocks (` ``` `) using ASCII/Unicode box-drawing characters (`┌─┬─┐`, `+---+---+`, `===`), which render as dark `PLAINTEXT` code blocks with horizontal scrollbars.
  - **Multi-Row Table Invariant:** Every logical record or item in a table must be its own Markdown row (`| col1 | col2 |`). Never collapse multiple logical rows into a single table row separated by `<br>` tags.
  - Always escape literal pipe characters inside table cells (such as conditional probabilities `P(A \| B)`) as `\|`.
  - **Visible Table Grid Borders:** In UI styles (`src/styles/global.css` and `src/layouts/BlogPostLayout.astro`), always maintain explicit, high-contrast borders on `table` (`border-collapse: collapse; border: 1.5px solid rgba(0, 0, 0, 0.45)`), `th` (`border: 1px solid rgba(0, 0, 0, 0.35); border-bottom: 2px solid rgba(0, 0, 0, 0.5)`), and `td` (`border: 1px solid rgba(0, 0, 0, 0.3)`). Never use `var(--border-color)` for table borders because `:root { --border-color: rgba(0, 0, 0, 0.08); }` is nearly invisible against `#f5f4ef`.
- **Mermaid Diagram & Chart Invariant (No ASCII Diagrams or Charts):**
  - Never draw flowcharts, capital structure trees, mechanism schematics, timelines, decay curves, or bar/line plots using ASCII/Unicode box-drawing or arrow characters (`┌─┬─┐`, `│`, `▼`, `──►`, `█`) inside plain fenced code blocks (` ``` `), which render as dark `PLAINTEXT` code blocks.
  - Always render all diagrams, flowcharts, schematics, and quantitative charts using **Mermaid (` ```mermaid `)** (`flowchart TD`, `flowchart LR`, `xychart-beta`, `sequenceDiagram`, `stateDiagram-v2`) across all three language versions (`blog`, `blog_ko`, `blog_zh`), styled in `.mermaid-chart` containers with visible borders (`border: 1.5px solid rgba(0, 0, 0, 0.45)`).
  - **Mermaid v11 Syntax Guardrails:** Always wrap node labels in double quotes (`A["Label ($100 / 50%)"]`), always give subgraphs an explicit alphanumeric ID with a double-quoted title (`subgraph SG1["Subgraph Title (Details)"]`), use single quotes `'...'` inside `"..."`, and use `<br/>` for line breaks. In `xychart-beta`, ensure `x-axis [...]` and `bar [...]` / `line [...]` arrays have identical lengths and numeric data values.
- **Agent-Driven Translation:**
  - Translate directly within the agent or parallel subagents. Do NOT use local LLM background services or external batch scripts that introduce processing bottlenecks.

## 3. Deep Research & Epistemic Verification
- **Programmatic Link Verification:**
  - Test cited URLs programmatically before publishing:
    `curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "<TARGET_URL>"`
- **Primary Source Hierarchy & Anti-Echo Chamber:**
  - Empirical claims and metrics require 2+ structurally independent primary sources (SEC filings, peer-reviewed papers, official git repos). Secondary press aggregations do not qualify as independent corroboration.
- **Critical Thinking Standards (Browne & Keeley Framework):**
  - Follow the rules in `.agents/rules/deep-research.md` and the investigative runbook in `.agents/skills/deep-dive/SKILL.md`.
  - Always evaluate **Rival Causes** (4-way association test: direct, reverse, third variable, feedback loop).
  - Perform **Statistical Audits** (verify mean vs. median, range, distribution, and baseline denominators).
  - Execute the **Negative View** (identify who loses, hidden costs, and unstated assumptions).
  - Reject binary thinking; synthesize conclusions using contextual **If-Clauses**.

## 4. Verification & Deployment Pipeline
- **Automatic Deep-Dive Insight Blog Publishing:** Whenever `/deep-dive` (`.agents/skills/deep-dive/SKILL.md`) is invoked, always automatically write, build, commit, push, and deploy the corresponding trilingual (`blog`, `blog_ko`, `blog_zh`) insight blog post on `duklee.net` as part of the deep-dive execution without waiting for a separate user prompt.
- Always verify the Astro build before committing:
  `npm run build`
- Deploy only after the build succeeds:
  `npm run deploy`

## 5. Agent Customization Version Control
- All project-level agent rules (`.agents/rules/*.md`) and skills (`.agents/skills/*/SKILL.md`) are first-class codebase assets.
- Always ensure they are committed and pushed to `origin/main` when modified or created.
- Never add blanket `.agents/` ignores to `.gitignore`; keep `.agents/rules/` and `.agents/skills/` explicitly un-ignored.