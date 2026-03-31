import { type ComponentProps, type ReactNode } from 'react';

interface CardProps extends ComponentProps<'div'> {
  children: ReactNode;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({ 
  children, 
  hover = false, 
  gradient = false,
  className = '', 
  ...props 
}: CardProps) {
  const baseStyles = 'rounded-xl border border-border-light dark:border-border-dark overflow-hidden';
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-primary-600/50 dark:hover:border-primary-400/50 transition-all duration-300' : '';
  const bgStyles = gradient 
    ? 'bg-gradient-to-br from-primary-600 to-accent-600' 
    : 'bg-surface-light dark:bg-surface-dark-alt';

  return (
    <div className={`${baseStyles} ${bgStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
