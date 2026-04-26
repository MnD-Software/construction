"use client";

import { useState } from "react";
import { LoaderCircle, UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ImageUploadField({
  name,
  label,
  defaultValue
}: {
  name: string;
  label: string;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue ?? "");
  const [uploading, setUploading] = useState(false);

  async function uploadFile(file: File) {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });

    setUploading(false);

    if (!response.ok) {
      toast.error("Image upload failed.");
      return;
    }

    const data = (await response.json()) as { url: string };
    setValue(data.url);
    toast.success("Image uploaded.");
  }

  return (
    <div className="space-y-3">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} value={value} onChange={(event) => setValue(event.target.value)} required />
      <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2 text-sm">
        <UploadCloud className="h-4 w-4" />
        {uploading ? "Uploading..." : "Upload to Cloudinary"}
        {uploading ? <LoaderCircle className="h-4 w-4 animate-spin text-primary" /> : null}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              void uploadFile(file);
            }
          }}
        />
      </label>
    </div>
  );
}
