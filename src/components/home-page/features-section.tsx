import { MiniDashboard } from "@/components/features-cards/mini-dashboard";
import { MiniWeb } from "@/components/features-cards/mini-web";
import Wrapper from "../wrapper";
import FeatureCard from "./feature-card";

const featureCards = [
  {
    title: "CUSTOMIZABLE TEMPLATES",
    className: "lg:col-span-2",
    children: <MiniDashboard />,
  },
  {
    title: "RESPONSIVE LAYOUTS",
    className: "lg:row-span-2",
    children: <MiniWeb />,
  },
  {
    title: "FAST PERFORMANCE",
    className: "",
  },
  {
    title: "VARIETY OF CATEGORIES",
    className: "",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative pb-40">
      <div className="absolute -left-10 -top-16 -z-10 h-full w-[200%] -rotate-3 bg-[#010100] md:-top-24 xl:-top-36"></div>
      <div className="absolute -bottom-20 left-0 -z-10 h-1/2 w-[200%] bg-[#010100]"></div>
      <Wrapper>
        <h2 className="mb-4 text-3xl font-semibold text-background">
          Why choose <span className="font-bold text-primary">Santora</span>?
        </h2>

        <div className="grid gap-4 lg:h-[650px] lg:grid-cols-3 lg:grid-rows-2">
          {featureCards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              className={card.className}
            >
              {card.children}
            </FeatureCard>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
