import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../../../context/ScrollContext';
import { assetUrl } from '../../../utils/assets';
import InvitationProse from '../elements/InvitationProse';
import FloatingPetals from '../elements/FloatingPetals';
import PalaceJharokha from '../elements/PalaceJharokha';
import GhoomarDancer from '../elements/GhoomarDancer';
import RajasthaniDrummer from '../elements/RajasthaniDrummer';

const ROOMS = [
  {
    name: 'Destination Weddings',
    desc: 'Udaipur palaces, Jaipur forts, and global royal venues.',
    tag: 'Palaces & Forts',
    accent: '#c9a227',
    image: assetUrl('assets/royal-gate-elephants.png'),
  },
  {
    name: 'Luxury Decor',
    desc: 'Royal mandaps, marigold symphonies, palace lighting artistry.',
    tag: 'Mandap & Florals',
    accent: '#e85d04',
    image: assetUrl('assets/mandap-elephants.png'),
  },
  {
    name: 'Hospitality',
    desc: 'White-glove concierge and royal welcome experiences.',
    tag: 'Royal Welcome',
    accent: '#2d8a4e',
    image: assetUrl('assets/elephant-decorated.png'),
  },
  {
    name: 'Entertainment',
    desc: 'Ghoomar, folk artists, celebrity performances, fireworks.',
    tag: 'Folk & Fireworks',
    accent: '#c41e5a',
    visual: 'folk',
  },
  {
    name: 'Photography',
    desc: 'Cinematic films, drone shots, and storybook albums.',
    tag: 'Cinematic Films',
    accent: '#8b6fa8',
    image: assetUrl('assets/venue-frame-full.png'),
  },
];

function RoomVisual({ room, blend }) {
  if (room.visual === 'folk') {
    return (
      <div className="rooms-stage__folk-visual">
        <RajasthaniDrummer scale={0.7} />
        <GhoomarDancer color="#c41e5a" scale={0.75} />
        <GhoomarDancer color="#e85d04" scale={0.7} flip />
        <RajasthaniDrummer scale={0.65} />
      </div>
    );
  }

  return (
    <img
      src={room.image}
      alt=""
      className="rooms-stage__room-img"
      style={{
        transform: `scale(${1.04 + blend * 0.06})`,
        opacity: 1 - blend * 0.15,
      }}
      draggable={false}
    />
  );
}

export default function PalaceRoomsScene() {
  const { sectionProgress } = useScroll();
  const total = ROOMS.length;
  const roomProgress = Math.min(total - 0.001, sectionProgress * total);
  const roomIndex = Math.floor(roomProgress);
  const blend = roomProgress - roomIndex;
  const room = ROOMS[roomIndex];
  const nextRoom = ROOMS[Math.min(roomIndex + 1, total - 1)];

  return (
    <div
      className="palace-scene palace-scene--rooms"
      style={{
        '--room-accent': room.accent,
        '--room-glow': `${room.accent}33`,
      }}
    >
      <div className="rooms-stage__bg" aria-hidden="true" />
      <div className="rooms-stage__pattern" aria-hidden="true" />
      <div className="rooms-stage__glow" aria-hidden="true" />

      <div className="rooms-stage__garland rooms-stage__garland--l" aria-hidden="true" />
      <div className="rooms-stage__garland rooms-stage__garland--r" aria-hidden="true" />

      <FloatingPetals count={18} />

      <div className="rooms-stage__lanterns" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="rooms-stage__lantern" style={{ '--i': i }} />
        ))}
      </div>

      <div className="rooms-stage__chamber">
        <div className="rooms-stage__frame-wrap">
          <PalaceJharokha accent={room.accent} />

          <div className="rooms-stage__window">
          <AnimatePresence mode="wait">
            <motion.div
              key={room.name}
              className="rooms-stage__visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <RoomVisual room={room} blend={blend} />
            </motion.div>
          </AnimatePresence>

          {blend > 0.4 && roomIndex < total - 1 && (
            <motion.div
              className="rooms-stage__visual rooms-stage__visual--next"
              initial={{ opacity: 0 }}
              animate={{ opacity: blend * 0.6 }}
              transition={{ duration: 0.3 }}
            >
              <RoomVisual room={nextRoom} blend={0} />
            </motion.div>
          )}
        </div>
        </div>

        <motion.div
          key={room.name}
          className="rooms-stage__card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="rooms-stage__tag" style={{ color: room.accent }}>
            {room.tag}
          </span>
          <span className="rooms-stage__number">
            {String(roomIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <h3>{room.name}</h3>
          <p>{room.desc}</p>
        </motion.div>
      </div>

      <div className="rooms-stage__dots">
        {ROOMS.map((r, i) => (
          <span
            key={r.name}
            className={`rooms-stage__dot ${i === roomIndex ? 'is-active' : ''}`}
            style={{ '--accent': r.accent }}
          />
        ))}
      </div>

      <div
        className="rooms-stage__progress"
        style={{ transform: `scaleX(${sectionProgress})` }}
      />

      <InvitationProse
        pre="Discover Our Palace Chambers"
        title="Royal Services"
        body="Scroll through five chambers — each reveals a different art of celebration."
      />
    </div>
  );
}
