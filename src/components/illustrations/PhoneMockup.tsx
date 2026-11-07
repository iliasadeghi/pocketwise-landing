import { Bus, Coffee, Home, TrendingUp, CalendarClock } from 'lucide-react';
import { ProgressRing } from './ProgressRing';

const upcoming = [
  { icon: Home, label: 'Rent', when: 'Fri', amount: '−£520.00' },
  { icon: Bus, label: 'Bus pass', when: 'Mon', amount: '−£32.00' },
  { icon: Coffee, label: 'Campus café', when: 'Today', amount: '−£3.40' },
];

/** Hero product mockup: built from markup so it stays crisp and themeable. */
export function PhoneMockup() {
  return (
    <div
      role="img"
      aria-label="Pocketwise app showing £86.40 safe to spend this week, with upcoming rent and bus pass payments"
      className="relative mx-auto w-full max-w-[19rem] sm:max-w-[20rem]"
    >
      <div className="relative rounded-[2.75rem] border border-border bg-neutral-900 p-2.5 shadow-lifted dark:bg-neutral-800">
        <div className="overflow-hidden rounded-[2.25rem] bg-bg">
          <div className="flex items-center justify-between px-6 pb-2 pt-4 text-[11px] font-semibold text-fg">
            <span>9:41</span>
            <span className="h-5 w-20 rounded-full bg-neutral-900 dark:bg-neutral-800" />
            <span>100%</span>
          </div>

          <div className="px-5 pb-6">
            <p className="text-sm text-muted">Hi Amara 👋</p>
            <p className="font-display text-lg font-bold">Week 6 of 12</p>

            <div className="mt-4 flex items-center gap-4 rounded-2xl bg-surface p-4 shadow-soft">
              <div className="relative">
                <ProgressRing value={0.62} size={88} stroke={9} />
                <span className="absolute inset-0 grid place-items-center text-xs font-semibold text-muted">
                  62%
                </span>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  Safe to spend
                </p>
                <p className="font-display text-2xl font-extrabold">£86.40</p>
                <p className="text-xs text-accent">£12 under budget</p>
              </div>
            </div>

            <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-wide text-muted">
              Coming up
            </p>
            <ul className="space-y-2">
              {upcoming.map(({ icon: Icon, label, when, amount }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl bg-surface px-3 py-2.5 shadow-soft"
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-primary-soft text-primary">
                    <Icon className="size-4" />
                  </span>
                  <span className="flex-1 text-sm font-medium">
                    {label}
                    <span className="block text-xs font-normal text-muted">{when}</span>
                  </span>
                  <span className="text-sm font-semibold tabular-nums">{amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating glass chips; kept inside the column on small screens to avoid overflow. */}
      <div className="glass absolute -left-4 -top-5 flex animate-float items-center gap-2 rounded-2xl px-3 py-2 shadow-lifted sm:-left-14">
        <span className="grid size-8 place-items-center rounded-lg bg-accent-soft text-accent">
          <TrendingUp className="size-4" />
        </span>
        <span className="text-xs">
          <span className="block font-semibold text-fg">+£64.00</span>
          <span className="text-muted">Shift pay</span>
        </span>
      </div>
      <div className="glass absolute -bottom-6 -right-4 flex animate-float items-center gap-2 rounded-2xl px-3 py-2 shadow-lifted [animation-delay:-3s] sm:-right-14">
        <span className="grid size-8 place-items-center rounded-lg bg-primary-soft text-primary">
          <CalendarClock className="size-4" />
        </span>
        <span className="text-xs">
          <span className="block font-semibold text-fg">Loan lands</span>
          <span className="text-muted">in 12 days</span>
        </span>
      </div>
    </div>
  );
}
