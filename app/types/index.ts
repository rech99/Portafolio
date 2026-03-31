export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  socials: SocialLink[];
}
