import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Book Now', cta: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
    >
      <a href="#hero" className="nav__logo">
        <span className="nav__mark">Raanjhana</span>
        <span className="nav__sub">Events</span>
      </a>
      <button className="nav__toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        <span /><span /><span />
      </button>
      <ul className={`nav__links ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={l.cta ? 'nav__cta' : ''} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
