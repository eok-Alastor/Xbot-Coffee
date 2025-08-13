// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-brown': {
          DEFAULT: '#8d6e63',
          dark: '#382e2a',
          text: '#7d6e66',
        },
        'brand-bg': {
          light: '#efebe9',
          warm: '#fdfbf7'
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}