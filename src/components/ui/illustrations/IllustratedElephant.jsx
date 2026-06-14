import { motion } from 'framer-motion';

export default function IllustratedElephant({ side = 'left', className = '' }) {
  const flip = side === 'right' ? -1 : 1;

  return (
    <motion.div
      className={`illustrated-elephant illustrated-elephant--${side} ${className}`}
      style={{ scaleX: flip }}
      animate={{ y: [0, -6, 0], rotate: [0, side === 'left' ? 2 : -2, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="100" cy="130" rx="55" ry="35" fill="#4a5568" />
        <ellipse cx="100" cy="95" rx="42" ry="38" fill="#5a6578" />
        <motion.path
          d="M85 75 Q60 90 55 120 Q52 135 65 128"
          stroke="#5a6578"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
          animate={{ d: [
            'M85 75 Q60 90 55 120 Q52 135 65 128',
            'M85 75 Q55 100 50 115 Q48 125 62 120',
            'M85 75 Q60 90 55 120 Q52 135 65 128',
          ]}}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <ellipse cx="72" cy="82" rx="18" ry="22" fill="#4a5568" />
        <ellipse cx="128" cy="82" rx="18" ry="22" fill="#4a5568" />
        <circle cx="88" cy="88" r="4" fill="#2a2a2a" />
        <path d="M60 55 L75 45 L90 50 L100 42 L110 50 L125 45 L140 55" fill="#c41e3a" />
        <path d="M65 58 Q100 35 135 58" fill="#d4af37" opacity="0.9" />
        <circle cx="100" cy="48" r="8" fill="#f0d78c" />
        <path d="M70 60 L75 75 M130 60 L125 75" stroke="#d4af37" strokeWidth="3" />
        <rect x="75" y="100" width="50" height="30" rx="4" fill="#c41e3a" />
        <path d="M75 100 Q100 115 125 100" fill="#8b0000" />
        <circle cx="85" cy="108" r="4" fill="#f0d78c" />
        <circle cx="100" cy="112" r="5" fill="#f0d78c" />
        <circle cx="115" cy="108" r="4" fill="#f0d78c" />
      </svg>
    </motion.div>
  );
}
