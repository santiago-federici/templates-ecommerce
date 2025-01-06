import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
}

export default function Button(props: Props) {
  const {
    variant = "default",
    size = "medium",
    className,
    disabled,
    children,
    ...buttonProps
  } = props;

  const baseClasses =
    "px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-sm font-medium ring-offset-background transition duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-primary text-white font-medium hover:opacity-70",
    outline: "border border-border-foreground text-foreground hover:opacity-70",
    ghost:
      "text-muted-foreground hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-foreground/80",
  }[variant];

  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  }[size as "small" | "medium" | "large"];

  const finalClass = cn(baseClasses, variantClasses, sizeClasses, className);

  return (
    <button className={finalClass} disabled={disabled} {...buttonProps}>
      {children}
    </button>
  );
}
