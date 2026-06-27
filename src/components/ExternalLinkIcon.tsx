'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function ExternalLinkIcon({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ color: 'var(--text3)' }}
      onClick={(e) => e.stopPropagation()}
    >
      <ExternalLink size={14} />
    </Link>
  );
}
