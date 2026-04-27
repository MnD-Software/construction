"use client";

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
      title: "Nairobi project energy",
      image: "https://images.unsplash.com/photo-1741778792300-3e420d5fcb26?auto=format&fit=crop&w=900&q=80",
      location: "Nairobi, Kenya"
    },
    {
      title: "Neutral material movement",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
      location: "Regional delivery route"
    }
  ];

  return (
    <section className="relative overflow-hidden px-3 pb-6 pt-2 md:px-0 md:pb-10 md:pt-0">
      <div className="container">
        <div className="relative overflow-hidden rounded-[34px] border border-white/10 md:rounded-none md:border-x-0 md:border-t-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(120deg, rgba(10,10,11,0.92), rgba(10,10,11,0.68), rgba(10,10,11,0.52)), url(${image})`
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.28),transparent_28%)]" />
          <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-15" />
          <div className="relative grid min-h-[86svh] items-end px-5 py-7 md:px-8 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl pb-4 text-white md:pb-10"
              >
                <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/78">
                  Supply Partner For Kenyan Builds
                </span>
                <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">{title}</h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/74 md:text-xl">{subtitle}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button size="lg" asChild className="rounded-full">
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="lg:justify-self-end"
              >
                <div className="w-full max-w-[360px] space-y-4 md:max-w-[420px]">
                  <div className="rounded-[28px] border border-white/12 bg-white/10 p-4 backdrop-blur-2xl">
                    <div className="rounded-[22px] bg-[#111111]/78 p-4 text-white">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-white/55">Live Supply Snapshot</p>
                          <p className="mt-2 text-2xl font-semibold">Material flow without site delays</p>
                        </div>
                        <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">Open</div>
                      </div>
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
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {mediaCards.map((card, index) => (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.28 + index * 0.1 }}
                        className="overflow-hidden rounded-[24px] border border-white/12 bg-white/8 backdrop-blur-xl"
                      >
                        <div
                          className="relative min-h-[180px]"
                          style={{
                            backgroundImage: `linear-gradient(180deg, rgba(17,24,39,0.08), rgba(17,24,39,0.76)), url(${card.image})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                          }}
                        >
                          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                            <p className="text-sm font-semibold">{card.title}</p>
                            <div className="mt-2 inline-flex items-center gap-2 text-xs text-white/70">
                              <MapPin className="h-3.5 w-3.5 text-primary" />
                              {card.location}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
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
