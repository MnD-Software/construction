import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Hero({
  title,
  subtitle,
  image
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden border-b">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(110deg, rgba(17,24,39,0.88), rgba(17,24,39,0.52), rgba(17,24,39,0.7)), url(${image})`
        }}
      />
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-20" />
      <div className="container relative grid min-h-[78svh] items-end py-20 md:min-h-[88svh] md:py-28">
        <div className="max-w-3xl pb-10 text-white">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/80">
            Reliable Supply Across Homa Bay
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href={siteConfig.phoneHref}>
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Get Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
