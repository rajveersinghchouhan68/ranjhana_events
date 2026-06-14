import { motion } from 'framer-motion';
import { useScroll } from '../../../context/ScrollContext';
import { assetUrl } from '../../../utils/assets';
import InvitationProse from '../elements/InvitationProse';
import FloatingPetals from '../elements/FloatingPetals';

const SETUPS = [
  { label: 'Royal Mandap', x: '10%', y: '38%' },
  { label: 'Floral Symphony', x: '74%', y: '36%' },
  { label: 'Palace Seating', x: '8%', y: '56%' },
  { label: 'Destination Altar', x: '70%', y: '52%' },
];

export default function WeddingVenueScene() {
  const { sectionProgress } = useScroll();

  return (
    <div className="palace-scene palace-scene--venue">
      <img
        src={assetUrl('assets/mandap-elephants.png')}
        alt=""
        className="venue__mandap-bg"
        aria-hidden="true"
      />

      {SETUPS.map((s, i) => (
        <motion.div
          key={s.label}
          className="venue__art-frame"
          style={{
            left: s.x,
            top: s.y,
            '--i': i,
            opacity: sectionProgress > i * 0.12 + 0.1 ? 1 : 0.35,
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
