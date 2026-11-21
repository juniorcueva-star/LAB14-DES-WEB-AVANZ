import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import Spotlight from '@/components/Spotlight';
import { ArrowIcon } from '@/components/Icons';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Spotlight className="h-full rounded-3xl">
      <Link
        href={`/projects/${project.slug}`}
        className="group glass gradient-border flex h-full flex-col overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-900/40"
      >
        <div className="relative m-2 h-52 overflow-hidden rounded-2xl">
          {/* Imágenes con lazy loading */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05060b]/80 via-transparent to-transparent" />
          {project.category && (
            <span className="glass absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-medium text-white">
              {project.category}
            </span>
          )}
          <span className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white text-zinc-950 opacity-0 transition duration-500 group-hover:rotate-45 group-hover:opacity-100">
            <ArrowIcon />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 pt-4">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {project.year && <span className="text-sm text-zinc-500">{project.year}</span>}
          </div>
          <p className="mt-2 line-clamp-2 text-zinc-400">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium text-violet-200 ring-1 ring-violet-400/20">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </Spotlight>
  );
}
