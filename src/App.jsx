import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import EcosystemLogos from './components/EcosystemLogos';
import MicroprocessorCanvas from './components/MicroprocessorCanvas';
import TaglineReveal from './components/TaglineReveal';
import AutomationExamples from './components/AutomationExamples';
import SolutionsCatalog from './components/SolutionsCatalog';
import ArchitectureFlow from './components/ArchitectureFlow';
import ProcessAudit from './components/ProcessAudit';
import TeamAndExpertise from './components/TeamAndExpertise';
import PricingAndSteps from './components/PricingAndSteps';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import engineerContactImg from './assets/images/engineer_contact.jpg';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030508] text-white selection:bg-sky-500/30 selection:text-white">
      {/* Атмосферная подложка: силуэт программиста за мониторами в глубине всего сайта */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-[0.09] filter contrast-125 brightness-70 mix-blend-luminosity"
          style={{ backgroundImage: `url(${engineerContactImg})` }}
        />
        {/* Радиальный и вертикальный градиенты для мягкого рассеивания */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030508] via-transparent to-[#030508]" />
      </div>

      {/* Живой интерактивный Canvas-фон: печатная плата и микропроцессор */}
      <MicroprocessorCanvas />

      {/* Плавающая навигация */}
      <Header />

      {/* Основной контент */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Главный экран (Hero) */}
        <Hero />

        {/* 2. Траст-бар со стеком и надежностью */}
        <TrustBar />

        {/* 3. Полоса логотипов поддерживаемых корпоративных экосистем (1С, Битрикс24, Telegram/MAX, МойСклад, PostgreSQL, Python, Docker) */}
        <EcosystemLogos />

        {/* 4. Манифест надёжности (Tagline Reveal) */}
        <TaglineReveal />

        {/* 5. Примеры автоматизации (4 специализированных интерактивных интерфейса) */}
        <AutomationExamples />

        {/* 6. Каталог 15 прикладных решений по 4 контурам с графическими мини-модулями */}
        <SolutionsCatalog />

        {/* 7. Наглядная архитектурная схема бесшовного подключения в 4 шага */}
        <ArchitectureFlow />

        {/* 8. Предпроектное обследование и диагностика точек потерь */}
        <ProcessAudit />

        {/* 9. Опыт команды и гарантии */}
        <TeamAndExpertise />

        {/* 10. 4 шага запуска и прозрачные цены */}
        <PricingAndSteps />

        {/* 11. Финальная форма захвата (Техническая консультация) */}
        <LeadForm />
      </main>

      {/* Подвал */}
      <Footer />
    </div>
  );
}
