'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { personalInfo } from '@/lib/data';

const links = [
  { href: '/', label: 'Inicio', code: '00' },
  { href: '/projects', label: 'Proyectos', code: '01' },
  { href: '/about', label: 'Sobre Mí', code: '02' },
  { href: '/contact', label: 'Contacto', code: '03' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Navegación principal"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
          scrolled ? 'panel bg-white/90 shadow-lg shadow-slate-900/5' : 'border border-transparent'
        }`}
      >
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-ink font-mono text-xs font-bold text-white transition-transform group-hover:-rotate-6">
            JC
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-ice bg-accent" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-ink">{personalInfo.name}</span>
            <span className="block font-mono text-[10px] tracking-widest text-steel uppercase">Full Stack Dev</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`group relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-ink' : 'text-steel hover:text-ink'
                }`}
              >
                <span className={`font-mono text-[10px] ${isActive(link.href) ? 'text-accent' : 'text-slate-400'}`}>
                  {link.code}
                </span>
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${
                    isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-ink md:inline-flex"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
          Hablemos
        </Link>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-ink md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <ul className="panel mx-auto mt-2 max-w-6xl space-y-1 rounded-2xl p-2 shadow-lg md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium ${
                  isActive(link.href) ? 'bg-ink text-white' : 'text-ink'
                }`}
              >
                <span className="font-mono text-xs opacity-60">{link.code}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
