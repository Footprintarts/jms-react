/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "#1b3e74",
        yellowColor: "#FEB600",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      },
      fontFamily: {
        sans: ["var(--font-default)"], // Default font (Plus Jakarta Sans)
        body: ["var(--font-body)"], // Body font (Poppins)
      },
    },
  },
  plugins: [],
};
