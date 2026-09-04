"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { designPlates } from "../data";

export default function DesignPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const clickableIndexes = designPlates
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => p.src)
    .map(({ i }) => i);
  const closeLightbox = () => setLightbox(null);
  const step = (dir: 1 | -1) => {
    if (lightbox === null) return;
    const pos = clickableIndexes.indexOf(lightbox);
    const nextPos = (pos + dir + clickableIndexes.length) % clickableIndexes.length;
    setLightbox(clickableIndexes[nextPos]);
  };
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);
  const current = lightbox !== null ? designPlates[lightbox] : null;

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
        <span className="index-item active">
          <span className="index-num">02</span>Design work
        </span>
        <Link href="/photography" className="index-item">
          <span className="index-num">03</span>Photography
        </Link>
        <a href="#contact" className="index-item">
          <span className="index-num">04</span>Colophon
        </a>
      </div>
      <main>
        <section className="section" id="design" style={{ paddingTop: 54 }}>
          <div className="section-head">
            <h2 className="section-title">Design work</h2>
            <span className="section-note rubric-font">brochures &amp; exhibition design, selected</span>
          </div>
          <p className="section-intro">
            The bit that paid for the cameras. Four decades of briefs,
            deadlines and other people&rsquo;s opinions — a surprising
            number of which turned out rather well. Demolition contractors
            mostly, plus the odd museum exhibition needing to look busier
            than it was. Unlike the photographs, none of it was made to
            please me — and somehow that&rsquo;s the discipline that&rsquo;s
            lasted better. Still in use, largely as designed, which is a
            rarer outcome than you&rsquo;d think — and one I wouldn&rsquo;t
            mind repeating.
          </p>
          <div className="design-grid">
            {designPlates.map((p, i) => (
              <div
                className={
                  p.variant === "embed" ? "full-page embed-page"
                  : p.variant === "embed-wide" ? "full-page embed-page-wide"
                  : p.variant === "full" ? "full-page"
                  : p.variant === "wide" ? "full-page wide-page"
                  : p.variant === "spread" ? "spread-page"
                  : "a4-page"
                }
                key={i}
              >
                {p.variant === "embed" || p.variant === "embed-wide" ? (
                  <div className="plate filled embed-plate">
                    <iframe src={p.embedSrc} title={p.alt} loading="lazy" allow="fullscreen" allowFullScreen />
                  </div>
                ) : (
                  <div
                    className={`plate${p.src ? " filled clickable" : ""}`}
                    onClick={p.src ? () => setLightbox(i) : undefined}
                  >
                    {p.src && (
                      <Image
                        src={p.src}
                        alt={p.alt}
                        width={2500}
                        height={1768}
                        sizes={
                          p.variant === "full" || p.variant === "wide" ? "100vw"
                          : p.variant === "spread" ? "(max-width: 640px) 100vw, 480px"
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
      {lightbox !== null && current && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">‹</button>
          <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
            {current.src && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={current.src} alt={current.alt} />
            )}
            <div className="lightbox-caption rubric-font">
              {current.client}
              <span className="lightbox-tag"> — {current.tag}</span>
            </div>
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">›</button>
        </div>
      )}
    </div>
  );
}
