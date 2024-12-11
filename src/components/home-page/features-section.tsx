import Wrapper from "../wrapper";
import FeatureCard from "./feature-card";

const featureCards = [
  {
    title: "CUSTOMIZABLE TEMPLATES",
    className: "col-span-2",
  },
  {
    title: "RESPONSIVE LAYOUTS",
    className: "row-span-2",
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
      <div className="absolute -left-10 -top-16 -z-10 h-full w-[200%] -rotate-3 bg-[#171616] md:-top-24 xl:-top-36"></div>
      <div className="absolute -bottom-20 left-0 -z-10 h-1/2 w-[200%] bg-[#171616]"></div>
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
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
