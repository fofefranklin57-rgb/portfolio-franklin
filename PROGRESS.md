# PROGRESS.md — Suivi de développement

> Lire ce fichier au début de chaque session pour savoir où on en est.
> Mettre à jour immédiatement après chaque tâche terminée.

---

## Phase actuelle : Phase 1 — MVP

**Statut** : ✅ Phase 1 MVP COMPLÈTE — commit b0c2774 — en attente push GitHub + deploy Cloudflare

---

## Décisions figées (ne plus remettre en question)

### Titre officiel
```
Product Builder | Software Developer
```

### Tagline officielle
```
I build digital products that solve real-world problems.
From SaaS platforms to real businesses, I turn ideas into working solutions.
```

### Micro-description officielle
```
Design · Build · Document · Ship
Software and AI are my tools. Real impact is the goal.
```

### Badge de disponibilité
```
🟢 Open to international remote opportunities
```

### CTA primaire / secondaire
```
Explore My Work  |  Download Resume
```

### Proof Strip (ordre figé)
```
4 Products Built  |  700 Catfish / Cycle  |  3+ Years Building  |  100% Remote Ready
```

### Couleur accent principale
```
#2563EB — bleu international. Aucune autre couleur principale.
```

### Photo
```
MVP : placeholder "FF" swap-ready (border-radius: 50%, fond #0F172A)
Définitif : photo professionnelle authentique, chaleureuse, pas studio corporate
```

### Signaux remote (badges)
```
UTC+1 — Europe-compatible  |  Français · English  |  Async-ready  |  Documentation-first
```

### Section Remote Ready — contenu validé
```
✓ Comfortable working asynchronously
✓ Documentation-first mindset
✓ Structured communication
```

### Skills — catégories validées
```
1. Building & Shipping
2. Design & Product
3. Data & Systems
4. AI Augmented
5. Documentation & Knowledge Management  ← ajout validé
6. Also done
```

---

## Phase 1 — MVP

### Bloc 1 — Fondations ✅
- [x] Projet Next.js 16.2.9 + TypeScript + CSS custom properties
- [x] next-intl 4.13.0 configuré (FR + EN)
- [x] src/proxy.ts (middleware Next.js 16, redirection locale)
- [x] Structure complète app/[locale]/...
- [x] Layout global (Header sticky + Footer + Nav mobile burger)

### Bloc 2 — Page Home ✅
- [x] Section Hero (FF placeholder + titre + tagline + micro + 4 pills + 2 CTA)
- [x] Section Proof Strip (4 métriques : 4 produits / 700 silures / 3+ ans / 100% remote)
- [x] Section Featured Projects (3 cartes : ImmoGest, Kalamundi, AgroNova)
- [x] Section About courte
- [x] Section Skills (6 catégories dont Documentation & Knowledge Management)
- [x] Section Remote Ready (3 cartes + 3 checkmarks)
- [x] Section ContactCTA

### Bloc 3 — Pages secondaires ✅
- [x] Page /about (biographie longue FR + EN)
- [x] Page /projects (4 projets : ImmoGest, Kalamundi, Traficam, AgroNova)
- [x] Page /contact (email + LinkedIn + GitHub + note disponibilité)

### Bloc 4 — SEO et déploiement
- [x] generateMetadata() sur chaque page
- [x] sitemap.ts + robots.ts
- [ ] Repo GitHub créé + push (attente création repo par Franklin)
- [ ] Déploiement Cloudflare Pages
- [ ] Domaine configuré

---

## Phase 2 — Contenu et crédibilité

- [ ] Page Resume + CV PDF FR + EN
- [ ] Pages projets détaillées (études de cas)
- [ ] Page Books (romans)
- [ ] Page Evidence (screenshots, métriques)
- [ ] Section Skills complète avec niveaux honnêtes
- [ ] Section Testimonials
- [ ] Timeline Journey
- [ ] Langues ES, PT, AR

## Phase 3 — SEO et acquisition

- [ ] Blog + 3 articles
- [ ] Page Learning
- [ ] JSON-LD Schema.org toutes pages
- [ ] RSS Feed
- [ ] Umami Analytics
- [ ] OG images dynamiques

## Phase 4 — Engagement

- [ ] PWA complète
- [ ] Statut disponibilité dynamique
- [ ] Calendly / lien d'appel
- [ ] Animations Framer Motion
- [ ] Newsletter Resend

---

## Stack technique installée

| Package | Version | Statut |
|---|---|---|
| next | 16.2.9 | ✅ |
| react | 19.2.4 | ✅ |
| typescript | ^5 | ✅ |
| tailwindcss | ^4 | ⚠️ installé mais non utilisé (dépendances corrompues) |
| next-intl | 4.13.0 | ✅ |
| lucide-react | 1.21.0 | ✅ (Github→GitFork, Linkedin→ExternalLink) |

---

## Variables d'environnement à configurer

```env
# .env.local (à créer, NE PAS committer)
RESEND_API_KEY=                        # Phase 1 - formulaire contact
NEXT_PUBLIC_BASE_URL=http://localhost:3000
# Phase 3 :
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
NEXT_PUBLIC_UMAMI_URL=
```

---

## Architecture des fichiers (cible Phase 1)

```
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx
│       ├── page.tsx              ← Home
│       ├── about/page.tsx
│       ├── projects/page.tsx
│       ├── projects/[slug]/page.tsx
│       └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── ProofStrip.tsx
│       ├── FeaturedProjects.tsx
│       ├── AboutSnippet.tsx
│       ├── Skills.tsx
│       ├── RemoteReady.tsx
│       └── ContactCTA.tsx
├── lib/
│   └── utils.ts
└── i18n/
    ├── routing.ts
    └── request.ts
messages/
├── fr.json
└── en.json
content/
└── projects/
    ├── immogest.mdx
    ├── kalamundi.mdx
    ├── traficam.mdx
    └── agronova.mdx
```

---

## Journal des sessions

| Date | Ce qui a été fait | Commit |
|---|---|---|
| 2026-06-26 | Rédaction Bible + Cahier des charges | — |
| 2026-06-26 | Validation Hero : titre, tagline, micro, CTA, Proof Strip, couleurs | — |
| 2026-06-26 | Démarrage Phase 1 — installation dépendances, structure fichiers | — |
