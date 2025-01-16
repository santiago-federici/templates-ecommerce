import { Fragment } from "react";
import Wrapper from "../wrapper";
import BestSellerCard from "./best-seller-card";
import { bestSellers } from "@/templates";
import Button from "../button";
import Link from "next/link";

export default function BestSellersSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-zinc-200"></div>

      <Wrapper className="flex flex-col gap-4">
        <h2 className="mb-4 text-3xl font-semibold">
          Best <span className="font-bold text-primary">Sellers</span>
        </h2>

        <section className="best-sellers-section flex gap-8 overflow-x-auto pb-4 [scrollbar-color:#888_transparent;] [scrollbar-width:thin;]">
          {bestSellers.map((bestSeller) => (
            <Fragment key={bestSeller.id}>
              <BestSellerCard
                id={bestSeller.id}
                title={bestSeller.title}
                image={bestSeller.thumbnail}
                price={bestSeller.price.amount.toString()}
              />
            </Fragment>
          ))}
        </section>

        <Button className="w-fit">
          <Link href={"/templates"}>View all</Link>
        </Button>
      </Wrapper>
    </section>
  );
}
