import { cn } from "@/lib/utils";

interface CustomStyles {
  bgColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  imgClassName?: string;
  cardClassName?: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  img: string;
  imgHover?: string;
  alt: string;
  customStyles?: CustomStyles;
}

export default function FeatureCard({
  title,
  description,
  img,
  imgHover,
  alt,
  customStyles = {},
}: FeatureCardProps) {
  const {
    bgColor = "bg-gray-300",
    titleColor = "text-gray-900",
    descriptionColor = "text-gray-700",
    imgClassName = "absolute bottom-0 right-0 hidden md:block",
    cardClassName = "",
  } = customStyles;

  return (
    <article
      className={cn(
        "group relative h-full w-full cursor-pointer overflow-hidden rounded-md p-8",
        bgColor,
        cardClassName,
      )}
    >
      <div className="max-w-80 space-y-1">
        <p className={cn("text-xl font-semibold", titleColor)}>{title}</p>
        <p className={cn(descriptionColor)}>{description}</p>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={alt}
        className={cn("duration-300", imgClassName, {
          "group-hover:opacity-0": imgHover,
        })}
      />
      {imgHover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgHover}
          alt={alt}
          className={cn(
            "absolute opacity-0 duration-300 group-hover:opacity-100",
            imgClassName,
          )}
        />
      )}
    </article>
  );
}
