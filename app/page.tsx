import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Screenshots } from "@/components/sections/Screenshots";
import { Showcase } from "@/components/sections/Showcase";
import { Benefits } from "@/components/sections/Benefits";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { SeoContent } from "@/components/sections/SeoContent";
import { Footer } from "@/components/sections/Footer";
import { JsonLd, faqPageJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Showcase />
        <Benefits />
        <Pricing />
        <Faq />
        <Cta />
        <SeoContent />
      </main>
      <Footer />
    </>
  );
}
