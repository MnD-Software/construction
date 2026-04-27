"use client";

import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  id: string;
  name: string;
  role?: string | null;
  message: string;
};

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.86fr_1.14fr]">
      <div className="dark-panel page-noise flex flex-col justify-between p-6 md:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">Reputation</p>
          <h3 className="font-display mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Testimonial cards can work if they read clearly and do not rotate away from the reader
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/62 md:text-base">
            This section now stays stable, making it easier to scan customer confidence at a glance.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="industrial-panel rounded-[32px] border-transparent bg-white/84">
            <CardContent className="p-5 md:p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/12 text-primary">
                <Quote className="h-6 w-6" />
              </div>
              <p className="font-display mt-6 text-lg leading-8 text-foreground md:text-2xl md:leading-[1.5]">
                "{testimonial.message}"
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
