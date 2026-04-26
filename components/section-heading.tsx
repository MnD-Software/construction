import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <Badge variant="secondary">{eyebrow}</Badge>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}
