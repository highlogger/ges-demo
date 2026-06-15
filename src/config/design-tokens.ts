// ============================================================
// GES SOLAR PRO — Design Token System
// ============================================================
// Tamamen white-label ready. Her firma için override edilebilir.
// Tailwind config ile senkronize. CSS custom properties ile
// runtime'da da değiştirilebilir (CMS / admin panel).
// ============================================================

// ---------- COLOR SYSTEM ----------
export const colors = {
  // Primary — Derin Lacivert (Güven, Teknoloji, Kurumsallık)
  primary: {
    50: '#E6F0F7',
    100: '#C0D9EB',
    200: '#96BFDA',
    300: '#6BA5C9',
    400: '#4B8FB9',
    500: '#0F3D5C', // ← Ana kurumsal renk
    600: '#0C334C',
    700: '#09283D',
    800: '#061E2F',
    900: '#041420',
  },

  // Solar — Güneş Sarısı (Enerji, Sıcaklık, Vurgu)
  solar: {
    50: '#FEF7E8',
    100: '#FCEABB',
    200: '#FADC8E',
    300: '#F8CF61',
    400: '#F7C23B',
    500: '#F5A623', // ← Ana vurgu rengi
    600: '#D4891A',
    700: '#A86C14',
    800: '#7C4F0E',
    900: '#503208',
  },

  // Emerald — Yeşil (Sürdürülebilirlik, Doğa, Başarı)
  emerald: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
  },

  // Neutral — Gri Skalası
  neutral: {
    0: '#FFFFFF',
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
    1000: '#000000',
  },

  // Semantic Colors
  semantic: {
    success: '#10B981',
    successLight: '#D1FAE5',
    error: '#EF4444',
    errorLight: '#FEE2E2',
    warning: '#F59E0B',
    warningLight: '#FEF3C7',
    info: '#3B82F6',
    infoLight: '#DBEAFE',
  },
} as const;

// ---------- TYPOGRAPHY SYSTEM ----------
export const typography = {
  fonts: {
    display: ['Clash Display', 'sans-serif'],
    body: ['Satoshi', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
    fallback: ['system-ui', '-apple-system', 'sans-serif'],
  },

  // Fluid type scale — clamp(min, preferred, max)
  sizes: {
    'display-2xl': 'clamp(3.5rem, 8vw, 7rem)',     // Hero mega title
    'display-xl': 'clamp(2.75rem, 6vw, 5rem)',      // Page hero
    'display-lg': 'clamp(2.25rem, 5vw, 4rem)',      // Section hero
    'display-md': 'clamp(1.75rem, 4vw, 3rem)',      // Card titles
    'display-sm': 'clamp(1.5rem, 3vw, 2.25rem)',    // Sub headings

    'body-xl': 'clamp(1.125rem, 2vw, 1.375rem)',    // Large body / lead
    'body-lg': 'clamp(1.0625rem, 1.5vw, 1.1875rem)', // Body large
    'body-md': 'clamp(0.9375rem, 1vw, 1.0625rem)',   // Body default
    'body-sm': 'clamp(0.8125rem, 0.8vw, 0.9375rem)', // Caption / small
    'body-xs': 'clamp(0.75rem, 0.7vw, 0.8125rem)',   // Legal / fine print

    'mono-md': 'clamp(0.875rem, 1vw, 1rem)',
  },

  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeights: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 1.75,
  },

  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ---------- SPACING SYSTEM ----------
export const spacing = {
  section: {
    sm: 'clamp(3rem, 8vw, 5rem)',      // 48px → 80px
    md: 'clamp(5rem, 12vw, 8rem)',      // 80px → 128px
    lg: 'clamp(7rem, 16vw, 12rem)',     // 112px → 192px
    xl: 'clamp(9rem, 20vw, 16rem)',     // 144px → 256px
  },
  component: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// ---------- SHADOW SYSTEM ----------
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.15)',
  glow: '0 0 40px -10px rgb(245 166 35 / 0.3)',    // Solar glow
  'glow-lg': '0 0 80px -20px rgb(245 166 35 / 0.4)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// ---------- BORDER RADIUS ----------
export const radii = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  full: '9999px',
} as const;

// ---------- ANIMATION ----------
export const animations = {
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '800ms',
    slowest: '1200ms',
  },
  easings: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// ---------- Z-INDEX ----------
export const zIndex = {
  base: 0,
  above: 10,
  header: 100,
  overlay: 200,
  modal: 300,
  cookie: 400,
  tooltip: 500,
  loader: 999,
} as const;

// ---------- BREAKPOINTS ----------
export const breakpoints = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const;
