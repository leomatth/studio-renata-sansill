import type { StaticImageData } from "next/image";
import microagulhamento from "@/assets/img/microagulhamento.jpg";
import renataMascaraVapor from "@/assets/img/renata-mascara-vapor.jpg";

// Textos baseados no que a Renata enviou (briefing/mensagens.md) e no Instagram.
// Novos lotes de material entram aqui sem mexer no layout.

export const interests = [
  { label: "Rejuvenescimento facial", topic: "rejuvenescimento facial" },
  { label: "Acne e oleosidade", topic: "tratamento para acne e oleosidade" },
  { label: "Manchas e textura", topic: "tratamento para manchas e textura da pele" },
  { label: "Corporal", topic: "estética corporal" },
  { label: "Botox", topic: "Botox" },
];

export const ledModes = {
  azul: {
    label: "Luz azul",
    benefits: [
      "Clareamento",
      "Ação oxigenante e cicatrizante",
      "Controle da oleosidade e da acne",
    ],
  },
  vermelha: {
    label: "Luz vermelha",
    benefits: [
      "Estímulo de colágeno",
      "Rejuvenescimento",
      "Melhora da microcirculação",
    ],
  },
} as const;

export type LedMode = keyof typeof ledModes;

type Media =
  | { kind: "video"; src: string; poster: string; alt: string }
  | { kind: "image"; src: StaticImageData; alt: string };

export type Protocol = {
  id: string;
  name: string;
  lead: string;
  indications: string[];
  media: Media;
};

export const protocols: Protocol[] = [
  {
    id: "peeling-de-diamante",
    name: "Peeling de diamante",
    lead: "Uma esfoliação precisa, que renova a superfície da pele e devolve o viço.",
    indications: [
      "Suavizar linhas finas e rugas superficiais",
      "Amenizar cicatrizes de acne e manchas superficiais",
      "Reduzir a oleosidade e a aparência de poros dilatados",
      "Melhorar a textura e o viço geral da pele",
    ],
    media: {
      kind: "video",
      src: "/media/peeling-diamante.mp4",
      poster: "/media/peeling-diamante.jpg",
      alt: "Renata aplicando o peeling de diamante no rosto de uma cliente",
    },
  },
  {
    id: "alta-frequencia",
    name: "Alta frequência",
    lead: "Ação antisséptica e de oxigenação, usada no rosto e no couro cabeludo.",
    indications: [
      "Ação bactericida e fungicida, contra as bactérias da acne e fungos",
      "Efeito cicatrizante após a extração de cravos e espinhas",
      "Melhora a circulação e a oxigenação das células",
      "Ajuda a regular a oleosidade",
    ],
    media: {
      kind: "video",
      src: "/media/alta-frequencia.mp4",
      poster: "/media/alta-frequencia.jpg",
      alt: "Eletrodo de vidro da alta frequência deslizando sobre a pele do rosto",
    },
  },
  {
    id: "rejuvenescimento-facial",
    name: "Rejuvenescimento facial",
    lead: "Máscaras com ativos, vapor e toque manual, potencializados pela LED terapia.",
    indications: [
      "Hidratação e firmeza",
      "Viço e luminosidade",
      "Um momento de pausa e cuidado",
    ],
    media: {
      kind: "image",
      src: renataMascaraVapor,
      alt: "Renata ajustando a máscara facial de uma cliente sob o vapor",
    },
  },
  {
    id: "microagulhamento",
    name: "Microagulhamento",
    lead: "Microperfurações controladas que estimulam a pele a se renovar.",
    indications: [
      "Textura e poros",
      "Marcas de acne",
      "Firmeza",
    ],
    media: {
      kind: "image",
      src: microagulhamento,
      alt: "Caneta de microagulhamento sobre a testa de uma cliente",
    },
  },
];

export const moreProtocols = [
  {
    name: "PDRN",
    text: "Desperta a capacidade da pele de se renovar, com regeneração celular e rejuvenescimento de forma natural.",
  },
  { name: "Botox", text: "Pergunte pelas datas do Botox Day." },
  { name: "PEIM", text: "Remoção de microvasos nas pernas." },
  { name: "Estética corporal", text: "Modelagem, redução de medidas e flacidez." },
];

export const steps = [
  { name: "Avaliação personalizada", text: "Cada detalhe pensado para o seu bem-estar." },
  { name: "Protocolo sob medida", text: "Técnicas e tecnologias escolhidas para a sua pele." },
  { name: "Acompanhamento", text: "Cada sessão acompanhada de perto, com ajustes quando a pele pede." },
];

export const alsoInStudio = [
  "Cabelos e mechas",
  "Terapia capilar",
  "Unhas",
  "Massoterapia",
  "Ventosaterapia",
  "Drenagem",
];
