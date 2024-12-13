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
        "group relative h-full w-full overflow-hidden rounded-md border border-neutral-800 bg-primary bg-[image:url(/noise.svg)] p-6",
        className,
      )}
    >
      <h3 className="bg-gradient-to-br from-white to-zinc-700 bg-clip-text text-4xl font-black text-transparent text-white">
        {title}
      </h3>

      {children}
    </article>
  );
}
