import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureAnnouncement } from "@/components/FeatureAnnouncement";
import { CardReadySection } from "@/components/CardReadySection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { FAQSection } from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
      <Navbar />
      <Hero />
      <FeatureAnnouncement />
      <CardReadySection />
      <MarqueeSection />
      <FAQSection />
    </main>
  );
}

