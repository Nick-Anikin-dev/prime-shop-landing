"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { JSX, ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  /** vertical offset to animate from (px) */
  y?: number;
  /** horizontal offset to animate from (px) */
  x?: number;
  delay?: number;
  duration?: number;
  amount?: number;
  as?: "div" | "section" | "li" | "span";
}

/**
 * Reveal-on-scroll wrapper. Fades + slides children in the first time they
 * enter the viewport (whileInView, once). Respects prefers-reduced-motion.
 */
export function SectionReveal({
  children,
  className,
  y = 26,
  x = 0,
  delay = 0,
  duration = 0.7,
  amount = 0.3,
  as = "div",
}: SectionRevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Stagger container — animates its <StaggerItem> children in sequence
 * as the group scrolls into view.
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : stagger },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function StaggerItem({
  children,
  className,
  hover,
}: {
  children: ReactNode;
  className?: string;
  /** apply a subtle lift on hover (for cards) */
  hover?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={itemVariants}
      whileHover={
        hover
          ? { y: -6, boxShadow: "var(--sh-glow)", transition: { duration: 0.25 } }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
