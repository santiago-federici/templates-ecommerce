"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import Button from "./button";

import { cn } from "@/lib/utils";

import { NAVIGATION } from "@/constants/navigation";

import { useCycle } from "framer-motion";
import MobileMenu from "./mobile-menu";

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
    <header
      className={cn("relative bg-primary", {
        "bg-white": pathname !== "/",
      })}
    >
      <div className="wrapper flex h-20 items-center justify-between">
        <h1
          className={cn("text-lg font-bold text-white", {
            "text-black": pathname !== "/",
          })}
        >
          Ecommerce
        </h1>

        <nav className="hidden items-center gap-10 lg:flex">
          <ul className="flex gap-4">
            {NAVIGATION.map((link) => (
              <li
                key={link.href}
                className={cn("text-white/70 duration-200 hover:text-white", {
                  "text-muted-foreground hover:text-black": pathname !== "/",
                  "text-white": pathname === link.href && pathname === "/",
                  "text-black": pathname === link.href && pathname !== "/",
                })}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <span className="h-6 w-px bg-gray-300"></span>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              className={cn(
                "text-white/80 hover:bg-transparent hover:text-white",
                {
                  "text-muted-foreground hover:text-black": pathname !== "/",
                },
              )}
            >
              Sign In
            </Button>
            <Button>Get full access</Button>
          </div>
        </nav>

        <MobileMenu menu={menu} pathname={pathname} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
}
