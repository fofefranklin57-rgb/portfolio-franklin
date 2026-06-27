import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Writing — Franklin Fofe Nodem',
  description:
    "Franklin Fofe Nodem écrit des romans et nouvelles avec la même rigueur qu'il applique à la conception de produits numériques.",
  openGraph: {
    url: 'https://portfolio-franklin.pages.dev/en/writing',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

type Locale = 'fr' | 'en';

const works = [
  {
    slug: 'enfants-meme-ventre',
    title: "Les Enfants d'un Même Ventre",
    cover: '/cover-enfants-meme-ventre.png',
    type: { fr: 'Roman', en: 'Novel' },
    status: { fr: 'Terminé', en: 'Completed' },
    statusKey: 'done',
    lang: 'Français',
    length: { fr: '~25 000 mots · 16 chapitres', en: '~25,000 words · 16 chapters' },
    period: '2025 – 2026',
    location: 'Douala, Cameroun',
    tagline: {
      fr: 'Trois frères, un secret de famille, et la violence silencieuse des liens du sang.',
      en: 'Three brothers, a family secret, and the silent violence of blood ties.',
    },
    themes: {
      fr: ['Famille et trahison', 'Identité africaine', 'Secrets transgénérationnels', 'Fraternité et rupture'],
      en: ['Family and betrayal', 'African identity', 'Transgenerational secrets', 'Brotherhood and fracture'],
    },
    learned: {
      fr: "Gérer une narration longue exige la même discipline qu'une architecture logicielle : des fondations solides, des modules cohérents, et la capacité à refactoriser sans tout casser. J'ai appris à supprimer des scènes que j'aimais pour préserver la cohérence de l'ensemble.",
      en: "Managing a long narrative requires the same discipline as software architecture: solid foundations, coherent modules, and the ability to refactor without breaking everything. I learned to cut scenes I loved in order to preserve the coherence of the whole.",
    },
    kalamundi: 'https://kalamundi.pages.dev/',
  },
  {
    slug: 'femmes-tantie-jo',
    title: 'Les Femmes de Tantie Jo',
    cover: '/cover-femmes-tantie-jo.png',
    type: { fr: 'Roman', en: 'Novel' },
    status: { fr: 'En cours', en: 'In Progress' },
    statusKey: 'wip',
    lang: 'Français',
    length: { fr: 'Objectif ~300 pages', en: 'Target ~300 pages' },
    period: '2026 –',
    location: 'Douala, Cameroun',
    tagline: {
      fr: "Trois femmes. Trois destins. Une même épreuve. Et au bout du chemin, l'espoir.",
      en: 'Three women. Three destinies. One shared trial. And at the end of the road, hope.',
    },
    themes: {
      fr: ["Condition féminine en Afrique", 'Résilience et solidarité', 'Rupture et reconstruction', 'Maternité et sacrifice'],
      en: ["Women's condition in Africa", 'Resilience and solidarity', 'Fracture and rebuilding', 'Motherhood and sacrifice'],
    },
    learned: {
      fr: "En cours. Ce projet m'apprend à écrire l'autre — des personnages qui ne me ressemblent pas, dont je dois habiter la logique interne sans la déformer. C'est un exercice d'empathie autant que d'écriture.",
      en: "In progress. This project is teaching me to write the other — characters who do not resemble me, whose internal logic I must inhabit without distorting it. It is an exercise in empathy as much as in writing.",
    },
    kalamundi: null,
  },
  {
    slug: 'amour-voyage',
    title: "L'Amour d'un Voyage",
    cover: '/cover-amour-voyage.png',
    type: { fr: 'Nouvelle', en: 'Short Story' },
    status: { fr: 'Publié', en: 'Published' },
    statusKey: 'live',
    lang: 'Français',
    length: { fr: 'Format court', en: 'Short form' },
    period: '2024',
    location: 'Yaoundé, Cameroun',
    tagline: {
      fr: "Dans ce bus de nuit, entre Yaoundé et Douala, j'ai vécu la plus belle histoire d'amour de ma vie.",
      en: "On that night bus between Yaoundé and Douala, I lived the most beautiful love story of my life.",
    },
    themes: {
      fr: ['Rencontre et fuite du temps', 'Amour suspendu', 'Le voyage comme catalyseur'],
      en: ['Encounter and fleeting time', 'Suspended love', 'Travel as a catalyst'],
    },
    learned: {
      fr: "La contrainte du format court m'a appris à écrire par soustraction. Chaque mot supprimé renforce ceux qui restent. C'est une compétence directement transférable à la rédaction de product copy ou de documentation.",
      en: "The short form constraint taught me to write by subtraction. Every word removed strengthens those that remain. This skill is directly transferable to writing product copy or documentation.",
    },
    kalamundi: 'https://kalamundi.pages.dev/',
  },
];

const statusStyle: Record<string, { bg: string; color: string; border: string }> = {
  done:  { bg: 'var(--badge-green-bg)',  color: 'var(--badge-green-color)',  border: 'var(--badge-green-border)'  },
  live:  { bg: 'var(--badge-blue-bg)',   color: 'var(--badge-blue-color)',   border: 'var(--badge-blue-border)'   },
  wip:   { bg: 'var(--badge-amber-bg)',  color: 'var(--badge-amber-color)',  border: 'var(--badge-amber-border)'  },
};

const DIVIDER = <hr style={{ border: 'none', borderTop: '0.5px solid var(--border)', margin: '0' }} />;

export default async function WritingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const isFr = l === 'fr';

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

      {/* HERO */}
      <div style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '11px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 16px' }}>
          {isFr ? 'Écriture & Narration' : 'Writing & Storytelling'}
        </p>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 20px', lineHeight: 1.25 }}>
          {isFr
            ? "Construire des histoires avec la même rigueur que des produits"
            : "Building stories with the same rigour as products"}
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text3)', lineHeight: 1.8, margin: '0 0 12px', maxWidth: '640px', textAlign: 'justify' }}>
          {isFr
            ? "J'écris pour explorer des sujets humains que les produits numériques n'atteignent pas toujours. Chaque ouvrage suit le même processus que mes projets logiciels : documentation, conception, itérations, et une version finale qui ne ressemble jamais à la première idée."
            : "I write to explore human subjects that digital products don't always reach. Each work follows the same process as my software projects: documentation, design, iterations, and a final version that never resembles the first idea."}
        </p>
        <p style={{ fontSize: '14px', color: 'var(--text4)', lineHeight: 1.7, margin: 0, maxWidth: '600px', fontStyle: 'italic' }}>
          {isFr
            ? "Ce portfolio présente des applications, une entreprise agricole et des romans. Le fil conducteur est toujours le même : transformer une idée en réalisation concrète."
            : "This portfolio presents applications, an agribusiness and novels. The thread is always the same: turning an idea into a concrete outcome."}
        </p>
      </div>

      {DIVIDER}

      {/* WORKS */}
      <div style={{ margin: '4rem 0' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 2rem' }}>
          {isFr ? 'Ouvrages' : 'Works'}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {works.map((work) => {
            const s = statusStyle[work.statusKey];
            return (
              <article key={work.slug} style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr',
                gap: '1.75rem',
                background: 'var(--bg2)',
                border: '0.5px solid var(--border)',
                borderRadius: '14px',
                padding: '1.5rem',
              }}>
                {/* Cover */}
                <img
                  src={work.cover}
                  alt={work.title}
                  style={{ width: '100%', borderRadius: '8px', display: 'block', boxShadow: '0 4px 16px rgba(0,0,0,0.18)', alignSelf: 'start' }}
                />

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '10px', padding: '3px 9px', borderRadius: '20px',
                      background: s.bg, color: s.color, border: `0.5px solid ${s.border}`,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                    }}>
                      {work.status[l]}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--text4)' }}>
                      {work.type[l]} · {work.period}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '17px', fontWeight: 500, color: 'var(--text1)', margin: 0, lineHeight: 1.3 }}>
                    {work.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: 'var(--text3)', margin: 0, lineHeight: 1.65, fontStyle: 'italic' }}>
                    {work.tagline[l]}
                  </p>

                  <p style={{ fontSize: '11px', color: 'var(--text4)', margin: 0 }}>
                    {work.lang} · {work.length[l]} · {work.location}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {work.themes[l].map((theme) => (
                      <span key={theme} style={{
                        fontSize: '10px', background: 'var(--bg3)',
                        border: '0.5px solid var(--border)', color: 'var(--text4)',
                        padding: '3px 8px', borderRadius: '4px',
                      }}>
                        {theme}
                      </span>
                    ))}
                  </div>

                  <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: '10px', marginTop: '2px' }}>
                    <p style={{ fontSize: '11px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 5px' }}>
                      {isFr ? 'Ce que ce projet m\'a appris' : 'What this project taught me'}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text2)', margin: 0, lineHeight: 1.7, textAlign: 'justify' }}>
                      {work.learned[l]}
                    </p>
                  </div>

                  {work.kalamundi && (
                    <a href={work.kalamundi} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: '12px', color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      {isFr ? 'Lire sur Kalamundi →' : 'Read on Kalamundi →'}
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {DIVIDER}

      {/* PROCESS */}
      <div style={{ margin: '4rem 0' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 1.5rem' }}>
          {isFr ? "Mon processus d'écriture" : 'My writing process'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--border)', border: '0.5px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
          {[
            { n: '01', fr: "Idée & observation",      en: "Idea & observation",   dfr: "Une tension humaine, une situation, une question sans réponse simple.",                       den: "A human tension, a situation, a question with no simple answer." },
            { n: '02', fr: "Documentation",            en: "Documentation",        dfr: "Fiches personnages, chronologie, cartographie des relations.",                               den: "Character sheets, timeline, relationship mapping." },
            { n: '03', fr: "Architecture",             en: "Architecture",         dfr: "Structure des chapitres, arcs narratifs, points de bascule.",                               den: "Chapter structure, narrative arcs, turning points." },
            { n: '04', fr: "Rédaction",                en: "Writing",              dfr: "Premier jet sans autocensure. L'objectif est d'avancer.",                                   den: "First draft without self-censorship. The goal is to move forward." },
            { n: '05', fr: "Révision",                 en: "Revision",             dfr: "Réécriture structurelle puis stylistique. Supprimer ce qui ne sert pas l'histoire.",       den: "Structural then stylistic rewrite. Remove what does not serve the story." },
            { n: '06', fr: "Version finale",           en: "Final version",        dfr: "Elle ne ressemble jamais à la première idée. C'est le signe que le processus a fonctionné.", den: "It never resembles the first idea. That is the sign the process worked." },
          ].map((s) => (
            <div key={s.n} style={{ background: 'var(--bg2)', padding: '1.25rem' }}>
              <span style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 500, display: 'block', marginBottom: '6px' }}>{s.n}</span>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text1)', margin: '0 0 5px' }}>{isFr ? s.fr : s.en}</p>
              <p style={{ fontSize: '12px', color: 'var(--text3)', margin: 0, lineHeight: 1.6 }}>{isFr ? s.dfr : s.den}</p>
            </div>
          ))}
        </div>
      </div>

      {DIVIDER}

      {/* TRANSFERABLE SKILLS */}
      <div style={{ margin: '4rem 0' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 1.5rem' }}>
          {isFr ? "Ce que l'écriture développe" : 'What writing develops'}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {(isFr ? [
            { title: 'Pensée structurée',            body: "Un roman de 25 000 mots ne tient pas sans architecture. Planifier, documenter, réviser — exactement le même processus qu'un produit logiciel." },
            { title: 'Empathie et modélisation',     body: "Écrire des personnages crédibles exige de comprendre des logiques internes très différentes de la sienne. Une compétence directement utile pour concevoir des produits centrés utilisateur." },
            { title: 'Communication par soustraction', body: "La contrainte du format court apprend à ne garder que l'essentiel. Cette discipline s'applique à la rédaction de copy, de documentation ou de specs produit." },
            { title: 'Discipline sur des projets longs', body: "Tenir un projet créatif sur plusieurs mois, sans deadline externe ni équipe, est une forme de rigueur qui n'a rien à envier à la livraison d'un sprint." },
            { title: "Capacité à itérer",            body: "Un premier jet est rarement bon. Un roman se construit en couches. Cette tolérance à l'imperfection initiale est précieuse dans tout projet ambitieux." },
          ] : [
            { title: 'Structured thinking',          body: "A 25,000-word novel doesn't hold together without architecture. Planning, documenting, revising — exactly the same process as a software product." },
            { title: 'Empathy and modelling',        body: "Writing credible characters requires understanding internal logics very different from your own. A skill directly useful for designing user-centered products." },
            { title: 'Communication by subtraction', body: "The short form constraint teaches you to keep only what is essential. This discipline applies to writing copy, documentation or product specs." },
            { title: 'Discipline on long projects',  body: "Sustaining a creative project over several months, without external deadlines or a team, is a form of rigour that rivals shipping a sprint." },
            { title: 'Ability to iterate',           body: "A first draft is rarely good. A novel is built in layers. This tolerance for initial imperfection is valuable in any ambitious project." },
          ]).map((item) => (
            <div key={item.title} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', fontSize: '14px', flexShrink: 0, marginTop: '2px' }}>→</span>
              <p style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: 1.75, margin: 0, textAlign: 'justify' }}>
                <strong style={{ color: 'var(--text1)', fontWeight: 500 }}>{item.title}. </strong>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {DIVIDER}

      {/* FOOTER */}
      <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: 'var(--text4)', lineHeight: 1.8, margin: '0 0 1.5rem', fontStyle: 'italic' }}>
          {isFr
            ? "Les ouvrages publiés sont disponibles à la lecture sur Kalamundi — La Plume du Monde."
            : "Published works are available to read on Kalamundi — La Plume du Monde."}
        </p>
        <a href="https://kalamundi.pages.dev/" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 22px', background: 'var(--bg2)', border: '0.5px solid var(--border)', color: 'var(--text2)', borderRadius: '8px', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
          🌐 {isFr ? 'Visiter Kalamundi' : 'Visit Kalamundi'}
        </a>
        <div style={{ marginTop: '2rem' }}>
          <Link href={`/${locale}/projects`}
            style={{ fontSize: '13px', color: 'var(--text4)', textDecoration: 'none' }}>
            {isFr ? '← Voir les projets logiciels' : '← See software projects'}
          </Link>
        </div>
      </div>

    </div>
  );
}
