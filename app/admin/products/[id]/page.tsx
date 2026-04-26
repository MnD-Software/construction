import { notFound } from "next/navigation";
import { ProductForm } from "@/components/admin/product-form";
import { prisma } from "@/lib/prisma";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Edit Product</h1>
        <p className="mt-2 text-sm text-muted-foreground">Update pricing, imagery and descriptions.</p>
      </div>
      <ProductForm
        product={{
          ...product,
          price: Number(product.price)
        }}
      />
    </div>
  );
}
