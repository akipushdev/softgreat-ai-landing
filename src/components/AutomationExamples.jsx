import React, { useState } from 'react';
import { FileText, MessageSquare, Table, Camera, Truck, ShieldCheck, Zap } from 'lucide-react';
import DocumentOcrPreview from './automation-previews/DocumentOcrPreview';
import TelegramChatPreview from './automation-previews/TelegramChatPreview';
import EstimateTablePreview from './automation-previews/EstimateTablePreview';
import VisionScannerPreview from './automation-previews/VisionScannerPreview';
import LogisticsTrackingPreview from './automation-previews/LogisticsTrackingPreview';

export default function AutomationExamples() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'pervichka',
      icon: FileText,
      badge: 'Бухгалтерия и Снабжение',
      title: 'Разбор накладной со штампом в 1С',
      steps: [
        'Оптическая фильтрация и выравнивание геометрии скана',
        'Автоматическая анонимизация персональных данных',
        'Извлечение таблицы номенклатуры, ставок НДС и сумм',
        'Нормализация кодов по справочнику номенклатуры 1С',
        'Формирование документа через штатный OData API',
      ],
      component: <DocumentOcrPreview />,
    },
    {
      id: 'salesbot',
      icon: MessageSquare,
      badge: 'Отдел продаж и CRM',
      title: 'Квалификация ночного лида в Telegram / MAX',
      steps: [
        'Семантическое распознавание технических параметров',
        'Проверка складских остатков в 1С в реальном времени',
        'Мгновенный аргументированный ответ на естественном языке',
        'Автоматическое создание сделки и контакта в Битрикс24 CRM',
      ],
      component: <TelegramChatPreview />,
    },
    {
      id: 'smeta',
      icon: Table,
      badge: 'Снабжение и Опт',
      title: 'Авто-расценка сметы на 300 строк',
      steps: [
        'Нормализация номенклатурного справочника НСИ',
        'Параллельный опрос прайс-листов 5 ключевых поставщиков',
        'Подбор аналогов по техническим характеристикам ГОСТ',
        'Расчет оптимальной маржинальности и формирование КП',
      ],
      component: <EstimateTablePreview />,
    },
    {
      id: 'vision',
      icon: Camera,
      badge: 'Склад и Комплектующие',
      title: 'Vision AI: подбор деталей по фото',
      steps: [
        'Компьютерное зрение анализирует геометрию и межосевые расстояния',
        'Векторный поиск по 3D-моделям и фотокаталогу деталей',
        'Проверка кросс-номеров и наличия в ячейках склада 1С',
        'Возможность проверки на действующем стенде',
      ],
      component: <VisionScannerPreview />,
    },
    {
      id: 'logistics',
      icon: Truck,
      badge: 'Логистика и Доставка',
      title: 'Авто-трекинг рейса в Telegram / MAX',
      steps: [
        'Приём входящего запроса по номеру рейса или накладной',
        'Запрос телематики Wialon и статуса рейса из 1C:TMS',
        'Прогноз расчётного времени прибытия (ETA) по дорожной ситуации',
        'Телеметрия датчиков рефрижератора (температурный режим)',
        'Мгновенная выдача отчёта клиенту без звонка диспетчеру',
      ],
      component: <LogisticsTrackingPreview />,
    },
  ];

  const current = tabs[activeTab];

  return (
    <section id="automation-examples" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c1017] border border-white/10 text-white/70 text-xs font-mono uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            Инженерная практика в реальном контуре
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Примеры автоматизации
          </h2>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed font-sans">
            Выберите задачу и посмотрите, как алгоритм обрабатывает входящие данные, связывается с 1С и передает результат в CRM без ручного труда сотрудников.
          </p>
        </div>

        {/* Сетка: Слева переключатели и шаги, Справа интерактивный UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Левая колонка: Табы и шаги */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2.5">
              {tabs.map((tab, idx) => {
                const Icon = tab.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? 'bg-[#121927] border-sky-400/40 text-white shadow-xl shadow-sky-950/20'
                        : 'bg-[#090d14] border-white/10 text-white/60 hover:bg-[#0e1420] hover:text-white/90 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-sky-500/20 text-sky-400 border border-sky-400/30'
                            : 'bg-white/5 text-white/40'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                          {tab.badge}
                        </div>
                        <div className="text-sm font-semibold text-white/95">
                          {tab.title}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Шаги обработки текущего сценария */}
            <div className="p-5 rounded-2xl bg-[#090d14] border border-white/10 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Что происходит под капотом:
              </div>
              <ul className="space-y-2 font-sans text-xs text-white/70">
                {current.steps.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-white/10 text-white/80 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Правая колонка: Динамический макет реального интерфейса */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-[#080c14] p-5 sm:p-6 shadow-2xl transition-all duration-300">
              {current.component}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
