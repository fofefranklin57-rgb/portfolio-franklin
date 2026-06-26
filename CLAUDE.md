# CLAUDE.md — Instructions pour Claude Code

## LIRE EN PREMIER à chaque session

1. `BIBLE_PORTFOLIO.md` — stratégie, psychologie recruteur, positionnement, communication
2. `CAHIER_DES_CHARGES.md` — spec complète, objectifs, architecture
3. `PROGRESS.md` — où on en est, quoi faire ensuite

---

## La mission en une phrase

> **"Construire une identité professionnelle suffisamment crédible pour qu'une entreprise internationale se dise : 'Nous pouvons recruter Franklin à distance, en toute confiance.'"**

---

## La question fondamentale

Avant d'écrire une ligne de code ou de contenu, poser systématiquement :

> **"Si un recruteur ne disposait que de trois minutes sur ce site, quelles sont les informations qu'il retiendrait en repartant ?"**

Si la fonctionnalité ou le contenu en cours ne contribue pas à ces informations — arrêter. Reprioriser.

---

## Mission

Ce portfolio a un seul objectif : **aider Franklin FOFE NODEM à décrocher son premier emploi ou contrat international, 100 % à distance (Remote First)**.

Le travail à distance est le **plan A**. Pas un compromis. Pas une option.

Avant chaque décision, poser ces deux questions :

> "Est-ce que cette décision augmente les chances qu'un recruteur accepte de travailler avec Franklin à distance ?"
> "Est-ce que cette décision augmente les chances que Franklin obtienne un entretien ?"

Si non aux deux → chercher une meilleure solution.

---

## Philosophie de développement

**Ship first. Improve continuously.**

Le meilleur portfolio n'est pas celui qui a le plus de fonctionnalités.
C'est celui qui aide Franklin à décrocher son premier contrat international en télétravail.

En cas d'arbitrage entre ajouter une fonctionnalité, ajouter une langue, ou mettre en ligne plus vite :
**toujours privilégier la mise en ligne.**

---

## Stack

- **Next.js 15** App Router
- **TypeScript** strict
- **Tailwind CSS v4**
- **shadcn/ui**
- **Framer Motion** (animations discrètes uniquement)
- **Lucide React**
- **next-intl** (MVP : FR + EN uniquement — ES/PT/AR en phases ultérieures)
- **Resend** (emails)
- **Umami** (analytics)

---

## Positionnement — règle critique

Franklin n'est pas uniquement un développeur Full-Stack.

Il est un **Product Builder** — quelqu'un qui transforme des problèmes réels en solutions concrètes, quelles que soient les technologies ou les domaines.

Le portfolio doit parler à plusieurs types de recruteurs simultanément :
startups, ONG, organisations internationales, cabinets de conseil, agences digitales.

**Le titre professionnel (Hero) n'est pas définitif.** Avant toute implémentation, proposer plusieurs variantes avec avantages, inconvénients et postes visés — et attendre la validation explicite de Franklin.

---

## Règles de code

- TypeScript strict, pas de `any`
- Server Components par défaut
- `"use client"` uniquement si indispensable
- Pas de commentaires évidents
- Nommage en anglais pour le code
- Commits format : `type: description courte`

### Types de commits autorisés

```
feat / fix / content / i18n / style / perf / seo / a11y / deploy
```

---

## Ce que tu NE dois PAS faire

- Ajouter des fonctionnalités non listées dans `PROGRESS.md`
- Retenir un titre professionnel sans validation explicite de Franklin
- Exagérer les compétences ou réalisations de Franklin dans le contenu
- Développer ES/PT/AR avant que le MVP FR+EN soit en ligne
- Introduire des dépendances inutiles
- Utiliser des `any` TypeScript
- Créer des commentaires qui expliquent ce que le code fait (évident)
- Modifier `BIBLE_PORTFOLIO.md` ou `CAHIER_DES_CHARGES.md` sans approbation explicite
