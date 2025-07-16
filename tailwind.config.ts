import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // lamaSky: "#C3EBFA",
        // lamaSkyLight: "#EDF9FD",
        // lamaPurple: "#CFCEFF",
        // lamaPurpleLight: "#F1F0FF",
        // lamaYellow: "#FAE27C",
        // lamaYellowLight: "#FEFCE8",
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#d4a373",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#d4a373",
        lamaYellowLight: "#d4a373",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
