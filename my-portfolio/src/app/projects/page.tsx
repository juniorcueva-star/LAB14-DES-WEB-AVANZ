import { Metadata } from 'next';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Explora mi colección de proyectos de desarrollo web y aplicaciones',
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Proyectos - Portafolio',
    description: 'Explora mi colección de proyectos de desarrollo web',
  },
};

export default function ProjectsPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category).filter(Boolean)));

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="enter mb-16 grid gap-8 border-b border-line pb-12 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="label">{'// '}Índice · {String(projects.length).padStart(2, '0')} proyectos</p>
          <h1 className="mt-4 text-6xl font-black tracking-tighter text-ink md:text-8xl">
            Mis <span className="text-gradient">Proyectos</span>
          </h1>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-steel">
            Sistemas empresariales, apps móviles, microservicios y aplicaciones web. Cada proyecto es una
            oportunidad para aprender algo nuevo.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((c) => (
              <span key={c} className="rounded-md border border-line bg-white/70 px-2.5 py-1 text-steel">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 120}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
