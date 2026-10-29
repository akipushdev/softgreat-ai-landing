import React from 'react';

/**
 * Фирменный микропроцессорный логотип SFTG AI (соответствует фавикону)
 */
export default function SftgLogo({ className = "w-8 h-8", glow = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      {glow && (
        <div className="absolute inset-0 bg-sky-500/20 blur-[6px] rounded-lg -z-10 pointer-events-none" />
      )}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Внешний корпус микрочипа (Dark Matte Package) */}
        <rect
          x="8"
          y="8"
          width="48"
          height="48"
          rx="12"
          fill="#05080E"
          stroke="#1E293B"
          strokeWidth="2"
        />

        {/* Металлические контакты чипа (Gold & Cyan Pins) */}
        {/* Верхние и нижние контакты */}
        <path
          d="M18 4v4M26 4v4M34 4v4M42 4v4M18 56v4M26 56v4M34 56v4M42 56v4"
          stroke="#38BDF8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Боковые контакты */}
        <path
          d="M4 18h4M4 26h4M4 34h4M4 42h4M56 18h4M56 26h4M56 34h4M56 42h4"
          stroke="#38BDF8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Внутренний кристалл процессора (Silicon Die) */}
        <rect
          x="16"
          y="16"
          width="32"
          height="32"
          rx="6"
          fill="#0B1322"
          stroke="#0284C7"
          strokeWidth="1.5"
        />

        {/* Дорожки печатной платы (PCB Traces 45°) */}
        <path
          d="M22 22l6 6h8l6-6M22 42l6-6h8l6 6"
          stroke="#0284C7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Центральный нейронный узел ядра SFTG */}
        <circle cx="32" cy="32" r="5" fill="#38BDF8" />
        <circle cx="32" cy="32" r="2.2" fill="#FFFFFF" />

        {/* Контактные площадки (Vias) */}
        <circle cx="22" cy="22" r="1.8" fill="#38BDF8" />
        <circle cx="42" cy="22" r="1.8" fill="#38BDF8" />
        <circle cx="22" cy="42" r="1.8" fill="#38BDF8" />
        <circle cx="42" cy="42" r="1.8" fill="#38BDF8" />
      </svg>
    </div>
  );
}
