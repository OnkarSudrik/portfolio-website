/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark-theme color palette
        primaryBg: '#1C1C1C',      // Primary background
        secondaryBg: '#2A2A2A',    // Secondary background
        primaryText: '#F2F2F2',    // Primary text
        accent: '#5BCF57',         // Accent color (bright green)
        accentDarker: '#4AA94A',   // Darker variant for hover states
        neutral: '#B3B3B3',        // Supporting neutral for subtext
      },
      fontFamily: {
        // Customize with your preferred fonts
        sans: ['Inter', 'sans-serif'],
        brittany: ['"Brittany Signature"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
