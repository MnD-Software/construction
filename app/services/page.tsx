import { Building2, Handshake, Truck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    title: "Delivery Services",
    description: "Scheduled material movement to homes, retail stores and active construction sites.",
    icon: Truck
  },
  {
    title: "Bulk Supply",
    description: "Volume-based ordering for contractors, institutions and larger projects needing consistent supply.",
    icon: Building2
  },
  {
    title: "Contractor Partnerships",
    description: "Longer-term supply relationships with pricing support and repeat restocking coordination.",
    icon: Handshake
  }
];

export default function ServicesPage() {
  return (
    <div className="section-shell">
      <SectionHeading
        eyebrow="Services"
        title="Practical support beyond the materials themselves"
        copy="We do more than sell products. We help customers plan delivery, manage volume and keep work moving without avoidable delays."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.08}>
              <div className="rounded-2xl border bg-card/70 p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
