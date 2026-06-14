import { useScroll } from '../../../context/ScrollContext';
import { assetUrl } from '../../../utils/assets';
import FloatingPetals from '../elements/FloatingPetals';
import InvitationProse from '../elements/InvitationProse';

export default function CourtyardScene() {
  const { sectionProgress } = useScroll();

  return (
    <div className="palace-scene palace-scene--courtyard">
      <div
        className="palace-scene__camera"
        style={{ transform: `translateY(${-sectionProgress * 10}%)` }}
      >
        <div className="courtyard__sky" />
        <div className="courtyard__arch courtyard__arch--back" />
        <div className="courtyard__pillar courtyard__pillar--left" />
        <div className="courtyard__pillar courtyard__pillar--right" />
        <div className="courtyard__fountain" />
        <div className="courtyard__pathway" />

        <div className="courtyard__lantern courtyard__lantern--l" />
        <div className="courtyard__lantern courtyard__lantern--r" />
        <div className="courtyard__lantern courtyard__lantern--c" />

        <div className="courtyard__dancers">
          <img src={assetUrl('assets/dancers-frame.png')} alt="" aria-hidden="true" />
        </div>

        <div className="courtyard__dupatta courtyard__dupatta--1" />
        <div className="courtyard__dupatta courtyard__dupatta--2" />

        <div className="courtyard__falling-flowers" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="courtyard__fall-bloom" style={{ '--i': i }} />
          ))}
        </div>
      </div>

      <FloatingPetals count={12} />

      <InvitationProse
        om
        pre="You Are Cordially Invited"
        title="Our Royal Story"
        body="Born from the sandstone soul of Rajasthan, Raanjhana Events weaves weddings like living palace folktales — where Ghoomar dancers, marigold showers, and golden dusk write your forever."
      />
    </div>
  );
}
