import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, MoveRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group industrial-panel overflow-hidden rounded-[28px] border-transparent bg-white/90 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(17,24,39,0.12)]">
      <div className="grid gap-3 p-3 sm:grid-cols-[132px_1fr] md:block md:p-0">
        <div className="relative aspect-[1.12/1] overflow-hidden rounded-[22px] sm:min-h-[148px] sm:aspect-auto md:aspect-[4/3] md:rounded-[24px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-80" />
          <div className="absolute left-3 top-3 md:left-4 md:top-4">
            <Badge className="rounded-full bg-white/88 text-foreground">{product.category}</Badge>
          </div>
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/58 px-3 py-2 text-[11px] text-white backdrop-blur-xl md:text-xs">
            <Clock3 className="h-3.5 w-3.5" />
            Fast dispatch available
          </div>
        </div>
        <CardContent className="flex min-w-0 flex-col justify-between space-y-3 p-1 sm:p-0 md:space-y-4 md:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground md:text-xl">{product.name}</h3>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:hidden">{product.category}</p>
            </div>
            <p className="shrink-0 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary md:text-sm">
              {formatCurrency(product.price)}
            </p>
          </div>
          <p className="line-clamp-3 text-sm leading-6 text-muted-foreground md:leading-7">{product.description}</p>
          <div className="flex items-center justify-between rounded-[20px] bg-black/[0.03] px-3 py-3 dark:bg-white/[0.04]">
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-transform group-hover:translate-x-1"
            >
              View details
              <MoveRight className="h-4 w-4" />
            </Link>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
