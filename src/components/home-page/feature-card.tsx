import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
}

export default function FeatureCard({ title, className }: Props) {
  return (
    <article
      className={cn(
        "relative h-full w-full overflow-hidden rounded-md bg-zinc-800 p-6",
        className,
      )}
    >
      <h3 className="bg-gradient-to-br from-white to-zinc-700 bg-clip-text text-4xl font-black text-transparent text-white">
        {title}
      </h3>
    </article>
  );
}
