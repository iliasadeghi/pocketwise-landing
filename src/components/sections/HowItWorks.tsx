import { howItWorks } from '../../content';
import { StepArt } from '../illustrations/StepArt';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow={howItWorks.eyebrow}
      title={howItWorks.title}
      className="bg-surface/60"
    >
      <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
        {howItWorks.steps.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 0.1} className="text-center">
              <div className="relative mx-auto max-w-xs">
                <StepArt index={i} />
                <span className="absolute -left-2 -top-3 grid size-10 place-items-center rounded-xl bg-brand-gradient font-display text-lg font-extrabold text-white shadow-glow">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
