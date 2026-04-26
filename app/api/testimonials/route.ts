import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { testimonialSchema } from "@/lib/validations";

export async function GET() {
  const testimonials = await prisma.testimonial.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(testimonials);
}

export async function POST(request: Request) {
  const unauthorized = await requireAdmin();
  if (unauthorized) {
    return unauthorized;
  }

  try {
    const payload = await request.json();
    const data = testimonialSchema.parse(payload);
    const testimonial = await prisma.testimonial.create({ data });
    revalidatePath("/");
    revalidatePath("/admin/testimonials");
    return NextResponse.json(testimonial, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid testimonial payload" }, { status: 400 });
  }
}
