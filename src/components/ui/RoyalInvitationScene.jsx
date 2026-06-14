import { useScroll } from '../../context/ScrollContext';
import { HeritageGateEntrance } from './elements/HeritageGate';
import RealisticPeacock from './elements/RealisticPeacock';
import RajasthaniDancers from './elements/RajasthaniDancers';

export default function RoyalInvitationScene() {
  const { heroProgress = 0 } = useScroll();
  const openProgress = Math.min(1, heroProgress * 1.1);
  const fadeOut = Math.max(0, 1 - Math.max(0, (heroProgress - 0.6) * 2.5));
  const zoom = 1 + openProgress * 0.04;

  if (fadeOut <= 0) return null;

  return (
    <div
      className="royal-scene royal-scene--heritage"
      style={{ opacity: fadeOut, transform: `scale(${zoom})` }}
    >
      <div className="royal-scene__palace-layer">
        <div className="royal-scene__palace-img" />
        <div className="royal-scene__palace-wash" />
      </div>

      <RealisticPeacock />
      <RajasthaniDancers />

      <HeritageGateEntrance openProgress={openProgress} />

      <div className="royal-scene__petals" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="royal-petal"
            style={{
              '--x': `${(i * 17) % 100}%`,
              '--delay': `${i * 0.35}s`,
              '--dur': `${5 + (i % 5)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
