import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Footer } from "@/components/sections/Footer";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="legal-nav">
        <div className="wrap legal-nav-inner">
          <Link href="/" aria-label="Prime Shop — на главную">
            <Logo />
          </Link>
          <Link href="/" className="legal-back">
            На главную
          </Link>
        </div>
      </header>
      <main className="legal-main">
        <div className="wrap legal-doc">
          <h1>{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
