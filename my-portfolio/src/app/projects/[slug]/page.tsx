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
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  const specs = [
    ['ID', `P-${String(index + 1).padStart(2, '0')}`],
    ['Categoría', project.category ?? '—'],
    ['Año', project.year ?? '—'],
    ['Stack', `${project.technologies.length} tecnologías`],
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <Link
        href="/projects"
        className="group mb-10 inline-flex items-center gap-2 font-mono text-sm text-steel transition hover:text-ink"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span> volver_a_proyectos
      </Link>

      <article>
        <div className="enter">
          <p className="label">{'// '}Proyecto {specs[0][1]}</p>
          <h1 className="mt-4 text-6xl font-black tracking-tighter text-ink md:text-8xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel">{project.description}</p>
        </div>

        <div className="enter" style={{ '--delay': '120ms' } as React.CSSProperties}>
          <div className="hud hud-on relative mt-12 h-[22rem] overflow-hidden rounded-2xl border border-line md:h-[32rem]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <h2 className="label">{'// '}Descripción</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{project.longDescription ?? project.description}</p>

            <h2 className="label mt-10">{'// '}Tecnologías Utilizadas</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-md border border-line bg-white/80 px-3 py-1.5 font-mono text-sm text-ink">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="panel rounded-2xl p-6">
              <dl className="divide-y divide-dashed divide-line">
                {specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3">
                    <dt className="font-mono text-xs tracking-widest text-steel uppercase">{k}</dt>
                    <dd className="text-sm font-semibold text-ink">{v}</dd>
                  </div>
                ))}
              </dl>

              {(project.demoUrl || project.githubUrl) && (
                <div className="mt-6 flex flex-col gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 font-semibold text-white transition hover:bg-accent-ink"
                    >
                      Ver Demo <ArrowIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 py-3 font-semibold text-ink transition hover:border-ink"
                    >
                      <GithubIcon /> Ver Código
                    </a>
                  )}
                </div>
              )}

              <Link
                href="/contact"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 font-semibold text-white transition hover:bg-accent-ink"
              >
                ¿Quieres algo así? <ArrowIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      {others.length > 0 && (
        <section className="mt-28">
          <p className="label">{'// '}Siguientes</p>
          <h2 className="mt-3 mb-8 text-4xl font-black tracking-tighter text-ink">Otros proyectos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <ProjectCard project={p} index={projects.indexOf(p)} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
