import { motion } from 'framer-motion';
import { useScroll } from '../../../context/ScrollContext';
import InvitationProse from '../elements/InvitationProse';

const ROOMS = [
  {
    name: 'Destination Weddings',
    desc: 'Udaipur palaces, Jaipur forts, and global royal venues.',
    accent: '#c9a227',
  },
  {
    name: 'Luxury Decor',
    desc: 'Royal mandaps, marigold symphonies, palace lighting artistry.',
    accent: '#d4849a',
  },
  {
    name: 'Hospitality',
    desc: 'White-glove concierge and royal welcome experiences.',
    accent: '#7a9e6a',
  },
  {
    name: 'Entertainment',
    desc: 'Ghoomar, folk artists, celebrity performances, fireworks.',
    accent: '#c97b4a',
  },
  {
    name: 'Photography',
    desc: 'Cinematic films, drone shots, and storybook albums.',
    accent: '#8b6fa8',
  },
];

export default function PalaceRoomsScene() {
  const { sectionProgress } = useScroll();
  const roomIndex = Math.min(
    ROOMS.length - 1,
    Math.floor(sectionProgress * ROOMS.length)
  );
  const room = ROOMS[roomIndex];

  return (
    <div className="palace-scene palace-scene--rooms">
      <div className="palace-rooms__chamber">
        <div className="palace-rooms__jharokha" />
        <div className="palace-rooms__arch" style={{ '--accent': room.accent }} />

        <motion.div
          key={room.name}
          className="palace-rooms__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="palace-rooms__number" style={{ color: room.accent }}>
            {String(roomIndex + 1).padStart(2, '0')} / {String(ROOMS.length).padStart(2, '0')}
          </span>
          <h3>{room.name}</h3>
          <p>{room.desc}</p>
        </motion.div>

        <div className="palace-rooms__lanterns" aria-hidden="true">
          <span /><span /><span />
        </div>
      </div>

      <div className="palace-rooms__dots">
        {ROOMS.map((r, i) => (
          <span
            key={r.name}
            className={`palace-rooms__dot ${i === roomIndex ? 'is-active' : ''}`}
            style={{ '--accent': r.accent }}
          />
        ))}
      </div>

      <div
        className="palace-rooms__progress"
        style={{ transform: `scaleX(${sectionProgress})` }}
      />

      <InvitationProse
        pre="Discover Our Palace Chambers"
        title="Royal Services"
        body="Move through palace rooms — each chamber reveals a different art of celebration."
      />
    </div>
  );
}
