# Спецификация задачи 011: Интерактивная карусель фото команды

---

## 1. Ресурсы изображений (из папки кандидатов `docs/tasks/004_.../candidates/`)
1. `src/assets/images/team_slide_1.jpg` — из `docs/tasks/004_.../candidates/user_downloaded_latest.jpg` (1-й слайд).
2. `src/assets/images/team_slide_2.jpg` — из `docs/tasks/004_.../candidates/user_downloaded_3.jpg` (2-й слайд).
3. `src/assets/images/team_slide_3.jpg` — из `docs/tasks/004_.../candidates/user_downloaded_4.jpg` (3-й слайд).

---

## 2. Модель данных слайдов в `TeamAndExpertise.jsx`
```javascript
const slides = [
  {
    image: teamSlide1Img,
    badge: 'Архитектурный контур SFTG',
    title: 'Инженерная команда SFTG AI',
    desc: 'Ведущие системные архитекторы и разработчики интеграций',
  },
  {
    image: teamSlide2Img,
    badge: 'HighLoad & On-Premise',
    title: 'Проектирование и стресс-тесты',
    desc: 'Развёртывание закрытых контуров и распределённых баз',
  },
  {
    image: teamSlide3Img,
    badge: 'Интеграционный контур 1С',
    title: 'Связка 1С и Битрикс24',
    desc: 'Разработка официальных API-модулей и шин данных',
  },
];
```

---

## 3. Логика автоскролла и таймера
- Состояние: `const [activeSlide, setActiveSlide] = useState(0);`
- Состояние паузы: `const [isPaused, setIsPaused] = useState(false);`
- Эффект:
```javascript
useEffect(() => {
  if (isPaused) return;
  const interval = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }, 3500);
  return () => clearInterval(interval);
}, [isPaused, slides.length]);
```

---

## 4. Обновление Hero
Строка в подзаголовке:
`Интегрируем автономных ИИ-агентов поверх выстроенных бизнес-процессов компании.`
