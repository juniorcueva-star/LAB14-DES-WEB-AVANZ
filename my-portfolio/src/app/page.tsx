import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo, techStack } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import Typewriter from '@/components/Typewriter';
import { ArrowIcon, GithubIcon, MailIcon, WhatsappIcon } from '@/components/Icons';

const stats = [
  { value: `${String(projects.length).padStart(2, '0')}`, label: 'Proyectos' },
  { value: `${techStack.length}+`, label: 'Tecnologías' },
  { value: '24h', label: 'Tiempo de respuesta' },
  { value: '100%', label: 'Compromiso' },
];

const process = [
  {
    step: '01',
    title: 'Analizar',
    text: 'Entiendo el problema, defino requisitos claros y diseño la arquitectura adecuada para tu caso.',
  },
  {
    step: '02',
    title: 'Construir',
    text: 'Desarrollo con código limpio y probado, cuidando el rendimiento, la seguridad y el SEO.',
  },
  {
    step: '03',
    title: 'Desplegar',
    text: 'Publico en la nube con dominio propio, monitoreo el resultado y sigo iterando.',
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const idRows = [
    ['NOMBRE', personalInfo.fullName],
    ['ROL', personalInfo.title],
    ['EDAD', `${personalInfo.age} años`],
    ['FORMACIÓN', `${personalInfo.school} · ${personalInfo.cycle}`],
    ['BASE', personalInfo.location],
  ];

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero Section */}
      <section className="grid min-h-[80vh] items-center gap-14 pb-16 lg:grid-cols-[1.25fr_1fr]">
        <div className="enter">
          <p className="label flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            Portafolio · 2026
          </p>

          <h1 className="mt-6 text-6xl leading-[0.92] font-black tracking-tighter text-ink sm:text-7xl md:text-8xl">
            Junior
            <br />
            <span className="text-gradient">Cueva</span>
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-8 h-8 font-mono text-lg text-ink md:text-xl">
            <span className="text-accent-ink">&gt;</span> <Typewriter words={personalInfo.roles} />
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
            Estudiante de {personalInfo.career} en {personalInfo.school}. Construyo sistemas completos: APIs con
            Java y Spring Boot, interfaces con React y Next.js, y apps móviles con Flutter.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-accent-ink"
            >
              Ver Proyectos
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-ink/80 bg-white/60 px-6 py-3.5 font-semibold text-ink transition hover:bg-white"
            >
              Contáctame
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-5 text-steel">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-ink">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (solo mensajes)" className="transition hover:text-emerald-600">
              <WhatsappIcon className="h-5 w-5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="transition hover:text-ink">
              <MailIcon className="h-5 w-5" />
            </a>
            <span className="h-px flex-1 max-w-24 bg-line" />
            <span className="font-mono text-xs tracking-widest uppercase">{personalInfo.location}</span>
          </div>
        </div>

        {/* Tarjeta de identificación HUD */}
        <div className="enter" style={{ '--delay': '150ms' } as React.CSSProperties}>
          <div className="hud hud-on panel relative overflow-hidden rounded-2xl p-6 shadow-2xl shadow-slate-900/10">
            <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-steel uppercase">
              <span>ID · DEV-2026</span>
              <span className="flex items-center gap-1.5 text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Disponible
              </span>
            </div>

            <div className="relative mx-auto mt-6 h-44 w-44">
              <div className="absolute -inset-3 animate-spin-slow rounded-full border border-dashed border-sky-500/50" />
              <div className="absolute -inset-1 rounded-full border border-line" />
              <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-200">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="176px"
                />
                <div className="absolute inset-x-0 top-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-sky-400/30 to-transparent" />
              </div>
            </div>

            <dl className="mt-8 divide-y divide-dashed divide-line border-y border-dashed border-line">
              {idRows.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="font-mono text-[11px] tracking-widest text-steel">{k}</dt>
                  <dd className="text-right text-sm font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 flex items-end justify-between">
              <div className="flex h-8 items-end gap-[3px]" aria-hidden>
                {[6, 10, 4, 12, 8, 14, 5, 11, 7, 13, 9, 6, 12, 4, 10].map((h, i) => (
                  <span key={i} className="w-[3px] rounded-full bg-ink/80" style={{ height: `${h * 2}px` }} />
                ))}
              </div>
              <span className="font-mono text-[10px] text-steel">JC/FS/LIM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Reveal>
        <section className="panel grid grid-cols-2 divide-line rounded-2xl md:grid-cols-4 md:divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="p-7">
              <p className="text-4xl font-black tracking-tighter text-ink md:text-5xl">{stat.value}</p>
              <p className="mt-2 font-mono text-[11px] tracking-widest text-steel uppercase">{stat.label}</p>
            </div>
          ))}
        </section>
      </Reveal>

      {/* Tech marquee */}
      <section
        aria-label="Tecnologías"
        className="relative my-24 overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
      >
        <div className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              aria-hidden={i >= techStack.length}
              className="flex items-center gap-8 font-mono text-lg whitespace-nowrap text-steel"
            >
              {tech}
              <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="label">{'// '}01 — Proyectos</p>
            <h2 className="mt-3 text-4xl font-black tracking-tighter text-ink md:text-6xl">
              Proyectos Destacados
            </h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 font-mono text-sm text-steel hover:text-ink">
            ver_todos <ArrowIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 120}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-32">
        <Reveal className="mb-12">
          <p className="label">{'// '}02 — Proceso</p>
          <h2 className="mt-3 text-4xl font-black tracking-tighter text-ink md:text-6xl">
            De la idea al <span className="text-gradient">despliegue</span>
          </h2>
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 120} className="h-full">
              <div className="group h-full bg-panel p-8 transition-colors duration-500 hover:bg-white">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-accent-ink">[{item.step}]</span>
                  <span className="h-px w-16 bg-line transition-all duration-500 group-hover:w-24 group-hover:bg-accent" />
                </div>
                <h3 className="mt-10 text-3xl font-black tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-steel">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
