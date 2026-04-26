import { SiteContentForm } from "@/components/admin/site-content-form";
import { getSiteContent } from "@/lib/data";

export default async function AdminContentPage() {
  const content = await getSiteContent();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Homepage Content</h1>
        <p className="mt-2 text-sm text-muted-foreground">Update hero messaging and call-to-action copy.</p>
      </div>
      <SiteContentForm content={content} />
    </div>
  );
}
