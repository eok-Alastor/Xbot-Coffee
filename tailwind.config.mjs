// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-brown': {
          DEFAULT: '#8d6e63', // 品牌主色
          dark: '#382e2a',   // 标题棕
          text: '#7d6e66',   // 副标题棕
        },
        'brand-bg': {
          light: '#efebe9',  // 浅背景
          warm: '#fdfbf7'    // 温暖米白
        }
      },
      fontFamily: {
        // 将 Inter 和 Noto Sans SC 设置为默认字体
        sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}