"use client";

import { motion } from "framer-motion";
import ExpandOnHover from "@/components/ui/expand-cards";

const eventCards = [
  {
    src: "/images/events/mondays.webp",
    alt: "Karaoke Mondays at Fusion East",
    title: "Karaoke Mondays",
    day: "Every Monday",
  },
  {
    src: "/images/events/tuesday.webp",
    alt: "Live Music Tuesdays at Fusion East",
    title: "Live Music Tuesdays",
    day: "Every Tuesday",
  },
  {
    src: "/images/events/wednesday-live-comedy.webp",
    alt: "Wednesday Live Comedy at Fusion East",
    title: "Live Comedy Wednesdays",
    day: "Every Wednesday",
  },
  {
    src: "/images/events/thursday-karaoke.webp",
    alt: "Thursday Karaoke at Fusion East",
    title: "Karaoke Thursdays",
    day: "Every Thursday",
  },
  {
    src: "/images/events/senior-daze.webp",
    alt: "Senior Daze at Fusion East",
    title: "Senior Daze",
    day: "Special Event",
  },
  {
    src: "/images/events/surf-and-turf.webp",
    alt: "Surf and Turf Special at Fusion East",
    title: "Surf & Turf Special",
    day: "Featured Special",
  },
  {
    src: "/images/events/valentines-day.webp",
    alt: "Valentine's Day at Fusion East",
    title: "Valentine's Day",
    day: "Special Event",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-teal">
            What&apos;s Happening
          </p>
          <h2 className="font-serif text-4xl font-bold text-warm-white sm:text-5xl md:text-6xl">
            Events &amp; Entertainment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/60">
            Microphones, full sound system, DJ services, karaoke &amp; 5 large screens
          </p>
        </motion.div>

        {/* Expand-on-hover Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ExpandOnHover cards={eventCards} defaultExpanded={2} />
        </motion.div>
      </div>
    </section>
  );
}
