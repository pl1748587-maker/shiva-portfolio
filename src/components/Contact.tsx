import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Copy, Check, ArrowUpRight, Send, MapPin, Sparkles } from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "iamkshiva5612@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/pl1748587-maker",
      handle: "@pl1748587-maker",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shiva-prasad-44974b327",
      handle: "in/shiva-prasad-44974b327",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ksp._01?avpt=MXhkNHMxN2x5Y3M2YQ==",
      handle: "@ksp._01",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "Email Me",
      url: `mailto:${email}`,
      handle: email,
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#F7F6F4] text-[#080808] border-t border-black/10 overflow-hidden select-none">
      {/* Light Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Subtle Warm Amber Glow Behind */}
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-[#FF4D00]/5 blur-[190px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D00] flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FF4D00]" />
            05 // GET IN TOUCH
          </span>
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest font-semibold">
            OPEN TO INTERNSHIPS &amp; COLLABORATION
          </span>
        </div>

        {/* Contact Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline and Message */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-[#080808] leading-[0.92]">
                LET'S BUILD
                <br />
                <span className="text-[#FF4D00]">SOMETHING GREAT</span>
                <br />
                <span className="text-stroke-black hover:text-[#080808] transition-colors duration-300">
                  TOGETHER.
                </span>
              </h2>
            </motion.div>

            <p className="text-base sm:text-lg text-[#333333] font-sans max-w-xl leading-relaxed">
              Explore my work, code repositories, and updates across GitHub, LinkedIn, and Instagram. 
              Whether you are looking for an ambitious engineering intern or want to build something impactful with code, my inbox is open.
            </p>

            {/* Email Contact Box (Pure White with Subtle Border) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/10 shadow-sm hover:border-[#FF4D00]/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-bold">
                  DIRECT EMAIL INBOX
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#00C853] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
                  Fast Response Guaranteed
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-3">
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-lg sm:text-xl font-bold text-[#080808] hover:text-[#FF4D00] transition-colors truncate"
                >
                  {email}
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="px-4 py-2.5 rounded-xl bg-[#F5F4F0] hover:bg-black/10 border border-black/10 text-xs font-mono text-zinc-800 font-semibold flex items-center gap-2 transition-all active:scale-95"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00C853]" />
                        <span className="text-[#00C853] font-bold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-500" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${email}`}
                    className="px-5 py-2.5 rounded-xl bg-[#FF4D00] hover:bg-[#FF6B1A] text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-md shadow-[#FF4D00]/25 transition-all active:scale-95"
                  >
                    <span>SEND EMAIL</span>
                    <Send className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Status Info */}
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-600 pt-2 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF4D00]" />
                <span>HYDERABAD, TELANGANA, INDIA</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF4D00]" />
                <span>FIRST-YEAR B.TECH AIML @ TKRCE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Social Connection Cards (Pure White Cards) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-600 mb-2 font-bold">
              CONNECT ACROSS PLATFORMS
            </div>

            {socialLinks.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.url}
                target={item.name === "Email Me" ? undefined : "_blank"}
                rel={item.name === "Email Me" ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-black/10 hover:border-[#FF4D00] hover:bg-[#FFF9F5] hover:shadow-lg transition-all duration-300 flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F4F0] border border-black/10 flex items-center justify-center text-[#080808] group-hover:text-[#FF4D00] group-hover:border-[#FF4D00]/30 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-display font-bold text-lg text-[#080808] group-hover:text-[#FF4D00] transition-colors block">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-zinc-500 font-medium">
                      {item.handle}
                    </span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#F5F4F0] border border-black/10 flex items-center justify-center text-zinc-600 group-hover:bg-[#FF4D00] group-hover:text-white group-hover:border-[#FF4D00] transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
