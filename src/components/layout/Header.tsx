'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Initialiser depuis localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const otherLocale = locale === 'fr' ? 'en' : 'fr';
  const switchPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const navLinks = [
    { href: `/${locale}/projects`, label: t('work') },
    { href: `/${locale}/writing`, label: t('writing') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/cv`, label: t('resume') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header
      style={{
        background: 'var(--header-bg)',
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
        <nav aria-label="Navigation principale" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '13px',
                color: isActive(link.href) ? 'var(--text1)' : 'var(--text3)',
                textDecoration: 'none',
                fontWeight: isActive(link.href) ? 500 : 400,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={dark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            style={{
              background: 'var(--bg2)',
              border: '0.5px solid var(--border)',
              borderRadius: '6px',
              padding: '6px',
              cursor: 'pointer',
              color: 'var(--text3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Lang toggle */}
          <Link
            href={switchPath}
            aria-label={`Switch to ${otherLocale === 'fr' ? 'French' : 'English'}`}
            style={{
              fontSize: '11px',
              color: 'var(--text3)',
              background: 'var(--bg2)',
              border: '0.5px solid var(--border)',
              padding: '4px 10px',
              borderRadius: '6px',
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
              display: 'none',
              alignItems: 'center',
            }}
            className="mobile-burger"
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
