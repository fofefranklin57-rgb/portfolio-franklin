<div align="center">

# Franklin Fofe Nodem — Portfolio

**Full Stack Developer · Flutter & Mobile · Product Builder**

[![Live](https://img.shields.io/badge/Live-portfolio--franklin.pages.dev-1B3A6B?style=for-the-badge)](https://portfolio-franklin.pages.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=for-the-badge&logo=cloudflare)](https://pages.cloudflare.com)

</div>

---

## Overview

Personal portfolio and professional showcase for Franklin Fofe Nodem — full stack developer based in Yaoundé, Cameroon, specializing in Flutter mobile apps, Cloudflare Workers backends, and Supabase-powered SaaS products.

The site includes a Supabase-backed CMS with an authenticated admin dashboard for managing projects, writing, and insights — no rebuild needed when publishing new content.

**Live at:** [portfolio-franklin.pages.dev](https://portfolio-franklin.pages.dev)

---

## Features

### Public Site
- **Projects** — detailed case studies for ImmoGest, Kalamundi, and other work
- **Writing** — technical articles and essays
- **Insights** — short-form notes and learnings
- **About** — background, skills, and approach
- **CV** — downloadable résumé (English & French)
- **Contact** — direct contact form

### CMS (Admin)
- Authenticated admin dashboard (`/admin/login`)
- Create, edit, and publish insights directly from the browser
- Supabase Storage for images
- No rebuild required — content updates are live instantly

### Technical
- **Bilingual** — French and English, switchable per-page
- **Dark mode** — persisted in localStorage
- **Static export** — deployed as static files, no server required
- **SEO-optimized** — meta tags, Open Graph, structured data
- **Responsive** — mobile-first design

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 with `output: 'export'` (static) |
| **Language** | TypeScript |
| **Styling** | CSS custom properties (no framework) |
| **i18n** | next-intl — French & English |
| **CMS / DB** | Supabase (PostgreSQL + Storage) |
| **Auth** | Supabase Auth (admin dashboard) |
| **Deployment** | Cloudflare Pages (auto CI/CD via GitHub) |

---

## Local Development

### Prerequisites
- Node.js 18+
- A Supabase project (for CMS features)

### Setup

```bash
git clone https://github.com/fofefranklin57-rgb/portfolio-franklin.git
cd portfolio-franklin

npm install

# Configure environment variables
cp .env.example .env.local
```

Add to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

```bash
# Start development server
npm run dev

# Build static export
npm run build
```

### Supabase Setup

Run the migrations in `migrations/` to set up the database schema:

```sql
-- V001: insights table + storage bucket + RLS policies
-- V002: seed articles
```

The admin dashboard is available at `/admin/login` — use your Supabase Auth credentials.

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized pages (fr/en)
│   │   ├── projects/
│   │   ├── writing/
│   │   ├── insights/
│   │   ├── about/
│   │   ├── cv/
│   │   └── contact/
│   └── admin/             # CMS dashboard (authenticated)
├── components/
│   ├── layout/            # Header, Footer
│   └── admin/             # Admin UI components
├── content/               # Static content (MDX/JSON)
├── i18n/                  # Translation files (fr, en)
└── lib/                   # Supabase client, utilities
```

---

## Deployment

Pushes to `main` automatically deploy to Cloudflare Pages.

```bash
git push origin main
# → Cloudflare Pages: npm run build → deploys /out
```

Set these environment variables in Cloudflare Pages dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## License

MIT © 2024 Franklin Fofe Nodem — see [LICENSE](LICENSE)
