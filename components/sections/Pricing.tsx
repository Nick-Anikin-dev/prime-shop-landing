"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Minus, ArrowRight } from "lucide-react";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";
import { Button } from "@/components/ui/Button";
import { CRM_SIGN_UP } from "@/lib/paths";

interface Plan {
  name: string;
  tag: string;
  month: number;
  popular?: boolean;
  cta: string;
  ctaVariant: "primary" | "soft" | "ghost";
  featsHead: string;
  feats: { text: string; off?: boolean }[];
}

const PLANS: Plan[] = [
  {
    name: "Бесплатный",
    tag: "Чтобы начать",
    month: 0,
    cta: "Начать бесплатно",
    ctaVariant: "soft",
    featsHead: "Входит",
    feats: [
      { text: "1 магазин · до 50 товаров" },
      { text: "Каталог товаров" },
      { text: "Движение товаров и денег" },
      { text: "Базовые документы" },
      { text: "Сотрудники и роли", off: true },
      { text: "Аналитика и отчёты", off: true },
      { text: "Интеграции", off: true },
    ],
  },
  {
    name: "Гибкий",
    tag: "Для растущего магазина",
    month: 89,
    popular: true,
    cta: "Попробовать",
    ctaVariant: "primary",
    featsHead: "Всё из бесплатного, плюс",
    feats: [
      { text: "До 3 магазинов · до 10 сотрудников" },
      { text: "Клиенты (CRM) и поставщики" },
      { text: "Отчёты, аналитика, экспорт в Excel" },
      { text: "Печать и шаблоны чеков" },
      { text: "Роли и приглашения сотрудников" },
      { text: "Фото товаров" },
    ],
  },
  {
    name: "Максимум",
    tag: "Без ограничений",
    month: 220,
    cta: "Подключить",
    ctaVariant: "ghost",
    featsHead: "Всё из «Гибкого», плюс",
    feats: [
      { text: "Магазины, сотрудники, товары — без лимита" },
      { text: "Интеграции и Telegram-уведомления" },
      { text: "Приоритетная поддержка" },
      { text: "Расширенные права доступа" },
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  function priceFor(plan: Plan) {
    if (plan.month === 0) return { amt: 0, note: "Навсегда бесплатно" };
    if (yearly) {
      const yr = Math.round(plan.month * 0.8);
      return {
        amt: yr,
        note: `${plan.month * 12 - yr * 12} BYN экономии в год · 2 месяца в подарок`,
      };
    }
    return { amt: plan.month, note: "при оплате помесячно" };
  }

  return (
    <section className="section bg-gray" id="pricing" data-screen-label="Pricing">
      <div className="wrap">
        <SectionReveal className="head-center">
          <h2 className="h2">Тарифы</h2>
          <p className="lead">
            Начните бесплатно и переходите на платный план, когда магазин
            вырастет
          </p>
        </SectionReveal>

        <SectionReveal className="head-center" delay={0.05}>
          <div className="bill-toggle" role="tablist" aria-label="Период оплаты">
            <button
              role="tab"
              aria-selected={!yearly}
              className={`bill-opt${!yearly ? " on" : ""}`}
              onClick={() => setYearly(false)}
            >
              {!yearly && (
                <motion.span layoutId="billPill" className="bill-pill" style={{ inset: 0 }} transition={{ type: "spring", stiffness: 400, damping: 34 }} />
              )}
              <span style={{ position: "relative", zIndex: 1 }}>Помесячно</span>
            </button>
            <button
              role="tab"
              aria-selected={yearly}
              className={`bill-opt${yearly ? " on" : ""}`}
              onClick={() => setYearly(true)}
            >
              {yearly && (
                <motion.span layoutId="billPill" className="bill-pill" style={{ inset: 0 }} transition={{ type: "spring", stiffness: 400, damping: 34 }} />
              )}
              <span style={{ position: "relative", zIndex: 1, display: "inline-flex", alignItems: "center", gap: 8 }}>
                На год <span className="bill-save">−20%</span>
              </span>
            </button>
          </div>
        </SectionReveal>

        <StaggerGroup className="plans" stagger={0.1}>
          {PLANS.map((plan) => {
            const { amt, note } = priceFor(plan);
            return (
              <StaggerItem key={plan.name}>
                <motion.div
                  className={`plan${plan.popular ? " popular" : ""}`}
                  whileHover={{
                    y: plan.popular ? -10 : -6,
                    scale: plan.popular ? 1.015 : 1,
                    boxShadow: "var(--sh-lg)",
                    transition: { duration: 0.25 },
                  }}
                >
                  {plan.popular && (
                    <div className="plan-badge">
                      <Sparkles /> Популярный
                    </div>
                  )}
                  <div className="plan-name">{plan.name}</div>
                  <div className="plan-tag">{plan.tag}</div>
                  <div className="plan-price">
                    <span className="cur">BYN</span>
                    <motion.span
                      key={amt}
                      className="amt"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {amt}
                    </motion.span>
                    <span className="per">/мес</span>
                  </div>
                  <div className="plan-year-note">{note}</div>
                  <Button variant={plan.ctaVariant} block href={CRM_SIGN_UP}>
                    {plan.cta}
                  </Button>
                  <ul className="plan-feats">
                    <li className="ft-h">{plan.featsHead}</li>
                    {plan.feats.map((f) => (
                      <li key={f.text} className={f.off ? "off" : ""}>
                        {f.off ? <Minus /> : <Check className="ok" />}
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <SectionReveal className="pricing-foot">
          <a href={CRM_SIGN_UP} className="link-arrow">
            Попробовать 14 дней бесплатно <ArrowRight style={{ width: 18, height: 18 }} />
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
