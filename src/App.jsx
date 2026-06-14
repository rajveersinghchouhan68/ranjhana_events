import { useRef, useState, useEffect, Suspense } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollContext } from './context/ScrollContext';
import Experience from './components/canvas/Experience';
import Loader from './components/ui/Loader';
import Nav from './components/ui/Nav';
import PalaceScrollTrack from './components/palace/PalaceScrollTrack';
import PalaceExperience from './components/palace/PalaceExperience';
import RoyalInvitationScene from './components/palace/RoyalInvitationScene';
import ErrorBoundary from './components/ErrorBoundary';

gsap.registerPlugin(ScrollTrigger);

function syncPalaceScroll(scrollY, mounted, setScroll, mainEl) {
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

  if (mounted) {
    setScroll((s) => ({
      ...s,
      progress,
      section,
      sectionProgress,
      heroProgress,
    }));
  }
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scroll, setScroll] = useState({
    progress: 0,
    section: 0,
    heroProgress: 0,
    sectionProgress: 0,
  });
  const mainRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let scrollSyncId = null;

    const finishLoading = () => {
      if (mounted) setLoading(false);
    };

    const timer = setTimeout(finishLoading, 1800);

    const initScroll = () => {
      try {
        const lenis = new Lenis({
          duration: 2.1,
          easing: (t) => 1 - Math.pow(1 - t, 4),
          smoothWheel: true,
          wheelMultiplier: 0.75,
          touchMultiplier: 1.15,
          syncTouch: true,
        });
        lenisRef.current = lenis;

        let pendingScroll = 0;

        const flushScroll = () => {
          scrollSyncId = null;
          ScrollTrigger.update();
          syncPalaceScroll(pendingScroll, mounted, setScroll, mainRef.current);
        };

        lenis.on('scroll', (e) => {
          pendingScroll = e.scroll;
          if (!scrollSyncId) {
            scrollSyncId = requestAnimationFrame(flushScroll);
          }
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        ScrollTrigger.refresh();
        syncPalaceScroll(lenis.scroll, mounted, setScroll, mainRef.current);
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
      if (scrollSyncId) cancelAnimationFrame(scrollSyncId);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  const showHero = scroll.section === 0;
  const canvasOpacity =
    scroll.section === 0 ? Math.max(0, 0.28 - scroll.heroProgress * 0.3) : 0;

  return (
    <ErrorBoundary>
      <ScrollContext.Provider value={scroll}>
        {loading && <Loader />}
        <div className="canvas-wrap" style={{ opacity: canvasOpacity }}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </div>
        <Nav hidden={scroll.section === 0 && scroll.heroProgress < 0.35} />
        {showHero && <RoyalInvitationScene />}
        <PalaceExperience />
        <main ref={mainRef} className="scroll-main scroll-main--palace">
          <PalaceScrollTrack />
        </main>
      </ScrollContext.Provider>
    </ErrorBoundary>
  );
}
