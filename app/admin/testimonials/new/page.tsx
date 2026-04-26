import { TestimonialForm } from "@/components/admin/testimonial-form";

export default function NewTestimonialPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">New Testimonial</h1>
        <p className="mt-2 text-sm text-muted-foreground">Add a customer review to the website.</p>
      </div>
      <TestimonialForm />
    </div>
  );
}
