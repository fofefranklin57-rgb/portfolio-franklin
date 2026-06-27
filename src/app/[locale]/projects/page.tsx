import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import ExternalLinkIcon from '@/components/ExternalLinkIcon';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Products shipped by Franklin Fofe Nodem — ImmoGest (SaaS immobilier), Kalamundi (publication numérique), AgroNova Farms (aquaculture), Traficam (logistique). Tous en production.',
  openGraph: {
    url: 'https://portfolio-franklin.pages.dev/en/projects',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const projects = [
  {
    slug: 'immogest',
    name: 'ImmoGest',
    category: { fr: 'Produit SaaS', en: 'SaaS Product' },
    role: { fr: 'Fondateur · Product Builder', en: 'Founder · Product Builder' },
    description: {
      fr: "Aide les agences immobilières d'Afrique francophone à gérer locataires, paiements, baux et documents depuis une seule plateforme. En production depuis 2024.",
      en: 'Helping real estate agencies across francophone Africa manage tenants, payments, leases and documents from one platform. In production since 2024.',
    },
    status: 'live',
    stack: ['Vanilla JS', 'Cloudflare Workers', 'Supabase'],
    url: 'https://immogest-34w.pages.dev',
    year: 2024,
  },
  {
    slug: 'kalamundi',
    name: 'Kalamundi',
    category: { fr: 'Produit Digital', en: 'Digital Product' },
    role: { fr: 'Fondateur · Product Builder', en: 'Founder · Product Builder' },
    description: {
      fr: "Aide les auteurs africains à publier, distribuer et valoriser leur travail à travers une plateforme numérique moderne, avec studio de création et génération d'illustrations IA.",
      en: 'Helping African authors publish, distribute and showcase their work through a modern digital platform, with a creation studio and AI illustration generation.',
    },
    status: 'live',
    stack: ['Flutter', 'Next.js', 'Supabase'],
    year: 2023,
  },
  {
    slug: 'traficam',
    name: 'Traficam',
    category: { fr: 'Produit Digital', en: 'Digital Product' },
    role: { fr: 'Fondateur · Product Builder', en: 'Founder · Product Builder' },
    description: {
      fr: 'Résoudre le manque de traçabilité logistique au Cameroun — suivi des marchandises, coordination des transports et documentation adaptés au contexte local.',
      en: 'Solving the lack of logistics traceability in Cameroon — cargo tracking, transport coordination and documentation adapted to local realities.',
    },
    status: 'dev',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    year: 2024,
  },
  {
    slug: 'agronova',
    name: 'AgroNova Farms',
    category: { fr: 'Entreprise Réelle', en: 'Real-World Venture' },
    role: { fr: 'Fondateur · Opérateur', en: 'Founder · Operator' },
    description: {
      fr: "Projet agro-entrepreneurial opérationnel — pisciculture de 700 silures par cycle comme première étape d'une entreprise agricole diversifiée : avoculture, plantain, transformation agroalimentaire.",
      en: 'Operational agribusiness venture — catfish production at 700 per cycle as the first step of a diversified agricultural company: avocado farming, plantain, food processing.',
    },
    status: 'live',
    stack: ['Agriculture', 'Process Design', 'Documentation'],
    year: 2022,
  },
];

const statusColors: Record<string, { bg: string; color: string; border: string; label: string }> = {
  live: { bg: 'var(--badge-green-bg)', color: 'var(--badge-green-color)', border: 'var(--badge-green-border)', label: 'Live' },
  beta: { bg: 'var(--badge-blue-bg)', color: 'var(--badge-blue-color)', border: 'var(--badge-blue-border)', label: 'Beta' },
  dev: { bg: 'var(--badge-amber-bg)', color: 'var(--badge-amber-color)', border: 'var(--badge-amber-border)', label: 'In development' },
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '12px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>
          Projects
        </p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 8px', lineHeight: 1.25 }}>
          Things I've built
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text3)', margin: 0 }}>
          Products in production, with real users. Not prototypes.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {projects.map((project) => {
          const l = locale as 'fr' | 'en';
          const desc = project.description[l];
          const role = project.role[l];
          const s = statusColors[project.status];

          const category = project.category[l];

          return (
            <Link key={project.slug} href={`/${locale}/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
              <article
                style={{
                  background: 'var(--bg2)', border: '0.5px solid var(--border)',
                  borderRadius: '12px', padding: '1.75rem', cursor: 'pointer',
                }}
              >
                <div style={{ marginBottom: '6px' }}>
                  <span style={{
                    fontSize: '10px', color: 'var(--text4)',
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                  }}>
                    {category}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text1)', margin: 0 }}>
                    {project.name}
                  </h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      fontSize: '10px', padding: '3px 10px', borderRadius: '20px',
                      background: s.bg, color: s.color,
                      border: `0.5px solid ${s.border}`,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                    }}>
                      {s.label}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--text4)' }}>{project.year}</span>
                    {project.url && (
                      <ExternalLinkIcon href={project.url} label={`Visit ${project.name}`} />
                    )}
                  </div>
                </div>

                <p style={{ fontSize: '11px', color: 'var(--text4)', margin: '0 0 12px', letterSpacing: '0.04em' }}>
                  {role}
                </p>

                <p style={{ fontSize: '14px', color: 'var(--text3)', lineHeight: 1.75, margin: '0 0 16px' }}>
                  {desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.stack.slice(0, 3).map((tech) => (
                    <span key={tech} style={{
                      fontSize: '11px', background: 'var(--bg3)',
                      border: '0.5px solid var(--border)', color: 'var(--text4)',
                      padding: '3px 9px', borderRadius: '4px',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
