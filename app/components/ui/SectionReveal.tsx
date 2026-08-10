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
  const initialX = direction === 'left' ? -120 : direction === 'right' ? 120 : 0;

  return (
    <motion.section
      id={id}
      initial={{ 
        opacity: 0, 
        x: initialX,
        scale: 0.95,
        filter: 'blur(10px)'
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        scale: 1,
        filter: 'blur(0px)'
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ 
        type: 'spring',
        stiffness: 55,
        damping: 16,
        mass: 0.9,
        delay
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
        initial={{ opacity: 0, x: -90, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 60, damping: 17, delay: 0.1 }}
        className="lg:col-span-7 space-y-6"
      >
        {left}
      </motion.div>

      {/* Right side slides from right */}
      <motion.div
        initial={{ opacity: 0, x: 90, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 60, damping: 17, delay: 0.2 }}
        className="lg:col-span-5 space-y-6"
      >
        {right}
      </motion.div>
    </div>
  );
}
