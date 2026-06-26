import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Clock, Languages, RefreshCw, FileText, LayoutGrid, Download } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');
  const tProof = useTranslations('proof');
  const locale = useLocale();

  const signals = [
    { icon: <Clock size={12} aria-hidden="true" />, label: t('sig_tz'), accent: false },
    { icon: <Languages size={12} aria-hidden="true" />, label: t('sig_lang'), accent: true },
    { icon: <RefreshCw size={12} aria-hidden="true" />, label: t('sig_async'), accent: false },
    { icon: <FileText size={12} aria-hidden="true" />, label: t('sig_doc'), accent: false },
  ];

  const proofItems = [
    { num: tProof('products_num'), label: tProof('products_label'), accent: true },
    { num: tProof('catfish_num'), label: tProof('catfish_label'), accent: false },
    { num: tProof('years_num'), label: tProof('years_label'), accent: false },
    { num: tProof('remote_num'), label: tProof('remote_label'), accent: true },
  ];

  return (
    <section
      aria-label="Introduction"
      style={{ background: 'var(--bg)', padding: '3.5rem 1.5rem 0' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 148px',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* ── Text column ── */}
          <div>
            {/* Availability eyebrow — first element read */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span
                aria-hidden="true"
                style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: 'var(--green)', flexShrink: 0, display: 'inline-block',
                }}
              />
              <span style={{ fontSize: '12px', color: 'var(--green)', fontWeight: 500 }}>
                {t('availability')}
              </span>
            </div>

            {/* Name + location — UTC+1 visible silently dissolves remote concern */}
            <p style={{
              fontSize: '12px', color: 'var(--text4)', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 10px', fontWeight: 400,
            }}>
              {t('name')}&nbsp;&nbsp;·&nbsp;&nbsp;{t('location')}
            </p>

            {/* H1 — identity + competence in one line */}
            <h1 style={{
              fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 500,
              color: 'var(--text1)', lineHeight: 1.2, margin: '0 0 20px',
            }}>
              {t('title1')}
              <span aria-hidden="true" style={{ color: 'var(--accent)', margin: '0 10px', fontWeight: 300 }}>|</span>
              {t('title2')}
            </h1>

            {/* Tagline — value, not technology */}
            <p
              style={{
                fontSize: '15px', color: 'var(--text3)', lineHeight: 1.75,
                margin: '0 0 16px', maxWidth: '480px',
                borderLeft: '2px solid var(--border2)', paddingLeft: '14px',
              }}
              dangerouslySetInnerHTML={{ __html: t.raw('tagline') }}
            />

            {/* Micro — method in 4 words + philosophy */}
            <div style={{ margin: '0 0 24px' }}>
              <p style={{ fontSize: '12px', color: 'var(--text3)', letterSpacing: '0.04em', margin: '0 0 3px' }}>
                {t('micro1')}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text4)', margin: 0 }}>
                {t('micro2')}
              </p>
            </div>

            {/* Signals — remote proof, language, async mindset */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '26px' }}>
              {signals.map((sig) => (
                <span
                  key={sig.label}
                  style={{
                    fontSize: '11px',
                    background: sig.accent ? 'var(--pill-accent-bg)' : 'var(--pill-default-bg)',
                    border: `0.5px solid ${sig.accent ? 'var(--pill-accent-border)' : 'var(--pill-default-border)'}`,
                    color: sig.accent ? 'var(--pill-accent-color)' : 'var(--pill-default-color)',
                    padding: '4px 11px', borderRadius: '20px',
                    display: 'flex', alignItems: 'center', gap: '5px',
                  }}
                >
                  {sig.icon}
                  {sig.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link
                href={`/${locale}/projects`}
                style={{
                  fontSize: '13px', padding: '10px 22px',
                  background: 'var(--accent)', color: '#fff',
                  borderRadius: '7px', fontWeight: 500,
                  display: 'flex', alignItems: 'center', gap: '7px', textDecoration: 'none',
                }}
              >
                <LayoutGrid size={15} aria-hidden="true" />
                {t('cta_primary')}
              </Link>
              <Link
                href="/cv/cv-franklin-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '13px', padding: '10px 20px',
                  background: 'transparent', color: 'var(--text3)',
                  border: '0.5px solid var(--border)', borderRadius: '7px',
                  display: 'flex', alignItems: 'center', gap: '7px', textDecoration: 'none',
                }}
              >
                <Download size={15} aria-hidden="true" />
                {t('cta_secondary')}
              </Link>
            </div>
          </div>

          {/* ── Photo column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingTop: '8px' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="/photo-franklin.jpg"
                alt={t('photo_alt')}
                width={120}
                height={120}
                style={{
                  width: '120px', height: '120px', borderRadius: '50%',
                  objectFit: 'cover', objectPosition: 'center top',
                  border: '2px solid var(--border)',
                  display: 'block',
                }}
              />
              {/* Online availability dot */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute', bottom: '5px', right: '5px',
                  background: 'var(--bg)', border: '1.5px solid var(--green)',
                  borderRadius: '50%', width: '20px', height: '20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green)', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Proof Strip ── */}
        <div
          aria-label="Métriques clés"
          style={{
            borderTop: '0.5px solid var(--bg3)', marginTop: '2.5rem',
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            padding: '1.25rem 0 1.5rem',
          }}
        >
          {proofItems.map((item, i) => (
            <div
              key={item.label}
              style={{
                textAlign: 'center', padding: '0 8px',
                borderLeft: i > 0 ? '0.5px solid var(--bg3)' : 'none',
              }}
            >
              <span style={{
                fontSize: '22px', fontWeight: 500,
                color: item.accent ? 'var(--accent)' : 'var(--text1)',
                display: 'block', lineHeight: 1.2,
              }}>
                {item.num}
              </span>
              <span style={{
                fontSize: '10px', color: 'var(--text4)', display: 'block',
                marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
