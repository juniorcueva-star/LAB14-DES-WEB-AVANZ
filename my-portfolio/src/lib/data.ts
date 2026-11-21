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
  {
    slug: 'medicita',
    title: 'MediCita',
    description: 'Sistema web de citas médicas para clínicas con historia clínica digital',
    longDescription:
      'Plataforma para clínicas donde los pacientes reservan citas según la disponibilidad de cada especialista, reciben recordatorios por correo y consultan sus resultados. Los médicos gestionan su agenda y la historia clínica digital, y el administrador ve reportes de atención. Frontend en React consumiendo una API REST en Spring Boot con autenticación JWT por roles y base de datos PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'TypeScript', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'],
    featured: false,
    year: '2026',
    category: 'Full Stack Web',
  },
  {
    slug: 'farmaya',
    title: 'FarmaYa',
    description: 'App móvil de farmacia con pedidos a domicilio y receta digital',
    longDescription:
      'Aplicación móvil para comprar medicamentos y productos de farmacia con entrega a domicilio. El cliente busca productos, sube la foto de su receta para validarla, paga y sigue el estado del pedido. Incluye un panel web para que la farmacia gestione stock y pedidos. App en Flutter, API en Node.js con Express y base de datos MongoDB.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Flutter', 'Dart', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    featured: false,
    year: '2026',
    category: 'Full Stack Móvil',
  },
  {
    slug: 'gympro',
    title: 'GymPro',
    description: 'App móvil para socios de gimnasio con panel web de administración',
    longDescription:
      'Solución completa para gimnasios: los socios usan la app para ver sus rutinas, reservar clases grupales y marcar asistencia con código QR. El gimnasio administra membresías, pagos, entrenadores y horarios desde un panel web. App en Flutter, panel en React, API REST en Spring Boot y base de datos MySQL.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Flutter', 'React', 'Spring Boot', 'MySQL', 'Docker'],
    featured: false,
    year: '2026',
    category: 'Full Stack Móvil',
  },
  {
    slug: 'eventhub',
    title: 'EventHub',
    description: 'Plataforma web de venta de entradas para conciertos y eventos',
    longDescription:
      'Sitio para publicar eventos y vender entradas en línea con selección de zona, pago y entrada digital con código QR que se valida en la puerta. Los organizadores ven ventas y aforo en tiempo real. Frontend en Next.js con renderizado en el servidor para un SEO excelente, API en Node.js con Express y base de datos PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    featured: false,
    year: '2025',
    category: 'Full Stack Web',
  },
  {
    slug: 'viajape',
    title: 'ViajaPe',
    description: 'App móvil para reservar tours y paquetes turísticos en el Perú',
    longDescription:
      'Aplicación para descubrir y reservar tours por todo el Perú: filtros por destino, fecha y presupuesto, galería de fotos, reseñas de viajeros y pago en la app. Las agencias publican y gestionan sus paquetes desde su propio panel. App en Flutter, API REST en Spring Boot y base de datos PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL', 'Google Maps API'],
    featured: false,
    year: '2025',
    category: 'Full Stack Móvil',
  },
  {
    slug: 'obracontrol',
    title: 'ObraControl',
    description: 'Sistema web para gestionar obras de construcción, materiales y avance',
    longDescription:
      'Herramienta para constructoras que centraliza el control de cada obra: cronograma de actividades, requerimiento y salida de materiales, personal asignado, presupuesto frente al gasto real y reportes de avance con fotos. Frontend en React, API REST en Spring Boot y base de datos MySQL, desplegado con Docker.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'Spring Boot', 'MySQL', 'Docker', 'Tailwind CSS'],
    featured: false,
    year: '2025',
    category: 'Full Stack Web',
  },
  {
    slug: 'legaldocs',
    title: 'LegalDocs',
    description: 'Gestión de expedientes y documentos legales con control de acceso',
    longDescription:
      'Sistema web para estudios de abogados: registro de clientes y expedientes, carga de documentos, plazos y audiencias con alertas, y control de acceso por roles para que cada abogado vea solo lo que le corresponde. Toda acción queda en un registro de auditoría. Frontend en Next.js, API en Node.js con Express y base de datos PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    featured: false,
    year: '2025',
    category: 'Full Stack Web',
  },
  {
    slug: 'pagofacil-pos',
    title: 'PagoFácil POS',
    description: 'Punto de venta móvil para pequeños negocios con cobros y reportes',
    longDescription:
      'App de punto de venta para bodegas y tiendas pequeñas: catálogo de productos, ventas rápidas con lector de código de barras desde la cámara, varios métodos de pago, cierre de caja diario y reportes de ventas sincronizados con la nube. App en Flutter, API REST en Spring Boot y base de datos PostgreSQL.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Flutter', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker'],
    featured: false,
    year: '2025',
    category: 'Full Stack Móvil',
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
