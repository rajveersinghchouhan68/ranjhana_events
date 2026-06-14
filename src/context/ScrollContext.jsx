import { createContext, useContext } from 'react';

export const ScrollContext = createContext({
  progress: 0,
  section: 0,
  heroProgress: 0,
});

export function useScroll() {
  return useContext(ScrollContext);
}

export const SCENE_PHASES = {
  invitation: { start: 0, end: 0.18 },
  opening: { start: 0.12, end: 0.28 },
  courtyard: { start: 0.22, end: 0.42 },
  pathway: { start: 0.38, end: 0.52 },
  palace: { start: 0.48, end: 0.68 },
  gallery: { start: 0.62, end: 0.82 },
  sunset: { start: 0.78, end: 1 },
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
