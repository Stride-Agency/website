import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      // color shades generator: https://uicolors.app/create
      colors: {
        primary: 'blue',
        neutral: {
          '100': '#D9D9E6',
          DEFAULT: '#050812'
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
      animation: {
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

