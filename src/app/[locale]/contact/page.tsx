import type { Metadata } from 'next';
import { Mail, GitFork, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Franklin Fofe Nodem — available for remote opportunities.',
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '560px' }}>
        <p style={{ fontSize: '12px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>
          Contact
        </p>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 12px', lineHeight: 1.25 }}>
          Let's work together
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text3)', lineHeight: 1.75, margin: '0 0 2.5rem' }}>
          I'm currently available for remote missions, collaborations, and international
          employment opportunities. The fastest way to reach me is by email.
        </p>

        {/* Direct links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '3rem' }}>
          <a
            href="mailto:fofefranklin57@gmail.com"
            style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '16px 20px', background: 'var(--bg2)',
              border: '0.5px solid var(--border)', borderRadius: '10px',
              textDecoration: 'none', color: 'var(--text1)',
            }}
          >
            <Mail size={18} aria-hidden="true" style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text1)', margin: 0 }}>Email</p>
              <p style={{ fontSize: '12px', color: 'var(--text3)', margin: 0 }}>fofefranklin57@gmail.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/franklin-fofe-nodem"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '16px 20px', background: 'var(--bg2)',
              border: '0.5px solid var(--border)', borderRadius: '10px',
              textDecoration: 'none', color: 'var(--text1)',
            }}
          >
            <ExternalLink size={18} aria-hidden="true" style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text1)', margin: 0 }}>LinkedIn</p>
              <p style={{ fontSize: '12px', color: 'var(--text3)', margin: 0 }}>linkedin.com/in/franklin-fofe-nodem</p>
            </div>
          </a>

          <a
            href="https://github.com/fofefranklin57-rgb"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '16px 20px', background: 'var(--bg2)',
              border: '0.5px solid var(--border)', borderRadius: '10px',
              textDecoration: 'none', color: 'var(--text1)',
            }}
          >
            <GitFork size={18} aria-hidden="true" style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text1)', margin: 0 }}>GitHub</p>
              <p style={{ fontSize: '12px', color: 'var(--text3)', margin: 0 }}>github.com/fofefranklin57-rgb</p>
            </div>
          </a>
        </div>

        {/* Availability note */}
        <div style={{
          background: 'var(--bg2)', border: '0.5px solid var(--border)',
          borderRadius: '10px', padding: '16px 20px',
          borderLeft: '3px solid var(--green)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span aria-hidden="true" style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: 'var(--green)', display: 'inline-block',
            }} />
            <span style={{ fontSize: '12px', color: 'var(--green)', fontWeight: 500 }}>
              Currently available
            </span>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text3)', margin: 0, lineHeight: 1.65 }}>
            Open to full-time remote roles, freelance missions, consulting, and collaborations.
            Based in Cameroon (UTC+1) — compatible with European business hours.
          </p>
        </div>
      </div>
    </div>
  );
}
