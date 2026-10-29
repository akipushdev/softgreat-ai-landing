import React from 'react';
import { ArrowRight, BarChart3, Clock, Compass, Shield } from 'lucide-react';

export default function ProcessAudit() {
  const deliverables = [
    {
      icon: <Compass className="w-5 h-5 text-sky-400" />,
      title: 'Карта узких мест',
      desc: 'Наглядная схема операций, где ваши сотрудники тратят больше всего оплачиваемого времени на ручной ввод и сверку в 1С и Excel.'
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      title: 'Расчёт окупаемости в рублях',
      desc: 'Прозрачный финансовый прогноз до старта проекта: сколько компания сэкономит и заработает при автоматизации каждого участка.'
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      title: 'План быстрых побед (Quick Wins)',
      desc: 'Выделяем 1–2 процесса, которые можно автоматизировать за первые 10–14 дней с минимальным бюджетом для моментального эффекта.'
    },
    {
      icon: <Shield className="w-5 h-5 text-indigo-400" />,
      title: 'Выбор контура безопасности',
      desc: 'Внутренний закрытый контур (On-Premise) для конфиденциальных данных компании или быстрый гибридный контур с автоматической анонимизацией данных.'
    }
  ];

  return (
    <section id="diagnostics" className="py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto border-t border-white/[0.08] relative z-10">
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0c1017] border border-white/10 relative overflow-hidden">
        {/* Фоновое свечение */}
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/[0.03] rounded-full blur-[100px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Предпроектное обследование
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Диагностика процессов и точек потерь: считаем окупаемость до старта разработки
          </h2>
          <p className="text-base text-zinc-400 font-normal leading-relaxed font-sans">
            Инженеры-практики с реальным опытом внедрения 1С, Битрикс24 и прикладных ИИ-пайплайнов разбирают рутину ваших отделов, находят скрытые потери времени и формируют пошаговую дорожную карту.
          </p>
        </div>

        {/* Сетка 4 артефактов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliverables.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between hover:border-white/20 transition-all duration-200"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка записи */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <a
            href="#lead-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-300 active:scale-[0.98]"
          >
            <span>Заказать консультацию</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <span className="text-xs text-zinc-400 font-sans max-w-xl">
            Бесплатная 30-минутная онлайн-консультация: разбираем 1 конкретный процесс, показываем работающую систему и даем честный расчет сроков и бюджета.
          </span>
        </div>
      </div>
    </section>
  );
}
