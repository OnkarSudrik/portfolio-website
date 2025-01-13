/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: '#181a1b',
          lighter: '#242424',
        },
        light: {
          DEFAULT: '#e8e6e3',
          darker: '#848484',
        },
        accent: '#67fd67',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.75)',
        'lifted': '0 0 64px -10px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
}