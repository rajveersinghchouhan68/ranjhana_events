import { AnimatePresence, motion } from 'framer-motion';
import { useScroll } from '../../context/ScrollContext';
import CourtyardScene from './scenes/CourtyardScene';
import WeddingVenueScene from './scenes/WeddingVenueScene';
import GalleryCorridorScene from './scenes/GalleryCorridorScene';
import PalaceRoomsScene from './scenes/PalaceRoomsScene';
import SunsetInviteScene from './scenes/SunsetInviteScene';

const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

export default function PalaceExperience() {
  const { section } = useScroll();

  if (section === 0) return null;

  return (
    <div className="palace-world">
      <AnimatePresence mode="wait">
        {section === 1 && (
          <motion.div key="courtyard" className="palace-world__scene" {...fade}>
            <CourtyardScene />
          </motion.div>
        )}
        {section === 2 && (
          <motion.div key="venue" className="palace-world__scene" {...fade}>
            <WeddingVenueScene />
          </motion.div>
        )}
        {section === 3 && (
          <motion.div key="gallery" className="palace-world__scene" {...fade}>
            <GalleryCorridorScene />
          </motion.div>
        )}
        {section === 4 && (
          <motion.div key="rooms" className="palace-world__scene" {...fade}>
            <PalaceRoomsScene />
          </motion.div>
        )}
        {section === 5 && (
          <motion.div key="sunset" className="palace-world__scene" {...fade}>
            <SunsetInviteScene />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
