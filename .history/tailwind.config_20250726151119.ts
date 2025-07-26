import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // الخطوط العربية
        'tajawal': ['Tajawal', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
        'amiri': ['Amiri', 'serif'],
        'noto': ['Noto Sans Arabic', 'sans-serif'],
        
        // الخطوط الإنجليزية
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        
        // الخط الافتراضي
        'default': ['Tajawal', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
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