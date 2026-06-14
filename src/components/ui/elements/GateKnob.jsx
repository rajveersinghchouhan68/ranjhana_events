export default function GateKnob({ side = 'left' }) {
  const gradId = `knobGold-${side}`;
  return (
    <div className={`gate-knob gate-knob--${side}`} aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="28" fill={`url(#${gradId})`} stroke="#8b6914" strokeWidth="2" />
        <circle cx="32" cy="32" r="20" fill="none" stroke="#f0d78c" strokeWidth="1.5" opacity="0.8" />
        <circle cx="32" cy="32" r="12" fill="#a8892e" stroke="#d4af37" strokeWidth="1" />
        <path
          d="M32 14 L34 22 L42 22 L36 27 L38 35 L32 30 L26 35 L28 27 L22 22 L30 22 Z"
          fill="#f0d78c"
          opacity="0.9"
        />
        <circle cx="32" cy="32" r="4" fill="#5c3d20" />
        <defs>
          <radialGradient id={gradId} cx="35%" cy="30%">
            <stop offset="0%" stopColor="#f0d78c" />
            <stop offset="55%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8b6914" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
