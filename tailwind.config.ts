import { Config } from "tailwindcss";
import twTypography from "@tailwindcss/typography";

export default <Partial<Config>>{
  mode: "jit",
  content: [
    // scan .src*
    "./src/**/*.{html,ts,js,jsx,tsx}",
    // scan .docs*
    "./docs/www/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#002480",
          50: "#0041e6",
          100: "#003acf",
          200: "#0034b8",
          300: "#002da2",
          400: "#00278b",
          500: "#002074",
          600: "#001a5e",
          700: "#001347",
          800: "#000d30",
          900: "#00071a",
        },
        secondary: {
          DEFAULT: "#495174",
          50: "#8998da",
          100: "#7a88c3",
          200: "#6c78ac",
          300: "#5e6896",
          400: "#50587f",
          500: "#414968",
          600: "#333952",
          700: "#25293b",
          800: "#171924",
          900: "#090a0e",
        },
        tertiary: {
          DEFAULT: "#ffb600",
          50: "#ffb600",
          100: "#e6a400",
          200: "#cd9200",
          300: "#b48000",
          400: "#9b6e00",
          500: "#825d00",
          600: "#694b00",
          700: "#503900",
          800: "#372700",
          900: "#1f1600",
        },
        error: {
          DEFAULT: "#93000a",
          50: "#f90011",
          100: "#e2000f",
          200: "#cb000d",
          300: "#b5000c",
          400: "#9e000a",
          500: "#870009",
          600: "#710007",
          700: "#5a0006",
          800: "#430004",
          900: "#2d0003",
        },
      },
    },
  },
  plugins: [twTypography],
};
