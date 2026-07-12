"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { CRM_SIGN_IN, CRM_SIGN_UP } from "@/lib/paths";

const LINKS = [
  { href: "#features", label: "Возможности" },
  { href: "#interface", label: "Интерфейс" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={`nav${scrolled ? " scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="wrap">
          <Link href="#top" aria-label="Prime Shop">
            <Logo />
          </Link>
          <nav className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href={CRM_SIGN_IN} className="nav-login">
              Войти
            </a>
            <Button href={CRM_SIGN_UP}>Попробовать бесплатно</Button>
          </div>
          <button
            className="nav-burger"
            aria-label="Меню"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="mnav-back"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="mnav-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="mnav-head">
                <Logo />
                <button
                  className="mnav-close"
                  aria-label="Закрыть"
                  onClick={() => setOpen(false)}
                >
                  <X />
                </button>
              </div>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="ml"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <Button href={CRM_SIGN_IN} variant="ghost" block>
                Войти
              </Button>
              <Button href={CRM_SIGN_UP} block>
                Попробовать бесплатно
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
