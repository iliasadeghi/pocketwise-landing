import { cn } from '../../lib/cn';

type HairStyle = 'short' | 'long' | 'bun' | 'curly' | 'buzz';

interface Look {
  skin: string;
  hair: string;
  shirt: string;
  bg: string;
  style: HairStyle;
}

const first: Look = {
  skin: '#8d5524',
  hair: '#1c1917',
  shirt: '#4f46e5',
  bg: '#c7d2fe',
  style: 'curly',
};

const looks: Look[] = [
  first,
  { skin: '#c68642', hair: '#292524', shirt: '#0f766e', bg: '#a7f3d0', style: 'buzz' },
  { skin: '#e0ac69', hair: '#0c0a09', shirt: '#be185d', bg: '#fbcfe8', style: 'long' },
  { skin: '#f1c27d', hair: '#92400e', shirt: '#1d4ed8', bg: '#bfdbfe', style: 'short' },
  { skin: '#ffdbac', hair: '#7c2d12', shirt: '#7c3aed', bg: '#ddd6fe', style: 'bun' },
  { skin: '#a8714a', hair: '#1c1917', shirt: '#b45309', bg: '#fde68a', style: 'long' },
];

interface AvatarProps {
  /** Picks one of the illustrated looks; wraps around. */
  variant: number;
  className?: string;
}

/** Flat illustrated portrait. Decorative: pair it with the person's name in text. */
export function Avatar({ variant, className }: AvatarProps) {
  const look = looks[variant % looks.length] ?? first;
  const eye = '#1f2937';

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn('size-11 shrink-0 rounded-full', className)}
    >
      <rect width="64" height="64" fill={look.bg} />
      {look.style === 'long' && (
        <path
          d="M19 29c0-11 5-17 13-17s13 6 13 17v15c0 2-3 3-5 1V32H24v13c-2 2-5 1-5-1z"
          fill={look.hair}
        />
      )}
      {look.style === 'bun' && <circle cx="32" cy="11" r="6.5" fill={look.hair} />}
      <path d="M8 64c0-13 10-20 24-20s24 7 24 20z" fill={look.shirt} />
      <rect x="28" y="36" width="8" height="11" rx="3" fill={look.skin} />
      <ellipse cx="32" cy="28" rx="11" ry="12.5" fill={look.skin} />
      {look.style === 'short' && (
        <path d="M20 28c-1-11 5-16 12-16s13 5 12 16c-3-6-7-8-12-8s-9 2-12 8z" fill={look.hair} />
      )}
      {look.style === 'long' && (
        <path d="M20 28c0-9 5-14 12-14s12 5 12 14c-2-4-5-6-9-7-5 1-12 2-15 7z" fill={look.hair} />
      )}
      {look.style === 'bun' && (
        <path d="M20 28c0-9 5-14 12-14s12 5 12 14c-4-5-8-7-12-7s-8 2-12 7z" fill={look.hair} />
      )}
      {look.style === 'buzz' && (
        <path
          d="M21 26c0-8 4-12 11-12s11 4 11 12c-3-3-6-5-11-5s-8 2-11 5z"
          fill={look.hair}
          opacity="0.85"
        />
      )}
      {look.style === 'curly' && (
        <g fill={look.hair}>
          <circle cx="22" cy="19" r="5.5" />
          <circle cx="29" cy="14.5" r="6" />
          <circle cx="37" cy="14.5" r="6" />
          <circle cx="43" cy="19" r="5.5" />
          <circle cx="21" cy="26" r="4" />
          <circle cx="43" cy="26" r="4" />
        </g>
      )}
      <circle cx="28" cy="29" r="1.4" fill={eye} />
      <circle cx="36" cy="29" r="1.4" fill={eye} />
      <path
        d="M28.5 34q3.5 3 7 0"
        fill="none"
        stroke={eye}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Overlapping row of avatars for "join the crowd" social proof. */
export function AvatarStack({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <div aria-hidden="true" className={cn('flex -space-x-3', className)}>
      {Array.from({ length: count }, (_, i) => (
        <Avatar key={i} variant={i} className="size-10 ring-2 ring-bg" />
      ))}
    </div>
  );
}
