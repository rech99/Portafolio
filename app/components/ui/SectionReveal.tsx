'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  direction?: 'left' | 'right' | 'none';
  delay?: number;
}

export function SectionReveal({ 
  children, 
  className = '', 
  id, 
  direction = 'left',
  delay = 0 
}: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      initial={{ 
        opacity: 0, 
        y: 12,
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        delay
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
      className={`relative w-full max-w-full box-border ${className}`}
    >
      {children}
    </motion.section>
  );
}

interface SplitRevealProps {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}

export function SplitReveal({ left, right, className = '' }: SplitRevealProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start ${className}`}>

      {/* Left side */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        className="lg:col-span-7 space-y-6"
      >
        {left}
      </motion.div>

      {/* Right side */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        className="lg:col-span-5 space-y-6"
      >
        {right}
      </motion.div>
    </div>
  );
}


