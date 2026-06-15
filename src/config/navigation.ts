// ============================================================
// GES SOLAR PRO — Navigation Configuration
// ============================================================
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  {
    label: 'Hizmetler',
    href: '/hizmetler',
    children: [
      { label: 'Arazi GES Kurulumu', href: '/hizmetler/arazi-ges' },
      { label: 'Çatı GES Kurulumu', href: '/hizmetler/cati-ges' },
      { label: 'Enerji Danışmanlığı', href: '/hizmetler/enerji-danismanligi' },
      { label: 'Bakım & İzleme', href: '/hizmetler/bakim-izleme' },
    ],
  },
  { label: 'Projeler', href: '/projeler' },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
];

export const footerNav = {
  hizmetler: [
    { label: 'Arazi GES Kurulumu', href: '/hizmetler/arazi-ges' },
    { label: 'Çatı GES Kurulumu', href: '/hizmetler/cati-ges' },
    { label: 'Enerji Danışmanlığı', href: '/hizmetler/enerji-danismanligi' },
    { label: 'Bakım & İzleme', href: '/hizmetler/bakim-izleme' },
    { label: 'Enerji Hesaplayıcı', href: '/enerji-hesaplayici' },
  ],
  kurumsal: [
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Projeler', href: '/projeler' },
    { label: 'Referanslar', href: '/referanslar' },
    { label: 'Blog', href: '/blog' },
    { label: 'İletişim', href: '/iletisim' },
  ],
  yasal: [
    { label: 'KVKK Aydınlatma Metni', href: '/kvkk/aydinlatma-metni' },
    { label: 'Çerez Politikası', href: '/kvkk/cerez-politikasi' },
    { label: 'Veri Sorumlusu', href: '/kvkk/veri-sorumlusu' },
    { label: 'Gizlilik Politikası', href: '/kvkk/gizlilik-politikasi' },
  ],
};
