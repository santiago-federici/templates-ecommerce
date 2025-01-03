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
    title: "Urban Vouge",
    category: "Ecommerce",
    shortDescription:
      "A modern ecommerce template designed to enhance your brand’s online presence.",
    mediumDescription:
      "Urban Vogue is a sleek and responsive eCommerce template tailored for fashion, lifestyle, and retail brands. With a focus on user experience, it’s built to showcase your products in a visually appealing way, driving higher conversions and customer engagement.",
    largeDescription: [
      "Urban Vogue is a fully customizable eCommerce template built with Next.js and TailwindCSS. Designed for high-performance, it offers seamless navigation, fast loading times, and smooth product displays, ensuring an optimal user experience on all devices.",
      "Features include customizable product pages, integrated shopping cart functionality, and a fully responsive design that adjusts to mobile, tablet, and desktop displays. You can easily manage inventory, track orders, and integrate popular payment gateways to streamline the checkout process.",
      "Whether you’re a small boutique or a large-scale retailer, Urban Vogue helps you establish a strong online presence with its modern UI components, dynamic product galleries, and sophisticated typography. Its SEO-friendly structure ensures that your products rank higher on search engines, attracting more visitors and potential customers.",
    ],
    price: {
      amount: 59.99,
      currency: "USD",
    },
    techStack: [TAGS.NEXTJS, TAGS.TAILWIND],
    thumbnail: "/templates/urban-vouge-ecommerce/thumbnail.webp",
    screenshots: {
      one: "/templates/urban-vouge-ecommerce/screenshot-1.png",
      two: "/templates/urban-vouge-ecommerce/screenshot-2.png",
      three: "/templates/urban-vouge-ecommerce/screenshot-3.png",
    },
  },
  {
    id: 2,
    title: "Admin Dashboard",
    category: "Dashboard",
    shortDescription:
      "A modern ecommerce template designed to enhance your brand’s online presence.",
    mediumDescription:
      "Urban Vogue is a sleek and responsive eCommerce template tailored for fashion, lifestyle, and retail brands. With a focus on user experience, it’s built to showcase your products in a visually appealing way, driving higher conversions and customer engagement.",
    largeDescription: [
      "Urban Vogue is a fully customizable eCommerce template built with Next.js and TailwindCSS. Designed for high-performance, it offers seamless navigation, fast loading times, and smooth product displays, ensuring an optimal user experience on all devices.",
      "Features include customizable product pages, integrated shopping cart functionality, and a fully responsive design that adjusts to mobile, tablet, and desktop displays. You can easily manage inventory, track orders, and integrate popular payment gateways to streamline the checkout process.",
      "Whether you’re a small boutique or a large-scale retailer, Urban Vogue helps you establish a strong online presence with its modern UI components, dynamic product galleries, and sophisticated typography. Its SEO-friendly structure ensures that your products rank higher on search engines, attracting more visitors and potential customers.",
    ],
    price: {
      amount: 99.99,
      currency: "USD",
    },
    techStack: [TAGS.NEXTJS, TAGS.TAILWIND],
    thumbnail: "/templates/admin-dashboard/thumbnail.webp",
    screenshots: {
      one: "/templates/admin-dashboard/screenshot-1.png",
      two: "/templates/admin-dashboard/screenshot-2.png",
      three: "/templates/admin-dashboard/screenshot-3.png",
    },
  },
  {
    id: 3,
    title: "Landing page",
    category: "Landing page",
    shortDescription:
      "A modern ecommerce template designed to enhance your brand’s online presence.",
    mediumDescription:
      "Urban Vogue is a sleek and responsive eCommerce template tailored for fashion, lifestyle, and retail brands. With a focus on user experience, it’s built to showcase your products in a visually appealing way, driving higher conversions and customer engagement.",
    largeDescription: [
      "Urban Vogue is a fully customizable eCommerce template built with Next.js and TailwindCSS. Designed for high-performance, it offers seamless navigation, fast loading times, and smooth product displays, ensuring an optimal user experience on all devices.",
      "Features include customizable product pages, integrated shopping cart functionality, and a fully responsive design that adjusts to mobile, tablet, and desktop displays. You can easily manage inventory, track orders, and integrate popular payment gateways to streamline the checkout process.",
      "Whether you’re a small boutique or a large-scale retailer, Urban Vogue helps you establish a strong online presence with its modern UI components, dynamic product galleries, and sophisticated typography. Its SEO-friendly structure ensures that your products rank higher on search engines, attracting more visitors and potential customers.",
    ],
    price: {
      amount: 9.99,
      currency: "USD",
    },
    techStack: [TAGS.NEXTJS, TAGS.TAILWIND],
    thumbnail: "/templates/landing-page-1/thumbnail.webp",
    screenshots: {
      one: "/templates/landing-page-1/screenshot-1.png",
      two: "/templates/landing-page-1/screenshot-2.png",
      three: "/templates/landing-page-1/screenshot-3.png",
    },
  },
  {
    id: 4,
    title: "Landing page",
    category: "Landing page",
    shortDescription:
      "A modern ecommerce template designed to enhance your brand’s online presence.",
    mediumDescription:
      "Urban Vogue is a sleek and responsive eCommerce template tailored for fashion, lifestyle, and retail brands. With a focus on user experience, it’s built to showcase your products in a visually appealing way, driving higher conversions and customer engagement.",
    largeDescription: [
      "Urban Vogue is a fully customizable eCommerce template built with Next.js and TailwindCSS. Designed for high-performance, it offers seamless navigation, fast loading times, and smooth product displays, ensuring an optimal user experience on all devices.",
      "Features include customizable product pages, integrated shopping cart functionality, and a fully responsive design that adjusts to mobile, tablet, and desktop displays. You can easily manage inventory, track orders, and integrate popular payment gateways to streamline the checkout process.",
      "Whether you’re a small boutique or a large-scale retailer, Urban Vogue helps you establish a strong online presence with its modern UI components, dynamic product galleries, and sophisticated typography. Its SEO-friendly structure ensures that your products rank higher on search engines, attracting more visitors and potential customers.",
    ],
    price: {
      amount: 14.99,
      currency: "USD",
    },
    techStack: [TAGS.NEXTJS, TAGS.TAILWIND],
    thumbnail: "/templates/landing-page-2/thumbnail.webp",
    screenshots: {
      one: "/templates/landing-page-2/screenshot-1.png",
      two: "/templates/landing-page-2/screenshot-2.png",
      three: "/templates/landing-page-2/screenshot-3.png",
    },
  },
  {
    id: 5,
    title: "Personal portfolio",
    category: "Portfolio",
    shortDescription:
      "A modern ecommerce template designed to enhance your brand’s online presence.",
    mediumDescription:
      "Urban Vogue is a sleek and responsive eCommerce template tailored for fashion, lifestyle, and retail brands. With a focus on user experience, it’s built to showcase your products in a visually appealing way, driving higher conversions and customer engagement.",
    largeDescription: [
      "Urban Vogue is a fully customizable eCommerce template built with Next.js and TailwindCSS. Designed for high-performance, it offers seamless navigation, fast loading times, and smooth product displays, ensuring an optimal user experience on all devices.",
      "Features include customizable product pages, integrated shopping cart functionality, and a fully responsive design that adjusts to mobile, tablet, and desktop displays. You can easily manage inventory, track orders, and integrate popular payment gateways to streamline the checkout process.",
      "Whether you’re a small boutique or a large-scale retailer, Urban Vogue helps you establish a strong online presence with its modern UI components, dynamic product galleries, and sophisticated typography. Its SEO-friendly structure ensures that your products rank higher on search engines, attracting more visitors and potential customers.",
    ],
    price: {
      amount: 19.99,
      currency: "USD",
    },
    techStack: [TAGS.NEXTJS, TAGS.TAILWIND],
    thumbnail: "/templates/portfolio/thumbnail.webp",
    screenshots: {
      one: "/templates/portfolio/screenshot-1.png",
      two: "/templates/portfolio/screenshot-2.png",
      three: "/templates/portfolio/screenshot-3.png",
    },
  },
];

export const bestSellers: Template[] = templates.filter(
  (template) => template.price.amount > 5,
);
