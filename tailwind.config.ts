
import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );

  addBase({
    ':root': newVars,
  });
}
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        float: "float 1.5s ease-in-out infinite",
        aurora:"aurora 60s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        aurora:{
          from:{
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to:{
            backgroundPosition: "350% 50%, 350% 50%"
          }
        },
        spotlight:{
          "0%":{
            opacity: 0,
            tranform:"translate(-72%,-62%) scale(0.5)",
          },
          "100%":{
            opacity: 1,
            transform:"translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

 
