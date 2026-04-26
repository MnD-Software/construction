import { Award, BriefcaseBusiness, Target } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { getSiteContent } from "@/lib/data";

const values = [
  {
    title: "Mission",
    copy: "To supply dependable construction materials at fair prices while keeping delivery and communication practical for Kenyan projects.",
    icon: Target
  },
  {
    title: "Vision",
    copy: "To become a trusted materials partner for builders across western Kenya through reliability, affordability and service consistency.",
    icon: Award
  },
  {
    title: "Approach",
    copy: "We work with contractors, hardware stores and direct home builders who need straightforward support and materials that perform on site.",
    icon: BriefcaseBusiness
  }
];

export default async function AboutPage() {
  const content = await getSiteContent();

  return (
    <div className="section-shell space-y-16">
      <Reveal>
        <Badge variant="secondary">About Tagotha</Badge>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Local supply expertise shaped by Kenyan construction needs
        </h1>
        <p className="section-copy">{content.aboutSnippet ?? content.heroSubtitle}</p>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Our Story"
            title="Built around trust, consistency and practical service"
            copy="Tagotha Investments serves Homa Bay with quality materials for new builds, renovations, commercial sites and infrastructure work. We understand that delays cost money, so our focus stays on availability, communication and dependable delivery."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-3xl border bg-card/80 p-8 shadow-soft">
            <p className="text-lg leading-8 text-muted-foreground">
              Whether the customer is a contractor managing a busy site, a hardware store restocking inventory or a homeowner planning a personal build, our role is the same: supply durable materials without unnecessary friction.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <Reveal key={value.title} delay={index * 0.08}>
              <div className="rounded-2xl border bg-card/70 p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.copy}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
