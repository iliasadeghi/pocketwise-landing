import { BellRing, Repeat, Tv } from 'lucide-react';
import type { ReactNode } from 'react';
import type { FeatureArtId } from '../../content';
import { cn } from '../../lib/cn';
import { Avatar } from './Avatar';
import { ProgressRing } from './ProgressRing';

const bars = [0.4, 0.62, 0.3, 0.8, 0.55, 0.9, 0.35];

function Safe() {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="relative">
        <ProgressRing value={0.62} size={84} stroke={9} />
        <span className="absolute inset-0 grid place-items-center font-display text-lg font-extrabold">
          £86
        </span>
      </div>
      <div className="flex h-20 items-end gap-1 sm:gap-1.5">
        {bars.map((v, i) => (
          <span
            key={i}
            className="w-2.5 rounded-t bg-brand-gradient opacity-90 sm:w-3"
            style={{ height: `${v * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}

const days = Array.from({ length: 14 }, (_, i) => i + 1);

function Term() {
  return (
    <div>
      <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-wider text-muted">
        October
      </p>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => (
          <span
            key={d}
            className={cn(
              'grid size-6 place-items-center rounded-md text-[10px] font-semibold',
              d === 4 && 'bg-accent text-bg',
              d === 11 && 'bg-primary text-primary-fg',
              d !== 4 && d !== 11 && 'bg-surface text-muted',
            )}
          >
            {d}
          </span>
        ))}
      </div>
      <p className="mt-2 flex justify-center gap-3 text-[10px] text-muted">
        <span className="flex items-center gap-1">
          <span className="size-2 rounded-full bg-accent" /> Loan
        </span>
        <span className="flex items-center gap-1">
          <span className="size-2 rounded-full bg-primary" /> Rent
        </span>
      </p>
    </div>
  );
}

function Split() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex -space-x-3">
        {[1, 2, 4, 5].map((v) => (
          <Avatar key={v} variant={v} className="size-11 ring-2 ring-surface" />
        ))}
      </div>
      <div className="flex gap-2 text-xs font-semibold">
        <span className="rounded-full bg-surface px-3 py-1 shadow-soft">Wifi £8.50</span>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-accent">Settled ✓</span>
      </div>
    </div>
  );
}

function Toast({
  icon,
  title,
  sub,
  className,
}: {
  icon: ReactNode;
  title: string;
  sub: string;
  className?: string;
}) {
  return (
    <div
      className={cn('flex items-center gap-2.5 rounded-xl bg-surface p-2.5 shadow-soft', className)}
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
        {icon}
      </span>
      <span className="text-xs leading-tight">
        <span className="block font-semibold text-fg">{title}</span>
        <span className="text-muted">{sub}</span>
      </span>
    </div>
  );
}

function Nudge() {
  return (
    <div className="w-full max-w-[15rem] space-y-2">
      <Toast
        icon={<Tv className="size-4" />}
        title="Streaming renews tomorrow"
        sub="£10.99 · tap to pause"
      />
      <Toast
        icon={<BellRing className="size-4" />}
        title="£12 over for the week"
        sub="Maybe skip Friday’s round?"
        className="ml-5 opacity-90"
      />
      <Toast
        icon={<Repeat className="size-4" />}
        title="Gym renews in 3 days"
        sub="£29.00"
        className="opacity-60"
      />
    </div>
  );
}

const pots = [
  { label: 'Lisbon', value: 0.57 },
  { label: 'Laptop', value: 0.45 },
  { label: 'Rainy day', value: 0.75 },
];

function Pots() {
  return (
    <div className="flex items-end gap-5">
      {pots.map((p) => (
        <div key={p.label} className="flex flex-col items-center gap-1.5">
          <div className="relative h-24 w-12 overflow-hidden rounded-b-2xl rounded-t-md border-2 border-border bg-surface">
            <span
              className="absolute inset-x-0 bottom-0 bg-brand-gradient"
              style={{ height: `${p.value * 100}%` }}
            />
          </div>
          <span className="text-[10px] font-medium text-muted">{p.label}</span>
        </div>
      ))}
    </div>
  );
}

const art: Record<FeatureArtId, () => ReactNode> = {
  safe: Safe,
  term: Term,
  split: Split,
  nudge: Nudge,
  pots: Pots,
};

/** Small illustrated preview shown at the top of each feature card. Decorative. */
export function FeatureArt({ id }: { id: FeatureArtId }) {
  const Art = art[id];
  return (
    <div
      aria-hidden="true"
      className="mb-6 flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary-soft/80 to-surface-2 p-4"
    >
      <Art />
    </div>
  );
}
