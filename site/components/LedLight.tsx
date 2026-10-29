"use client";

import Image from "next/image";
import { useState } from "react";
import ledAzul from "@/assets/img/pdrn-led-azul.jpg";
import ledVermelha from "@/assets/img/pdrn-led-vermelho.jpg";
import { ledModes, type LedMode } from "@/lib/content";

const photos = {
  azul: { src: ledAzul, alt: "Rosto de uma cliente sob a luz azul da LED terapia, com máscara de ativos" },
  vermelha: { src: ledVermelha, alt: "A mesma cliente sob a luz vermelha da LED terapia" },
} as const;

const glow = {
  azul: "radial-gradient(60% 70% at 70% 45%, rgb(64 92 255 / 0.22), transparent 70%)",
  vermelha: "radial-gradient(60% 70% at 70% 45%, rgb(235 40 40 / 0.2), transparent 70%)",
} as const;

export function LedLight() {
  const [mode, setMode] = useState<LedMode>("vermelha");
  const modes = Object.keys(ledModes) as LedMode[];

  return (
    <section id="luz" className="relative overflow-hidden bg-creme py-20 [overflow-anchor:none] md:py-32">
      {modes.map((m) => (
        <div
          key={m}
          aria-hidden="true"
          data-active={mode === m}
          className="led-glow pointer-events-none absolute inset-0"
          style={{ background: glow[m] }}
        />
      ))}

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-12 md:items-center md:gap-8">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-vinho sm:text-5xl md:text-6xl">
            A luz certa para cada pele
          </h2>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-ameixa-soft">
            A LED terapia potencializa os ativos das máscaras faciais usadas nos tratamentos de
            rejuvenescimento. Cada cor age de um jeito. Experimente:
          </p>

          <div role="group" aria-label="Escolha a cor da luz" className="mt-8 flex gap-3">
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
                    className={`size-2.5 rounded-full ${m === "azul" ? "bg-[#4a63ff]" : "bg-[#e5322d]"}`}
                  />
                  {ledModes[m].label}
                </button>
              );
            })}
          </div>

          <ul aria-live="polite" className="mt-10 border-t border-rose/40 [overflow-anchor:none]">
            {ledModes[mode].benefits.map((benefit) => (
              <li
                key={`${mode}-${benefit}`}
                className="fade-in border-b border-rose/40 py-4 font-display text-2xl text-ameixa"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="relative mx-auto max-w-[480px] md:mr-0">

            <div
              aria-hidden="true"
              className="absolute -inset-3 translate-x-3 translate-y-3 border border-rose/60 md:-inset-4 md:translate-x-5 md:translate-y-5"
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-ameixa">
              {modes.map((m) => (
                <Image
                  key={m}
                  src={photos[m].src}
                  alt={photos[m].alt}
                  data-active={mode === m}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  placeholder="blur"
                  className="led-layer absolute inset-0 h-full w-full object-cover"
                />
              ))}
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-[480px] text-sm text-ameixa-soft md:mt-10 md:mr-0">
            Na foto: protocolo com PDRN, potencializado pela LED.
          </p>
        </div>
      </div>
    </section>
  );
}
