export default function RajasthaniDrummer({ seated = false, scale = 1 }) {
  const bodyY = seated ? 72 : 65;

  return (
    <svg
      viewBox="0 0 90 120"
      className={`rajasthani-drummer__svg ${seated ? 'rajasthani-drummer__svg--seated' : ''}`}
      style={{ transform: `scale(${scale})` }}
      aria-hidden="true"
    >
      <ellipse cx="45" cy={seated ? 112 : 115} rx="24" ry="5" fill="rgba(60,40,20,0.15)" />

      {/* Turban */}
      <ellipse cx="45" cy="22" rx="16" ry="9" fill="#e85d04" />
      <path d="M30 22 Q45 8 60 22" fill="#f48c06" stroke="#c2410c" strokeWidth="0.8" />
      <circle cx="45" cy="14" r="3" fill="#c9a227" />

      {/* Face */}
      <circle cx="45" cy="32" r="9" fill="#8b5a3c" />
      <circle cx="42" cy="30" r="1" fill="#fff" opacity="0.5" />
      <circle cx="48" cy="30" r="1" fill="#fff" opacity="0.5" />

      {/* Kurta */}
      <path
        d={`M30 ${bodyY - 20} L60 ${bodyY - 20} L62 ${bodyY + 10} L28 ${bodyY + 10} Z`}
        fill="#f5c842"
        stroke="#c9a227"
        strokeWidth="0.6"
      />
      <path d={`M35 ${bodyY - 15} L55 ${bodyY - 15} L54 ${bodyY} L36 ${bodyY} Z`} fill="#e85d04" opacity="0.6" />

      {/* Legs if seated */}
      {seated && (
        <path d="M32 82 Q28 100 24 110 L40 110 Q38 95 36 82 Z" fill="#f5c842" />
      )}
      {seated && (
        <path d="M58 82 Q62 100 66 110 L50 110 Q52 95 54 82 Z" fill="#f5c842" />
      )}

      {/* Dhol drum */}
      <ellipse cx="45" cy={bodyY + 2} rx="22" ry="10" fill="#8b4513" stroke="#5c2e0a" strokeWidth="1" />
      <ellipse cx="45" cy={bodyY + 2} rx="18" ry="7" fill="#a0522d" />
      <ellipse cx="45" cy={bodyY - 2} rx="20" ry="8" fill="#cd853f" stroke="#8b4513" strokeWidth="0.8" />
      <line x1="27" y1={bodyY + 2} x2="63" y2={bodyY + 2} stroke="#5c2e0a" strokeWidth="0.5" opacity="0.5" />

      {/* Drum sticks / hands */}
      <g className="rajasthani-drummer__beat rajasthani-drummer__beat--l">
        <line x1="22" y1={bodyY - 8} x2="32" y2={bodyY + 4} stroke="#5c3d2b" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="22" cy={bodyY - 8} r="3" fill="#f5c842" />
      </g>
      <g className="rajasthani-drummer__beat rajasthani-drummer__beat--r">
        <line x1="68" y1={bodyY - 8} x2="58" y2={bodyY + 4} stroke="#5c3d2b" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="68" cy={bodyY - 8} r="3" fill="#f5c842" />
      </g>

      {/* White kurta bottom */}
      {!seated && (
        <path d={`M32 ${bodyY + 10} L58 ${bodyY + 10} L55 112 L35 112 Z`} fill="#fff8f0" opacity="0.9" />
      )}
    </svg>
  );
}
