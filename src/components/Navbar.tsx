import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, Instagram } from 'lucide-react';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERTISE', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'JOURNEY', href: '#journey' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F7F6F4]/95 backdrop-blur-md border-b border-black/10 py-3.5 shadow-sm'
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2.5 font-display text-lg sm:text-xl font-extrabold tracking-tight transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-black/5 border border-black/15 text-black group-hover:border-[#FF4D00] group-hover:text-[#FF4D00] group-hover:bg-[#FF4D00]/10 flex items-center justify-center font-mono text-sm font-bold transition-all">
              S
            </span>
            <div className="flex flex-col">
              <span className="leading-tight tracking-wider text-sm font-extrabold text-[#080808]">
                SHIVAPRASAD<span className="text-[#FF4D00]">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 hidden sm:inline-block">
                HYDERABAD • 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs uppercase tracking-widest text-zinc-700 hover:text-black font-semibold transition-colors relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF4D00] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA ("LET'S TALK") */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FF4D00] bg-[#FF4D00] hover:bg-[#FF6B1A] text-xs font-mono font-bold uppercase tracking-wider text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,77,0,0.4)] active:scale-95 shadow-md shadow-[#FF4D00]/20"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border bg-black/5 border-black/15 text-black hover:text-[#FF4D00] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Clean White Theme) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#F7F6F4]/98 backdrop-blur-2xl md:hidden pt-28 px-6 flex flex-col justify-between pb-12 border-b border-black/10 text-[#080808]"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                // NAVIGATION DIRECTORY
              </span>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="font-display text-3xl font-extrabold tracking-tight text-[#080808] hover:text-[#FF4D00] transition-colors flex items-center justify-between group"
                >
                  <span>{item.label}</span>
                  <span className="text-sm font-mono text-zinc-400 group-hover:text-[#FF4D00]">
                    0{index + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-black/10 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-[#FF4D00] hover:bg-[#FF6B1A] text-white font-mono text-center text-xs font-bold tracking-widest uppercase transition-all shadow-lg shadow-[#FF4D00]/25"
              >
                LET'S TALK // CONTACT ME
              </a>
              {/* Working Mobile Social Icons */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href="https://github.com/pl1748587-maker"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full bg-black/5 border border-black/10 hover:border-[#FF4D00] text-zinc-700 hover:text-[#FF4D00] flex items-center justify-center transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shiva-prasad-44974b327"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full bg-black/5 border border-black/10 hover:border-[#FF4D00] text-zinc-700 hover:text-[#FF4D00] flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/ksp._01?avpt=MXhkNHMxN2x5Y3M2YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-10 h-10 rounded-full bg-black/5 border border-black/10 hover:border-[#FF4D00] text-zinc-700 hover:text-[#FF4D00] flex items-center justify-center transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              <div className="flex justify-between text-xs font-mono text-zinc-500 pt-2">
                <span>HYDERABAD, INDIA</span>
                <span>TKR COLLEGE OF ENGG</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
