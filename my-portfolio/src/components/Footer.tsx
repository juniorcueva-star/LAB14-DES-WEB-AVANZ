import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import { ArrowIcon, GithubIcon, MailIcon, WhatsappIcon } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-ink text-white">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-sky-300 uppercase">{'// '}¿Tienes una idea?</p>
            <Link
              href="/contact"
              className="group mt-4 inline-flex flex-wrap items-center gap-x-5 gap-y-3 text-4xl font-black tracking-tighter md:text-7xl"
            >
              Construyámosla <span className="text-sky-400">juntos</span>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-sky-400 text-ink transition-transform duration-300 group-hover:rotate-45 md:h-16 md:w-16">
                <ArrowIcon className="h-6 w-6" />
              </span>
            </Link>
          </div>

          <div className="flex gap-3">
            {[
              { href: personalInfo.github, label: 'GitHub', icon: GithubIcon, external: true },
              { href: personalInfo.whatsappUrl, label: 'WhatsApp (solo mensajes)', icon: WhatsappIcon, external: true },
              { href: `mailto:${personalInfo.email}`, label: 'Email', icon: MailIcon, external: false },
            ].map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/15 text-slate-300 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 font-mono text-xs text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} {personalInfo.fullName}. Todos los derechos reservados.
          </p>
          <p>
            Next.js · Tailwind CSS · {personalInfo.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
