import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';
import { testimonials, type Testimonial } from '../../content';
import { Avatar } from '../illustrations/Avatar';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="flex h-full flex-col hover:-translate-y-1 hover:shadow-lifted">
      <Quote className="size-8 text-primary/40" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-fg">“{t.quote}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar variant={t.avatar} className="size-12 ring-2 ring-primary/30" />
        <span>
          <span className="block font-semibold">{t.name}</span>
          <span className="text-sm text-muted">{t.role}</span>
        </span>
      </figcaption>
    </Card>
  );
}

export function Testimonials() {
  const items = testimonials.items;
  const [index, setIndex] = useState(0);
  const current = items[index];
  const go = (delta: number) => setIndex((i) => (i + delta + items.length) % items.length);

  return (
    <Section id="testimonials" eyebrow={testimonials.eyebrow} title={testimonials.title}>
      {/* Mobile and tablet: one card at a time with controls. */}
      <div
        className="lg:hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Student testimonials"
      >
        <div aria-live="polite" aria-atomic="true">
          {current && (
            <figure
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
              className="mx-auto max-w-xl animate-fade-in"
            >
              <TestimonialCard t={current} />
            </figure>
          )}
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid size-11 place-items-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          {/* Six 44px dot targets don't fit at 320px, so tiny screens get a counter instead. */}
          <p className="min-w-12 text-center text-sm font-medium tabular-nums text-muted sm:hidden">
            {index + 1} / {items.length}
          </p>
          <div className="hidden sm:flex">
            {items.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className="grid size-11 place-items-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${i === index ? 'w-6 bg-primary' : 'w-2 bg-border'}`}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid size-11 place-items-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Desktop: all testimonials in a grid. */}
      <div className="hidden gap-5 lg:grid lg:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.08}>
            <figure className="h-full">
              <TestimonialCard t={t} />
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
