import { ArrowUp } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrolled';
import { cn } from '../../lib/cn';

export function BackToTop() {
  const visible = useScrolled(700);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        'glass fixed bottom-5 right-5 z-40 inline-flex size-12 items-center justify-center rounded-full text-fg shadow-lifted transition-all duration-300 hover:-translate-y-1 hover:text-primary',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </a>
  );
}
