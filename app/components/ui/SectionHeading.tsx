import { type ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  number?: string;
  className?: string;
}

export function SectionHeading({ children, number, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-12 border-b border-zinc-800 pb-4 flex items-end justify-between ${className}`}>
      <div className="flex items-center gap-3">
        {number && (
          <span className="font-mono text-xs text-orange-500 font-semibold tracking-wider uppercase">
            {number}.
          </span>
        )}
        <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
          {children}
        </h2>
      </div>
      <div className="hidden sm:block h-px bg-zinc-800 flex-1 ml-6 mb-2" />
    </div>
  );
}


