import React from 'react';
import SftgLogo from './SftgLogo';
import { FileSpreadsheet, Calculator, Bot, Truck, ScanLine } from 'lucide-react';

const CAPABILITY_CHIPS = [
  {
    id: 'c-1c',
    icon: FileSpreadsheet,
    label: '1С: Первичка',
    detail: 'Без ручного ввода',
  },
  {
    id: 'c-est',
    icon: Calculator,
    label: 'Сметы и КП',
    detail: 'Расчёт за минуты',
  },
  {
    id: 'c-sup',
    icon: Bot,
    label: 'Саппорт 24/7',
    detail: 'Диалог с клиентами',
  },
  {
    id: 'c-log',
    icon: Truck,
    label: 'Логистика',
    detail: 'Контроль рейсов',
  },
  {
    id: 'c-vis',
    icon: ScanLine,
    label: 'Vision сканер',
    detail: 'Контроль деталей',
  },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 min-h-[560px] overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6">
      {/* Декоративное мягкое радиальное свечение */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/[0.04] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Компактный маркер позиционирования */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/80 uppercase tracking-widest mb-6">
          <SftgLogo className="w-4 h-4" glow={false} />
          <span>SFTG AI · Промышленный B2B-контур</span>
        </div>

        {/* Главный заголовок H1 — широкий, горизонтальный, чистый */}
        <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] mb-6">
          <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Автоматизация бизнес-процессов с помощью прикладного ИИ
          </span>
        </h1>

        {/* Двухуровневый технологический стек */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base text-zinc-300 font-normal mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>Настраиваем и донастраиваем контур 1С и Битрикс24</span>
          </div>
          <span className="hidden sm:inline text-zinc-600 font-mono">→</span>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-zinc-200">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <span>Интегрируем автономных ИИ-агентов под задачи компании</span>
          </div>
        </div>

        {/* Модульные блоки ключевых внедрений в стиле 1С / Битрикс24 / Telegram */}
        <div className="w-full max-w-4xl mx-auto mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 justify-center">
            {CAPABILITY_CHIPS.map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.id}
                  className="group flex flex-col items-center justify-center text-center p-3 sm:py-3.5 sm:px-2 rounded-md bg-[#070a10]/90 border border-slate-700/60 hover:border-sky-400/80 hover:bg-[#0a101d] transition-all duration-300 shadow-sm hover:shadow-[0_0_16px_rgba(56,189,248,0.15)] cursor-default"
                >
                  {/* Иконка в синем стиле */}
                  <div className="w-6 h-6 rounded bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-2 group-hover:border-sky-400 group-hover:bg-sky-500/20 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.35)] transition-all">
                    <Icon className="w-3.5 h-3.5 text-sky-400" />
                  </div>

                  {/* Название */}
                  <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-slate-100 uppercase">
                    {chip.label}
                  </span>

                  {/* Подзаголовок-выгода в синем моно-стиле */}
                  <span className="text-[9.5px] sm:text-[10px] font-mono text-sky-400/90 tracking-wide mt-1 uppercase">
                    {chip.detail}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Срок запуска */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/40 border border-sky-800/40 text-xs sm:text-sm font-mono text-sky-300">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>Запуск первого рабочего модуля — от 14 до 30 дней</span>
        </div>
      </div>
    </section>
  );
}
