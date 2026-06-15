// ============================================================
// GES SOLAR PRO — Root Layout
// Next.js 16 App Router — Server Component
// ============================================================
import type { Metadata, Viewport } from 'next';
import { defaultSiteConfig } from '@/config/site.config';
import { Providers } from '@/components/layout/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CookieBanner } from '@/components/shared/cookie-banner';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${defaultSiteConfig.name} — ${defaultSiteConfig.tagline}`,
    template: `%s | ${defaultSiteConfig.shortName}`,
  },
  description: defaultSiteConfig.description,
  keywords: [
    'GES', 'güneş enerjisi', 'solar enerji', 'güneş paneli',
    'yenilenebilir enerji', 'enerji santrali', 'çatı GES',
    'arazi GES', 'solar power', 'anahtar teslim GES',
    defaultSiteConfig.name,
  ],
  authors: [{ name: defaultSiteConfig.name }],
  creator: defaultSiteConfig.name,
  publisher: defaultSiteConfig.name,
  metadataBase: new URL(defaultSiteConfig.url),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: defaultSiteConfig.url,
    siteName: defaultSiteConfig.name,
    title: `${defaultSiteConfig.name} — ${defaultSiteConfig.tagline}`,
    description: defaultSiteConfig.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: defaultSiteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultSiteConfig.name,
    description: defaultSiteConfig.description,
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning className="h-full">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        {/* Fontshare — Clash Display + Satoshi */}
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700,800&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
        {/* Google Fonts — JetBrains Mono */}
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-[var(--font-body)]">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
