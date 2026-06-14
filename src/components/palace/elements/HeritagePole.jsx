export default function HeritagePole({ flip = false }) {
  const id = flip ? 'poleGoldR' : 'poleGoldL';

  return (
    <svg
      viewBox="0 0 72 200"
      className="heritage-pole"
      preserveAspectRatio="xMidYMid meet"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b6914" />
          <stop offset="25%" stopColor="#d4a830" />
          <stop offset="50%" stopColor="#ffe8a0" />
          <stop offset="75%" stopColor="#f5d060" />
          <stop offset="100%" stopColor="#8b6914" />
        </linearGradient>
      </defs>

      {/* Umbrella capital */}
      <ellipse cx="36" cy="12" rx="28" ry="9" fill="#f5d060" stroke="#e8b923" strokeWidth="2" />
      <path d="M10 14 Q36 0 62 14" fill="none" stroke="#e8b923" strokeWidth="2.5" />
      <circle cx="36" cy="6" r="4.5" fill="#e8b923" />
      <circle cx="22" cy="11" r="2.5" fill="#c9a227" opacity="0.8" />
      <circle cx="50" cy="11" r="2.5" fill="#c9a227" opacity="0.8" />
      <circle cx="36" cy="14" r="1.5" fill="#ffe8a0" />

      {/* Lotus collar */}
      <ellipse cx="36" cy="22" rx="24" ry="5" fill="none" stroke="#e8b923" strokeWidth="1.5" />
      <path d="M16 22 Q36 30 56 22" fill="rgba(245,208,96,0.3)" stroke="#e8b923" strokeWidth="1" />
      <path d="M20 22 Q36 18 52 22" fill="none" stroke="#c9a227" strokeWidth="0.8" opacity="0.6" />

      {/* Main shaft */}
      <rect x="20" y="26" width="32" height="148" fill={`url(#${id})`} stroke="#e8b923" strokeWidth="1.5" rx="1.5" />

      {/* Heritage bands */}
      {[42, 64, 86, 108, 130, 152].map((y) => (
        <g key={y}>
          <rect x="17" y={y} width="38" height="5" fill="#e8b923" rx="1" opacity="0.95" />
          <rect x="21" y={y + 1.5} width="30" height="2" fill="#ffe8a0" rx="0.5" opacity="0.65" />
          <circle cx="36" cy={y + 2.5} r="1.2" fill="#c9a227" opacity="0.5" />
        </g>
      ))}

      {/* Fluting */}
      {[28, 34, 40, 46, 52, 58].map((x) => (
        <line
          key={x}
          x1={x}
          y1="30"
          x2={x}
          y2="170"
          stroke="rgba(100,70,10,0.4)"
          strokeWidth="1"
        />
      ))}

      {/* Elephant motif medallion */}
      <ellipse cx="36" cy="100" rx="13" ry="10" fill="rgba(201,162,39,0.25)" stroke="#e8b923" strokeWidth="1.2" />
      <path d="M28 102 Q36 94 44 102 Q36 110 28 102" fill="#c9a227" opacity="0.55" />
      <circle cx="36" cy="98" r="2" fill="#ffe8a0" opacity="0.7" />

      {/* Peacock feather accent */}
      <path d="M36 72 Q30 68 28 74 Q36 78 44 74 Q42 68 36 72" fill="#2d8a4e" opacity="0.35" stroke="#e8b923" strokeWidth="0.6" />

      {/* Stepped pedestal */}
      <rect x="14" y="172" width="44" height="6" fill="#c9a227" rx="1" />
      <rect x="10" y="178" width="52" height="8" fill="#f5d060" stroke="#e8b923" strokeWidth="1.2" />
      <rect x="5" y="186" width="62" height="7" fill="#c9a227" rx="1.5" />
      <rect x="0" y="193" width="72" height="6" fill="#e8b923" rx="1.5" opacity="0.95" />
    </svg>
  );
}
