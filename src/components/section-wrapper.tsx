import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  sectionBgColor?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  sectionBgColor,
  className,
}: Props) {
  return (
    <section className="relative">
      {sectionBgColor && (
        <div className={cn("absolute -z-10 size-full", sectionBgColor)}></div>
      )}

      <div className={cn("wrapper flex flex-col gap-4", className)}>
        {children}
      </div>
    </section>
  );
}
