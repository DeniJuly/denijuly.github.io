module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#0779E4",
        secondary: "#FCBF1E",
        black: "#333333",
        "light-primary": "#EDF6FF",
        "light-secondary": "#FFF6DE",
        "dark-black": "#222831",
        "dark-black-light": "#393E46",
        "dark-black-light-2": "#73777C",
        "card-project":
          "linear-gradient(123.01deg, #0779E4 -1.08%, rgba(255, 255, 255, 0) 30.59%),linear-gradient(297.91deg, #0779E4 -2.83%, rgba(255, 255, 255, 0) 57.85%)",
      },
      fontFamily: {
        quicksand: ["'Quicksand', sans-serif"],
      },
      boxShadow: {
        "3xl": "0px 10px 30px rgba(0,0,0,0.03)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
