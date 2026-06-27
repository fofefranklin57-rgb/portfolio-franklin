import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume — Franklin Fofe Nodem',
  description:
    'Resume — Franklin Fofe Nodem. Product Builder & Software Developer. Law · Archival Science · Software. Available for international remote opportunities.',
  openGraph: {
    url: 'https://portfolio-franklin.pages.dev/en/cv',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const t = {
  fr: {
    label: 'CV',
    subtitle: 'Product Builder | Software Developer',
    intro: 'Juriste de formation, archiviste de métier, développeur par nécessité. Disponible pour des opportunités internationales en télétravail.',
    updated: 'Mis à jour : juin 2026',
    download: 'Télécharger le CV (PDF)',
    summary_label: 'Profil',
    summary: "Parcours multidisciplinaire à l'intersection du droit, de la gestion de l'information et du développement logiciel. Au cours des trois dernières années, j'ai conçu et mis en production quatre produits numériques, du SaaS immobilier à une plateforme de publication africaine. Je travaille en autonomie complète — de la conception au déploiement — avec une attention particulière à la documentation, aux processus et à la valeur réelle créée pour les utilisateurs.",
    highlights_label: 'Points clés',
    highlights: [
      '4 produits conçus et mis en production',
      'Fondateur d\'ImmoGest — SaaS immobilier en Afrique francophone',
      'Fondateur de Kalamundi — plateforme de publication numérique africaine',
      'Fondateur d\'AgroNova Farms — entreprise agro-entrepreneuriale',
      'Parcours multidisciplinaire : Droit · Archivistique · Logiciel',
      'Disponible immédiatement pour des missions remote internationales',
    ],
    exp_label: 'Expériences sélectionnées',
    exp: [
      { org: 'Cabinet CRAA', role: 'Conseiller juridique & Records Manager', period: '2018 →' },
      { org: 'CHANAS Assurances S.A.', role: 'Gestion documentaire · via Onyx Manpower', period: '2021–2022' },
      { org: 'Missions archivistiques antérieures', role: 'MINESEC · Marchés Publics · NEZAFI Capital', period: '2018–2021' },
    ],
    exp_note: 'Le détail complet des expériences est disponible dans le CV téléchargeable.',
    edu_label: 'Formation',
    edu: [
      { degree: 'Master II — Droit Public', school: 'Université de Yaoundé II · 2016–2018' },
      { degree: 'Licence Pro — Archivistique & Records Management', school: 'ESSTIC, Université de Yaoundé II · 2017–2020' },
    ],
    lang_label: 'Langues',
    lang: ['Français — Natif', 'Anglais — Professionnel'],
    cta_title: 'Intéressé par mon profil ?',
    cta_body: 'Téléchargez le CV complet pour accéder au détail de mes projets, compétences et expériences.',
    cta_btn: 'Télécharger le CV (PDF)',
    cta_note: 'Vous cherchez une version française ou adaptée à un poste spécifique ? N\'hésitez pas à me contacter.',
  },
  en: {
    label: 'Resume',
    subtitle: 'Product Builder | Software Developer',
    intro: 'Trained as a lawyer, practiced as an archivist, became a developer by necessity. Available for international remote opportunities.',
    updated: 'Last updated: June 2026',
    download: 'Download Resume (PDF)',
    summary_label: 'Professional Summary',
    summary: 'Multidisciplinary background at the intersection of law, information management and software development. Over the past three years, designed and shipped four digital products — from a property management SaaS serving real estate agencies in francophone Africa to a digital publishing platform and an agribusiness venture. Work independently across the full product cycle — from conception to deployment — with a focus on documentation, process design and real value delivered to users.',
    highlights_label: 'Career Highlights',
    highlights: [
      '4 products designed and shipped to production',
      'Founded ImmoGest — property SaaS for francophone Africa',
      'Founded Kalamundi — African digital publishing platform',
      'Founded AgroNova Farms — agribusiness venture',
      'Multidisciplinary background: Law · Archival Science · Software',
      'Available immediately for international remote opportunities',
    ],
    exp_label: 'Selected Experience',
    exp: [
      { org: 'Cabinet CRAA', role: 'Legal Counsel & Records Manager', period: '2018 →' },
      { org: 'CHANAS Assurances S.A.', role: 'Records Management · via Onyx Manpower', period: '2021–2022' },
      { org: 'Earlier Archival Assignments', role: 'MINESEC · Ministry of Public Contracts · NEZAFI Capital', period: '2018–2021' },
    ],
    exp_note: 'The complete experience is available in the downloadable resume.',
    edu_label: 'Education',
    edu: [
      { degree: 'Master II — Public Law', school: 'University of Yaoundé II · 2016–2018' },
      { degree: "Professional Bachelor's — Archival Science & Records Management", school: 'ESSTIC, University of Yaoundé II · 2017–2020' },
    ],
    lang_label: 'Languages',
    lang: ['French — Native', 'English — Professional'],
    cta_title: 'Interested in learning more?',
    cta_body: 'Download the complete resume for the full detail of my projects, skills and experience.',
    cta_btn: 'Download Resume (PDF)',
    cta_note: 'Looking for a French version or a role-specific resume? Feel free to get in touch.',
  },
};

const DIVIDER = (
  <div style={{ height: '0.5px', background: 'var(--border)', margin: '2rem 0' }} />
);

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as 'fr' | 'en';
  const c = t[l];

  return (
    <div style={{ maxWidth: '680px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>

      {/* ── HERO ── */}
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ fontSize: '11px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>
          {c.label}
        </p>
        <h1 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 4px', lineHeight: 1.2 }}>
          Franklin Fofe Nodem
        </h1>
        <p style={{ fontSize: '14px', color: 'var(--accent)', margin: '0 0 10px', fontWeight: 500 }}>
          {c.subtitle}
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text3)', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
          {c.intro}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <a
            href="/cv-franklin-fofe-nodem.pdf"
            download
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 18px', background: 'var(--accent)', color: '#fff',
              borderRadius: '8px', fontSize: '13px', fontWeight: 500,
              textDecoration: 'none', width: 'fit-content',
            }}
          >
            <Download size={14} /> {c.download}
          </a>
          <p style={{ fontSize: '11px', color: 'var(--text4)', margin: 0 }}>{c.updated}</p>
        </div>
      </div>

      {DIVIDER}

      {/* ── PROFESSIONAL SUMMARY ── */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>
          {c.summary_label}
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
          {c.summary}
        </p>
      </div>

      {DIVIDER}

      {/* ── CAREER HIGHLIGHTS ── */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>
          {c.highlights_label}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          {c.highlights.map((h, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--green)', fontSize: '13px', lineHeight: 1.6, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: 1.6 }}>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {DIVIDER}

      {/* ── SELECTED EXPERIENCE ── */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 14px' }}>
          {c.exp_label}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '12px' }}>
          {c.exp.map((e, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px' }}>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text1)' }}>{e.org}</span>
                <span style={{ fontSize: '12px', color: 'var(--text3)', display: 'block', marginTop: '1px' }}>{e.role}</span>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text4)', whiteSpace: 'nowrap' }}>{e.period}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text4)', margin: 0, fontStyle: 'italic' }}>
          {c.exp_note}
        </p>
      </div>

      {DIVIDER}

      {/* ── EDUCATION ── */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>
          {c.edu_label}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {c.edu.map((e, i) => (
            <div key={i}>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text1)', margin: 0 }}>{e.degree}</p>
              <p style={{ fontSize: '12px', color: 'var(--text4)', margin: '2px 0 0' }}>{e.school}</p>
            </div>
          ))}
        </div>
      </div>

      {DIVIDER}

      {/* ── LANGUAGES ── */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>
          {c.lang_label}
        </h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {c.lang.map((lang, i) => (
            <span key={i} style={{ fontSize: '13px', color: 'var(--text2)' }}>{lang}</span>
          ))}
        </div>
      </div>

      {/* ── DOWNLOAD CTA ── */}
      <div style={{
        background: 'var(--bg2)', border: '0.5px solid var(--border)',
        borderRadius: '12px', padding: '1.75rem',
        borderLeft: '3px solid var(--accent)',
      }}>
        <h3 style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text1)', margin: '0 0 6px' }}>
          {c.cta_title}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--text3)', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
          {c.cta_body}
        </p>
        <a
          href="/cv-franklin-fofe-nodem.pdf"
          download
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 18px', background: 'var(--accent)', color: '#fff',
            borderRadius: '8px', fontSize: '13px', fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          <Download size={14} /> {c.cta_btn}
        </a>
        <p style={{ fontSize: '12px', color: 'var(--text4)', margin: '14px 0 0', fontStyle: 'italic' }}>
          {c.cta_note}
        </p>
      </div>

    </div>
  );
}
