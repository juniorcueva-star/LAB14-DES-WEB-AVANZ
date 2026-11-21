// Fondo global: aurora animada + cuadrícula + viñeta. Solo CSS (sin JavaScript).
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-bg absolute inset-0" />
      <div className="animate-aurora absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-violet-600/25 blur-[120px] will-change-transform" />
      <div
        className="animate-aurora absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/15 blur-[120px] will-change-transform"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="animate-aurora absolute -bottom-52 left-1/4 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/15 blur-[120px] will-change-transform"
        style={{ animationDelay: '-12s' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#05060b_100%)]" />
    </div>
  );
}
