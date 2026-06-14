import { motion } from 'framer-motion';
import { useScroll } from '../../context/ScrollContext';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function ScrollSections() {
  const { section } = useScroll();

  return (
    <>
      <section id="hero" className="scroll-panel scroll-panel--hero" data-scene="invitation">
        <div className="scroll-spacer scroll-spacer--hero" />
      </section>

      <section id="about" className="scroll-panel scroll-panel--about" data-scene="courtyard">
        <motion.div
          className="panel-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <AboutSection />
        </motion.div>
      </section>

      <section id="palace" className="scroll-panel scroll-panel--palace" data-scene="palace">
        <motion.div
          className="panel-content panel-content--center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
        >
          <span className="section-tag">Signature Experience</span>
          <h2>Grand Royal Wedding</h2>
          <p className="section-lead">
            A majestic palace landscape where royal elephants welcome your celebration.
            Every scroll reveals the grandeur of destination weddings.
          </p>
        </motion.div>
      </section>

      <section id="services" className="scroll-panel scroll-panel--services" data-scene="palace">
        <motion.div
          className="panel-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
        >
          <ServicesSection />
        </motion.div>
      </section>

      <section id="gallery" className="scroll-panel scroll-panel--gallery" data-scene="gallery">
        <motion.div
          className="panel-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={fadeUp}
        >
          <GallerySection />
        </motion.div>
      </section>

      <section id="testimonials" className="scroll-panel scroll-panel--testimonials" data-scene="gallery">
        <motion.div
          className="panel-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
        >
          <TestimonialsSection />
        </motion.div>
      </section>

      <section id="contact" className="scroll-panel scroll-panel--contact" data-scene="sunset">
        <motion.div
          className="panel-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <ContactSection />
        </motion.div>
      </section>

      <footer className="footer">
        <p>© 2026 Raanjhana Events · Crafting Timeless Royal Celebrations</p>
      </footer>
    </>
  );
}
