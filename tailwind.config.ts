import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Enhanced vibrant Web3 color palette
        "rich-black": "#080B14", // Darker blue-black for depth
        "deep-red": "#FF3A5E", // More vibrant red
        "warm-yellow": "#FFD60A", // Brighter yellow
        "cinematic-blue": "#00B4FF", // Vibrant light blue
        "cool-gray": "#C5D1EB", // Lighter blue-tinted gray
        "neon-purple": "#9D4EDD", // Vibrant purple for accents
        "neon-green": "#00FF94", // Bright green for highlights
        "cyber-pink": "#FF00E5", // Vibrant pink for accents
        "timeline-blue": "#36BFFA", // Light blue for timeline
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glow: {
          "0%, 100%": {
            textShadow:
              "0 0 15px rgba(0, 180, 255, 0.7), 0 0 30px rgba(0, 180, 255, 0.5), 0 0 45px rgba(0, 180, 255, 0.3)",
          },
          "50%": {
            textShadow:
              "0 0 20px rgba(0, 180, 255, 0.9), 0 0 40px rgba(0, 180, 255, 0.7), 0 0 60px rgba(0, 180, 255, 0.5)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "0.7",
            boxShadow: "0 0 15px rgba(0, 180, 255, 0.7), 0 0 30px rgba(0, 180, 255, 0.4)",
          },
          "50%": {
            opacity: "1",
            boxShadow: "0 0 30px rgba(0, 180, 255, 0.9), 0 0 60px rgba(0, 180, 255, 0.6)",
          },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "40% 60% 30% 70% / 60% 40% 70% 30%" },
          "75%": { borderRadius: "40% 60% 70% 30% / 30% 40% 40% 70%" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glow: "glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        morph: "morph 8s ease-in-out infinite",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0, 180, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 180, 255, 0.1) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle, rgba(0, 180, 255, 0.2) 0%, rgba(8, 11, 20, 0) 70%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
