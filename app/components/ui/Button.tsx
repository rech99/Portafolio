import { type ComponentProps } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-white text-zinc-950 font-mono font-semibold uppercase tracking-wider hover:bg-zinc-200 border border-white',
  secondary: 'bg-transparent text-zinc-300 font-mono uppercase tracking-wider border border-zinc-800 hover:border-zinc-500 hover:text-white',
  ghost: 'bg-transparent text-zinc-400 font-mono hover:text-white hover:bg-zinc-900',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-xs',
  lg: 'px-6 py-3 text-sm',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center transition-colors cursor-pointer active:scale-[0.99]';
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

