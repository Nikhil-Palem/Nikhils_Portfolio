// src/components/BlurFade.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BlurFade = ({ children, delay = 0, duration = 0.8, yOffset = 20, blur = "8px" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, filter: `blur(${blur})` }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
