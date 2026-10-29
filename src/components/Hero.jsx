import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SftgLogo from './SftgLogo';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden flex flex-col items-center text-center px-4 sm:px-6">
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

        {/* Подзаголовок: разбивка на 3 удобные строчки */}
        <div className="max-w-3xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-10 font-sans space-y-2">
          <p className="text-zinc-200 font-medium">
            Интегрируем автономных агентов поверх выстроенной инфраструктуры 1С и Битрикс24.
          </p>
          <p className="text-zinc-400">
            Работаем через штатные API: убираем ручной ввод первички, ускоряем расценку смет и подключаем ассистентов к базам данных.
          </p>
          <p className="text-sky-300 font-medium text-sm sm:text-base">
            Запуск первого рабочего модуля — от 14 до 30 дней.
          </p>
        </div>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#lead-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-300 active:scale-[0.98] shadow-lg shadow-white/5"
          >
            <span>Заказать консультацию</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#automation-examples"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-medium text-zinc-300 bg-[#090d14] border border-white/10 hover:bg-[#121927] hover:text-white transition-all duration-300 active:scale-[0.98]"
          >
            <span>Примеры решений</span>
            <ChevronDown className="w-4 h-4 text-zinc-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
