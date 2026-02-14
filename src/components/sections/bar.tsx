"use client";

import { motion } from "framer-motion";
import { Clock, Wine, Music } from "lucide-react";

const barFeatures = [
  {
    icon: Clock,
    title: "Happy Hour",
    subtitle: "Mon – Fri, 4–6 PM",
    description: "Discounted cocktails, beer, and wine to kick off your evening.",
  },
  {
    icon: Wine,
    title: "Teachers Happy Hour",
    subtitle: "Tue – Fri, 2:30 PM+",
    description: "Special pricing for educators. Show your ID and unwind.",
  },
  {
    icon: Music,
    title: "Live Entertainment",
    subtitle: "Tue – Sun",
    description: "DJs, live R&B, Soul, Reggae — the vibe never stops.",
  },
];

const signatureDrinks = [
  { name: "Island Rum Punch", description: "House blend of Caribbean rums, tropical juices & spice" },
  { name: "Fusion Margarita", description: "Premium tequila with mango & habanero kick" },
  { name: "Brooklyn Mule", description: "Vodka, ginger beer, lime with a Caribbean twist" },
  { name: "Sorrel Sangria", description: "Red wine, hibiscus sorrel, citrus & cinnamon" },
  { name: "Hennessy Sour", description: "Cognac, fresh lemon, honey syrup & egg white" },
  { name: "Coconut Mojito", description: "White rum, coconut cream, mint & fresh lime" },
];

export function BarSection() {
  return (
    <section id="bar" className="relative overflow-hidden py-24 sm:py-32">
      {/* Background gradient for section transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card/30 to-dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-coral">
            The Bar
          </p>
          <h2 className="font-serif text-4xl font-bold text-warm-white sm:text-5xl md:text-6xl">
            Sip &amp; Savor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/60">
            Full bar with craft cocktails, premium spirits, and a vibe that keeps you coming back
          </p>
        </motion.div>

        {/* Bar Features — Glass Cards */}
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {barFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-coral/10">
                  <Icon className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-serif text-xl font-bold text-warm-white">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">{feature.subtitle}</p>
                <p className="mt-3 text-sm text-warm-white/50">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Signature Cocktails */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-8 text-center font-serif text-3xl font-bold text-warm-white">
            Signature Cocktails
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {signatureDrinks.map((drink, i) => (
              <motion.div
                key={drink.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-xl border border-dark-border/50 bg-dark-card/30 p-5 transition-all hover:border-coral/30"
              >
                <h4 className="font-serif text-lg font-bold text-warm-white group-hover:text-coral transition-colors">
                  {drink.name}
                </h4>
                <p className="mt-1 text-sm text-warm-white/40">{drink.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Neon-style Happy Hour callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-coral/20 bg-gradient-to-r from-coral/5 via-dark-card to-gold/5 p-8 text-center sm:p-12"
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-coral">
            Every Monday – Friday
          </p>
          <p className="mt-3 font-serif text-3xl font-bold text-warm-white sm:text-4xl">
            Happy Hour{" "}
            <span className="text-gold">4 – 6 PM</span>
          </p>
          <p className="mt-2 text-warm-white/50">
            Plus Teachers Happy Hour starting at 2:30 PM, Tue–Fri
          </p>
        </motion.div>
      </div>
    </section>
  );
}
