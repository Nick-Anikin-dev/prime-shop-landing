import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Shop — готовый учёт для розницы",
  description:
    "Prime Shop — облачная система управления розничным магазином: онлайн-касса, товары, склад, аналитика и отчёты. Всё в одном окне браузера.",
  openGraph: {
    title: "Prime Shop — готовый учёт для розницы",
    description:
      "Онлайн-касса, товары, склад, аналитика и отчёты — всё, что нужно для вашего магазина.",
    type: "website",
    locale: "ru_RU",
    siteName: "Prime Shop",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Shop — готовый учёт для розницы",
    description:
      "Онлайн-касса, товары, склад, аналитика и отчёты — всё в одном окне браузера.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
