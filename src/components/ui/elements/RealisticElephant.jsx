import { useScroll } from '../../../context/ScrollContext';

export default function RealisticElephant({ side = 'left' }) {
  const { heroProgress = 0 } = useScroll();
  const trunkLift = heroProgress * 22;
  const sway = Math.sin(heroProgress * Math.PI * 3) * 2;

  return (
    <div
      className={`royal-elephant royal-elephant--${side}`}
      style={{ transform: `rotate(${sway}deg)` }}
    >
      <div
        className="royal-elephant__sprite"
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
