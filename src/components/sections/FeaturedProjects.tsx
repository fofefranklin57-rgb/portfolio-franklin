import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ExternalLink, ArrowRight } from 'lucide-react';

type LocalizedString = { fr: string; en: string };

type Project = {
  slug: string;
  name: string;
  description: LocalizedString;
  status: 'live' | 'beta' | 'dev';
  stack: string[];
  url?: string;
  year: number;
};

const projects: Project[] = [
  {
    slug: 'immogest',
    name: 'ImmoGest',
    description: {
      fr: "Plateforme SaaS de gestion immobiliere pour les agences d'Afrique francophone. Locataires, paiements, baux, documents — tout en un.",
      en: "SaaS property management platform for francophone Africa agencies. Tenants, payments, leases, documents — all in one.",
    },
    status: 'live',
    stack: ['Vanilla JS', 'Cloudflare Workers', 'Supabase', 'PostgreSQL'],
    url: 'https://immogest.app',
    year: 2024,
  },
  {
    slug: 'kalamundi',
    name: 'Kalamundi',
    description: {
      fr: "Plateforme de publication et de lecture connectant auteurs et lecteurs africains. Studio de creation de contenu integre.",
      en: "Publishing and reading platform connecting African authors and readers. Integrated content creation studio.",
    },
    status: 'live',
    stack: ['Flutter', 'Next.js', 'Cloudflare', 'Supabase'],
    year: 2023,
  },
  {
    slug: 'agronova',
    name: 'AgroNova Farms',
    description: {
      fr: "Ferme piscicole — production passee de 300 a 700 silures par cycle. Gestion de la production, suivi des stocks, documentation des cycles.",
      en: "Fish farm — production scaled from 300 to 700 catfish per cycle. Production management, inventory tracking, cycle documentation.",
    },
    status: 'live',
    stack: ['Agriculture', 'Product Management', 'Documentation'],
    year: 2022,
  },
];

const statusColors: Record<string, { bg: string; color: string; border: string }> = {
  live: { bg: 'var(--badge-green-bg)', color: 'var(--badge-green-color)', border: 'var(--badge-green-border)' },
  beta: { bg: 'var(--badge-blue-bg)', color: 'var(--badge-blue-color)', border: 'var(--badge-blue-border)' },
  dev: { bg: 'var(--badge-amber-bg)', color: 'var(--badge-amber-color)', border: 'var(--badge-amber-border)' },
};

export default function FeaturedProjects() {
  const t = useTranslations('projects');
  const locale = useLocale();

  return (
    <section
      aria-label={t('section_title')}
      style={{
        background: 'var(--bg)', padding: '4rem 1.5rem',
        borderTop: '0.5px solid var(--bg3)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 500, color: 'var(--text1)', margin: '0 0 6px' }}>
            {t('section_title')}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text3)', margin: 0 }}>
            {t('section_sub')}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem', marginBottom: '2rem',
        }}>
          {projects.map((project) => {
            const desc = project.description[locale as 'fr' | 'en'] ?? project.description.en;
            const statusLabel = t(project.status);
            const colors = statusColors[project.status];

            return (
              <Link key={project.slug} href={`/${locale}/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
                <article
                  style={{
                    background: 'var(--bg2)', border: '0.5px solid var(--border)',
                    borderRadius: '12px', padding: '1.5rem',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    gap: '12px', cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text1)', margin: 0 }}>
                      {project.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{
                        fontSize: '10px', padding: '3px 8px', borderRadius: '20px',
                        background: colors.bg, color: colors.color,
                        border: `0.5px solid ${colors.border}`,
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                      }}>
                        {statusLabel}
                      </span>
                      {project.url && (
                        <ExternalLink size={13} aria-hidden="true" style={{ color: 'var(--text4)', flexShrink: 0 }} />
                      )}
                    </div>
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.65, margin: 0, flex: 1 }}>
                    {desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.stack.map((tech) => (
                      <span key={tech} style={{
                        fontSize: '10px', background: 'var(--bg3)',
                        border: '0.5px solid var(--border)', color: 'var(--text4)',
                        padding: '3px 8px', borderRadius: '4px',
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

        <Link
          href={`/${locale}/projects`}
          style={{
            fontSize: '13px', color: 'var(--accent)', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
          }}
        >
          {t('cta')} <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
