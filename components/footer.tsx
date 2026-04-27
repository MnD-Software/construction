import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { whatsappLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="px-3 pb-24 pt-3 md:px-0 md:pb-0">
      <div className="container">
        <div className="dark-panel page-noise overflow-hidden px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.7fr_0.8fr]">
            <div>
              <h3 className="text-2xl font-semibold text-white">Tagotha Investments</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/62">
                Quality construction materials for contractors, hardware stores and individual builders across Homa Bay.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white"
              >
                Reach our team
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div>
              <h4 className="font-medium text-white">Quick Links</h4>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
                <Link href="/about">About</Link>
                <Link href="/products">Products</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white">Contact</h4>
              <div className="mt-4 space-y-3 text-sm text-white/60">
                <a href={siteConfig.phoneHref} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  {siteConfig.phoneDisplay}
                </a>
                <a href={whatsappLink("Hello Tagotha Investments")} className="flex items-center gap-2">
                  <MessageCircleMore className="h-4 w-4 text-primary" />
                  WhatsApp Us
                </a>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {siteConfig.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
