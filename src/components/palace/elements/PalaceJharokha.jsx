export default function PalaceJharokha({ accent = '#c9a227' }) {
  return (
    <svg
      viewBox="0 0 340 420"
      className="palace-jharokha"
      aria-hidden="true"
      style={{ '--accent': accent }}
    >
      <defs>
        <linearGradient id="jharokha-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d060" />
          <stop offset="50%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
        <clipPath id="jharokha-window">
          <path d="M40 80 Q170 20 300 80 L300 360 Q170 400 40 360 Z" />
        </clipPath>
      </defs>

      {/* Outer scalloped arch */}
      <path
        d="M20 90 Q170 0 320 90 L320 370 Q170 420 20 370 Z"
        fill="none"
        stroke="url(#jharokha-gold)"
        strokeWidth="4"
      />
      <path
        d="M32 88 Q170 14 308 88 L308 358 Q170 396 32 358 Z"
        fill="none"
        stroke="rgba(201,162,39,0.35)"
        strokeWidth="1.5"
      />

      {/* Inner window glow */}
      <path
        d="M40 80 Q170 20 300 80 L300 360 Q170 400 40 360 Z"
        fill="rgba(255,248,235,0.06)"
      />

      {/* Side pillars */}
      <rect x="14" y="100" width="14" height="260" rx="2" fill="url(#jharokha-gold)" opacity="0.7" />
      <rect x="312" y="100" width="14" height="260" rx="2" fill="url(#jharokha-gold)" opacity="0.7" />

      {/* Arch scallops */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const x = 70 + i * 34;
        return (
          <ellipse
            key={i}
            cx={x}
            cy={72 - (i % 2) * 4}
            rx="16"
            ry="10"
            fill="none"
            stroke="url(#jharokha-gold)"
            strokeWidth="1.5"
            opacity="0.6"
          />
        );
      })}

      {/* Bottom lattice */}
      <line x1="60" y1="380" x2="280" y2="380" stroke="url(#jharokha-gold)" strokeWidth="2" opacity="0.5" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={`l-${i}`}
          x1={70 + i * 28}
          y1="360"
          x2={70 + i * 28}
          y2="395"
          stroke="rgba(201,162,39,0.3)"
          strokeWidth="1"
        />
      ))}

      {/* Corner flourishes */}
      <circle cx="28" cy="108" r="5" fill="#c9a227" opacity="0.8" />
      <circle cx="312" cy="108" r="5" fill="#c9a227" opacity="0.8" />
    </svg>
  );
}
