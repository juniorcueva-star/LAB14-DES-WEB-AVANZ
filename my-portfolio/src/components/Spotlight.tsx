'use client';

// Contenedor con un brillo que sigue la posición del cursor.
export default function Spotlight({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }

  return (
    <div onPointerMove={handleMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
