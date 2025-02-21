/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(to right, rgba(220, 252, 231, 0.95), rgba(219, 234, 254, 0.95))',
      },
    },
  },
  plugins: [],
}
