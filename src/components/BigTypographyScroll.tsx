import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const BigTypographyScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth transforms in alternating directions
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-40%', '5%']);
  const x3 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const x4 = useTransform(scrollYProgress, [0, 1], ['-45%', '10%']);
  
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1.03, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative py-28 md:py-40 bg-[#F7F6F4] text-[#080808] overflow-hidden select-none border-t border-b border-black/10"
    >
      {/* Light Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Floating Center Badge */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-8 z-10 relative flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00] flex items-center gap-2 font-bold">
          <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
          KINETIC SCROLL ENGINE // REEL MANIFESTO
        </span>
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest hidden sm:inline-block font-semibold">
          AWARD-WINNING BRUTALIST SCALE
        </span>
      </div>

      <motion.div style={{ scale, opacity }} className="relative flex flex-col gap-2 sm:gap-4 md:gap-6 py-6">
        {/* Row 1: BUILD (Solid Jet Black) */}
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap will-change-transform">
          <div className="flex items-center gap-10 md:gap-16">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="giant-scroll-title font-display font-extrabold uppercase text-[#080808] tracking-tighter"
              >
                BUILD<span className="text-[#FF4D00]">.</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Row 2: CREATE (Outlined Black Stroke) */}
        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap will-change-transform">
          <div className="flex items-center gap-10 md:gap-16">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="giant-scroll-title font-display font-extrabold uppercase text-stroke-black tracking-tighter hover:text-[#080808] transition-colors duration-300"
              >
                CREATE<span className="text-[#FF4D00]">.</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Row 3: EXPERIMENT (With Electric Orange Accent) */}
        <motion.div style={{ x: x3 }} className="flex whitespace-nowrap will-change-transform">
          <div className="flex items-center gap-10 md:gap-16">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className={`giant-scroll-title font-display font-extrabold uppercase tracking-tighter ${
                  i % 2 === 0 ? 'text-[#FF4D00]' : 'text-[#080808]'
                }`}
              >
                EXPERIMENT<span className="text-[#080808]">.</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Row 4: REPEAT (Outlined Black Stroke) */}
        <motion.div style={{ x: x4 }} className="flex whitespace-nowrap will-change-transform">
          <div className="flex items-center gap-10 md:gap-16">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="giant-scroll-title font-display font-extrabold uppercase text-stroke-black tracking-tighter"
              >
                REPEAT<span className="text-[#FF4D00]">.</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Center Card (Pure White with Subtle Border) */}
      <div className="relative z-20 max-w-xl mx-auto px-6 mt-12 text-center">
        <div className="p-7 rounded-3xl bg-white/95 backdrop-blur-xl border border-black/15 shadow-xl flex flex-col items-center gap-3">
          <div className="w-10 h-1 bg-[#FF4D00] rounded-full" />
          <p className="font-display text-lg sm:text-2xl font-extrabold text-[#080808] uppercase tracking-tight">
            TURNING AMBITION INTO EXECUTABLE SOFTWARE
          </p>
          <p className="font-mono text-xs text-[#555555] max-w-md font-medium">
            Continuous iteration, real-world deployment, and uncompromised dedication to technical mastery.
          </p>
        </div>
      </div>
    </section>
  );
};
