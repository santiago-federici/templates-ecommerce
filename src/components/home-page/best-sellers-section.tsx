import { templates } from "@/templates";
import { Fragment } from "react";
import { Card } from "../card";
import Button from "../button";
import Link from "next/link";
import SectionWrapper from "../section-wrapper";

export default function BestSellersSection() {
  return (
    <SectionWrapper sectionBgColor="bg-white" className="pb-32 pt-10">
      <h2 className="text-2xl font-semibold">
        Best <span className="text-primary">sellers</span>
      </h2>

      <div className="mx-auto grid w-fit gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:w-full xl:grid-cols-templates">
        {templates.map((template) => (
          <Fragment key={template.id}>
            <Card template={template} />
          </Fragment>
        ))}
      </div>

      <Link href="/templates">
        <Button className="text-sm lg:text-base">Explore all templates</Button>
      </Link>
    </SectionWrapper>
  );
}
