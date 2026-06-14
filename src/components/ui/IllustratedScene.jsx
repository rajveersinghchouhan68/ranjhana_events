import { motion } from 'framer-motion';
import { useScroll } from '../../context/ScrollContext';
import IllustratedElephant from './illustrations/IllustratedElephant';
import IllustratedPeacock from './illustrations/IllustratedPeacock';

export default function IllustratedScene() {
  const { progress, section } = useScroll();
  const opacity = Math.max(0, 1 - progress * 4);
  const openProgress = Math.min(1, progress * 6);
  const panelOpen = openProgress * 28;

  if (section > 2) return null;

  return (
    <motion.div
      className="illustrated-scene"
      style={{ opacity, pointerEvents: 'none' }}
    >
      <div className="illustrated-scene__sky" />
      <div className="illustrated-scene__glow" />

      <motion.div
        className="illustrated-scene__palace-wrap"
        style={{ y: openProgress * -40, scale: 1 + openProgress * 0.05 }}
      >
        <img
          src="/assets/palace-scene.png"
          alt=""
          className="illustrated-scene__palace"
          aria-hidden="true"
        />
        <div className="illustrated-scene__palace-tint" />
      </motion.div>

      <motion.div
        className="illustrated-scene__panel illustrated-scene__panel--left"
        style={{ transform: `translateY(-50%) perspective(900px) rotateY(${panelOpen}deg)` }}
      />
      <motion.div
        className="illustrated-scene__panel illustrated-scene__panel--right"
        style={{ transform: `translateY(-50%) perspective(900px) rotateY(${-panelOpen}deg)` }}
      />

      <motion.div
        className="illustrated-scene__arch"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.img
          src="/assets/dancers-frame.png"
          alt=""
          className="illustrated-scene__arch-img"
          aria-hidden="true"
          animate={{ rotate: [0, 0.5, 0, -0.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <IllustratedElephant side="left" />
      <IllustratedElephant side="right" />
      <IllustratedPeacock />

      <div className="illustrated-scene__petals" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="floating-petal"
            style={{
              '--x': `${10 + (i * 5) % 80}%`,
              '--delay': `${i * 0.4}s`,
              '--dur': `${6 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="illustrated-scene__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity: Math.max(0, 1 - openProgress * 1.5) }}
      >
        <span className="illustrated-scene__ganesha">ॐ</span>
        <p className="illustrated-scene__pre">Beginning of Forever</p>
        <h1 className="illustrated-scene__title">RAANJHANA EVENTS</h1>
        <p className="illustrated-scene__tagline">
          Luxury Wedding Planners &amp; Destination Celebrations
        </p>
        <div className="illustrated-scene__divider" />
        <p className="illustrated-scene__hint">Scroll to open the royal invitation</p>
      </motion.div>
    </motion.div>
  );
}
