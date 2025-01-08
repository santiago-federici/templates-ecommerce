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
    icon: <NextjsIcon className="size-5" />,
  },
  TAILWIND: {
    name: "Tailwind",
    className: "bg-[#1c2b4e] text-white",
    icon: <TailwindCSSIcon className="size-5" />,
  },
  REACT: {
    name: "React",
    className: "bg-[#087EA4] text-white",
    icon: <ReactIcon className="size-5" />,
  },
  CSS: {
    name: "CSS",
    className: "bg-[#013158] text-white",
    icon: <CSSIcon className="size-5" />,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    className: "bg-black text-yellow-200",
    icon: <JavaScriptIcon className="size-5" />,
  },
  ASTRO: {
    name: "Astro",
    className: "bg-[#5D16A1] text-white",
    icon: <AstroIcon className="size-5" />,
  },
};

export const templates: Template[] = [
  // {
  //   id: 1,
  //   title: "Urban Vouge",
  //   category: "Ecommerce",
  //   shortDescription:
  //     "A modern ecommerce template designed to enhance your brand’s online presence.",
  //   mediumDescription:
  //     "Urban Vogue is a sleek and responsive eCommerce template tailored for fashion, lifestyle, and retail brands. With a focus on user experience, it’s built to showcase your products in a visually appealing way, driving higher conversions and customer engagement.",
  //   largeDescription: [
  //     "Urban Vogue is a fully customizable eCommerce template built with Next.js and TailwindCSS. Designed for high-performance, it offers seamless navigation, fast loading times, and smooth product displays, ensuring an optimal user experience on all devices.",
  //     "Features include customizable product pages, integrated shopping cart functionality, and a fully responsive design that adjusts to mobile, tablet, and desktop displays. You can easily manage inventory, track orders, and integrate popular payment gateways to streamline the checkout process.",
  //     "Whether you’re a small boutique or a large-scale retailer, Urban Vogue helps you establish a strong online presence with its modern UI components, dynamic product galleries, and sophisticated typography. Its SEO-friendly structure ensures that your products rank higher on search engines, attracting more visitors and potential customers.",
  //   ],
  //   price: {
  //     amount: 59.99,
  //     currency: "ARS",
  //   },
  //   techStack: [TAGS.NEXTJS, TAGS.TAILWIND],
  //   thumbnail: "/templates/urban-vouge-ecommerce/thumbnail.webp",
  //   screenshots: {
  //     one: "/templates/urban-vouge-ecommerce/Screenshot-1.png",
  //     two: "/templates/urban-vouge-ecommerce/Screenshot-2.png",
  //     three: "/templates/urban-vouge-ecommerce/Screenshot-3.png",
  //   },
  //   preview: "https://nextjs-ecommerce-eight-delta.vercel.app/",
  // },
  // {
  //   id: 2,
  //   title: "Admin Dashboard",
  //   category: "Dashboard",
  //   shortDescription:
  //     "A modern ecommerce template designed to enhance your brand’s online presence.",
  //   mediumDescription:
  //     "Urban Vogue is a sleek and responsive eCommerce template tailored for fashion, lifestyle, and retail brands. With a focus on user experience, it’s built to showcase your products in a visually appealing way, driving higher conversions and customer engagement.",
  //   largeDescription: [
  //     "Urban Vogue is a fully customizable eCommerce template built with Next.js and TailwindCSS. Designed for high-performance, it offers seamless navigation, fast loading times, and smooth product displays, ensuring an optimal user experience on all devices.",
  //     "Features include customizable product pages, integrated shopping cart functionality, and a fully responsive design that adjusts to mobile, tablet, and desktop displays. You can easily manage inventory, track orders, and integrate popular payment gateways to streamline the checkout process.",
  //     "Whether you’re a small boutique or a large-scale retailer, Urban Vogue helps you establish a strong online presence with its modern UI components, dynamic product galleries, and sophisticated typography. Its SEO-friendly structure ensures that your products rank higher on search engines, attracting more visitors and potential customers.",
  //   ],
  //   price: {
  //     amount: 99.99,
  //     currency: "ARS",
  //   },
  //   techStack: [TAGS.NEXTJS, TAGS.TAILWIND],
  //   thumbnail: "/templates/admin-dashboard/thumbnail.webp",
  //   screenshots: {
  //     one: "/templates/admin-dashboard/Screenshot-1.png",
  //     two: "/templates/admin-dashboard/Screenshot-2.png",
  //     three: "/templates/admin-dashboard/Screenshot-3.png",
  //   },
  //   preview: "https://barber-admin-dashboard.vercel.app/",
  // },
  {
    id: 3,
    title: "Unnamed Landing Page",
    category: "Landing Page",
    shortDescription:
      "A versatile landing page template to showcase your product or service effortlessly.",
    mediumDescription:
      "Focus on your product or service with a streamlined design that boosts engagement and conversions. Unnamed Landing Page offers a robust structure to create a captivating online presence.",
    largeDescription: [
      "The Unnamed Landing Page template is built with Astro and TailwindCSS, offering a lightweight and highly customizable experience. Its modular design lets you create layouts that fit your brand’s unique needs.",
      "Features include fully responsive design, animation-ready sections, and pre-built components for testimonials, features, steps, and more. Its SEO-friendly architecture ensures that your landing page gets the visibility it deserves.",
      "This template is perfect for those who want to launch quickly and efficiently without compromising on design or functionality.",
    ],
    price: {
      amount: 50000,
      currency: "ARS",
    },
    techStack: [TAGS.ASTRO, TAGS.TAILWIND],
    thumbnail: "/templates/unnamed-landing-page/thumbnail.webp",
    screenshots: {
      one: "/templates/unnamed-landing-page/Screenshot-1.webp",
      two: "/templates/unnamed-landing-page/Screenshot-2.webp",
      three: "/templates/unnamed-landing-page/Screenshot-3.webp",
    },
    preview: "https://template-landingpage.vercel.app/",
  },

  {
    id: 4,
    title: "Developer Portfolio",
    category: "Portfolio",
    shortDescription:
      "A professional portfolio template to showcase your skills and projects effectively.",
    mediumDescription:
      "Make an unforgettable impression with this sleek and customizable portfolio template. Perfect for developers who want to display their work in style.",
    largeDescription: [
      "Built with Astro and TailwindCSS, the Developer Portfolio template offers a smooth and dynamic user experience. It includes pre-built sections for about, projects, contact, and more.",
      "This template is fully responsive, ensuring that your portfolio looks great on all devices. It's easy to customize and adapt to match your personal branding.",
      "Whether you’re a seasoned developer or just starting your career, this template is designed to help you leave a lasting impression on potential employers, clients, and collaborators.",
    ],
    price: {
      amount: 80000,
      currency: "ARS",
    },
    techStack: [TAGS.ASTRO, TAGS.TAILWIND],
    thumbnail: "/templates/portfolio/thumbnail.webp",
    screenshots: {
      one: "/templates/portfolio/Screenshot-1.webp",
      two: "/templates/portfolio/Screenshot-2.webp",
      three: "/templates/portfolio/Screenshot-3.webp",
    },
    preview: "https://santiago-federici-portfolio.vercel.app/",
  },

  {
    id: 5,
    title: "Apolo",
    category: "Landing Page",
    shortDescription:
      "An elegant and modern landing page template for impactful online presence.",
    mediumDescription:
      "Craft a stunning first impression with Apolo. This versatile landing page template is perfect for showcasing your product, service, or campaign with elegance and precision.",
    largeDescription: [
      "Apolo is a fully customizable landing page template built with Astro and TailwindCSS. It features clean design elements, smooth animations, and intuitive layouts to enhance user engagement and conversions.",
      "The template includes customizable sections for showcasing your product, features, pricing and call-to-action areas. It is fully responsive, ensuring a seamless user experience across devices from mobile to desktop.",
      "Whether you're launching a new product or promoting your services, Apolo provides the tools you need to succeed. Its SEO-friendly structure ensures your content ranks higher in search engines, driving organic traffic to your page.",
    ],
    price: {
      amount: 50000,
      currency: "ARS",
    },
    techStack: [TAGS.ASTRO, TAGS.TAILWIND],
    thumbnail: "/templates/apolo-landing-page/thumbnail.webp",
    screenshots: {
      one: "/templates/apolo-landing-page/Screenshot-1.webp",
      two: "/templates/apolo-landing-page/Screenshot-2.webp",
      three: "/templates/apolo-landing-page/Screenshot-3.webp",
    },
    preview: "https://apolo-landingpage.vercel.app/",
  },
];

export const bestSellers: Template[] = templates.filter(
  (template) => template.price.amount > 5,
);
