"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export function FeaturedProducts({ products }: { products: Product[] }) {
  if (!products.length) {
    return null;
  }

  const imagePool = [
    "https://images.pexels.com/photos/31531768/pexels-photo-31531768.jpeg",
    "https://images.pexels.com/photos/4170184/pexels-photo-4170184.jpeg",
    "https://images.pexels.com/photos/14097580/pexels-photo-14097580.jpeg",
    "https://images.pexels.com/photos/33540495/pexels-photo-33540495.jpeg"
  ];
  const displayProducts = products.map((product, index) => ({
    ...product,
    image: imagePool[index % imagePool.length]
  }));
  const [lead, ...rest] = displayProducts;

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Featured materials</p>
        <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
          A cleaner product composition works better here than another slider. One lead material sets the tone, while the rest support it.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          key={lead.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] text-white"
        >
          <div className="grid h-full md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[340px]">
              <Image src={lead.image} alt={lead.name} fill sizes="(max-width: 1280px) 100vw, 38vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.7))]" />
            </div>
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/72">
                  {lead.category}
                </div>
                <h3 className="font-display mt-5 text-3xl font-semibold">{lead.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">{lead.description}</p>
              </div>
              <div className="mt-8 space-y-5">
                <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-white/45">From</p>
                    <p className="mt-2 text-3xl font-semibold text-primary">{formatCurrency(lead.price)}</p>
                  </div>
                  <Link
                    href={`/products/${lead.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-transform hover:translate-x-1"
                  >
                    View product
                    <MoveRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-3">
          {rest.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group grid gap-4 rounded-[26px] border border-border bg-background/70 p-3 text-left transition-all md:grid-cols-[116px_1fr] hover:border-white/10 hover:bg-accent/30"
            >
              <div className="relative h-[110px] overflow-hidden rounded-[20px]">
                <Image src={product.image} alt={product.name} fill sizes="116px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex min-w-0 flex-col justify-between py-1">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{product.category}</p>
                  <p className="mt-2 text-lg font-semibold">{product.name}</p>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {formatCurrency(product.price)}
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">View</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
