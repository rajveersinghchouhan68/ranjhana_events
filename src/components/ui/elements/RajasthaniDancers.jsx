import { motion } from 'framer-motion';
import { useScroll } from '../../../context/ScrollContext';

export default function RajasthaniDancers() {
  const { heroProgress = 0 } = useScroll();
  const danceIntensity = 1 + heroProgress * 0.4;

  return (
    <div className="royal-dancers-wrap">
      <motion.div
        className="royal-dancers"
        animate={{
          rotate: [0, 1.5 * danceIntensity, 0, -1.5 * danceIntensity, 0],
          y: [0, -3, 0, -2, 0],
        }}
        transition={{ duration: 4 / danceIntensity, repeat: Infinity, ease: 'easeInOut' }}
      >
      <div className="royal-dancers__balcony" />
      <div className="royal-dancers__figures" />
      <div className="royal-dancers__flowers" />
      </motion.div>
    </div>
  );
}
