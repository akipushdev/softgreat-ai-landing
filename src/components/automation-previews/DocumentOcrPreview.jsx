import React from 'react';
import { FileText, CheckCircle2, ShieldCheck, Database, ArrowRight } from 'lucide-react';

export default function DocumentOcrPreview() {
  return (
    <div className="flex flex-col gap-4 text-xs font-mono">
      {/* 1. Верхняя панель: статус и таймер */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-sans font-medium text-sm">Обработка первички в 1С:Бухгалтерия</span>
        </div>
        <div className="flex items-center gap-2 text-white/50">
          <span>OData v4 REST</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-sans">0.18 сек</span>
        </div>
      </div>

      {/* 2. Скан документа со штампом и OCR-рамками */}
      <div className="relative rounded-lg bg-[#0e131f] border border-white/10 p-3.5 overflow-hidden">
        {/* Водяной знак синей печати */}
        <div className="absolute right-4 top-3 w-20 h-20 rounded-full border-2 border-indigo-400/30 flex items-center justify-center rotate-[-15deg] pointer-events-none">
          <div className="w-16 h-16 rounded-full border border-dashed border-indigo-400/20 flex items-center justify-center text-[7px] text-center text-indigo-300/40 font-sans uppercase">
            СЕВЕРТРАНС<br />ДЛЯ ДОКУМЕНТОВ
          </div>
        </div>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-white/80 font-sans font-medium">
            <FileText className="w-4 h-4 text-sky-400" />
            <span>УПД_№482_ООО_СеверТранс_со_штампом.pdf</span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
            OCR: 100% точность
          </span>
        </div>

        {/* Распознанные поля в документе с Bounding Boxes */}
        <div className="space-y-1.5 mt-3">
          <div className="p-1.5 rounded bg-white/[0.03] border border-sky-500/30 flex justify-between items-center">
            <span className="text-white/40">Контрагент:</span>
            <span className="text-white/90">ООО «СеверТрансЛогистик» (ИНН 7724918231)</span>
          </div>
          <div className="p-1.5 rounded bg-white/[0.03] border border-sky-500/30 flex justify-between items-center">
            <span className="text-white/40">Документ / Дата:</span>
            <span className="text-white/90">УПД № 482 от 14.10.2026</span>
          </div>
          <div className="p-1.5 rounded bg-white/[0.03] border border-emerald-500/30 flex justify-between items-center">
            <span className="text-white/40">Сумма документа:</span>
            <span className="text-emerald-400 font-bold">1 482 600,00 ₽ (НДС 20% включен)</span>
          </div>
        </div>
      </div>

      {/* Стрелка перехода в учетную систему */}
      <div className="flex items-center justify-center gap-2 py-1 text-white/40 text-[11px] font-sans">
        <ArrowRight className="w-3.5 h-3.5 text-sky-400 rotate-90 sm:rotate-0" />
        <span>Мгновенная валидация по справочнику номенклатуры НСИ 1С</span>
      </div>

      {/* 3. Карточка созданного документа в 1С:Предприятие 8.3 */}
      <div className="rounded-lg bg-[#111827] border border-emerald-500/30 p-3.5 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px]">
              1С
            </div>
            <span className="text-white font-sans font-semibold text-xs">1С:Предприятие 8.3 · Поступление товаров</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-sans font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Проведено в учёте
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1 font-sans text-[11px]">
          <div className="p-2 rounded bg-black/40 border border-white/5">
            <div className="text-white/40 text-[10px]">Номер проводки</div>
            <div className="text-white font-mono font-medium mt-0.5">ПР-00482/26</div>
          </div>
          <div className="p-2 rounded bg-black/40 border border-white/5">
            <div className="text-white/40 text-[10px]">Сверка номенклатуры</div>
            <div className="text-emerald-400 font-mono font-medium mt-0.5">14 из 14 (100%)</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] pt-1 text-white/70 font-sans border-t border-white/5">
          <span className="flex items-center gap-1 text-sky-300">
            <Database className="w-3.5 h-3.5" /> Сделка #9412 в Битрикс24
          </span>
          <span className="text-white/50">Статус: «Счёт проведён»</span>
        </div>
      </div>
    </div>
  );
}
