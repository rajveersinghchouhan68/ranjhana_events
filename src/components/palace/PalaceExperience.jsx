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

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export default function PalaceExperience() {
  const { section } = useScroll();
  const Scene = SCENES[section];

  if (!Scene) return null;

  return (
    <div className="palace-world">
      <AnimatePresence mode="wait">
        <motion.div key={section} className="palace-world__scene" {...fade}>
          <Scene />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
