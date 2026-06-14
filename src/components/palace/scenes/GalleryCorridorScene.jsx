import { motion } from 'framer-motion';

const PAINTINGS = [
  { title: 'Udaipur Lake Palace', hue: '210' },
  { title: 'Royal Mandap', hue: '28' },
  { title: 'Golden Hour Vows', hue: '350' },
  { title: 'Palace Procession', hue: '42' },
  { title: 'Starlit Reception', hue: '265' },
  { title: 'Heritage Portrait', hue: '15' },
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
              style={{ '--i': i, '--hue': p.hue }}
              whileHover={{ scale: 1.04, rotateY: 2 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <div className="gallery-corridor__frame">
                <div className="gallery-corridor__canvas" aria-hidden="true" />
                <span className="gallery-corridor__plaque">{p.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
