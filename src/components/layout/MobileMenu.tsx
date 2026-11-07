import { AnimatePresence, m } from 'framer-motion';
import { nav } from '../../content';
import { cn } from '../../lib/cn';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

interface MobileMenuProps {
  open: boolean;
  active: string | null;
  onNavigate: () => void;
}

export function MobileMenu({ open, active, onNavigate }: MobileMenuProps) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <m.nav
          id="mobile-menu"
          aria-label="Mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border-t border-border/70 md:hidden"
        >
          <Container className="pb-6 pt-3">
            <ul className="flex flex-col">
              {nav.links.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={onNavigate}
                      aria-current={isActive ? 'location' : undefined}
                      className={cn(
                        'flex min-h-12 items-center rounded-xl px-3 text-base font-medium transition-colors hover:bg-surface-2',
                        isActive
                          ? 'bg-primary-soft text-primary-strong dark:text-primary'
                          : 'text-fg',
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ButtonLink href={nav.cta.href} onClick={onNavigate} size="lg" className="mt-4 w-full">
              {nav.cta.label}
            </ButtonLink>
          </Container>
        </m.nav>
      )}
    </AnimatePresence>
  );
}
