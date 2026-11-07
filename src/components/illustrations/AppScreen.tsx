import { Laptop, Plane, Umbrella } from 'lucide-react';
import type { ComponentType } from 'react';
import type { ShowcaseTab } from '../../content';
import { ProgressRing } from './ProgressRing';

type ScreenId = ShowcaseTab['id'];

const weekBars = [
  { day: 'Mon', value: 0.45 },
  { day: 'Tue', value: 0.3 },
  { day: 'Wed', value: 0.7 },
  { day: 'Thu', value: 0.5 },
  { day: 'Fri', value: 0.95 },
  { day: 'Sat', value: 0.8 },
  { day: 'Sun', value: 0.25 },
];

const categories = [
  { label: 'Groceries', amount: '£38.20', share: 0.42 },
  { label: 'Eating out', amount: '£24.90', share: 0.28 },
  { label: 'Transport', amount: '£14.00', share: 0.16 },
  { label: 'Fun', amount: '£12.50', share: 0.14 },
];

const goals = [
  { icon: Plane, label: 'Summer in Lisbon', saved: 340, target: 600 },
  { icon: Laptop, label: 'New laptop', saved: 410, target: 900 },
  { icon: Umbrella, label: 'Rainy-day fund', saved: 150, target: 200 },
];

function Overview() {
  return (
    <div className="grid gap-4 sm:grid-cols-[auto_1fr]">
      <div className="flex items-center gap-4 rounded-2xl bg-surface p-5 shadow-soft">
        <ProgressRing value={0.62} size={104} stroke={10} />
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Safe to spend</p>
          <p className="font-display text-3xl font-extrabold">£86.40</p>
          <p className="text-sm text-accent">4 days left this week</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          ['Next loan', '12 days'],
          ['Bills due', '£552'],
          ['Saved this term', '£410'],
          ['Streak', '6 weeks'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl bg-surface p-4 shadow-soft">
            <p className="text-xs text-muted">{k}</p>
            <p className="mt-1 font-display text-lg font-bold">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Spending() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl bg-surface p-5 shadow-soft">
        <p className="text-sm font-semibold">This week</p>
        <div className="mt-4 flex h-36 items-end gap-2">
          {weekBars.map((b) => (
            <div key={b.day} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-brand-gradient opacity-90"
                style={{ height: `${b.value * 100}%` }}
              />
              <span className="text-[11px] text-muted">{b.day}</span>
            </div>
          ))}
        </div>
      </div>
      <ul className="space-y-3 rounded-2xl bg-surface p-5 shadow-soft">
        {categories.map((c) => (
          <li key={c.label}>
            <div className="flex justify-between text-sm">
              <span className="font-medium">{c.label}</span>
              <span className="tabular-nums text-muted">{c.amount}</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-surface-2">
              <div className="h-2 rounded-full bg-accent" style={{ width: `${c.share * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Goals() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {goals.map(({ icon: Icon, label, saved, target }) => (
        <li key={label} className="rounded-2xl bg-surface p-5 shadow-soft">
          <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
            <Icon className="size-5" />
          </span>
          <p className="mt-3 font-semibold">{label}</p>
          <p className="text-sm text-muted">
            £{saved} of £{target}
          </p>
          <div className="mt-3 h-2 rounded-full bg-surface-2">
            <div
              className="h-2 rounded-full bg-brand-gradient"
              style={{ width: `${(saved / target) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

const screens: Record<ScreenId, ComponentType> = {
  overview: Overview,
  spending: Spending,
  goals: Goals,
};

/** Desktop/tablet app window used in the showcase section. Purely decorative markup. */
export function AppScreen({ screen }: { screen: ScreenId }) {
  const Screen = screens[screen];
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-surface-2/60 shadow-lifted">
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-xs text-muted">app.pocketwise.example.com</span>
      </div>
      <div className="min-h-[18rem] p-4 sm:p-6">
        <Screen />
      </div>
    </div>
  );
}
