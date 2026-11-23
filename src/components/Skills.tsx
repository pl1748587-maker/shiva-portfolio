import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allDirectSkills } from '../data/skills';
import { Terminal, Code2, Cpu, CheckCircle2, Flame, Sparkles } from 'lucide-react';

interface StadiumSkillCard {
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  gradient: string;
  pillGlow: string;
  technologies: { name: string; level: 'Learning' | 'Beginner' | 'Exploring' }[];
  accentBorder: string;
}

const stadiumCards: StadiumSkillCard[] = [
  {
    number: "01",
    title: "PROGRAMMING & CORE LOGIC",
    subtitle: "DATA STRUCTURES, PYTHON SCRIPTS & ALGORITHMIC THINKING",
    tag: "FOUNDATIONS",
    gradient: "from-[#FF4D00] via-[#FF6A00] to-[#FFA000]",
    pillGlow: "rgba(255, 77, 0, 0.35)",
    accentBorder: "hover:border-[#FF4D00]/60",
    technologies: [
      { name: "Python", level: "Learning" },
      { name: "Problem Solving", level: "Learning" },
      { name: "Git & GitHub", level: "Beginner" },
    ]
  },
  {
    number: "02",
    title: "FRONTEND & WEB ENGINEERING",
    subtitle: "MODERN RESPONSIVE LAYOUTS, TAILWIND & KINETIC INTERFACES",
    tag: "CREATIVE TECH",
    gradient: "from-[#FF5500] via-[#FF8000] to-[#FFB700]",
    pillGlow: "rgba(255, 110, 0, 0.3)",
    accentBorder: "hover:border-[#FF6B1A]/60",
    technologies: [
      { name: "HTML5 & Semantics", level: "Beginner" },
      { name: "CSS3 & Tailwind", level: "Beginner" },
      { name: "JavaScript", level: "Learning" },
    ]
  },
  {
    number: "03",
    title: "AI, AUTOMATION & CREATIVE MEDIA",
    subtitle: "LLM API INTEGRATION, PYTHON AUTOMATION & VIDEO EDITING",
    tag: "EXPANDING HORIZONS",
    gradient: "from-[#FF4500] via-[#FF5E00] to-[#FF8C00]",
    pillGlow: "rgba(255, 69, 0, 0.35)",
    accentBorder: "hover:border-[#FF4D00]/60",
    technologies: [
      { name: "AI Tools & APIs", level: "Exploring" },
      { name: "Automated Scripting", level: "Learning" },
      { name: "Video Editing", level: "Exploring" },
    ]
  }
];

export const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Core' | 'Web' | 'AI/ML' | 'DevOps' | 'Thinking'>('All');

  const filteredSkills = selectedFilter === 'All'
    ? allDirectSkills
    : allDirectSkills.filter(s => s.category === selectedFilter);

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Learning':
        return {
          bg: 'bg-[#FF4D00]/15 text-[#FF4D00] border-[#FF4D00]/30',
          dot: 'bg-[#FF4D00]'
        };
      case 'Beginner':
        return {
          bg: 'bg-black/5 text-zinc-700 border-black/15',
          dot: 'bg-zinc-500'
        };
      case 'Exploring':
        return {
          bg: 'bg-amber-500/15 text-amber-700 border-amber-500/30',
          dot: 'bg-amber-500'
        };
      default:
        return {
          bg: 'bg-black/5 text-black border-black/10',
          dot: 'bg-black'
        };
    }
  };

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-[#F7F6F4] text-[#080808] border-t border-black/10 overflow-hidden select-none">
      {/* Light Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Outlined Watermark Backdrop Typography: "EXPERTISE" */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden opacity-[0.035] whitespace-nowrap">
        <span className="font-display font-extrabold text-[18vw] leading-none text-[#080808] tracking-tighter block">
          EXPERTISE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00] flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            02 // TECHNICAL ARSENAL
          </span>
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest font-semibold">
            HONEST COMPETENCIES • ACTIVE GROWTH
          </span>
        </div>

        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-[#080808] leading-none">
              CORE <span className="text-stroke-black hover:text-[#080808] transition-colors duration-300">EXPERTISE</span> &amp;{' '}
              <span className="text-[#FF4D00]">SKILLS.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#444444] max-w-2xl font-sans">
              Inspired by the high-impact stadium aesthetic. Every skill is labeled transparently as Learning, Beginner, or Exploring.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center lg:justify-end gap-2 font-mono text-xs text-zinc-600 font-semibold">
            <Flame className="w-4 h-4 text-[#FF4D00]" />
            <span>DAILY CODE COMMITS &amp; PRACTICAL LABS</span>
          </div>
        </div>

        {/* Stadium / Pill Shape Cards (Pure White with Subtle Borders) */}
        <div className="space-y-6 sm:space-y-8 mb-20">
          {stadiumCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`group relative p-6 sm:p-8 md:p-10 rounded-[32px] sm:rounded-[42px] bg-white border border-black/10 ${card.accentBorder} transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Number, Category, and Technology Badges */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#FF4D00] px-3.5 py-1.5 rounded-full bg-[#FF4D00]/10 border border-[#FF4D00]/25">
                      {card.number} // {card.tag}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
                      STADIUM ARSENAL CAPSULE
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#080808] group-hover:text-[#080808] transition-colors">
                      {card.title}
                    </h3>
                    <p className="font-mono text-xs text-[#555555] mt-1 font-medium">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Skills Pills with Honest Levels */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {card.technologies.map((tech) => {
                      const badge = getLevelBadge(tech.level);
                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F4F0] border border-black/10 group-hover:border-black/20 transition-all text-xs font-mono text-[#080808]"
                        >
                          <span className="font-bold">{tech.name}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${badge.bg}`}>
                            {tech.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: 3D Pill Graphic with Illuminated Rim */}
                <div className="lg:col-span-4 flex items-center justify-end">
                  <div className="relative w-full max-w-[240px] h-20 sm:h-24 rounded-full p-[2px] bg-gradient-to-r from-black/10 to-[#FF4D00]/40 shadow-md group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-[#FFFFFF] via-[#F8F7F4] to-[#F0EFEB] border border-black/5 flex items-center justify-between px-5 relative overflow-hidden">
                      {/* Internal Glowing Pill Indicator */}
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF4D00] animate-pulse shadow-[0_0_10px_#FF4D00]" />
                        <span className="font-mono text-[11px] font-bold text-[#080808] tracking-widest uppercase">
                          ACTIVE DEV
                        </span>
                      </div>

                      {/* 3D Glass Pill Graphic on Far Right */}
                      <div 
                        style={{ boxShadow: `0 0 25px ${card.pillGlow}` }}
                        className={`w-14 sm:w-16 h-10 sm:h-12 rounded-full bg-gradient-to-br ${card.gradient} opacity-95 flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500`}
                      >
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verified Tech Matrix (Pure White with Light Card Grid) */}
        <div className="border border-black/10 rounded-3xl p-6 sm:p-10 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#080808]">
                VERIFIED TECH MATRIX
              </h3>
              <p className="text-xs font-mono text-zinc-500 mt-1">
                // TRANSPARENT REPORT OF MY FIRST-YEAR LEARNING JOURNEY
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {(['All', 'Core', 'Web', 'AI/ML', 'DevOps', 'Thinking'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border font-semibold ${
                    selectedFilter === filter
                      ? 'bg-[#FF4D00] text-white border-[#FF4D00] shadow-[0_0_15px_rgba(255,77,0,0.35)]'
                      : 'bg-[#F5F4F0] text-zinc-700 border-black/10 hover:border-black/25 hover:text-black'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredSkills.map((skill) => {
                const badge = getLevelBadge(skill.level);
                return (
                  <motion.div
                    layout
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group p-5 rounded-2xl bg-[#FAF9F6] border border-black/10 hover:border-[#FF4D00] hover:bg-white transition-all duration-300 relative cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">
                        {skill.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${badge.bg}`}>
                        {skill.level}
                      </span>
                    </div>

                    <h4 className="font-display text-xl font-extrabold text-[#080808] group-hover:text-[#FF4D00] transition-colors mb-2">
                      {skill.name}
                    </h4>

                    <p className="text-xs font-mono text-[#555555] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D00]" />
                      {skill.statusText}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
