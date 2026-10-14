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
  - Preserve mathematical derivations and $\LaTeX$ equations across all three language files (verify KaTeX compatibility and unescaped literal `$` protection).
  - Maintain structural comparison scorecards and probability distribution matrices in clean ASCII/Unicode across all language versions.
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
