import { PageHero } from "@/components/page-hero";
import { ProductsFilter } from "@/components/products-filter";
import { getProducts } from "@/lib/data";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Construction materials arranged with a clearer catalogue feel"
        copy="Browse core material lines, filter quickly, and move from overview to detail with less friction on both desktop and mobile."
      />
      <div className="section-shell pt-0">
        <ProductsFilter products={products} />
      </div>
    </>
  );
}
