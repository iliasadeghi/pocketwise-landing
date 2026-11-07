import { features } from '../../content';
import { cn } from '../../lib/cn';
import { FeatureArt } from '../illustrations/FeatureArt';
import { Card } from '../ui/Card';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function Features() {
  return (
    <Section
      id="features"
      eyebrow={features.eyebrow}
      title={features.title}
      subtitle={features.subtitle}
    >
      {/* Bento grid: a "wide" card spans two columns (full row on tablets, 2 of 3 on desktop). */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map(({ icon: Icon, art, title, body, wide }, i) => (
          <Reveal
            key={title}
            delay={(i % 3) * 0.06}
            className={cn('h-full min-w-0', wide && 'sm:col-span-2')}
          >
            <Card
              className={cn(
                'group relative h-full overflow-hidden hover:-translate-y-1 hover:border-primary/40 hover:shadow-lifted',
                wide && 'bg-gradient-to-br from-surface to-primary-soft/60',
              )}
            >
              <FeatureArt id={art} />
              <div className="flex items-center gap-3">
                <span className="inline-grid size-10 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <p className="mt-3 max-w-prose leading-relaxed text-muted">{body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
