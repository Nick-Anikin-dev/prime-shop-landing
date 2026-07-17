import { LEGAL } from "@/lib/legal";
import { FAQ_ITEMS } from "@/lib/faq";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Prime Shop",
    url: LEGAL.site,
    email: LEGAL.email,
    telephone: LEGAL.phone,
    logo: `${LEGAL.site}/img/android-chrome-192x192.png`,
    description:
      "Облачная программа учёта для розничного магазина в Беларуси: касса, товары, склад и аналитика.",
    founder: {
      "@type": "Person",
      name: "Николай Аникин",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BY",
    },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Prime Shop",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: LEGAL.site,
    description:
      "Программа учёта для розничного магазина: онлайн-касса, склад, товары, аналитика и отчёты в браузере. Цены в BYN, бесплатный тариф.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BYN",
      description: "Бесплатный тариф и платные планы от 89 BYN/мес",
    },
    inLanguage: "ru",
    provider: {
      "@type": "Organization",
      name: "Prime Shop",
      url: LEGAL.site,
    },
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
