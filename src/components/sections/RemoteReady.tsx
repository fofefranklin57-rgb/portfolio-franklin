import { useTranslations } from 'next-intl';
import { CheckCircle, Clock, Languages, GitFork } from 'lucide-react';

export default function RemoteReady() {
  const t = useTranslations('remote');

  const checks = [t('async'), t('doc'), t('comm')];

  const cards = [
    {
      icon: <Clock size={18} aria-hidden="true" style={{ color: 'var(--accent)' }} />,
      title: t('tz_title'),
      value: t('tz_val'),
      note: t('tz_note'),
    },
    {
      icon: <Languages size={18} aria-hidden="true" style={{ color: 'var(--accent)' }} />,
      title: t('lang_title'),
      value: t('lang_val'),
      note: '',
    },
    {
      icon: <GitFork size={18} aria-hidden="true" style={{ color: 'var(--accent)' }} />,
      title: t('tools_title'),
      value: t('tools_val'),
      note: '',
    },
  ];

  return (
    <section
      aria-label={t('section_title')}
      style={{
        background: 'var(--bg3)', padding: '4rem 1.5rem',
        borderTop: '0.5px solid var(--bg3)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 500, color: 'var(--text1)', margin: '0 0 2rem' }}>
          {t('section_title')}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: 'var(--bg2)', border: '0.5px solid var(--border)',
                borderRadius: '12px', padding: '1.25rem',
                display: 'flex', flexDirection: 'column', gap: '8px',
              }}
            >
              {card.icon}
              <p style={{ fontSize: '11px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
                {card.title}
              </p>
              <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text2)', margin: 0 }}>
                {card.value}
              </p>
              {card.note && (
                <p style={{ fontSize: '12px', color: 'var(--text3)', margin: 0 }}>
                  {card.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Checkmarks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {checks.map((check) => (
            <div key={check} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle size={16} aria-hidden="true" style={{ color: 'var(--green)', flexShrink: 0 }} />
              <span style={{ fontSize: '14px', color: 'var(--text2)' }}>{check}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
