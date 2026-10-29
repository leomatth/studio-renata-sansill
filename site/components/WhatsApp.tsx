"use client";

import { useEffect, useState } from "react";
import { siWhatsapp } from "simple-icons";
import { whatsappLink } from "@/lib/site";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d={siWhatsapp.path} />
    </svg>
  );
}

// Só aparece quando não há outro botão de WhatsApp à vista:
// some enquanto o CTA do hero ou a seção de contato estão na tela.
export function WhatsAppBubble() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const targets = ["hero-acoes", "contato"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const visible = new Set<Element>();

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setShown(visible.size === 0);
    });

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-shown={shown}
      aria-hidden={!shown}
      tabIndex={shown ? undefined : -1}
      aria-label="Conversar com o Studio Renata Sansill no WhatsApp"
      className="bubble fixed z-50 grid size-14 place-items-center rounded-full bg-[#1f9e55] text-white shadow-[0_10px_28px_-8px_rgb(58_28_39/0.5)] [@media(hover:hover)]:hover:bg-[#188a49]"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
