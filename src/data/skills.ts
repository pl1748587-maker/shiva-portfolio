import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "PROGRAMMING & CORE",
    badge: "FOUNDATIONS",
    skills: [
      {
        name: "Python",
        level: "Learning",
        description: "Core logic, scripting, data handling, and automation experiments"
      },
      {
        name: "Problem Solving",
        level: "Learning",
        description: "Algorithmic thinking, data structures fundamentals, and logical breakdown"
      },
      {
        name: "Git & GitHub",
        level: "Beginner",
        description: "Version control, branching, repository management, and code collaboration"
      }
    ]
  },
  {
    title: "WEB & FRONTEND",
    badge: "CREATIVE TECH",
    skills: [
      {
        name: "HTML5",
        level: "Beginner",
        description: "Semantic page structures, responsive layouts, and accessibility fundamentals"
      },
      {
        name: "CSS3 & Modern Styling",
        level: "Beginner",
        description: "Flexbox, CSS Grid, responsive design, animations, and Tailwind CSS"
      },
      {
        name: "JavaScript",
        level: "Learning",
        description: "DOM manipulation, asynchronous operations, event-driven interactions"
      }
    ]
  },
  {
    title: "AI, AUTOMATION & TOOLS",
    badge: "EXPANDING HORIZONS",
    skills: [
      {
        name: "AI Tools & LLM APIs",
        level: "Exploring",
        description: "Prompt engineering, API integration, multimodal models, workflow automation"
      },
      {
        name: "Video Editing & Media",
        level: "Exploring",
        description: "Visual storytelling, pacing, media manipulation, and generative AI content"
      },
      {
        name: "Automated Scripting",
        level: "Learning",
        description: "Python automation pipelines, file processing, and smart bots"
      }
    ]
  }
];

export const allDirectSkills = [
  { name: "Python", category: "Core", level: "Learning", statusText: "Currently Mastering" },
  { name: "HTML", category: "Web", level: "Beginner", statusText: "Solid Basics" },
  { name: "CSS", category: "Web", level: "Beginner", statusText: "Layouts & Animation" },
  { name: "JavaScript", category: "Web", level: "Learning", statusText: "Dynamic Interactivity" },
  { name: "Git & GitHub", category: "DevOps", level: "Beginner", statusText: "Version Control" },
  { name: "AI Tools", category: "AI/ML", level: "Exploring", statusText: "Modern Workflows" },
  { name: "Problem Solving", category: "Thinking", level: "Learning", statusText: "Logic & Code" },
];
