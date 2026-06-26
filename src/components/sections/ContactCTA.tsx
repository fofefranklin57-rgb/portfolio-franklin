import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Mail } from 'lucide-react';

export default function ContactCTA() {
  const t = useTranslations('contact_cta');
  const locale = useLocale();

  return (
    <section
      aria-label="Contact"
      style={{
        background: 'var(--bg)', padding: '5rem 1.5rem',
        borderTop: '0.5px solid var(--bg3)',
      }}
    >
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', gap: '1rem',
      }}>
        {/* Availability dot */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span aria-hidden="true" style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'var(--green)', display: 'inline-block',
          }} />
          <span style={{ fontSize: '12px', color: 'var(--green)', fontWeight: 500 }}>
            Open to international remote opportunities
          </span>
        </div>

        <h2 style={{
          fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 500,
          color: 'var(--text1)', margin: 0, lineHeight: 1.3,
        }}>
          {t('title')}
        </h2>

        <p style={{
          fontSize: '15px', color: 'var(--text3)', margin: 0,
          maxWidth: '480px', lineHeight: 1.7,
        }}>
          {t('body')}
        </p>

        <Link
          href={`/${locale}/contact`}
          style={{
            marginTop: '8px', fontSize: '14px', padding: '12px 28px',
            background: 'var(--accent)', color: '#fff',
            borderRadius: '8px', fontWeight: 500,
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            textDecoration: 'none',
          }}
        >
          <Mail size={16} aria-hidden="true" />
          {t('btn')}
        </Link>
      </div>
    </section>
  );
}
