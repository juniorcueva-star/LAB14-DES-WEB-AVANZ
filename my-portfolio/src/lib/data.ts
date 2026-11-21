import { Project, SkillGroup } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con Next.js, Stripe y PostgreSQL',
    longDescription:
      'Tienda en línea completa con catálogo, carrito persistente, pasarela de pagos con Stripe y panel de administración. Renderizado híbrido para un SEO excelente y tiempos de carga mínimos.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/usuario/ecommerce',
    featured: true,
    year: '2026',
    category: 'Full Stack',
  },
  {
    slug: 'task-manager',
    title: 'Task Manager App',
    description: 'Aplicación de gestión de tareas con autenticación y tiempo real',
    longDescription:
      'Gestor de tareas colaborativo con tableros, autenticación de usuarios y sincronización en tiempo real mediante WebSockets para que todo el equipo vea los cambios al instante.',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/usuario/task-manager',
    featured: true,
    year: '2025',
    category: 'Tiempo real',
  },
  {
    slug: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Dashboard interactivo del clima con gráficos y pronósticos',
    longDescription:
      'Panel interactivo que consume la API de OpenWeather y muestra el clima actual, pronósticos por hora y gráficos históricos con Chart.js.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Next.js', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com/usuario/weather-app',
    featured: true,
    year: '2025',
    category: 'Frontend',
  },
];

// URL pública del sitio. En Vercel se define NEXT_PUBLIC_SITE_URL con el dominio propio.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://juniorcueva.vercel.app').replace(/\/$/, '');

export const personalInfo = {
  name: 'Junior Cueva',
  fullName: 'Junior Cueva Fabian',
  title: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'Frontend con Next.js', 'Backend con Node.js', 'Amante del buen diseño'],
  description: 'Desarrollador apasionado por crear experiencias web excepcionales',
  age: null as number | null,
  career: 'Diseño y Desarrollo de Software',
  school: 'Tecsup',
  location: 'Lima, Perú',
  available: true,
  email: 'tu@email.com',
  whatsapp: '',
  github: 'https://github.com/juniorcueva-star',
  linkedin: 'https://linkedin.com/in/tuusuario',
  siteUrl,
  avatar: '/avatar.png',
};

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', icon: '◆', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'] },
  { title: 'Backend', icon: '▲', items: ['Node.js', 'Express', 'REST APIs', 'Socket.io'] },
  { title: 'Bases de datos', icon: '●', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  { title: 'Herramientas', icon: '■', items: ['Git & GitHub', 'Docker', 'Vercel', 'Figma'] },
];

export const techStack = [
  'Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'Tailwind CSS',
  'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'Vercel', 'Figma', 'Socket.io',
];
