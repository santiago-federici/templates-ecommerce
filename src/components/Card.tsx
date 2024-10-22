import { Template } from "@/interfaces";
import Image from "next/image";

export function Card({ template }: { template: Template }) {
  const { id, title, category, shortDescription, price, thumbnails } = template;

  return (
    <article>
      <a href={`/details/${id}`} className="flex justify-between gap-6">
        <div className="max-w-72 space-y-4 py-4">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground">{category}</p>
          </div>

          <p className="text-muted-foreground">{shortDescription}</p>

          <span className="h-px w-10 bg-gray-300"></span>

          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">
              ${price.amount}{" "}
            </span>
            or included with all-access
          </p>
        </div>

        <div className="flex gap-6">
          <Image
            src={thumbnails.one}
            alt="Thumbnail one"
            width={288}
            height={192}
            className="h-48 w-72 rounded-md"
          />
          <Image
            src={thumbnails.two}
            alt="Thumbnail two"
            width={288}
            height={192}
            className="h-48 w-72 rounded-md"
          />
          <Image
            src={thumbnails.three}
            alt="Thumbnail three"
            width={288}
            height={192}
            className="h-48 w-72 rounded-md"
          />
        </div>
      </a>
    </article>
  );
}
