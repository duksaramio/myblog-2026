---
description: "Blog publishing invariants: strict ban on AI images, trilingual parity (EN/KO/ZH), and YAML frontmatter quoting"
globs: ["apps/**/src/content/**", "apps/**/public/**"]
alwaysApply: true
---

# Blog Publishing Standards & Image Invariants

## 1. Strict AI-Generated Image Prohibition
- **NEVER generate or embed AI-generated/synthetic images:**
  - Do NOT call `generate_image` or import synthetic artwork for blog posts.
  - Do NOT use generated illustrations, conceptual 3D renders, or synthetic covers.
- **Allowed Visual Assets:**
  - Authentic primary source artifacts only: official SEC filing excerpts, official company diagrams, analyst charts, or direct screenshots with proper attribution.
  - If no authentic primary visual exists, omit the `image:` frontmatter attribute or point to the site default `/og-image.png`. The site layout will handle the fallback cleanly.

## 2. Multilingual Parity Requirement (Trilingual)
- Every new blog post or substantial revision must be published in English, Korean, and Chinese:
  - English path: `apps/<site>/src/content/blog/<slug>.md`
  - Korean path: `apps/<site>/src/content/blog_ko/<slug>.md`
  - Chinese path: `apps/<site>/src/content/blog_zh/<slug>.md`
- Ensure frontmatter metadata matches, with translated `title`, `description`, and tags.
- **Frontmatter Formatting Invariant:**
  - Always wrap `title` and `description` in double quotes: `title: "..."` and `description: "..."`. Never leave multi-line descriptions unquoted or containing unquoted colons or markdown bullet dashes that break YAML parsing.
- **Native Markdown Table Invariant:**
  - Format all tables, comparison scorecards, 4-way causal matrices, timelines, and probability scenario tables as **native GFM Markdown tables (`| ... |`)** across all language versions.
  - **NEVER** render tables, scorecards, causal matrices, or timelines inside fenced code blocks (` ``` `) using ASCII/Unicode box-drawing characters (`┌─┬─┐`, `+---+---+`, `===`), which force dark Shiki `PLAINTEXT` horizontal scrollboxes.
  - **Multi-Row Table Invariant:** Every logical record or item must be its own Markdown row (`| col1 | col2 |`). Never collapse multiple logical rows into a single table row separated by `<br>` tags.
  - Always escape literal pipe characters inside table cells (e.g., `P(Structure \| Sequence)`) as `\|`.
  - **Visible Table Grid Borders:** In shared UI styles (`packages/ui/src/styles/global.css` and `packages/ui/src/layouts/BlogPostLayout.astro`), always maintain explicit, high-contrast borders on `table` (`border-collapse: collapse; border: 1.5px solid rgba(0, 0, 0, 0.45)`), `th` (`border: 1px solid rgba(0, 0, 0, 0.35); border-bottom: 2px solid rgba(0, 0, 0, 0.5)`), and `td` (`border: 1px solid rgba(0, 0, 0, 0.3)`). Never use `var(--border-color)` for table borders because `:root { --border-color: rgba(0, 0, 0, 0.08); }` is nearly invisible against `#f5f4ef`.
- **Mermaid Diagram & Chart Invariant (No ASCII Diagrams or Charts):**
  - Never draw flowcharts, capital structure trees, mechanism schematics, timelines, decay curves, or bar/line plots using ASCII/Unicode box-drawing or arrow characters (`┌─┬─┐`, `│`, `▼`, `──►`, `█`) inside plain fenced code blocks (` ``` `).
  - Always render all diagrams, flowcharts, schematics, and quantitative charts using **Mermaid (` ```mermaid `)** (`flowchart TD`, `flowchart LR`, `xychart-beta`, `sequenceDiagram`, `stateDiagram-v2`) across all three language versions, styled in `.mermaid-chart` containers with visible borders (`border: 1.5px solid rgba(0, 0, 0, 0.45)`).
  - **Mermaid v11 Syntax Guardrails:** Always wrap node labels in double quotes (`A["Label ($100 / 50%)"]`), always give subgraphs an explicit alphanumeric ID with a double-quoted title (`subgraph SG1["Subgraph Title (Details)"]`), use single quotes `'...'` inside `"..."`, and use `<br/>` for line breaks. In `xychart-beta`, ensure `x-axis [...]` and `bar [...]` / `line [...]` arrays have identical lengths and numeric data values.
- **Agent-Driven Translation:**
  - Translate directly within the agent or parallel subagents. Do NOT use local LLM background services or external batch scripts that introduce processing bottlenecks.

## 3. Verification & Deployment
- Always verify the Astro content build before committing:
  `npm run build:<workspace>` (e.g., `npm run build:market`, `npm run build:main`, `npm run build:ai`, `npm run build:health`)
- Deploy only after build succeeds:
  `npm run deploy:<workspace>` (e.g., `npm run deploy:market`)
