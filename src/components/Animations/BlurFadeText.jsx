// src/components/BlurFadeText.js
import { motion } from 'framer-motion';

const BlurFadeText = ({ text, animateByCharacter = true, characterDelay = 0.02, className = "" }) => {
  return (
    <motion.h1 className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: index * characterDelay,
            duration: 1,
            ease: "easeOut"
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default BlurFadeText;
