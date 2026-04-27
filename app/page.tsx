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

const pexelsImages = [
  "https://images.pexels.com/photos/31531768/pexels-photo-31531768.jpeg",
  "https://images.pexels.com/photos/4170184/pexels-photo-4170184.jpeg",
  "https://images.pexels.com/photos/14097580/pexels-photo-14097580.jpeg",
  "https://images.pexels.com/photos/33540495/pexels-photo-33540495.jpeg"
];

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
    type: "Supply view",
    title: "Construction growth with stronger site presence",
    copy: "A more grounded visual story works better here than generic placeholder scenery.",
    image: pexelsImages[1],
    location: "Active construction context"
  },
  {
    id: "nairobi-skyline",
    type: "Material focus",
    title: "Equipment and supply framed with more clarity",
    copy: "The image language now stays closer to real construction materials and site conditions.",
    image: pexelsImages[2],
    location: "Materials and logistics"
  },
  {
    id: "neutral-roadwork",
    type: "Delivery context",
    title: "Road and infrastructure support",
    copy: "The supporting visuals now reinforce movement, delivery, and operational confidence.",
    image: pexelsImages[3],
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
      <Hero title={content.heroTitle} subtitle={content.heroSubtitle} image={pexelsImages[0]} />

      <section className="section-shell">
        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <Reveal>
            <div className="section-frame">
              <SectionHeading
                eyebrow="Featured Materials"
                title="A tighter layout with more useful information in view"
                copy="The homepage now uses denser section framing, stronger contrast and clearer grouping so the page feels full without feeling overcrowded."
              />
              <div className="mt-8">
                <StatsStrip items={stats} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="dark-panel page-noise h-full p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-white/58">Operations Board</p>
              <h3 className="font-display mt-4 text-3xl font-semibold text-white">Built to fit site realities</h3>
              <div className="mt-6 space-y-4">
                {[
                  "Compact sections reduce empty space and keep the page moving.",
                  "Black, white and orange now drive hierarchy instead of soft beige surfaces.",
                  "The UI now uses a wider shell with cleaner grouping on desktop."
                ].map((item) => (
                  <div key={item} className="rounded-[20px] border border-white/10 bg-white/6 p-4 text-sm leading-7 text-white/72">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="section-frame">
              <SectionHeading
                eyebrow="Featured Materials"
                title="Products stay prominent without wasting horizontal space"
                copy="The slider remains central, but it now sits inside a stronger frame so the product area reads as a deliberate commercial surface."
              />
              <div className="mt-8">
                <FeaturedProducts products={products} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="section-frame h-full">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Supply Priorities</p>
              <div className="mt-5 grid gap-4">
                {[
                  { title: "Fast quoting", copy: "Clear responses for urgent procurement requests." },
                  { title: "Bulk coordination", copy: "Volume handling for contractors and recurring restocks." },
                  { title: "Delivery visibility", copy: "A more trustworthy layout that supports conversion." }
                ].map((item) => (
                  <div key={item.title} className="rounded-[24px] border border-border bg-background/80 p-5">
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="section-shell pt-0">
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
              title="A stronger trust presentation with less visual drift"
              copy="The interface now leans on deep contrast, compact cards and more deliberate framing so every block earns its space."
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
              <h3 className="font-display mt-6 text-3xl font-semibold text-white">Built for reliability</h3>
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
              <h2 className="font-display mt-3 text-3xl font-semibold">{content.ctaBannerTitle}</h2>
              <p className="mt-3 max-w-2xl text-white/70">{content.ctaBannerCopy}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90">
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
