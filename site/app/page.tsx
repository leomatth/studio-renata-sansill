import { Fragment } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import renataRetrato from "@/assets/img/renata-retrato.jpg";
import renataMassagem from "@/assets/img/renata-massagem-facial.jpg";
import mascaraDetalhe from "@/assets/img/mascara-vapor-detalhe.jpg";
import ledVermelho from "@/assets/img/led-vermelho.jpg";
import altaFrequenciaAzul from "@/assets/img/alta-frequencia-led-azul.jpg";
import { LedLight } from "@/components/LedLight";
import { Monogram } from "@/components/Monogram";
import { VideoLoop } from "@/components/VideoLoop";
import { WhatsAppBubble, WhatsAppIcon } from "@/components/WhatsApp";
import {
  alsoInStudio,
  interests,
  moreProtocols,
  protocols,
  steps,
  type Protocol,
} from "@/lib/content";
import { interestLink, site, whatsappLink } from "@/lib/site";

const nav = [
  { href: "#luz", label: "LED terapia" },
  { href: "#protocolos", label: "Protocolos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <LedLight />
        <Protocols />
        <About />
        <Studio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBubble />
      <JsonLd />
    </>
  );
}

function Hero() {
  return (
    <header className="on-vinho relative overflow-hidden bg-vinho text-creme">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <a href="#" aria-label={`${site.name}, início`}>
          <Monogram />
        </a>
        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex gap-8 text-sm tracking-[0.14em] uppercase">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="underline-offset-8 decoration-rose-light [@media(hover:hover)]:hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-8 pb-16 sm:px-6 md:grid-cols-12 md:gap-0 md:pt-14 md:pb-24">
        <div className="relative z-10 md:col-span-7 md:pt-10">
          <h1 className="font-display text-[clamp(3.25rem,8.5vw,6rem)] leading-[0.95] tracking-[-0.03em]">
            Realce sua
            <span className="mt-1 block font-script text-[1.08em] leading-[1.1] tracking-normal text-rose-light md:-mr-24">
              melhor versão
            </span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-creme/85">
            Protocolos personalizados de estética facial e corporal, com tecnologia e o cuidado de
            quem está há mais de 20 anos na área da beleza.
          </p>

          <div className="mt-9 flex flex-col items-start gap-6">
            <a
              href={whatsappLink()}
              {...external}
              className="press inline-flex items-center gap-3 rounded-full bg-creme px-7 py-4 font-medium text-vinho [@media(hover:hover)]:hover:bg-blush"
            >
              <WhatsAppIcon className="size-5" />
              Agendar avaliação
            </a>

            <div>
              <p className="text-sm text-creme/75">Ou conte o que você procura:</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <li key={item.label}>
                    <a
                      href={interestLink(item.topic)}
                      {...external}
                      className="press inline-block rounded-full border border-rose-light/50 px-4 py-2 text-sm [@media(hover:hover)]:hover:border-rose-light [@media(hover:hover)]:hover:bg-vinho-deep"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 flex items-center gap-2 text-sm tracking-[0.12em] text-creme/75 uppercase">
            <MapPin aria-hidden="true" className="size-4 text-rose-light" strokeWidth={1.5} />
            {site.locality} · Com hora marcada
          </p>
        </div>

        <div className="relative md:col-span-5">
          <div
            aria-hidden="true"
            className="absolute -inset-3 -translate-x-3 translate-y-3 border border-rose-light/50 md:-inset-4 md:-translate-x-5 md:translate-y-5"
          />
          <div className="reveal-portrait relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
            <Image
              src={renataRetrato}
              alt="Renata Sansill sorrindo, de óculos e blazer claro"
              sizes="(min-width: 768px) 40vw, 100vw"
              placeholder="blur"
              fetchPriority="high"
              loading="eager"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <p className="mt-8 font-script text-3xl text-rose-light md:mt-10 md:text-right md:text-4xl">
            Sua beleza, minha missão!
          </p>
        </div>
      </div>
    </header>
  );
}

function Protocols() {
  return (
    <section id="protocolos" className="bg-blush py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-[18ch] font-display text-4xl leading-[1.05] tracking-[-0.02em] text-vinho sm:text-5xl md:text-6xl">
          Protocolos faciais, feitos à mão e com tecnologia
        </h2>

        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-32">
          {protocols.map((protocol, index) => (
            <ProtocolRow key={protocol.id} protocol={protocol} flip={index % 2 === 1} />
          ))}
        </div>

        <div className="mt-24 border-t border-vinho/25 pt-12 md:mt-32">
          <h3 className="font-display text-3xl text-vinho">E também</h3>
          <dl className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {moreProtocols.map((item) => (
              <div key={item.name}>
                <dt className="font-display text-2xl text-ameixa">{item.name}</dt>
                <dd className="mt-2 max-w-[44ch] leading-relaxed text-ameixa-soft">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function ProtocolRow({ protocol, flip }: { protocol: Protocol; flip: boolean }) {
  const { media } = protocol;
  return (
    <article className="grid gap-8 md:grid-cols-12 md:items-center md:gap-8">
      <div className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
        <div className="relative mx-auto aspect-[9/16] max-h-[640px] w-full max-w-[360px] overflow-hidden bg-ameixa md:mx-0">
          {media.kind === "video" ? (
            <VideoLoop src={media.src} poster={media.poster} alt={media.alt} />
          ) : (
            <Image
              src={media.src}
              alt={media.alt}
              sizes="(min-width: 768px) 360px, 100vw"
              placeholder="blur"
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>

      <div className={`md:col-span-6 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
        <h3 className="font-display text-4xl leading-tight tracking-[-0.01em] text-vinho md:text-5xl">
          {protocol.name}
        </h3>
        <p className="mt-4 max-w-[40ch] text-xl leading-relaxed text-ameixa">{protocol.lead}</p>
        <ul className="mt-8 border-t border-vinho/20">
          {protocol.indications.map((item) => (
            <li key={item} className="border-b border-vinho/20 py-3 leading-relaxed text-ameixa-soft">
              {item}
            </li>
          ))}
        </ul>
        <a
          href={interestLink(protocol.name)}
          {...external}
          className="mt-8 inline-flex items-center gap-2 font-medium text-vinho underline decoration-rose underline-offset-[6px] [@media(hover:hover)]:hover:decoration-vinho"
        >
          Quero saber sobre {protocol.name.toLowerCase()}
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
        </a>
      </div>
    </article>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-creme py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-12 md:items-center md:gap-8">
        <div className="relative md:col-span-5">
          <div
            aria-hidden="true"
            className="absolute -inset-3 -translate-x-3 translate-y-3 border border-rose/60 md:-inset-4 md:-translate-x-5 md:translate-y-5"
          />
          <Image
            src={renataMassagem}
            alt="Renata, de jaleco branco, fazendo massagem facial em uma cliente"
            sizes="(min-width: 768px) 40vw, 100vw"
            placeholder="blur"
            className="relative aspect-[3/4] w-full object-cover"
          />
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-vinho sm:text-5xl md:text-6xl">
            Renata Sansill
          </h2>
          <p className="mt-6 max-w-[48ch] text-xl leading-relaxed text-ameixa">
            Há mais de 20 anos na área da beleza. Terapeuta capilar, esteticista e graduanda em
            Biomedicina, Renata une técnica, tecnologia e escuta para montar protocolos que respeitam
            a pele e a rotina de cada cliente.
          </p>
          <blockquote className="mt-8 max-w-[46ch] border-t border-rose/50 pt-6 text-lg leading-relaxed text-ameixa-soft">
            “Sou apaixonada por transformar vidas e elevar a autoestima, sempre com cuidado, carinho e
            propósito.”
          </blockquote>
          <p className="mt-6 font-script text-4xl text-rose-ink">Sua beleza, minha missão!</p>

          <h3 className="mt-14 font-display text-2xl text-vinho">Como funciona</h3>
          <ol className="mt-6 grid gap-6 sm:grid-cols-3">
            {steps.map((step) => (
              <li key={step.name} className="border-t border-rose/60 pt-4">
                <p className="font-display text-xl leading-snug text-vinho">{step.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-ameixa-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Studio() {
  const gallery = [
    { src: ledVermelho, alt: "Cliente relaxando sob a luz vermelha da LED terapia", className: "md:col-span-4 md:row-span-2" },
    { src: mascaraDetalhe, alt: "Máscara facial sendo ajustada sob o vapor", className: "md:col-span-4" },
    { src: altaFrequenciaAzul, alt: "Alta frequência aplicada sob luz azul", className: "md:col-span-4" },
  ];

  return (
    <section aria-labelledby="studio-titulo" className="bg-creme pb-20 md:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="studio-titulo" className="font-display text-3xl text-vinho md:text-4xl">
          Dentro do studio
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:h-[620px] md:grid-cols-8 md:grid-rows-2 md:gap-4">
          {gallery.map((photo, index) => (
            <div
              key={photo.alt}
              className={`relative overflow-hidden ${index === 0 ? "col-span-2 aspect-[4/5]" : "aspect-square"} md:aspect-auto ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                sizes="(min-width: 768px) 50vw, 100vw"
                placeholder="blur"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-rose/50 pt-10">
          <h3 className="font-display text-2xl text-vinho">Também no studio</h3>
          <p className="mt-5 font-display text-2xl leading-relaxed text-ameixa md:text-3xl">
            {alsoInStudio.map((service, index) => (
              <Fragment key={service}>
                <span className="whitespace-nowrap">
                  {service}
                  {index < alsoInStudio.length - 1 && (
                    <span aria-hidden="true" className="ml-3 text-rose">
                      ·
                    </span>
                  )}
                </span>{" "}
              </Fragment>
            ))}
          </p>
          <a
            href={whatsappLink("Olá! Vim pelo site e quero saber sobre os outros serviços do studio.")}
            {...external}
            className="mt-6 inline-flex items-center gap-2 font-medium text-vinho underline decoration-rose underline-offset-[6px] [@media(hover:hover)]:hover:decoration-vinho"
          >
            Pergunte pelo WhatsApp
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="on-vinho bg-vinho py-20 text-creme md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] tracking-[-0.03em]">
          Agende sua
          <span className="block font-script tracking-normal text-rose-light">avaliação</span>
        </h2>
        <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-creme/85">
          Atendimento com hora marcada em {site.locality}. Conte o que você procura e a Renata indica o
          melhor protocolo para você.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={whatsappLink()}
            {...external}
            className="press inline-flex items-center justify-center gap-3 rounded-full bg-creme px-8 py-4 text-lg font-medium text-vinho [@media(hover:hover)]:hover:bg-blush"
          >
            <WhatsAppIcon className="size-5" />
            {site.phoneDisplay}
          </a>
          <a
            href={site.instagram}
            {...external}
            className="inline-flex items-center gap-2 underline decoration-rose-light/60 underline-offset-[6px] [@media(hover:hover)]:hover:decoration-rose-light"
          >
            {site.instagramHandle}
            <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="on-vinho bg-vinho-deep pt-10 pb-24 text-creme/75 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Monogram className="text-creme" />
        <p className="text-sm">
          © {site.copyrightYear} {site.name} · {site.locality} – {site.region}
        </p>
      </div>
    </footer>
  );
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: site.name,
    description: "Estética avançada: protocolos faciais e corporais personalizados.",
    url: site.url,
    telephone: `+${site.whatsapp}`,
    image: `${site.url}/og.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maricá",
      addressRegion: site.region,
      addressCountry: "BR",
    },
    sameAs: [site.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
