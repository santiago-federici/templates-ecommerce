import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({ title, description, className }: Props) {
  return (
    <article
      className={cn(
        "relative h-full w-full cursor-pointer overflow-hidden rounded-md bg-neutral-200 p-6 dark:bg-neutral-800",
        className,
      )}
    >
      <div className="max-w-80 space-y-1">
        <p className="text-xl font-semibold text-foreground">{title}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}
