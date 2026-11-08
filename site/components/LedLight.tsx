"use client";

import Image from "next/image";
import { useState } from "react";
import ledAzul from "@/assets/img/pdrn-led-azul.jpg";
import ledVermelha from "@/assets/img/pdrn-led-vermelho.jpg";
import { delay, index, RevealLines } from "@/components/Reveal";
import { ledModes, type LedMode } from "@/lib/content";

const photos = {
  azul: { src: ledAzul, alt: "Rosto de uma cliente sob a luz azul da LED terapia, com máscara de ativos" },
  vermelha: { src: ledVermelha, alt: "A mesma cliente sob a luz vermelha da LED terapia" },
} as const;

const glow = {
  azul: "radial-gradient(55% 65% at 72% 50%, rgb(64 92 255 / 0.2), transparent 70%)",
  vermelha: "radial-gradient(55% 65% at 72% 50%, rgb(235 40 40 / 0.18), transparent 70%)",
} as const;

export function LedLight() {
  const [mode, setMode] = useState<LedMode>("vermelha");
  const modes = Object.keys(ledModes) as LedMode[];

  return (
    <section id="luz" className="relative overflow-hidden bg-creme py-24 [overflow-anchor:none] md:py-36">
      {modes.map((m) => (
        <div
          key={m}
          aria-hidden="true"
          data-active={mode === m}
          className="led-glow pointer-events-none absolute inset-0"
          style={{ background: glow[m] }}
        />
      ))}

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 md:grid-cols-12 md:items-center md:gap-8">
        <div className="md:col-span-6 lg:col-span-5">
          <RevealLines
            lines={["A luz certa", "para cada pele"]}
            className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-vinho sm:text-5xl lg:text-6xl"
          />
          <p
            data-reveal="fade"
            style={delay(200)}
            className="mt-6 max-w-[42ch] text-lg leading-relaxed text-ameixa-soft"
          >
            A LED terapia potencializa os ativos das máscaras faciais usadas nos tratamentos de
            rejuvenescimento. Cada cor age de um jeito. Experimente:
          </p>

          <div
            role="group"
            aria-label="Escolha a cor da luz"
            data-reveal="fade"
            style={delay(320)}
            className="mt-8 flex flex-wrap gap-3"
          >
            {modes.map((m) => {
              const active = mode === m;
              return (
                <button
                  key={m}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setMode(m)}
                  className={`press flex items-center gap-2.5 rounded-full border px-5 py-3 text-sm tracking-[0.12em] uppercase ${
                    active
                      ? "border-vinho bg-vinho text-creme"
                      : "border-ameixa/25 text-ameixa [@media(hover:hover)]:hover:border-vinho"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`size-2.5 rounded-full transition-[box-shadow] duration-500 ${
                      m === "azul" ? "bg-[#4a63ff]" : "bg-[#e5322d]"
                    } ${active ? (m === "azul" ? "shadow-[0_0_10px_2px_#4a63ff]" : "shadow-[0_0_10px_2px_#e5322d]") : ""}`}
                  />
                  {ledModes[m].label}
                </button>
              );
            })}
          </div>

          <ul
            aria-live="polite"
            data-reveal="fade"
            style={delay(420)}
            className="mt-10 border-t border-rose/40 [overflow-anchor:none]"
          >
            {ledModes[mode].benefits.map((benefit, i) => (
              <li
                key={`${mode}-${benefit}`}
                style={{ ...index(i), animationDelay: `${i * 50}ms` }}
                className="fade-in border-b border-rose/40 py-4 font-display text-2xl text-ameixa"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <div className="relative mx-auto w-[86%] max-w-[400px] md:mr-3">
            <span aria-hidden="true" className="arch-frame text-rose/70" />
            <div data-reveal="image" className="arch relative aspect-[3/4] overflow-hidden">
              <div className="absolute inset-0">
                {modes.map((m) => (
                  <Image
                    key={m}
                    src={photos[m].src}
                    alt={photos[m].alt}
                    data-active={mode === m}
                    sizes="(min-width: 768px) 400px, 100vw"
                    placeholder="blur"
                    className="led-layer absolute inset-0 h-full w-full object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="mx-auto mt-6 w-[86%] max-w-[400px] text-sm text-ameixa-soft md:mr-3">
            Na foto: protocolo com PDRN, potencializado pela LED.
          </p>
        </div>
      </div>
    </section>
  );
}
