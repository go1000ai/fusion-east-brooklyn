"use client";

import { ImageCarouselHero } from "@/components/ui/image-carousel-hero";

const foodImages = [
  {
    id: "1",
    src: "/images/gallery/food-plating.jpg",
    alt: "Fusion East signature plating",
    rotation: -15,
  },
  {
    id: "2",
    src: "/images/gallery/food-service.jpg",
    alt: "Fusion East food service",
    rotation: -8,
  },
  {
    id: "3",
    src: "/images/gallery/caribbean-breakfast.jpg",
    alt: "Caribbean breakfast spread",
    rotation: 5,
  },
  {
    id: "4",
    src: "/images/gallery/restaurant-interior.jpg",
    alt: "Fusion East restaurant interior",
    rotation: 12,
  },
  {
    id: "5",
    src: "/images/gallery/event-fundraising.jpg",
    alt: "Fusion East community event",
    rotation: -12,
  },
  {
    id: "6",
    src: "/images/gallery/food-truck-1.jpg",
    alt: "Fusion East food truck",
    rotation: 8,
  },
  {
    id: "7",
    src: "/images/gallery/food-truck-2.jpg",
    alt: "Fusion East food truck at event",
    rotation: -6,
  },
  {
    id: "8",
    src: "/images/gallery/food-truck-3.jpg",
    alt: "Fusion East food truck service",
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
