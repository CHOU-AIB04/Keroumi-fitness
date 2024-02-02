/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  theme: {
    screens :{
      tablet : "950px",
      small_tablet : "900px",
      sm : "600px",
      small : "550px",
      md : "800px",
      store : "1050px"
    },
    extend: {},
  },
  plugins: [],
}

