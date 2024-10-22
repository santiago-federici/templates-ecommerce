"use client";

import Link from "next/link";
import { useState } from "react";

import { MenuIcon, XIcon } from "./icons";
import Button from "./button";

export function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="wrapper flex h-20 items-center justify-between">
      <div className="h-8 w-40 rounded-sm bg-neutral-500"></div>

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
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/templates">Templates</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/docs">Docs</Link>
                </li>
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
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/templates">Templates</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
        </ul>
        <span className="h-6 w-px bg-gray-300"></span>
        <div className="flex gap-4">
          <button>Sign In</button>
          <button className="rounded-md bg-black px-4 py-2 font-medium text-white duration-200 hover:opacity-80">
            Get full access
          </button>
        </div>
      </nav>
    </header>
  );
}
