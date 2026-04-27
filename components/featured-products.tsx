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

  const [lead, ...rest] = products;

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Featured materials</p>
        <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
          A cleaner product composition works better here than another slider. One lead material sets the tone, while the rest support it.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          key={lead.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] text-white shadow-[0_26px_70px_rgba(0,0,0,0.28)]"
        >
          <div className="grid h-full md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[300px] sm:min-h-[340px]">
              <Image src={lead.image} alt={lead.name} fill sizes="(max-width: 1280px) 100vw, 38vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.7))]" />
            </div>
            <div className="flex flex-col justify-between p-5 md:p-8">
              <div>
                <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/72">
                  {lead.category}
                </div>
                <h3 className="font-display mt-4 text-2xl font-semibold sm:text-3xl">{lead.name}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">{lead.description}</p>
              </div>
              <div className="mt-6 space-y-5">
                <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-white/45">From</p>
                    <p className="mt-2 text-3xl font-semibold text-primary">{formatCurrency(lead.price)}</p>
                  </div>
                  <Link
                    href={`/products/${lead.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-transform hover:translate-x-1"
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
              className="group grid gap-3 rounded-[26px] border border-border bg-background/70 p-3 text-left transition-all sm:grid-cols-[116px_1fr] hover:border-white/10 hover:bg-accent/30"
            >
              <div className="relative h-[160px] overflow-hidden rounded-[20px] sm:h-[110px]">
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
