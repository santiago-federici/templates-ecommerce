"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useCycle } from "framer-motion";

import MobileMenu from "./mobile-menu";

import { NAVIGATION } from "@/constants/navigation";
import Image from "next/image";

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
    <header className="wrapper flex h-20 items-center justify-between">
      <Image
        src={"/santora-logo.webp"}
        alt="Santora Logo"
        width={71.42}
        height={60}
      />

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

        {/* TODO: enable these lines when an authentication method is implemented */}
        {/* <span className="ml-5 mr-2 h-8 w-px bg-gray-300"></span>

        <div className="flex gap-2">
          <Button variant="ghost">Sign In</Button>
          <Button>Get full access</Button>
        </div> */}
      </nav>

      <MobileMenu menu={menu} pathname={pathname} toggleMenu={toggleMenu} />
    </header>
  );
}
