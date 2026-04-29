"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

type ShowcaseSlide = {
  id: string;
  title: string;
  copy: string;
  image: string;
  location: string;
  type: string;
};

export function ShowcaseCarousel({ slides }: { slides: ShowcaseSlide[] }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="industrial-panel flex flex-col justify-between p-6 md:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Project Snapshot</p>
          <h3 className="font-display mt-3 max-w-sm text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Construction supply built around the work happening on site
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground md:text-base">
            These project views highlight the kind of delivery support, material movement and jobsite realities Tagotha Investments is built to serve.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {slides.map((slide) => (
            <div key={slide.id} className="rounded-[24px] border border-border bg-background/60 p-4">
              <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{slide.type}</p>
              <p className="mt-2 text-sm font-semibold">{slide.title}</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{slide.copy}</p>
              <div className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {slide.location}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909] ${index === 0 ? "md:col-span-2 min-h-[420px]" : "min-h-[300px]"}`}
          >
            <Image src={slide.image} alt={slide.title} fill sizes="(max-width: 1280px) 100vw, 36vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,11,0.04),rgba(10,10,11,0.82))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">{slide.type}</p>
              <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{slide.title}</h3>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/66">
                <MapPin className="h-4 w-4 text-primary" />
                {slide.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
