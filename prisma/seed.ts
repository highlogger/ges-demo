// ============================================================
// GES SOLAR PRO — Database Seed (Prisma v7)
// ============================================================
import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 5,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // --- Admin User ---
  const passwordHash = await bcrypt.hash(
    process.env.ADMIN_PASSWORD || 'Admin123!2026',
    12,
  );

  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@solartechenerji.com' },
    update: {},
    create: {
      name: 'Site Admin',
      email: process.env.ADMIN_EMAIL || 'admin@solartechenerji.com',
      passwordHash,
      role: 'admin',
    },
  });
  console.log('✅ Admin user created');

  // --- Site Config ---
  await prisma.siteConfig.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      name: 'SolarTech Enerji',
      shortName: 'SolarTech',
      tagline: 'Enerjinizi Güneşten Alın, Geleceğe Yatırım Yapın',
      description:
        'Türkiye\'nin önde gelen güneş enerjisi santrali kurulum ve danışmanlık firması.',
      email: 'info@solartechenerji.com',
      phone: '+902125550000',
      phoneDisplay: '0212 555 00 00',
      installedCapacity: '150 MW',
      totalProjects: 247,
      carbonReduction: '250.000 ton',
      yearsExperience: 10,
      happyCustomers: 180,
    },
  });
  console.log('✅ Site config seeded');

  // --- Services ---
  const services = [
    {
      slug: 'arazi-ges',
      title: 'Arazi GES Kurulumu',
      subtitle: 'Büyük Ölçekli Güneş Enerjisi Santralleri',
      description: '1 MW\'tan 100 MW\'a kadar arazi tipi güneş enerjisi santrallerinin anahtar teslim kurulumu.',
      capacity: '1 MW — 100 MW+',
      features: ['Fizibilite ve güneşlenme analizi', 'EPDK lisans süreçleri', 'Mühendislik ve sistem tasarımı', 'İnşaat ve montaj', 'Devreye alma ve testler', '5 yıl işletme garantisi'],
      icon: '🏭',
      sortOrder: 1,
    },
    {
      slug: 'cati-ges',
      title: 'Çatı GES Kurulumu',
      subtitle: 'Endüstriyel & Ticari Çatı Sistemleri',
      description: 'Fabrika, depo, AVM, otel ve konut çatıları için güneş enerjisi çözümleri.',
      capacity: '50 kW — 5 MW',
      features: ['Çatı statik analizi', 'Maksimum panel yerleşimi', 'Gölgeleme optimizasyonu', 'Elektrik altyapı entegrasyonu', 'Uzaktan izleme', 'Mahsuplaşma başvurusu'],
      icon: '🏢',
      sortOrder: 2,
    },
    {
      slug: 'enerji-danismanligi',
      title: 'Enerji Danışmanlığı',
      subtitle: 'Fizibilite & Yatırım Analizi',
      description: 'Güneş enerjisi yatırımı öncesi detaylı fizibilite ve geri dönüş analizi.',
      capacity: 'Ücretsiz Keşif',
      features: ['Ücretsiz saha keşfi', 'Güneşlenme potansiyeli analizi', 'Fizibilite raporu', 'Yatırım geri dönüş hesabı', 'Teşvik danışmanlığı', 'Finansman model önerisi'],
      icon: '📊',
      sortOrder: 3,
    },
    {
      slug: 'bakim-izleme',
      title: 'Bakım & İzleme',
      subtitle: '7/24 Performans Takibi',
      description: 'Kurulu GES sistemlerinizin maksimum verimlilikte çalışması için bakım ve izleme.',
      capacity: '7/24 İzleme',
      features: ['7/24 uzaktan izleme', 'Periyodik bakım', 'Panel temizliği', 'Termal kamera hot-spot', 'Aylık performans raporu', '48 saat arıza müdahale'],
      icon: '🛡️',
      sortOrder: 4,
    },
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
  }
  console.log('✅ Services seeded');

  // --- Projects ---
  const projects = [
    { title: 'Konya Karatay GES', slug: 'konya-karatay-ges', description: '25 MW arazi tipi güneş enerjisi santrali.', capacity: '25 MW', location: 'Konya, Türkiye', area: '350.000 m²', year: '2024', category: 'Arazi GES', featured: true },
    { title: 'İzmir OSB Çatı GES', slug: 'izmir-osb-cati-ges', description: '4.2 MW çatı tipi endüstriyel GES.', capacity: '4.2 MW', location: 'İzmir, Türkiye', area: '45.000 m²', year: '2024', category: 'Çatı GES', featured: true },
    { title: 'Ankara Lojistik Merkezi', slug: 'ankara-lojistik-ges', description: '8 MW arazi GES projesi.', capacity: '8 MW', location: 'Ankara, Türkiye', area: '120.000 m²', year: '2023', category: 'Arazi GES', featured: true },
    { title: 'Bursa Tekstil Fabrikası', slug: 'bursa-tekstil-ges', description: '3.5 MW çatı GES.', capacity: '3.5 MW', location: 'Bursa, Türkiye', area: '38.000 m²', year: '2023', category: 'Çatı GES', featured: false },
    { title: 'Antalya Sera GES', slug: 'antalya-sera-ges', description: '12 MW sera entegre GES.', capacity: '12 MW', location: 'Antalya, Türkiye', area: '180.000 m²', year: '2024', category: 'Arazi GES', featured: false },
  ];

  for (const p of projects) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: p,
      create: p,
    });
  }
  console.log('✅ Projects seeded');

  // --- Blog Posts ---
  const posts = [
    { title: '2026 GES Teşvikleri ve Yeni Destekleme Mekanizmaları', slug: '2026-ges-tesvikleri', excerpt: 'YEKDEM kapsamında 2026 yılında geçerli olacak yeni teşvikler.', content: '<p>Detaylı içerik buraya gelecek...</p>', category: 'Mevzuat', readTime: '5 dk', published: true },
    { title: 'Çatı GES Kurulumunda 10 Kritik Nokta', slug: 'cati-ges-kritik-noktalar', excerpt: 'Çatı güneş enerjisi kurulum öncesi tüm kritik detaylar.', content: '<p>Detaylı içerik buraya gelecek...</p>', category: 'Teknik', readTime: '8 dk', published: true },
    { title: 'Karbon Ayak İzini Sıfırlayın', slug: 'karbon-ayak-izi-sifirlama', excerpt: 'Sürdürülebilir üretim ve CBAM uyumluluğu için GES yatırımı.', content: '<p>Detaylı içerik buraya gelecek...</p>', category: 'Sürdürülebilirlik', readTime: '6 dk', published: true },
  ];

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: { ...post, publishedAt: new Date() },
    });
  }
  console.log('✅ Blog posts seeded');

  // --- References ---
  const refs = [
    { quote: 'SolarTech ile çalışmak bir dönüm noktasıydı. Enerji maliyetlerimiz %60 azaldı.', author: 'Ahmet Yılmaz', role: 'Genel Müdür', company: 'Ege Tekstil A.Ş.', capacity: '4.2 MW Çatı GES' },
    { quote: 'Profesyonel ekip, zamanında teslim. 25 MW\'lık projemizi 2 ay önce devreye aldılar.', author: 'Mehmet Kaya', role: 'Yönetim Kurulu Başkanı', company: 'Anadolu Enerji Yatırımları', capacity: '25 MW Arazi GES' },
    { quote: 'Doğru sistem boyutlandırması ile gereksiz yatırımdan kaçındık.', author: 'Ayşe Demir', role: 'Fabrika Müdürü', company: 'Marmara Otomotiv', capacity: '2.8 MW Çatı GES' },
    { quote: 'EPDK süreçlerindeki deneyimleri paha biçilmez.', author: 'Zeynep Aksoy', role: 'Proje Müdürü', company: 'İstanbul Kimya', capacity: '1.5 MW Çatı GES' },
    { quote: 'Bakım hizmetleri sayesinde panel verimliliğimiz sürekli maksimumda.', author: 'Can Özkan', role: 'Teknik Direktör', company: 'Akdeniz Tarım', capacity: '8 MW Arazi GES' },
    { quote: 'Tam ihtiyacımız kadar sistemi önerdiler. Dürüstlükleri için minnettarız.', author: 'Burak Şahin', role: 'Sahip', company: 'Karadeniz Lojistik', capacity: '500 kW Çatı GES' },
  ];

  for (const r of refs) {
    await prisma.reference.create({ data: r });
  }
  console.log('✅ References seeded');

  // --- Clients ---
  const clients = [
    'Ege Tekstil A.Ş.', 'Anadolu Enerji Yatırımları', 'Marmara Otomotiv',
    'Akdeniz Tarım', 'İstanbul Kimya', 'Karadeniz Lojistik',
    'İç Anadolu Çimento', 'Ege Seramik', 'Marmara Depoculuk',
  ];
  for (const name of clients) {
    await prisma.client.create({ data: { name } });
  }
  console.log('✅ Clients seeded');

  console.log('🎉 Seed complete!');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
