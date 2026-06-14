import { useState } from 'react';
import { motion } from 'framer-motion';
import { assetUrl } from '../../../utils/assets';
import FloatingPetals from '../elements/FloatingPetals';

export default function SunsetInviteScene() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="palace-scene palace-scene--sunset">
      <div className="sunset__sky" />
      <div className="sunset__water" />
      <img
        src={assetUrl('assets/mandap-elephants.png')}
        alt=""
        className="sunset__mandap-art"
        aria-hidden="true"
      />
      <div className="sunset__mandap-glow" />

      <div className="sunset__lanterns" aria-hidden="true">
        {Array.from({ length: 36 }).map((_, i) => (
          <motion.span
            key={i}
            className="sunset__lantern"
            style={{ '--x': `${(i * 17) % 100}%`, '--i': i }}
            animate={{ y: [0, -16 - (i % 4) * 6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.08 }}
          />
        ))}
      </div>

      <div className="sunset__particles" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i} className="sunset__particle" style={{ '--i': i }} />
        ))}
      </div>

      <FloatingPetals count={8} />

      <div className="sunset__table">
        <div className="sunset__table-cloth" aria-hidden="true" />
        <div className="sunset__invitation-card">
          <div className="sunset__card-border" aria-hidden="true" />
          <span className="sunset__card-om">ॐ</span>
          <p className="sunset__card-pre">With Blessings &amp; Joy</p>
          <h2>Begin Your Royal Journey</h2>
          <p className="sunset__card-sub">Share your dream celebration with Raanjhana Events</p>

          {sent ? (
            <motion.p
              className="sunset__card-sent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Your invitation has been received. We shall write back soon. ✦
            </motion.p>
          ) : (
            <form className="sunset__form" onSubmit={handleSubmit}>
              <label>
                <span>Your Name</span>
                <input type="text" name="name" required placeholder="Enter your name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" required placeholder="you@email.com" />
              </label>
              <label>
                <span>Wedding Date</span>
                <input type="date" name="date" />
              </label>
              <label>
                <span>Your Royal Vision</span>
                <textarea name="vision" required rows={3} placeholder="Describe your dream celebration..." />
              </label>
              <button type="submit" className="sunset__submit">
                Send Royal Invitation
              </button>
            </form>
          )}
        </div>
      </div>

      <footer className="palace-footer">
        <p>© 2026 Raanjhana Events · Crafting Timeless Royal Celebrations</p>
      </footer>
    </div>
  );
}
