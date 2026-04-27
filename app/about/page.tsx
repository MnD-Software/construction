import { Award, BriefcaseBusiness, Target } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
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
    <>
      <PageHero
        eyebrow="About Tagotha"
        title="Local supply expertise shaped by Kenyan construction needs"
        copy={content.aboutSnippet ?? content.heroSubtitle}
      />
      <div className="section-shell pt-0 space-y-10">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <div className="section-frame">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Our Story</p>
              <h2 className="font-display mt-4 text-3xl font-semibold md:text-5xl">
                Built around trust, consistency and practical service
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                Tagotha Investments serves Homa Bay with quality materials for new builds, renovations, commercial sites and infrastructure work. We understand that delays cost money, so our focus stays on availability, communication and dependable delivery.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="dark-panel p-8">
              <p className="text-sm leading-8 text-white/68">
                Whether the customer is a contractor managing a busy site, a hardware store restocking inventory or a homeowner planning a personal build, our role is the same: supply durable materials without unnecessary friction.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-3xl font-semibold text-primary">Reliable</p>
                  <p className="mt-2 text-sm text-white/58">Delivery-first material sourcing</p>
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-3xl font-semibold text-primary">Local</p>
                  <p className="mt-2 text-sm text-white/58">Built for western Kenya workflows</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} delay={index * 0.08}>
                <div className="section-frame h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-display mt-5 text-2xl font-semibold">{value.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}
