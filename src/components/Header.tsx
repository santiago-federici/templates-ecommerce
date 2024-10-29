"use client";

import Link from "next/link";
import { useState } from "react";

import { MenuIcon, XIcon } from "./icons";
import Button from "./button";
import { NAVIGATION } from "@/constants/navigation";

export function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="wrapper flex h-20 items-center justify-between">
      <h1 className="text-lg font-bold text-primary-foreground">Ecommerce</h1>

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
        <ul className="flex gap-4 text-white/80">
          {NAVIGATION.map((link) => (
            <li key={link.href} className="duration-200 hover:text-white">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <span className="h-6 w-px bg-gray-300"></span>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="text-white/80 hover:bg-transparent"
          >
            Sign In
          </Button>
          <Button className="bg-black">Get full access</Button>
        </div>
      </nav>
    </header>
  );
}
