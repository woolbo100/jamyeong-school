import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trueBlack: "#000000",
        softBlack: "#0B0B10",
        champagneGold: "#D6C6A8",
        metalGold: "#C9B37E",
        antiqueGold: "#B08D57",
        // Curriculum Elements
        earth: "#A8947A",
        fire: "#FF5F5F",
        air: "#A8C8EB",
        water: "#89CFF0",
        ether: "#9D50BB",
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
