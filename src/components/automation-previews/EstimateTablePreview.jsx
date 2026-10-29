import React from 'react';
import { Table, TrendingUp, Sparkles, Check, Download } from 'lucide-react';

export default function EstimateTablePreview() {
  const rows = [
    {
      name: 'Клапан КОП-1-НО-600х300',
      match: 'Аналог ГОСТ Р 53301 (КЛАП-М1)',
      basePrice: '24 500 ₽',
      bestPrice: '19 800 ₽',
      supplier: 'Поставщик №3 (ВентСнаб)',
      margin: '+19.2%',
    },
    {
      name: 'Воздуховод оцинк. 0.7 мм L=1250',
      match: 'Прямое совпадение спецификации',
      basePrice: '1 420 ₽/м',
      bestPrice: '1 180 ₽/м',
      supplier: 'Поставщик №1 (Завод МетВент)',
      margin: '+16.9%',
    },
    {
      name: 'Привод Belimo BLF230 (или аналог)',
      match: 'Подобран аналог Lufberg FS05',
      basePrice: '18 900 ₽',
      bestPrice: '14 200 ₽',
      supplier: 'Поставщик №5 (ПромПривод)',
      margin: '+24.8%',
    },
    {
      name: 'Диффузор вихревой ДКВ-160',
      match: 'Точный артикул Арктос',
      basePrice: '3 100 ₽',
      bestPrice: '2 750 ₽',
      supplier: 'Поставщик №2 (КлиматОпт)',
      margin: '+11.3%',
    },
  ];

  return (
    <div className="flex flex-col gap-3 font-sans text-xs">
      {/* 1. Верхняя панель: статус и оцифрованная экономия времени */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Table className="w-4 h-4 text-emerald-400" />
          <span className="text-white font-medium text-xs">Сводная ведомость расценки спецификации</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/40 text-[10px]">312 позиций по 5 прайсам</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-mono">
            8 минут (вместо 2 дней)
          </span>
        </div>
      </div>

      {/* 2. Спецификационная таблица с цветной маркировкой выгод */}
      <div className="overflow-x-auto rounded-lg border border-white/10 bg-[#0c1017]">
        <table className="w-full text-left border-collapse text-[11px]">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02] text-white/40 font-mono text-[10px]">
              <th className="p-2.5">Номенклатура ТЗ</th>
              <th className="p-2.5">Техническое соответствие</th>
              <th className="p-2.5">Закупка у поставщика</th>
              <th className="p-2.5 text-right">Маржа</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="p-2.5 font-medium text-white/90">
                  {row.name}
                </td>
                <td className="p-2.5 text-white/60 text-[10px]">
                  <span className="inline-flex items-center gap-1 text-sky-400/90">
                    <Sparkles className="w-2.5 h-2.5" /> {row.match}
                  </span>
                </td>
                <td className="p-2.5">
                  <div className="font-mono text-white/90">{row.bestPrice}</div>
                  <div className="text-[9px] text-white/40">{row.supplier}</div>
                </td>
                <td className="p-2.5 text-right font-mono font-bold text-emerald-400">
                  {row.margin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 3. Итоговые финансовые метрики и выгода компании */}
      <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-950/40 via-sky-950/20 to-black border border-emerald-500/30 flex flex-wrap items-center justify-between gap-3 text-[11px]">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-white/40 text-[10px] block">Экономия на закупке:</span>
            <span className="text-emerald-400 font-mono font-bold text-sm">-380 000 ₽</span>
          </div>
          <div className="h-7 w-[1px] bg-white/10" />
          <div>
            <span className="text-white/40 text-[10px] block">Маржинальный доход:</span>
            <span className="text-white font-mono font-bold text-sm">+620 000 ₽ (16.1%)</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500/20 text-emerald-300 font-medium text-[11px]">
          <Check className="w-3.5 h-3.5" /> КП сформировано для клиента
        </div>
      </div>
    </div>
  );
}
