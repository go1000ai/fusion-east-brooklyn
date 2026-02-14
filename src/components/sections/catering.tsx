"use client";

import { motion } from "framer-motion";
import { Truck, UtensilsCrossed, Users, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const cateringImages = [
  { src: "/images/gallery/food-plating.jpg", alt: "Fusion East catering plated dish" },
  { src: "/images/gallery/food-service.jpg", alt: "Fusion East catering food service" },
  { src: "/images/gallery/event-fundraising.jpg", alt: "Fusion East catering at a fundraising event" },
  { src: "/images/gallery/caribbean-breakfast.jpg", alt: "Fusion East catering breakfast spread" },
];

const foodTruckImages = [
  { src: "/images/gallery/food-truck-1.jpg", alt: "Fusion East food truck serving at an event" },
  { src: "/images/gallery/food-truck-2.jpg", alt: "Fusion East food truck setup" },
  { src: "/images/gallery/food-truck-3.jpg", alt: "Fusion East food truck catering" },
  { src: "/images/gallery/food-truck-events.webp", alt: "Food truck available for events" },
];

export function CateringSection() {
  return (
    <section id="catering" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card/20 to-dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Beyond the Restaurant
          </p>
          <h2 className="font-serif text-4xl font-bold text-warm-white sm:text-5xl md:text-6xl">
            Catering &amp; Food Truck
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/60">
            Bring the Fusion East experience to your event — from intimate gatherings to 100+ guests
          </p>
        </motion.div>

        {/* Two Cards Side by Side */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Catering Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-dark-border bg-dark-card flex flex-col"
          >
            {/* Catering Image Gallery */}
            <div className="grid grid-cols-2 gap-1">
              {cateringImages.map((img, idx) => (
                <div key={idx} className="relative h-40 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>

            <div className="p-6 sm:p-10 flex flex-col flex-1 items-center text-center md:items-start md:text-left">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
              <UtensilsCrossed className="h-7 w-7 text-gold" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-warm-white sm:text-3xl">
              Catering Services
            </h3>
            <p className="mt-4 text-warm-white/60 leading-relaxed">
              Full-service catering for 2–100+ guests across the Tri-state area. Sit-down dinners,
              buffet-style, charcuterie boards, and custom menus available.
            </p>

            {/* Coverage Area */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              {["Brooklyn", "Manhattan", "Queens", "Bronx", "Staten Is.", "NJ", "CT", "Westchester", "Long Island"].map(
                (area) => (
                  <span
                    key={area}
                    className="rounded-full bg-dark-lighter px-3 py-1.5 text-center text-xs text-warm-white/50"
                  >
                    {area}
                  </span>
                )
              )}
            </div>

            {/* Popular Items */}
            <div className="mt-6 space-y-2">
              <p className="text-xs font-medium uppercase tracking-wider text-gold/70">
                Popular Catering Items
              </p>
              {[
                { name: "Jerk Chicken", half: "$80", full: "$160" },
                { name: "Oxtail", half: "$160", full: "$320" },
                { name: "Curry Goat", half: "$140", full: "$280" },
                { name: "Mac & Cheese", half: "$70", full: "$140" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-warm-white/70">{item.name}</span>
                  <span className="text-warm-white/40">
                    Half {item.half} / Full {item.full}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-light"
            >
              <Users className="h-4 w-4" />
              Plan Your Event
            </Link>
            </div>
            </div>

            <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gold/5 blur-3xl transition-all group-hover:bg-gold/10" />
          </motion.div>

          {/* Food Truck Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative overflow-hidden rounded-3xl border border-dark-border bg-dark-card flex flex-col"
          >
            {/* Food Truck Image Gallery */}
            <div className="grid grid-cols-2 gap-1">
              {foodTruckImages.map((img, idx) => (
                <div key={idx} className="relative h-40 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>

            {/* Content below images */}
            <div className="p-6 sm:p-10 flex flex-col flex-1 items-center text-center md:items-start md:text-left">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-coral/10">
                <Truck className="h-7 w-7 text-coral" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-warm-white sm:text-3xl">
                Food Truck
              </h3>
              <p className="mt-4 text-warm-white/60 leading-relaxed">
                Our mobile kitchen brings Fusion East flavors to your block party, corporate event,
                festival, or fundraiser. Full menu available on wheels.
              </p>

              {/* Services */}
              <div className="mt-6 space-y-3">
                {[
                  { icon: MapPin, text: "Available across the NYC metro area" },
                  { icon: Users, text: "Corporate events & private parties" },
                  { icon: UtensilsCrossed, text: "Fundraising partnerships welcome" },
                ].map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <ItemIcon className="h-4 w-4 shrink-0 text-coral/60" />
                      <span className="text-sm text-warm-white/60">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Fundraising callout */}
              <div className="mt-8 rounded-xl border border-coral/20 bg-coral/5 p-4">
                <p className="text-sm font-semibold text-coral">Fundraising Partners</p>
                <p className="mt-1 text-xs text-warm-white/50">
                  We partner with schools, churches, and community organizations for fundraising events.
                  Let&apos;s work together.
                </p>
              </div>

              <div className="mt-auto pt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-coral bg-transparent px-6 py-3 text-sm font-semibold text-coral transition-all hover:bg-coral hover:text-warm-white"
              >
                <Truck className="h-4 w-4" />
                Book the Truck
              </Link>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-coral/5 blur-3xl transition-all group-hover:bg-coral/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
