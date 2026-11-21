import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';
import CopyButton from '@/components/CopyButton';
import Reveal from '@/components/Reveal';
import Spotlight from '@/components/Spotlight';
import {
  ArrowIcon,
  ClockIcon,
  GithubIcon,
  MailIcon,
  PinIcon,
  WhatsappIcon,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contacta a ${personalInfo.name}, ${personalInfo.title}. Cuéntame tu idea de proyecto, propuesta de prácticas o colaboración y te responderé en menos de 24 horas.`,
  keywords: ['contacto', 'contratar desarrollador', 'desarrollador web freelance', 'prácticas', personalInfo.name],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contacto - ${personalInfo.name}`,
    description: '¿Tienes una idea? Hablemos y construyámosla juntos.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contacto - ${personalInfo.name}`,
    description: '¿Tienes una idea? Hablemos y construyámosla juntos.',
  },
};

const faqs = [
  {
    q: '¿En cuánto tiempo respondes?',
    a: 'Normalmente en menos de 24 horas. Si es algo urgente, escríbeme por WhatsApp (solo mensajes, no atiendo llamadas).',
  },
  {
    q: '¿Qué tipo de proyectos aceptas?',
    a: 'Sistemas web completos (Spring Boot + React), sitios con Next.js, APIs REST, apps móviles con Flutter y landing pages. También estoy abierto a prácticas preprofesionales.',
  },
  {
    q: '¿Trabajas de forma remota?',
    a: `Sí. Trabajo de forma remota desde ${personalInfo.location} y puedo coordinar reuniones por videollamada.`,
  },
];

export default function ContactPage() {
  const channels = [
    {
      name: 'Email',
      note: '',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: MailIcon,
      color: 'bg-ink',
      copy: true,
    },
    {
      name: 'WhatsApp',
      note: 'Solo mensajes',
      value: personalInfo.whatsapp,
      href: personalInfo.whatsappUrl,
      icon: WhatsappIcon,
      color: 'bg-emerald-600',
      copy: false,
    },
    {
      name: 'GitHub',
      note: '',
      value: personalInfo.github.replace(/^https?:\/\//, ''),
      href: personalInfo.github,
      icon: GithubIcon,
      color: 'bg-slate-600',
      copy: false,
    },
  ];

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contacto - ${personalInfo.name}`,
    url: `${personalInfo.siteUrl}/contact`,
    mainEntity: {
      '@type': 'Person',
      name: personalInfo.fullName,
      email: `mailto:${personalInfo.email}`,
      url: personalInfo.siteUrl,
    },
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      {/* Hero */}
      <div className="enter grid gap-10 border-b border-line pb-14 md:grid-cols-[1.5fr_1fr] md:items-end">
        <div>
          <p className="label">{'// '}03 — Contacto</p>
          <h1 className="mt-4 text-6xl font-black tracking-tighter text-ink sm:text-7xl md:text-8xl">
            Hablemos de tu <span className="text-gradient">próxima idea</span>
            <span className="text-accent">.</span>
          </h1>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 rounded-md border border-emerald-600/30 bg-emerald-50 px-3 py-1.5 font-mono text-xs text-emerald-800">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Respondo en menos de 24 horas
          </span>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            ¿Tienes un proyecto, una propuesta de prácticas o simplemente quieres saludar? Escríbeme y
            construyamos algo increíble juntos.
          </p>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        {/* Canales de contacto */}
        <div className="space-y-4 lg:col-span-2">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.name} delay={i * 100}>
                <Spotlight className="hud rounded-2xl">
                  <div className="panel group relative flex items-center gap-4 rounded-2xl p-5 transition duration-500 hover:-translate-y-1 hover:border-sky-400/60">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${channel.color} text-white`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-steel uppercase">
                        {channel.name}
                        {channel.note && (
                          <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] tracking-normal text-emerald-800 normal-case ring-1 ring-emerald-600/25">
                            {channel.note}
                          </span>
                        )}
                      </p>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                        rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="mt-0.5 block truncate font-semibold text-ink after:absolute after:inset-0 after:rounded-2xl"
                      >
                        {channel.value}
                      </a>
                    </div>
                    {channel.copy ? (
                      <CopyButton value={channel.value} label={`Copiar ${channel.name}`} />
                    ) : (
                      <ArrowIcon className="h-5 w-5 text-steel transition-transform duration-300 group-hover:rotate-45 group-hover:text-accent" />
                    )}
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}

          <Reveal delay={300}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              <div className="bg-panel p-5">
                <PinIcon className="h-5 w-5 text-accent" />
                <p className="mt-3 font-mono text-[11px] tracking-widest text-steel uppercase">Ubicación</p>
                <p className="mt-1 font-semibold text-ink">{personalInfo.location}</p>
              </div>
              <div className="bg-panel p-5">
                <ClockIcon className="h-5 w-5 text-accent" />
                <p className="mt-3 font-mono text-[11px] tracking-widest text-steel uppercase">Horario</p>
                <p className="mt-1 font-semibold text-ink">Lun – Sáb · GMT-5</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Formulario */}
        <Reveal delay={150} className="lg:col-span-3">
          <div className="hud hud-on panel relative h-full overflow-hidden rounded-2xl p-6 shadow-2xl shadow-slate-900/10 md:p-10">
            <div className="flex items-center justify-between border-b border-dashed border-line pb-5">
              <div>
                <p className="label">{'// '}Formulario</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-ink">Envíame un mensaje</h2>
              </div>
              <span className="hidden gap-1.5 sm:flex" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
            </div>
            <p className="mt-5 mb-8 text-steel">Completa el formulario y te responderé lo antes posible.</p>
            <ContactForm email={personalInfo.email} />
          </div>
        </Reveal>
      </div>

      {/* Preguntas frecuentes */}
      <section className="mt-28 grid gap-10 md:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="label">{'// '}FAQ</p>
          <h2 className="mt-3 text-4xl font-black tracking-tighter text-ink md:text-5xl">Preguntas frecuentes</h2>
          <p className="mt-4 text-steel">Lo que más me preguntan antes de empezar un proyecto.</p>
        </Reveal>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 100}>
              <details className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink">
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent-ink">0{i + 1}</span>
                    {faq.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-xl text-steel transition duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-white">
                    +
                  </span>
                </summary>
                <p className="mt-4 pl-9 leading-relaxed text-steel">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
    </div>
  );
}
