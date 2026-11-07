import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { nav } from '../../content';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrolled';
import { cn } from '../../lib/cn';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MobileMenu } from './MobileMenu';

const sectionIds = nav.links.map((l) => l.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(8);
  const active = useActiveSection(sectionIds);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300',
        scrolled || open
          ? 'border-border/70 bg-bg/80 shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-[var(--nav-h)] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'relative inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors hover:text-fg',
                      isActive ? 'text-fg' : 'text-muted',
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3 bottom-1.5 h-0.5 origin-left rounded-full bg-brand-gradient transition-transform duration-300',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <ButtonLink href={nav.cta.href} className="hidden sm:inline-flex">
            {nav.cta.label}
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-xl text-fg transition-colors hover:bg-surface-2 md:hidden"
          >
            {open ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <MobileMenu open={open} active={active} onNavigate={() => setOpen(false)} />
    </header>
  );
}
