# Duk Lee Blog Platform (Monorepo)

A multi-site Astro monorepo supporting **Option 1 (Monorepo with Shared UI Packages)** for static site generation (SSG).

## 📁 Repository Structure

```text
myblog-2026/
├── packages/
│   └── ui/                     # Shared design system (@repo/ui)
│       ├── src/
│       │   ├── components/     # Header, PromoBanner, AudioPlayer
│       │   ├── layouts/        # BaseLayout.astro, BlogPostLayout.astro
│       │   ├── styles/         # global.css (fonts, theme tokens)
│       │   └── i18n/           # Shared translations & localization helpers
│       ├── package.json
│       └── tsconfig.json
├── apps/
│   ├── main-site/              # Primary blog: https://duklee.net
│   │   ├── src/
│   │   │   ├── content/        # Collections (blog, blog_ko, nakseojang)
│   │   │   ├── data/           # profile.json, library.json
│   │   │   └── pages/          # Writing, Nakseojang, Library, RSS
│   │   ├── public/             # Static assets, images, icons
│   │   ├── astro.config.mjs    # site: 'https://duklee.net'
│   │   └── wrangler.jsonc      # Cloudflare Pages / Workers configuration
│   ├── ai-site/                # AI publication: https://ai.duklee.net
│   │   ├── src/
│   │   │   ├── content/        # AI-focused content collections
│   │   │   ├── data/           # profile.json (AI site metadata)
│   │   │   └── pages/          # AI Writing, RSS, EN/KO pages
│   │   ├── public/             # Static assets, images, icons
│   │   ├── astro.config.mjs    # site: 'https://ai.duklee.net'
│   │   └── wrangler.jsonc      # Cloudflare Pages / Workers configuration
│   ├── health-site/            # Health publication: https://health.duklee.net
│   │   ├── src/
│   │   │   ├── content/        # Health-focused content collections
│   │   │   ├── data/           # profile.json (Health site metadata)
│   │   │   └── pages/          # Health Writing, RSS, EN/KO pages
│   │   ├── public/             # Static assets, images, icons
│   │   ├── astro.config.mjs    # site: 'https://health.duklee.net'
│   │   └── wrangler.jsonc      # Cloudflare Pages / Workers configuration
│   └── market-site/            # Stock Market publication: https://market.duklee.net
│       ├── src/
│       │   ├── content/        # Market-focused content collections
│       │   ├── data/           # profile.json (Market site metadata)
│       │   └── pages/          # Market Writing, RSS, EN/KO pages
│       ├── public/             # Static assets, images, icons
│       ├── astro.config.mjs    # site: 'https://market.duklee.net'
│       └── wrangler.jsonc      # Cloudflare Pages / Workers configuration
├── package.json                # Workspaces root
└── pnpm-workspace.yaml         # pnpm workspace definition
```

## 🛠️ Monorepo Features

- **Zero UI Duplication:** `duklee.net`, `ai.duklee.net`, `health.duklee.net`, and `market.duklee.net` consume base layouts, typography (Playfair Display + Roboto Mono), colors, audio players, code snippet copy buttons, image zoom lightbox, and header navigation from `@repo/ui`.
- **Domain-Specific SEO:** Each site generates its own canonical URLs, OpenGraph tags, sitemaps (`sitemap-index.xml`), and RSS feeds targeting its own domain (`duklee.net`, `ai.duklee.net`, `health.duklee.net`, and `market.duklee.net`).
- **Context-Aware Navigation:** The shared `<Header />` displays:
  - On the main site: `Duk Lee` logo with links to Writing, 낙서장, Library, `AI ↗`, `Health ↗`, and `Market ↗`.
  - On the AI site: `Duk Lee / AI` branding linking back to the parent brand, with `Writing`, `Main Blog ↗`, `Health ↗`, `Market ↗`, and `EN / KO` switcher.
  - On the Health site: `Duk Lee / Health` branding linking back to the parent brand, with `Writing`, `Main Blog ↗`, `AI ↗`, `Market ↗`, and `EN / KO` switcher.
  - On the Market site: `Duk Lee / Market` branding linking back to the parent brand, with `Writing`, `Main Blog ↗`, `AI ↗`, `Health ↗`, and `EN / KO` switcher.
- **Independent Builds & Deployments:** Content additions on any site build and deploy independently without rebuilding other sites.

## 🧞 Available Scripts

Run these commands from the repository root:

| Command | Action |
| :--- | :--- |
| `npm run dev:main` | Starts local dev server for **main-site** on `http://localhost:4321` |
| `npm run dev:ai` | Starts local dev server for **ai-site** on `http://localhost:4322` |
| `npm run dev:health` | Starts local dev server for **health-site** on `http://localhost:4323` |
| `npm run dev:market` | Starts local dev server for **market-site** on `http://localhost:4324` |
| `npm run build` | Builds **all** sites to their respective `dist/` folders |
| `npm run build:main` | Builds only **main-site** (`apps/main-site/dist`) |
| `npm run build:ai` | Builds only **ai-site** (`apps/ai-site/dist`) |
| `npm run build:health` | Builds only **health-site** (`apps/health-site/dist`) |
| `npm run build:market` | Builds only **market-site** (`apps/market-site/dist`) |
| `npm run preview:main` | Preview the production build of **main-site** |
| `npm run preview:ai` | Preview the production build of **ai-site** |
| `npm run preview:health` | Preview the production build of **health-site** |
| `npm run preview:market` | Preview the production build of **market-site** |
| `npm run deploy:main` | Deploys **main-site** with Cloudflare Wrangler |
| `npm run deploy:ai` | Deploys **ai-site** with Cloudflare Wrangler |
| `npm run deploy:health` | Deploys **health-site** with Cloudflare Wrangler |
| `npm run deploy:market` | Deploys **market-site** with Cloudflare Wrangler |

## 🚀 Deployment

- **Main site (`duklee.net`):** Deploy `apps/main-site` (output folder: `apps/main-site/dist`).
- **AI site (`ai.duklee.net`):** Deploy `apps/ai-site` (output folder: `apps/ai-site/dist`).
- **Health site (`health.duklee.net`):** Deploy `apps/health-site` (output folder: `apps/health-site/dist`).
- **Market site (`market.duklee.net`):** Deploy `apps/market-site` (output folder: `apps/market-site/dist`).
