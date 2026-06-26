import type { Metadata } from 'next';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Franklin Fofe Nodem — lawyer-turned-builder based in Cameroon. Product Builder & Software Developer.',
};

export default function AboutPage() {
  const locale = useLocale();

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '680px' }}>
        <p style={{ fontSize: '12px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>
          About
        </p>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 2rem', lineHeight: 1.25 }}>
          I'm Franklin — a lawyer-turned-builder based in Cameroon.
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            I've spent the last three years building software products that solve real problems
            for real people. I started in law and archival science — and somewhere along the way,
            I discovered that the most powerful way to solve a problem is to build a tool that
            makes it disappear.
          </p>

          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            <strong style={{ color: 'var(--text1)' }}>ImmoGest</strong> manages rental properties
            for real estate agencies across francophone Africa. <strong style={{ color: 'var(--text1)' }}>Kalamundi</strong> connects
            authors and readers on a modern publishing platform. <strong style={{ color: 'var(--text1)' }}>Traficam</strong> is
            a logistics management system. And <strong style={{ color: 'var(--text1)' }}>AgroNova Farms</strong> produces
            700 catfish per cycle — up from 300 when I started.
          </p>

          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            I build alone, from idea to production. I design, develop, deploy, and document.
            I use software and AI as tools — the goal is always real impact for real people.
          </p>

          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            I'm also a writer. I've written two novels and a novella that explore social realities
            in Central Africa. Writing fiction and building software are, for me, the same activity:
            both start with a blank page and end with something that did not exist before.
          </p>

          <p style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.8, margin: 0 }}>
            I'm based in Cameroon (UTC+1), fully bilingual in French and English, and I work
            asynchronously with teams across time zones. I'm currently open to my first international
            remote opportunity — full-time, freelance, or consulting.
          </p>
        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            href={`/${locale}/projects`}
            style={{
              fontSize: '13px', padding: '10px 20px',
              background: 'var(--accent)', color: '#fff',
              borderRadius: '7px', fontWeight: 500,
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              textDecoration: 'none',
            }}
          >
            See my projects <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href={`/${locale}/contact`}
            style={{
              fontSize: '13px', padding: '10px 20px',
              background: 'transparent', color: 'var(--text3)',
              border: '0.5px solid var(--border)', borderRadius: '7px',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              textDecoration: 'none',
            }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
