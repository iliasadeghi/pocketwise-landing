import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-3 py-1 text-sm font-medium text-primary-strong dark:text-primary',
        className,
      )}
    >
      {children}
    </span>
  );
}
