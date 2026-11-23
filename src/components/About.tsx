import { motion } from 'framer-motion';
import { Terminal, BrainCircuit, Code, Compass, ArrowRight, Sparkles } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="relative bg-[#F7F6F4] text-[#080808] pt-24 pb-28 md:pt-32 md:pb-36 overflow-hidden border-t border-black/10 select-none">
      {/* Light Architectural Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Subtle Warm Amber Glow Behind */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4D00]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00] flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            01 // ABOUT ME
          </span>
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
            ENGINEERING • STUDENT • BUILDER
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Oversized Brutalist Headline */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-[#080808] leading-[0.92]">
                CURIOUS BY NATURE.
                <br />
                <span className="text-stroke-black hover:text-[#080808] transition-colors duration-300">
                  BUILDER BY
                </span>{' '}
                <span className="text-[#FF4D00]">CHOICE.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-base sm:text-lg text-[#333333] font-sans leading-relaxed"
            >
              <p>
                I am <strong className="text-[#080808] font-bold">Karlapudi Shivaprasad (Shiva)</strong>, 
                a first-year engineering student pursuing my B.Tech in{' '}
                <span className="text-[#080808] font-semibold border-b-2 border-[#FF4D00]">Artificial Intelligence &amp; Machine Learning</span> at{' '}
                <span className="text-[#080808] font-semibold">TKR College of Engineering</span> in Hyderabad, India.
              </p>

              <p className="text-[#444444]">
                Rather than waiting for the curriculum to catch up, I believe in learning through execution. 
                I dive deep into <span className="text-[#080808] font-medium">Python programming</span>, 
                explore <span className="text-[#080808] font-medium">modern web architecture</span>, 
                experiment with <span className="text-[#080808] font-medium">AI APIs &amp; automation scripts</span>, 
                and refine visual communication through <span className="text-[#080808] font-medium">video editing</span>.
              </p>

              <p className="text-[#444444]">
                My objective is clear: build real-world software, turn ideas into functional prototypes, 
                and develop the rigorous technical skills necessary to secure high-impact developer internships.
              </p>
            </motion.div>

            {/* Quick Action Links */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href="#skills"
                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF4D00] hover:text-[#080808] font-bold transition-colors group"
              >
                <span>EXPLORE TECHNICAL SKILLS</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zinc-600 hover:text-[#080808] font-semibold transition-colors group"
              >
                <span>VIEW FEATURED PROJECTS</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean White Bento Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Card 1: Education & Location (Pure White Card) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-black/10 shadow-sm hover:border-[#FF4D00]/50 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-[#FF4D00] uppercase tracking-wider font-bold">
                  ACADEMIC FOUNDATION
                </span>
                <BrainCircuit className="w-4 h-4 text-zinc-400 group-hover:text-[#FF4D00] transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#080808] mb-1">
                TKR College of Engineering
              </h3>
              <p className="font-mono text-xs text-zinc-600 mb-3">
                Hyderabad, Telangana, India
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#F2F1EE] border border-black/10 font-mono text-zinc-800 font-semibold">
                  B.Tech AIML
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-[#FF4D00]/10 border border-[#FF4D00]/25 font-mono text-[#FF4D00] font-bold">
                  1st Year Student
                </span>
              </div>
            </motion.div>

            {/* Card 2: Current Focus Pillars (Pure White Card) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-black/10 shadow-sm hover:border-black/25 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-zinc-600 uppercase tracking-wider font-bold">
                  CORE INTERESTS &amp; PASSIONS
                </span>
                <Code className="w-4 h-4 text-[#FF4D00]" />
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#F7F6F4] border border-black/5">
                  <span className="text-[#FF4D00] block font-bold mb-0.5">01.</span>
                  <span className="text-[#080808] font-medium">AI &amp; Machine Learning</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F6F4] border border-black/5">
                  <span className="text-[#FF4D00] block font-bold mb-0.5">02.</span>
                  <span className="text-[#080808] font-medium">Python Programming</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F6F4] border border-black/5">
                  <span className="text-[#FF4D00] block font-bold mb-0.5">03.</span>
                  <span className="text-[#080808] font-medium">Modern Frontend Web</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F7F6F4] border border-black/5">
                  <span className="text-[#FF4D00] block font-bold mb-0.5">04.</span>
                  <span className="text-[#080808] font-medium">Process Automation</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Philosophy Quote (White/Ivory Gradient Card) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-white to-[#F2F1EE] border border-black/10 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF4D00]/5 rounded-full blur-2xl" />
              <div className="flex items-center gap-2 mb-2 text-[#FF4D00]">
                <Compass className="w-4 h-4" />
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold">PHILOSOPHY</span>
              </div>
              <p className="font-display text-base font-bold text-[#080808] italic leading-snug">
                "The fastest way to learn is to build projects that challenge your limits every single day."
              </p>
              <div className="mt-3 text-right">
                <span className="font-mono text-[11px] text-zinc-500">— Shiva</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
