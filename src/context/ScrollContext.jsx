import { createContext, useContext } from 'react';

export const ScrollContext = createContext({
  progress: 0,
  section: 0,
  heroProgress: 0,
  sectionProgress: 0,
});

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
