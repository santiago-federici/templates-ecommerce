import {
  AstroIcon,
  CSSIcon,
  JavaScriptIcon,
  NextjsIcon,
  ReactIcon,
  TailwindCSSIcon,
} from "./components/icons";
import { Tag, Template } from "./interfaces";

const TAGS: { [key: string]: Tag } = {
  NEXTJS: {
    name: "Nextjs",
    className: "bg-blue-500",
    icon: NextjsIcon,
  },
  TAILWIND: {
    name: "Tailwind",
    className: "bg-[#1c2b4e] text-white",
    icon: TailwindCSSIcon,
  },
  REACT: {
    name: "React",
    className: "bg-[#087EA4] text-white",
    icon: ReactIcon,
  },
  CSS: {
    name: "CSS",
    className: "bg-[#013158] text-white",
    icon: CSSIcon,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    className: "bg-black text-yellow-200",
    icon: JavaScriptIcon,
  },
  ASTRO: {
    name: "Astro",
    className: "bg-[#5D16A1] text-white",
    icon: AstroIcon,
  },
};

export const templates: Template[] = [
  {
    id: 1,
    title: "Catalyst",
    category: "Application UI kit",
    description:
      "Modern application UI components to kickstart your design system.",
    largeDescription:
      "Move as fast as you can with a UI library without compromising on your own vision with modern UI components that are part of your own codebase.",
    price: 149,
    imageOne:
      "https://santiago-federici-portfolio.vercel.app/projects/InverfinLandingpage.webp",
    imageTwo:
      "https://santiago-federici-portfolio.vercel.app/projects/template-landingpage.webp",
    imageThree:
      "https://santiago-federici-portfolio.vercel.app/projects/ApoloAdmin.webp",
    techStack: [TAGS.NEXTJS, TAGS.TAILWIND],
  },
];
