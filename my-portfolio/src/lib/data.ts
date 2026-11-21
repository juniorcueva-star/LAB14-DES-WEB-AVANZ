import { Project, SkillGroup } from '@/types';

export const projects: Project[] = [
  {
    slug: 'todopernos-erp',
    title: 'TodoPernos ERP',
    description: 'Sistema de gestión para una ferretería con 2 tiendas y un almacén compartido',
    longDescription:
      'ERP completo para una ferretería real: catálogo con presentaciones (unidad, ciento, kilo, metro, rollo), inventario con kardex, compras a proveedores, traslados del almacén a cada tienda, caja por vendedor, punto de venta al contado y al fiado con pago mixto, y reportes del negocio. Backend con 131 pruebas automatizadas contra PostgreSQL real y frontend probado de punta a punta con Playwright.',
    image: '/projects/todopernos.png',
    technologies: ['Java 21', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Playwright'],
    githubUrl: 'https://github.com/juniorcueva-star/ferreteria-frontend',
    featured: true,
    year: '2026',
    category: 'Full Stack',
  },
  {
    slug: 'al-paso',
    title: 'Al Paso',
    description: 'App móvil para reservar cuartos en hostales de Lima por horas',
    longDescription:
      'Aplicación para Android y iPhone que permite encontrar y reservar cuartos en hostales y hospedajes de Lima por 4, 6, 8, 12 o 24 horas. El cliente ve las fotos reales del cuarto, agrega extras, paga en la app y entra con un código. Los negocios publican su hostal, que pasa por revisión antes de aparecer. Datos en Supabase con seguridad por fila (RLS) y pruebas de punta a punta.',
    image: '/projects/al-paso.png',
    technologies: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Node.js'],
    githubUrl: 'https://github.com/junior777fabian-svg/ALPASO-J-',
    featured: true,
    year: '2026',
    category: 'Móvil',
  },
  {
    slug: 'estilo-ia',
    title: 'Estilo IA',
    description: 'Marketplace de moda circular donde la IA sugiere prendas según tu ocasión',
    longDescription:
      'Proyecto integrador: plataforma de moda inteligente y sostenible. La IA sugiere prendas según la ocasión, el clima y tus preferencias, y los usuarios pueden publicar ropa para darle una segunda vida. Incluye catálogo, perfil de vendedor, panel de usuario y panel de administración, con autenticación, base de datos y almacenamiento en Firebase.',
    image: '/projects/estilo-ia.png',
    technologies: ['React', 'Vite', 'Firebase', 'Spring Boot', 'Spring Security'],
    githubUrl: 'https://github.com/juniorcueva-star/proyecto_integrador',
    featured: true,
    year: '2026',
    category: 'Proyecto Integrador',
  },
  {
    slug: 'nova-music',
    title: 'NOVA Music',
    description: 'Reproductor multimedia PWA para escuchar música y videos libres',
    longDescription:
      'Aplicación web progresiva (PWA) pensada para iPhone: descubre música libre, guarda favoritos, arma tus listas y reproduce tus propios archivos MP3, M4A y MP4. Integra la Media Session API para controlar la reproducción desde la pantalla de bloqueo. No requiere backend.',
    image: '/projects/nova-music.png',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PWA', 'Playwright'],
    featured: false,
    year: '2026',
    category: 'Frontend',
  },
  {
    slug: 'fitcore-pro',
    title: 'FitCore Pro',
    description: 'Plataforma de gestión de gimnasio con rutinas, entrenadores y asistencia',
    longDescription:
      'Sistema para gimnasios con panel de administración: gestión de rutinas, entrenadores y control de asistencia. API REST protegida con JWT y Spring Security, base de datos PostgreSQL y todo el entorno levantado con Docker Compose.',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'TypeScript', 'TanStack Query', 'Spring Boot', 'JWT', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/juniorcueva-star/fitcore-pro',
    featured: false,
    year: '2026',
    category: 'Full Stack',
  },
  {
    slug: 'gestion-proyectos-microservicios',
    title: 'Gestión de Proyectos',
    description: 'Arquitectura de microservicios para gestionar proyectos, tareas y responsables',
    longDescription:
      'Sistema distribuido con configuración centralizada (Spring Cloud Config), descubrimiento de servicios con Eureka y un API Gateway como entrada única. Tres microservicios (usuarios, proyectos y tareas), cada uno con su propia base de datos MySQL, comunicados con OpenFeign y desplegados con Docker Compose.',
    image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Spring Cloud', 'Eureka', 'API Gateway', 'OpenFeign', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/juniorcueva-star/evaluacion-4',
    featured: false,
    year: '2026',
    category: 'Backend',
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
