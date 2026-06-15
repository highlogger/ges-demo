// ============================================================
// GES SOLAR PRO — Blog Page
// ============================================================
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Güneş enerjisi sektöründen haberler, teknik ipuçları ve mevzuat güncellemeleri.',
};

const posts = [
  { title: '2026 GES Teşvikleri ve Yeni Destekleme Mekanizmaları', excerpt: 'YEKDEM kapsamında 2026 yılında geçerli olacak yeni teşvikler, başvuru süreçleri ve dikkat edilmesi gerekenler.', date: '12 Haz 2026', category: 'Mevzuat', readTime: '5 dk', slug: '2026-ges-tesvikleri' },
  { title: 'Çatı GES Kurulumunda Dikkat Edilmesi Gereken 10 Kritik Nokta', excerpt: 'Çatı güneş enerjisi kurulum öncesi statik analizden inverter seçimine kadar tüm kritik detaylar.', date: '5 Haz 2026', category: 'Teknik', readTime: '8 dk', slug: 'cati-ges-kritik-noktalar' },
  { title: 'Güneş Enerjisi ile Fabrikanızın Karbon Ayak İzini Sıfırlayın', excerpt: 'Sürdürülebilir üretim ve AB Sınırda Karbon Düzenleme Mekanizması (CBAM) uyumluluğu için GES yatırımı.', date: '28 May 2026', category: 'Sürdürülebilirlik', readTime: '6 dk', slug: 'karbon-ayak-izi-sifirlama' },
  { title: 'GES Yatırımında Finansman Modelleri: Kredi mi, Leasing mi?', excerpt: 'GES yatırımı için banka kredisi, finansal kiralama, YEKDEM ve KOSGEB desteklerinin karşılaştırması.', date: '20 May 2026', category: 'Finans', readTime: '7 dk', slug: 'ges-finansman-modelleri' },
  { title: 'Panel Teknolojilerinde Son Gelişmeler: N-Type vs P-Type', excerpt: 'N-Type TOPCon ve HJT teknolojilerinin P-Type PERC panellere göre avantajları.', date: '15 May 2026', category: 'Teknik', readTime: '10 dk', slug: 'panel-teknolojileri-n-type-p-type' },
  { title: 'EPDK Lisans Süreci: Adım Adım Rehber 2026', excerpt: 'EPDK ön lisans ve lisans başvuru süreci, gerekli belgeler, sık yapılan hatalar ve çözüm önerileri.', date: '10 May 2026', category: 'Mevzuat', readTime: '12 dk', slug: 'epdk-lisans-sureci-2026' },
];

const categories = ['Tümü', 'Mevzuat', 'Teknik', 'Sürdürülebilirlik', 'Finans'];

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">Bilgi Merkezi</span>
            <h1 className="mt-4 font-[var(--font-display)] text-5xl font-bold leading-tight text-white lg:text-7xl">Blog</h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-300/80">Güneş enerjisi sektöründeki son gelişmeler, teknik ipuçları ve mevzuat güncellemeleri.</p>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((c) => (
              <button key={c} className="rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-600 transition-all hover:border-solar-300 hover:text-solar-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-solar-600 dark:hover:text-solar-400">{c}</button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-solar-500/10 px-3 py-1 font-medium text-solar-700 dark:text-solar-400">{post.category}</span>
                  <span className="text-neutral-400 dark:text-neutral-500">{post.readTime} okuma</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-neutral-0 dark:group-hover:text-solar-400">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                  {post.date}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
