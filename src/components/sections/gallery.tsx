"use client";

import { motion } from "framer-motion";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

// All food, restaurant, and event images from Fusion East — repeated to fill the 3-column parallax grid
const galleryImages = [
  "/images/gallery/food-plating.jpg",
  "/images/gallery/caribbean-breakfast.jpg",
  "/images/gallery/food-service.jpg",
  "/images/gallery/restaurant-interior.jpg",
  "/images/gallery/food-truck-1.jpg",
  "/images/gallery/event-fundraising.jpg",
  "/images/gallery/food-truck-2.jpg",
  "/images/gallery/food-truck-3.jpg",
  "/images/gallery/food-plating.jpg",
  "/images/gallery/food-service.jpg",
  "/images/gallery/caribbean-breakfast.jpg",
  "/images/gallery/restaurant-interior.jpg",
  "/images/gallery/food-truck-3.jpg",
  "/images/gallery/event-fundraising.jpg",
  "/images/gallery/food-truck-1.jpg",
  "/images/gallery/food-truck-2.jpg",
  "/images/gallery/food-plating.jpg",
  "/images/gallery/caribbean-breakfast.jpg",
  "/images/gallery/food-service.jpg",
  "/images/gallery/restaurant-interior.jpg",
  "/images/gallery/food-truck-1.jpg",
  "/images/gallery/event-fundraising.jpg",
  "/images/gallery/food-truck-2.jpg",
  "/images/gallery/food-truck-3.jpg",
];

export function GallerySection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Gallery
          </p>
          <h2 className="font-serif text-4xl font-bold text-warm-white sm:text-5xl md:text-6xl">
            A Taste of Fusion East
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/60">
            From our kitchen to your table — explore the flavors, the vibe, and the community
          </p>
        </motion.div>
      </div>

      {/* Parallax Gallery */}
      <ParallaxScrollSecond
        images={galleryImages}
        className="h-[50rem]"
      />
    </section>
  );
}
