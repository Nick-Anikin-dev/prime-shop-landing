import Link from "next/link";
import { Send, Instagram, Youtube, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

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
              <a href="#" aria-label="Telegram">
                <Send />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube />
              </a>
              <a href="#" aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Контакты</h5>
            <ul>
              <li>www.prime-shop.by</li>
              <li>+375 (44) 743-41-81</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Документы</h5>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Публичная оферта</a>
            <a href="#">Договор оферты</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Prime Shop. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
