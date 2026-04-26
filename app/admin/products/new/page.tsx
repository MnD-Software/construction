import { ProductForm } from "@/components/admin/product-form";

export default function NewProductPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">New Product</h1>
        <p className="mt-2 text-sm text-muted-foreground">Add a new material line to the catalogue.</p>
      </div>
      <ProductForm />
    </div>
  );
}
