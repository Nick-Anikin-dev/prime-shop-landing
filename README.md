# Prime Shop — Landing (Next.js)

Маркетинговый лендинг Prime Shop — облачной кассы и системы управления
розничным магазином. Собран на **Next.js 15 (App Router)**, **React 19**,
**TypeScript**, **Tailwind CSS**, **framer-motion** и **lucide-react**.

Фирменный стиль извлечён из реального интерфейса приложения: шрифт **Inter**,
светлый UI с серыми секциями, скругления и акцентный системный индиго
`#635CFF`.

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

Сборка продакшена (static export):

```bash
npm run build
# артефакты в out/
```

Docker-образ и деплой — через GitHub Actions (`.github/workflows/deploy.yml`).

Репозиторий: https://github.com/Nick-Anikin-dev/prime-shop-landing

Production: https://prime-shop.by (CRM — https://prime-shop.by/crm)

### CI/CD secrets (Settings → Secrets → Actions)

Скопируйте из репозиториев frontend/backend:

- `VPS_HOST`, `VPS_USER`, `PRIME_SHOP_SSH_KEY`
- `GHCR_USER`, `GHCR_PAT`

## Структура

```
app/
  layout.tsx        # корневой layout, метаданные (SEO/OG), шрифт next/font (Inter)
  page.tsx          # сборка всех секций
  globals.css       # Tailwind + CSS-переменные с фирменной палитрой
components/
  ui/
    Button.tsx          # кнопка с micro-interactions (whileHover / whileTap)
    SectionReveal.tsx   # reveal-on-scroll + StaggerGroup / StaggerItem
    AnimatedCounter.tsx # счётчик от 0 при попадании во вьюпорт
    Logo.tsx            # логотип Prime Shop (SVG)
  sections/
    Navbar.tsx      # sticky-навбар с blur на скролле + мобильное меню
    Hero.tsx        # заголовок (stagger) + коллаж скриншотов с parallax
    Features.tsx    # сетка возможностей (stagger + hover)
    Screenshots.tsx # карусель интерфейса (AnimatePresence, автопрокрутка)
    Showcase.tsx    # карточки «Всё для работы»
    Benefits.tsx    # преимущества + анимированные статы
    Pricing.tsx     # тарифы, переключатель месяц/год (layoutId-«таблетка»)
    Faq.tsx         # аккордеон (AnimatePresence height:auto)
    Cta.tsx         # финальный CTA-баннер
    Footer.tsx      # футер
public/
  img/*.png         # реальные скриншоты приложения
```

## Анимации (framer-motion)

- **Hero** — staggered-появление заголовка/подзаголовка/CTA (spring), коллаж
  выезжает и реагирует на курсор параллаксом (`useMotionValue` + `useSpring` +
  `useTransform`).
- **Reveal-on-scroll** — все секции через `whileInView` (`once: true`) со
  stagger по карточкам (`SectionReveal` / `StaggerGroup`).
- **Карточки** — `whileHover`: приподнимание + мягкая тень/glow.
- **Стат-каунтеры** — счёт от 0 при попадании во вьюпорт (`useInView`).
- **Тарифы** — hover-масштаб; переключатель месяц/год с подвижным индикатором
  через `layoutId`.
- **FAQ** — раскрытие через `AnimatePresence` (`height: auto`) + поворот шеврона.
- **Карусель** — плавная смена слайдов (`AnimatePresence`), автопрокрутка.
- Везде учитывается `prefers-reduced-motion`.

## Цвета

Палитра в CSS-переменных (`app/globals.css`) и в `tailwind.config.ts`:

- `--primary` `#635CFF` — системный индиго (акцент, кнопки, иконки)
- `--teal` `#15B89F` — успех/экономия
- нейтрали gray-50…gray-900, белые поверхности

## Примечания

- Тарифы: цены в **BYN**, помесячно `0 / 89 / 220`; годовой режим показывает
  −20% («2 месяца в подарок»).
- Все изображения — реальные скриншоты продукта из `public/img`.
