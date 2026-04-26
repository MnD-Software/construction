import { notFound } from "next/navigation";
import { TestimonialForm } from "@/components/admin/testimonial-form";
import { prisma } from "@/lib/prisma";

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const testimonial = await prisma.testimonial.findUnique({ where: { id } });

  if (!testimonial) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Edit Testimonial</h1>
        <p className="mt-2 text-sm text-muted-foreground">Update the message shown on the homepage.</p>
      </div>
      <TestimonialForm testimonial={testimonial} />
    </div>
  );
}
