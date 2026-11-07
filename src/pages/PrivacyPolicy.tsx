import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import { Container } from '../components/ui/Container';
import { privacyPolicy } from '../privacy';

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Turns `[label](url)` pieces of a string into links. Everything else stays plain text. */
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(linkPattern)) {
    const [whole, label = '', href = ''] = match;
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    const external = href.startsWith('http');
    nodes.push(
      <a
        key={start}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="font-medium text-primary underline underline-offset-4 hover:text-primary-strong"
      >
        {label}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>,
    );
    last = start + whole.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** In-page jump. A plain `#id` link would change the URL hash and leave this page. */
function jumpTo(id: string) {
  document.getElementById(id)?.scrollIntoView();
}

export function PrivacyPolicy() {
  const { eyebrow, title, updated, intro, sections } = privacyPolicy;

  return (
    <article aria-labelledby="privacy-heading" className="pb-section pt-10 sm:pt-14">
      <Container>
        <div className="mx-auto max-w-3xl">
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-medium text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </a>

          <header className="mt-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
            <h1 id="privacy-heading" className="text-display-lg font-bold">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
            <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
          </header>

          <nav
            aria-label="On this page"
            className="mt-10 rounded-2xl border border-border bg-surface p-5 sm:p-6"
          >
            <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-fg">
              On this page
            </h2>
            <ol className="mt-3 grid gap-x-8 sm:grid-cols-2">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => jumpTo(section.id)}
                    className="inline-flex min-h-11 w-full items-center gap-2 rounded-md text-left text-muted transition-colors hover:text-primary"
                  >
                    <span className="w-6 shrink-0 text-sm tabular-nums text-muted/70">
                      {i + 1}.
                    </span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            {sections.map((section, i) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
                <h2 id={`${section.id}-heading`} className="text-2xl font-bold">
                  <span className="mr-2 text-muted/70">{i + 1}.</span>
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-muted">
                  {section.blocks.map((block, j) =>
                    block.type === 'p' ? (
                      <p key={j}>{renderInline(block.text)}</p>
                    ) : (
                      <ul key={j} className="list-disc space-y-2 pl-6 marker:text-primary">
                        {block.items.map((item) => (
                          <li key={item}>{renderInline(item)}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
