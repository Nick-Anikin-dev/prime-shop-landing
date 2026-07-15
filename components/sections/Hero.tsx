"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
  type Variants,
} from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  TrendingUp,
  Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  // pointer position, normalized to [-0.5, 0.5]
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 20 });
  const sy = useSpring(py, { stiffness: 120, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <div className="hero-bg" aria-hidden>
        <span className="glow g1" />
        <span className="glow g2" />
        <span className="grid" />
      </div>
      <div className="wrap">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.span className="pill" variants={item}>
              <Sparkles /> Управляйте магазином эффективно
            </motion.span>
            <motion.h1 variants={item}>
              Готовый учёт для розницы.{" "}
              <span className="accent">Всё в одном окне</span>
            </motion.h1>
            <motion.p className="hero-sub" variants={item}>
              Онлайн-касса, товары, склад, аналитика и отчёты — всё, что нужно
              для вашего магазина. Работает в браузере, без установки.
            </motion.p>
            <motion.div className="hero-actions" variants={item}>
              <Button href="#pricing" size="lg">
                Попробовать бесплатно <ArrowRight />
              </Button>
              <Button href="#interface" variant="ghost" size="lg">
                <Play /> Смотреть интерфейс
              </Button>
            </motion.div>
            <motion.p className="hero-note" variants={item}>
              <CheckCircle2 /> 30 дней бесплатно
            </motion.p>
          </motion.div>

          <motion.div
            className="collage"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <ParallaxLayer className="shot main" sx={sx} sy={sy} depth={10}>
              <Image
                src="/img/analytics.png"
                alt="Аналитика магазина Prime Shop"
                width={1439}
                height={627}
                priority
              />
            </ParallaxLayer>
            <ParallaxLayer className="shot sec" sx={sx} sy={sy} depth={20}>
              <Image
                src="/img/products.png"
                alt="Учёт товаров Prime Shop"
                width={1439}
                height={627}
              />
            </ParallaxLayer>
            <ParallaxLayer className="shot third" sx={sx} sy={sy} depth={28}>
              <Image
                src="/img/money.png"
                alt="Движение денег Prime Shop"
                width={1439}
                height={627}
              />
            </ParallaxLayer>

            <ParallaxLayer className="hero-chip c1" sx={sx} sy={sy} depth={26}>
              <span className="ic teal">
                <TrendingUp />
              </span>
              <span>
                <span className="t" style={{ display: "block" }}>
                  Выручка за месяц
                </span>
                <span className="v">128 400 ₽</span>
              </span>
            </ParallaxLayer>
            <ParallaxLayer className="hero-chip c2" sx={sx} sy={sy} depth={26}>
              <span className="ic indigo">
                <Receipt />
              </span>
              <span>
                <span className="t" style={{ display: "block" }}>
                  Продаж сегодня
                </span>
                <span className="v">87</span>
              </span>
            </ParallaxLayer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** A collage layer that shifts with the pointer for a subtle 3D parallax. */
function ParallaxLayer({
  children,
  className,
  sx,
  sy,
  depth,
}: {
  children: React.ReactNode;
  className: string;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  depth: number;
}) {
  const x = useTransform(sx, (n) => n * depth);
  const y = useTransform(sy, (n) => n * depth);
  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}
