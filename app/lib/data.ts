import type { Experience, Project, Skill, SiteConfig } from '@/app/types';

export const siteConfig: SiteConfig = {
  name: 'Raúl Campbell',
  title: 'Hi, I\'m Raúl Campbell',
  description: 'Software developer passionate about building innovative, scalable digital solutions',
  email: 'rech_99@hotmail.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com/rech99' },
    { name: 'Email', url: 'mailto:rech_99@hotmail.com' },
  ],
};

export const aboutContent = [
  `I'm a software engineer with solid experience in design, implementation, and maintenance of applications. Passionate about technological innovation and continuous improvement, focused on delivering efficient and scalable solutions to complex projects.`,
  `I specialize in fullstack web development with expertise in building RESTful APIs, designing robust databases, and creating responsive user interfaces. Currently pursuing a Master's degree in Software Development while maintaining professional experience in modern technologies.`,
];

export const experiences: Experience[] = [
  {
    id: 'media-aerea',
    title: 'Fullstack Web Developer',
    company: 'Media Aerea',
    period: 'Jul 2018 - Present',
    description: 'Development and implementation of responsive web applications. Design and maintenance of databases ensuring data integrity. Collaborated on government projects including systems for ANAM (National Environment Authority), Treasury (Hacienda), and other public organizations. Optimization of web performance through best practices. Implementation of RESTful APIs for improved frontend-backend communication.',
  },
  {
    id: 'axcivil',
    title: 'Web Developer',
    company: 'AxCivil',
    period: '2022 - 2023',
    description: 'Developed web page for AxCivil organization using WordPress, HTML and CSS. Created responsive designs for effective user experience.',
  },
];

export const projects: Project[] = [
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio',
    description: 'Modern portfolio website showcasing professional experience and technical skills. Built with latest frontend conventions using Next.js 16 and Tailwind CSS with glassmorphism design and dark theme.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rech99',
  },
];

export const skills: Skill[] = [
  { name: 'Python', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Docker', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'GitLab', category: 'tools' },
  { name: 'Prompt Engineering', category: 'backend' },
];
