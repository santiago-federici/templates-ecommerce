import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  title: string;
  description: string;
  img: string;
  imgHover?: string;
  bgColor: string;
  titleColor: string;
  descriptionColor: string;
  imgClassName?: string;
}

export default function FeatureCard({
  className,
  title,
  description,
  img,
  imgHover,
  bgColor,
  titleColor,
  descriptionColor,
  imgClassName,
}: Props) {
  return (
    <article
      className={cn(
        "group relative h-full w-full cursor-pointer overflow-hidden rounded-md bg-gray-300 p-8",
        className,
        bgColor,
      )}
    >
      <div className="max-w-96 space-y-1">
        <p className={cn("text-xl font-semibold", titleColor)}>{title}</p>
        <p className={cn(descriptionColor)}>{description}</p>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt=""
        className={cn("duration-300", imgClassName, {
          "group-hover:opacity-0": imgHover,
        })}
      />
      {imgHover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgHover}
          alt=""
          className={cn(
            "opacity-0 duration-300 group-hover:opacity-100",
            imgClassName,
          )}
        />
      )}
    </article>
  );
}
