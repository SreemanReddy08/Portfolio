/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        freedom:['"Forever italic Outline"', 'sans-serif'],
        freedomregular:['"Forever regular"', 'sans-serif']

      }
    },
  },
  plugins: [],
}