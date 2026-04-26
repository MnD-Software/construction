import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    <Card className="group overflow-hidden rounded-2xl border-border/60 bg-card/80 transition-all hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <Badge>{product.category}</Badge>
          <p className="text-sm font-semibold text-primary">{formatCurrency(product.price)}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
        </div>
        <Link href={`/products/${product.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
          View Details
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
