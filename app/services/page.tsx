import { Building2, Handshake, Truck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";

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
    <>
      <PageHero
        eyebrow="Services"
        title="Practical support beyond the materials themselves"
        copy="We do more than sell products. We help customers plan delivery, manage volume and keep work moving without avoidable delays."
      />
      <div className="section-shell pt-0">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="section-frame h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-display mt-5 text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}
