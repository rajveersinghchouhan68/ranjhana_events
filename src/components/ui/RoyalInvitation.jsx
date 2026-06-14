import { motion } from 'framer-motion';
import { useScroll } from '../../context/ScrollContext';

export default function RoyalInvitation() {
  const { progress, section } = useScroll();
  const opacity = Math.max(0, 1 - progress * 5);
  const openScale = 1 + progress * 0.3;

  if (section > 1) return null;

  return (
    <motion.div
      className="royal-invitation"
      style={{ opacity, pointerEvents: opacity < 0.1 ? 'none' : 'auto' }}
      animate={{ scale: openScale }}
      transition={{ duration: 0.1 }}
    >
      <div className="invitation-frame">
        <div className="invitation-arch" />
        <div className="invitation-elephant invitation-elephant--left" aria-hidden="true">🐘</div>
        <div className="invitation-elephant invitation-elephant--right" aria-hidden="true">🐘</div>
        <div className="invitation-peacock" aria-hidden="true">🦚</div>
        <div className="invitation-cage invitation-cage--left" aria-hidden="true" />
        <div className="invitation-cage invitation-cage--right" aria-hidden="true" />

        <motion.div
          className="invitation-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 1.2 }}
        >
          <div className="invitation-ornament">✦ ❋ ✦</div>
          <h1 className="invitation-title">RAANJHANA EVENTS</h1>
          <p className="invitation-tagline">
            Luxury Wedding Planners &amp; Destination Celebrations
          </p>
          <div className="invitation-divider" />
          <p className="invitation-hint">Scroll to open the royal invitation</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
