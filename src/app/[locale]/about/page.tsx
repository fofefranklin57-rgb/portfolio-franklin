import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Franklin Fofe Nodem',
  description:
    'Franklin Fofe Nodem — Product Builder & Software Developer. Law, archival science and software: the path that led to building four products in production across francophone Africa.',
  openGraph: {
    url: 'https://portfolio-franklin.pages.dev/en/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const timeline = [
  {
    year: '2016–2018',
    title: {
      fr: 'Master II — Droit Public',
      en: 'Master II — Public Law',
    },
    org: 'Université de Yaoundé II',
    desc: {
      fr: "Formation juridique fondamentale. Appris à analyser des systèmes complexes, à rédiger avec rigueur et à comprendre comment les règles structurent les organisations.",
      en: "Legal education. Learned to analyze complex systems, write with precision and understand how rules structure organizations.",
    },
    lesson: {
      fr: "Chaque document a une structure. Chaque système a une logique. Il faut d'abord les comprendre avant de chercher à les améliorer.",
      en: "Every document has structure. Every system has logic. You need to understand both before trying to improve either.",
    },
  },
  {
    year: '2017–2020',
    title: {
      fr: "Licence Pro — Archivistique & Records Management",
      en: "Bachelor — Archival Science & Records Management",
    },
    org: 'ESSTIC, Université de Yaoundé II',
    desc: {
      fr: "Formation en gestion de l'information professionnelle. Compris que l'information bien gérée est une infrastructure — invisible quand elle fonctionne, coûteuse quand elle est absente.",
      en: "Professional information management training. Understood that well-managed information is infrastructure — invisible when it works, costly when it's missing.",
    },
    lesson: {
      fr: "La plupart des problèmes opérationnels partagent la même racine : une information mal structurée ou inaccessible.",
      en: "Most operational problems share the same root: poorly structured or inaccessible information.",
    },
  },
  {
    year: '2018–2022',
    title: {
      fr: 'Missions — Secteur public & privé',
      en: 'Assignments — Public & Private sector',
    },
    org: 'NEZAFI Capital · MINESEC · Min. Marchés Publics · CHANAS Assurances',
    desc: {
      fr: "Quatre organisations. Des milliers de documents. Des processus variés. Et partout, le même constat : les outils existants ne répondaient pas aux vrais besoins du terrain.",
      en: "Four organizations. Thousands of documents. Varied processes. And everywhere, the same observation: existing tools didn't address the real operational needs.",
    },
    lesson: {
      fr: "La meilleure façon de comprendre un problème, c'est de travailler dedans — pas de l'observer de l'extérieur.",
      en: "The best way to understand a problem is to work inside it — not observe it from the outside.",
    },
  },
  {
    year: '2022',
    title: {
      fr: 'Pivot — Lancement d\'AgroNova Farms',
      en: 'Pivot — Launched AgroNova Farms',
    },
    org: 'Yaoundé, Cameroun',
    desc: {
      fr: "La transition vers le développement logiciel ne s'est pas faite d'un coup. Elle s'est construite progressivement, au contact des problèmes que je documentais sans pouvoir les résoudre. Un jour, j'ai décidé de construire l'outil plutôt que d'attendre qu'il existe.",
      en: "The transition toward software development didn't happen overnight. It built up gradually, through contact with problems I was documenting without being able to solve. One day, I decided to build the tool rather than wait for it to exist.",
    },
    lesson: {
      fr: "Résoudre un problème opérationnel passe parfois par la construction de l'outil lui-même. Cette réalisation a tout changé.",
      en: "Solving an operational problem sometimes means building the tool yourself. That realization changed everything.",
    },
  },
  {
    year: '2023–2024',
    title: {
      fr: 'ImmoGest & Kalamundi — En production',
      en: 'ImmoGest & Kalamundi — In production',
    },
    org: 'Cloudflare · Supabase · Flutter',
    desc: {
      fr: "Deux plateformes conçues, développées et mises en production de manière indépendante. Avec de vrais utilisateurs, de vraies contraintes et de vraies décisions à prendre à chaque itération.",
      en: "Two platforms designed, built and shipped independently. With real users, real constraints and real decisions to make at every iteration.",
    },
    lesson: {
      fr: "Mettre un produit en production, c'est le début du travail — pas la fin. Ce sont les utilisateurs réels qui révèlent ce que les spécifications ne peuvent pas anticiper.",
      en: "Shipping a product to production is the beginning of the work — not the end. Real users reveal what specifications can never anticipate.",
    },
  },
  {
    year: '2025 →',
    title: {
      fr: 'Prêt pour le prochain défi international',
      en: 'Ready for the next international challenge',
    },
    org: 'Remote — UTC+1',
    desc: {
      fr: "Disponible pour des missions à distance, des emplois full-time et des collaborations internationales.",
      en: "Available for remote missions, full-time roles and international collaborations.",
    },
    lesson: null,
    current: true,
  },
];

const howIWork = {
  fr: [
    "Résoudre le vrai problème, pas le symptôme visible.",
    "Documenter les décisions, pas seulement les résultats.",
    "Livrer, puis améliorer. Attendre la perfection, c'est une stratégie pour ne jamais livrer.",
    "Apprendre de chaque contrainte — budget, délai ou contexte.",
    "Construire pour le long terme, même en commençant petit.",
  ],
  en: [
    "Solve the real problem, not the visible symptom.",
    "Document decisions, not just outcomes.",
    "Ship, then improve. Waiting for perfect is a strategy for never.",
    "Learn from every constraint — budget, time or context.",
    "Build for the long term, even when starting small.",
  ],
};

const sectionLabel = (text: string) => (
  <p style={{
    fontSize: '11px', color: 'var(--text4)',
    textTransform: 'uppercase', letterSpacing: '0.1em',
    margin: '0 0 1.25rem', fontWeight: 600,
  }}>
    {text}
  </p>
);

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

      {/* ── HEADER ── */}
      <div style={{ maxWidth: '680px', marginBottom: '4rem' }}>
        <p style={{ fontSize: '12px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>
          About
        </p>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 2rem', lineHeight: 1.3 }}>
          {l === 'fr'
            ? "Concevoir des produits à l'intersection du logiciel, des systèmes d'information et des opérations réelles."
            : "Building products at the intersection of software, information systems and real-world operations."}
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85, margin: 0, textAlign: 'justify' }}>
            {l === 'fr'
              ? "J'ai commencé par le Droit, puis bifurqué vers l'archivistique et le records management à l'ESSTIC. Pendant quatre ans, j'ai géré des fonds documentaires dans des ministères et des entreprises privées au Cameroun."
              : "I started with Law, then pivoted to archival science and records management at ESSTIC. For four years, I managed documentary collections in government ministries and private companies in Cameroon."}
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85, margin: 0, textAlign: 'justify' }}>
            {l === 'fr'
              ? "Au fil du temps, j'ai réalisé que bon nombre des problèmes que je documentais n'étaient pas vraiment des problèmes de documentation. C'étaient des problèmes logiciels qui attendaient d'être résolus. Cette compréhension, acquise progressivement au contact du terrain, m'a conduit naturellement vers la conception de produits."
              : "Over time, I realized that many of the problems I was documenting were not documentation problems at all. They were software problems waiting to be solved. That understanding, built gradually through field experience, naturally led me toward product building."}
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85, margin: 0, textAlign: 'justify' }}>
            {l === 'fr'
              ? <>Depuis, je me suis concentré sur la conception de produits dans l'immobilier, l'édition numérique et l'entrepreneuriat agricole — chacun conçu pour résoudre un problème opérationnel réel. <Link href={`/${locale}/projects`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>Voir les projets →</Link></>
              : <>Since then, I've focused on building products across property management, publishing and entrepreneurship — each designed to solve a real operational problem. <Link href={`/${locale}/projects`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>See projects →</Link></>}
          </p>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.85, margin: 0, textAlign: 'justify' }}>
            {l === 'fr'
              ? "Je suis aussi écrivain — deux romans et une nouvelle publiés. Écrire de la fiction et construire des logiciels ont plus en commun qu'il n'y paraît. Les deux commencent par une idée, évoluent à travers d'innombrables révisions et aboutissent à quelque chose qui n'existait pas avant."
              : "I'm also a writer — two novels and a novella published. Writing fiction and building software have more in common than they appear. Both begin with an idea, evolve through countless revisions and ultimately become something that didn't exist before."}
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

      {/* ── HOW I WORK ── */}
      <div style={{ maxWidth: '680px', marginBottom: '4rem' }}>
        {sectionLabel(l === 'fr' ? 'Comment je travaille' : 'How I work')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {howIWork[l].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', fontSize: '12px', lineHeight: 1.7, flexShrink: 0, marginTop: '1px' }}>—</span>
              <span style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.7 }}>{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── JOURNEY ── */}
      <div style={{ maxWidth: '720px', marginBottom: '4rem' }}>
        {sectionLabel(l === 'fr' ? 'Parcours' : 'Journey')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {timeline.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
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
                <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.7, margin: 0, textAlign: 'justify' }}>
                  {item.desc[l]}
                </p>
                {item.lesson && (
                  <p style={{
                    fontSize: '12px', color: 'var(--text4)', lineHeight: 1.6,
                    margin: '8px 0 0', fontStyle: 'italic',
                    paddingLeft: '10px', borderLeft: '2px solid var(--border)',
                  }}>
                    {item.lesson[l]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ASSOCIATIONS ── */}
      <div style={{ maxWidth: '720px', paddingTop: '2rem', borderTop: '0.5px solid var(--border)' }}>
        {sectionLabel(l === 'fr' ? 'Engagements' : 'Associations')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            { fr: "Secrétaire régional — APIDCA (Association des Professionnels de l'Information Documentaire au Cameroun)", en: 'Regional Secretary — APIDCA (Association of Documentary Information Professionals of Cameroon)' },
            { fr: 'Membre — ACA (Association des Archivistes du Cameroun)', en: 'Member — ACA (Association of Archivists of Cameroon)' },
            { fr: 'Bénévole — Conférence Internationale des Archives, Yaoundé 2019', en: 'Volunteer — International Council on Archives Conference, Yaoundé 2019' },
          ].map((item, i) => (
            <p key={i} style={{ fontSize: '12px', color: 'var(--text4)', margin: 0, lineHeight: 1.6 }}>
              {item[l]}
            </p>
          ))}
        </div>
      </div>

    </div>
  );
}
