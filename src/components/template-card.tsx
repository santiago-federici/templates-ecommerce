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
        className="flex justify-between gap-4 max-md:flex-col md:h-44"
      >
        <div className="flex w-full max-w-[40ch] flex-col gap-4">
          <h3 className="text-xl font-semibold">
            {title}{" "}
            <span className="text-base font-normal text-muted-foreground">
              - {category}
            </span>
          </h3>

          <p className="text-muted-foreground">{shortDescription}</p>

          <p className="font-semibold">
            ${price.amount}{" "}
            <span className="font-normal text-muted-foreground">
              - or included with all-access
            </span>
          </p>
        </div>

        <div className="flex w-fit gap-6 overflow-x-auto [scrollbar-color:#888_transparent;] [scrollbar-width:thin]">
          <Image
            src={one}
            alt="Screenshot one"
            width={1607}
            height={904}
            className="h-auto w-full rounded-xl md:h-full md:w-auto"
          />
          <Image
            src={two}
            alt="Screenshot two"
            width={1607}
            height={904}
            className="hidden h-full w-auto rounded-xl md:block"
          />
          <Image
            src={three}
            alt="Screenshot three"
            width={1607}
            height={904}
            className="hidden h-full w-auto rounded-xl md:block"
          />
        </div>
      </a>
    </article>
  );
}
