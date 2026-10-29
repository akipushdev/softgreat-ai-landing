import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import SftgLogo from './SftgLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Примеры автоматизации', href: '#automation-examples' },
    { label: 'Решения', href: '#solutions' },
    { label: 'Диагностика', href: '#diagnostics' },
    { label: 'Стоимость', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto flex items-center justify-between gap-3 md:gap-6 px-5 py-3 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled 
            ? 'bg-[#0A0A0A]/90 border-white/[0.12] shadow-2xl shadow-black/80 backdrop-blur-xl' 
            : 'bg-[#12161f]/80 border-white/[0.08] backdrop-blur-md'
        }`}
      >
        {/* Логотип с процессором (соответствует фавикону) */}
        <a href="#" className="flex items-center gap-2.5 group">
          <SftgLogo className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-white leading-none">
              SFTG <span className="text-zinc-400 font-medium">AI</span>
            </span>
          </div>
        </a>

        {/* Десктоп навигация */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Кнопка действия */}
        <div className="flex items-center gap-2">
          <a
            href="#lead-form"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-300 active:scale-[0.98]"
          >
            <span>Заказать консультацию</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Мобильная кнопка меню */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Переключить меню"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Мобильное выпадающее меню */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 p-6 rounded-2xl bg-[#0c1017] border border-white/[0.1] shadow-2xl backdrop-blur-2xl flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-zinc-300 hover:text-white py-2 border-b border-white/[0.05]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#lead-form"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-all"
          >
            <span>Заказать консультацию</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
