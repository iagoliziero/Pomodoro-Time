/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
        sm: '462px', // small screens
        md: '480px', // medium screens
        lg: '1024px', // large screens
        xl: '1280px', // extra large screens
        '2xl': '1536px', // extra extra large screens
      },
    extend: {
      colors: {
        'red-main': '#C73C3C',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], //
      },
    },
  },
  plugins: [],
}