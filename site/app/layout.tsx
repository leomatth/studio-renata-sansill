import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost, Pinyon_Script } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

const description =
  "Estética avançada em Itaipuaçu, Maricá. Protocolos faciais e corporais personalizados com Renata Sansill, há mais de 20 anos na área da beleza.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Estética avançada em Maricá`,
  description,
  openGraph: {
    title: site.name,
    description,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Renata Sansill" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#5e2337",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: extensões (ex.: Bitdefender) injetam atributos em <html>/<body>
    <html
      lang="pt-BR"
      className={`${bodoni.variable} ${jost.variable} ${pinyon.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
