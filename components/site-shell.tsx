"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { Navbar } from "@/components/navbar";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminSurface = pathname.startsWith("/admin") || pathname.startsWith("/login");

  if (isAdminSurface) {
    return <main>{children}</main>;
  }

  return (
    <div className="min-h-screen bg-muted/20 md:bg-transparent">
      <div className="mx-auto min-h-screen max-w-[430px] overflow-x-hidden bg-background shadow-[0_0_0_1px_rgba(17,24,39,0.04),0_40px_100px_rgba(17,24,39,0.15)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_40px_100px_rgba(0,0,0,0.35)] md:max-w-none md:shadow-none">
        <Navbar />
        <main className="mobile-safe">{children}</main>
        <Footer />
      </div>
      <MobileBottomNav />
      <WhatsAppFloat />
    </div>
  );
}
