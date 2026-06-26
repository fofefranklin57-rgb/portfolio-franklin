import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import AboutSnippet from '@/components/sections/AboutSnippet';
import Skills from '@/components/sections/Skills';
import RemoteReady from '@/components/sections/RemoteReady';
import ContactCTA from '@/components/sections/ContactCTA';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutSnippet />
      <Skills />
      <RemoteReady />
      <ContactCTA />
    </>
  );
}
