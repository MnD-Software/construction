"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Testimonial = {
  id: string;
  name: string;
  role?: string | null;
  message: string;
};

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 5200);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
      <div className="dark-panel page-noise flex flex-col justify-between p-6 md:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Site confidence</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Social proof should feel alive, not static
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/62 md:text-base">
            The slider now rotates through customer feedback with clearer pacing, stronger controls and cleaner motion.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((testimonial, itemIndex) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setIndex(itemIndex)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                className={`h-2.5 rounded-full transition-all ${itemIndex === index ? "w-8 bg-primary" : "w-2.5 bg-white/26"}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              size="icon"
              className="rounded-full"
              onClick={() => setIndex((value) => (value + 1) % testimonials.length)}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[index]?.id}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.45 }}
          >
            <Card className="industrial-panel rounded-[32px] border-transparent bg-white/84">
              <CardContent className="p-7 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Quote className="h-6 w-6" />
                </div>
                <p className="mt-8 text-2xl leading-10 text-foreground md:text-4xl md:leading-[1.35]">
                  "{testimonials[index]?.message}"
                </p>
                <div className="mt-8">
                  <p className="text-lg font-semibold">{testimonials[index]?.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{testimonials[index]?.role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
