import { ArrowRight, Building2, ChartColumnIncreasing, ShieldCheck, Truck } from "lucide-react";
import { FeaturedProducts } from "@/components/featured-products";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ShowcaseCarousel } from "@/components/showcase-carousel";
import { StatsStrip } from "@/components/stats-strip";
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
  { value: 5, suffix: "+", label: "Core product lines" },
  { value: 24, suffix: "/7", label: "WhatsApp response window" },
  { value: 100, suffix: "%", label: "Kenyan project focus" },
  { value: 1, suffix: "", label: "Trusted local supply partner" }
];

const showcase = [
  {
    id: "nairobi-construction",
    type: "Kenyan context",
    title: "Construction growth with local relevance",
    copy: "Use Kenyan context where possible so the visual story feels closer to the customers Tagotha actually serves.",
    image: "https://images.unsplash.com/photo-1741778792300-3e420d5fcb26?auto=format&fit=crop&w=1600&q=80",
    location: "Nairobi, Kenya"
  },
  {
    id: "nairobi-skyline",
    type: "Urban supply view",
    title: "Materials positioned within a growing urban market",
    copy: "Where exact local construction imagery is limited, the fallback stays neutral but still connected to the building environment.",
    image: "https://images.unsplash.com/photo-1611348586755-61bf6f30f3e6?auto=format&fit=crop&w=1600&q=80",
    location: "Nairobi, Kenya"
  },
  {
    id: "neutral-roadwork",
    type: "Neutral fallback",
    title: "Road and infrastructure support",
    copy: "Neutral civil-work imagery still fits the product story for ballast, sand, cement and steel supply.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    location: "Regional infrastructure"
  }
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
          <StatsStrip items={stats} />
        </Reveal>
      </section>

      <section className="section-shell pt-0">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Materials"
            title="Card sliders that feel cleaner, roomier and more deliberate"
            copy="The product surface now leans into a proper slider rhythm instead of stacking everything into one static composition."
          />
        </Reveal>
        <div className="mt-10">
          <FeaturedProducts products={products} />
        </div>
      </section>

      <section>
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
                  <div className="industrial-panel group relative overflow-hidden p-6">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-transparent" />
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.copy}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <Reveal>
          <ShowcaseCarousel slides={showcase} />
        </Reveal>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why Tagotha"
              title="A more confident, more modern presentation of trust"
              copy="The right construction brand UI should look stable, premium and easy to scan. That is the direction applied across the home surface."
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "Consistent", label: "Material quality" },
                { value: "Clear", label: "Quote communication" },
                { value: "Fast", label: "Order movement" },
                { value: "Local", label: "Kenyan market focus" }
              ].map((stat) => (
                <div key={stat.label} className="industrial-panel p-5">
                  <p className="text-2xl font-semibold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="dark-panel page-noise p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-white">Built for reliability</h3>
              <p className="mt-4 text-base leading-8 text-white/64">
                Tagotha Investments serves projects that need a supplier who can move quickly, quote clearly and keep quality steady from one delivery to the next.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
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
        <div className="dark-panel page-noise px-6 py-10 md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/60">Start your order</p>
              <h2 className="mt-3 text-3xl font-semibold">{content.ctaBannerTitle}</h2>
              <p className="mt-3 max-w-2xl text-white/70">{content.ctaBannerCopy}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href={siteConfig.phoneHref}>Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/14 bg-white/6 text-white hover:bg-white/10">
                <a href="/contact">Get Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
