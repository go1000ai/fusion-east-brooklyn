"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuCategories = [
  { id: "appetizers", label: "Appetizers" },
  { id: "entrees", label: "Entrees" },
  { id: "pasta", label: "Fusion Pasta" },
  { id: "roti", label: "Roti" },
  { id: "sides", label: "Sides" },
  { id: "desserts", label: "Desserts" },
];

const menuItems: Record<string, { name: string; price: string; description?: string }[]> = {
  appetizers: [
    { name: "Chicken Wings", price: "$11", description: "BBQ, Jerk, or Fried" },
    { name: "Codfish Fritters", price: "$9", description: "Crispy golden fritters" },
    { name: "Salmon Cakes", price: "$14", description: "House-made with herbs" },
    { name: "Shrimp", price: "$12", description: "Coconut, Grilled, or Jerk" },
    { name: "Calamari", price: "$12", description: "Lightly battered & fried" },
    { name: "BBQ Ribs", price: "$15", description: "Slow-cooked & glazed" },
    { name: "Fusion Sampler", price: "$28", description: "A taste of everything" },
    { name: "Plantain Bites", price: "$14", description: "Sweet & savory" },
    { name: "Soup of the Day", price: "$7", description: "Chef's daily selection" },
    { name: "House Salad", price: "$10", description: "Fresh seasonal greens" },
  ],
  entrees: [
    { name: "Oxtail", price: "$28", description: "Slow-braised, fall-off-the-bone" },
    { name: "Curry Goat", price: "$22", description: "Authentic Caribbean curry" },
    { name: "Jerk Chicken", price: "$23", description: "Classic jerk seasoning, grilled" },
    { name: "Southern Fried Chicken", price: "$20", description: "Crispy, golden perfection" },
    { name: "Boneless Curry Chicken", price: "$20", description: "Tender curry boneless chicken" },
    { name: "Brown Stew Chicken", price: "$20", description: "Rich & savory stew" },
    { name: "NY Strip Steak", price: "$30", description: "12oz, seasoned & grilled" },
    { name: "Fish & Chips", price: "$18", description: "Beer-battered with fries" },
    { name: "Fusion Snapper", price: "$27", description: "Whole snapper, Caribbean-style" },
    { name: "Jerk Salmon", price: "$27", description: "Jerk-glazed Atlantic salmon" },
    { name: "Curry Shrimp", price: "$25", description: "Jumbo shrimp in curry sauce" },
    { name: "Chicken & Waffles", price: "$20", description: "Crispy chicken, Belgian waffle" },
    { name: "Fusion Burger", price: "$15", description: "House burger with island slaw" },
  ],
  pasta: [
    { name: "Plain Pasta", price: "$12", description: "Choice of sauce" },
    { name: "Vegetable Pasta", price: "$17", description: "Seasonal vegetables" },
    { name: "Chicken Pasta", price: "$17", description: "Grilled chicken tossed in" },
    { name: "Shrimp Pasta", price: "$26", description: "Jumbo shrimp, garlic butter" },
    { name: "Oxtail Pasta", price: "$24", description: "Braised oxtail ragu" },
    { name: "Salmon Pasta", price: "$27", description: "Pan-seared salmon" },
  ],
  roti: [
    { name: "Curry Boneless Chicken Roti", price: "$17", description: "Wrapped in soft roti skin" },
    { name: "Curry Shrimp Roti", price: "$22", description: "Spiced curry shrimp" },
    { name: "Curry Goat Stew Roti", price: "$18", description: "Hearty goat curry" },
    { name: "Vegetable Roti", price: "$16", description: "Fresh vegetable medley" },
  ],
  sides: [
    { name: "Candied Yams", price: "$7" },
    { name: "White Rice", price: "$7" },
    { name: "Rice & Peas", price: "$7" },
    { name: "Garlic Mashed Potatoes", price: "$7" },
    { name: "Sweet Potato Fries", price: "$7" },
    { name: "French Fries", price: "$7" },
    { name: "Sweet Plantains", price: "$7" },
    { name: "Corn Bread", price: "$7" },
    { name: "Mac & Cheese", price: "$10" },
    { name: "Steamed Vegetables", price: "$7" },
  ],
  desserts: [
    { name: "Red Velvet Cake", price: "$7" },
    { name: "Carrot Cake", price: "$7" },
    { name: "Cheese Cake", price: "$7" },
    { name: "Rum Raisin Ice Cream", price: "$7" },
    { name: "Grape Nut Ice Cream", price: "$7" },
    { name: "Vanilla Ice Cream", price: "$7" },
  ],
};

const featuredDishes = [
  {
    name: "Oxtail",
    price: "$28",
    description: "Slow-braised, fall-off-the-bone tender. Served with rice & peas.",
    tag: "Signature",
  },
  {
    name: "Jerk Chicken",
    price: "$23",
    description: "Authentic jerk seasoning, grilled to perfection over charcoal.",
    tag: "Fan Favorite",
  },
  {
    name: "Fusion Snapper",
    price: "$27",
    description: "Whole red snapper, Caribbean spiced & fried crispy.",
    tag: "Chef's Pick",
  },
  {
    name: "Curry Goat",
    price: "$22",
    description: "Tender goat simmered in aromatic Caribbean curry spices.",
    tag: "Traditional",
  },
];

export function RestaurantSection() {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  return (
    <section id="restaurant" className="relative py-24 sm:py-32">
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
            The Restaurant
          </p>
          <h2 className="font-serif text-4xl font-bold text-warm-white sm:text-5xl md:text-6xl">
            A Fusion of Flavors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-white/60">
            Two distinct but complementary culinary delights — Caribbean spice meets Southern soul
          </p>
        </motion.div>

        {/* Featured Dishes */}
        <div className="mb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-6 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
            >
              {/* Tag */}
              <span className="mb-4 inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                {dish.tag}
              </span>
              <h3 className="font-serif text-2xl font-bold text-warm-white">
                {dish.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-white/50">
                {dish.description}
              </p>
              <p className="mt-4 text-xl font-bold text-gold">{dish.price}</p>
              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gold/5 blur-3xl transition-all group-hover:bg-gold/10" />
            </motion.div>
          ))}
        </div>

        {/* Full Menu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-8 text-center font-serif text-3xl font-bold text-warm-white">
            Full Dinner Menu
          </h3>

          {/* Category Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold text-dark"
                    : "border border-dark-border text-warm-white/60 hover:border-gold/30 hover:text-warm-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {menuItems[activeCategory]?.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-baseline justify-between rounded-xl border border-dark-border/50 bg-dark-card/50 px-5 py-4 transition-colors hover:border-gold/20"
                >
                  <div className="mr-4">
                    <span className="font-medium text-warm-white">{item.name}</span>
                    {item.description && (
                      <p className="mt-0.5 text-xs text-warm-white/40">{item.description}</p>
                    )}
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-gold">
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
