import React from 'react';
import { ShieldCheck, Cpu, Database, CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
  const points = [
    {
      icon: Cpu,
      title: '15+ лет опыта разработки',
      desc: 'Высоконагруженные распределённые системы, B2B-платформы и интеграции.',
    },
    {
      icon: Database,
      title: 'Прямые API 1С и Битрикс24',
      desc: 'Работа через штатный OData и REST без ломки ядра и потери обновлений.',
    },
    {
      icon: ShieldCheck,
      title: 'Контур 152-ФЗ и 99-З РБ',
      desc: 'Передовые нейросети мирового уровня (DeepSeek-R1, Qwen 2.5, Llama 3.3) на ваших серверах или в Яндекс Облаке / Cloud.ru.',
    },
    {
      icon: CheckCircle2,
      title: 'Тестирование точности (Eval)',
      desc: 'Автоматические бенчмарки на ваших данных для 100% защиты от галлюцинаций.',
    },
  ];

  return (
    <div className="relative z-10 border-y border-white/10 bg-white/[0.015] backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((pt, idx) => {
          const Icon = pt.icon;
          return (
            <div key={idx} className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white/90">
                  {pt.title}
                </div>
                <div className="text-xs text-white/50 leading-relaxed mt-1 font-sans">
                  {pt.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
