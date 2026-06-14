import { motion } from 'framer-motion';

export default function IllustratedPeacock({ className = '' }) {
  return (
    <motion.div
      className={`illustrated-peacock ${className}`}
      animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="80" cy="155" rx="25" ry="30" fill="#1a6b6b" />
        <ellipse cx="80" cy="120" rx="18" ry="20" fill="#1a7a7a" />
        <circle cx="74" cy="115" r="3" fill="#111" />
        <path d="M80 105 L80 90" stroke="#d4af37" strokeWidth="2" />
        <circle cx="80" cy="88" r="4" fill="#d4af37" />

        <motion.g
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '80px 130px' }}
        >
          {Array.from({ length: 7 }).map((_, i) => {
            const angle = -90 + (i - 3) * 14;
            const rad = (angle * Math.PI) / 180;
            return (
              <ellipse
                key={i}
                cx={80 + Math.cos(rad) * 35}
                cy={130 + Math.sin(rad) * 45}
                rx="8"
                ry="35"
                fill={i % 2 === 0 ? '#0d5a5a' : '#1a8a8a'}
                transform={`rotate(${angle} ${80 + Math.cos(rad) * 35} ${130 + Math.sin(rad) * 45})`}
                opacity="0.9"
              />
            );
          })}
          <circle cx="80" cy="100" r="45" fill="#0d4d4d" opacity="0.85" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * 360;
            const rad = (a * Math.PI) / 180;
            return (
              <circle
                key={`eye-${i}`}
                cx={80 + Math.cos(rad) * 30}
                cy={100 + Math.sin(rad) * 30}
                r="4"
                fill={i % 3 === 0 ? '#f0d78c' : '#f4b8c1'}
                opacity="0.8"
              />
            );
          })}
        </motion.g>
      </svg>
    </motion.div>
  );
}
