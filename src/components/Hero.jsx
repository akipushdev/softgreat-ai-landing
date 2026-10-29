import React from 'react';
import SftgLogo from './SftgLogo';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-28 md:pt-48 md:pb-36 min-h-[580px] overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6">
      {/* Декоративное мягкое радиальное свечение */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/[0.04] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Компактный маркер позиционирования */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/80 uppercase tracking-widest mb-8">
          <SftgLogo className="w-4 h-4" glow={false} />
          <span>SFTG AI · Промышленный B2B-контур</span>
        </div>

        {/* Главный заголовок H1 — широкий, горизонтальный, чистый */}
        <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] mb-8">
          <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Автоматизация бизнес-процессов с помощью прикладного ИИ
          </span>
        </h1>

        {/* Подзаголовок: 3 ключевых действия и срок запуска */}
        <div className="max-w-3xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed font-sans space-y-2.5">
          <p className="text-zinc-200 font-medium">
            Настраиваем и донастраиваем инфраструктуру 1С и Битрикс24.
          </p>
          <p className="text-zinc-300">
            Интегрируем автономных агентов поверх выстроенных бизнес-процессов компании.
          </p>
          <p className="text-zinc-400">
            Работаем через штатные API: убираем ручной ввод первички, ускоряем расценку смет и подключаем ассистентов к базам данных.
          </p>
          <p className="text-sky-300 font-medium text-sm sm:text-base pt-2">
            Запуск первого рабочего модуля — от 14 до 30 дней.
          </p>
        </div>
      </div>
    </section>
  );
}
