// ============================================================
// GES SOLAR PRO — White-Label Site Configuration
// ============================================================
// Bu dosya 100 farklı GES firması için özelleştirilebilir.
// Her firma için bu değerleri değiştir, gerisi otomatik.
// CMS entegrasyonu ile bu değerler API'den de gelebilir.
// ============================================================

export type SiteLocale = 'tr' | 'en' | 'ar';

export interface SiteConfig {
  // --- Temel Bilgiler ---
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  foundedYear: number;

  // --- İletişim ---
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    address: {
      tr: string;
      en: string;
    };
    googleMaps: string;
    whatsapp: string;
  };

  // --- Sosyal Medya ---
  social: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    facebook?: string;
  };

  // --- Lokasyon ---
  locale: SiteLocale;
  locales: SiteLocale[];
  timezone: string;

  // --- Özellikler ---
  features: {
    enableEnergyCalculator: boolean;
    enableBlog: boolean;
    enableDarkMode: boolean;
    enableMultiLanguage: boolean;
    enable3DScene: boolean;
    enableLiveChat: boolean;
  };

  // --- İstatistikler (Ana Sayfa) ---
  stats: {
    installedCapacity: string; // "150 MW"
    totalProjects: number;
    carbonReduction: string; // "250.000 ton"
    yearsExperience: number;
    happyCustomers: number;
  };
}

// ============================================================
// VARSAYILAN KONFİGÜRASYON
// Her firma için bu objeyi override et.
// ============================================================

export const defaultSiteConfig: SiteConfig = {
  name: 'SolarTech Enerji',
  shortName: 'SolarTech',
  tagline: 'Enerjinizi Güneşten Alın, Geleceğe Yatırım Yapın',
  description:
    'Türkiye\'nin önde gelen güneş enerjisi santrali kurulum ve danışmanlık firması. Anahtar teslim GES projeleri, enerji danışmanlığı ve sürdürülebilir enerji çözümleri.',
  url: 'https://solartechenerji.com',
  foundedYear: 2015,

  contact: {
    email: 'info@solartechenerji.com',
    phone: '+90 212 555 00 00',
    phoneDisplay: '0212 555 00 00',
    address: {
      tr: 'Maslak Mah. Eski Büyükdere Cad. No: 25, Plaza Kat: 12, Sarıyer / İstanbul',
      en: 'Maslak Mah. Eski Büyükdere Cad. No: 25, Floor 12, Sarıyer / Istanbul, Turkey',
    },
    googleMaps: 'https://maps.google.com/?q=Maslak+Sarıyer+İstanbul',
    whatsapp: 'https://wa.me/902125550000',
  },

  social: {
    linkedin: 'https://linkedin.com/company/solartechenerji',
    instagram: 'https://instagram.com/solartechenerji',
    twitter: 'https://twitter.com/solartechenerji',
    youtube: 'https://youtube.com/@solartechenerji',
  },

  locale: 'tr',
  locales: ['tr', 'en'],
  timezone: 'Europe/Istanbul',

  features: {
    enableEnergyCalculator: true,
    enableBlog: true,
    enableDarkMode: true,
    enableMultiLanguage: true,
    enable3DScene: true,
    enableLiveChat: true,
  },

  stats: {
    installedCapacity: '150 MW',
    totalProjects: 247,
    carbonReduction: '250.000 ton',
    yearsExperience: 10,
    happyCustomers: 180,
  },
};

// ============================================================
// CMS ENTEGRASYONU İÇİN:
// Bu konfigürasyonu Strapi / Payload CMS / Contentful'dan
// çekmek için aşağıdaki fetch fonksiyonunu kullan.
// ============================================================

export async function getSiteConfig(): Promise<SiteConfig> {
  // CMS'ten çek: const res = await fetch(`${cmsUrl}/api/globals/site-config`);
  // return res.json();
  return defaultSiteConfig;
}
