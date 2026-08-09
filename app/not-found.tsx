import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Keith Hodgson",
  description: "This page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="page">
      <header>
        <div className="wordmark">
          Keith Hodgson
          <br />
          <span className="sur">— photography &amp; design</span>
        </div>
        <nav className="rubric-font">
          <Link href="/#design">Design work</Link>
          <Link href="/#photography">Photography</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <div className="margin-col">
        <Link href="/" className="index-item">
          <span className="index-num">01</span>Introduction
        </Link>
        <Link href="/#design" className="index-item">
          <span className="index-num">02</span>Design work
        </Link>
        <Link href="/#photography" className="index-item">
          <span className="index-num">03</span>Photography
        </Link>
        <span className="index-item active">
          <span className="index-num">—</span>Not found
        </span>
      </div>

      <main>
        <section className="hero" id="not-found">
          <p className="eyebrow rubric-font">Not in the archive</p>
          <h1>This one didn&rsquo;t make the cut.</h1>
          <p className="sub">
            Whatever you were after has been misfiled, deleted, or never
            existed on this site to begin with. The homepage, at least,
            survived the edit.
          </p>
          <p style={{ marginTop: 32 }}>
            <Link href="/">← Back to the introduction</Link>
          </p>
        </section>

        <div className="plate-wrap" style={{ maxWidth: 280, marginTop: 54 }}>
          <div className="plate" />
          <div className="plate-cap">
            <span className="plate-num rubric-font">404</span>
            <span className="plate-title">unfiled</span>
          </div>
        </div>
      </main>

      <footer>
        <div />
        <div className="colophon">
          <div className="colophon-row">
            <span className="cf-label">Contact</span>
            If you must —{" "}
            <a href="mailto:hello@keithhodgson.co.uk">
              hello@keithhodgson.co.uk
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
