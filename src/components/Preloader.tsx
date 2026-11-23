import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }: { onComplete?: () => void }) => {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 250);
          return 100;
        }
        const increment = Math.floor(Math.random() * 16) + 10;
        return Math.min(100, prev + increment);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-50 bg-[#F7F6F4] flex flex-col justify-between p-8 sm:p-12 text-[#080808] select-none overflow-hidden"
        >
          {/* Top meta */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping" />
              PORTFOLIO 2026 // EDITION
            </span>
            <span>HYDERABAD, INDIA</span>
          </div>

          {/* Center Brand Name */}
          <div className="flex flex-col items-center justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.45em' }}
              animate={{ opacity: 1, letterSpacing: '0.25em' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-widest text-[#080808]"
            >
              S H I V A P R A S A D
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-3 font-mono text-xs sm:text-sm text-[#FF4D00] font-bold tracking-widest uppercase"
            >
              ASPIRING AI &amp; SOFTWARE DEVELOPER
            </motion.span>
          </div>

          {/* Bottom Loading Bar & Counter */}
          <div className="space-y-3 max-w-md mx-auto w-full">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-600">
              <span>INITIALIZING PORTFOLIO</span>
              <span className="text-[#FF4D00] font-bold">{percent}%</span>
            </div>
            <div className="w-full h-[2px] bg-black/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#FF4D00]"
                style={{ width: `${percent}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
