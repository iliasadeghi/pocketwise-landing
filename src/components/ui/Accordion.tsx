import { AnimatePresence, m } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import { cn } from '../../lib/cn';

interface AccordionItem {
  q: string;
  a: string;
}

/** Disclosure-pattern accordion: one panel open at a time, keyboard friendly via native buttons. */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-surface shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.q}>
            <h3 className="font-sans text-base">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-semibold transition-colors hover:text-primary sm:px-6"
              >
                <span>{item.q}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'size-5 shrink-0 text-muted transition-transform duration-300',
                    isOpen && 'rotate-180 text-primary',
                  )}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6">{item.a}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
