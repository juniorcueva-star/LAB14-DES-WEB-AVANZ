import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Background from '@/components/Background';
import { personalInfo } from '@/lib/data';

// Inter autoalojada desde npm (@fontsource-variable/inter) porque la red
// local bloquea fonts.gstatic.com y next/font/google no puede descargarla.
const inter = localFont({
  src: '../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  weight: '100 900',
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#eef1f5',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  keywords: [
    'desarrollador web',
    'full stack',
    'next.js',
    'react',
    'typescript',
    'portafolio',
    'tecsup',
    'perú',
  ],
  authors: [{ name: personalInfo.fullName, url: personalInfo.siteUrl }],
  creator: personalInfo.fullName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: personalInfo.siteUrl,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    siteName: personalInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.description,
    creator: '@tuusuario',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion',
  },
};

// Datos estructurados (JSON-LD) para que Google entienda quién es el autor.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalInfo.fullName,
  jobTitle: personalInfo.title,
  url: personalInfo.siteUrl,
  image: `${personalInfo.siteUrl}${personalInfo.avatar}`,
  email: `mailto:${personalInfo.email}`,
  sameAs: [personalInfo.github],
  alumniOf: { '@type': 'EducationalOrganization', name: personalInfo.school },
  address: { '@type': 'PostalAddress', addressLocality: 'Lima', addressCountry: 'PE' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-lg bg-white px-4 py-2 text-zinc-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-ink focus:text-white"
        >
          Saltar al contenido
        </a>
        <Background />
        <Header />
        <main id="contenido" className="grow pt-28">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
