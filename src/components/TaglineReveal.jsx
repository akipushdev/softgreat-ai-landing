import React, { useEffect, useRef, useState } from 'react';

export default function TaglineReveal() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const text = "Встраиваем прикладной ИИ внутрь вашей 1С, CRM и цеха — убираем до 80% рутинных операций без остановки рабочих процессов компании";
  const words = text.split(" ");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Прогресс скролла: 0 когда блок входит снизу (на 85% экрана), 1 когда блок по центру
          const start = windowHeight * 0.85;
          const end = windowHeight * 0.25;
          const current = rect.top;
          
          let progress = (start - current) / (start - end);
          progress = Math.max(0, Math.min(1, progress));
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative py-28 md:py-40 px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center text-center justify-center"
    >
      {/* Декоративная тонкая вертикальная линия сверху */}
      <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/20 to-white/60 mb-12" />

      <div className="max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.25] text-balance">
          {words.map((word, index) => {
            // Расчет порога активации для каждого слова
            const wordThreshold = index / words.length;
            const isRevealed = scrollProgress >= wordThreshold;

            return (
              <span
                key={index}
                className={`inline-block mr-[0.3em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isRevealed
                    ? 'text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'text-zinc-600 opacity-30'
                }`}
              >
                {word}
              </span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}
