import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="fr">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)', color: 'var(--text1)', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}>
        <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ maxWidth: '480px', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: 'var(--text4)', textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 20px' }}>
              404
            </p>
            <h1 style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 500, color: 'var(--text1)', margin: '0 0 12px', lineHeight: 1.3 }}>
              Cette page n'existe pas
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--text3)', lineHeight: 1.7, margin: '0 0 32px' }}>
              Elle a peut-être été déplacée, renommée ou simplement n'a jamais existé.
              <br />
              Pas de panique — le reste du portfolio est intact.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/fr"
                style={{
                  fontSize: '13px', padding: '10px 22px',
                  background: 'var(--accent)', color: '#fff',
                  borderRadius: '7px', fontWeight: 500,
                  textDecoration: 'none', display: 'inline-block',
                }}
              >
                Retour à l'accueil
              </Link>
              <Link
                href="/fr/projects"
                style={{
                  fontSize: '13px', padding: '10px 20px',
                  background: 'transparent', color: 'var(--text3)',
                  border: '0.5px solid var(--border)', borderRadius: '7px',
                  textDecoration: 'none', display: 'inline-block',
                }}
              >
                Voir les projets
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
