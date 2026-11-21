'use client';

import { useState } from 'react';
import { CheckIcon, SendIcon } from '@/components/Icons';

const topics = ['Proyecto web', 'Prácticas / Empleo', 'Freelance', 'Colaboración', 'Otro'];

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

export default function ContactForm({ email }: { email: string }) {
  const [topic, setTopic] = useState(topics[0]);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [sender, setSender] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const from = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const next: Errors = {};
    if (name.length < 2) next.name = 'Escribe tu nombre.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) next.email = 'Ingresa un correo válido.';
    if (message.length < 10) next.message = 'Cuéntame un poco más (mínimo 10 caracteres).';
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus('sending');
    setSender(name.split(' ')[0]);

    // Abre el cliente de correo con el mensaje ya redactado.
    const subject = encodeURIComponent(`[Portafolio] ${topic} — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${from}`);
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus('sent');
    }, 900);
  }

  if (status === 'sent') {
    return (
      <div className="flex min-h-[28rem] flex-col items-center justify-center text-center" role="status">
        <div className="relative">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />
          <span className="animate-pop relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-zinc-950">
            <CheckIcon className="h-10 w-10" />
          </span>
        </div>
        <h3 className="mt-8 text-3xl font-bold text-white">¡Gracias, {sender}!</h3>
        <p className="mt-3 max-w-sm text-zinc-400">
          Se abrió tu aplicación de correo con el mensaje listo. Solo presiona enviar y te responderé muy pronto.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 rounded-2xl px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const field =
    'peer w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 pt-6 pb-2.5 text-white placeholder-transparent outline-none transition focus:border-violet-400/70 focus:bg-white/[0.06] focus:ring-4 focus:ring-violet-500/15';
  const label =
    'pointer-events-none absolute top-2 left-4 text-xs font-medium text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-violet-300';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-zinc-300">¿Sobre qué quieres hablar?</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                topic === t
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-600/30'
                  : 'bg-white/5 text-zinc-300 ring-1 ring-white/10 hover:bg-white/10'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <div className="relative">
            <input id="name" name="name" placeholder="Nombre" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
            <label htmlFor="name" className={label}>Tu nombre</label>
          </div>
          {errors.name && <p id="name-error" className="mt-1.5 text-sm text-rose-300">{errors.name}</p>}
        </div>
        <div>
          <div className="relative">
            <input id="email" name="email" type="email" placeholder="Correo" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
            <label htmlFor="email" className={label}>Tu correo</label>
          </div>
          {errors.email && <p id="email-error" className="mt-1.5 text-sm text-rose-300">{errors.email}</p>}
        </div>
      </div>

      <div>
        <div className="relative">
          <textarea id="message" name="message" rows={6} placeholder="Mensaje" className={`${field} resize-none`} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
          <label htmlFor="message" className={label}>Cuéntame tu idea</label>
        </div>
        {errors.message && <p id="message-error" className="mt-1.5 text-sm text-rose-300">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-[length:200%_auto] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-violet-600/30 transition-all duration-500 hover:bg-right disabled:opacity-80"
      >
        {status === 'sending' ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Preparando mensaje…
          </>
        ) : (
          <>
            Enviar mensaje
            <SendIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </button>
    </form>
  );
}
