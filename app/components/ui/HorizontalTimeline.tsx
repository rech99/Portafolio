'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TimelineItem {
  id: string;
  title: string;
  companyOrInstitution: string;
  period: string;
  description?: string[];
  details?: string;
}

interface HorizontalTimelineProps {
  items: TimelineItem[];
  itemsPerPage?: number;
}

export function HorizontalTimeline({ items, itemsPerPage = 3 }: HorizontalTimelineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const visibleItems = items.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const gridColsClass = 
    visibleItems.length === 1 
      ? 'grid-cols-1' 
      : visibleItems.length === 2 
      ? 'grid-cols-2' 
      : 'grid-cols-3';

  return (
    <div className="w-full space-y-3 md:space-y-4">
      {/* MOBILE VIEW (< md): Single-Card Carousel with Responsive Max Height & Internal Scroll */}
      <div className="block md:hidden space-y-3">
        {/* Mobile Tab Selector Bar */}
        <div className="flex items-center gap-1 border border-zinc-800 p-1 bg-zinc-950/80 overflow-x-auto">
          {items.map((item, idx) => {
            const isActive = mobileIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setMobileIndex(idx)}
                className={`flex-1 min-w-[90px] py-1 px-2 text-[10px] font-mono uppercase tracking-wider transition-colors text-center truncate cursor-pointer ${
                  isActive
                    ? 'bg-orange-500 text-zinc-950 font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                0{idx + 1}. {item.companyOrInstitution.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Active Mobile Timeline Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={items[mobileIndex].id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="mb-2">
              <span className="font-mono text-[11px] text-orange-400 font-semibold uppercase tracking-wider px-2.5 py-0.5 bg-zinc-900 border border-zinc-800 inline-block">
                {items[mobileIndex].period}
              </span>
            </div>

            <article className="w-full border border-zinc-800 bg-zinc-950 p-4 space-y-3 border-t-2 border-t-orange-500 flex flex-col justify-start">
              <header className="space-y-0.5 border-b border-zinc-800 pb-2 w-full">
                <h4 className="text-sm font-semibold text-white leading-snug">
                  {items[mobileIndex].title}
                </h4>
                <p className="text-[11px] font-mono text-zinc-400">
                  {items[mobileIndex].companyOrInstitution}
                </p>
              </header>

              {items[mobileIndex].description && (
                <div className="w-full pt-1">
                  <ul className="space-y-2 text-[11px] sm:text-xs text-zinc-300 font-normal leading-relaxed">
                    {items[mobileIndex].description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <span className="text-orange-500 font-mono text-[10px] mt-0.5 flex-shrink-0">▪</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {items[mobileIndex].details && (
                <div className="w-full pt-1">
                  <p className="text-[11px] sm:text-xs text-zinc-300 font-normal leading-relaxed">
                    {items[mobileIndex].details}
                  </p>
                </div>
              )}
            </article>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* DESKTOP VIEW (>= md): Standardized Height Cards with Internal Scroll for Overflow */}
      <div className="hidden md:block w-full">
        {/* Optional Timeline Pagination Bar if total items > itemsPerPage */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between font-mono text-xs text-zinc-400 mb-3">
            <span>TIMELINE PHASE 0{currentIndex + 1} / 0{totalPages}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrev}
                className="px-3 py-1 bg-zinc-900 border border-zinc-800 hover:border-white hover:text-white transition-colors cursor-pointer"
              >
                ← PREV
              </button>
              <button
                onClick={goToNext}
                className="px-3 py-1 bg-zinc-900 border border-zinc-800 hover:border-white hover:text-white transition-colors cursor-pointer"
              >
                NEXT →
              </button>
            </div>
          </div>
        )}

        {/* Main Horizontal Axis Wrapper */}
        <div className="relative w-full py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`grid ${gridColsClass} gap-6 relative z-10`}
            >
              {visibleItems.map((item) => (
                <div key={item.id} className="flex flex-col items-center group w-full">
                  
                  {/* Professional Date Badge Above Timeline Line */}
                  <div className="mb-2.5">
                    <span className="font-mono text-xs text-orange-400 font-semibold uppercase tracking-wider px-3 py-1 bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/60 transition-colors">
                      {item.period}
                    </span>
                  </div>

                  {/* Timeline Pin Node on Axis & Vertical Stem */}
                  <div className="relative flex flex-col items-center w-full">
                    {/* Grey Horizontal Axis Line passing directly behind center of orange node */}
                    <div className="absolute top-[7px] left-0 right-0 h-px bg-zinc-800 z-0" />

                    {/* Orange Node Marker */}
                    <div className="w-3.5 h-3.5 bg-zinc-950 border-2 border-orange-500 z-10 relative group-hover:bg-orange-500 transition-colors" />
                    {/* Seamless Vertical Connector Stem touching card top border */}
                    <div className="w-px h-6 bg-orange-500/80 z-0" />
                  </div>

                  {/* Event Card Box - Standardized Fixed Height with Internal Scroll */}
                  <article className="w-full border border-zinc-800 bg-zinc-950 p-4 sm:p-5 space-y-2.5 hover:border-zinc-700 transition-colors h-[270px] sm:h-[300px] flex flex-col justify-between border-t-2 border-t-orange-500 overflow-hidden">
                    <header className="space-y-1 border-b border-zinc-800 pb-2 w-full flex-shrink-0">
                      <h4 className="text-sm sm:text-base font-semibold text-white leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-mono text-zinc-400">
                        {item.companyOrInstitution}
                      </p>
                    </header>

                    {item.description && (
                      <div className="flex-1 overflow-y-auto max-h-[170px] sm:max-h-[190px] pr-1.5 space-y-1.5 text-[11px] sm:text-xs text-zinc-300 font-normal leading-relaxed">
                        <ul className="space-y-1.5">
                          {item.description.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-1.5">
                              <span className="text-orange-500 font-mono text-[10px] mt-0.5 flex-shrink-0">▪</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.details && (
                      <div className="flex-1 overflow-y-auto max-h-[170px] sm:max-h-[190px] pr-1">
                        <p className="text-[11px] sm:text-xs text-zinc-300 font-normal leading-relaxed">
                          {item.details}
                        </p>
                      </div>
                    )}
                  </article>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
