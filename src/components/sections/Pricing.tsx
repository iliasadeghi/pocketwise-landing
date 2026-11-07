import { Check } from 'lucide-react';
import { useState } from 'react';
import { pricing, type PricingTier } from '../../content';
import { cn } from '../../lib/cn';
import { ButtonLink } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

type Billing = 'monthly' | 'yearly';

function formatPrice(tier: PricingTier, billing: Billing) {
  if (tier.customPrice) return { amount: pricing.customPriceLabel, period: '' };
  const value = billing === 'monthly' ? tier.monthly : tier.yearly;
  if (value === 0) return { amount: `${pricing.currency}0`, period: 'forever' };
  return {
    amount: `${pricing.currency}${value.toFixed(2)}`,
    period: billing === 'monthly' ? '/ month' : '/ year',
  };
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly');
  const SecurityIcon = pricing.security.icon;

  return (
    <Section
      id="pricing"
      eyebrow={pricing.eyebrow}
      title={pricing.title}
      subtitle={pricing.subtitle}
      className="bg-surface/60"
    >
      <fieldset className="mx-auto mb-12 flex w-fit rounded-2xl border border-border bg-surface p-1.5 shadow-soft">
        <legend className="sr-only">Billing period</legend>
        {(['monthly', 'yearly'] as const).map((option) => (
          <label
            key={option}
            className={cn(
              'relative inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl px-5 text-sm font-semibold capitalize transition-all has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary',
              billing === option
                ? 'bg-primary text-primary-fg shadow-glow'
                : 'text-muted hover:text-fg',
            )}
          >
            <input
              type="radio"
              name="billing"
              value={option}
              checked={billing === option}
              onChange={() => setBilling(option)}
              className="sr-only"
            />
            {option}
            {option === 'yearly' && (
              <span
                className={cn(
                  'rounded-full px-2 py-0.5 text-xs',
                  billing === 'yearly' ? 'bg-white/20' : 'bg-accent-soft text-accent',
                )}
              >
                {pricing.yearlyNote}
              </span>
            )}
          </label>
        ))}
      </fieldset>

      <ul className="grid items-stretch gap-6 md:grid-cols-3">
        {pricing.tiers.map((tier, i) => {
          const { amount, period } = formatPrice(tier, billing);
          const Icon = tier.icon;
          return (
            <li key={tier.name} className="flex">
              <Reveal delay={i * 0.08} className="flex w-full">
                <div
                  className={cn(
                    'relative flex w-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1',
                    tier.highlighted
                      ? 'border-primary/60 bg-surface shadow-glow ring-1 ring-primary/40 md:-my-3 md:py-10'
                      : 'border-border bg-surface shadow-soft hover:shadow-lifted',
                  )}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow">
                      Most popular
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                  </div>
                  <p className="mt-3 text-muted">{tier.description}</p>
                  <p className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-extrabold tracking-tight">
                      {amount}
                    </span>
                    {period && <span className="text-muted">{period}</span>}
                  </p>
                  <ul className="mb-8 mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href={tier.href}
                    variant={tier.highlighted ? 'primary' : 'secondary'}
                    size="lg"
                    className="w-full"
                  >
                    {tier.cta}
                    <span className="sr-only">: {tier.name} plan</span>
                  </ButtonLink>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-muted">
        <SecurityIcon className="size-4 shrink-0 text-accent" aria-hidden="true" />
        {pricing.security.text}
      </p>
    </Section>
  );
}
