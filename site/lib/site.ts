export const site = {
  name: "Studio Renata Sansill",
  tagline: "Estética avançada",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsapp: "5521984438544",
  phoneDisplay: "(21) 98443-8544",
  instagram: "https://www.instagram.com/studiorenatasansill/",
  instagramHandle: "@studiorenatasansill",
  locality: "Itaipuaçu, Maricá",
  region: "RJ",
  copyrightYear: 2026,
} as const;

const defaultMessage = "Olá! Vim pelo site e gostaria de agendar uma avaliação.";

export function whatsappLink(message: string = defaultMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function interestLink(topic: string) {
  return whatsappLink(`Olá! Vim pelo site e quero saber mais sobre ${topic}.`);
}
