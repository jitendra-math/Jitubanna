// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],

  darkMode: ["class", '[data-theme="dark"]'],

  theme: {
    extend: {
      maxWidth: {
        mobile: "480px"
      },

      borderRadius: {
        sm: "10px",
        md: "16px",
        lg: "24px",
        xl: "32px"
      },

      colors: {
        primary: "#7c5cff",
        cyan: "#16d6ff",
        pink: "#ff5caa",
        blue: "#3a8dff",
        orange: "#ff8b3d",
        emerald: "#22d3a6"
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg,#7c5cff,#3a8dff)",
        "gradient-cyan": "linear-gradient(135deg,#16d6ff,#3a8dff)",
        "gradient-sunset": "linear-gradient(135deg,#ff5caa,#ff8b3d)",
        "gradient-neon": "linear-gradient(135deg,#22d3a6,#16d6ff)"
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        medium: "0 20px 50px rgba(0,0,0,0.15)",
        glow: "0 0 40px rgba(124,92,255,0.35)"
      },

      backdropBlur: {
        glass: "16px"
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22,1,0.36,1)"
      },

      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "blob-float": "blobFloat 10s ease-in-out infinite"
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },

        blobFloat: {
          "0%": {
            transform: "translate(0,0) scale(1)"
          },
          "50%": {
            transform: "translate(20px,-20px) scale(1.05)"
          },
          "100%": {
            transform: "translate(0,0) scale(1)"
          }
        }
      }
    }
  },

  plugins: []
};