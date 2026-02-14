"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hours = [
  { day: "Monday", hours: "4:00 PM – 11:00 PM", note: "Karaoke Night" },
  { day: "Tuesday – Thursday", hours: "11:00 AM – 11:00 PM" },
  { day: "Friday – Saturday", hours: "11:00 AM – 12:00 AM" },
  { day: "Sunday", hours: "11:00 AM – 11:00 PM", note: "Brunch 11–4" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
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
            Find Us
          </p>
          <h2 className="font-serif text-4xl font-bold text-warm-white sm:text-5xl md:text-6xl">
            Visit Fusion East
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                <MapPin className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-warm-white">Address</p>
                <p className="mt-1 text-warm-white/60">
                  1179 Elton Street<br />
                  Brooklyn, New York 11239
                </p>
                <p className="mt-1 text-xs text-warm-white/40">
                  East New York / Gateway area, near JFK Airport
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                <Phone className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-warm-white">Phone</p>
                <a
                  href="tel:7189755065"
                  className="mt-1 block text-gold transition-colors hover:text-gold-light"
                >
                  (718) 975-5065
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                <Clock className="h-5 w-5 text-gold" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-warm-white">Hours of Operation</p>
                <div className="mt-2 space-y-2">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="text-warm-white/70">{h.day}</span>
                      <span className="text-right text-warm-white/50">
                        {h.hours}
                        {h.note && (
                          <span className="ml-2 text-xs text-gold/60">({h.note})</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 space-y-1 text-xs text-warm-white/40">
                  <p>Kitchen closes 30 minutes before closing</p>
                  <p>Bar last call 20 minutes before closing</p>
                </div>
              </div>
            </div>

            {/* Social + CTA */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
              <a
                href="tel:7189755065"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-light"
              >
                <Phone className="h-4 w-4" />
                Call to Reserve
              </a>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-border text-warm-white/50 transition-colors hover:border-gold hover:text-gold"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-border text-warm-white/50 transition-colors hover:border-gold hover:text-gold"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-dark-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.5!2d-73.8667!3d40.6436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25d3f3b28a6bd%3A0x8f3e3e3e3e3e3e3e!2s1179%20Elton%20St%2C%20Brooklyn%2C%20NY%2011239!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[50%] invert-[90%] hue-rotate-180"
              title="Fusion East location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
