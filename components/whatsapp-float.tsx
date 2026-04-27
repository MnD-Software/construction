import { MessageCircleMore } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hello Tagotha Investments, I need a quote.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-28 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_45px_rgba(249,115,22,0.35)] transition-transform hover:scale-105 md:bottom-6 md:right-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}
