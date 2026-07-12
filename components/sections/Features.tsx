"use client";

import { Package, ShoppingCart, BarChart3, Users, type LucideIcon } from "lucide-react";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FEATURES: Feature[] = [
  { icon: Package, title: "Товары и услуги", desc: "Каталог, остатки, цены, скидки, артикулы" },
  { icon: ShoppingCart, title: "Кассы и смены", desc: "Интерфейс кассира, шаблоны чеков, привязка к кассе" },
  { icon: BarChart3, title: "Аналитика и отчёты", desc: "Выручка, прибыль, средний чек, продажи по месяцам и категориям" },
  { icon: Users, title: "Контрагенты и клиенты", desc: "База поставщиков, розничные покупатели, адреса, телефоны" },
];

export function Features() {
  return (
    <section className="section bg-gray" id="features" data-screen-label="Features">
      <div className="wrap">
        <SectionReveal className="head-center">
          <h2 className="h2">Ключевые возможности</h2>
          <p className="lead">
            Всё необходимое для управления розничным магазином в одной системе
          </p>
        </SectionReveal>

        <StaggerGroup className="features">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title} hover>
                <div className="feature">
                  <div className="fic">
                    <Icon />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
