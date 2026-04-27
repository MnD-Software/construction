"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LayoutDashboard, MessageSquareQuote, Package, Settings, UserRoundSearch } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const items: Array<{ href: Route; label: string; icon: typeof LayoutDashboard }> = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/admin/content", label: "Homepage", icon: Settings },
  { href: "/admin/contacts", label: "Contacts", icon: UserRoundSearch }
];

function isActive(pathname: string, href: string) {
  if (href === "/admin") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col bg-[#0f1011] text-white">
      <div className="border-b border-white/8 p-6">
        <h2 className="text-lg font-semibold">Tagotha Admin</h2>
        <p className="text-sm text-white/45">Manage products, leads and homepage content</p>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {items.map((item) => {
          const Icon = item.icon;
          const active = isActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-colors",
                active ? "bg-primary text-white" : "text-white/58 hover:bg-white/6 hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4">
        <Button
          type="button"
          variant="outline"
          className="w-full rounded-full border-white/12 bg-transparent text-white hover:bg-white/8"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          Sign Out
        </Button>
      </div>
    </aside>
  );
}
