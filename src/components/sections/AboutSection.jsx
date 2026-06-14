import { motion } from 'framer-motion';

const stats = [
  { num: '500+', label: 'Royal Celebrations' },
  { num: '20+', label: 'Palace Venues' },
  { num: '12', label: 'Countries' },
];

const features = [
  'Bespoke Rajasthani & fusion wedding design',
  'Udaipur, Jaipur & global destination expertise',
  'Cinematic production & royal styling',
  'White-glove concierge & hospitality',
];

export default function AboutSection() {
  return (
    <div className="about">
      <div className="section-header">
        <span className="section-tag">Celebration of Culture</span>
        <h2>About Raanjhana Events</h2>
        <p className="section-lead">
          Born from the royal heritage of Rajasthan, Raanjhana Events orchestrates
          weddings that feel like living palace folktales — where Ghoomar dancers,
          marigold showers, and golden light write your love story.
        </p>
      </div>

      <div className="about-cards">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="glass-card"
            whileHover={{ scale: 1.03, rotateY: 5 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="glass-card__num">{s.num}</span>
            <h3>{s.label}</h3>
          </motion.div>
        ))}
      </div>

      <div className="about-story glass-panel">
        <div className="about-story__img">
          <img
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
            alt="Royal Rajasthani wedding mandap"
            loading="lazy"
          />
        </div>
        <div className="about-story__text">
          <h3>Where Palace Dreams Come Alive</h3>
          <p>
            We don't plan weddings — we compose royal cinematic experiences.
            From the first invitation unfold to the final lantern-lit farewell,
            every moment is choreographed with the soul of Rajasthan.
          </p>
          <ul>
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
