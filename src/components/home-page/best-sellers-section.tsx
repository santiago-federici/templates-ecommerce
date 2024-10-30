import { templates } from "@/templates";
import { Fragment } from "react";
import { Card } from "../card";
import Button from "../button";
import Link from "next/link";

export default function BestSellersSection() {
  return (
    <section className="relative">
      <div className="absolute -z-10 size-full bg-white"></div>

      <div className="wrapper flex flex-col gap-4 py-10">
        <h2 className="text-2xl font-semibold">
          Best <span className="text-primary">sellers</span>
        </h2>

        <div className="flex gap-4">
          {templates.map((template) => (
            <Fragment key={template.id}>
              <Card template={template} />
            </Fragment>
          ))}
        </div>

        <Link href="/templates">
          <Button className="text-sm lg:text-base">
            Explore all templates
          </Button>
        </Link>
      </div>
    </section>
  );
}
