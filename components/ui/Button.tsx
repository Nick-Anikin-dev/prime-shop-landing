"use client";

import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "ghost" | "soft" | "light";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  ghost: "btn-ghost",
  soft: "btn-soft",
  light: "btn-light",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: "md" | "lg";
  block?: boolean;
  className?: string;
}

/**
 * Button with framer-motion micro-interactions (whileHover / whileTap).
 * Renders as a Next <Link> when `href` is provided, otherwise a <button>.
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  block = false,
  className = "",
}: ButtonProps) {
  const cls = [
    "btn",
    variantClass[variant],
    size === "lg" ? "btn-lg" : "",
    block ? "btn-block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 24 },
  };

  if (href) {
    return (
      <motion.div style={{ display: block ? "block" : "inline-block" }} {...motionProps}>
        <Link href={href} className={cls}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button className={cls} {...motionProps}>
      {children}
    </motion.button>
  );
}

export type { ButtonProps };
export type ButtonNativeProps = ComponentProps<"button">;
