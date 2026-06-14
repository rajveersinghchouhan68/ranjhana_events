import { AnimatePresence, motion } from 'framer-motion';
import { useScroll } from '../../context/ScrollContext';
import CourtyardScene from './scenes/CourtyardScene';
import WeddingVenueScene from './scenes/WeddingVenueScene';
import GalleryCorridorScene from './scenes/GalleryCorridorScene';
import PalaceRoomsScene from './scenes/PalaceRoomsScene';
import SunsetInviteScene from './scenes/SunsetInviteScene';

const SCENES = {
  1: CourtyardScene,
  2: WeddingVenueScene,
  3: GalleryCorridorScene,
  4: PalaceRoomsScene,
  5: SunsetInviteScene,
};

export default function PalaceExperience() {
  const { section, heroProgress } = useScroll();

  let activeSection = section;
  if (section === 0 && heroProgress >= 0.68) {
    activeSection = 1;
  }

  const Scene = SCENES[activeSection];
  if (!Scene) return null;

  const earlyReveal = section === 0 && heroProgress >= 0.68;
  const revealOpacity = earlyReveal
    ? Math.min(1, (heroProgress - 0.68) / 0.28)
    : 1;

  return (
    <div className="palace-world" style={{ opacity: revealOpacity }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={activeSection}
          className="palace-world__scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Scene />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
