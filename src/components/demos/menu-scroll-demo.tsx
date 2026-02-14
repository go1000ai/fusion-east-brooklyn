"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

/**
 * MENU SCROLL ANIMATION - For Fusion East Menu Section
 *
 * This component creates a 3D scroll-triggered animation where:
 * - A title/header translates up as user scrolls
 * - A "card" container rotates on the X-axis (starts tilted at 20deg, flattens to 0)
 * - The card scales and has a dramatic box-shadow for depth
 * - Mobile responsive (smaller scale range on mobile)
 *
 * USAGE FOR FUSION EAST:
 * - titleComponent: "Our Menu" headline with animated text
 * - children: The actual menu content (tabbed categories, items grid, etc.)
 * - The menu "floats" into view with a 3D perspective as user scrolls
 *
 * DEPENDENCIES:
 * - framer-motion (npm install framer-motion)
 * - next/image (comes with Next.js)
 * - Tailwind CSS
 * - shadcn/ui project structure
 *
 * CUSTOMIZATION FOR FUSION EAST:
 * - Change bg-[#222222] to match our dark theme (#0D0D0D or #1A1A1A)
 * - Change border-[#6C6C6C] to gold accent (#D4A853) for premium feel
 * - Adjust rounded-[30px] if needed
 * - Replace demo image with actual menu content component
 */

export function MenuScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[1000px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=3840&q=75`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

/**
 * FUSION EAST IMPLEMENTATION (when we build):
 *
 * export function FusionEastMenuScroll() {
 *   return (
 *     <div className="flex flex-col overflow-hidden bg-[#0D0D0D]">
 *       <ContainerScroll
 *         titleComponent={
 *           <>
 *             <h1 className="text-4xl font-semibold text-[#F5F0EB]">
 *               Explore Our <br />
 *               <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-[#D4A853]">
 *                 Menu
 *               </span>
 *             </h1>
 *           </>
 *         }
 *       >
 *         <MenuContent />  // Tabbed menu with all categories
 *       </ContainerScroll>
 *     </div>
 *   );
 * }
 */
