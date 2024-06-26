/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px ",
      },
      colors: {
        primaryColor: "#006769",
        secondaryColor: "#40A578",
        textRed: "#FF0000",
        dark: {
          primary: "#333", // Define your dark mode colors
          secondary: "#555",
        },
      },
      fontFamily: {
        titleFont: "Poetsen One",
        bodyFont: "Roboto",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
