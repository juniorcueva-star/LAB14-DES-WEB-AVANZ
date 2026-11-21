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
      <div className="enter mb-14 border-b border-line pb-12">
        <p className="label">{'// '}Perfil</p>
        <h1 className="mt-4 text-6xl font-black tracking-tighter text-ink md:text-8xl">
          ¡Hola! Soy <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
          <span className="text-accent">.</span>
        </h1>
      </div>

      {/* Bento grid */}
      <div className="grid gap-5 md:grid-cols-3">
        <div className="enter md:row-span-2">
          <div className="hud hud-on relative h-full min-h-[26rem] overflow-hidden rounded-2xl border border-line bg-slate-200">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="font-mono text-[11px] tracking-widest text-sky-300 uppercase">ID · DEV-2026</p>
              <p className="mt-1 text-2xl font-bold">{personalInfo.fullName}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-200">
                <PinIcon className="h-4 w-4" /> {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        <div className="enter md:col-span-2" style={{ '--delay': '100ms' } as React.CSSProperties}>
          <div className="panel h-full rounded-2xl p-8">
            <p className="label">{'// '}Bio</p>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-steel">
              <p>
                Tengo {personalInfo.age} años, vivo en Lima y estoy culminando el {personalInfo.cycle} de{' '}
                <span className="font-semibold text-ink">{personalInfo.career}</span> en{' '}
                <span className="font-semibold text-ink">{personalInfo.school}</span>. Soy un desarrollador full
                stack que disfruta construir sistemas completos, desde la base de datos hasta la interfaz.
              </p>
              <p>
                He desarrollado <span className="font-semibold text-ink">sistemas web completos</span> con Spring
                Boot y React, <span className="font-semibold text-ink">apps móviles</span> con Flutter y Firebase,
                arquitecturas de <span className="font-semibold text-ink">microservicios</span> con Spring Cloud y
                dashboards con Next.js.
              </p>
              <p>
                Me importa el código limpio y probado: escribo pruebas con JUnit, Mockito y Playwright, y despliego
                con Docker y en la nube. Siempre estoy aprendiendo algo nuevo.
              </p>
            </div>
          </div>
        </div>

        <Reveal delay={200} className="md:col-span-2">
          <dl className="grid h-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-panel p-5">
                <dt className="font-mono text-[11px] tracking-widest text-steel uppercase">{fact.label}</dt>
                <dd className="mt-2 font-semibold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Skills Section con lazy loading implícito */}
      <section className="mt-28">
        <Reveal className="mb-10">
          <p className="label">{'// '}Stack técnico</p>
          <h2 className="mt-3 text-4xl font-black tracking-tighter text-ink md:text-6xl">Habilidades Técnicas</h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 100}>
              <Spotlight className="hud h-full rounded-2xl">
                <div className="panel h-full rounded-2xl p-6 transition duration-500 hover:-translate-y-1 hover:border-sky-400/60">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white">{group.icon}</span>
                    <span className="font-mono text-xs text-steel">{String(group.items.length).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-md border border-line bg-white/80 px-2.5 py-1 font-mono text-xs text-ink">
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

      <Reveal className="mt-28">
        <div className="relative overflow-hidden rounded-2xl bg-ink p-10 text-white md:p-16">
          <div aria-hidden className="grid-bg absolute inset-0 opacity-20 invert" />
          <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="relative">
            <p className="font-mono text-xs tracking-[0.2em] text-sky-300 uppercase">{'// '}Disponible</p>
            <h2 className="mt-3 text-4xl font-black tracking-tighter md:text-6xl">¿Trabajamos juntos?</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Estoy abierto a prácticas, proyectos freelance y colaboraciones. Escríbeme y conversemos.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-sky-400 px-6 py-3.5 font-semibold text-ink transition hover:bg-sky-300"
            >
              Ir a Contacto <ArrowIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
