import { ImageResponse } from 'next/og';
import { personalInfo } from '@/lib/data';

// Imagen Open Graph generada con código (se muestra al compartir el link en redes).
export const alt = `${personalInfo.name} - ${personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  const domain = personalInfo.siteUrl.replace(/^https?:\/\//, '');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#eef1f5',
          backgroundImage:
            'radial-gradient(circle at 80% 10%, rgba(56,189,248,0.35), transparent 45%), linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          color: '#0f172a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 14,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              fontWeight: 800,
              background: '#0f172a',
            }}
          >
            JC
          </div>
          <div style={{ fontSize: 30, color: '#475569' }}>{domain}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>{personalInfo.name}</div>
          <div
            style={{
              fontSize: 48,
              marginTop: 20,
              color: '#0284c7',
            }}
          >
            {personalInfo.title}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, fontSize: 26, color: '#0f172a' }}>
          {['Spring Boot', 'React', 'Next.js', 'Flutter'].map((t) => (
            <div
              key={t}
              style={{
                padding: '10px 24px',
                borderRadius: 8,
                border: '1px solid #cbd2dc',
                background: 'rgba(255,255,255,0.8)',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
