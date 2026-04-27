import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, PhoneCall, Truck } from "lucide-react";
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
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
        <div className="relative aspect-[1.02/1] overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] shadow-[0_26px_80px_rgba(0,0,0,0.22)] lg:aspect-[5/4]">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.56))]" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <Badge className="rounded-full bg-white/92 text-foreground">{product.category}</Badge>
            <Badge className="rounded-full border-white/14 bg-black/45 text-white">Site-ready supply</Badge>
          </div>
        </div>
        <div className="rounded-[32px] border border-black/5 bg-white/86 p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)] dark:border-white/10 dark:bg-white/5 md:p-7 lg:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Product Overview</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{product.description}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Dispatch", value: "Fast planning", icon: Truck },
              { label: "Quality", value: "Checked supply", icon: CheckCircle2 },
              { label: "Support", value: "Direct contact", icon: PhoneCall }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[22px] bg-black/[0.03] p-4 dark:bg-white/[0.04]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-sm font-semibold">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 rounded-[26px] bg-[#050505] p-5 text-white">
            <p className="text-xs uppercase tracking-[0.16em] text-white/50">From</p>
            <p className="mt-3 text-4xl font-semibold text-primary">{formatCurrency(product.price)}</p>
            <p className="mt-2 text-sm text-white/62">Pricing guidance for quick budgeting and order planning.</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="rounded-full">
              <a href={whatsappLink(`Hello Tagotha Investments, I want to order ${product.name}.`)}>
                Order on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="tel:0781532200">Call for Pricing</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
