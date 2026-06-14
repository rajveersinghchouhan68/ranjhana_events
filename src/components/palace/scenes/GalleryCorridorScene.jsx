import { useScroll } from '../../../context/ScrollContext';
import InvitationProse from '../elements/InvitationProse';
import FloatingPetals from '../elements/FloatingPetals';
import GhoomarDancer from '../elements/GhoomarDancer';
import RajasthaniDrummer from '../elements/RajasthaniDrummer';

const DANCER_COLORS = ['#c41e5a', '#e85d04', '#9b1b30', '#d4849a', '#8b2040', '#c97b4a'];

const MEMORY_PHOTOS = [
  { src: '/assets/mandap-elephants.png', label: 'Royal Mandap' },
  { src: '/assets/venue-frame-full.png', label: 'Palace Venue' },
  { src: '/assets/royal-gate-elephants.png', label: 'Palace Gate' },
  { src: '/assets/elephant-decorated.png', label: 'Barat Entry' },
];

function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

export default function GalleryCorridorScene() {
  const { sectionProgress: p } = useScroll();

  const paradePhase = clamp01((p - 0.08) / 0.48);
  const circlePhase = clamp01((p - 0.55) / 0.45);
  const paradeOpacity = 1 - circlePhase;
  const circleOpacity = circlePhase;
  const drumIntensity = 0.6 + p * 1.4;
  const proseScale = 1 - circlePhase * 0.15;
  const proseOpacity = 1 - circlePhase * 0.35;

  const paradeX = -22 + paradePhase * 125;

  return (
    <div
      className="palace-scene palace-scene--gallery"
      style={{
        '--drum-beat': `${Math.max(0.18, 0.5 - p * 0.32)}s`,
        '--prose-scale': proseScale,
        '--prose-opacity': proseOpacity,
      }}
    >
      <div className="folk-stage__sky" />
      <div className="folk-stage__courtyard" />
      <div className="folk-stage__garland folk-stage__garland--l" aria-hidden="true" />
      <div className="folk-stage__garland folk-stage__garland--r" aria-hidden="true" />

      {/* Side drummers — always playing */}
      <div
        className="folk-stage__drummer folk-stage__drummer--side-l"
        style={{ opacity: 1 - circlePhase * 0.6, '--intensity': drumIntensity }}
      >
        <RajasthaniDrummer scale={1.1} />
      </div>
      <div
        className="folk-stage__drummer folk-stage__drummer--side-r"
        style={{ opacity: 1 - circlePhase * 0.6, '--intensity': drumIntensity }}
      >
        <RajasthaniDrummer scale={1.1} />
      </div>

      {/* Dancers parade left → right */}
      <div className="folk-stage__parade" style={{ opacity: paradeOpacity }}>
        {DANCER_COLORS.map((color, i) => (
          <div
            key={i}
            className="folk-stage__dancer folk-stage__dancer--parade"
            style={{
              left: `${paradeX + i * 11}vw`,
              top: `${48 + (i % 3) * 4}%`,
              animationDelay: `${i * 0.15}s`,
            }}
          >
            <GhoomarDancer color={color} scale={0.9 + (i % 2) * 0.1} flip={i % 2 === 1} />
          </div>
        ))}
      </div>

      {/* Circle formation */}
      <div className="folk-stage__circle" style={{ opacity: circleOpacity, '--circle-opacity': circleOpacity }}>
        <div className="folk-stage__circle-ring" aria-hidden="true" />

        {DANCER_COLORS.map((color, i) => {
          const angle = (i / DANCER_COLORS.length) * Math.PI * 2 - Math.PI / 2;
          const r = 38 * circlePhase;
          const x = 50 + Math.cos(angle) * r;
          const y = 58 + Math.sin(angle) * r * 0.52;
          return (
            <div
              key={`c-${i}`}
              className="folk-stage__dancer folk-stage__dancer--circle"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <GhoomarDancer color={color} scale={0.82} flip={i % 2 === 1} />
            </div>
          );
        })}

        <div className="folk-stage__center-drummers" style={{ '--intensity': drumIntensity }}>
          <RajasthaniDrummer seated scale={0.85} />
          <RajasthaniDrummer seated scale={0.8} />
          <RajasthaniDrummer seated scale={0.85} />
        </div>

        <div className="folk-stage__memory-photos">
          {MEMORY_PHOTOS.map(({ src, label }, i) => (
            <div key={src} className="folk-stage__memory" style={{ '--i': i }}>
              <img src={src} alt={label} loading="lazy" />
              <span className="folk-stage__memory-frame" aria-hidden="true" />
              <span className="folk-stage__memory-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <FloatingPetals count={14} />

      <InvitationProse
        pre="Ghoomar & Dhol Beats"
        title="Living Rajasthani Traditions"
        body="Drummers summon the baraat, dancers swirl in celebration — every wedding pulse beats to the rhythm of royal Rajasthan."
      />
    </div>
  );
}
