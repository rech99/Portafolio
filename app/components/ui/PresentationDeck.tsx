'use client';

import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PresentationDeckProps {
  slides: {
    id: string;
    label: string;
    component: ReactNode;
  }[];
  footer?: ReactNode;
}

export function PresentationDeck({ slides, footer }: PresentationDeckProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isDeckMode, setIsDeckMode] = useState(true);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setActiveIndex(index);
    }
  }, [slides.length]);

  // Dispatch custom event on active slide change so HUDNavigation and Navbar sync instantly
  useEffect(() => {
    const slideId = slides[activeIndex]?.id;
    if (slideId) {
      window.dispatchEvent(new CustomEvent('deck:slide-change', { detail: { id: slideId, index: activeIndex } }));
    }
  }, [activeIndex, slides]);


  // Wheel Event Handler for Deck Mode with Smart Inner Scroll Detection
  useEffect(() => {
    if (!isDeckMode) return;

    const isInsideScrollable = (target: HTMLElement | null): boolean => {
      let curr = target;
      while (curr && curr !== document.body && curr !== document.documentElement) {
        // Stop inspection if we reach the main presentation deck slide containers
        if (curr.hasAttribute('data-deck-container')) {
          break;
        }

        const style = window.getComputedStyle(curr);
        const overflowY = style.overflowY;
        const isScrollable = overflowY === 'auto' || overflowY === 'scroll';
        
        // While hovering over an inner scrollable card box, block section slide changes
        if (isScrollable && curr.scrollHeight > curr.clientHeight + 4) {
          return true;
        }
        curr = curr.parentElement;
      }
      return false;
    };


    const handleWheel = (e: WheelEvent) => {
      // Desktop only — on touch/mobile devices, navigation is via horizontal swipe
      if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

      const target = e.target as HTMLElement;
      if (isInsideScrollable(target)) {
        return;
      }

      e.preventDefault();
      if (isLocked) return;

      if (Math.abs(e.deltaY) > 20) {
        setIsLocked(true);
        if (e.deltaY > 0) {
          setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
        } else {
          setActiveIndex((prev) => Math.max(prev - 1, 0));
        }

        setTimeout(() => {
          setIsLocked(false);
        }, 750);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isDeckMode, isLocked, slides.length]);


  // Keyboard Navigation (Up / Down / Space)
  useEffect(() => {
    if (!isDeckMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', 'Space'].includes(e.code)) {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (['ArrowUp', 'PageUp'].includes(e.code)) {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDeckMode, slides.length]);

  // Horizontal Touch Swipe Support for Mobile Slide Transitions
  useEffect(() => {
    if (!isDeckMode) return;

    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diffX = touchStartX - touchEndX;

      // Horizontal Lateral Touch Swipe Gesture threshold (40px)
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          // Swipe Left -> Next Slide
          setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
        } else {
          // Swipe Right -> Previous Slide
          setActiveIndex((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDeckMode, slides.length]);




  // Listen for hash changes, click events, or custom deck:goto-slide events
  useEffect(() => {
    const handleGotoSlide = (e: Event) => {
      const customEv = e as CustomEvent;
      if (customEv.detail?.id) {
        const slideIdx = slides.findIndex((s) => s.id === customEv.detail.id);
        if (slideIdx !== -1) {
          goToSlide(slideIdx);
        }
      }
    };

    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const targetId = anchor.getAttribute('href')?.replace('#', '');
        const slideIdx = slides.findIndex((s) => s.id === targetId);
        if (slideIdx !== -1) {
          e.preventDefault();
          goToSlide(slideIdx);
        }
      }
    };

    window.addEventListener('deck:goto-slide', handleGotoSlide);
    document.addEventListener('click', handleHashClick);
    return () => {
      window.removeEventListener('deck:goto-slide', handleGotoSlide);
      document.removeEventListener('click', handleHashClick);
    };
  }, [goToSlide, slides]);


  return (
    <div className="relative w-full">
      {isDeckMode ? (
        <>
          {/* ── DESKTOP: fixed full-screen deck ─────────────────────── */}
          <div
            data-deck-container="true"
            className="hidden md:flex fixed inset-0 top-16 w-full h-[calc(100dvh-4rem)] overflow-hidden bg-zinc-950 bg-grid-pattern flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[activeIndex].id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'transform, opacity', transform: 'translateZ(0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                className="w-full h-full flex flex-col justify-center items-center p-6"
              >
                <div
                  data-deck-container="true"
                  className="w-full max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center"
                >
                  {slides[activeIndex].component}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── MOBILE: natural scroll, no fixed heights, no dvh ────── */}
          <div className="md:hidden w-full max-w-full overflow-x-hidden bg-zinc-950 bg-grid-pattern pt-16 pb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[activeIndex].id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'transform, opacity' }}
                className="w-full max-w-full overflow-x-hidden px-4 sm:px-6"
              >
                {slides[activeIndex].component}
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      ) : (
        /* Continuous Scroll View Fallback */
        <div className="w-full">
          {slides.map((slide) => (
            <div key={slide.id}>{slide.component}</div>
          ))}
        </div>
      )}
    </div>
  );
}

