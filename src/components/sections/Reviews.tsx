import { BadgeCheck, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import { reviews, type Review } from '../../content';
import { cn } from '../../lib/cn';
import { Avatar } from '../illustrations/Avatar';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import { Stars } from '../ui/Stars';

type Filter = 'all' | 5 | 4;

const filters: Array<{ value: Filter; label: string }> = [
  { value: 'all', label: 'All reviews' },
  { value: 5, label: '5 stars' },
  { value: 4, label: '4 stars & below' },
];

const PAGE_SIZE = 4;

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [liked, setLiked] = useState(false);

  return (
    <article
      className="animate-fade-in rounded-2xl border border-border bg-surface p-5 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-lifted sm:p-6"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'backwards' }}
    >
      <header className="flex items-start gap-3">
        <Avatar variant={review.avatar} className="size-12 ring-2 ring-primary/20" />
        <div className="min-w-0 flex-1">
          <p className="flex flex-wrap items-center gap-x-2 font-semibold">
            {review.name}
            {review.verified && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                <BadgeCheck className="size-4" aria-hidden="true" />
                Verified beta tester
              </span>
            )}
          </p>
          <p className="text-sm text-muted">{review.role}</p>
        </div>
        <time className="shrink-0 text-xs text-muted">{review.date}</time>
      </header>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
        <Stars rating={review.rating} size="size-4" />
        <h3 className="font-sans text-base font-bold">{review.title}</h3>
      </div>
      <p className="mt-2 leading-relaxed text-muted">{review.body}</p>

      <footer className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          aria-pressed={liked}
          onClick={() => setLiked((v) => !v)}
          className={cn(
            'inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 text-sm font-medium transition-all active:scale-95',
            liked
              ? 'border-primary/50 bg-primary-soft text-primary-strong dark:text-primary'
              : 'border-border text-muted hover:border-primary/40 hover:text-fg',
          )}
        >
          <ThumbsUp className={cn('size-4', liked && 'fill-current')} aria-hidden="true" />
          Helpful
          <span className="tabular-nums">· {review.helpful + (liked ? 1 : 0)}</span>
        </button>
      </footer>
    </article>
  );
}

export function Reviews() {
  const [filter, setFilter] = useState<Filter>('all');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const matching = reviews.items.filter((r) =>
    filter === 'all' ? true : filter === 5 ? r.rating === 5 : r.rating <= 4,
  );
  const shown = matching.slice(0, visible);

  const choose = (value: Filter) => {
    setFilter(value);
    setVisible(PAGE_SIZE);
  };

  return (
    <Section
      id="reviews"
      eyebrow={reviews.eyebrow}
      title={reviews.title}
      subtitle={reviews.subtitle}
      className="bg-surface/60"
    >
      <div className="grid gap-8 lg:grid-cols-[21rem_1fr] lg:items-start">
        <Reveal className="min-w-0 lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)]">
          <Card className="text-center sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <p className="text-gradient font-display text-6xl font-extrabold leading-none tracking-tight">
                {reviews.score}
              </p>
              <div className="space-y-1">
                <Stars rating={Number(reviews.score)} size="size-6" />
                <p className="text-sm text-muted">Based on {reviews.count} ratings</p>
              </div>
            </div>

            <ul className="mt-6 space-y-2.5">
              {reviews.distribution.map((row) => (
                <li key={row.stars} className="flex items-center gap-3 text-sm">
                  <span className="w-12 shrink-0 text-left text-muted">{row.stars} star</span>
                  <span
                    aria-hidden="true"
                    className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2"
                  >
                    <span
                      className="block h-full rounded-full bg-brand-gradient"
                      style={{ width: `${row.percent}%` }}
                    />
                  </span>
                  <span className="w-10 shrink-0 text-right font-medium tabular-nums">
                    {row.percent}%
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-xl bg-accent-soft p-3 text-center text-sm font-medium text-accent">
              {reviews.recommend}% would recommend Pocketwise to a friend
            </p>
          </Card>
        </Reveal>

        <div className="min-w-0">
          <div
            role="group"
            aria-label="Filter reviews by rating"
            className="mb-5 flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={String(f.value)}
                type="button"
                aria-pressed={filter === f.value}
                onClick={() => choose(f.value)}
                className={cn(
                  'min-h-11 rounded-full border px-4 text-sm font-semibold transition-all',
                  filter === f.value
                    ? 'border-transparent bg-primary text-primary-fg shadow-glow'
                    : 'border-border bg-surface text-muted hover:border-primary/40 hover:text-fg',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div key={String(filter)} className="space-y-4" aria-live="polite">
            {shown.map((review, i) => (
              <ReviewCard key={review.name} review={review} index={i} />
            ))}
          </div>

          {visible < matching.length && (
            <div className="mt-6 text-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
              >
                Show more reviews
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
