import { Project, SkillGroup } from '@/types';

export const projects: Project[] = [
  {
    slug: 'restoreserva',
    title: 'RestoReserva',
    description: 'Plataforma de reservas y gestión de mesas para restaurantes',
    longDescription:
      'Sistema web para que los clientes reserven mesa en línea y el restaurante gestione su salón en tiempo real: mapa de mesas, turnos, lista de espera y confirmaciones automáticas por correo. Panel de administración con reportes de ocupación y horas punta.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    year: '2026',
    category: 'Full Stack',
  },
  {
    slug: 'rapido-delivery',
    title: 'Rápido Delivery',
    description: 'App móvil de pedidos a domicilio con seguimiento en tiempo real',
    longDescription:
      'Aplicación para Android y iPhone donde el cliente elige productos de negocios cercanos, paga en la app y sigue a su repartidor en el mapa en tiempo real. Incluye notificaciones push, historial de pedidos y calificaciones.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    featured: true,
    year: '2026',
    category: 'Móvil',
  },
  {
    slug: 'ventaspro-dashboard',
    title: 'VentasPro Dashboard',
    description: 'Panel de analítica de ventas con métricas e indicadores en vivo',
    longDescription:
      'Dashboard para pequeñas empresas que reúne ventas, productos más vendidos, metas mensuales y comparativas por periodo en gráficos interactivos. Renderizado en el servidor para cargar rápido y filtros que se actualizan al instante.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Node.js', 'PostgreSQL'],
    featured: true,
    year: '2025',
    category: 'Frontend',
  },
  {
    slug: 'aulaviva',
    title: 'AulaViva',
    description: 'Plataforma de cursos en línea con videos, evaluaciones y certificados',
    longDescription:
      'Sistema de aprendizaje en línea donde los docentes publican cursos por módulos y los estudiantes avanzan con videos, cuestionarios y seguimiento de progreso. Al terminar, la plataforma genera un certificado descargable.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    featured: false,
    year: '2025',
    category: 'Full Stack',
  },
  {
    slug: 'stockflow',
    title: 'StockFlow',
    description: 'Gestión de inventarios con arquitectura de microservicios',
    longDescription:
      'Sistema distribuido para controlar el inventario de varios almacenes: productos, entradas, salidas y alertas de stock mínimo. Cada módulo es un microservicio con su propia base de datos, registrado en Eureka y expuesto mediante un API Gateway.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Spring Cloud', 'Eureka', 'API Gateway', 'MySQL', 'Docker'],
    featured: false,
    year: '2025',
    category: 'Backend',
  },
  {
    slug: 'fintrack',
    title: 'FinTrack',
    description: 'App de finanzas personales para controlar gastos y presupuestos',
    longDescription:
      'Aplicación web progresiva (PWA) para registrar ingresos y gastos por categoría, definir presupuestos mensuales y ver a dónde se va el dinero con gráficos claros. Funciona sin conexión y se instala en el celular como una app.',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA'],
    featured: false,
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
  roles: ['Full Stack Developer', 'Java & Spring Boot', 'React & Next.js', 'Apps móviles con Flutter'],
  description: 'Desarrollador apasionado por crear experiencias web excepcionales',
  age: 22 as number | null,
  career: 'Diseño y Desarrollo de Software',
  cycle: '5.° ciclo',
  school: 'Tecsup',
  location: 'Lima, Perú',
  available: true,
  email: 'junior777fabian@gmail.com',
  // WhatsApp solo para mensajes (no llamadas)
  whatsapp: '+51 940 571 350',
  whatsappUrl: 'https://wa.me/51940571350?text=Hola%20Junior%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar.',
  github: 'https://github.com/juniorcueva-star',
  siteUrl,
  avatar: '/avatar.png',
};

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', icon: '◆', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'TanStack Query'] },
  { title: 'Backend', icon: '▲', items: ['Java 21', 'Spring Boot', 'Spring Security + JWT', 'Node.js', 'Express', 'APIs REST'] },
  { title: 'Microservicios', icon: '⬡', items: ['Spring Cloud Config', 'Eureka', 'API Gateway', 'OpenFeign'] },
  { title: 'Móvil', icon: '◉', items: ['Flutter', 'Dart', 'PWA'] },
  { title: 'Datos', icon: '●', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase', 'Flyway'] },
  { title: 'DevOps y calidad', icon: '■', items: ['Docker', 'Git & GitHub', 'Vercel', 'Playwright', 'JUnit + Mockito'] },
];

export const techStack = [
  'Java', 'Spring Boot', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Flutter', 'Tailwind CSS',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase', 'Docker', 'Playwright', 'Git',
];
