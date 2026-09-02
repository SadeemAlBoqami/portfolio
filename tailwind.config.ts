import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        "background-alt": "rgb(var(--color-background-alt) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        heading: "rgb(var(--color-heading) / <alpha-value>)",
        body: "rgb(var(--color-body) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        cyan: "rgb(var(--color-cyan) / <alpha-value>)",
        emerald: "rgb(var(--color-emerald) / <alpha-value>)",
        violet: "rgb(var(--color-violet) / <alpha-value>)",
        accent: "rgb(var(--color-cyan) / <alpha-value>)",
        "accent-foreground": "rgb(var(--color-accent-foreground) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "84rem",
        prose: "42rem",
      },
      borderRadius: {
        DEFAULT: "2px",
        card: "2px",
      },
      transitionDuration: {
        250: "250ms",
      },
      boxShadow: {
        "glow-cyan": "0 0 24px rgba(0,240,255,0.25)",
        "glow-cyan-lg": "0 0 40px rgba(0,240,255,0.35)",
        "glow-emerald": "0 0 24px rgba(0,255,157,0.25)",
        "glow-violet": "0 0 32px rgba(139,92,246,0.3)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(0,240,255,0.55)" },
          "50%": { opacity: "0.55", boxShadow: "0 0 0 5px rgba(0,240,255,0)" },
        },
        "pulse-glow-emerald": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(0,255,157,0.55)" },
          "50%": { opacity: "0.55", boxShadow: "0 0 0 5px rgba(0,255,157,0)" },
        },
        "ambient-drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(2%, -2%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        scan: "scan 2.4s linear infinite",
        "pulse-glow": "pulse-glow 2.2s ease-in-out infinite",
        "pulse-glow-emerald": "pulse-glow-emerald 2.2s ease-in-out infinite",
        "ambient-drift": "ambient-drift 14s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};

export default config;
