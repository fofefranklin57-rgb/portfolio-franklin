# Cahier des charges — Portfolio international de Franklin FOFE NODEM

> **Document de référence pour Claude Code**
> Toute session de développement doit lire ce fichier en premier.
> Chaque décision technique doit être justifiée par rapport à l'objectif principal :
> **Aider Franklin à décrocher son premier contrat international.**

---

## Table des matières

1. [Contexte et objectif](#1-contexte-et-objectif)
2. [Profil du propriétaire](#2-profil-du-propriétaire)
3. [Persona recruteur cible](#3-persona-recruteur-cible)
4. [Architecture de l'information](#4-architecture-de-linformation)
5. [Stack technique](#5-stack-technique)
6. [Internationalisation](#6-internationalisation)
7. [Design et identité visuelle](#7-design-et-identité-visuelle)
8. [SEO et visibilité](#8-seo-et-visibilité)
9. [Performance](#9-performance)
10. [Accessibilité](#10-accessibilité)
11. [PWA](#11-pwa)
12. [Formulaire de contact](#12-formulaire-de-contact)
13. [Analytics](#13-analytics)
14. [Hébergement et déploiement](#14-hébergement-et-déploiement)
15. [Contenu et gestion MDX](#15-contenu-et-gestion-mdx)
16. [Roadmap graduelle](#16-roadmap-graduelle)
17. [Évolutions futures](#17-évolutions-futures)
18. [Règles de développement](#18-règles-de-développement)
19. [Critères de succès](#19-critères-de-succès)
20. [Philosophie du produit](#20-philosophie-du-produit)
21. [Principe "Proof First"](#21-principe-proof-first)
22. [Les études de cas](#22-les-études-de-cas-case-studies)
23. [Page "Working Style"](#23-page-working-style)
24. [Page "Uses"](#24-page-uses)
25. [Page "Now"](#25-page-now)
26. [Indicateurs de succès](#26-indicateurs-de-succès)
27. [Principes d'architecture et de pérennité](#27-principes-darchitecture-et-de-pérennité)

---

## 1. Contexte et objectif

### Pourquoi ce portfolio existe

Franklin FOFE NODEM vit au Cameroun. Il cherche à obtenir son **premier contrat international** — emploi à distance, mission freelance ou collaboration avec une startup, ONG ou entreprise basée au Canada, en Europe ou en Amérique du Nord.

Ce portfolio n'est pas un site vitrine. C'est un **outil de conversion professionnelle**.

### Objectif principal mesurable

> Un recruteur international qui arrive sur ce site doit, en moins de 90 secondes, comprendre :
> - Qui est Franklin
> - Ce qu'il sait faire
> - Ce qu'il a déjà construit
> - Pourquoi lui faire confiance

### Ce que ce portfolio doit générer

- Des entretiens
- Des contacts professionnels
- Des propositions de collaboration
- Un premier contrat international

### Ce que ce portfolio ne doit PAS être

- Un démo technique sans contenu
- Un site rempli d'effets visuels inutiles
- Un CV en ligne banal
- Un portfolio menteur ou exagéré

---

## 2. Profil du propriétaire

### Identité

**Nom** : Franklin FOFE NODEM
**Localisation** : Cameroun
**Email** : fofefranklin57@gmail.com

### Formation et expériences

| Domaine | Détail |
|---|---|
| Droit | Formation juridique, expérience en recouvrement |
| Archivistique | Formation en archivistique et records management |
| Développement produit | ImmoGest, Kalamundi, Traficam |
| Écriture | 2 romans, 1 nouvelle |
| IA appliquée | Utilisation avancée des outils d'IA pour concevoir des produits, documenter, structurer |
| Agriculture | AgroNova Farms — silures, production progressive (300 → 500 → 700 par cycle) |

### Compétences à mettre en avant (honnêtement)

- Capacité à identifier un problème réel et construire une solution
- Démarche produit structurée (observer → tester → améliorer → scaler)
- Autonomie totale et capacité à mener des projets jusqu'au bout
- Polyvalence : technique + juridique + contenu + gestion
- Maîtrise des outils IA pour augmenter sa productivité

### Ton à adopter dans le contenu

- Honnête et direct
- Ambitieux sans être prétentieux
- Concret : preuves, chiffres, démos, livrables
- Jamais de jargon creux ("ninja du digital", "passionné de tout")

---

## 3. Persona recruteur cible

### Profil type 1 — Startup internationale

- CTO ou CEO d'une startup (5–50 personnes)
- Cherche un profil polyvalent, autonome, capable de livrer
- A peu de temps : scanne un portfolio en 2 minutes
- Veut voir des projets réels avec du code ou des livrables

### Profil type 2 — ONG / organisation internationale

- Responsable de programme ou directeur technique
- Cherche quelqu'un de fiable, documenté, capable de communiquer
- Sensible au contexte africain et à l'impact
- Valorise les preuves concrètes et la capacité à apprendre

### Profil type 3 — Entreprise de services

- DRH ou manager d'équipe
- Cherche un profil pour une mission précise (archivistique, gestion, coordination)
- Veut un CV clair + portfolio + contact facile

### Questions que chaque section doit répondre

| Question du recruteur | Section concernée |
|---|---|
| Qui est cette personne ? | Hero + About |
| Que sait-elle faire ? | Skills + Resume |
| Qu'a-t-elle déjà construit ? | Projects |
| Comment réfléchit-elle ? | Blog / Notes / Journey |
| Peut-on lui faire confiance ? | Evidence + Testimonials |
| A-t-elle déjà terminé des projets ? | Projects avec démos live |
| Est-elle capable d'apprendre rapidement ? | Learning + Journey |

---

## 4. Architecture de l'information

### Routes principales

```
/                   → Home (Hero + résumé de tout)
/about              → Qui est Franklin (biographie, valeurs, parcours)
/resume             → CV interactif + téléchargement PDF
/projects           → Liste de tous les projets
/projects/immogest  → Page dédiée ImmoGest
/projects/kalamundi → Page dédiée Kalamundi
/projects/traficam  → Page dédiée Traficam
/projects/agronova  → Page dédiée AgroNova Farms
/books              → Romans et écrits
/books/[slug]       → Page dédiée à un livre
/learning           → Ce que Franklin apprend (formations, certifs, outils)
/journey            → Chronologie narrative de son parcours
/evidence           → Preuves concrètes (screenshots, métriques, livrables)
/blog               → Articles, notes, réflexions
/blog/[slug]        → Article individuel
/contact            → Formulaire de contact + liens
```

### Structure i18n (à préfixer par la locale)

```
/en/                → English version
/fr/                → Version française (défaut)
/es/                → Versión en español
/pt/                → Versão em português
/ar/                → النسخة العربية
```

### Hiérarchie des pages par priorité de conversion

1. **/** — point d'entrée, capte l'attention, oriente
2. **/projects** — preuves concrètes, le plus lu
3. **/resume** — téléchargement CV, intent fort
4. **/contact** — conversion finale
5. **/about** — crée la connexion humaine

---

## 5. Stack technique

### Technologies obligatoires

| Couche | Technologie | Justification |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG/SSR hybride, SEO natif, image optimization, i18n |
| Langage | TypeScript strict | Maintenabilité sur 10 ans |
| Styles | Tailwind CSS v4 | Cohérence, purge automatique, dark mode facile |
| Composants | shadcn/ui | Accessibilité WCAG, personnalisable, sans vendor lock-in |
| Animations | Framer Motion | Discret, respectueux de `prefers-reduced-motion` |
| Icônes | Lucide React | Léger, cohérent, TypeScript natif |
| i18n | next-intl | Meilleure intégration App Router, URLs localisées |
| Contenu | MDX + Contentlayer2 ou next-mdx-remote | Markdown enrichi, pas de CMS, modifiable sans code |
| Formulaire | React Hook Form + Zod | Validation typée, UX fluide |
| Contact email | Resend | Simple, fiable, 3000 emails/mois gratuit |
| Analytics | Umami (self-hosted sur Cloudflare) | RGPD, sans cookie, gratuit |

### Technologies à NE PAS utiliser

- WordPress, Wix, Webflow (pas contrôlable)
- Firebase, Supabase (pas nécessaire pour un portfolio statique)
- Styled Components, Emotion (Tailwind suffit)
- Redux (overkill)
- jQuery (interdit)

### Structure des dossiers

```
portfolio-franklin/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       ├── page.tsx          ← Home
│   │       ├── about/
│   │       ├── resume/
│   │       ├── projects/
│   │       │   └── [slug]/
│   │       ├── books/
│   │       │   └── [slug]/
│   │       ├── learning/
│   │       ├── journey/
│   │       ├── evidence/
│   │       ├── blog/
│   │       │   └── [slug]/
│   │       └── contact/
│   ├── components/
│   │   ├── ui/                   ← shadcn components
│   │   ├── layout/               ← Header, Footer, Nav
│   │   ├── sections/             ← Hero, Skills, ProjectCard…
│   │   └── shared/               ← Button, Badge, Timeline…
│   ├── lib/
│   │   ├── mdx.ts
│   │   ├── utils.ts
│   │   └── seo.ts
│   ├── i18n/
│   │   ├── routing.ts
│   │   └── request.ts
│   └── types/
│       ├── project.ts
│       ├── book.ts
│       └── post.ts
├── content/
│   ├── projects/
│   │   ├── immogest.mdx
│   │   ├── kalamundi.mdx
│   │   ├── traficam.mdx
│   │   └── agronova.mdx
│   ├── books/
│   │   ├── enfants-meme-ventre.mdx
│   │   └── femmes-tantie-jo.mdx
│   ├── blog/
│   └── learning/
├── messages/
│   ├── fr.json
│   ├── en.json
│   ├── es.json
│   ├── pt.json
│   └── ar.json
├── public/
│   ├── images/
│   ├── cv/
│   │   ├── cv-franklin-fr.pdf
│   │   └── cv-franklin-en.pdf
│   └── manifest.json
├── next.config.ts
├── tailwind.config.ts
└── middleware.ts                 ← Redirection locale
```

---

## 6. Internationalisation

### Langues supportées

**MVP (Phase 1) — uniquement ces deux langues :**

| Code | Langue | Statut | Cible |
|---|---|---|---|
| `fr` | Français | **Défaut — obligatoire dès le MVP** | France, Belgique, Suisse, Québec, Afrique francophone |
| `en` | English | **Obligatoire dès le MVP** | Canada, UK, USA, entreprises internationales, ONG |

FR + EN couvrent déjà la majorité des entreprises cibles. Le MVP doit être en ligne rapidement.
**Ne pas ralentir le lancement pour ajouter d'autres langues.**

**Phases ultérieures (après mise en ligne du MVP) :**

| Code | Langue | Phase | Cible |
|---|---|---|---|
| `es` | Español | Phase 3 | Espagne, Amérique latine |
| `pt` | Português | Phase 3 | Portugal, Brésil |
| `ar` | العربية | Phase 4 | Monde arabe, ONG MENA |

### Règles i18n

- Toutes les URLs sont préfixées : `/fr/`, `/en/`, etc.
- La locale par défaut est `fr` mais sans redirect forcé (évite le bounce rate)
- Un sélecteur de langue discret est visible dans le header
- Le contenu MDX est lui aussi traduit (fichiers séparés par locale)
- Les métadonnées Open Graph sont localisées
- Les dates, nombres et formats sont localisés avec `Intl`

---

## 7. Design et identité visuelle

### Philosophie du design

- **Clarté > Complexité**
- **Contenu > Effets visuels**
- Chaque pixel doit servir la lisibilité ou la conversion
- Animations : entrée douce, jamais de distraction
- Typographie soignée : le texte EST le design

### Palette de couleurs

```
Fond principal :   #0A0A0A (near-black, mode sombre par défaut)
Fond carte :       #111111
Fond section :     #161616
Accent principal : #2563EB (bleu international, confiance)
Accent secondaire: #10B981 (vert succès, actions positives)
Texte principal :  #F8FAFC
Texte secondaire : #94A3B8
Texte tertiaire :  #475569
Bordure :          #1E293B
```

> Le mode clair doit également être parfait. Le sélecteur dark/light est obligatoire.

### Typographie

```
Titres :   Inter ou Geist (variable font, chargé en local)
Corps :    Inter
Code :     Geist Mono
```

### Composants visuels clés

- **Hero** : Photo de Franklin + titre fort + phrase d'accroche + 2 CTA (Voir projets / Télécharger CV)
- **ProjectCard** : Logo + titre + description 1 ligne + stack + lien démo + lien code
- **Timeline** : Parcours chronologique avec jalons visuels
- **SkillBar** : Niveau honnête (pas des barres à 99%, mais une catégorisation Débutant/Intermédiaire/Avancé)
- **EvidenceCard** : Screenshot ou métrique avec contexte
- **BookCard** : Couverture + résumé + lien

### Comportement responsive

- Mobile first
- Breakpoints : 375px (mobile) / 768px (tablet) / 1024px (laptop) / 1440px (desktop)
- Navigation mobile : menu burger avec overlay
- Sur mobile, la photo passe en format portrait centré

---

## 8. SEO et visibilité

### Obligations SEO sur chaque page

```typescript
// Chaque page doit exporter generateMetadata()
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `${pageTitle} | Franklin FOFE NODEM`,
    description: pageDescription,
    openGraph: {
      title, description, url, images: [ogImage], type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title, description, images: [ogImage]
    },
    alternates: {
      canonical: canonicalUrl,
      languages: { fr: '/fr/...', en: '/en/...', es: '/es/...' }
    }
  }
}
```

### Fichiers SEO obligatoires

- `sitemap.xml` — généré automatiquement (Next.js built-in)
- `robots.txt` — autoriser tout, bloquer `/api/`
- `manifest.json` — PWA
- `feed.xml` — RSS pour le blog

### Schema.org JSON-LD

| Page | Type |
|---|---|
| Home | `Person` + `WebSite` |
| About | `Person` détaillé |
| Project | `SoftwareApplication` ou `CreativeWork` |
| Book | `Book` |
| Blog post | `BlogPosting` |
| Contact | `ContactPage` |

### Mots-clés cibles (longue traîne)

```
"Franklin FOFE NODEM"
"developer Cameroon remote work"
"portfolio développeur Cameroun"
"ImmoGest property management software"
"Kalamundi platform Africa"
"records management Cameroon"
"remote developer Africa"
```

---

## 9. Performance

### Objectifs Lighthouse

| Métrique | Cible |
|---|---|
| Performance | ≥ 95 |
| SEO | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| LCP | < 2.5s |
| FID / INP | < 100ms |
| CLS | < 0.1 |

### Techniques obligatoires

- `next/image` pour toutes les images (WebP/AVIF automatique)
- `next/font` pour les polices (zéro layout shift)
- Server Components par défaut (Client uniquement si nécessaire)
- Code splitting automatique (App Router)
- Lazy loading des sections sous la fold
- Pas de dépendances JS lourdes inutiles
- `preconnect` pour les domaines externes (analytics, fonts)

---

## 10. Accessibilité

### Obligations WCAG AA

- Ratio de contraste : minimum 4.5:1 (texte normal), 3:1 (texte large)
- Navigation clavier complète (Tab, Enter, Escape, flèches)
- Focus visible sur tous les éléments interactifs
- ARIA labels sur icônes, boutons sans texte visible
- Structure HTML sémantique : `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`
- Images décoratives : `alt=""`
- Images informatives : description précise dans `alt`
- Animations : respecter `prefers-reduced-motion`
- Skip link visible au focus pour sauter la navigation

---

## 11. PWA

### Fichiers requis

- `manifest.json` avec icônes 192x192 et 512x512
- Service Worker (Next.js PWA via `next-pwa` ou implémentation manuelle)
- Splash screen sur iOS

### Comportement hors ligne

- Pages déjà visitées : servies depuis le cache
- Page de fallback offline : afficher un message élégant
- Assets (fonts, CSS, images hero) : cache statique

---

## 12. Formulaire de contact

### Champs du formulaire

```
Prénom + Nom         [required]
Email                [required, validation]
Organisation         [optional]
Objet               [select: Collaboration / Emploi / Mission freelance / Autre]
Message             [required, min 20 chars]
Comment avez-vous trouvé ce portfolio ? [select: Google / LinkedIn / Recommandation / Autre]
```

### Comportement

- Validation côté client (Zod + React Hook Form)
- Validation côté serveur (API Route Next.js)
- Anti-spam : honeypot field + rate limiting
- Email envoyé via **Resend** à `fofefranklin57@gmail.com`
- Email de confirmation automatique à l'expéditeur
- Message de succès élégant (pas de redirection)

### Template email reçu (Franklin)

```
Nouveau contact — [Objet]

De : [Prénom Nom] <[Email]>
Organisation : [Organisation]

Message :
[Message]

Provenance : [Comment trouvé]
---
Reçu depuis portfolio.franklinfofe.com
```

---

## 13. Analytics

### Solution retenue : Umami

- Self-hosted sur Cloudflare Workers ou Vercel
- Alternative : Plausible Cloud (9€/mois)
- **Zéro cookie** — conforme RGPD sans bandeau
- Dashboard Franklin : visites, pages populaires, pays d'origine, sources de trafic

### Événements custom à tracker

```javascript
umami.track('cv_download', { locale })
umami.track('project_view', { project: 'immogest' })
umami.track('contact_form_submit')
umami.track('book_page_view', { book: 'enfants-meme-ventre' })
```

---

## 14. Hébergement et déploiement

### Stack de déploiement

| Service | Usage |
|---|---|
| GitHub | Dépôt source (`fofefranklin57-rgb/portfolio-franklin`) |
| Cloudflare Pages | Hébergement frontend (gratuit, CDN mondial) |
| Cloudflare R2 | Images (si upload nécessaire) |
| Resend | Emails transactionnels |
| Umami | Analytics |

### Pipeline CI/CD

```
push sur main
  → Cloudflare Pages build automatique
  → `npm run build`
  → Deploy sur `portfolio.franklinfofe.com`
```

### Variables d'environnement requises

```env
RESEND_API_KEY=
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
NEXT_PUBLIC_UMAMI_URL=
NEXT_PUBLIC_BASE_URL=https://portfolio.franklinfofe.com
```

---

## 15. Contenu et gestion MDX

### Principe

Franklin doit pouvoir **ajouter un projet, un article ou un livre** en créant un seul fichier Markdown. Aucune modification du code n'est nécessaire.

### Structure d'un fichier projet (frontmatter)

```yaml
---
title: "ImmoGest"
slug: "immogest"
description: "Plateforme SaaS de gestion immobilière pour l'Afrique francophone"
status: "live"           # live | beta | development | archived
year: 2024
tags: ["SaaS", "Immobilier", "Cloudflare", "Supabase"]
tech: ["Vanilla JS", "Cloudflare Workers", "Supabase", "PostgreSQL"]
url: "https://immogest.app"
github: ""               # laisser vide si privé
thumbnail: "/images/projects/immogest-cover.png"
screenshots:
  - "/images/projects/immogest-1.png"
  - "/images/projects/immogest-2.png"
featured: true           # apparaît sur la home
order: 1
---

## Problème résolu

[Corps MDX du projet — contexte, solution, résultats, apprentissages]
```

### Structure d'un article de blog

```yaml
---
title: "Comment j'ai construit ImmoGest seul en 6 mois"
slug: "comment-jai-construit-immogest"
date: "2025-06-15"
tags: ["produit", "SaaS", "Afrique"]
excerpt: "Retour d'expérience sur la construction d'un SaaS immobilier..."
featured: false
locale: "fr"
---
```

### Structure d'un livre

```yaml
---
title: "Les Enfants d'un Même Ventre"
slug: "enfants-meme-ventre"
genre: "Roman"
year: 2025
status: "completed"
pages: 105
wordCount: 25262
cover: "/images/books/enfants-cover.jpg"
excerpt: "Une saga familiale..."
available: false         # true = lien d'achat disponible
---
```

---

## 16. Roadmap graduelle

### Phase 1 — MVP (Semaine 1–2)

**Objectif** : Portfolio en ligne, indexable, présentable à un recruteur.

- [ ] Initialisation Next.js 15 + TypeScript + Tailwind
- [ ] Configuration next-intl (FR + EN)
- [ ] Layout global (Header + Footer + Nav mobile)
- [ ] Page Home avec Hero section
- [ ] Page About
- [ ] Page Projects avec 4 projets (contenu minimal)
- [ ] Page Contact avec formulaire Resend
- [ ] SEO de base (metadata, OG, sitemap, robots)
- [ ] Déploiement Cloudflare Pages
- [ ] Dark mode / Light mode

**Livrable** : URL publique fonctionnelle, partageable sur LinkedIn.

---

### Phase 2 — Contenu et crédibilité (Semaine 3–4)

**Objectif** : Convaincre un recruteur qui passe 5 minutes sur le site.

- [ ] Page Resume avec CV interactif + téléchargement PDF (FR + EN)
- [ ] Pages projets détaillées (ImmoGest, Kalamundi, Traficam, AgroNova)
- [ ] Page Books
- [ ] Page Evidence (screenshots, métriques réelles)
- [ ] Section Skills honnête avec niveaux
- [ ] Section Testimonials (si Franklin peut en obtenir)
- [ ] Timeline Journey
- [ ] Ajout des 3 langues restantes (ES, PT, AR)

**Livrable** : Portfolio complet, contenu riche, CV téléchargeable.

---

### Phase 3 — SEO et acquisition (Mois 2)

**Objectif** : Être trouvable sur Google par des recruteurs.

- [ ] Blog avec 3 premiers articles (projets, apprentissages)
- [ ] Page Learning (formations, certifications, outils maîtrisés)
- [ ] JSON-LD Schema.org sur toutes les pages
- [ ] RSS Feed
- [ ] Optimisation des images (WebP, lazy loading)
- [ ] Lighthouse 95+ sur toutes les pages
- [ ] Intégration Umami Analytics
- [ ] Open Graph images dynamiques

**Livrable** : Blog actif, pages indexées, analytics en place.

---

### Phase 4 — Engagement et conversion (Mois 3)

**Objectif** : Transformer les visites en contacts.

- [ ] PWA complète (manifest, service worker, offline)
- [ ] Section "Disponible pour missions" avec statut dynamique
- [ ] Calendly ou lien de réservation d'appel
- [ ] Newsletter simple (Resend)
- [ ] Partage social optimisé
- [ ] Animations Framer Motion sur sections clés
- [ ] Section "Ce que disent mes utilisateurs" (ImmoGest, Kalamundi)

**Livrable** : Portfolio engageant, taux de contact mesurable.

---

## 17. Évolutions futures

Ces fonctionnalités ne sont PAS dans le scope initial mais l'architecture DOIT les permettre sans refonte.

### Court terme (6–12 mois)

- **Dashboard privé** : Franklin met à jour son statut de disponibilité
- **Portfolio multilingue enrichi** : traductions humaines vs automatiques
- **Études de cas longues** : articles de 2000+ mots sur ImmoGest et Kalamundi
- **Page Conférences** : si Franklin intervient dans des événements
- **Page Press / Mentions** : si médias, blogs, podcasts parlent de lui

### Moyen terme (1–3 ans)

- **Système de recommandations** : partenaires, clients, collègues peuvent laisser un témoignage validé
- **Page Consulting** : offres de services avec tarification
- **Store intégré** : vente des romans en direct (PDF, ePub)
- **Carte interactive** : pays visités / pays où il a des clients
- **Section "En ce moment"** : livre lu, projet en cours, apprentissage actuel (style /now page)

### Long terme (3–10 ans)

- **Personal knowledge base** : notes publiques, réflexions, apprentissages (style Zettelkasten)
- **Podcast ou vidéos** : intégration d'une chaîne YouTube ou podcast
- **API publique** : données publiques de ses projets exposées via API
- **Section Team** : si Franklin recrute ou monte une équipe
- **Multisite** : si ImmoGest, Kalamundi, AgroNova ont chacun leur propre domaine, cross-linking

---

## 18. Règles de développement

### Pour chaque session Claude Code

1. Lire ce fichier (`CAHIER_DES_CHARGES.md`) en entier
2. Lire `PROGRESS.md` pour savoir où on en est
3. Coder uniquement ce qui est dans la phase courante
4. Ne pas introduire de fonctionnalités non demandées
5. Mettre à jour `PROGRESS.md` après chaque tâche terminée
6. Committer avec le format : `type: description courte`

### Règles de code

- TypeScript strict (`"strict": true` dans tsconfig)
- Pas de `any` — typer correctement
- Composants Server par défaut, `"use client"` uniquement si nécessaire
- Variables CSS pour les couleurs (jamais de valeurs hardcodées dans le JSX)
- Commentaires uniquement si le WHY n'est pas évident
- Pas de commentaires inutiles type "// bouton de contact"
- Nommage en anglais pour le code, contenu en FR/EN selon la langue

### Commits

```
feat:     nouvelle fonctionnalité
fix:      correction de bug
content:  ajout ou modification de contenu MDX
i18n:     traductions
style:    ajustements visuels sans changement fonctionnel
perf:     optimisation de performance
seo:      modifications liées au référencement
a11y:     accessibilité
deploy:   configuration déploiement
```

---

## 19. Critères de succès

### Critères mesurables (3 mois après lancement)

| Métrique | Cible |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse SEO | 100 |
| Lighthouse Accessibility | 100 |
| Visites mensuelles | ≥ 500 |
| Taux de rebond | < 60% |
| Pages vues par visite | ≥ 3 |
| Contacts via formulaire | ≥ 5 |
| CV téléchargés | ≥ 20 |
| Entretiens obtenus | ≥ 1 |

### Critère de succès ultime

> Franklin signe son premier contrat international dans les 6 mois suivant le lancement.

---

*Cahier des charges rédigé le 26 juin 2026.*
*À mettre à jour à chaque évolution majeure du projet.*

---

## 27. Principes d'architecture et de pérennité

Le portfolio est un produit appelé à évoluer pendant de nombreuses années. Toutes les décisions d'architecture adoptent une vision long terme. Jamais de solution rapide au détriment de la maintenabilité.

---

### 27.1 Positionnement adaptable

Franklin peut postuler dans des contextes très différents : startup, ONG, organisation internationale, cabinet de conseil, entreprise privée.

Le portfolio présente ses compétences de façon suffisamment claire pour que chaque type de recruteur s'y reconnaisse — sans l'enfermer dans une seule identité professionnelle.

Le positionnement évolue naturellement avec la carrière, sans refonte.

---

### 27.2 Montrer l'impact avant les technologies

Les visiteurs ne doivent pas seulement voir **ce qui a été construit** — ils doivent comprendre **pourquoi**.

Créer une section **"Impact"** sur chaque page projet :

| Projet | Impact |
|---|---|
| ImmoGest | Simplifier la gestion immobilière pour les agences africaines |
| Kalamundi | Offrir une plateforme moderne aux auteurs et lecteurs africains |
| AgroNova Farms | Développer une production agricole locale durable |
| Romans | Mettre en lumière des réalités sociales africaines |

Le portfolio montre des solutions à impact concret, pas une liste de technologies.

---

### 27.3 Standard de preuve par projet

Chaque projet affiche clairement son niveau de preuve disponible :

```
✓ Projet en production
✓ Démonstration disponible
✓ Documentation disponible
✓ Étude de cas disponible
✓ Captures d'écran disponibles
✓ Technologies utilisées
✓ Roadmap disponible
```

Le visiteur sait immédiatement ce qui peut être vérifié.

---

### 27.4 Architecture orientée partage

Chaque ressource importante (projet, livre, article, étude de cas) doit être partageable individuellement avec :

- URL propre et mémorisable
- Image Open Graph spécifique à la page
- Métadonnées complètes (title, description, OG, Twitter Card)
- Bouton de partage LinkedIn
- Bouton de copie du lien

Le portfolio est conçu pour circuler naturellement.

---

### 27.5 Source unique de vérité

Une information n'existe qu'à un seul endroit. Les autres pages y font référence, elles ne la recopient pas.

- Le CV ne répète pas la page About
- La page About ne recopie pas les études de cas
- Les études de cas ne recopient pas les descriptions courtes des projets

Cette règle garantit la maintenabilité sur 10 ans.

---

### 27.6 Préparer l'avenir (sans développer maintenant)

L'architecture doit permettre d'ajouter ces sections sans refonte :

- Media (interviews, podcasts, conférences)
- Publications et articles externes
- Distinctions et prix
- Espace presse
- Partenariats

Ces routes doivent être **prévues dans le routing**, même si leurs pages sont vides ou redirigent vers la home pour l'instant.

---

### 27.7 Architecture extensible

Sans développer maintenant, l'architecture doit rester compatible avec :

- Authentification (tableau de bord privé)
- CMS headless
- Newsletter
- CRM léger
- Statistiques avancées
- Espace partenaire

Aucun choix technique ne doit fermer ces portes.

---

### 27.8 Hiérarchie documentaire

En cas de conflit entre les documents du projet, priorité stricte :

| Priorité | Document | Rôle |
|---|---|---|
| 1 | `BIBLE_PORTFOLIO.md` | Stratégie, psychologie, vision produit |
| 2 | `CAHIER_DES_CHARGES.md` | Choix fonctionnels et techniques |
| 3 | `PROGRESS.md` | Ordre d'exécution des tâches |

En cas d'ambiguïté : **ne jamais deviner**. Suspendre l'implémentation et demander une validation.

---

### 27.9 Principe d'évolution de carrière

Le portfolio ne représente pas une profession. Il représente une **carrière**.

Il doit pouvoir accueillir naturellement, à tout moment :

- Nouvelles entreprises ou produits
- Nouveaux livres
- Nouveaux métiers ou activités
- Nouvelles compétences
- Expériences internationales
- Voyages professionnels

Aucune décision d'architecture ne doit contraindre cette évolution.

---

## 20. Philosophie du produit

Ce portfolio est un produit, pas un site web ni un CV en ligne.

Il résout un problème précis : **comment permettre à un professionnel basé au Cameroun d'obtenir son premier contrat international ?**

Avant de développer une fonctionnalité, poser systématiquement ces questions :

- Cette fonctionnalité augmente-t-elle les chances que Franklin obtienne un entretien ?
- Aide-t-elle un recruteur à mieux comprendre son parcours ?
- Réduit-elle le temps nécessaire pour convaincre un visiteur ?
- Apporte-t-elle une preuve supplémentaire de ses compétences ?

Si la réponse est non à toutes → ne pas prioriser.

---

## 21. Principe "Proof First"

**Ne jamais demander au visiteur de croire Franklin sur parole.**

Chaque compétence doit être accompagnée d'une preuve concrète :

- captures d'écran
- démonstrations live
- documents et livrables
- chiffres et métriques
- prototypes
- études de cas
- extraits de code
- captures GitHub
- résultats obtenus

> Une affirmation seule vaut peu. Une affirmation + preuve = crédibilité.

Le portfolio raconte des **faits**, jamais des promesses.

---

## 22. Les études de cas (Case Studies)

Les études de cas sont le cœur du portfolio. Chaque projet important doit avoir la sienne.

### Structure obligatoire pour chaque étude de cas

| # | Section | Question posée |
|---|---|---|
| 1 | **Contexte** | Quel problème existait ? Pourquoi ce projet est-il né ? |
| 2 | **Objectifs** | Que voulait résoudre Franklin ? |
| 3 | **Contraintes** | Temps, budget, compétences, technique, métier |
| 4 | **Recherches** | Comment le problème a-t-il été analysé ? Quelles solutions étudiées ? |
| 5 | **Conception** | Architecture, maquettes, décisions UX, choix techniques |
| 6 | **Réalisation** | Comment construit, rôle de Franklin, outils utilisés |
| 7 | **Difficultés** | Quelles erreurs ? Comment résolues ? |
| 8 | **Résultats** | Screenshots, démos, stats, utilisateurs, fonctionnalités |
| 9 | **Apprentissages** | Ce que ce projet a appris à Franklin |
| 10 | **Prochaines étapes** | Roadmap du projet |

Toutes les études de cas suivent cette structure — cohérence garantie.

---

## 23. Page "Working Style"

Créer une page dédiée à la méthode de travail de Franklin.

Elle s'applique à tous ses projets : applications, romans, agriculture, entrepreneuriat.

### Le processus

```
Observer
  ↓
Comprendre
  ↓
Faire des recherches
  ↓
Documenter
  ↓
Concevoir
  ↓
Construire un premier prototype
  ↓
Tester
  ↓
Corriger
  ↓
Améliorer
  ↓
Documenter les apprentissages
  ↓
Livrer
  ↓
Continuer à améliorer
```

Le visiteur doit comprendre que Franklin ne travaille jamais au hasard. Il suit une méthode reproductible — c'est l'un de ses atouts principaux.

---

## 24. Page "Uses"

Présenter l'environnement de travail de Franklin. Pour chaque outil : pourquoi il est utilisé, dans quels projets, ce qu'il apporte.

### Outils à documenter (liste initiale)

| Outil | Catégorie |
|---|---|
| Claude | IA — conception, documentation, code |
| ChatGPT | IA — recherche, rédaction |
| GitHub | Versioning, collaboration |
| VS Code | Éditeur principal |
| Cloudflare (Pages, Workers, R2) | Hébergement, backend |
| Next.js | Framework frontend |
| TypeScript | Langage |
| Tailwind CSS | Styles |
| Supabase | Base de données, auth |
| Flutter | Mobile (Kalamundi) |
| Notion | Organisation, documentation |
| Google Workspace | Communication, docs |

Cette page doit être **facilement mise à jour** — ajouter une ligne MDX suffit.

---

## 25. Page "Now"

Page minimaliste présentant ce sur quoi Franklin travaille **en ce moment**.

### Contenu initial

- Développement du portfolio international
- ImmoGest — évolutions et croissance
- Kalamundi — développement de la plateforme
- AgroNova Farms — production cycle en cours
- Les Femmes de Tantie Jo — rédaction
- Recherche d'un premier contrat international
- Apprentissage de nouvelles technologies

### Règle de mise à jour

Cette page doit pouvoir être modifiée **sans toucher au code** — via un fichier `content/now.mdx` ou un simple objet de configuration.

---

## 26. Indicateurs de succès

Le succès ne se mesure **pas** par le nombre de visiteurs.

### KPIs principaux (par ordre d'importance)

| Indicateur | Comment mesurer |
|---|---|
| Premier contrat international signé | Manuel |
| Entretiens obtenus | Manuel |
| Propositions reçues | Manuel |
| Prises de contact (formulaire) | Umami + email |
| CV téléchargés | Umami event |
| Visites depuis LinkedIn | Umami source |
| Recruteurs ayant visité | Umami + LinkedIn Analytics |
| Candidatures envoyées | Manuel |

### Objectif de conversion

Améliorer progressivement le taux : **visiteur → prise de contact**.

Toute future amélioration du portfolio doit être évaluée selon son impact sur cette conversion.
