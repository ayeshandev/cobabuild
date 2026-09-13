import { WhatsAppIcon } from "@/components/site/icons/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/site-config";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full ring-2 ring-background animate-pulse" />
    </a>
  );
}
