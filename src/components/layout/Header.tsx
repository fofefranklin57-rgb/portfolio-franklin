'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const navLinks = [
    { href: `/${locale}/projects`, label: t('work') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/cv`, label: t('resume') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      style={{
        background: 'rgba(10,10,10,0.95)',
        borderBottom: '0.5px solid var(--border)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href={`/${locale}`}
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text1)',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Franklin Fofe Nodem
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Navigation principale"
          style={{ display: 'flex', alignItems: 'center', gap: '28px' }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '13px',
                color: isActive(link.href) ? 'var(--text2)' : 'var(--text3)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--text2)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = isActive(link.href)
                  ? 'var(--text2)'
                  : 'var(--text3)')
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link
            href={switchPath}
            aria-label={`Switch to ${otherLocale === 'fr' ? 'French' : 'English'}`}
            style={{
              fontSize: '11px',
              color: 'var(--text3)',
              background: 'var(--bg3)',
              border: '0.5px solid var(--border)',
              padding: '4px 10px',
              borderRadius: '4px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {otherLocale}
          </Link>

          {/* Mobile burger */}
          <button
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text3)',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
            className="md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          aria-label="Navigation mobile"
          style={{
            borderTop: '0.5px solid var(--border)',
            background: 'var(--bg)',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: '15px',
                color: isActive(link.href) ? 'var(--text1)' : 'var(--text3)',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '0.5px solid var(--border)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
