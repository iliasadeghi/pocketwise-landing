import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { lazy, Suspense, useEffect, useRef } from 'react';
import { BackToTop } from './components/layout/BackToTop';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { SkipLink } from './components/layout/SkipLink';
import { CampusLife } from './components/sections/CampusLife';
import { Faq } from './components/sections/Faq';
import { Features } from './components/sections/Features';
import { FinalCta } from './components/sections/FinalCta';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Pricing } from './components/sections/Pricing';
import { SocialProof } from './components/sections/SocialProof';
import { Reviews } from './components/sections/Reviews';
import { Testimonials } from './components/sections/Testimonials';
import { site } from './content';
import { useRoute, type Route } from './hooks/useRoute';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { privacyPolicy } from './privacy';

// The showcase is the heaviest below-the-fold section, so it ships as its own chunk.
const Showcase = lazy(() => import('./components/sections/Showcase'));

function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <CampusLife />
      <Suspense fallback={<div className="min-h-[48rem]" aria-hidden="true" />}>
        <Showcase />
      </Suspense>
      <Testimonials />
      <Reviews />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}

/** Keeps scroll position, focus and the tab title in step with the page that is showing. */
function useRouteEffects(route: Route) {
  const previous = useRef<Route>(route);

  useEffect(() => {
    const from = previous.current;
    previous.current = route;

    if (route === 'privacy') {
      const homeTitle = document.title;
      document.title = `${privacyPolicy.title} | ${site.name}`;
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.getElementById('main')?.focus({ preventScroll: true });
      return () => {
        document.title = homeTitle;
      };
    }

    // Back from the policy: the section the link points at was not on screen when the
    // hash changed, so the browser could not scroll to it. Do it now.
    if (from === 'privacy') {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [route]);
}

export default function App() {
  const route = useRoute();
  useRouteEffects(route);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div id="top" />
        <SkipLink />
        {/* Keyed so the nav's active-section tracking restarts when the page changes. */}
        <Navbar key={route} />
        <main id="main" tabIndex={-1} className="outline-none">
          {route === 'privacy' ? <PrivacyPolicy /> : <Home />}
        </main>
        <Footer />
        <BackToTop />
      </MotionConfig>
    </LazyMotion>
  );
}
