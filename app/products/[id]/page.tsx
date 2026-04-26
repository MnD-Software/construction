import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProductById } from "@/lib/data";
import { formatCurrency, whatsappLink } from "@/lib/utils";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
        <div>
          <Badge>{product.category}</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{product.description}</p>
          <p className="mt-8 text-3xl font-semibold text-primary">{formatCurrency(product.price)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={whatsappLink(`Hello Tagotha Investments, I want to order ${product.name}.`)}>
                Order on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:0781532200">Call for Pricing</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
