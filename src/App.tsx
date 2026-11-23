import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { BigTypographyScroll } from './components/BigTypographyScroll';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { NoiseOverlay } from './components/NoiseOverlay';

export function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll with custom easing
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F7F6F4] text-[#080808] font-sans selection:bg-[#FF4D00] selection:text-white">
      {/* Cinematic Intro Preloader Curtain (matching Reel 0:02) */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Custom Cursor for Desktop Pointer */}
      <CustomCursor />

      {/* Subtle Noise / Film Grain Texture Overlay */}
      <NoiseOverlay />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Reel-Inspired High Contrast Hero (Off-White & Pitch Black) */}
        <Hero />

        {/* Minimalist Editorial About Section */}
        <About />

        {/* Reel-Inspired Stadium Pill Cards & Skills Matrix */}
        <Skills />

        {/* Kinetic Big Typography Scroll Section ("BUILD", "CREATE", "EXPERIMENT", "REPEAT") */}
        <BigTypographyScroll />

        {/* Dark Cinematic Projects Showcase with WORK backdrop */}
        <Projects />

        {/* First-Year Engineering Roadmap & Timeline */}
        <Journey />

        {/* Contact & Social Links */}
        <Contact />
      </main>

      {/* Clean Footer with Outlined Typography */}
      <Footer />
    </div>
  );
}

export default App;
