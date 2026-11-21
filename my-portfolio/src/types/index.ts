export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year?: string;
  category?: string;
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}
