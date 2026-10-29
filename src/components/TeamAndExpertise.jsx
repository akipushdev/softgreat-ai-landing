import React from 'react';
import {
  Database,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  RefreshCw,
  Lock,
  Layers,
  Terminal,
  Sparkles,
  UserCheck
} from 'lucide-react';
import SftgLogo from './SftgLogo';
import engineerContactImg from '../assets/images/engineer_contact.jpg';

export default function TeamAndExpertise() {
  const advantages = [
    {
      icon: <Database className="w-5 h-5 text-sky-400" />,
      title: 'Архитектура enterprise-уровня от HighLoad-инженеров',
      desc: 'В команде опытные разработчики стабильных корпоративных платформ. Проектируем систему так, как строятся надежные сервисы: строгая модульность, документированные контракты API и готовность к росту нагрузки в 5–10 раз.'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      title: 'Код, который легко поддерживать, развивать и передавать',
      desc: 'Никаких самодельных нечитаемых скриптов и привязки к одному исполнителю (без vendor-lock). Чистая архитектура с открытой документацией: ваши штатные программисты 1С и системные администраторы смогут сопровождать её сами.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: 'Экономия бюджета за счёт программной обвязки (AI Harnesses)',
      desc: '«Сырые» запросы к нейросетям сжигают бюджет. Мы строим специализированную инженерную обвязку (harnesses): локальную валидацию, кэширование и точечный роутинг моделей, сокращая расходы на токены и сервера в разы.'
    }
  ];

  const competencies = [
    {
      icon: <Layers className="w-5 h-5 text-white" />,
      title: 'Глубокая интеграция с 1С и Битрикс24',
      desc: 'Понимаем структуру регистров, бизнес-процессы CRM и типовые конфигурации. Встраиваемся в привычные интерфейсы сотрудников без конфликтов обмена.'
    },
    {
      icon: <Terminal className="w-5 h-5 text-white" />,
      title: 'Опыт стабильных высоконагруженных систем',
      desc: 'Проектирование отказоустойчивых корпоративных сервисов, очередей сообщений и закрытых контуров, работающих годами без сбоев.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white" />,
      title: 'Сопровождение, докручивание и развитие',
      desc: 'Не бросаем проект после запуска: берем на себя мониторинг доступности, дообучение моделей при изменении номенклатуры и регулярную калибровку точности.'
    }
  ];

  const guarantees = [
    {
      icon: <Headphones className="w-4 h-4 text-emerald-400" />,
      title: '30 дней поддержки и докручивания после запуска',
      desc: 'Калибровка точности на реальном потоке данных, обучение сотрудников работе с системой и бесплатные правки кода.'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      title: '6 месяцев официальной гарантии',
      desc: 'Гарантийные обязательства по официальному договору на весь переданный программный код и интеграционные модули.'
    },
    {
      icon: <RefreshCw className="w-4 h-4 text-emerald-400" />,
      title: 'Внедрение без остановки процессов (Zero Downtime)',
      desc: 'Параллельное подключение через официальные API к боевой 1С и Битрикс24, текущая работа отделов компании не прерывается.'
    },
    {
      icon: <Lock className="w-4 h-4 text-emerald-400" />,
      title: 'Безопасность данных (152-ФЗ РФ и 99-З РБ)',
      desc: 'Локальный закрытый контур On-Premise на серверах заказчика либо автоматическая надежная деперсонализация данных перед обработкой.'
    }
  ];

  return (
    <section id="team" className="py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      {/* Заголовок секции */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
          Инженерный фундамент
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          От корпоративных решений до прикладных ИИ-агентов
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 font-normal text-pretty">
          В нашей команде — разработчики стабильных высоконагруженных enterprise-систем. Проектируем архитектуру, которую легко развивать, содержать и при необходимости передать вашей штатной ИТ-команде.
        </p>
      </div>

      {/* Премиальный блок: Прямой диалог с опытными разработчиками архитектуры */}
      <div className="mb-20 rounded-3xl bg-[#0D0F14]/90 border border-white/[0.1] overflow-hidden p-6 sm:p-8 lg:p-10 shadow-2xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Левая колонка — Фото инженера за мониторами */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] max-h-[460px] w-full">
              <img
                src={engineerContactImg}
                alt="Инженерная команда SFTG AI за проектированием архитектуры"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

              {/* Бейдж сверху: статус контура */}
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Архитектурный контур SFTG
              </div>

              {/* Информационный лейбл снизу */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <SftgLogo className="w-4 h-4" glow={false} />
                  Инженерная команда SFTG AI
                </div>
                <div className="text-xs text-zinc-400 mt-0.5 font-sans">
                  Ведущие системные архитекторы и разработчики интеграций
                </div>
              </div>
            </div>
          </div>

          {/* Правая колонка — Прямой диалог с опытными разработчиками */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-4 w-fit">
              Прямой контакт
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Прямой диалог с ведущими разработчиками архитектуры
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal font-sans">
              На консультации вы общаетесь напрямую с системными инженерами, которые проектируют структуры 1С, шины API и локальные модели.
            </p>

            {/* 3 пункта преимуществ */}
            <div className="space-y-4">
              {advantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0 mt-0.5">
                    {adv.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {adv.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Триединство компетенций (3 большие карточки) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {competencies.map((comp, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-[#090d14] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              {comp.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              {comp.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal font-sans">
              {comp.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 4 твёрдые гарантии внедрения */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#080c14] border border-white/[0.08]">
        <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-6 text-center sm:text-left font-mono">
          Спокойные гарантии для руководства компании:
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <span className="text-sm font-bold text-white">{item.title}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
