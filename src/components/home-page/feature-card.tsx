import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import "@/styles/features-cards.css";

interface Props {
  title: string;
  className?: string;
  children?: ReactNode;
}

export default function FeatureCard({ title, className, children }: Props) {
  return (
    <article
      className={cn(
        "group relative h-full min-h-80 w-full rounded-md bg-primary bg-[image:url(/noise.svg)] p-6",
        className,
      )}
    >
      <h3 className="xs:text-3xl bg-gradient-to-br from-white to-zinc-700 bg-clip-text text-2xl font-black text-transparent text-white md:text-4xl">
        {title}
      </h3>

      {children}
    </article>
  );
}
