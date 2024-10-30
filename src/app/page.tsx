import HeroSection from "@/components/home-page/hero-section";
import FeaturesSection from "@/components/home-page/features-section";
import Waves from "@/components/waves";
import BestSellersSection from "@/components/home-page/best-sellers-section";

export default async function HomePage() {
  return (
    <>
      <HeroSection />

      <Waves />

      <FeaturesSection />

      <BestSellersSection />
    </>
  );
}
