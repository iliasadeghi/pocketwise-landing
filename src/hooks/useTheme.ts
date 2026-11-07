import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';

function readTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

/**
 * The initial theme is applied by an inline script in index.html (before paint).
 * This hook keeps React in sync, persists explicit choices, and follows the OS
 * setting until the user picks a theme themselves.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(STORAGE_KEY);
      } catch {
        /* storage blocked */
      }
      if (!saved) setTheme(e.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  /**
   * Switches theme. When `origin` is given and the browser supports View Transitions,
   * the new theme grows out of that point as an expanding circle.
   */
  const toggle = useCallback(
    (origin?: { x: number; y: number }) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage blocked: the choice lasts for this visit only */
      }

      const root = document.documentElement;
      const apply = () => {
        root.classList.toggle('dark', next === 'dark');
        flushSync(() => setTheme(next));
      };

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!origin || reduceMotion || !('startViewTransition' in document)) {
        apply();
        return;
      }

      const { x, y } = origin;
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      // Per-element color transitions would fight the circle, so pause them meanwhile.
      root.classList.add('theme-switching');
      let applied = false;
      const applyOnce = () => {
        if (applied) return;
        applied = true;
        clearTimeout(watchdog);
        apply();
      };
      const transition = document.startViewTransition(applyOnce);
      // An unfocused or throttled page can stall the transition; never leave the theme unchanged.
      const watchdog = setTimeout(() => {
        applyOnce();
        transition.skipTransition();
      }, 600);
      transition.ready
        .then(() => {
          root.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
            {
              duration: 750,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
              pseudoElement: '::view-transition-new(root)',
            },
          );
        })
        .catch(() => {
          /* transition was skipped: the theme is already applied */
        });
      transition.finished.finally(() => root.classList.remove('theme-switching'));
    },
    [theme],
  );

  return { theme, toggle };
}
