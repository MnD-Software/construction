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
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-[#111111] text-white shadow-[0_14px_40px_rgba(0,0,0,0.22)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.28),transparent_40%)]" />
        <div className="relative flex h-6 w-6 items-end justify-center">
          <span className="absolute left-[2px] top-[1px] h-4 w-[3px] rounded-full bg-primary/95" />
          <span className="absolute left-[7px] top-[1px] h-4 w-[3px] rounded-full bg-white/88" />
          <span className="absolute left-[12px] top-[1px] h-4 w-[3px] rounded-full bg-white/56" />
          <span className="absolute bottom-[1px] left-0 h-[3px] w-6 rounded-full bg-white/82" />
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
