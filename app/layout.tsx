import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { YandexMetrika } from "@/components/YandexMetrika";
import {
  JsonLd,
  organizationJsonLd,
  softwareApplicationJsonLd,
} from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ymCounterId = process.env.NEXT_PUBLIC_YM_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://prime-shop.by"),
  title:
    "Prime Shop — программа учёта для магазина в Беларуси | касса, склад, отчёты",
  description:
    "Облачная программа учёта для розничного магазина в Беларуси: онлайн-касса, товары, склад и аналитика в браузере. Бесплатный тариф, цены в BYN, без установки.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/img/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/img/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/img/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title:
      "Prime Shop — программа учёта для магазина в Беларуси",
    description:
      "Онлайн-касса, товары, склад и отчёты — учёт для розницы в браузере. Бесплатный старт, цены в BYN.",
    type: "website",
    locale: "ru_RU",
    siteName: "Prime Shop",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Prime Shop — программа учёта для магазина в Беларуси",
    description:
      "Онлайн-касса, товары, склад и отчёты в браузере. Бесплатный тариф, BYN, без установки.",
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
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={softwareApplicationJsonLd()} />
        {gaMeasurementId ? (
          <GoogleAnalytics measurementId={gaMeasurementId} />
        ) : null}
        {ymCounterId ? <YandexMetrika counterId={ymCounterId} /> : null}
        {children}
      </body>
    </html>
  );
}
