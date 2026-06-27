import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ExternalLink, ArrowRight } from 'lucide-react';

type LocalizedString = { fr: string; en: string };

type Project = {
  slug: string;
  name: string;
  description: LocalizedString;
  status: 'live' | 'beta' | 'dev';
  role: LocalizedString;
  stack: string[];
  url?: string;
  year: number;
};

const projects: Project[] = [
  {
    slug: 'immogest',
    name: 'ImmoGest',
    description: {
      fr: "Aide les agences immobilières d'Afrique francophone à gérer locataires, paiements, baux et documents depuis une seule plateforme.",
      en: "Helping real estate agencies across francophone Africa manage tenants, payments, leases and documents from one platform.",
    },
    status: 'live',
    role: { fr: 'Fondateur · Product Builder', en: 'Founder · Product Builder' },
    stack: ['Vanilla JS', 'Cloudflare Workers', 'Supabase'],
    url: 'https://immogest-34w.pages.dev',
    year: 2024,
  },
  {
    slug: 'kalamundi',
    name: 'Kalamundi',
    description: {
      fr: "Aide les auteurs africains à publier, distribuer et valoriser leur travail à travers une plateforme numérique moderne.",
      en: "Helping African authors publish, distribute and showcase their work through a modern digital platform.",
    },
    status: 'live',
    role: { fr: 'Fondateur · Product Builder', en: 'Founder · Product Builder' },
    stack: ['Flutter', 'Next.js', 'Supabase'],
    year: 2023,
  },
  {
    slug: 'agronova',
    name: 'AgroNova Farms',
    description: {
      fr: "A lancé et développé une exploitation piscicole de 300 à 700 silures par cycle en optimisant les processus de production.",
      en: "Built and scaled a fish farming operation from 300 to 700 catfish per production cycle while improving operational processes.",
    },
    status: 'live',
    role: { fr: 'Fondateur · Opérateur', en: 'Founder · Operator' },
    stack: ['Agriculture', 'Process Design', 'Documentation'],
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
  const l = locale as 'fr' | 'en';

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
            const desc = project.description[l];
            const role = project.role[l];
            const statusLabel = t(project.status);
            const colors = statusColors[project.status];

            return (
              <Link key={project.slug} href={`/${locale}/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
                <article
                  style={{
                    background: 'var(--bg2)', border: '0.5px solid var(--border)',
                    borderRadius: '12px', padding: '1.5rem',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    gap: '10px', cursor: 'pointer',
                  }}
                >
                  {/* Top row: name + status + year */}
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

                  {/* Role */}
                  <p style={{ fontSize: '11px', color: 'var(--text4)', margin: 0, letterSpacing: '0.04em' }}>
                    {role} · {project.year}
                  </p>

                  {/* Description — impact first */}
                  <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.65, margin: 0, flex: 1 }}>
                    {desc}
                  </p>

                  {/* Stack — max 3 */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.stack.slice(0, 3).map((tech) => (
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
