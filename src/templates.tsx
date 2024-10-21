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
    shortDescription:
      "Modern application UI components to kickstart your design system.",
    mediumDescription:
      "Move as fast as you can with a UI library without compromising on your own vision with modern UI components that are part of your own codebase.",
    largeDescription: [
      "Catalyst is a modern application UI kit built with Tailwind CSS, Headless UI and React, designed and built by the Tailwind CSS team. It's a collection of beautiful, production-ready UI components you drop into your projects alongside your own code that are yours to customize, adapt, and make your own.",
      "Skip all the time you'd spend building your own buttons, form controls, dialogs, tables, dropdown menus, and more and hit the ground running with carefully crafted component APIs that are a delight to use.",
      "Built by experts — you can trust that all of the code is written following Tailwind CSS best practices, because it’s written by the same team who created and maintain the framework.",
      "Easy to customize — everything is styled with utility classes, directly in the component markup. No configuration variables or complex CSS to wrestle with, just open any component in your editor and change whatever you want.",
      "Built with React — well-structured, thoughtfully designed React components, built by experts with years of React experience. Benefit from the strength and maturity of the React ecosystem.",
      "Keyboard accessible — everything we build is keyboard accessible, and we carefully craft the markup to deliver the best screenreader experience we know how.",
      "TypeScript or JavaScript — authored with the latest version of TypeScript by nerds who get way too much satisfaction out of getting the types just right, giving you the best possible developer experience. We also include a plain JavaScript version, just in case TypeScript isn't your thing.",
    ],
    price: {
      amount: 149,
      currency: "USD",
    },
    techStack: [TAGS.NEXTJS, TAGS.TAILWIND],
    image:
      "https://santiago-federici-portfolio.vercel.app/projects/template-landingpage.webp",
    thumbnails: {
      one: "https://santiago-federici-portfolio.vercel.app/projects/InverfinLandingpage.webp",
      two: "https://santiago-federici-portfolio.vercel.app/projects/template-landingpage.webp",
      three:
        "https://santiago-federici-portfolio.vercel.app/projects/ApoloAdmin.webp",
    },
    screenshots: {
      one: "https://santiago-federici-portfolio.vercel.app/projects/InverfinLandingpage.webp",
      two: "https://santiago-federici-portfolio.vercel.app/projects/template-landingpage.webp",
      three:
        "https://santiago-federici-portfolio.vercel.app/projects/ApoloAdmin.webp",
      four: "https://santiago-federici-portfolio.vercel.app/projects/InverfinLandingpage.webp",
    },
  },
];
