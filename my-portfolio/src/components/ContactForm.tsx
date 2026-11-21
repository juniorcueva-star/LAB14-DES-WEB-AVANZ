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
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/25" />
          <span className="animate-pop relative grid h-20 w-20 place-items-center rounded-full bg-emerald-600 text-white">
            <CheckIcon className="h-10 w-10" />
          </span>
        </div>
        <h3 className="mt-8 text-3xl font-black tracking-tight text-ink">¡Gracias, {sender}!</h3>
        <p className="mt-3 max-w-sm text-steel">
          Se abrió tu aplicación de correo con el mensaje listo. Solo presiona enviar y te responderé muy pronto.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 rounded-lg border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const field =
    'peer w-full rounded-lg border border-line bg-white/80 px-4 pt-6 pb-2.5 text-ink placeholder-transparent outline-none transition focus:border-accent focus:bg-white focus:ring-4 focus:ring-sky-500/15';
  const label =
    'pointer-events-none absolute top-2 left-4 font-mono text-[11px] tracking-wider text-steel uppercase transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:font-sans peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:font-mono peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-accent-ink';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <fieldset>
        <legend className="mb-3 font-mono text-[11px] tracking-widest text-steel uppercase">¿Sobre qué quieres hablar?</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={`rounded-md border px-3.5 py-2 font-mono text-xs transition ${
                topic === t
                  ? 'border-ink bg-ink text-white'
                  : 'border-line bg-white/80 text-steel hover:border-ink hover:text-ink'
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
          {errors.name && <p id="name-error" className="mt-1.5 text-sm text-rose-700">{errors.name}</p>}
        </div>
        <div>
          <div className="relative">
            <input id="email" name="email" type="email" placeholder="Correo" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
            <label htmlFor="email" className={label}>Tu correo</label>
          </div>
          {errors.email && <p id="email-error" className="mt-1.5 text-sm text-rose-700">{errors.email}</p>}
        </div>
      </div>

      <div>
        <div className="relative">
          <textarea id="message" name="message" rows={6} placeholder="Mensaje" className={`${field} resize-none`} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
          <label htmlFor="message" className={label}>Cuéntame tu idea</label>
        </div>
        {errors.message && <p id="message-error" className="mt-1.5 text-sm text-rose-700">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-ink px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:bg-accent-ink disabled:opacity-80"
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
