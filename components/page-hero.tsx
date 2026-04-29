import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="section-shell pt-8 md:pt-12">
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#080808] px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.34)] md:px-10 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.24),transparent_24%)]" />
        <div className="absolute inset-y-0 right-0 w-[34%] border-l border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] md:block hidden" />
        <div className="relative grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div className="max-w-3xl">
            <Badge className="border-white/10 bg-white/8 text-white hover:bg-white/8" variant="outline">
              {eyebrow}
            </Badge>
            <h1 className="font-display mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">{copy}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
            {[
              "Materials sourced for homes, contractors and commercial work.",
              "Quote support built around budgets, quantities and timelines.",
              "Delivery planning for Homa Bay and surrounding project areas."
            ].map((item) => (
              <div key={item} className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-white/66">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
