/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "././pages/**/*.{html,js}",
    "././components/**/*.{html,js}",
    "././core/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      "space-grotesk": ["Space Grotesk", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-light": "#F4F5F0",
        "secondary-light": "#FAFAF8",
        "ternary-light": "#EBEDE3",

        "primary-dark": "#0C0F0A",
        "secondary-dark": "#151911",
        "ternary-dark": "#20261A",

        // Premium Theme (Editorial Engineering)
        premium: {
          bg: "var(--premium-bg)",
          surface: "var(--premium-surface)",
          "surface-high": "var(--premium-surface-high)",
          primary: "var(--premium-primary)",
          secondary: "var(--premium-secondary)",
          accent: "var(--premium-accent)",
          text: "var(--premium-text)",
          "text-muted": "var(--premium-text-muted)",
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  customUtilities: {},
  plugins: ["@tailwindcss/forms"],
};
