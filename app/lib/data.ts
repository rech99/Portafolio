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
    id: 'hr-system',
    title: 'HR Management System',
    description: 'Django monolithic enterprise application for complete employee management, payroll processing, attendance tracking, leave management, and performance reviews. Production-ready with custom admin interface.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Enterprise'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rech99/hr-management-system',
  },
  {
    id: 'inventory-system',
    title: 'Inventory Management System',
    description: 'Django REST API backend with React web frontend and React Native mobile app for real-time stock tracking, warehouse management, purchase orders, and inventory analytics with WebSocket support.',
    tags: ['Django REST', 'React', 'React Native', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rech99/inventory-system',
  },
  {
    id: 'crm-platform',
    title: 'CRM Platform',
    description: 'Next.js full-stack CRM for customer relationship management, sales pipeline tracking, lead management, and email integration. Built with modern Next.js 16 with TypeScript and PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'API Integration'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rech99/crm-platform',
  },
  {
    id: 'project-manager',
    title: 'Project Management Tool',
    description: 'Django Channels with WebSockets for real-time project management featuring Kanban boards, task tracking, team collaboration, timeline charts, and live notifications with Celery background tasks.',
    tags: ['Django', 'WebSockets', 'Celery', 'React'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rech99/project-manager',
  },
  {
    id: 'ecommerce-admin',
    title: 'E-commerce Admin Panel',
    description: 'Next.js admin dashboard for e-commerce platforms with product management, order fulfillment, Stripe payment integration, inventory tracking, and comprehensive sales analytics and reporting.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Analytics'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rech99/ecommerce-admin',
  },
  {
    id: 'saas-platform',
    title: 'SaaS Platform',
    description: 'Django enterprise SaaS with multi-tenant architecture, Stripe subscription management, usage-based billing, team management, webhook integrations, and comprehensive tenant isolation with Django REST API.',
    tags: ['Django', 'Multi-tenant', 'Stripe', 'Enterprise'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rech99/saas-platform',
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
