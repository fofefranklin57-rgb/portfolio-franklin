import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Franklin Fofe Nodem — Product Builder & Software Developer',
    template: '%s | Franklin Fofe Nodem',
  },
  description:
    'Product Builder & Software Developer based in Cameroon. I build digital products that solve real-world problems. Open to international remote opportunities.',
  keywords: [
    'Franklin Fofe Nodem',
    'Product Builder',
    'Software Developer',
    'Cameroon',
    'remote developer Africa',
    'ImmoGest',
    'Kalamundi',
  ],
  authors: [{ name: 'Franklin Fofe Nodem' }],
  creator: 'Franklin Fofe Nodem',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.franklinfofe.com',
    siteName: 'Franklin Fofe Nodem',
    title: 'Franklin Fofe Nodem — Product Builder & Software Developer',
    description:
      'I build digital products that solve real-world problems. From SaaS platforms to real businesses, I turn ideas into working solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franklin Fofe Nodem — Product Builder & Software Developer',
    description:
      'I build digital products that solve real-world problems. Open to international remote opportunities.',
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

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
