import type { Variants } from "framer-motion";

/**
 * Section-level fade + slide-up, triggered once when the section
 * scrolls into view. Used by every section wrapper.
 */
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Parent wrapper for a grid of cards. Has no visual effect of its own —
 * it only staggers the `show` transition of children using `cardVariants`.
 */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

/** Individual card entrance, meant to be triggered by a `staggerContainer` parent. */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Standard viewport config: fire once, slightly before full entry. */
export const viewportOnce = { once: true, margin: "-50px" } as const;

/** Card hover: lift + accent-teal glow. Spread onto whileHover. */
export const cardHover = {
  y: -6,
  boxShadow: "0 16px 32px -12px rgba(0,102,102,0.45)",
  borderColor: "rgb(0,102,102)",
  transition: { duration: 0.2, ease: "easeOut" },
};

/** Micro-press feedback for buttons and link badges. Spread onto whileTap. */
export const tapPress = { scale: 0.96 };
