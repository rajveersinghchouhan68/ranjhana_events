import { motion } from 'framer-motion';

const PAINTINGS = [
  { title: 'Udaipur Lake Palace', seed: 'udaipur-palace' },
  { title: 'Royal Mandap', seed: 'royal-mandap' },
  { title: 'Golden Hour Vows', seed: 'golden-vows' },
  { title: 'Palace Procession', seed: 'palace-procession' },
  { title: 'Starlit Reception', seed: 'starlit-reception' },
  { title: 'Heritage Portrait', seed: 'heritage-portrait' },
];

export default function GalleryCorridorScene() {
  return (
    <div className="palace-scene palace-scene--gallery">
      <header className="gallery-corridor__header">
        <p>Palace Museum Corridor</p>
        <h2>Memories in Gold Frames</h2>
      </header>

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
              whileHover={{ scale: 1.04, rotateY: 2 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <div className="gallery-corridor__frame">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/400/500`}
                  alt=""
                  className="gallery-corridor__photo"
                  loading="lazy"
                />
                <span className="gallery-corridor__plaque">{p.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
