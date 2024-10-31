"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import Button from "./button";

import { cn } from "@/lib/utils";

import { NAVIGATION } from "@/constants/navigation";

import { AnimatePresence, motion, MotionConfig, useCycle } from "framer-motion";

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

        <motion.button
          aria-label="Icono de menú"
          animate={menu ? "open" : "close"}
          className={cn(
            "z-50 flex flex-col gap-y-1 px-1 py-1.5 lg:hidden [&>span]:bg-white",
            {
              "right-6 top-6 max-md:fixed": menu,
              "[&>span]:bg-black": pathname !== "/" || menu,
            },
          )}
          onClick={() => toggleMenu()}
        >
          <motion.span
            variants={{
              open: {
                rotate: 45,
                y: 6,
              },
              close: {
                rotate: 0,
                y: 0,
              },
            }}
            className="h-0.5 w-5"
          ></motion.span>
          <motion.span
            variants={{
              open: {
                rotate: 45,
                opacity: 0,
              },
              close: {
                rotate: 0,
                opacity: 1,
              },
            }}
            className="h-0.5 w-5"
          ></motion.span>
          <motion.span
            variants={{
              open: {
                rotate: -45,
                y: -6,
              },
              close: {
                rotate: 0,
                y: 0,
              },
            }}
            className="h-0.5 w-5"
          ></motion.span>
        </motion.button>

        <AnimatePresence>
          {menu && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0,
              }}
            >
              <motion.aside
                variants={{
                  initial: {
                    x: "100%",
                  },
                  animate: {
                    x: "0",
                  },
                }}
                initial="initial"
                animate="animate"
                exit="initial"
                className="fixed inset-0 z-40 flex flex-col gap-4 bg-background px-6 py-7 shadow-lg md:px-16 lg:hidden"
              >
                <nav className="mt-8 flex flex-col items-start gap-6 lg:hidden">
                  {NAVIGATION.map((link) => (
                    <li
                      key={link.href}
                      className={cn(
                        "text-xl text-muted-foreground duration-200 hover:text-black",
                        {
                          "text-black": pathname === link.href,
                        },
                      )}
                      onClick={() => {
                        setTimeout(() => toggleMenu(), 500);
                      }}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </nav>
              </motion.aside>
            </MotionConfig>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
