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

    const isInsideScrollable = (target: HTMLElement | null, deltaY: number): boolean => {
      let curr = target;
      while (curr && curr !== document.body && curr !== document.documentElement) {
        const style = window.getComputedStyle(curr);
        const overflowY = style.overflowY;
        const isScrollable = overflowY === 'auto' || overflowY === 'scroll';
        
        if (isScrollable && curr.scrollHeight > curr.clientHeight + 4) {
          if (deltaY > 0) {
            // Scrolling down: if container has scroll remaining, allow native hover scroll
            if (Math.ceil(curr.scrollTop + curr.clientHeight) < curr.scrollHeight - 2) {
              return true;
            }
          } else if (deltaY < 0) {
            // Scrolling up: if container is not at top, allow native hover scroll
            if (curr.scrollTop > 2) {
              return true;
            }
          }
        }
        curr = curr.parentElement;
      }
      return false;
    };


    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      if (isInsideScrollable(target, e.deltaY)) {
        // Allow inner scrollable container to scroll naturally!
        return;
      }

      e.preventDefault();
      if (isLocked) return;

      if (Math.abs(e.deltaY) > 20) {
        setIsLocked(true);
        if (e.deltaY > 0) {
          // Scroll Down -> Next Slide
          setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
        } else {
          // Scroll Up -> Previous Slide
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

  // Touch Swipe Support
  useEffect(() => {
    if (!isDeckMode) return;

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffY) > 50) {
        if (diffY > 0) {
          setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
        } else {
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
        /* Presentation Deck View - Scale & Reveal from Center with Safari Support */
        <div className="fixed inset-0 top-16 pb-12 w-full h-[calc(100vh-4rem)] h-[calc(100dvh-4rem)] overflow-hidden bg-zinc-950 bg-grid-pattern flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[activeIndex].id}
              initial={{
                opacity: 0,
                scale: 0.88,
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              }}
              exit={{
                opacity: 0,
                scale: 1.08,
                filter: 'blur(10px)',
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{ willChange: 'transform, opacity, filter' }}
              className="w-full h-full overflow-y-auto md:overflow-hidden flex flex-col justify-start md:justify-center items-center p-2 sm:p-4 md:p-6"
            >
              <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 my-auto h-auto md:h-[calc(100vh-8rem)] md:h-[calc(100dvh-8rem)] md:min-h-[500px] md:max-h-[640px] flex flex-col justify-center overflow-y-auto md:overflow-visible py-2 md:py-0">
                {slides[activeIndex].component}
              </div>



            </motion.div>
          </AnimatePresence>

          {/* Persistent Global Footer for All Sections */}
          {footer && (
            <div className="fixed bottom-0 left-0 right-0 z-40">
              {footer}
            </div>
          )}
        </div>
      ) : (



        /* Continuous Scroll View Fallback */
        <div className="w-full">
          {slides.map((slide) => (
            <div key={slide.id}>{slide.component}</div>
          ))}
          {footer}
        </div>
      )}
    </div>
  );
}
