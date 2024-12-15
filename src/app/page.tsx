import BestSellersSection from "@/components/home-page/best-sellers-section";
import FeaturesSection from "@/components/home-page/features-section";
import HeroSection from "@/components/home-page/hero-section";

export default async function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      <BestSellersSection />
    </>
  );
}
