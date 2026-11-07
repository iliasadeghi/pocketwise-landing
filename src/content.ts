/**
 * All page copy lives here. Edit text, links, prices and FAQs in this one file.
 * Icons come from lucide-react: https://lucide.dev/icons
 */
import {
  BellRing,
  CalendarClock,
  GraduationCap,
  PiggyBank,
  ShieldCheck,
  Split,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

export interface Link {
  label: string;
  href: string;
}

export const site = {
  name: 'Pocketwise',
  url: 'https://pocketwise.example.com',
  email: 'hello@pocketwise.example.com',
};

export const nav = {
  links: [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ] satisfies Link[],
  cta: { label: 'Join waitlist', href: '#join' } satisfies Link,
};

export const hero = {
  badge: 'Early access opens January 2027',
  titleLead: 'Know exactly what you can',
  titleHighlight: 'spend this week.',
  subtitle:
    'Pocketwise turns your student loan, part-time pay and rent into one honest number: your weekly safe-to-spend. No spreadsheets, no guilt, no surprise overdrafts in week ten.',
  formLabel: 'Your email',
  submitLabel: 'Get early access',
  secondaryCta: { label: 'See how it works', href: '#how-it-works' } satisfies Link,
  note: 'Free for students. No spam, unsubscribe anytime.',
  proof: 'Joined by 38,000+ students',
};

export const socialProof = {
  heading: 'Students from 140+ campuses are already on the list',
  logos: [
    'Northbridge University',
    'Halden College',
    'St. Aurel’s',
    'Westmoor Tech',
    'Kingsbay University',
    'Elmfield Institute',
  ],
  stats: [
    { value: '38,000+', label: 'students on the waitlist' },
    { value: '£412', label: 'average saved per term in beta' },
    { value: '4.9 / 5', label: 'beta tester rating' },
  ],
};

export type FeatureArtId = 'safe' | 'term' | 'split' | 'nudge' | 'pots';

export interface Feature {
  icon: LucideIcon;
  /** Picks the illustration drawn in the card (see components/illustrations/FeatureArt.tsx). */
  art: FeatureArtId;
  title: string;
  body: string;
  /** A "wide" card spans two columns in the bento grid. Use it on the first item only. */
  wide?: boolean;
}

export const features = {
  eyebrow: 'Features',
  title: 'Budgeting that works the way student money actually arrives',
  subtitle:
    'Loans land three times a year. Shifts change every week. Pocketwise smooths it all into something you can live on.',
  items: [
    {
      icon: Wallet,
      art: 'safe',
      title: 'Weekly safe-to-spend',
      body: 'We spread your loan instalments across the whole term and subtract rent, bills and savings, so you see one number you can trust every Monday.',
      wide: true,
    },
    {
      icon: CalendarClock,
      art: 'term',
      title: 'Term-aware planning',
      body: 'Knows when your next instalment lands and warns you weeks before you run short.',
    },
    {
      icon: Split,
      art: 'split',
      title: 'Split with housemates',
      body: 'Share bills, track who owes what, and settle up without the awkward group chat.',
    },
    {
      icon: BellRing,
      art: 'nudge',
      title: 'Gentle nudges',
      body: 'Friendly alerts when a subscription renews or a night out tips you over.',
    },
    {
      icon: PiggyBank,
      art: 'pots',
      title: 'Savings pots',
      body: 'Goals for a summer trip or a new laptop that fill up from what’s left each week.',
    },
  ] satisfies Feature[],
};

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'Up and running before your next lecture',
  steps: [
    {
      title: 'Connect your accounts',
      body: 'Link your bank securely through Open Banking. Read-only, so we can see your balance but never move your money.',
    },
    {
      title: 'Add your term dates',
      body: 'Tell us when your loan lands and when rent is due. We pre-fill dates for most universities.',
    },
    {
      title: 'Spend with confidence',
      body: 'Check your weekly number, tap to log cash, and let Pocketwise handle the maths.',
    },
  ],
};

export interface CampusMoment {
  /** Picks the illustrated scene (see components/illustrations/Scenes.tsx). */
  scene: 'study' | 'cafe' | 'bus' | 'house';
  title: string;
  body: string;
}

export const campusLife = {
  eyebrow: 'Made for campus life',
  title: 'Built around the moments that actually cost you money',
  subtitle:
    'From the library at midnight to the 8:15 bus, Pocketwise knows what a student week looks like.',
  items: [
    {
      scene: 'study',
      title: 'Exam-season nights',
      body: 'See what’s left after the textbooks and takeaway runs, before you hit order.',
    },
    {
      scene: 'cafe',
      title: 'The daily coffee',
      body: 'Small spends add up. We show the total, never the guilt trip.',
    },
    {
      scene: 'bus',
      title: 'Commuting costs',
      body: 'Passes and top-ups are planned into your week so they never surprise you.',
    },
    {
      scene: 'house',
      title: 'Shared houses',
      body: 'Split rent, wifi and the big shop four ways in a couple of taps.',
    },
  ] satisfies CampusMoment[],
};

export interface ShowcaseTab {
  /** Picks which mock screen is drawn (see components/illustrations/AppScreen.tsx). */
  id: 'overview' | 'spending' | 'goals';
  label: string;
  title: string;
  body: string;
  bullets: string[];
}

export const showcase = {
  eyebrow: 'Inside the app',
  title: 'Every screen designed for a 30-second check-in',
  subtitle: 'Pick a view to see what Pocketwise looks like day to day.',
  tabs: [
    {
      id: 'overview',
      label: 'Overview',
      title: 'Your week at a glance',
      body: 'One big number, one progress ring, and the three things worth knowing today.',
      bullets: [
        'Safe-to-spend updates in real time',
        'Days until next loan instalment',
        'Upcoming bills',
      ],
    },
    {
      id: 'spending',
      label: 'Spending',
      title: 'See where it really goes',
      body: 'Auto-categorised spending with weekly trends, so you can spot the £4 coffees adding up.',
      bullets: [
        'Smart categories for student life',
        'Week-on-week comparison',
        'Tap any bar to drill in',
      ],
    },
    {
      id: 'goals',
      label: 'Goals',
      title: 'Save without thinking about it',
      body: 'Create pots for anything. Leftover money at the end of each week rolls in automatically.',
      bullets: ['Unlimited savings pots', 'Round-ups on every purchase', 'Celebrate milestones'],
    },
  ] satisfies ShowcaseTab[],
};

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Which illustrated portrait to show (see components/illustrations/Avatar.tsx). */
  avatar: number;
}

export const testimonials = {
  eyebrow: 'Loved in beta',
  title: 'Students who stopped dreading their banking app',
  items: [
    {
      quote:
        'First term ever I didn’t end up living on pasta in December. The weekly number just makes sense.',
      name: 'Amara O.',
      role: '2nd year, Nursing',
      avatar: 0,
    },
    {
      quote:
        'Splitting bills with five housemates used to be chaos. Now it takes one tap and nobody argues.',
      name: 'Jonah K.',
      role: '3rd year, Engineering',
      avatar: 1,
    },
    {
      quote:
        'I work variable shifts at a café. Pocketwise adjusts every week so I always know where I stand.',
      name: 'Priya S.',
      role: '1st year, Economics',
      avatar: 2,
    },
    {
      quote:
        'The nudge before my gym subscription renewed saved me £30 I’d completely forgotten about.',
      name: 'Leo M.',
      role: 'Master’s, Data Science',
      avatar: 3,
    },
    {
      quote:
        'My parents asked how I suddenly got good with money. I just showed them the savings pots.',
      name: 'Hana T.',
      role: '2nd year, Law',
      avatar: 4,
    },
    {
      quote: 'Clean, fast, and it doesn’t make me feel judged. That’s rare for a finance app.',
      name: 'Diego R.',
      role: 'Foundation year, Art & Design',
      avatar: 5,
    },
  ] satisfies Testimonial[],
};

export interface Review {
  name: string;
  role: string;
  /** Which illustrated portrait to show (see components/illustrations/Avatar.tsx). */
  avatar: number;
  rating: 3 | 4 | 5;
  title: string;
  body: string;
  date: string;
  helpful: number;
  verified?: boolean;
}

export const reviews = {
  eyebrow: 'Reviews',
  title: 'Rated 4.9 by the students who tried it first',
  subtitle:
    'Real words from our beta testers, scores included. The good and the “could be better”.',
  score: '4.9',
  count: '2,418',
  recommend: 94,
  /** Share of all ratings per star level; should add up to 100. */
  distribution: [
    { stars: 5, percent: 86 },
    { stars: 4, percent: 11 },
    { stars: 3, percent: 2 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0 },
  ],
  items: [
    {
      name: 'Sofia L.',
      role: '2nd year, Biochemistry',
      avatar: 2,
      rating: 5,
      title: 'Finally, a number I trust',
      body: 'I used to check my balance and panic. Now I open Pocketwise, see £74 for the week and just get on with my life. Nothing else has made money feel this calm.',
      date: 'Oct 21, 2026',
      helpful: 128,
      verified: true,
    },
    {
      name: 'Marcus B.',
      role: '3rd year, Computer Science',
      avatar: 1,
      rating: 5,
      title: 'Bill splitting saved our house',
      body: 'Five of us, one broadband bill, endless awkward messages. The split feature ended all of that. We settle up in seconds and nobody has to be the nagging one.',
      date: 'Oct 17, 2026',
      helpful: 93,
      verified: true,
    },
    {
      name: 'Aisha K.',
      role: '1st year, Psychology',
      avatar: 5,
      rating: 4,
      title: 'Great, would love dark-mode widgets',
      body: 'The weekly budget is brilliant and the nudges are genuinely useful. I’m only taking a star off because I want a home-screen widget. Please add one!',
      date: 'Oct 14, 2026',
      helpful: 61,
      verified: true,
    },
    {
      name: 'Tom W.',
      role: 'Master’s, Architecture',
      avatar: 3,
      rating: 5,
      title: 'Handles irregular pay perfectly',
      body: 'I freelance between lectures so my income is all over the place. Pocketwise recalculates every time something lands and it has never once been wrong.',
      date: 'Oct 9, 2026',
      helpful: 87,
      verified: true,
    },
    {
      name: 'Yuki N.',
      role: 'Exchange student, Design',
      avatar: 4,
      rating: 5,
      title: 'Made moving countries less scary',
      body: 'New city, new bank, new everything. Setting up my term dates took two minutes and I’ve felt in control from week one.',
      date: 'Oct 5, 2026',
      helpful: 54,
      verified: true,
    },
    {
      name: 'Ravi P.',
      role: '2nd year, Medicine',
      avatar: 0,
      rating: 4,
      title: 'Savings pots are addictive',
      body: 'Watching my “Elective abroad” pot fill up each week is oddly satisfying. Would be 5 stars with more pot icons and colours.',
      date: 'Sep 29, 2026',
      helpful: 42,
      verified: true,
    },
    {
      name: 'Chloe D.',
      role: '3rd year, English',
      avatar: 2,
      rating: 5,
      title: 'No judgement, just clarity',
      body: 'Other apps make me feel guilty about a takeaway. This one just says “you’ve got £12 left, enjoy it”. That tone matters more than I expected.',
      date: 'Sep 24, 2026',
      helpful: 76,
      verified: true,
    },
    {
      name: 'Elena G.',
      role: '1st year, Sociology',
      avatar: 5,
      rating: 3,
      title: 'Good start, a few rough edges',
      body: 'The idea is spot on and the core budget works well. A couple of bank connections needed a retry for me, but support fixed it within a day.',
      date: 'Sep 18, 2026',
      helpful: 29,
      verified: true,
    },
  ] satisfies Review[],
};

export interface PricingTier {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  /** Shows `pricing.customPriceLabel` instead of a number. */
  customPrice?: boolean;
  icon: LucideIcon;
}

export const pricing = {
  eyebrow: 'Pricing',
  title: 'Free to start. Cheaper than one takeaway to upgrade.',
  subtitle: 'Every plan includes bank-grade security and a student discount baked in.',
  currency: '£',
  yearlyNote: 'Save 25%',
  tiers: [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      description: 'Everything you need to stop guessing.',
      features: [
        'Weekly safe-to-spend',
        'Connect 1 bank account',
        'Term date planning',
        '2 savings pots',
      ],
      cta: 'Join the waitlist',
      href: '#join',
      icon: GraduationCap,
    },
    {
      name: 'Plus',
      monthly: 2.99,
      yearly: 26.99,
      description: 'For students juggling loans, shifts and housemates.',
      features: [
        'Everything in Free',
        'Unlimited accounts and pots',
        'Bill splitting with housemates',
        'Smart renewal nudges',
        'Spending insights and exports',
      ],
      cta: 'Get early access',
      href: '#join',
      highlighted: true,
      icon: Wallet,
    },
    {
      name: 'Campus',
      monthly: 0,
      yearly: 0,
      description: 'For universities and student unions offering Pocketwise to students.',
      features: [
        'Plus for every student',
        'Money-wellbeing dashboard',
        'Anonymised insights',
        'Dedicated support',
      ],
      cta: 'Talk to us',
      href: `mailto:${site.email}?subject=Pocketwise%20Campus`,
      customPrice: true,
      icon: Users,
    },
  ] satisfies PricingTier[],
  customPriceLabel: 'Custom',
  security: {
    icon: ShieldCheck,
    text: 'FCA-regulated Open Banking partner. Read-only access. Cancel anytime.',
  },
};

export const faq = {
  eyebrow: 'FAQ',
  title: 'Questions, answered',
  items: [
    {
      q: 'Is Pocketwise really free for students?',
      a: 'Yes. The Free plan is free forever and covers the core weekly budget. Plus adds extras like bill splitting and unlimited pots for £2.99 a month.',
    },
    {
      q: 'Is it safe to connect my bank?',
      a: 'We use regulated Open Banking providers with read-only access. We can see balances and transactions to build your budget, but we can never move money or see your login details.',
    },
    {
      q: 'Which banks are supported?',
      a: 'All major UK high-street and app-based banks at launch, including student accounts. You can also add cash and accounts manually.',
    },
    {
      q: 'What if my income changes every week?',
      a: 'That’s exactly what Pocketwise is built for. Your safe-to-spend recalculates whenever new pay lands, so irregular shifts are handled automatically.',
    },
    {
      q: 'When will I get access?',
      a: 'Early access rolls out in waves from January 2027. Waitlist members get in first, in sign-up order.',
    },
    {
      q: 'Can I delete my data?',
      a: 'Anytime, in one tap from settings. Disconnecting a bank removes access immediately, and deleting your account erases your data within 30 days.',
    },
  ],
};

export const finalCta = {
  title: 'Make this the term money stops being stressful.',
  subtitle: 'Join 38,000+ students getting early access to Pocketwise.',
  formLabel: 'Your email',
  submitLabel: 'Join the waitlist',
  note: 'We’ll only email you about early access.',
};

export const footer = {
  tagline: 'The budgeting app built for student life.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Campus life', href: '#campus-life' },
        { label: 'Inside the app', href: '#showcase' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Reviews', href: '#reviews' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: `mailto:${site.email}` },
      ],
    },
  ] satisfies Array<{ title: string; links: Link[] }>,
  // Replace with your real profile URLs.
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'TikTok', href: 'https://www.tiktok.com/', icon: 'tiktok' },
    { label: 'X (Twitter)', href: 'https://x.com/', icon: 'x' },
  ] as const,
  copyright: `© ${new Date().getFullYear()} Pocketwise Ltd. All rights reserved.`,
  disclaimer: 'Pocketwise is a concept product. Figures shown are illustrative.',
};
