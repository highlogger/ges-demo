// ============================================================
// GES SOLAR PRO — Blog Post Detail Page
// ============================================================
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
}

const posts: Record<string, BlogPost> = {
  '2026-ges-tesvikleri': {
    slug: '2026-ges-tesvikleri',
    title: '2026 GES Teşvikleri ve Yeni Destekleme Mekanizmaları',
    excerpt: 'YEKDEM kapsamında 2026 yılında geçerli olacak yeni teşvikler, başvuru süreçleri ve dikkat edilmesi gerekenler.',
    date: '12 Haz 2026',
    category: 'Mevzuat',
    readTime: '5 dk',
    content: [
      '2026 yılı, Türkiye güneş enerjisi sektörü için yeni fırsatlar ve güncellenmiş teşvik mekanizmalarıyla geliyor. YEKDEM (Yenilenebilir Enerji Kaynakları Destekleme Mekanizması) kapsamında yapılan son düzenlemeler, özellikle lisanssız üretim yapan yatırımcılar için önemli avantajlar sunuyor.',
      '2026 yılı itibarıyla YEKDEM kapsamında güneş enerjisi için belirlenen alım garantisi fiyatı, dolar bazlı endeksleme ile güncellendi. Lisanslı üretim tesisleri için kW başına 5,5-6,5 dolar/cent aralığında değişen alım fiyatları, yerli aksam desteği ile birlikte %30\'a varan ek prim sağlıyor.',
      'Lisanssız üretim tarafında ise mahsuplaşma sistemi genişletildi. Artık aynı dağıtım bölgesinde birden fazla tesisi olan aboneler, üretim fazlası enerjilerini diğer tesisleri için mahsuplaştırabiliyor. Bu düzenleme özellikle organize sanayi bölgelerinde faaliyet gösteren işletmeler için büyük avantaj sağlıyor.',
      'KOSGEB ve TÜBİTAK tarafından sağlanan Ar-Ge ve yatırım destekleri de yenilendi. TÜBİTAK 1501 Sanayi Ar-Ge Projeleri Destekleme Programı kapsamında, güneş enerjisi teknolojileri geliştiren firmalara %75\'e varan hibe desteği sunuluyor. KOSGEB ise KOBİ ölçeğindeki işletmelerin GES yatırımları için 500.000 TL\'ye kadar faizsiz kredi imkânı sağlıyor.',
      'Avrupa Birliği Sınırda Karbon Düzenleme Mekanizması (CBAM) kapsamında, ihracat yapan firmaların karbon ayak izini azaltması artık bir zorunluluk haline geliyor. GES yatırımı yapan firmalar, hem enerji maliyetlerini düşürüyor hem de CBAM uyumluluğu için gerekli karbon azaltım kredilerini elde ediyor. Bu durum, 2026\'da GES yatırımlarını daha da cazip hale getiriyor.',
    ],
  },
  'cati-ges-kritik-noktalar': {
    slug: 'cati-ges-kritik-noktalar',
    title: 'Çatı GES Kurulumunda Dikkat Edilmesi Gereken 10 Kritik Nokta',
    excerpt: 'Çatı güneş enerjisi kurulum öncesi statik analizden inverter seçimine kadar tüm kritik detaylar.',
    date: '5 Haz 2026',
    category: 'Teknik',
    readTime: '8 dk',
    content: [
      'Çatı GES kurulumu, doğru planlandığında yatırımın geri dönüş süresini önemli ölçüde kısaltabilir. Ancak gözden kaçan küçük detaylar, sistem verimliliğini ciddi şekilde etkileyebilir. İşte çatı GES kurulumunda dikkat edilmesi gereken 10 kritik nokta.',
      '1. Çatı Statik Analizi: Panel ve konstrüksiyon ağırlığının çatı tarafından taşınabilir olduğundan emin olunmalıdır. Ortalama bir GES sistemi, çatıya 15-20 kg/m² ek yük bindirir. 10 yıldan eski çatılarda mutlaka güçlendirme değerlendirmesi yapılmalıdır.',
      '2. Gölgeleme Analizi: Çatı çevresindeki binalar, bacalar, klima dış üniteleri ve hatta yakındaki ağaçlar bile panel verimliliğini etkileyebilir. Yıllık güneş hareketi simülasyonu ile gölgeleme haritası çıkarılmalıdır.',
      '3. Panel Yerleşim Optimizasyonu: Maksimum panel sayısı her zaman optimum çözüm değildir. Panel sıraları arasında yeterli mesafe bırakılmazsa, arka sıralar gölgede kalır ve üretim düşer. İdeal eğim açısı Türkiye için 30-35 derecedir.',
      '4. İnverter Seçimi: Sistem gücüne uygun inverter seçimi kritiktir. Düşük kapasiteli inverter verim kaybına, gereksiz yüksek kapasiteli inverter ise maliyet artışına neden olur. String inverter ve mikro inverter arasında çatı yapısına göre seçim yapılmalıdır.',
      '5. Kablolama ve Topraklama: DC kablo mesafeleri minimumda tutulmalı, uygun kesit seçilmeli ve tüm sistem topraklaması eksiksiz yapılmalıdır. Yıldırım riskine karşı paratoner koruması unutulmamalıdır.',
      '6. Çatı Su Yalıtımı: Konstrüksiyon montajı sırasında çatı membranına zarar verilmemesi, tüm bağlantı noktalarının su sızdırmaz şekilde yalıtılması gerekir. Montaj sonrası su kaçağı, hem üretim kaybına hem de yapısal hasara yol açabilir.',
      '7. Havalandırma: Panellerin arkasında yeterli hava sirkülasyonu sağlanmalıdır. Panel sıcaklığındaki her 1°C artış, verimlilikte %0,3-0,5 kayba neden olur. Çatı ile panel arasında en az 10 cm boşluk bırakılmalıdır.',
      '8. İzin ve Mevzuat: OSB, belediye ve TEDAŞ izin süreçleri önceden planlanmalıdır. Çift yönlü sayaç başvurusu ve mahsuplaşma sözleşmesi, kurulum tamamlanmadan başlatılmalıdır.',
      '9. İzleme Sistemi: Kurulum sonrası performans takibi için mutlaka uzaktan izleme sistemi kurulmalıdır. String bazlı izleme, panel arızalarının hızlı tespiti için idealdir.',
      '10. Bakım Planı: Panel temizliği, inverter kontrolleri ve bağlantı sıkma işlemleri için yıllık bakım takvimi oluşturulmalıdır. Düzenli bakım, sistem ömrünü %20\'ye kadar uzatabilir.',
    ],
  },
  'karbon-ayak-izi-sifirlama': {
    slug: 'karbon-ayak-izi-sifirlama',
    title: 'Güneş Enerjisi ile Fabrikanızın Karbon Ayak İzini Sıfırlayın',
    excerpt: 'Sürdürülebilir üretim ve AB Sınırda Karbon Düzenleme Mekanizması (CBAM) uyumluluğu için GES yatırımı.',
    date: '28 May 2026',
    category: 'Sürdürülebilirlik',
    readTime: '6 dk',
    content: [
      'Avrupa Birliği Sınırda Karbon Düzenleme Mekanizması (CBAM), 2026 yılı itibarıyla tam kapsamlı uygulamaya geçiyor. AB\'ye ihracat yapan Türk firmaları için karbon ayak izi raporlaması ve karbon kredisi satın alımı artık zorunlu. GES yatırımı, bu noktada hem maliyet avantajı hem de sürdürülebilirlik hedefleri için en etkili çözüm olarak öne çıkıyor.',
      'Ortalama bir üretim tesisinin yıllık karbon emisyonu, tükettiği elektriğin kaynağına bağlı olarak 500-5.000 ton CO₂ arasında değişmektedir. Türkiye\'de şebeke elektriğinin karbon yoğunluğu yaklaşık 0,48 kg CO₂/kWh seviyesindedir. 1 MW\'lık bir çatı GES sistemi, yılda yaklaşık 1.500 MWh temiz enerji üreterek 720 ton CO₂ emisyonunu engeller.',
      'CBAM kapsamında, 2026 yılında ton başına karbon fiyatının 80-100 Euro aralığında olması beklenmektedir. 1 MW\'lık bir GES yatırımı, yıllık karbon maliyetinde yaklaşık 57.000-72.000 Euro tasarruf sağlayabilir. Bu tasarruf, GES yatırımının geri dönüş süresini 1-2 yıl kısaltmaktadır.',
      'Karbon ayak izi sıfırlama stratejisi üç aşamalı olarak planlanmalıdır: 1) Enerji verimliliği ile tüketimi azaltmak, 2) GES ile temiz enerji üretmek, 3) Kalan emisyonlar için karbon denkleştirme projelerine yatırım yapmak. GES, bu üç aşamanın en yüksek etkiye sahip olanıdır.',
      'Birçok global marka, tedarik zincirinde karbon nötr hedefleri belirlemiş durumdadır. GES yatırımı yapan tedarikçiler, bu markaların tercihli tedarikçi listesine girme avantajı elde etmektedir. Sürdürülebilirlik raporlamasında Scope 2 emisyonlarının sıfırlanması, kurumsal itibar ve yeni iş fırsatları açısından önemli bir rekabet avantajı sağlar.',
    ],
  },
  'ges-finansman-modelleri': {
    slug: 'ges-finansman-modelleri',
    title: 'GES Yatırımında Finansman Modelleri: Kredi mi, Leasing mi?',
    excerpt: 'GES yatırımı için banka kredisi, finansal kiralama, YEKDEM ve KOSGEB desteklerinin karşılaştırması.',
    date: '20 May 2026',
    category: 'Finans',
    readTime: '7 dk',
    content: [
      'GES yatırımı yapmak isteyen işletmelerin en çok sorduğu soru: "Bu yatırımı nasıl finanse edeceğiz?" 2026 yılı itibarıyla Türkiye\'de GES projeleri için dört ana finansman modeli bulunuyor: banka kredisi, finansal kiralama (leasing), öz kaynak ve teşvik destekli hibrit modeller.',
      'Banka kredisi modelinde, Yatırım Teşvik Belgesi almış GES projeleri için uygun faizli yatırım kredileri kullanılabilmektedir. 2026 yılında GES projeleri için yatırım kredisi faiz oranları %18-24 aralığında seyretmektedir. 5 yıl vadeli, 1 yıl ödemesiz dönem seçenekleri yaygındır. Avantajı: sistem mülkiyeti tamamen yatırımcıya aittir. Dezavantajı: yüksek teminat gereksinimi ve kredi notu bağımlılığıdır.',
      'Finansal kiralama (leasing) modeli, özellikle KOBİ\'ler için avantajlı bir alternatiftir. Leasing şirketi sistemi satın alır ve yatırımcıya kiralar. Sözleşme sonunda sistem mülkiyeti sembolik bir bedelle yatırımcıya geçer. Avantajları: düşük peşinat (%10-20), KDV avantajı, teminat kolaylığı. Dezavantajı: toplam maliyet banka kredisine göre %3-5 daha yüksek olabilir.',
      'Öz kaynak ile finansman, en düşük toplam maliyeti sunar ancak işletme sermayesini bağlar. Öz kaynakla yapılan 1 MW\'lık bir GES yatırımının geri dönüş süresi, YEKDEM desteği ile 3-4 yıl arasındadır. Ancak işletme sermayesi yönetimi açısından, tamamen öz kaynak kullanımı her zaman optimal değildir.',
      'Hibrit finansman modeli, genellikle en verimli çözümdür. Örneğin: %30 öz kaynak + %40 banka kredisi + %30 KOSGEB/TÜBİTAK hibesi şeklinde bir yapılandırma ile hem nakit akışı korunur hem de finansman maliyeti optimize edilir. YEKDEM alım garantisi ise kredi geri ödemesi için bankalar nezdinde güçlü bir nakit akışı teminatı oluşturur.',
      'Hangi modelin seçileceği; yatırımcının bilanço yapısına, kredi notuna, proje büyüklüğüne ve nakit akışı beklentilerine göre değişir. SolarTech olarak, ücretsiz finansman danışmanlığı ile size en uygun modeli belirlemenize yardımcı oluyoruz.',
    ],
  },
  'panel-teknolojileri-n-type-p-type': {
    slug: 'panel-teknolojileri-n-type-p-type',
    title: 'Panel Teknolojilerinde Son Gelişmeler: N-Type vs P-Type',
    excerpt: 'N-Type TOPCon ve HJT teknolojilerinin P-Type PERC panellere göre avantajları.',
    date: '15 May 2026',
    category: 'Teknik',
    readTime: '10 dk',
    content: [
      'Güneş paneli teknolojisinde son beş yılın en büyük dönüşümü, P-Type PERC panellerden N-Type TOPCon ve HJT (Heterojunction) teknolojilerine geçiştir. 2026 yılı itibarıyla N-Type paneller, küresel üretim kapasitesinin %50\'sini aşmış durumdadır.',
      'P-Type (Positive Type) paneller, bor katkılı silikon hücreler kullanır. PERC (Passivated Emitter and Rear Cell) teknolojisi ile %21-22 seviyesinde verimlilik sunar. Avantajı düşük üretim maliyetidir. Dezavantajı ise LID (Light Induced Degradation — Işık Kaynaklı Bozulma) nedeniyle ilk yıl %2-3 performans kaybı yaşamasıdır.',
      'N-Type (Negative Type) paneller, fosfor katkılı silikon hücreler kullanır. Bor-oksijen kompleksi oluşmadığı için LID etkisi görülmez. TOPCon (Tunnel Oxide Passivated Contact) teknolojisi ile %22-23, HJT teknolojisi ile %23-24 verimlilik seviyelerine ulaşılır. N-Type panellerin sıcaklık katsayısı daha düşüktür, yani sıcak havalarda daha az performans kaybeder.',
      'Performans karşılaştırması: 1 MW\'lık bir sistemde, N-Type TOPCon paneller P-Type PERC panellere göre yılda yaklaşık %3-5 daha fazla enerji üretir. Bu fark, 25 yıllık sistem ömründe toplam üretimin %5-8 daha yüksek olması anlamına gelir. Sıcak iklim bölgelerinde (Güneydoğu Anadolu, Akdeniz) bu fark %8-10\'a kadar çıkabilir.',
      'Maliyet analizi: 2026 yılında N-Type paneller, P-Type panellere göre watt başına yaklaşık %10-15 daha pahalıdır. Ancak daha yüksek verimlilik ve daha düşük bozulma oranı sayesinde, sistem seviyesinde maliyet farkı %5-8\'e düşmektedir. Aynı alana daha fazla güç sığdırma avantajı, özellikle çatı uygulamalarında N-Type panelleri daha ekonomik hale getirir.',
      'SolarTech olarak tüm yeni kurulumlarımızda N-Type TOPCon panel teknolojisini standart olarak kullanıyoruz. Bu sayede müşterilerimize daha yüksek üretim, daha uzun ömür ve daha hızlı yatırım geri dönüşü sağlıyoruz.',
    ],
  },
  'epdk-lisans-sureci-2026': {
    slug: 'epdk-lisans-sureci-2026',
    title: 'EPDK Lisans Süreci: Adım Adım Rehber 2026',
    excerpt: 'EPDK ön lisans ve lisans başvuru süreci, gerekli belgeler, sık yapılan hatalar ve çözüm önerileri.',
    date: '10 May 2026',
    category: 'Mevzuat',
    readTime: '12 dk',
    content: [
      'EPDK (Enerji Piyasası Düzenleme Kurumu) lisans süreci, özellikle büyük ölçekli GES projeleri için en kritik aşamalardan biridir. 2026 yılında yürürlüğe giren yeni düzenlemelerle birlikte süreç bazı noktalarda hızlanmış, bazı noktalarda ise ek belge gereksinimleri getirilmiştir.',
      'Adım 1 — Ön Fizibilite ve Arazi Tespiti: Lisans başvurusu öncesinde, proje sahasının güneşlenme potansiyeli, arazi kullanım durumu, imar planı ve trafo merkezine uzaklık gibi kriterler değerlendirilmelidir. Arazi mülkiyeti netleştirilmeli, tapu kaydı ve imar durumu belgeleri hazırlanmalıdır.',
      'Adım 2 — TEDAŞ Bağlantı Görüşü: Proje sahasının bağlı olduğu dağıtım veya iletim şirketine bağlantı başvurusu yapılır. TEDAŞ/TEİAŞ, bağlantı kapasitesi ve bağlantı noktasına ilişkin görüşünü 45 gün içinde bildirir. Olumlu bağlantı görüşü, EPDK başvurusu için ön koşuldur.',
      'Adım 3 — EPDK Ön Lisans Başvurusu: EPDK\'ya sunulması gereken belgeler: başvuru dilekçesi, şirket kuruluş belgeleri, TEDAŞ bağlantı görüşü, arazi kullanım belgesi, ÇED başvuru dosyası, ön fizibilite raporu ve ön lisans teminat mektubu. 2026 itibarıyla ön lisans teminatı, proje büyüklüğüne bağlı olarak MW başına 25.000-35.000 TL arasındadır.',
      'Adım 4 — Ön Lisans Dönemi: Ön lisans alındıktan sonra 24 ay içinde lisans alma yükümlülüğü tamamlanmalıdır. Bu dönemde ÇED süreci, imar planı değişikliği, arazi mülkiyetinin kesinleşmesi, inşaat ruhsatı ve teknik proje onayı gibi işlemler tamamlanır.',
      'Adım 5 — Lisans Başvurusu ve Kabul: Tüm ön lisans yükümlülükleri tamamlandıktan sonra EPDK\'ya lisans başvurusu yapılır. Lisans üretim belgesi ile birlikte inşaat aşamasına geçilir. İnşaat tamamlandıktan sonra TEDAŞ geçici kabulü yapılır ve sistem şebekeye bağlanır.',
      'Sık Yapılan Hatalar: 1) Eksik veya hatalı harita ve koordinat bilgileri, 2) Arazi mülkiyet sorunlarının geç fark edilmesi, 3) ÇED sürecinin hafife alınması ve süre uzaması, 4) Bağlantı görüşü başvurusunun geciktirilmesi, 5) Teminat mektubu süresinin takip edilmemesi.',
      'SolarTech olarak, EPDK lisans sürecinin tamamını müşterilerimiz adına yönetiyoruz. 2015\'ten bu yana 50\'den fazla başarılı lisans başvurusu ile sektördeki en deneyimli ekiplerden biriyiz.',
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Yazı Bulunamadı' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-20 pt-28 lg:py-28 lg:pt-36">
        <div className="relative mx-auto max-w-3xl px-6 lg:px-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-solar-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Blog&apos;a Dön
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <span className="rounded-full bg-solar-500/10 px-3 py-1 text-xs font-medium text-solar-400 backdrop-blur-sm">
              {post.category}
            </span>
            <span className="text-xs text-neutral-400">{post.readTime} okuma</span>
            <span className="text-xs text-neutral-400">•</span>
            <span className="text-xs text-neutral-400">{post.date}</span>
          </div>
          <h1 className="mt-4 font-[var(--font-display)] text-3xl font-bold leading-tight text-white lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300/80">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24 bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="mb-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 lg:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share / CTA */}
          <div className="mt-16 rounded-2xl border border-solar-200 bg-solar-50 p-8 text-center dark:border-solar-900 dark:bg-solar-950/30">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-0">
              GES projeniz için ücretsiz danışmanlık alın
            </h3>
            <p className="mt-2 text-neutral-500 dark:text-neutral-400">
              Uzman ekibimiz, tesisinizin güneş enerjisi potansiyelini ücretsiz analiz etsin.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/iletisim" variant="solar" size="md">
                Ücretsiz Keşif Randevusu
              </Button>
              <Button href="/blog" variant="outline" size="md">
                Diğer Yazılar
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
