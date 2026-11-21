import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo, techStack } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';
import Typewriter from '@/components/Typewriter';
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from '@/components/Icons';

const stats = [
  { value: `${projects.length}+`, label: 'Proyectos construidos' },
  { value: `${techStack.length}`, label: 'Tecnologías que uso' },
  { value: '100%', label: 'Compromiso y pasión' },
];

const process = [
  {
    step: '01',
    title: 'Entender',
    text: 'Escucho tu idea, defino objetivos claros y diseño la mejor solución para tu caso.',
  },
  {
    step: '02',
    title: 'Construir',
    text: 'Desarrollo con código limpio, buenas prácticas, rendimiento y SEO desde el día uno.',
  },
  {
    step: '03',
    title: 'Lanzar',
    text: 'Despliego en la nube con dominio propio y sigo mejorando el producto contigo.',
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero Section */}
      <section className="relative flex min-h-[78vh] flex-col items-center justify-center pb-16 text-center">
        <div className="relative mb-8 animate-float">
          <div className="absolute -inset-1.5 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#e879f9,#8b5cf6)] blur-[2px]" />
          <div className="absolute -inset-8 rounded-full bg-violet-600/30 blur-3xl" />
          <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-[#05060b] md:h-36 md:w-36">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
              sizes="144px"
            />
          </div>
        </div>

        {personalInfo.available && (
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-zinc-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Disponible para nuevos proyectos
          </span>
        )}

        <h1 className="text-5xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl">
          Hola, soy <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
        </h1>

        <p className="mt-6 h-9 text-xl font-medium text-zinc-300 md:text-2xl">
          <Typewriter words={personalInfo.roles} />
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          {personalInfo.description}. Estudiante de {personalInfo.career} en {personalInfo.school}, convierto
          ideas en productos web rápidos, accesibles y optimizados para buscadores.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-violet-600/30 transition hover:scale-[1.03]"
          >
            Ver Proyectos
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
          <Link
            href="/contact"
            className="glass inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            Contáctame
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-5 text-zinc-400">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="transition hover:text-white">
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Stats */}
      <Reveal>
        <section className="glass grid grid-cols-1 divide-y divide-white/5 rounded-3xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="p-8 text-center">
              <p className="text-gradient text-5xl font-black tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </section>
      </Reveal>

      {/* Tech marquee */}
      <section aria-label="Tecnologías" className="relative my-24 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              aria-hidden={i >= techStack.length}
              className="glass rounded-2xl px-6 py-3 text-lg font-semibold whitespace-nowrap text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold tracking-widest text-violet-300 uppercase">Portafolio</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Proyectos Destacados
            </h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 text-zinc-300 hover:text-white">
            Ver todos <ArrowIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-32">
        <Reveal className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">Cómo trabajo</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
            De la idea al <span className="text-gradient">lanzamiento</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 120}>
              <div className="glass group h-full rounded-3xl p-8 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.07]">
                <span className="text-6xl font-black text-white/10 transition group-hover:text-violet-400/40">
                  {item.step}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
