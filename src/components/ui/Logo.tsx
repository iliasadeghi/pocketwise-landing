import { useId } from 'react';
import { site } from '../../content';

export function Logo() {
  // The logo renders twice (navbar + footer), so the gradient id must be unique.
  const gradientId = `logo-${useId().replace(/:/g, '')}`;
  return (
    <a
      href="#top"
      className="inline-flex min-h-11 items-center gap-2.5 rounded-lg font-display text-lg font-bold tracking-tight"
    >
      <svg aria-hidden="true" viewBox="0 0 64 64" className="size-8 shrink-0">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4f46e5" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill={`url(#${gradientId})`} />
        <path
          d="M20 44V20h13a9 9 0 0 1 0 18h-6"
          fill="none"
          stroke="#fff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="44" cy="46" r="4" fill="#34d399" />
      </svg>
      <span>{site.name}</span>
      <span className="sr-only">, back to top</span>
    </a>
  );
}
