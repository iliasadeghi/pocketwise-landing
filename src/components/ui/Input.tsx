import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
}

/** Labelled text input with an inline error wired up via aria-describedby. */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, error, className, ...props },
  ref,
) {
  const errorId = `${id}-error`;

  return (
    <div className={cn('flex-1 text-left', className)}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-fg">
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'min-h-12 w-full rounded-xl border bg-surface px-4 text-base text-fg shadow-soft transition-colors placeholder:text-muted focus-visible:ring-offset-0',
          error ? 'border-danger' : 'border-border hover:border-primary/40',
        )}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
});
