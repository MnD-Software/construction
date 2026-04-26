"use client";

import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      toast.error("Your message was not sent. Please try again.");
      return;
    }

    toast.success("Your message has been received.");
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    form?.reset();
  }

  return (
    <form
      id="contact-form"
      action={async (formData) => {
        await handleSubmit(formData);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" placeholder="07..." required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Project Details</Label>
        <Textarea id="message" name="message" placeholder="Tell us what materials you need" required />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
        Send Request
      </Button>
    </form>
  );
}
