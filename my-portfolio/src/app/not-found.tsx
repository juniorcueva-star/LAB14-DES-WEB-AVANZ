import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-gradient text-8xl font-black tracking-tighter md:text-9xl">404</p>
      <h1 className="mt-4 text-3xl font-bold text-white">Esta página se perdió en el código</h1>
      <p className="mt-3 text-zinc-400">La página que buscas no existe o fue movida.</p>
      <Link
        href="/"
        className="mt-8 rounded-2xl bg-white px-7 py-3.5 font-semibold text-zinc-950 transition hover:scale-[1.03]"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
