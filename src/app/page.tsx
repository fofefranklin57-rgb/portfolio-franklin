'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const lang = navigator.language || navigator.languages?.[0] || 'en';
    const locale = lang.toLowerCase().startsWith('fr') ? 'fr' : 'en';
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
