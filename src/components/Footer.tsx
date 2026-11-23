import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/pl1748587-maker",
      icon: <Github className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shiva-prasad-44974b327",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ksp._01?avpt=MXhkNHMxN2x5Y3M2YQ==",
      icon: <Instagram className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="relative bg-[#F7F6F4] text-[#080808] pt-20 pb-12 overflow-hidden border-t border-black/10 select-none">
      {/* Light Architectural Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Tier: Navigation, Social Links & Scroll-to-Top Button */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-12 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#FF4D00] flex items-center justify-center font-mono font-bold text-sm text-white shadow-md shadow-[#FF4D00]/25">
              S
            </span>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base tracking-wider text-[#080808]">
                KARLAPUDI SHIVAPRASAD
              </span>
              <span className="text-[11px] font-mono text-zinc-500 font-medium">
                ASPIRING AI &amp; SOFTWARE DEVELOPER • HYDERABAD
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-mono font-semibold">
            <a href="#about" className="text-zinc-700 hover:text-[#FF4D00] transition-colors">
              ABOUT
            </a>
            <a href="#skills" className="text-zinc-700 hover:text-[#FF4D00] transition-colors">
              SKILLS
            </a>
            <a href="#projects" className="text-zinc-700 hover:text-[#FF4D00] transition-colors">
              PROJECTS
            </a>
            <a href="#journey" className="text-zinc-700 hover:text-[#FF4D00] transition-colors">
              JOURNEY
            </a>
            <a href="#contact" className="text-zinc-700 hover:text-[#FF4D00] transition-colors">
              CONTACT
            </a>
          </div>

          {/* Social Links & Scroll to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} Profile`}
                  className="w-9 h-9 rounded-full bg-black/5 border border-black/10 hover:border-[#FF4D00] text-zinc-700 hover:text-[#FF4D00] hover:bg-[#FF4D00]/10 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Orange Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-[#FF4D00] hover:bg-[#FF6B1A] text-white flex items-center justify-center shadow-lg shadow-[#FF4D00]/25 hover:scale-105 transition-all duration-300 group"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Giant Outlined Brand Typography on Light Canvas */}
        <div className="py-12 sm:py-16 text-center overflow-hidden">
          <span className="font-display font-extrabold uppercase text-stroke-black-subtle text-[15vw] leading-none tracking-tighter block whitespace-nowrap opacity-60 hover:opacity-100 hover:text-stroke-black transition-all duration-500">
            SHIVAPRASAD
          </span>
        </div>

        {/* Legal & Details Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 pt-6 border-t border-black/10">
          <p>© 2026 Karlapudi Shivaprasad. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            Designed &amp; engineered with passion for code &amp; AI
          </p>
          <p>TKR College of Engineering • Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
};
