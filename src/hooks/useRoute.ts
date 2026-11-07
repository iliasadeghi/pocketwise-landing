import { useSyncExternalStore } from 'react';

export type Route = 'home' | 'privacy';

/** The site is static and may live under a sub-path, so pages are routed by URL hash. */
export const PRIVACY_HREF = '#/privacy';

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
}

function getRoute(): Route {
  return window.location.hash.replace(/\/$/, '') === PRIVACY_HREF ? 'privacy' : 'home';
}

/** Returns the page that matches the current URL hash. Any other hash is a home-page anchor. */
export function useRoute(): Route {
  return useSyncExternalStore(subscribe, getRoute, () => 'home');
}
