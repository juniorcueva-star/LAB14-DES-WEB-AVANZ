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
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="enter mb-16 max-w-3xl">
        <p className="text-sm font-semibold tracking-widest text-violet-300 uppercase">
          {projects.length} proyectos
        </p>
        <h1 className="mt-3 text-5xl font-black tracking-tighter text-white md:text-7xl">
          Mis <span className="text-gradient">Proyectos</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Una colección de proyectos en los que he trabajado: sistemas empresariales, apps móviles,
          microservicios y aplicaciones web. Cada uno es una oportunidad para aprender algo nuevo.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 120}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
