'use client';
import { motion } from 'framer-motion';

export default function Reveal({ children, direction = 'bottom', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'bottom' ? 40 : direction === 'top' ? -40 : 0, x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
