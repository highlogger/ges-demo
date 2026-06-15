'use client';

// ============================================================
// GES SOLAR PRO — Cihaz Bazlı Enerji Hesaplayıcı
// Gerçek dünya cihazlarının güncel kW değerleri ile
// ============================================================
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// ---------- CİHAZ KATEGORİLERİ VE GÜNCEL KW DEĞERLERİ ----------

interface Appliance {
  name: string;
  watt: number; // Watt cinsinden
  count: number;
}

type CategoryKey = 'ev' | 'tarim' | 'ofis' | 'sanayi' | 'otel';

interface Category {
  key: CategoryKey;
  icon: string;
  label: string;
  appliances: Omit<Appliance, 'count'>[];
}

const categories: Category[] = [
  {
    key: 'ev',
    icon: '🏠',
    label: 'Ev / Konut',
    appliances: [
      { name: 'Klima (12.000 BTU Inverter)', watt: 1000 },
      { name: 'Klima (18.000 BTU Inverter)', watt: 1500 },
      { name: 'Klima (24.000 BTU Inverter)', watt: 2200 },
      { name: 'Buzdolabı (A+ No-Frost)', watt: 150 },
      { name: 'Derin Dondurucu', watt: 150 },
      { name: 'Çamaşır Makinesi', watt: 2000 },
      { name: 'Kurutma Makinesi (Isı Pompalı)', watt: 900 },
      { name: 'Bulaşık Makinesi', watt: 1800 },
      { name: 'Fırın', watt: 2500 },
      { name: 'Mikrodalga Fırın', watt: 1000 },
      { name: 'Elektrikli Ocak (4\'lü)', watt: 6000 },
      { name: 'TV (55" LED)', watt: 120 },
      { name: 'TV (65" OLED)', watt: 200 },
      { name: 'Bilgisayar (Masaüstü)', watt: 300 },
      { name: 'Dizüstü Bilgisayar', watt: 65 },
      { name: 'Elektrikli Süpürge', watt: 800 },
      { name: 'Ütü', watt: 2200 },
      { name: 'Su Isıtıcısı / Kettle', watt: 2200 },
      { name: 'Kahve Makinesi', watt: 1000 },
      { name: 'Elektrikli Şofben', watt: 7000 },
      { name: 'LED Aydınlatma (10 adet)', watt: 100 },
      { name: 'Router / Modem + Uydu', watt: 30 },
      { name: 'Akvaryum (200L)', watt: 200 },
    ],
  },
  {
    key: 'tarim',
    icon: '🌾',
    label: 'Tarım / Sulama',
    appliances: [
      { name: 'Dalgıç Pompa (0.5 HP / 0.37 kW)', watt: 370 },
      { name: 'Dalgıç Pompa (1 HP / 0.75 kW)', watt: 750 },
      { name: 'Dalgıç Pompa (1.5 HP / 1.1 kW)', watt: 1100 },
      { name: 'Dalgıç Pompa (2 HP / 1.5 kW)', watt: 1500 },
      { name: 'Dalgıç Pompa (3 HP / 2.2 kW)', watt: 2200 },
      { name: 'Dalgıç Pompa (5 HP / 3.7 kW)', watt: 3700 },
      { name: 'Dalgıç Pompa (7.5 HP / 5.5 kW)', watt: 5500 },
      { name: 'Yüzey Pompası (1 HP)', watt: 750 },
      { name: 'Yüzey Pompası (2 HP)', watt: 1500 },
      { name: 'Santrifüj Pompa (3 HP)', watt: 2200 },
      { name: 'Santrifüj Pompa (5 HP)', watt: 3700 },
      { name: 'Damla Sulama Kontrol Ünitesi', watt: 100 },
      { name: 'Saman Makinesi (3 HP)', watt: 2200 },
      { name: 'Yem Kırma Makinesi (5 HP)', watt: 3700 },
      { name: 'Süt Sağım Makinesi (Tek Ünite)', watt: 750 },
      { name: 'Süt Soğutma Tankı (1000L)', watt: 2000 },
      { name: 'Tavuk Kümesi Fan (Büyük)', watt: 1500 },
      { name: 'Sera Fan Sistemi (1000m²)', watt: 3000 },
      { name: 'Sera Isıtma (Jeotermal Pompa)', watt: 5000 },
      { name: 'Soğuk Hava Deposu (20m³)', watt: 5000 },
      { name: 'Soğuk Hava Deposu (50m³)', watt: 10000 },
      { name: 'Arıtma Sistemi (Küçük)', watt: 500 },
    ],
  },
  {
    key: 'ofis',
    icon: '🏢',
    label: 'Ofis / Ticari',
    appliances: [
      { name: 'Masaüstü Bilgisayar', watt: 300 },
      { name: 'Dizüstü Bilgisayar', watt: 65 },
      { name: 'Monitör (24")', watt: 25 },
      { name: 'Monitör (27" 4K)', watt: 45 },
      { name: 'Yazıcı (Laser)', watt: 500 },
      { name: 'Fotokopi Makinesi (Orta)', watt: 1200 },
      { name: 'Sunucu (Küçük)', watt: 300 },
      { name: 'Sunucu (Orta Ölçekli)', watt: 800 },
      { name: 'Network Switch (24 Port)', watt: 30 },
      { name: 'LED Panel Aydınlatma (10 adet)', watt: 360 },
      { name: 'Klima (Salon Tip 36.000 BTU)', watt: 3500 },
      { name: 'Klima (Kaset Tip 48.000 BTU)', watt: 4500 },
      { name: 'Su Sebili', watt: 500 },
      { name: 'Buzdolabı (Ofis Tip)', watt: 200 },
    ],
  },
  {
    key: 'sanayi',
    icon: '🏭',
    label: 'Sanayi / Atölye',
    appliances: [
      { name: 'Kompresör (5 HP)', watt: 3700 },
      { name: 'Kompresör (10 HP)', watt: 7500 },
      { name: 'Kompresör (20 HP)', watt: 15000 },
      { name: 'CNC Router', watt: 5000 },
      { name: 'CNC Torna', watt: 8000 },
      { name: 'Kaynak Makinesi (200A)', watt: 6000 },
      { name: 'Kaynak Makinesi (400A)', watt: 12000 },
      { name: 'Planya Makinesi', watt: 4000 },
      { name: 'Şerit Testere', watt: 3000 },
      { name: 'Taşlama Tezgahı', watt: 2200 },
      { name: 'Boya Kabini Fanı', watt: 4000 },
      { name: 'Konveyör Bant (10m)', watt: 2200 },
      { name: 'Paketleme Makinesi', watt: 3000 },
      { name: 'Enjeksiyon Makinesi (Küçük)', watt: 15000 },
      { name: 'Soğutma Kulesi (Küçük)', watt: 5000 },
      { name: 'Aydınlatma (1000m² LED)', watt: 5000 },
    ],
  },
  {
    key: 'otel',
    icon: '🏨',
    label: 'Otel / Konaklama',
    appliances: [
      { name: 'Klima (Oda Tip 9.000 BTU)', watt: 800 },
      { name: 'Klima (Oda Tip 12.000 BTU)', watt: 1000 },
      { name: 'Klima (Lobi 24.000 BTU)', watt: 2200 },
      { name: 'Mini Buzdolabı (Oda)', watt: 80 },
      { name: 'TV (43" LED Oda)', watt: 75 },
      { name: 'Su Isıtıcısı (Oda)', watt: 1500 },
      { name: 'Saç Kurutma Makinesi (Oda)', watt: 1800 },
      { name: 'Isı Pompası (Havuz)', watt: 7500 },
      { name: 'Havuz Sirkülasyon Pompası', watt: 2200 },
      { name: 'Çamaşırhane - Yıkama (Endüstriyel)', watt: 5000 },
      { name: 'Çamaşırhane - Kurutma (Endüstriyel)', watt: 7000 },
      { name: 'Mutfak - Buzdolabı (Endüstriyel)', watt: 2000 },
      { name: 'Mutfak - Fırın (Endüstriyel)', watt: 8000 },
      { name: 'Mutfak - Bulaşık (Endüstriyel)', watt: 6000 },
      { name: 'Asansör (4 Kişilik)', watt: 4000 },
      { name: 'Aydınlatma (50 Oda)', watt: 2500 },
    ],
  },
];

// ---------- LOKASYON GÜNEŞLENME VERİLERİ ----------

const locationFactors: Record<string, { name: string; sunHours: number }> = {
  akdeniz: { name: 'Akdeniz (Antalya/Mersin)', sunHours: 1650 },
  guneydogu: { name: 'Güneydoğu (Şanlıurfa/Diyarbakır)', sunHours: 1650 },
  ege: { name: 'Ege (İzmir/Manisa)', sunHours: 1550 },
  icanadolu: { name: 'İç Anadolu (Ankara/Konya)', sunHours: 1550 },
  marmara: { name: 'Marmara (İstanbul/Bursa)', sunHours: 1450 },
  dogu: { name: 'Doğu Anadolu (Erzurum/Van)', sunHours: 1500 },
  karadeniz: { name: 'Karadeniz (Trabzon/Samsun)', sunHours: 1250 },
};

// ---------- HESAPLAMA SABİTLERİ ----------

const SYSTEM_EFFICIENCY = 0.82; // Panel + inverter + kablo kayıpları
const PANEL_WATT_PER_M2 = 210; // Modern 2025+ monokristal panel ~210W/m²
const PRICE_PER_KWH = 0.12; // USD bazında tahmini elektrik fiyatı
const COST_PER_KW = 550; // USD bazında kurulum maliyeti
const CARBON_PER_KWH = 0.000478; // ton CO2 / kWh

export default function EnergyCalculatorPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('ev');
  const [selectedAppliances, setSelectedAppliances] = useState<Record<string, Appliance>>({});
  const [dailyHours, setDailyHours] = useState<Record<string, number>>({});
  const [location, setLocation] = useState('akdeniz');

  const activeCategoryData = categories.find((c) => c.key === activeCategory)!;

  // Toggle appliance selection
  const toggleAppliance = (app: Omit<Appliance, 'count'>) => {
    const key = `${activeCategory}-${app.name}`;
    setSelectedAppliances((prev) => {
      const next = { ...prev };
      if (next[key]) {
        delete next[key];
        setDailyHours((h) => { const n = { ...h }; delete n[key]; return n; });
      } else {
        next[key] = { ...app, count: 1 };
        setDailyHours((h) => ({ ...h, [key]: 6 })); // Varsayılan 6 saat/gün
      }
      return next;
    });
  };

  // Update count
  const updateCount = (key: string, delta: number) => {
    setSelectedAppliances((prev) => {
      const next = { ...prev };
      if (next[key]) {
        next[key] = { ...next[key], count: Math.max(1, next[key].count + delta) };
      }
      return next;
    });
  };

  // Update daily hours
  const updateHours = (key: string, hours: number) => {
    setDailyHours((prev) => ({ ...prev, [key]: Math.max(1, Math.min(24, hours)) }));
  };

  // ---------- HESAPLAMALAR ----------

  const results = useMemo(() => {
    const entries = Object.entries(selectedAppliances);
    if (entries.length === 0) {
      return {
        totalWatt: 0,
        totalDailyKWh: 0,
        totalMonthlyKWh: 0,
        totalYearlyKWh: 0,
        recommendedKW: 0,
        panelArea: 0,
        panelCount: 0,
        annualProduction: 0,
        annualRevenue: 0,
        investmentCost: 0,
        paybackYears: 0,
        carbonSavings: 0,
        treeEquivalent: 0,
      };
    }

    // Toplam günlük tüketim (kWh)
    let totalDailyKWh = 0;
    entries.forEach(([key, app]) => {
      const hours = dailyHours[key] || 6;
      totalDailyKWh += (app.watt * app.count * hours) / 1000;
    });

    const totalWatt = entries.reduce((sum, [, app]) => sum + app.watt * app.count, 0);
    const totalMonthlyKWh = totalDailyKWh * 30;
    const totalYearlyKWh = totalDailyKWh * 365;

    // Önerilen sistem kapasitesi (gündüz tüketimi karşılayacak + %20 emniyet)
    const recommendedKW = Math.ceil((totalWatt / 1000) * 1.2);
    const panelArea = Math.ceil((recommendedKW * 1000) / PANEL_WATT_PER_M2);
    const panelCount = Math.ceil((recommendedKW * 1000) / 550); // 550W panel

    // Yıllık enerji üretimi
    const sunHours = locationFactors[location]?.sunHours || 1550;
    const annualProduction = recommendedKW * sunHours * SYSTEM_EFFICIENCY;

    // Finansal
    const annualRevenue = annualProduction * PRICE_PER_KWH;
    const investmentCost = recommendedKW * COST_PER_KW;
    const paybackYears = annualRevenue > 0 ? investmentCost / annualRevenue : 0;

    // Çevresel
    const carbonSavings = annualProduction * CARBON_PER_KWH;
    const treeEquivalent = Math.round(carbonSavings * 45);

    return {
      totalWatt,
      totalDailyKWh,
      totalMonthlyKWh,
      totalYearlyKWh,
      recommendedKW,
      panelArea,
      panelCount,
      annualProduction,
      annualRevenue,
      investmentCost,
      paybackYears,
      carbonSavings,
      treeEquivalent,
    };
  }, [selectedAppliances, dailyHours, location]);

  const hasSelection = Object.keys(selectedAppliances).length > 0;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.2), transparent 70%)' }} aria-hidden="true" />
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">Hesaplama Aracı</span>
            <h1 className="mt-4 font-[var(--font-display)] text-5xl font-bold leading-tight text-white lg:text-7xl">
              Enerji Hesaplayıcı
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-300/80">
              Kullandığınız cihazları seçin, lokasyonunuzu belirleyin — size özel güneş enerjisi sistemi önerimizi anında alın.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
            {/* ---------- SOL: KATEGORİ + CİHAZ SEÇİMİ ---------- */}
            <div className="lg:col-span-2 space-y-6">
              {/* Kategori sekmeleri */}
              <Card padding="lg" variant="elevated">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mb-5">
                  Kategori Seçin
                </h2>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key)}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        activeCategory === cat.key
                          ? 'bg-primary-500 text-white shadow-md'
                          : 'border border-neutral-200 bg-white text-neutral-600 hover:border-solar-300 hover:text-solar-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-solar-600'
                      }`}
                    >
                      <span className="text-lg">{cat.icon}</span>
                      {cat.label}
                    </button>
                  ))}
                </div>
              </Card>

              {/* Cihaz listesi */}
              <Card padding="lg" variant="elevated">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0">
                    {activeCategoryData.icon} {activeCategoryData.label} Cihazları
                  </h2>
                  <span className="text-xs text-neutral-400">
                    {Object.keys(selectedAppliances).filter((k) => k.startsWith(activeCategory)).length} cihaz seçildi
                  </span>
                </div>

                <div className="grid gap-2 max-h-[500px] overflow-y-auto pr-1">
                  {activeCategoryData.appliances.map((app) => {
                    const key = `${activeCategory}-${app.name}`;
                    const selected = selectedAppliances[key];
                    return (
                      <div
                        key={app.name}
                        className={`group rounded-xl border transition-all duration-300 ${
                          selected
                            ? 'border-solar-400 bg-solar-50 dark:border-solar-700 dark:bg-solar-900/20'
                            : 'border-neutral-100 bg-white hover:border-solar-200 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-solar-800'
                        }`}
                      >
                        <div className="flex items-center gap-3 p-3">
                          {/* Select toggle */}
                          <button
                            onClick={() => toggleAppliance(app)}
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all ${
                              selected
                                ? 'border-solar-500 bg-solar-500 text-white'
                                : 'border-neutral-300 dark:border-neutral-600'
                            }`}
                          >
                            {selected && (
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            )}
                          </button>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200 truncate">
                              {app.name}
                            </div>
                            <div className="text-xs text-neutral-500 dark:text-neutral-400">
                              {app.watt.toLocaleString('tr-TR')} Watt
                              {app.watt >= 1000 ? ` (${(app.watt / 1000).toFixed(1)} kW)` : ''}
                            </div>
                          </div>

                          {/* Controls when selected */}
                          {selected && (
                            <div className="flex items-center gap-2 shrink-0">
                              {/* Count */}
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={(e) => { e.stopPropagation(); updateCount(key, -1); }}
                                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                                >−</button>
                                <span className="w-7 text-center text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                                  {selected.count}
                                </span>
                                <button
                                  onClick={(e) => { e.stopPropagation(); updateCount(key, 1); }}
                                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-200 text-sm hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                                >+</button>
                              </div>

                              {/* Daily hours */}
                              <div className="flex items-center gap-1">
                                <span className="text-[10px] text-neutral-400">saat</span>
                                <input
                                  type="number"
                                  min={1}
                                  max={24}
                                  value={dailyHours[key] || 6}
                                  onChange={(e) => updateHours(key, parseInt(e.target.value) || 6)}
                                  className="h-7 w-12 rounded-lg border border-neutral-200 bg-white text-center text-sm font-medium text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Seçilen tüm cihaz özeti */}
                {hasSelection && (
                  <div className="mt-5 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">
                      Seçilen Tüm Cihazlar ({Object.keys(selectedAppliances).length})
                    </div>
                    <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto">
                      {Object.entries(selectedAppliances).map(([key, app]) => (
                        <span key={key} className="inline-flex items-center gap-1.5 rounded-lg bg-primary-50 px-2.5 py-1 text-xs text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                          {app.count}× {app.name}
                          <button
                            onClick={() => {
                              const catKey = key.split('-')[0] as CategoryKey;
                              setActiveCategory(catKey);
                              toggleAppliance(app);
                            }}
                            className="ml-0.5 hover:text-red-500"
                          >×</button>
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Günde {Object.entries(selectedAppliances).reduce((sum, [key, app]) => sum + app.watt * app.count * (dailyHours[key] || 6), 0) > 0
                        ? (Object.entries(selectedAppliances).reduce((sum, [key, app]) => sum + app.watt * app.count * (dailyHours[key] || 6), 0) / 1000).toFixed(1)
                        : '0'} kWh tüketim
                    </div>
                  </div>
                )}
              </Card>

              {/* Lokasyon */}
              <Card padding="lg" variant="elevated">
                <label htmlFor="location" className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                  📍 Güneşlenme Bölgesi
                </label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 transition-all focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0"
                >
                  {Object.entries(locationFactors).map(([k, v]) => (
                    <option key={k} value={k}>
                      {v.name} — {v.sunHours} saat/yıl güneşlenme
                    </option>
                  ))}
                </select>
              </Card>
            </div>

            {/* ---------- SAĞ: SONUÇLAR ---------- */}
            <div className="space-y-6">
              <Card padding="xl" className={`border-0 text-white ${hasSelection ? 'bg-gradient-to-br from-primary-800 to-primary-950' : 'bg-neutral-300 dark:bg-neutral-800'}`}>
                <h2 className="text-lg font-semibold mb-6">📊 Sonuçlar</h2>

                {!hasSelection ? (
                  <div className="py-8 text-center text-neutral-400">
                    <div className="text-5xl mb-4">⚡</div>
                    <p className="text-sm">Lütfen soldaki listeden kullandığınız cihazları seçin.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {[
                      { label: 'Toplam Cihaz Gücü', value: (results.totalWatt / 1000).toFixed(1), unit: 'kW' },
                      { label: 'Günlük Tüketim', value: results.totalDailyKWh.toFixed(1), unit: 'kWh' },
                      { label: 'Aylık Tüketim', value: results.totalMonthlyKWh.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.'), unit: 'kWh' },
                      { label: 'Önerilen GES Kapasitesi', value: results.recommendedKW, unit: 'kW', highlight: true },
                      { label: 'Panel Alanı (Tahmini)', value: results.panelArea.toLocaleString('tr-TR'), unit: 'm²' },
                      { label: 'Panel Sayısı (~550W)', value: results.panelCount, unit: 'adet' },
                      { label: 'Yıllık Üretim', value: Math.round(results.annualProduction).toLocaleString('tr-TR'), unit: 'kWh', highlight: true },
                      { label: 'Yıllık Tasarruf', value: `$${Math.round(results.annualRevenue).toLocaleString('tr-TR')}`, unit: '' },
                      { label: 'Tahmini Yatırım', value: `$${Math.round(results.investmentCost).toLocaleString('tr-TR')}`, unit: '' },
                      { label: 'Geri Dönüş Süresi', value: results.paybackYears.toFixed(1), unit: 'yıl', highlight: true },
                      { label: 'Karbon Tasarrufu', value: results.carbonSavings.toFixed(1), unit: 'ton/yıl' },
                      { label: '🌳 Ağaç Eşdeğeri', value: results.treeEquivalent.toLocaleString('tr-TR'), unit: 'ağaç' },
                    ].map((r) => (
                      <div key={r.label} className={`flex items-center justify-between border-b border-white/10 pb-2.5 last:border-0 ${r.highlight ? 'bg-white/5 -mx-2 px-2 rounded-lg py-1.5' : ''}`}>
                        <span className="text-sm text-neutral-300">{r.label}</span>
                        <span className={`text-sm font-bold ${r.highlight ? 'text-solar-400' : ''}`}>
                          {r.value} <span className="font-normal text-neutral-400 text-xs">{r.unit}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-5 text-[10px] text-neutral-400 leading-relaxed">
                  * Tahmini değerlerdir. Gerçek değerler panel markası, inverter tipi, çatı eğimi ve gölgeleme durumuna göre değişiklik gösterir. Detaylı fizibilite için lütfen iletişime geçin.
                </p>
              </Card>

              {hasSelection && (
                <Card padding="lg" className="text-center bg-gradient-to-br from-solar-50 to-solar-100 dark:from-solar-900/20 dark:to-solar-800/10 border-solar-200 dark:border-solar-800">
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-0">
                    {results.recommendedKW} kW GES Sistemi
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {results.paybackYears <= 4
                      ? `⚡ Sadece ${results.paybackYears.toFixed(1)} yılda kendini amorti eder!`
                      : `Yaklaşık ${results.paybackYears.toFixed(1)} yılda yatırım geri dönüşü`}
                  </p>
                  <Button href="/iletisim" variant="solar" size="lg" className="w-full mt-4">
                    Ücretsiz Keşif Randevusu
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
