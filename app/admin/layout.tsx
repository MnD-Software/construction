import type React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { AdminSidebar } from "@/components/admin/sidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-muted/20">
      <div className="grid min-h-[calc(100vh-5rem)] md:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div className="p-6 md:p-10">{children}</div>
      </div>
    </div>
  );
}
