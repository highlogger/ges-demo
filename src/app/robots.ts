// ============================================================
// GES SOLAR PRO — robots.txt
// ============================================================
import type { MetadataRoute } from 'next';
import { defaultSiteConfig } from '@/config/site.config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${defaultSiteConfig.url}/sitemap.xml`,
  };
}
