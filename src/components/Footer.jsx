import React from 'react';
import { ShieldCheck, Send } from 'lucide-react';
import SftgLogo from './SftgLogo';

export default function Footer() {
  const tgLink = "https://t.me/yurasvidersky?text=Здравствуйте!%20Хочу%20проконсультироваться%20по%20автоматизации%20процессов%20(1С%20/%20Битрикс24)";

  return (
    <footer className="border-t border-white/[0.08] bg-[#05080e] py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
        
        {/* Бренд */}
        <div className="flex flex-col gap-2 max-w-sm">
          <div className="flex items-center gap-2.5">
            <SftgLogo className="w-7 h-7" />
            <span className="text-base font-bold tracking-tight text-white">
              SFTG <span className="text-zinc-400 font-medium">AI</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed mt-1 font-sans">
            Промышленная автоматизация и прикладные ИИ-агенты для 1С, Битрикс24 и корпоративных систем.
          </p>
        </div>

        {/* Навигация и контакты */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-400">
          <a href="#automation-examples" className="hover:text-white transition-colors">Примеры автоматизации</a>
          <a href="#solutions" className="hover:text-white transition-colors">Решения</a>
          <a href="#diagnostics" className="hover:text-white transition-colors">Диагностика процессов</a>
          <a href="#pricing" className="hover:text-white transition-colors">Цены и гарантии</a>
          <a
            href={tgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-semibold transition-colors"
          >
            <Send className="w-3 h-3" />
            <span>Telegram @yurasvidersky</span>
          </a>
        </div>
      </div>

      {/* Копирайт и законодательство */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-sans">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span>Обработка данных в соответствии с 152-ФЗ РФ и 99-З РБ. Конфиденциальность гарантируется договором.</span>
        </div>
        <div>
          © {new Date().getFullYear()} SFTG AI. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
