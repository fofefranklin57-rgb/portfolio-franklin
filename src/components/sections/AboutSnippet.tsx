import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export default function AboutSnippet() {
  const t = useTranslations('about_snippet');
  const locale = useLocale();

  return (
    <section
      aria-label="À propos"
      style={{
        background: 'var(--bg3)', padding: '4rem 1.5rem',
        borderTop: '0.5px solid var(--bg3)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ maxWidth: '640px' }}>
          <p style={{
            fontSize: '18px', fontWeight: 500, color: 'var(--text1)',
            margin: '0 0 14px', lineHeight: 1.5,
          }}>
            {t('intro')}
          </p>
          <p style={{
            fontSize: '14px', color: 'var(--text3)', lineHeight: 1.8,
            margin: '0 0 24px',
          }}>
            {t('body')}
          </p>
          <Link
            href={`/${locale}/about`}
            style={{
              fontSize: '13px', color: 'var(--accent)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}
          >
            {t('cta')} <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
