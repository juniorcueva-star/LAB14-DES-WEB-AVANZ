'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { personalInfo } from '@/lib/data';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/about', label: 'Sobre Mí' },
  { href: '/contact', label: 'Contacto' },
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
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
          scrolled
            ? 'border border-white/10 bg-[#05060b]/80 shadow-2xl shadow-black/40 backdrop-blur-xl'
            : 'border border-transparent'
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-black text-white shadow-lg shadow-violet-500/30 transition-transform group-hover:rotate-6">
            JC
          </span>
          <span className="font-semibold tracking-tight text-white">{personalInfo.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive(link.href) && (
                  <span className="absolute inset-0 -z-10 rounded-xl bg-white/10 ring-1 ring-white/10" />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 md:inline-block"
        >
          Hablemos
        </Link>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="grid h-10 w-10 place-items-center rounded-xl text-white ring-1 ring-white/10 md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <ul className="glass mx-auto mt-2 max-w-5xl space-y-1 rounded-2xl p-2 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium ${
                  isActive(link.href) ? 'bg-white/10 text-white' : 'text-zinc-300'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
