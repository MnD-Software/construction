import { ProductsFilter } from "@/components/products-filter";
import { SectionHeading } from "@/components/section-heading";
import { getProducts } from "@/lib/data";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="section-shell">
      <SectionHeading
        eyebrow="Products"
        title="Construction materials ready for homes, sites and resellers"
        copy="Browse our core material lines and contact us for pricing, bulk rates and delivery planning."
      />
      <div className="mt-10">
        <ProductsFilter products={products} />
      </div>
    </div>
  );
}
