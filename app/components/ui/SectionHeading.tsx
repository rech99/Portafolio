import { type ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = '' }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold mb-6 md:mb-8 ${className}`}>
      {children}
    </h2>
  );
}

