// ============================================================
// GES SOLAR PRO — Sitemap
// ============================================================
import type { MetadataRoute } from 'next';
import { defaultSiteConfig } from '@/config/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = defaultSiteConfig.url;

  const staticRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/hakkimizda', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/hizmetler', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/projeler', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/referanslar', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
    { url: '/iletisim', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/enerji-hesaplayici', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
