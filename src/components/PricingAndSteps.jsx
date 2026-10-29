import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingAndSteps() {
  const steps = [
    {
      num: '01',
      title: 'Экспресс-разбор (30 минут)',
      desc: 'Вы показываете на экране ваш процесс в 1С или Excel. Мы за полчаса определяем узкое место с максимальной окупаемостью.'
    },
    {
      num: '02',
      title: 'Рабочий прототип (10–14 дней)',
      desc: 'Запускаем прототип на ваших обезличенных данных: вы вживую видите, как ИИ разбирает ваш скан или считает смету.'
    },
    {
      num: '03',
      title: 'Штатная интеграция (от 7 дней)',
      desc: 'Подключаем систему к 1С и Битрикс24 по официальным API. Работа компании не останавливается ни на минуту.'
    },
    {
      num: '04',
      title: 'Обучение и сдача под ключ',
      desc: 'Обучаем сотрудников работе в 1 клик, передаем документацию и переходим на гарантийное сервисное сопровождение.'
    }
  ];

  const packages = [
    {
      title: 'Быстрый старт / Пилот',
      tag: 'Для быстрого тестирования',
      price: 'от 190 000 ₽',
      altPrice: 'от 6 500 BYN',
      duration: 'Срок запуска: 10–14 дней',
      desc: 'Автоматизация одного конкретного узкого процесса (например: только ввод первички в 1С или умный бот квалификации заявок).',
      features: [
        '1 прикладной ИИ-модуль',
        'Интеграция с 1С или Битрикс24',
        'Слой маскирования персональных данных',
        'Окупаемость в первый месяц за счет экономии часов',
        '1 месяц бесплатной поддержки'
      ],
      highlight: false
    },
    {
      title: 'Прикладной модуль под ключ',
      tag: 'Популярный выбор для отделов',
      price: 'от 590 000 ₽',
      altPrice: 'от 19 000 BYN',
      duration: 'Срок запуска: 3–4 недели',
      desc: 'Комплексное решение для подразделения: расценка смет и спецификаций, речевая аналитика 100% звонков или складской Vision AI.',
      features: [
        'Полноценный модуль для отдела компании',
        'Двусторонний обмен с 1С:ERP и Битрикс24',
        'Индивидуальная адаптация под регламенты',
        'Обучение сотрудников и регламенты работы',
        '3 месяца гарантийного обслуживания'
      ],
      highlight: true
    },
    {
      title: 'Корпоративный контур',
      tag: 'Для крупных предприятий',
      price: 'от 1 500 000 ₽',
      altPrice: 'от 49 000 BYN',
      duration: 'Срок запуска: от 6 недель',
      desc: 'Сквозная связка нескольких подразделений (1С + Битрикс24 + Склад/Цех) с локальным суверенным развёртыванием.',
      features: [
        '100% On-Premise контур на серверах заказчика',
        'Суверенные модели (Qwen 2.5 / Llama 3.3)',
        'Сквозная связка: Первичка ➔ Сметы ➔ Цех ➔ CRM',
        'Полное соответствие 152-ФЗ РФ и 99-З РБ',
        'Персональный SLA и техподдержка 24/7'
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* ЧАСТЬ 1: 4 ПРОСТЫХ ШАГА */}
      <div className="mb-24">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
            Прозрачный процесс
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Как мы работаем: 4 шага от звонка до запуска
          </h2>
          <p className="max-w-xl text-base text-zinc-400 font-normal">
            Вам не нужно писать сложные технические задания или нанимать разработчиков в штат.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-mono font-bold text-zinc-600 block mb-3">
                  {step.num}
                </span>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ЧАСТЬ 2: ТАРИФНЫЕ ПАКЕТЫ */}
      <div>
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
            Ценовые ориентиры
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Прозрачные бюджеты без скрытых платежей
          </h2>
          <p className="max-w-xl text-base text-zinc-400 font-normal">
            Точную смету фиксируем на этапе 30-минутного технического аудита до заключения договора.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlight
                  ? 'bg-[#141414] border-2 border-white/40 shadow-2xl shadow-white/5'
                  : 'bg-[#0F0F0F] border border-white/[0.08]'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-wider">
                  Рекомендуемый выбор
                </div>
              )}

              <div>
                <div className="text-xs text-zinc-400 font-medium mb-1">
                  {pkg.tag}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {pkg.title}
                </h3>

                {/* Цена */}
                <div className="mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-zinc-400 block mt-1 font-mono">
                    {pkg.altPrice}
                  </span>
                </div>

                <div className="text-xs font-semibold text-emerald-400 mb-6">
                  {pkg.duration}
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed pb-6 border-b border-white/[0.08] mb-6">
                  {pkg.desc}
                </p>

                {/* Список фич */}
                <ul className="flex flex-col gap-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Кнопка тарифа */}
              <a
                href="#lead-form"
                className={`w-full py-3.5 px-5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] ${
                  pkg.highlight
                    ? 'bg-white text-black hover:bg-zinc-200 shadow-md shadow-white/10'
                    : 'bg-[#1A1A1A] text-white border border-white/[0.1] hover:bg-white hover:text-black'
                }`}
              >
                <span>Выбрать этот тариф</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Сноска о сопровождении */}
        <div className="mt-8 text-center text-xs text-zinc-400">
          Сервисное сопровождение и дообучение моделей: от 30 000 ₽ / 1 000 BYN в месяц.
        </div>
      </div>
    </section>
  );
}
