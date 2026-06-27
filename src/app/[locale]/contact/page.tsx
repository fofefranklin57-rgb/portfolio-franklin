import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Mail, GitFork, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fr' ? 'Contact' : 'Contact',
    description:
      locale === 'fr'
        ? 'Contactez Franklin Fofe Nodem — disponible pour des missions à distance, collaborations et opportunités internationales.'
        : 'Get in touch with Franklin Fofe Nodem — available for remote missions, collaborations and international opportunities.',
    openGraph: {
      url: `https://portfolio-franklin.pages.dev/${locale}/contact`,
    },
  };
}

const copy = {
  fr: {
    eyebrow: 'Contact',
    title: 'Travaillons ensemble',
    intro:
      'Je suis disponible pour des missions à distance, des collaborations et des opportunités d\'emploi international. Le moyen le plus rapide de me joindre reste l\'email — je réponds généralement sous 24h.',
    or: 'Ou écrivez-moi directement',
    email_label: 'Email',
    linkedin_label: 'LinkedIn',
    github_label: 'GitHub',
    available: 'Disponible actuellement',
    avail_body:
      'Ouvert aux rôles full-time à distance, aux missions freelance, au consulting et aux collaborations. Basé au Cameroun (UTC+1) — compatible avec les horaires européens.',
  },
  en: {
    eyebrow: 'Contact',
    title: "Let's work together",
    intro:
      "I'm currently available for remote missions, collaborations, and international employment opportunities. Email is the fastest way to reach me — I usually reply within 24h.",
    or: 'Or reach me directly',
    email_label: 'Email',
    linkedin_label: 'LinkedIn',
    github_label: 'GitHub',
    available: 'Currently available',
    avail_body:
      'Open to full-time remote roles, freelance missions, consulting, and collaborations. Based in Cameroon (UTC+1) — compatible with European business hours.',
  },
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as 'fr' | 'en';
  const t = copy[l] ?? copy.en;

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '640px' }}>

        {/* Header */}
        <p style={{ fontSize: '12px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>
          {t.eyebrow}
        </p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 14px', lineHeight: 1.25 }}>
          {t.title}
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text3)', lineHeight: 1.75, margin: '0 0 2.5rem' }}>
          {t.intro}
        </p>

        {/* Form */}
        <ContactForm locale={locale} />

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '2.5rem 0' }}>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
          <span style={{ fontSize: '12px', color: 'var(--text4)' }}>{t.or}</span>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>

        {/* Direct links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
          {[
            {
              icon: <Mail size={17} aria-hidden="true" style={{ color: 'var(--accent)', flexShrink: 0 }} />,
              label: t.email_label,
              value: 'fofefranklin57@gmail.com',
              href: 'mailto:fofefranklin57@gmail.com',
            },
            {
              icon: <ExternalLink size={17} aria-hidden="true" style={{ color: 'var(--accent)', flexShrink: 0 }} />,
              label: t.linkedin_label,
              value: 'linkedin.com/in/franklin-fofe-nodem',
              href: 'https://linkedin.com/in/franklin-fofe-nodem',
            },
            {
              icon: <GitFork size={17} aria-hidden="true" style={{ color: 'var(--accent)', flexShrink: 0 }} />,
              label: t.github_label,
              value: 'github.com/fofefranklin57-rgb',
              href: 'https://github.com/fofefranklin57-rgb',
            },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '14px 18px', background: 'var(--bg2)',
                border: '0.5px solid var(--border)', borderRadius: '9px',
                textDecoration: 'none',
              }}
            >
              {link.icon}
              <div>
                <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text1)', margin: 0 }}>{link.label}</p>
                <p style={{ fontSize: '12px', color: 'var(--text3)', margin: 0 }}>{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Availability */}
        <div style={{
          background: 'var(--bg2)', border: '0.5px solid var(--border)',
          borderRadius: '10px', padding: '16px 20px',
          borderLeft: '3px solid var(--green)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span aria-hidden="true" style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: 'var(--green)', display: 'inline-block', flexShrink: 0,
            }} />
            <span style={{ fontSize: '12px', color: 'var(--green)', fontWeight: 500 }}>
              {t.available}
            </span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text3)', margin: 0, lineHeight: 1.65 }}>
            {t.avail_body}
          </p>
        </div>

      </div>
    </div>
  );
}
