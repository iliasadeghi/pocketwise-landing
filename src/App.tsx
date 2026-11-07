import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import { lazy, Suspense } from 'react';
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

// The showcase is the heaviest below-the-fold section, so it ships as its own chunk.
const Showcase = lazy(() => import('./components/sections/Showcase'));

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div id="top" />
        <SkipLink />
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
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
        </main>
        <Footer />
        <BackToTop />
      </MotionConfig>
    </LazyMotion>
  );
}
