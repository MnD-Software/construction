"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, House, Phone, ShoppingBag, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const items: Array<{ href: Route; label: string; icon: typeof House }> = [
  { href: "/", label: "Home", icon: House },
  { href: "/products", label: "Shop", icon: ShoppingBag },
  { href: "/services", label: "Service", icon: Truck },
  { href: "/about", label: "About", icon: Building2 },
  { href: "/contact", label: "Contact", icon: Phone }
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-3 z-50 px-3 md:hidden">
      <div className="mx-auto max-w-[420px] rounded-[26px] border border-black/6 bg-white/88 p-2 shadow-[0_24px_50px_rgba(17,24,39,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#111111]/92 dark:shadow-[0_24px_50px_rgba(0,0,0,0.35)]">
        <div className="grid grid-cols-5 gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-[18px] text-[11px] font-medium text-foreground/60 transition-colors dark:text-white/58",
                  active && "text-white dark:text-white"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="mobile-tab-indicator"
                    className="absolute inset-0 rounded-[18px] bg-foreground dark:bg-primary"
                    transition={{ type: "spring", bounce: 0.24, duration: 0.5 }}
                  />
                ) : null}
                <Icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
