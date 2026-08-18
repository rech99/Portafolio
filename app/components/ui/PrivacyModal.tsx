'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key and prevent background scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[85vh] bg-zinc-950 border border-zinc-800 shadow-2xl flex flex-col overflow-hidden text-zinc-300 font-mono"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-zinc-800/80 bg-zinc-900/60 flex items-start justify-between gap-4">
          <div>
            <div className="inline-block px-2 py-0.5 text-[10px] text-zinc-400 bg-zinc-800 border border-zinc-700/60 uppercase tracking-widest mb-2 font-mono">
              {t.privacyModal.badge}
            </div>
            <h2 id="privacy-modal-title" className="text-base sm:text-lg font-bold text-white tracking-wide">
              {t.privacyModal.title}
            </h2>
            <p className="text-[11px] text-zinc-500 mt-0.5">
              {t.privacyModal.lastUpdated}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label={t.privacyModal.close}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-colors flex items-center justify-center cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-[13px] leading-relaxed text-zinc-300">
          {t.privacyModal.sections.map((section, idx) => (
            <div key={idx} className="space-y-1.5 pb-4 border-b border-zinc-900 last:border-b-0 last:pb-0">
              <h3 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                {section.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-[12px] leading-normal font-sans">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="p-3.5 sm:p-4 border-t border-zinc-800/80 bg-zinc-900/60 flex items-center justify-end gap-3 text-xs">
          <a
            href="mailto:rech_99@hotmail.com"
            className="text-zinc-400 hover:text-white transition-colors truncate max-w-[200px] sm:max-w-none text-[11px]"
          >
            rech_99@hotmail.com ↗
          </a>
        </div>
      </div>
    </div>
  );
}
