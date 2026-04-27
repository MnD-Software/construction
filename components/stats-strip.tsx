"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (current) => `${Math.round(current)}${suffix}`);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export function StatsStrip({
  items
}: {
  items: Array<{ value: number; suffix?: string; label: string }>;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="industrial-panel relative overflow-hidden p-5 md:p-6"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-orange-300 to-transparent" />
          <p className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            <Counter value={item.value} suffix={item.suffix} />
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
