"use client";

import { motion, useInView, type Variants } from "framer-motion";
import type { RefObject, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  animationNum: number;
  customVariants?: Variants;
  timelineRef: RefObject<HTMLElement | null>;
}

export function TimelineContent({
  as: Component = "div",
  children,
  className,
  animationNum,
  customVariants,
  timelineRef,
}: TimelineContentProps) {
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const defaultVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <motion.div
      custom={animationNum}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(className)}
    >
      {Component === "div" ? (
        children
      ) : (
        <Component>{children}</Component>
      )}
    </motion.div>
  );
}
