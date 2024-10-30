import HeroSection from "@/components/home-page/hero-section";
import FeaturesSection from "@/components/home-page/features-section";
import Waves from "@/components/waves";

export default async function HomePage() {
  return (
    <>
      <HeroSection />

      <Waves />

      <FeaturesSection />
    </>
  );
}
