import Link from 'next/link';
import { personalInfo } from '@/lib/data';
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium tracking-widest text-violet-300 uppercase">¿Tienes una idea?</p>
            <Link
              href="/contact"
              className="group mt-3 inline-flex items-center gap-4 text-4xl font-bold tracking-tight text-white md:text-6xl"
            >
              Construyámosla <span className="text-gradient">juntos</span>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-zinc-950 transition-transform duration-300 group-hover:rotate-45 md:h-16 md:w-16">
                <ArrowIcon className="h-6 w-6" />
              </span>
            </Link>
          </div>

          <div className="flex gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass grid h-12 w-12 place-items-center rounded-2xl text-zinc-300 transition hover:-translate-y-1 hover:text-white"
            >
              <GithubIcon />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass grid h-12 w-12 place-items-center rounded-2xl text-zinc-300 transition hover:-translate-y-1 hover:text-white"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="glass grid h-12 w-12 place-items-center rounded-2xl text-zinc-300 transition hover:-translate-y-1 hover:text-white"
            >
              <MailIcon />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/5 pt-8 text-sm text-zinc-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p>
            Hecho con <span className="text-zinc-200">Next.js</span> y{' '}
            <span className="text-zinc-200">Tailwind CSS</span> · {personalInfo.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
