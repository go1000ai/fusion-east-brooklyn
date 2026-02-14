"use client";

import { motion } from "framer-motion";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";

// All 18 gallery images from Fusion East — fills the 3-column parallax grid (6 per column)
const galleryImages = [
  "/images/gallery/gallery-1.webp",
  "/images/gallery/gallery-2.webp",
  "/images/gallery/gallery-3.webp",
  "/images/gallery/gallery-4.webp",
  "/images/gallery/gallery-5.webp",
  "/images/gallery/gallery-6.webp",
  "/images/gallery/gallery-7.webp",
  "/images/gallery/gallery-8.webp",
  "/images/gallery/gallery-9.webp",
  "/images/gallery/gallery-10.webp",
  "/images/gallery/gallery-11.webp",
  "/images/gallery/gallery-12.webp",
  "/images/gallery/gallery-13.webp",
  "/images/gallery/gallery-14.webp",
  "/images/gallery/gallery-15.webp",
  "/images/gallery/gallery-16.webp",
  "/images/gallery/gallery-17.webp",
  "/images/gallery/gallery-18.webp",
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
