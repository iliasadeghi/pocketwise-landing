import { ArrowDown, Sparkles } from 'lucide-react';
import { hero } from '../../content';
import { Badge } from '../ui/Badge';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { AvatarStack } from '../illustrations/Avatar';
import { PhoneMockup } from '../illustrations/PhoneMockup';
import { WaitlistForm } from '../WaitlistForm';

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-x-clip">
      <div
        aria-hidden="true"
        className="aurora pointer-events-none absolute inset-0 -top-[var(--nav-h)]"
      />
      <div
        aria-hidden="true"
        className="grid-bg pointer-events-none absolute inset-0 -top-[var(--nav-h)]"
      />

      <Container className="relative grid items-center gap-14 pb-16 pt-5 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-24 lg:pt-20">
        <div className="text-center lg:text-left">
          <Reveal>
            <Badge>
              <Sparkles className="size-4" aria-hidden="true" />
              {hero.badge}
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 id="hero-heading" className="mt-4 text-display-xl font-extrabold sm:mt-5">
              {hero.titleLead} <span className="text-gradient">{hero.titleHighlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-muted sm:mt-5 sm:text-lg lg:mx-0">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mx-auto mt-6 max-w-lg sm:mt-8 lg:mx-0">
            <WaitlistForm label={hero.formLabel} submitLabel={hero.submitLabel} note={hero.note} />
            <ButtonLink
              href={hero.secondaryCta.href}
              variant="ghost"
              className="mt-3 text-muted hover:text-fg"
            >
              {hero.secondaryCta.label}
              <ArrowDown className="size-4" aria-hidden="true" />
            </ButtonLink>
            <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
              <AvatarStack />
              <p className="text-sm font-medium text-muted">{hero.proof}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="px-6 sm:px-0">
          <PhoneMockup />
        </Reveal>
      </Container>
    </section>
  );
}
