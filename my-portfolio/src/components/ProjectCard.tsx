import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import Spotlight from '@/components/Spotlight';
import { ArrowIcon } from '@/components/Icons';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Spotlight className="hud h-full rounded-2xl">
      <Link
        href={`/projects/${project.slug}`}
        className="group panel flex h-full flex-col overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1.5 hover:border-sky-400/60 hover:shadow-2xl hover:shadow-sky-900/10"
      >
        <div className="relative h-52 overflow-hidden border-b border-line">
          {/* Imágenes con lazy loading */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            className="object-cover grayscale-[35%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          <div className="absolute inset-x-3 top-3 flex items-center justify-between font-mono text-[11px] text-white">
            <span className="rounded-md bg-slate-900/70 px-2 py-1 backdrop-blur">
              {index !== undefined ? `P-${String(index + 1).padStart(2, '0')}` : 'PRJ'}
            </span>
            {project.category && (
              <span className="rounded-md bg-white/90 px-2 py-1 text-ink">{project.category}</span>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold tracking-tight text-ink">{project.title}</h3>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-steel transition duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
              <ArrowIcon />
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-steel">{project.description}</p>
          <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-dashed border-line pt-4 font-mono text-xs text-steel">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={tech} className="flex items-center gap-3">
                {i > 0 && <span className="text-slate-300">/</span>}
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-accent-ink">+{project.technologies.length - 3}</span>
            )}
            {project.year && <span className="ml-auto text-slate-400">{project.year}</span>}
          </div>
        </div>
      </Link>
    </Spotlight>
  );
}
