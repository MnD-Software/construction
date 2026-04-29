"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMark({
  compact = false,
  inverted = false,
  className
}: {
  compact?: boolean;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Link href="/" className={cn("group flex min-w-0 items-center gap-3", className)}>
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-[#111111] text-white shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:-translate-y-0.5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.34),transparent_42%)]" />
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,rgba(249,115,22,0.95),rgba(251,146,60,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_48%,rgba(0,0,0,0.16))]" />
        <div className="relative h-7 w-7">
          <span className="absolute bottom-[3px] left-[2px] h-[4px] w-[23px] rounded-full bg-white/86" />
          <span className="absolute bottom-[7px] left-[4px] h-[15px] w-[4px] rounded-full bg-primary" />
          <span className="absolute bottom-[7px] left-[11px] h-[18px] w-[4px] rounded-full bg-white/92" />
          <span className="absolute bottom-[7px] left-[18px] h-[11px] w-[4px] rounded-full bg-white/58" />
          <span className="absolute left-[3px] top-[2px] h-[3px] w-[18px] origin-left -rotate-[28deg] rounded-full bg-primary/92" />
          <span className="absolute left-[15px] top-[5px] h-[3px] w-[9px] origin-left rotate-[18deg] rounded-full bg-white/88" />
        </div>
      </div>
      <div className="min-w-0">
        <p className={cn("truncate font-display text-lg font-semibold tracking-tight", inverted ? "text-white" : "text-foreground dark:text-white")}>
          Tagotha Investments
        </p>
        {!compact ? (
          <p className={cn("truncate text-[11px] uppercase tracking-[0.24em]", inverted ? "text-white/58" : "text-muted-foreground")}>
            Construction Materials | Homa Bay
          </p>
        ) : null}
      </div>
    </Link>
  );
}
