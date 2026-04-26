import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminPage() {
  const [products, testimonials, contacts] = await Promise.all([
    prisma.product.count().catch(() => 0),
    prisma.testimonial.count().catch(() => 0),
    prisma.contact.count().catch(() => 0)
  ]);

  const stats = [
    { label: "Products", value: products },
    { label: "Testimonials", value: testimonials },
    { label: "Contact Leads", value: contacts }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard Overview</h1>
        <p className="mt-2 text-sm text-muted-foreground">Monitor inventory content and inbound customer requests.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item) => (
          <Card key={item.label} className="rounded-2xl">
            <CardHeader>
              <CardTitle>{item.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-semibold text-primary">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
