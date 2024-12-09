import Wrapper from "../wrapper";
import FeatureCard from "./feature-card";

const featureCards = [
  {
    title: "Responsive Design",
    description:
      "Each template is crafted to look stunning on mobile, tablet, and desktop, ensuring a high-quality user experience across all screens.",
    className: "col-span-2",
  },
  {
    title: "Modern Aesthetic",
    description:
      "Visually striking and professional styles that give credibility and appeal to your project.",
    className: "row-span-2",
  },
  {
    title: "Easy Customization",
    description:
      "With a clear structure and reusable components, our templates allow quick adjustments to match your brand’s identity.",
    className: "",
  },
  {
    title: "SEO Optimized",
    description:
      "Built with best SEO practices, these templates help improve search visibility, bringing more traffic to your site.",
    className: "",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative">
      <div className="absolute -left-10 -top-16 -z-10 h-full w-[200%] -rotate-3 bg-primary md:-top-24 xl:-top-36"></div>
      <div className="absolute -bottom-20 left-0 -z-10 h-1/2 w-[200%] bg-primary"></div>
      <Wrapper>
        <h2 className="mb-4 text-2xl font-semibold">Our Features</h2>

        <div className="grid gap-4 lg:h-[650px] lg:grid-cols-3 lg:grid-rows-2">
          {featureCards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              className={card.className}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
