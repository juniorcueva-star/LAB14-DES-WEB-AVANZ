import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="label">{'// '}Error 404</p>
      <p className="text-gradient mt-4 text-8xl font-black tracking-tighter md:text-9xl">404</p>
      <h1 className="mt-4 text-3xl font-black tracking-tight text-ink">Esta página se perdió en el código</h1>
      <p className="mt-3 text-steel">La página que buscas no existe o fue movida.</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-ink px-7 py-3.5 font-semibold text-white transition hover:bg-accent-ink"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
