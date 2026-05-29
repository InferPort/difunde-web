/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'oklch(0.97 0.005 350)',
          100: 'oklch(0.93 0.01 350)',
          200: 'oklch(0.88 0.04 350)',
          300: 'oklch(0.78 0.09 350)',
          400: 'oklch(0.68 0.14 350)',
          500: 'oklch(0.58 0.18 350)',
          600: 'oklch(0.50 0.18 350)',
          700: 'oklch(0.42 0.16 350)',
          800: 'oklch(0.34 0.13 350)',
          900: 'oklch(0.26 0.10 350)',
        },
        accent: {
          50: 'oklch(0.96 0.02 260)',
          100: 'oklch(0.92 0.03 260)',
          200: 'oklch(0.84 0.05 260)',
          300: 'oklch(0.72 0.08 260)',
          400: 'oklch(0.58 0.11 260)',
          500: 'oklch(0.45 0.14 260)',
          600: 'oklch(0.38 0.14 260)',
          700: 'oklch(0.32 0.12 260)',
          800: 'oklch(0.26 0.10 260)',
          900: 'oklch(0.20 0.08 260)',
        },
        ink: 'oklch(0.08 0.01 350)',
        muted: 'oklch(0.55 0.02 350)',
        surface: 'oklch(0.97 0.003 0)',
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
      },
      animation: {
        'parallax-slow': 'parallax-slow 1.5s ease-out forwards',
      },
      keyframes: {
        'parallax-slow': {
          '0%': { transform: 'translateY(10vh) scale(0.95)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
