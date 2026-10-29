import React, { useEffect, useRef } from 'react';

/**
 * MicroprocessorCanvas — высокотехнологичный интерактивный фон печатной платы с кинематическим параллакс-скроллом.
 * 
 * Особенности:
 * - Топология многоуровневого ИИ-кластера:
 *   1) Эшелон 1 (Hero): Облачный стек (Яндекс GPT, Gemini, ChatGPT) + шлюзы 1С, Битрикс24, Telegram/MAX, МойСклад.
 *   2) Эшелон 2 (Решения/Архитектура): On-Premise контур (Qwen 2.5, Llama 3.3, 152-ФЗ/99-З), LoRA/QLoRA, RAG-поиск, Vision OCR.
 *   3) Эшелон 3 (Данные/Цены): PostgreSQL / pgvector и Python Core оркестратор.
 * - Мягкий параллакс: при вертикальном скролле плата смещается с демпфированием (0.32x), открывая разные уровни микросхем.
 * - Медленные волновые импульсы курсируют между процессорами и шлюзами.
 * - Оптимизация производительности: автоматический view-frustum culling (отсечение чипов и шин за пределами экрана).
 */
export default function MicroprocessorCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;

    // Кинематика скролла
    const scrollFactor = 0.32;
    let targetScrollY = window.scrollY * scrollFactor;
    let currentScrollY = targetScrollY;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    let traces = [];
    let vias = [];
    let chips = [];
    let pulses = [];

    const generateTopology = () => {
      traces = [];
      vias = [];
      chips = [];
      pulses = [];

      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1100;

      // Базовые габариты центральных процессоров
      const cpuW = isMobile ? Math.min(270, width * 0.86) : Math.min(310, width * 0.38);
      const cpuH = 145;
      const cpuX = width * 0.5 - cpuW / 2;

      // ==========================================
      // ЭШЕЛОН 1: Облачный стек и Входные шлюзы (Y ~ 180 - 600px)
      // ==========================================
      const cpu1Y = 240;

      chips.push({
        id: 'cloud-llm',
        x: cpuX,
        y: cpu1Y,
        w: cpuW,
        h: cpuH,
        label: 'ЯНДЕКС GPT / GEMINI / CHATGPT',
        sub: 'ОБЛАЧНЫЙ СТЕК LLM · БЫСТРЫЙ ОТКЛИК',
        icon: 'cpu',
        pins: isMobile ? 12 : 18,
      });

      if (!isMobile) {
        // Шлюз 1С:Предприятие (слева)
        chips.push({
          id: 'chip-1c',
          x: isTablet ? cpuX - 190 : cpuX - 240,
          y: cpu1Y - 40,
          w: isTablet ? 140 : 160,
          h: 80,
          label: '1С:ПРЕДПРИЯТИЕ',
          sub: 'ШЛЮЗ ODATA / REST',
          icon: '1c',
          pins: 10,
        });

        // Шлюз Битрикс24 (справа)
        chips.push({
          id: 'chip-b24',
          x: isTablet ? cpuX + cpuW + 50 : cpuX + cpuW + 80,
          y: cpu1Y - 40,
          w: isTablet ? 140 : 160,
          h: 80,
          label: 'БИТРИКС24 CRM',
          sub: 'ПРОЦЕССЫ И СДЕЛКИ',
          icon: 'crm',
          pins: 10,
        });

        // Telegram / MAX (слева снизу)
        chips.push({
          id: 'chip-tg',
          x: isTablet ? cpuX - 200 : cpuX - 250,
          y: cpu1Y + 120,
          w: isTablet ? 150 : 170,
          h: 80,
          label: 'TELEGRAM / MAX',
          sub: 'БОТЫ ЦЕХА И ВОДИТЕЛЕЙ',
          icon: 'bot',
          pins: 10,
        });

        // МойСклад (справа снизу)
        chips.push({
          id: 'chip-moysklad',
          x: isTablet ? cpuX + cpuW + 50 : cpuX + cpuW + 80,
          y: cpu1Y + 120,
          w: isTablet ? 150 : 165,
          h: 80,
          label: 'МОЙСКЛАД',
          sub: 'СКЛАДСКИЕ ОСТАТКИ',
          icon: 'stock',
          pins: 10,
        });
      }

      // ==========================================
      // ЭШЕЛОН 2: On-Premise контур и Тонкая настройка (Y ~ 1000 - 1600px)
      // ==========================================
      const cpu2Y = 1150;

      chips.push({
        id: 'onprem-llm',
        x: cpuX,
        y: cpu2Y,
        w: cpuW,
        h: cpuH + 10,
        label: 'ON-PREMISE LLM · QWEN / LLAMA',
        sub: 'ЛОКАЛЬНЫЙ КОНТУР · 152-ФЗ РФ И 99-З РБ',
        icon: 'shield-cpu',
        pins: isMobile ? 12 : 20,
      });

      if (!isMobile) {
        // LoRA / QLoRA адаптеры (слева)
        chips.push({
          id: 'chip-lora',
          x: isTablet ? cpuX - 190 : cpuX - 240,
          y: cpu2Y - 30,
          w: isTablet ? 145 : 170,
          h: 80,
          label: 'LORA / QLORA АДАПТЕРЫ',
          sub: 'ДОНАСТРОЙКА ВЕСОВ МОДЕЛЕЙ',
          icon: 'lora',
          pins: 10,
        });

        // RAG Модуль (справа)
        chips.push({
          id: 'chip-rag',
          x: isTablet ? cpuX + cpuW + 45 : cpuX + cpuW + 75,
          y: cpu2Y - 30,
          w: isTablet ? 150 : 180,
          h: 80,
          label: 'RAG МОДУЛЬ',
          sub: 'СЕМАНТИЧЕСКИЙ ПОИСК В БАЗЕ',
          icon: 'rag',
          pins: 10,
        });

        // Vision Сканер (слева ниже)
        chips.push({
          id: 'chip-vision',
          x: isTablet ? cpuX - 190 : cpuX - 230,
          y: cpu2Y + 140,
          w: isTablet ? 145 : 170,
          h: 80,
          label: 'VISION СКАНЕР',
          sub: 'ФОТОКОНТРОЛЬ ТТН И ПЕЧАТЕЙ',
          icon: 'scanner',
          pins: 10,
        });
      }

      // ==========================================
      // ЭШЕЛОН 3: База данных и Оркестрация (Y ~ 1900 - 2500px)
      // ==========================================
      const tier3Y = 2050;

      if (!isMobile) {
        // Векторная база данных PostgreSQL / pgvector
        chips.push({
          id: 'chip-postgres',
          x: cpuX - 50,
          y: tier3Y,
          w: isTablet ? 170 : 195,
          h: 85,
          label: 'ВЕКТОРНАЯ БАЗА ДАННЫХ',
          sub: 'POSTGRESQL · PGVECTOR',
          icon: 'db',
          pins: 12,
        });

        // Python Core Orchestrator
        chips.push({
          id: 'chip-python',
          x: cpuX + cpuW - (isTablet ? 120 : 145),
          y: tier3Y,
          w: isTablet ? 160 : 185,
          h: 85,
          label: 'PYTHON CORE API',
          sub: 'АСИНХРОННЫЕ АГЕНТЫ',
          icon: 'code',
          pins: 12,
        });
      } else {
        // Мобильный компактный чип БД внизу
        chips.push({
          id: 'chip-postgres-mob',
          x: cpuX,
          y: tier3Y,
          w: cpuW,
          h: 85,
          label: 'ВЕКТОРНАЯ БАЗА ДАННЫХ',
          sub: 'POSTGRESQL · PGVECTOR',
          icon: 'db',
          pins: 12,
        });
      }

      // ==========================================
      // ГЕНЕРАЦИЯ ШИН ДАННЫХ (Bus Lines)
      // ==========================================
      const busLines = [];

      // 1. Верхние шины от Cloud CPU к верхнему краю
      const numTop = isMobile ? 4 : Math.min(8, Math.floor(cpuW / 32));
      for (let i = 0; i < numTop; i++) {
        const startX = cpuX + 25 + i * ((cpuW - 50) / (numTop - 1));
        const midY = cpu1Y - 35 - (i % 3) * 16;
        const angleX = (i < numTop / 2 ? -1 : 1) * 30;
        busLines.push([
          { x: startX, y: cpu1Y },
          { x: startX, y: midY },
          { x: startX + angleX, y: midY - Math.abs(angleX) },
          { x: startX + angleX, y: 0 },
        ]);
      }

      // 2. Межпроцессорная магистраль (Связь Cloud CPU и On-Premise CPU)
      const numInter = isMobile ? 4 : 7;
      for (let i = 0; i < numInter; i++) {
        const startX = cpuX + 30 + i * ((cpuW - 60) / (numInter - 1));
        const midY1 = cpu1Y + cpuH + 40 + (i % 3) * 20;
        const midY2 = cpu2Y - 50 - (i % 3) * 20;
        const jog = (i % 2 === 0 ? 1 : -1) * 25;
        busLines.push([
          { x: startX, y: cpu1Y + cpuH },
          { x: startX, y: midY1 },
          { x: startX + jog, y: midY1 + Math.abs(jog) },
          { x: startX + jog, y: midY2 - Math.abs(jog) },
          { x: startX, y: midY2 },
          { x: startX, y: cpu2Y },
        ]);
      }

      // 3. Шины от On-Premise CPU к нижнему эшелону (БД и Python)
      const numDown = isMobile ? 4 : 6;
      for (let i = 0; i < numDown; i++) {
        const startX = cpuX + 35 + i * ((cpuW - 70) / (numDown - 1));
        const midY = cpu2Y + cpuH + 50 + (i % 3) * 25;
        const angleX = (i % 2 === 0 ? 1 : -1) * 35;
        busLines.push([
          { x: startX, y: cpu2Y + cpuH },
          { x: startX, y: midY },
          { x: startX + angleX, y: midY + Math.abs(angleX) },
          { x: startX + angleX, y: tier3Y + 300 },
        ]);
      }

      // 4. Боковые шины к периферийным чипам (на десктопе)
      if (!isMobile) {
        // Связка с 1С и B24
        busLines.push([
          { x: cpuX, y: cpu1Y + 35 },
          { x: cpuX - 50, y: cpu1Y + 35 },
          { x: cpuX - 80, y: cpu1Y - 10 },
          { x: cpuX - 240 + 160, y: cpu1Y - 10 },
        ]);
        busLines.push([
          { x: cpuX + cpuW, y: cpu1Y + 35 },
          { x: cpuX + cpuW + 50, y: cpu1Y + 35 },
          { x: cpuX + cpuW + 80, y: cpu1Y - 10 },
        ]);

        // Связка с Telegram и МойСклад
        busLines.push([
          { x: cpuX, y: cpu1Y + 100 },
          { x: cpuX - 50, y: cpu1Y + 100 },
          { x: cpuX - 80, y: cpu1Y + 155 },
        ]);
        busLines.push([
          { x: cpuX + cpuW, y: cpu1Y + 100 },
          { x: cpuX + cpuW + 50, y: cpu1Y + 100 },
          { x: cpuX + cpuW + 80, y: cpu1Y + 155 },
        ]);

        // Связка On-Premise с LoRA и RAG
        busLines.push([
          { x: cpuX, y: cpu2Y + 40 },
          { x: cpuX - 45, y: cpu2Y + 40 },
          { x: cpuX - 70, y: cpu2Y + 10 },
        ]);
        busLines.push([
          { x: cpuX + cpuW, y: cpu2Y + 40 },
          { x: cpuX + cpuW + 45, y: cpu2Y + 40 },
          { x: cpuX + cpuW + 75, y: cpu2Y + 10 },
        ]);
      }

      // Преобразуем магистрали в список сегментов
      busLines.forEach((bus) => {
        for (let i = 0; i < bus.length - 1; i++) {
          traces.push({ p1: bus[i], p2: bus[i + 1] });
        }
        // Vias в точках изгибов
        bus.forEach((pt, pIdx) => {
          if (pIdx > 0 && pIdx < bus.length - 1) {
            vias.push({ x: pt.x, y: pt.y, r: 2.2 });
          }
        });
      });

      // 5. Длинные вертикальные транки по краям платы
      const trunkLeft = isMobile ? 18 : 45;
      traces.push({ p1: { x: trunkLeft, y: 0 }, p2: { x: trunkLeft, y: 2800 } });
      traces.push({ p1: { x: trunkLeft + 14, y: 0 }, p2: { x: trunkLeft + 14, y: 2800 } });

      const trunkRight = width - (isMobile ? 18 : 45);
      traces.push({ p1: { x: trunkRight, y: 0 }, p2: { x: trunkRight, y: 2800 } });
      traces.push({ p1: { x: trunkRight - 14, y: 0 }, p2: { x: trunkRight - 14, y: 2800 } });
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      generateTopology();
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY * scrollFactor;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      // При движении мыши запускаем волновые импульсы в виртуальной системе координат
      const boardMouseY = e.clientY + currentScrollY;

      if (Math.random() > 0.65 && traces.length > 0 && pulses.length < 22) {
        const nearTraces = traces.filter((t) => {
          const midX = (t.p1.x + t.p2.x) / 2;
          const midY = (t.p1.y + t.p2.y) / 2;
          return Math.hypot(midX - e.clientX, midY - boardMouseY) < 220;
        });

        if (nearTraces.length > 0) {
          const selected = nearTraces[Math.floor(Math.random() * nearTraces.length)];
          pulses.push({
            trace: selected,
            progress: 0,
            speed: 0.004 + Math.random() * 0.0035, // Мягкая волновая скорость
            length: 0.45,
            life: 1,
          });
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let lastBgPulse = 0;

    // Векторная отрисовка микро-иконок на кристаллах чипов
    const drawChipIcon = (c, iconType, cx, cy, isNear) => {
      c.save();
      c.strokeStyle = isNear ? 'rgba(56, 189, 248, 0.95)' : 'rgba(148, 163, 184, 0.65)';
      c.fillStyle = isNear ? 'rgba(56, 189, 248, 0.95)' : 'rgba(148, 163, 184, 0.65)';
      c.lineWidth = 1.1;

      if (iconType === 'db') {
        // База данных: 2 диска
        c.beginPath();
        c.ellipse(cx, cy - 3, 5.5, 2, 0, 0, Math.PI * 2);
        c.stroke();
        c.beginPath();
        c.moveTo(cx - 5.5, cy - 3);
        c.lineTo(cx - 5.5, cy + 3);
        c.ellipse(cx, cy + 3, 5.5, 2, 0, 0, Math.PI);
        c.lineTo(cx + 5.5, cy - 3);
        c.stroke();
      } else if (iconType === 'rag') {
        // RAG: 3 узла графа связей
        c.beginPath();
        c.arc(cx, cy - 4, 1.8, 0, Math.PI * 2);
        c.arc(cx - 4.5, cy + 3, 1.8, 0, Math.PI * 2);
        c.arc(cx + 4.5, cy + 3, 1.8, 0, Math.PI * 2);
        c.fill();
        c.beginPath();
        c.moveTo(cx, cy - 4);
        c.lineTo(cx - 4.5, cy + 3);
        c.lineTo(cx + 4.5, cy + 3);
        c.closePath();
        c.stroke();
      } else if (iconType === 'scanner') {
        // Сканер: прицел видоискателя [ · ]
        c.beginPath();
        c.moveTo(cx - 5, cy - 2);
        c.lineTo(cx - 5, cy - 5);
        c.lineTo(cx - 2, cy - 5);

        c.moveTo(cx + 2, cy - 5);
        c.lineTo(cx + 5, cy - 5);
        c.lineTo(cx + 5, cy - 2);

        c.moveTo(cx - 5, cy + 2);
        c.lineTo(cx - 5, cy + 5);
        c.lineTo(cx - 2, cy + 5);

        c.moveTo(cx + 2, cy + 5);
        c.lineTo(cx + 5, cy + 5);
        c.lineTo(cx + 5, cy + 2);
        c.stroke();

        c.beginPath();
        c.arc(cx, cy, 1.3, 0, Math.PI * 2);
        c.fill();
      } else if (iconType === 'bot') {
        // Бот: бумажный самолетик
        c.beginPath();
        c.moveTo(cx - 5, cy + 4);
        c.lineTo(cx + 5, cy);
        c.lineTo(cx - 5, cy - 4);
        c.lineTo(cx - 2, cy);
        c.closePath();
        c.stroke();
      } else if (iconType === 'lora') {
        // LoRA: ползунки адаптера весов
        c.beginPath();
        c.moveTo(cx - 4, cy - 5);
        c.lineTo(cx - 4, cy + 5);
        c.moveTo(cx + 4, cy - 5);
        c.lineTo(cx + 4, cy + 5);
        c.stroke();
        c.beginPath();
        c.arc(cx - 4, cy - 1, 1.8, 0, Math.PI * 2);
        c.arc(cx + 4, cy + 2, 1.8, 0, Math.PI * 2);
        c.fill();
      } else if (iconType === 'cpu' || iconType === 'shield-cpu') {
        // Процессорное ядро: кристалл с ножками
        c.strokeRect(cx - 4.5, cy - 4.5, 9, 9);
        c.fillRect(cx - 1.8, cy - 1.8, 3.6, 3.6);
        // Микро-выводы ядра
        c.beginPath();
        c.moveTo(cx - 2, cy - 7); c.lineTo(cx - 2, cy - 4.5);
        c.moveTo(cx + 2, cy - 7); c.lineTo(cx + 2, cy - 4.5);
        c.moveTo(cx - 2, cy + 4.5); c.lineTo(cx - 2, cy + 7);
        c.moveTo(cx + 2, cy + 4.5); c.lineTo(cx + 2, cy + 7);
        c.stroke();
      } else {
        // Универсальный чип
        c.strokeRect(cx - 4.5, cy - 3.5, 9, 7);
      }
      c.restore();
    };

    const render = (time) => {
      // Плавное следование за курсором и параллакс-скроллом
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;
      currentScrollY += (targetScrollY - currentScrollY) * 0.08;

      const boardMouseY = mouse.y + currentScrollY;

      // 1. Очистка подложки
      ctx.fillStyle = '#030508';
      ctx.fillRect(0, 0, width, height);

      // Видимый диапазон по вертикали с запасом в 120px
      const viewTop = currentScrollY - 120;
      const viewBottom = currentScrollY + height + 120;

      // Фоновые импульсы в видимом диапазоне
      if (time - lastBgPulse > 800 && traces.length > 0 && pulses.length < 16) {
        lastBgPulse = time;
        const visibleTraces = traces.filter((t) => {
          const midY = (t.p1.y + t.p2.y) / 2;
          return midY >= viewTop && midY <= viewBottom;
        });

        if (visibleTraces.length > 0) {
          const randomTrace = visibleTraces[Math.floor(Math.random() * visibleTraces.length)];
          pulses.push({
            trace: randomTrace,
            progress: 0,
            speed: 0.003 + Math.random() * 0.003,
            length: 0.5,
            life: 1,
          });
        }
      }

      // 2. Отрисовка дорожек (с учетом смещения currentScrollY)
      const activeRadius = 190;
      for (let i = 0; i < traces.length; i++) {
        const t = traces[i];
        const minY = Math.min(t.p1.y, t.p2.y);
        const maxY = Math.max(t.p1.y, t.p2.y);

        // Отсечение за пределами экрана
        if (maxY < viewTop || minY > viewBottom) continue;

        const midX = (t.p1.x + t.p2.x) / 2;
        const midY = (t.p1.y + t.p2.y) / 2;
        const dist = Math.hypot(midX - mouse.x, midY - boardMouseY);
        const isNear = dist < activeRadius;

        const screenY1 = t.p1.y - currentScrollY;
        const screenY2 = t.p2.y - currentScrollY;

        ctx.beginPath();
        ctx.moveTo(t.p1.x, screenY1);
        ctx.lineTo(t.p2.x, screenY2);

        if (isNear) {
          const intensity = 1 - dist / activeRadius;
          ctx.strokeStyle = `rgba(56, 189, 248, ${(0.25 + intensity * 0.5).toFixed(3)})`;
          ctx.lineWidth = 1.4;
        } else {
          ctx.strokeStyle = 'rgba(30, 41, 59, 0.45)';
          ctx.lineWidth = 1;
        }
        ctx.stroke();
      }

      // 3. Отрисовка микрочипов (с параллакс-смещением)
      chips.forEach((chip) => {
        const screenY = chip.y - currentScrollY;
        if (screenY + chip.h < -60 || screenY > height + 60) return;

        const dist = Math.hypot(chip.x + chip.w / 2 - mouse.x, chip.y + chip.h / 2 - boardMouseY);
        const isNear = dist < activeRadius + 60;

        // Корпус микросхемы
        ctx.fillStyle = isNear ? 'rgba(10, 16, 26, 0.96)' : 'rgba(7, 10, 16, 0.9)';
        ctx.strokeStyle = isNear ? 'rgba(56, 189, 248, 0.65)' : 'rgba(51, 65, 85, 0.5)';
        ctx.lineWidth = 1.2;

        ctx.fillRect(chip.x, screenY, chip.w, chip.h);
        ctx.strokeRect(chip.x, screenY, chip.w, chip.h);

        // Ножки микросхемы (Pins)
        const pinLen = 5;
        const pinStep = chip.w / (chip.pins + 1);
        ctx.strokeStyle = isNear ? 'rgba(56, 189, 248, 0.45)' : 'rgba(51, 65, 85, 0.4)';
        for (let p = 1; p <= chip.pins; p++) {
          const px = chip.x + p * pinStep;
          // Верхние ножки
          ctx.beginPath();
          ctx.moveTo(px, screenY);
          ctx.lineTo(px, screenY - pinLen);
          ctx.stroke();
          // Нижние ножки
          ctx.beginPath();
          ctx.moveTo(px, screenY + chip.h);
          ctx.lineTo(px, screenY + chip.h + pinLen);
          ctx.stroke();
        }

        // Текстовая маркировка чипа и иконка
        const hasIcon = Boolean(chip.icon);
        const iconY = chip.h > 100 ? screenY + 28 : screenY + 20;
        const labelY = hasIcon ? (chip.h > 100 ? screenY + 54 : screenY + 42) : screenY + chip.h / 2 - 4;
        const subY = hasIcon ? (chip.h > 100 ? screenY + 74 : screenY + 58) : screenY + chip.h / 2 + 10;

        if (hasIcon) {
          drawChipIcon(ctx, chip.icon, chip.x + chip.w / 2, iconY, isNear);
        }

        ctx.fillStyle = isNear ? 'rgba(255, 255, 255, 0.95)' : 'rgba(226, 232, 240, 0.6)';
        ctx.font = '700 10.5px system-ui, -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(chip.label, chip.x + chip.w / 2, labelY);

        ctx.fillStyle = isNear ? 'rgba(56, 189, 248, 0.85)' : 'rgba(100, 116, 139, 0.45)';
        ctx.font = '500 8.5px system-ui, -apple-system, sans-serif';
        ctx.fillText(chip.sub, chip.x + chip.w / 2, subY);

        // Ключ первой ножки (Pin 1 Dot)
        ctx.fillStyle = isNear ? 'rgba(56, 189, 248, 0.85)' : 'rgba(51, 65, 85, 0.5)';
        ctx.beginPath();
        ctx.arc(chip.x + 8, screenY + 8, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Отрисовка vias
      for (let i = 0; i < vias.length; i++) {
        const v = vias[i];
        const screenY = v.y - currentScrollY;
        if (screenY < -20 || screenY > height + 20) continue;

        const dist = Math.hypot(v.x - mouse.x, v.y - boardMouseY);
        const isNear = dist < activeRadius;

        ctx.beginPath();
        ctx.arc(v.x, screenY, v.r, 0, Math.PI * 2);
        if (isNear) {
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
          ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
        } else {
          ctx.strokeStyle = 'rgba(51, 65, 85, 0.4)';
          ctx.fillStyle = '#030508';
        }
        ctx.fill();
        ctx.stroke();
      }

      // 5. Отрисовка волновых импульсов по шинам
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1 + p.length) {
          pulses.splice(i, 1);
          continue;
        }

        const t = p.trace;
        const headProg = Math.max(0, Math.min(1, p.progress));
        const tailProg = Math.max(0, Math.min(1, p.progress - p.length));

        const hx = t.p1.x + (t.p2.x - t.p1.x) * headProg;
        const hy = (t.p1.y + (t.p2.y - t.p1.y) * headProg) - currentScrollY;
        const tx = t.p1.x + (t.p2.x - t.p1.x) * tailProg;
        const ty = (t.p1.y + (t.p2.y - t.p1.y) * tailProg) - currentScrollY;

        // Если импульс вне экрана — не рисуем градиент
        if ((hy < -40 && ty < -40) || (hy > height + 40 && ty > height + 40)) continue;

        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
        grad.addColorStop(0.7, 'rgba(56, 189, 248, 0.7)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0.95)');

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
