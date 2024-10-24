import Image from "next/image";

import { Template } from "@/interfaces";

import { HeartIcon } from "./icons";

export function Card({ template }: { template: Template }) {
  const { id, title, category, shortDescription, price, thumbnails } = template;

  return (
    <article className="relative max-w-96 overflow-hidden rounded-md border">
      <a href={`/details/${id}`}>
        <Image
          src={thumbnails.one}
          alt="Thumbnail one"
          width={400}
          height={225}
          className="object-cover"
        />

        <HeartIcon className="absolute right-2 top-3 size-5 shrink-0 fill-white text-white duration-200 hover:fill-red-500 hover:text-red-500" />

        <div className="space-y-4 p-4">
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
      </a>
    </article>
  );
}
