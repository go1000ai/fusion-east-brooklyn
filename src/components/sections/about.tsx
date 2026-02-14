"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LayoutGrid } from "@/components/ui/layout-grid";

const badges = [
  { name: "MBE Certified", image: "/images/mbe-logo.png" },
  { name: "Veteran Owned", image: "/images/veteran-owned.png" },
  { name: "DOE Vendor", image: "/images/doe-vendor.png" },
  { name: "Minority Owned", image: "/images/mob.png" },
  { name: "As Seen on Good Day NY", image: "/images/good-day-ny.png" },
];

const BusinessmanContent = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white font-serif">
      Businessman of the Year
    </p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Andrew D. Walcott was named Neighborhood Businessman of the Year 2023,
      recognized for his dedication to the East New York community and building
      Fusion East into a neighborhood cornerstone.
    </p>
  </div>
);

const SenateProclamationContent = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white font-serif">
      Senate Proclamation
    </p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Honored by the New York State Senate for outstanding contributions to the
      Brooklyn community and local business excellence.
    </p>
  </div>
);

const CommunityLeadershipContent = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white font-serif">
      Community Leadership
    </p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Proudly serving and leading community events, parades, and partnerships
      across East New York and Brooklyn.
    </p>
  </div>
);

const FusionEastContent = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white font-serif">
      Fusion East
    </p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Where Caribbean meets Soul — a gathering place for the community to eat,
      drink, and celebrate together at 1179 Elton Street, Brooklyn.
    </p>
  </div>
);

const recognitionCards = [
  {
    id: 1,
    content: <BusinessmanContent />,
    className: "md:col-span-2",
    thumbnail: "/images/businessman-of-the-year.webp",
  },
  {
    id: 2,
    content: <SenateProclamationContent />,
    className: "col-span-1",
    thumbnail: "/images/senate-proclamation.webp",
  },
  {
    id: 3,
    content: <CommunityLeadershipContent />,
    className: "col-span-1",
    thumbnail: "/images/parade-military.webp",
  },
  {
    id: 4,
    content: <FusionEastContent />,
    className: "md:col-span-2",
    thumbnail: "/images/fusion-dark-hero.jpg",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Our Story
          </p>
          <h2 className="font-serif text-4xl font-bold text-warm-white sm:text-5xl md:text-6xl">
            About Fusion East
          </h2>
        </motion.div>

        {/* Story Text — Centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h3 className="font-serif text-2xl font-bold text-warm-white sm:text-3xl">
            Where Caribbean Meets Soul
          </h3>
          <div className="mt-6 space-y-4 text-warm-white/60 leading-relaxed">
            <p>
              Fusion East was born from a vision to unite two rich culinary traditions under one
              roof. Founded by <span className="font-semibold text-gold">Andrew D. Walcott</span>,
              named Neighborhood Business Man of the Year 2023, Fusion East brings the warmth of
              Caribbean kitchens and the comfort of Southern soul food to East New York, Brooklyn.
            </p>
            <p>
              More than a restaurant — we&apos;re a gathering place. With live music, karaoke nights,
              DJs spinning every week, and a full bar pouring craft cocktails, Fusion East is where
              the community comes together to eat, drink, and celebrate.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { number: "1179", label: "Elton Street, Brooklyn" },
              { number: "7 Days", label: "Open Weekly" },
              { number: "100+", label: "Catering Guests" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <p className="font-serif text-xl font-bold text-gold sm:text-2xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs text-warm-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition Image Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 h-[900px] sm:h-[700px] md:h-[600px]"
        >
          <LayoutGrid cards={recognitionCards} />
        </motion.div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-warm-white/40">
            Certifications &amp; Recognition
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.4,
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative h-16 w-16 sm:h-20 sm:w-20"
                title={badge.name}
              >
                <Image
                  src={badge.image}
                  alt={badge.name}
                  fill
                  className="object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
