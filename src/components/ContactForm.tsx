'use client';

import { useState } from 'react';

type Locale = 'fr' | 'en';

const copy = {
  fr: {
    name: 'Nom complet',
    email: 'Adresse email',
    subject: 'Sujet',
    message: 'Message',
    subjectPlaceholder: 'Mission à distance, collaboration, emploi...',
    messagePlaceholder: 'Décrivez votre projet ou votre besoin...',
    send: 'Envoyer le message',
    sending: 'Envoi en cours...',
    success: 'Message envoyé. Je vous répondrai dans les 24–48h.',
    error: 'Une erreur s\'est produite. Réessayez ou écrivez directement à fofefranklin57@gmail.com',
  },
  en: {
    name: 'Full name',
    email: 'Email address',
    subject: 'Subject',
    message: 'Message',
    subjectPlaceholder: 'Remote mission, collaboration, job opportunity...',
    messagePlaceholder: 'Describe your project or need...',
    send: 'Send message',
    sending: 'Sending...',
    success: 'Message sent. I\'ll reply within 24–48h.',
    error: 'Something went wrong. Try again or email fofefranklin57@gmail.com directly.',
  },
};

const FORMSPREE_ID = 'xdkgebyk';

export default function ContactForm({ locale }: { locale: string }) {
  const l = (locale as Locale) in copy ? (locale as Locale) : 'en';
  const t = copy[l];

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 14px',
    background: 'var(--bg)',
    border: '0.5px solid var(--border2)',
    borderRadius: '7px', fontSize: '14px',
    color: 'var(--text1)',
    outline: 'none', boxSizing: 'border-box',
    fontFamily: 'inherit',
  };
  const labelStyle: React.CSSProperties = {
    fontSize: '12px', fontWeight: 500,
    color: 'var(--text3)', display: 'block', marginBottom: '6px',
  };

  if (status === 'success') {
    return (
      <div style={{
        background: 'var(--badge-green-bg)', border: '0.5px solid var(--badge-green-border)',
        borderRadius: '10px', padding: '20px 24px',
      }}>
        <p style={{ fontSize: '14px', color: 'var(--badge-green-color)', margin: 0, lineHeight: 1.6 }}>
          ✓ {t.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={labelStyle}>{t.name}</label>
          <input name="name" required style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>{t.email}</label>
          <input name="email" type="email" required style={inputStyle} />
        </div>
      </div>

      <div>
        <label style={labelStyle}>{t.subject}</label>
        <input name="subject" placeholder={t.subjectPlaceholder} style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle}>{t.message}</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t.messagePlaceholder}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      {status === 'error' && (
        <p style={{ fontSize: '13px', color: 'var(--badge-amber-color)', margin: 0 }}>
          {t.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          padding: '11px 24px',
          background: status === 'sending' ? 'var(--text4)' : 'var(--accent)',
          color: '#fff', border: 'none', borderRadius: '7px',
          fontSize: '13px', fontWeight: 500, cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          alignSelf: 'flex-start', fontFamily: 'inherit',
        }}
      >
        {status === 'sending' ? t.sending : t.send}
      </button>
    </form>
  );
}
