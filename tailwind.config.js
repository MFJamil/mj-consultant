/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'selector',
  theme: {
    
    extend: {
      transitionDuration:{
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms',
      },
      colors: {
        /*
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
        "teto": "#00AACC",
        */
        "weather-primary": "#FFFFFF",
        "weather-secondary": "#004E71",

      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      container: {
        padding: "2rem",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
  },
  plugins: [],
}

