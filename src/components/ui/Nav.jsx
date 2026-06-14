import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#courtyard', label: 'Courtyard' },
  { href: '#venue', label: 'Venue' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#rooms', label: 'Chambers' },
  { href: '#invite', label: 'RSVP', cta: true },
];

export default function Nav({ hidden = false }) {
  const [open, setOpen] = useState(false);

  if (hidden) return null;

  return (
    <motion.nav
      className="palace-nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <a href="#hero" className="palace-nav__crest">
        <span>Raanjhana</span>
        <em>Events</em>
      </a>
      <button className="palace-nav__toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
      <ul className={`palace-nav__links ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={l.cta ? 'palace-nav__cta' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
