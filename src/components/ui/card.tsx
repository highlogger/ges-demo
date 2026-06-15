// ============================================================
// GES SOLAR PRO — Card Component
// Premium card with hover effects and glass variant
// ============================================================
import { type ReactNode, type CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const variantStyles = {
  default:
    'bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800',
  glass:
    'glass',
  elevated:
    'bg-white border border-neutral-100 shadow-lg dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-none',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10 lg:p-12',
};

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className = '',
  style,
  id,
}: CardProps) {
  return (
    <div
      id={id}
      style={style}
      className={`
        rounded-2xl transition-all duration-500 ease-[var(--ease-out)]
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${hover ? 'hover:shadow-xl hover:-translate-y-1 hover:border-solar-200 dark:hover:border-solar-800 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
