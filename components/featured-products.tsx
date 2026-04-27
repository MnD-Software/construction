"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

export function FeaturedProducts({ products }: { products: Product[] }) {
  const [index, setIndex] = useState(0);

  if (!products.length) {
    return null;
  }

  const visible = products.slice(index).concat(products.slice(0, index));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Curated slider</p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
            Swipe or cycle through the best-selling material lines instead of landing on a static block of cards.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-full"
            onClick={() => setIndex((value) => (value - 1 + products.length) % products.length)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            className="rounded-full"
            onClick={() => setIndex((value) => (value + 1) % products.length)}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visible.slice(0, 3).map((product, itemIndex) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: itemIndex * 0.06 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between md:hidden">
        <div className="flex gap-2">
          {products.map((product, itemIndex) => (
            <button
              key={product.id}
              type="button"
              aria-label={`Show ${product.name}`}
              onClick={() => setIndex(itemIndex)}
              className={`h-2.5 rounded-full transition-all ${itemIndex === index ? "w-8 bg-primary" : "w-2.5 bg-border"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-full"
            onClick={() => setIndex((value) => (value - 1 + products.length) % products.length)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            className="rounded-full"
            onClick={() => setIndex((value) => (value + 1) % products.length)}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="industrial-panel p-5 md:p-6">
        <div className="grid gap-4 md:grid-cols-4">
          {products.map((product, itemIndex) => (
            <button
              key={product.id}
              type="button"
              onClick={() => setIndex(itemIndex)}
              className={`rounded-[22px] border p-4 text-left transition-all ${
                itemIndex === index
                  ? "border-primary/30 bg-primary/8"
                  : "border-border bg-background/60 hover:bg-accent/40"
              }`}
            >
              <p className="text-sm font-semibold">{product.name}</p>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">{product.category}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
