// ============================================================
// GES SOLAR PRO — Shared Services Data
// Used by both the listing page and detail pages
// ============================================================

export interface ServiceListing {
  slug: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  capacity: string;
  techSpecs: { label: string; value: string }[];
}

export const services: ServiceListing[] = [
  {
    slug: 'arazi-ges',
    icon: '🏭',
    title: 'Arazi GES Kurulumu',
    subtitle: 'Büyük Ölçekli Güneş Enerjisi Santralleri',
    description:
      '1 MW\'tan 100 MW\'a kadar arazi tipi güneş enerjisi santrallerinin anahtar teslim kurulumu. Fizibilite etüdünden EPDK lisanslamasına, mühendislik tasarımından inşaat ve devreye almaya kadar tüm süreçleri uzman ekibimizle yönetiyoruz.',
    features: [
      'Fizibilite ve güneşlenme analizi',
      'EPDK lisans ve başvuru süreçleri',
      'Arazi etüdü ve zemin etüdü',
      'Elektrik mühendisliği ve sistem tasarımı',
      'İnşaat ve montaj',
      'İletim hattı ve trafo merkezi',
      'Devreye alma ve kabul testleri',
      '5 yıl işletme garantisi',
    ],
    capacity: '1 MW — 100 MW+',
    techSpecs: [
      { label: 'Panel Tipi', value: 'Monokristalin N-Type TOPCon' },
      { label: 'Panel Verimliliği', value: '%22,5' },
      { label: 'İnverter', value: 'Huawei / Sungrow' },
      { label: 'Konstrüksiyon', value: 'Galvanizli Çelik / Alüminyum' },
      { label: 'Bağlantı Tipi', value: 'OG / YG Trafo Merkezli' },
      { label: 'Garanti', value: '5 Yıl İşletme + 25 Yıl Panel' },
    ],
  },
  {
    slug: 'cati-ges',
    icon: '🏢',
    title: 'Çatı GES Kurulumu',
    subtitle: 'Endüstriyel & Ticari Çatı Sistemleri',
    description:
      'Fabrika, depo, AVM, otel ve toplu konut çatıları için özel olarak tasarlanmış güneş enerjisi sistemleri. Çatı statik analizi, maksimum panel yerleşimi ve en yüksek verimlilik için optimize edilmiş çözümler sunuyoruz.',
    features: [
      'Çatı statik analizi ve güçlendirme',
      'Maksimum panel yerleşim planı',
      'Gölgeleme analizi ve optimizasyon',
      'İnverter ve ekipman seçimi',
      'Elektrik altyapı entegrasyonu',
      'Uzaktan izleme sistemi kurulumu',
      'OSB ve belediye izin süreçleri',
      'Mahsuplaşma başvurusu (çift yönlü sayaç)',
    ],
    capacity: '50 kW — 5 MW',
    techSpecs: [
      { label: 'Panel Tipi', value: 'Monokristalin N-Type TOPCon' },
      { label: 'Panel Verimliliği', value: '%22,5' },
      { label: 'İnverter', value: 'Huawei / Sungrow / Growatt' },
      { label: 'Konstrüksiyon', value: 'Alüminyum / Galvanizli Çelik' },
      { label: 'Bağlantı Tipi', value: 'AG — Çift Yönlü Sayaç' },
      { label: 'Garanti', value: '5 Yıl İşletme + 25 Yıl Panel' },
    ],
  },
  {
    slug: 'enerji-danismanligi',
    icon: '📊',
    title: 'Enerji Danışmanlığı',
    subtitle: 'Fizibilite & Yatırım Analizi',
    description:
      'Güneş enerjisi yatırımı yapmadan önce detaylı fizibilite analizi, yatırım geri dönüş hesaplaması ve optimal sistem tasarımı için danışmanlık hizmeti. Ücretsiz keşif randevusu ile başlıyoruz.',
    features: [
      'Ücretsiz ön keşif ve saha ziyareti',
      'Detaylı güneşlenme potansiyeli analizi',
      'Tekno-ekonomik fizibilite raporu',
      'Yatırım geri dönüş süresi hesaplaması',
      'Optimal sistem boyutlandırma',
      'Teşvik ve destek mekanizmaları danışmanlığı',
      'Finansman modeli önerisi',
      'Teknik şartname hazırlama',
    ],
    capacity: 'Ücretsiz Keşif',
    techSpecs: [
      { label: 'Analiz Aracı', value: 'PVsyst / PV*SOL / HelioScope' },
      { label: 'Rapor Kapsamı', value: 'Tekno-Ekonomik + Çevresel' },
      { label: 'Veri Kaynağı', value: 'NASA POWER / Solargis / MGM' },
      { label: 'Teslim Süresi', value: '2-3 Hafta' },
      { label: 'Destek Kapsamı', value: 'YEKDEM / KOSGEB / TÜBİTAK' },
      { label: 'Geçerlilik', value: '12 Ay Performans Taahhüdü' },
    ],
  },
  {
    slug: 'bakim-izleme',
    icon: '🛡️',
    title: 'Bakım & İzleme',
    subtitle: '7/24 Performans Takibi',
    description:
      'Kurulu GES sistemlerinizin maksimum verimlilikte çalışması için 7/24 uzaktan izleme, periyodik bakım, panel temizliği ve anlık arıza müdahalesi hizmetleri.',
    features: [
      '7/24 uzaktan izleme ve alarm sistemi',
      'Anlık performans takip panosu',
      'Periyodik saha bakım ziyaretleri',
      'Panel temizliği (robotik & manuel)',
      'Termal kamera ile hot-spot tespiti',
      'İnverter ve ekipman kontrolleri',
      'Aylık performans raporlaması',
      'Arıza durumunda 48 saat içinde müdahale',
    ],
    capacity: '7/24 İzleme',
    techSpecs: [
      { label: 'İzleme Platformu', value: 'IoT Tabanlı Web & Mobil' },
      { label: 'Alarm Sistemi', value: 'Anlık SMS / E-posta Bildirimi' },
      { label: 'Müdahale Süresi', value: '48 Saat (Acil: 24 Saat)' },
      { label: 'Temizlik Yöntemi', value: 'Robotik / Manuel (Susuz)' },
      { label: 'Raporlama', value: 'Aylık Detaylı Performans Raporu' },
      { label: 'Sözleşme', value: 'Yıllık / 3 Yıllık / 5 Yıllık' },
    ],
  },
];

// ============================================================
// Service Detail Data
// ============================================================

export interface ServiceDetail {
  slug: string;
  hero: string;
  title: string;
  process: { step: string; title: string; desc: string }[];
  benefits: { icon: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
  cta: string;
  relatedProjectSlugs: string[];
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'arazi-ges': {
    slug: 'arazi-ges',
    hero: 'Büyük Ölçekli Arazi Güneş Enerjisi Santrali Kurulumu',
    title: 'Arazi GES Kurulumu',
    process: [
      { step: '01', title: 'Ön Fizibilite', desc: 'Arazi güneşlenme analizi, imar durumu, trafo merkezine uzaklık, arazi eğimi ve topografya değerlendirmesi.' },
      { step: '02', title: 'Lisanslama', desc: 'EPDK ön lisans ve lisans başvurusu, ÇED raporu, arazi mülkiyet çözümlemesi, TEDAŞ bağlantı görüşü.' },
      { step: '03', title: 'Mühendislik', desc: 'Detaylı elektrik tasarımı, PVsyst simülasyonu, panel yerleşim planı, inverter seçimi, iletim hattı tasarımı.' },
      { step: '04', title: 'İnşaat & Montaj', desc: 'Arazi hazırlığı, konstrüksiyon montajı, panel montajı, inverter ve trafo kurulumu, iletim hattı inşaatı.' },
      { step: '05', title: 'Devreye Alma', desc: 'Sistem testleri, kabul testleri, TEDAŞ geçici kabulü, şebekeye bağlantı, enerji üretimine başlangıç.' },
      { step: '06', title: 'İşletme & Bakım', desc: '7/24 uzaktan izleme, periyodik bakım, panel temizliği, performans raporlaması, 5 yıl garanti.' },
    ],
    benefits: [
      { icon: '⚡', title: 'Yüksek Verim', desc: 'N-Type TOPCon paneller ile %22,5\'e varan panel verimliliği ve düşük sıcaklık katsayısı.' },
      { icon: '💰', title: 'Hızlı Geri Dönüş', desc: 'YEKDEM desteği ile 3-4 yıl, desteksiz 4-6 yıl arası yatırım geri dönüş süresi.' },
      { icon: '📐', title: 'Özel Tasarım', desc: 'Her arazi için optimize edilmiş panel yerleşimi, maksimum alan kullanımı.' },
      { icon: '🔒', title: 'Lisanslı Hizmet', desc: 'EPDK lisanslı, TEDAŞ onaylı, uluslararası standartlara uygun projelendirme.' },
    ],
    faq: [
      { q: '1 MW arazi GES için ne kadar alan gerekir?', a: 'Yaklaşık 15.000 — 20.000 m² (1.5 — 2 hektar) düz veya güney yönelimli arazi gereklidir.' },
      { q: 'Lisans süreci ne kadar sürer?', a: 'EPDK lisans süreci ortalama 12-18 ay arasındadır. Ön lisans aşaması 6-8 ay, lisans aşaması 6-10 ay sürmektedir.' },
      { q: 'Yatırım geri dönüş süresi nedir?', a: 'Türkiye güneşlenme değerleriyle ortalama 4-6 yıl arasında yatırım geri dönüşü sağlanmaktadır. YEKDEM desteği ile bu süre 3-4 yıla düşebilir.' },
      { q: 'Şebeke bağlantı maliyeti ne kadar?', a: 'Trafo merkezine olan uzaklığa bağlı olarak değişmekle birlikte, 1 MW için ortalama 50.000-150.000 USD arası OG bağlantı maliyeti oluşabilir. TEDAŞ bağlantı görüşü aşamasında netleşir.' },
      { q: 'Arazi eğimi ne kadar olmalı?', a: 'İdeal eğim %5\'in altıdır. %5-15 arası eğimler teraslama ile kullanılabilir. %15 üzeri eğimler maliyeti ciddi şekilde artırdığından önerilmez.' },
      { q: 'ÇED raporu her proje için gerekli mi?', a: '10 MW ve üzeri projeler için ÇED raporu zorunludur. 1-10 MW arası projeler için "ÇED Gerekli Değildir" belgesi alınması yeterlidir.' },
    ],
    cta: 'Arazi GES projeniz için ücretsiz ön fizibilite raporu alın.',
    relatedProjectSlugs: ['konya-karatay-ges', 'ankara-lojistik-ges', 'antalya-sera-ges'],
  },
  'cati-ges': {
    slug: 'cati-ges',
    hero: 'Endüstriyel & Ticari Çatı Güneş Enerjisi Sistemleri',
    title: 'Çatı GES Kurulumu',
    process: [
      { step: '01', title: 'Çatı Analizi', desc: 'Çatı statik dayanım testi, gölgeleme analizi, çatı ömrü değerlendirmesi, mevcut elektrik altyapı incelemesi.' },
      { step: '02', title: 'Sistem Tasarımı', desc: 'PVsyst ile üretim simülasyonu, panel yerleşim optimizasyonu, inverter ve ekipman seçimi, elektrik projesi.' },
      { step: '03', title: 'İzinler', desc: 'OSB/belediye yapı ruhsatı, TEDAŞ bağlantı anlaşması, çift yönlü sayaç başvurusu, mahsuplaşma sözleşmesi.' },
      { step: '04', title: 'Kurulum', desc: 'Konstrüksiyon montajı, panel montajı, inverter ve pano kurulumu, kablolama, topraklama, paratoner.' },
      { step: '05', title: 'Devreye Alma', desc: 'Sistem testleri, TEDAŞ geçici kabulü, çift yönlü sayaç takılması, enerji üretimine başlangıç.' },
      { step: '06', title: 'İzleme & Bakım', desc: 'Online izleme paneli, aylık üretim raporu, periyodik bakım, panel temizliği, arıza müdahalesi.' },
    ],
    benefits: [
      { icon: '🏗️', title: 'Çatı Değerlendirme', desc: 'Ücretsiz çatı statik analizi ve güneşlenme potansiyeli ölçümü ile başlıyoruz.' },
      { icon: '💡', title: 'Enerji Bağımsızlığı', desc: 'Kendi elektriğinizi üretin, şebeke bağımlılığınızı azaltın, enerji maliyetlerinizi düşürün.' },
      { icon: '🔄', title: 'Mahsuplaşma', desc: 'Ürettiğiniz fazla enerjiyi şebekeye satın, çift yönlü sayaç ile fatura avantajı kazanın.' },
      { icon: '📱', title: 'Mobil İzleme', desc: 'Telefonunuzdan anlık üretim, tüketim, kazanç ve karbon tasarrufu verilerinizi takip edin.' },
    ],
    faq: [
      { q: 'Çatım GES için uygun mu?', a: 'Çatınızın güney yönüne bakması, gölge almaması ve statik olarak panel yükünü taşıyabilmesi gerekir. Ücretsiz keşifle değerlendiriyoruz.' },
      { q: 'Çatı GES için ne kadar yatırım gerekir?', a: '1 kW kurulu güç için yaklaşık 500-700 USD arası yatırım gerekmektedir. 500 kW\'lık bir sistem için yaklaşık 250.000-350.000 USD bütçe ayrılmalıdır.' },
      { q: 'Fazla enerjiyi satabilir miyim?', a: 'Evet, mahsuplaşma sistemi ile ürettiğiniz fazla enerjiyi şebekeye satabilirsiniz. Çift yönlü sayaç ile tüketiminizden fazlası devlet garantili fiyattan satın alınır.' },
      { q: 'Çatı kaç yaşında olmalı?', a: 'Panel ömrü 25+ yıl olduğu için çatının en az 15-20 yıl daha kullanılabilecek durumda olması önerilir. Gerekirse çatı yenileme/güçlendirme hizmeti de veriyoruz.' },
      { q: 'Fabrika üretimi durdurulur mu?', a: 'Hayır, kurulum sırasında üretiminizi durdurmanız gerekmez. Çatıda çalışırken fabrika operasyonları kesintisiz devam eder.' },
      { q: 'OSB izin süreci nasıl işler?', a: 'OSB bölge müdürlüğüne statik rapor ve elektrik projesi ile başvurulur. Ortalama 2-4 hafta içinde izin alınır. Tüm bürokratik süreci biz yönetiyoruz.' },
    ],
    cta: 'Çatınızın güneş enerjisi potansiyelini ücretsiz öğrenin.',
    relatedProjectSlugs: ['izmir-osb-cati-ges', 'bursa-tekstil-ges', 'gaziantep-fabrika-ges'],
  },
  'enerji-danismanligi': {
    slug: 'enerji-danismanligi',
    hero: 'Güneş Enerjisi Yatırım Danışmanlığı',
    title: 'Enerji Danışmanlığı',
    process: [
      { step: '01', title: 'Keşif Ziyareti', desc: 'Ücretsiz saha ziyareti, tesis/arazi incelemesi, elektrik tüketim analizi, ilk değerlendirme toplantısı.' },
      { step: '02', title: 'Veri Analizi', desc: 'Son 12 aylık elektrik faturaları analizi, tüketim profilinin çıkarılması, güneşlenme verileriyle eşleştirme.' },
      { step: '03', title: 'Fizibilite Raporu', desc: 'Tekno-ekonomik fizibilite raporu, yatırım tutarı hesaplaması, geri dönüş süresi, NBD ve İKO analizi.' },
      { step: '04', title: 'Sistem Tasarımı', desc: 'Optimal sistem boyutlandırması, ekipman seçimi, teknik şartname hazırlanması, teşvik başvuru danışmanlığı.' },
      { step: '05', title: 'Finansman', desc: 'Banka kredisi, leasing, YEKDEM, KOSGEB ve TÜBİTAK destekleri için başvuru danışmanlığı.' },
      { step: '06', title: 'Karar Destek', desc: 'Tüm veriler ışığında yatırım kararı için yönetim kurulu sunumu ve detaylı maliyet-fayda analizi.' },
    ],
    benefits: [
      { icon: '🔍', title: 'Ücretsiz Keşif', desc: 'Hiçbir taahhüt altına girmeden, uzman ekibimiz tesisinizde ücretsiz ön inceleme yapar.' },
      { icon: '📊', title: 'Detaylı Analiz', desc: 'PVsyst, PV*SOL ve HelioScope gibi endüstri standardı yazılımlarla kapsamlı simülasyon.' },
      { icon: '🏦', title: 'Finansman Desteği', desc: 'Kredi, leasing, YEKDEM, KOSGEB ve TÜBİTAK teşvikleri için başvuru danışmanlığı.' },
      { icon: '📋', title: 'Karar Destek', desc: 'Yönetim kurulu sunumu ve detaylı maliyet-fayda analizi ile yatırım kararınızı güvenle alın.' },
    ],
    faq: [
      { q: 'Danışmanlık ücreti ne kadar?', a: 'İlk keşif ve ön değerlendirme ücretsizdir. Detaylı fizibilite raporu için proje büyüklüğüne göre fiyatlandırma yapılır.' },
      { q: 'Fizibilite raporu ne kadar sürede hazırlanır?', a: 'Saha ziyareti sonrası 2-3 hafta içinde detaylı fizibilite raporunuz hazır olur.' },
      { q: 'Sadece danışmanlık alıp kurulumu başka firmaya yaptırabilir miyim?', a: 'Evet, danışmanlık hizmetimiz kurulum taahhüdü gerektirmez. Fizibilite raporu ve teknik şartname ile istediğiniz firmadan teklif alabilirsiniz.' },
      { q: 'Uzaktan değerlendirme yapıyor musunuz?', a: 'Evet, Google Earth, uydu görüntüleri ve elektrik faturalarınız üzerinden ön değerlendirme yapabiliyoruz. Ancak kesin rapor için saha ziyareti gereklidir.' },
    ],
    cta: 'Ücretsiz keşif randevusu için hemen ulaşın.',
    relatedProjectSlugs: ['tekirdag-depolama-ges', 'eskisehir-sanayi-ges', 'denizli-uretim-ges'],
  },
  'bakim-izleme': {
    slug: 'bakim-izleme',
    hero: 'GES Bakım & 7/24 Uzaktan İzleme Hizmeti',
    title: 'Bakım & İzleme',
    process: [
      { step: '01', title: 'Sistem Denetimi', desc: 'Mevcut GES sisteminizin detaylı denetimi, panel verimlilik testi, inverter kontrolü, termal kamera taraması.' },
      { step: '02', title: 'İzleme Kurulumu', desc: '7/24 uzaktan izleme sistemi kurulumu, sensör yerleşimi, veri toplama altyapısı, müşteri panosu erişimi.' },
      { step: '03', title: 'Periyodik Bakım', desc: 'Aylık/üç aylık periyodik saha bakım ziyaretleri, ekipman kontrolleri, bağlantı sıkma, temizlik.' },
      { step: '04', title: 'Panel Temizliği', desc: 'Robotik veya manuel panel temizliği, su ve kimyasal kullanmadan çevre dostu temizlik yöntemleri.' },
      { step: '05', title: 'Performans Raporu', desc: 'Aylık enerji üretim raporu, verimlilik analizi, kayıp-kaçak tespiti, iyileştirme önerileri.' },
      { step: '06', title: 'Arıza Müdahale', desc: 'Anlık alarm bildirimi, uzaktan arıza teşhisi, 48 saat içinde saha müdahalesi, yedek parça stoğu.' },
    ],
    benefits: [
      { icon: '📡', title: '7/24 İzleme', desc: 'IoT sensörlerle anlık veri toplama, yapay zeka destekli anormallik tespiti ve anında alarm.' },
      { icon: '🔧', title: 'Hızlı Müdahale', desc: 'Arıza durumunda 48 saat içinde (acil: 24 saat) saha ekibi yönlendirme, yedek parça stoğu.' },
      { icon: '🧹', title: 'Çevreci Temizlik', desc: 'Robotik ve manuel yöntemlerle, su ve kimyasal kullanmadan panel temizliği.' },
      { icon: '📈', title: 'Performans Artışı', desc: 'Düzenli bakım ile %3-5 arası üretim artışı, sistem ömründe %15-20 uzama.' },
    ],
    faq: [
      { q: 'Bakım sözleşmesi ne kadar?', a: 'Sistem büyüklüğüne göre yıllık kW başına fiyatlandırma yapılır. Ortalama 10-15 USD/kW/yıl arasıdır.' },
      { q: 'İzleme sistemini kendi telefonumdan görebilir miyim?', a: 'Evet, mobil uygulama ve web paneli üzerinden anlık üretim, tüketim, kazanç ve karbon tasarrufu verilerinizi görebilirsiniz.' },
      { q: 'Sözleşme süresi ne kadar?', a: 'Yıllık, 3 yıllık veya 5 yıllık sözleşme seçenekleri sunuyoruz. Uzun vadeli sözleşmelerde %20\'ye varan indirim uygulanır.' },
      { q: 'Panel temizliği hangi sıklıkta yapılmalı?', a: 'Bölgenin toz, polen ve yağış durumuna göre değişir. Genellikle yılda 2-4 kez temizlik önerilir. İzleme verilerine göre kirlilik seviyesi arttığında otomatik uyarı alırsınız.' },
      { q: 'Yedek parça stoğunuz var mı?', a: 'Evet, yaygın kullanılan inverter, panel, kablo ve konnektörler için yedek parça stoğumuz mevcuttur. Kritik ekipmanlar için 24 saat içinde tedarik garantisi veriyoruz.' },
    ],
    cta: 'Mevcut sisteminizin verimliliğini artırmak için bize ulaşın.',
    relatedProjectSlugs: ['bursa-tekstil-ges', 'denizli-uretim-ges', 'gaziantep-fabrika-ges'],
  },
};
