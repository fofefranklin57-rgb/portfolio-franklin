import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Franklin Fofe Nodem — from law and archival science to software. Product Builder based in Cameroon.',
};

const timeline = [
  {
    year: '2017–2020',
    title: { fr: 'Licence Pro — Archivistique & Records Management', en: 'Bachelor — Archival Science & Records Management' },
    org: 'ESSTIC, Université de Yaoundé II',
    desc: { fr: 'Formation complète en gestion de l\'information, documentation et archivistique professionnelle.', en: 'Comprehensive training in information management, documentation and professional archival science.' },
  },
  {
    year: '2018–2022',
    title: { fr: 'Stages & Missions — Secteur public & privé', en: 'Internships & Assignments — Public & Private sector' },
    org: 'NEZAFI Capital · MINESEC · Min. Marchés Publics · CHANAS Assurances',
    desc: { fr: 'Gestion documentaire, classement, numérisation et communication administrative dans quatre organisations.', en: 'Document management, classification, digitization and administrative communication across four organizations.' },
  },
  {
    year: '2019',
    title: { fr: 'Bénévole — Conférence Internationale des Archives', en: 'Volunteer — International Archives Conference' },
    org: 'Yaoundé, Cameroun',
    desc: { fr: 'Participation active à l\'un des plus grands événements mondiaux de la profession archivistique.', en: 'Active participation in one of the world\'s largest archival science professional events.' },
  },
  {
    year: '2022',
    title: { fr: 'Pivot — Premier produit logiciel', en: 'Pivot — First software product' },
    org: 'Cabinet CRAA, Yaoundé',
    desc: { fr: 'Création d\'AgroNova Farms. Découverte que le moyen le plus puissant de résoudre un problème, c\'est de construire l\'outil qui le fait disparaître.', en: 'Built AgroNova Farms. Discovered that the most powerful way to solve a problem is to build the tool that makes it disappear.' },
  },
  {
    year: '2023–2024',
    title: { fr: 'ImmoGest & Kalamundi — En production', en: 'ImmoGest & Kalamundi — In production' },
    org: 'Cloudflare · Supabase · Flutter',
    desc: { fr: 'Deux plateformes SaaS en production avec de vrais utilisateurs en Afrique francophone.', en: 'Two SaaS platforms in production with real users across francophone Africa.' },
  },
  {
    year: '2025 →',
    title: { fr: 'Ouvert aux opportunités internationales', en: 'Open to international opportunities' },
    org: 'Remote — UTC+1',
    desc: { fr: 'Disponible pour missions à distance, emplois full-time et collaborations internationales.', en: 'Available for remote missions, full-time roles and international collaborations.' },
    current: true,
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as 'fr' | 'en';

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>

      {/* Header */}
      <div style={{ maxWidth: '680px', marginBottom: '4rem' }}>
        <p style={{ fontSize: '12px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>
          About
        </p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 1.5rem', lineHeight: 1.25 }}>
          {l === 'fr'
            ? 'Juriste. Archiviste. Développeur de produits.'
            : 'Lawyer. Archivist. Product Builder.'}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            {l === 'fr'
              ? "J'ai commencé par le Droit, puis bifurqué vers l'archivistique et le records management à l'ESSTIC. Pendant quatre ans, j'ai géré des fonds documentaires dans des ministères et des entreprises privées au Cameroun."
              : "I started with Law, then pivoted to archival science and records management at ESSTIC. For four years, I managed documentary collections in government ministries and private companies in Cameroon."}
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            {l === 'fr'
              ? "En 2022, j'ai réalisé quelque chose : le vrai problème de la gestion documentaire n'était pas le classement — c'était l'absence d'outils adaptés. J'ai commencé à construire ces outils. Je ne me suis plus arrêté."
              : "In 2022, I realized something: the real problem with document management wasn't classification — it was the absence of the right tools. I started building those tools. I haven't stopped since."}
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            {l === 'fr'
              ? <>Aujourd'hui, <strong style={{ color: 'var(--text1)' }}>ImmoGest</strong> gère les loyers et baux d'agences immobilières en Afrique francophone. <strong style={{ color: 'var(--text1)' }}>Kalamundi</strong> connecte auteurs et lecteurs africains. <strong style={{ color: 'var(--text1)' }}>AgroNova</strong> produit 700 silures par cycle. Je construis seul, de l'idée à la production.</>
              : <><strong style={{ color: 'var(--text1)' }}>ImmoGest</strong> manages leases and rents for real estate agencies across francophone Africa. <strong style={{ color: 'var(--text1)' }}>Kalamundi</strong> connects African authors and readers. <strong style={{ color: 'var(--text1)' }}>AgroNova</strong> produces 700 catfish per cycle. I build alone, from idea to production.</>}
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            {l === 'fr'
              ? "Je suis aussi écrivain — deux romans et une nouvelle publiés. Écrire de la fiction et construire des logiciels, c'est pour moi la même activité : les deux commencent par une page blanche et se terminent par quelque chose qui n'existait pas avant."
              : "I'm also a writer — two novels and a novella published. Writing fiction and building software are, for me, the same activity: both start with a blank page and end with something that did not exist before."}
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href={`/${locale}/projects`} style={{
            fontSize: '13px', padding: '10px 20px',
            background: 'var(--accent)', color: '#fff',
            borderRadius: '7px', fontWeight: 500,
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            textDecoration: 'none',
          }}>
            {l === 'fr' ? 'Voir mes projets' : 'See my projects'} <ArrowRight size={14} />
          </Link>
          <Link href={`/${locale}/contact`} style={{
            fontSize: '13px', padding: '10px 20px',
            background: 'transparent', color: 'var(--text3)',
            border: '0.5px solid var(--border)', borderRadius: '7px',
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            textDecoration: 'none',
          }}>
            {l === 'fr' ? 'Me contacter' : 'Get in touch'}
          </Link>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: '720px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text1)', margin: '0 0 2rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {l === 'fr' ? 'Parcours' : 'Journey'}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {timeline.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
              {/* Timeline line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '12px', flexShrink: 0, paddingTop: '4px' }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0,
                  background: item.current ? 'var(--green)' : 'var(--accent)',
                  border: '2px solid var(--bg)',
                  boxShadow: item.current ? '0 0 0 3px rgba(16,185,129,0.2)' : 'none',
                }} />
                {i < timeline.length - 1 && (
                  <div style={{ width: '1px', flex: 1, background: 'var(--border)', minHeight: '40px' }} />
                )}
              </div>
              {/* Content */}
              <div style={{ paddingBottom: '2rem' }}>
                <p style={{ fontSize: '11px', color: item.current ? 'var(--green)' : 'var(--accent)', fontWeight: 500, margin: '0 0 4px', letterSpacing: '0.05em' }}>
                  {item.year}
                </p>
                <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text1)', margin: '0 0 2px' }}>
                  {item.title[l]}
                </p>
                <p style={{ fontSize: '12px', color: 'var(--text4)', margin: '0 0 6px' }}>
                  {item.org}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.65, margin: 0 }}>
                  {item.desc[l]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Associations */}
      <div style={{ maxWidth: '720px', marginTop: '3rem', paddingTop: '3rem', borderTop: '0.5px solid var(--border)' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text1)', margin: '0 0 1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {l === 'fr' ? 'Engagements' : 'Associations'}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { fr: 'Secrétaire régional — APIDCA (Association des Professionnels de l\'Information Documentaire au Cameroun)', en: 'Regional Secretary — APIDCA (Association of Documentary Information Professionals of Cameroon)' },
            { fr: 'Membre — ACA (Association des Archivistes du Cameroun)', en: 'Member — ACA (Association of Archivists of Cameroon)' },
            { fr: 'Bénévole — Conférence Internationale des Archives, Yaoundé 2019', en: 'Volunteer — International Council on Archives Conference, Yaoundé 2019' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>–</span>
              <p style={{ fontSize: '13px', color: 'var(--text3)', margin: 0, lineHeight: 1.6 }}>{item[l]}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
