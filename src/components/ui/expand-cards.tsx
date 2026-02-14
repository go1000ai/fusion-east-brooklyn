"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface EventCard {
  src: string;
  alt: string;
  title: string;
  day: string;
}

interface ExpandOnHoverProps {
  cards: EventCard[];
  defaultExpanded?: number;
  className?: string;
}

const ExpandOnHover = ({ cards, defaultExpanded = 3, className }: ExpandOnHoverProps) => {
  const [expandedCard, setExpandedCard] = useState(defaultExpanded);

  const getCardWidth = (index: number) =>
    index === expandedCard ? "28rem" : "5rem";

  return (
    <div className={cn("w-full", className)}>
      {/* Desktop: horizontal expand-on-hover */}
      <div className="hidden md:flex relative w-full items-center justify-center gap-1.5">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out"
            style={{
              width: getCardWidth(idx),
              height: "26rem",
              minWidth: "3.5rem",
            }}
            onMouseEnter={() => setExpandedCard(idx)}
          >
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 28rem"
            />
            {/* Overlay with title — visible only when expanded */}
            <div
              className={cn(
                "absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-500",
                "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
                idx === expandedCard ? "opacity-100" : "opacity-0",
              )}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {card.day}
              </p>
              <h3 className="font-serif text-2xl font-bold text-warm-white">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical stacked cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer overflow-hidden rounded-2xl"
            style={{ height: expandedCard === idx ? "18rem" : "5rem" }}
            onClick={() => setExpandedCard(expandedCard === idx ? -1 : idx)}
          >
            <div
              className="absolute inset-0 transition-all duration-500 ease-in-out"
              style={{
                height: expandedCard === idx ? "18rem" : "5rem",
              }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-500"
                sizes="100vw"
              />
              <div
                className={cn(
                  "absolute inset-0 flex items-end p-4 transition-opacity duration-500",
                  "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
                )}
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                    {card.day}
                  </p>
                  <h3 className="font-serif text-xl font-bold text-warm-white">
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandOnHover;
