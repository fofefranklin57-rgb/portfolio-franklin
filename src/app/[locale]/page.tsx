import { useTranslations } from 'next-intl';
import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import AboutSnippet from '@/components/sections/AboutSnippet';
import Skills from '@/components/sections/Skills';
import RemoteReady from '@/components/sections/RemoteReady';
import ContactCTA from '@/components/sections/ContactCTA';

export default function HomePage() {
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
