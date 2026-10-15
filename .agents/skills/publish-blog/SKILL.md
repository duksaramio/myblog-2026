---
name: publish-blog
description: >-
  Use this skill when researching, drafting, editing, or deploying blog posts across the myblog-2026 platform sites (market-site, ai-site, health-site, main-site).
---

# Blog Publishing Workflow

Use this runbook to research, write, verify, and deploy blog posts across the platform sites.

## 1. Research & Fact Verification
- Follow [.agents/rules/deep-research.md](../../rules/deep-research.md) for mandatory epistemic invariants (hierarchy of evidence, rival causes, statistical audits, negative view).
- For in-depth investigative, market, or architectural analyses, follow the runbook in [.agents/skills/deep-dive/SKILL.md](../deep-dive/SKILL.md).
- Test all cited URLs programmatically before publishing:
  ```bash
  curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "<TARGET_URL>"
  ```
- Corroborate claims with at least 2 independent primary/reputable sources (avoid wire echoes).

## 2. Trilingual Drafting
Ensure all posts are created simultaneously in all three languages:
- **English Post:** `apps/<site>/src/content/blog/<YYYY-MM-DD-slug>.md`
- **Korean Post:** `apps/<site>/src/content/blog_ko/<YYYY-MM-DD-slug>.md`
- **Chinese Post:** `apps/<site>/src/content/blog_zh/<YYYY-MM-DD-slug>.md`

- **Agent-Driven Translation:** Always translate directly using the agent or parallel subagents. Avoid using local LLM background services or external batch scripts that introduce bottlenecks.
- **Frontmatter Quoting Invariant:** Always enclose `title: "..."` and `description: "..."` in double quotes. Never leave multi-line descriptions unquoted or containing unquoted colons or dashes that break YAML parsing.
- **Deep-Dive Preservation Invariant:** When converting deep-dive investigations into blog posts:
  - Preserve multi-term mathematical derivations as standalone `$$ ... $$` display equations across all three language files (rendered via KaTeX in `BlogPostLayout.astro`).
  - **Never** wrap inline prose measurements, physical units, multipliers, or currency in `$ ... $` LaTeX (e.g., write `858 mm²`, `30 µm`, `13.5 nm`, `6-inch × 6-inch`, `250°C`, `4F²`, and `$30,000+` in native Unicode instead of `$858\text{ mm}^2$` or `$\$30,000+$`).
  - Never use LaTeX inside Markdown headings (`#`, `##`, `###`).
  - **Native Markdown Table Invariant:** Format all tables, structural comparison scorecards, causal audit matrices, and probability distribution matrices as **native GFM Markdown tables (`| ... |`)** across all language versions. **NEVER** wrap tables, scorecards, or matrices inside fenced code blocks (` ``` `) or draw them with ASCII/Unicode box-drawing characters (`┌─┬─┐`, `+---+---+`, `===`). Every logical record must be its own Markdown row (`| col1 | col2 |`)—never collapse multiple logical rows into a single table row using `<br>`. Always escape literal pipe characters inside table cells (e.g., conditional probabilities `P(A \| B)`) as `\|`.
  - **Mermaid Diagram & Chart Invariant (No ASCII Diagrams or Charts):** Never draw flowcharts, capital structure trees, mechanism schematics, timelines, decay curves, or bar/line plots using ASCII/Unicode box-drawing or arrow characters (`┌─┬─┐`, `│`, `▼`, `──►`, `█`) inside plain fenced code blocks (` ``` `). Always render all diagrams, flowcharts, schematics, and quantitative charts using **Mermaid (` ```mermaid `)** (`flowchart TD`, `flowchart LR`, `xychart-beta`, `sequenceDiagram`, `stateDiagram-v2`) across all language versions. Always wrap Mermaid node labels in double quotes (`A["Label ($100 / 50%)"]`), always give subgraphs an explicit alphanumeric ID with a double-quoted title (`subgraph SG1["Subgraph Title (Details)"]`), use single quotes `'...'` inside `"..."`, and use `<br/>` for line breaks inside labels.
  - Ensure domain-specific technical terminology parity across all three languages (e.g. English *Vertical Surrounding Gate (VSG)*, Korean *수직 서라운딩 게이트*, Chinese *垂直环绕栅极*).

### Frontmatter Schema
```yaml
---
title: "Post Title"
description: "Summary of the article"
pubDate: 2026-10-07
heroImage: "/og-image.png"  # Default site OG image or authentic chart/screenshot
tags: ["tag1", "tag2"]
lang: "en"  # "en", "ko", or "zh"
---
```

## 3. Strict Image Invariant
- **NEVER** use AI-generated images or invoke `generate_image`.
- Only use authentic primary diagrams, charts, or screenshots from verified sources.
- For social media / X posts, use direct blockquotes and primary source links instead of screenshots.
- If no authentic graphic is needed, omit or default to `/og-image.png`.

## 4. Build Verification
Before building, verify that no stray inline LaTeX commands (`\text{`, `\mu`, `\$`), untagged ASCII code blocks, or unquoted Mermaid `subgraph` titles exist across the trilingual post files:
```bash
# 1. Check for stray inline LaTeX outside $$ ... $$ blocks
grep -n '\\' apps/<site>/src/content/blog*/<YYYY-MM-DD-slug>.md

# 2. Check for unquoted Mermaid subgraph titles with parentheses (breaks Mermaid v11 parser)
grep -nE 'subgraph [^"\[]+\(' apps/<site>/src/content/blog*/<YYYY-MM-DD-slug>.md
```

Before committing or deploying, run the site-specific build to catch Astro type or markdown errors:
```bash
# Main site
npm run build:main

# Market site
npm run build:market

# AI site
npm run build:ai

# Health site
npm run build:health
```

## 5. Deployment
Deploy to Cloudflare Pages via the monorepo workspace scripts:
```bash
npm run deploy:<workspace>
# Example:
npm run deploy:market
```

## 6. Synchronize Main Site Writing List
Because `apps/main-site` aggregates posts across all sub-sites (`ai-site`, `health-site`, `market-site`) into its homepage writing list, whenever a post is published to any sub-site, always re-build and deploy `main-site`:
```bash
npm run build:main && npm run deploy:main
```

## 7. Post-Deployment Verification
After deploying, programmatically verify that all language endpoints return HTTP 200:
```bash
curl -s -o /dev/null -w "%{http_code}\n" -L --max-time 10 "<SITE_URL>/zh"
curl -s -o /dev/null -w "%{http_code}\n" -L --max-time 10 "<SITE_URL>/ko"
curl -s -o /dev/null -w "%{http_code}\n" -L --max-time 10 "<SITE_URL>/"
```
