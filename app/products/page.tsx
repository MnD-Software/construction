import { PageHero } from "@/components/page-hero";
import { ProductsFilter } from "@/components/products-filter";
import { getProducts } from "@/lib/data";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Construction materials for residential, commercial and site work"
        copy="Browse cement, sand, ballast, steel, bricks and other core supplies used by contractors, hardware stores and home builders."
      />
      <div className="section-shell pt-0">
        <ProductsFilter products={products} />
      </div>
    </>
  );
}
