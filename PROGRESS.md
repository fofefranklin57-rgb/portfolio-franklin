# PROGRESS.md — Suivi de développement

> Lire ce fichier au début de chaque session pour savoir où on en est.
> Mettre à jour immédiatement après chaque tâche terminée.

---

## Phase actuelle : Phase 1 — MVP

**Statut** : 🚧 En cours

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

### Bloc 1 — Fondations
- [x] Projet Next.js 15/16 + TypeScript + Tailwind initialisé
- [ ] next-intl installé et configuré (FR + EN)
- [ ] Middleware de redirection locale
- [ ] Structure de dossiers complète (app/[locale]/...)
- [ ] Layout global (Header + Footer + Nav mobile)
- [ ] Dark mode / Light mode (toggle)

### Bloc 2 — Page Home
- [ ] Section Hero (photo placeholder + titre + tagline + micro + badges + 2 CTA)
- [ ] Section Proof Strip (4 métriques validées)
- [ ] Section Featured Projects (3 cartes : ImmoGest, Kalamundi, AgroNova)
- [ ] Section About courte (5 lignes max)
- [ ] Section Skills (5 catégories validées)
- [ ] Section Remote Ready (3 éléments validés)
- [ ] Section Disponibilité + CTA Contact

### Bloc 3 — Pages secondaires
- [ ] Page /about (biographie longue EN + FR)
- [ ] Page /projects (liste des 4 projets)
- [ ] Fichiers MDX des 4 projets (ImmoGest, Kalamundi, Traficam, AgroNova)
- [ ] Page /contact (formulaire React Hook Form + Zod + Resend)

### Bloc 4 — SEO et déploiement
- [ ] generateMetadata() sur chaque page
- [ ] sitemap.xml + robots.txt
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
| tailwindcss | ^4 | ✅ |
| next-intl | — | 🚧 en cours |
| lucide-react | — | 🚧 en cours |

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
