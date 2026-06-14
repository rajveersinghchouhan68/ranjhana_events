export default function ProcessionElephant({ facing = 'right', uid = 'a' }) {
  const flip = facing === 'right' ? -1 : 1;

  return (
    <svg
      viewBox="0 0 220 200"
      className="procession-elephant__svg"
      style={{ transform: `scaleX(${flip})` }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`peBody-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3d4450" />
          <stop offset="50%" stopColor="#5a6578" />
          <stop offset="100%" stopColor="#3d4450" />
        </linearGradient>
        <linearGradient id={`peGold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9a227" />
          <stop offset="50%" stopColor="#f5d060" />
          <stop offset="100%" stopColor="#a67c00" />
        </linearGradient>
      </defs>

      <ellipse cx="110" cy="188" rx="72" ry="8" fill="rgba(0,0,0,0.28)" />

      <rect x="58" y="138" width="22" height="48" rx="8" fill={`url(#peBody-${uid})`} />
      <rect x="88" y="142" width="20" height="44" rx="8" fill={`url(#peBody-${uid})`} />
      <rect x="118" y="138" width="22" height="48" rx="8" fill={`url(#peBody-${uid})`} />
      <rect x="148" y="142" width="20" height="44" rx="8" fill={`url(#peBody-${uid})`} />

      {[68, 98, 128, 158].map((x) => (
        <ellipse key={x} cx={x} cy="178" rx="12" ry="5" fill={`url(#peGold-${uid})`} stroke="#e8b923" strokeWidth="1" />
      ))}

      <ellipse cx="110" cy="118" rx="78" ry="52" fill={`url(#peBody-${uid})`} />
      <ellipse cx="110" cy="108" rx="62" ry="38" fill="#5a6578" />

      <path d="M48 88 Q110 72 172 88 L168 118 Q110 132 52 118 Z" fill="#b91c1c" />
      <path d="M52 88 Q110 76 168 88" fill="none" stroke="#f5d060" strokeWidth="5" />
      <path d="M56 92 Q110 82 164 92" fill="none" stroke="#0d9488" strokeWidth="3" />

      <ellipse cx="110" cy="92" rx="34" ry="14" fill="none" stroke={`url(#peGold-${uid})`} strokeWidth="5" />
      <circle cx="110" cy="96" r="10" fill={`url(#peGold-${uid})`} stroke="#e8b923" strokeWidth="1.5" />
      <circle cx="110" cy="96" r="4" fill="#0d9488" />

      <ellipse cx="52" cy="98" rx="34" ry="30" fill="#5a6578" />
      <ellipse cx="38" cy="88" rx="20" ry="26" fill="#4a5568" />
      <ellipse cx="66" cy="88" rx="20" ry="26" fill="#4a5568" />

      <path d="M24 78 Q52 48 80 78 Q52 68 24 78" fill={`url(#peGold-${uid})`} stroke="#e8b923" strokeWidth="1.5" />
      <path d="M34 74 Q52 58 70 74" fill="#c9a227" opacity="0.5" />
      <circle cx="52" cy="62" r="5" fill="#b91c1c" stroke="#f5d060" strokeWidth="1" />

      <path
        d="M28 104 Q8 118 14 138 Q18 148 30 142 Q24 124 34 110 Z"
        fill="#4a5568"
        stroke="#3d4450"
        strokeWidth="1"
      />

      <path d="M40 108 L28 98 L32 106 Z" fill="#f5f0e6" stroke="#d4cfc4" strokeWidth="0.8" />
      <path d="M48 110 L36 100 L40 108 Z" fill="#f5f0e6" stroke="#d4cfc4" strokeWidth="0.8" />

      <circle cx="44" cy="94" r="3" fill="#1a1a1a" />
      <circle cx="45" cy="93" r="1" fill="#fff" opacity="0.6" />

      <circle cx="66" cy="78" r="4" fill={`url(#peGold-${uid})`} />
      <circle cx="38" cy="78" r="4" fill={`url(#peGold-${uid})`} />

      <path d="M182 108 Q196 100 192 118 Q188 128 180 120" fill="none" stroke="#4a5568" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
