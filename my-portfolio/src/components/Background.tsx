// Fondo global: cuadrícula técnica + halos de luz suaves. Solo CSS (sin JavaScript).
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#ffffff_0%,transparent_60%)]" />
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -top-48 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-sky-300/25 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-slate-300/40 blur-[120px]" />
      {/* Línea de escaneo vertical */}
      <div className="absolute inset-y-0 left-[8%] hidden w-px bg-gradient-to-b from-transparent via-sky-500/40 to-transparent lg:block" />
      <div className="absolute inset-y-0 right-[8%] hidden w-px bg-gradient-to-b from-transparent via-slate-400/40 to-transparent lg:block" />
    </div>
  );
}
