"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Testimonial = {
  id?: string;
  name: string;
  role?: string | null;
  message: string;
};

export function TestimonialForm({ testimonial }: { testimonial?: Testimonial }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const payload = {
      name: String(formData.get("name") ?? ""),
      role: String(formData.get("role") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    const response = await fetch(testimonial?.id ? `/api/testimonials/${testimonial.id}` : "/api/testimonials", {
      method: testimonial?.id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      toast.error("Testimonial could not be saved.");
      return;
    }

    toast.success("Testimonial saved.");
    router.push("/admin/testimonials");
    router.refresh();
  }

  return (
    <form action={handleSubmit} className="space-y-5 rounded-2xl border bg-card/80 p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" defaultValue={testimonial?.name} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Input id="role" name="role" defaultValue={testimonial?.role ?? ""} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" defaultValue={testimonial?.message} required />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
        Save Testimonial
      </Button>
    </form>
  );
}
