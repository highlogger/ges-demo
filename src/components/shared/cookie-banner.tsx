'use client';

// ============================================================
// GES SOLAR PRO — Cookie Consent Banner (KVKK)
// Turkish KVKK-compliant cookie consent
// ============================================================
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';

type Consent = 'accepted' | 'rejected' | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent') as Consent;
    if (!stored) {
      // Delay to avoid flash
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
    setConsent(stored);
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
    setVisible(false);
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem('cookie-consent', 'rejected');
    setConsent('rejected');
    setVisible(false);
  }, []);

  if (consent) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Çerez bildirimi"
      className={`
        fixed bottom-6 left-1/2 z-[400] w-[calc(100%-2rem)] max-w-xl
        -translate-x-1/2 rounded-2xl border border-neutral-200
        bg-white/95 p-6 shadow-2xl backdrop-blur-xl
        transition-all duration-700 ease-[var(--ease-out)]
        dark:border-neutral-700 dark:bg-neutral-900/95
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex-1 space-y-2">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-0">
            🍪 Çerez Kullanımı
          </h3>
          <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
            Size daha iyi bir deneyim sunmak için çerezleri kullanıyoruz. Detaylı bilgi için{' '}
            <a href="/kvkk/cerez-politikasi" className="font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-solar-400">
              Çerez Politikamızı
            </a>{' '}
            ve{' '}
            <a href="/kvkk/aydinlatma-metni" className="font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-solar-400">
              Aydınlatma Metnimizi
            </a>{' '}
            inceleyebilirsiniz.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={handleReject}>
            Reddet
          </Button>
          <Button variant="primary" size="sm" onClick={handleAccept}>
            Kabul Et
          </Button>
        </div>
      </div>
    </div>
  );
}
