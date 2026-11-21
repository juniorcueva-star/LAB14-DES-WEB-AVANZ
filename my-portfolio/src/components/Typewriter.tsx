'use client';

import { useEffect, useState } from 'react';

// Escribe y borra cada frase en bucle, como una máquina de escribir.
export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 40 : 85;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === '') delay = 350;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className="caret" aria-live="polite">
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden>{text}</span>
    </span>
  );
}
