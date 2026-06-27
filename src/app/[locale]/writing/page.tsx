import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Writing — Franklin Fofe Nodem',
  description:
    'Franklin Fofe Nodem explores human stories with the same rigor he applies to building digital products. Two novels, one short story.',
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
    status: { fr: 'Terminé', en: 'Completed' },
    genre: { fr: 'Roman', en: 'Novel' },
    lang: { fr: 'Français', en: 'French' },
    length: { fr: '~25 000 mots · 16 chapitres', en: '~25,000 words · 16 chapters' },
    period: '2025 – 2026',
    kalamundi: 'https://kalamundi.pages.dev/',
    tagline: {
      fr: "Une fratrie camerounaise entre héritage, trahisons et solidarités silencieuses.",
      en: "A Cameroonian family torn between inheritance, betrayal and quiet solidarity.",
    },
    summary: {
      fr: "Ce roman suit plusieurs frères et sœurs réunis après un événement familial décisif. À travers leurs interactions, leurs non-dits et leurs compromis, il interroge ce que signifie partager le même sang sans partager les mêmes valeurs.",
      en: "This novel follows several siblings reunited after a decisive family event. Through their interactions, silences and compromises, it questions what it means to share the same blood without sharing the same values.",
    },
    themes: {
      fr: ['Liens familiaux', 'Héritage et identité', 'Conflits intergénérationnels', 'Solidarité silencieuse'],
      en: ['Family bonds', 'Heritage and identity', 'Intergenerational conflict', 'Quiet solidarity'],
    },
    challenges: {
      fr: "Construire plusieurs voix distinctes pour chaque personnage sans que le lecteur ne les confonde. Maintenir la tension narrative sur 16 chapitres sans recourir à des retournements artificiels.",
      en: "Building distinct voices for each character without confusing the reader. Sustaining narrative tension across 16 chapters without relying on artificial twists.",
    },
    process: {
      fr: "Chaque chapitre a été documenté séparément avant d'être intégré dans une architecture d'ensemble. Claude a été utilisé comme lecteur critique — pour tester la cohérence des personnages, identifier les longueurs et suggérer des reformulations. La version finale a été entièrement réécrite deux fois.",
      en: "Each chapter was documented separately before being integrated into an overall architecture. Claude was used as a critical reader — to test character consistency, identify slow passages and suggest reformulations. The final version was entirely rewritten twice.",
    },
    learned: {
      fr: [
        "Gérer une narration longue exige la même rigueur qu'une architecture logicielle — chaque chapitre doit justifier sa place.",
        "Construire un personnage crédible demande de comprendre ses contradictions, pas seulement ses motivations.",
        "Réécrire entièrement est parfois la seule décision honnête à prendre.",
      ],
      en: [
        "Managing a long narrative requires the same rigor as software architecture — every chapter must justify its place.",
        "Building a credible character means understanding their contradictions, not just their motivations.",
        "Rewriting entirely is sometimes the only honest decision to make.",
      ],
    },
  },
  {
    slug: 'femmes-tantie-jo',
    title: 'Les Femmes de Tantie Jo',
    status: { fr: 'En cours', en: 'In Progress' },
    genre: { fr: 'Roman', en: 'Novel' },
    lang: { fr: 'Français', en: 'French' },
    length: { fr: 'Objectif ~300 pages', en: 'Target ~300 pages' },
    period: '2026',
    kalamundi: null,
    tagline: {
      fr: "Trois femmes, trois trajectoires, une même société qui les contraint à des choix impossibles.",
      en: "Three women, three trajectories, one society that forces them into impossible choices.",
    },
    summary: {
      fr: "Une fresque chorale construite autour de trois protagonistes — Aïna, Mireille et Soraya — dont les histoires se croisent sans jamais totalement se rejoindre. Ce roman explore la condition féminine dans une Afrique contemporaine prise entre tradition et modernité.",
      en: "A choral fresco built around three protagonists — Aïna, Mireille and Soraya — whose stories intersect without ever fully converging. This novel explores the condition of women in a contemporary Africa caught between tradition and modernity.",
    },
    themes: {
      fr: ['Condition féminine', 'Transmission et rupture', 'Liberté et contrainte', 'Afrique contemporaine'],
      en: ['Women\'s condition', 'Transmission and rupture', 'Freedom and constraint', 'Contemporary Africa'],
    },
    challenges: {
      fr: "Alterner trois points de vue distincts sans perdre le lecteur ni sacrifier la profondeur de chaque personnage. Trouver le rythme juste entre les histoires individuelles et la fresque collective.",
      en: "Alternating three distinct points of view without losing the reader or sacrificing the depth of each character. Finding the right rhythm between individual stories and the collective fresco.",
    },
    process: {
      fr: "Le projet a débuté par une phase de conception documentée — fiches personnages, arcs narratifs, chronologie des événements. La structure en 37 sections a été planifiée avant l'écriture. La rédaction procède section par section, avec des lectures croisées régulières pour assurer la cohérence des trois voix.",
      en: "The project began with a documented design phase — character sheets, narrative arcs, timeline of events. The 37-section structure was planned before writing began. Drafting proceeds section by section, with regular cross-readings to ensure consistency across the three voices.",
    },
    learned: {
      fr: [
        "Planifier avant d'écrire n'est pas une contrainte — c'est ce qui rend la liberté d'écriture possible.",
        "La narration chorale exige une discipline d'architecte : chaque voix a son propre tempo, ses propres silences.",
      ],
      en: [
        "Planning before writing is not a constraint — it is what makes the freedom of writing possible.",
        "Choral narration requires an architect's discipline: each voice has its own tempo, its own silences.",
      ],
    },
  },
  {
    slug: 'amour-voyage',
    title: "L'Amour d'un Voyage",
    status: { fr: 'Terminé', en: 'Completed' },
    genre: { fr: 'Nouvelle', en: 'Short Story' },
    lang: { fr: 'Français', en: 'French' },
    length: { fr: 'Format court', en: 'Short form' },
    period: '2024',
    kalamundi: 'https://kalamundi.pages.dev/',
    tagline: {
      fr: "Une rencontre, un trajet, une question qui reste.",
      en: "A meeting, a journey, a question that lingers.",
    },
    summary: {
      fr: "Une nouvelle centrée sur une rencontre fugace qui laisse une empreinte durable. Le format court a été choisi délibérément pour travailler la précision du mot et l'économie narrative — chaque phrase devait justifier sa présence.",
      en: "A short story centered on a brief encounter that leaves a lasting impression. The short format was deliberately chosen to work on word precision and narrative economy — every sentence had to justify its presence.",
    },
    themes: {
      fr: ['Rencontre et distance', 'Le temps qui passe', 'Ce qu\'on ne dit pas'],
      en: ['Encounter and distance', 'Passing time', 'What goes unsaid'],
    },
    challenges: {
      fr: "Raconter quelque chose de complet en peu de mots. Résister à la tentation de tout expliquer.",
      en: "Telling something complete in few words. Resisting the temptation to explain everything.",
    },
    process: {
      fr: "Écrite en une session, révisée sur plusieurs semaines. Publiée sur Kalamundi, où elle a généré 42 lectures.",
      en: "Written in one session, revised over several weeks. Published on Kalamundi, where it has generated 42 reads.",
    },
    learned: {
      fr: [
        "La contrainte du format court force une discipline que les formats longs n'imposent pas.",
        "42 lectures d'une nouvelle gratuite valent davantage que des métriques abstraites — c'est du temps réel que des lecteurs ont choisi de donner.",
      ],
      en: [
        "The constraint of short form forces a discipline that long formats don't impose.",
        "42 reads of a free short story are worth more than abstract metrics — it is real time that readers chose to give.",
      ],
    },
  },
];

const processSteps = {
  fr: [
    { step: '01', title: 'Idée', desc: "Une observation, une question, un personnage qui s'impose. Rien n'est forcé." },
    { step: '02', title: 'Recherche', desc: "Documentation des contextes, des époques, des réalités sociales. La même rigueur qu'une étude de marché." },
    { step: '03', title: 'Architecture', desc: "Structure des chapitres, arcs narratifs, fiches personnages. Le plan avant les mots." },
    { step: '04', title: 'Rédaction', desc: "Section par section, sans chercher la perfection au premier passage." },
    { step: '05', title: 'Réécriture', desc: "La première version est un brouillon. La qualité vient des itérations suivantes." },
    { step: '06', title: 'Révision finale', desc: "Lecture critique, corrections de cohérence, ajustements de rythme. Puis publication." },
  ],
  en: [
    { step: '01', title: 'Idea', desc: "An observation, a question, a character that imposes itself. Nothing is forced." },
    { step: '02', title: 'Research', desc: "Documenting contexts, periods, social realities. The same rigor as a market study." },
    { step: '03', title: 'Architecture', desc: "Chapter structure, narrative arcs, character sheets. The plan before the words." },
    { step: '04', title: 'Drafting', desc: "Section by section, without seeking perfection in the first pass." },
    { step: '05', title: 'Rewriting', desc: "The first version is a draft. Quality comes from the iterations that follow." },
    { step: '06', title: 'Final revision', desc: "Critical reading, consistency corrections, rhythm adjustments. Then publication." },
  ],
};

const transferableSkills = {
  fr: [
    { title: 'Pensée structurée', desc: "Écrire un roman de 300 pages sans plan préalable mène au chaos. La même discipline s'applique à l'architecture d'un produit." },
    { title: 'Gestion de projet long', desc: "Maintenir la cohérence et la motivation sur des mois, sans deadline externe ni équipe." },
    { title: 'Empathie documentée', desc: "Construire des personnages crédibles exige de comprendre des réalités que l'on n'a pas vécues soi-même." },
    { title: 'Communication précise', desc: "Chaque mot choisi, chaque phrase testée. L'économie du langage n'est pas naturelle — elle s'apprend." },
    { title: 'Itération sans abandon', desc: "Réécrire entièrement n'est pas un échec. C'est la décision de quelqu'un qui sait ce qu'il veut obtenir." },
  ],
  en: [
    { title: 'Structured thinking', desc: "Writing a 300-page novel without a prior plan leads to chaos. The same discipline applies to product architecture." },
    { title: 'Long project management', desc: "Maintaining coherence and motivation over months, without external deadlines or a team." },
    { title: 'Documented empathy', desc: "Building credible characters requires understanding realities one has not personally lived." },
    { title: 'Precise communication', desc: "Every word chosen, every sentence tested. Economy of language is not natural — it is learned." },
    { title: 'Iteration without abandonment', desc: "Rewriting entirely is not failure. It is the decision of someone who knows what they want to achieve." },
  ],
};

const DIVIDER = (
  <hr style={{ border: 'none', borderTop: '0.5px solid var(--border)', margin: '3rem 0' }} />
);

const label_style: React.CSSProperties = {
  fontSize: '11px', fontWeight: 500, color: 'var(--text4)',
  textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 1.25rem',
};

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

      {/* ── HERO ── */}
      <div style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '11px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 16px' }}>
          {l === 'fr' ? 'Écriture & Narration' : 'Writing & Storytelling'}
        </p>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 16px', lineHeight: 1.25 }}>
          {l === 'fr'
            ? "J'explore les histoires humaines avec la même rigueur que celle que j'applique à la construction de produits."
            : "I explore human stories with the same rigor I apply to building products."}
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text3)', lineHeight: 1.75, margin: 0, maxWidth: '620px' }}>
          {l === 'fr'
            ? "Les romans et les logiciels partagent la même logique fondamentale : une idée, une architecture, des itérations, un résultat. L'un s'exécute sur un serveur. L'autre dans l'esprit d'un lecteur."
            : "Novels and software share the same fundamental logic: an idea, an architecture, iterations, a result. One runs on a server. The other runs in a reader's mind."}
        </p>
      </div>

      {/* ── WORKS ── */}
      <h2 style={label_style}>{l === 'fr' ? 'Ouvrages' : 'Works'}</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
        {works.map((work) => (
          <article
            key={work.slug}
            style={{
              background: 'var(--bg2)', border: '0.5px solid var(--border)',
              borderRadius: '12px', padding: '1.75rem',
            }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '6px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 500, color: 'var(--text1)', margin: 0 }}>
                {work.title}
              </h3>
              <span style={{
                fontSize: '10px', padding: '3px 10px', borderRadius: '20px',
                background: work.status[l] === 'Completed' || work.status[l] === 'Terminé'
                  ? 'var(--badge-green-bg)' : 'var(--badge-amber-bg)',
                color: work.status[l] === 'Completed' || work.status[l] === 'Terminé'
                  ? 'var(--badge-green-color)' : 'var(--badge-amber-color)',
                border: work.status[l] === 'Completed' || work.status[l] === 'Terminé'
                  ? '0.5px solid var(--badge-green-border)' : '0.5px solid var(--badge-amber-border)',
                textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap',
              }}>
                {work.status[l]}
              </span>
            </div>

            {/* Meta */}
            <p style={{ fontSize: '11px', color: 'var(--text4)', margin: '0 0 14px', letterSpacing: '0.04em' }}>
              {work.genre[l]} · {work.lang[l]} · {work.length[l]} · {work.period}
            </p>

            {/* Tagline */}
            <p style={{ fontSize: '13px', color: 'var(--text4)', margin: '0 0 10px', fontStyle: 'italic' }}>
              {work.tagline[l]}
            </p>

            {/* Summary */}
            <p style={{ fontSize: '14px', color: 'var(--text3)', lineHeight: 1.75, margin: '0 0 16px', textAlign: 'justify' }}>
              {work.summary[l]}
            </p>

            {/* Themes */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {work.themes[l].map((theme) => (
                <span key={theme} style={{
                  fontSize: '11px', background: 'var(--bg3)',
                  border: '0.5px solid var(--border)', color: 'var(--text4)',
                  padding: '3px 9px', borderRadius: '4px',
                }}>
                  {theme}
                </span>
              ))}
            </div>

            {/* CTA */}
            {work.kalamundi && (
              <a
                href={work.kalamundi}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '12px', color: 'var(--accent)', textDecoration: 'none',
                }}
              >
                {l === 'fr' ? 'Lire sur Kalamundi →' : 'Read on Kalamundi →'}
              </a>
            )}
          </article>
        ))}
      </div>

      {DIVIDER}

      {/* ── DETAILED FICHES ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '4rem' }}>
        {works.map((work) => (
          <section key={work.slug + '-detail'}>
            <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text1)', margin: '0 0 6px' }}>
              {work.title}
            </h2>
            <p style={{ fontSize: '11px', color: 'var(--text4)', margin: '0 0 2rem', letterSpacing: '0.04em' }}>
              {work.genre[l]} · {work.status[l]} · {work.period}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Challenges */}
              <div>
                <p style={label_style}>{l === 'fr' ? 'Défis narratifs' : 'Narrative challenges'}</p>
                <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
                  {work.challenges[l]}
                </p>
              </div>

              {/* Process */}
              <div>
                <p style={label_style}>{l === 'fr' ? 'Processus' : 'Process'}</p>
                <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.8, margin: 0, textAlign: 'justify' }}>
                  {work.process[l]}
                </p>
              </div>

              {/* Learned */}
              <div>
                <p style={label_style}>{l === 'fr' ? 'Ce que ce projet m\'a appris' : 'What this project taught me'}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {work.learned[l].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontSize: '13px', lineHeight: 1.75, flexShrink: 0 }}>→</span>
                      <span style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.75, textAlign: 'justify' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {DIVIDER}

      {/* ── WRITING PROCESS ── */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={label_style}>{l === 'fr' ? 'Mon processus d\'écriture' : 'My writing process'}</h2>
        <p style={{ fontSize: '15px', color: 'var(--text3)', lineHeight: 1.75, margin: '0 0 2rem' }}>
          {l === 'fr'
            ? "Le même en six étapes, quel que soit le projet."
            : "The same in six steps, regardless of the project."}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1px',
          background: 'var(--border)',
          border: '0.5px solid var(--border)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}>
          {processSteps[l].map((s) => (
            <div key={s.step} style={{ background: 'var(--bg2)', padding: '1.25rem' }}>
              <span style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
                {s.step}
              </span>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text1)', margin: '0 0 6px' }}>{s.title}</p>
              <p style={{ fontSize: '12px', color: 'var(--text3)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {DIVIDER}

      {/* ── TRANSFERABLE SKILLS ── */}
      <div>
        <h2 style={label_style}>{l === 'fr' ? 'Ce que l\'écriture développe' : 'What writing develops'}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {transferableSkills[l].map((skill) => (
            <div key={skill.title} style={{
              display: 'grid', gridTemplateColumns: '180px 1fr', gap: '1.5rem', alignItems: 'start',
            }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text1)', paddingTop: '2px' }}>
                {skill.title}
              </span>
              <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.7, margin: 0 }}>
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {DIVIDER}

      {/* ── FOOTER CTA ── */}
      <p style={{ fontSize: '13px', color: 'var(--text4)', fontStyle: 'italic', margin: 0 }}>
        {l === 'fr'
          ? "Les ouvrages disponibles sont publiés sur Kalamundi — La Plume du Monde."
          : "Available works are published on Kalamundi — La Plume du Monde."}
        {' '}
        <Link href={`/${locale}/projects/kalamundi`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
          {l === 'fr' ? 'Voir l\'étude de cas →' : 'See the case study →'}
        </Link>
      </p>

    </div>
  );
}
