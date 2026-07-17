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
import { FAQ_ITEMS } from "@/lib/faq";

const ICONS: LucideIcon[] = [
  Cloud,
  Building2,
  Tablet,
  FileSpreadsheet,
  Gift,
  CreditCard,
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
          {FAQ_ITEMS.map((it, i) => {
            const Icon = ICONS[i] ?? Cloud;
            const isOpen = open === i;
            return (
              <SectionReveal
                key={it.q}
                className={`faq-item${isOpen ? " open" : ""}`}
                delay={i * 0.04}
              >
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
