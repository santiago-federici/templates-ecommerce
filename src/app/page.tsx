import HeroSection from "@/components/home-page/hero-section";
import FeaturesSection from "@/components/home-page/features-section";
import Waves from "@/components/waves";

export default async function HomePage() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-screen w-full bg-primary"></div>

      <HeroSection />

      <Waves />

      <FeaturesSection />
    </>
  );
}
