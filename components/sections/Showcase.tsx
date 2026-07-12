"use client";

import Image from "next/image";
import { SectionReveal, StaggerGroup, StaggerItem } from "@/components/ui/SectionReveal";

interface Card {
  src: string;
  title: string;
  desc: string;
}

const CARDS: Card[] = [
  { src: "/img/receipt.png", title: "Шаблоны чеков", desc: "Настройте внешний вид чека под ваш бренд" },
  { src: "/img/money.png", title: "Движение денег", desc: "Все приходы, расходы и переводы по счетам магазина" },
  { src: "/img/cashboxes.png", title: "Управление кассами", desc: "Контролируйте все точки продаж и их баланс" },
];

export function Showcase() {
  return (
    <section className="section bg-gray" data-screen-label="Showcase">
      <div className="wrap">
        <SectionReveal className="head-center">
          <h2 className="h2">Всё, что нужно для работы</h2>
          <p className="lead">
            От настройки чеков до контроля касс — всё в одной системе
          </p>
        </SectionReveal>

        <StaggerGroup className="showcase">
          {CARDS.map((c) => (
            <StaggerItem key={c.title} hover>
              <div className="sc-card">
                <div className="sc-img">
                  <Image src={c.src} alt={c.title} width={1439} height={627} />
                </div>
                <div className="sc-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
