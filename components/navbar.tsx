"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BrandMark } from "@/components/brand-mark";
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div className="mx-auto max-w-[1720px]">
        <div className="rounded-[30px] border border-white/10 bg-[#050505]/86 shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
          <div className="container flex h-20 items-center justify-between gap-5">
            <BrandMark inverted />

            <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 text-white lg:flex">
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition-colors",
                      active ? "bg-primary text-white" : "text-white/64 hover:bg-white/[0.04] hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <ThemeToggle className="text-white hover:text-white" />
              <Button asChild className="rounded-full bg-primary text-white hover:bg-primary/90">
                <a href={siteConfig.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>

            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Open navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="mx-auto max-w-[1720px] px-2 pt-2 lg:hidden"
          >
            <div className="rounded-[28px] border border-white/10 bg-[#080808] p-3 shadow-[0_22px_60px_rgba(0,0,0,0.24)]">
              <div className="mb-3 rounded-[22px] border border-white/8 bg-white/[0.03] p-3">
                <BrandMark compact inverted />
              </div>
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
                        : "border-white/10 bg-white/[0.03] text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between rounded-[22px] bg-white/[0.03] p-3">
                <ThemeToggle className="text-white hover:text-white" />
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
