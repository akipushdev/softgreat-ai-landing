import React from 'react';
import { Camera, Scan, CheckCircle2, ExternalLink, MapPin, Layers } from 'lucide-react';

export default function VisionScannerPreview() {
  return (
    <div className="flex flex-col gap-3 font-sans text-xs">
      {/* 1. Верхняя панель: камера и статус нейросетевого инференса */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-sky-400" />
          <span className="text-white font-medium text-xs">Промышленный Vision AI · Распознавание деталей</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 text-[11px] font-mono">
            Edge CV · 2.8 сек
          </span>
        </div>
      </div>

      {/* 2. Видоискатель камеры с координатной сеткой и рамкой захвата */}
      <div className="relative rounded-lg bg-[#070b12] border border-sky-500/30 p-4 overflow-hidden min-h-[190px] flex flex-col justify-between">
        {/* Координатная сетка видоискателя */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        {/* Угловые визиры промышленной оптики */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-sky-400" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-sky-400" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-sky-400" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-sky-400" />

        {/* Рамка распознанной детали (Bounding Box) */}
        <div className="relative z-10 m-auto w-full max-w-[320px] rounded border border-emerald-400/80 bg-emerald-950/20 p-3 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-black font-mono font-bold text-[9px] uppercase tracking-wide">
              MATCH: 98.4%
            </span>
            <span className="text-[10px] text-emerald-300 font-mono">
              Геометрия D-образная
            </span>
          </div>

          <div className="text-white font-semibold text-xs mb-0.5">
            Крышка Duroplast MK2 (микролифт)
          </div>
          <div className="text-white/60 text-[10px] font-mono">
            Артикул 1С: DVT-8492-MK2
          </div>
        </div>

        {/* Нижняя строчка параметров */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-white/50 pt-2 font-mono">
          <span>Разрешение: 1920x1080</span>
          <span>Межосевое: 155 мм (допуск ±1 мм)</span>
        </div>
      </div>

      {/* 3. Синхронизация с ячейкой на складе 1С */}
      <div className="p-3 rounded-lg bg-black/60 border border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Склад №2, ряд 4, ячейка B-12</span>
          </div>
          <div className="text-emerald-400 font-medium">
            Остаток в 1С: 18 шт. (2 450 ₽)
          </div>
        </div>

        {/* Кнопка на живой боевой стенд подбора деталей */}
        <a
          href="https://podbor-kryshek.apps.aipush.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-black font-semibold text-[11px] hover:bg-white/90 active:scale-[0.98] transition-all shadow-sm"
        >
          <span>Попробовать работающее приложение ↗</span>
        </a>
      </div>
    </div>
  );
}
