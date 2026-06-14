export default function GhoomarDancer({ color = '#c41e5a', scale = 1, flip = false }) {
  return (
    <svg
      viewBox="0 0 80 120"
      className="ghoomar-dancer__svg"
      style={{ transform: `scale(${scale}) ${flip ? 'scaleX(-1)' : ''}` }}
      aria-hidden="true"
    >
      <ellipse cx="40" cy="112" rx="22" ry="5" fill="rgba(60,40,20,0.15)" />
      {/* Dupatta flowing */}
      <path
        d="M52 38 Q72 55 68 80 Q55 70 48 58"
        fill={color}
        opacity="0.7"
        className="ghoomar-dancer__dupatta"
      />
      {/* Lehenga skirt */}
      <path
        d="M40 58 Q18 75 14 108 Q40 115 66 108 Q62 75 40 58"
        fill={color}
        stroke="#8b1530"
        strokeWidth="0.8"
      />
      <path d="M40 58 Q28 80 22 105 Q40 110 58 105 Q52 80 40 58" fill="#e8a0b0" opacity="0.5" />
      {/* Choli / torso */}
      <path d="M32 48 L48 48 L50 62 L30 62 Z" fill="#f0c060" stroke="#c9a227" strokeWidth="0.6" />
      {/* Arms raised — ghoomar pose */}
      <path
        d="M32 50 Q18 35 12 22"
        stroke="#5c3d2b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        className="ghoomar-dancer__arm ghoomar-dancer__arm--l"
      />
      <path
        d="M48 50 Q62 35 68 22"
        stroke="#5c3d2b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        className="ghoomar-dancer__arm ghoomar-dancer__arm--r"
      />
      {/* Head with veil */}
      <circle cx="40" cy="38" r="11" fill="#5c3d2b" />
      <ellipse cx="40" cy="32" rx="14" ry="5" fill={color} opacity="0.85" />
      <circle cx="36" cy="36" r="1.2" fill="#fff" opacity="0.6" />
      <circle cx="44" cy="36" r="1.2" fill="#fff" opacity="0.6" />
      {/* Bangles */}
      <circle cx="14" cy="24" r="2" fill="#c9a227" opacity="0.8" />
      <circle cx="66" cy="24" r="2" fill="#c9a227" opacity="0.8" />
      {/* Anklets */}
      <ellipse cx="22" cy="106" rx="4" ry="2" fill="#c9a227" opacity="0.7" />
      <ellipse cx="58" cy="106" rx="4" ry="2" fill="#c9a227" opacity="0.7" />
    </svg>
  );
}
