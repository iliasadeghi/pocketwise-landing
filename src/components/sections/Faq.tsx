import { faq, site } from '../../content';
import { Accordion } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function Faq() {
  return (
    <Section id="faq" eyebrow={faq.eyebrow} title={faq.title}>
      <Reveal className="mx-auto max-w-3xl">
        <Accordion items={faq.items} />
        <p className="mt-8 text-center text-muted">
          Still curious?{' '}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Email the team
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
