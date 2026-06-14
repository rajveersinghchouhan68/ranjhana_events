import { useRef, useState, useEffect, Suspense } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollContext } from './context/ScrollContext';
import Experience from './components/canvas/Experience';
import Loader from './components/ui/Loader';
import Nav from './components/ui/Nav';
import RoyalInvitationScene from './components/ui/RoyalInvitationScene';
import ScrollSections from './components/sections/ScrollSections';
import ErrorBoundary from './components/ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scroll, setScroll] = useState({ progress: 0, section: 0, heroProgress: 0 });
  const mainRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    let triggers = [];
    let mounted = true;

    const finishLoading = () => {
      if (mounted) setLoading(false);
    };

    const timer = setTimeout(finishLoading, 1800);

    const initScroll = () => {
      try {
        const lenis = new Lenis({
          duration: 1.6,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        lenisRef.current = lenis;

        lenis.on('scroll', ScrollTrigger.update);

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        const hero = document.getElementById('hero');
        if (hero) {
          triggers.push(
            ScrollTrigger.create({
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.3,
              onUpdate: (self) => {
                if (mounted) setScroll((s) => ({ ...s, heroProgress: self.progress }));
              },
            })
          );
        }

        if (mainRef.current) {
          triggers.push(
            ScrollTrigger.create({
              trigger: mainRef.current,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.5,
              onUpdate: (self) => {
                if (mounted) setScroll((s) => ({ ...s, progress: self.progress }));
              },
            })
          );
        }

        const panels = document.querySelectorAll('.scroll-panel[data-scene]');
        panels.forEach((panel, index) => {
          triggers.push(
            ScrollTrigger.create({
              trigger: panel,
              start: 'top 60%',
              end: 'bottom 40%',
              onEnter: () => mounted && setScroll((s) => ({ ...s, section: index })),
              onEnterBack: () => mounted && setScroll((s) => ({ ...s, section: index })),
            })
          );
        });

        ScrollTrigger.refresh();
      } catch (err) {
        console.error('Scroll init error:', err);
        finishLoading();
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(initScroll);
    });

    return () => {
      mounted = false;
      clearTimeout(timer);
      triggers.forEach((t) => t.kill());
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  const showHero = scroll.section === 0;
  const canvasOpacity = scroll.section === 0 ? Math.max(0.2, 1 - scroll.heroProgress * 1.2) : 0;

  return (
    <ErrorBoundary>
      <ScrollContext.Provider value={scroll}>
        {loading && <Loader />}
        <div className="canvas-wrap" style={{ opacity: canvasOpacity }}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </div>
        <Nav />
        {showHero && <RoyalInvitationScene />}
        <main ref={mainRef} className="scroll-main">
          <ScrollSections />
        </main>
      </ScrollContext.Provider>
    </ErrorBoundary>
  );
}
