import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface StyleProps {
  variant?: Variant;
  size?: Size;
}

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-fg shadow-glow hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-lifted',
  secondary:
    'border border-border bg-surface text-fg shadow-soft hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-2',
  ghost: 'text-fg hover:bg-surface-2',
};

const sizes: Record<Size, string> = {
  md: 'px-4 text-sm',
  lg: 'min-h-12 px-6 text-base',
};

const styles = ({ variant = 'primary', size = 'md' }: StyleProps) =>
  cn(base, variants[variant], sizes[size]);

export function Button({
  variant,
  size,
  className,
  type = 'button',
  ...props
}: StyleProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type={type} className={cn(styles({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...props
}: StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(styles({ variant, size }), className)} {...props}>
      {children}
    </a>
  );
}
