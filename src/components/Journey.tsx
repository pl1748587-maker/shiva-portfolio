import { motion } from 'framer-motion';
import { timelineEvents } from '../data/timeline';
import { Calendar, ChevronRight, GraduationCap, Code, Rocket, Sparkles } from 'lucide-react';

export const Journey = () => {
  const getEventIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-4 h-4 text-[#FF4D00]" />;
      case 1:
        return <Code className="w-4 h-4 text-[#FF4D00]" />;
      case 2:
        return <Sparkles className="w-4 h-4 text-[#FF4D00]" />;
      default:
        return <Rocket className="w-4 h-4 text-[#FF4D00]" />;
    }
  };

  return (
    <section id="journey" className="relative py-28 md:py-36 bg-[#F7F6F4] text-[#080808] border-t border-black/10 overflow-hidden select-none">
      {/* Light Architectural Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00] flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            04 // STUDENT ROADMAP &amp; JOURNEY
          </span>
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest font-semibold">
            YEAR ONE MILESTONES • 2026
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-20">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-[#080808] leading-none">
            ENGINEERING <span className="text-[#FF4D00]">TIMELINE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#444444] max-w-2xl font-sans">
            Every master was once a beginner. Tracking the disciplined trajectory of my first year
            in engineering and code development.
          </p>
        </div>

        {/* Minimalist Brutalist Timeline on White Canvas */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FF4D00] via-black/15 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative pl-0 md:pl-20 group"
              >
                {/* Timeline Dot Node on Desktop */}
                <div className="hidden md:flex absolute left-8 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-black/20 group-hover:border-[#FF4D00] items-center justify-center transition-all duration-300 z-10 shadow-md group-hover:shadow-[0_0_15px_rgba(255,77,0,0.4)]">
                  {getEventIcon(idx)}
                </div>

                {/* Timeline Card (Pure White with Subtle Border) */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 hover:border-[#FF4D00]/50 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs sm:text-sm font-extrabold text-[#FF4D00] px-3 py-1 rounded-full bg-[#FF4D00]/10 border border-[#FF4D00]/25">
                        {event.year}
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider font-bold">
                        {event.tag}
                      </span>
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#F5F4F0] border border-black/10 text-zinc-700 font-bold">
                      {event.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#080808] mb-1 group-hover:text-[#080808] transition-colors">
                    {event.title}
                  </h3>

                  <p className="font-mono text-xs text-[#FF4D00] mb-4 flex items-center gap-1.5 font-bold">
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF4D00]" />
                    {event.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#333333] font-sans leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Timeline Footer Banner (Pure White Card) */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <span className="w-3 h-3 rounded-full bg-[#00C853] animate-ping" />
            <div>
              <p className="text-sm font-display font-extrabold text-[#080808]">
                LOOKING FOR SUMMER &amp; WINTER 2026 INTERNSHIPS
              </p>
              <p className="text-xs font-mono text-zinc-600 font-medium">
                Ready to contribute to real-world AI, software, or web development teams.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#080808] hover:bg-[#FF4D00] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md"
          >
            DISCUSS OPPORTUNITIES →
          </a>
        </div>
      </div>
    </section>
  );
};
