import Image from "next/image";
import Link from "next/link";
import { photoPlates, designPlates } from "./data";

export default function Home() {
  const designHighlights = designPlates.filter((p) => p.src).slice(0, 4);
  const photoHighlights = photoPlates.filter((p) => p.src).slice(0, 3);

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
        <span className="index-item active">
          <span className="index-num">01</span>Introduction
        </span>
        <Link href="/design" className="index-item">
          <span className="index-num">02</span>Design work
        </Link>
        <Link href="/photography" className="index-item">
          <span className="index-num">03</span>Photography
        </Link>
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
            <span className="section-note rubric-font">brochures &amp; exhibition design, selected</span>
          </div>
          <p className="section-intro">
            The bit that paid for the cameras. Four decades of briefs,
            deadlines and other people&rsquo;s opinions — a surprising
            number of which turned out rather well. Still in use, largely
            as designed — a rarer outcome than you&rsquo;d think.
          </p>
          <div className="design-grid">
            {designHighlights.map((p, i) => (
              <Link
                href="/design"
                className={
                  p.variant === "full" ? "full-page"
                  : p.variant === "wide" ? "full-page wide-page"
                  : p.variant === "spread" ? "spread-page"
                  : "a4-page"
                }
                key={i}
              >
                <div className="plate filled">
                  <Image
                    src={p.src as string}
                    alt={p.alt}
                    width={2500}
                    height={1768}
                    sizes={
                      p.variant === "full" || p.variant === "wide" ? "100vw"
                      : p.variant === "spread" ? "(max-width: 640px) 100vw, 480px"
                      : "(max-width: 640px) 50vw, 230px"
                    }
                  />
                </div>
                <div className="client-name">{p.client}</div>
                <div className="client-tag">{p.tag}</div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link href="/design">View more design work →</Link>
          </p>
        </section>
        <section className="section" id="photography">
          <div className="section-head">
            <h2 className="section-title">Photography</h2>
            <span className="section-note rubric-font">35mm plates &amp; Histamatics</span>
          </div>
          <p className="section-intro">
            Self-indulgent miscellany, mostly. Coffee grinders, chillies and garlic lit
            with more care than they&rsquo;ll ever get again; Provençal
            shopfronts left to flake with no such fussing at all; and phone
            snapshots posted without much shame either way.
          </p>
          <div className="plates">
            {photoHighlights.map((p) => (
              <Link href="/photography" className={`plate-wrap${p.variant ? " " + p.variant : ""}`} key={p.num}>
                <div className="plate filled">
                  <Image src={p.src as string} alt={p.alt} width={1600} height={2374} sizes="(max-width: 640px) 100vw, 460px" />
                </div>
                <div className="plate-cap">
                  <span className="plate-num rubric-font">{p.num}</span>
                  <span className="plate-title">{p.title}</span>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link href="/photography">View the full archive →</Link>
          </p>
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
    </div>
  );
}
