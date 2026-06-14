import { motion } from 'framer-motion';

export default function WindFlowers({ side, intensity = 0 }) {
  const sway = 4 + intensity * 6;
  return (
    <motion.div
      className={`wind-flowers wind-flowers--${side}`}
      animate={{ rotate: [0, sway, 0, -sway, 0] }}
      transition={{ duration: 5 + intensity * 2, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="wind-flowers__bloom" style={{ '--i': i }} />
      ))}
    </motion.div>
  );
}
