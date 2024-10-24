import { Template } from "@/interfaces";
import Button from "./button";

export function Card({ template }: { template: Template }) {
  const { id, title, category, shortDescription, price, thumbnails } = template;

  return (
    <article>
      <a
        href={`/details/${id}`}
        className="flex flex-col gap-2 overflow-hidden rounded-xl border lg:flex-row lg:gap-6"
      >
        <div className="relative aspect-video h-auto w-full lg:h-60 lg:w-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnails.one}
            alt="Thumbnail one"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <span>-</span>
            <p className="text-muted-foreground">{category}</p>
          </div>

          <p className="text-muted-foreground xl:max-w-[450px]">
            {shortDescription}
          </p>

          <div className="h-px w-20 bg-gray-300" />

          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">
              ${price.amount}{" "}
            </span>
            or included with all-access
          </p>

          <div className="flex flex-col gap-2 max-lg:w-full lg:flex-row">
            <Button variant="outline">Live preview</Button>
            <Button>Buy now</Button>
          </div>
        </div>
      </a>
    </article>
  );
}
