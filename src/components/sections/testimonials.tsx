"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Shanice R.",
    text: "The oxtail is absolutely incredible — tender, flavorful, and the best I've had in Brooklyn. The vibe on a Saturday night with the DJ is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus T.",
    text: "Brought my whole family for Sunday brunch and it was a hit. The chicken & waffles are a must-try. Staff was warm and attentive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Denise P.",
    text: "We had Fusion East cater our office holiday party. The jerk chicken and curry goat were the talk of the office for weeks. Highly recommend their catering.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kevin L.",
    text: "Karaoke Mondays are my new favorite thing. Great drinks, great food, and a judgment-free zone to sing your heart out. Love this spot.",
    rating: 5,
  },
  {
    id: 5,
    name: "Tanya W.",
    text: "The fusion concept really works here. It's not just Caribbean or just soul food — it's something special. The curry shrimp pasta is out of this world.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            What People Say
          </p>
          <h2 className="font-serif text-4xl font-bold text-warm-white sm:text-5xl">
            Guest Reviews
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <Quote className="mx-auto mb-6 h-10 w-10 text-gold/30" />

              {/* Stars */}
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl leading-relaxed text-warm-white/80 sm:text-2xl">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              {/* Name */}
              <p className="mt-6 text-sm font-semibold text-gold">
                — {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-gold" : "w-2 bg-dark-border"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
