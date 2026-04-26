import Link from "next/link";
import { MapPin, MessageCircleMore, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h3 className="text-xl font-semibold">Tagotha Investments</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            Quality construction materials for contractors, hardware stores and individual builders across Homa Bay.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a href={whatsappLink("Hello Tagotha Investments")} className="flex items-center gap-2">
              <MessageCircleMore className="h-4 w-4" />
              WhatsApp Us
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
