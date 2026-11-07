import { Lock } from 'lucide-react';
import type { ReactNode } from 'react';
import { ProgressRing } from './ProgressRing';

function Bank() {
  return (
    <div className="relative">
      <div className="w-44 rounded-2xl bg-brand-gradient p-4 text-white shadow-glow">
        <div className="flex items-center justify-between">
          <span className="h-5 w-7 rounded-md bg-white/80" />
          <span className="text-xs font-semibold tracking-wider opacity-90">STUDENT</span>
        </div>
        <p className="mt-5 text-sm font-semibold tracking-[0.2em]">•••• 4821</p>
        <p className="mt-1 text-[10px] opacity-80">Read-only access</p>
      </div>
      <span className="absolute -bottom-3 -right-3 grid size-10 place-items-center rounded-full bg-accent text-bg shadow-lifted ring-4 ring-surface-2">
        <Lock className="size-4" />
      </span>
    </div>
  );
}

function Calendar() {
  const cells = Array.from({ length: 14 }, (_, i) => i + 1);
  return (
    <div className="rounded-2xl bg-surface p-3 shadow-soft">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted">Term 1</p>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d) => (
          <span
            key={d}
            className={`grid size-6 place-items-center rounded-md text-[10px] font-semibold ${
              d === 3
                ? 'bg-accent text-bg'
                : d === 10
                  ? 'bg-primary text-primary-fg'
                  : 'bg-surface-2 text-muted'
            }`}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="w-28 rounded-[1.5rem] border-4 border-neutral-900 bg-surface p-3 shadow-lifted dark:border-neutral-700">
      <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-neutral-900 dark:bg-neutral-700" />
      <div className="relative mx-auto w-fit">
        <ProgressRing value={0.62} size={64} stroke={7} />
        <span className="absolute inset-0 grid place-items-center text-xs font-extrabold">£86</span>
      </div>
      <p className="mt-2 text-center text-[10px] font-medium text-accent">On track</p>
    </div>
  );
}

const art: Record<number, () => ReactNode> = { 0: Bank, 1: Calendar, 2: Phone };

/** Illustration for a "how it works" step (0-based index). Decorative. */
export function StepArt({ index }: { index: number }) {
  const Art = art[index % 3];
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex h-44 w-full max-w-xs items-center justify-center rounded-2xl bg-gradient-to-br from-primary-soft/80 to-surface-2"
    >
      {Art && <Art />}
    </div>
  );
}
