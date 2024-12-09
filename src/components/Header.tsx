"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useCycle } from "framer-motion";

import ThemeToggle from "./theme-toggle";
import MobileMenu from "./mobile-menu";
import Button from "./button";

import { NAVIGATION } from "@/constants/navigation";

export function Header() {
  const [menu, toggleMenu] = useCycle(false, true);
  const pathname = usePathname();

  // disable scrolling when menu is open
  useEffect(() => {
    if (menu) {
      setTimeout(() => (document.body.style.overflow = "hidden"), 500);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <header className="relative">
      <div className="wrapper flex h-20 items-center justify-between">
        <h1 className="text-4xl font-black tracking-tighter text-foreground">
          Ecommerce
        </h1>

        <ThemeToggle />

        <nav className="hidden items-center lg:flex">
          <ul className="flex gap-x-4">
            {NAVIGATION.map((link) => (
              <li
                key={link.href}
                className="text-muted-foreground duration-100 hover:text-foreground"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <span className="ml-5 mr-2 h-8 w-px bg-gray-300"></span>

          <div className="flex gap-2">
            <Button variant="ghost">Sign In</Button>
            <Button>Get full access</Button>
          </div>
        </nav>

        <MobileMenu menu={menu} pathname={pathname} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}
