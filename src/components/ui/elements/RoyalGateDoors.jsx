import { useScroll } from '../../../context/ScrollContext';
import GateKnob from './GateKnob';

export default function EntranceElephant({ side = 'left' }) {
  const { heroProgress = 0 } = useScroll();
  const trunkLift = heroProgress * 18;

  return (
    <div className={`entrance-elephant entrance-elephant--${side}`}>
      <div
        className="entrance-elephant__body"
        style={{
          transform:
            side === 'left'
              ? `rotate(${trunkLift}deg)`
              : `scaleX(-1) rotate(${trunkLift}deg)`,
        }}
      />
    </div>
  );
}

export function RoyalGateDoors({ openProgress }) {
  const angle = Math.min(88, openProgress * 92);
  const visible = openProgress < 0.98;

  if (!visible) return null;

  return (
    <div className="royal-doors">
      <div className="royal-doors__arch-frame" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="royal-doors__arch-svg">
          <path
            d="M0,120 L0,50 Q150,0 300,20 Q450,5 600,15 Q750,5 900,20 Q1050,0 1200,50 L1200,120 Z"
            fill="url(#archGrad)"
            stroke="#c9a227"
            strokeWidth="2"
          />
          <path
            d="M0,55 Q200,8 400,25 Q600,10 800,25 Q1000,8 1200,55"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="archGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fde8df" />
              <stop offset="100%" stopColor="#f5d5c8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        className="royal-door royal-door--left"
        style={{ transform: `perspective(1600px) rotateY(${angle}deg)` }}
      >
        <div className="royal-door__inner">
          <div className="royal-door__carving" />
          <div className="royal-door__border" />
          <GateKnob side="left" />
          <EntranceElephant side="left" />
        </div>
      </div>

      <div
        className="royal-door royal-door--right"
        style={{ transform: `perspective(1600px) rotateY(${-angle}deg)` }}
      >
        <div className="royal-door__inner">
          <div className="royal-door__carving" />
          <div className="royal-door__border" />
          <GateKnob side="right" />
          <EntranceElephant side="right" />
        </div>
      </div>

      <div className="royal-doors__center-seam" style={{ opacity: 1 - openProgress }} />
    </div>
  );
}
