import { finalCta } from '../../content';
import { AvatarStack } from '../illustrations/Avatar';
import { ProgressRing } from '../illustrations/ProgressRing';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { WaitlistForm } from '../WaitlistForm';

export function FinalCta() {
  return (
    <section id="join" aria-labelledby="join-heading" className="pb-section">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center shadow-lifted sm:px-12 sm:py-20">
            <div aria-hidden="true" className="aurora pointer-events-none absolute inset-0" />
            <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />
            {/* Floating illustrated cards frame the headline on wide screens. */}
            <div
              aria-hidden="true"
              className="glass absolute left-8 top-10 hidden animate-float items-center gap-3 rounded-2xl p-3 shadow-lifted xl:flex"
            >
              <ProgressRing value={0.62} size={52} stroke={6} />
              <span className="pr-1 text-left text-xs">
                <span className="block font-display text-base font-extrabold">£86.40</span>
                <span className="text-muted">safe to spend</span>
              </span>
            </div>
            <div
              aria-hidden="true"
              className="glass absolute bottom-10 right-8 hidden animate-float items-center gap-3 rounded-2xl p-3 shadow-lifted [animation-delay:-3s] xl:flex"
            >
              <AvatarStack count={3} />
              <span className="pr-1 text-left text-xs">
                <span className="block font-semibold">Bills split</span>
                <span className="text-muted">3 housemates settled</span>
              </span>
            </div>
            <div className="relative mx-auto max-w-2xl">
              <h2 id="join-heading" className="text-display-lg font-extrabold">
                {finalCta.title}
              </h2>
              <p className="mt-4 text-lg text-muted">{finalCta.subtitle}</p>
              <WaitlistForm
                label={finalCta.formLabel}
                submitLabel={finalCta.submitLabel}
                note={finalCta.note}
                className="mx-auto mt-8 max-w-lg"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
