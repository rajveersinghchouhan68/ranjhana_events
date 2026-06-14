import { motion } from 'framer-motion';

export default function PeacockFeatherSway({ progress = 0 }) {
  return (
    <div className="peacock-sway" aria-hidden="true">
      {['left', 'right'].map((side) => (
        <motion.div
          key={side}
          className={`peacock-sway__fan peacock-sway__fan--${side}`}
          animate={{
            rotate: side === 'left' ? [-2, 4 + progress * 8, -2] : [2, -4 - progress * 8, 2],
            y: [0, -6, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="peacock-sway__eye" />
          <span className="peacock-sway__plume" />
          <span className="peacock-sway__plume peacock-sway__plume--2" />
          <span className="peacock-sway__plume peacock-sway__plume--3" />
        </motion.div>
      ))}
    </div>
  );
}
