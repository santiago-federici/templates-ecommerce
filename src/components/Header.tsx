"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Button from "./button";

import { cn } from "@/lib/utils";

import { NAVIGATION } from "@/constants/navigation";
import { MenuIcon, XIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header
      className={cn("bg-primary", {
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

        <span onClick={() => setOpen((prev) => !prev)}>
          <MenuIcon className="size-6 cursor-pointer lg:hidden" />
        </span>

        {open && (
          <>
            <div className="absolute inset-0 z-10 bg-black/40"></div>
            <aside className="absolute right-0 top-0 z-30 h-screen w-72 space-y-10 overflow-hidden bg-background px-6 py-7 shadow-2xl md:w-96 md:px-14">
              <span onClick={() => setOpen((prev) => !prev)}>
                <XIcon className="ml-auto size-6 cursor-pointer" />
              </span>

              <nav>
                <ul className="space-y-4 text-lg font-medium">
                  {NAVIGATION.map((link) => (
                    <li
                      key={link.href}
                      className="duration-200 hover:text-muted-foreground"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col gap-2">
                <Button size="large" variant="secondary">
                  Sign in
                </Button>
                <Button size="large">Get full access</Button>
              </nav>
            </aside>
          </>
        )}

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
      </div>
    </header>
  );
}
