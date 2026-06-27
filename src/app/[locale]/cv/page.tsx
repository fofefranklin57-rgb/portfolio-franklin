import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Download, MapPin, Mail, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'CV / Resume',
  description:
    'Curriculum Vitae — Franklin Fofe Nodem. Product Builder & Software Developer. Cloudflare Workers · Supabase · Next.js · Vanilla JS. 4 produits en production. Disponible en télétravail international.',
  openGraph: {
    url: 'https://portfolio-franklin.pages.dev/en/cv',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default async function CVPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as 'fr' | 'en';

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem' }}>

      {/* Top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <p style={{ fontSize: '12px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 6px' }}>
            {l === 'fr' ? 'Curriculum Vitae' : 'Resume'}
          </p>
          <h1 style={{ fontSize: '24px', fontWeight: 500, color: 'var(--text1)', margin: 0 }}>
            Franklin Fofe Nodem
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--accent)', margin: '4px 0 0', fontWeight: 500 }}>
            Product Builder | Software Developer
          </p>
        </div>
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
          <Download size={14} /> {l === 'fr' ? 'Télécharger PDF' : 'Download PDF'}
        </a>
      </div>

      {/* Contact info */}
      <div style={{
        display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
        padding: '1rem 1.25rem', background: 'var(--bg2)',
        border: '0.5px solid var(--border)', borderRadius: '10px',
        marginBottom: '2.5rem',
      }}>
        {[
          { icon: <MapPin size={13} />, text: 'Yaoundé, Cameroun (UTC+1)' },
          { icon: <Mail size={13} />, text: 'fofefranklin57@gmail.com' },
          { icon: <Globe size={13} />, text: 'portfolio-franklin.pages.dev' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text3)', fontSize: '13px' }}>
            <span style={{ color: 'var(--accent)' }}>{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>

      {/* Section helper */}
      {(() => {
        const Section = ({ title }: { title: string }) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '2rem 0 1rem' }}>
            <h2 style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.12em', margin: 0 }}>
              {title}
            </h2>
            <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
          </div>
        );

        return (
          <>
            {/* Profil */}
            <Section title={l === 'fr' ? 'Profil' : 'Profile'} />
            <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
              {l === 'fr'
                ? "Juriste de formation, archiviste de métier, développeur par nécessité. Titulaire d'une Licence Professionnelle en Archivistique & Records Management (ESSTIC), j'ai construit en 3 ans 4 produits numériques opérationnels en Afrique francophone. Je conçois, développe, documente et déploie — seul, de l'idée à la production."
                : "Trained as a lawyer, practiced as an archivist, became a developer by necessity. Holding a Professional Bachelor's in Archival Science & Records Management (ESSTIC), I built 4 operational digital products in francophone Africa over 3 years. I design, develop, document and deploy — alone, from idea to production."}
            </p>

            {/* Expériences */}
            <Section title={l === 'fr' ? 'Projets & Produits' : 'Projects & Products'} />
            {[
              {
                name: 'ImmoGest',
                role: { fr: 'Fondateur & Développeur principal', en: 'Founder & Lead Developer' },
                period: '2024 →',
                desc: { fr: 'Plateforme SaaS de gestion immobilière pour agences en Afrique francophone. Locataires, paiements, baux, rapports, marketplace. Stack : Vanilla JS, Cloudflare Workers, Supabase PostgreSQL.', en: 'SaaS property management platform for agencies in francophone Africa. Tenants, payments, leases, reports, marketplace. Stack: Vanilla JS, Cloudflare Workers, Supabase PostgreSQL.' },
              },
              {
                name: 'Kalamundi',
                role: { fr: 'Fondateur & Développeur', en: 'Founder & Developer' },
                period: '2023 →',
                desc: { fr: 'Plateforme de publication connectant auteurs et lecteurs africains. Studio de création, bibliothèque, illustrations IA. Stack : Flutter, Next.js, Supabase.', en: 'Publishing platform connecting African authors and readers. Creation studio, library, AI illustrations. Stack: Flutter, Next.js, Supabase.' },
              },
              {
                name: 'AgroNova Farms',
                role: { fr: 'Fondateur & Product Manager', en: 'Founder & Product Manager' },
                period: '2022 →',
                desc: { fr: 'Ferme piscicole gérée avec rigueur. Production passée de 300 à 700 silures par cycle grâce à la documentation systématique et l\'optimisation des processus.', en: 'Rigorously managed fish farm. Production scaled from 300 to 700 catfish per cycle through systematic documentation and process optimization.' },
              },
              {
                name: 'Traficam',
                role: { fr: 'Développeur', en: 'Developer' },
                period: '2024',
                desc: { fr: 'Système de gestion logistique pour le Cameroun. Suivi des transports et marchandises. Stack : Next.js, TypeScript, Supabase.', en: 'Logistics management system for Cameroon. Transport and cargo tracking. Stack: Next.js, TypeScript, Supabase.' },
              },
            ].map((p, i) => (
              <div key={i} style={{ marginBottom: '1.25rem', paddingLeft: '0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px' }}>
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text1)' }}>{p.name}</span>
                    <span style={{ fontSize: '13px', color: 'var(--text3)', marginLeft: '8px' }}>{p.role[l]}</span>
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 500 }}>{p.period}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text3)', lineHeight: 1.7, margin: '4px 0 0' }}>{p.desc[l]}</p>
              </div>
            ))}

            {/* Expériences passées */}
            <Section title={l === 'fr' ? 'Expériences Passées' : 'Previous Experience'} />
            {[
              { org: 'CHANAS Assurances S.A.', role: { fr: 'Stagiaire Professionnel', en: 'Professional Intern' }, period: 'Mai 2021 – Fév 2022', via: 'via Onyx Manpower Services' },
              { org: 'MINESEC — Secrétariat Général', role: { fr: 'Archiviste Stagiaire', en: 'Archival Intern' }, period: 'Août – Oct 2020' },
              { org: 'Ministère des Marchés Publics', role: { fr: 'Archiviste Stagiaire', en: 'Archival Intern' }, period: 'Juil – Sept 2019' },
              { org: 'NEZAFI Capital S.A.', role: { fr: 'Archiviste Stagiaire', en: 'Archival Intern' }, period: 'Août 2018' },
              { org: 'Cabinet CRAA', role: { fr: 'Assistant Juridique', en: 'Legal Assistant' }, period: '2018 →' },
            ].map((e, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '4px' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text2)' }}>{e.org}</span>
                  {e.via && <span style={{ fontSize: '11px', color: 'var(--text4)', marginLeft: '6px' }}>{e.via}</span>}
                  <span style={{ fontSize: '12px', color: 'var(--text4)', marginLeft: '8px' }}>— {e.role[l]}</span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text4)', whiteSpace: 'nowrap' }}>{e.period}</span>
              </div>
            ))}

            {/* Formation */}
            <Section title={l === 'fr' ? 'Formation' : 'Education'} />
            {[
              { degree: { fr: 'Licence Professionnelle — Archivistique & Records Management', en: "Professional Bachelor's — Archival Science & Records Management" }, school: 'ESSTIC, Université de Yaoundé II', year: '2017–2020' },
              { degree: { fr: 'Master II — Droit Public Fondamental', en: 'Master II — Public Law' }, school: l === 'fr' ? 'Université de Yaoundé II' : 'University of Yaoundé II', year: '2016–2018' },
            ].map((e, i) => (
              <div key={i} style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text2)', margin: 0 }}>{e.degree[l]}</p>
                  <p style={{ fontSize: '12px', color: 'var(--text4)', margin: '2px 0 0' }}>{e.school}</p>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 500, whiteSpace: 'nowrap' }}>{e.year}</span>
              </div>
            ))}

            {/* Compétences */}
            <Section title={l === 'fr' ? 'Compétences Techniques' : 'Technical Skills'} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {[
                { cat: { fr: 'Développement', en: 'Development' }, items: ['JavaScript / TypeScript', 'Next.js', 'Cloudflare Workers', 'Supabase / PostgreSQL', 'Flutter (mobile)'] },
                { cat: { fr: 'Produit & Design', en: 'Product & Design' }, items: ['Product Management', 'UI Design (Figma / CSS)', 'Documentation-first', 'User research'] },
                { cat: { fr: 'Outils', en: 'Tools' }, items: ['Git / GitHub', 'Word · Excel · PowerPoint', 'Logiciels gestion documentaire', 'IA (Claude, GPT)'] },
              ].map((g, i) => (
                <div key={i}>
                  <p style={{ fontSize: '11px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px', fontWeight: 600 }}>
                    {g.cat[l]}
                  </p>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {g.items.map((item, j) => (
                      <li key={j} style={{ fontSize: '13px', color: 'var(--text3)' }}>· {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Langues */}
            <Section title={l === 'fr' ? 'Langues' : 'Languages'} />
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { lang: 'Français', level: { fr: 'Langue maternelle', en: 'Native' } },
                { lang: 'English', level: { fr: 'Avancé (professionnel)', en: 'Advanced (professional)' } },
              ].map((lang, i) => (
                <div key={i}>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text2)' }}>{lang.lang}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text4)', marginLeft: '8px' }}>{lang.level[l]}</span>
                </div>
              ))}
            </div>

            {/* Engagements */}
            <Section title={l === 'fr' ? 'Engagements' : 'Associations'} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {[
                { fr: 'Secrétaire régional — APIDCA', en: 'Regional Secretary — APIDCA' },
                { fr: 'Membre — ACA (Association des Archivistes du Cameroun)', en: 'Member — ACA (Association of Archivists of Cameroon)' },
                { fr: 'Bénévole — Conférence Internationale des Archives, Yaoundé 2019', en: 'Volunteer — International Council on Archives Conference, Yaoundé 2019' },
              ].map((item, i) => (
                <p key={i} style={{ fontSize: '13px', color: 'var(--text3)', margin: 0 }}>· {item[l]}</p>
              ))}
            </div>
          </>
        );
      })()}

    </div>
  );
}
