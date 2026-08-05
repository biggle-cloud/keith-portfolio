import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.keithhodgson.co.uk"),
  title: "Keith Hodgson — photography & design",
  description:
    "An archive, not a shopfront — photography and design work by Keith Hodgson.",
  openGraph: {
    title: "Keith Hodgson — photography & design",
    description:
      "An archive, not a shopfront — photography and design work by Keith Hodgson.",
    url: "https://www.keithhodgson.co.uk",
    siteName: "Keith Hodgson",
    images: [
      {
        url: "/images/spread-01.jpg",
        width: 2500,
        height: 1768,
        alt: "GNAT UK brochure cover spread, by Keith Hodgson",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keith Hodgson — photography & design",
    description:
      "An archive, not a shopfront — photography and design work by Keith Hodgson.",
    images: ["/images/spread-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Sans+Condensed:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
