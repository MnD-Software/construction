"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type SiteContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  ctaBannerTitle: string;
  ctaBannerCopy: string;
  aboutSnippet?: string | null;
};

export function SiteContentForm({ content }: { content: SiteContent }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/site-content", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      toast.error("Homepage content could not be updated.");
      return;
    }

    toast.success("Homepage content updated.");
    router.refresh();
  }

  return (
    <form action={handleSubmit} className="space-y-5 rounded-2xl border bg-card/80 p-6">
      <div className="space-y-2">
        <Label htmlFor="heroTitle">Hero Title</Label>
        <Input id="heroTitle" name="heroTitle" defaultValue={content.heroTitle} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="heroSubtitle">Hero Subtitle</Label>
        <Textarea id="heroSubtitle" name="heroSubtitle" defaultValue={content.heroSubtitle} required />
      </div>
      <ImageUploadField name="heroImage" label="Hero Image URL" defaultValue={content.heroImage} />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ctaBannerTitle">CTA Title</Label>
          <Input id="ctaBannerTitle" name="ctaBannerTitle" defaultValue={content.ctaBannerTitle} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ctaBannerCopy">CTA Copy</Label>
          <Textarea id="ctaBannerCopy" name="ctaBannerCopy" defaultValue={content.ctaBannerCopy} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="aboutSnippet">About Snippet</Label>
        <Textarea id="aboutSnippet" name="aboutSnippet" defaultValue={content.aboutSnippet ?? ""} />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
        Save Content
      </Button>
    </form>
  );
}
