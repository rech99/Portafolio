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
  const initialX = direction === 'left' ? -25 : direction === 'right' ? 25 : 0;

  return (
    <motion.section
      id={id}
      initial={{ 
        opacity: 0, 
        x: initialX,
        scale: 0.98,
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
        delay
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
      className={`relative overflow-hidden w-full box-border ${className}`}
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
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${className}`}>
      {/* Left side slides from left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        className="lg:col-span-7 space-y-6"
      >
        {left}
      </motion.div>

      {/* Right side slides from right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        className="lg:col-span-5 space-y-6"
      >
        {right}
      </motion.div>
    </div>
  );
}


