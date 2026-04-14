import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FCE7F3',
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://simplyperfecthn.com'),
  title: 'Simply Perfect Honduras | Creaciones Personalizadas & Eventos',
  description:
    'Creaciones personalizadas, ropa estampada, regalos únicos y organización de eventos en Honduras. Más de 150 clientes felices. Fundada por Elisa López en 2020.',
  keywords:
    'regalos personalizados Honduras, eventos Honduras, ropa personalizada Honduras, decoración eventos Honduras, souvenirs Honduras, tazas personalizadas Honduras',
  authors: [{ name: 'Elisa López' }],
  openGraph: {
    title: 'Simply Perfect Honduras | Creaciones Personalizadas & Eventos',
    description:
      'Creaciones personalizadas, ropa estampada, regalos únicos y organización de eventos en Honduras.',
    url: 'https://simplyperfecthn.com',
    locale: 'es_HN',
    type: 'website',
    siteName: 'Simply Perfect Honduras',
  },
  other: {
    'geo.region': 'HN',
    'geo.placename': 'Honduras',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://simplyperfecthn.com/#business',
      name: 'Simply Perfect Honduras',
      description:
        'Creaciones personalizadas, ropa estampada, regalos únicos y organización de eventos en Honduras.',
      url: 'https://simplyperfecthn.com',
      email: 'Simplyperfect.lce@gmail.com',
      foundingDate: '2020',
      areaServed: { '@type': 'Country', name: 'Honduras' },
      founder: { '@type': 'Person', name: 'Elisa López' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios Simply Perfect',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tazas Personalizadas' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ropa Personalizada' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Regalos Únicos' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Organización de Eventos' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño de Decoración' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Souvenirs y Detalles' } },
        ],
      },
      sameAs: [
        'https://www.instagram.com/simplyperf_lce/',
        'https://www.facebook.com/share/1DMj7je36M/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://simplyperfecthn.com/#website',
      url: 'https://simplyperfecthn.com',
      name: 'Simply Perfect Honduras',
      inLanguage: 'es-HN',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Simply Perfect" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
