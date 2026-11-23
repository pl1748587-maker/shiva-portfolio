export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  metrics?: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor?: string;
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: {
    name: string;
    level: 'Learning' | 'Beginner' | 'Exploring';
    description: string;
    icon?: string;
  }[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  status: 'In Progress' | 'Active' | 'Milestone';
}
