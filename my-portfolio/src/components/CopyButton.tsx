'use client';

import { useState } from 'react';
import { CheckIcon, CopyIcon } from '@/components/Icons';

// Copia un texto al portapapeles y muestra una confirmación.
export default function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'Copiado' : label}
      className={`relative z-10 inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
        copied ? 'bg-emerald-400/15 text-emerald-300' : 'bg-white/5 text-zinc-300 ring-1 ring-white/10 hover:bg-white/10'
      }`}
    >
      {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
      {copied ? '¡Copiado!' : 'Copiar'}
    </button>
  );
}
