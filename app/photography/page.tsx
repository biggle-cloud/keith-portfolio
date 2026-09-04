"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { photoPlates, histamaticPlates } from "../data";

type LightboxState = { group: "photo" | "histamatic"; index: number; } | null;

export default function PhotographyPage() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);
  const groups = { photo: photoPlates, histamatic: histamaticPlates };
  const closeLightbox = () => setLightbox(null);
  const step = (dir: 1 | -1) => {
    if (!lightbox) return;
    const list = groups[lightbox.group];
    const clickable = list.map((p, i) => ({ p, i })).filter(({ p }) => p.src);
    const pos = clickable.findIndex(({ i }) => i === lightbox.index);
    const nextPos = (pos + dir + clickable.length) % clickable.length;
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
  const current = lightbox && groups[lightbox.group][lightbox.index];

  return (
    <div className="page">
      <header>
        <Link href="/" className="wordmark">
          Keith Hodgson
          <br />
          <span className="sur">— photography &amp; design</span>
        </Link>
        <nav className="rubric-font">
          <Link href="/">Home</Link>
          <Link href="/design">Design work</Link>
          <Link href="/photography">Photography</Link>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="margin-col">
        <Link href="/" className="index-item">
          <span className="index-num">01</span>Introduction
        </Link>
        <Link href="/design" className="index-item">
          <span className="index-num">02</span>Design work
        </Link>
        <span className="index-item active">
          <span className="index-num">03</span>Photography
        </span>
        <a href="#contact" className="index-item">
          <span className="index-num">04</span>Colophon
        </a>
      </div>
      <main>
        <section className="section" id="photography" style={{ paddingTop: 54 }}>
          <div className="section-head">
            <h2 className="section-title">Photography</h2>
            <span className="section-note rubric-font">35mm plates</span>
          </div>
          <p className="section-intro">
            Self-indulgent miscellany, mostly. Indoors: coffee grinders, chillies and
            garlic, lit and arranged with more care than they&rsquo;ll ever
            get again. Outdoors: Provençal shopfronts left to flake and
            subside with no such fussing at all. Same subject, really —
            decay — just one version staged under studio lights and the
            other one decades into the job unsupervised. Nothing here has
            been restored, nothing here is angling to be, and no apologies
            are forthcoming.
          </p>
          <div className="plates">
            {photoPlates.map((p, i) => (
              <div className={`plate-wrap${p.variant ? " " + p.variant : ""}`} key={p.num}>
                <div
                  className={`plate${p.src ? " filled clickable" : ""}`}
                  onClick={p.src ? () => setLightbox({ group: "photo", index: i }) : undefined}
                >
                  {p.src && (
                    <Image src={p.src} alt={p.alt} width={1600} height={2374} sizes="(max-width: 640px) 100vw, 460px" />
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
            <span className="section-note rubric-font">from Instagram, unrepentantly square</span>
          </div>
          <p className="section-intro insta-intro">
            Phone photos, filtered, cropped square and posted without much
            shame. Less considered than the plates above, and no worse for it.
          </p>
          <div className="plates">
            {histamaticPlates.map((p, i) => (
              <div className={`plate-wrap${p.variant ? " " + p.variant : ""}`} key={p.num}>
                <div
                  className={`plate${p.src ? " filled clickable" : ""}`}
                  onClick={p.src ? () => setLightbox({ group: "histamatic", index: i }) : undefined}
                >
                  {p.src && (
                    <Image src={p.src} alt={p.alt} width={1200} height={1200} sizes="(max-width: 640px) 100vw, 460px" />
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
            <br /><br />
            But if you&rsquo;ve got a problem good design can actually
            resolve, that&rsquo;s a different matter.
          </div>
          <div className="colophon-row">
            <span className="cf-label">Contact</span>
            If you must —{" "}
            <a href="mailto:hello@keithhodgson.co.uk">hello@keithhodgson.co.uk</a>
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
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">‹</button>
          <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
            {current.src && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={current.src} alt={current.alt} />
            )}
            <div className="lightbox-caption rubric-font">{current.title}</div>
            {current.description && (
              <div className="lightbox-description">{current.description}</div>
            )}
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">›</button>
        </div>
      )}
    </div>
  );
}
