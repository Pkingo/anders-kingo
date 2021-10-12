module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          greek: "#0d5eaf",
        },
      },
      width: {
        main: "60rem",
      },
    },
  },
  variants: {
    display: ["group-hover"],
    extend: {},
  },
  plugins: [],
}
