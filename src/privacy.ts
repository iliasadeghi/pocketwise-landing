/**
 * Privacy Policy copy. Edit text here; the page layout lives in pages/PrivacyPolicy.tsx.
 * Inline links use [label](url) syntax.
 *
 * Before launch, have this reviewed by someone qualified, and fill in the TODOs below.
 * TODO: add the registered company address and ICO registration number to "Who we are".
 * TODO: list the real email/waitlist provider and hosting provider in "Who we share it with".
 * TODO: update "Cookies and local storage" if you add analytics or any other tracking.
 */
import { site } from './content';

export type PolicyBlock = { type: 'p'; text: string } | { type: 'list'; items: string[] };

export interface PolicySection {
  id: string;
  title: string;
  blocks: PolicyBlock[];
}

export const privacyPolicy = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  updated: '7 November 2026',
  intro:
    'We keep this short and plain. It explains what personal information Pocketwise collects through this website, why, and the choices you have.',
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      blocks: [
        {
          type: 'p',
          text: `${site.name} Ltd (“Pocketwise”, “we”, “us”) runs this website. We are the controller of the personal information described in this policy, which means we decide how and why it is used.`,
        },
        {
          type: 'p',
          text: `You can reach us at [${site.email}](mailto:${site.email}) for anything about your privacy.`,
        },
      ],
    },
    {
      id: 'scope',
      title: 'What this policy covers',
      blocks: [
        {
          type: 'p',
          text: 'This policy covers this website and the early-access waitlist. The Pocketwise app is not live yet. When it launches, it will come with its own privacy notice explaining how bank and spending data is handled, and we will ask for your agreement before connecting any account.',
        },
      ],
    },
    {
      id: 'what-we-collect',
      title: 'What we collect',
      blocks: [
        {
          type: 'list',
          items: [
            'Your email address, if you join the waitlist. This is the only thing the form asks for.',
            'Basic technical data, such as your IP address, browser type and the pages requested. Our hosting provider records this in server logs when you visit.',
            'Anything you choose to send us if you email us, such as your name and the contents of your message.',
          ],
        },
        {
          type: 'p',
          text: 'We do not ask for, and this website does not collect, any bank details, passwords or payment information.',
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and local storage',
      blocks: [
        {
          type: 'p',
          text: 'We do not use advertising or analytics cookies. The site remembers your light or dark theme choice in your browser’s local storage. That value stays on your device and is never sent to us.',
        },
        {
          type: 'p',
          text: 'If we add analytics or any other tracking in future, we will update this policy first and ask for your consent where the law requires it.',
        },
      ],
    },
    {
      id: 'how-we-use-it',
      title: 'How we use it and why',
      blocks: [
        {
          type: 'list',
          items: [
            'To email you about early access and the Pocketwise launch. Our legal basis is your consent, which you give by joining the waitlist.',
            'To keep the website secure and working properly, for example by spotting abuse or errors in server logs. Our legal basis is our legitimate interest in running a safe service.',
            'To reply when you contact us. Our legal basis is our legitimate interest in answering your questions.',
          ],
        },
        {
          type: 'p',
          text: 'We only email you about early access and launch updates. We do not sell your information and we do not use it for advertising.',
        },
      ],
    },
    {
      id: 'sharing',
      title: 'Who we share it with',
      blocks: [
        {
          type: 'p',
          text: 'We use a small number of service providers to run the site and the waitlist, such as website hosting and an email or form service. They act on our instructions, may only use your information to provide their service to us, and are bound by data protection terms.',
        },
        {
          type: 'p',
          text: 'We may also share information where the law requires it, for example in response to a valid request from a regulator or court.',
        },
      ],
    },
    {
      id: 'transfers',
      title: 'Transfers outside the UK',
      blocks: [
        {
          type: 'p',
          text: 'Some of our providers may process data outside the UK. When that happens, we make sure a lawful safeguard is in place, such as a UK adequacy decision or the standard contractual clauses approved for UK use.',
        },
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep it',
      blocks: [
        {
          type: 'p',
          text: 'We keep your waitlist email address until you unsubscribe or ask us to delete it. Once you do, we remove it within 30 days. Server logs are kept by our hosting provider for a short period under its own retention rules.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights',
      blocks: [
        { type: 'p', text: 'Under UK data protection law you have the right to:' },
        {
          type: 'list',
          items: [
            'get a copy of the personal information we hold about you',
            'ask us to correct anything that is wrong',
            'ask us to delete your information',
            'ask us to restrict how we use it, or object to our use of it',
            'receive your information in a portable format',
            'withdraw your consent at any time, for example by using the unsubscribe link in any email we send',
          ],
        },
        {
          type: 'p',
          text: `To use any of these rights, email [${site.email}](mailto:${site.email}). We aim to reply within one month. Withdrawing consent does not affect anything we did before you withdrew it.`,
        },
      ],
    },
    {
      id: 'complaints',
      title: 'Complaints',
      blocks: [
        {
          type: 'p',
          text: 'If you are unhappy with how we have handled your information, please talk to us first so we can put it right. You can also complain to the UK Information Commissioner’s Office at [ico.org.uk/make-a-complaint](https://ico.org.uk/make-a-complaint/) or on 0303 123 1113.',
        },
      ],
    },
    {
      id: 'age',
      title: 'Age',
      blocks: [
        {
          type: 'p',
          text: 'Pocketwise is made for students and is not intended for anyone under 16. If you believe a child has given us their email address, contact us and we will delete it.',
        },
      ],
    },
    {
      id: 'security',
      title: 'Keeping your information safe',
      blocks: [
        {
          type: 'p',
          text: 'The website is served over HTTPS, we limit who can access waitlist data, and we only use providers that take security seriously. No system is perfectly secure, but we work to protect what you share with us.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      blocks: [
        {
          type: 'p',
          text: 'We may update this policy from time to time. The date at the top shows when it last changed. If we make a significant change, we will let waitlist members know by email.',
        },
      ],
    },
  ] satisfies PolicySection[],
};
