import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../../../context/ScrollContext';
import { assetUrl } from '../../../utils/assets';
import FloatingPetals from '../elements/FloatingPetals';
import PalaceJharokha from '../elements/PalaceJharokha';

const ROOMS = [
  {
    name: 'Destination Weddings',
    catch: 'Palace dreams across Udaipur, Jaipur, Delhi & beyond.',
    tag: 'Palaces & Forts',
    accent: '#c9a227',
    image: assetUrl('assets/chambers/destination.jpg'),
    focus: 'center 42%',
  },
  {
    name: 'Luxury Decor',
    catch: 'In-house decorators crafting themes that touch the heart.',
    tag: 'Mandap & Florals',
    accent: '#e85d04',
    image: assetUrl('assets/chambers/decor.jpg'),
    focus: 'center 38%',
  },
  {
    name: 'Hospitality',
    catch: 'White-glove welcome from baraat to farewell.',
    tag: 'Royal Welcome',
    accent: '#2d8a4e',
    image: assetUrl('assets/chambers/hospitality.jpg'),
    focus: 'center 35%',
  },
  {
    name: 'Entertainment',
    catch: 'Ghoomar, folk artists & fireworks that ignite the night.',
    tag: 'Folk & Fireworks',
    accent: '#c41e5a',
    image: assetUrl('assets/chambers/hospitality.jpg'),
    focus: 'center 48%',
  },
  {
    name: 'Photography',
    catch: 'Cinematic films & albums that preserve your forever.',
    tag: 'Cinematic Films',
    accent: '#8b6fa8',
    image: assetUrl('assets/chambers/photography.jpg'),
    focus: 'center 40%',
  },
];

function RoomPhoto({ room }) {
  return (
    <>
      <img
        src={room.image}
        alt={room.name}
        className="rooms-stage__room-img"
        style={{ objectPosition: room.focus }}
        draggable={false}
        loading="eager"
      />
      <div className="rooms-stage__img-veil" aria-hidden="true" />
    </>
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
        '--room-glow': `${room.accent}40`,
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
        <AnimatePresence mode="wait">
          <motion.div
            key={room.name}
            className="rooms-stage__caption"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
          >
            <span className="rooms-stage__chamber-label" style={{ color: room.accent }}>
              Chamber {String(roomIndex + 1).padStart(2, '0')} · {room.tag}
            </span>
            <h2 className="rooms-stage__chamber-title">{room.name}</h2>
            <p className="rooms-stage__chamber-catch">{room.catch}</p>
          </motion.div>
        </AnimatePresence>

        <div className="rooms-stage__frame-wrap">
          <PalaceJharokha accent={room.accent} />

          <div className="rooms-stage__window">
            <AnimatePresence mode="wait">
              <motion.div
                key={room.name}
                className="rooms-stage__visual"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <RoomPhoto room={room} />
              </motion.div>
            </AnimatePresence>

            {blend > 0.4 && roomIndex < total - 1 && (
              <motion.div
                className="rooms-stage__visual rooms-stage__visual--next"
                initial={{ opacity: 0 }}
                animate={{ opacity: blend * 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <RoomPhoto room={nextRoom} />
              </motion.div>
            )}
          </div>
        </div>

        <div className="rooms-stage__dots">
          {ROOMS.map((r, i) => (
            <span
              key={r.name}
              className={`rooms-stage__dot ${i === roomIndex ? 'is-active' : ''}`}
              style={{ '--accent': r.accent }}
              title={r.name}
            />
          ))}
        </div>
      </div>

      <div
        className="rooms-stage__progress"
        style={{ transform: `scaleX(${sectionProgress})` }}
      />
    </div>
  );
}
