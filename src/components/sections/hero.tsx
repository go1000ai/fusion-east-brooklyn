"use client";

import { ImageCarouselHero } from "@/components/ui/image-carousel-hero";

// Best food shots from Fusion East for the rotating hero carousel
const foodImages = [
  {
    id: "1",
    src: "/images/gallery/gallery-1.webp",
    alt: "Fried fish with rice and peas",
    rotation: -15,
  },
  {
    id: "2",
    src: "/images/gallery/gallery-3.webp",
    alt: "Fusion East signature dish",
    rotation: -8,
  },
  {
    id: "3",
    src: "/images/gallery/gallery-5.webp",
    alt: "Jerk salmon with mashed potatoes",
    rotation: 5,
  },
  {
    id: "4",
    src: "/images/gallery/gallery-7.webp",
    alt: "Fusion East plating",
    rotation: 12,
  },
  {
    id: "5",
    src: "/images/gallery/gallery-10.webp",
    alt: "Coconut shrimp",
    rotation: -12,
  },
  {
    id: "6",
    src: "/images/gallery/gallery-12.webp",
    alt: "Fusion East entree",
    rotation: 8,
  },
  {
    id: "7",
    src: "/images/gallery/gallery-15.webp",
    alt: "Fusion East food spread",
    rotation: -6,
  },
  {
    id: "8",
    src: "/images/gallery/gallery-17.webp",
    alt: "Fusion East desserts and drinks",
    rotation: 10,
  },
];

const heroFeatures = [
  {
    title: "Caribbean & Soul Food",
    description: "A fusion of two rich culinary traditions under one roof in Brooklyn",
  },
  {
    title: "Live Entertainment",
    description: "Karaoke, live music, DJs — Tuesday through Sunday",
  },
  {
    title: "Catering & Events",
    description: "Full-service catering for 2–100+ guests across the Tri-state area",
  },
];

export function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById("restaurant")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero">
      <ImageCarouselHero
        title="Fusion East"
        subtitle="Caribbean & Soul Food"
        description="The Difference You Can Taste — modernist dining combining Caribbean spice and Southern soul in Brooklyn, NY"
        ctaText="Explore Our Menu"
        onCtaClick={scrollToMenu}
        images={foodImages}
        features={heroFeatures}
      />
    </section>
  );
}
