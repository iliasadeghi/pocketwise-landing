import type { ComponentType, SVGProps } from 'react';

export type SceneId = 'study' | 'cafe' | 'bus' | 'house';

const frame: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 320 220',
  'aria-hidden': true,
  className: 'block h-auto w-full',
  preserveAspectRatio: 'xMidYMid slice',
};

/** Night-in at the desk: laptop with the safe-to-spend ring, mug and books. */
function Study() {
  return (
    <svg {...frame}>
      <rect width="320" height="220" className="fill-primary-soft" />
      <rect x="206" y="22" width="92" height="82" rx="10" className="fill-surface" />
      <path d="M252 22v82M206 63h92" className="stroke-border" strokeWidth="3" />
      <circle cx="232" cy="46" r="12" className="fill-accent" opacity="0.35" />
      <circle cx="238" cy="42" r="12" className="fill-surface" />
      <path
        d="M46 160V84l22-18"
        fill="none"
        className="stroke-neutral-500"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M56 58l24 14-14 20-24-14z" className="fill-accent" />
      <path d="M0 160h320v60H0z" className="fill-neutral-300 dark:fill-neutral-700" />
      <rect
        x="86"
        y="86"
        width="108"
        height="76"
        rx="8"
        className="fill-neutral-800 dark:fill-neutral-900"
      />
      <rect x="92" y="92" width="96" height="64" rx="4" className="fill-surface" />
      <circle cx="116" cy="124" r="15" fill="none" className="stroke-surface-2" strokeWidth="6" />
      <circle
        cx="116"
        cy="124"
        r="15"
        fill="none"
        className="stroke-accent"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="94"
        strokeDashoffset="36"
        transform="rotate(-90 116 124)"
      />
      <text x="142" y="122" className="fill-fg font-display" fontSize="13" fontWeight="800">
        £86
      </text>
      <rect x="142" y="130" width="38" height="5" rx="2.5" className="fill-border" />
      <rect x="142" y="140" width="26" height="5" rx="2.5" className="fill-border" />
      <path d="M76 162h128l10 10H66z" className="fill-neutral-400 dark:fill-neutral-600" />
      <rect x="226" y="126" width="30" height="34" rx="6" className="fill-primary" />
      <path
        d="M256 134h6a7 7 0 0 1 0 16h-6"
        fill="none"
        className="stroke-primary"
        strokeWidth="5"
      />
      <path
        d="M234 116c-4-5 4-8 0-13M246 116c-4-5 4-8 0-13"
        fill="none"
        className="stroke-muted"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <rect x="262" y="146" width="48" height="14" rx="3" className="fill-accent" />
      <rect x="266" y="132" width="42" height="14" rx="3" className="fill-primary-strong" />
    </svg>
  );
}

/** Campus café: striped awning, a coffee and the £3.40 price tag. */
function Cafe() {
  return (
    <svg {...frame}>
      <rect width="320" height="220" className="fill-accent-soft" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} className={i % 2 === 0 ? 'fill-primary' : 'fill-surface'}>
          <rect x={40 + i * 40} y="26" width="40" height="36" />
          <circle cx={60 + i * 40} cy="62" r="20" />
        </g>
      ))}
      <rect
        x="30"
        y="140"
        width="260"
        height="80"
        className="fill-neutral-300 dark:fill-neutral-700"
      />
      <rect
        x="30"
        y="136"
        width="260"
        height="10"
        rx="3"
        className="fill-neutral-400 dark:fill-neutral-600"
      />
      <path d="M128 98h56l-6 44h-44z" className="fill-surface" />
      <path d="M131 112h50l-2 14h-46z" className="fill-primary" />
      <rect
        x="124"
        y="90"
        width="64"
        height="10"
        rx="4"
        className="fill-neutral-800 dark:fill-neutral-200"
      />
      <path
        d="M184 108h8a8 8 0 0 1 0 18h-10"
        fill="none"
        className="stroke-surface"
        strokeWidth="5"
      />
      <path
        d="M146 80c-5-6 5-9 0-16M164 80c-5-6 5-9 0-16"
        fill="none"
        className="stroke-muted"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <g transform="rotate(-6 244 112)">
        <rect x="206" y="88" width="76" height="40" rx="12" className="fill-surface" />
        <circle cx="222" cy="108" r="6" className="fill-accent" />
        <text x="234" y="114" className="fill-fg font-display" fontSize="16" fontWeight="800">
          £3.40
        </text>
      </g>
      <ellipse cx="68" cy="132" rx="22" ry="6" className="fill-accent" />
      <ellipse cx="68" cy="124" rx="22" ry="6" className="fill-accent" opacity="0.8" />
      <ellipse cx="68" cy="116" rx="22" ry="6" className="fill-accent" opacity="0.6" />
    </svg>
  );
}

/** Commute: a bus with the monthly pass floating above it. */
function Bus() {
  return (
    <svg {...frame}>
      <rect width="320" height="220" className="fill-primary-soft" />
      <ellipse cx="70" cy="52" rx="34" ry="12" className="fill-surface" opacity="0.8" />
      <ellipse cx="94" cy="44" rx="24" ry="10" className="fill-surface" opacity="0.8" />
      <rect y="168" width="320" height="52" className="fill-neutral-400 dark:fill-neutral-700" />
      <path
        d="M0 194h320"
        className="stroke-surface"
        strokeWidth="3"
        strokeDasharray="22 16"
        opacity="0.7"
      />
      <rect x="40" y="78" width="204" height="90" rx="18" className="fill-primary" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={56 + i * 36}
          y="92"
          width="28"
          height="30"
          rx="6"
          className="fill-surface"
          opacity="0.92"
        />
      ))}
      <rect x="200" y="92" width="32" height="62" rx="6" className="fill-surface" opacity="0.92" />
      <rect x="40" y="136" width="204" height="10" className="fill-accent" />
      <circle cx="236" cy="150" r="5" className="fill-accent-soft" />
      <circle cx="84" cy="168" r="17" className="fill-neutral-900" />
      <circle cx="84" cy="168" r="7" className="fill-neutral-300" />
      <circle cx="200" cy="168" r="17" className="fill-neutral-900" />
      <circle cx="200" cy="168" r="7" className="fill-neutral-300" />
      <g transform="rotate(7 268 62)">
        <rect x="226" y="30" width="84" height="64" rx="12" className="fill-surface" />
        <rect x="226" y="30" width="84" height="18" rx="12" className="fill-accent" />
        <text x="238" y="68" className="fill-fg font-display" fontSize="12" fontWeight="800">
          Bus pass
        </text>
        <text x="238" y="86" className="fill-primary font-display" fontSize="14" fontWeight="800">
          £32.00
        </text>
      </g>
    </svg>
  );
}

/** Shared house: four housemates in the windows and a bill split receipt. */
function House() {
  const heads = ['#8d5524', '#f1c27d', '#c68642', '#ffdbac'];
  return (
    <svg {...frame}>
      <rect width="320" height="220" className="fill-accent-soft" />
      <rect y="176" width="320" height="44" className="fill-neutral-300 dark:fill-neutral-700" />
      <rect x="18" y="140" width="10" height="40" className="fill-neutral-500" />
      <circle cx="23" cy="124" r="26" className="fill-accent" opacity="0.7" />
      <rect x="74" y="78" width="150" height="100" className="fill-surface" />
      <path d="M62 82L149 22l87 60z" className="fill-primary" />
      {[0, 1, 2, 3].map((i) => {
        const x = 88 + (i % 2) * 70;
        const y = 94 + Math.floor(i / 2) * 42;
        return (
          <g key={i}>
            <rect x={x} y={y} width="52" height="34" rx="4" className="fill-primary-soft" />
            <circle cx={x + 26} cy={y + 15} r="8" fill={heads[i]} />
            <path
              d={`M${x + 12} ${y + 34}c0-9 6-12 14-12s14 3 14 12z`}
              className="fill-primary-strong"
            />
          </g>
        );
      })}
      <g transform="rotate(5 268 138)">
        <rect x="230" y="96" width="76" height="86" rx="10" className="fill-surface" />
        <rect x="240" y="108" width="40" height="5" rx="2.5" className="fill-border" />
        <rect x="240" y="120" width="52" height="5" rx="2.5" className="fill-border" />
        <rect x="240" y="132" width="30" height="5" rx="2.5" className="fill-border" />
        <path d="M240 146h56" className="stroke-border" strokeWidth="2" strokeDasharray="4 3" />
        <text x="240" y="170" className="fill-accent font-display" fontSize="15" fontWeight="800">
          ÷4 £130
        </text>
      </g>
    </svg>
  );
}

const scenes: Record<SceneId, ComponentType> = {
  study: Study,
  cafe: Cafe,
  bus: Bus,
  house: House,
};

export function Scene({ id }: { id: SceneId }) {
  const Component = scenes[id];
  return <Component />;
}
