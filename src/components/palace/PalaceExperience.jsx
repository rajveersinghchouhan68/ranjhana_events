import { useScroll, layerOpacity } from '../../context/ScrollContext';
import CourtyardScene from './scenes/CourtyardScene';
import WeddingVenueScene from './scenes/WeddingVenueScene';
import GalleryCorridorScene from './scenes/GalleryCorridorScene';
import PalaceRoomsScene from './scenes/PalaceRoomsScene';
import SunsetInviteScene from './scenes/SunsetInviteScene';

const LAYERS = [
  { phase: 'courtyard', Component: CourtyardScene },
  { phase: 'venue', Component: WeddingVenueScene },
  { phase: 'gallery', Component: GalleryCorridorScene },
  { phase: 'rooms', Component: PalaceRoomsScene },
  { phase: 'sunset', Component: SunsetInviteScene },
];

function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

function smoothstep(edge0, edge1, x) {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

function courtyardReveal(section, heroProgress, progress) {
  if (section === 0) {
    if (heroProgress < 0.66) return 0;
    return smoothstep(0.66, 0.86, heroProgress);
  }
  return layerOpacity(progress, 'courtyard');
}

function layerVisibility(phase, progress, section, heroProgress) {
  if (phase === 'courtyard') {
    return courtyardReveal(section, heroProgress, progress);
  }
  if (section === 0) return 0;
  return layerOpacity(progress, phase);
}

export default function PalaceExperience() {
  const { progress, section, heroProgress } = useScroll();

  const earlyReveal = section === 0 && heroProgress >= 0.66;
  const revealOpacity = earlyReveal
    ? smoothstep(0.66, 0.86, heroProgress)
    : 1;

  return (
    <div className="palace-world" style={{ opacity: revealOpacity }}>
      {LAYERS.map(({ phase, Component }) => {
        const opacity = layerVisibility(phase, progress, section, heroProgress);
        const active = opacity > 0.02;

        return (
          <div
            key={phase}
            className="palace-world__scene"
            style={{
              opacity,
              visibility: active ? 'visible' : 'hidden',
              pointerEvents: active ? 'auto' : 'none',
            }}
            aria-hidden={!active}
          >
            <Component />
          </div>
        );
      })}
    </div>
  );
}
