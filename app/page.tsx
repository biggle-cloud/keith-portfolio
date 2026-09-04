"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Plate = {
  num: string;
  title: string;
  src: string | null;
  alt: string;
  variant?: "square" | "wide" | "feature";
  description?: string;
};

const photoPlates: Plate[] = [
  {
    num: "01",
    title: "Peugeot Coffee Fest",
    src: "/images/edition-01.jpg",
    alt: "Still life of a vintage Peugeot coffee grinder, moka pot and scattered coffee beans",
    variant: "feature",
    description:
      "A veteran French grinder posed here with a moka pot it had never actually worked alongside, the two introduced only by good lighting and a shared talent for looking older than they are. The beans were scattered with far more care than anyone drinking the coffee would ever notice.",
  },
  {
    num: "02",
    title: "Chili Passion",
    src: "/images/HotHotHot.jpg",
    alt: "Still life of three red chillies on dark slate",
    variant: "feature",
    description:
      "Three chillies laid out on slate with the sort of theatrical lighting normally reserved for oil paintings of dead pheasants. All the drama, none of the heat.",
  },
  {
    num: "03",
    title: "Men's Club, Sanary-sur-Mer",
    src: "/images/MensClub-SanarySurMer.jpg",
    alt: "Faded 'Men's Club' shop signage beside a weathered doorway in Sanary-sur-Mer",
    variant: "feature",
    description:
      "Whatever went on behind that door finished some time ago, leaving only the sign and a lock that still looks capable of keeping a secret. The paint gave up on the place decades before the institution did.",
  },
  {
    num: "04",
    title: "Voitures, Motocultures",
    src: "/images/Voiture-Renault.jpg",
    alt: "Faded Renault garage signage on a weathered Provençal building",
    variant: "feature",
    description:
      "A garage that once serviced Renaults, and presumably whatever \"motocultures\" are, now serviced only by the weather. The lettering has outlasted the business by a considerable margin — more than most branding manages.",
  },
  {
    num: "05",
    title: "L'Atelier Café, Chez Catherine",
    src: "/images/LAtelierCafe.jpg",
    alt: "Café tables and chairs beneath hand-painted signage, Provence",
    variant: "feature",
    description:
      "Two chairs and a table laid out with the quiet confidence of a place expecting company any minute now. The hand-lettered sign promises tea and gifts; the empty seats promise nothing but a very pleasant wait.",
  },
  {
    num: "06",
    title: "Maison Joyeux",
    src: "/images/MaisonJoyeux-2.jpg",
    alt: "Shuttered shopfront of the former Maison Joyeux, Provence",
    variant: "feature",
    description:
      "An umbrella shop that spent decades betting against the local weather, and finally lost. \"Joyeux\" remains, gamely, on the sign.",
  },
  {
    num: "07",
    title: "Café de la Place",
    src: "/images/CafedelaPlace.jpg",
    alt: "Potted palm against a weathered wall beneath the Café de la Place sign",
    variant: "feature",
    description:
      "\"Snack Bar,\" helpfully appended in English underneath the French, for anyone still confused by \"Café.\" Both languages have faded at exactly the same rate.",
  },
  {
    num: "08",
    title: "Axis of Allium",
    src: "/images/edition-08.jpg",
    alt: "Still life of garlic bulbs and a vintage radio on a 1941 French newspaper, La Dépêche, with wartime headlines",
    variant: "feature",
    description:
      "A 1941 newspaper mid-headline about the Luftwaffe, a radio that once carried the news live, and enough garlic to repel most known threats, ancient or otherwise. The garlic's still on the menu; everything else here retired decades ago.",
  },
  {
    num: "09",
    title: "Clove Actually",
    src: "/images/Clove-Actually.jpg",
    alt: "Still life of a garlic bulb split open on dark slate, revealing red-skinned cloves",
    variant: "feature",
    description:
      "A single bulb opened up to reveal the cloves inside, going about their business in formation. No further comment seemed necessary, though the pun apparently was.",
  },
];

const histamaticPlates: Plate[] = [
  {
    num: "01",
    title: "Something round, something old",
    src: "/images/histamatic-06.jpg",
    alt: "Dark round object in an old wooden trough, iPhone",
    variant: "square",
    description:
      "Found in the half-light of a building where everything appeared to have been put down temporarily about fifty years ago. The round object may once have served an essential purpose; the wooden arrangement certainly looks as though it remembers. Neither offered an explanation.",
  },
  {
    num: "02",
    title: "Initials, gone to moss",
    src: "/images/histamatic-01.jpg",
    alt: "Carved initials, weathered wood, iPhone",
    variant: "square",
    description:
      "Several generations have scratched their initials into the surface in the reasonable expectation of permanence. Time, weather and moss are now editing the collection, gradually turning minor vandalism into local history.",
  },
  {
    num: "03",
    title: "Bluebells, far shore",
    src: "/images/histamatic-02.jpg",
    alt: "Bluebells by the water, iPhone",
    variant: "square",
    description:
      "Bluebells providing the colour in the foreground while the far shore takes responsibility for scale, distance and general magnificence. A sensible division of labour, requiring very little intervention from the photographer.",
  },
  {
    num: "04",
    title: "Kettle, permanently off the boil",
    src: "/images/histamatic-03.jpg",
    alt: "Old kettle, Calke Abbey, iPhone",
    variant: "square",
    description:
      "Once responsible for keeping somebody supplied with tea, this kettle now sits permanently in a dark corner, polished by age and relieved of duty. Its surroundings have become considerably more colourful since retirement, although that may be the filter.",
  },
  {
    num: "05",
    title: "Curlew, not going anywhere",
    src: "/images/histamatic-04.jpg",
    alt: "Curlew specimen behind glass, Calke Abbey, iPhone",
    variant: "square",
    description:
      "A curlew photographed at unusually close quarters and with none of the customary objection. It held the pose perfectly and allowed ample time for composition. There are, on reflection, disadvantages to such complete cooperation.",
  },
  {
    num: "06",
    title: "Kingfisher, permanently perched",
    src: "/images/histamatic-05.jpg",
    alt: "Kingfisher specimen behind glass, Calke Abbey, iPhone",
    variant: "square",
    description:
      "All the colour and detail normally glimpsed as a small blue blur disappearing upstream. This one remained impeccably still. Only after waiting for it to fly did it become apparent that the patience was entirely one-sided.",
  },
  {
    num: "07",
    title: "Bluebell wood, no shortcuts",
    src: "/images/histamatic-07.jpg",
    alt: "Path through a bluebell wood, iPhone",
    variant: "square",
    description:
      "A wood doing what English woods do best for a few weeks each spring: carpeting the ground with bluebells and making every possible route look faintly irresponsible. The obvious path had wandered off elsewhere.",
  },
  {
    num: "08",
    title: "Sheepish Skutterskelfe Sunrise",
    src: "/images/histamatic-08.jpg",
    alt: "Silhouetted tree at sunrise with sheep, Skutterskelfe",
    variant: "square",
    description:
      "A mature Sycamore near Skutterskelfe, caught as the rising sun appeared beneath its lower branches and briefly arranged everything to the photographer's advantage. The sheep remained unimpressed; they see it every morning and know better than to offer encouragement.",
  },
  {
    num: "09",
    title: "Power to the People",
    src: "/images/histamatic-09.jpg",
    alt: "Electricity pole and wires against a blue sky, iPhone",
    variant: "square",
    description:
      "A pole-top arrangement of wires, insulators and determined optimism, set against a sky blue enough to make rural infrastructure look heroic. It has presumably delivered electricity for years without feeling any need to explain how.",
  },
  {
    num: "10",
    title: "Ils ne passeront pas",
    src: "/images/histamatic-10.jpg",
    alt: "Weathered iron lock plate and bolt latch on an old wooden French door",
    variant: "square",
    description:
      "A lock plate that has clearly seen off more than one siege, held to the door by rust, faith and the odd surviving screw. The keyhole still works, the bolt still slides, and between them they continue to deter absolutely nobody. Verdun this isn't, but the sentiment carries.",
  },
  {
    num: "11",
    title: "Full Stop, Antibes",
    src: "/images/histamatic-11.jpg",
    alt: "Peeling teal paint on an old door in Antibes, with a red drawing pin and a patch of bare wood",
    variant: "square",
    description:
      "Several decades of green have flaked their way down to bare wood in the corner, while a single red drawing pin stands in for punctuation, incidental hardware and colour theory all at once. Whoever put it there may not have been thinking about the complementary wheel, but the wall clearly approves.",
  },
  {
    num: "12",
    title: "Weighed in the Balance",
    src: "/images/histamatic-12.jpg",
    alt: "Vintage red grocer's scales with potatoes and carrots, on a wooden crate above a 1939 newspaper headlined 'Germany Not So Sure'",
    variant: "square",
    description:
      "A set of red grocer's scales holding court over the week's potatoes and carrots, with a 1939 newspaper tucked beneath assuring its readers that Germany's nerve was already cracking. Of the two instruments on show, only one turned out to be a reliable judge of weight.",
  },
];

type DesignPlate = {
  src: string | null;
  alt: string;
  client: string;
  tag: string;
  variant: "spread" | "a4" | "full" | "wide" | "embed" | "embed-wide";
  embedSrc?: string;
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
    alt: "GNAT UK brochure spread, Hydrodemolition",
    client: "GNAT UK",
    tag: "brochure, Hydrodemolition spread",
    variant: "spread",
  },
  {
    src: null,
    alt: "GNAT UK brochure, interactive page-flip edition, all 24 pages",
    client: "GNAT UK",
    tag: "For anyone the two spreads above left wanting more — the full 24 pages, brought down here rather more gently than usual.",
    variant: "embed",
    embedSrc: "/gnat-flipbook/index.html",
  },
  {
    src: "/images/gnat-uk-leeds-armouries-leaflets.jpg",
    alt: "Set of ten GNAT UK service leaflets for the Leeds Armouries exhibition, covering robotic demolition, hydrodemolition, concrete cutting, top-down demolition and abrasive cold-cutting",
    client: "GNAT UK",
    tag: "Folder set, Leeds Armouries Exhibition",
    variant: "full",
  },
  {
    src: "/images/GnatUK-LeedsArmouries.jpg",
    alt: "GNAT-UK 'Selective Demolition Solutions' exhibition stand graphic, Leeds Armouries",
    client: "GNAT UK",
    tag: "Exhibition stand, Leeds Armouries — a captive audience of medieval weaponry enthusiasts, mercifully undemolished",
    variant: "wide",
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
    tag: "Corporate Membership Pack — Advice from Beyond the Grave on Corporate Golf, Peacock’s Tongues and the Proper Treatment of an Impudent Caddy",
    variant: "full",
  },
  {
    src: null,
    alt: "Seaton Carew Golf Club membership invitation, interactive page-flip edition, all 14 spreads",
    client: "Seaton Carew Golf Club",
    tag: "The same pack, turned into something you can actually leaf through — testimonial from the late Dr McCuaig included.",
    variant: "embed-wide",
    embedSrc: "/seaton-carew-flipbook/index.html",
  },
  {
    src: "/images/Old-Casper-Client-now-elsewhere.jpg",
    alt: "Six brochure pages for Casper Shipping's Import/Export, Offshore, Tanker and Dry Cargo agency services, and Camair Freight Solutions",
    client: "Casper Shipping / Camair Freight Solutions",
    tag: "Kept as it stood at the time — Casper's moved on to other hands, but this one hasn't aged a day.",
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
  const currentDescription =
    current && "description" in current ? current.description : null;

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
            Trained properly at Central School of Art, London, in the 1970s, and
            never quite recovered.
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
                  p.variant === "embed"
                    ? "full-page embed-page"
                    : p.variant === "embed-wide"
                    ? "full-page embed-page-wide"
                    : p.variant === "full"
                    ? "full-page"
                    : p.variant === "wide"
                    ? "full-page wide-page"
                    : p.variant === "spread"
                    ? "spread-page"
                    : "a4-page"
                }
                key={i}
              >
                {p.variant === "embed" || p.variant === "embed-wide" ? (
                  <div className="plate filled embed-plate">
                    <iframe
                      src={p.embedSrc}
                      title={p.alt}
                      loading="lazy"
                      allow="fullscreen"
                      allowFullScreen
                    />
                  </div>
                ) : (
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
                          p.variant === "full" || p.variant === "wide"
                            ? "100vw"
                            : p.variant === "spread"
                            ? "(max-width: 640px) 100vw, 480px"
                            : "(max-width: 640px) 50vw, 230px"
                        }
                        priority={i === 0}
                      />
                    )}
                  </div>
                )}
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
            Miscellany, mostly. Indoors: coffee grinders, chillies and
            garlic, lit and arranged with more care than they&rsquo;ll ever
            get again. Outdoors: Provençal shopfronts left to flake and
            subside with no such fussing at all. Same subject, really —
            decay — just one version staged under studio lights and the
            other one decades into the job unsupervised. Nothing here has
            been restored, and nothing here is angling to be.
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
            This site replaces one with a shop attached. It sold limited
            prints and cards, reasonably well — a pleasant sideline to the
            work that actually mattered. I keep busy enough as it is.
            <br />
            <br />
            But if you&rsquo;ve got a problem good design can actually
            resolve, that&rsquo;s a different matter.
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
            {currentDescription && (
              <div className="lightbox-description">{currentDescription}</div>
            )}
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
