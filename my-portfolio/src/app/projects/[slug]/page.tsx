import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import { ArrowIcon, GithubIcon } from '@/components/Icons';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <Link
        href="/projects"
        className="group mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span> Volver a Proyectos
      </Link>

      <article>
        <div className="enter">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {project.category && (
              <span className="rounded-full bg-violet-500/15 px-3 py-1 font-medium text-violet-200 ring-1 ring-violet-400/20">
                {project.category}
              </span>
            )}
            {project.year && <span className="text-zinc-500">{project.year}</span>}
          </div>
          <h1 className="mt-4 text-5xl font-black tracking-tighter text-white md:text-7xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-xl text-zinc-400">{project.description}</p>
        </div>

        <div className="enter" style={{ '--delay': '120ms' } as React.CSSProperties}>
          <div className="gradient-border relative mt-12 h-[22rem] overflow-hidden rounded-3xl md:h-[32rem]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05060b]/70 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white">Sobre el proyecto</h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              {project.longDescription ?? project.description}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass rounded-3xl p-6">
              <h2 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                Tecnologías Utilizadas
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-200 ring-1 ring-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
                  >
                    Ver Demo <ArrowIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-6 py-3 font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                  >
                    <GithubIcon /> Ver Código
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {others.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-8 text-3xl font-bold text-white">Otros proyectos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
