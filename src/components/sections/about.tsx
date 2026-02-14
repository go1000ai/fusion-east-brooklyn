"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const badges = [
  { name: "MBE Certified", image: "/images/mbe-logo.png" },
  { name: "Veteran Owned", image: "/images/veteran-owned.png" },
  { name: "DOE Vendor", image: "/images/doe-vendor.png" },
  { name: "Minority Owned", image: "/images/mob.png" },
  { name: "As Seen on Good Day NY", image: "/images/good-day-ny.png" },
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

        {/* Split Layout: Story + Info */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
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
              <p>
                From our signature oxtail and jerk chicken to our weekend brunch and catering
                services, every plate tells a story of passion, heritage, and flavor.
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

          {/* Right — Image + Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Owner / Restaurant Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dark-border">
              <Image
                src="/images/fusion-dark-hero.jpg"
                alt="Fusion East Restaurant"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-medium uppercase tracking-wider text-gold">
                  Est. Brooklyn, NY
                </p>
                <p className="font-serif text-lg font-bold text-warm-white">
                  &ldquo;The Difference You Can Taste&rdquo;
                </p>
              </div>
            </div>

            {/* Certification Badges */}
            <div>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
