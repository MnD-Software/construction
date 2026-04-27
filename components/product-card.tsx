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
    <Card className="group industrial-panel overflow-hidden rounded-[24px] border-transparent bg-white/88 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(17,24,39,0.12)]">
      <div className="relative aspect-square overflow-hidden rounded-[20px] md:aspect-[4/3] md:rounded-[24px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-80" />
        <div className="absolute left-4 top-4">
          <Badge className="rounded-full bg-white/88 text-foreground">{product.category}</Badge>
        </div>
        <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/58 px-3 py-2 text-xs text-white backdrop-blur-xl">
          <Clock3 className="h-3.5 w-3.5" />
          Fast dispatch available
        </div>
      </div>
      <CardContent className="space-y-3 p-4 md:space-y-4 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-foreground md:text-xl">{product.name}</h3>
          <p className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary md:px-3 md:text-sm">
            {formatCurrency(product.price)}
          </p>
        </div>
        <p className="line-clamp-3 text-xs leading-6 text-muted-foreground md:text-sm md:leading-7">{product.description}</p>
        <div className="flex items-center justify-between pt-1">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-foreground transition-transform group-hover:translate-x-1 md:text-sm"
          >
            View details
            <MoveRight className="h-4 w-4" />
          </Link>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
}
