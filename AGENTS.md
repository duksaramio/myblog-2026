# Agent Workspace Guidelines

## 1. Strict AI-Generated Image Prohibition
- **NEVER generate or embed AI-generated/synthetic images:**
  - Do NOT call `generate_image` or import synthetic artwork for blog posts.
  - Do NOT use generated illustrations, conceptual 3D renders, or synthetic covers.
- **Allowed Visual Assets:**
  - Authentic primary source artifacts only: official SEC filing excerpts, official company diagrams, analyst charts, or direct screenshots with proper attribution.
  - If no authentic primary visual exists, omit the `image:` frontmatter attribute or point to the site default `/og-image.png`. The site layout will handle the fallback cleanly.

## 2. Bilingual Parity Requirement
- Every new blog post or substantial revision must be published in both English and Korean:
  - English path: `apps/<site>/src/content/blog/<slug>.md`
  - Korean path: `apps/<site>/src/content/blog_ko/<slug>.md`
- Ensure frontmatter metadata matches, with translated `title`, `description`, and tags.

## 3. Deep Research & Link Verification
- Test cited URLs programmatically before publishing:
  `curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "<TARGET_URL>"`
- Empirical claims and metrics require 2+ independent primary or reputable sources.

## 4. Verification & Deployment Pipeline
- Always verify the Astro build before committing:
  `npm run build:<workspace>` (e.g., `npm run build:market`, `npm run build:main`, `npm run build:ai`, `npm run build:health`)
- Deploy only after the build succeeds:
  `npm run deploy:<workspace>` (e.g., `npm run deploy:market`)