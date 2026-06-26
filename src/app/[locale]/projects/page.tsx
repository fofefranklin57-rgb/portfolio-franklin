import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Products built by Franklin Fofe Nodem — ImmoGest, Kalamundi, Traficam, AgroNova Farms.',
};

const projects = [
  {
    slug: 'immogest',
    name: 'ImmoGest',
    tagline: { fr: 'Plateforme SaaS de gestion immobilière pour l\'Afrique francophone.', en: 'SaaS property management platform for francophone Africa.' },
    description: {
      fr: 'Gestion des locataires, paiements, baux, documents et rapports pour les agences immobilières. Construit avec Vanilla JS, Cloudflare Workers et Supabase. En production depuis 2024.',
      en: 'Tenant management, payments, leases, documents and reports for real estate agencies. Built with Vanilla JS, Cloudflare Workers and Supabase. In production since 2024.',
    },
    status: 'live',
    stack: ['Vanilla JS', 'Cloudflare Workers', 'Supabase', 'PostgreSQL'],
    url: 'https://immogest.app',
    year: 2024,
  },
  {
    slug: 'kalamundi',
    name: 'Kalamundi',
    tagline: { fr: 'Plateforme de publication connectant auteurs et lecteurs africains.', en: 'Publishing platform connecting African authors and readers.' },
    description: {
      fr: 'Plateforme complète avec studio de création de contenu, bibliothèque de lecteurs, génération d\'illustrations IA et gestion d\'auteurs.',
      en: 'Full platform with content creation studio, reader library, AI illustration generation and author management.',
    },
    status: 'live',
    stack: ['Flutter', 'Next.js', 'Cloudflare', 'Supabase'],
    year: 2023,
  },
  {
    slug: 'traficam',
    name: 'Traficam',
    tagline: { fr: 'Système de gestion logistique pour le Cameroun.', en: 'Logistics management system for Cameroon.' },
    description: {
      fr: 'Gestion des transports, suivi des marchandises et coordination logistique adaptés au contexte camerounais.',
      en: 'Transport management, cargo tracking and logistics coordination adapted to the Cameroonian context.',
    },
    status: 'dev',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    year: 2024,
  },
  {
    slug: 'agronova',
    name: 'AgroNova Farms',
    tagline: { fr: 'Ferme piscicole — 700 silures par cycle de production.', en: 'Fish farm — 700 catfish per production cycle.' },
    description: {
      fr: 'Production piscicole gérée avec rigueur : suivi des cycles, gestion des stocks, documentation complète. Capacité passée de 300 à 700 silures par cycle.',
      en: 'Rigorously managed fish farming: cycle tracking, inventory management, full documentation. Capacity scaled from 300 to 700 catfish per cycle.',
    },
    status: 'live',
    stack: ['Agriculture', 'Product Management', 'Documentation'],
    year: 2022,
  },
];

const statusColors: Record<string, { bg: string; color: string; label: string }> = {
  live: { bg: '#0a2010', color: '#10b981', label: 'Live' },
  beta: { bg: '#0c1a35', color: '#60a5fa', label: 'Beta' },
  dev: { bg: '#1a1000', color: '#f59e0b', label: 'In development' },
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
          const desc = project.description[locale as 'fr' | 'en'] ?? project.description.en;
          const tag = project.tagline[locale as 'fr' | 'en'] ?? project.tagline.en;
          const s = statusColors[project.status];

          return (
            <article
              key={project.slug}
              style={{
                background: 'var(--bg2)', border: '0.5px solid var(--border)',
                borderRadius: '12px', padding: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                <div>
                  <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text1)', margin: '0 0 4px' }}>
                    {project.name}
                  </h2>
                  <p style={{ fontSize: '13px', color: 'var(--text3)', margin: 0 }}>{tag}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    fontSize: '10px', padding: '3px 10px', borderRadius: '20px',
                    background: s.bg, color: s.color,
                    border: `0.5px solid ${s.color}33`,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {s.label}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text4)' }}>{project.year}</span>
                  {project.url && (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`} style={{ color: 'var(--text3)' }}>
                      <ExternalLink size={14} />
                    </Link>
                  )}
                </div>
              </div>

              <p style={{ fontSize: '14px', color: 'var(--text3)', lineHeight: 1.75, margin: '0 0 16px' }}>
                {desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.stack.map((tech) => (
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
          );
        })}
      </div>
    </div>
  );
}
