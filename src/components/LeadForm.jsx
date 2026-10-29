import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lock, Send } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    software: '1С:Предприятие'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const tgLink = "https://t.me/yurasvidersky?text=Здравствуйте!%20Хочу%20проконсультироваться%20по%20автоматизации%20процессов%20(1С%20/%20Битрикс24)";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Имитация отправки заявки
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="lead-form" className="py-24 md:py-32 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/[0.08] relative z-10">
      <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0c1017] border border-white/10 shadow-2xl relative">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300 uppercase tracking-wider mb-4">
            Прямой контакт с разработчиками
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Заказать бесплатную 30-минутную консультацию
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal font-sans">
            Разберём 1 конкретный процесс компании, покажем живой экран с работающей системой под аналогичную задачу и рассчитаем срок запуска.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-[#141414] border border-emerald-500/30 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Заявка успешно принята
            </h3>
            <p className="text-sm text-zinc-400 max-w-md font-sans mb-4">
              Специалист свяжется с вами в течение 2 рабочих часов для согласования удобного времени онлайн-встречи.
            </p>
            <a
              href={tgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 hover:bg-sky-500/30 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Написать в Telegram @yurasvidersky для быстрого ответа</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
            {/* Имя */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5 font-sans">
                Ваше имя *
              </label>
              <input
                type="text"
                required
                placeholder="Алексей"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#131924] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Контакт: Телефон или Telegram */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5 font-sans">
                Телефон или Telegram *
              </label>
              <input
                type="text"
                required
                placeholder="+7 (999) 000-00-00 или @username"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#131924] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Корпоративная почта */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5 font-sans">
                Рабочий e-mail
              </label>
              <input
                type="email"
                placeholder="alex@company.ru"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#131924] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>

            {/* Используемый софт */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5 font-sans">
                Текущий софт компании
              </label>
              <select
                value={formData.software}
                onChange={(e) => setFormData({ ...formData, software: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#131924] border border-white/10 text-sm text-white focus:outline-none focus:border-white/30 transition-colors font-sans"
              >
                <option value="1С:Предприятие">1С:Предприятие (УТ / ERP / Бухгалтерия)</option>
                <option value="Битрикс24">Битрикс24 (CRM / Задачи)</option>
                <option value="1С + Битрикс24">Связка 1С + Битрикс24</option>
                <option value="МойСклад">МойСклад</option>
                <option value="Своя ERP / Другой софт">Своя ERP / Другой софт</option>
              </select>
            </div>

            {/* Кнопка отправки формы */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3.5 px-6 rounded-xl text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-white/5 disabled:opacity-50"
            >
              {loading ? (
                <span>Отправка данных...</span>
              ) : (
                <>
                  <span>Заказать консультацию</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Разделитель "или" */}
            <div className="flex items-center gap-3 my-1">
              <div className="h-[1px] bg-white/10 flex-1" />
              <span className="text-xs text-zinc-500 font-sans uppercase tracking-wider">или быстрее</span>
              <div className="h-[1px] bg-white/10 flex-1" />
            </div>

            {/* Прямой Telegram контакт */}
            <a
              href={tgLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 rounded-xl text-xs font-semibold bg-[#111c2e] border border-sky-500/30 text-sky-300 hover:bg-[#182842] hover:border-sky-400/50 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Написать напрямую в Telegram (@yurasvidersky)</span>
            </a>
          </form>
        )}
      </div>
    </section>
  );
}
