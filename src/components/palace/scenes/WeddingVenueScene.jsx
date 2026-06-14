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

const FRAME_LEFT = assetUrl('assets/venue-frame-left.png');
const FRAME_RIGHT = assetUrl('assets/venue-frame-right.png');

export default function WeddingVenueScene() {
  const { sectionProgress } = useScroll();
  const split = Math.min(1, sectionProgress * 1.15);
  const panelShift = split * 92;
  const centerReveal = Math.min(1, Math.max(0, (sectionProgress - 0.08) * 1.8));
  const mandapScale = 0.88 + centerReveal * 0.12;
  const framesVisible = sectionProgress > 0.35;

  return (
    <div className="palace-scene palace-scene--venue">
      <div
        className="venue__center-light"
        style={{ opacity: centerReveal }}
        aria-hidden="true"
      />

      <div className="venue__split-frame">
        <img
          src={FRAME_LEFT}
          alt=""
          className="venue__frame-panel venue__frame-panel--left"
          style={{ transform: `translateX(-${panelShift}%)` }}
          aria-hidden="true"
          draggable={false}
        />
        <img
          src={FRAME_RIGHT}
          alt=""
          className="venue__frame-panel venue__frame-panel--right"
          style={{ transform: `translateX(${panelShift}%)` }}
          aria-hidden="true"
          draggable={false}
        />
      </div>

      <div
        className="venue__center-stage"
        style={{ opacity: centerReveal, transform: `scale(${0.96 + centerReveal * 0.04})` }}
      >
        <img
          src={assetUrl('assets/mandap-elephants.png')}
          alt=""
          className="venue__mandap-bg"
          style={{ transform: `translate(-50%, -50%) scale(${mandapScale})` }}
          aria-hidden="true"
        />

        {framesVisible &&
          SETUPS.map((s, i) => (
            <motion.div
              key={s.label}
              className="venue__art-frame"
              style={{
                left: s.x,
                top: s.y,
                '--i': i,
                opacity: sectionProgress > i * 0.1 + 0.35 ? 1 : 0,
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="venue__art-frame-inner">
                <span className="venue__art-caption">{s.label}</span>
              </div>
            </motion.div>
          ))}
      </div>

      <FloatingPetals count={10} />

      <InvitationProse
        pre="Through the Palace Arch"
        title="Grand Royal Celebrations"
        body="Majestic mandaps, floral kingdoms, and destination dreams — every celebration unfolds like a royal procession."
      />
    </div>
  );
}
