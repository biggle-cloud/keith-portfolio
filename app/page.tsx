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
  { num: "01", title: "Low tide, first light", src: null, alt: "" },
  { num: "02", title: "Field, late August", src: null, alt: "" },
  { num: "03", title: "Stair, Whitby", src: null, alt: "" },
  { num: "04", title: "Gate, near Richmond", src: null, alt: "" },
  {
    num: "05",
    title: "Peugeot Coffee Fest",
    src: "/images/edition-01.jpg",
    alt: "Still life of a vintage Peugeot coffee grinder, moka pot and scattered coffee beans",
    variant: "feature",
  },
  {
    num: "06",
    title: "Chili Passion",
    src: "/images/edition-02.jpg",
    alt: "Still life of three red chillies on dark slate",
    variant: "feature",
  },
  {
    num: "07",
    title: "Garlic, Cumberland Slate",
    src: "/images/edition-03.jpg",
    alt: "Still life of a garlic bulb on Cumberland slate",
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
  variant: "spread" | "a4";
};

const designPlates: DesignPlate[] = [
  {
    src: "/images/spread-01.jpg",
    alt: "GNAT UK brochure cover spread",
    client: "GNAT UK",
    tag: "brochure, cover spread",
    variant: "spread",
    
