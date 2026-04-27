"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

type ShowcaseSlide = {
  id: string;
  title: string;
  copy: string;
  image: string;
  location: string;
  type: string;
};

export function ShowcaseCarousel({ slides }: { slides: ShowcaseSlide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5600);

    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[index];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-black/5 dark:border-white/8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(10,10,11,0.1), rgba(10,10,11,0.72)), url(${current.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.24),transparent_26%)]" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <div className="max-w-2xl rounded-[26px] border border-white/12 bg-black/38 p-5 text-white backdrop-blur-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-white/55">{current.type}</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{current.title}</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 md:text-base">{current.copy}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/66">
              <MapPin className="h-4 w-4 text-primary" />
              {current.location}
            </div>
          </div>
        </div>
      </div>

      <div className="industrial-panel flex flex-col justify-between p-6 md:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Visual story</p>
          <h3 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Spacious sections, darker contrast, and imagery that matches the message
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground md:text-base">
            This carousel is used to create a more cinematic rhythm across the homepage instead of repeating the same card pattern.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {slides.map((slide, itemIndex) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setIndex(itemIndex)}
              className={`flex w-full items-start justify-between rounded-[24px] border p-4 text-left transition-all ${
                itemIndex === index
                  ? "border-primary/30 bg-primary/8"
                  : "border-border bg-background/60 hover:bg-accent/40"
              }`}
            >
              <div>
                <p className="text-sm font-semibold">{slide.title}</p>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{slide.location}</p>
              </div>
              <span className={`mt-1 h-2.5 w-2.5 rounded-full ${itemIndex === index ? "bg-primary" : "bg-border"}`} />
            </button>
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="rounded-full"
            onClick={() => setIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            size="icon"
            className="rounded-full"
            onClick={() => setIndex((currentIndex) => (currentIndex + 1) % slides.length)}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
