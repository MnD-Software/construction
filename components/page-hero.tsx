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
    <section className="section-shell pt-10 md:pt-14">
      <div className="dark-panel page-noise relative overflow-hidden px-6 py-12 md:px-10 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_28%)]" />
        <div className="relative max-w-3xl">
          <Badge className="bg-white/10 text-white hover:bg-white/10" variant="outline">
            {eyebrow}
          </Badge>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 md:text-lg">{copy}</p>
        </div>
      </div>
    </section>
  );
}
