import { useScroll } from '../../../context/ScrollContext';

export default function RealisticPeacock() {
  const { heroProgress = 0 } = useScroll();
  const featherSpread = 1 + heroProgress * 0.4;
  const featherRotate = heroProgress * 22;

  return (
    <div className="royal-peacock">
      <div className="royal-peacock__sprite" />
      <div
        className="royal-peacock__feather-glow"
        style={{
          transform: `scale(${featherSpread}) rotate(${featherRotate}deg)`,
          opacity: 0.35 + heroProgress * 0.45,
        }}
      />
    </div>
  );
}
