import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Raanjhana transformed our Udaipur palace wedding into a living royal film. Guests still speak of the magic.',
    name: 'Priya & Arjun Kapoor',
    event: 'Taj Lake Palace Wedding',
  },
  {
    quote: 'The elephant entry, the mandap, the Ghoomar — every detail was impossibly beautiful. Pure Rajasthani royalty.',
    name: 'Natasha & Rahul Mehta',
    event: 'Jaipur Royal Celebration',
  },
  {
    quote: 'From invitation to farewell brunch, every touchpoint felt like luxury cinema. We are forever grateful.',
    name: 'Elena & Marcus Chen',
    event: 'Amalfi-Rajasthan Fusion',
  },
];

export default function TestimonialsSection() {
  return (
    <div className="testimonials">
      <div className="section-header">
        <span className="section-tag">Whispers from Palace Walls</span>
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            className="testimonial glass-panel"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15, duration: 0.9 }}
          >
            <div className="testimonial__frame" />
            <div className="testimonial__stars">★★★★★</div>
            <p>"{t.quote}"</p>
            <footer>
              <strong>{t.name}</strong>
              <span>{t.event}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  );
}
