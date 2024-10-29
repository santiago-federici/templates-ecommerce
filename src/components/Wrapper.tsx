import { cn } from "@/lib/utils";

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("wrapper flex flex-col gap-4", className)}>
      {children}
    </section>
  );
}
