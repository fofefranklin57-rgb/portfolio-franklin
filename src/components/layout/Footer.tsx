import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { GitFork, ExternalLink, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '0.5px solid var(--border)',
        background: 'var(--bg)',
        padding: '2rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link
            href="https://github.com/fofefranklin57-rgb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: 'var(--text3)' }}
          >
            <GitFork size={18} />
          </Link>
          <Link
            href="https://linkedin.com/in/franklin-fofe-nodem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: 'var(--text3)' }}
          >
            <ExternalLink size={18} />
          </Link>
          <Link
            href="mailto:fofefranklin57@gmail.com"
            aria-label="Email"
            style={{ color: 'var(--text3)' }}
          >
            <Mail size={18} />
          </Link>
        </div>
        <p
          style={{
            fontSize: '12px',
            color: 'var(--text4)',
            textAlign: 'center',
            margin: 0,
          }}
        >
          © {year} {t('made')}. {t('rights')}.
        </p>
      </div>
    </footer>
  );
}
