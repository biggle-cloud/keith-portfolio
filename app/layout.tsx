import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keith Hodgson — photography & design",
  description:
    "An archive, not a shopfront — photography and design work by Keith Hodgson.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
