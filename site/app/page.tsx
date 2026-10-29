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
import { delay, index, RevealLines } from "@/components/Reveal";
import { RevealObserver } from "@/components/RevealObserver";
import { StickyNav } from "@/components/StickyNav";
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
      <StickyNav items={nav} />
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
      <RevealObserver />
      <JsonLd />
    </>
  );
}

function Hero() {
  return (
    <header id="inicio" className="on-vinho relative overflow-hidden bg-vinho text-creme">
      <div
        className="hero-fade mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6"
        style={delay(60)}
      >
        <a href="#inicio" aria-label={`${site.name}, início`}>
          <Monogram />
        </a>
        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex gap-8 text-sm tracking-[0.14em] uppercase">
            {nav.map((item) => (
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
        </nav>
      </div>

      <div className="mx-auto grid max-w-6xl gap-14 px-4 pt-8 pb-20 sm:px-6 md:grid-cols-12 md:items-center md:gap-x-8 md:pt-12 md:pb-28">
        <div className="md:col-span-7">
          <h1 className="font-display text-[clamp(3.25rem,7.5vw,6rem)] leading-[0.95] tracking-[-0.03em]">
            <span className="line">
              <span className="line-inner hero-line" style={index(0)}>
                Realce sua
              </span>
            </span>
            <span className="hero-script mt-1 block font-script text-[1.08em] leading-[1.15] tracking-normal text-rose-light">
              melhor versão
            </span>
          </h1>
          <p
            className="hero-fade mt-7 max-w-[44ch] text-lg leading-relaxed text-creme/85"
            style={delay(650)}
          >
            Protocolos personalizados de estética facial e corporal, com tecnologia e o cuidado de
            quem está há mais de 20 anos na área da beleza.
          </p>

          <div id="hero-acoes" className="hero-fade mt-9 flex flex-col items-start gap-6" style={delay(780)}>
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
              <ul className="mt-3 flex max-w-[560px] flex-wrap gap-2">
                {interests.map((item) => (
                  <li key={item.label}>
                    <a
                      href={interestLink(item.topic)}
                      {...external}
                      className="press inline-block rounded-full border border-rose-light/45 px-4 py-2 text-sm [@media(hover:hover)]:hover:border-rose-light [@media(hover:hover)]:hover:bg-vinho-deep"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="hero-fade mt-10 flex items-center gap-2 text-sm tracking-[0.12em] text-creme/75 uppercase"
            style={delay(900)}
          >
            <MapPin aria-hidden="true" className="size-4 text-rose-light" strokeWidth={1.5} />
            {site.locality} · Com hora marcada
          </p>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <div className="mx-auto w-[88%] max-w-[380px] md:mr-4 md:w-full">
            <div className="relative">
            <div
              aria-hidden="true"
              className="hero-frame absolute inset-0 translate-x-3 translate-y-3 border border-rose-light/50 md:translate-x-4 md:translate-y-4"
            />
            <div className="hero-portrait relative aspect-[4/5] overflow-hidden bg-vinho-deep">
              <div className="parallax absolute inset-x-0 -inset-y-[5%]">
                <Image
                  src={renataRetrato}
                  alt="Renata Sansill sorrindo, de óculos e blazer claro"
                  fill
                  sizes="(min-width: 768px) 380px, 88vw"
                  placeholder="blur"
                  fetchPriority="high"
                  loading="eager"
                  className="hero-portrait-img object-cover object-top"
                />
              </div>
            </div>
            </div>
            <p
              className="hero-fade mt-10 text-right font-script text-3xl text-rose-light md:text-[2.1rem]"
              style={delay(1300)}
            >
              Sua beleza, minha missão!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function Protocols() {
  return (
    <section id="protocolos" className="bg-blush py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealLines
          lines={["Protocolos faciais,", "feitos à mão", "e com tecnologia"]}
          className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-vinho sm:text-5xl lg:text-6xl"
        />

        <div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-32">
          {protocols.map((protocol, i) => (
            <ProtocolRow key={protocol.id} protocol={protocol} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-28 border-t border-vinho/25 pt-12 md:mt-36">
          <RevealLines as="h3" lines={["E também"]} className="font-display text-3xl text-vinho" />
          <dl data-reveal="stagger" className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {moreProtocols.map((item, i) => (
              <div key={item.name} style={index(i)}>
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
  const isVideo = media.kind === "video";

  return (
    <article className="grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
      <div className={`md:col-span-5 ${flip ? "md:order-2 md:col-start-8" : ""}`}>
        <div
          data-reveal="image"
          className={`relative mx-auto w-full overflow-hidden ${
            isVideo ? "aspect-[9/16] max-w-[280px]" : "aspect-[3/4] max-w-[340px]"
          } ${flip ? "md:mr-0" : "md:ml-0"}`}
        >
          <div className="absolute inset-0">
            {media.kind === "video" ? (
              <VideoLoop src={media.src} poster={media.poster} alt={media.alt} />
            ) : (
              <Image
                src={media.src}
                alt={media.alt}
                fill
                sizes="(min-width: 768px) 340px, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>

      <div className={`md:col-span-6 ${flip ? "md:order-1 md:col-start-1" : "md:col-start-7"}`}>
        <RevealLines
          as="h3"
          lines={[protocol.name]}
          className="font-display text-4xl leading-tight tracking-[-0.01em] text-vinho md:text-5xl"
        />
        <p
          data-reveal="fade"
          style={delay(150)}
          className="mt-4 max-w-[40ch] text-xl leading-relaxed text-ameixa"
        >
          {protocol.lead}
        </p>
        <ul data-reveal="stagger" style={delay(250)} className="mt-8 border-t border-vinho/20">
          {protocol.indications.map((item, i) => (
            <li
              key={item}
              style={index(i)}
              className="border-b border-vinho/20 py-3 leading-relaxed text-ameixa-soft"
            >
              {item}
            </li>
          ))}
        </ul>
        <a
          href={interestLink(protocol.name)}
          {...external}
          data-reveal="fade"
          style={delay(450)}
          className="text-link group mt-8 inline-flex items-center gap-2 font-medium text-vinho underline decoration-rose underline-offset-[6px] [@media(hover:hover)]:hover:decoration-vinho"
        >
          Quero saber sobre {protocol.name.toLowerCase()}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </a>
      </div>
    </article>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-creme py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 md:grid-cols-12 md:items-center md:gap-8">
        <div className="md:col-span-5 lg:col-span-4">
          <div className="relative mx-auto w-[88%] max-w-[380px] md:ml-0 md:w-full">
            <div
              aria-hidden="true"
              data-reveal="frame"
              className="absolute inset-0 translate-x-4 translate-y-4"
            >
              <span className="absolute inset-0 border border-rose/60" />
            </div>
            <div data-reveal="image" className="relative aspect-[3/4] overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={renataMassagem}
                  alt="Renata, de jaleco branco, fazendo massagem facial em uma cliente"
                  fill
                  sizes="(min-width: 768px) 380px, 88vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6">
          <RevealLines
            lines={["Renata Sansill"]}
            className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-vinho sm:text-5xl lg:text-6xl"
          />
          <p
            data-reveal="fade"
            style={delay(150)}
            className="mt-6 max-w-[48ch] text-xl leading-relaxed text-ameixa"
          >
            Há mais de 20 anos na área da beleza. Terapeuta capilar, esteticista e graduanda em
            Biomedicina, Renata une técnica, tecnologia e escuta para montar protocolos que respeitam
            a pele e a rotina de cada cliente.
          </p>
          <blockquote
            data-reveal="fade"
            style={delay(250)}
            className="mt-8 max-w-[46ch] border-t border-rose/50 pt-6 text-lg leading-relaxed text-ameixa-soft"
          >
            “Sou apaixonada por transformar vidas e elevar a autoestima, sempre com cuidado, carinho e
            propósito.”
          </blockquote>
          <p data-reveal="script" style={delay(300)} className="mt-6 font-script text-4xl text-rose-ink">
            <span className="block">Sua beleza, minha missão!</span>
          </p>

          <RevealLines as="h3" lines={["Como funciona"]} className="mt-16 font-display text-2xl text-vinho" />
          <ol data-reveal="stagger" style={delay(150)} className="mt-6 grid gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.name} style={index(i)} className="border-t border-rose/60 pt-4">
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
    {
      src: ledVermelho,
      alt: "Cliente relaxando sob a luz vermelha da LED terapia",
      className: "col-span-2 aspect-[4/5] md:col-span-4 md:row-span-2 md:aspect-auto",
    },
    {
      src: mascaraDetalhe,
      alt: "Máscara facial sendo ajustada sob o vapor",
      className: "aspect-square md:col-span-4 md:aspect-auto",
    },
    {
      src: altaFrequenciaAzul,
      alt: "Alta frequência aplicada sob luz azul",
      className: "aspect-square md:col-span-4 md:aspect-auto",
    },
  ];

  return (
    <section aria-labelledby="studio-titulo" className="bg-creme pb-24 md:pb-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <RevealLines
          id="studio-titulo"
          lines={["Dentro do studio"]}
          className="font-display text-3xl text-vinho md:text-4xl"
        />
        <div className="mt-8 grid grid-cols-2 gap-3 md:h-[520px] md:grid-cols-8 md:grid-rows-2 md:gap-4">
          {gallery.map((photo, i) => (
            <div
              key={photo.alt}
              data-reveal="image"
              style={delay(i * 120)}
              className={`zoom-on-hover relative overflow-hidden ${photo.className}`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-rose/50 pt-10">
          <RevealLines as="h3" lines={["Também no studio"]} className="font-display text-2xl text-vinho" />
          <p
            data-reveal="fade"
            style={delay(150)}
            className="mt-5 font-display text-2xl leading-relaxed text-ameixa md:text-3xl"
          >
            {alsoInStudio.map((service, i) => (
              <Fragment key={service}>
                <span className="whitespace-nowrap">
                  {service}
                  {i < alsoInStudio.length - 1 && (
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
            className="text-link group mt-6 inline-flex items-center gap-2 font-medium text-vinho underline decoration-rose underline-offset-[6px] [@media(hover:hover)]:hover:decoration-vinho"
          >
            Pergunte pelo WhatsApp
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 ease-out [@media(hover:hover)]:group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="on-vinho bg-vinho py-24 text-creme md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1] tracking-[-0.03em]">
          <span data-reveal="lines" className="block">
            <span className="line">
              <span className="line-inner">Agende sua</span>
            </span>
          </span>
          <span
            data-reveal="script"
            style={delay(350)}
            className="block font-script leading-[1.2] tracking-normal text-rose-light"
          >
            <span className="block">avaliação</span>
          </span>
        </h2>
        <p
          data-reveal="fade"
          style={delay(300)}
          className="mt-6 max-w-[44ch] text-lg leading-relaxed text-creme/85"
        >
          Atendimento com hora marcada em {site.locality}. Conte o que você procura e a Renata indica o
          melhor protocolo para você.
        </p>

        <div
          data-reveal="fade"
          style={delay(450)}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
        >
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
            className="text-link inline-flex items-center gap-2 underline decoration-rose-light/50 underline-offset-[6px] [@media(hover:hover)]:hover:decoration-rose-light"
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
    <footer className="on-vinho bg-vinho-deep py-10 text-creme/75">
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
