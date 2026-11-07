import { Check } from 'lucide-react';
import { useRef, useState, type KeyboardEvent } from 'react';
import { showcase } from '../../content';
import { cn } from '../../lib/cn';
import { AppScreen } from '../illustrations/AppScreen';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

/** Tabbed product demo following the WAI-ARIA tabs pattern (arrow keys move between tabs). */
export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabs = showcase.tabs;
  const active = tabs[activeIndex] ?? tabs[0];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const count = tabs.length;
    const targets: Record<string, number> = {
      ArrowRight: (activeIndex + 1) % count,
      ArrowLeft: (activeIndex - 1 + count) % count,
      Home: 0,
      End: count - 1,
    };
    const next = targets[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  if (!active) return null;

  return (
    <Section
      id="showcase"
      eyebrow={showcase.eyebrow}
      title={showcase.title}
      subtitle={showcase.subtitle}
    >
      <Reveal>
        <div
          role="tablist"
          aria-label="App screens"
          className="mx-auto mb-10 flex w-fit max-w-full gap-1 overflow-x-auto rounded-2xl border border-border bg-surface p-1.5 shadow-soft"
        >
          {tabs.map((tab, i) => {
            const selected = i === activeIndex;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveIndex(i)}
                onKeyDown={onKeyDown}
                className={cn(
                  'min-h-11 rounded-xl px-4 text-sm font-semibold transition-all sm:px-6',
                  selected
                    ? 'bg-primary text-primary-fg shadow-glow'
                    : 'text-muted hover:bg-surface-2 hover:text-fg',
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div
        role="tabpanel"
        id={`panel-${active.id}`}
        aria-labelledby={`tab-${active.id}`}
        className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div key={active.id} className="animate-fade-in">
          <h3 className="text-display-md font-bold">{active.title}</h3>
          <p className="mt-3 text-lg leading-relaxed text-muted">{active.body}</p>
          <ul className="mt-6 space-y-3">
            {active.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div aria-hidden="true">
          <AppScreen screen={active.id} />
        </div>
      </div>
    </Section>
  );
}
