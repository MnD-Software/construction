"use client";

import { Search } from "lucide-react";
import { useMemo } from "react";
import { useProductFilterStore } from "@/lib/store";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

const categories = ["All", "Cement", "Sand", "Ballast", "Steel", "Bricks"];

export function ProductsFilter({ products }: { products: Product[] }) {
  const { search, category, setCategory, setSearch, reset } = useProductFilterStore();

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [products, category, search]);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="industrial-panel sticky top-[5.8rem] z-20 grid gap-4 rounded-[28px] p-4 md:static md:grid-cols-[1fr_auto] md:items-center md:p-5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="h-12 rounded-full border-black/5 bg-white/85 pl-10 shadow-inner"
            placeholder="Search materials"
          />
        </div>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0">
          {categories.map((item) => (
            <Button
              key={item}
              type="button"
              variant={item === category ? "default" : "outline"}
              size="sm"
              className="rounded-full whitespace-nowrap"
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
          <Button type="button" size="sm" variant="ghost" className="rounded-full whitespace-nowrap" onClick={reset}>
            Reset
          </Button>
        </div>
        <div className="flex items-center justify-between rounded-[22px] bg-black/[0.03] px-4 py-3 text-sm dark:bg-white/[0.04] md:hidden">
          <span className="text-muted-foreground">Visible products</span>
          <span className="font-semibold text-foreground">{filtered.length}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {!filtered.length ? <p className="text-sm text-muted-foreground">No products match your filter.</p> : null}
    </div>
  );
}
