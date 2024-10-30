import HeroSection from "@/components/home-page/hero-section";
import FeaturesSection from "@/components/home-page/features-section";
import Waves from "@/components/waves";
import BestSellersSection from "@/components/home-page/best-sellers-section";
import HowItWorksSection from "@/components/home-page/how-it-works-section";

export default async function HomePage() {
  return (
    <>
      <HeroSection />

      <Waves />

      <FeaturesSection />

      <BestSellersSection />

      <HowItWorksSection />
    </>
  );
}
