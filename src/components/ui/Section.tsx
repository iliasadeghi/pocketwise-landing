import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Container } from './Container';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

/** A page section with an optional centred heading block. */
export function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={cn('py-section', className)}
    >
      <Container>
        {title && (
          <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                {eyebrow}
              </p>
            )}
            <h2 id={headingId} className="text-display-lg font-bold">
              {title}
            </h2>
            {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
