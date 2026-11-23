import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Code2, BrainCircuit } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-[#F3F3F5] text-[#0A0A0A] select-none">
      {/* Subtle Architectural Grid Lines on Light Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Subtle Warm Amber Glow Behind Typography */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF4D00]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Meta Status Bar */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono border-b border-black/10 pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-zinc-800 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
              AVAILABLE FOR INTERNSHIPS &amp; COLLABS
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-zinc-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#FF4D00]" />
              HYDERABAD, INDIA
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-700 font-mono text-[11px] sm:text-xs">
            <span className="text-[#FF4D00] font-bold">1ST YEAR B.TECH</span>
            <span className="text-zinc-400">•</span>
            <span>AI &amp; MACHINE LEARNING @ TKRCE</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Centerpiece: Giant Black Typography & Layered Portrait (matching Reel 0:04 - 0:08) */}
      <div className="relative my-auto w-full flex flex-col items-center justify-center select-none overflow-hidden py-4 sm:py-6">
        {/* Layer 1: Massive Bold Black Typography */}
        <div className="w-full flex flex-col items-center justify-center leading-none text-center z-0 px-2">
          {/* Top Line: KARLAPUDI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center"
          >
            <h1 className="hero-title-responsive font-display font-extrabold uppercase text-[#050505] tracking-tighter whitespace-nowrap drop-shadow-sm">
              KARLAPUDI
            </h1>
          </motion.div>

          {/* Bottom Line: SHIVAPRASAD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center -mt-2 sm:-mt-6 md:-mt-10 lg:-mt-14"
          >
            <h2 className="hero-title-responsive font-display font-extrabold uppercase tracking-tighter whitespace-nowrap text-[#050505] opacity-90">
              SHIVAPRASAD
            </h2>
          </motion.div>
        </div>

        {/* Layer 2: Personal Portrait Cutout / Frame Layered in Front */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 -mt-16 sm:-mt-28 md:-mt-48 lg:-mt-64 flex flex-col items-center group cursor-pointer"
        >
          {/* Portrait Container with editorial frame & subtle shadow */}
          <div className="relative w-44 sm:w-64 md:w-80 lg:w-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.35)] border-2 border-black/10 bg-white group-hover:border-[#FF4D00] transition-all duration-500">
            <img
              src="/shiva-portrait.jpg"
              alt="Karlapudi Shivaprasad (Shiva)"
              className="w-full h-auto object-cover portrait-editorial-mask contrast-[1.08] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Editorial Glass Badge on Portrait */}
            <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between text-[11px] font-mono text-white">
              <span className="font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" />
                SHIVA (SHIVAPRASAD)
              </span>
              <span className="text-zinc-300">TKRCE '26</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Columns (matching Reel 0:06 - 0:08) */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-6 border-t border-black/10"
        >
          {/* Left Column: Introductions & Capability List (matching Reel 0:06) */}
          <div className="md:col-span-5 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-600 font-bold">
              HI, I'M SHIVAPRASAD
            </div>
            <div className="font-display text-xl sm:text-2xl font-extrabold text-[#050505] tracking-tight leading-none">
              ASPIRING AI &amp; SOFTWARE DEVELOPER
            </div>
            <p className="font-mono text-xs text-[#FF4D00] font-bold tracking-wider">
              &amp; CREATIVE TECH BUILDER
            </p>

            {/* Bracketed capability list as in Reel */}
            <div className="pt-2 space-y-1 text-xs font-mono text-zinc-700">
              <p className="flex items-center gap-1.5">
                <span className="text-[#FF4D00] font-bold">[ • ]</span>
                B.Tech in Artificial Intelligence &amp; Machine Learning
              </p>
              <p className="flex items-center gap-1.5">
                <span className="text-[#FF4D00] font-bold">[ • ]</span>
                Python Scripting &amp; Desktop Automation
              </p>
              <p className="flex items-center gap-1.5">
                <span className="text-[#FF4D00] font-bold">[ • ]</span>
                Modern Responsive Frontend &amp; Kinetic Web
              </p>
              <p className="flex items-center gap-1.5">
                <span className="text-[#FF4D00] font-bold">[ • ]</span>
                Generative AI Media &amp; Video Editing Workflows
              </p>
            </div>
          </div>

          {/* Middle Column: Central Action Button (matching Reel "EXPLORE PROJECTS") */}
          <div className="md:col-span-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#about"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0A0A0A] hover:bg-[#FF4D00] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(255,77,0,0.4)] active:scale-95"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-black/5 border border-black/15 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-sm"
            >
              <span>CONTACT ME</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF4D00]" />
            </a>
          </div>

          {/* Right Column: Key Stats / Metrics Badges (matching Reel 0:06) */}
          <div className="md:col-span-3 flex justify-between md:justify-end gap-6 text-right font-mono">
            <div className="text-left md:text-right">
              <div className="font-display text-3xl font-extrabold text-[#050505] leading-none">
                1<span className="text-[#FF4D00] text-xl">st</span>
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                YEAR B.TECH AIML
              </div>
            </div>

            <div className="text-left md:text-right">
              <div className="font-display text-3xl font-extrabold text-[#050505] leading-none">
                100<span className="text-[#FF4D00] text-xl">%</span>
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                PASSION FOR CODE
              </div>
            </div>

            <div className="text-left md:text-right">
              <div className="font-display text-3xl font-extrabold text-[#050505] leading-none">
                TKR
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                COLLEGE • HYD
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
