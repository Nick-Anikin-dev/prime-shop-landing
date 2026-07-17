"use client";

import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Button } from "@/components/ui/Button";
import { CRM_SIGN_UP } from "@/lib/paths";

export function Cta() {
  return (
    <section className="cta-final" data-screen-label="CTA">
      <div className="wrap">
        <SectionReveal>
          <div className="cta-box">
            <span className="grid" aria-hidden />
            <span className="glow gg1" aria-hidden />
            <span className="glow gg2" aria-hidden />
            <h2>Начните бесплатно уже сегодня</h2>
            <p>
              Попробуйте все возможности системы без ограничений в течение 30
              дней
            </p>
            <Button href={CRM_SIGN_UP} variant="light" size="lg">
              Попробовать бесплатно <ArrowRight />
            </Button>
            <p className="cta-note">
              Не требуется кредитная карта · Настройка за 1 минуту
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
