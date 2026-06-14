import { motion } from 'framer-motion';
import { useScroll } from '../../../context/ScrollContext';
import { assetUrl } from '../../../utils/assets';
import InvitationProse from '../elements/InvitationProse';
import FloatingPetals from '../elements/FloatingPetals';

const SETUPS = [
  { label: 'Royal Mandap', x: '12%', y: '42%' },
  { label: 'Floral Symphony', x: '72%', y: '38%' },
  { label: 'Palace Seating', x: '8%', y: '58%' },
  { label: 'Destination Altar', x: '68%', y: '54%' },
];

export default function WeddingVenueScene() {
  const { sectionProgress } = useScroll();
  const archOpen = Math.min(1, sectionProgress * 2.5);
  const elephantX = -30 + sectionProgress * 38;
  const trunkLift = sectionProgress * -22;

  return (
    <div className="palace-scene palace-scene--venue">
      <div className="venue__arch-frame">
        <div
          className="venue__arch-door venue__arch-door--l"
          style={{ transform: `scaleX(${0.15 + archOpen * 0.85})`, transformOrigin: 'left center' }}
        />
        <div
          className="venue__arch-door venue__arch-door--r"
          style={{ transform: `scaleX(${0.15 + archOpen * 0.85})`, transformOrigin: 'right center' }}
        />
      </div>

      <img
        src={assetUrl('assets/mandap-elephants.png')}
        alt=""
        className="venue__mandap-bg"
        aria-hidden="true"
      />

      <div
        className="venue__hero-elephant"
        style={{ transform: `translateX(${elephantX}%)` }}
      >
        <img src={assetUrl('assets/elephant-decorated.png')} alt="" aria-hidden="true" />
        <div className="venue__trunk" style={{ transform: `rotate(${trunkLift}deg)` }} />
      </div>

      {SETUPS.map((s, i) => (
        <motion.div
          key={s.label}
          className="venue__art-frame"
          style={{
            left: s.x,
            top: s.y,
            '--i': i,
            opacity: sectionProgress > i * 0.15 ? 1 : 0,
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="venue__art-frame-inner">
            <span className="venue__art-caption">{s.label}</span>
          </div>
        </motion.div>
      ))}

      <FloatingPetals count={10} />

      <InvitationProse
        pre="Through the Palace Arch"
        title="Grand Royal Celebrations"
        body="Majestic mandaps, floral kingdoms, and destination dreams — every celebration unfolds like a royal procession."
      />
    </div>
  );
}
