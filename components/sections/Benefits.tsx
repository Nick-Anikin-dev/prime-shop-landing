"use client";

import { Globe, UserCheck, FileText, Receipt, type LucideIcon } from "lucide-react";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const BENEFITS: { icon: LucideIcon; text: string }[] = [
  { icon: Globe, text: "Работает в браузере — на ПК, планшете и телефоне" },
  { icon: UserCheck, text: "Роли: владелец, управляющий, кассир, кладовщик" },
  { icon: FileText, text: "Готовые отчёты по продажам и финансам" },
  { icon: Receipt, text: "Шаблоны чеков с вашим логотипом" },
];

export function Benefits() {
  return (
    <section className="section" id="benefits" data-screen-label="Benefits">
      <div className="wrap">
        <div className="bs-grid">
          <div>
            <SectionReveal>
              <h2 className="h2" style={{ marginBottom: 24 }}>
                Преимущества
              </h2>
            </SectionReveal>
            <StaggerGroup className="benefits-list" stagger={0.09}>
              {BENEFITS.map((b) => {
                const Icon = b.icon;
                return (
                  <StaggerItem key={b.text}>
                    <div className="benefit">
                      <span className="bic">
                        <Icon />
                      </span>
                      <span>{b.text}</span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>

          <StaggerGroup className="stats-col" stagger={0.12}>
            <StaggerItem>
              <div className="stat-card">
                <div className="val">
                  <AnimatedCounter value={0} /> BYN
                </div>
                <div className="lbl">на старте — бесплатный тариф</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="stat-card">
                <div className="val">
                  <AnimatedCounter value={10} />
                  <span className="u">+</span>
                </div>
                <div className="lbl">готовых отчётов из коробки</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="stat-card">
                <div className="val">
                  <AnimatedCounter value={1} /> <span className="u">мин</span>
                </div>
                <div className="lbl">на подключение и первую продажу</div>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
