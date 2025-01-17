import { NAVIGATION } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="wrapper flex flex-col gap-10 py-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-4">
          <Image
            src={"/santora-logo.webp"}
            alt="Santora Logo"
            width={71.42}
            height={60}
          />

          <p className="text-muted-foreground lg:max-w-[500px]">
            Customizable website templates crafted for modern brands, helping
            you launch faster and look great online.
          </p>
        </div>

        <nav>
          <ul className="flex gap-4 text-muted-foreground">
            {NAVIGATION.map((link) => (
              <li
                key={link.href}
                className="duration-200 hover:text-foreground"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <span className="h-px w-full bg-gray-300"></span>

      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
        <p className="cursor-pointer text-muted-foreground hover:text-foreground">
          © 2024 Ecommerce Labs Inc. Some rights reserved.
        </p>

        <div className="flex items-center gap-4 text-muted-foreground">
          <Link
            href="/privacy-policy"
            className="cursor-pointer font-medium hover:text-foreground"
          >
            Privacy policy
          </Link>
          <span className="h-6 w-px bg-gray-300"></span>
          <Link
            href="/terms-and-conditions"
            className="cursor-pointer font-medium hover:text-foreground"
          >
            Terms and conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
