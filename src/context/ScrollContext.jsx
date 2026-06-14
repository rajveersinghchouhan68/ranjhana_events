import { createContext, useContext, useSyncExternalStore } from 'react';
import { scrollStore } from '../scrollStore';

export const ScrollContext = createContext(scrollStore.get());

export function ScrollProvider({ children }) {
  const scroll = useSyncExternalStore(
    scrollStore.subscribe,
    scrollStore.get,
    scrollStore.get,
  );

  return (
    <ScrollContext.Provider value={scroll}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}

export const SCENE_PHASES = {
  gate: { start: 0, end: 0.16 },
  courtyard: { start: 0.12, end: 0.32 },
  venue: { start: 0.28, end: 0.48 },
  gallery: { start: 0.44, end: 0.64 },
  rooms: { start: 0.58, end: 0.82 },
  sunset: { start: 0.76, end: 1 },
};

export function phaseProgress(progress, phase) {
  const { start, end } = SCENE_PHASES[phase];
  return Math.max(0, Math.min(1, (progress - start) / (end - start)));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

function smoothstep(edge0, edge1, x) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

/** Crossfade opacity for a palace layer across global scroll progress. */
export function layerOpacity(globalProgress, phase, blend = 0.06) {
  const { start, end } = SCENE_PHASES[phase];
  if (globalProgress < start - blend) return 0;
  if (globalProgress < start + blend) {
    return smoothstep(start - blend, start + blend, globalProgress);
  }
  if (globalProgress > end + blend) return 0;
  if (globalProgress > end - blend) {
    return 1 - smoothstep(end - blend, end + blend, globalProgress);
  }
  return 1;
}
