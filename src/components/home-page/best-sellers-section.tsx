import { Fragment } from "react";
import Wrapper from "../wrapper";
import BestSellerCard from "./best-seller-card";

const bestSellers = [
  {
    id: 1,
    title: "Admin dashboard",
    image: "/mockups/admin-dashboard-template-mockup.webp",
    price: "49.99",
  },
  {
    id: 2,
    title: "Landing page",
    image: "/mockups/inverfin-template-mockup.webp",
    price: "19.99",
  },
  {
    id: 3,
    title: "Inverifn",
    image: "/mockups/landing-page-template-mockup.webp",
    price: "19.99",
  },
  {
    id: 4,
    title: "Personal portfolio",
    image: "/mockups/portfolio-template-mockup.webp",
    price: "29.99",
  },
  {
    id: 5,
    title: "Admin dashboard",
    image: "/mockups/admin-dashboard-template-mockup.webp",
    price: "49.99",
  },
  {
    id: 6,
    title: "Landing page",
    image: "/mockups/inverfin-template-mockup.webp",
    price: "19.99",
  },
];

export default function BestSellersSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-zinc-200"></div>

      <Wrapper className="flex flex-col gap-4">
        <h2 className="mb-4 text-3xl font-semibold">
          Best <span className="font-bold text-primary">Sellers</span>
        </h2>

        <section className="best-sellers-section flex gap-8 overflow-x-auto pb-4 [scrollbar-color:#888_transparent;] [scrollbar-width:thin]">
          {bestSellers.map((bestSeller) => (
            <Fragment key={bestSeller.id}>
              <BestSellerCard
                title={bestSeller.title}
                image={bestSeller.image}
                price={bestSeller.price}
              />
            </Fragment>
          ))}
        </section>
      </Wrapper>
    </section>
  );
}
