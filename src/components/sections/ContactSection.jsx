import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      e.target.reset();
    }, 3000);
  }

  return (
    <div className="contact">
      <div className="contact-sunset-bg" aria-hidden="true" />
      <div className="contact-wrapper glass-panel">
        <div className="contact-info">
          <span className="section-tag">Sunset Courtyard</span>
          <h2>Let's Create Your Dream Wedding</h2>
          <p>
            As palace lights glow and lanterns rise, share your vision with us.
            Raanjhana Events will transform it into an unforgettable royal celebration.
          </p>
          <div className="contact-details">
            <div><span>Email</span><a href="mailto:hello@raanjhanaevents.com">hello@raanjhanaevents.com</a></div>
            <div><span>Phone</span><a href="tel:+919876543210">+91 98765 43210</a></div>
            <div><span>Studios</span><span>Udaipur · Jaipur · Mumbai · Dubai</span></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label><span>Your Name</span><input name="name" required placeholder="Enter your name" /></label>
            <label><span>Email</span><input type="email" name="email" required placeholder="you@email.com" /></label>
          </div>
          <div className="form-row">
            <label><span>Wedding Date</span><input type="date" name="date" /></label>
            <label><span>Guest Count</span><input type="number" name="guests" min="1" placeholder="Approximate guests" /></label>
          </div>
          <label><span>Your Royal Vision</span><textarea name="message" rows="4" required placeholder="Describe your dream celebration..." /></label>
          <motion.button
            type="submit"
            className="btn btn--primary btn--full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {sent ? 'Journey Begun ✦' : 'Begin Your Wedding Journey'}
          </motion.button>
        </form>
      </div>
    </div>
  );
}
