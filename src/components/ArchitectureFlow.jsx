import React from 'react';
import { Database, ShieldCheck, ArrowRight, Lock, Server, Cloud, Clock } from 'lucide-react';

export default function ArchitectureFlow() {
  const steps = [
    {
      num: '01',
      title: 'Параллельное API-подключение',
      subtitle: 'Без изменения ядра и остановки процессов',
      badge: 'Zero Downtime',
      icon: Database,
      accent: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
      glow: 'shadow-[0_0_25px_rgba(56,189,248,0.12)]',
      features: [
        '1С:ERP, УТ, КА, БП и Битрикс24 CRM',
        'Штатное подключение через OData 4.0 и REST API',
        'Гарантия вендора, автообновления и рабочий процесс сохраняются',
      ],
    },
    {
      num: '02',
      title: 'Облачные LLM-сервисы',
      subtitle: 'Высокая скорость и оптимизация затрат',
      badge: 'Экономичный контур',
      icon: Cloud,
      accent: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
      glow: 'shadow-[0_0_25px_rgba(59,130,246,0.12)]',
      features: [
        'Интеграция с современными моделями (YandexGPT, GigaChat, API)',
        'Динамический роутинг задач под минимальную стоимость токенов',
        'Предварительная деперсонализация и маскирование коммерческих данных',
      ],
    },
    {
      num: '03',
      title: 'Внутренний закрытый контур',
      subtitle: '100% On-Premise на ваших серверах',
      badge: '152-ФЗ РФ и 99-З РБ',
      badgeHighlight: true,
      icon: ShieldCheck,
      accent: 'border-emerald-500/50 text-emerald-300 bg-emerald-500/20',
      glow: 'shadow-[0_0_35px_rgba(16,185,129,0.22)] border-emerald-500/30',
      features: [
        'Развёртывание локальных SOTA-моделей (DeepSeek-R1, Qwen 2.5, Llama 3.3) внутри периметра',
        'Полная изоляция от внешнего интернета и зарубежных облаков',
        '100% защита банковской, коммерческой тайны и персональных данных',
      ],
    },
    {
      num: '04',
      title: 'Инженерный SLA и поддержка 24/7',
      subtitle: 'Гарантированная надёжность и актуальность',
      badge: 'Сервисный контур',
      icon: Clock,
      accent: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
      glow: 'shadow-[0_0_25px_rgba(251,191,36,0.12)]',
      features: [
        'Непрерывный мониторинг очередей задач и времени отклика 24/7',
        'Дообучение моделей при изменении номенклатуры 1С и регламентов',
        'Регулярные обновления версий без простоя боевых баз данных',
      ],
    },
  ];

  return (
    <section id="architecture" className="py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Заголовок секции */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
          <Server className="w-3.5 h-3.5 text-sky-400" />
          Архитектурный контур
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Бесшовное подключение без остановки бизнес-процессов
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 font-normal text-pretty">
          Варианты интеграции, суверенный внутренний контур и инженерное сопровождение для действующей ИТ-инфраструктуры предприятия.
        </p>
      </div>

      {/* Пайплайн 4 шагов */}
      <div className="relative">
        {/* Горизонтальная направляющая линия (скрыта на мобильных) */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-sky-500/20 via-emerald-500/30 to-amber-500/20 -translate-y-12 z-0 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <div key={idx} className="flex flex-col">
                <div
                  className={`relative p-6 sm:p-7 rounded-2xl bg-[#0C0E14] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 flex-1 flex flex-col justify-between ${step.glow}`}
                >
                  {/* Верхняя строка: номер шага и бейдж */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-mono font-extrabold text-white/30 tracking-tight">
                        {step.num}
                      </span>
                      <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${
                        step.badgeHighlight 
                          ? 'border-emerald-400/80 bg-emerald-500/25 text-emerald-300 font-bold shadow-[0_0_14px_rgba(16,185,129,0.4)]'
                          : step.accent
                      }`}>
                        {step.badge}
                      </span>
                    </div>

                    {/* Иконка */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${step.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Заголовок и подзаголовок */}
                    <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                      {step.title}
                    </h3>
                    <div className="text-xs text-zinc-400 font-mono mb-4">
                      {step.subtitle}
                    </div>

                    {/* Список характеристик */}
                    <ul className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                      {step.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs leading-relaxed">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                            step.badgeHighlight ? 'bg-emerald-400' : 'bg-white/40'
                          }`} />
                          <span className={step.badgeHighlight && fIdx === 0 ? 'text-emerald-300 font-medium' : 'text-zinc-300'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Статус-бар внизу карточки */}
                  <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>КОНТУР 0{idx + 1}</span>
                    <span className="text-emerald-400/80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      АКТИВЕН
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Поясняющая инженерная сноска внизу схемы */}
      <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <span className="font-semibold text-white">Нулевой риск блокировки конфигурации:</span> обмен происходит исключительно через зарегистрированные сервисы OData и HTTPS REST API, ядро 1С не переписывается.
          </div>
        </div>
        <a
          href="#lead-form"
          className="shrink-0 text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors"
        >
          <span>Запросить аудит совместимости</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
