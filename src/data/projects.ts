import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "jarvis-ai-assistant",
    title: "JARVIS AI ASSISTANT",
    subtitle: "VOICE-ACTIVATED PERSONAL AGENT",
    category: "AI & AUTOMATION",
    description: "Personal AI assistant project built with Python featuring voice interaction, command recognition, and intelligent desktop automation.",
    longDescription: "An intelligent personal agent engineered to automate daily computing workflows. Incorporates voice recognition, system state monitoring, natural language comprehension via AI API integrations, and hands-free task execution.",
    technologies: ["Python", "SpeechRecognition", "Pyttsx3", "OpenAI / Gemini API", "Automation OS"],
    metrics: "Voice-driven Desktop Control",
    image: "/projects/jarvis.svg",
    githubUrl: "https://github.com/pl1748587-maker/jarvis-ai-assistant",
    liveUrl: "https://github.com/pl1748587-maker/jarvis-ai-assistant#demo",
    featured: true,
    accentColor: "#FF4D00"
  },
  {
    id: "personal-portfolio",
    title: "CINEMATIC PORTFOLIO",
    subtitle: "EDITORIAL BRUTALIST WEB EXPERIENCE",
    category: "FRONTEND & CREATIVE TECH",
    description: "My personal developer portfolio built with React, TypeScript, and Framer Motion, showcasing high-impact typography, kinetic scroll, and brutalist aesthetics.",
    longDescription: "Designed with an avant-garde editorial brutalist visual language: massive typography, high-contrast monochrome with electric orange accents, physics-driven kinetic interactions, and fluid responsive layouts.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis Scroll"],
    metrics: "60 FPS Fluid Scroll & Kinetic Motion",
    image: "/projects/portfolio.svg",
    githubUrl: "https://github.com/pl1748587-maker/karlapudi-shivaprasad-portfolio",
    liveUrl: "https://shiva-portfolio.dev",
    featured: true,
    accentColor: "#FF6B1A"
  },
  {
    id: "ai-video-automation",
    title: "AI VIDEO AUTOMATION",
    subtitle: "GENERATIVE VIDEO PIPELINE",
    category: "AI & MEDIA PROCESSING",
    description: "Experimental automated pipeline leveraging Python and AI to synthesize scriptwriting, text-to-speech, and automated clip assembly.",
    longDescription: "Exploration into programmatic content creation. A Python workflow that chains generative text prompts, synthesized voice narration, automated subtitle rendering, and dynamic video clip concatenation into polished short-form media.",
    technologies: ["Python", "MoviePy", "FFmpeg", "TTS Engines", "Generative AI"],
    metrics: "Script-to-Video Scripting Pipeline",
    image: "/projects/video-auto.svg",
    githubUrl: "https://github.com/pl1748587-maker/ai-video-automation",
    liveUrl: "https://github.com/pl1748587-maker/ai-video-automation#output",
    featured: true,
    accentColor: "#FF8C00"
  },
  {
    id: "python-projects",
    title: "PYTHON CODING EXPERIMENTS",
    subtitle: "ALGORITHMS & SCRIPTING LAB",
    category: "SOFTWARE ENGINEERING",
    description: "Curated collection of practical Python applications, algorithmic experiments, automation bots, and data processing scripts.",
    longDescription: "A hands-on repository tracking my journey from programming fundamentals to real-world software logic: web scrapers, CLI productivity tools, mini-games, mathematical visualizers, and data parsers.",
    technologies: ["Python 3", "Data Structures", "OOP", "CLI Tools", "File I/O"],
    metrics: "20+ Interactive Scripts & Utilities",
    image: "/projects/python-lab.svg",
    githubUrl: "https://github.com/pl1748587-maker/python-experiments-lab",
    liveUrl: "https://github.com/pl1748587-maker/python-experiments-lab#readme",
    featured: true,
    accentColor: "#FF5500"
  }
];
