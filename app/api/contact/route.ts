import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const data = contactSchema.parse(payload);
    const contact = await prisma.contact.create({ data });
    revalidatePath("/admin/contacts");
    return NextResponse.json(contact, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid contact request" }, { status: 400 });
  }
}
