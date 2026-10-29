"use client";

import { useEffect, useState } from "react";
import { Monogram } from "@/components/Monogram";
import { WhatsAppIcon } from "@/components/WhatsApp";
import { site, whatsappLink } from "@/lib/site";

export type NavItem = { href: string; label: string };

// Aparece depois do hero, só quando a pessoa rola para cima (quer navegar).
export function StickyNav({ items }: { items: NavItem[] }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const pastHero = hero ? y > hero.offsetHeight - 80 : y > 600;
      const delta = y - lastY;
      if (Math.abs(delta) < 6) return;
      setShown(pastHero && delta < 0);
      lastY = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      data-shown={shown}
      inert={!shown}
      className="sticky-nav on-vinho fixed inset-x-0 top-0 z-40 bg-vinho text-creme shadow-[0_6px_20px_-12px_rgb(58_28_39/0.6)]"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label={`${site.name}, voltar ao início`}>
          <Monogram />
        </a>
        <nav aria-label="Seções" className="flex items-center gap-8">
          <ul className="hidden gap-7 text-xs tracking-[0.16em] uppercase lg:flex">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-link underline decoration-transparent underline-offset-8 [@media(hover:hover)]:hover:decoration-rose-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex items-center gap-2 rounded-full bg-creme px-4 py-2 text-sm font-medium text-vinho [@media(hover:hover)]:hover:bg-blush"
          >
            <WhatsAppIcon className="size-4" />
            Agendar
          </a>
        </nav>
      </div>
    </div>
  );
}
