"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";

interface Slide {
  src: string;
  title: string;
  desc: string;
  alt: string;
}

const SLIDES: Slide[] = [
  { src: "/img/money.png", title: "Движение денег", desc: "Полный контроль приходов и расходов в вашем магазине", alt: "Движение денег" },
  { src: "/img/products.png", title: "Учёт товаров", desc: "Каталог, остатки, цены и артикулы в одной таблице", alt: "Учёт товаров" },
  { src: "/img/reports.png", title: "Отчёты и аналитика", desc: "Продажи по товарам, категориям, периодам и сотрудникам", alt: "Отчёты" },
  { src: "/img/clients.png", title: "Клиенты и контрагенты", desc: "База клиентов и поставщиков с историей и контактами", alt: "Клиенты" },
];

export function Screenshots() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  const go = useCallback(
    (n: number) => setIdx((n + SLIDES.length) % SLIDES.length),
    []
  );

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [reduce, idx]);

  const cur = SLIDES[idx];

  return (
    <section className="section" id="interface" data-screen-label="Screenshots">
      <div className="wrap">
        <SectionReveal className="head-center">
          <h2 className="h2">Интерфейс приложения</h2>
        </SectionReveal>

        <SectionReveal className="carousel" delay={0.05}>
          <div className="carousel-stage">
            <div className="carousel-track">
              <AnimatePresence initial={false}>
                <motion.div
                  key={idx}
                  className="cslide"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src={cur.src} alt={cur.alt} fill sizes="(max-width: 1200px) 100vw, 1200px" />
                </motion.div>
              </AnimatePresence>
            </div>
            <button className="carousel-arrow prev" aria-label="Назад" onClick={() => go(idx - 1)}>
              <ChevronLeft />
            </button>
            <button className="carousel-arrow next" aria-label="Вперёд" onClick={() => go(idx + 1)}>
              <ChevronRight />
            </button>
          </div>

          <div className="carousel-cap">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{cur.title}</h3>
                <p>{cur.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="thumbs">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                className={`thumb${i === idx ? " on" : ""}`}
                aria-label={s.title}
                onClick={() => go(i)}
              >
                <Image src={s.src} alt="" fill sizes="300px" />
              </button>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
