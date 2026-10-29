# Спецификация задачи 011: Интерактивная карусель фото команды

---

## 1. Ресурсы изображений
1. `src/assets/images/engineer_contact.jpg` — 1-й слайд (Инженер за рабочими мониторами).
2. `src/assets/images/team_slide_2.jpg` — 2-й слайд (Архитекторы за проектированием систем).
3. `src/assets/images/team_slide_3.jpg` — 3-й слайд (Команда инженеров в рабочем процессе).

---

## 2. Модель данных слайдов в `TeamAndExpertise.jsx`
```javascript
const slides = [
  {
    image: engineerContactImg,
    badge: 'Архитектурный контур SFTG',
    caption: 'Ведущие системные архитекторы и разработчики интеграций',
  },
  {
    image: teamSlide2Img,
    badge: 'HighLoad & On-Premise',
    caption: 'Проектирование и стресс-тестирование закрытых контуров',
  },
  {
    image: teamSlide3Img,
    badge: 'Интеграционный контур 1С',
    caption: 'Разработка OData-модулей и связки с Битрикс24',
  },
];
```

---

## 3. Логика автоскролла и таймера
- Состояние: `const [currentSlide, setCurrentSlide] = useState(0);`
- Состояние паузы: `const [isPaused, setIsPaused] = useState(false);`
- Эффект:
```javascript
useEffect(() => {
  if (isPaused) return;
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 3500);
  return () => clearInterval(interval);
}, [isPaused, slides.length]);
```

---

## 4. Стили анимации
- Абсолютное позиционирование всех картинок с `transition-opacity duration-700 ease-in-out`.
- Активная картинка: `opacity-100 scale-100 z-1`.
- Неактивные картинки: `opacity-0 scale-105 z-0 pointer-events-none`.
