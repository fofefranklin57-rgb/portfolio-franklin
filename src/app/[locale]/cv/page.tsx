import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume — Franklin Fofe Nodem',
  description:
    'Career overview — Franklin Fofe Nodem. Product Builder & Software Developer. Law · Archival Science · Software. Available for remote international opportunities.',
  openGraph: {
    url: 'https://portfolio-franklin.pages.dev/en/cv',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const copy = {
  fr: {
    label: 'Parcours',
    title: 'Franklin Fofe Nodem',
    subtitle: 'Product Builder | Software Developer',
    download_main: 'Télécharger le CV (PDF)',
    download_fr: 'Version française',
    timeline_label: 'Évolution',
    highlights_label: 'Points clés',
    experience_label: 'Expériences sélectionnées',
    projects_label: 'Projets',
    education_label: 'Formation',
    languages_label: 'Langues',
    skills_link: 'Explorer mes compétences techniques →',
    view_case: 'Voir l\'étude de cas →',
    download_cta: 'Le PDF contient le détail complet de mon parcours.',
    download_btn: 'Télécharger le CV (PDF)',
    french_native: 'Français natif',
    english_pro: 'Anglais professionnel',
  },
  en: {
    label: 'Career',
    title: 'Franklin Fofe Nodem',
    subtitle: 'Product Builder | Software Developer',
    download_main: 'Download Resume (PDF)',
    download_fr: 'French version',
    timeline_label: 'Timeline',
    highlights_label: 'Career highlights',
    experience_label: 'Selected experience',
    projects_label: 'Projects',
    education_label: 'Education',
    languages_label: 'Languages',
    skills_link: 'Explore my technical skills →',
    view_case: 'See case study →',
    download_cta: 'The PDF contains the full detail of my background.',
    download_btn: 'Download Resume (PDF)',
    french_native: 'French — Native',
    english_pro: 'English — Professional',
  },
};

const timeline = [
  { year: '2016', fr: 'Master II — Droit Public, Université de Yaoundé II', en: 'Master II — Public Law, University of Yaoundé II' },
  { year: '2017', fr: 'Licence Pro — Archivistique & Records Management, ESSTIC', en: "Professional Bachelor's — Archival Science & Records Management, ESSTIC" },
  { year: '2018', fr: 'Cabinet CRAA — Conseil juridique & gestion documentaire', en: 'Cabinet CRAA — Legal counsel & records management' },
  { year: '2021', fr: 'CHANAS Assurances — Gestion documentaire (via Onyx Manpower)', en: 'CHANAS Assurances — Records management (via Onyx Manpower)' },
  { year: '2022', fr: 'AgroNova Farms — Premier projet entrepreneurial', en: 'AgroNova Farms — First entrepreneurial venture' },
  { year: '2023', fr: 'Kalamundi — Plateforme de publication numérique', en: 'Kalamundi — Digital publishing platform' },
  { year: '2024', fr: 'ImmoGest — SaaS immobilier, en production', en: 'ImmoGest — Property SaaS, in production' },
  { year: 'Now', fr: 'Product Builder · Software Developer · Disponible', en: 'Product Builder · Software Developer · Available', now: true },
];

const highlights = {
  fr: [
    '4 produits construits et mis en production',
    'Fondateur d\'ImmoGest — SaaS immobilier en Afrique francophone',
    'Fondateur de Kalamundi — plateforme de publication africaine',
    'Fondateur d\'AgroNova Farms — entreprise agricole en croissance',
    'Parcours multidisciplinaire : Droit · Archivistique · Logiciel',
    'Disponible immédiatement pour des missions remote internationales',
  ],
  en: [
    '4 products built and shipped to production',
    'Founded ImmoGest — property SaaS for francophone Africa',
    'Founded Kalamundi — African digital publishing platform',
    'Founded AgroNova Farms — growing agribusiness venture',
    'Multidisciplinary background: Law · Archival Science · Software',
    'Available immediately for international remote opportunities',
  ],
};

const experience = {
  fr: [
    {
      org: 'Cabinet CRAA',
      role: 'Conseiller juridique — Gestion documentaire',
      period: '2018 →',
      note: 'Conseil juridique, rédaction, archivage et gestion de l\'information.',
    },
    {
      org: 'CHANAS Assurances S.A.',
      role: 'Gestion documentaire — via Onyx Manpower Services',
      period: 'Mai 2021 – Fév 2022',
      note: 'Mise en place de systèmes d\'archivage et de gestion des documents internes.',
    },
    {
      org: 'Autres missions archivistiques',
      role: 'MINESEC · Ministère des Marchés Publics · NEZAFI Capital',
      period: '2018 – 2021',
      note: '',
    },
  ],
  en: [
    {
      org: 'Cabinet CRAA',
      role: 'Legal Counsel — Records Management',
      period: '2018 →',
      note: 'Legal advice, drafting, archiving and information management.',
    },
    {
      org: 'CHANAS Assurances S.A.',
      role: 'Records Management — via Onyx Manpower Services',
      period: 'May 2021 – Feb 2022',
      note: 'Implementation of archiving and internal document management systems.',
    },
    {
      org: 'Earlier archival assignments',
      role: 'MINESEC · Ministry of Public Contracts · NEZAFI Capital',
      period: '2018 – 2021',
      note: '',
    },
  ],
};

const projects = [
  { slug: 'immogest', name: 'ImmoGest', year: '2024' },
  { slug: 'kalamundi', name: 'Kalamundi', year: '2023' },
  { slug: 'agronova', name: 'AgroNova Farms', year: '2022' },
  { slug: 'traficam', name: 'Traficam', year: '2024' },
];

const education = {
  fr: [
    { degree: 'Master II — Droit Public Fondamental', school: 'Université de Yaoundé II', year: '2016–2018' },
    { degree: 'Licence Professionnelle — Archivistique & Records Management', school: 'ESSTIC, Université de Yaoundé II', year: '2017–2020' },
  ],
  en: [
    { degree: 'Master II — Public Law', school: 'University of Yaoundé II', year: '2016–2018' },
    { degree: "Professional Bachelor's — Archival Science & Records Management", school: 'ESSTIC, University of Yaoundé II', year: '2017–2020' },
  ],
};

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as 'fr' | 'en';
  const t = copy[l];

  const sectionTitle = (label: string) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '2.5rem 0 1.25rem' }}>
      <h2 style={{
        fontSize: '11px', fontWeight: 600, color: 'var(--text4)',
        textTransform: 'uppercase', letterSpacing: '0.12em', margin: 0, whiteSpace: 'nowrap',
      }}>
        {label}
      </h2>
      <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
    </div>
  );

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '4rem 1.5rem 5rem' }}>

      {/* Hero */}
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '11px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>
          {t.label}
        </p>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 6px', lineHeight: 1.2 }}>
          {t.title}
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--accent)', margin: '0 0 1.5rem', fontWeight: 500 }}>
          {t.subtitle}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
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
            <Download size={14} /> {t.download_main}
          </a>
          <a
            href="/cv-franklin-fofe-nodem-fr.pdf"
            download
            style={{ fontSize: '12px', color: 'var(--text3)', textDecoration: 'none' }}
          >
            {t.download_fr}
          </a>
        </div>
      </div>

      {/* Career Timeline */}
      {sectionTitle(t.timeline_label)}
      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        <div style={{
          position: 'absolute', left: '6px', top: 0, bottom: 0,
          width: '1px', background: 'var(--border)',
        }} />
        {timeline.map((item, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: '1rem', paddingBottom: '0' }}>
            <div style={{
              position: 'absolute', left: '-1.5rem',
              width: '13px', height: '13px', borderRadius: '50%',
              background: item.now ? 'var(--accent)' : 'var(--bg)',
              border: `1.5px solid ${item.now ? 'var(--accent)' : 'var(--border)'}`,
              top: '2px',
            }} />
            <div style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}>
              <span style={{
                fontSize: '11px', color: item.now ? 'var(--accent)' : 'var(--text4)',
                fontWeight: item.now ? 600 : 400, whiteSpace: 'nowrap', minWidth: '36px',
              }}>
                {item.year}
              </span>
              <span style={{
                fontSize: '13px', color: item.now ? 'var(--text1)' : 'var(--text3)',
                fontWeight: item.now ? 500 : 400, lineHeight: 1.5,
              }}>
                {item[l]}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Career Highlights */}
      {sectionTitle(t.highlights_label)}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {highlights[l].map((h, i) => (
          <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <span style={{ color: 'var(--green)', fontSize: '13px', lineHeight: 1.6, flexShrink: 0 }}>✓</span>
            <span style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.6 }}>{h}</span>
          </div>
        ))}
      </div>

      {/* Projects */}
      {sectionTitle(t.projects_label)}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {projects.map((p) => (
          <div key={p.slug} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text1)' }}>{p.name}</span>
              <span style={{ fontSize: '12px', color: 'var(--text4)' }}>{p.year}</span>
            </div>
            <Link
              href={`/${locale}/projects/${p.slug}`}
              style={{
                fontSize: '12px', color: 'var(--accent)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '4px',
              }}
            >
              {t.view_case} <ArrowRight size={11} />
            </Link>
          </div>
        ))}
      </div>

      {/* Selected Experience */}
      {sectionTitle(t.experience_label)}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {experience[l].map((e, i) => (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px', marginBottom: '2px' }}>
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text1)' }}>{e.org}</span>
              <span style={{ fontSize: '12px', color: 'var(--text4)', whiteSpace: 'nowrap' }}>{e.period}</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text3)', margin: '0 0 2px' }}>{e.role}</p>
            {e.note && <p style={{ fontSize: '12px', color: 'var(--text4)', margin: 0 }}>{e.note}</p>}
          </div>
        ))}
      </div>

      {/* Education */}
      {sectionTitle(t.education_label)}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {education[l].map((e, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px' }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text1)', margin: 0 }}>{e.degree}</p>
              <p style={{ fontSize: '12px', color: 'var(--text4)', margin: '2px 0 0' }}>{e.school}</p>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 500, whiteSpace: 'nowrap' }}>{e.year}</span>
          </div>
        ))}
      </div>

      {/* Languages */}
      {sectionTitle(t.languages_label)}
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '14px', color: 'var(--text2)' }}>{t.french_native}</span>
        <span style={{ fontSize: '14px', color: 'var(--text2)' }}>{t.english_pro}</span>
      </div>

      {/* Skills link */}
      <div style={{ marginTop: '1.5rem' }}>
        <Link href={`/${locale}#skills`} style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none' }}>
          {t.skills_link}
        </Link>
      </div>

      {/* Download CTA */}
      <div style={{
        marginTop: '3.5rem', padding: '1.5rem',
        background: 'var(--bg2)', border: '0.5px solid var(--border)',
        borderRadius: '12px', borderLeft: '3px solid var(--accent)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <p style={{ fontSize: '14px', color: 'var(--text3)', margin: 0 }}>
          {t.download_cta}
        </p>
        <a
          href="/cv-franklin-fofe-nodem.pdf"
          download
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '10px 18px', background: 'var(--accent)', color: '#fff',
            borderRadius: '8px', fontSize: '13px', fontWeight: 500,
            textDecoration: 'none', whiteSpace: 'nowrap',
          }}
        >
          <Download size={14} /> {t.download_btn}
        </a>
      </div>

    </div>
  );
}
