import { useScroll } from '../../context/ScrollContext';
import FloatingPetals from './elements/FloatingPetals';
import WindFlowers from './elements/WindFlowers';
import PeacockFeatherSway from './elements/PeacockFeatherSway';
import { HeritageGateEntrance } from '../ui/elements/HeritageGate';

export default function RoyalInvitationScene() {
  const { heroProgress = 0 } = useScroll();
  const openProgress = Math.min(1, heroProgress * 1.1);
  const fadeOut = Math.max(0, 1 - Math.max(0, (heroProgress - 0.55) * 2.8));
  const zoom = 1 + openProgress * 0.03;

  if (fadeOut <= 0) return null;

  return (
    <div
      className="royal-scene royal-scene--sandstone"
      style={{ opacity: fadeOut, transform: `scale(${zoom})` }}
    >
      <div className="royal-scene__warm-glow" aria-hidden="true" />
      <WindFlowers side="left" intensity={heroProgress} />
      <WindFlowers side="right" intensity={heroProgress} />
      <PeacockFeatherSway progress={heroProgress} />
      <FloatingPetals count={24} />
      <HeritageGateEntrance openProgress={openProgress} />
    </div>
  );
}
