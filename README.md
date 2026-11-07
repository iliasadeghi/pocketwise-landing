# Pocketwise landing page

A static, frontend-only landing page for **Pocketwise**, a (fictional) budgeting app for university students.
Built with Vite, React, TypeScript, Tailwind CSS, Framer Motion and lucide-react. No backend, database or API.

## Setup

Requires Node.js 18+ (20 LTS or newer recommended).

```bash
npm install
```

## Run

```bash
npm run dev
```

Opens on http://localhost:5173.

## Build

```bash
npm run build
```

Outputs a static site to `dist/`. Preview the production build locally with `npm run preview`.

Other scripts: `npm run lint` (ESLint), `npm run format` (Prettier).

## Project structure

```
src/
  content.ts              all page copy, links, prices and FAQs
  index.css               design tokens (CSS variables) + base styles
  App.tsx                 page composition (section order)
  components/
    ui/                   Button, Card, Container, Section, Accordion, Input, Badge, Reveal, ThemeToggle, Logo
    layout/               Navbar, MobileMenu, Footer, SkipLink, BackToTop
    sections/             Hero, SocialProof, Features, HowItWorks, Showcase, Testimonials, Pricing, Faq, FinalCta
    illustrations/        Phone and app-window mockups built from markup (no image files)
    WaitlistForm.tsx      email form with validation, loading, success and error states
  hooks/                  useTheme, useActiveSection, useScrolled
  lib/                    cn, validateEmail, submitWaitlist
public/                   favicon, Open Graph image, robots.txt, sitemap.xml
tailwind.config.ts        maps the CSS variables to Tailwind colors, type scale, spacing, radius, shadows
```

## Editing content

All text lives in **`src/content.ts`**: headlines, nav links, features, steps, testimonials, pricing tiers, FAQs and footer links.
Feature icons are [lucide](https://lucide.dev/icons) components imported at the top of that file.

## Editing theme colors

Colors are CSS variables in **`src/index.css`**, defined once for light (`:root`) and once for dark (`.dark`).
Values are space-separated RGB channels (e.g. `--primary: 79 70 229;`) so Tailwind opacity modifiers like `bg-primary/10` work.

- `--primary` / `--primary-strong` / `--violet`: brand color and gradient
- `--accent`: the mint "money" highlight
- `--bg`, `--surface`, `--surface-2`, `--border`, `--fg`, `--muted`: neutrals
- `--success`, `--danger`: form feedback

Keep text colors at 4.5:1 contrast or more against `--bg` and `--surface` in both themes.
Fonts (Inter and Plus Jakarta Sans) are self-hosted via `@fontsource-variable` and set in `tailwind.config.ts` under `fontFamily`.

## Connecting the waitlist form

The form never sends data anywhere. `src/lib/submitWaitlist.ts` simulates a request. Replace its body with a call to your
provider (Formspree, Netlify Forms, Mailchimp, ConvertKit, your own API…). The TODO comment in that file shows the shape.
For testing, any address ending in `@example.com` shows the error state.

## Before going live

- Replace `https://pocketwise.example.com` in `index.html`, `public/robots.txt` and `public/sitemap.xml` with your domain.
- Swap `public/og-image.svg` for a 1200×630 PNG or JPG: most social networks don't render SVG previews.
- Update the social links in `footer.socials` (in `content.ts`) and the contact email in `site.email`.

## Deploy

The build is a plain static folder (`dist/`), so any static host works.

### Netlify

Connect the repo, then set the build command to `npm run build` and the publish directory to `dist`.
Or drag-and-drop the `dist` folder into the Netlify dashboard.

### Vercel

Import the repo. Vercel detects Vite automatically (build: `npm run build`, output: `dist`).

### GitHub Pages

For a project site at `https://<user>.github.io/<repo>/`, build with the repo name as the base path:

```bash
npx vite build --base=/<repo>/
```

Then publish `dist/`, for example with the `gh-pages` package (`npx gh-pages -d dist`) or a GitHub Actions workflow
using `actions/upload-pages-artifact` and `actions/deploy-pages`. For a user site (`<user>.github.io`) or a custom domain,
the default `npm run build` works as is.
