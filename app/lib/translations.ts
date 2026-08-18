export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Hi, I\'m Raúl Campbell',
      subtitle: 'Software Engineer & Fullstack Developer. Specializing in designing distributed systems, database optimization, and large-scale process automation across the full stack.',
      ctaPrimary: 'View My Work',
      ctaSecondary: 'Get In Touch',
    },
    about: {
      title: 'Professional Profile',
      content: [
        'Software Engineer and Fullstack Developer with over 3 years of experience in the design, development, and optimization of robust web applications and distributed systems. Specialist in building scalable backend solutions, advanced database management, and large-scale process automation.',
        'With a solid background in agile methodologies (Scrum/Kanban) and a rigorous approach to software security based on OWASP standards. Demonstrated ability to integrate Artificial Intelligence tools into the development lifecycle and lead technical components with a clear focus on efficiency and value delivery.',
      ],
    },
    experience: {
      title: 'Professional Experience',
      items: [
        {
          id: 'axcivil',
          title: 'Web Developer',
          company: 'AxCivil',
          period: '2022 - 2023',
          description: [
            'Frontend Development: Designed and implemented the corporate website using WordPress, HTML5, and CSS3.',
            'Optimization: Ensured responsive design and improved page load times to enhance the brand\'s digital presence.'
          ],
        },
        {
          id: 'media-aerea',
          title: 'Fullstack Developer',
          company: 'Media Aerea',
          period: 'May 2023 - June 2026',
          description: [
            'Federal Application Development: Designed and refactored high-criticality government web platforms using Django, Bootstrap, and Tailwind CSS.',
            'Data Engineering & Management: Implemented interactive dashboards, automated dynamic report generation, and advanced PDF export modules.',
            'Database Optimization: Wrote complex SQL queries and developed advanced scripting for data manipulation, migration, and consistency in hybrid environments (PostgreSQL and MongoDB).',
            'Architecture & Automation: Integrated REST APIs for system interoperability and configured asynchronous tasks using Celery and Redis to optimize server performance.',
            'Security & Auditing: Implemented security controls in the software development lifecycle using native Django features and OWASP framework references to mitigate critical vulnerabilities.',
            'Agile Management: Coordinated and iterated deliverables within the technical team under Scrum and Kanban frameworks.'
          ],
        },
        {
          id: 'ruben-torres',
          title: 'Lead Fullstack Developer',
          company: 'Rubén Torres (rubentorresq.com)',
          period: '2024 - 2026',
          description: [
            'Audio-Visual Web Platform Architecture: Designed & engineered the official website and interactive portfolio for music producer and sound artist Rubén Torres using Next.js 16 (App Router), React 19, and CSS Modules.',
            'In-Memory Audio Decryption Player: Implemented a secure audio player with dynamic in-memory decryption and floating HUD controls.',
            'Media Gallery & i18n: Built high-performance dynamic image/video gallery with WebP optimization and instant bilingual (ES/EN) internationalization.'
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          id: 'bachelors',
          shortTitle: 'Bachelor',
          degree: 'Multimedia Production Engineering',
          institution: 'Universidad LaSalle Noroeste',
          period: '2018 - 2023',
          details: 'Achievement: Graduated with a meritorious average score of 9.51/10. Active participant in tech events like Global Game Jam and Hackathons.'
        },
        {
          id: 'masters',
          shortTitle: 'Masters',
          degree: 'Master\'s in Software Engineering and Distributed Systems',

          institution: 'Universidad de La Rioja México',
          period: '2025 - 2026 (Final semester)',
          details: 'Special mention: Includes a Project Management Diploma taught by the University of Miami.'
        },
      ]
    },


    skills: {
      title: 'Skills & Technologies',
      categories: [
        {
          name: 'Languages & Frameworks',
          items: ['Python (Django)', 'JavaScript/TypeScript', 'Angular', 'React', 'Next.js', 'Node.js', 'HTML5 / CSS3', 'Bootstrap 5', 'Tailwind CSS']
        },
        {
          name: 'Databases & Storage',
          items: ['PostgreSQL', 'MongoDB', 'Advanced SQL', 'DB Scripting']
        },
        {
          name: 'Tools & DevOps',
          items: ['Git / GitLab', 'Celery', 'Redis', 'REST APIs']
        },
        {
          name: 'AI & Productivity',
          items: ['Prompt Engineering', 'AI Agents', 'Cursor / VS Code', 'Antigravity', 'Copilot CLI']
        },
        {
          name: 'Methodologies & Security',
          items: ['Scrum / Kanban', 'PMBOK (Project Management)', 'OWASP Top 10', 'Django Security']
        },
        {
          name: 'Languages & Skills',
          items: ['Advanced English', 'Technical Leadership', 'Teamwork', 'Proactivity', 'Adaptability']
        }
      ],
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          id: 'ruben-torres-web',
          title: 'Rubén Torres Official Website',
          description: 'Official website and interactive audio-visual portfolio for music producer and sound artist Rubén Torres. Built with Next.js 16 (App Router), React 19, in-memory dynamic audio decryption player, WebP media gallery, and bilingual i18n.',
          tags: ['Next.js 16', 'React 19', 'CSS Modules', 'Web Audio API', 'i18n'],
          viewProject: 'View Site',
          github: 'GitHub',
          projectUrl: 'https://rubentorresq.com',
          githubUrl: 'https://github.com/rech99/portafolio-ruben-torres',
          image: '/images/ruben-torres-portfolio.png',
        },
        {
          id: 'hr-system',
          title: 'HR Management System',
          description: 'Django monolithic enterprise application for complete employee management, payroll processing, attendance tracking, leave management, and performance reviews. Production-ready with custom admin interface.',
          tags: ['Django', 'Python', 'PostgreSQL / SQLite', 'Enterprise'],
          viewProject: 'View Project',
          github: 'GitHub',
          projectUrl: 'https://hr-management-system-bvtg.onrender.com',
          githubUrl: 'https://github.com/rech99/hr-management-system',
          image: '/images/hr-system-abstract.jpg',
        },
        {
          id: 'inventory-system',
          title: 'Inventory Management System',
          description: 'Django REST API backend with React web frontend and React Native mobile app for real-time stock tracking, warehouse management, purchase orders, and inventory analytics with WebSocket support.',
          tags: ['Django REST', 'React', 'React Native', 'PostgreSQL / SQLite'],
          viewProject: 'View Project',
          github: 'GitHub',
          projectUrl: 'https://inventory-management-rech99.vercel.app/',
          githubUrl: 'https://github.com/rech99/inventory-management',
          image: '/images/inventory-system-abstract.jpg',
        },

        /*
        {
          id: 'crm-platform',
          title: 'CRM Platform',
          description: 'Next.js full-stack CRM for customer relationship management, sales pipeline tracking, lead management, and email integration. Built with modern Next.js 16 with TypeScript and PostgreSQL / SQLite.',
          tags: ['Next.js', 'TypeScript', 'PostgreSQL / SQLite', 'API Integration'],
          viewProject: 'View Project',
          github: 'GitHub',
          projectUrl: '#',
          githubUrl: 'https://github.com/rech99',
          image: '/images/crm-platform.png',
        },
        */
        {
          id: 'project-manager',
          title: 'Project Management Tool',
          description: 'Django Channels with WebSockets for real-time project management featuring Kanban boards, task tracking, team collaboration, timeline charts, and live notifications with Celery background tasks.',
          tags: ['Django', 'WebSockets', 'Celery', 'React'],
          viewProject: 'View Project',
          github: 'GitHub',
          projectUrl: 'https://project-manager-1-ha5k.onrender.com/',
          githubUrl: 'https://github.com/rech99/project-manager',
          image: '/images/project-manager-abstract.jpg',
        },
        /*
        {
          id: 'ecommerce-admin',
          title: 'E-commerce Admin Panel',
          description: 'Next.js admin dashboard for e-commerce platforms with product management, order fulfillment, Stripe payment integration, inventory tracking, and comprehensive sales analytics and reporting.',
          tags: ['Next.js', 'Stripe', 'PostgreSQL / SQLite', 'Analytics'],
          viewProject: 'View Project',
          github: 'GitHub',
          projectUrl: '#',
          githubUrl: 'https://github.com/rech99',
          image: '/images/ecommerce-admin.png',
        },
        {
          id: 'saas-platform',
          title: 'SaaS Platform',
          description: 'Django enterprise SaaS with multi-tenant architecture, Stripe subscription management, usage-based billing, team management, webhook integrations, and comprehensive tenant isolation with Django REST API.',
          tags: ['Django', 'Multi-tenant', 'Stripe', 'Enterprise'],
          viewProject: 'View Project',
          github: 'GitHub',
          projectUrl: '#',
          githubUrl: 'https://github.com/rech99',
          image: '/images/saas-platform.png',
        },
        */
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
      privacyNotice: 'Your details are only used to respond to your inquiry.',
      privacyLink: 'Privacy Notice',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your.email@example.com',
        messagePlaceholder: 'Tell me about your project...',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy',
    },
    privacyModal: {
      title: 'Privacy Policy',
      badge: 'LEGAL & PRIVACY',
      lastUpdated: 'Last updated: August 2026',
      sections: [
        {
          title: '1. Data Controller',
          content: 'This site is the personal professional portfolio of Raúl Enrique Campbell Hidalgo (contact: rech_99@hotmail.com).',
        },
        {
          title: '2. Data Collection & Purpose',
          content: 'The only personal data collected is what you voluntarily submit through the contact form (name, email address, and message). This data is processed solely to answer your questions, proposals, or communications.',
        },
        {
          title: '3. Third-Party Services & Infrastructure',
          content: 'Form messages are transmitted via Resend (transactional email API). Your data is never sold, leased, or shared with third parties or advertisers.',
        },
        {
          title: '4. Cookies & Analytics',
          content: 'This website does not use tracking cookies, marketing cookies, or third-party behavioral analytics tools (such as Google Analytics or Meta Pixel).',
        },
        {
          title: '5. Your Rights (Access & Deletion)',
          content: 'Under applicable data protection regulations (GDPR, CCPA, etc.), you have the right to request access, rectification, or deletion of your communications at any time by emailing rech_99@hotmail.com.',
        },
      ],
      close: 'Close',
      escKey: 'ESC',
    },
    siteConfig: {
      name: 'Raúl Enrique Campbell Hidalgo',
      socials: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/raul-enrique-campbell-hidalgo-80868527a/' },
        { name: 'GitHub', url: 'https://github.com/rech99' },
        { name: 'Email', url: 'mailto:rech_99@hotmail.com' },
      ],
    },


  },
  es: {
    nav: {
      about: 'Sobre Mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      title: 'Hola, soy Raúl Campbell',
      subtitle: 'Ingeniero de Software & Desarrollador Fullstack. Especializado en diseñar sistemas distribuidos, optimizar bases de datos y automatizar procesos a gran escala en todo el stack.',
      ctaPrimary: 'Ver Mi Trabajo',
      ctaSecondary: 'Ponte en Contacto',
    },
    about: {
      title: 'Perfil Profesional',
      content: [
        'Ingeniero de Software y Desarrollador Fullstack con más de 3 años de experiencia en el diseño, desarrollo y optimización de aplicaciones web robustas y sistemas distribuidos. Especialista en la construcción de soluciones backend escalables, gestión avanzada de bases de datos y automatización de procesos a gran escala.',
        'Con una sólida formación en metodologías ágiles (Scrum/Kanban) y un enfoque riguroso en la seguridad del software basado en los estándares de OWASP. Capacidad demostrada para integrar herramientas de Inteligencia Artificial en el ciclo de desarrollo y liderar componentes técnicos con una clara orientación a la eficiencia y entrega de valor.',
      ],
    },
    experience: {
      title: 'Experiencia Profesional',
      items: [
        {
          id: 'axcivil',
          title: 'Desarrollador Web',
          company: 'AxCivil',
          period: '2022 - 2023',
          description: [
            'Desarrollo Frontend: Diseño e implementación del sitio web corporativo de la empresa utilizando WordPress, HTML5 y CSS3.',
            'Optimización: Aseguramiento de la adaptabilidad (diseño responsivo) y mejora en los tiempos de carga para potenciar la presencia digital de la marca.'
          ],
        },
        {
          id: 'media-aerea',
          title: 'Desarrollador Fullstack',
          company: 'Media Aerea',
          period: 'Mayo 2023 - Junio 2026',
          description: [
            'Desarrollo de Aplicaciones Federales: Diseño y refactorización de plataformas web gubernamentales de alta criticidad utilizando Django, Bootstrap y Tailwind CSS.',
            'Ingeniería y Manejo de Datos: Implementación de dashboards interactivos, generación automatizada de reportes dinámicos y módulos avanzados de exportación a formatos PDF.',
            'Optimización de Bases de Datos: Escritura de comandos SQL complejos y desarrollo de scripting avanzado para la manipulación, migración y consistencia de datos en entornos híbridos (PostgreSQL y MongoDB).',
            'Arquitectura y Automatización: Integración de REST APIs para la interoperabilidad de sistemas y configuración de tareas asíncronas mediante Celery y Redis para optimizar el rendimiento del servidor.',
            'Seguridad y Auditoría: Implementación de controles de seguridad en el ciclo de vida del software utilizando las funciones nativas de Django y tomando como referencia el framework de OWASP para mitigar vulnerabilidades críticas.',
            'Gestión Ágil: Coordinación e iteración de entregables dentro del equipo técnico bajo marcos de trabajo Scrum y tableros Kanban.'
          ],
        },
        {
          id: 'ruben-torres',
          title: 'Desarrollador Fullstack Principal',
          company: 'Rubén Torres (rubentorresq.com)',
          period: '2024 - 2026',
          description: [
            'Arquitectura de Plataforma Web Audiovisual: Diseño y desarrollo del sitio web oficial y portafolio interactivo para el productor musical Rubén Torres utilizando Next.js 16 (App Router), React 19 y CSS Modules.',
            'Reproductor Audio con Descifrado en Memoria: Implementación de reproductor de audio con descifrado dinámico en memoria y controles HUD flotantes.',
            'Galería Multimedia e i18n: Construcción de galería dinámica de imágenes y videos optimizados en WebP con internacionalización bilingüe (ES/EN) instantánea.'
          ],
        },
      ],
    },
    education: {
      title: 'Educación',
      items: [
        {
          id: 'bachelors',
          shortTitle: 'Licenciatura',
          degree: 'Ingeniería en Producción Multimedia',
          institution: 'Universidad LaSalle Noroeste',
          period: '2018 - 2023',
          details: 'Logro: Graduado con promedio meritorio de 9.51. Participante activo en eventos tecnológicos como Global Game Jam y Hackathons.'
        },
        {
          id: 'masters',
          shortTitle: 'Maestría',
          degree: 'Maestría en Ingeniería de Software y Sistemas Distribuidos',
          institution: 'Universidad de La Rioja México',
          period: '2025 - 2026 (Último semestre)',
          details: 'Mención especial: Incluye Diplomado en Project Management impartido por la University of Miami.'
        },
      ]
    },


    skills: {
      title: 'Habilidades y Tecnologías',
      categories: [
        {
          name: 'Lenguajes & Frameworks',
          items: ['Python (Django)', 'JavaScript/TypeScript', 'Angular', 'React', 'Next.js', 'Node.js', 'HTML5 / CSS3', 'Bootstrap 5', 'Tailwind CSS']
        },
        {
          name: 'Bases de Datos',
          items: ['PostgreSQL', 'MongoDB', 'SQL Avanzado', 'Scripting de BD']
        },
        {
          name: 'Herramientas & DevOps',
          items: ['Git / GitLab', 'Celery', 'Redis', 'REST APIs']
        },
        {
          name: 'IA & Productividad',
          items: ['Prompt Engineering', 'Agentes de IA', 'Cursor / VS Code', 'Antigravity', 'Copilot CLI']
        },
        {
          name: 'Metodologías & Seguridad',
          items: ['Scrum / Kanban', 'PMBOK (Project Management)', 'OWASP Top 10', 'Seguridad Django']
        },
        {
          name: 'Idiomas & Habilidades',
          items: ['Inglés avanzado', 'Liderazgo técnico', 'Trabajo en equipo', 'Proactividad', 'Adaptabilidad']
        }
      ],
    },
    projects: {
      title: 'Proyectos Destacados',
      items: [
        {
          id: 'ruben-torres-web',
          title: 'Portafolio Oficial Rubén Torres',
          description: 'Sitio web oficial y portafolio interactivo de música y arte sonoro para el productor Rubén Torres. Desarrollado con Next.js 16 (App Router), React 19, reproductor de audio dinámico con descifrado en memoria, galería multimedia optimizada en WebP e internacionalización bilingüe (ES/EN).',
          tags: ['Next.js 16', 'React 19', 'CSS Modules', 'Web Audio API', 'i18n'],
          viewProject: 'Ver Sitio',
          github: 'GitHub',
          projectUrl: 'https://rubentorresq.com',
          githubUrl: 'https://github.com/rech99/portafolio-ruben-torres',
          image: '/images/ruben-torres-portfolio.png',
        },
        {
          id: 'hr-system',
          title: 'Sistema de Gestión de RR.HH',
          description: 'Aplicación empresarial monolítica Django para gestión completa de empleados, nómina, asistencia, gestión de licencias y evaluaciones de desempeño. Lista para producción con interfaz admin personalizada.',
          tags: ['Django', 'Python', 'PostgreSQL / SQLite', 'Enterprise'],
          viewProject: 'Ver Proyecto',
          github: 'GitHub',
          projectUrl: 'https://hr-management-system-bvtg.onrender.com',
          githubUrl: 'https://github.com/rech99/hr-management-system',
          image: '/images/hr-system-abstract.jpg',
        },
        {
          id: 'inventory-system',
          title: 'Sistema de Gestión de Inventario',
          description: 'API REST Django con frontend React y aplicación React Native para seguimiento de stock en tiempo real, gestión de almacén, órdenes de compra y análisis con soporte WebSocket.',
          tags: ['Django REST', 'React', 'React Native', 'PostgreSQL / SQLite'],
          viewProject: 'Ver Proyecto',
          github: 'GitHub',
          projectUrl: 'https://inventory-management-rech99.vercel.app/',
          githubUrl: 'https://github.com/rech99/inventory-management',
          image: '/images/inventory-system-abstract.jpg',
        },

        /*
        {
          id: 'crm-platform',
          title: 'Plataforma CRM',
          description: 'CRM full-stack Next.js para gestión de relaciones con clientes, seguimiento de pipeline de ventas, gestión de leads e integración de email. Construido con Next.js 16 moderno, TypeScript y PostgreSQL / SQLite.',
          tags: ['Next.js', 'TypeScript', 'PostgreSQL / SQLite', 'API Integration'],
          viewProject: 'Ver Proyecto',
          github: 'GitHub',
          projectUrl: '#',
          githubUrl: 'https://github.com/rech99',
          image: '/images/crm-platform.png',
        },
        */
        {
          id: 'project-manager',
          title: 'Herramienta de Gestión de Proyectos',
          description: 'Django Channels con WebSockets para gestión de proyectos en tiempo real con tableros Kanban, seguimiento de tareas, colaboración en equipo, gráficos de timeline y notificaciones en vivo.',
          tags: ['Django', 'WebSockets', 'Celery', 'React'],
          viewProject: 'Ver Proyecto',
          github: 'GitHub',
          projectUrl: 'https://project-manager-1-ha5k.onrender.com/',
          githubUrl: 'https://github.com/rech99/project-manager',
          image: '/images/project-manager-abstract.jpg',
        },
        /*
        {
          id: 'ecommerce-admin',
          title: 'Panel Admin E-commerce',
          description: 'Dashboard admin Next.js para plataformas de e-commerce con gestión de productos, cumplimiento de órdenes, integración de pagos Stripe, seguimiento de inventario y análisis de ventas completos.',
          tags: ['Next.js', 'Stripe', 'PostgreSQL / SQLite', 'Analytics'],
          viewProject: 'Ver Proyecto',
          github: 'GitHub',
          projectUrl: '#',
          githubUrl: 'https://github.com/rech99',
          image: '/images/ecommerce-admin.png',
        },
        {
          id: 'saas-platform',
          title: 'Plataforma SaaS',
          description: 'SaaS empresarial Django con arquitectura multi-tenant, gestión de suscripciones Stripe, facturación basada en uso, gestión de equipos, integraciones de webhooks y aislamiento completo de inquilinos.',
          tags: ['Django', 'Multi-tenant', 'Stripe', 'Enterprise'],
          viewProject: 'Ver Proyecto',
          github: 'GitHub',
          projectUrl: '#',
          githubUrl: 'https://github.com/rech99',
          image: '/images/saas-platform.png',
        },
        */
      ],
    },
    contact: {
      title: 'Ponte en Contacto',
      subtitle: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.',
      privacyNotice: 'Tus datos solo se usarán para responder a tu mensaje.',
      privacyLink: 'Aviso de Privacidad',
      form: {
        name: 'Nombre',
        email: 'Correo Electrónico',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu.email@example.com',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      },
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
    },
    privacyModal: {
      title: 'Aviso de Privacidad',
      badge: 'LEGAL Y PRIVACIDAD',
      lastUpdated: 'Última actualización: Agosto 2026',
      sections: [
        {
          title: '1. Responsable del Tratamiento',
          content: 'Este sitio web es el portafolio profesional personal de Raúl Enrique Campbell Hidalgo (contacto: rech_99@hotmail.com).',
        },
        {
          title: '2. Datos Recopilados y Finalidad',
          content: 'Los únicos datos personales recopilados son los facilitados voluntariamente en el formulario de contacto (nombre, correo electrónico y mensaje). Dichos datos se utilizan exclusivamente para responder a consultas, propuestas laborales o comunicaciones profesionales.',
        },
        {
          title: '3. Servicios de Terceros e Infraestructura',
          content: 'Los mensajes enviados a través del formulario son procesados y transmitidos mediante Resend (API de correo transaccional). En ningún caso se almacenan en bases de datos públicas, ni se comercializan, ceden o comparten con terceros o agencias de publicidad.',
        },
        {
          title: '4. Cookies y Herramientas de Rastreo',
          content: 'Este sitio web no utiliza cookies de seguimiento invasivo, analítica de terceros (como Google Analytics) ni píxeles publicitarios.',
        },
        {
          title: '5. Ejercicio de Derechos (Acceso y Supresión)',
          content: 'Conforme a la normativa de protección de datos (RGPD, LFPDPPP y afines), puedes solicitar en cualquier momento el acceso, rectificación o eliminación total de tu historial de comunicación escribiendo a rech_99@hotmail.com.',
        },
      ],
      close: 'Cerrar',
      escKey: 'ESC',
    },
    siteConfig: {
      name: 'Raúl Enrique Campbell Hidalgo',
      socials: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/raul-enrique-campbell-hidalgo-80868527a/' },
        { name: 'GitHub', url: 'https://github.com/rech99' },
        { name: 'Correo', url: 'mailto:rech_99@hotmail.com' },
      ],
    },

  },
};
