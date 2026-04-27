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
  { href: "/services", label: "Services", icon: Truck },
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
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
      <div className="pointer-events-auto mx-auto max-w-[380px] rounded-[32px] border border-white/10 bg-[#0a0a0a]/92 px-2 py-2 shadow-[0_22px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        <div className="grid grid-cols-5 gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex min-h-[54px] flex-col items-center justify-center gap-1 rounded-[24px] px-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/44 transition-colors",
                  active && "text-white"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="mobile-tab-indicator"
                    className="absolute inset-0 rounded-[24px] bg-primary"
                    transition={{ type: "spring", bounce: 0.24, duration: 0.5 }}
                  />
                ) : null}
                <Icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10 leading-none">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
