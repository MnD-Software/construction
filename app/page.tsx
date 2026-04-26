import { Building2, ChartColumnIncreasing, ShieldCheck, Truck } from "lucide-react";
import { FeaturedProducts } from "@/components/featured-products";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts, getSiteContent, getTestimonials } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const services = [
  {
    title: "Fast Delivery",
    copy: "Scheduled dispatch for homes, commercial sites and road works across Homa Bay County.",
    icon: Truck
  },
  {
    title: "Bulk Supply",
    copy: "Reliable volume handling for contractors, resellers and project managers.",
    icon: Building2
  },
  {
    title: "Contractor Support",
    copy: "Responsive communication, practical pricing and site-aligned restocking plans.",
    icon: ChartColumnIncreasing
  }
];

const stats = [
  { value: "5+", label: "Core product lines" },
  { value: "24/7", label: "WhatsApp response window" },
  { value: "100%", label: "Kenyan project focus" },
  { value: "1", label: "Trusted local supply partner" }
];

export default async function HomePage() {
  const [content, products, testimonials] = await Promise.all([
    getSiteContent(),
    getFeaturedProducts(),
    getTestimonials()
  ]);

  return (
    <>
      <Hero title={content.heroTitle} subtitle={content.heroSubtitle} image={content.heroImage} />

      <section className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Materials"
            title="Reliable products for every stage of the build"
            copy="From foundations to finishing work, we supply materials that meet site expectations on quality, availability and price."
          />
        </Reveal>
        <div className="mt-10">
          <FeaturedProducts products={products} />
        </div>
      </section>

      <section className="bg-card/60">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Supply built around deadlines, budgets and project realities"
              copy="Tagotha Investments supports contractors, builders, hardware stores and households with practical procurement and delivery support."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.08}>
                  <div className="rounded-2xl border bg-background/80 p-6 shadow-soft">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why Tagotha"
              title="A straightforward supply partner for Kenyan builders"
              copy="We focus on dependable material quality, timely movement and responsive communication, which are the areas that affect site progress most."
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border bg-card/70 p-5">
                  <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border bg-gradient-to-br from-primary/10 via-card to-card p-8 shadow-soft">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-3xl font-semibold">Built for reliability</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Tagotha Investments serves projects that need a supplier who can move quickly, quote clearly and keep quality steady from one delivery to the next.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-card/60">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Client Feedback"
              title="What customers say after working with us"
              copy="Our reputation is built on practical service, fair pricing and materials that reach site ready for use."
            />
          </Reveal>
          <div className="mt-10">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-[28px] bg-foreground px-6 py-10 text-white md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/60">Start your order</p>
              <h2 className="mt-3 text-3xl font-semibold">{content.ctaBannerTitle}</h2>
              <p className="mt-3 max-w-2xl text-white/70">{content.ctaBannerCopy}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={siteConfig.phoneHref}>Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/contact">Get Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
