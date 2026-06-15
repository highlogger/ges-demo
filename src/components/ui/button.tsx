'use client';

// ============================================================
// GES SOLAR PRO — Button Component
// Variants: primary, outline, ghost, solar
// Sizes: sm, md, lg, xl
// Supports both <button> and <a> (Link)
// ============================================================
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonBaseProps = {
  variant?: 'primary' | 'outline' | 'ghost' | 'solar';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-md hover:shadow-lg hover:shadow-primary-500/20',
  outline:
    'border-2 border-neutral-300 bg-transparent text-neutral-800 hover:border-primary-500 hover:text-primary-600 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-solar-500 dark:hover:text-solar-400',
  ghost:
    'bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-primary-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-solar-400',
  solar:
    'bg-gradient-to-r from-solar-500 to-solar-400 text-neutral-950 shadow-glow hover:shadow-glow-lg active:from-solar-600 active:to-solar-500',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-sm rounded-xl gap-2',
  lg: 'px-8 py-4 text-base rounded-xl gap-2.5',
  xl: 'px-10 py-5 text-lg rounded-2xl gap-3',
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const classes = `
      inline-flex items-center justify-center font-[var(--font-display)] font-semibold
      transition-all duration-300 ease-[var(--ease-out)]
      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solar-500
      disabled:opacity-50 disabled:cursor-not-allowed
      ${variantStyles[variant]} ${sizeStyles[size]} ${className}
    `;

    if ('href' in props && props.href) {
      const { href, ...anchorProps } = props;
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(anchorProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}
        >
          {children}
        </Link>
      );
    }

    const { ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
