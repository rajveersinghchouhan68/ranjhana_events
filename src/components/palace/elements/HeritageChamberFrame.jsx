import { motion, AnimatePresence } from 'framer-motion';
import HeritagePole from './HeritagePole';
import ElephantProcession from './ElephantProcession';

export default function HeritageChamberFrame({ image, alt, focus = 'center center', elephantProgress = 0 }) {
  return (
    <div className="heritage-chamber__frame">
      <ElephantProcession progress={elephantProgress} />

      <div className="heritage-chamber__poles-row">
        <HeritagePole />

        <div className="heritage-chamber__window-wrap">
          <div className="heritage-chamber__window">
            <AnimatePresence mode="wait">
              <motion.img
                key={image}
                src={image}
                alt={alt}
                className="heritage-chamber__photo"
                style={{ objectPosition: focus }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                draggable={false}
                loading="eager"
              />
            </AnimatePresence>
            <div className="heritage-chamber__veil" aria-hidden="true" />
            <div className="heritage-chamber__photo-skirt" aria-hidden="true" />
          </div>
        </div>

        <HeritagePole flip />
      </div>
    </div>
  );
}
