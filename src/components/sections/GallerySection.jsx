import { motion } from 'framer-motion';

const photos = [
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', title: 'Royal Portrait', cat: 'Couple' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', title: 'Palace Stage', cat: 'Ceremony' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', title: 'Sacred Mandap', cat: 'Decor' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', title: 'Lake Palace', cat: 'Destination' },
  { src: 'https://images.unsplash.com/photo-1522673606300-8d480b9b7b0?w=600&q=80', title: 'Golden Hour', cat: 'Photoshoot' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', title: 'Royal Mandap', cat: 'Traditional' },
  { src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80', title: 'Starlit Reception', cat: 'Celebration' },
];

export default function GallerySection() {
  return (
    <div className="gallery">
      <div className="section-header">
        <span className="section-tag">Hanging Memories</span>
        <h2>Wedding Gallery</h2>
        <p className="section-lead">
          Floating frames suspended in golden light — each memory a portal to romance.
        </p>
      </div>
      <div className="gallery-float">
        {photos.map((p, i) => (
          <motion.div
            key={p.title}
            className="gallery-frame"
            style={{
              '--delay': `${i * 0.1}s`,
              '--x': `${(i % 3) * 30 - 30}%`,
              '--y': `${Math.floor(i / 3) * 25}%`,
              '--rot': `${(i % 2 === 0 ? -1 : 1) * (3 + i)}deg`,
            }}
            initial={{ opacity: 0, y: 80, rotateZ: 0 }}
            whileInView={{ opacity: 1, y: 0, rotateZ: 'var(--rot)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 1 }}
            whileHover={{ scale: 1.05, rotateY: 8, z: 50 }}
          >
            <div className="gallery-frame__chain" />
            <div className="gallery-frame__holo" />
            <img src={p.src} alt={p.title} loading="lazy" />
            <div className="gallery-frame__cap">
              <h4>{p.title}</h4>
              <span>{p.cat}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
