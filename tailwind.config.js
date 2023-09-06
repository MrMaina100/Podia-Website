/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        VeryLightGray: '#fdfbf9',
        BrightPurple: '#4b2aad',
        lightPurple: '#9484c6',
        DarkPurple: '#201445',
        Creamy: '#f5efeb'
      },
      fontFamily:{
        sans:['inter', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}
