'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function RetroComputer3D() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % t.skills.items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [t.skills.items.length]);

  return (
    <div className="flex justify-center items-center py-6">
      <div className="computer">
        {/* Monitor */}
        <div className="monitor">
          <div className="screen">
            <span className="tech-text">{t.skills.items[currentTech]}</span>
            <div className="scan-line"></div>
          </div>
          <div className="monitor-logo">◈</div>
        </div>

        {/* Stand */}
        <div className="stand"></div>

        {/* Base */}
        <div className="base"></div>

        {/* Keyboard */}
        <div className="keyboard">
          <div className="keys"></div>
        </div>
      </div>

      <style jsx>{`
        .computer {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Monitor */
        .monitor {
          width: 200px;
          height: 150px;
          background: linear-gradient(145deg, #d4d4d8, #a1a1aa);
          border-radius: 12px;
          padding: 14px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .screen {
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 50%, #0a0a15 100%);
          border-radius: 6px;
          border: 3px solid #2a2a3e;
          position: relative;
          overflow: hidden;
          box-shadow: 
            inset 0 0 30px rgba(0, 0, 0, 0.9),
            0 0 15px rgba(168, 85, 247, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .screen::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15) 0px,
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
        }

        .screen::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .tech-text {
          font-family: 'Courier New', monospace;
          font-size: 18px;
          font-weight: bold;
          color: #a855f7;
          text-shadow: 
            0 0 5px #a855f7,
            0 0 10px #a855f7,
            0 0 20px #7c3aed,
            0 0 40px #7c3aed;
          animation: flicker 0.1s infinite alternate;
          z-index: 2;
          letter-spacing: 1px;
        }

        @keyframes flicker {
          0% { opacity: 0.97; }
          100% { opacity: 1; }
        }

        .scan-line {
          position: absolute;
          width: 100%;
          height: 4px;
          background: linear-gradient(transparent, rgba(168, 85, 247, 0.2), transparent);
          animation: scan 3s linear infinite;
        }

        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }

        .monitor-logo {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          color: #71717a;
          font-weight: bold;
        }

        /* Stand */
        .stand {
          width: 40px;
          height: 20px;
          background: linear-gradient(180deg, #a1a1aa, #71717a);
          clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
        }

        /* Base */
        .base {
          width: 80px;
          height: 10px;
          background: linear-gradient(180deg, #d4d4d8, #a1a1aa);
          border-radius: 0 0 4px 4px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        /* Keyboard */
        .keyboard {
          width: 180px;
          height: 40px;
          background: linear-gradient(180deg, #e4e4e7, #d4d4d8);
          border-radius: 4px;
          margin-top: 15px;
          padding: 6px 8px;
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.3),
            inset 0 1px 2px rgba(255, 255, 255, 0.5);
        }

        .keys {
          width: 100%;
          height: 100%;
          background: 
            repeating-linear-gradient(
              90deg,
              #52525b 0px,
              #52525b 10px,
              #71717a 10px,
              #71717a 12px
            );
          border-radius: 2px;
          opacity: 0.3;
        }

        @media (max-width: 640px) {
          .monitor {
            width: 160px;
            height: 120px;
            padding: 10px;
          }

          .tech-text {
            font-size: 14px;
          }

          .keyboard {
            width: 140px;
            height: 30px;
          }
        }
      `}</style>
    </div>
  );
}
