module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: "#192F72",
        },
        gray: {
          100: "#F9F9F9",
          200: "#E5E5E7",
        },
        purple: {
          100: "#A3A1AB",
        },
      },
    },
  },
  plugins: [],
};
