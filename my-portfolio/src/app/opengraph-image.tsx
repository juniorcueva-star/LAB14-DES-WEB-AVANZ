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
          background: '#05060b',
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(139,92,246,0.55), transparent 45%), radial-gradient(circle at 85% 80%, rgba(34,211,238,0.4), transparent 45%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
            }}
          >
            JC
          </div>
          <div style={{ fontSize: 30, color: '#a1a1aa' }}>{domain}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>{personalInfo.name}</div>
          <div
            style={{
              fontSize: 48,
              marginTop: 20,
              backgroundImage: 'linear-gradient(90deg, #c4b5fd, #67e8f9)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {personalInfo.title}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, fontSize: 26, color: '#d4d4d8' }}>
          {['Spring Boot', 'React', 'Next.js', 'Flutter'].map((t) => (
            <div
              key={t}
              style={{
                padding: '10px 24px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.06)',
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
