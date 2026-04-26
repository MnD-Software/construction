import Link from "next/link";
import { LayoutDashboard, MessageSquareQuote, Package, Settings, UserRoundSearch } from "lucide-react";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const items = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/admin/content", label: "Homepage", icon: Settings },
  { href: "/admin/contacts", label: "Contacts", icon: UserRoundSearch }
];

export function AdminSidebar() {
  return (
    <aside className="flex h-full flex-col border-r bg-card/70">
      <div className="border-b p-6">
        <h2 className="text-lg font-semibold">Tagotha Admin</h2>
        <p className="text-sm text-muted-foreground">Manage products and site content</p>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
        className="p-4"
      >
        <Button type="submit" variant="outline" className="w-full">
          Sign Out
        </Button>
      </form>
    </aside>
  );
}
