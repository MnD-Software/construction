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
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] text-white shadow-[0_14px_40px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.34),transparent_42%)]" />
        <span className="font-display relative text-lg font-semibold tracking-[0.18em] text-white">TG</span>
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
