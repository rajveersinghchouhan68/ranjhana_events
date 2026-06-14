/* Ornate royal double-door — left half (viewBox 0 0 100 280) */
function DoorPanelLeft() {
  return (
    <svg viewBox="0 0 100 280" className="royal-ornate-door__svg" aria-hidden="true">
      <defs>
        <linearGradient id="doorGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0d890" />
          <stop offset="35%" stopColor="#d4a84a" />
          <stop offset="70%" stopColor="#c9922e" />
          <stop offset="100%" stopColor="#a67820" />
        </linearGradient>
        <linearGradient id="doorGoldDeep" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8c860" />
          <stop offset="100%" stopColor="#9a6a18" />
        </linearGradient>
        <linearGradient id="panelInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5e0a0" />
          <stop offset="100%" stopColor="#c49a38" />
        </linearGradient>
      </defs>

      {/* Door silhouette — scalloped Mughal arch, left leaf */}
      <path
        d="M2,278 L2,102 C2,92 5,84 10,78 C14,68 18,74 23,66 C28,56 33,64 38,54 C42,44 46,52 48,42 C49,34 49,28 50,22 L50,278 Z"
        fill="url(#doorGold)"
        stroke="#8b6914"
        strokeWidth="1.2"
      />

      {/* Outer border frame */}
      <path
        d="M8,268 L8,102 C8,94 11,86 16,80 C20,72 24,76 28,68 C32,60 36,66 40,58 C42,52 44,46 46,40 L46,268 Z"
        fill="none"
        stroke="#7a5510"
        strokeWidth="0.8"
      />

      {/* Panel grid lines */}
      <line x1="10" y1="110" x2="46" y2="110" stroke="#7a5510" strokeWidth="0.6" opacity="0.7" />
      <line x1="10" y1="155" x2="46" y2="155" stroke="#7a5510" strokeWidth="0.6" opacity="0.7" />
      <line x1="10" y1="200" x2="46" y2="200" stroke="#7a5510" strokeWidth="0.6" opacity="0.7" />
      <line x1="10" y1="245" x2="46" y2="245" stroke="#7a5510" strokeWidth="0.6" opacity="0.7" />
      <line x1="28" y1="102" x2="28" y2="268" stroke="#7a5510" strokeWidth="0.6" opacity="0.5" />

      {/* Lotus panels */}
      <Lotus x={19} y={82} scale={0.55} />
      <Lotus x={19} y={132} scale={0.7} />
      <Lotus x={19} y={177} scale={0.7} />
      <Lotus x={19} y={222} scale={0.65} />
      <Lotus x={19} y={258} scale={0.5} />

      {/* Ring knocker */}
      <circle cx="47" cy="168" r="5" fill="none" stroke="#6a4a08" strokeWidth="1.2" />
      <circle cx="47" cy="168" r="3" fill="url(#doorGoldDeep)" stroke="#5a3a06" strokeWidth="0.6" />
    </svg>
  );
}

function DoorPanelRight() {
  return (
    <svg viewBox="0 0 100 280" className="royal-ornate-door__svg" aria-hidden="true">
      <defs>
        <linearGradient id="doorGoldR" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0d890" />
          <stop offset="35%" stopColor="#d4a84a" />
          <stop offset="70%" stopColor="#c9922e" />
          <stop offset="100%" stopColor="#a67820" />
        </linearGradient>
        <linearGradient id="doorGoldDeepR" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8c860" />
          <stop offset="100%" stopColor="#9a6a18" />
        </linearGradient>
      </defs>

      <path
        d="M98,278 L98,102 C98,92 95,84 90,78 C86,68 82,74 77,66 C72,56 67,64 62,54 C58,44 54,52 52,42 C51,34 51,28 50,22 L50,278 Z"
        fill="url(#doorGoldR)"
        stroke="#8b6914"
        strokeWidth="1.2"
      />

      <path
        d="M92,268 L92,102 C92,94 89,86 84,80 C80,72 76,76 72,68 C68,60 64,66 60,58 C58,52 56,46 54,40 L54,268 Z"
        fill="none"
        stroke="#7a5510"
        strokeWidth="0.8"
      />

      <line x1="54" y1="110" x2="90" y2="110" stroke="#7a5510" strokeWidth="0.6" opacity="0.7" />
      <line x1="54" y1="155" x2="90" y2="155" stroke="#7a5510" strokeWidth="0.6" opacity="0.7" />
      <line x1="54" y1="200" x2="90" y2="200" stroke="#7a5510" strokeWidth="0.6" opacity="0.7" />
      <line x1="54" y1="245" x2="90" y2="245" stroke="#7a5510" strokeWidth="0.6" opacity="0.7" />
      <line x1="72" y1="102" x2="72" y2="268" stroke="#7a5510" strokeWidth="0.6" opacity="0.5" />

      <Lotus x={81} y={82} scale={0.55} />
      <Lotus x={81} y={132} scale={0.7} />
      <Lotus x={81} y={177} scale={0.7} />
      <Lotus x={81} y={222} scale={0.65} />
      <Lotus x={81} y={258} scale={0.5} />

      <circle cx="53" cy="168" r="5" fill="none" stroke="#6a4a08" strokeWidth="1.2" />
      <circle cx="53" cy="168" r="3" fill="url(#doorGoldDeepR)" stroke="#5a3a06" strokeWidth="0.6" />
    </svg>
  );
}

function Lotus({ x, y, scale = 1 }) {
  const s = scale;
  return (
    <g transform={`translate(${x},${y}) scale(${s})`} opacity="0.85">
      <ellipse cx="0" cy="2" rx="14" ry="5" fill="#b88820" opacity="0.4" />
      <ellipse cx="0" cy="0" rx="10" ry="6" fill="#e8c858" stroke="#8b6914" strokeWidth="0.5" />
      <ellipse cx="-6" cy="-2" rx="6" ry="8" fill="#d4a840" stroke="#7a5510" strokeWidth="0.4" transform="rotate(-25)" />
      <ellipse cx="6" cy="-2" rx="6" ry="8" fill="#d4a840" stroke="#7a5510" strokeWidth="0.4" transform="rotate(25)" />
      <ellipse cx="0" cy="-6" rx="5" ry="7" fill="#f0d878" stroke="#7a5510" strokeWidth="0.4" />
      <circle cx="0" cy="0" r="3" fill="#c9922e" />
    </g>
  );
}

export default function RoyalOrnateDoor({ openProgress, textOpacity, revealOpacity, children }) {
  const spread = Math.min(108, openProgress * 112);
  const seamOpacity = Math.max(0, 1 - openProgress * 2.5);

  return (
    <div className="royal-ornate-door">
      <div
        className="royal-ornate-door__reveal"
        style={{ opacity: revealOpacity }}
        aria-hidden="true"
      />

      <div
        className="royal-ornate-door__panel royal-ornate-door__panel--left"
        style={{ transform: `translateX(-${spread}%)` }}
      >
        <DoorPanelLeft />
      </div>

      <div
        className="royal-ornate-door__panel royal-ornate-door__panel--right"
        style={{ transform: `translateX(${spread}%)` }}
      >
        <DoorPanelRight />
      </div>

      <div
        className="royal-ornate-door__seam"
        style={{ opacity: seamOpacity }}
        aria-hidden="true"
      />

      <div className="royal-ornate-door__text" style={{ opacity: textOpacity }}>
        {children}
      </div>
    </div>
  );
}

export { DoorPanelLeft, DoorPanelRight };
