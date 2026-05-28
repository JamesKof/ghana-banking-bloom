import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Ticker } from "@/components/site/Ticker";
import { Hero } from "@/components/site/Hero";
import { QuickLinks } from "@/components/site/QuickLinks";
import { Mandate } from "@/components/site/Mandate";
import { Stats } from "@/components/site/Stats";
import { News } from "@/components/site/News";
import { FXConverter } from "@/components/site/FXConverter";
import { Faq } from "@/components/site/Faq";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bank of Ghana — Central Bank of the Republic of Ghana" },
      { name: "description", content: "The Bank of Ghana is the central bank of Ghana — guarding the cedi, anchoring monetary policy, and securing financial stability since 1957." },
      { property: "og:title", content: "Bank of Ghana — Central Bank of the Republic of Ghana" },
      { property: "og:description", content: "Monetary policy, financial stability, currency and statistics from the central bank of Ghana." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Ticker />
      <main>
        <Hero />
        <QuickLinks />
        <Mandate />
        <Stats />
        <News />
        <FXConverter />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
