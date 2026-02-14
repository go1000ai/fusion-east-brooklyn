"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Music, Mic2, Disc3 } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Karaoke Mondays",
    day: "Every Monday",
    time: "4 PM – 11 PM",
    description: "Grab the mic and show off your vocals. Full sound system, drink specials, and good vibes all night.",
    icon: Mic2,
    accent: "coral",
  },
  {
    id: 2,
    title: "Live Music Tuesdays",
    day: "Every Tuesday",
    time: "7 PM",
    description: "Live R&B, Soul, and Reggae performances. Enjoy dinner and drinks with the best live sounds in Brooklyn.",
    icon: Music,
    accent: "teal",
  },
  {
    id: 3,
    title: "DJ Nights",
    day: "Tuesday – Sunday",
    time: "All Evening",
    description: "Our resident DJs bring the heat with the best in Hip-Hop, Dancehall, Soca, Afrobeats & more.",
    icon: Disc3,
    accent: "gold",
  },
  {
    id: 4,
    title: "Weekend Brunch",
    day: "Saturday & Sunday",
    time: "11 AM – 4 PM",
    description: "$45 prix fixe brunch with starters, entrees, and bottomless vibes. The best brunch in East New York.",
    icon: Calendar,
    accent: "coral",
  },
  {
    id: 5,
    title: "Happy Hour Specials",
    day: "Monday – Friday",
    time: "4 PM – 6 PM",
    description: "Kick back with discounted cocktails, beer, and wine. Teachers get early access starting at 2:30 PM.",
    icon: Music,
    accent: "teal",
  },
];

const accentColors: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  coral: { bg: "bg-coral/10", text: "text-coral", border: "border-coral/30", glow: "bg-coral/5" },
  teal: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/30", glow: "bg-teal/5" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30", glow: "bg-gold/5" },
};

export function EventsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % events.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const event = events[current];
  const colors = accentColors[event.accent];
  const Icon = event.icon;

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

        {/* Event Carousel */}
        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className={`rounded-3xl border ${colors.border} bg-dark-card p-8 sm:p-12`}
            >
              {/* Icon + Badge */}
              <div className="mb-6 flex items-center gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg}`}>
                  <Icon className={`h-7 w-7 ${colors.text}`} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${colors.text}`}>{event.day}</p>
                  <p className="text-xs text-warm-white/40">{event.time}</p>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-3xl font-bold text-warm-white sm:text-4xl">
                {event.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-warm-white/60">
                {event.description}
              </p>

              {/* Glow */}
              <div className={`pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full ${colors.glow} blur-3xl`} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-border text-warm-white/60 transition-colors hover:border-gold hover:text-gold"
              aria-label="Previous event"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {events.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-gold" : "w-2 bg-dark-border"
                  }`}
                  aria-label={`Go to event ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-border text-warm-white/60 transition-colors hover:border-gold hover:text-gold"
              aria-label="Next event"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
