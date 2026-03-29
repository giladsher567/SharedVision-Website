# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

No test or lint scripts are configured.

## Stack

- **Vanilla HTML/CSS/JavaScript** — no React, Vue, or other UI frameworks
- **Vite** for bundling (multiple entry points)
- **Tailwind CSS** via CDN (`cdn.tailwindcss.com`)
- **Lucide icons** via CDN (`unpkg.com/lucide`)
- **Deployed on Vercel** — see `vercel.json` for routing rules

## Architecture

### Bilingual site (Hebrew + English)

- Root pages (`index.html`, `services.html`, `contact.html`, `lead.html`) are **Hebrew**
- `/en/` subdirectory mirrors all pages in **English**
- `script.js` is shared across all pages; it detects language via `isEN = window.location.pathname.includes('/en/')` and uses `normalizeInternalHref()` to route links correctly per language

### Entry points (vite.config.ts)

All HTML files are explicit rollup entry points — adding a new page requires registering it there.

### Routing (vercel.json)

Clean URLs are handled by Vercel rewrites (`.html` extension stripped). `/en` redirects to `/en/` (301). No client-side router exists.

### script.js

Shared JS handles:
- **Language-aware link normalization** — internal links automatically get the correct `/en/` prefix
- **Scroll animations** — `IntersectionObserver` triggers entrance animations on `.animate-on-scroll` elements; child stagger via `.stagger-item`
- **Mobile menu** — dynamically built overlay with language-aware links

### style.css — Design tokens

All colors are CSS custom properties:
```
--color-space-deep, --color-space-deep-lighter  (dark backgrounds)
--color-turquoise: #33D4F1
--color-purple: #A54FF5
--color-glass-bg / --color-glass-border         (glassmorphism)
```

Fonts: `Assistant` (body) and `Heebo` (headings) from Google Fonts.

### Adding a new page

1. Create both `<page>.html` (Hebrew) and `en/<page>.html` (English)
2. Add both to `rollupOptions.input` in `vite.config.ts`
3. Add Vercel rewrite rules in `vercel.json`
4. Include `<script src="/script.js" defer></script>` in both files
