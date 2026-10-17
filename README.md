# Duk Lee Blog (`duklee.net`)

Personal blog and notes built with [Astro](https://astro.build/) and deployed to Cloudflare via Wrangler.

## 📁 Repository Structure

```text
myblog-2026/
├── src/
│   ├── components/     # Header, PromoBanner, AudioPlayer, LibraryView, NakseojangView
│   ├── content/        # Trilingual blog collections (blog, blog_ko, blog_zh, nakseojang)
│   ├── data/           # profile.json, library.json
│   ├── i18n/           # Translations & localization helpers (EN, KO, ZH)
│   ├── layouts/        # BaseLayout.astro, BlogPostLayout.astro
│   ├── pages/          # Writing, Nakseojang, Library, RSS (EN, KO, ZH)
│   ├── styles/         # global.css (fonts, theme tokens)
│   └── utils/          # Unified blog post resolution (posts.ts)
├── public/             # Static assets, images, icons, robots.txt
├── astro.config.mjs    # Astro configuration (site: 'https://duklee.net')
├── wrangler.jsonc      # Cloudflare Pages / Workers configuration
├── package.json
└── tsconfig.json
```

## 🧞 Available Scripts

Run these commands from the repository root:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server on `http://localhost:4321` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run deploy` | Builds and deploys to Cloudflare (`duklee.net`) via Wrangler |
