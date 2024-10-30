import FeatureCard from "./feature-card";

const featureCards = [
  {
    title: "Responsive Design",
    description:
      "Each template is crafted to look stunning on mobile, tablet, and desktop, ensuring a high-quality user experience across all screens.",
    titleColor: "text-yellow-950",
    descriptionColor: "text-yellow-700",
    img: "/feature-repsonsive-design.webp",
    imgHover: "/feature-repsonsive-design-hover.webp",
    className: "lg:col-span-2",
    bgColor: "bg-[#FFCA3A]",
    imgClassName:
      "absolute -bottom-12 xl:bottom-0 -right-4 lg:right-0 hidden md:block max-lg:w-1/2",
  },
  {
    title: "Modern Aesthetic",
    description:
      "Visually striking and professional styles that give credibility and appeal to your project.",
    titleColor: "text-red-950",
    descriptionColor: "text-red-900",
    img: "/feature-modern-aesthetic.webp",
    imgHover: "/feature-modern-aesthetic-hover.webp",
    className: "lg:row-span-2",
    bgColor: "bg-[#FF7777]",
    imgClassName: "absolute -bottom-12 lg:bottom-0 right-0 hidden md:block",
  },
  {
    title: "Easy Customization",
    description:
      "With a clear structure and reusable components, our templates allow quick adjustments to match your brand’s identity.",
    titleColor: "text-blue-900",
    descriptionColor: "text-blue-700",
    img: "/feature-easy-customization.webp",
    bgColor: "bg-[#AED8FF]",
    imgClassName:
      "absolute bottom-0 right-0 group-hover:right-8 group-hover:scale-125 group-hover:-rotate-12 -group-hover4botto12 lg:bottom-0-4 hidden md:block",
  },
  {
    title: "SEO Optimized",
    description:
      "Built with best SEO practices, these templates help improve search visibility, bringing more traffic to your site.",
    titleColor: "text-pink-900",
    descriptionColor: "text-pink-700",
    img: "/feature-seo-optimized.webp",
    bgColor: "bg-[#FFEBFF]",
    imgClassName:
      "absolute bottom-4 right-4 group-hover:right-12 group-hover:bottom-12 group-hover:-rotate-12 -group-hover4scal12 lg:bottom-0-125 hidden md:block",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative z-10">
      <div className="absolute -z-10 size-full bg-white"></div>

      <div className="wrapper flex flex-col gap-4 py-32">
        <h2 className="text-2xl font-semibold">
          Our <span className="text-primary">Features</span>
        </h2>

        <div className="grid gap-4 lg:h-[650px] lg:grid-cols-3 lg:grid-rows-2">
          {featureCards.map((card) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              img={card.img}
              imgHover={card.imgHover}
              bgColor={card.bgColor}
              titleColor={card.titleColor}
              descriptionColor={card.descriptionColor}
              className={card.className}
              imgClassName={card.imgClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
