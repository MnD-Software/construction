"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
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
        <main className="pt-[6.2rem] md:pt-[6.7rem]">{children}</main>
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
