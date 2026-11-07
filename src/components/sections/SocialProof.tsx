import { socialProof } from '../../content';
import { LogoMark } from '../illustrations/LogoMark';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

export function SocialProof() {
  // Logos are duplicated so the marquee can loop seamlessly; the copy is hidden from assistive tech.
  const loop = [...socialProof.logos, ...socialProof.logos];

  return (
    <section aria-labelledby="proof-heading" className="border-y border-border bg-surface/60 py-12">
      <Container>
        <h2 id="proof-heading" className="text-center font-sans text-sm font-medium text-muted">
          {socialProof.heading}
        </h2>

        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <ul className="flex w-max animate-marquee gap-12 motion-reduce:animate-none">
            {loop.map((name, i) => (
              <li
                key={`${name}-${i}`}
                aria-hidden={i >= socialProof.logos.length}
                className="flex items-center gap-2.5 whitespace-nowrap font-display text-lg font-bold tracking-tight text-muted"
              >
                <LogoMark index={i} />
                {name}
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-10 grid gap-6 text-center sm:grid-cols-3">
          {socialProof.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="text-gradient font-display text-3xl font-extrabold">{stat.value}</dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
