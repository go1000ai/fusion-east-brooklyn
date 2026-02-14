"use client"

import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import Image from "next/image"

/**
 * SCROLL VELOCITY MARQUEE - For Fusion East "We Are" Section
 *
 * This component creates an infinite horizontal scrolling image strip where:
 * - Images scroll continuously in a direction (left or right)
 * - Scroll speed REACTS to page scroll velocity — faster scroll = faster images
 * - Direction can reverse based on scroll direction
 * - Multiple rows can scroll in opposite directions for visual drama
 *
 * USAGE FOR FUSION EAST:
 * - Replace demo images with the 5 images from the "We Are" section on current site
 * - Two rows: top row scrolls right (velocity: 3), bottom row scrolls left (velocity: -3)
 * - Can also add a text row: "FUSION EAST • CARIBBEAN • SOUL FOOD •" scrolling
 * - Place in the Restaurant section or as a divider between sections
 *
 * PROPS:
 * - children: React.ReactNode[] | string — images or text to scroll
 * - velocity: number — speed & direction (positive = right, negative = left)
 * - movable: boolean — if true, always moving; if false, only moves on scroll
 * - clamp: boolean — clamp the velocity factor
 *
 * DEPENDENCIES:
 * - framer-motion
 * - next/image
 * - @/lib/utils (cn helper from shadcn)
 */

// Demo with sample images — replace with Fusion East photos
const images = [
  {
    title: "Moonbeam",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&w=640",
  },
  {
    title: "Cursor",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&w=640",
  },
  {
    title: "Rogue",
    thumbnail: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&w=640",
  },
  {
    title: "Editorially",
    thumbnail: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=640",
  },
  {
    title: "Editrix AI",
    thumbnail: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=640",
  },
  {
    title: "Moonbeam 2",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=40&w=640",
  },
  {
    title: "Cursor 2",
    thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=40&w=640",
  },
  {
    title: "Rogue 2",
    thumbnail: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=40&w=640",
  },
  {
    title: "Editorially 2",
    thumbnail: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?q=80&w=640",
  },
  {
    title: "Editrix AI 2",
    thumbnail: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=640",
  },
]

const velocity = [3, -3]

function ScrollVelocityDemo() {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-5 py-10">
        {velocity.map((v, index) => (
          <ScrollVelocity key={index} velocity={v}>
            {images.map(({ title, thumbnail }) => (
              <div
                key={title}
                className="relative h-[6rem] w-[9rem] md:h-[8rem] md:w-[12rem] xl:h-[12rem] xl:w-[18rem]"
              >
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </ScrollVelocity>
        ))}
        <ScrollVelocity velocity={5}>You can also use a text!</ScrollVelocity>
      </div>
    </div>
  )
}

export { ScrollVelocityDemo }

/**
 * FUSION EAST IMPLEMENTATION (when we build):
 *
 * const fusionImages = [
 *   { title: "Interior", thumbnail: "/images/we-are-1.jpg" },
 *   { title: "Plating", thumbnail: "/images/we-are-2.jpg" },
 *   { title: "Bar",     thumbnail: "/images/we-are-3.jpg" },
 *   { title: "Dining",  thumbnail: "/images/we-are-4.jpg" },
 *   { title: "Ambiance",thumbnail: "/images/we-are-5.jpg" },
 *   // Duplicate for seamless loop
 *   { title: "Interior 2", thumbnail: "/images/we-are-1.jpg" },
 *   { title: "Plating 2",  thumbnail: "/images/we-are-2.jpg" },
 *   { title: "Bar 2",      thumbnail: "/images/we-are-3.jpg" },
 *   { title: "Dining 2",   thumbnail: "/images/we-are-4.jpg" },
 *   { title: "Ambiance 2", thumbnail: "/images/we-are-5.jpg" },
 * ]
 *
 * function FusionEastWeAre() {
 *   return (
 *     <section className="bg-[#0D0D0D] py-20">
 *       <h2 className="text-center text-[#F5F0EB] text-4xl font-bold mb-10">
 *         We Are <span className="text-[#D4A853]">Fusion East</span>
 *       </h2>
 *       <div className="flex flex-col space-y-5">
 *         <ScrollVelocity velocity={3}>
 *           {fusionImages.map(({ title, thumbnail }) => (
 *             <div key={title} className="relative h-[8rem] w-[12rem] xl:h-[12rem] xl:w-[18rem]">
 *               <Image src={thumbnail} alt={title} fill className="object-cover rounded-lg" />
 *             </div>
 *           ))}
 *         </ScrollVelocity>
 *         <ScrollVelocity velocity={-3}>
 *           {fusionImages.map(({ title, thumbnail }) => (
 *             <div key={title} className="relative h-[8rem] w-[12rem] xl:h-[12rem] xl:w-[18rem]">
 *               <Image src={thumbnail} alt={title} fill className="object-cover rounded-lg" />
 *             </div>
 *           ))}
 *         </ScrollVelocity>
 *         <ScrollVelocity velocity={2}>
 *           FUSION EAST • CARIBBEAN • SOUL FOOD • BROOKLYN • THE DIFFERENCE YOU CAN TASTE •
 *         </ScrollVelocity>
 *       </div>
 *     </section>
 *   )
 * }
 */
