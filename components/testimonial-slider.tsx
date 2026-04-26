"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[index]?.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-2xl border-border/50 bg-card/80 shadow-soft">
            <CardContent className="p-8">
              <p className="text-xl leading-8 text-foreground md:text-2xl">“{testimonials[index]?.message}”</p>
              <div className="mt-6">
                <p className="font-semibold">{testimonials[index]?.name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[index]?.role}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
