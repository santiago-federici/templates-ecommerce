import Link from "next/link";

import { cn } from "@/lib/utils";

import { NAVIGATION } from "@/constants/navigation";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Button from "./button";

interface Props {
  menu: boolean;
  pathname: string;
  toggleMenu: () => void;
}

export default function MobileMenu({ menu, pathname, toggleMenu }: Props) {
  return (
    <>
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
                      setTimeout(() => toggleMenu(), 200);
                    }}
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </nav>

              <div className="mt-20 flex flex-col gap-2">
                <Button variant="secondary">Sign in</Button>
                <Button>Get full access</Button>
              </div>
            </motion.aside>
          </MotionConfig>
        )}
      </AnimatePresence>
    </>
  );
}
