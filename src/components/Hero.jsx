import React from 'react';
import SftgLogo from './SftgLogo';
import { FileSpreadsheet, Calculator, Bot, Truck, ScanLine } from 'lucide-react';

const CAPABILITY_CHIPS = [
  {
    id: 'c-1c',
    icon: FileSpreadsheet,
    label: '1С: Первичка',
    detail: 'Без ручного ввода',
    cardHover: 'hover:border-amber-500/40 hover:bg-amber-950/15 hover:shadow-[0_0_20px_rgba(245,158,11,0.12)]',
    iconBox: 'bg-amber-400/[0.06] border-amber-400/20 text-amber-400/80 group-hover:text-amber-300 group-hover:border-amber-400/50 group-hover:bg-amber-400/15',
    detailHover: 'group-hover:text-amber-300/90',
  },
  {
    id: 'c-est',
    icon: Calculator,
    label: 'Сметы и КП',
    detail: 'Расчёт за минуты',
    cardHover: 'hover:border-emerald-500/40 hover:bg-emerald-950/15 hover:shadow-[0_0_20px_rgba(52,211,153,0.12)]',
    iconBox: 'bg-emerald-400/[0.06] border-emerald-400/20 text-emerald-400/80 group-hover:text-emerald-300 group-hover:border-emerald-400/50 group-hover:bg-emerald-400/15',
    detailHover: 'group-hover:text-emerald-300/90',
  },
  {
    id: 'c-sup',
    icon: Bot,
    label: 'Саппорт 24/7',
    detail: 'Диалог с клиентами',
    cardHover: 'hover:border-sky-500/40 hover:bg-sky-950/15 hover:shadow-[0_0_20px_rgba(56,189,248,0.12)]',
    iconBox: 'bg-sky-400/[0.06] border-sky-400/20 text-sky-400/80 group-hover:text-sky-300 group-hover:border-sky-400/50 group-hover:bg-sky-400/15',
    detailHover: 'group-hover:text-sky-300/90',
  },
  {
    id: 'c-log',
    icon: Truck,
    label: 'Логистика',
    detail: 'Контроль рейсов',
    cardHover: 'hover:border-indigo-500/40 hover:bg-indigo-950/15 hover:shadow-[0_0_20px_rgba(129,140,248,0.12)]',
    iconBox: 'bg-indigo-400/[0.06] border-indigo-400/20 text-indigo-400/80 group-hover:text-indigo-300 group-hover:border-indigo-400/50 group-hover:bg-indigo-400/15',
    detailHover: 'group-hover:text-indigo-300/90',
  },
  {
    id: 'c-vis',
    icon: ScanLine,
    label: 'Vision сканер',
    detail: 'Контроль и автоматизация на производстве',
    cardHover: 'hover:border-rose-500/40 hover:bg-rose-950/15 hover:shadow-[0_0_20px_rgba(244,63,94,0.12)]',
    iconBox: 'bg-rose-400/[0.06] border-rose-400/20 text-rose-400/80 group-hover:text-rose-300 group-hover:border-rose-400/50 group-hover:bg-rose-400/15',
    detailHover: 'group-hover:text-rose-300/90',
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
                  className={`group flex flex-col items-center justify-center text-center p-3 sm:py-3.5 sm:px-2 rounded-md bg-[#060910]/75 border border-white/[0.08] ${chip.cardHover} transition-all duration-300 cursor-default`}
                >
                  {/* Иконка в ламповом стиле с подсветкой при наведении на блок */}
                  <div className={`w-6 h-6 rounded border flex items-center justify-center mb-2 transition-all duration-300 ${chip.iconBox}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Название — спокойный приглушённый моно-шрифт */}
                  <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-zinc-300/85 uppercase group-hover:text-zinc-100 transition-colors">
                    {chip.label}
                  </span>

                  {/* Подзаголовок-выгода — подсвечивается смысловым цветом */}
                  <span className={`text-[9.5px] sm:text-[10px] font-mono text-zinc-300/90 tracking-wide mt-1 uppercase leading-tight ${chip.detailHover} transition-colors`}>
                    {chip.detail}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Срок запуска — зелёный инженерный статус запуска */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-xs sm:text-sm font-mono text-emerald-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span>Запуск первого рабочего модуля — от 14 до 30 дней</span>
        </div>
      </div>
    </section>
  );
}
