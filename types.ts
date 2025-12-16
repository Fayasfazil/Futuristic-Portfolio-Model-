
export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  challenges: string;
  solutions: string;
}

export interface Skill {
  name: string;
  icon: string; // Placeholder for SVG icon or class name
  level: number; // Percentage from 0 to 100 for the skill bar
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}