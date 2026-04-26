"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { ImageUploadField } from "@/components/admin/image-upload-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Product = {
  id?: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
};

export function ProductForm({ product }: { product?: Product }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const payload = {
      name: String(formData.get("name") ?? ""),
      description: String(formData.get("description") ?? ""),
      price: Number(formData.get("price") ?? 0),
      image: String(formData.get("image") ?? ""),
      category: String(formData.get("category") ?? ""),
      featured: formData.get("featured") === "on"
    };

    const response = await fetch(product?.id ? `/api/products/${product.id}` : "/api/products", {
      method: product?.id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!response.ok) {
      toast.error("Product could not be saved.");
      return;
    }

    toast.success(product?.id ? "Product updated." : "Product created.");
    router.push("/admin/products");
    router.refresh();
  }

  return (
    <form action={handleSubmit} className="space-y-5 rounded-2xl border bg-card/80 p-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Product Name</Label>
          <Input id="name" name="name" defaultValue={product?.name} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input id="category" name="category" defaultValue={product?.category} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" defaultValue={product?.description} required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" name="price" type="number" defaultValue={product?.price} required />
        </div>
        <ImageUploadField name="image" label="Image URL" defaultValue={product?.image} />
      </div>
      <label className="flex items-center gap-3 text-sm">
        <input name="featured" type="checkbox" defaultChecked={product?.featured} />
        Featured on homepage
      </label>
      <Button type="submit" disabled={loading}>
        {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
        Save Product
      </Button>
    </form>
  );
}
