import { cn } from "@/lib/utils";

const paginationItems = [
  { label: "Previous" },
  { label: "1", href: "/#", isActive: true },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "Next" },
];

export default function Pagination() {
  return (
    <nav className="ml-auto mt-20 w-fit">
      <ol className="flex items-center rounded-l-md rounded-r-md border">
        {paginationItems.map((item) => (
          <li
            key={item.label}
            className={cn(
              "flex cursor-pointer items-center justify-center border-l transition-all duration-200 first:border-none hover:bg-gray-200",
              {
                "text-gray-400": !item.href,
                "bg-gray-200 hover:bg-gray-300": item.isActive,
              },
            )}
          >
            <a href={item.href} className="px-4 py-2">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
