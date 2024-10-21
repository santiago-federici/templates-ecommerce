import { Template } from "@/interfaces";
import Image from "next/image";

export function Card({ template }: { template: Template }) {
  const { id, title, category, shortDescription, price, thumbnails } = template;

  return (
    <article>
      <a href={`/details/${id}`} className="flex gap-6 justify-between">
        <div className="space-y-4 max-w-72 py-4">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-muted-foreground">{category}</p>
          </div>

          <p className="text-muted-foreground">{shortDescription}</p>

          <span className="w-10 h-px bg-gray-300"></span>

          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">${price} </span>or
            included with all-access
          </p>
        </div>

        <div className="flex gap-6">
          <Image
            src={thumbnails.one}
            alt="Thumbnail one"
            width={288}
            height={192}
            className="rounded-md w-72 h-48"
          />
          <Image
            src={thumbnails.two}
            alt="Thumbnail two"
            width={288}
            height={192}
            className="rounded-md w-72 h-48"
          />
          <Image
            src={thumbnails.three}
            alt="Thumbnail three"
            width={288}
            height={192}
            className="rounded-md w-72 h-48"
          />
        </div>
      </a>
    </article>
  );
}
