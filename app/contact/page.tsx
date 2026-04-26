import { MapPin, MessageCircleMore, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Request a quote or speak to us directly"
        copy="Call, WhatsApp or send your material request and we will respond with pricing and delivery guidance."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <Card className="rounded-2xl">
            <CardContent className="space-y-5 p-6">
              <a href={siteConfig.phoneHref} className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <a href={whatsappLink("Hello Tagotha Investments, I need a quote.")} className="flex items-center gap-3">
                <MessageCircleMore className="h-5 w-5 text-primary" />
                <span>Chat on WhatsApp</span>
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{siteConfig.location}</span>
              </p>
            </CardContent>
          </Card>
          <div className="overflow-hidden rounded-2xl border">
            <iframe
              title="Tagotha Investments location"
              src="https://www.google.com/maps?q=Homa%20Bay%20Kenya&output=embed"
              className="h-[320px] w-full"
              loading="lazy"
            />
          </div>
        </div>
        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
