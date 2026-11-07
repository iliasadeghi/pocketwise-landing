import { footer } from '../../content';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

// lucide-react no longer ships brand marks, so the social icons are inline SVG paths.
const socialPaths: Record<(typeof footer.socials)[number]['icon'], string> = {
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z',
  tiktok:
    'M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-1.8-2.5V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z',
  x: 'M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.5l11.2 14.5z',
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-muted">{footer.tagline}</p>
            <ul className="mt-5 flex gap-2" aria-label="Social media">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={socialPaths[s.icon]} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-fg">
                {col.title}
              </h2>
              <ul className="mt-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-11 items-center rounded-md text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{footer.disclaimer}</p>
        </div>
      </Container>
    </footer>
  );
}
