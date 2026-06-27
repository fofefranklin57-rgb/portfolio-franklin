import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Franklin Fofe Nodem — Product Builder & Software Developer',
    template: '%s | Franklin Fofe Nodem',
  },
  description:
    'Product Builder & Software Developer based in Cameroon. I build software that solves real-world problems — 4 products shipped, open to international remote opportunities.',
  keywords: [
    'Franklin Fofe Nodem',
    'Product Builder',
    'Software Developer',
    'Cameroon',
    'remote developer Africa',
    'ImmoGest',
    'Kalamundi',
    'AgroNova',
    'Cloudflare Workers',
    'Supabase',
  ],
  authors: [{ name: 'Franklin Fofe Nodem' }],
  creator: 'Franklin Fofe Nodem',
  metadataBase: new URL('https://portfolio-franklin.pages.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-franklin.pages.dev',
    siteName: 'Franklin Fofe Nodem',
    title: 'Franklin Fofe Nodem — Product Builder & Software Developer',
    description:
      'I build software that solves real-world problems. 4 products shipped. Open to international remote opportunities.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Franklin Fofe Nodem — Product Builder & Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franklin Fofe Nodem — Product Builder & Software Developer',
    description:
      'I build software that solves real-world problems. 4 products shipped. Open to international remote work.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fr' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
