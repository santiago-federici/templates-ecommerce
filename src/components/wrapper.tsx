import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: Props) {
  return (
    <section className={cn("wrapper relative", className)}>{children}</section>
  );
}
