import Link from "next/link";

import SectionWrapper from "../section-wrapper";
import Button from "@/components/button";

const heroImages = [
  {
    src: "/hero-section/apolo-landingpage.webp",
    alt: "Screenshot of a landing page template",
  },
  {
    src: "/hero-section/inverfin-landingpage.webp",
    alt: "Screenshot of a landing page template",
  },
  {
    src: "/hero-section/nextjs-ecommerce-fullpage.webp",
    alt: "Screenshot of an ecommerce template",
  },
  {
    src: "/hero-section/nextjs-prod-ecommerce.webp",
    alt: "Screenshot of an ecommerce template",
  },
  {
    src: "/hero-section/template-landingpage.webp",
    alt: "Screenshot of a landing page template",
  },
  {
    src: "/hero-section/template-landingpage.webp",
    alt: "Screenshot of a landing page template",
  },
  {
    src: "/hero-section/portfolio.webp",
    alt: "Screenshot of a portfolio template",
  },
  {
    src: "/hero-section/nextjs-ecommerce-fullpage.webp",
    alt: "Screenshot of an ecommerce template",
  },
  {
    src: "/hero-section/template-landingpage.webp",
    alt: "Screenshot of a landing page template",
  },
];

export default function HeroSection() {
  return (
    <SectionWrapper className="relative mt-10 flex flex-col overflow-hidden max-lg:mb-10 lg:max-h-[800px] lg:flex-row lg:justify-between lg:gap-20">
      <div className="flex w-full min-w-[400px] flex-col gap-6 lg:mt-52">
        <h1 className="text-3xl font-bold text-white">
          Beautifully crafted website templates to jumpstart your project.
        </h1>
        <h3 className="text-base text-white/80">
          Responsive, customizable website templates designed with the latest
          technologies. Perfect for launching your project quickly while
          ensuring a seamless user experience and offering a solid foundation to
          build professional websites.
        </h3>

        <Link href="/templates" className="w-fit">
          <Button className="w-fit text-sm lg:text-base">
            Explore templates
          </Button>
        </Link>
      </div>

      <div className="hidden h-fit columns-[200px] lg:block">
        {heroImages.map((image, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="mb-4 w-full rounded-sm"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
