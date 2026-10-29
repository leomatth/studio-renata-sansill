import { siWhatsapp } from "simple-icons";
import { whatsappLink } from "@/lib/site";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d={siWhatsapp.path} />
    </svg>
  );
}

export function WhatsAppBubble() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com o Studio Renata Sansill no WhatsApp"
      className="press bubble-in fixed z-50 grid size-14 place-items-center rounded-full bg-[#1f9e55] text-white shadow-[0_8px_24px_-6px_rgb(58_28_39/0.45)] [@media(hover:hover)]:hover:bg-[#188a49]"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
