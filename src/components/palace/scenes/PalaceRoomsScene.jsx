import { useScroll } from '../../../context/ScrollContext';
import { assetUrl } from '../../../utils/assets';
import FloatingPetals from '../elements/FloatingPetals';
import HeritageChamberFrame from '../elements/HeritageChamberFrame';
import ElephantProcession from '../elements/ElephantProcession';

const ROOMS = [
  {
    name: 'Destination Weddings',
    catch: 'Palace dreams across Udaipur, Jaipur, Delhi & beyond.',
    tag: 'Palaces & Forts',
    accent: '#c9a227',
    image: assetUrl('assets/mandap-elephants.png'),
    focus: 'center 55%',
  },
  {
    name: 'Luxury Decor',
    catch: 'In-house decorators crafting themes that touch the heart.',
    tag: 'Mandap & Florals',
    accent: '#e85d04',
    image: assetUrl('assets/mandap-elephants.png'),
    focus: 'center 50%',
  },
  {
    name: 'Hospitality',
    catch: 'White-glove welcome from baraat to farewell.',
    tag: 'Royal Welcome',
    accent: '#2d8a4e',
    image: assetUrl('assets/mandap-elephants.png'),
    focus: 'center 50%',
  },
  {
    name: 'Entertainment',
    catch: 'Ghoomar, folk artists & fireworks that ignite the night.',
    tag: 'Folk & Fireworks',
    accent: '#c41e5a',
    image: assetUrl('assets/royal-gate-elephants.png'),
    focus: 'center 40%',
  },
  {
    name: 'Photography',
    catch: 'Cinematic films & albums that preserve your forever.',
    tag: 'Cinematic Films',
    accent: '#8b6fa8',
    image: assetUrl('assets/venue-frame-full.png'),
    focus: 'center 45%',
  },
];

function chamberFade(local) {
  if (local < 0.1) return local / 0.1;
  if (local > 0.9) return (1 - local) / 0.1;
  return 1;
}

export default function PalaceRoomsScene() {
  const { sectionProgress } = useScroll();
  const total = ROOMS.length;
  const roomProgress = sectionProgress * total;
  const roomIndex = Math.min(total - 1, Math.floor(roomProgress));
  const roomLocal = roomProgress - roomIndex;
  const room = ROOMS[roomIndex];
  const nextRoom = ROOMS[Math.min(roomIndex + 1, total - 1)];
  const textOpacity = chamberFade(roomLocal);
  const textLift = (1 - textOpacity) * 8;

  return (
    <div
      className="palace-scene palace-scene--rooms"
      style={{ '--room-accent': room.accent }}
    >
      <div className="rooms-stage__bg" aria-hidden="true" />
      <div className="rooms-stage__pattern" aria-hidden="true" />
      <div className="rooms-stage__garland rooms-stage__garland--l" aria-hidden="true" />
      <div className="rooms-stage__garland rooms-stage__garland--r" aria-hidden="true" />
      <FloatingPetals count={12} />

      <ElephantProcession progress={sectionProgress} />

      <div className="heritage-chamber">
        <div className="heritage-chamber__stage">
          <div className="heritage-chamber__content">
            <div
              className="heritage-chamber__plaque"
              style={{
                opacity: textOpacity,
                transform: `translateY(${textLift}px)`,
              }}
            >
              <p className="heritage-chamber__label" style={{ color: room.accent }}>
                Chamber {String(roomIndex + 1).padStart(2, '0')} · {room.tag}
              </p>
              <h2 className="heritage-chamber__title">{room.name}</h2>
              <p className="heritage-chamber__catch">{room.catch}</p>
            </div>

            <HeritageChamberFrame
              image={room.image}
              nextImage={roomIndex < total - 1 ? nextRoom.image : null}
              nextFocus={roomIndex < total - 1 ? nextRoom.focus : undefined}
              blend={roomLocal}
              alt={room.name}
              focus={room.focus}
            />
          </div>
        </div>

        <div className="heritage-chamber__dots">
          {ROOMS.map((r, i) => (
            <span
              key={r.name}
              className={`heritage-chamber__dot ${i === roomIndex ? 'is-active' : ''}`}
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
