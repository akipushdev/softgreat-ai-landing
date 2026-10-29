import React, { useState } from 'react';
import { scenariosData } from '../data/scenariosData';
import { 
  FileText, MessageSquare, Table, Eye, Play, CheckCircle2, 
  ArrowRight, ShieldCheck, Database, Cpu, ExternalLink, RefreshCw 
} from 'lucide-react';

export default function InteractiveSimulator() {
  const [activeTab, setActiveTab] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [completed, setCompleted] = useState(true);

  const currentScenario = scenariosData[activeTab];

  const handleTabChange = (index) => {
    setActiveTab(index);
    setCompleted(true);
    setIsProcessing(false);
  };

  const handleRunProcessing = () => {
    setIsProcessing(true);
    setCompleted(false);
    setTimeout(() => {
      setIsProcessing(false);
      setCompleted(true);
    }, 1200);
  };

  const getTabIcon = (id) => {
    switch (id) {
      case 'pervichka': return <FileText className="w-4 h-4" />;
      case 'salesbot': return <MessageSquare className="w-4 h-4" />;
      case 'smeta': return <Table className="w-4 h-4" />;
      case 'vision': return <Eye className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <section id="simulator" className="py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Заголовок секции */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
          Интерактивный симулятор
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Как по шагам автоматизируется процесс
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 font-normal text-pretty">
          Выберите сценарий ниже и посмотрите, как входные неструктурированные данные превращаются в готовую проводку 1С или сделку в Битрикс24.
        </p>
      </div>

      {/* Переключатели вкладок */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {scenariosData.map((scenario, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={scenario.id}
              onClick={() => handleTabChange(index)}
              className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${
                isActive
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'bg-[#141414] text-zinc-400 border border-white/[0.06] hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              {getTabIcon(scenario.id)}
              <span>{scenario.tabName}</span>
            </button>
          );
        })}
      </div>

      {/* Сплит-контейнер: Пульт слева, Схема и Результат справа */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ЛЕВАЯ КОЛОНКА (5 колонок) — Пульт управления и Входные данные */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/[0.08] shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                {currentScenario.badge}
              </span>
              <span className="text-xs text-zinc-500 font-mono">Шаг 1 из 3: Входные данные</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-3">
              {currentScenario.title}
            </h3>

            <p className="text-xs text-zinc-400 font-medium mb-3">
              {currentScenario.inputLabel}
            </p>

            {/* Карточка входящего файла/запроса */}
            <div className="p-4 rounded-xl bg-[#171717] border border-white/[0.06] mb-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300">
                  {getTabIcon(currentScenario.id)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white truncate">
                    {currentScenario.inputSample.name}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {currentScenario.inputSample.size}
                  </div>
                </div>
              </div>

              {/* Детали образца */}
              <div className="mt-4 pt-3 border-t border-white/[0.05] flex flex-col gap-2">
                {currentScenario.inputSample.previewDetails.map((detail, idx) => (
                  <div key={idx} className="flex flex-col text-xs">
                    <span className="text-zinc-500 font-medium">{detail.key}:</span>
                    <span className="text-zinc-300 font-normal mt-0.5">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Кнопка запуска ИИ-обработки */}
            <button
              onClick={handleRunProcessing}
              disabled={isProcessing}
              className={`w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${
                isProcessing
                  ? 'bg-zinc-800 text-zinc-400 cursor-wait'
                  : 'bg-white text-black hover:bg-zinc-200 shadow-md shadow-white/5'
              }`}
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-zinc-400" />
                  <span>Идёт обработка данных...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-black" />
                  <span>Запустить симуляцию ИИ-обработки</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА (7 колонок) — Живая схема и Результат */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/[0.08] shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                Шаг 2 и 3: Поток обработки и результат
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                {isProcessing ? 'Шина активна...' : 'Готово'}
              </span>
            </div>

            {/* Интерактивная схема цепочки данных (Living Circuit) */}
            <div className="p-4 rounded-xl bg-[#141414] border border-white/[0.06] mb-6">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                
                {/* Узел 1 */}
                <div className={`p-3 rounded-lg border transition-all duration-300 ${
                  isProcessing 
                    ? 'border-blue-500/40 bg-blue-500/10 text-blue-300' 
                    : 'border-white/[0.08] bg-[#1A1A1A] text-zinc-300'
                }`}>
                  <ShieldCheck className="w-4 h-4 mx-auto mb-1.5 text-zinc-400" />
                  <span className="font-semibold block">1. Маскирование PII</span>
                  <span className="text-[10px] text-zinc-500">Защита контура</span>
                </div>

                {/* Узел 2 */}
                <div className={`p-3 rounded-lg border transition-all duration-300 ${
                  isProcessing 
                    ? 'border-blue-500/60 bg-blue-500/20 text-white animate-pulse' 
                    : 'border-white/[0.08] bg-[#1A1A1A] text-zinc-300'
                }`}>
                  <Cpu className="w-4 h-4 mx-auto mb-1.5 text-zinc-400" />
                  <span className="font-semibold block">2. ИИ-Ядро</span>
                  <span className="text-[10px] text-zinc-500">Нормализация НСИ</span>
                </div>

                {/* Узел 3 */}
                <div className={`p-3 rounded-lg border transition-all duration-300 ${
                  completed && !isProcessing
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' 
                    : 'border-white/[0.08] bg-[#1A1A1A] text-zinc-300'
                }`}>
                  <Database className="w-4 h-4 mx-auto mb-1.5 text-zinc-400" />
                  <span className="font-semibold block">3. 1С & Битрикс24</span>
                  <span className="text-[10px] text-zinc-500">OData проводка</span>
                </div>
              </div>
            </div>

            {/* Карточка финального результата */}
            <div className="p-5 rounded-xl bg-[#171717] border border-white/[0.08]">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.06] mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-sm font-bold text-white">
                    {currentScenario.output.title}
                  </span>
                </div>
                <div className="text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  Время: {currentScenario.output.timeTaken}
                </div>
              </div>

              {/* Поля результата */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {currentScenario.output.fields.map((field, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#111111] border border-white/[0.04]">
                    <div className="text-[11px] text-zinc-400 font-medium">
                      {field.label}
                    </div>
                    <div className="text-xs font-semibold text-zinc-200 mt-0.5">
                      {field.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Уведомление / Бизнес-исход */}
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{currentScenario.output.notice}</span>
              </div>

              {/* Кнопка внешнего боевого стенда (для Vision AI подбора деталей) */}
              {currentScenario.output.isLiveDemo && (
                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <a
                    href={currentScenario.output.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-md"
                  >
                    <span>Протестировать боевой стенд Vision AI вживую</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
