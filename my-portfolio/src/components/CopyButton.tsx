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
      className={`relative z-10 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-mono text-[11px] font-semibold transition ${
        copied ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-600/25' : 'bg-white text-steel ring-1 ring-line hover:text-ink hover:ring-ink'
      }`}
    >
      {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
      {copied ? '¡Copiado!' : 'Copiar'}
    </button>
  );
}
