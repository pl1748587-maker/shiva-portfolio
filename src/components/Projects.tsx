import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Project } from '../types';
import { ArrowUpRight, Github, ExternalLink, Terminal, Sparkles, Layers } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="relative py-28 md:py-36 bg-[#F7F6F4] text-[#080808] border-t border-black/10 overflow-hidden select-none">
      {/* Light Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Giant Background Word "WORK" inspired by Reel */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden opacity-[0.035] whitespace-nowrap">
        <span className="font-display font-extrabold text-[32vw] leading-none text-[#080808] tracking-tighter block">
          WORK
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00] flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            03 // FEATURED LIVE PROJECTS
          </span>
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest font-semibold">
            ENGINEERING &amp; EXPERIMENTS
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-20">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-[#080808] leading-none">
            FEATURED <span className="text-[#FF4D00]">PROJECTS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#444444] max-w-2xl font-sans">
            Curated selection of autonomous AI systems, interactive web applications, and python automation tools built from scratch.
          </p>
        </div>

        {/* Project Cards Stack (Pure White Cards with Subtle Borders) */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative rounded-[32px] sm:rounded-[40px] bg-white border border-black/10 hover:border-[#FF4D00]/60 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              {/* Top Accent Orange Line */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FF4D00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Information & Details */}
                <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#FF4D00] px-3.5 py-1.5 rounded-full bg-[#FF4D00]/10 border border-[#FF4D00]/25">
                      0{idx + 1} // {project.category}
                    </span>
                    {project.metrics && (
                      <span className="hidden sm:inline-flex text-[11px] font-mono text-zinc-600 bg-[#F5F4F0] px-3 py-1.5 rounded-full border border-black/10 font-semibold">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#080808] group-hover:text-[#080808] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#FF4D00] mt-1 font-bold tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-[#333333] font-sans text-sm sm:text-base leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technology Tags */}
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2 font-bold">
                      TECH STACK &amp; FRAMEWORKS
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 rounded-lg bg-[#F5F4F0] border border-black/10 text-xs font-mono text-[#080808] font-bold group-hover:border-black/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-black/5 hover:bg-[#080808] text-[#080808] hover:text-white border border-black/15 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group/btn active:scale-95 shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>GITHUB REPO</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF4D00] group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-[#FF4D00] hover:bg-[#FF6B1A] text-white border border-[#FF4D00] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_25px_rgba(255,77,0,0.4)] active:scale-95 shadow-md shadow-[#FF4D00]/25"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>LIVE DEMO</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Visual Preview Mockup */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-black/15 bg-white aspect-[16/10] group/img shadow-md transition-all duration-500 group-hover:border-[#FF4D00]/50 group-hover:shadow-xl">
                    {/* Project Preview Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                    />

                    {/* Corner Tag */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md border border-black/10 text-[10px] font-mono text-[#080808] font-bold flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" />
                      INTERACTIVE SHOWCASE
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on links */}
        <div className="mt-14 text-center">
          <p className="font-mono text-xs text-zinc-500 font-semibold">
            // ALL REPOSITORIES AND DEMOS ARE CONFIGURED WITH CLEAR, EDITABLE REPOSITORY LINKS
          </p>
        </div>
      </div>
    </section>
  );
};
