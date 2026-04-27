"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, ShieldCheck, TimerReset, Truck } from "lucide-react";
import { motion } from "framer-motion";
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
  const highlights = [
    { label: "Bulk orders", value: "Contractor-ready", icon: Truck },
    { label: "Response time", value: "Fast quote support", icon: TimerReset },
    { label: "Material focus", value: "Reliable and durable", icon: ShieldCheck }
  ];

  const mediaCards = [
    {
      title: "Urban project coordination",
      image: "https://images.pexels.com/photos/4170184/pexels-photo-4170184.jpeg",
      location: "Active build context"
    },
    {
      title: "Material movement and delivery",
      image: "https://images.pexels.com/photos/14097580/pexels-photo-14097580.jpeg",
      location: "Regional supply route"
    }
  ];

  return (
    <section className="relative overflow-hidden px-3 pb-8 pt-3 md:px-6 md:pb-14 md:pt-4">
      <div className="container">
        <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#050505]">
          <div className="absolute inset-0">
            <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(4,4,4,0.96),rgba(4,4,4,0.82),rgba(4,4,4,0.58))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.34),transparent_24%)]" />
          <div className="absolute -right-24 top-8 h-64 w-64 rounded-full accent-orb blur-3xl" />
          <div className="absolute inset-0 bg-grid bg-[size:52px_52px] opacity-15" />
          <div className="relative grid min-h-[82svh] items-center px-5 py-10 md:px-12 md:py-12">
            <div className="grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl text-white"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/78">
                    Supply Partner For Kenyan Builds
                  </span>
                  <span className="inline-flex rounded-full bg-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    Modern Construction Supply
                  </span>
                </div>
                <h1 className="font-display mt-7 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl xl:text-[5.5rem] xl:leading-[0.96]">
                  {title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-xl">{subtitle}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button size="lg" asChild className="rounded-full bg-primary text-white hover:bg-primary/90">
                    <a href={siteConfig.phoneHref}>
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 bg-white/8 text-white hover:bg-white/14">
                    <Link href="/contact">
                      Get Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {[
                    { value: "48hr", label: "Dispatch planning" },
                    { value: "Bulk", label: "Contractor volume" },
                    { value: "Direct", label: "Quote support" }
                  ].map((item) => (
                    <div key={item.label} className="metric-tile">
                      <p className="font-display text-3xl font-semibold text-primary">{item.value}</p>
                      <p className="mt-1 text-sm text-white/62">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:justify-self-end"
              >
                <div className="w-full max-w-[620px]">
                  <div className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-white/12 bg-white/8 p-3 backdrop-blur-2xl md:min-h-[540px]">
                    <div className="relative h-full overflow-hidden rounded-[28px]">
                      <Image
                        src={mediaCards[0].image}
                        alt={mediaCards[0].title}
                        fill
                        sizes="(max-width: 1280px) 100vw, 38vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.82))]" />
                      <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/40 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/78 backdrop-blur-xl">
                        Site-ready delivery support
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                        <div className="grid gap-4 md:grid-cols-[1fr_210px]">
                          <div className="rounded-[26px] border border-white/12 bg-black/45 p-5 text-white backdrop-blur-2xl">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/55">Live Supply Snapshot</p>
                            <p className="mt-3 font-display text-2xl font-semibold md:text-3xl">Material flow without site delays</p>
                            <div className="mt-5 space-y-3">
                              {highlights.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <div key={item.label} className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/6 p-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/16 text-primary">
                                      <Icon className="h-4 w-4" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-sm font-medium">{item.value}</p>
                                      <p className="text-xs text-white/55">{item.label}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="grid gap-3">
                            <div className="rounded-[24px] border border-white/12 bg-black/45 p-4 text-white backdrop-blur-2xl">
                              <p className="text-xs uppercase tracking-[0.18em] text-white/55">Fulfillment</p>
                              <p className="mt-3 text-3xl font-semibold text-primary">88%</p>
                              <div className="mt-4 h-2 rounded-full bg-white/10">
                                <div className="h-2 w-[88%] rounded-full bg-[linear-gradient(90deg,#f97316,#fb923c)]" />
                              </div>
                            </div>
                            <div className="rounded-[24px] border border-white/12 bg-black/45 p-4 text-white backdrop-blur-2xl">
                              <p className="text-xs uppercase tracking-[0.18em] text-white/55">Location</p>
                              <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/72">
                                <MapPin className="h-4 w-4 text-primary" />
                                {mediaCards[0].location}
                              </div>
                              <p className="mt-3 text-sm leading-7 text-white/62">{mediaCards[0].title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
