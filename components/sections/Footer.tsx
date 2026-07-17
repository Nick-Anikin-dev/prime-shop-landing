import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LEGAL } from "@/lib/legal";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="#top" aria-label="Prime Shop">
              <Logo onDark />
            </Link>
            <p>
              Современная облачная система управления розничным магазином. Всё для
              эффективной работы вашего бизнеса.
            </p>
            <div className="footer-social">
              <a href={`mailto:${LEGAL.email}`} aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Контакты</h5>
            <ul>
              <li>
                <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
              </li>
              <li>
                <a href={`tel:${LEGAL.phoneTel}`}>{LEGAL.phone}</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Документы</h5>
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/offer">Публичная оферта</Link>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Prime Shop · ИП Аникин Николай · УНП 491733507
        </div>
      </div>
    </footer>
  );
}
