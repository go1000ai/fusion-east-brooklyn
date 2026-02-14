"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  onCtaClick?: () => void
  images: ImageCard[]
  backgroundImage?: string
  features?: Array<{
    title: string
    description: string
  }>
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  images,
  backgroundImage,
  features = [],
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotatingCards, setRotatingCards] = useState<number[]>([])

  // Continuous rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => prev.map((_, i) => (prev[i] + 0.5) % 360))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Initialize rotating cards
  useEffect(() => {
    setRotatingCards(images.map((_, i) => i * (360 / images.length)))
  }, [images.length])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <div className="relative w-full h-[85vh] sm:h-screen max-h-[900px] overflow-hidden">
      {/* Fixed Background Image — stays in place while page scrolls */}
      {backgroundImage && (
        <>
          <div className="fixed inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="Fusion East Restaurant"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Medium shade overlay */}
          <div className="fixed inset-0 bg-black/55 z-[1]" />
        </>
      )}

      {/* Gradient fade at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-[2]" />

      {/* Main content: left text + right carousel */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Text content (centered on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 text-center lg:text-left"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-gold">
              {subtitle}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-warm-white mb-5 leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-warm-white/70 mb-8 max-w-lg mx-auto lg:mx-0">
              {description}
            </p>

            {/* CTA Button */}
            <button
              onClick={onCtaClick}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-3.5 rounded-full",
                "bg-gold text-dark font-semibold text-base",
                "hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25 hover:scale-105 transition-all duration-300",
                "active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark",
                "group",
              )}
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Features — inline below text on desktop, stacked on mobile */}
            {features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-4 rounded-xl text-center sm:text-left",
                      "bg-dark/50 backdrop-blur-md border border-white/10",
                      "hover:border-gold/30 transition-all duration-300",
                      "group",
                    )}
                  >
                    <h3 className="text-sm font-semibold text-warm-white mb-1 group-hover:text-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-warm-white/50">{feature.description}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Right — Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] sm:h-[480px] lg:h-[520px] hidden sm:block"
            onMouseMove={handleMouseMove}
          >
            {/* Rotating Image Cards */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "800px" }}>
              {images.map((image, index) => {
                const angle = (rotatingCards[index] || 0) * (Math.PI / 180)
                const radius = 170
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                // 3D perspective effect based on mouse position
                const perspectiveX = (mousePosition.x - 0.5) * 20
                const perspectiveY = (mousePosition.y - 0.5) * 20

                return (
                  <div
                    key={image.id}
                    className="absolute w-28 h-36 sm:w-32 sm:h-40 lg:w-36 lg:h-44 transition-all duration-300"
                    style={{
                      transform: `
                        translate(${x}px, ${y}px)
                        rotateX(${perspectiveY}deg)
                        rotateY(${perspectiveX}deg)
                        rotateZ(${image.rotation}deg)
                      `,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className={cn(
                        "relative w-full h-full rounded-2xl overflow-hidden shadow-2xl",
                        "transition-all duration-300 hover:shadow-gold/20 hover:shadow-3xl hover:scale-110",
                        "cursor-pointer group",
                        "border border-white/10",
                      )}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        priority={index < 3}
                      />
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
