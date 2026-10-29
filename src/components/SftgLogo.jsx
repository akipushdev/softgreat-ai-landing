import React from 'react';

/**
 * Натуральный промышленный микропроцессор SFTG AI (Realistic Silicon Package)
 * Металлический корпус, золотые/серебряные выводы (pins), лазерная гравировка SFTG
 */
export default function SftgLogo({ className = "w-8 h-8", glow = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className} group`}>
      {glow && (
        <div className="absolute inset-0 bg-sky-500/15 blur-[6px] rounded-md -z-10 pointer-events-none group-hover:bg-sky-500/25 transition-all duration-300" />
      )}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
      >
        <defs>
          {/* Градиент металлической окантовки кристалла */}
          <linearGradient id="sftgMetalBorder" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#1E293B" />
            <stop offset="1" stopColor="#0EA5E9" stopOpacity="0.6" />
          </linearGradient>

          {/* Градиент матового керамического корпуса */}
          <linearGradient id="sftgChipBody" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B111A" />
            <stop offset="1" stopColor="#04060A" />
          </linearGradient>

          {/* Металлический теплораспределитель (Heat spreader) */}
          <linearGradient id="sftgDieGlow" x1="16" y1="16" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#111B2B" />
            <stop offset="1" stopColor="#070C15" />
          </linearGradient>
        </defs>

        {/* 1. Металлические контакты чипа (Lead Pins - QFP Package) */}
        {/* Верхние выводы */}
        <path d="M16 2v6M22 2v6M28 2v6M34 2v6M40 2v6M46 2v6" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
        {/* Нижние выводы */}
        <path d="M16 56v6M22 56v6M28 56v6M34 56v6M40 56v6M46 56v6" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
        {/* Левые выводы */}
        <path d="M2 16h6M2 22h6M2 28h6M2 34h6M2 40h6M2 46h6" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
        {/* Правые выводы */}
        <path d="M56 16h6M56 22h6M56 28h6M56 34h6M56 40h6M56 46h6" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />

        {/* 2. Керамический матовый корпус микросхемы со скошенными фасками */}
        <rect
          x="7"
          y="7"
          width="50"
          height="50"
          rx="5"
          fill="url(#sftgChipBody)"
          stroke="#1E293B"
          strokeWidth="1.2"
        />

        {/* 3. Внутренний металлический теплораспределитель (Lid / Silicon Die) */}
        <rect
          x="13"
          y="13"
          width="38"
          height="38"
          rx="3.5"
          fill="url(#sftgDieGlow)"
          stroke="url(#sftgMetalBorder)"
          strokeWidth="1"
        />

        {/* Угловые винты/крепления подложки */}
        <circle cx="11" cy="11" r="1.2" fill="#38BDF8" opacity="0.7" />
        <circle cx="53" cy="11" r="1.2" fill="#38BDF8" opacity="0.7" />
        <circle cx="11" cy="53" r="1.2" fill="#38BDF8" opacity="0.7" />
        <circle cx="53" cy="53" r="1.2" fill="#38BDF8" opacity="0.7" />

        {/* Ключ 1-й ножки (Pin 1 Index Notch) */}
        <circle cx="17" cy="17" r="1.5" fill="#38BDF8" />

        {/* 4. Натуральная лазерная гравировка SFTG (Laser-etched branding) */}
        <text
          x="32"
          y="34"
          fill="#FFFFFF"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="10"
          letterSpacing="0.08em"
          textAnchor="middle"
        >
          SFTG
        </text>

        {/* Техническая маркировка чипа под логотипом */}
        <text
          x="32"
          y="43"
          fill="#38BDF8"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="5.2"
          letterSpacing="0.12em"
          textAnchor="middle"
          opacity="0.9"
        >
          AI · BPU
        </text>
      </svg>
    </div>
  );
}
