import { motion } from 'framer-motion';

const services = [
  { icon: '♛', title: 'Destination Weddings', desc: 'Udaipur palaces, Jaipur forts, and global luxury venues.' },
  { icon: '❋', title: 'Luxury Decor', desc: 'Royal mandaps, floral symphonies, and palace lighting artistry.' },
  { icon: '✦', title: 'Wedding Planning', desc: 'End-to-end orchestration from concept to farewell.' },
  { icon: '♫', title: 'Entertainment', desc: 'Ghoomar, folk artists, celebrity performances & fireworks.' },
  { icon: '☼', title: 'Hospitality Management', desc: 'Guest concierge, royal welcome experiences.' },
  { icon: '◈', title: 'Photography', desc: 'Cinematic films, drone shots, and storybook albums.' },
  { icon: '✧', title: 'Bridal Entry Concepts', desc: 'Elephant entries, palki, chariots & floral pathways.' },
  { icon: '⛩', title: 'Venue Selection', desc: 'Palace sourcing across Rajasthan and beyond.' },
];

export default function ServicesSection() {
  return (
    <div className="services">
      <div className="section-header">
        <span className="section-tag">Palace Offerings</span>
        <h2>Our Services</h2>
        <p className="section-lead">
          Floating holographic palace cards reveal our curated royal services
          as you journey through the wedding world.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="service-card glass-card"
            initial={{ opacity: 0, z: -50 }}
            whileInView={{ opacity: 1, z: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.08, duration: 0.8 }}
            whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
          >
            <span className="service-card__icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
