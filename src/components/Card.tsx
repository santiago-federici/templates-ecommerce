import { Template } from "@/interfaces";
import Image from "next/image";

export function Card({ template }: { template: Template }) {
  const { id, title, category, shortDescription, price, thumbnails } = template;

  return (
    <article className="overflow-hidden">
      <a
        href={`/details/${id}`}
        className="flex flex-col gap-6 md:flex-row md:justify-between"
      >
        <div className="space-y-3 py-4 md:max-w-72 xl:max-w-96">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground">{category}</p>
          </div>

          <p className="text-muted-foreground">{shortDescription}</p>

          <div className="h-px w-20 bg-gray-300" />

          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">
              ${price.amount}{" "}
            </span>
            or included with all-access
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto">
          <Image
            src={thumbnails.one}
            alt="Thumbnail one"
            width={288}
            height={192}
            className="h-auto w-full rounded-md lg:h-48 lg:w-72"
            quality={100}
          />
          <Image
            src={thumbnails.two}
            alt="Thumbnail two"
            width={288}
            height={192}
            className="hidden h-48 w-72 rounded-md lg:block"
          />
          <Image
            src={thumbnails.three}
            alt="Thumbnail three"
            width={288}
            height={192}
            className="hidden h-48 w-72 rounded-md lg:block"
          />
        </div>
      </a>
    </article>
  );
}
