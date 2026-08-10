import { type ComponentProps, type ReactNode } from 'react';

interface CardProps extends ComponentProps<'div'> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ 
  children, 
  hover = false, 
  className = '', 
  ...props 
}: CardProps) {
  const baseStyles = 'bg-zinc-950 border border-zinc-800 overflow-hidden';
  const hoverStyles = hover ? 'hover:border-zinc-700 transition-colors' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
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

