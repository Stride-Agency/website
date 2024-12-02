import { darkMode } from "#tailwind-config"

const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
    './app.vue'
	],
  prefix: "",
  theme: {
    extend: {
    colors: {
      primary: 'blue',
      neutral: {
        '100': '#D9D9E6',
        DEFAULT: '#050812'
      },
      gray: {
        '700': '#2A2D33',
        '800': '#A4A8AF'
      },
      purple: {
        '50': '#f2f2ff',
        '100': '#e8e9ff',
        '200': '#d4d6ff',
        '300': '#7159EE',
        '400': '#8885ff',
        '500': '#6154fe',
        '600': '#482DD6',
        '700': '#4426DF',
        '800': '#3319b9',
        '900': '#2d179b',
        '950': '#180c69',
        DEFAULT: '#3319B9'
      },
      white: {
        DEFAULT: '#F1EFFC'
      }
    },
    fontFamily: {
      primary: ['Aeonik'],
    },
    fontSize: {
      '6xl': ['4rem', {
        lineHeight: '4rem',
        letterSpacing: '-0.04rem'
      }]
    },
    backgroundImage: {
      'text-highlight-1': 'linear-gradient(to right, #42C4EF, #5DA7FF, #A073FF, #BF56FD, #DF00F9)',
      'hero-light': "url('/images/hero-light.svg')"
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: 0 },
      },
      grid: {
        "0%": { transform: "translateY(-50%)" },
        "100%": { transform: "translateY(0)" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      grid: "grid 15s linear infinite",
    },
  },
  },
  plugins: [animate],
}
