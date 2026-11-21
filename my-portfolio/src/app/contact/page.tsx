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
  LinkedinIcon,
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
    a: 'Normalmente en menos de 24 horas. Si es algo urgente, escríbeme por WhatsApp o LinkedIn.',
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
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: MailIcon,
      color: 'from-violet-500 to-fuchsia-500',
      copy: true,
    },
    personalInfo.whatsapp
      ? {
          name: 'WhatsApp',
          value: personalInfo.whatsapp,
          href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`,
          icon: WhatsappIcon,
          color: 'from-emerald-500 to-teal-400',
          copy: false,
        }
      : null,
    {
      name: 'LinkedIn',
      value: personalInfo.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      href: personalInfo.linkedin,
      icon: LinkedinIcon,
      color: 'from-sky-500 to-blue-600',
      copy: false,
    },
    {
      name: 'GitHub',
      value: personalInfo.github.replace(/^https?:\/\//, ''),
      href: personalInfo.github,
      icon: GithubIcon,
      color: 'from-zinc-500 to-zinc-700',
      copy: false,
    },
  ].filter((c) => c !== null);

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
      <div className="enter relative mx-auto max-w-4xl text-center">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-zinc-200">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          Respondo en menos de 24 horas
        </span>
        <h1 className="mt-8 text-5xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl">
          Hablemos de tu <span className="text-gradient">próxima idea</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          ¿Tienes un proyecto, una propuesta de prácticas o simplemente quieres saludar? Escríbeme y
          construyamos algo increíble juntos.
        </p>
      </div>

      <div className="mt-20 grid gap-6 lg:grid-cols-5">
        {/* Canales de contacto */}
        <div className="space-y-4 lg:col-span-2">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.name} delay={i * 100}>
                <Spotlight className="rounded-3xl">
                  <div className="glass group relative flex items-center gap-4 rounded-3xl p-5 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.07]">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${channel.color} text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">{channel.name}</p>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith('http') ? '_blank' : undefined}
                        rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block truncate font-semibold text-white after:absolute after:inset-0 after:rounded-3xl"
                      >
                        {channel.value}
                      </a>
                    </div>
                    {channel.copy ? (
                      <CopyButton value={channel.value} label={`Copiar ${channel.name}`} />
                    ) : (
                      <ArrowIcon className="h-5 w-5 text-zinc-500 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
                    )}
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}

          <Reveal delay={400}>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-3xl p-5">
                <PinIcon className="h-6 w-6 text-cyan-300" />
                <p className="mt-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">Ubicación</p>
                <p className="mt-1 font-semibold text-white">{personalInfo.location}</p>
              </div>
              <div className="glass rounded-3xl p-5">
                <ClockIcon className="h-6 w-6 text-violet-300" />
                <p className="mt-3 text-xs font-semibold tracking-widest text-zinc-500 uppercase">Horario</p>
                <p className="mt-1 font-semibold text-white">Lun – Sáb, GMT-5</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Formulario */}
        <Reveal delay={150} className="lg:col-span-3">
          <div className="gradient-border glass relative h-full overflow-hidden rounded-3xl p-6 md:p-10">
            <div aria-hidden className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-600/30 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white">Envíame un mensaje</h2>
              <p className="mt-2 mb-8 text-zinc-400">Completa el formulario y te responderé lo antes posible.</p>
              <ContactForm email={personalInfo.email} />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Preguntas frecuentes */}
      <section className="mx-auto mt-28 max-w-3xl">
        <Reveal className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">FAQ</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">Preguntas frecuentes</h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 100}>
              <details className="glass group rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                  {faq.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/5 text-xl text-zinc-300 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-zinc-400">{faq.a}</p>
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
