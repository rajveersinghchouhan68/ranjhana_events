import { motion } from 'framer-motion';
import InvitationProse from '../elements/InvitationProse';

const PAINTINGS = [
  {
    title: 'Udaipur Lake Palace',
    image: 'https://images.unsplash.com/photo-1596176530439-5f7e8ef1fcc8?w=400&q=80',
  },
  {
    title: 'Royal Mandap',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
  },
  {
    title: 'Golden Hour Vows',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80',
  },
  {
    title: 'Palace Procession',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80',
  },
  {
    title: 'Starlit Reception',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80',
  },
  {
    title: 'Heritage Portrait',
    image: 'https://images.unsplash.com/photo-1522673606300-8d963b8af0a4?w=400&q=80',
  },
];

export default function GalleryCorridorScene() {
  return (
    <div className="palace-scene palace-scene--gallery">
      <div className="gallery-corridor__perspective">
        <div className="gallery-corridor__wall gallery-corridor__wall--left" />
        <div className="gallery-corridor__wall gallery-corridor__wall--right" />
        <div className="gallery-corridor__floor" />
        <div className="gallery-corridor__ceiling" />

        <div className="gallery-corridor__frames">
          {PAINTINGS.map((p, i) => (
            <motion.div
              key={p.title}
              className="gallery-corridor__painting"
              style={{ '--i': i }}
              whileHover={{ scale: 1.05, rotateY: 3 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <div className="gallery-corridor__frame">
                <img src={p.image} alt="" className="gallery-corridor__photo" loading="lazy" />
                <span className="gallery-corridor__plaque">{p.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <InvitationProse
        pre="Palace Museum Corridor"
        title="Memories in Gold Frames"
        body="Walk through corridors where every wedding memory hangs like a royal painting."
      />
    </div>
  );
}
