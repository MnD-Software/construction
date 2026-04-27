"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems: Array<{ href: Route; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-0 md:pt-0">
      <div className="mx-auto rounded-[24px] border border-black/5 bg-white/82 shadow-[0_18px_40px_rgba(17,24,39,0.08)] backdrop-blur-xl dark:border-white/8 dark:bg-[#111111]/86 dark:shadow-[0_18px_40px_rgba(0,0,0,0.28)] md:rounded-none md:border-x-0 md:border-t-0">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex min-w-0 flex-col">
            <span className="truncate text-lg font-semibold tracking-tight">Tagotha Investments</span>
            <span className="truncate text-xs text-muted-foreground">Construction Materials | Homa Bay</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors",
                    active ? "bg-foreground text-white dark:bg-primary" : "text-muted-foreground hover:text-foreground dark:hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button asChild className="rounded-full">
              <a href={siteConfig.phoneHref}>
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-secondary dark:border-white/8 dark:bg-white/5 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Open navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="px-2 pt-2 md:hidden"
          >
            <div className="rounded-[28px] border border-black/5 bg-white p-3 shadow-[0_22px_60px_rgba(17,24,39,0.14)] dark:border-white/8 dark:bg-[#111111]">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-[20px] border p-4 text-sm transition-colors",
                      isActivePath(pathname, item.href)
                        ? "border-primary/30 bg-primary text-white"
                        : "border-border bg-background text-foreground dark:bg-white/5 dark:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between rounded-[22px] bg-secondary p-3 dark:bg-white/5">
                <ThemeToggle />
                <Button asChild className="rounded-full">
                  <a href={siteConfig.phoneHref}>Call Now</a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
