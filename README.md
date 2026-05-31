# ITC Portal — Full Redesign Prototype

A complete multi-page prototype for [ITC Limited](https://itcportal.com/), built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

> **Note:** This runs locally at `http://localhost:3000` — it does not replace the live ITC website.

## Site map (31 pages)

| Section | Routes |
|---------|--------|
| **Home** | `/` |
| **About** | `/about`, `/about/history`, `/about/leadership`, `/about/awards` |
| **Businesses** | `/businesses`, `/businesses/fmcg`, `/agri`, `/paper`, `/packaging`, `/it` |
| **Brands** | `/brands` |
| **Sustainability** | `/sustainability`, `/sustainability/reports` |
| **Investors** | `/investors` |
| **Media** | `/media`, `/media/[article-slug]` (6 articles) |
| **Careers** | `/careers` |
| **Contact** | `/contact` |
| **Legal** | `/legal/terms`, `/legal/privacy`, `/legal/policies` |
| **Utility** | `/sitemap`, `404` |

## Features

- Video hero with local MP4 + poster fallback
- Official ITC logo and photography
- **Mega-menu** navigation with hover dropdowns
- **Site search** (⌘K / Ctrl+K) across pages, news, brands & businesses
- **Theme modes:** Light → Dark → Auto (7PM–6AM) → System
- Scroll animations, breadcrumbs, sub-navigation
- Fully linked footer with 4 column sitemap
- Responsive mobile menu with all sections

## Getting started

```bash
npm install
npm run dev
```

Open **http://localhost:3000**

If you see an old or broken page, another app may be using port 3000. Try **http://localhost:3001** instead, or stop other terminals running `next dev` and run `npm run dev` again.

### Troubleshooting “page not showing properly”

1. **Use the dev server** — do not open HTML files from the folder. Run `npm run dev` first.
2. **Correct URL** — open `http://localhost:3000` (not itcportal.com).
3. **Hard refresh** — press `Ctrl + Shift + R` to clear cached CSS.
4. **Theme toggle** — click the sun/moon icon in the header if text is hard to read (try Light mode).
5. **Port conflict** — if terminal says “port 3000 in use”, use the URL it prints (often `http://localhost:3001`).

## Project structure

```
src/
├── app/                 # All routes (App Router)
├── components/          # UI sections & layout
├── data/                # Content, navigation, search index
│   ├── content.ts       # About, investors, careers, legal
│   ├── businesses.ts    # Business division details
│   ├── news.ts          # Articles with slugs & body text
│   ├── brands.ts        # World of Brands data
│   ├── navigation.ts    # Mega menu & sitemap
│   └── search.ts        # Client-side search
└── lib/theme.ts         # Auto dark mode logic
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build (31 static pages) |
| `npm run start` | Serve production build |
