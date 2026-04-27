import { prisma } from "@/lib/prisma";
import { BarChart3, MessageSquareText, Package2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminPage() {
  const [products, testimonials, contacts] = await Promise.all([
    prisma.product.count().catch(() => 0),
    prisma.testimonial.count().catch(() => 0),
    prisma.contact.count().catch(() => 0)
  ]);

  const stats = [
    { label: "Products", value: products, icon: Package2 },
    { label: "Testimonials", value: testimonials, icon: MessageSquareText },
    { label: "Contact Leads", value: contacts, icon: BarChart3 }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard Overview</h1>
        <p className="mt-2 text-sm text-muted-foreground">Monitor inventory content and inbound customer requests.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.label} className="rounded-[24px] border-transparent bg-white shadow-[0_18px_50px_rgba(17,24,39,0.08)]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{item.label}</CardTitle>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-semibold text-primary">{item.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
