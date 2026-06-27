import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { routing } from '@/i18n/routing';

type Locale = 'fr' | 'en';

type Section = {
  heading: Record<Locale, string>;
  body: Record<Locale, string>;
};

type Screenshot = {
  src: string;
  caption: Record<Locale, string>;
};

type CaseStudy = {
  name: string;
  tagline: Record<Locale, string>;
  status: 'live' | 'beta' | 'dev';
  year: number;
  stack: string[];
  url?: string;
  screenshots?: Screenshot[];
  summary: Record<Locale, string>;
  metrics: { value: string; label: Record<Locale, string> }[];
  sections: Section[];
};

const caseStudies: Record<string, CaseStudy> = {
  immogest: {
    name: 'ImmoGest',
    tagline: {
      fr: 'Plateforme SaaS de gestion immobilière pour l\'Afrique francophone.',
      en: 'SaaS property management platform for francophone Africa.',
    },
    status: 'live',
    year: 2024,
    stack: ['Vanilla JS', 'Cloudflare Workers', 'Supabase', 'PostgreSQL', 'Cloudflare Pages'],
    url: 'https://immogest-34w.pages.dev',
    screenshots: [
      { src: '/immogest-landing.png', caption: { fr: 'Page d\'accueil — fonctionnalités et badges', en: 'Landing page — features and badges' } },
      { src: '/immogest-dashboard.png', caption: { fr: 'Tableau de bord — vue gestionnaire en production', en: 'Dashboard — manager view in production' } },
      { src: '/immogest-tenants.png', caption: { fr: 'Liste locataires — statuts de paiement et actions', en: 'Tenant list — payment statuses and actions' } },
    ],
    summary: {
      fr: 'ImmoGest est une application SaaS complète qui permet aux agences immobilières d\'Afrique francophone de gérer leurs immeubles, locataires, paiements et documents depuis une interface unique. Le projet est passé d\'une idée à un produit en production en moins de 12 mois.',
      en: 'ImmoGest is a full SaaS application that allows real estate agencies in francophone Africa to manage their buildings, tenants, payments and documents from a single interface. The project went from idea to production in under 12 months.',
    },
    metrics: [
      { value: '4', label: { fr: 'Modules principaux', en: 'Core modules' } },
      { value: '27', label: { fr: 'Tables en base', en: 'Database tables' } },
      { value: '100%', label: { fr: 'Cloudflare infra', en: 'Cloudflare infra' } },
      { value: '< 200ms', label: { fr: 'Temps de réponse', en: 'Response time' } },
    ],
    sections: [
      {
        heading: { fr: 'Contexte', en: 'Context' },
        body: {
          fr: 'En Afrique francophone, la gestion immobilière repose encore largement sur des fichiers Excel, des carnets papier et des WhatsApp. Les agences immobilières camerounaises n\'avaient pas accès à des outils adaptés à leur réalité : multi-devises FCFA, gestion des arriérés, génération de quittances et de contrats conformes au droit local.\n\nJ\'ai commencé à construire ImmoGest en 2023 après avoir observé ce problème directement auprès de propriétaires bailleurs de mon entourage.',
          en: 'In francophone Africa, property management still relies heavily on Excel files, paper notebooks and WhatsApp. Cameroonian real estate agencies had no access to tools adapted to their reality: FCFA multi-currency, arrears management, generation of receipts and contracts compliant with local law.\n\nI started building ImmoGest in 2023 after observing this problem directly with landlords in my network.',
        },
      },
      {
        heading: { fr: 'Décisions techniques', en: 'Technical decisions' },
        body: {
          fr: 'J\'ai choisi une architecture 100% cloud-native sur Cloudflare et Supabase pour trois raisons : coût quasi nul en phase de démarrage, latence minimale grâce aux edge workers, et fiabilité sans infrastructure à maintenir.\n\nVanilla JS (sans framework lourd) a été délibérément choisi pour maîtriser les performances et éviter la dette technique liée aux dépendances. L\'application est une SPA servie depuis Cloudflare Pages, avec une API sur Cloudflare Workers et une base PostgreSQL sur Supabase.\n\nLe mode offline-first avec Service Worker a été ajouté pour les contextes à connexion intermittente fréquents en Afrique centrale.',
          en: "I chose a 100% cloud-native architecture on Cloudflare and Supabase for three reasons: near-zero cost during the startup phase, minimal latency thanks to edge workers, and reliability without infrastructure to maintain.\n\nVanilla JS (without a heavy framework) was deliberately chosen to control performance and avoid technical debt tied to dependencies. The app is a SPA served from Cloudflare Pages, with an API on Cloudflare Workers and a PostgreSQL database on Supabase.\n\nOffline-first mode with Service Worker was added for intermittent connectivity contexts common in Central Africa.",
        },
      },
      {
        heading: { fr: 'Difficultés rencontrées', en: 'Challenges' },
        body: {
          fr: '**Complexité métier.** La gestion immobilière africaine a ses propres règles : arriérés, caution, honoraires de cabinet, multi-profils (propriétaire bailleur, gestionnaire, locataire, comptable). Modéliser tout ça dans un schéma de base cohérent a demandé plusieurs itérations.\n\n**Migrations versionnées.** Avec une base en production, chaque modification de schéma doit être backward-compatible. J\'ai mis en place un système de migrations versionnées (V001 à V014) pour déployer les évolutions sans interruption.\n\n**Multi-tenant.** L\'isolation des données entre cabinets tout en partageant la même infrastructure a nécessité une architecture row-level security stricte sur Supabase.',
          en: "**Business complexity.** African property management has its own rules: arrears, deposits, agency fees, multi-profiles (landlord, manager, tenant, accountant). Modeling all of this in a coherent database schema required several iterations.\n\n**Versioned migrations.** With a database in production, every schema change must be backward-compatible. I implemented a versioned migration system (V001 to V014) to deploy changes without downtime.\n\n**Multi-tenant.** Isolating data between agencies while sharing the same infrastructure required strict row-level security architecture on Supabase.",
        },
      },
      {
        heading: { fr: 'Solutions apportées', en: 'Solutions' },
        body: {
          fr: '**Architecture modulaire.** L\'application est structurée en modules indépendants : Tableau de bord, Immeubles, Locataires, Paiements, Documents, Paramètres. Chaque module peut évoluer sans impacter les autres.\n\n**Génération documentaire.** ImmoGest génère automatiquement les quittances de loyer, contrats de bail, états des lieux et relances d\'impayés au format PDF directement depuis le navigateur — sans serveur d\'impression.\n\n**Système de plans.** L\'accès est contrôlé par un système de plans (gratuit, starter, pro, cabinet) qui limite le nombre d\'immeubles et de locataires selon l\'abonnement. Le plan gratuit permet de tester le produit sans engagement.',
          en: '**Modular architecture.** The application is structured in independent modules: Dashboard, Buildings, Tenants, Payments, Documents, Settings. Each module can evolve without impacting the others.\n\n**Document generation.** ImmoGest automatically generates rent receipts, lease agreements, property condition reports and payment reminders as PDFs directly from the browser — no print server required.\n\n**Plan system.** Access is controlled by a plan system (free, starter, pro, agency) that limits the number of buildings and tenants per subscription. The free plan allows testing the product without commitment.',
        },
      },
      {
        heading: { fr: 'Résultats', en: 'Results' },
        body: {
          fr: 'L\'application est en production depuis 2024. Elle est utilisée par des agences immobilières au Cameroun pour gérer des portefeuilles de locataires réels.\n\nLe système de relance automatique des impayés a réduit le temps de gestion des arriérés. La génération documentaire a éliminé le recours à des outils tiers (Word, Excel) pour les contrats et quittances.\n\nL\'infrastructure Cloudflare assure un temps de réponse API inférieur à 200ms depuis l\'Afrique centrale.',
          en: 'The application has been in production since 2024. It is used by real estate agencies in Cameroon to manage real tenant portfolios.\n\nThe automatic payment reminder system has reduced arrears management time. Document generation has eliminated the need for third-party tools (Word, Excel) for contracts and receipts.\n\nThe Cloudflare infrastructure ensures API response times under 200ms from Central Africa.',
        },
      },
      {
        heading: { fr: 'Ce que j\'ai appris', en: 'What I learned' },
        body: {
          fr: 'Construire ImmoGest m\'a appris que le vrai produit, ce n\'est pas le code — c\'est la compréhension du métier. Les premières versions étaient techniquement correctes mais métier incorrectes. Les itérations avec les utilisateurs ont entièrement reconfiguré la structure de données.\n\nJ\'ai également appris à piloter un produit solo de A à Z : product design, architecture, développement, déploiement, support utilisateur et documentation. Cette expérience est directement transférable à toute équipe produit.',
          en: "Building ImmoGest taught me that the real product isn't the code — it's the understanding of the business domain. Early versions were technically correct but business-incorrect. Iterations with users entirely reconfigured the data structure.\n\nI also learned to drive a product solo from A to Z: product design, architecture, development, deployment, user support and documentation. This experience is directly transferable to any product team.",
        },
      },
    ],
  },

  kalamundi: {
    name: 'Kalamundi',
    tagline: {
      fr: 'Plateforme de publication connectant auteurs et lecteurs africains.',
      en: 'Publishing platform connecting African authors and readers.',
    },
    status: 'live',
    year: 2023,
    stack: ['Flutter', 'Next.js', 'Cloudflare Workers', 'Supabase', 'AI generation'],
    summary: {
      fr: 'Kalamundi est une plateforme complète de publication numérique pensée pour les auteurs africains. Elle intègre un studio de création de contenu, une bibliothèque de lecteurs et un système de génération d\'illustrations assisté par IA.',
      en: 'Kalamundi is a complete digital publishing platform designed for African authors. It integrates a content creation studio, a reader library and an AI-assisted illustration generation system.',
    },
    metrics: [
      { value: '2', label: { fr: 'Interfaces (auteur + lecteur)', en: 'Interfaces (author + reader)' } },
      { value: 'AI', label: { fr: 'Génération d\'illustrations', en: 'Illustration generation' } },
      { value: 'Multi', label: { fr: 'Formats de contenu', en: 'Content formats' } },
      { value: '2023', label: { fr: 'Première version', en: 'First version' } },
    ],
    sections: [
      {
        heading: { fr: 'Contexte', en: 'Context' },
        body: {
          fr: 'Les auteurs africains manquent d\'outils de publication numérique adaptés à leurs besoins. Amazon KDP et les plateformes occidentales présentent des barrières linguistiques, des frictions de paiement et des contraintes culturelles qui pénalisent les créateurs francophones.\n\nKalamundi part d\'un constat simple : il existe une demande de contenu africain numérique, mais peu de ponts entre les auteurs locaux et leurs lecteurs potentiels.',
          en: 'African authors lack digital publishing tools adapted to their needs. Amazon KDP and western platforms present language barriers, payment friction and cultural constraints that penalize francophone creators.\n\nKalamundi starts from a simple observation: there is demand for African digital content, but few bridges between local authors and their potential readers.',
        },
      },
      {
        heading: { fr: 'Ce qui a été construit', en: 'What was built' },
        body: {
          fr: '**Studio auteur.** Interface de création de contenu avec éditeur intégré, gestion des chapitres, métadonnées et couvertures.\n\n**Génération d\'illustrations IA.** Les auteurs peuvent générer des illustrations pour leurs œuvres directement depuis la plateforme, sans compétences en design.\n\n**Bibliothèque lecteur.** Interface de lecture fluide avec gestion de bibliothèque personnelle, progression de lecture et découverte de nouveaux titres.\n\n**Application mobile Flutter.** L\'application mobile accompagne l\'expérience web pour la lecture en mobilité.',
          en: '**Author studio.** Content creation interface with integrated editor, chapter management, metadata and covers.\n\n**AI illustration generation.** Authors can generate illustrations for their works directly from the platform, without design skills.\n\n**Reader library.** Smooth reading interface with personal library management, reading progress and new title discovery.\n\n**Flutter mobile app.** The mobile application accompanies the web experience for reading on the go.',
        },
      },
      {
        heading: { fr: 'Ce que j\'ai appris', en: 'What I learned' },
        body: {
          fr: 'Kalamundi m\'a confronté à la complexité d\'un produit à double face (auteurs + lecteurs). Les besoins des deux publics sont parfois contradictoires : les auteurs veulent de la visibilité, les lecteurs veulent de la curation.\n\nL\'intégration de la génération IA a ouvert un angle inattendu : les auteurs utilisent cet outil non seulement pour illustrer, mais aussi pour explorer des directions créatives. C\'est un cas d\'usage que je n\'avais pas anticipé.',
          en: 'Kalamundi confronted me with the complexity of a two-sided product (authors + readers). The needs of both audiences are sometimes contradictory: authors want visibility, readers want curation.\n\nThe integration of AI generation opened an unexpected angle: authors use this tool not only to illustrate, but also to explore creative directions. This is a use case I had not anticipated.',
        },
      },
    ],
  },

  agronova: {
    name: 'AgroNova Farms',
    tagline: {
      fr: 'Ferme piscicole gérée avec rigueur — 700 silures par cycle.',
      en: 'Rigorously managed fish farm — 700 catfish per cycle.',
    },
    status: 'live',
    year: 2022,
    stack: ['Agriculture', 'Product Management', 'Documentation', 'Process Design'],
    summary: {
      fr: 'AgroNova Farms est une exploitation piscicole que j\'ai lancée et gérée à Yaoundé. Ce n\'est pas un projet logiciel — c\'est un projet entrepreneurial réel, avec des contraintes physiques, des cycles de production et des résultats mesurables. Il illustre ma capacité à construire et gérer des systèmes complexes au-delà du code.',
      en: 'AgroNova Farms is a fish farming operation I launched and managed in Yaoundé. This is not a software project — it\'s a real entrepreneurial venture, with physical constraints, production cycles and measurable results. It illustrates my ability to build and manage complex systems beyond code.',
    },
    metrics: [
      { value: '700', label: { fr: 'Silures / cycle', en: 'Catfish / cycle' } },
      { value: '2×', label: { fr: 'Capacité augmentée', en: 'Capacity scaled' } },
      { value: '2022', label: { fr: 'Lancement', en: 'Launch year' } },
      { value: '100%', label: { fr: 'Opérationnel', en: 'Operational' } },
    ],
    sections: [
      {
        heading: { fr: 'Contexte', en: 'Context' },
        body: {
          fr: 'En 2022, j\'ai lancé AgroNova Farms comme une entreprise d\'aquaculture à Yaoundé. Le projet est parti de zéro : choix du site, installation des bassins, sourcing des alevins, gestion des cycles d\'alimentation et suivi de la croissance.\n\nLa capacité initiale était de 300 silures par cycle. En optimisant les processus d\'alimentation, la densité des bassins et le suivi sanitaire, j\'ai porté cette capacité à 700 par cycle.',
          en: 'In 2022, I launched AgroNova Farms as an aquaculture business in Yaoundé. The project started from scratch: site selection, pond installation, fingerling sourcing, feeding cycle management and growth monitoring.\n\nInitial capacity was 300 catfish per cycle. By optimizing feeding processes, pond density and health monitoring, I scaled this capacity to 700 per cycle.',
        },
      },
      {
        heading: { fr: 'Ce que ce projet démontre', en: 'What this project demonstrates' },
        body: {
          fr: 'AgroNova montre que ma capacité à construire des systèmes ne se limite pas au logiciel. Un cycle de production piscicole est un système : entrées (alevins, alimentation, eau), processus (suivi, traitement, optimisation), sorties (poissons commercialisables).\n\nJ\'ai appliqué les mêmes principes que dans le développement logiciel : documentation des processus, itérations sur les méthodes, mesure des résultats, ajustement continu.\n\nC\'est aussi ce projet qui m\'a conduit à construire des outils numériques pour le secteur agricole — et à comprendre les contraintes réelles des entrepreneurs non-tech.',
          en: 'AgroNova shows that my ability to build systems is not limited to software. A fish production cycle is a system: inputs (fingerlings, feed, water), processes (monitoring, treatment, optimization), outputs (marketable fish).\n\nI applied the same principles as in software development: process documentation, method iteration, results measurement, continuous adjustment.\n\nThis project also led me to build digital tools for the agricultural sector — and to understand the real constraints of non-tech entrepreneurs.',
        },
      },
    ],
  },

  traficam: {
    name: 'Traficam',
    tagline: {
      fr: 'Système de gestion logistique pour le Cameroun.',
      en: 'Logistics management system for Cameroon.',
    },
    status: 'dev',
    year: 2024,
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    summary: {
      fr: 'Traficam est un système de gestion logistique et de transport conçu pour le contexte camerounais. Le projet est en cours de développement.',
      en: 'Traficam is a logistics and transport management system designed for the Cameroonian context. The project is currently in development.',
    },
    metrics: [
      { value: 'WIP', label: { fr: 'En cours', en: 'In progress' } },
      { value: '2024', label: { fr: 'Démarré', en: 'Started' } },
    ],
    sections: [
      {
        heading: { fr: 'Contexte', en: 'Context' },
        body: {
          fr: 'La logistique au Cameroun souffre des mêmes problèmes que l\'immobilier : absence d\'outils numériques adaptés, dépendance au papier et aux appels téléphoniques, absence de traçabilité.\n\nTraficam vise à apporter un système de suivi des marchandises, de coordination des transports et de documentation logistique adapté aux réalités locales.',
          en: 'Logistics in Cameroon suffers from the same problems as real estate: lack of adapted digital tools, dependence on paper and phone calls, absence of traceability.\n\nTraficam aims to bring a cargo tracking, transport coordination and logistics documentation system adapted to local realities.',
        },
      },
      {
        heading: { fr: 'Statut actuel', en: 'Current status' },
        body: {
          fr: 'Le projet est en phase de développement. L\'architecture de base est définie et les premiers modules sont en cours de construction.\n\nLes études de cas complètes seront publiées à la mise en production.',
          en: 'The project is in the development phase. The base architecture is defined and the first modules are being built.\n\nComplete case studies will be published at production launch.',
        },
      },
    ],
  },
};

const statusConfig = {
  live: { label: { fr: 'En ligne', en: 'Live' }, bg: 'var(--badge-green-bg)', color: 'var(--badge-green-color)', border: 'var(--badge-green-border)' },
  beta: { label: { fr: 'Bêta', en: 'Beta' }, bg: 'var(--badge-blue-bg)', color: 'var(--badge-blue-color)', border: 'var(--badge-blue-border)' },
  dev: { label: { fr: 'En développement', en: 'In development' }, bg: 'var(--badge-amber-bg)', color: 'var(--badge-amber-color)', border: 'var(--badge-amber-border)' },
};

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    Object.keys(caseStudies).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const cs = caseStudies[slug];
  if (!cs) return {};
  const l = locale as Locale;
  return {
    title: `${cs.name} — Franklin Fofe Nodem`,
    description: cs.tagline[l],
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const cs = caseStudies[slug];
  if (!cs) notFound();

  const l = locale as Locale;
  const status = statusConfig[cs.status];

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

      {/* Back link */}
      <Link
        href={`/${locale}/projects`}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '13px', color: 'var(--text3)', textDecoration: 'none',
          marginBottom: '2.5rem',
        }}
      >
        <ArrowLeft size={14} aria-hidden="true" />
        {locale === 'fr' ? 'Tous les projets' : 'All projects'}
      </Link>

      {/* Header */}
      <header style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '10px', padding: '3px 10px', borderRadius: '20px',
            background: status.bg, color: status.color, border: `0.5px solid ${status.border}`,
            textTransform: 'uppercase', letterSpacing: '0.06em',
          }}>
            {status.label[l]}
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text4)' }}>{cs.year}</span>
          {cs.url && (
            <a
              href={cs.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                fontSize: '12px', color: 'var(--accent)', textDecoration: 'none',
              }}
            >
              {locale === 'fr' ? 'Voir le produit' : 'See the product'}
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          )}
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 5vw, 38px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 10px', lineHeight: 1.2 }}>
          {cs.name}
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text3)', margin: '0 0 20px', lineHeight: 1.6 }}>
          {cs.tagline[l]}
        </p>

        {/* Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {cs.stack.map((tech) => (
            <span key={tech} style={{
              fontSize: '11px', background: 'var(--bg2)',
              border: '0.5px solid var(--border)', color: 'var(--text4)',
              padding: '3px 9px', borderRadius: '4px',
            }}>
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Summary */}
      <div style={{
        background: 'var(--bg2)', border: '0.5px solid var(--border)',
        borderRadius: '10px', padding: '1.25rem 1.5rem', marginBottom: '2rem',
        borderLeft: '3px solid var(--accent)',
      }}>
        <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.75, margin: 0 }}>
          {cs.summary[l]}
        </p>
      </div>

      {/* Metrics */}
      {cs.metrics.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(cs.metrics.length, 4)}, 1fr)`,
          gap: '1px',
          background: 'var(--border)',
          border: '0.5px solid var(--border)',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '3rem',
        }}>
          {cs.metrics.map((m) => (
            <div key={m.value + m.label.fr} style={{
              background: 'var(--bg2)', padding: '1.25rem',
              textAlign: 'center',
            }}>
              <span style={{
                fontSize: '24px', fontWeight: 500, color: 'var(--accent)',
                display: 'block', lineHeight: 1.2, marginBottom: '4px',
              }}>
                {m.value}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {m.label[l]}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Screenshots */}
      {cs.screenshots && cs.screenshots.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '13px', fontWeight: 500, color: 'var(--text4)',
            textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 16px',
          }}>
            {locale === 'fr' ? 'Captures d\'écran' : 'Screenshots'}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}>
            {cs.screenshots.map((shot, i) => (
              <figure key={i} style={{ margin: 0 }}>
                <div style={{
                  background: 'var(--bg2)', border: '0.5px solid var(--border)',
                  borderRadius: '10px', overflow: 'hidden',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  padding: '8px',
                }}>
                  <img
                    src={shot.src}
                    alt={shot.caption[l]}
                    style={{
                      width: '100%', maxWidth: '220px',
                      borderRadius: '6px',
                      display: 'block', margin: '0 auto',
                    }}
                  />
                </div>
                <figcaption style={{
                  fontSize: '11px', color: 'var(--text4)',
                  textAlign: 'center', marginTop: '8px', lineHeight: 1.4,
                }}>
                  {shot.caption[l]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* Sections */}
      <article style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {cs.sections.map((section, i) => (
          <section key={i}>
            <h2 style={{
              fontSize: '13px', fontWeight: 500, color: 'var(--text4)',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              margin: '0 0 12px',
            }}>
              {section.heading[l]}
            </h2>
            <div style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8 }}>
              {section.body[l].split('\n\n').map((paragraph, j) => (
                <p key={j} style={{ margin: '0 0 14px' }}
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              ))}
            </div>
          </section>
        ))}
      </article>

      {/* Footer nav */}
      <div style={{
        marginTop: '4rem', paddingTop: '2rem',
        borderTop: '0.5px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px',
      }}>
        <Link
          href={`/${locale}/projects`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '13px', color: 'var(--text3)', textDecoration: 'none',
          }}
        >
          <ArrowLeft size={14} aria-hidden="true" />
          {locale === 'fr' ? 'Retour aux projets' : 'Back to projects'}
        </Link>
        <Link
          href={`/${locale}/contact`}
          style={{
            fontSize: '13px', padding: '9px 20px',
            background: 'var(--accent)', color: '#fff',
            borderRadius: '7px', fontWeight: 500, textDecoration: 'none',
          }}
        >
          {locale === 'fr' ? 'Me contacter' : 'Get in touch'}
        </Link>
      </div>
    </div>
  );
}
