import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
      // padding: {
      //   DEFAULT: '1rem',
      //   sm: '1rem',
      //   md: '2rem',
      //   lg: '4rem',
      //   xl: '5rem',
      //   '2xl': '3.1875rem',
      // },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#101010',
        secondary: '#ff4e25',
        white: '#fdfdfd',
        complimentary: '#2F2F2F',
        gray: '#383838',
      },
      lineHeight: {
        chill: '1.5',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        merriweather: ['var(--font-merriweather)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
