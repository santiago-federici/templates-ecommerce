import Image from "next/image";

import { Template } from "@/interfaces";

export default function TemplateCard({ template }: { template: Template }) {
  const { id, title, category, shortDescription, price, screenshots } =
    template;

  const { one, two, three } = screenshots;

  return (
    <article>
      <a
        href={`/details/${id}`}
        className="flex justify-between gap-4 max-md:flex-col md:h-48"
      >
        <div className="w-full md:w-fit md:max-w-[30ch]">
          <p className="mb-2 text-sm font-normal text-muted-foreground">
            {category}
          </p>
          <h3 className="mb-4 text-xl font-semibold">{title}</h3>

          <p className="mb-4 text-muted-foreground">{shortDescription}</p>

          <p className="font-semibold">${price.amount}</p>
        </div>

        <div className="flex w-full gap-4 overflow-x-auto [scrollbar-color:#888_transparent;] [scrollbar-width:thin]">
          <Image
            src={one}
            alt="Screenshot one"
            width={1607}
            height={904}
            className="h-auto w-full rounded-xl"
          />
          <Image
            src={two}
            alt="Screenshot two"
            width={1607}
            height={904}
            className="hidden h-auto w-full rounded-xl md:block"
          />

          <Image
            src={three}
            alt="Screenshot three"
            width={1607}
            height={904}
            className="hidden h-auto w-full rounded-xl md:block"
          />
        </div>
      </a>
    </article>
  );
}
