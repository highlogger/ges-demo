'use client';

// ============================================================
// GES SOLAR PRO — Providers Wrapper
// ThemeProvider, Lenis smooth scroll, GSAP register
// ============================================================
import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import { defaultSiteConfig, type SiteConfig } from '@/config/site.config';

// ---------- Theme Context ----------
type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  const applyTheme = useCallback((t: Theme) => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');

    let resolved: 'light' | 'dark';
    if (t === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      resolved = t;
    }

    root.classList.add(resolved);
    setResolvedTheme(resolved);

    // Persist
    try { localStorage.setItem('theme', t); } catch {}
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const initial = stored || 'system';
    setThemeState(initial);
    applyTheme(initial);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => { if (theme === 'system') applyTheme('system'); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    applyTheme(t);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ---------- Site Config Context ----------
const SiteConfigContext = createContext<SiteConfig>(defaultSiteConfig);
export const useSiteConfig = () => useContext(SiteConfigContext);

// ---------- Combined Providers ----------
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SiteConfigContext.Provider value={defaultSiteConfig}>
        {children}
      </SiteConfigContext.Provider>
    </ThemeProvider>
  );
}
