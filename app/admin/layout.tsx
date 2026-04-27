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
    <div className="min-h-[calc(100vh-5rem)] bg-[#09090b]">
      <div className="grid min-h-[calc(100vh-5rem)] md:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] p-4 md:p-6">
          <div className="min-h-full rounded-[30px] bg-[#f7f4ef] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.22)] md:p-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
