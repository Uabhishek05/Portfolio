import { memo, useCallback, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldShow = window.scrollY > 400;
      setShow((prev) => (prev === shouldShow ? prev : shouldShow));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-50 rounded-full border border-white/20 bg-slate-900/80 p-3 text-white shadow-glow backdrop-blur md:bottom-8 md:right-8"
        >
          <ArrowUp size={18} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export default memo(BackToTop);
