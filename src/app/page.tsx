import HeroSection from "@/components/home-page/hero-section";
import Waves from "@/components/waves";

export default async function HomePage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -top-32 -z-10 bg-primary"></div>

      <HeroSection />

      <Waves />
    </div>
  );
}
