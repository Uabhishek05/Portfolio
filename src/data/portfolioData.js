import { Code2, FileJson, Github, Linkedin, Mail, Palette, ShieldCheck, Workflow } from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    items: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS'
    ]
  },
  {
    category: 'Animation & UI',
    icon: Palette,
    items: ['Framer Motion', 'Shadcn UI']
  },
  {
    category: 'APIs',
    icon: FileJson,
    items: ['REST APIs', 'JSON']
  },
  {
    category: 'State & Routing',
    icon: Workflow,
    items: ['React Router']
  },
  {
    category: 'Backend & DB',
    icon: FileJson,
    items: ['Node.js', 'Express.js', 'MongoDB']
  },
  {
    category: 'Tools',
    icon: Workflow,
    items: ['Git', 'GitHub', 'Vite', 'VS Code', 'Postman', 'npm', 'ESLint', 'Prettier']
  },
  {
    category: 'Security',
    icon: ShieldCheck,
    items: ['Kount']
  }
];

export const projects = [
  {
    title: 'Employee Management System',
    description:
      'An employee-focused management dashboard designed to organize workforce data with clean, role-based views, reusable UI components, and responsive layouts built for practical day-to-day usage.',
    details:
      'Employee Management System is a practical admin dashboard project focused on managing workforce records efficiently. It is being built with reusable components, clean state flow, and responsive UI patterns so teams can manage employee information smoothly across devices.',
    techStack: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'REST APIs', 'Vite'],
    features: [
      'Employee listing with structured role-based information cards',
      'Reusable UI sections for profile details and management actions',
      'Responsive layouts designed for desktop and mobile workflows',
      'Clean component architecture for easy feature expansion'
    ],
    learned: [
      'Structured frontend state for scalable dashboard-style interfaces',
      'Reusable design patterns to reduce duplicate component logic',
      'Better data presentation techniques for admin-focused products',
      'Planning API-first flows while keeping UI interactions smooth'
    ],
    previewGradient: 'linear-gradient(135deg, rgba(15,23,42,0.92), rgba(30,41,59,0.9))',
    demo: '#',
    github: 'https://github.com/Uabhishek05/Employee-Management-System',
    inProgress: true
  },
  {
    title: 'Gemini AI Chat UI Clone',
    description:
      'A responsive Gemini-inspired chat interface focused on smooth user interaction, reusable component architecture, and performance-oriented frontend delivery with clean project structure.',
    details:
      'Gemini AI Chat UI Clone recreates a modern conversational interface with attention to interaction quality, clean layout logic, and component reusability. The project emphasizes polished UI behavior, maintainable structure, and performance-focused rendering.',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    features: [
      'Chat layout with reusable message and interaction components',
      'Smooth transitions and micro-interactions using Framer Motion',
      'Clean folder architecture and scalable component composition',
      'Fast development and optimized builds with Vite'
    ],
    learned: [
      'How to architect scalable UI blocks for chat-style products',
      'Improved animation timing for natural interaction feedback',
      'Type-safe component patterns with TypeScript in React',
      'Balancing performance and visual polish in UI-heavy screens'
    ],
    previewImage: '/project-gemini-new.png',
    previewGradient: 'linear-gradient(135deg, rgba(2,6,23,0.95), rgba(15,23,42,0.9))',
    demo: 'https://gemini-3-gray.vercel.app/',
    github: 'https://github.com/Uabhishek05/GeminiClone'
  },
  {
    title: 'Therapy Premium',
    description:
      'A premium therapy website experience built with a trust-focused design system, responsive page sections, and polished interaction patterns to improve readability and conversion flow.',
    details:
      'Therapy Premium is a modern mental wellness website concept designed around clarity, trust, and strong visual hierarchy. The experience focuses on clean storytelling sections, conversion-focused calls-to-action, and responsive presentation for real-world clients.',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    features: [
      'Premium hero and service sections with consistent visual rhythm',
      'Trust-oriented content structure for therapist brand positioning',
      'Responsive UI system for mobile-first accessibility',
      'Polished call-to-action flow for consultation conversion'
    ],
    learned: [
      'Using typography and spacing to create calm, premium interfaces',
      'Designing for emotional tone in healthcare and wellness products',
      'Building reusable section templates without losing visual quality',
      'Improving UX clarity through content-first component layout'
    ],
    previewImage: '/project-therapy.jpg',
    previewGradient: 'linear-gradient(135deg, rgba(12,74,110,0.9), rgba(14,116,144,0.85))',
    demo: 'https://therapy-premium.vercel.app',
    github: 'https://github.com/Uabhishek05/Therapy-premium'
  }
];

export const personal = {
  name: 'Abhishek Upadhyay',
  role: 'Frontend Developer',
  location: 'Mumbai, India',
  email: 'uabhishek2005@gmail.com',
  phone: '+91 8855897420',
  github: 'https://github.com/uabhishek05',
  linkedin: 'https://www.linkedin.com/in/uabhishek05',
  avatar: '/avatar.jpeg',
  heroHighlights: ['TypeScript', 'React.js', 'Tailwind CSS', 'REST APIs'],
  about:
    'I build responsive web applications using React.js, Tailwind CSS, and TypeScript, while continuously exploring modern tools and techniques to improve performance and user experience.'
};

export const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Mumbai',
    year: 'Expected Graduation: May 2026'
  }
];

export const certifications = [
  {
    title: 'The Web Developer Bootcamp 2026',
    issuer: 'by Colt Steele',
    link: 'https://www.udemy.com/certificate/UC-66ed7a14-5c87-4f3b-b711-4467fc3838f9/'
  }
];

export const experienceHighlights = [
  'Fresher with hands-on academic and personal frontend projects',
  'Strong problem-solving approach with practical implementation focus',
  'Fast learner with consistent upskilling in modern JavaScript ecosystem',
  'Industry-ready fundamentals in responsive design, state handling, and API integration'
];

export const socialLinks = [
  { label: 'GitHub', href: personal.github, icon: Github },
  { label: 'LinkedIn', href: personal.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${personal.email}`, icon: Mail }
];
