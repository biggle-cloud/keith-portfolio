"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Plate = {
  num: string;
  title: string;
  src: string | null;
  alt: string;
  variant?: "square" | "wide" | "feature";
};

const photoPlates: Plate[] = [
  {
    num: "01",
    title: "Peugeot Coffee Fest",
    src: "/images/edition-01.jpg",
    alt: "Still life of a vintage Peugeot coffee grinder, moka pot and scattered coffee beans",
    variant: "feature",
  },
  {
    num: "02",
    title: "Chili Passion",
    src: "/images/HotHotHot.jpg",
    alt: "Still life of three red chillies on dark slate",
    variant: "feature",
  },
  {
    num: "03",
    title: "Garlic, Cumberland Slate",
    src: "/images/Garli-on-the-slate.jpg",
    alt: "Still life of a garlic bulb on Cumberland slate",
    variant: "feature",
  },
  {
    num: "04",
    title: "Voitures, Motocultures",
    src: "/images/Voiture-Renault.jpg",
    alt: "Faded Renault garage signage on a weathered Provençal building",
    variant: "feature",
  },
  {
    num: "05",
    title: "L'Atelier Café, Chez Catherine",
    src: "/images/LAtelierCafe.jpg",
    alt: "Café tables and chairs beneath hand-painted signage, Provence",
    variant: "feature",
  },
  {
    num: "06",
    title: "Maison Joyeux",
    src: "/images/MaisonJoyeux-2.jpg",
    alt: "Shuttered shopfront of the former Maison Joyeux, Provence",
    variant: "feature",
  },
  {
    num: "07",
    title: "Café de la Place",
    src: "/images/CafedelaPlace.jpg",
    alt: "Potted palm against a weathered wall beneath the Café de la Place sign",
    variant: "feature",
  },
  {
    num: "08",
    title: "Germany not so sure",
    src: "/images/edition-08.jpg",
    alt: "Still life of garlic bulbs and a vintage radio on a 1941 French newspaper, La Dépêche, with wartime headlines",
    variant: "feature",
  },
];

const histamaticPlates: Plate[] = [
  {
    num: "01",
    title: "Something round, something old",
    src: "/images/histamatic-06.jpg",
    alt: "Dark round object in an old wooden trough, iPhone",
    variant: "square",
  },
  {
    num: "02",
    title: "Initials, gone to moss",
    src: "/images/histamatic-01.jpg",
    alt: "Carved initials, weathered wood, iPhone",
    variant: "square",
  },
  {
    num: "03",
    title: "Bluebells, far shore",
    src: "/images/histamatic-02.jpg",
    alt: "Bluebells by the water, iPhone",
    variant: "square",
  },
  {
    num: "04",
    title: "Kettle, permanently off the boil",
    src: "/images/histamatic-03.jpg",
    alt: "Old kettle, Calke Abbey, iPhone",
    variant: "square",
  },
  {
    num: "05",
    title: "Curlew, not going anywhere",
    src: "/images/histamatic-04.jpg",
    alt: "Curlew specimen behind glass, Calke Abbey, iPhone",
    variant: "square",
  },
  {
    num: "06",
    title: "Kingfisher, permanently perched",
    src: "/images/histamatic-05.jpg",
    alt: "Kingfisher specimen behind glass, Calke Abbey, iPhone",
    variant: "square",
  },
  {
    num: "07",
    title: "Bluebell wood, no shortcuts",
    src: "/images/histamatic-07.jpg",
    alt: "Path through a bluebell wood, iPhone",
    variant: "square",
  },
  {
    num: "08",
    title: "Sheepish Skutterskelfe Sunrise",
    src: "/images/histamatic-08.jpg",
    alt: "Silhouetted tree at sunrise with sheep, Skutterskelfe",
    variant: "square",
  },
  {
    num: "09",
    title: "Power to the People",
    src: "/images/histamatic-09.jpg",
    alt: "Electricity pole and wires against a blue sky, iPhone",
    variant: "square",
  },
];

type DesignPlate = {
  src: string | null;
  alt: string;
  client: string;
  tag: string;
 variant: "spread" | "a4" | "full";
};

const designPlates: DesignPlate[] = [
  {
    src: "/images/spread-01.jpg",
    alt: "GNAT UK brochure cover spread",
    client: "GNAT UK",
    tag: "brochure, cover spread",
    variant: "spread",
  },
  {
    src: "/images/spread-06.jpg",
    alt: "GNAT UK brochure spread, hire fleet",
    client: "GNAT UK",
    tag: "brochure, hire fleet spread",
    variant: "spread",
  },
  {
    src: "/images/cook-catalogue-01.jpg",
    alt: "Whitby in the Time of Cook, exhibition catalogue pages",
    client: "Captain Cook Memorial Museum",
    tag: "exhibition catalogue, selected pages",
    variant: "spread",
  },
  {
    src: "/images/cook-catalogue-02.jpg",
    alt: "Natural History section, Cook Museum catalogue",
    client: "Captain Cook Memorial Museum",
    tag: "exhibition catalogue, natural history spread",
    variant: "spread",
  },{
    src: "/images/seaton-carew-package.jpg",
    alt: "Brochure and presentation box for Seaton Carew Golf Club corporate memberships",
    client: "Seaton Carew Golf Club",
    tag: "brochure and presentation box, corporate membership pack",
    variant: "full",
  },
];

type LightboxState = {
  group: "photo" | "histamatic" | "design";
  index: number;
} | null;

export default function Home() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const groups = {
    photo: photoPlates,
    histamatic: histamaticPlates,
    design: designPlates,
  };

  const closeLightbox = () => setLightbox(null);

  const step = (dir: 1 | -1) => {
    if (!lightbox) return;
    const list = groups[lightbox.group];
    const clickable = list
      .map((p, i) => ({ p, i }))
      .filter(({ p }) => p.src);
    const pos = clickable.findIndex(({ i }) => i === lightbox.index);
    const nextPos =
      (pos + dir + clickable.length) % clickable.length;
    setLightbox({ group: lightbox.group, index: clickable[nextPos].i });
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  const current =
    lightbox &&
    (groups[lightbox.group][lightbox.index] as Plate | DesignPlate);
  const currentTitle =
    current && "title" in current ? current.title : current?.client;
  const currentTag = current && "tag" in current ? current.tag : null;

  return (
    <div className="page">
      <header>
        <div className="wordmark">
          Keith Hodgson
          <br />
          <span className="sur">— photography &amp; design</span>
        </div>
        <nav className="rubric-font">
          <a href="#design">Design work</a>
          <a href="#photography">Photography</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="margin-col">
        <a href="#introduction" className="index-item active">
          <span className="index-num">01</span>Introduction
        </a>
        <a href="#design" className="index-item">
          <span className="index-num">02</span>Design work
        </a>
        <a href="#photography" className="index-item">
          <span className="index-num">03</span>Photography
        </a>
        <a href="#contact" className="index-item">
          <span className="index-num">04</span>Colophon
        </a>
      </div>

      <main>
        <section className="hero" id="introduction">
          <p className="eyebrow rubric-font">An archive, not a shopfront</p>
          <h1>
            Trained properly at Central School of Art in the 1970s, and never
            quite recovered.
          </h1>
          <p className="sub">
            Forty-odd years of design done on other people&rsquo;s terms,
            and photography tailored to no one but myself — industry and
            museums on one side, landscapes and iPhone histamatics on the
            other. One paid the mortgage. The other didn&rsquo;t need to.
          </p>
        </section>

        <section className="section" id="design">
          <div className="section-head">
            <h2 className="section-title">Design work</h2>
            <span className="section-note rubric-font">
              brochures &amp; exhibition design, selected
            </span>
          </div>
          <p className="section-intro">
            The bit that paid for the cameras. Four decades of briefs,
            deadlines and other people&rsquo;s opinions — a surprising
            number of which turned out rather well. Still in use, largely
            as designed — a rarer outcome than you&rsquo;d think.
          </p>
          <div className="design-grid">
            {designPlates.map((p, i) => (
              <div
               className={
  p.variant === "full"
    ? "full-page"
    : p.variant === "spread"
    ? "spread-page"
    : "a4-page"
}
                key={i}
              >
                <div
                  className={`plate${p.src ? " filled clickable" : ""}`}
                  onClick={
                    p.src
                      ? () => setLightbox({ group: "design", index: i })
                      : undefined
                  }
                >
                  {p.src && (
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={2500}
                      height={1768}
                      sizes={
  p.variant === "full"
    ? "100vw"
    : p.variant === "spread"
    ? "(max-width: 640px) 100vw, 480px"
    : "(max-width: 640px) 50vw, 230px"
}
                      priority={i === 0}
                    />
                  )}
                </div>
                <div className="client-name">{p.client}</div>
                <div className="client-tag">{p.tag}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="photography">
          <div className="section-head">
            <h2 className="section-title">Photography</h2>
            <span className="section-note rubric-font">35mm plates</span>
          </div>
          <p className="section-intro">
            Miscellany, mostly — the stuff most people step over on the way
            to somewhere more photogenic. Indoors, old coffee grinders and
            chillies arranged on slate with more care than they deserve;
            outdoors, Provençal house-fronts left to flake, peel and subside
            with no such fussing at all. One is decay staged under studio
            lights, the other is decay that&rsquo;s been getting on with it
            for decades. Nothing here has been restored, and nothing here is
            likely to be.
          </p>
          <div className="plates">
            {photoPlates.map((p, i) => (
              <div
                className={`plate-wrap${p.variant ? " " + p.variant : ""}`}
                key={p.num}
              >
                <div
                  className={`plate${p.src ? " filled clickable" : ""}`}
                  onClick={
                    p.src
                      ? () => setLightbox({ group: "photo", index: i })
                      : undefined
                  }
                >
                  {p.src && (
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={1600}
                      height={2374}
                      sizes="(max-width: 640px) 100vw, 460px"
                    />
                  )}
                </div>
                <div className="plate-cap">
                  <span className="plate-num rubric-font">{p.num}</span>
                  <span className="plate-title">{p.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="section-head insta-head">
            <h2 className="section-title insta-title">Histamatics</h2>
            <span className="section-note rubric-font">
              from Instagram, unrepentantly square
            </span>
          </div>
          <p className="section-intro insta-intro">
            Phone photos, filtered, cropped square and posted without much
            shame. Less considered than the plates above, and no worse for
            it.
          </p>
          <div className="plates">
            {histamaticPlates.map((p, i) => (
              <div
                className={`plate-wrap${p.variant ? " " + p.variant : ""}`}
                key={p.num}
              >
                <div
                  className={`plate${p.src ? " filled clickable" : ""}`}
                  onClick={
                    p.src
                      ? () => setLightbox({ group: "histamatic", index: i })
                      : undefined
                  }
                >
                  {p.src && (
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={1200}
                      height={1200}
                      sizes="(max-width: 640px) 100vw, 460px"
                    />
                  )}
                </div>
                <div className="plate-cap">
                  <span className="plate-num rubric-font">{p.num}</span>
                  <span className="plate-title">{p.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div />
        <div className="colophon" id="contact">
          <div className="colophon-row">
            <span className="cf-label">Enquiries</span>
            This site replaces one with a shop attached, selling limited
            prints and cards — a sideline, never really the point. Nothing
            here is for sale. Most enquiries won&rsquo;t lead anywhere, but
            if something genuinely interesting turns up, it&rsquo;s worth
            writing.
          </div>
          <div className="colophon-row">
            <span className="cf-label">Contact</span>
            If you must —{" "}
            <a href="mailto:hello@keithhodgson.co.uk">
              hello@keithhodgson.co.uk
            </a>
          </div>
          <div className="colophon-row">
            <span className="cf-label">Set in</span>
            EB Garamond — still the best-looking typeface anyone has
            designed — and IBM Plex Sans Condensed for anything that wants
            to look official.
          </div>
        </div>
      </footer>

      {lightbox && current && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
            {current.src && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={current.src} alt={current.alt} />
            )}
            <div className="lightbox-caption rubric-font">
              {currentTitle}
              {currentTag && (
                <span className="lightbox-tag"> — {currentTag}</span>
              )}
            </div>
          </div>
          <button
            className="lightbox-arrow lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
