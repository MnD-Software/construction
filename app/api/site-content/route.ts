import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { siteContentSchema } from "@/lib/validations";

export async function PATCH(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const payload = await request.json();
    const data = siteContentSchema.parse(payload);
    const record = await prisma.siteContent.upsert({
      where: { id: "default-site-content" },
      update: data,
      create: {
        id: "default-site-content",
        ...data
      }
    });

    revalidatePath("/");
    revalidatePath("/about");
    revalidatePath("/admin/content");
    return NextResponse.json(record);
  } catch {
    return NextResponse.json({ error: "Content update failed" }, { status: 400 });
  }
}
