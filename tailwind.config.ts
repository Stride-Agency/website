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
    './app.vue',
    './content/**/*.md',
	],
  prefix: "",
  theme: {
    extend: {
    colors: {
      primary: 'blue',
      neutral: {
        '100': '#D9D9E6',
        '200': '#C9C9DC',
        '300': '#A3A3B8',
        '400': '#090A23',
        '900': '#0E121F',
        DEFAULT: '#050812'
      },
      gray: {
        '600': '#C3C5C9',
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
      ecommerce: {
        DEFAULT: '#198B31'
      },
      software: {
        DEFAULT: '#5786FC'
      },
      'green': {
        '50': '#f0fdf9',
        '100': '#cdfaec',
        '200': '#9bf4da',
        '300': '#61e7c5',
        '400': '#31d0ac',
        '500': '#18b494',
        '600': '#109178',
        '700': '#11474d',
        '800': '#072e30',
        '900': '#144d43',
        '950': '#052e29',
    },
      lime: {
        '50': '#effef3',
        '100': '#d9ffe5',
        '200': '#a6fdc3',
        DEFAULT: '#a6fdc3',
        '300': '#7bfaa7',
        '400': '#3aee79',
        '500': '#11d656',
        '600': '#07b243',
        '700': '#0a8b38',
        '800': '#0e6d30',
        '900': '#0d5a2b',
        '950': '#013214',
    },
      white: {
        '100': '#F1EFFC',
        DEFAULT: '#FFF'
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
      'electric-green': 'linear-gradient(to right, #74E9F1, #22FF52)',
      'light-blue': 'linear-gradient(to right, #9CC2FC, #67C5FA)',
      'hero-light': "url('/images/hero-light.svg')",
      'hero-light-3': "url('/images/hero-light-3.svg')",
      'grid-lines-1': "url('/images/grid-lines-1.png')",
      'stride-footer-font': "url('/images/stride-footer-font.svg')",
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
