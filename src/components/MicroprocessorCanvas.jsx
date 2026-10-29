import React, { useEffect, useRef } from 'react';

/**
 * MicroprocessorCanvas — высокотехнологичный интерактивный фон печатной платы и микропроцессора.
 * 
 * Особенности:
 * - Полноценная архитектура материнской платы / микропроцессора (ЦПУ SFTG BPU-84 в центре,
 *   контроллеры OData/1C Gateway и B24 CRM, шины данных под 90° и 45°, контактные площадки vias).
 * - Живет строго в фоновом слое (z-0). Все карточки и кнопки интерфейса непрозрачны и лежат выше.
 * - Локальная реакция на мышь: подсветка дорожек и бегущие световые импульсы по шинам данных.
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

      // 1. Центральный микропроцессор SFTG CORE BPU
      const cpuW = Math.min(270, width * 0.44);
      const cpuH = 170;
      const cpuX = width * 0.5 - cpuW / 2;
      const cpuY = Math.min(280, height * 0.28);

      chips.push({
        x: cpuX,
        y: cpuY,
        w: cpuW,
        h: cpuH,
        label: 'ЯНДЕКС GPT / СУВЕРЕННЫЕ LLM',
        sub: 'НЕЙРОННОЕ ЯДРО SFTG AI',
        pins: 16,
      });

      // Периферийные чипы-адаптеры
      if (width > 680) {
        // Чип 1C Gateway
        chips.push({
          x: cpuX - 220,
          y: cpuY + 220,
          w: 150,
          h: 85,
          label: '1С:ПРЕДПРИЯТИЕ',
          sub: 'ШЛЮЗ ODATA / REST',
          pins: 10,
        });

        // Чип B24 CRM
        chips.push({
          x: cpuX + cpuW + 70,
          y: cpuY + 160,
          w: 160,
          h: 90,
          label: 'БИТРИКС24 CRM',
          sub: 'ПРОЦЕССЫ И СДЕЛКИ',
          pins: 12,
        });
      }

      if (width > 980) {
        // База данных
        chips.push({
          x: cpuX - 260,
          y: cpuY - 60,
          w: 150,
          h: 80,
          label: 'БАЗА ДАННЫХ',
          sub: 'POSTGRESQL / РЕГИСТРЫ',
          pins: 10,
        });

        // Анализ сканов и первички
        chips.push({
          x: cpuX + cpuW + 110,
          y: cpuY + 310,
          w: 155,
          h: 80,
          label: 'ОБРАБОТКА СКАНОВ',
          sub: 'РАСПОЗНАВАНИЕ ТТН / УПД',
          pins: 10,
        });
      }

      // 2. Генерация шин данных от чипов (90° и 45° трассы)
      const busLines = [];

      // Верхние шины от процессора
      const numTop = Math.min(8, Math.floor(cpuW / 28));
      for (let i = 0; i < numTop; i++) {
        const startX = cpuX + 25 + i * ((cpuW - 50) / (numTop - 1));
        const midY = cpuY - 35 - (i % 3) * 18;
        const angleX = (i < numTop / 2 ? -1 : 1) * 35;
        busLines.push([
          { x: startX, y: cpuY },
          { x: startX, y: midY },
          { x: startX + angleX, y: midY - Math.abs(angleX) },
          { x: startX + angleX, y: 0 },
        ]);
      }

      // Нижние шины от процессора к нижнему краю экрана
      const numBottom = Math.min(10, Math.floor(cpuW / 24));
      for (let i = 0; i < numBottom; i++) {
        const startX = cpuX + 20 + i * ((cpuW - 40) / (numBottom - 1));
        const midY = cpuY + cpuH + 45 + (i % 4) * 20;
        const angleX = (i % 2 === 0 ? 1 : -1) * 30;
        busLines.push([
          { x: startX, y: cpuY + cpuH },
          { x: startX, y: midY },
          { x: startX + angleX, y: midY + Math.abs(angleX) },
          { x: startX + angleX, y: height },
        ]);
      }

      // Боковые шины влево и вправо
      const numSide = 6;
      for (let i = 0; i < numSide; i++) {
        const y = cpuY + 20 + i * ((cpuH - 40) / (numSide - 1));
        // Влево
        const leftBend = cpuX - 40 - (i % 3) * 30;
        busLines.push([
          { x: cpuX, y },
          { x: leftBend, y },
          { x: leftBend - 40, y: y + 40 },
          { x: 0, y: y + 40 },
        ]);
        // Вправо
        const rightBend = cpuX + cpuW + 40 + (i % 3) * 30;
        busLines.push([
          { x: cpuX + cpuW, y },
          { x: rightBend, y },
          { x: rightBend + 40, y: y - 40 },
          { x: width, y: y - 40 },
        ]);
      }

      // Преобразуем магистрали в список сегментов
      busLines.forEach((bus) => {
        for (let i = 0; i < bus.length - 1; i++) {
          traces.push({ p1: bus[i], p2: bus[i + 1] });
        }
        // Vias в точках изгибов и на концах
        bus.forEach((pt, pIdx) => {
          if (pIdx > 0 && pIdx < bus.length - 1) {
            vias.push({ x: pt.x, y: pt.y, r: 2.2 });
          }
        });
      });

      // Добавим несколько длинных внешних шин по бокам платы
      const trunkLeft = 45;
      traces.push({ p1: { x: trunkLeft, y: 0 }, p2: { x: trunkLeft, y: height } });
      traces.push({ p1: { x: trunkLeft + 16, y: 0 }, p2: { x: trunkLeft + 16, y: height } });

      const trunkRight = width - 45;
      traces.push({ p1: { x: trunkRight, y: 0 }, p2: { x: trunkRight, y: height } });
      traces.push({ p1: { x: trunkRight - 16, y: 0 }, p2: { x: trunkRight - 16, y: height } });
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      generateTopology();
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      // При движении мыши запускаем мягкие плавные световые импульсы
      if (Math.random() > 0.65 && traces.length > 0 && pulses.length < 18) {
        const nearTraces = traces.filter((t) => {
          const midX = (t.p1.x + t.p2.x) / 2;
          const midY = (t.p1.y + t.p2.y) / 2;
          return Math.hypot(midX - e.clientX, midY - e.clientY) < 220;
        });

        if (nearTraces.length > 0) {
          const selected = nearTraces[Math.floor(Math.random() * nearTraces.length)];
          pulses.push({
            trace: selected,
            progress: 0,
            speed: 0.005 + Math.random() * 0.004, // Плавное движение, как волна
            length: 0.45,
            life: 1,
          });
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let lastBgPulse = 0;

    const render = (time) => {
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // 1. Очистка подложки
      ctx.fillStyle = '#030508';
      ctx.fillRect(0, 0, width, height);

      // Фоновые импульсы раз в ~750мс (плавные, как волны)
      if (time - lastBgPulse > 750 && traces.length > 0 && pulses.length < 12) {
        lastBgPulse = time;
        const randomTrace = traces[Math.floor(Math.random() * traces.length)];
        pulses.push({
          trace: randomTrace,
          progress: 0,
          speed: 0.003 + Math.random() * 0.0035, // Медленная плавучая скорость
          length: 0.5,
          life: 1,
        });
      }

      // 2. Отрисовка дорожек печатной платы
      const activeRadius = 190;
      for (let i = 0; i < traces.length; i++) {
        const t = traces[i];
        const midX = (t.p1.x + t.p2.x) / 2;
        const midY = (t.p1.y + t.p2.y) / 2;
        const dist = Math.hypot(midX - mouse.x, midY - mouse.y);
        const isNear = dist < activeRadius;

        ctx.beginPath();
        ctx.moveTo(t.p1.x, t.p1.y);
        ctx.lineTo(t.p2.x, t.p2.y);

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

      // 3. Отрисовка микрочипов (процессоров)
      chips.forEach((chip) => {
        const dist = Math.hypot(chip.x + chip.w / 2 - mouse.x, chip.y + chip.h / 2 - mouse.y);
        const isNear = dist < activeRadius + 60;

        // Корпус микросхемы
        ctx.fillStyle = isNear ? 'rgba(10, 16, 26, 0.95)' : 'rgba(7, 10, 16, 0.9)';
        ctx.strokeStyle = isNear ? 'rgba(56, 189, 248, 0.6)' : 'rgba(51, 65, 85, 0.5)';
        ctx.lineWidth = 1.2;

        ctx.fillRect(chip.x, chip.y, chip.w, chip.h);
        ctx.strokeRect(chip.x, chip.y, chip.w, chip.h);

        // Ножки микросхемы (Pins)
        const pinLen = 5;
        const pinStep = chip.w / (chip.pins + 1);
        ctx.strokeStyle = isNear ? 'rgba(56, 189, 248, 0.45)' : 'rgba(51, 65, 85, 0.4)';
        for (let p = 1; p <= chip.pins; p++) {
          const px = chip.x + p * pinStep;
          // Верхние ножки
          ctx.beginPath();
          ctx.moveTo(px, chip.y);
          ctx.lineTo(px, chip.y - pinLen);
          ctx.stroke();
          // Нижние ножки
          ctx.beginPath();
          ctx.moveTo(px, chip.y + chip.h);
          ctx.lineTo(px, chip.y + chip.h + pinLen);
          ctx.stroke();
        }

        // Текстовая маркировка чипа
        ctx.fillStyle = isNear ? 'rgba(56, 189, 248, 0.85)' : 'rgba(148, 163, 184, 0.45)';
        ctx.font = '600 10.5px system-ui, -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(chip.label, chip.x + chip.w / 2, chip.y + chip.h / 2 - 4);

        ctx.fillStyle = isNear ? 'rgba(96, 165, 250, 0.65)' : 'rgba(100, 116, 139, 0.35)';
        ctx.font = '500 8.5px system-ui, -apple-system, sans-serif';
        ctx.fillText(chip.sub, chip.x + chip.w / 2, chip.y + chip.h / 2 + 10);

        // Ключ первой ножки (Pin 1 Dot)
        ctx.fillStyle = isNear ? 'rgba(56, 189, 248, 0.8)' : 'rgba(51, 65, 85, 0.5)';
        ctx.beginPath();
        ctx.arc(chip.x + 8, chip.y + 8, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Отрисовка vias
      for (let i = 0; i < vias.length; i++) {
        const v = vias[i];
        const dist = Math.hypot(v.x - mouse.x, v.y - mouse.y);
        const isNear = dist < activeRadius;

        ctx.beginPath();
        ctx.arc(v.x, v.y, v.r, 0, Math.PI * 2);
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

      // 5. Отрисовка световых импульсов по шинам
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
        const hy = t.p1.y + (t.p2.y - t.p1.y) * headProg;
        const tx = t.p1.x + (t.p2.x - t.p1.x) * tailProg;
        const ty = t.p1.y + (t.p2.y - t.p1.y) * tailProg;

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

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(hx, hy, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 block w-full h-full"
      aria-hidden="true"
    />
  );
}
