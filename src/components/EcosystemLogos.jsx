import React from 'react';

// Чистые векторные SVG-логотипы корпоративных платформ и технологий
export default function EcosystemLogos() {
  const ecosystems = [
    {
      name: '1С:Предприятие',
      role: 'ERP, УТ, БП, УНФ, OData',
      color: 'hover:text-[#FBBF24] hover:border-[#FBBF24]/30 hover:bg-[#FBBF24]/5',
      glow: 'group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]',
      svg: (
        <svg viewBox="0 0 48 32" className="h-6 w-auto transition-transform duration-300" fill="currentColor">
          {/* Фирменный овал 1С */}
          <ellipse cx="24" cy="16" rx="22" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path
            d="M17.5 10v12h3V10h-3zm6.5 0v3.5c1.2-1.2 2.8-1.8 4.5-1.8 3.5 0 6 2.4 6 6.3 0 4-2.5 6.3-6 6.3-1.8 0-3.3-.6-4.5-1.8V22h-3V10h3zm0 8c0 2.2 1.5 3.8 3.5 3.8s3.5-1.6 3.5-3.8-1.5-3.8-3.5-3.8-3.5 1.6-3.5 3.8z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: 'Битрикс24',
      role: 'CRM, Чат-боты и Воронка сделок',
      color: 'hover:text-[#2FC6F6] hover:border-[#2FC6F6]/30 hover:bg-[#2FC6F6]/5',
      glow: 'group-hover:shadow-[0_0_20px_rgba(47,198,246,0.15)]',
      svg: (
        <svg viewBox="0 0 36 36" className="h-6 w-auto transition-transform duration-300" fill="currentColor">
          {/* Фирменный знак Битрикс24: 3 пересекающихся круга */}
          <circle cx="12" cy="14" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="24" cy="14" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="18" cy="23" r="7" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.85" />
        </svg>
      ),
    },
    {
      name: 'Telegram / MAX',
      role: 'Бизнес-боты, ассистенты, полевой контроль',
      color: 'hover:text-[#229ED9] hover:border-[#229ED9]/30 hover:bg-[#229ED9]/5',
      glow: 'group-hover:shadow-[0_0_20px_rgba(34,158,217,0.15)]',
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-auto transition-transform duration-300" fill="currentColor">
          {/* Бумажный самолетик Telegram */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.37.08 0 .27.02.39.12.1.08.13.2.14.28-.01.07-.01.21-.03.47z" />
        </svg>
      ),
    },
    {
      name: 'МойСклад',
      role: 'Торговый и складской учёт',
      color: 'hover:text-[#00AEEF] hover:border-[#00AEEF]/30 hover:bg-[#00AEEF]/5',
      glow: 'group-hover:shadow-[0_0_20px_rgba(0,174,239,0.15)]',
      svg: (
        <svg viewBox="0 0 32 32" className="h-6 w-auto transition-transform duration-300" fill="currentColor">
          {/* Изометрические кубы МойСклад */}
          <path d="M16 2l12 7v14l-12 7-12-7V9l12-7z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M16 2v14l12 7M16 16L4 23" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'PostgreSQL',
      role: 'Корпоративные СУБД и pgvector',
      color: 'hover:text-[#336791] hover:border-[#336791]/30 hover:bg-[#336791]/5',
      glow: 'group-hover:shadow-[0_0_20px_rgba(51,103,145,0.2)]',
      svg: (
        <svg viewBox="0 0 32 32" className="h-6 w-auto transition-transform duration-300" fill="currentColor">
          {/* Слон PostgreSQL */}
          <path d="M16 4C9.4 4 4 9.4 4 16c0 4.2 2.2 7.9 5.5 10 .4-.6.9-1.2 1.4-1.7-.5-1.1-.9-2.3-.9-3.6 0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.3-.4 2.5-.9 3.6.5.5 1 1.1 1.4 1.7 3.3-2.1 5.5-5.8 5.5-10 0-6.6-5.4-12-12-12zm-3.5 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          <path d="M16 19c-1.7 0-3 1.3-3 3 0 2 1.3 4 3 6 1.7-2 3-4 3-6 0-1.7-1.3-3-3-3z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: 'Python',
      role: 'LangChain, vLLM, FastEmbed',
      color: 'hover:text-[#38BDF8] hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/5',
      glow: 'group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]',
      svg: (
        <svg viewBox="0 0 24 24" className="h-6 w-auto transition-transform duration-300" fill="currentColor">
          {/* Две переплетенные змеи Python */}
          <path d="M11.91 2c-3.1 0-5.08.3-5.08 2.05v2.33h5.2v.78H4.72C2.65 7.16 2 8.7 2 11.83c0 3.12.7 4.7 2.72 4.7h1.61v-2.25c0-1.8 1.48-3.32 3.32-3.32h5.13c1.5 0 2.7-1.22 2.7-2.73V4.05C17.48 2.3 15.01 2 11.91 2zM9.54 3.7c.5 0 .91.41.91.91s-.41.91-.91.91-.91-.41-.91-.91.41-.91.91-.91zm2.55 18.3c3.1 0 5.08-.3 5.08-2.05v-2.33h-5.2v-.78h7.31c2.07 0 2.72-1.54 2.72-4.67 0-3.12-.7-4.7-2.72-4.7h-1.61v2.25c0 1.8-1.48 3.32-3.32 3.32H9.22c-1.5 0-2.7 1.22-2.7 2.73v4.18c0 1.75 2.47 2.05 5.57 2.05zm2.37-1.7c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91z" />
        </svg>
      ),
    },
    {
      name: 'Docker / Linux',
      role: 'Изолированный On-Premise контур',
      color: 'hover:text-[#0EA5E9] hover:border-[#0EA5E9]/30 hover:bg-[#0EA5E9]/5',
      glow: 'group-hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]',
      svg: (
        <svg viewBox="0 0 32 32" className="h-6 w-auto transition-transform duration-300" fill="currentColor">
          {/* Кит Docker с контейнерами */}
          <path d="M4 18c.5-4 4-6 9-6h15c0 6-5 11-13 11-6.5 0-10.5-3.5-11-5z" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 8h3v3H8zm4 0h3v3h-3zm4 0h3v3h-3zm-4-4h3v3h-3zm4 0h3v3h-3z" fill="currentColor" />
          <path d="M28 17c1.5-1.5 2-3.5 1-5-1.5 0-2.5 1-3.5 2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative z-10 py-12 px-4 sm:px-6 max-w-7xl mx-auto border-b border-white/[0.08]">
      <div className="flex flex-col items-center">
        {/* Поясняющая надпись */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
            Штатная интеграция через OData и REST API без изменения ядра конфигураций
          </span>
        </div>

        {/* Сетка логотипов */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {ecosystems.map((eco, idx) => (
            <div
              key={idx}
              className={`group flex flex-col items-center justify-center p-4 rounded-xl bg-[#090d14]/80 border border-white/[0.08] text-zinc-400 transition-all duration-300 hover:scale-[1.03] ${eco.color} ${eco.glow} cursor-default`}
            >
              <div className="mb-2 text-current flex items-center justify-center h-8">
                {eco.svg}
              </div>
              <div className="text-xs font-bold text-white group-hover:text-current transition-colors text-center">
                {eco.name}
              </div>
              <div className="text-[10px] text-zinc-400 group-hover:text-zinc-300 transition-colors text-center mt-0.5 font-sans leading-tight">
                {eco.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
