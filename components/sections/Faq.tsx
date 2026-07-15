"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Cloud,
  Building2,
  Tablet,
  FileSpreadsheet,
  Gift,
  CreditCard,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

interface QA {
  icon: LucideIcon;
  q: string;
  a: string;
}

const ITEMS: QA[] = [
  {
    icon: Cloud,
    q: "Нужно ли что-то устанавливать?",
    a: "Нет. Prime Shop полностью работает в браузере — на компьютере, планшете или телефоне. Достаточно зарегистрироваться и войти: никаких установок, лицензий и серверов на вашей стороне.",
  },
  {
    icon: Building2,
    q: "Можно ли вести несколько магазинов?",
    a: "Да. Prime Shop поддерживает мультиорганизацию и мультимагазин: несколько точек в одном аккаунте с переключением в один клик. Количество магазинов зависит от тарифа — на «Максимуме» лимита нет.",
  },
  {
    icon: Tablet,
    q: "Подходит ли касса для планшета?",
    a: "Да. Интерфейс кассира адаптирован под тач-экраны и большие плитки товаров. Можно подключить сканер штрихкодов и принтер чеков — касса работает на планшете так же, как на ПК.",
  },
  {
    icon: FileSpreadsheet,
    q: "Как перенести товары из другой системы?",
    a: "Загрузите файл Excel — Prime Shop импортирует товары, цены и остатки. Категории и поставщиков можно добавить тут же. Обычно перенос каталога занимает несколько минут.",
  },
  {
    icon: Gift,
    q: "Что входит в бесплатный тариф?",
    a: "Один магазин, каталог до 30 товаров, движение товаров и денег. Сотрудники, аналитика, документы и интеграции доступны на платных тарифах.",
  },
  {
    icon: CreditCard,
    q: "Нужна ли карта для регистрации?",
    a: "Нет. Бесплатный тариф включается без карты и без срока действия. Перейти на «Гибкий» или «Максимум» можно в любой момент — помесячно или со скидкой −20% при оплате за год.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq" data-screen-label="FAQ">
      <div className="wrap">
        <SectionReveal className="head-center">
          <h2 className="h2">Частые вопросы</h2>
        </SectionReveal>

        <div className="faq">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            const isOpen = open === i;
            return (
              <SectionReveal key={it.q} className={`faq-item${isOpen ? " open" : ""}`} delay={i * 0.04}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <Icon className="qic" />
                  {it.q}
                  <motion.span
                    className="chev"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="faq-a-inner">{it.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
