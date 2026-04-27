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
    <div className="min-h-screen bg-background">
      <div className="mx-auto min-h-screen max-w-[1720px] overflow-x-hidden">
        <Navbar />
        <main className="pb-28 pt-[5.8rem] md:pb-0 md:pt-[6.7rem]">{children}</main>
        <Footer />
      </div>
      <MobileBottomNav />
      <WhatsAppFloat />
    </div>
  );
}
