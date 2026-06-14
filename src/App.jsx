import { useRef, useState, useEffect, Suspense, useSyncExternalStore } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollProvider } from './context/ScrollContext';
import { scrollStore } from './scrollStore';
import Experience from './components/canvas/Experience';
import Loader from './components/ui/Loader';
import Nav from './components/ui/Nav';
import PalaceScrollTrack from './components/palace/PalaceScrollTrack';
import PalaceExperience from './components/palace/PalaceExperience';
import RoyalInvitationScene from './components/palace/RoyalInvitationScene';
import ErrorBoundary from './components/ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

function syncPalaceScroll(scrollY, mainEl) {
  const panels = document.querySelectorAll('.palace-panel[data-scene]');
  let section = 0;
  let sectionProgress = 0;
  let heroProgress = 0;

  panels.forEach((panel, index) => {
    const top = panel.offsetTop;
    const height = panel.offsetHeight;
    if (height <= 0) return;

    const local = (scrollY - top) / height;
    if (scrollY >= top && scrollY < top + height) {
      section = index;
      sectionProgress = Math.min(1, Math.max(0, local));
    }

    if (panel.id === 'hero') {
      heroProgress = Math.min(1, Math.max(0, local));
    }
  });

  let progress = 0;
  if (mainEl) {
    const max = mainEl.scrollHeight - window.innerHeight;
    progress = max > 0 ? Math.min(1, scrollY / max) : 0;
  }

  scrollStore.set({
    progress,
    section,
    sectionProgress,
    heroProgress,
  });
}

function AppContent() {
  const scroll = useSyncExternalStore(
    scrollStore.subscribe,
    scrollStore.get,
    scrollStore.get,
  );

  const showHero = scroll.section === 0;
  const showCanvas = scroll.section === 0;
  const canvasOpacity =
    scroll.section === 0 ? Math.max(0, 0.28 - scroll.heroProgress * 0.3) : 0;

  return (
    <>
      {showCanvas && (
        <div className="canvas-wrap" style={{ opacity: canvasOpacity }}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </div>
      )}
      <Nav hidden={scroll.section === 0 && scroll.heroProgress < 0.35} />
      {showHero && <RoyalInvitationScene />}
      <PalaceExperience />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const finishLoading = () => {
      if (mounted) setLoading(false);
    };

    const timer = setTimeout(finishLoading, 1800);

    let tick = null;

    const initScroll = () => {
      try {
        const lenis = new Lenis({
          lerp: 0.09,
          smoothWheel: true,
          wheelMultiplier: 0.85,
          touchMultiplier: 1.1,
          syncTouch: true,
          autoRaf: false,
        });
        lenisRef.current = lenis;

        lenis.on('scroll', () => {
          ScrollTrigger.update();
        });

        tick = (time) => {
          lenis.raf(time * 1000);
          syncPalaceScroll(lenis.scroll, mainRef.current);
        };

        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.refresh();
        syncPalaceScroll(lenis.scroll, mainRef.current);
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
      if (tick) gsap.ticker.remove(tick);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return (
    <ErrorBoundary>
      <ScrollProvider>
        {loading && <Loader />}
        <AppContent />
        <main ref={mainRef} className="scroll-main scroll-main--palace">
          <PalaceScrollTrack />
        </main>
      </ScrollProvider>
    </ErrorBoundary>
  );
}
