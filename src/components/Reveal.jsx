import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, y = 20 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
);

export default Reveal;
