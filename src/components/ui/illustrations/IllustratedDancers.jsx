import { motion } from 'framer-motion';

export default function IllustratedDancers({ className = '' }) {
  return (
    <div className={`illustrated-dancers ${className}`}>
      <motion.div
        className="illustrated-dancers__layer"
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src="/assets/dancers-frame.png"
          alt=""
          className="illustrated-dancers__img"
          aria-hidden="true"
        />
      </motion.div>

      <div className="illustrated-dancers__svg-fallback" aria-hidden="true">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className={`dancer dancer--${i}`}
            animate={{
              rotate: [0, i === 0 ? 8 : -8, 0],
              y: [0, -4, 0],
            }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          >
            <svg viewBox="0 0 120 200" fill="none">
              <ellipse cx="60" cy="40" rx="14" ry="16" fill="#5c3d2e" />
              <path d="M46 50 Q60 65 74 50" fill="#f4a0a0" />
              <path d="M35 55 Q20 90 30 130 Q35 150 50 140" fill="#f4a0a0" opacity="0.7" />
              <path d="M85 55 Q100 90 90 130 Q85 150 70 140" fill="#f4a0a0" opacity="0.7" />
              <motion.path
                d="M40 60 Q15 80 20 110"
                stroke="#e8a0b0"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
                animate={{ d: ['M40 60 Q15 80 20 110', 'M40 60 Q10 70 18 100', 'M40 60 Q15 80 20 110'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <path d="M45 55 L35 170 Q60 185 85 170 L75 55" fill={i === 0 ? '#e85d04' : '#f48c06'} />
              <path d="M50 55 L42 120 Q60 130 78 120 L70 55" fill={i === 0 ? '#ffba08' : '#ffd60a'} />
              <circle cx="52" cy="35" r="3" fill="#d4af37" />
              <circle cx="68" cy="35" r="3" fill="#d4af37" />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
