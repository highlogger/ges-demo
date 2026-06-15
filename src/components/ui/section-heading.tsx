// ============================================================
// GES SOLAR PRO — Section Heading
// Consistent heading with optional eyebrow, title, description
// ============================================================
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-solar-600 dark:text-solar-400">
          <span className="h-px w-8 rounded-full bg-current opacity-40" />
          {eyebrow}
          <span className="h-px w-8 rounded-full bg-current opacity-40" />
        </span>
      )}
      <h2
        className={`mt-4 font-[var(--font-display)] font-semibold tracking-tight ${
          theme === 'dark' ? 'text-white' : 'text-neutral-900 dark:text-neutral-0'
        }`}
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15 }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
