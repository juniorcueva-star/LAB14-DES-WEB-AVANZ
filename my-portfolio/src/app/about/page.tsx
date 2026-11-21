import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { personalInfo, skillGroups } from '@/lib/data';
import Reveal from '@/components/Reveal';
import Spotlight from '@/components/Spotlight';
import { ArrowIcon, PinIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const facts = [
    personalInfo.age ? { label: 'Edad', value: `${personalInfo.age} años` } : null,
    { label: 'Carrera', value: personalInfo.career },
    { label: 'Instituto', value: `${personalInfo.school} · ${personalInfo.cycle}` },
    { label: 'Ubicación', value: personalInfo.location },
  ].filter((f): f is { label: string; value: string } => f !== null);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="enter mb-14">
        <p className="text-sm font-semibold tracking-widest text-violet-300 uppercase">Sobre mí</p>
        <h1 className="mt-3 text-5xl font-black tracking-tighter text-white md:text-7xl">
          ¡Hola! Soy <span className="text-gradient">{personalInfo.name}</span>
        </h1>
      </div>

      {/* Bento grid */}
      <div className="grid gap-5 md:grid-cols-3">
        <div className="enter md:row-span-2">
          <div className="gradient-border relative h-full min-h-[24rem] overflow-hidden rounded-3xl">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05060b] via-[#05060b]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-2xl font-bold text-white">{personalInfo.fullName}</p>
              <p className="mt-1 flex items-center gap-1.5 text-zinc-300">
                <PinIcon className="h-4 w-4" /> {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        <div className="enter md:col-span-2" style={{ '--delay': '100ms' } as React.CSSProperties}>
          <div className="glass h-full rounded-3xl p-8">
            <div className="space-y-4 text-lg leading-relaxed text-zinc-300">
              <p>
                Tengo {personalInfo.age} años, vivo en Lima y estoy culminando el {personalInfo.cycle} de{' '}
                <span className="text-white">{personalInfo.career}</span> en{' '}
                <span className="text-white">{personalInfo.school}</span>. Soy un desarrollador full stack que
                disfruta construir sistemas completos, desde la base de datos hasta la última animación.
              </p>
              <p>
                He desarrollado <span className="text-white">sistemas web completos</span> con Spring Boot y
                React, <span className="text-white">apps móviles</span> con Flutter y Firebase, arquitecturas de{' '}
                <span className="text-white">microservicios</span> con Spring Cloud y dashboards con Next.js.
              </p>
              <p>
                Me importa el código limpio y probado: escribo pruebas con JUnit, Mockito y Playwright, y despliego
                con Docker y en la nube. Siempre estoy aprendiendo algo nuevo.
              </p>
            </div>
          </div>
        </div>

        <Reveal delay={200} className="md:col-span-2">
          <dl className="grid h-full grid-cols-2 gap-5 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="glass rounded-3xl p-5">
                <dt className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">{fact.label}</dt>
                <dd className="mt-2 font-semibold text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Skills Section con lazy loading implícito */}
      <section className="mt-24">
        <Reveal className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">Stack</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">Habilidades Técnicas</h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <Spotlight className="h-full rounded-3xl">
                <div className="glass h-full rounded-3xl p-6 transition duration-500 hover:-translate-y-1">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-lg text-white">
                    {group.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-white">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-zinc-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mt-24">
        <div className="gradient-border relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/20 p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold text-white md:text-5xl">¿Trabajamos juntos?</h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-300">
            Estoy abierto a prácticas, proyectos freelance y colaboraciones. Escríbeme y conversemos.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-zinc-950 transition hover:scale-[1.03]"
          >
            Ir a Contacto <ArrowIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
